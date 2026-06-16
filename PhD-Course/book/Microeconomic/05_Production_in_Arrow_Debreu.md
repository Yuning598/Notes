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

## 三类 equilibrium 概览

先把三种均衡的交易对象、优化问题、市场清算条件和相互关系放在一起看，后面再展开生产经济的细节。

:::{admonition} Walrasian equilibrium
**对象**

- 现货商品 $x^h\in\mathbb R_+^L$
- 初始禀赋 $e^h\in\mathbb R_+^L$
- 价格向量 $p\in\mathbb R_+^L$
- 如果有生产，还要加企业集合 $\{Y^f\}$ 和利润分配份额 $\theta_f^h$

**优化问题**

$$
\left\{
\begin{aligned}
&\max_{x^h\ge 0}\ u^h(x^h)\\
&\text{s.t.}\quad p\cdot x^h\le p\cdot e^h
\end{aligned}
\right.
$$

如果有 production，再加

$$
\left\{
\begin{aligned}
&y^f\in\arg\max_{y\in Y^f}p\cdot y\\
&m^h=p\cdot e^h+\sum_f\theta_f^h\pi_f
\end{aligned}
\right.
$$

**均衡条件**

$$
\left\{
\begin{aligned}
&x^h\in\arg\max_{x\ge 0}\{u^h(x):p\cdot x\le p\cdot e^h\},\qquad \forall h\\
&\sum_h x^h=\sum_h e^h
\end{aligned}
\right.
$$

有生产时把市场清算改成

$$
\sum_h x^h=\sum_h e^h+\sum_f y^f.
$$

**典型 FOC**

$$
\frac{MU_i^h}{MU_j^h}=\frac{p_i}{p_j}.
$$

经济含义是：价格把所有商品的边际替代率协调到同一组现货价格上。
:::

:::{admonition} Arrow-Debreu equilibrium
**对象**

- 状态 $s=1,\ldots,S$
- 状态商品 $(s,l)$，也就是 state $s$ 下的 physical good $l$
- 状态概率 $\pi_s=\Pr(s)$
- 状态价格向量 $p_s\in\mathbb R_+^L$
- 完整消费计划 $x^h=(x_1^h,\ldots,x_S^h)$

**优化问题**

$$
\left\{
\begin{aligned}
&\max_{(x_s^h)_{s=1}^S}\ \sum_{s=1}^S\pi_s u_s^h(x_s^h)\\
&\text{s.t.}\quad \sum_{s=1}^S p_s\cdot x_s^h\le \sum_{s=1}^S p_s\cdot e_s^h
\end{aligned}
\right.
$$

**均衡条件**

$$
\left\{
\begin{aligned}
&x^h\in\arg\max \left\{\sum_s\pi_su_s^h(x_s):\sum_sp_s\cdot x_s\le\sum_sp_s\cdot e_s^h\right\},\qquad \forall h\\
&\sum_h x_s^h=\sum_h e_s^h,\qquad \forall s
\end{aligned}
\right.
$$

**典型 FOC**

若只有一个 physical good，则

$$
\frac{\pi_s u^{h'}(x_s^h)}{\pi_t u^{h'}(x_t^h)}=\frac{p_s}{p_t}.
$$

经济含义是：date 0 直接交易所有 state-contingent commodities，所以风险可以被完全保险。
:::

:::{admonition} Arrow-security equilibrium
**对象**

- 证券 $j=1,\ldots,J$
- 证券价格 $q_j$
- 证券 payoff $d_s^j$
- 组合持有 $\theta_j^h$
- state consumption $c_s^h$

**优化问题**

$$
\left\{
\begin{aligned}
&\max_{\theta^h,(c_s^h)_{s=1}^S}\ \sum_{s=1}^S\pi_su^h(c_s^h)\\
&\text{s.t.}\quad c_s^h\le e_s^h+\sum_{j=1}^J d_s^j\theta_j^h,\qquad \forall s\\
&\qquad\quad q\cdot\theta^h\le 0
\end{aligned}
\right.
$$

如果还有 date-0 consumption $c_0^h$，就把预算写成

$$
\left\{
\begin{aligned}
&c_0^h+q\cdot\theta^h\le e_0^h\\
&c_s^h\le e_s^h+\sum_j d_s^j\theta_j^h,\qquad \forall s
\end{aligned}
\right.
$$

**均衡条件**

$$
\left\{
\begin{aligned}
&(\theta^h,c^h)\text{ solves household }h\text{ problem},\qquad \forall h\\
&\sum_h\theta_j^h=0,\qquad \forall j\\
&\sum_h c_s^h=\sum_h e_s^h,\qquad \forall s
\end{aligned}
\right.
$$

**关键关系**

若存在 state price vector $\psi=(\psi_1,\ldots,\psi_S)$，则任意证券价格满足

$$
q_j=\sum_s\psi_s d_s^j,
$$

也就是矩阵形式 $D'\psi=q$。

如果 Arrow securities 完备，那么 complete Arrow securities equilibrium 和 Arrow-Debreu equilibrium 等价；若市场不完备，则一般不能保证 Pareto efficiency。
:::

:::{admonition} 三者关系
- Walrasian equilibrium 是静态现货市场均衡。
- Arrow-Debreu equilibrium 是把每个 state 的商品都当成 date-0 商品来交易。
- Arrow-security equilibrium 是 date 0 先交易资产，date 1 再由资产 payoff 支持 state-contingent consumption。
- Complete Arrow securities $\Longleftrightarrow$ Arrow-Debreu equilibrium。
- Incomplete markets generally need not be Pareto efficient.
:::

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

```{raw} html
<div style="width:100%;max-width:1120px;margin:0 auto;">
  <iframe src="/Notes/production-welfare-theorems-widget.html" title="Production Welfare Theorems" loading="lazy" style="width:100%;height:610px;border:0;display:block;border-radius:16px;"></iframe>
</div>
```

## 2. Firm vs household production equivalence

:::{admonition} Firm production economy
Let $K$ firms have production sets $Y^k\subseteq\mathbb R^L$, and let $\delta_k^h$ be household $h$'s ownership share of firm $k$. An equilibrium is

$$
(p,(c^h)_{h=1}^H,(y^k)_{k=1}^K)
$$

such that

$$
\left\{
\begin{aligned}
&\text{budget: } p\cdot c^h\le p\cdot e^h+\sum_k\delta_k^h\,p\cdot y^k\\
&\text{consumer problem: } c^h\in\arg\max_{c\in\mathbb R_+^L,\ p\cdot c\le p\cdot e^h+\sum_k\delta_k^h\,p\cdot y^k}u^h(c)\\
&\text{firm problem: } y^k\in\arg\max_{y\in Y^k}p\cdot y\\
&\text{market clearing: } \sum_h(c^h-e^h)-\sum_k y^k=0
\end{aligned}
\right.
$$
:::

:::{admonition} Household production economy
Let

$$
Y^h=\sum_{k\in\mathcal K}\delta_k^h Y^k.
$$

An equilibrium is

$$
(p,(c^h,\bar y^h)_{h=1}^H)
$$

such that

$$
\left\{
\begin{aligned}
&\text{budget: } p\cdot c^h\le p\cdot e^h+p\cdot \bar y^h\\
&\text{household problem: } (c^h,\bar y^h)\in\arg\max_{\substack{c\in\mathbb R_+^L,\ y\in Y^h\\ p\cdot c\le p\cdot e^h+p\cdot y}}u^h(c)\\
&\text{market clearing: } \sum_h(c^h-e^h-\bar y^h)=0
\end{aligned}
\right.
$$
:::

:::{admonition} Equivalence of firm and household production economies
Under (A2) and (A5), if $(p,(c^h)_{h\in\mathcal H},(y^k)_{k\in\mathcal K})$ is a firm production equilibrium, then

$$
\left(
p,\left(c^h,\sum_{k\in\mathcal K}\delta_k^h y^k\right)_{h\in\mathcal H}
\right)
$$

is a household production equilibrium. Furthermore, if $(p,(c^h,\bar y^h)_{h\in\mathcal H})$ is a household production equilibrium, then there exist $(y^k)_{k\in\mathcal K}$ such that

$$
\left(
p,(c^h)_{h\in\mathcal H},(y^k)_{k\in\mathcal K}
\right)
$$

is a firm production equilibrium.
:::

(prop-5-1)=

**Proof.**

**Firm $\Rightarrow$ household.** Set $\bar y^h=\sum_k\delta_k^h y^k$. Then

$$
\begin{aligned}
p\cdot c^h
\ &\le\ p\cdot e^h+\sum_k\delta_k^h\,p\cdot y^k\\
\ &=\ p\cdot e^h+p\cdot\bar y^h.
\end{aligned}
$$

Market clearing becomes

$$
\begin{aligned}
\sum_h(c^h-e^h-\bar y^h)
\ &=\ \sum_h(c^h-e^h)-\sum_h\sum_k\delta_k^h y^k\\
\ &=\ \sum_h(c^h-e^h)-\sum_k\Big(\sum_h\delta_k^h\Big)y^k\\
\ &=\ \sum_h(c^h-e^h)-\sum_k y^k\\
\ &=\ 0.
\end{aligned}
$$

If $y\in Y^h$ and $p\cdot y>p\cdot\bar y^h$, write $y=\sum_k\delta_k^h z^k$ with $z^k\in Y^k$. Then

$$
\begin{aligned}
p\cdot y
\ &=\ \sum_k\delta_k^h\,p\cdot z^k
\ >\ \sum_k\delta_k^h\,p\cdot y^k
\ =\ p\cdot\bar y^h,
\end{aligned}
$$

so some firm $k$ would satisfy $p\cdot z^k>p\cdot y^k$, contradicting firm profit maximization. Hence $\bar y^h\in\arg\max_{y\in Y^h}p\cdot y$.

**Household $\Rightarrow$ firm.** Let $\bar y^h\in Y^h=\sum_k\delta_k^hY^k$ and choose a decomposition

$$
\bar y^h=\sum_k\delta_k^h y^k,
\qquad y^k\in Y^k.
$$

Then

$$
\begin{aligned}
\sum_h(c^h-e^h)-\sum_k y^k
\ &=\ \sum_h(c^h-e^h)-\sum_h\bar y^h\\
\ &=\ \sum_h(c^h-e^h-\bar y^h)\\
\ &=\ 0.
\end{aligned}
$$

Moreover,

$$
\begin{aligned}
p\cdot\bar y^h
\ &=\ \sum_k\delta_k^h\,p\cdot y^k,
\end{aligned}
$$

so the household budget constraint is exactly the firm-economy budget constraint. If some firm $k$ had a profitable deviation $z^k\in Y^k$ with $p\cdot z^k>p\cdot y^k$, then household $h$ would obtain a higher income by replacing its share of that firm's plan, contradicting household optimality. Therefore each firm must maximize profit.
:::

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

## 4. Linear technology equilibrium

Goal: check a Walrasian equilibrium by the three conditions in sequence.

### Firm profit maximization

Consider two consumers with

$$
u^h(c)=\log c_1+\log c_2+\log c_3,\qquad h=1,2,
$$

endowments

$$
\begin{aligned}
e^1&=(1,2,3),\\
e^2&=(2,2,2),\\
e&=(3,4,5),
\end{aligned}
$$

and two activities

$$
\begin{aligned}
a^1&=(2,-1,0.5),\\
a^2&=(0,1,-1),\\
y&=\alpha_1a^1+\alpha_2a^2,\qquad \alpha_1,\alpha_2\ge0,
\end{aligned}
$$

with normalization $p_3=1$.

Linear technology implies

$$
\begin{aligned}
\pi(\alpha;p)
&=p\cdot(\alpha_1a^1+\alpha_2a^2)\\
&=\alpha_1(p\cdot a^1)+\alpha_2(p\cdot a^2).
\end{aligned}
$$

For profit maximization to have a solution,

$$
p\cdot a^m\le0,\qquad m=1,2.
$$

If activity $m$ is active, then $\alpha_m>0\Rightarrow p\cdot a^m=0$. Guess both activities are active:

$$
\left\{
\begin{aligned}
&p\cdot a^1=2p_1-p_2+0.5p_3=0,\\
&p\cdot a^2=p_2-p_3=0,\\
&p_3=1.
\end{aligned}
\right.
$$

Thus

$$
\begin{aligned}
p_2&=p_3=1,\\
2p_1-1+0.5&=0
\Rightarrow p_1=0.25.
\end{aligned}
$$

So the candidate price is

$$
\boxed{p=(0.25,1,1)}.
$$

At this price,

$$
p\cdot a^1=0,\qquad p\cdot a^2=0,
$$

so both active activities earn zero profit and no activity yields positive profit.

### Consumer utility maximization

Since both activities earn zero profit, total firm profit is zero. Hence consumer income comes only from endowments:

$$
I^h=p\cdot e^h.
$$

With log utility,

$$
c_l^h=\frac{I^h}{3p_l},\qquad l=1,2,3.
$$

Compute incomes:

$$
\begin{aligned}
I^1
&=p\cdot e^1
=0.25\cdot1+1\cdot2+1\cdot3
=5.25,\\
I^2
&=p\cdot e^2
=0.25\cdot2+1\cdot2+1\cdot2
=4.5.
\end{aligned}
$$

Thus individual demands are

$$
\begin{aligned}
c^1
&=\left(
\frac{5.25}{3\cdot0.25},
\frac{5.25}{3},
\frac{5.25}{3}
\right)
=(7,1.75,1.75),\\
c^2
&=\left(
\frac{4.5}{3\cdot0.25},
\frac{4.5}{3},
\frac{4.5}{3}
\right)
=(6,1.5,1.5).
\end{aligned}
$$

Aggregate demand is

$$
C(p)=c^1+c^2=(13,3.25,3.25).
$$

### Market clearing

Market clearing requires

$$
C(p)=e+y
\quad\Longleftrightarrow\quad
y=C(p)-e.
$$

So required net production is

$$
\begin{aligned}
y
&=(13,3.25,3.25)-(3,4,5)\\
&=(10,-0.75,-1.75).
\end{aligned}
$$

Now solve for activity levels:

$$
\alpha_1a^1+\alpha_2a^2=(10,-0.75,-1.75).
$$

That is,

$$
\left\{
\begin{aligned}
&2\alpha_1=10,\\
&-\alpha_1+\alpha_2=-0.75,\\
&0.5\alpha_1-\alpha_2=-1.75.
\end{aligned}
\right.
$$

Hence

$$
\begin{aligned}
2\alpha_1=10
\ &\Rightarrow\ \alpha_1=5,\\
-\alpha_1+\alpha_2=-0.75
\ &\Rightarrow\ -5+\alpha_2=-0.75
\Rightarrow\ \alpha_2=4.25.
\end{aligned}
$$

Check the third market:

$$
0.5\cdot5-4.25=2.5-4.25=-1.75.
$$

Thus

$$
\boxed{\alpha_1=5,\qquad \alpha_2=4.25.}
$$

The net production plan is

$$
\begin{aligned}
y
&=5(2,-1,0.5)+4.25(0,1,-1)\\
&=(10,-5,2.5)+(0,4.25,-4.25)\\
&=(10,-0.75,-1.75).
\end{aligned}
$$

Therefore,

$$
e+y=(3,4,5)+(10,-0.75,-1.75)=(13,3.25,3.25)=C(p).
$$

### Equilibrium

$$
\boxed{
p=(0.25,1,1),\qquad
c^1=(7,1.75,1.75),\qquad
c^2=(6,1.5,1.5)
}
$$

$$
\boxed{
\alpha_1=5,\qquad
\alpha_2=4.25,\qquad
y=(10,-0.75,-1.75)
}
$$

The price is determined by the active activities' zero-profit conditions; consumer utility maximization gives demand; market clearing pins down the nonnegative activity levels. All three conditions hold, so this is a Walrasian equilibrium.
