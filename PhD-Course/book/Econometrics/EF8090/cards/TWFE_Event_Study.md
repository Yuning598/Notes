---
orphan: true
---

# TWFE Event Study

Parent: [12_DiD_Fixed_Effects_Event_Study](12_DiD_Fixed_Effects_Event_Study)

:::{admonition} Definition (Dynamic TWFE event study)
\[
Y_{it}=\alpha_i+\lambda_t+\sum_{k\ne -1}\tau_k1[t-G_i=k]+u_{it}.
\]

:::

Pre-treatment \(\tau_k\) for \(k<0\) are pre-trend diagnostics. With staggered timing and heterogeneous effects, static TWFE can use problematic comparisons, so cohort-time aggregation should be made explicit.
