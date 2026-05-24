---
orphan: true
---

# Projection Matrix

Parent: [02_OLS_Algebra_Finite_Sample_GLS](02_OLS_Algebra_Finite_Sample_GLS)

:::{admonition} Definition (Projection and residual maker)
\[
P_X=X(X'X)^{-1}X',\qquad M_X=I-P_X.
\]
\[
\hat Y=P_XY,
\qquad
\hat e=M_XY.
\]

**Lemma:** Key properties
\[
P_X'=P_X,
\quad P_X^2=P_X,
\quad M_X'=M_X,
\quad M_X^2=M_X,
\quad M_XX=0.
\]

:::

Think: \(P_X\) keeps the component explained by \(X\); \(M_X\) removes it.
