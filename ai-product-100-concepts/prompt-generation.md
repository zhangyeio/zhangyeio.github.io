---
layout: post
title: "AI 核心概念 3/7：Prompt、上下文与生成控制"
date: 2026-08-07 10:03:00 +0800
permalink: /ai-product-100-concepts/prompt-generation/
description: "控制指令、上下文、随机性与输出契约。本篇收录 9 个 AI 产品核心概念。"
categories:
  - 人工智能
  - 产品方法
tags:
  - AI 产品经理
  - LLM
  - 产品方法
series: ai-product-100-concepts
chapter: 3
sitemap: true
---

<nav class="series-nav" aria-label="系列导航">
  <span><a href="/ai-product-100-concepts/understanding/">← 意图理解与对话管理</a></span>
  <a class="series-nav-home" href="/ai-product-100-concepts/">100 个概念总览</a>
  <span><a href="/ai-product-100-concepts/rag-knowledge/">RAG 与知识系统 →</a></span>
</nav>

**生命周期：设计** · 共 9 个概念

从提示词和系统指令，到上下文工程、缓存和结构化输出。

## 本篇目录

<nav class="chapter-concept-grid" aria-label="概念索引">
  <a href="#concept-02">02. Prompt 提示词</a>
  <a href="#concept-11">11. Streaming 流式输出</a>
  <a href="#concept-13">13. Temperature 温度参数</a>
  <a href="#concept-14">14. System Prompt 系统提示词</a>
  <a href="#concept-15">15. Few-shot Learning 少样本学习</a>
  <a href="#concept-16">16. Chain-of-Thought 思维链</a>
  <a href="#concept-64">64. 上下文工程</a>
  <a href="#concept-65">65. 提示缓存</a>
  <a href="#concept-66">66. 结构化输出</a>
</nav>

---

<a id="concept-02"></a>

## 02. Prompt 提示词

*Prompt Engineering*

> 类比：像给新员工写的「岗位 SOP + 工作样例」，同一个人，指令写清楚就干得好，写含糊就乱来；Prompt 不是聊天，是精确下指令。

### 专业定义

Prompt 是发送给模型的输入指令集合，包含角色、任务、约束与上下文；Prompt Engineering 是通过结构化设计输入，引导模型输出分布朝向期望结果偏移的技术。

### 核心机制

模型基于 prompt 中每个 token 调整后续 token 的概率分布。一句「请用 JSON 格式输出」即可显著拉高输出结构化 JSON 的概率；指令越模糊，多个候选方向概率越接近，输出越发散。

### 好 Prompt 五要素

角色设定（Role）你是谁 / 以什么身份作答。

任务描述（Task）做什么、目标是什么。

输出约束（Constraint）格式、长度、语气、禁止项。

上下文信息（Context）参考资料、用户状态、业务规则。

输出结构/示例（Output Schema）规定输出 JSON 字段与类型，并按需提供少量高质量 Few-shot 示例；这是产品级 Prompt 稳定可控的关键，能大幅降低下游解析失败（见 [66](#concept-66) 输出契约）。

### 产品启示

同一模型在不同 Prompt 与上下文设计下，输出质量可能出现显著差异。许多效果问题可以先通过澄清任务、补充上下文、提供示例和约束输出改善；但若瓶颈来自模型能力、数据质量或检索链路，仅优化 Prompt 并不足够。（相关实践可进一步参见 [64](#concept-64) 上下文工程）


---

<a id="concept-11"></a>

## 11. Streaming 流式输出

*Streaming / SSE*

> 类比：像「边写边发微信」，不等整段想好再发，每打出一个字就先发过去，你感知到的等待从十几秒降到不到一秒。

### 专业定义

流式输出指模型每生成一个 token 即通过持久连接实时推送到前端的传输方式，典型实现为 SSE（Server-Sent Events）或 WebSocket 分块传输。

### 核心机制

不等全部生成完再返回，逐 token 推送。用户感知等待时间从「整段生成时长（数秒至十几秒）」降为「首 token 延迟」。

### 产品启示（三指标写进 PRD）

TTFT（首 Token 延迟），用户感知快慢关键；

TPS（每秒输出 token 数），决定文字蹦出速度；

断流重连网络波动时续传策略，不设计上线必出问题。

对生成类 AI 产品，流式输出是基本生存线，非锦上添花。


---

<a id="concept-13"></a>

## 13. Temperature 温度参数

*Temperature / Sampling*

> 类比：像「创意开关」，调低=照本宣科、每次都一样稳；调高=放它自由发挥、每次都不同；但它只管「稳不稳」，不管「对不对」。

### 专业定义

Temperature 是对输出概率分布进行缩放的采样超参。值越低分布越「尖」（趋近贪婪解码，输出更稳定）；值越高分布越「平」（低概率词更易被采中，输出更多样）。

### 核心机制

Temperature=0 时取概率最高词（贪心），几乎确定性输出；>1 时多样性上升但不确定性增大。注意，Temperature 控制「稳定性」，不控制「正确性」，若模型对错误答案的概率本就最高，设为 0 反而每次都选错。

### 产品启示（按场景取值）

客服/问答

较低取值通常更稳定，但具体效果取决于模型和接口；

创意写作

较高取值通常更具多样性，也可能增加不稳定性；

数据提取/格式化

接近 0 或使用确定性解码，并配合 schema 校验；即便如此，也不应承诺跨版本或跨基础设施完全复现。

PRD 中写明 Temperature 取值与原因，别让开发猜。


---

<a id="concept-14"></a>

## 14. System Prompt 系统提示词

*System Prompt*

> 类比：像贴在工位上的「岗位 JD + 红线清单」，用户看不见，但每次对话都先读一遍，决定 AI 的口吻、边界和行为方式。

### 专业定义

System Prompt 是每次对话前预设、通常由应用提供、优先级高于普通用户消息的行为与边界指令，决定模型的行为模式、能力边界与输出约束，其具体传递和缓存方式取决于产品与 API 实现。

### 核心机制

它定义角色一致性、行为边界（拒答范围、强制格式）、输出质量基线。它通常与对话和工具上下文共同影响模型行为；具体是否重复传输、是否缓存由 API 与应用实现决定。

### 产品启示

像写「岗位 JD」一样写 System Prompt，职责明确、边界清晰、带行为示例，而非「你是一个专业的客服」这类空话。成本上，System Prompt 长度即成本杠杆点，不是越长越好需平衡效果与每次重发的 token 开销。


---

<a id="concept-15"></a>

## 15. Few-shot Learning 少样本学习

*In-context Learning*

> 类比：像「给三道例题再让做题」，不用重训，提供少量高质量示例，模型就学会了「模糊偏好→具体动作」的映射。

### 专业定义

Few-shot 是在 Prompt 中提供少量「输入—输出」示例，引导模型在推理时就地习得映射规则，无需改参数、无需训练数据。区别于 Zero-shot（零示例）。

### 核心机制

模型可以从上下文中的示例归纳任务模式。示例的代表性、正确性和排列方式都可能影响结果，应通过评测确定数量与顺序。

### 产品启示

- 数量从少量高质量示例起步，通过业务评测确定；

常用场景

统一输出格式、定义分类标准、风格对齐；

决策路径

Zero-shot → 不够加 Few-shot → 仍不行再微调。


---

<a id="concept-16"></a>

## 16. Chain-of-Thought 思维链

*CoT*

> 类比：像为复杂任务增加中间工作区：把问题拆开处理可能提高成功率，但写出的步骤并不自动等同于真实、忠实的内部推理。

### 专业定义

Chain-of-Thought 通常指包含中间推导步骤的提示或输出形式。它在部分多步任务上可能改善表现，但公开的推导文本不应直接当作可验证的内部推理或事实依据。

### 核心机制

显式分解、草稿空间、搜索和额外采样都可以增加推理时计算；是否有效取决于模型和任务。对生产系统，更可靠的做法是验证最终结果、调用代码或规则工具，而不是只检查推导文字是否流畅。

### 三种用法

任务分解提示、带有简洁解题结构的示例，以及具有额外推理预算的模型。具体模型可能隐藏内部推理，仅返回答案或摘要（见 [62](/ai-product-100-concepts/model-selection/#concept-62)）。

### 产品启示（成本陷阱）

更长的推理过程通常会增加 token、延迟与成本，简单问题强行启用深度推理可能得不偿失。仅逻辑推理/多步计算启用，按任务类型动态决定。


---

<a id="concept-64"></a>

## 64. 上下文工程

*Context Engineering*

> 类比：像「给模型搭配一顿营养均衡的饭」，Prompt、记忆、RAG、工具和输出约束如何组合，会显著影响系统表现。

### 专业定义

上下文工程是近年受到关注的一组系统工程实践，系统化管理「送给模型的全部输入上下文」，涵盖 Prompt 设计、上下文窗口管理、记忆系统、RAG 检索、工具链编排与输出评估六大模块，目标是让模型在正确时机看到正确信息。

### 核心机制

把输入上下文质量视为输出质量的关键约束之一。手段包括稳定前缀缓存（见 [65](#concept-65)）、检索注入示例/决策史（prompt RAG）、分层记忆（见 [41](/ai-product-100-concepts/agents/#concept-41)）、按需加载工具（见 [12](/ai-product-100-concepts/agents/#concept-12)）、输出契约（见 [66](#concept-66)）。上下文工程把「调 prompt」升级为「编排上下文的程序」，可版本化、可回放、可观测。

### 产品启示

PM 应将「上下文质量」列为需求验收项，定义上下文模板的版本与 owner；避免上下文污染（无关长文淹没关键证据，见 [29](/ai-product-100-concepts/rag-knowledge/#concept-29) 中间迷失）。这是比单点 Prompt 技巧更可持续的质量杠杆（原 Prompt 概念见 [02](#concept-02)，现归入本学科）。


---

<a id="concept-65"></a>

## 65. 提示缓存

*Prompt Caching*

> 类比：像「把常用台词存进速记本」，系统提示每次都重发太烧钱，命中缓存就免重复计费，实测降本七到九成。

### 专业定义

提示缓存是推理服务对「重复出现的前缀（system prompt、长上下文块、示例、schema）」做复用、跳过重复 prefill 的优化，直接降本提速。

### 核心机制

将稳定前缀标记为可缓存，后续请求命中缓存时不再重复计算。命中缓存后通常可以降低重复计算成本与首 token 延迟，但收益取决于供应商计价、前缀长度和命中率。system prompt 与稳定工具定义常是重要的缓存候选，具体占比应通过业务埋点统计。

### 产品启示

把最大最稳定的内容（系统提示、知识块、schema）放提示最前面并显式标记缓存控制；可变部分（用户 query）放末尾。监控缓存命中率，并根据供应商缓存规则和真实流量设计前缀稳定性与续热策略。这是 2026 年性价比最高的成本杠杆之一（见 [24](/ai-product-100-concepts/model-selection/#concept-24)/[03](/ai-product-100-concepts/model-selection/#concept-03) 成本）。


---

<a id="concept-66"></a>

## 66. 结构化输出

*Structured Output / JSON Mode*

> 类比：像「给 AI 配一张填报表」，用 JSON Schema 框住输出格式，把概率文本变成可校验、可对接系统的标准字段。

### 专业定义

结构化输出指通过 JSON Schema / response_format / 强制工具调用等手段，约束模型输出为机器可解析的定长契约（字段、类型、顺序、失败响应），把概率文本变成可测试的软件接口。

### 核心机制

模型在解码时受 schema 约束（如 OpenAI response_format、Anthropic 工具强制输出、Gemini responseSchema），可显著提高语法层面的可解析性，但字段语义仍需校验，避免「今天模型变笨了」式的格式漂移。

### 产品启示

需要被下游系统消费的 AI 输出，通常应采用结构化输出、schema 校验和失败兜底。把「输出字段/顺序/类型/最大长度/畸形输入响应」写进 PRD（见 [56](/ai-product-100-concepts/model-selection/#concept-56) API 集成）。这是 AI 从「玩具」变「系统组件」的关键（见 [69](/ai-product-100-concepts/evaluation-governance/#concept-69) 可观测性做线上校验）。


---

<nav class="series-nav" aria-label="系列导航">
  <span><a href="/ai-product-100-concepts/understanding/">← 意图理解与对话管理</a></span>
  <a class="series-nav-home" href="/ai-product-100-concepts/">100 个概念总览</a>
  <span><a href="/ai-product-100-concepts/rag-knowledge/">RAG 与知识系统 →</a></span>
</nav>
