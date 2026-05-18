# Stochastic Discount Factor - 定义与基本关系

来源：[Asset Pricing/Theoretical AP/01_Single_Period_Models#2.1 Definition of SDF](Asset Pricing/Theoretical AP/01_Single_Period_Models#2.1 Definition of SDF)；[Asset Pricing/Theoretical AP/01_Single_Period_Models#2.3 Risk Premia and Hansen-Jagannathan Bound](Asset Pricing/Theoretical AP/01_Single_Period_Models#2.3 Risk Premia and Hansen-Jagannathan Bound)

返回：[Asset Pricing/Theoretical AP/01_Single_Period_Models](Asset Pricing/Theoretical AP/01_Single_Period_Models)

:::{admonition} Definition (Definition)
随机贴现因子（SDF）是任意随机变量 $\tilde m$，满足对每个资产 $i$ 都有

$$
p_i=E[\tilde m\tilde x_i].
$$

:::

## 用收益率表示

若 $p_i>0$，则

$$
\begin{aligned}
1
&=E\!\left[\tilde m\frac{\tilde x_i}{p_i}\right] \\
&=E[\tilde m\tilde R_i].
\end{aligned}
$$

若存在无风险资产 $R_f$，则

$$
E[\tilde m]=\frac{1}{R_f}.
$$

## 与超额收益正交

由 $1=E[\tilde m\tilde R_i]$ 得

$$
E[\tilde m(\tilde R_i-R_f)]=0.
$$

## 风险溢价公式

$$
\begin{aligned}
1
&=E[\tilde m\tilde R] \\
&=E[\tilde m]E[\tilde R]+\operatorname{cov}(\tilde m,\tilde R) \\
&=\frac{1}{R_f}E[\tilde R]+\operatorname{cov}(\tilde m,\tilde R),
\end{aligned}
$$

故

$$
E[\tilde R]-R_f=-R_f\operatorname{cov}(\tilde m,\tilde R).
$$
