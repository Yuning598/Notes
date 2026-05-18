---
orphan: true
---

# Geometric series sum - a1 q

:::{admonition} Note
Formula
设

$$
S=a_1+a_1q+a_1q^2+\cdots=\sum_{t=1}^{\infty}a_1q^{t-1}.
$$
则

$$
\begin{aligned}
qS&=a_1q+a_1q^2+a_1q^3+\cdots,\\
S-qS&=a_1,\\
S(1-q)&=a_1,\\
S&=\frac{a_1}{1-q},
\end{aligned}
$$
其中 $|q|<1$.

如果要看 perpetual debt tax shield 的特例，见 [perpetuity special case](Geometric series sum - perpetuity special case)。

**Note:** Common use

$$
\sum_{t=1}^{\infty}\frac{1}{(1+r)^t}
=\sum_{t=1}^{\infty}\left(\frac{1}{1+r}\right)^t
=\frac{\frac{1}{1+r}}{1-\frac{1}{1+r}}
=\frac{1}{r}.
$$
这里对应 $a_1=\frac{1}{1+r}$, $q=\frac{1}{1+r}$。

:::

(card-geometric-series-a1q)=
(^card-geometric-series-a1q)=
^card-geometric-series-a1q

相关章节：[Part 1 Empirical Corporate Finance](../01_Empirical_Corporate_Finance.md)
