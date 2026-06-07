---
orphan: true
---

# Correlation Risk Premium

导航：[Asset Pricing index](../../index.md) · [Empirical AP MOC](../00-MOC_EF8083_Empirical_Asset_Pricing.md) · 来源：[02_Implied_Volatility_VIX_VRP](../02_Implied_Volatility_VIX_VRP)

Index variance:
$$
\operatorname{Var}(R_m) =
\sum_iw_i^2\sigma_i^2
+2\sum_{i<j}w_iw_j\rho_{ij}\sigma_i\sigma_j.
$$

Equal weights, equal variance, equal correlation:
$$
\operatorname{Var}(R_m) =
\sigma^2\left[\frac1N+\frac{N-1}{N}\rho\right].
$$

The spread between index option implied variance and single-name option implied variances identifies risk-neutral average correlation. Difference between risk-neutral and physical correlation is the correlation risk premium.

Property 4 in [02_Implied_Volatility_VIX_VRP#Properties of implied variance](../02_Implied_Volatility_VIX_VRP.md): the implied-realized variance gap is more extreme for index options than for individual stocks because index variance contains a priced correlation component. In down markets, realized correlation rises and diversification benefits fall, so investors pay a premium to hedge correlation risk.
