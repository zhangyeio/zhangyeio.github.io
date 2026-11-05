---
layout: post
title: "Transformer 原来是这样：手绘漫画与注意力实验"
date: 2026-11-05 00:00:00 +0800
categories: [AI, Transformer]
permalink: /ai/transformer/2026/11/05/transformer-notebook.html
description: "用十二组手绘漫画、Q/K/V 数字推导和可操作的注意力计算器，从零理解 Transformer。"
---

Transformer 的核心思路是：**让每个文字片段按需要参考其他片段，逐层更新自己的表示；生成式模型再用它预测下一个片段。**

[打开完整手绘学习页 →](/transformer-notebook/)

这本学习笔记从文字切片与嵌入出发，用十二组“烦恼 → 办法”漫画，串起位置信息、自注意力、Q/K/V、多头、前馈网络、残差与归一化、因果遮罩和逐步生成，并区分原始编码器—解码器与仅解码器模型。

零基础实验区给出一组完整的数字推导：Q/K 点积、分数缩放、softmax 权重和 V 的加权混合。你还可以拖动分数滑块、开启因果遮罩，观察各位置权重与结果如何变化；所有演示数字均标为示意值。

页面支持笔记纸与黑板两套主题、手机阅读和学习进度保存，末尾附有质量、延迟、资源占用三把尺子，以及经过核实的四站学习路线。

资料依据包括 [Transformer 原论文](https://arxiv.org/html/1706.03762v7)、[PyTorch 注意力文档](https://docs.pytorch.org/docs/2.15/generated/torch.nn.functional.scaled_dot_product_attention.html)与 [TensorFlow 官方教程](https://www.tensorflow.org/text/tutorials/transformer)，详细引用保留在学习页内。
