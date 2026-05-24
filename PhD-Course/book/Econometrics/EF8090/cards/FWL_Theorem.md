---
orphan: true
---

# FWL Theorem

Parent: [02_OLS_Algebra_Finite_Sample_GLS](02_OLS_Algebra_Finite_Sample_GLS)

:::{admonition} Lemma
Frisch-Waugh-Lovell
In \(Y=X_1\beta_1+X_2\beta_2+u\), let \(M_1=I-X_1(X_1'X_1)^{-1}X_1'\). Then
\[
\hat\beta_2=(X_2'M_1X_2)^{-1}X_2'M_1Y.
\]

:::

FWL is the algebra behind controls, fixed effects, residualized IV, and double demeaning.
