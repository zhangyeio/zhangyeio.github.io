---
layout: post
title: "从聊天机器人到 Harness：用 DeepSeek 搭一个可验证的 Agent Loop"
date: 2026-09-22 15:50:00 +0800
categories:
  - 人工智能
  - 软件工程
tags:
  - DeepSeek
  - AI Agent
  - Harness
  - Tool Calls
  - Agent Loop
  - 可观测性
---

![Harness Engineering 动手实验封面](/assets/images/deepseek-harness-lab/cover.png)

> 模型决定智能的上限，Harness 决定智能能否稳定进入真实世界。

很多人第一次接触 Agent，会把它理解成“会调用函数的聊天机器人”。这不算错，但少了最重要的一层：**函数调用只是模型提出的请求，真正让任务可靠完成的是模型之外的执行系统。**

这篇文章从一个退款查询开始，逐步搭出最小 Agent Loop，再加入 Session、Tools、Hook 和 Evaluation，最后把同一套结构用于支付故障排查。

全文面向初学者，但会刻意保留工程边界。文中的 `MiniKernel`、`SessionPlugin`、`ToolPlugin` 等都是为了讲清原理而写的教学实现，**不是 DeepSeek Harness SDK 的正式 API，也不是可直接投入生产的框架**。

你可以先读文章理解主线，再下载完整 Notebook 动手运行：

- [下载修订版 Notebook](/assets/downloads/deepseek-harness-live-model-lab.ipynb)
- 默认 `mock` 模式无需 API Key，也不会发送网络请求
- `live` 模式才会连接 DeepSeek API；请勿放入真实订单、隐私数据或生产凭据

## 先认识五个词

把 Agent 想象成“做一顿晚饭”，会比背术语容易得多。

| 概念 | 晚饭类比 | 工程含义 |
|---|---|---|
| 模型 | 会想菜的人 | 根据当前信息判断下一步，但不能凭空访问外部系统 |
| 工具 | 打开冰箱的手 | 由应用提供、受权限控制的外部能力 |
| Context | 冰箱上的便签 | 当前请求中模型能够看到的消息与工具结果 |
| Loop | 看完一样再决定下一步 | 请求模型、执行工具、写回结果、再次请求 |
| Agent | 完整做饭过程 | 模型、工具、状态和循环共同构成的任务执行系统 |

![模型、工具、Context、Loop 与 Agent 的关系](/assets/images/deepseek-harness-lab/00-five-words.svg)

最值得记住的是：**Agent 不是某一次模型调用，而是工具结果能够改变下一步的完整循环。**

## 从“回答问题”到“根据事实行动”

假设任务是：

> 检查订单 A1024 为什么退款失败，并给出下一步建议。

如果只把这句话发给模型，它最多只能根据常识猜测。要得到可靠答案，应用至少需要完成三次查询：

| 已执行动作 | 新事实 | 下一步问题 |
|---|---|---|
| 读取订单 | 退款状态为失败 | 原支付交易是什么状态？ |
| 查询支付 | 原交易仍在处理中 | 处理中是否允许退款？ |
| 查询规则 | 处理中不可退款 | 证据是否足以给出建议？ |

这条链路的重点不在于“恰好调用了三个函数”，而在于：**每个工具结果都缩小了问题范围，并改变了后续决策。**

## Tool Calls 只是申请，不是执行

工具通常有两张“脸”：

1. 给模型看的 Schema，说明工具叫什么、何时使用、参数是什么；
2. 给应用执行的函数，真正访问数据库、接口或运行环境。

```python
def make_schema(name, description, properties):
    return {
        "type": "function",
        "function": {
            "name": name,
            "description": description,
            "parameters": {
                "type": "object",
                "properties": properties,
                "required": list(properties),
                "additionalProperties": False,
            },
        },
    }
```

![Tool Calls 从申请到执行再返回 Context](/assets/images/deepseek-harness-lab/02-function-calling-roundtrip.svg)

模型收到 Schema 后，可以返回工具名和 JSON 参数；但它不会因此自动执行 Python 函数。应用仍然必须：

1. 检查工具是否在允许名单中；
2. 解析并验证参数；
3. 检查当前身份、权限和风险级别；
4. 执行工具并处理超时或异常；
5. 把结果作为 `role=tool` 消息写回 Context。

DeepSeek 官方文档也明确说明：模型返回函数调用后，实际函数能力仍由调用方提供，模型本身不会执行函数。

### Schema 严格，不等于 strict mode 已开启

示例把所有属性列为必填，并设置 `additionalProperties: false`。这有助于应用侧校验，但不要把它误解成 DeepSeek API 已启用服务端 strict mode。

DeepSeek 当前的 strict mode 仍是 Beta 能力，需要使用 Beta 地址，并在每个函数定义中显式设置 `strict: true`。即使启用服务端约束，应用仍应把模型输出视为不可信输入，继续做权限、业务规则和副作用检查。

## 最小 Agent Loop 怎样闭合

Tool Calls 解决的是“模型怎样表达调用意图”；Agent Loop 解决的是“工具结果怎样推动下一步”。

![Agent Loop 中模型、工具执行与 Context 更新的循环](/assets/images/deepseek-harness-lab/03-agent-loop.svg)

最小循环可以概括为：

```text
请求模型
  ↓
模型返回工具申请？ ── 否 ──→ 返回最终答案
  ↓ 是
校验并执行工具
  ↓
把工具结果写回 Context
  └────────────────────→ 再次请求模型
```

教学代码的核心骨架只有这些：

```python
for step in range(1, max_steps + 1):
    message = ask_model(messages, schemas)
    messages.append(message.model_dump(exclude_none=True))

    if message.tool_calls:
        for call in message.tool_calls:
            arguments = json.loads(call.function.arguments or "{}")
            result = execute_tool(
                registry,
                call.function.name,
                arguments,
                schemas,
            )
            messages.append({
                "role": "tool",
                "tool_call_id": call.id,
                "content": json.dumps(result, ensure_ascii=False),
            })
        continue

    return message.content
```

这里有两个容易忽略的事实：

- `max_steps` 是必要的故障边界，否则模型可能重复调用或一直无法收敛；
- 工具执行失败也应作为结构化结果写回，让模型能够修正参数或更换路径，而不是假装调用成功。

## 为什么裸 Loop 还不够

上面的循环已经算 Agent，但它有一个明显弱点：**只要模型停止返回 Tool Calls，程序就接受文字答案并结束。**

假如模型只读了订单，便回答“可能是银行问题，建议稍后再试”，语言上听起来合理，证据却不完整。把“请先查清楚”写进 Prompt 只能影响模型，不能形成系统保证。

这正是 Harness 要解决的问题。

![教学版 Harness 的五个组件](/assets/images/deepseek-harness-lab/05-harness-components.svg)

| 层 | 职责 | 不能替代什么 |
|---|---|---|
| Session | 记录本次运行的输入、调用、结果和结束原因 | 不替代业务数据库，也不自动等于持久化审计系统 |
| Tools | 注册 Schema 与执行函数，统一校验和记账 | 不应让模型直接绕过入口调用业务能力 |
| Loop | 驱动模型与工具往返，限制步数并处理错误 | 不负责判断业务证据是否足够 |
| Hook | 在运行中检查能否继续或结束 | 不等于全面的答案质量评估 |
| Evaluation | 运行后评估过程和结果 | 不应直接控制高风险副作用 |

### Session：Context 与可信记录不是一回事

模型看到的 `messages` 是 Context；应用自己的事件记录是 Session 流水账。两者用途不同：

- Context 为下一轮推理服务，可能被裁剪、压缩或重写；
- Session 为回放与审计服务，应记录真实发生的工具调用和结果。

![模型 Context 与 Session 流水账的区别](/assets/images/deepseek-harness-lab/06-messages-vs-session.svg)

Notebook 中的 Session 只是按 `run_id` 隔离的内存列表，适合教学，却不具备持久化、并发控制、防篡改或跨进程恢复能力。生产系统至少还要考虑存储、保留策略、敏感字段脱敏和访问审计。

### Tools：权限必须写在执行路径里

Prompt 中写“退款金额超过 1000 元请谨慎”，只是提醒模型。真正的控制应放在 Tools 层，例如：

```text
模型申请
  → Schema 与参数校验
  → 身份与权限检查
  → 金额/范围/幂等规则
  → 必要时人工审批
  → 执行
  → 记录结果
```

只读查询和写操作也不应使用同一套默认权限。真实系统应默认最小权限，并对退款、删除、发布、转账等副作用设置更严格的确认与幂等机制。

### Hook：把停止权收回系统

退款任务可以先写出完成清单：

- 已读取订单 A1024；
- 已查询 A1024 的原支付状态；
- 已核对“处理中退款”的业务规则；
- 三项工具调用都成功，参数与关键返回字段符合预期。

模型提交答案时，Hook 不评价文笔，而是检查当前 `run_id` 的证据是否齐全。缺少任意一项，就把缺口写回 Context，让模型继续。

```text
模型：我想提交答案。
Hook：还缺支付状态和退款规则，不能结束。
模型：继续调用工具补齐证据。
```

这比“请务必检查完整”更可靠，因为停止条件由确定性代码执行。

### Evaluation：通过门禁，不代表答案优秀

Hook 回答“是否允许结束”；Evaluation 回答“这次运行质量如何”。

![Hook 与 Evaluation 的职责区别](/assets/images/deepseek-harness-lab/07-hook-vs-evaluation.svg)

教学版可以检查：是否查齐必需工具、是否引用关键证据、是否加入工具未返回的时长承诺。生产评估还应覆盖事实一致性、引用可追溯性、异常路径、重复运行稳定性和人工标注样本。

## 把同一套 Harness 用于支付排障

第二个案例不修改 Loop，只替换工具、完成标准和评估规则。任务变成：

> 线上支付成功率突然下降，找出原因并给出证据充分的结论。

![支付故障的六项证据链](/assets/images/deepseek-harness-lab/08-incident-evidence-chain.svg)

证据链分为三个阶段：

1. **确认影响**：成功率从 98.7% 降到 91.4%，具体超时发生在哪里；
2. **定位与反证**：按版本和路由切片、比较配置、检查第三方状态；
3. **验证修复**：查询回滚后的指标是否恢复。

最终得到的教学结论是：v2.3.7 的新路由读取了错误的重试目标，将请求指向已限流端点，超时后的重试又放大了流量；第三方状态和备用通道正常，回滚后成功率恢复到约 98%。

这个案例刻意把 `verify_rollback` 设计成**查询已经发生的回滚结果**，而不是让 Agent 自己执行回滚。原因很简单：诊断权限不应自动扩大成变更生产环境的权限。

回滚后恢复会明显增强因果解释，但单次前后对比仍不是绝对证明。真实事故复盘还应结合变更时间线、对照组、日志、配置审计和可能的共同变量。

## 本次专业审校修改了什么

与原 Notebook 相比，发布版做了以下调整：

1. **更新模型名。** DeepSeek 当前推荐使用 `deepseek-flash`；旧的 `deepseek-v4-flash` 虽仍可接受，但对应模型已经退役，请求会路由到后续 Flash 模型。
2. **澄清 strict mode。** `required` 和 `additionalProperties: false` 不等于已启用服务端 strict mode，应用侧校验不能省略。
3. **修正 Python 类型边界。** `bool` 是 `int` 的子类，因此整数和数字参数都应显式拒绝布尔值。
4. **降低“可信流水账”的歧义。** 教学版只是在当前进程中记录真实执行事件，不具备生产审计存储的持久性和防篡改能力。
5. **补充异常信息风险。** 示例为了便于学习会把异常类型和文本写回模型；生产环境应先脱敏，避免暴露路径、SQL、凭据或内部拓扑。
6. **明确证据门禁的局限。** “调用过正确工具”不等于“最终答案一定忠实”，仍需结果级评估与引用校验。
7. **加强副作用边界。** 查询、回滚验证与真正执行回滚是三种不同权限，不应仅靠 Prompt 区分。

## 与官方 DeepSeek Harness 的关系

本文实现的是一个用来理解原理的微型教学 Harness，没有直接调用官方 DeepSeek Harness。

官方项目采用插件化架构，核心能力包括 Session 事件日志、系统提示组装、工具注册与受控执行、Agent 服务和默认 Agent Loop，并提供文件系统、Shell、沙箱、Web UI、子 Agent 等扩展能力。官方项目目前仍处于开发者预览阶段，明确提示可能发生不兼容变更，也说明尚未经过安全审计，不应被当作安全或生产就绪的软件。

这并不削弱它的学习价值，反而说明理解 Harness 的核心边界很重要：

- 模型负责基于当前证据提出下一步；
- 应用负责权限、执行、状态和失败边界；
- Harness 负责让这些部分以可回放、可验证的方式协作。

## 最后记住三句话

> **Agent 不是一次模型调用，而是一个由结果推动下一步的循环。**

> **Tool Calls 是调用申请，真正执行工具的是模型外面的程序。**

> **Harness 决定模型看到什么、能做什么、何时继续或停止，以及如何记录和验收。**

以后评审 Agent 项目时，不妨先问三个问题：

1. 怎样才算做完，停止条件由谁执行？
2. 调用了什么、返回了什么、属于哪次运行，能否回放？
3. 最终答案中的关键事实，能否追溯到具体证据？

不要只问“模型能不能做”，还要问：**系统能不能让它可靠、可控地做完。**

## 参考资料

- [DeepSeek API：Your First API Call](https://api-docs.deepseek.com/)
- [DeepSeek API：Tool Calls](https://api-docs.deepseek.com/guides/tool_calls/)
- [DeepSeek Harness 源代码与开发者预览说明](https://github.com/deepseek-ai/deepseek-harness)
- [DeepSeek Harness 架构文档](https://deepseek-harness.github.io/deepseek-harness/en/reference/)
- [DeepSeek Harness 安全说明](https://github.com/deepseek-ai/deepseek-harness/blob/master/SAFETY.md)
