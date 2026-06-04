---
orphan: true
---

# Omitted Variable Bias

Parent: [02_OLS_Algebra_Finite_Sample_GLS](02_OLS_Algebra_Finite_Sample_GLS)

:::{admonition} Lemma: Scalar OVB
True model:
\[
Y=\beta_0+\beta_1X_1+\beta_2X_2+U,
\qquad E[X_1U]=0.
\]
If \(X_2\) is omitted,
\[
\beta_1^*=\beta_1+\frac{\operatorname{Cov}(X_1,X_2)}{\operatorname{Var}(X_1)}\beta_2.
\]

:::

Bias vanishes if omitted variable has zero causal coefficient or is uncorrelated with included regressor.
