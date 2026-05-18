---
orphan: true
---

:::{admonition} Example
Example 4.1 (wage equation)
在第 3 章的 Griliche 练习中，Griliche 在 KWW（“世界工作知识”测试得分）的工资方程中添加了：

$$LW_i = \phi_1 + \beta_1 S_i + \gamma_1 IQ_i + \pi EXPR_i + \epsilon_{i1}$$
$$KWW_i = \phi_2 + \beta_2 S_i + \gamma_2 IQ_i + \epsilon_{i2}$$

其中 $LW_i$ 是调查第一年第 $i$ 个个体的对数工资，$S_i$ 是受教育年限，$EXPR_i$ 是工作经验年限。$M = 2$，$L_1 = 4$，$L_2 = 3$，$y_{i1} = LW_i$，$y_{i2} = KWW_i$，并且

$$z_{i1} = \begin{bmatrix} 1 \\ S_i \\ IQ_i \\ EXPR_i \end{bmatrix}, \quad z_{i2} = \begin{bmatrix} 1 \\ S_i \\ IQ_i \end{bmatrix}, \quad \delta_1 = \begin{bmatrix} \phi_1 \\ \beta_1 \\ \gamma_1 \\ \pi \end{bmatrix}, \quad \delta_2 = \begin{bmatrix} \phi_2 \\ \beta_2 \\ \gamma_2 \end{bmatrix} \tag{4.1.2}$$

误差项 $\epsilon_{i1}$ 和 $\epsilon_{i2}$ 可能由于潜在的共同因素而相关。

---
**Example 4.1 (continued)**
令 $x_{im}$ 为第 $m$ 个方程的 $K_m$ 个工具变量向量。假设 $IQ_i$ 在两个方程中都是内生的，并且存在一个变量 $MED_i$（母亲教育水平）在两个方程中都是预定的。在这个例子中，$K_1 = K_2 = 4$，并且

$$x_{i1} = x_{i2} = \begin{bmatrix} 1 \\ S_i \\ EXPR_i \\ MED_i \end{bmatrix} \tag{4.1.3}$$
:::

