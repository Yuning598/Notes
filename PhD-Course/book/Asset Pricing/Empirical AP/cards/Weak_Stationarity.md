---
orphan: true
---

# Weak Stationarity

Source: EF8083 slides, pp. 9-10  
Backlinks: [01_Volatility_ARCH_GARCH](../01_Volatility_ARCH_GARCH)

:::{admonition} Definition (Weak stationarity)
$$ E[y_t]=\mu,\qquad \operatorname{Var}(y_t)=\sigma^2,\qquad \operatorname{Cov}(y_t,y_{t-s})=\gamma_s. $$
These moments do not depend on calendar time $t$.

:::

Key intuition: weak stationarity makes historical dependence informative for future forecasting. In volatility models, we usually require the variance process to have finite unconditional moments.
