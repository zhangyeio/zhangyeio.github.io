---
layout: post
title: "线性注意力机制：从 DeltaNet 和 KDA 到推理引擎"
date: 2026-11-09 00:00:00 +0800
permalink: /2026/11/09/ai-infra-linear-attention/
categories: [AI Infra, 大模型推理]
tags: [线性注意力, DeltaNet, KDA, vLLM]
description: "线性注意力技术修订全文，涵盖固定状态、分块推导、混合缓存与推测解码。"
excerpt: "从 DeltaNet 的残差写入到 KDA 的逐通道遗忘，再到推理引擎如何处理分块计算、缓存复用与推测验证。"
---

原文作者 **binnnliu**。本页收录 64 页技术修订全文，保留公式、示意图和三色标注。**绿色**标出核心结论，**蓝色**标出公式与推导，**橙色**标出适用条件与边界。

## 本页目录


- [Prefill 与 Decode 的成本](#reading-page-04)
- [从线性注意力到 KDA](#reading-page-05)
- [状态结构与并行条件](#reading-page-09)
- [从在线优化理解状态更新](#reading-page-15)
- [推理引擎中的 KDA](#reading-page-19)
- [KDA 的投影与 Decode 实现](#reading-page-34)
- [KDA 的 Prefill 分块推导](#reading-page-38)
- [结论与复现](#reading-page-56)
- [参考资料与附录](#reading-page-58)

<p><img src="{{ '/assets/ai-infra-linear-attention/page-01.png' | relative_url }}" alt="第 1 页 · 封面与目录" width="900" height="1273" style="height:auto" decoding="async"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-02.png' | relative_url }}" alt="第 2 页 · 封面与目录" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-03.png' | relative_url }}" alt="第 3 页 · 封面与目录" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<h2 id="reading-page-04">Prefill 与 Decode 的成本</h2>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-04.png' | relative_url }}" alt="第 4 页 · Prefill 与 Decode 的成本" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<h2 id="reading-page-05">从线性注意力到 KDA</h2>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-05.png' | relative_url }}" alt="第 5 页 · 从线性注意力到 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-06.png' | relative_url }}" alt="第 6 页 · 从线性注意力到 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-07.png' | relative_url }}" alt="第 7 页 · 从线性注意力到 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-08.png' | relative_url }}" alt="第 8 页 · 从线性注意力到 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<h2 id="reading-page-09">状态结构与并行条件</h2>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-09.png' | relative_url }}" alt="第 9 页 · 状态结构与并行条件" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-10.png' | relative_url }}" alt="第 10 页 · 状态结构与并行条件" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-11.png' | relative_url }}" alt="第 11 页 · 状态结构与并行条件" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-12.png' | relative_url }}" alt="第 12 页 · 状态结构与并行条件" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-13.png' | relative_url }}" alt="第 13 页 · 状态结构与并行条件" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-14.png' | relative_url }}" alt="第 14 页 · 状态结构与并行条件" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<h2 id="reading-page-15">从在线优化理解状态更新</h2>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-15.png' | relative_url }}" alt="第 15 页 · 从在线优化理解状态更新" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-16.png' | relative_url }}" alt="第 16 页 · 从在线优化理解状态更新" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-17.png' | relative_url }}" alt="第 17 页 · 从在线优化理解状态更新" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-18.png' | relative_url }}" alt="第 18 页 · 从在线优化理解状态更新" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<h2 id="reading-page-19">推理引擎中的 KDA</h2>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-19.png' | relative_url }}" alt="第 19 页 · 推理引擎中的 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-20.png' | relative_url }}" alt="第 20 页 · 推理引擎中的 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-21.png' | relative_url }}" alt="第 21 页 · 推理引擎中的 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-22.png' | relative_url }}" alt="第 22 页 · 推理引擎中的 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-23.png' | relative_url }}" alt="第 23 页 · 推理引擎中的 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-24.png' | relative_url }}" alt="第 24 页 · 推理引擎中的 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-25.png' | relative_url }}" alt="第 25 页 · 推理引擎中的 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-26.png' | relative_url }}" alt="第 26 页 · 推理引擎中的 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-27.png' | relative_url }}" alt="第 27 页 · 推理引擎中的 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-28.png' | relative_url }}" alt="第 28 页 · 推理引擎中的 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-29.png' | relative_url }}" alt="第 29 页 · 推理引擎中的 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-30.png' | relative_url }}" alt="第 30 页 · 推理引擎中的 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-31.png' | relative_url }}" alt="第 31 页 · 推理引擎中的 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-32.png' | relative_url }}" alt="第 32 页 · 推理引擎中的 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-33.png' | relative_url }}" alt="第 33 页 · 推理引擎中的 KDA" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<h2 id="reading-page-34">KDA 的投影与 Decode 实现</h2>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-34.png' | relative_url }}" alt="第 34 页 · KDA 的投影与 Decode 实现" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-35.png' | relative_url }}" alt="第 35 页 · KDA 的投影与 Decode 实现" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-36.png' | relative_url }}" alt="第 36 页 · KDA 的投影与 Decode 实现" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-37.png' | relative_url }}" alt="第 37 页 · KDA 的投影与 Decode 实现" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<h2 id="reading-page-38">KDA 的 Prefill 分块推导</h2>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-38.png' | relative_url }}" alt="第 38 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-39.png' | relative_url }}" alt="第 39 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-40.png' | relative_url }}" alt="第 40 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-41.png' | relative_url }}" alt="第 41 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-42.png' | relative_url }}" alt="第 42 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-43.png' | relative_url }}" alt="第 43 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-44.png' | relative_url }}" alt="第 44 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-45.png' | relative_url }}" alt="第 45 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-46.png' | relative_url }}" alt="第 46 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-47.png' | relative_url }}" alt="第 47 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-48.png' | relative_url }}" alt="第 48 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-49.png' | relative_url }}" alt="第 49 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-50.png' | relative_url }}" alt="第 50 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-51.png' | relative_url }}" alt="第 51 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-52.png' | relative_url }}" alt="第 52 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-53.png' | relative_url }}" alt="第 53 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-54.png' | relative_url }}" alt="第 54 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-55.png' | relative_url }}" alt="第 55 页 · KDA 的 Prefill 分块推导" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<h2 id="reading-page-56">结论与复现</h2>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-56.png' | relative_url }}" alt="第 56 页 · 结论与复现" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-57.png' | relative_url }}" alt="第 57 页 · 结论与复现" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<h2 id="reading-page-58">参考资料与附录</h2>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-58.png' | relative_url }}" alt="第 58 页 · 参考资料与附录" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-59.png' | relative_url }}" alt="第 59 页 · 参考资料与附录" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-60.png' | relative_url }}" alt="第 60 页 · 参考资料与附录" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-61.png' | relative_url }}" alt="第 61 页 · 参考资料与附录" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-62.png' | relative_url }}" alt="第 62 页 · 参考资料与附录" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-63.png' | relative_url }}" alt="第 63 页 · 参考资料与附录" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>

<p><img src="{{ '/assets/ai-infra-linear-attention/page-64.png' | relative_url }}" alt="第 64 页 · 参考资料与附录" width="900" height="1273" style="height:auto" decoding="async" loading="lazy"></p>
