# GMV 组合 - 全局最小方差组合

来源：[Asset Pricing/Theoretical AP/01_Single_Period_Models#2.4 Mean-Variance Frontier without a Risk-Free Asset](Asset Pricing/Theoretical AP/01_Single_Period_Models#2.4 Mean-Variance Frontier without a Risk-Free Asset)

返回：[Asset Pricing/Theoretical AP/01_Single_Period_Models](Asset Pricing/Theoretical AP/01_Single_Period_Models)

:::{admonition} Definition (Definition)
GMV 组合是在“完全投资于风险资产”约束下，使方差最小的组合。

**Proposition:** Proposition
解为

$$
\pi_{GMV}=\frac{\Sigma^{-1}\iota}{\iota'\Sigma^{-1}\iota}.
$$

:::

## 推导

$$
\begin{aligned}
\min_\pi\;&\frac12\pi'\Sigma\pi
\qquad \text{s.t.} \quad \iota'\pi=1, \\
\mathcal L
&=\frac12\pi'\Sigma\pi-\lambda(\iota'\pi-1), \\
\nabla_\pi \mathcal L=0
&\Longrightarrow \Sigma\pi=\lambda\iota \\
&\Longrightarrow \pi=\lambda\Sigma^{-1}\iota, \\
\iota'\pi=1
&\Longrightarrow \lambda=\frac{1}{\iota'\Sigma^{-1}\iota}.
\end{aligned}
$$
