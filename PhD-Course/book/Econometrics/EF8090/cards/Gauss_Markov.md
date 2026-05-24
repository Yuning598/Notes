---
orphan: true
---

# Gauss-Markov

Parent: [02_OLS_Algebra_Finite_Sample_GLS](02_OLS_Algebra_Finite_Sample_GLS)

:::{admonition} Lemma
BLUE result
Under \(E[e\mid X]=0\) and \(\operatorname{Var}(e\mid X)=\sigma^2I\), OLS is best linear unbiased.

Any linear unbiased estimator can be written as
\[
\tilde\beta=\hat\beta+AY,
\qquad AX=0.
\]
Then
\[
\operatorname{Var}(\tilde\beta\mid X)-\operatorname{Var}(\hat\beta\mid X)=\sigma^2AA'\succeq0.
\]

:::

Homoskedasticity matters for efficiency, not for unbiasedness.
