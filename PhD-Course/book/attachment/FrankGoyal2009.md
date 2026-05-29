---
title: "Capital Structure Decisions: Which Factors Are Reliably Important?"
year: 2009
journal: "Journal of Finance"
author: "Murray Z. Frank and Vidhan K. Goyal"
contribution: "用大样本公司特征系统检验资本结构决定因素，发现 trade-off theory 的若干预测更稳定，但盈利能力的经验关系常常为负。"
tags: [CapitalStructure, TradeOff, PeckingOrder, MarketTiming, Empirical]
type: Course
---

# Reading Note: Frank and Goyal (2009)

## 1. Core Question
Frank and Goyal 关心的是：哪些 firm characteristics 能稳定预测 leverage，且这些变量的方向更支持哪种资本结构理论。

## 2. Empirical Design
- leverage choice: market leverage 或 book leverage；total debt 或 long-term debt
- sample period: 1950-2003
- main variables: profitability, size, growth, taxes, tangibility, industry, risk, prior abnormal return, macro conditions

## 2.1 Abbreviations
- **STO** = **static trade-off theory**，静态权衡理论
- **PO** = **pecking order theory**，融资优序理论
- 这篇文章的核心就是看：哪些变量的经验方向更像 STO，哪些更像 PO

## 3. Theory Predictions

### 3.0 Hypotheses and Channels

| Hypothesis | Core channel | Intuition for leverage |
| :--- | :--- | :--- |
| STO | tax shield vs. distress cost | debt 带来税盾收益，但杠杆越高，财务困境和破产成本越大，所以存在最优杠杆 |
| PO | information asymmetry / financing deficit | 内部资金最便宜，外部融资有逆向选择成本，所以公司先用 retained earnings，再用 debt，最后才是 equity |

更具体地说：

- **STO channel**: 税盾收益 $+$ 破产/困境成本 $+$ 债务相关 agency cost
- **PO channel**: 信息不对称 $+$ 外部融资成本 $+$ 内部资金缺口（financing deficit）

### 3.1 Variable-by-variable mapping

![536](Pasted image 20260419142554.png)

| Variable | STO prediction | PO prediction | Main channel |
| :--- | :--- | :--- | :--- |
| profitability | 更高 | 更低 | 税盾价值 vs. internal cash flow |
| size | 更高 | 通常更高或不确定 | default risk / information problem |
| growth | 更低 | 可能更高 | distress cost vs. financing need |
| tangibility | 更高 | 更高 | collateral / information asymmetry |
| risk | 更低 | 更低 | distress cost / equity difficulty |

### 3.2 Profitability
- trade-off: 盈利越高，tax shield 越有价值，且 distress risk 更低，所以 leverage 应更高
- pecking order: 盈利越高，internal finance 越充足，所以 leverage 应更低

### 3.3 Size
- trade-off: 大公司更分散，default risk 更低，所以 leverage 应更高
- pecking order: 大公司更成熟，内部留存通常更充足，也更少依赖外部融资

### 3.4 Growth
- trade-off: 增长提高 distress cost，也放大 debt-related agency problems，所以 leverage 应更低
- pecking order: 投资需求更强的公司更容易依赖 external finance，因此 leverage 可能更高

### 3.5 Tangibility
- trade-off: tangible assets 便于抵押，降低 distress cost，所以 leverage 应更高
- pecking order: 有形资产通常意味着更低的信息不对称，也支持更高杠杆

### 3.6 Risk
- trade-off: 风险越高，financial distress cost 越大，所以 leverage 应更低
- pecking order: 风险高的公司更难使用 equity，杠杆也往往更低

## 4. Main Finding
这组证据整体更支持 **STO / trade-off theory**，但不是“全支持”：

| Channel / Theory | 含义 | 这篇论文里的证据 | 结论 |
| :--- | :--- | :--- | :--- |
| **STO / trade-off** | debt 有税盾收益，但也带来 distress cost，所以公司会在两者之间选一个最优杠杆 | 大多数变量方向与 STO 一致；size、tangibility、risk 等变量的方向总体比较稳定 | **主导解释**，是这篇文章最支持的框架 |
| **PO / pecking order** | 内部资金最便宜，外部融资有信息不对称成本，所以公司先 internal funds，再 debt，最后 equity | 一些变量也能解释，但整体不如 STO 稳定；尤其是许多核心结果不如 trade-off 统一 | **次强解释**，有部分支持，但不如 STO 稳 |
| **Market timing** | 公司会根据市场高估/低估或融资窗口来调整发行时点和资本结构 | prior abnormal return、宏观条件等变量没有给出很干净、稳定的识别 | **证据较弱**，这篇设计里没有被清晰识别出来 |

最关键的一点是 profitability：

- 按 **STO**，盈利越高，税盾价值越大，leverage 应更高
- 但数据里 profitability 往往是 **负相关**
- 这说明：简单 STO 不是完全充分的解释，PO 相关机制和其他因素也在起作用

## 5. Course Use
- 这篇是资本结构经验研究的 benchmark
- 适合作为后续分类的入口文献
- 相关课堂笔记：<a href="../01_Empirical_Corporate_Finance.html#section-papers">Part 1 papers section</a>

## 6. Symbol List

| Symbol / Term | Meaning |
| :--- | :--- |
| leverage | 资本结构指标；公司债务占比 |
| market leverage | debt / market value of assets (or equity) 口径的杠杆 |
| book leverage | debt / book value of assets 口径的杠杆 |
| total debt | 总债务 |
| long-term debt | 长期债务 |
| profitability | 盈利能力，常对应 ROA / cash flow 类指标 |
| size | 公司规模，常用 log(assets) 或 log(sales) |
| growth | 增长机会，常用 market-to-book 或 sales growth |
| tangibility | 资产有形性，常用 fixed assets / total assets |
| risk | 收益波动或资产波动，反映财务困境概率 |
| taxes | 税负或税盾相关变量 |
| prior abnormal return | 先前异常收益，常用于 market timing 代理 |
| macro conditions | 宏观融资环境、利率、信用条件等 |
