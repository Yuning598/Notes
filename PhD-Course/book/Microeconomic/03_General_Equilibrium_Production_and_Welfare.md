---
course: EF8070 Advanced Microeconomics
topic: General Equilibrium, Production, and Welfare
type: main-note
sources:
  - EF8070_slides.pdf: General Equilibrium in a Pure Exchange Economy, slides 1-26
  - EF8070_slides.pdf: Theory of the Firm and Supply, slides 1-30
  - EF8070_slides.pdf: Production in Arrow-Debreu, slides 1-20
  - hmwk2_solutions.pdf
  - hmwk3_soln.pdf
  - hmwk4_soln.pdf
tags:
  - micro
  - general-equilibrium
  - production
  - welfare
  - qe
---

# 03 General Equilibrium, Production, and Welfare

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

## 2. Welfare theorems in pure exchange

### 2.1 First Welfare Theorem

:::{admonition} First Welfare Theorem in pure exchange
If $(p,(c^h))$ is a Walrasian equilibrium and preferences are locally nonsatiated/increasing, then $(c^h)$ is Pareto efficient.
:::

### Proof
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

### 2.2 Exam idea

**Individual optimality turns preference improvement into budget cost; feasibility says the aggregate budget cannot pay for it.**

### 2.3 Second Welfare Theorem

The slides state a supporting-price result: under convexity and interiority, a Pareto-efficient allocation can be decentralized as a Walrasian equilibrium after suitable redistribution of endowments.

:::{admonition} Second Welfare Theorem in pure exchange
Given an economy satisfying the convexity/interiority assumptions, if $(\bar e^h)$ with $\bar e^h\gg0$ is Pareto efficient, then there exists $p\in\mathbb R_+^L$ such that $(p,(\bar e^h))$ is a Walrasian equilibrium for the redistributed economy.
:::

### 2.4 Proof sketch

For each household define the set of strictly preferred net trades from the target allocation:

$$
K^h
=
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
\frac{u^1_1(c^1)}{u^1_2(c^1)}
=
\frac{u^2_1(c^2)}{u^2_2(c^2)}.
$$

This is the standard Edgeworth box contract curve condition. H4 Q5 is a direct application: set MRS equal, impose feasibility, then solve for the contract curve/core/equilibrium.

## 4. Existence and Walras' law

### 4.1 Aggregate excess demand

Let $f^h(p,e^h)$ be household $h$'s demand, and define aggregate excess demand

$$
z(p)=\sum_h f^h(p,e^h)-\sum_h e^h.
$$

The slides use three properties:

$$
\begin{aligned}
\text{Continuity:}\quad &z(p)\text{ continuous on the normalized price simplex},\\
\text{Homogeneity:}\quad &z(\lambda p)=z(p),\quad \lambda>0,\\
\text{Walras' law:}\quad &p\cdot z(p)=0.
\end{aligned}
$$

### 4.2 Existence result

:::{admonition} Existence via aggregate excess demand
If $z$ is continuous, homogeneous of degree zero, and satisfies Walras' law, then there exists $p^*$ such that

$$
z(p^*)\le0,\qquad
z_\ell(p^*)=0\ \text{whenever }p_\ell^*>0.
$$
:::

With strong monotonicity, equilibrium prices are strictly positive and all markets clear exactly.

### 4.3 Proof sketch
Use Brouwer's fixed point theorem on the normalized price simplex. The exam version usually expects the mapping idea, not every topological detail.

### 4.4 Walras' law

#### 4.4.1 Household budget identity

In any household budget problem with locally nonsatiated preferences,

$$
p\cdot x^h(p)=p\cdot e^h.
$$

Sum over $h$:

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

## 7. Core

:::{admonition} Definition (Core)
A feasible allocation $(c^h)$ is in the core if there is no coalition $S\subseteq H$ and allocation $(\tilde c^h)_{h\in S}$ such that

$$
\sum_{h\in S}\tilde c^h=\sum_{h\in S}e^h,
$$
and

$$
u^h(\tilde c^h)\ge u^h(c^h)\quad\forall h\in S,
$$
with strict inequality for at least one member of $S$.

:::

**Walrasian allocations are in the core.** If a coalition could block a Walrasian allocation, each blocking member would get a weakly preferred bundle and one member strictly preferred. By the same revealed-preference budget argument as in FWT, the coalition's proposed bundles would cost strictly more than the coalition's endowment, contradicting coalition feasibility.

Core convergence theorem in the slides: in replica economies, as the number of replicas grows, core allocations converge to Walrasian allocations. Intuition: large markets make individual/coalitional market power vanish.

## 8. Theory of the firm: production set

:::{admonition} Definition (Production set)
A production plan is $y\in\mathbb R^L$, where positive components are outputs and negative components are inputs. The production set $Y\subseteq\mathbb R^L$ contains feasible production plans.

:::

Common assumptions:

$$
\begin{aligned}
0&\in Y \quad\text{(inaction)},\\
Y&\text{ closed},\\
y\in Y,\ \hat y\le y&\Longrightarrow \hat y\in Y \quad\text{(free disposal)},\\
Y&\text{ convex under convex technology}.
\end{aligned}
$$

For a single-output firm, write the production plan as $(-x,y)$, where $x\in\mathbb R_+^{L-1}$ and $y\in\mathbb R_+$. The production function is

$$
f(x)=\max\{y:(-x,y)\in Y\}.
$$

MRTS:

$$
MRTS_{ij}(x)=\frac{f_i(x)}{f_j(x)}.
$$

## 9. Production function concavity and convex production set

Let

$$
Y=\{(-x,y):x\ge0,\ y\le f(x)\}.
$$

:::{admonition} $f$ concave implies $Y$ convex
If $f$ is concave and $Y=\{(-x,y):x\ge0,\ y\le f(x)\}$, then $Y$ is convex.
:::

Proof:
Take any $(-x^1,y^1),(-x^2,y^2)\in Y$ and $\lambda\in[0,1]$. Since both points are feasible,

$$
y^1\le f(x^1),\qquad y^2\le f(x^2).
$$

Define

$$
\bar x=\lambda x^1+(1-\lambda)x^2,\qquad
\bar y=\lambda y^1+(1-\lambda)y^2.
$$

Then

$$
\begin{aligned}
\bar y
&=\lambda y^1+(1-\lambda)y^2\\
&\le \lambda f(x^1)+(1-\lambda)f(x^2)\\
&\le f(\lambda x^1+(1-\lambda)x^2)\\
&=f(\bar x).
\end{aligned}
$$

Hence $(-\bar x,\bar y)\in Y$. Therefore $Y$ is convex.

:::{admonition} $Y$ convex implies $f$ concave
If $Y=\{(-x,y):x\ge0,\ y\le f(x)\}$ is convex, then $f$ is concave:

$$
f(\lambda x^1+(1-\lambda)x^2)
\ge
\lambda f(x^1)+(1-\lambda)f(x^2).
$$
:::

Proof:
By definition,

$$
(-x^1,f(x^1)),\quad (-x^2,f(x^2))\in Y.
$$

Convexity of $Y$ gives

$$
\begin{aligned}
\lambda(-x^1,f(x^1))+(1-\lambda)(-x^2,f(x^2))
&=
(-\bar x,\lambda f(x^1)+(1-\lambda)f(x^2))\\
&\in Y.
\end{aligned}
$$

By definition of $f$,

$$
\lambda f(x^1)+(1-\lambda)f(x^2)
\le
f(\bar x).
$$

Thus $f$ is concave.

## 10. CRS iff production set is a cone

:::{admonition} CRS iff production set is a cone
Under free disposal, a single-output production function has constant returns to scale iff the associated production set is a cone.
:::

Assume free disposal and define constant returns to scale as

$$
f(\lambda x)=\lambda f(x)\qquad \forall \lambda>0.
$$

A set $Y$ is a cone if $y\in Y\Rightarrow \lambda y\in Y$ for all $\lambda>0$.

### CRS $\Rightarrow Y$ cone

Take $(-x,y)\in Y$, so $y\le f(x)$. For any $\lambda>0$,

$$
\begin{aligned}
\lambda y
&\le \lambda f(x)\\
&=f(\lambda x).
\end{aligned}
$$

Thus $(-\lambda x,\lambda y)\in Y$. Therefore $Y$ is a cone.

### $Y$ cone $\Rightarrow$ CRS

Let $y=f(x)$, so $(-x,y)\in Y$. Since $Y$ is a cone,

$$
(-\lambda x,\lambda y)\in Y
\quad\Longrightarrow\quad
f(\lambda x)\ge \lambda f(x).
$$

If $f(\lambda x)>\lambda f(x)$, then $(-\lambda x,y')\in Y$ for some $y'>\lambda f(x)$. Scaling back by $1/\lambda$,

$$
\left(-x,\frac{y'}{\lambda}\right)\in Y,
\qquad
\frac{y'}{\lambda}>f(x),
$$

contradicting the definition of $f(x)$. Therefore $f(\lambda x)=\lambda f(x)$.

## 11. Profit maximization

:::{admonition} Definition (Profit maximization problem)
Given price vector $p\in\mathbb R^L$, the firm's profit function is

$$
\pi(p)=\max_{y\in Y}p\cdot y.
$$
The supply correspondence is

$$
y(p)\in\arg\max_{y\in Y}p\cdot y.
$$

:::

Properties:

$$
\begin{aligned}
\pi(\alpha p)&=\alpha \pi(p),\qquad \alpha>0,\\
\pi(\theta p+(1-\theta)p')&\le \theta\pi(p)+(1-\theta)\pi(p')
\quad\text{(convex in prices)}.
\end{aligned}
$$

Convexity proof:

$$
\begin{aligned}
\pi(p_\theta)
&=\max_{y\in Y}[\theta p+(1-\theta)p']\cdot y\\
&=\max_{y\in Y}\left[\theta p\cdot y+(1-\theta)p'\cdot y\right]\\
&\le \theta\max_{y\in Y}p\cdot y+(1-\theta)\max_{y\in Y}p'\cdot y\\
&=\theta\pi(p)+(1-\theta)\pi(p').
\end{aligned}
$$

For a single-output firm with output price $p$ and input prices $w$,

$$
\pi(p,w)=\max_{x\ge0}\left\{pf(x)-w\cdot x\right\}.
$$

Interior FOCs:

$$
p f_i(x^*)=w_i,\qquad i=1,\ldots,L-1.
$$

Interpretation: value of marginal product equals factor price.

## 12. Supply and input demand comparative statics

By Hotelling's lemma/envelope theorem,

$$
\frac{\partial \pi(p,w)}{\partial p}=y^*(p,w),\qquad
\frac{\partial \pi(p,w)}{\partial w_i}=-x_i^*(p,w).
$$

Convexity of $\pi$ implies own-price supply slopes upward and own-input demand slopes downward under differentiability:

$$
\frac{\partial y^*}{\partial p}
=
\frac{\partial^2\pi}{\partial p^2}\ge0,
\qquad
\frac{\partial x_i^*}{\partial w_i}
=
-\frac{\partial^2\pi}{\partial w_i^2}\le0.
$$

For cross input prices, H3 Q4 uses the FOC system. Let

$$
F(z,p,w)=p\nabla f(z)-w=0.
$$

Differentiate with respect to $w_k$:

$$
pD^2f(z)\frac{\partial z}{\partial w_k}=e_k.
$$

Thus

$$
\frac{\partial z}{\partial w_k}
=
\frac{1}{p}[D^2f(z)]^{-1}e_k.
$$

With strict concavity and negative cross partial assumptions, one derives $\partial z_\ell/\partial w_k<0$ for $k\neq \ell$ in the homework setting.

## 13. Cost minimization and supply

If $x^*$ maximizes profit and $y^*=f(x^*)$, then $x^*$ solves the cost minimization problem for output $y^*$:

$$
\begin{aligned}
C(y,w)=
\min_{x\ge0}\quad &w\cdot x\\
\text{s.t.}\quad &f(x)\ge y.
\end{aligned}
$$

Properties:

$$
\begin{aligned}
C(y,\alpha w)&=\alpha C(y,w),\\
C(y,w)&\text{ is nondecreasing in }y,\\
C(y,w)&\text{ is nondecreasing and concave in }w.
\end{aligned}
$$

Two-step profit maximization:

$$
\max_y\{R(y)-C(y,w)\}.
$$

FOC:

$$
R'(y^*)=C_y(y^*,w).
$$

For a competitive firm $R(y)=py$, so

$$
p=MC(y^*,w).
$$

This gives the supply curve as inverse marginal cost.

## 14. Production in Arrow-Debreu

There are $K$ firms with production sets $Y^k\subseteq\mathbb R^L$. A production economy equilibrium is

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

## 15. Firms vs household production

The slides show that if households own firm technologies by shares $\delta_k^h$, we can define household production sets

$$
\bar Y^h=\sum_k\delta_k^hY^k.
$$

Under the relevant assumptions, an equilibrium with firms is equivalent to an equilibrium in which households directly operate their share of production technologies. This is useful for welfare proofs because firm profits enter household budget constraints as ownership income.
