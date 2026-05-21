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
  <iframe src="/PhD-Course/production-welfare-theorems-widget.html" title="Production Welfare Theorems" loading="lazy" style="width:100%;height:610px;border:0;display:block;border-radius:16px;"></iframe>
</div>


## 2. Firms vs household production

The slides show that if households own firm technologies by shares $\delta_k^h$, we can define household production sets

$$
\bar Y^h=\sum_k\delta_k^hY^k.
$$

Under the relevant assumptions, an equilibrium with firms is equivalent to an equilibrium in which households directly operate their share of production technologies. This is useful for welfare proofs because firm profits enter household budget constraints as ownership income.

## 3. Planner characterization of Pareto efficiency

:::{admonition} Pareto efficiency as a planner problem
Take two consumers and one production technology. Let $x^h$ and $y^h$ denote consumer $h$'s consumption of goods $x$ and $y$, let $\bar x$ be the economy's total endowment of good $x$, and let

$$
\begin{aligned}
z&=\bar x-x^1-x^2,\\
y^1+y^2&=f(z).
\end{aligned}
$$

Equivalently,

$$
y^1+y^2=f(\bar x-x^1-x^2).
$$

Pareto efficiency means: for a fixed utility level $c$ of consumer 2, consumer 1 is already at the frontier. Hence any Pareto efficient allocation solves

$$
\left\{
\begin{aligned}
\max_{x^1,y^1,x^2,y^2}\quad &u^1(x^1,y^1)\\
\text{s.t.}\quad &u^2(x^2,y^2)=c,\\
&y^1+y^2=f(\bar x-x^1-x^2).
\end{aligned}
\right.
$$

This is a planner problem: fixing $c$ pins down consumer 2's utility, and the maximization traces out the utility possibility frontier. If a Pareto efficient allocation were not a solution for any $c$, then one could improve consumer 1 without lowering consumer 2, contradicting Pareto efficiency.
:::

Write the Lagrangian as

$$
\begin{aligned}
\mathcal L
&= u^1(x^1,y^1)
 + \lambda\big[u^2(x^2,y^2)-c\big]\\
&\quad + \mu\big[f(\bar x-x^1-x^2)-y^1-y^2\big].
\end{aligned}
$$

The FOCs are

$$
\left\{
\begin{aligned}
\frac{\partial\mathcal L}{\partial x^1}:&\quad u_x^1-\mu f'(z)=0,\\
\frac{\partial\mathcal L}{\partial y^1}:&\quad u_y^1-\mu=0,\\
\frac{\partial\mathcal L}{\partial x^2}:&\quad \lambda u_x^2-\mu f'(z)=0,\\
\frac{\partial\mathcal L}{\partial y^2}:&\quad \lambda u_y^2-\mu=0.
\end{aligned}
\right.
$$

Thus

$$
\begin{aligned}
\frac{u_x^1}{u_y^1}
&=
f'(z),\\
\frac{u_x^2}{u_y^2}
&=
f'(z).
\end{aligned}
$$

Hence

$$
\boxed{
MRS^1=MRS^2=MRT.
}
$$

So the common marginal rate of substitution across consumers must equal the marginal rate of transformation in production.
