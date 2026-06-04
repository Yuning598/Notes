# Epstein-Zin 偏好与 Euler 方程

来源：[Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing#6.3 Recursive Preferences and Epstein-Zin](Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing#6.3 Recursive Preferences and Epstein-Zin)

返回：[Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing](Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing)

:::{admonition} Definition (Definition)
Epstein-Zin 偏好把风险厌恶 $\gamma$ 与跨期替代弹性 $\psi$ 分开，因此不再像 CRRA 那样把两者绑在一起。

:::

令

$$
\theta=\frac{1-\gamma}{1-1/\psi},
\qquad
g_{c,t+1}=\frac{c_{t+1}}{c_t},
$$

则定价核可写为

$$
M_{t,t+1}
=\beta^{\theta}g_{c,t+1}^{-\theta/\psi}R_{a,t+1}^{\theta-1}.
$$

:::{admonition} Proposition: Proposition
资产定价条件为

$$
E_t\big[M_{t,t+1}(R_{i,t+1}-R_{f,t})\big]=0.
$$

:::

## 含义

除了消费增长外，财富组合回报 $R_{a,t+1}$ 也进入 SDF；因此风险价格既受跨期替代，也受风险厌恶影响。
