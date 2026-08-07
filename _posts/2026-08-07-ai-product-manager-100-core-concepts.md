---
layout: post
title: "AI 产品经理的 100 个核心概念：从模型选型到评测治理"
date: 2026-08-07 10:00:00 +0800
permalink: /ai-product-100-concepts/
description: "用 AI 产品生命周期串联模型、Prompt、RAG、Agent、评测、安全与商业化的 100 个核心概念。"
excerpt: "一张面向 AI 产品决策的认知地图：100 个概念、7 个专题、20 个优先阅读入口。"
categories:
  - 人工智能
  - 产品方法
tags:
  - AI 产品经理
  - LLM
  - RAG
  - Agent
  - 模型评测
series: ai-product-100-concepts
---

<section class="concept-hero">
  <p class="concept-kicker">AI PRODUCT · KNOWLEDGE MAP</p>
  <p class="concept-lead">用产品生命周期串联模型、Prompt、RAG、Agent、评测、安全与商业化。重点不是背名词，而是理解每个概念会改变什么产品决策。</p>
  <div class="concept-stats" aria-label="系列规模">
    <span><strong>100</strong><small>核心概念</small></span>
    <span><strong>7</strong><small>能力专题</small></span>
    <span><strong>20</strong><small>优先阅读</small></span>
    <span><strong>1</strong><small>生命周期主线</small></span>
  </div>
</section>

从模型选型到评测治理，一张面向产品决策的认知地图。

> 阅读说明：这不是一份标准术语表，而是一套面向 AI 产品工作的编辑分类。概念按主要决策场景归类，但在真实系统中往往跨越多个阶段。

## 为什么这样组织

AI 产品工作的难点不在于背诵名词，而在于知道一个概念会改变什么决策：选哪个模型、把什么信息放进上下文、何时调用工具、如何验证结果，以及错误发生时由谁兜底。

贯穿全系列的生命周期是：**选型 → 设计 → 构建 → 运行 → 上线 → 评测 → 迭代**。建议第一次阅读先看标有“核心”的 20 个概念，再按工作问题进入对应专题。

## 七篇专题

<nav class="series-grid" aria-label="七篇专题">
  <a class="series-card" href="/ai-product-100-concepts/model-selection/">
    <span class="series-card-number">01</span>
    <span class="series-card-copy"><strong>模型选型、训练与推理</strong><small>选模型、训练方式、部署路径与成本边界</small></span>
    <span class="series-card-count">25 个</span>
  </a>
  <a class="series-card" href="/ai-product-100-concepts/understanding/">
    <span class="series-card-number">02</span>
    <span class="series-card-copy"><strong>意图理解与对话管理</strong><small>识别意图、抽取实体并维护多轮上下文</small></span>
    <span class="series-card-count">3 个</span>
  </a>
  <a class="series-card" href="/ai-product-100-concepts/prompt-generation/">
    <span class="series-card-number">03</span>
    <span class="series-card-copy"><strong>Prompt、上下文与生成控制</strong><small>控制指令、上下文、随机性与输出契约</small></span>
    <span class="series-card-count">9 个</span>
  </a>
  <a class="series-card" href="/ai-product-100-concepts/rag-knowledge/">
    <span class="series-card-number">04</span>
    <span class="series-card-copy"><strong>RAG 与知识系统</strong><small>构建可检索、可引用、可评测的知识链路</small></span>
    <span class="series-card-count">13 个</span>
  </a>
  <a class="series-card" href="/ai-product-100-concepts/multimodal/">
    <span class="series-card-number">05</span>
    <span class="series-card-copy"><strong>多模态与实时交互</strong><small>处理图像、语音、视频和跨模态体验</small></span>
    <span class="series-card-count">8 个</span>
  </a>
  <a class="series-card" href="/ai-product-100-concepts/agents/">
    <span class="series-card-number">06</span>
    <span class="series-card-copy"><strong>Agent、工具与工作流</strong><small>让模型在权限和状态约束下完成任务</small></span>
    <span class="series-card-count">17 个</span>
  </a>
  <a class="series-card" href="/ai-product-100-concepts/evaluation-governance/">
    <span class="series-card-number">07</span>
    <span class="series-card-copy"><strong>评测、安全、治理与商业化</strong><small>建立质量、安全、成本与增长闭环</small></span>
    <span class="series-card-count">25 个</span>
  </a>
</nav>

## 建议先读的 20 个概念

<nav class="core-concept-grid" aria-label="概念索引">
  <a href="/ai-product-100-concepts/model-selection/#concept-01">01. LLM 大语言模型</a>
  <a href="/ai-product-100-concepts/prompt-generation/#concept-02">02. Prompt 提示词</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-03">03. Token 文本处理单元</a>
  <a href="/ai-product-100-concepts/rag-knowledge/#concept-04">04. RAG 检索增强生成</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-05">05. Fine-tuning 微调</a>
  <a href="/ai-product-100-concepts/agents/#concept-06">06. Agent 智能体</a>
  <a href="/ai-product-100-concepts/agents/#concept-07">07. Function Calling 函数调用</a>
  <a href="/ai-product-100-concepts/rag-knowledge/#concept-08">08. Embedding 向量嵌入</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-09">09. Hallucination 幻觉</a>
  <a href="/ai-product-100-concepts/understanding/#concept-10">10. 多轮对话与上下文管理</a>
  <a href="/ai-product-100-concepts/agents/#concept-12">12. MCP 模型上下文协议</a>
  <a href="/ai-product-100-concepts/prompt-generation/#concept-13">13. Temperature 温度参数</a>
  <a href="/ai-product-100-concepts/prompt-generation/#concept-14">14. System Prompt 系统提示词</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-17">17. Prompt Injection 提示词注入</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-27">27. 开源模型 vs 闭源模型</a>
  <a href="/ai-product-100-concepts/agents/#concept-38">38. Workflow 工作流</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-51">51. Precision 精确率</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-52">52. Recall 召回率</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-57">57. Latency 延迟</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-63">63. 模型路由</a>
</nav>

## 完整索引

<nav class="all-concept-grid" aria-label="概念索引">
  <a href="/ai-product-100-concepts/model-selection/#concept-01">01. LLM 大语言模型</a>
  <a href="/ai-product-100-concepts/prompt-generation/#concept-02">02. Prompt 提示词</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-03">03. Token 文本处理单元</a>
  <a href="/ai-product-100-concepts/rag-knowledge/#concept-04">04. RAG 检索增强生成</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-05">05. Fine-tuning 微调</a>
  <a href="/ai-product-100-concepts/agents/#concept-06">06. Agent 智能体</a>
  <a href="/ai-product-100-concepts/agents/#concept-07">07. Function Calling 函数调用</a>
  <a href="/ai-product-100-concepts/rag-knowledge/#concept-08">08. Embedding 向量嵌入</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-09">09. Hallucination 幻觉</a>
  <a href="/ai-product-100-concepts/understanding/#concept-10">10. 多轮对话与上下文管理</a>
  <a href="/ai-product-100-concepts/prompt-generation/#concept-11">11. Streaming 流式输出</a>
  <a href="/ai-product-100-concepts/agents/#concept-12">12. MCP 模型上下文协议</a>
  <a href="/ai-product-100-concepts/prompt-generation/#concept-13">13. Temperature 温度参数</a>
  <a href="/ai-product-100-concepts/prompt-generation/#concept-14">14. System Prompt 系统提示词</a>
  <a href="/ai-product-100-concepts/prompt-generation/#concept-15">15. Few-shot Learning 少样本学习</a>
  <a href="/ai-product-100-concepts/prompt-generation/#concept-16">16. Chain-of-Thought 思维链</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-17">17. Prompt Injection 提示词注入</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-18">18. Pre-training 预训练</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-19">19. SFT 监督微调</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-20">20. RLHF 人类反馈强化学习</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-21">21. LoRA 低秩适应</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-22">22. Distillation 知识蒸馏</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-23">23. Quantization 量化</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-24">24. Inference 推理</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-25">25. Transformer 架构</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-26">26. Attention 注意力机制</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-27">27. 开源模型 vs 闭源模型</a>
  <a href="/ai-product-100-concepts/multimodal/#concept-28">28. 多模态模型</a>
  <a href="/ai-product-100-concepts/rag-knowledge/#concept-29">29. Context Window 上下文窗口</a>
  <a href="/ai-product-100-concepts/rag-knowledge/#concept-30">30. Vector Database 向量数据库</a>
  <a href="/ai-product-100-concepts/rag-knowledge/#concept-31">31. Chunking 文档分块</a>
  <a href="/ai-product-100-concepts/rag-knowledge/#concept-32">32. Reranking 重排序</a>
  <a href="/ai-product-100-concepts/rag-knowledge/#concept-33">33. Hybrid Search 混合搜索</a>
  <a href="/ai-product-100-concepts/rag-knowledge/#concept-34">34. Knowledge Graph 知识图谱</a>
  <a href="/ai-product-100-concepts/rag-knowledge/#concept-35">35. 知识库建设</a>
  <a href="/ai-product-100-concepts/rag-knowledge/#concept-36">36. 文档解析</a>
  <a href="/ai-product-100-concepts/rag-knowledge/#concept-37">37. Grounding 接地</a>
  <a href="/ai-product-100-concepts/agents/#concept-38">38. Workflow 工作流</a>
  <a href="/ai-product-100-concepts/agents/#concept-39">39. Multi-Agent 多智能体</a>
  <a href="/ai-product-100-concepts/agents/#concept-40">40. Planning 规划能力</a>
  <a href="/ai-product-100-concepts/agents/#concept-41">41. Memory 记忆机制</a>
  <a href="/ai-product-100-concepts/agents/#concept-42">42. ReAct 推理与行动</a>
  <a href="/ai-product-100-concepts/agents/#concept-43">43. Tool Use 工具使用</a>
  <a href="/ai-product-100-concepts/agents/#concept-44">44. Orchestrator 编排器</a>
  <a href="/ai-product-100-concepts/multimodal/#concept-45">45. TTS 文本转语音</a>
  <a href="/ai-product-100-concepts/multimodal/#concept-46">46. ASR 语音识别</a>
  <a href="/ai-product-100-concepts/multimodal/#concept-47">47. OCR 光学字符识别</a>
  <a href="/ai-product-100-concepts/multimodal/#concept-48">48. Text-to-Image 文生图</a>
  <a href="/ai-product-100-concepts/understanding/#concept-49">49. NER 命名实体识别</a>
  <a href="/ai-product-100-concepts/understanding/#concept-50">50. Intent Recognition 意图识别</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-51">51. Precision 精确率</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-52">52. Recall 召回率</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-53">53. Bad Case 分析</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-54">54. 数据标注</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-55">55. Human Evaluation 人工评测</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-56">56. API 接口</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-57">57. Latency 延迟</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-58">58. Rate Limiting 限流</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-59">59. 灰度发布</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-60">60. 数据飞轮</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-61">61. MoE 混合专家模型</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-62">62. 推理模型 / 推理时扩展</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-63">63. 模型路由</a>
  <a href="/ai-product-100-concepts/prompt-generation/#concept-64">64. 上下文工程</a>
  <a href="/ai-product-100-concepts/prompt-generation/#concept-65">65. 提示缓存</a>
  <a href="/ai-product-100-concepts/prompt-generation/#concept-66">66. 结构化输出</a>
  <a href="/ai-product-100-concepts/agents/#concept-67">67. 智能体间协议 A2A</a>
  <a href="/ai-product-100-concepts/rag-knowledge/#concept-68">68. 自主式 RAG</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-69">69. 大模型可观测性</a>
  <a href="/ai-product-100-concepts/agents/#concept-70">70. 电脑操作智能体</a>
  <a href="/ai-product-100-concepts/multimodal/#concept-71">71. 实时语音代理</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-72">72. 端侧 / 小语言模型</a>
  <a href="/ai-product-100-concepts/multimodal/#concept-73">73. 视频生成</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-74">74. 安全护栏</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-75">75. 推理引擎 / 模型服务</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-76">76. 推测解码</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-77">77. 多头潜在注意力 MLA</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-78">78. DPO 直接偏好优化</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-79">79. 训练后量化 PTQ</a>
  <a href="/ai-product-100-concepts/agents/#concept-80">80. Agent 框架</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-81">81. LLM-as-Judge / Agent 评测</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-82">82. 红队测试</a>
  <a href="/ai-product-100-concepts/agents/#concept-83">83. 人在回路 Human-in-the-loop</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-84">84. AI 合规框架</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-85">85. AI 成本工程 FinOps</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-86">86. AI 定价与价值定价</a>
  <a href="/ai-product-100-concepts/agents/#concept-87">87. Deep Research 深度研究智能体</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-88">88. Synthetic Data 合成数据</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-89">89. Personalization 个性化体验</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-90">90. AI Search 答案引擎</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-91">91. AI 原生应用</a>
  <a href="/ai-product-100-concepts/multimodal/#concept-92">92. 多模态产品交互</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-93">93. Agent UX 智能体交互设计</a>
  <a href="/ai-product-100-concepts/rag-knowledge/#concept-94">94. 长上下文策略</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-95">95. 评测驱动开发</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-96">96. 世界模型</a>
  <a href="/ai-product-100-concepts/agents/#concept-97">97. 具身智能</a>
  <a href="/ai-product-100-concepts/agents/#concept-98">98. 多智能体协作拓扑</a>
  <a href="/ai-product-100-concepts/model-selection/#concept-99">99. 模型供给与 MaaS</a>
  <a href="/ai-product-100-concepts/evaluation-governance/#concept-100">100. AI 产品增长与留存</a>
</nav>

## 使用这张地图

做方案评审时，可以依次问五个问题：

1. 当前任务需要什么级别的模型能力，成本和延迟预算是多少？

2. 模型需要看到哪些可信上下文，来源和版本如何追踪？

3. 哪些动作可以自动执行，哪些必须校验、确认或转人工？

4. 用什么评测集和指标证明新版本确实更好？

5. 如果模型出错，错误代价由谁承担，系统如何发现并止损？

## 版本说明

本文以 2026 年 8 月可用资料为基准。价格、模型能力、协议版本和法规适用范围会变化；正式决策前应核对供应商文档和主管机构发布的原始材料。

## 参考资料

1. Vaswani et al. (2017), [Attention Is All You Need](https://arxiv.org/abs/1706.03762)。

2. Hu et al. (2021), [LoRA: Low-Rank Adaptation of Large Language Models](https://arxiv.org/abs/2106.09685)。论文中的参数量与显存收益来自特定实验设置。

3. Leviathan et al. (2022), [Fast Inference from Transformers via Speculative Decoding](https://arxiv.org/abs/2211.17192)。加速幅度取决于模型、硬件和实现。

4. OpenAI Developer Docs, [Key concepts: Tokens](https://developers.openai.com/api/docs/concepts#tokens)。计费以供应商当前价格页为准。

5. Model Context Protocol, [Architecture](https://modelcontextprotocol.io/specification/2025-06-18/architecture)。实施时应核对最新规范。

6. A2A Protocol, [Official Specification](https://a2a-protocol.org/latest/specification/)。实施时应核对最新规范。

7. European Union, [Regulation (EU) 2024/1689 — Artificial Intelligence Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32024R1689)；另见欧盟委员会的 [AI Act 指南](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act)。

8. NIST, [Artificial Intelligence Risk Management Framework 1.0](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10)。该框架明确为自愿使用。

9. OWASP GenAI Security Project, [LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)。
