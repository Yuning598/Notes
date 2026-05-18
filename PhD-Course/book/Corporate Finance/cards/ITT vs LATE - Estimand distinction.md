---
orphan: true
---

# ITT vs LATE - Estimand distinction

:::{admonition} Note
Assignment effect vs treatment effect

$$
\begin{aligned}
\Delta_Y &:= \mathbb{E}[Y\mid Z=1]-\mathbb{E}[Y\mid Z=0] = \mathrm{ITT} \\
\Delta_D &:= \mathbb{E}[D\mid Z=1]-\mathbb{E}[D\mid Z=0] = \Pr(C) \\
\beta^{IV} &= \frac{\Delta_Y}{\Delta_D} = \mathrm{LATE}
\end{aligned}
$$

$$
\Delta_Y = \Pr(C)\cdot \mathrm{LATE}
$$
其中 $C$ 表示 compliers。

Policy ITT 是“分配 / 资格 / 供给变化”本身对 $Y$ 的总效应；LATE 是 actual treatment 对 compliers 的局部效应。

经验写作上：
- 如果研究问题是政策推出本身的效果，报告 ITT。
- 如果研究问题是 treatment 的 causal effect，报告 LATE。

**Note:** Compliance types

$$
\begin{array}{c|c|c|l}
\text{Type} & D_i(1) & D_i(0) & \text{Interpretation} \\
\hline
\text{Compliers} & 1 & 0 & Z \text{ changes take-up} \\
\text{Always-takers} & 1 & 1 & \text{Always take treatment} \\
\text{Never-takers} & 0 & 0 & \text{Never take treatment} \\
\text{Defiers} & 0 & 1 & \text{Move opposite to } Z
\end{array}
$$
单调性假设排除 Defiers，因此 first stage 只来自 compliers。

**Note:** Proof sketch
在 independence, exclusion, monotonicity 下，

$$
\begin{aligned}
\Delta_Y
&= \mathbb{E}[Y\mid Z=1]-\mathbb{E}[Y\mid Z=0] \\
&= \mathbb{E}[Y(D(1))-Y(D(0))] \\
&= \mathbb{E}[(Y(1)-Y(0))\mathbf{1}\{D(1)>D(0)\}] \\
&= \Pr(C=1)\,\mathbb{E}[Y(1)-Y(0)\mid C=1],
\end{aligned}
$$

$$
\begin{aligned}
\Delta_D
&= \mathbb{E}[D\mid Z=1]-\mathbb{E}[D\mid Z=0] \\
&= \mathbb{E}[D(1)-D(0)] \\
&= \Pr(C=1),
\end{aligned}
$$
因而

$$
\beta^{IV}=\frac{\Delta_Y}{\Delta_D}=\mathbb{E}[Y(1)-Y(0)\mid C=1]=\mathrm{LATE}.
$$
同时

$$
\mathrm{ITT}=\Delta_Y=\Pr(C=1)\cdot \mathrm{LATE}.
$$

:::

(card-itt-late-distinction)=
(^card-itt-late-distinction)=
^card-itt-late-distinction

相关章节：[Corporate Finance IV chapter](../02_Econometric_Methods_in_Corporate_Finance.md)
