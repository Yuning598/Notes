---
orphan: true
---

# Martin Option-Implied Lower Bound

Source: EF8083 slides, pp. 300-322  
Backlinks: [06_Subjective_Expectations_Learning](../06_Subjective_Expectations_Learning) | [02_Implied_Volatility_VIX_VRP](../02_Implied_Volatility_VIX_VRP)

Risk-neutral expectation:
\[
E^Q[X]=R_fE[MX].
\]

Since \(E[MR]=1\):
\[
E^Q[R]=R_f.
\]

Risk-neutral variance:
\[
\operatorname{Var}^Q(R)
=
E^Q[R^2]-R_f^2
=
R_fE[MR^2]-R_f^2.
\]

Option prices identify risk-neutral variance. Under appropriate assumptions, this variance gives a lower bound on expected market excess return.

Economic intuition: if the option market prices a lot of risk-neutral variance, the physical expected return must be sufficiently high to compensate investors.
