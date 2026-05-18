# 风险中性概率 - 从 SDF 到 Q

来源：[Asset Pricing/Theoretical AP/01_Single_Period_Models#2.2 Arrow Securities, Risk-Neutral Probability, and SDF Existence](Asset Pricing/Theoretical AP/01_Single_Period_Models#2.2 Arrow Securities, Risk-Neutral Probability, and SDF Existence)

返回：[Asset Pricing/Theoretical AP/01_Single_Period_Models](Asset Pricing/Theoretical AP/01_Single_Period_Models)

:::{admonition} Definition (Definition)
若存在无风险资产 $R_f$ 和严格正的 SDF $\tilde m$，则对任意事件 $A$ 定义

$$
Q(A)=R_fE[\tilde m 1_A].
$$
这一定义给出风险中性概率 $Q$。

**Proposition:** Proposition
对任意支付 $\tilde x$，有

$$
p=E[\tilde m\tilde x]=\frac{1}{R_f}E^Q[\tilde x].
$$

:::

## 含义

在风险中性测度下，所有资产都可以看成按无风险利率贴现的期望支付。
