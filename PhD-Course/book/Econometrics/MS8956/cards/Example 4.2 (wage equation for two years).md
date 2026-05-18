---
orphan: true
---

:::{admonition} Example
Example 4.2 (wage equation for two years)
我们在 Griliches 练习中使用的 NLS-Y 数据包含 1980 年的信息，因此我们可以估计两个工资方程：
$$LW69_i = \phi_1 + \beta_1 S69_i + \gamma_1 IQ_i + \pi_1 EXPR69_i + \epsilon_{i1}$$
$$LW80_i = \phi_2 + \beta_2 S80_i + \gamma_2 IQ_i + \pi_2 EXPR80_i + \epsilon_{i2}$$

---
**Example 4.2 (continued)**
For the two-equation system of wage equations for two years, the stacked coefficient vector $\delta$ is
$$\delta = (\phi_1, \beta_1, \gamma_1, \pi_1, \phi_2, \beta_2, \gamma_2, \pi_2)'$$
It would be interesting to test $H_0 : \beta_1 = \beta_2$ and $\pi_1 = \pi_2$ (the schooling and experience premia remained stable over time). The hypothesis can be written as $R\delta = r$. Nonlinear cross-equations restrictions can also be tested by Proposition 3.3 or Proposition 3.8.
:::

