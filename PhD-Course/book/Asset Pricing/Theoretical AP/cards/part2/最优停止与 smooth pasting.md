# 最优停止与 smooth pasting

来源：[Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing#5.4 Optimal Stopping](Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing#5.4 Optimal Stopping)

返回：[Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing](Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing)

:::{admonition} Definition (Definition)
最优停止问题是在所有 stopping times 中选择 $\tau$，使

$$
V(X_0)=\sup_{\tau}E\!\left[\int_0^{\tau} e^{-\rho t}g(X_t)dt+e^{-\rho\tau}h(X_\tau)\right].
$$

**Proposition:** Proposition
value function 满足变分不等式

$$
0=\max\big\{-\rho V(X)+\mathcal D_XV(X)+g(X),\ h(X)-V(X)\big\}.
$$

**Proposition:** Proposition
在最优行权边界 $X^*$ 处常要求 smooth pasting：

$$
V(X^*)=h(X^*),
\qquad
V'(X^*)=h'(X^*).
$$

:::

## 含义

value matching 保证“现在停”与“继续等”在边界上价值相同；smooth pasting 保证边际上也无跳跃，因此等待的边际收益恰好为零。