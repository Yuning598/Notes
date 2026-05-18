# CARA-Normal 模型 - 最优风险暴露

来源：[Asset Pricing/Theoretical AP/01_Single_Period_Models#3.1 Single Risky Asset](Asset Pricing/Theoretical AP/01_Single_Period_Models#3.1 Single Risky Asset)；[Asset Pricing/Theoretical AP/01_Single_Period_Models#3.2 Multiple Risky Assets](Asset Pricing/Theoretical AP/01_Single_Period_Models#3.2 Multiple Risky Assets)

返回：[Asset Pricing/Theoretical AP/01_Single_Period_Models](Asset Pricing/Theoretical AP/01_Single_Period_Models)

:::{admonition} Definition (Definition)
若

$$
\tilde R\sim N(\mu,\sigma^2),
\qquad
u(w)=-e^{-\alpha w},
$$
则称为 CARA-Normal 组合选择环境。

**Proposition:** Proposition
单个风险资产下，最优风险暴露为

$$
\phi^*=\frac{\mu-R_f}{\alpha\sigma^2}.
$$

**Proposition:** Proposition
多个风险资产下，最优持仓向量为

$$
\boldsymbol\phi^*=\frac{1}{\alpha}\boldsymbol\Sigma^{-1}(\boldsymbol\mu-R_f\boldsymbol\iota).
$$

:::

## 单资产推导

$$
\begin{aligned}
Z
&=w_0R_f+\phi(\mu-R_f)-\frac12\alpha\phi^2\sigma^2, \\
\frac{\partial Z}{\partial\phi}
&=(\mu-R_f)-\alpha\phi\sigma^2 \\
&=0
&& \text{一阶条件} \\
\Longrightarrow \phi^*
&=\frac{\mu-R_f}{\alpha\sigma^2}.
\end{aligned}
$$

## 直觉

- 风险溢价越高，持仓越大。
- 方差越高，持仓越小。
- 风险厌恶越强，持仓越小。
- 不存在 wealth effect。
