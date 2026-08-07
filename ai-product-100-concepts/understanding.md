---
layout: post
title: "AI 核心概念 2/7：意图理解与对话管理"
date: 2026-08-07 10:02:00 +0800
permalink: /ai-product-100-concepts/understanding/
description: "识别意图、抽取实体并维护多轮上下文。本篇收录 3 个 AI 产品核心概念。"
categories:
  - 人工智能
  - 产品方法
tags:
  - AI 产品经理
  - LLM
  - 产品方法
series: ai-product-100-concepts
chapter: 2
sitemap: true
---

<nav class="series-nav" aria-label="系列导航">
  <span><a href="/ai-product-100-concepts/model-selection/">← 模型选型、训练与推理</a></span>
  <a class="series-nav-home" href="/ai-product-100-concepts/">100 个概念总览</a>
  <span><a href="/ai-product-100-concepts/prompt-generation/">Prompt、上下文与生成控制 →</a></span>
</nav>

**生命周期：设计** · 共 3 个概念

理解用户意图、抽取实体，并维持多轮交互所需的上下文。

## 本篇目录

<nav class="chapter-concept-grid" aria-label="概念索引">
  <a href="#concept-10">10. 多轮对话与上下文管理</a>
  <a href="#concept-49">49. NER 命名实体识别</a>
  <a href="#concept-50">50. Intent Recognition 意图识别</a>
</nav>

---

<a id="concept-10"></a>

## 10. 多轮对话与上下文管理

*Multi-turn & Context Management*

> 类比：像「每次开会都重发一遍聊天记录」，模型本身没记忆，你得把系统提示+历史消息整包再发；聊太久记录太满，最早的就被挤掉。

### 专业定义

大模型本身无状态，每次 API 调用都从零开始。多轮对话效果是后端在每次请求中拼接 System Prompt + 全部历史消息实现的；上下文管理即对这些消息的保留、压缩与抽取策略。

### 核心机制

每多一轮，发送内容线性增长，直至撞到上下文窗口天花板，最早对话被截断 → 用户感觉「AI 忘事」。

### 保留策略

滑动窗口仅保留最近 N 轮（简单，但丢早期信息）；

摘要压缩早期对话总结成摘要（省 token，丢细节）；

关键信息抽取实体/决策单独存储（最省，实现复杂）。

### 产品启示

建议混合方案，近期对话按 token 预算保留，更早内容可做摘要，关键实体（姓名/订单号/已确认需求）抽入 System Prompt。该设计直接决定用户觉得 AI「聪明还是健忘」。


---

<a id="concept-49"></a>

## 49. NER 命名实体识别

*Named Entity Recognition*

> 类比：像「从句子里抽填空项」，「明天下午三点点两杯瑞幸燕麦拿铁送公司」，抽出时间/数量/品牌/商品/地址五栏，缺一项下单 API 就调不动。

### 专业定义

NER 从文本中识别并分类预定义实体类型（人名/地名/时间/金额/组织/产品），是连接自然语言和结构化业务的桥梁。

### 产品启示

高频场景用专门 NER 小模型（成本低速度快），低频/复杂场景用大模型（泛化强但贵慢）。须先列全业务实体类型与标准格式（「明天」→具体日期、「北京」→标准城市编码），漏定义一类型即对应功能无法触发。


---

<a id="concept-50"></a>

## 50. Intent Recognition 意图识别

*Intent Recognition*

> 类比：像「听懂弦外之音」，「太贵了」可能是砍价、退单、换款或纯吐槽；意图分错，后面答得再好也是答非所问。

### 专业定义

意图识别是 NLU 核心任务，判断用户语句背后的真实意图以触发对应流程。

### 产品启示（三件事）

定义意图列表穷举并分类（咨询/投诉/下单/退款/闲聊/超范围），每意图对应流程；

处理模糊意图基于业务数据校准置信度阈值：高置信度可直接触发，中间区间追问，低置信度进入兜底；具体阈值不应照搬示例；

处理多意图一句话含多意图须并存处理。

意图识别准确率比回答质量更重要，意图分错，后面再优也是答非所问。需求阶段排好意图列表与优先级，优于上线后反复调模型。


---

<nav class="series-nav" aria-label="系列导航">
  <span><a href="/ai-product-100-concepts/model-selection/">← 模型选型、训练与推理</a></span>
  <a class="series-nav-home" href="/ai-product-100-concepts/">100 个概念总览</a>
  <span><a href="/ai-product-100-concepts/prompt-generation/">Prompt、上下文与生成控制 →</a></span>
</nav>
