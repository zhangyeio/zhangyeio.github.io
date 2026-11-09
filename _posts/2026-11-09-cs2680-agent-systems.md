---
layout: post
title: "哈佛 CS2680 中文学习教材：从 Claude Code 到 MadsOpt"
date: 2026-11-09 00:00:00 +0800
permalink: /2026/11/09/cs2680-agent-systems/
categories: [人工智能, Agent 工程]
tags: [CS2680, Claude Code, MCP, Agent 评测, MadsOpt]
description: "22 页中文学习教材，覆盖 Agent 执行循环、工具与上下文、多智能体、记忆可靠性、评测、成本与 MadsOpt 实践。"
excerpt: "用一个贯穿全书的 CSV 修复任务，学习如何搭建、验证和优化 Agent 系统。附中文 PDF、练习和四周学习路线。"
---

**[下载中文教材 PDF（22 页）]({{ '/assets/downloads/cs2680-agent-systems-zh.pdf' | relative_url }})**

一条“修复 CSV 导入器”的工单，怎样变成一组可验证的动作？教材用这个案例串起搜索、编辑、测试和交付，并讨论工具超时、重复写入、旧记忆干扰和评测泄漏等工程问题。

## 教材目录

1. **Agent 基础**　拆解模型、执行框架和环境，搭建有预算和终止条件的行动循环。
2. **Claude Code**　追踪一次请求的工具调用，理解项目规则、自动记忆、Skills、Hooks 和 MCP。
3. **工具与上下文**　选择搜索和编辑接口，控制输入、日志与权限。
4. **多智能体**　按任务依赖拆分工作，用独立工作区、结构化消息和测试完成交接。
5. **记忆与可靠性**　为记忆保留来源和有效期，用检查点、幂等键和环境证据恢复故障。
6. **评测与基准**　区分结果与行为验收，用配对实验衡量差异，记录版本、分母和泄漏风险。
7. **成本与性能**　核算每解决一题的费用，比较模型路由、上下文压缩、缓存和关键路径。
8. **MadsOpt 实践**　理解任务容器、补丁评分与预算，用受控实验比较并发、路由和停止策略。

PDF 含五张架构与流程图、各章练习、四周学习路线、术语表和可点击的来源索引。课程内容与截至 **2026 年 11 月 9 日** 的联网核验以不同颜色标出。CSV 案例和示例实验数据为教材编写时新增。

教材基于公开课程资料整理。课程原文、专题笔记和作业接口可从这些页面查阅。

- [Harvard CS2680 课程主页](https://cs2680.seas.harvard.edu/)
- [Agent Evaluation and Benchmarks](https://cs2680.seas.harvard.edu/notes/agent-evaluation)
- [Cost-effective Agents](https://cs2680.seas.harvard.edu/notes/cost-effective-agents)
- [Assignment 3：Harness Competition](https://cs2680.seas.harvard.edu/assignments/assignment3)
