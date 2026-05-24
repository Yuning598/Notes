---
orphan: true
---

# CLT and Cramer-Wold

Parent: [03_Asymptotics_OLS_Inference_Hypothesis_Testing](03_Asymptotics_OLS_Inference_Hypothesis_Testing)

:::{admonition} Lemma
Multivariate CLT
If \(Z_i\) are iid with \(E[Z_i]=0\), \(E[Z_iZ_i']=\Omega\), then
\[
\frac1{\sqrt n}\sum_iZ_i\to_dN(0,\Omega).
\]

:::

Cramer-Wold proves vector convergence by showing \(a'Z_n\to_d a'Z\) for every fixed vector \(a\)。
