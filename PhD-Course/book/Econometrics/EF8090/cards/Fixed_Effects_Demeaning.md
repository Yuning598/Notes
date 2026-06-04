---
orphan: true
---

# Fixed Effects Demeaning

Parent: [02_OLS_Algebra_Finite_Sample_GLS](02_OLS_Algebra_Finite_Sample_GLS) | [07_DiD_RD_Nonparametric_Kernel](07_DiD_RD_Nonparametric_Kernel)

:::{admonition} Lemma: Within transformation
In \(y_{it}=\alpha_i+x_{it}'\beta+u_{it}\), OLS with individual dummies gives the same \(\hat\beta\) as
\[
y_{it}-\bar y_i=(x_{it}-\bar x_i)'\beta+(u_{it}-\bar u_i).
\]

:::

This is FWL with the dummy matrix as controls.
