---
layout: post
title: "224 天 AI 应用工程师逐日学习计划"
date: 2026-08-06 14:00:00 +0800
permalink: /2026/08/06/224-day-ai-application-engineer-learning-plan.html
categories:
  - 人工智能
  - 学习计划
tags:
  - AI 应用工程
  - LLM
  - RAG
  - Agent
  - 职业转型
---

> 面向接近零基础转型者，每周约 13 小时，以 AI 应用工程、LLM 应用开发和企业 AI 解决方案岗位为目标。

- 周期：32 周，共 224 个自然日
- 有效投入：约 400—420 小时
- 建议节奏：每周 6 天学习或实践，1 天休息
- 主线技术栈：Python、Git、pytest、SQL、FastAPI、PostgreSQL、pgvector、Redis、Docker、GitHub Actions、LLM API、RAG、Tool Calling、MCP、Agent Workflow、OpenTelemetry
- 练习项目：AI 岗位 JD 分析器、运营商投诉智能分析
- 主项目：企业级 AI 项目风险助手
- 版本说明：v6，按岗位落地能力重构周期、知识比重、项目结构和阶段闸门

---

## 一、计划定位

### 1. 目标岗位

主目标：

- AI Application Engineer
- LLM Application Engineer
- 企业智能化应用开发工程师
- AI 解决方案工程师
- 运营商或项目管理场景 AI 技术负责人

暂不作为第一目标：

- 基础大模型预训练工程师
- 算法研究员
- CUDA、分布式训练或推理优化工程师
- 要求多年生产经验的高级后端岗位

### 2. 差异化路线

本计划不以模型训练和论文复现为主，而是建立以下能力组合：

> PMP 与项目管理能力 + 运营商业务经验 + 企业 AI 应用交付能力

最终需要证明的不是“会使用某个 AI 框架”，而是：

- 能把业务问题转化为可验收需求；
- 能接入企业文档、数据库和业务接口；
- 能实现引用、权限、审批和审计；
- 能用评测集证明质量；
- 能部署、监控、排错和控制成本；
- 能说明方案的价值、限制和风险。

### 3. 建议周期

| 当前基础 | 建议周期 | 执行方式 |
|---|---:|---|
| 接近零基础 | 32—36 周 | 完整执行本计划，闸门不通过则延长 |
| 会基础 Python，但缺少项目经验 | 28—32 周 | 通过前测后压缩基础阶段 |
| 有两年以上 Python 后端经验 | 20—24 周 | 跳过已达到 L3 的内容，保留项目验收 |
| 每周只能投入 6—8 小时 | 10—12 个月 | 不压缩项目和闸门，只放慢节奏 |

---

## 二、企业 AI 应用能力模型

企业落地不是一次模型调用，而是一条完整链路：

业务问题 → 数据与权限 → 模型、检索和工具 → 受控工作流 → 评测 → 安全审计 → 部署监控 → 业务指标

| 能力层 | 核心内容 | 求职证据 |
|---|---|---|
| 软件工程 | Python、Git、测试、HTTP、SQL、API | 可运行代码、测试和接口文档 |
| 数据工程 | 数据质量、文档解析、版本和增量更新 | 数据字典、质量报告和同步机制 |
| LLM 应用 | 结构化输出、模型适配、工具调用 | 稳定调用层和回归样例 |
| 企业 RAG | 混合检索、rerank、引用、拒答和权限 | 检索及答案评测报告 |
| Agent Workflow | 状态、工具、审批、幂等和恢复 | 可审计的业务工作流 |
| 生产工程 | Docker、CI/CD、日志、trace 和告警 | 在线 Demo、流水线和 runbook |
| 安全治理 | RBAC、数据隔离、注入测试和脱敏 | 权限矩阵和安全报告 |
| 业务交付 | 用户故事、指标、成本和 ROI | 项目说明、Demo 和答辩材料 |

---

## 三、时间分配

| 阶段 | 周期 | 预计小时 | 核心目标 |
|---|---:|---:|---|
| 基线与环境 | 1 周 | 10—12 | 确定起点，建立学习与交付系统 |
| Python 与软件工程 | 7 周 | 85—90 | 独立完成带数据库和测试的 API |
| 数据与必要机器学习 | 3 周 | 36—40 | 能定义数据、指标和错误代价 |
| 模型与 Embedding 素养 | 2 周 | 24—26 | 理解技术边界，完成混合检索基线 |
| LLM、工具与 MCP | 4 周 | 50—52 | 建立可靠调用层和可控工具工作流 |
| 企业 RAG | 4 周 | 50—52 | 完成数据、检索、回答、权限和评测 |
| Agent 与主项目 | 5 周 | 64—68 | 完成有状态、有审批的业务闭环 |
| 生产化 | 3 周 | 38—40 | 部署、监控、安全和故障恢复 |
| 作品集与求职 | 3 周 | 38—40 | 形成可验证作品并进入真实面试 |

---

## 四、每周执行系统

### 1. 标准周节奏

| 周内天数 | 时间 | 内容 |
|---|---:|---|
| 学习日 1 | 2 小时 | 核心概念、最小示例和闭卷复述 |
| 学习日 2 | 2 小时 | 从空白实现最小功能 |
| 学习日 3 | 2 小时 | 接入本周项目 |
| 学习日 4 | 2 小时 | 边界、异常、权限或性能处理 |
| 学习日 5 | 2 小时 | 测试、排错和变式练习 |
| 学习日 6 | 3 小时 | 集成、演示、复盘或阶段验收 |
| 学习日 7 | 休息 | 仅在落后时用作缓冲，不新增核心内容 |

### 2. 每次学习的最小闭环

每次两小时建议按照以下比例执行：

- 10 分钟：闭卷回忆上次内容；
- 20 分钟：阅读完成任务所需的官方资料；
- 60 分钟：主动编码；
- 20 分钟：测试、制造错误或改变需求；
- 10 分钟：记录错误卡和提交代码。

### 3. 掌握等级

| 等级 | 标准 |
|---|---|
| L1 | 能识别和解释概念 |
| L2 | 查资料可以完成 |
| L3 | 不看完整答案可以独立实现 |
| L4 | 能修改需求、排错、测试并解释取舍 |

核心技能至少达到 L3；主项目中的检索、权限、评测、审批和故障恢复达到 L4。

### 4. 三种独立性检查

- 闭卷解释：不查资料说明数据流、责任边界和技术取舍。
- 限量参考实现：允许查官方 API，不允许复制完整解决方案。
- 独立排错：针对预设故障定位根因并补回归测试。

复杂项目不要求背诵 SDK 方法名，但必须能自己拆解问题、查询权威资料并验证结果。

### 5. 缓冲规则

- 落后一天：移入本周 Day 6 或下周缓冲。
- 落后两天以上：删除扩展项，不用熬夜补双倍内容。
- 连续两周完成率低于 70%：暂停新内容一周，缩小项目范围。
- 闸门未通过：只补能力缺口，不机械重学整个阶段。
- 每完成四周，安排半天检查依赖、链接和 API 变化。

---

## 五、项目结构

### 项目 A：AI 岗位 JD 分析器

定位：软件工程练习项目，不作为最终核心作品。

功能：

- 读取 txt、md 或粘贴的 JD；
- 输出岗位名称、必需技能、加分项、年限和风险提示；
- 支持 CLI、JSON/CSV 和 REST API；
- 保存分析结果并提供查询。

交付：

- 清晰的项目结构；
- 至少 15 个测试；
- SQLite 或 PostgreSQL；
- FastAPI；
- README 和接口示例；
- 20 条真实 JD 的分析结果。

### 项目 B：运营商投诉智能分析

定位：数据、指标与业务理解项目。

功能：

- 投诉数据清洗和质量检查；
- 投诉分类和高风险优先级；
- 关键词解释和相似案例检索；
- 支持人工复核和错误分析。

交付：

- 数据字典和质量报告；
- 规则基线与一个机器学习基线；
- precision、recall、F1 和阈值说明；
- 至少 20 个错误案例的根因分析；
- 关键词与向量检索对比；
- 模型卡和业务限制。

### 主项目：企业级 AI 项目风险助手

输入：

- 项目计划；
- 会议纪要；
- 风险台账；
- 问题清单；
- 里程碑和变更记录。

输出：

- 风险项、优先级和证据出处；
- 延期信号和影响范围；
- 责任人及行动建议；
- 周报草稿；
- 经人工批准后的风险台账更新。

核心能力：

- 文档解析、版本和增量索引；
- 混合检索、rerank、引用和拒答；
- 用户、部门和项目级数据隔离；
- 业务工具、MCP 和状态管理；
- 高风险写操作人工审批；
- 后台任务、超时、重试和幂等；
- 自动评测、日志、trace 和成本统计；
- Docker、CI/CD 和在线 Demo。

强制交付物：

- 业务需求说明和用户故事；
- 架构图、数据流图和权限矩阵；
- 数据字典和 API 契约；
- 至少两份架构决策记录；
- 50—100 条黄金评测集；
- 检索、生成和 Agent 三层评测报告；
- 安全与威胁测试报告；
- 单任务成本与延迟报告；
- 故障演练记录和 runbook；
- 3—5 分钟演示视频；
- 简历项目描述和答辩材料。

---

## 六、224 天逐日学习计划

### 难度与重要性说明

- 学习难度：⭐ 为入门，⭐⭐ 为较易，⭐⭐⭐ 为中等，⭐⭐⭐⭐ 为较难，⭐⭐⭐⭐⭐ 为综合工程难题。
- 重要性：⭐⭐⭐ 为支撑能力，⭐⭐⭐⭐ 为主线能力，⭐⭐⭐⭐⭐ 为核心能力或阶段闸门。
- 每天默认投入约 2 小时；每周 Day 6 可投入约 3 小时；Day 7 原则上只复盘或休息。
- “完成标准”必须产生代码、测试、图表、文档或可复述结论，不能只看完资料。
- 官方资料只阅读完成当天任务需要的章节，单日阅读建议不超过 20—30 分钟。

### Week 1｜基线、环境与学习系统

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 1 | 理解目标岗位与能力链路 | ⭐ | ⭐⭐⭐⭐⭐ | 整理 20 个目标 JD，统计前 10 项重复能力 | [GitHub README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |
| Day 2 | 安装 Python、编辑器与终端环境 | ⭐ | ⭐⭐⭐⭐⭐ | 运行第一个 Python 文件并截图记录 | [Python 入门](https://docs.python.org/3/tutorial/introduction.html) |
| Day 3 | 创建虚拟环境与依赖清单 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 创建 .venv，安装一个包并导出依赖 | [Python venv](https://docs.python.org/3/tutorial/venv.html) |
| Day 4 | 学习 Git 仓库、暂存区与提交 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 初始化仓库并完成 3 次语义明确的提交 | [Pro Git](https://git-scm.com/book/en/v2) |
| Day 5 | 完成 Python、SQL、HTTP 基线测试 | ⭐⭐ | ⭐⭐⭐⭐ | 记录会与不会，不查答案完成前测 | [Python 入门](https://docs.python.org/3/tutorial/introduction.html)；[PostgreSQL 教程](https://www.postgresql.org/docs/current/tutorial.html) |
| Day 6 | 建立学习看板、错误卡和目录规范 | ⭐ | ⭐⭐⭐⭐ | 创建 learning、src、tests、data 目录及模板 | [GitHub README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |
| Day 7 | 周复盘与休息 | ⭐ | ⭐⭐⭐ | 复述目标路线；只补最关键欠账 | [Pro Git](https://git-scm.com/book/en/v2) |

### Week 2｜Python 基础与数据结构

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 8 | 变量、数字、布尔值和类型转换 | ⭐ | ⭐⭐⭐⭐⭐ | 完成 10 个 JD 字段转换练习 | [Python 入门](https://docs.python.org/3/tutorial/introduction.html) |
| Day 9 | 字符串、切片、常用方法与编码 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 实现 JD 文本去空白和标准化 | [Python 入门](https://docs.python.org/3/tutorial/introduction.html) |
| Day 10 | list 与 tuple | ⭐⭐ | ⭐⭐⭐⭐⭐ | 保存技能列表并完成去重、排序 | [Python 数据结构](https://docs.python.org/3/tutorial/datastructures.html) |
| Day 11 | dict 与 set | ⭐⭐ | ⭐⭐⭐⭐⭐ | 实现技能词频统计和集合差异 | [Python 数据结构](https://docs.python.org/3/tutorial/datastructures.html) |
| Day 12 | 条件、循环与边界输入 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 处理空文本、None、非法年限 | [Python 控制流](https://docs.python.org/3/tutorial/controlflow.html) |
| Day 13 | 函数拆分与小型集成 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 从空白完成 JD 清洗和统计脚本 | [Python 控制流](https://docs.python.org/3/tutorial/controlflow.html) |
| Day 14 | 闭卷复盘与休息 | ⭐ | ⭐⭐⭐ | 口述四种数据结构的选择依据 | [Python 数据结构](https://docs.python.org/3/tutorial/datastructures.html) |

### Week 3｜函数、模块、文件与 AI 初体验

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 15 | 函数参数、返回值、作用域 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 将清洗、解析、统计拆成独立函数 | [Python 控制流](https://docs.python.org/3/tutorial/controlflow.html) |
| Day 16 | 类型标注与可读接口 | ⭐⭐ | ⭐⭐⭐⭐ | 为核心函数补齐输入输出类型 | [Python typing](https://docs.python.org/3/library/typing.html) |
| Day 17 | 模块、包与导入路径 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 拆分 loader、cleaner、analyzer | [Python 模块](https://docs.python.org/3/tutorial/modules.html) |
| Day 18 | pathlib、文本和 CSV 文件 | ⭐⭐ | ⭐⭐⭐⭐ | 批量读取 5 个 JD 并输出 CSV | [Python pathlib](https://docs.python.org/3/library/pathlib.html)；[Python csv](https://docs.python.org/3/library/csv.html) |
| Day 19 | JSON、异常和错误信息 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 保存结构化结果并处理坏文件 | [Python json](https://docs.python.org/3/library/json.html)；[Python 异常](https://docs.python.org/3/tutorial/errors.html) |
| Day 20 | 最小模型调用与规则对比 | ⭐⭐⭐ | ⭐⭐⭐ | 调用一次模型并比较规则抽取差异 | [OpenAI API Quickstart](https://developers.openai.com/api/docs/quickstart) |
| Day 21 | 周复盘与休息 | ⭐ | ⭐⭐⭐ | 不看代码画出模块调用关系 | [Python 模块](https://docs.python.org/3/tutorial/modules.html) |

### Week 4｜Git、测试、调试与代码质量

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 22 | 分支、合并与 .gitignore | ⭐⭐ | ⭐⭐⭐⭐ | 创建功能分支并完成一次合并 | [Pro Git](https://git-scm.com/book/en/v2) |
| Day 23 | pytest 基础与 AAA 结构 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 为清洗函数编写 5 个测试 | [pytest 入门](https://docs.pytest.org/en/stable/getting-started.html) |
| Day 24 | 正常、边界与异常测试 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 增加空值、乱码和坏 JSON 测试 | [pytest 入门](https://docs.pytest.org/en/stable/getting-started.html) |
| Day 25 | fixture 与测试数据复用 | ⭐⭐⭐ | ⭐⭐⭐⭐ | 用 fixture 管理 JD 样本 | [pytest fixtures](https://docs.pytest.org/en/stable/how-to/fixtures.html) |
| Day 26 | 参数化测试 | ⭐⭐⭐ | ⭐⭐⭐⭐ | 将重复边界测试改为参数化 | [pytest 参数化](https://docs.pytest.org/en/stable/how-to/parametrize.html) |
| Day 27 | 调试、Ruff 与回归修复 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 定位预设 bug，补测试并格式化 | [Ruff](https://docs.astral.sh/ruff/) |
| Day 28 | 周验收与休息 | ⭐⭐ | ⭐⭐⭐⭐ | 测试全绿；解释三个失败案例 | [pytest 入门](https://docs.pytest.org/en/stable/getting-started.html) |

### Week 5｜HTTP、配置与结构化输出

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 29 | HTTP 请求响应与 URL | ⭐⭐ | ⭐⭐⭐⭐⭐ | 用浏览器开发者工具识别一次请求 | [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview) |
| Day 30 | 方法、状态码和错误语义 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 为 10 个业务结果选择状态码 | [HTTP 状态码](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) |
| Day 31 | 使用 httpx 调用 API | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 完成 GET、POST 和 JSON 解析 | [HTTPX](https://www.python-httpx.org/quickstart/) |
| Day 32 | 超时、重试和临时错误 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 模拟超时并返回明确错误 | [HTTPX 超时](https://www.python-httpx.org/advanced/timeouts/) |
| Day 33 | 环境变量与密钥管理 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 移除源码密钥并添加 .env.example | [十二要素配置](https://12factor.net/config) |
| Day 34 | JSON Schema 与 Pydantic 校验 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 定义 JD 分析结果模型并验证坏数据 | [JSON Schema](https://json-schema.org/learn/getting-started-step-by-step)；[Pydantic Models](https://docs.pydantic.dev/latest/concepts/models/) |
| Day 35 | 周集成与休息 | ⭐⭐ | ⭐⭐⭐⭐ | 模型输出必须通过校验后落盘 | [Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs) |

### Week 6｜SQL 与数据建模

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 36 | 关系数据库、表、行和类型 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 创建本地数据库和第一张表 | [PostgreSQL 教程](https://www.postgresql.org/docs/current/tutorial.html) |
| Day 37 | SELECT、WHERE、ORDER BY | ⭐⭐ | ⭐⭐⭐⭐⭐ | 完成 10 条查询练习 | [PostgreSQL 教程](https://www.postgresql.org/docs/current/tutorial.html) |
| Day 38 | 聚合、GROUP BY 和 HAVING | ⭐⭐⭐ | ⭐⭐⭐⭐ | 统计岗位和技能分布 | [PostgreSQL 教程](https://www.postgresql.org/docs/current/tutorial.html) |
| Day 39 | JOIN、主键和外键 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 连接 user、jd、analysis 三表 | [PostgreSQL DDL](https://www.postgresql.org/docs/current/ddl.html) |
| Day 40 | 约束、索引与查询计划直觉 | ⭐⭐⭐ | ⭐⭐⭐⭐ | 添加唯一约束和必要索引 | [PostgreSQL 索引](https://www.postgresql.org/docs/current/indexes.html) |
| Day 41 | 事务与一致性 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 模拟写入失败并验证回滚 | [PostgreSQL 事务](https://www.postgresql.org/docs/current/tutorial-transactions.html) |
| Day 42 | 周验收与休息 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 无 AI 完成建表、写入、JOIN、事务 | [PostgreSQL 教程](https://www.postgresql.org/docs/current/tutorial.html) |

### Week 7｜FastAPI、Pydantic 与接口测试

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 43 | FastAPI 路由和 OpenAPI | ⭐⭐ | ⭐⭐⭐⭐⭐ | 实现 health 和 analyses 接口 | [FastAPI 入门](https://fastapi.tiangolo.com/tutorial/first-steps/) |
| Day 44 | 请求体、响应模型和校验 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 为分析接口定义输入输出模型 | [FastAPI 请求体](https://fastapi.tiangolo.com/tutorial/body/) |
| Day 45 | 依赖注入与配置 | ⭐⭐⭐ | ⭐⭐⭐⭐ | 注入数据库会话和配置对象 | [FastAPI 依赖](https://fastapi.tiangolo.com/tutorial/dependencies/) |
| Day 46 | 统一异常与 request_id | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 统一 4xx/5xx 错误结构 | [FastAPI 错误处理](https://fastapi.tiangolo.com/tutorial/handling-errors/) |
| Day 47 | 文件上传与限制 | ⭐⭐⭐ | ⭐⭐⭐⭐ | 限制扩展名、大小并处理空文件 | [FastAPI 文件上传](https://fastapi.tiangolo.com/tutorial/request-files/) |
| Day 48 | TestClient 集成测试 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 完成接口成功和失败路径测试 | [FastAPI 测试](https://fastapi.tiangolo.com/tutorial/testing/) |
| Day 49 | 周集成与休息 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 从上传到数据库完成一次闭环 | [FastAPI 入门](https://fastapi.tiangolo.com/tutorial/first-steps/) |

### Week 8｜项目 A 集成与基础鉴权

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 50 | OAuth2、JWT 和密码哈希概念 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 画出登录和令牌校验流程 | [FastAPI OAuth2/JWT](https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/) |
| Day 51 | 实现登录和受保护接口 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 未登录访问必须返回 401 | [FastAPI OAuth2/JWT](https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/) |
| Day 52 | 用户数据隔离基础 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 用户只能查看自己的分析结果 | [FastAPI OAuth2/JWT](https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/) |
| Day 53 | CLI、API 与数据库集成 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 完成两种入口的相同业务结果 | [FastAPI 入门](https://fastapi.tiangolo.com/tutorial/first-steps/) |
| Day 54 | README 与干净环境重建 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 按 README 在新环境运行项目 | [GitHub README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |
| Day 55 | 外部复现与 30 分钟答辩 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 记录并修复最重要的三个问题 | [GitHub README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |
| Day 56 | 闸门 G1 与休息 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 测试全绿，解释架构、事务和鉴权 | [FastAPI 测试](https://fastapi.tiangolo.com/tutorial/testing/) |

### Week 9｜pandas、数据质量与 EDA

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 57 | DataFrame、读取和类型 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 读取投诉数据并输出字段概览 | [pandas 入门](https://pandas.pydata.org/docs/getting_started/intro_tutorials/) |
| Day 58 | 筛选、排序和派生列 | ⭐⭐ | ⭐⭐⭐⭐ | 完成 8 个数据处理练习 | [pandas 入门](https://pandas.pydata.org/docs/getting_started/intro_tutorials/) |
| Day 59 | 缺失、重复和异常值 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 输出缺失率和重复率报告 | [pandas 缺失数据](https://pandas.pydata.org/docs/user_guide/missing_data.html) |
| Day 60 | merge、groupby 和统计 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 合并渠道表并统计投诉分布 | [pandas 合并](https://pandas.pydata.org/docs/user_guide/merging.html)；[pandas GroupBy](https://pandas.pydata.org/docs/user_guide/groupby.html) |
| Day 61 | 数据字典与质量规则 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 定义非空、唯一、范围和枚举规则 | [pandas 入门](https://pandas.pydata.org/docs/getting_started/intro_tutorials/) |
| Day 62 | EDA 与业务问题定义 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 完成图表、业务假设和错误代价 | [Matplotlib 入门](https://matplotlib.org/stable/users/explain/quick_start.html) |
| Day 63 | 周验收与休息 | ⭐⭐ | ⭐⭐⭐⭐ | 输出可复现的数据质量报告 | [pandas 入门](https://pandas.pydata.org/docs/getting_started/intro_tutorials/) |

### Week 10｜机器学习基线与业务指标

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 64 | 特征、标签和 fit/predict | ⭐⭐⭐ | ⭐⭐⭐⭐ | 训练第一个分类器 | [scikit-learn 入门](https://scikit-learn.org/stable/getting_started.html) |
| Day 65 | 训练、验证、测试切分 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 固定随机种子并保存切分规则 | [scikit-learn 常见陷阱](https://scikit-learn.org/stable/common_pitfalls.html) |
| Day 66 | 数据泄漏与 Pipeline | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 将预处理和模型封装进 Pipeline | [scikit-learn 入门](https://scikit-learn.org/stable/getting_started.html)；[scikit-learn 常见陷阱](https://scikit-learn.org/stable/common_pitfalls.html) |
| Day 67 | 规则基线与多数类基线 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 比较业务规则和 Dummy 基线 | [scikit-learn 入门](https://scikit-learn.org/stable/getting_started.html) |
| Day 68 | 逻辑回归和概率输出 | ⭐⭐⭐ | ⭐⭐⭐⭐ | 训练可解释的分类基线 | [scikit-learn 入门](https://scikit-learn.org/stable/getting_started.html) |
| Day 69 | precision、recall、F1 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 计算指标并解释业务含义 | [分类指标](https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics) |
| Day 70 | 周复盘与休息 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 闭卷解释为什么不能只看 accuracy | [分类指标](https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics) |

### Week 11｜阈值、错误分析与项目 B

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 71 | 混淆矩阵与 PR 曲线 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 画图并标记两个候选阈值 | [分类指标](https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics) |
| Day 72 | 按业务代价选择阈值 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 为高风险漏判设定阈值依据 | [分类阈值](https://scikit-learn.org/stable/modules/classification_threshold.html) |
| Day 73 | 错误样例收集和分类 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 分析前 10 个错误案例 | [分类指标](https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics) |
| Day 74 | 完成 20 个错误根因分析 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 归类数据、标签、特征和模型问题 | [分类指标](https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics) |
| Day 75 | 人工复核流程与模型限制 | ⭐⭐⭐ | ⭐⭐⭐⭐ | 设计人工确认和升级规则 | [scikit-learn 入门](https://scikit-learn.org/stable/getting_started.html) |
| Day 76 | 项目 B 集成、模型卡和演示 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 交付指标、错误分析和限制说明 | [GitHub README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |
| Day 77 | 闸门 G2 与休息 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 用业务代价答辩指标和阈值 | [分类阈值](https://scikit-learn.org/stable/modules/classification_threshold.html) |

### Week 12｜PyTorch 与 Transformer 素养

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 78 | Tensor、shape、dtype 和 device | ⭐⭐⭐ | ⭐⭐⭐ | 完成张量创建、变形和运算 | [PyTorch Tensor](https://docs.pytorch.org/tutorials/beginner/basics/tensorqs_tutorial.html) |
| Day 79 | Dataset、DataLoader 和 batch | ⭐⭐⭐ | ⭐⭐⭐ | 加载一个小型文本数据集 | [PyTorch 基础](https://docs.pytorch.org/tutorials/beginner/basics/intro.html) |
| Day 80 | 模型、loss 和 optimizer | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 运行最小神经网络 | [PyTorch 优化循环](https://docs.pytorch.org/tutorials/beginner/basics/optimization_tutorial.html) |
| Day 81 | 训练、验证与过拟合 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 画学习曲线并识别过拟合 | [PyTorch 优化循环](https://docs.pytorch.org/tutorials/beginner/basics/optimization_tutorial.html) |
| Day 82 | Tokenizer、padding 和截断 | ⭐⭐⭐ | ⭐⭐⭐⭐ | 观察同一文本的 token 化结果 | [Transformers Tokenizer](https://huggingface.co/docs/transformers/main_classes/tokenizer) |
| Day 83 | Attention 与 Transformer 数据流 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 手绘 Q/K/V 和模型数据流 | [Annotated Transformer](https://nlp.seas.harvard.edu/annotated-transformer/) |
| Day 84 | 预训练 Pipeline 与周复盘 | ⭐⭐⭐ | ⭐⭐⭐⭐ | 修改并运行文本分类 Pipeline | [Transformers Pipeline](https://huggingface.co/docs/transformers/main_classes/pipelines) |

### Week 13｜Embedding 与混合检索

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 85 | Embedding 与语义空间 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 生成 20 条文本向量 | [OpenAI Embeddings](https://developers.openai.com/api/docs/guides/embeddings) |
| Day 86 | 余弦相似度和 top-k | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 实现 NumPy 版相似度检索 | [OpenAI Embeddings](https://developers.openai.com/api/docs/guides/embeddings) |
| Day 87 | 设计查询集和相关性标注 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 标注 30 个 query 的相关案例 | [信息检索评测](https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-of-ranked-retrieval-results-1.html) |
| Day 88 | 计算 recall@k | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 比较 k=3、5、10 的召回 | [信息检索评测](https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-of-ranked-retrieval-results-1.html) |
| Day 89 | PostgreSQL 全文检索 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 实现关键词检索基线 | [PostgreSQL 全文检索](https://www.postgresql.org/docs/current/textsearch.html) |
| Day 90 | pgvector 与混合检索 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 比较关键词、向量和融合结果 | [pgvector](https://github.com/pgvector/pgvector) |
| Day 91 | 闸门 G3 与休息 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 解释 ML、Embedding、RAG、微调边界 | [OpenAI Retrieval](https://developers.openai.com/api/docs/guides/retrieval) |

### Week 14｜可靠模型调用与供应商适配

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 92 | Responses API 最小调用 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 完成可运行调用并保存 usage | [Responses API](https://developers.openai.com/api/docs/guides/migrate-to-responses) |
| Day 93 | Prompt 契约与成功标准 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 写明输入、约束、证据和输出格式 | [Prompt Engineering](https://developers.openai.com/api/docs/guides/prompt-engineering) |
| Day 94 | Structured Outputs | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 返回符合 schema 的风险对象 | [Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs) |
| Day 95 | Pydantic 校验与拒答 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 处理格式错误和业务信息不足 | [Pydantic Models](https://docs.pydantic.dev/latest/concepts/models/)；[Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs) |
| Day 96 | 统一 ModelClient 接口 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 隔离业务代码与供应商 SDK | [Responses API](https://developers.openai.com/api/docs/guides/migrate-to-responses) |
| Day 97 | 接入第二个模型并评测 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 比较 20 条样例质量、延迟和成本 | [OpenAI Evals](https://developers.openai.com/api/docs/guides/evals) |
| Day 98 | 周集成与休息 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 交付可切换模型的风险抽取器 | [成本优化](https://developers.openai.com/api/docs/guides/cost-optimization) |

### Week 15｜错误处理、成本与基础评测

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 99 | 流式响应与取消 | ⭐⭐⭐ | ⭐⭐⭐⭐ | 实现流式输出和用户取消 | [流式响应](https://developers.openai.com/api/docs/guides/streaming-responses) |
| Day 100 | API 错误分类 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 区分鉴权、限流、超时和服务错误 | [OpenAI 错误处理](https://developers.openai.com/api/docs/guides/error-codes) |
| Day 101 | 退避、抖动和最大重试 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 只对可恢复错误有限重试 | [OpenAI 限流](https://developers.openai.com/api/docs/guides/rate-limits) |
| Day 102 | 幂等、缓存和重复请求 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 同一请求不产生重复副作用 | [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview) |
| Day 103 | token、延迟和成本记录 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 输出每次调用成本表 | [成本优化](https://developers.openai.com/api/docs/guides/cost-optimization) |
| Day 104 | 建立 30 条固定评测集 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 加入正常、边界和拒答样例 | [OpenAI Evals](https://developers.openai.com/api/docs/guides/evals) |
| Day 105 | 周回归与休息 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 运行评测并生成首份回归报告 | [OpenAI Graders](https://developers.openai.com/api/docs/guides/graders) |

### Week 16｜Tool Calling、状态与审批

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 106 | 工具调用完整循环 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 实现模型选工具、执行和结果回传 | [Function Calling](https://developers.openai.com/api/docs/guides/function-calling) |
| Day 107 | 工具 Schema 与描述 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 定义里程碑查询工具 | [Function Calling](https://developers.openai.com/api/docs/guides/function-calling) |
| Day 108 | 参数校验和机器可读错误 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 错误参数不得进入业务函数 | [Agents SDK Tools](https://openai.github.io/openai-agents-python/tools/) |
| Day 109 | 三个工具与只读白名单 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 接入里程碑、风险台账和计算器 | [Agents SDK Tools](https://openai.github.io/openai-agents-python/tools/) |
| Day 110 | 会话、消息和工具结果状态 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 持久化一次多轮任务 | [会话状态](https://developers.openai.com/api/docs/guides/conversation-state) |
| Day 111 | 高风险操作人工审批 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 暂停、批准、修改、拒绝和恢复 | [Agents SDK 人工审批](https://openai.github.io/openai-agents-python/human_in_the_loop/) |
| Day 112 | 周验收与休息 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 演练工具失败和审批拒绝 | [Agents SDK 运行](https://openai.github.io/openai-agents-python/running_agents/) |

### Week 17｜MCP 与确定性工作流

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 113 | MCP 架构、Client 与 Server | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 画出 Host、Client、Server 关系 | [MCP 入门](https://modelcontextprotocol.io/docs/getting-started/intro) |
| Day 114 | 构建最小 MCP Server | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 暴露一个只读风险查询工具 | [构建 MCP Server](https://modelcontextprotocol.io/docs/develop/build-server) |
| Day 115 | 构建 MCP Client | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 发现并调用自建工具 | [构建 MCP Client](https://modelcontextprotocol.io/docs/develop/build-client) |
| Day 116 | 将 REST API 封装为 MCP 工具 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 复用已有业务服务，不复制逻辑 | [构建 MCP Server](https://modelcontextprotocol.io/docs/develop/build-server) |
| Day 117 | MCP 鉴权与密钥边界 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 为远程服务定义权限和凭据策略 | [MCP 授权](https://modelcontextprotocol.io/docs/tutorials/security/authorization) |
| Day 118 | 普通 Python 工作流与框架 ADR | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 比较原生循环和一个 Agent 框架 | [Agents SDK 运行](https://openai.github.io/openai-agents-python/running_agents/) |
| Day 119 | 闸门 G4 与休息 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 解释模型、工具、MCP、审批人边界 | [MCP 入门](https://modelcontextprotocol.io/docs/getting-started/intro) |

### Week 18｜文档摄取、解析与版本

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 120 | 定义文档类型和解析契约 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 列出 txt、md、PDF、表格的字段 | [OpenAI 文件输入](https://developers.openai.com/api/docs/guides/file-inputs) |
| Day 121 | txt、md 和 PDF 解析 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 保留文件名、页码和段落 | [pypdf](https://pypdf.readthedocs.io/en/stable/) |
| Day 122 | 扫描件与解析失败策略 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 标记不可解析文件并进入人工队列 | [pypdf](https://pypdf.readthedocs.io/en/stable/) |
| Day 123 | 固定长度和结构化切分 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 对同一文档生成两种 chunk | [OpenAI Retrieval](https://developers.openai.com/api/docs/guides/retrieval) |
| Day 124 | 元数据、内容哈希和版本 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 识别重复上传和文档更新 | [OpenAI Retrieval](https://developers.openai.com/api/docs/guides/retrieval) |
| Day 125 | 后台摄取任务与状态 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 返回任务 ID 和可查询进度 | [Celery 入门](https://docs.celeryq.dev/en/stable/getting-started/introduction.html) |
| Day 126 | 周集成与休息 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 从上传到可检索保留完整来源 | [OpenAI Retrieval](https://developers.openai.com/api/docs/guides/retrieval) |

### Week 19｜混合检索与 rerank

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 127 | 向量检索参数与索引 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 建立 pgvector 检索函数 | [pgvector](https://github.com/pgvector/pgvector) |
| Day 128 | 全文检索与中文分词边界 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 建立关键词检索基线 | [PostgreSQL 全文检索](https://www.postgresql.org/docs/current/textsearch.html) |
| Day 129 | 查询改写与多查询 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 记录改写前后召回差异 | [OpenAI Retrieval](https://developers.openai.com/api/docs/guides/retrieval) |
| Day 130 | 混合融合策略 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 实现简单 RRF 融合 | [信息检索评测](https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-of-ranked-retrieval-results-1.html) |
| Day 131 | rerank 与候选集 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 只对少量候选重排 | [OpenAI 延迟优化](https://developers.openai.com/api/docs/guides/latency-optimization) |
| Day 132 | 质量、延迟和成本对比 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 对 50 个问题输出对比表 | [成本优化](https://developers.openai.com/api/docs/guides/cost-optimization) |
| Day 133 | 周验收与休息 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 选定主项目检索方案并写 ADR | [信息检索评测](https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-of-ranked-retrieval-results-1.html) |

### Week 20｜证据回答与 RAG 评测

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 134 | 基于检索证据生成回答 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 回答只能使用提供的上下文 | [OpenAI Retrieval](https://developers.openai.com/api/docs/guides/retrieval) |
| Day 135 | 文件、页码和片段引用 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 每项风险返回可核验出处 | [OpenAI Retrieval](https://developers.openai.com/api/docs/guides/retrieval) |
| Day 136 | 证据不足时拒答 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 加入无答案和需要澄清样例 | [Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs) |
| Day 137 | 检索层评测 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 统计 recall@k 和过滤正确率 | [信息检索评测](https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-of-ranked-retrieval-results-1.html) |
| Day 138 | 答案正确性与引用支持率 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 人工标注并运行生成层评测 | [OpenAI Evals](https://developers.openai.com/api/docs/guides/evals) |
| Day 139 | 错误聚类与前三类修复 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 比较修复前后指标 | [OpenAI Graders](https://developers.openai.com/api/docs/guides/graders) |
| Day 140 | 周回归与休息 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 生成 RAG v1 评测报告 | [OpenAI Evals](https://developers.openai.com/api/docs/guides/evals) |

### Week 21｜权限、安全与增量同步

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 141 | 用户、部门和项目权限模型 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 完成角色与资源权限矩阵 | [FastAPI OAuth2/JWT](https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/) |
| Day 142 | RBAC、ABAC 与最小权限 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 为读取、上传、审批定义授权规则 | [FastAPI OAuth2/JWT](https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/) |
| Day 143 | PostgreSQL Row Level Security | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 用户 A 无法查询用户 B 数据 | [PostgreSQL RLS](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) |
| Day 144 | 检索过滤与权限一致性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 向量和关键词路径都执行权限过滤 | [PostgreSQL RLS](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) |
| Day 145 | 增量更新、删除和索引一致性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 更新/删除后旧内容不可召回 | [PostgreSQL 事务](https://www.postgresql.org/docs/current/tutorial-transactions.html) |
| Day 146 | 提示注入、越权和泄漏测试 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 建立至少 15 条安全样例 | [OWASP LLM Top 10](https://genai.owasp.org/llm-top-10/)；[OpenAI 安全最佳实践](https://developers.openai.com/api/docs/guides/safety-best-practices) |
| Day 147 | 闸门 G5 与休息 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 完成 RAG 权限、评测和安全报告 | [OpenAI 安全最佳实践](https://developers.openai.com/api/docs/guides/safety-best-practices) |

### Week 22｜主项目需求与架构

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 148 | 用户访谈假设与问题定义 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 写清目标用户、痛点和非目标 | [GitHub Issue 模板](https://docs.github.com/en/communities/using-templates-for-repositories/configuring-issue-templates-for-your-repository) |
| Day 149 | 用户故事与验收标准 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 定义 5 条核心用户故事 | [GitHub Issue 模板](https://docs.github.com/en/communities/using-templates-for-repositories/configuring-issue-templates-for-your-repository) |
| Day 150 | 风险、问题、行动和审批模型 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 完成领域对象和关系图 | [PostgreSQL DDL](https://www.postgresql.org/docs/current/ddl.html) |
| Day 151 | 系统架构图 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 绘制客户端、API、任务、数据库和模型 | [C4 Model](https://c4model.com/) |
| Day 152 | 端到端数据流图 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 标记身份、数据和信任边界 | [Mermaid Flowchart](https://mermaid.js.org/syntax/flowchart.html) |
| Day 153 | 质量、延迟、成本和安全指标 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 定义 MVP 验收阈值 | [OpenAI Evals](https://developers.openai.com/api/docs/guides/evals) |
| Day 154 | 范围冻结与休息 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 删除非核心功能，冻结 MVP | [GitHub Issue 模板](https://docs.github.com/en/communities/using-templates-for-repositories/configuring-issue-templates-for-your-repository) |

### Week 23｜主项目后端与后台任务

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 155 | 数据库 schema 与 migration | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 创建项目、文档、任务、审批表 | [Alembic 教程](https://alembic.sqlalchemy.org/en/latest/tutorial.html) |
| Day 156 | SQLAlchemy 会话与事务 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 实现统一会话和回滚 | [SQLAlchemy 教程](https://docs.sqlalchemy.org/en/20/tutorial/) |
| Day 157 | 上传接口与对象元数据 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 保存文件信息并返回任务 ID | [FastAPI 文件上传](https://fastapi.tiangolo.com/tutorial/request-files/) |
| Day 158 | Redis 与任务状态 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 保存排队、运行、成功、失败状态 | [Redis 入门](https://redis.io/docs/latest/develop/get-started/) |
| Day 159 | Celery 后台解析和索引 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 长任务不阻塞 HTTP 请求 | [Celery 入门](https://docs.celeryq.dev/en/stable/getting-started/introduction.html) |
| Day 160 | 超时、重试、幂等和死信 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 重复上传不产生重复索引 | [Celery 入门](https://docs.celeryq.dev/en/stable/getting-started/introduction.html) |
| Day 161 | 周集成与休息 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 完成上传—任务—索引—查询链路 | [FastAPI 测试](https://fastapi.tiangolo.com/tutorial/testing/) |

### Week 24｜工具与风险工作流

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 162 | 里程碑查询工具 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 按项目权限返回里程碑 | [Function Calling](https://developers.openai.com/api/docs/guides/function-calling) |
| Day 163 | 风险台账查询工具 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 返回结构化风险记录 | [Function Calling](https://developers.openai.com/api/docs/guides/function-calling) |
| Day 164 | 问题清单和行动项工具 | ⭐⭐⭐ | ⭐⭐⭐⭐ | 统一错误契约和超时 | [Agents SDK Tools](https://openai.github.io/openai-agents-python/tools/) |
| Day 165 | 风险抽取、优先级和证据 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 输出 schema 化风险对象 | [Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs) |
| Day 166 | 行动建议和周报草稿 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 每项建议关联证据与责任人 | [Prompt Engineering](https://developers.openai.com/api/docs/guides/prompt-engineering) |
| Day 167 | 确定性编排主流程 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 代码控制顺序，模型只负责判断 | [Agents SDK 运行](https://openai.github.io/openai-agents-python/running_agents/) |
| Day 168 | 周集成与休息 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 完成资料到周报草稿闭环 | [OpenAI Evals](https://developers.openai.com/api/docs/guides/evals) |

### Week 25｜状态、审批、审计与恢复

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 169 | 任务状态机和状态转换 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 定义合法转换和非法转换测试 | [Agents SDK 运行](https://openai.github.io/openai-agents-python/running_agents/) |
| Day 170 | 检查点、暂停和恢复 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 中断后从检查点继续 | [Agents SDK Sessions](https://openai.github.io/openai-agents-python/sessions/) |
| Day 171 | 取消和整体超时 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 用户取消后停止后续副作用 | [Agents SDK 运行](https://openai.github.io/openai-agents-python/running_agents/) |
| Day 172 | 人工审批状态持久化 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 跨进程保存待审批任务 | [Agents SDK 人工审批](https://openai.github.io/openai-agents-python/human_in_the_loop/) |
| Day 173 | 批准、修改、拒绝和重提 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 所有决定进入审计记录 | [Agents SDK 人工审批](https://openai.github.io/openai-agents-python/human_in_the_loop/) |
| Day 174 | 工具失败、模型失败和重复调用 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 演练恢复并补回归测试 | [OpenAI 错误处理](https://developers.openai.com/api/docs/guides/error-codes) |
| Day 175 | 周验收与休息 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 完成可审批、可恢复、可审计版本 | [Agents SDK 人工审批](https://openai.github.io/openai-agents-python/human_in_the_loop/) |

### Week 26｜轻量 UI 与端到端验收

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 176 | 选择 UI 并搭建页面结构 | ⭐⭐ | ⭐⭐⭐ | 创建上传、风险、审批三个页面 | [Streamlit 入门](https://docs.streamlit.io/get-started) |
| Day 177 | 上传和任务进度 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 显示排队、处理中和失败状态 | [Streamlit 入门](https://docs.streamlit.io/get-started) |
| Day 178 | 风险结果、引用和过滤 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 可跳转查看证据片段 | [Streamlit 入门](https://docs.streamlit.io/get-started) |
| Day 179 | 审批、修改和拒绝交互 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 完成有确认反馈的审批界面 | [Streamlit 入门](https://docs.streamlit.io/get-started) |
| Day 180 | SSE 或轮询与取消 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 实现实时进度和取消 | [MDN SSE](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) |
| Day 181 | 端到端测试与外部试用 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 邀请非开发者完成核心任务 | [FastAPI 测试](https://fastapi.tiangolo.com/tutorial/testing/) |
| Day 182 | 闸门 G6 与休息 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 只修复最影响使用的三个问题 | [GitHub README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |

### Week 27｜Docker、CI/CD 与云部署

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 183 | 容器、镜像和运行时概念 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 容器化最小 FastAPI 服务 | [Docker 入门](https://docs.docker.com/get-started/) |
| Day 184 | Dockerfile 分层和非 root | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 构建更小且非 root 的镜像 | [Dockerfile 最佳实践](https://docs.docker.com/build/building/best-practices/) |
| Day 185 | 健康检查和配置注入 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 容器健康检查与环境配置生效 | [Dockerfile 最佳实践](https://docs.docker.com/build/building/best-practices/) |
| Day 186 | Docker Compose 编排 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 启动 API、PostgreSQL 和 Redis | [Docker Compose](https://docs.docker.com/compose/gettingstarted/) |
| Day 187 | GitHub Actions lint、test、eval | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | PR 自动执行质量门禁 | [GitHub Actions](https://docs.github.com/actions/get-started/quickstart) |
| Day 188 | 部署到一个云平台 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 获得可访问的 HTTPS Demo | [GitHub 部署](https://docs.github.com/actions/deployment/about-deployments/deploying-with-github-actions) |
| Day 189 | 干净环境重建与休息 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 按文档从零完成一次部署 | [Docker 入门](https://docs.docker.com/get-started/) |

### Week 28｜可观测性、评测门禁与成本

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 190 | 结构化日志和 request_id | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 关联一次请求的所有日志 | [Python logging](https://docs.python.org/3/howto/logging.html) |
| Day 191 | OpenTelemetry 基础 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 生成第一个端到端 trace | [OpenTelemetry Python](https://opentelemetry.io/docs/languages/python/) |
| Day 192 | 模型、检索、工具和数据库 span | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 定位一次慢请求的主要耗时 | [OpenTelemetry Python](https://opentelemetry.io/docs/languages/python/) |
| Day 193 | 成功率、P50/P95 和错误率 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 生成服务指标报告 | [OpenTelemetry Python](https://opentelemetry.io/docs/languages/python/) |
| Day 194 | token、费用和工具错误率 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 按用户和任务统计成本 | [成本优化](https://developers.openai.com/api/docs/guides/cost-optimization) |
| Day 195 | 评测阈值接入 CI | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 指标低于阈值时阻止发布 | [OpenAI Evals](https://developers.openai.com/api/docs/guides/evals)；[GitHub Actions](https://docs.github.com/actions/get-started/quickstart) |
| Day 196 | 周验收与休息 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 展示质量、性能和成本看板 | [Agents SDK Tracing](https://openai.github.io/openai-agents-python/tracing/) |

### Week 29｜安全、负载与故障演练

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 197 | 限流、上传限制和密钥轮换 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 验证超限请求被安全拒绝 | [OpenAI 限流](https://developers.openai.com/api/docs/guides/rate-limits) |
| Day 198 | 日志与 trace 脱敏 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 敏感内容不进入遥测 | [Agents SDK Tracing](https://openai.github.io/openai-agents-python/tracing/) |
| Day 199 | 提示注入和数据外泄红队 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 运行并记录安全测试 | [OWASP LLM Top 10](https://genai.owasp.org/llm-top-10/) |
| Day 200 | 基础并发和负载测试 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 测量容量拐点和 P95 | [Locust 文档](https://docs.locust.io/en/stable/) |
| Day 201 | 模型、数据库和 Redis 故障 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 验证降级、超时和恢复 | [PostgreSQL 备份恢复](https://www.postgresql.org/docs/current/backup.html) |
| Day 202 | 备份、恢复、回滚和 runbook | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 完成一次真实恢复演练 | [PostgreSQL 备份恢复](https://www.postgresql.org/docs/current/backup.html) |
| Day 203 | 闸门 G7 与休息 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 解释完整质量、成本和故障路径 | [OpenAI 安全最佳实践](https://developers.openai.com/api/docs/guides/safety-best-practices) |

### Week 30｜最终评测与重构

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 204 | 扩展黄金集到 50—100 条 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 覆盖正常、边界、拒答和安全场景 | [OpenAI Evals](https://developers.openai.com/api/docs/guides/evals) |
| Day 205 | 检索指标总评 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 统计 recall、过滤和检索延迟 | [信息检索评测](https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-of-ranked-retrieval-results-1.html) |
| Day 206 | 生成指标总评 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 统计正确性、引用和拒答 | [OpenAI Graders](https://developers.openai.com/api/docs/guides/graders) |
| Day 207 | Agent 轨迹与任务完成评测 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 统计工具选择、参数和完成率 | [Agents SDK Tracing](https://openai.github.io/openai-agents-python/tracing/) |
| Day 208 | 权限与安全回归 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 确保所有越权样例失败 | [OpenAI 安全最佳实践](https://developers.openai.com/api/docs/guides/safety-best-practices) |
| Day 209 | 修复前三类错误并对比 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 给出修复前后指标和取舍 | [OpenAI Evals](https://developers.openai.com/api/docs/guides/evals) |
| Day 210 | 发布候选版与休息 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 冻结范围和已知限制 | [GitHub Actions](https://docs.github.com/actions/get-started/quickstart) |

### Week 31｜文档、Demo 与简历

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 211 | README 的业务背景和快速开始 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 陌生人 15 分钟内启动项目 | [GitHub README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |
| Day 212 | 架构图、数据流和权限矩阵 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 文档与当前实现保持一致 | [C4 Model](https://c4model.com/)；[Mermaid Flowchart](https://mermaid.js.org/syntax/flowchart.html) |
| Day 213 | ADR、API 契约和数据字典 | ⭐⭐⭐ | ⭐⭐⭐⭐ | 解释三个关键技术取舍 | [GitHub README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |
| Day 214 | 评测、安全、成本和限制报告 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 所有简历数字可追溯 | [OpenAI Evals](https://developers.openai.com/api/docs/guides/evals) |
| Day 215 | 录制 3—5 分钟 Demo | ⭐⭐ | ⭐⭐⭐⭐⭐ | 展示正常流程、审批和失败恢复 | [GitHub README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |
| Day 216 | STAR 项目描述和 GitHub Profile | ⭐⭐ | ⭐⭐⭐⭐⭐ | 完成中英文项目摘要 | [GitHub README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |
| Day 217 | 外部复现与休息 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 记录并修复前三项表达问题 | [GitHub README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |

### Week 32｜面试、投递与后续计划

| 天数 | 当日学习内容 | 难度 | 重要性 | 完成标准 | 官方资料 |
|---:|---|:---:|:---:|---|---|
| Day 218 | Python、测试和排错面试 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 完成 45 分钟闭卷问答 | [pytest 入门](https://docs.pytest.org/en/stable/getting-started.html) |
| Day 219 | SQL、HTTP 和后端面试 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 现场写 JOIN、事务和接口设计 | [PostgreSQL 教程](https://www.postgresql.org/docs/current/tutorial.html)；[MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview) |
| Day 220 | RAG、评测和权限答辩 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 用主项目证据回答追问 | [OpenAI Evals](https://developers.openai.com/api/docs/guides/evals)；[PostgreSQL RLS](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) |
| Day 221 | Agent、MCP、安全和成本答辩 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 解释为何使用受控工作流 | [MCP 入门](https://modelcontextprotocol.io/docs/getting-started/intro)；[Agents SDK 人工审批](https://openai.github.io/openai-agents-python/human_in_the_loop/) |
| Day 222 | 第一次 60 分钟模拟面试 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 记录知识、表达和证据缺口 | [GitHub README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |
| Day 223 | 定向投递与第二次模拟面试 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 投递匹配岗位并修订简历 | [GitHub Issue 模板](https://docs.github.com/en/communities/using-templates-for-repositories/configuring-issue-templates-for-your-repository) |
| Day 224 | 最终闸门 G8 与 30/60/90 计划 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 形成下一阶段学习和求职清单 | [GitHub README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |

## 七、评测与调整体系

### 1. 项目评分

| 维度 | 权重 |
|---|---:|
| 业务问题与功能正确性 | 20 |
| 独立实现与排错 | 15 |
| 测试与 AI 评测 | 20 |
| 工程质量 | 15 |
| 权限、安全与审计 | 10 |
| 部署、监控与成本 | 10 |
| 文档、Demo 与表达 | 10 |

### 2. 通过标准

- 85—100：通过；
- 70—84：有条件通过，下周修复前三项；
- 低于 70：暂停增加新技术，先补功能、测试和解释；
- 缺少可运行代码、测试或 README，最高 69 分；
- 主项目缺少权限、评测或审批，不能进入最终发布。

### 3. AI 评测分层

检索层：

- recall@k；
- 元数据过滤正确率；
- 权限过滤正确率；
- 无结果检测；
- 检索延迟。

生成层：

- 答案正确性；
- groundedness；
- 引用支持率；
- 拒答准确率；
- 格式和结构化输出通过率。

Agent 层：

- 任务完成率；
- 工具选择正确率；
- 工具参数正确率；
- 平均步骤数；
- 重复调用率；
- 审批覆盖率；
- 失败恢复率。

生产层：

- 成功率；
- P50/P95 延迟；
- token 与单任务成本；
- 错误率和超时率；
- 安全事件和越权次数。

---

## 八、AI 辅助学习规则

### 可以使用 AI

- 解释错误栈；
- 提供逐级提示；
- 审查代码和架构；
- 生成边界测试清单；
- 模拟用户、评审和面试官；
- 比较方案并指出风险；
- 帮助查询官方资料。

### 不可以

- 未尝试就生成整个项目；
- 复制无法解释的代码；
- 用 AI 总结代替闭卷回忆；
- 把 AI 生成的指标写成真实结果；
- 在独立验收时查看完整实现；
- 使用无法说明作用的框架或依赖。

每次接受 AI 建议后，至少完成两项：

- 改变需求；
- 增加测试；
- 从空白重写关键部分；
- 解释技术取舍；
- 制造并定位错误；
- 与另一种方案比较。

---

## 九、资源和框架选择规则

- 每阶段只保留一个主框架和一个数据库；
- Tool Calling 先用普通 Python 实现，再选择一个 Agent 框架；
- 不同时学习多个向量数据库；
- 主项目优先 PostgreSQL + pgvector，避免过早引入复杂基础设施；
- 至少比较两个模型，但通过统一接口隔离供应商差异；
- 每周官方资料阅读不超过总时间的 20%；
- 教程代码必须经过需求变更和测试后才能进入项目；
- Kubernetes、GraphRAG、多 Agent 和模型微调作为毕业后的扩展项。

---

## 十、求职反馈系统

从 Week 8 开始：

- 每两周阅读 10 个目标 JD；
- 统计重复出现的技能和业务要求；
- 对照项目证据调整学习优先级；
- 每四周更新一次 GitHub；
- 每四周邀请一次外部复现或评审。

从 Week 24 开始：

- 编写简历项目描述；
- 进行小范围试投递；
- 记录面试中重复出现的问题；
- 优先修复真实岗位反馈暴露的缺口。

从 Week 28 开始：

- 正式定向投递；
- 每周至少完成一次模拟面试；
- 保留 AI 应用、AI 解决方案、内部转型和行业岗位四条路径；
- 不用一次面试结果否定整个学习路线。

---

## 十一、最终判断

完成本计划后，合理目标是：

- 具备初级 AI 应用工程师和 LLM 应用开发岗位的作品基础；
- 具备企业 AI 解决方案岗位的业务与技术表达能力；
- 能用代码、测试、评测、权限、部署和监控证明能力；
- 能把运营商和项目管理经验转化为差异化优势。

本计划不能替代多年生产经验，也不能直接保证进入头部公司的高级研发岗位。更现实的第一步是：

> 进入运营商、项目管理、企业数字化或行业软件场景的 AI 应用与解决方案岗位，用领域经验获取真实 AI 项目，再逐步提高后端、系统设计和平台工程深度。

---

## 最终执行原则

> 进度不由“学到第几天”决定，而由“是否通过阶段闸门”决定。

优先顺序：

1. 能把业务问题说清楚；
2. 能从空白实现核心链路；
3. 能测试、评测和排错；
4. 能处理权限、审批和失败；
5. 能部署、监控和解释成本；
6. 最后才增加新框架和复杂架构。
