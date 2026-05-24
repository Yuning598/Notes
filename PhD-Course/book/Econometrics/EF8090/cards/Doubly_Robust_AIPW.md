---
orphan: true
---

# Doubly Robust AIPW

Parent: [06_Potential_Outcomes_LATE_Roy_MTE](06_Potential_Outcomes_LATE_Roy_MTE)

:::{admonition} Definition (AIPW score for ATE)
\[
\psi=\mu_1(X)-\mu_0(X)+\frac{D(Y-\mu_1(X))}{p(X)}-\frac{(1-D)(Y-\mu_0(X))}{1-p(X)}.
\]

:::

At true nuisance functions, \(E[\psi]=ATE\)。The score combines regression adjustment and propensity weighting.
