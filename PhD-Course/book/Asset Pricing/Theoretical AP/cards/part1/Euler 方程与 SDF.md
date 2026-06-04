# Euler 方程与 SDF

来源：[Asset Pricing/Theoretical AP/01_Single_Period_Models#4.2 Euler Equation](Asset Pricing/Theoretical AP/01_Single_Period_Models#4.2 Euler Equation)

返回：[Asset Pricing/Theoretical AP/01_Single_Period_Models](Asset Pricing/Theoretical AP/01_Single_Period_Models)

:::{admonition} Proposition: Proposition
两期消费—投资问题的一阶条件给出 Euler 方程：

$$
p_i u_0'(c_0)=E[u_1'(\tilde c_1)\tilde x_i].
$$

:::

:::{admonition} Definition: 随机贴现因子（SDF）定义为

$$
\tilde m=\frac{u_1'(\tilde c_1)}{u_0'(c_0)}.
$$

**Proposition:** Proposition
因而价格满足

$$
\begin{aligned}
p_i
&=E\!\left[\frac{u_1'(\tilde c_1)}{u_0'(c_0)}\tilde x_i\right] \\
&=E[\tilde m\tilde x_i].
\end{aligned}
$$

:::

## 含义

资产价格等于未来支付在“边际效用状态价格”下的贴现期望。
