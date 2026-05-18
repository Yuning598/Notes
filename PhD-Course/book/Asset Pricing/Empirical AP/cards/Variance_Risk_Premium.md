---
orphan: true
---

# Variance Risk Premium

Source: EF8083 slides, pp. 55-72  
Backlinks: [02_Implied_Volatility_VIX_VRP](../02_Implied_Volatility_VIX_VRP)

:::{admonition} Definition (Variance risk premium)
\[
VRP_t=IV_t-E_t^P[RV_{t,t+\tau}]
=
E_t^Q[RV_{t,t+\tau}]-E_t^P[RV_{t,t+\tau}].
\]

:::

Decomposition:
\[
IV_t=E_t^P[RV]+VRP_t.
\]

Interpretation: \(VRP_t>0\) means investors pay a premium for insurance against high future variance; sellers of variance insurance earn compensation.
