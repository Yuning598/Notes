---
title: "What Do We Know About Capital Structure? Some Evidence from International Data"
year: 1995
journal: "Journal of Finance"
author: "Raghuram G. Rajan and Luigi Zingales"
contribution: "用 G-7 国际样本检验资本结构的跨国稳健性，发现 leverage 的若干经验相关性在各国大体一致，但这些相关性未能完全区分不同理论。"
tags: [CapitalStructure, InternationalEvidence, TradeOff, PeckingOrder, Empirical]
type: Course
---

# Reading Note: Rajan and Zingales (1995)

## 1. Core Question
这篇文章问的是：美国样本里常见的 capital structure regularities，到了其他主要工业化国家是否仍然成立？

更进一步，作者想看的是：

- 这些相关性是否只是美国制度环境下的偶然现象
- 还是说它们反映了更一般的资本结构机制

## 2. Sample and Design
- sample: G-7 countries
  - United States
  - Japan
  - Germany
  - France
  - Italy
  - United Kingdom
  - Canada
- dependent variable: leverage
  - book leverage
  - market leverage
- key regressors:
  - tangibility
  - market-to-book
  - log sales
  - profitability
  - industry leverage

## 3. Main Channels

### 3.1 Trade-off channel
STO 主要关注税盾收益和困境成本：

- tangibility 高，抵押能力强，debt capacity 更高
- size 大，diversification 更强，distress risk 更低
- industry leverage 高，说明同业融资环境和 lender norms 支持更高杠杆

### 3.2 Pecking order channel
PO 主要关注信息不对称和内部融资优先：

- profitability 高，internal funds 更充足，所以外部融资需求更低
- growth opportunities 高时，公司可能更偏向保留融资弹性，短期杠杆未必更高

### 3.3 Market timing / equity issuance channel
市场时点也可能影响 leverage：

- market-to-book 高，有时意味着股价高、equity issuance 更容易
- 这会让高估值公司在融资后表现出更低 leverage

## 4. Main Findings
从跨国样本看，很多美国里的相关性也成立，但作者强调：这些相关性**并不等于**理论识别完成。

### 4.1 Stable correlations
- tangibility 和 leverage 正相关
- size 和 leverage 正相关
- profitability 和 leverage 负相关
- market-to-book 和 leverage 负相关
- industry leverage 很重要

### 4.2 Interpretation
- **tangibility / size / industry leverage** 更像是 trade-off 机制在起作用
- **profitability** 的负相关更接近 pecking order 的直觉
- **market-to-book** 的负相关在这门课的课件里被读作 **market timing 的支持性证据**，尤其是当这种关系主要由 large equity issuers 驱动时
- 因为 accounting rules、tax code、bankruptcy code 和金融制度不同，跨国数据能增加辨识力，但也让理论映射更复杂

### 4.3 Bottom line
这篇文章的结论不是“某一个理论赢了”，而是：

- leverage 的很多经验规律在国际样本里很稳
- 但这些规律背后的理论基础仍然部分 unresolved
- 所以它更像是一个 **cross-country benchmark**，而不是单一理论的终极检验

在这门课的讲法里，它还有一个更具体的作用：

- 它给了 market-to-book 与 leverage 负相关的早期跨国证据
- 这条证据后来被 Baker and Wurgler (2002) 重新组织成 market timing theory 的核心经验动机

## 5. Course Use
- 这篇是国际资本结构证据的经典 benchmark
- 和 Frank and Goyal (2009) 一起看，可以区分“美国样本规律”与“跨国稳健规律”
- 相关课堂笔记：<a href="../01_Empirical_Corporate_Finance.html#section-papers">Part 1 papers section</a>

## 6. Symbol List

| Symbol / Term | Meaning |
| :--- | :--- |
| leverage | 资本结构指标；文中主要看 book leverage 和 market leverage |
| book leverage | adjusted debt / (adjusted debt + adjusted equity) |
| market leverage | adjusted debt / (adjusted debt + market value of equity) |
| tangibility | 固定资产占比，衡量抵押品能力 |
| market-to-book | 市值与账面价值的比率，常代理 growth opportunities 或 equity timing |
| log sales | 公司规模的对数代理 |
| profitability | 盈利能力，文中常用 EBITDA / assets 一类指标 |
| industry leverage | 行业杠杆，反映同行融资环境和 lender norms |
| G-7 | 七个主要工业化国家样本 |
