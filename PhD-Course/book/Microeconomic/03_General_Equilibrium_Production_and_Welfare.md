---
course: EF8070 Advanced Microeconomics
topic: General Equilibrium and Welfare
type: main-note
sources:
  - EF8070_slides.pdf: General Equilibrium in a Pure Exchange Economy, slides 1-26
  - hmwk2_solutions.pdf
tags:
  - micro
  - general-equilibrium
  - welfare
  - qe
---

# 03 General Equilibrium and Welfare

## 1. Pure exchange economy

### 1.1 Environment

There are $L$ commodities and $H$ households. Household $h$ has endowment $e^h\in\mathbb R_+^L$ and utility $u^h:\mathbb R_+^L\to\mathbb R$.

:::{admonition} Definition (Feasible allocation)
An allocation $(c^h)_{h=1}^H$ is feasible if

$$
\sum_{h=1}^H(c^h-e^h)\le 0.
$$
:::

With local nonsatiation/monotonicity, feasible Pareto optima will exhaust resources.

:::{admonition} Definition (Walrasian equilibrium in a pure exchange economy)

Given endowments $(e^h)_{h=1}^H$, a Walrasian equilibrium is a price vector $p\in\mathbb R_+^L\setminus\{0\}$ and an allocation $(c^h)_{h=1}^H$ satisfying the following conditions.

**Condition 1: Individual optimality**

For each consumer $h=1,\ldots,H$,

$$
c^h\in\arg\max_{x\in\mathbb R_+^L} u^h(x)
\quad
\text{s.t.}
\quad
p\cdot x\le p\cdot e^h.
$$

**Condition 2: Market clearing**

$$
\sum_{h=1}^H c^h=\sum_{h=1}^H e^h.
$$

:::

:::{admonition} Definition (Pareto efficiency)
A feasible allocation $(c^h)$ is Pareto efficient if there is no feasible $(x^h)$ such that

$$
u^h(x^h)\ge u^h(c^h)\quad\forall h,
$$
with strict inequality for at least one household.
:::

Standard assumptions of **Walrasian Equilibrium**:

$$
\begin{aligned}
(A1)&\quad e^h\gg0,\\
(A2)&\quad u^h \text{ increasing/strongly increasing},\\
(A3)&\quad u^h \text{ continuous},\\
(A4)&\quad u^h \text{ concave or strictly concave, depending on theorem}.
\end{aligned}
$$

These are theorem-specific, not all needed at once:

$$
\begin{aligned}
\text{FWT:}\quad &u^h \text{ increasing / locally nonsatiated},\\
\text{SWF:}\quad &(A2')\ \ u^h \text{ strongly increasing},\quad (A4')\ \ u^h \text{ strictly concave},\\
\text{Existence:}\quad &z \text{ continuous},\quad z(\lambda p)=z(p),\quad p\cdot z(p)=0.
\end{aligned}
$$

If $u^h$ is increasing and strictly concave, then it is strongly increasing:

$$
\begin{aligned}
x>y,\ u^h(x)=u^h(y)
\ &\Longrightarrow\ 
u^h(\lambda x+(1-\lambda)y)
>
\lambda u^h(x)+(1-\lambda)u^h(y)\\
&=
u^h(x),\qquad \lambda\in(0,1),\\
\lambda x+(1-\lambda)y&<x,\\
\Rightarrow\ u^h(\lambda x+(1-\lambda)y)&<u^h(x),
\end{aligned}
$$

so $x>y\Rightarrow u^h(x)>u^h(y)$.

## 2. Welfare theorems in pure exchange

### 2.1 First Welfare Theorem

:::{admonition} First Welfare Theorem in pure exchange
If $(p,(c^h))$ is a Walrasian equilibrium and preferences are locally nonsatiated/increasing, then $(c^h)$ is Pareto efficient.
:::

We show that no feasible allocation $(x^h)$ Pareto dominates $(c^h)$.

Suppose, toward contradiction, that $(x^h)$ is feasible and Pareto improves:

$$
\begin{aligned}
u^h(x^h)&\ge u^h(c^h)\quad\forall h,\\
u^{h^*}(x^{h^*})&>u^{h^*}(c^{h^*})\quad\text{for some }h^*.
\end{aligned}
$$

Because $c^h$ solves household $h$'s budget problem,

$$
\begin{aligned}
u^h(x^h)\ge u^h(c^h)
&\Longrightarrow p\cdot x^h\ge p\cdot e^h=p\cdot c^h,\\
u^{h^*}(x^{h^*})>u^{h^*}(c^{h^*})
&\Longrightarrow p\cdot x^{h^*}>p\cdot c^{h^*}.
\end{aligned}
$$

Sum across households:

$$
\begin{aligned}
\sum_h p\cdot x^h
&>
\sum_h p\cdot c^h.
\end{aligned}
$$

But feasibility and market clearing imply

$$
\begin{aligned}
\sum_h x^h&\le \sum_h e^h=\sum_h c^h,\\
p\ge0
&\Longrightarrow
p\cdot \sum_h x^h\le p\cdot \sum_h c^h.
\end{aligned}
$$

Contradiction. Therefore $(c^h)$ is Pareto efficient.

**Individual optimality turns preference improvement into budget cost; feasibility says the aggregate budget cannot pay for it.**

### 2.2 Second Welfare Theorem

The slides state a supporting-price result: under convexity and interiority, a Pareto-efficient allocation can be decentralized as a Walrasian equilibrium after suitable redistribution of endowments.

:::{admonition} Second Welfare Theorem in pure exchange
Given an economy satisfying the convexity/interiority assumptions, if $(\bar e^h)$ with $\bar e^h\gg0$ is Pareto efficient, then there exists $p\in\mathbb R_+^L$ such that $(p,(\bar e^h))$ is a Walrasian equilibrium for the redistributed economy.
:::

For each household define the set of strictly preferred net trades from the target allocation:

$$
K^h =
\{z\in\mathbb R^L:\bar e^h+z\ge0,\ u^h(\bar e^h+z)>u^h(\bar e^h)\}.
$$

Under concavity, $K^h$ is convex. Define aggregate preferred net trades:

$$
K=\sum_{h=1}^H K^h.
$$

Pareto efficiency implies

$$
0\notin K.
$$

Otherwise, if $0=\sum_hz^h$ with $z^h\in K^h$, then $(\bar e^h+z^h)_h$ is feasible and strictly improves every household, contradicting Pareto efficiency.

By the separating hyperplane theorem, there exists $p\neq0$ such that

$$
p\cdot z\ge0\qquad \forall z\in K.
$$

This $p$ supports the allocation. To see optimality, suppose household $h$ can afford $y^h$ and strictly prefers it:

$$
\begin{aligned}
u^h(y^h)&>u^h(\bar e^h),\\
p\cdot y^h&\le p\cdot \bar e^h.
\end{aligned}
$$

Let $z^h=y^h-\bar e^h\in K^h$. Then $p\cdot z^h\le0$. But separation says any strictly preferred net trade must satisfy $p\cdot z^h\ge0$, and with monotonicity/interiority one obtains the required strict budget violation. Hence no strictly preferred affordable bundle exists.

![](../attachment/image-20260520.png)
## 3. Planner characterization of Pareto efficiency

For interior allocations, Pareto efficiency can be characterized by weighted utility maximization:

$$
\begin{aligned}
\max_{(c^h)}\quad &\sum_{h=1}^H\lambda_hu^h(c^h)\\
\text{s.t.}\quad &\sum_{h=1}^H c^h\le \sum_{h=1}^H e^h,\qquad \lambda_h>0.
\end{aligned}
$$

### 3.1 Two-consumer, two-good case

For two consumers and two goods, the interior FOCs imply equal MRS:

$$
\frac{u^1_1(c^1)}{u^1_2(c^1)} =
\frac{u^2_1(c^2)}{u^2_2(c^2)}.
$$

This is the standard Edgeworth box contract curve condition. H4 Q5 is a direct application: set MRS equal, impose feasibility, then solve for the contract curve/core/equilibrium.

## 4. Existence and Walras' law

### 4.1 Aggregate excess demand

For each household,

$$
f^h(p,e^h)\in\arg\max_{x\in\mathbb R_+^L}\{u^h(x):p\cdot x\le p\cdot e^h\}.
$$

Define aggregate excess demand

$$
z(p)=\sum_h f^h(p,e^h)-\sum_h e^h.
$$

Then

$$
\begin{aligned}
\text{Continuity:}\quad &z(p)\text{ continuous},\\
\text{Homogeneity:}\quad &f^h(\lambda p,e^h)=f^h(p,e^h)\ \Rightarrow\ z(\lambda p)=z(p),\quad \lambda>0,\\
\text{Walras' law:}\quad &p\cdot f^h(p,e^h)=p\cdot e^h\ \Rightarrow\ p\cdot z(p)=0.
\end{aligned}
$$

### 4.2 Existence result

:::{admonition} Existence via aggregate excess demand
Assume

$$
\begin{aligned}
f^h(p,e^h)&\in\arg\max_{x\in\mathbb R_+^L}\{u^h(x):p\cdot x\le p\cdot e^h\},\\
z(p)&=\sum_{h\in\mathcal H}\big(f^h(p,e^h)-e^h\big),\\
z(\lambda p)&=z(p),\qquad \lambda>0,\\
p\cdot z(p)&=0,\qquad z \text{ continuous}.
\end{aligned}
$$

Normalize prices on

$$
\Delta^{L-1}=\left\{p\in\mathbb R_+^L:\sum_{\ell=1}^L p_\ell=1\right\}.
$$

Then there exists $p^*\in\Delta^{L-1}$ such that

$$
z(p^*)\le0,\qquad z_\ell(p^*)=0\ \text{if }p_\ell^*>0.
$$
:::

:::{admonition} Two slight problems with the theorem
1. $z(p^*)\le0,\ z_\ell(p^*)=0$ if $p_\ell^*>0$ only gives a quasi-equilibrium.
2. If $u^h$ is strongly increasing, then $p^*\gg0$ and therefore $z(p^*)=0$.

To keep $z$ continuous away from the boundary, work on the trimmed simplex

$$
\Delta_\varepsilon^{L-1} =
\left\{p\in\mathbb R_+^L:
\sum_{\ell=1}^L p_\ell=1,\ p_\ell\ge\varepsilon\ \forall \ell
\right\}.
$$
:::

### 4.3 Proof

:::{admonition} Berge maximum theorem
Each $f^h$ is continuous, hence $z$ is continuous.
:::

For $\bar p\in\Delta^{L-1}$ define

$$
\phi(p,\bar p)=p\cdot z(\bar p)-|p-\bar p|^2,\qquad p\in\Delta^{L-1}.
$$

Since $\phi(\cdot,\bar p)$ is strictly concave in $p$, the maximizer

$$
f(\bar p)=\arg\max_{p\in\Delta^{L-1}}\phi(p,\bar p)
$$

is single-valued.

:::{admonition} Brouwer fixed point theorem
The induced map $f:\Delta^{L-1}\to\Delta^{L-1}$ is continuous, so there exists $\bar p\in\Delta^{L-1}$ such that

$$
\bar p=f(\bar p).
$$
:::

At the fixed point,

$$
\bar p\cdot z(\bar p)\ge p\cdot z(\bar p)-|p-\bar p|^2
\qquad \forall p\in\Delta^{L-1}.
$$

Walras' law gives $\bar p\cdot z(\bar p)=0$, hence

$$
p\cdot z(\bar p)\le |p-\bar p|^2
\qquad \forall p\in\Delta^{L-1}.
$$

If some $p\in\Delta^{L-1}$ satisfies $p\cdot z(\bar p)>0$, then for

$$
p_\varepsilon=\varepsilon p+(1-\varepsilon)\bar p,\qquad \varepsilon\in(0,1),
$$

we get

$$
\begin{aligned}
p_\varepsilon\cdot z(\bar p)-|p_\varepsilon-\bar p|^2
&=\varepsilon p\cdot z(\bar p)-\varepsilon^2|p-\bar p|^2\\
&>0
\end{aligned}
$$

for $\varepsilon>0$ small, contradicting the optimality of $\bar p$. Therefore

$$
p\cdot z(\bar p)\le0\qquad \forall p\in\Delta^{L-1}.
$$

Take $p=e^\ell$:

$$
z_\ell(\bar p)=e^\ell\cdot z(\bar p)\le0,\qquad \ell=1,\ldots,L.
$$

So $z(\bar p)\le0$. Finally,

$$
\bar p\cdot z(\bar p)=0,\qquad \bar p\ge0,\qquad z(\bar p)\le0
$$

imply

$$
\bar p_\ell>0\ \Longrightarrow\ z_\ell(\bar p)=0.
$$

### 4.4 Walras' law

For locally nonsatiated preferences,

$$
p\cdot x^h(p)=p\cdot e^h.
$$

$$
\begin{aligned}
p\cdot \sum_h(x^h(p)-e^h)
&=
\sum_h p\cdot x^h(p)-\sum_h p\cdot e^h\\
&=0.
\end{aligned}
$$

In a two-good economy,

$$
p_1z_1(p)+p_2z_2(p)=0.
$$

If $p\gg0$ and good 1 clears, $z_1(p)=0$, then

$$
\begin{aligned}
p_2z_2(p)&=0\\
\Longrightarrow z_2(p)&=0.
\end{aligned}
$$

Thus, with $L$ goods, clearing $L-1$ markets implies the last market clears.

### 4.5 Transfer paradox widget

```{raw} html
<div style="width:100%;max-width:1120px;margin:0 auto;">
  <iframe src="/PhD-Course/transfer-paradox.html" title="Transfer Paradox" loading="lazy" style="width:100%;height:620px;border:0;display:block;border-radius:16px;"></iframe>
</div>
```

### 4.6 FWT and SWT widget

```{raw} html
<div style="width:100%;max-width:1120px;margin:0 auto;">
  <iframe src="/PhD-Course/fwt-swt-widget.html" title="FWT and SWT Widget" loading="lazy" style="width:100%;height:700px;border:0;display:block;border-radius:16px;"></iframe>
</div>
```

## 5. Core

:::{admonition} Core in a pure exchange economy
This section is still about the **pure exchange economy**

$$
\left\{
\begin{aligned}
&\text{pure exchange economy: }(u^h,e^h)_{h\in\mathcal H}\\
&\text{Walrasian equilibrium: }(p,(c^h)_h)\\
&\text{Pareto efficiency: no grand-coalition improvement}\\
&\text{core: no coalition }S\subseteq\mathcal H\text{ can block}
\end{aligned}
\right.
$$

We only change the solution concept: from Walrasian equilibrium / Pareto efficiency to the **core**.
:::

:::{admonition} Definition (Core)
A feasible allocation $(c^h)_{h\in\mathcal H}$ is in the core if there does not exist a coalition $S\subseteq\mathcal H$ and a blocking allocation $(\tilde c^h)_{h\in S}$ such that

$$
\sum_{h\in S}\tilde c^h=\sum_{h\in S}e^h
$$

and

$$
u^h(\tilde c^h)\ge u^h(c^h)\qquad \forall h\in S,
$$

with strict inequality for at least one $h\in S$.

:::

:::{admonition} Theorem (parallel to FWT: Walrasian allocations are in the core)
Assume $(A2)$. A Walrasian equilibrium allocation is in the **core**.

**Proof.** Suppose, to the contrary, that a coalition $S\subseteq\mathcal H$ can block the Walrasian allocation $(c^h)_{h\in\mathcal H}$. Then there exists a feasible allocation $(\tilde c^h)_{h\in S}$ such that

$$
\left\{
\begin{aligned}
&\sum_{h\in S}\tilde c^h=\sum_{h\in S}e^h,\\
&u^h(\tilde c^h)\ge u^h(c^h)\quad \forall h\in S,\\
&u^{h_0}(\tilde c^{h_0})>u^{h_0}(c^{h_0})\text{ for some }h_0\in S.
\end{aligned}
\right.
$$

Since $(p,(c^h)_{h\in\mathcal H})$ is a Walrasian equilibrium, consumer optimality and $(A2)$ imply the revealed-preference inequalities

$$
\begin{aligned}
p\cdot \tilde c^h&\ge p\cdot e^h,\qquad \forall h\in S,\\
p\cdot \tilde c^{h_0}&>p\cdot e^{h_0}.
\end{aligned}
$$

Summing over $h\in S$ gives

$$
\sum_{h\in S}p\cdot \tilde c^h>\sum_{h\in S}p\cdot e^h.
$$

But coalition feasibility gives

$$
\sum_{h\in S}\tilde c^h=\sum_{h\in S}e^h,
$$

so

$$
\sum_{h\in S}p\cdot \tilde c^h=\sum_{h\in S}p\cdot e^h,
$$

a contradiction. Hence no coalition can block the Walrasian allocation, so it lies in the core.

**Remark.** This guarantees that the core is nonempty for any pure exchange economy for which there exists a Walrasian equilibrium.
:::


:::{admonition} Conjecture (parallel to SWT: core convergence)
As the number of agents becomes very large, any allocation which is in the core will be a Walrasian equilibrium allocation.

**Assumption $(A4')$.** For all agents $h\in\mathcal H$, $u^h(\cdot)$ is strictly concave on its domain, i.e. for all $x,y\in\mathbb R_+^L$ and $\lambda\in(0,1)$,

$$
\lambda u^h(x)+(1-\lambda)u^h(y)<u^h(\lambda x+(1-\lambda)y).
$$
:::

```{raw} html
<div style="width:100%;max-width:1120px;margin:0 auto;">
  <iframe src="/PhD-Course/core_fwt_swt_widget.html" title="Core FWT SWT Widget" loading="lazy" style="width:100%;height:700px;border:0;display:block;border-radius:16px;"></iframe>
</div>
```
