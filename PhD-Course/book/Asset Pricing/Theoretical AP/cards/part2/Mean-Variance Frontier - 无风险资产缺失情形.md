# Mean-Variance Frontier - 无风险资产缺失情形

来源：[Asset Pricing/Theoretical AP/01_Single_Period_Models#2.4 Mean-Variance Frontier without a Risk-Free Asset](Asset Pricing/Theoretical AP/01_Single_Period_Models#2.4 Mean-Variance Frontier without a Risk-Free Asset)

返回：[Asset Pricing/Theoretical AP/01_Single_Period_Models](Asset Pricing/Theoretical AP/01_Single_Period_Models)

:::{admonition} Definition (Definition)
在无风险资产时，均值—方差前沿由以下问题定义：

$$
\min_\pi \frac12\pi'\Sigma\pi
\quad \text{s.t.} \quad
\mu'\pi=\mu_{target},
\qquad
\iota'\pi=1.
$$

:::

记

$$
A=\mu'\Sigma^{-1}\mu,
\qquad
B=\mu'\Sigma^{-1}\iota,
\qquad
C=\iota'\Sigma^{-1}\iota.
$$

:::{admonition} Proposition
Proposition
前沿上任意组合都可写成 $\Sigma^{-1}\mu$ 与 $\Sigma^{-1}\iota$ 的线性组合。

**Proposition:** Proposition
前沿满足双曲线关系：

$$
\sigma_p^2=\frac{A-2B\mu_{target}+C\mu_{target}^2}{AC-B^2}.
$$

:::

## 记忆

- $\Sigma^{-1}\mu$ 对应“追求收益”的方向。
- $\Sigma^{-1}\iota$ 对应“满足完全投资约束”的方向。
- 整条前沿只需要这两个方向就能张成。
