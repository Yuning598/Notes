---
course: EF8070 Advanced Microeconomics
topic: Production in Arrow-Debreu
type: main-note
sources:
  - EF8070_slides.pdf: Production in Arrow-Debreu, slides 1-20
  - hmwk4_soln.pdf
tags:
  - micro
  - production
  - general-equilibrium
  - arrow-debreu
---

# 05 Production in Arrow-Debreu

## 1. Production in Arrow-Debreu

:::{admonition} Assumptions for existence of Walrasian equilibrium in a production economy
Consumer side, for all $h\in\mathcal H$:

$$
\begin{aligned}
\text{(A1)}\quad &e^h\in\mathbb R_{++}^L,\\
\text{(A2)}\quad &u^h \text{ is increasing},\\
\text{(A3)}\quad &u^h \text{ is continuous on its domain},\\
\text{(A4)}\quad &u^h \text{ is concave on its domain}.
\end{aligned}
$$

Production side, for all $k\in\mathcal K$:

$$
\begin{aligned}
\text{(A5)}\quad &Y^k \text{ is closed and convex},\\
\text{(A6)}\quad &0\in Y^k,\ \mathbb R_-^L\subseteq Y^k,\\
\text{(A7)}\quad &\text{if }Y=\sum_{k\in\mathcal K}Y^k,\ \text{assume }Y\cap(-Y)=\{0\}.
\end{aligned}
$$

Recall:

$$
\begin{aligned}
Y \text{ convex}
\ &\iff\ f \text{ concave},\\
Y \text{ convex}
\ &\implies\ f \text{ exhibits DRS or CRS}.
\end{aligned}
$$
:::

:::{admonition} Equilibrium with production
There are $K$ firms with production sets $Y^k\subseteq\mathbb R^L$. An equilibrium is

$$
(p,(c^h)_{h=1}^H,(y^k)_{k=1}^K)
$$

such that

$$
\left\{
\begin{aligned}
&c^h\in\arg\max u^h(c)
\quad
\text{s.t. }
p\cdot c\le p\cdot e^h+\sum_k\delta_k^h p\cdot y^k\\
&y^k\in\arg\max_{y\in Y^k}p\cdot y\\
&\sum_h(c^h-e^h)-\sum_k y^k=0
\end{aligned}
\right.
$$

Here $\delta_k^h$ is household $h$'s ownership share of firm $k$.
:::

:::{admonition} Pareto-optimality with production
An allocation-production plan $\big((c^h)_{h=1}^H,(y^k)_{k=1}^K\big)$ is Pareto efficient if there is no other feasible plan $\big((\tilde c^h)_{h=1}^H,(\tilde y^k)_{k=1}^K\big)$ such that

$$
\begin{aligned}
\sum_h(\tilde c^h-e^h)-\sum_k\tilde y^k&\le 0,\\
u^h(\tilde c^h)&\ge u^h(c^h)\qquad \forall h,
\end{aligned}
$$

with strict inequality for at least one household $h'$.
:::

### First Welfare Theorem with production

:::{admonition} Statement
Assume $E$ satisfies (A2). If $\big(p,(c^h)_{h\in\mathcal H},(y^k)_{k\in\mathcal K}\big)$ is an equilibrium for a production economy $E$, then $\big((c^h)_{h\in\mathcal H},(y^k)_{k\in\mathcal K}\big)$ is Pareto-efficient.
:::

Proof:
Suppose that there is a feasible allocation and production plan $\big((x^h)_{h\in\mathcal H},(\tilde y^k)_{k\in\mathcal K}\big)$ such that $u^h(x^h)\ge u^h(c^h)$ for all $h\in\mathcal H$ with the inequality strict for one $h'$.

$$
\begin{aligned}
p\cdot\Big(x^h-\sum_{k\in\mathcal K}\delta_k^h\tilde y^k\Big)
\ &\ge\ p\cdot\Big(c^h-\sum_{k\in\mathcal K}\delta_k^h y^k\Big)
\qquad \forall h\in\mathcal H.
\end{aligned}
$$

Since the inequality is strict for one $h'$ and prices are non-negative, there must be at least one $l$ such that

$$
\begin{aligned}
\sum_{h\in\mathcal H}x_l^h-\sum_{k\in\mathcal K}\tilde y_l^k
\ &>\ \sum_{h\in\mathcal H}c_l^h-\sum_{k\in\mathcal K}y_l^k\\
\ &=\ \sum_{h\in\mathcal H}e_l^h,
\end{aligned}
$$

which contradicts feasibility.

Therefore no Pareto improvement exists.

### Second Welfare Theorem with production

:::{admonition} Statement
Assume $E$ satisfies (A2)--(A5) and $\big((c^h)_{h\in\mathcal H},(y^k)_{k\in\mathcal K}\big)$ is Pareto-efficient. Suppose $c^h\gg0$ for all $h\in\mathcal H$. Then there exist $p\gg0$ and $\big(\bar e^h\big)_{h\in\mathcal H}$ such that $\big(p,(c^h)_{h\in\mathcal H},(y^k)_{k\in\mathcal K}\big)$ is an equilibrium for an economy with endowments $\big(\bar e^h\big)_{h\in\mathcal H}$.
:::

Under convex production sets and convex preferences, every interior Pareto efficient allocation-production plan can be supported by prices after redistribution. Nonconvex production, increasing returns, and externalities are classic failure cases.

<div style="width:100%;max-width:1120px;margin:0 auto;">
  <iframe src="/PhD-Course/attachment/production_welfare_theorems_widget.html" title="Production Welfare Theorems" loading="lazy" style="width:100%;height:610px;border:0;display:block;border-radius:16px;"></iframe>
</div>


## 2. Firms vs household production

The slides show that if households own firm technologies by shares $\delta_k^h$, we can define household production sets

$$
\bar Y^h=\sum_k\delta_k^hY^k.
$$

Under the relevant assumptions, an equilibrium with firms is equivalent to an equilibrium in which households directly operate their share of production technologies. This is useful for welfare proofs because firm profits enter household budget constraints as ownership income.
