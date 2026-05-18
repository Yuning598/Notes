---
orphan: true
---

# Heteroskedastic Robust Variance

Parent: [03_OLS_Finite_Sample_Gauss_Markov_GLS](03_OLS_Finite_Sample_Gauss_Markov_GLS) | [05_OLS_Asymptotics_and_Robust_Inference](05_OLS_Asymptotics_and_Robust_Inference)

:::{admonition} Definition (Sandwich variance)
\[
\hat V=\hat Q^{-1}\hat\Omega\hat Q^{-1},
\qquad
\hat Q=\frac1n\sum_iX_iX_i',
\qquad
\hat\Omega=\frac1n\sum_i\hat e_i^2X_iX_i'.
\]

:::

Use robust variance when \(E[e^2\mid X]\) may depend on \(X\)。Using homoskedastic variance under heteroskedasticity invalidates t and Wald tests.
