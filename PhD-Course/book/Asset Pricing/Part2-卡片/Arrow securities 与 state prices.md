# Arrow securities 与 state prices

来源：[[PhD-Course/Asset Pricing/Part1#2.2 Arrow Securities, Risk-Neutral Probability, and SDF Existence]]

返回：[[PhD-Course/Asset Pricing/Part1]]

> [!definition] Definition
> Arrow security 是只在某个状态 $\omega_j$ 支付 1、其余状态支付 0 的证券；其价格记为 $q_j$，称为 state price。

> [!proposition] Proposition
> 若 $\tilde m$ 是 SDF，则
> $$
> q_j=\tilde m(\omega_j)\,\Pr(\omega_j).
> $$

因此
$$
\tilde m(\omega_j)=\frac{q_j}{\Pr(\omega_j)}.
$$

## 含义

任意证券都可看成 Arrow securities 的组合，因此其价格等于各状态支付按 state prices 加总后的结果。
