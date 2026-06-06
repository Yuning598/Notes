---
type: index
tags:
  - qe
  - cross-course
---

# Cross-Course Links

本页是 QE 跨课复习 Hub：先用图谱按课程、主题和 Exam Focus 定位考点，再进入 bridge note 深读共同数学对象，最后回到课程页和 ProblemSet 做同类题。

<iframe src="/PhD-Course/qe-knowledge-graph.html" title="QE Interactive Knowledge Graph" loading="lazy" style="width:100%;height:760px;border:0;display:block;border-radius:16px;"></iframe>

## 推荐使用方式

1. 先在图谱中筛选课程、主题或 Exam Focus，找出当前题型最可能涉及的节点。
2. 再读对应 bridge note，只抓共同数学对象、跨课命名和 QE 常见问法。
3. 最后回到课程页或 [QE ProblemSet](../ProblemSet/index.md)，用同类题检验是否会写证明、计算和解释。

## 6 条跨课主线

| 主题 | 共同数学对象 | 课程连接 | QE 题型 | 深读 |
| --- | --- | --- | --- | --- |
| State prices / SDF / complete markets | state price vector, SDF, risk-neutral probability | Micro uncertainty, Asset Pricing, QE-PS | rank 判断、状态价格区间、套利构造、代表性投资者定价 | [State prices, SDF, complete markets](bridges/State_Prices_SDF_Complete_Markets.md) |
| Risk aversion / mean-variance / CAPM | concavity, Arrow-Pratt curvature, covariance pricing | Micro risk attitude, Asset Pricing CAPM | Jensen、certainty equivalent、CARA-Normal demand、CAPM 证明 | [Risk aversion, mean-variance, CAPM](bridges/Risk_Aversion_Mean_Variance_CAPM.md) |
| Projection / beta pricing | linear projection, orthogonality, beta | Econometrics, Asset Pricing factor models | projection slope、orthogonality、beta-pricing、factor model | [Projection and beta pricing](bridges/Projection_Beta_Pricing.md) |
| GMM / Euler equation | moment condition, weighting matrix, overidentification | Econometrics, Empirical Asset Pricing | 写 moments、optimal weighting、J-test、SDF estimation | [GMM and Euler equation](bridges/GMM_Euler_Equation.md) |
| Identification / corporate finance | causal estimand, IV, DiD, RD assumptions | Econometrics, Corporate Finance papers | endogeneity、bias direction、IV critique、DiD/RD identification | [Identification and corporate finance](bridges/Identification_Corporate_Finance.md) |
| Dynamic programming / HJB | value function, state variable, boundary condition | Micro dynamic choice, Asset Pricing continuous time | Bellman/HJB、optimal stopping、smooth pasting、verification | [Dynamic programming and HJB](bridges/Dynamic_Programming_HJB.md) |

## 6 条最短复习路线

### State prices / SDF / complete markets

Micro uncertainty -> Arrow securities -> state prices -> SDF -> payoff matrix / arbitrage.

### Risk aversion / mean-variance / CAPM

Jensen inequality -> Arrow-Pratt risk premium -> CARA-Normal demand -> market clearing -> CAPM beta.

### Projection / beta pricing

Population projection -> orthogonality -> sample regression beta -> factor exposure -> expected return-beta relation.

### GMM / Euler equation

Euler equation -> unconditional moments -> GMM criterion -> optimal weighting -> overidentification test.

### Identification / corporate finance

Causal estimand -> endogeneity threat -> identification assumption -> empirical design -> paper critique.

### Dynamic programming / HJB

State variable -> Bellman recursion -> envelope / FOC -> HJB or stopping boundary -> verification.
