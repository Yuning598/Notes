---
orphan: true
---

# Kernel Bandwidth Bias-Variance Tradeoff

Parent: [13_RD_Nonparametric_Kernel](13_RD_Nonparametric_Kernel)

:::{admonition} Lemma
Univariate kernel MSE
\[
MSE=O((nh)^{-1})+O(h^4).
\]
Equating rates gives
\[
h\asymp n^{-1/5}.
\]

:::

In \(q\) dimensions, rate becomes \(MSE=O(n^{-4/(q+4)})\), illustrating the curse of dimensionality.
