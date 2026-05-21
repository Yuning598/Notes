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

:::{admonition} Equilibrium with production
There are $K$ firms with production sets $Y^k\subseteq\mathbb R^L$. An equilibrium is

$$
(p,(c^h)_{h=1}^H,(y^k)_{k=1}^K)
$$

such that

$$
\begin{aligned}
c^h&\in\arg\max_{x\ge0}u^h(x)
\quad\text{s.t.}\quad
p\cdot x\le p\cdot e^h+\sum_k\delta_k^h p\cdot y^k,\\
y^k&\in\arg\max_{y\in Y^k}p\cdot y,\\
\sum_h(c^h-e^h)-\sum_k y^k&=0.
\end{aligned}
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

:::{admonition} First Welfare Theorem with production
If consumers maximize utility and firms maximize profits at prices $p$, then the allocation-production plan is Pareto efficient.
:::

Proof:
Suppose an alternative $(x^h,\tilde y^k)$ Pareto dominates. Consumer revealed preference implies

$$
\sum_h p\cdot x^h>\sum_h p\cdot c^h.
$$

Firm profit maximization implies

$$
p\cdot y^k\ge p\cdot \tilde y^k
\quad\forall k.
$$

Feasibility of the alternative gives

$$
\sum_h x^h-\sum_k\tilde y^k\le\sum_h e^h.
$$

Equilibrium feasibility gives

$$
\sum_h c^h-\sum_k y^k=\sum_h e^h.
$$

Multiply by $p$:

$$
\sum_h p\cdot x^h-\sum_kp\cdot\tilde y^k
\le
\sum_h p\cdot c^h-\sum_kp\cdot y^k.
$$

Using $p\cdot y^k\ge p\cdot \tilde y^k$, the RHS inequality contradicts $\sum_hp\cdot x^h>\sum_hp\cdot c^h$. Therefore no Pareto improvement exists.

### Second Welfare Theorem with production

Under convex production sets and convex preferences, every interior Pareto efficient allocation-production plan can be supported by prices after redistribution. Nonconvex production, increasing returns, and externalities are classic failure cases.

## 2. Firms vs household production

The slides show that if households own firm technologies by shares $\delta_k^h$, we can define household production sets

$$
\bar Y^h=\sum_k\delta_k^hY^k.
$$

Under the relevant assumptions, an equilibrium with firms is equivalent to an equilibrium in which households directly operate their share of production technologies. This is useful for welfare proofs because firm profits enter household budget constraints as ownership income.
