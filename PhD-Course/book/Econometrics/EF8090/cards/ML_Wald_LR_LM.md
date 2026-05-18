---
orphan: true
---

# ML Wald, LR, and LM Tests

Parent: [08_MLE_Asymptotics_and_ML_Tests](08_MLE_Asymptotics_and_ML_Tests)

:::{admonition} Definition (Three ML tests)
Wald:
\[
W=n r(\hat\theta)'[R\hat I^{-1}R']^{-1}r(\hat\theta).
\]
Likelihood ratio:
\[
LR=2\{\log\ell(\hat\theta)-\log\ell(\tilde\theta)\}.
\]
Lagrange multiplier:
\[
LM=S(\tilde\theta)'\hat I(\tilde\theta)^{-1}S(\tilde\theta).
\]

:::

Under \(q\) restrictions, all three converge to \(\chi_q^2\) under regularity and \(H_0\)。
