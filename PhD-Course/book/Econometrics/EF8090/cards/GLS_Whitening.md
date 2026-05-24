---
orphan: true
---

# GLS Whitening

Parent: [02_OLS_Algebra_Finite_Sample_GLS](02_OLS_Algebra_Finite_Sample_GLS)

:::{admonition} Definition (GLS)
If \(\operatorname{Var}(e\mid X)=D\),
\[
\hat\beta_{GLS}=(X'D^{-1}X)^{-1}X'D^{-1}Y.
\]

**Lemma:** Whitening
Let \(\tilde Y=D^{-1/2}Y\), \(\tilde X=D^{-1/2}X\). Then transformed errors have identity variance, and OLS on \((\tilde Y,\tilde X)\) equals GLS.
:::

