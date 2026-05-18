---
orphan: true
---

# Geometric series sum - perpetuity special case

:::{admonition} Note
Perpetuity as geometric series
设 perpetual payment 每期固定为 $A$，折现率为 $r$，则

$$
\begin{aligned}
PV
&=\sum_{t=1}^{\infty}\frac{A}{(1+r)^t}\\
&=A\sum_{t=1}^{\infty}\left(\frac{1}{1+r}\right)^t\\
&=A\cdot\frac{\frac{1}{1+r}}{1-\frac{1}{1+r}}\\
&=A\cdot\frac{1}{r}.
\end{aligned}
$$
所以 perpetual annuity 的现值就是 $A/r$。

通用等比数列推导见 [general geometric series card](Geometric series sum - a1 q)。

:::

(card-geometric-series-perpetuity)=
(^card-geometric-series-perpetuity)=
^card-geometric-series-perpetuity

相关章节：[Part 1 Empirical Corporate Finance](../01_Empirical_Corporate_Finance.md)
