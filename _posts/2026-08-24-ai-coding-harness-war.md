---
layout: post
title: "AI Coding 的下一场战争，不是模型战争，而是 Harness 战争"
date: 2026-08-24 22:36:00 +0800
categories:
  - 人工智能
  - 软件工程
tags:
  - AI Coding
  - Coding Agent
  - Harness Engineering
  - MCP
  - Agent
  - 软件工程
---

过去两年，AI 编程行业几乎一直围绕一个问题竞争：

**谁的模型更会写代码？**

GPT、Claude、Gemini，以及各种针对 Coding 优化的模型不断刷新 benchmark。SWE-bench 提升几个百分点，上下文窗口扩大一倍，推理能力更强，一次能修改更多文件，都会成为新的竞争焦点。

但到了今天，一个越来越明显的变化正在发生：

**模型能力依然重要，但它已经不足以解释一个 Coding Agent 到底好不好用。**

最近围绕 MCP、AGENTS.md、Skills、Sandbox、Memory、Worktree、Agent Loop、Multi-Agent、Vibe Tax 等概念的讨论突然密集出现，看起来像一堆彼此独立的新名词。

实际上，它们都指向同一个趋势：

> **AI Coding 的竞争重心，正在从 Model Engineering 转向 Harness Engineering。**

下一场 AI 编程战争，很可能不只是 GPT 和 Claude 谁更聪明，而是谁能给模型构建出一套更好的工作环境。

而这套环境，就是 Harness。

## 模型越来越强，为什么 Coding Agent 仍然经常“不好用”？

如果只是让模型完成一道编程题，模型能力几乎决定了一切。

比如：写一个 Python 快速排序函数。

这是一个典型的单轮生成任务：输入、推理、输出代码。

但真实的软件开发显然不是这样。

一个真正的工程任务更可能是：

> 检查一个拥有数百万行代码的项目，找出订单服务延迟升高的原因，修改相关模块，补充测试，确保不影响支付流程，运行 CI，最后提交一个可以 Review 的 PR。

这时候模型面对的已经不是一道“写代码题”，而是一整套复杂的软件工程活动。

它需要理解需求，探索代码仓库，找到相关文件，理解架构关系，制定修改方案，调用工具，编辑代码，执行测试，分析报错，重新修改，检查 Git Diff，最后确认任务是否真正完成。

问题因此发生了变化。

以前我们问：

> 模型会不会写？

现在真正应该问的是：

> **模型能不能在一个真实的软件工程环境里持续工作？**

而后一个问题，答案越来越不取决于模型本身。

## 什么是 Harness？

Harness 目前还没有一个完全统一的定义，但理解它其实并不困难。

可以做一个简单的思想实验：

> **把 Coding Agent 里的大模型拿掉，剩下的那一整套东西，大体就是 Harness。**

因此，可以把一个 Agent 简化成：

```text
Agent = Model + Harness
```

模型提供智能。

Harness 则负责把这种智能转化为可以执行的行为。

一个成熟的 Coding Harness，通常会包含 Context、Tools、MCP、Skills、Memory、Agent Loop、Sandbox、Permissions、Git、Worktree、Testing、Verification、Recovery、Multi-Agent 等一整套系统能力。

两者的区别可以用一句话概括：

**Model 决定 Agent 能想到什么。**

**Harness 决定 Agent 能看到什么、能做什么、怎么验证、失败以后怎么办。**

这正是理解下一阶段 AI Coding 的关键。

## 模型越来越像 CPU，Harness 越来越像操作系统

如果要找一个传统计算机领域的类比，我认为最接近 Harness 的不是应用程序，而是操作系统。

CPU 决定计算能力。

但把一块裸 CPU 放在桌子上，它几乎什么都做不了。

真正让 CPU 成为一台可以工作的计算机的，是它周围的大量系统：文件系统、进程调度、内存管理、网络、驱动、权限、Shell、系统调用。

大模型也正在经历类似的过程。

模型本身提供的是某种“通用认知能力”。

但模型天然不知道代码放在哪里，哪些文件可以修改，哪些命令可以执行，哪个数据库可以访问，测试应该怎么跑，什么样的结果算完成，什么时候应该停止，做错了以后怎样恢复。

这些都需要 Harness 提供。

所以未来我们可能越来越应该这样理解 AI Agent：

```text
Model ≈ CPU
Harness ≈ Operating System
```

如果这个类比成立，一个非常重要的结论也随之出现：

> **未来单纯比较模型 benchmark，会越来越难预测 Agent 在真实世界中的工作表现。**

同一个模型，运行在不同 Harness 里，最终效果可能完全不同。

## MCP 的真正意义：给 Agent 安上“手”

为什么 MCP 会突然成为 AI Agent 领域最热门的概念之一？

表面上看，它解决的是 AI 如何调用外部工具。

但从 Harness 的角度看，它解决的是一个更加基础的问题：

> **模型如何从“会思考”变成“能行动”。**

模型本身并不知道 GitHub、数据库、Jira、CI/CD、浏览器或者企业内部系统。

模型可以推理出：我应该检查最近一次 deployment。

但真正读取 deployment 信息的，并不是模型。

模型负责判断下一步应该做什么。

Harness 负责决定有没有这个工具，是否允许使用，如何调用，返回什么信息，调用失败以后怎么办。

而 MCP 的价值，在于让不同工具能够以越来越统一的方式接入 Agent。

因此，MCP 的重要性并不只是“API 标准化”。

它实际上在逐渐形成 **AI Agent 世界的能力接口层**。

## AGENTS.md 为什么比想象中更重要？

另一个很有意思的趋势，是越来越多 Coding Agent 开始重视 AGENTS.md、CLAUDE.md、Skills、Rules、Instructions 这样的机制。

它们背后其实对应的是一个非常重要的问题：

> Agent 应该怎样理解一个大型代码库？

过去大家最直接的想法是：把更多代码塞给模型。

模型上下文窗口从几万 token 扩大到几十万甚至更多以后，这种思路一度非常流行。

但很快人们发现：

**Context 越多，不代表效果越好。**

因为真正有价值的问题不是 Agent 能看到多少信息，而是：

> **Agent 能不能在正确的时间看到正确的信息？**

于是 Context 本身开始变成一种工程问题。

过去一个代码仓库主要包含 `src`、`tests`、`README`。

未来一个 Agent-friendly 的代码仓库，很可能还会包含 `AGENTS.md`、`architecture`、`docs`、`skills`、`scripts`、`policies` 等内容。

这意味着一个非常重要的变化正在发生：

> **Repository 不再只是保存代码，也开始保存“如何理解和操作这些代码”的知识。**

过去我们评价一个代码库，会问：新员工加入以后，需要多久才能理解这个系统？

未来可能增加一个新的指标：

> 一个陌生 Agent 进入这个 Repository，需要多久才能安全完成第一个任务？

这可以称为 **Agent Readability**。

它很可能逐渐成为软件工程质量的一部分。

## AI Agent 需要的可能不是更多指令，而是更好的环境

AI Agent 早期有一种非常自然的工程思路：

模型不稳定，那就给它写更多 Prompt。

于是很多 Agent 系统开始出现非常长的 instruction：第一步分析需求，第二步阅读代码，第三步制定计划，第四步修改文件，第五步运行测试，第六步检查结果。

然后再加几十条规则：不要做 A，必须做 B，如果发生 C，就执行 D。

最后 system prompt 越来越像一本操作手册。

但随着 frontier model 的推理能力提高，一个新的问题出现了：

> 是不是规则写得越多，Agent 就越好？

答案可能并不是。

过度 prescriptive 的 instructions 很容易产生三个问题。

第一，占用 Context。

第二，让模型把注意力花在遵守流程，而不是解决问题。

第三，人类提前写死的工作流，未必比模型根据现场情况自主规划更好。

因此 Harness 设计正在逐渐出现另一种思想：

与其告诉 Agent 第一步做什么、第二步做什么、第三步做什么，不如提供 **Tools、Environment、Guardrails 和 Feedback**。

例如：可以读代码，可以编辑 branch，可以运行测试，不能访问生产数据库，修改完成必须通过 CI，安全模块需要人工审批，失败可以继续迭代。

然后让模型自己决定先读哪个文件，先跑什么命令，如何拆解任务，如何修复失败。

这其实是一种非常典型的工程思想：

> **给能力，给边界，给反馈，而不是把所有行为路径写死。**

如果这个趋势继续发展，那么过去几年大家熟悉的 Prompt Engineering，可能正在经历一次连续升级：

```text
Prompt Engineering
        ↓
Context Engineering
        ↓
Harness Engineering
```

## 为什么 AI 越会写代码，测试反而越重要？

这是 AI Coding 最容易被低估的一点。

假设一个程序员一天写 300 行代码。

另外一个人 Review 300 行代码，并不困难。

但如果未来 10 个 Agent 一个晚上修改 30 个模块，生成 15000 行 Diff，第二天让一个工程师逐行 Review，基本不现实。

于是 AI Coding 出现一个非常重要的悖论：

> **代码生产成本越低，代码验证成本反而越容易成为新的瓶颈。**

这也是为什么 Harness 的核心能力之一，一定会是 Verification。

真正好的 Coding Agent 不能只说：我已经完成任务。

而应该能够经过一套机器可执行的验证：单元测试、集成测试、类型检查、Lint、安全扫描、性能测试、Agent Review，最后再进入 Human Review。

从这个角度看，TDD 在 Agent 时代甚至可能重新获得比过去更高的价值。

因为测试第一次拥有了另一层含义：

> **它不仅是为了帮助程序员发现 Bug，也是给 Agent 提供机器可读的任务定义。**

比如，“支付接口必须支持幂等”对人类来说很好理解。

但对于 Agent 来说，如果能够进一步变成自动化测试，它才真正成为可以执行和验证的 specification。

所以未来最适合 Agent 工作的软件系统，不一定是代码最漂亮的系统。

而可能是：

> **反馈回路最完整、验证能力最强的系统。**

## Git Worktree 的重新流行，暴露了真正的工程问题

当一个 Coding Agent 已经可以独立完成任务以后，一个非常自然的问题就会出现：

> 为什么只运行一个 Agent？

于是开发者开始尝试：Agent A 修改后端，Agent B 修改前端，Agent C 写测试，Agent D 修 Bug，Agent E 做 Review。

但只要真正跑起来，马上会遇到问题：

> 五个 Agent 同时修改一个工作目录怎么办？

这也是为什么一个已经存在很多年的 Git 功能重新获得关注：**git worktree**。

一种最简单的方式，是为每个 Agent 提供独立 workspace。

每个 Agent 分别修改、测试、commit，最后再 merge。

注意这个变化。

问题已经完全不再是模型会不会写代码，而变成：

> **多个智能执行单元怎样安全并行工作？**

接下来系统自然就需要任务队列、workspace isolation、dependency management、locking、conflict detection、retry、rollback、merge、review。

这越来越像什么？

不是聊天机器人。

而是操作系统、分布式系统和 CI/CD。

## Memory 真正应该保存的不是聊天，而是经验

Agent Memory 也是一个经常被误解的概念。

很多产品所谓的 Memory，本质上只是保存之前的聊天记录。

但对于 Coding Agent 来说，真正有价值的 Memory 应该保存的是 **工程经验**。

假设一个 Agent 修改支付系统时忘记考虑 idempotency。

工程师指出：所有支付接口必须支持重复请求保护。

这次 Agent 修好了。

问题是，下一次呢？

如果 Harness 足够成熟，这条经验应该被沉淀到项目规则、Skill 或长期 Memory 中。

下一次任何 Agent 修改支付模块时，都应该自动获得这条知识。

于是一个非常重要的变化出现了。

传统组织的知识学习过程通常是：

```text
事故 → 复盘 → 写 Wiki → 很少有人看 → 半年后再犯一次
```

Agent-native 的组织则可能变成：

```text
事故 → 复盘 → 更新 Harness → 所有 Agent 自动继承
```

这时候 Harness 已经不只是技术工具。

它开始成为 **组织记忆的载体**。

未来企业的重要技术资产，很可能不仅是代码和数据。

还包括一套不断吸收工程经验的 Harness。

## Sandbox 和权限，决定 Agent 能不能真正进入企业

个人开发者使用 AI Coding 时，很容易忽略一个问题：权限。

很多 Demo 默认 Agent 可以执行 Shell、安装依赖、修改文件、访问网络、使用 Git、调用 API。

个人电脑上也许可以接受。

但一旦 Agent 进入企业环境，它连接的可能是 GitHub、AWS、Kubernetes、Database、CI/CD、Internal API，甚至生产环境。

问题立即发生变化。

企业真正关心的已经不只是：AI 能不能完成任务？

而是：

> **AI 应该被允许完成哪些任务？**

例如：可以读 Repository，可以编辑 Branch，可以运行测试，可以创建 PR；Merge PR 也许需要审批，部署到测试环境可能需要审批，部署生产环境则默认禁止，读取 Secret、删除数据库更不可能开放。

这时候 Coding Agent 的工程问题已经和传统企业安全体系开始汇合：IAM、Zero Trust、Policy Engine、Audit、Approval Flow。

因此未来企业采购 Coding Agent 时，很可能会越来越少只问：你底层用什么模型？

而越来越多问：

Agent 可以访问什么？

谁授权的？

做了什么？

有没有审计记录？

高风险操作是否需要审批？

这些同样属于 Harness。

## 真正成熟的 Agent，不是永不失败，而是可以恢复

很多 AI Demo 的完整流程是：Prompt、Agent works、Success。

真实的软件工程却更像：Prompt、修改代码、dependency error、测试失败、API timeout、context compression、工具调用失败、session 中断。

于是一个真正能够长期运行的 Agent，必须能够回答：

我做到哪一步了？哪些任务已经完成？当前 workspace 是什么状态？修改了哪些文件？哪一步失败了？是否应该重新规划？是否可以继续执行？是否应该 rollback？

这意味着未来 Harness 必须越来越重视 durable state、checkpoint、trajectory、commit、retry、rollback、recovery。

这和成熟分布式系统的设计理念非常相似：

> **不要假设失败不会发生，而是假设失败一定会发生。**

所以优秀 Agent 的标准，并不是永远不犯错。

而是犯错以后能够发现、恢复，并重新进入正确轨道。

## 多 Agent 最困难的地方，从来不是“多开几个 Agent”

Multi-Agent 是另一个非常容易制造漂亮 Demo 的领域。

比如 Planner Agent、Coder Agent、Tester Agent、Reviewer Agent。

画四个框，连几条箭头，看起来非常先进。

但真正困难的问题都藏在框外面。

谁拆任务？谁决定优先级？谁拥有最终决策权？任务之间如何共享 Context？Agent A 修改 API 后，Agent B 如何获知？两个 Agent 修改同一文件怎么办？Merge Conflict 谁解决？一个 Agent 失败以后谁负责重新调度？哪些 Memory 应该共享？哪些任务应该并行？Token Budget 怎么控制？

这些本质上都不是 Model 问题。

而是 **Orchestration 问题**。

未来 Multi-Agent Coding 真正关键的组件，可能根本不是 Agent 本身。

而是 Scheduler。

就像 Kubernetes 的价值，并不是因为它“能启动 Container”。

Docker 已经可以启动 Container。

Kubernetes 真正解决的问题是：

> **大量 Container 怎样被可靠地运行和调度。**

同样，大模型今天已经会写代码。

Harness 下一步要解决的，是：

> **大量 Coding Agent 怎样可靠运行。**

## AI Coding 的竞争已经进入第四阶段

回头看整个 AI Coding 市场，其实大致经历了几个阶段。

第一阶段是 **Autocomplete**。

核心问题是：谁补全代码更准？

第二阶段是 **Chat**。

核心问题是：谁更理解 Repository？

第三阶段是 **Agent**。

核心问题是：AI 能不能自己执行任务？Agent 开始修改多个文件、执行命令、运行测试、修复问题。

而接下来真正拉开差距的，很可能是第四阶段：

**Harness。**

竞争变量开始变成：Context 如何组织，Tools 有哪些，MCP 如何接入，Skills 如何模块化，Memory 如何积累经验，Agent Loop 能运行多久，Sandbox 如何隔离，Permission 如何控制，Testing 如何自动发现错误，Verification 如何证明任务完成，Git 和 Worktree 如何支持并行，Recovery 如何处理失败，Observability 如何记录 Agent 行为，Multi-Agent 如何调度。

于是 Coding Agent 的实际能力，可能越来越接近一个乘法公式：

```text
Agent Performance
≈ Model Capability
× Context Quality
× Tool Quality
× Loop Quality
× Verification Quality
× Environment Quality
```

之所以说是乘法，而不是加法，是因为任何一项接近零，整体体验都可能迅速崩溃。

## 这恰好解释了一个 AI 编程悖论

过去一段时间，一个越来越明显的问题是：

> **AI 写代码已经快了很多，为什么软件交付却没有同步快很多？**

原因其实很简单。

完整的软件交付链条不是 Coding。

而是 Requirement、Architecture、Coding、Testing、Review、Integration、Security、Deployment、Observability、Operation。

AI 最早压缩的只是其中的 Coding。

Coding 成本下降以后，它自然不再是最大的瓶颈。

瓶颈于是向链条两端迁移：需求定义、任务拆解、架构决策、测试、验证、安全、权限、集成、部署、协作。

Harness 为什么会在这个阶段突然重要？

因为 Harness 本质上试图做的是：

> **把 AI 的能力从 Code Generation 延伸到 Software Delivery。**

这也是 AI Coding 真正值得关注的下一阶段。

## 企业未来真正值钱的，可能不是 Prompt，而是自己的 Harness

现在很多企业讨论 AI Coding 落地，第一反应通常是选工具：Cursor？Claude Code？Copilot？Codex？

但从长期看，这可能只是非常早期的一层。

真正能够形成企业长期竞争优势的，也许是企业自己的 **Enterprise Coding Harness**。

里面沉淀的是企业架构、业务知识、开发规范、历史事故、测试策略、部署规则、安全边界、内部工具、审批流程。

这套资产一旦形成，会出现一个非常有意思的现象：

**模型可以替换。**

今天用 Claude。

明天用 GPT。

后天可能换成另一个更强模型。

但企业积累下来的工具、Context、Knowledge、Rules、Tests、Workflow 仍然存在。

于是 AI 软件工程会逐渐形成一个新的技术栈：

```text
Model Layer
      ↓
Harness Layer
      ↓
Enterprise Knowledge
      ↓
Software Infrastructure
```

模型可能越来越商品化。

Harness 则越来越企业化。

如果这个判断成立，那么企业 AI Coding 最重要的长期资产，不会只是：我们采购了最先进的模型。

而是：

> **我们已经把组织知识、工程规则和软件基础设施，变成了一套 Agent 可以直接工作的环境。**

## Harness 战争，争夺的其实是 AI 的操作系统

再往深处看，Harness 竞争真正争夺的甚至不只是 Coding Agent 市场。

它争夺的是：

> **AI 如何进入真实世界工作的控制层。**

谁控制 Context？

谁控制 Tools？

谁控制 Memory？

谁控制 Permission？

谁控制 Agent Loop？

谁控制企业内部系统入口？

谁控制软件研发工作流？

谁就在很大程度上控制 AI 如何参与软件生产。

所以 MCP、AGENTS.md、Skills、Sandbox、Worktree、Memory、Testing、Multi-Agent 并不是突然冒出来的一堆孤立概念。

它们其实是同一套基础设施的不同组成部分。

我们正在看着 AI Coding 从“让模型写代码”，逐渐演变成“为模型建设一个完整的软件工程运行环境”。

这就是 Harness 的真正意义。

## 结语：模型越聪明，工程反而越重要

过去几年，大模型行业最重要的关键词是 Scaling。

更多参数。

更多数据。

更多算力。

更强推理。

这很容易让人产生一种错觉：

> 只要模型足够聪明，工程问题最终都会自动消失。

但 Coding Agent 正在向我们展示一个几乎相反的事实。

模型越强，它能承担的任务越复杂。

任务越复杂，对环境的要求也就越高。

它需要更好的 Context、更可靠的 Tools、更严格的权限、更完整的 Tests、更长期的 Memory、更安全的 Sandbox、更强的 Recovery，以及更成熟的 Orchestration。

所以 AI 并没有消灭软件工程。

**软件工程正在换一个对象。**

以前，工程师主要工程化的是 Software。

未来，工程师还需要工程化 AI 如何工作。

模型公司负责制造 Intelligence。

Agent 产品负责构建 Harness。

企业把 Knowledge、Policy 与 Infrastructure 接入其中。

开发者则逐渐从亲自完成每一步工作，转变成设计一个让 Agent 能够正确、安全、持续完成工作的系统。

所以 Cursor、Claude Code、Codex 之后，真正值得记住的新词，也许不是另一个更炫的 Agent 名称。

而是：

**Harness。**

因为下一阶段 AI Coding 最重要的问题，已经不再只是：

> 模型会不会写代码？

而是：

> **我们能不能给越来越聪明的模型，造出一个真正适合它工作的世界？**
