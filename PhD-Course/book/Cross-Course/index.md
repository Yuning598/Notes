---
type: index
tags:
  - qe
  - cross-course
---

# Cross-Course Hub

这个入口把不同课程里反复出现的共同对象连起来。读法不是按课程顺序，而是先定位核心概念，再回到原始章节。

## Graph View

```{cross-course-graph}
:data: Cross-Course/data/qe_graph.yml
:height: 900px
```

## Concept Routes

| Route | Bridge | Main courses | Exam use |
| --- | --- | --- | --- |
| Pricing functional | [State prices / SDF / complete markets](bridges/State_Prices_SDF_Complete_Markets.md) | Microeconomics, Asset Pricing | no-arbitrage, complete markets, state-price computation |
| Linear pricing | [Risk aversion / mean-variance / CAPM](bridges/Risk_Aversion_Mean_Variance_CAPM.md) | Microeconomics, Asset Pricing | risk premium, two-fund separation, CAPM |
| Linear representation | [Projection / beta pricing](bridges/Projection_Beta_Pricing.md) | Econometrics, Empirical AP | beta, alpha, linear projection |
| Moment restrictions | [GMM / Euler equation](bridges/GMM_Euler_Equation.md) | Econometrics, Empirical AP | Euler moments, weighting matrix, overidentification |
| Empirical design | [Identification / Corporate Finance](bridges/Identification_Corporate_Finance.md) | Econometrics, Corporate Finance | IV, DiD, RD, event-study design |
| Dynamic methods | [Dynamic programming / HJB](bridges/Dynamic_Programming_HJB.md) | Asset Pricing, Microeconomics | Bellman equation, HJB, portfolio choice |

## Course Entry Points

- [Asset Pricing](../Asset%20Pricing/index.md): SDF, factor models, dynamic pricing, options, beliefs.
- [Corporate Finance](../Corporate%20Finance/index.md): financial policy, identification, payout, capital structure.
- [Econometrics](../Econometrics/index.md): projection, asymptotics, IV, GMM, treatment effects, panel data.
- [Microeconomics](../Microeconomic/index.md): preference, risk, general equilibrium, state prices, information.

## Maintenance Rule

Bridge notes should summarize only the shared object and translation map. Full derivations stay in the source chapter or card, then the bridge links back to that source.
