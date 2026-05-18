---
orphan: true
---

# Myers-Majluf dilution problem

在 information asymmetry 下，外部投资者看不见 firm quality，所以 equity 的发行价往往按市场的平均判断来定。若好公司发行股票，发行价通常低于真实价值，于是融资会把一部分价值从 old shareholders 转移给 new shareholders，这就是 dilution problem。直观上，它不是单纯的“股数变多”，而是新股发行把一部分内在价值低价让渡给了新投资者。

:::{admonition} Note
Formulaic proof
设 firm 需要融资 $I$，为了筹到这笔钱发行 $n$ 股新股，市场给出的每股价格为 $\hat p$。于是

$$
n=\frac{I}{\hat p}.
$$
若新股的真实价值是 $p^\ast$，那么新投资者拿走的真实价值为

$$
n p^\ast=\frac{I}{\hat p}p^\ast.
$$
但他们只支付了

$$
n\hat p=I.
$$
所以发行带来的 dilution cost 为

$$
\begin{aligned}
\text{Dilution}
&=n(p^\ast-\hat p) \\
&=I\left(\frac{p^\ast}{\hat p}-1\right).
\end{aligned}
$$
如果项目的净现值是 $NPV$，则 old shareholders 只有在

$$
\begin{aligned}
NPV \ge I\left(\frac{p^\ast}{\hat p}-1\right)
\end{aligned}
$$
时才愿意发行 equity。否则，即使项目本身是正 NPV，发行也会因为 dilution 太大而被拒绝。

等价地，old shareholders 的净收益可以写成

$$
\begin{aligned}
\Delta W_{\text{old}}
&= NPV - I\left(\frac{p^\ast}{\hat p}-1\right).
\end{aligned}
$$
只要市场价格 $\hat p$ 低到让右边为负，equity financing 就会被拒绝。
:::

(card-myers-majluf-dilution)=
(^card-myers-majluf-dilution)=
^card-myers-majluf-dilution

当市场怀疑 firm 被 overvalued 时，$\hat p$ 会更低，dilution 更严重，因此 equity 往往被放在融资顺序的最后，形成 pecking order。equity issuance 也容易被市场解读成 bad news，因为它不仅融资，还会透露 manager 对估值和 firm quality 的看法。


