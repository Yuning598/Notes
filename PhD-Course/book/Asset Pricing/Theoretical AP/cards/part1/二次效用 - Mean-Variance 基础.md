# 二次效用 - Mean-Variance 基础

来源：[Asset Pricing/Theoretical AP/01_Single_Period_Models#1.5 Classic Utility Functions Comparison](Asset Pricing/Theoretical AP/01_Single_Period_Models#1.5 Classic Utility Functions Comparison)

返回：[Asset Pricing/Theoretical AP/01_Single_Period_Models](Asset Pricing/Theoretical AP/01_Single_Period_Models)

:::{admonition} Definition (Definition)
二次效用常写作

$$
u(w)=-\frac12(w-\zeta)^2,
$$
通常要求 $w<\zeta$，以保证边际效用为正。

:::

## 性质

若

$$
u(w)=-\frac12(w-\zeta)^2,
$$

则

$$
\begin{aligned}
E[u(\tilde w)]
&= -\frac12E[(\tilde w-\zeta)^2] \\
&= -\frac12\Big(E[\tilde w^2]-2\zeta E[\tilde w]+\zeta^2\Big) \\
&= -\frac12\Big(\operatorname{Var}(\tilde w)+E[\tilde w]^2-2\zeta E[\tilde w]+\zeta^2\Big) \\
&= -\frac12\operatorname{Var}(\tilde w)-\frac12\big(E[\tilde w]-\zeta\big)^2.
\end{aligned}
$$

故

$$
\max E[u(\tilde w)]
\Longleftrightarrow
\max \Big\{E[\tilde w]-\frac{1}{2}(E[\tilde w]-\zeta)^2-\frac12\operatorname{Var}(\tilde w)\Big\},
$$

因此只要期望收益与方差的组合相同，效用排序就等价于 mean-variance preferences。

## 局限

它蕴含 IARA（绝对风险厌恶随财富上升），通常被认为不够现实。
