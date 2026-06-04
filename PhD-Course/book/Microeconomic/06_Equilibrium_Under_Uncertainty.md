---
course: EF8070 Advanced Microeconomics
topic: Equilibrium Under Uncertainty
type: main-note
sources:
  - EF8070_slides.pdf: Equilibrium Under Uncertainty, slides 1-32
  - hmwk4_soln.pdf
tags:
  - micro
  - uncertainty
  - state-prices
  - complete-markets
  - qe
---

# 06 Equilibrium Under Uncertainty

## 1. Arrow-Debreu uncertainty model

At date $0$, the state is known. At date $1$, one state $s\in\{1,\ldots,S\}$ realizes. There are $L$ physical commodities in each state, so a complete contingent consumption plan is

$$
x_h=(x_h(0),x_h(1),\ldots,x_h(S))\in\mathbb R_+^{L(S+1)}.
$$

With VNM utility,

$$
u_h(x_h) =
v_{h0}(x_h(0))
+
\sum_{s=1}^S\pi_{hs}v_{hs}(x_h(s)).
$$

:::{admonition} Preferences
For each household $h$, utility is $u^h:\mathbb R_+^{L(S+1)}\to\mathbb R$ and we assume

$$
\begin{aligned}
\text{(D1)}\quad &u^h \text{ is at least } C^2 \text{ on the interior of the consumption set},\\
\text{(D2)}\quad &D u^h(x)\gg 0 \quad \forall x\in\mathbb R_{++}^{L(S+1)},\\
\text{(D3)}\quad &D^2 u^h(x) \text{ is negative definite} \quad \forall x\in\mathbb R_{++}^{L(S+1)},\\
\text{(D4)}\quad &\operatorname{cl}\{x:u^h(x)>u^h(\bar x)\}\subseteq \mathbb R_{++}^{L(S+1)}
\quad \forall \bar x\in\mathbb R_{++}^{L(S+1)}.
\end{aligned}
$$
:::

:::{admonition} Walrasian equilibrium in the Arrow-Debreu model
Let $\rho\in\Delta^{L(S+1)}$ be Debreu prices and let each household $h$ have initial endowment

$$
e^h=\big(e^h(0),e^h(1),\ldots,e^h(S)\big)\in\mathbb R_{++}^{L(S+1)}.
$$

An equilibrium consists of prices $\rho\in\Delta^{L(S+1)}$ and an allocation $(x^h)_{h\in\mathcal H}\in\mathbb R_+^{HL(S+1)}$ such that

$$
\left\{
\begin{aligned}
&\sum_{h\in\mathcal H}(x^h-e^h)=0,\\
&u^h(x)>u^h(x^h)\ \Longrightarrow\ \rho\cdot x>\rho\cdot e^h
\qquad \forall h\in\mathcal H.
\end{aligned}
\right.
$$

We call $\rho$ Debreu prices.
:::

The Arrow-Debreu model treats each commodity-state pair as a different good. Therefore the standard existence and welfare theorems apply if all contingent commodities are traded.

## 2. Arrow securities and Debreu prices

Arrow securities pay one unit of the numeraire in a specified future state.

Let $p(s)\in\mathbb R_+^L$ be spot prices in state $s$, normalized so the numeraire price is $p_1(s)=1$. Let $\psi_s$ be the date-0 price of an Arrow security paying one unit of the numeraire in state $s$.

Then the date-0 value of a state-$s$, commodity-$\ell$ delivery is

$$
\rho_{\ell s}=\psi_s p_\ell(s).
$$

Thus Debreu prices $\rho_{\ell s}$ can be decomposed into:

$$
\text{state price}\times\text{spot commodity price}.
$$

If Arrow securities for all states are traded, households can transfer wealth across states exactly as in the complete Arrow-Debreu model.

:::{admonition} Arrow security markets equilibrium
Household $h$ chooses consumption $x^h\in\mathbb R_+^{L(S+1)}$ and state-security holdings $\theta^h\in\mathbb R^S$. Its budget set is

$$
\mathcal B^h(p,\alpha)=
\left\{
\begin{aligned}
&(x,\theta)\in\mathbb R_+^{L(S+1)}\times\mathbb R^S:\\
&p_0\cdot(x(0)-e^h(0))+\alpha\cdot\theta\le 0,\\
&p(s)\cdot(x(s)-e^h(s))-\theta_s\le 0,\qquad s=1,\ldots,S.
\end{aligned}
\right\}.
$$

An equilibrium consists of prices $(p,\alpha)$, an allocation $(x^h)_{h\in\mathcal H}$, and portfolios $(\theta^h)_{h\in\mathcal H}$ such that

$$
\left\{
\begin{aligned}
&\sum_{h\in\mathcal H}(x^h-e^h)=0,\\
&\sum_{h\in\mathcal H}\theta^h=0,\\
&(x^h,\theta^h)\in\arg\max_{(x,\theta)\in\mathcal B^h(p,\alpha)}u^h(x)
\qquad \forall h\in\mathcal H.
\end{aligned}
\right.
$$
:::

:::{admonition} Theorem (Arrow security markets and Debreu prices)
Prices $(p,\alpha)$ and allocations $\big((x^h,\theta^h)\big)_{h\in\mathcal H}$ constitute an Arrow security markets equilibrium if and only if there exist Debreu prices $\rho\in\Delta_+^{L(S+1)-1}$ such that $\big(\rho,(x^h)_{h\in\mathcal H}\big)$ constitute a Walrasian equilibrium.
:::

Proof:
Write the contingent price vector as

$$
\rho(0)=p_0,\qquad \rho_{\ell s}=\alpha_s p_\ell(s),\quad s=1,\ldots,S.
$$

**Arrow security $\Rightarrow$ Walrasian.** If $(x,\theta)\in\mathcal B^h(p,\alpha)$, then

$$
\begin{aligned}
p_0\cdot(x(0)-e^h(0))+\alpha\cdot\theta&\le 0,\\
p(s)\cdot(x(s)-e^h(s))-\theta_s&\le 0,\qquad s=1,\ldots,S.
\end{aligned}
$$

Multiplying the second line by $\alpha_s$ and summing over $s$ yields

$$
\begin{aligned}
\rho\cdot(x-e^h)
&=p_0\cdot(x(0)-e^h(0))+\sum_{s=1}^S\alpha_s p(s)\cdot(x(s)-e^h(s))\\
&\le 0.
\end{aligned}
$$

Hence every Arrow-feasible bundle is $\rho$-budget feasible. If $u^h(x)>u^h(x^h)$ and $\rho\cdot(x-e^h)\le0$, set $\theta_s=p(s)\cdot(x(s)-e^h(s))$. Then $(x,\theta)\in\mathcal B^h(p,\alpha)$, contradicting Arrow security optimality. Therefore $(\rho,(x^h)_h)$ is a Walrasian equilibrium.

**Walrasian $\Rightarrow$ Arrow security.** Conversely, if $(\rho,(x^h)_h)$ is a Walrasian equilibrium, choose $p_0=\rho(0)$ and factor each state block as $\rho_{\ell s}=\alpha_s p_\ell(s)$ with $p_1(s)=1$. For each $h$, let

$$
\theta_s^h=p(s)\cdot(x^h(s)-e^h(s)).
$$

Then $(x^h,\theta^h)\in\mathcal B^h(p,\alpha)$, and any Arrow-feasible $(x,\theta)$ satisfies $\rho\cdot(x-e^h)\le0$. Since $x^h$ is $\rho$-optimal, it is also Arrow-optimal. Hence $(p,\alpha,((x^h,\theta^h))_h)$ is an Arrow security markets equilibrium.
:::

:::{admonition} Market structures and equilibrium concepts at a glance
$$
\left\{
\begin{aligned}
&\text{Debreu-Walras equilibrium} &&: \text{直接交易所有 state-contingent goods}\\
&\text{Arrow security markets equilibrium} &&: \text{每个 state 一个 Arrow security，市场完备}\\
&\text{GEI} &&: \text{资产数量不足或 payoff 不满秩，市场不完备}
\end{aligned}
\right.
$$

$$
\begin{aligned}
\text{Walrasian equilibrium (Debreu-Walras)}&:\ \rho\in\Delta^{L(S+1)},\ (x^h)_{h\in\mathcal H}\\
&\sum_h(x^h-e^h)=0,\\
&u^h(x)>u^h(x^h)\Longrightarrow \rho\cdot x>\rho\cdot e^h;\\[0.5em]
\text{Arrow security markets equilibrium}&:\ (p,\alpha),\ \big((x^h,\theta^h)\big)_{h\in\mathcal H}\\
&\sum_h(x^h-e^h)=0,\quad \sum_h\theta^h=0,\\
&(x^h,\theta^h)\in\arg\max_{(x,\theta)\in\mathcal B^h(p,\alpha)}u^h(x);\\[0.5em]
\text{Debreu-Walras equilibrium}&:\ \text{same as Walrasian equilibrium in contingent commodities.}
\end{aligned}
$$

In complete contingent-commodity markets, Walrasian equilibrium and Debreu-Walras equilibrium are the same object; Arrow security markets implement the same allocation when they admit Debreu prices.
:::

## 3. General asset markets and no arbitrage

Let $A\in\mathbb R^{S\times J}$ be the payoff matrix of $J$ assets across $S$ states, where column $j$ is the payoff vector of asset $j$. Let $q\in\mathbb R^J$ be the vector of asset prices.

Write the payoff vectors as

$$
A=
\begin{pmatrix}
a_{11} & \cdots & a_{1J}\\
\vdots & \ddots & \vdots\\
a_{S1} & \cdots & a_{SJ}
\end{pmatrix} =
\big(a^1,\ldots,a^J\big),
\qquad
q=
\begin{pmatrix}
q_1\\
\vdots\\
q_J
\end{pmatrix},
$$

where $a^j=(a_{1j},\ldots,a_{Sj})^\top$ is the payoff vector of asset $j$.

A portfolio $\theta\in\mathbb R^J$ has date-0 cost $q^\top\theta$ and state payoff $A\theta$.

:::{admonition} General equilibrium with incomplete markets (GEI)
A GEI consists of prices $(p,q)$, allocations $(x^h)_{h\in\mathcal H}$, and portfolios $(\theta^h)_{h\in\mathcal H}$ such that

$$
\left\{
\begin{aligned}
&(x^h,\theta^h)\in\arg\max_{(x,\theta)\in\mathbb R_+^{L(S+1)}\times\mathbb R^J}u^h(x)\\
&\qquad\text{s.t. } p_0\cdot(x(0)-e^h(0))+q\cdot\theta=0,\\
&\qquad\qquad p(s)\cdot(x(s)-e^h(s))=(A\theta)_s,\qquad s=1,\ldots,S,\\
&\sum_{h\in\mathcal H}\theta^h=0,\qquad \sum_{h\in\mathcal H}(x^h-e^h)=0.
\end{aligned}
\right.
$$

If $\operatorname{rank}(A)<S$, then the market is incomplete.
:::

:::{admonition} Definition (Arbitrage-free prices)
Prices $q$ are arbitrage-free if there is no portfolio $\theta$ such that

$$
q^\top\theta\le 0,\quad A\theta>0,
$$
and no portfolio such that

$$
q^\top\theta<0,\quad A\theta\ge 0.
$$
:::

:::{admonition} Theorem (Security prices and state prices)
A security price system $q\in\mathbb R^J$ precludes arbitrage if and only if there exists a state price vector $\alpha\in\mathbb R_{++}^S$ such that

$$
q=A^\top\alpha.
$$
:::

:::{admonition} Separating hyperplanes theorem for cones
If $M$ and $K$ are closed convex cones in $\mathbb R^n$ that intersect only at $0$, and if $K$ is not a linear subspace, then there exists a nonzero linear functional $F$ such that

$$
F(x)<F(y)
\qquad
\forall x\in M,\ \forall y\in K\setminus\{0\}.
$$
:::

Proof:
First, suppose $q=A^\top\alpha$ with $\alpha\gg0$. Suppose $\theta$ is an arbitrage with $q^\top\theta\le0$ and $A\theta>0$. Then

$$
\begin{aligned}
q^\top\theta
&=(A^\top\alpha)^\top\theta\\
&=\alpha^\top A\theta\\
&>0,
\end{aligned}
$$

because $\alpha\gg0$ and $A\theta>0$. Contradiction. The case $q^\top\theta<0$, $A\theta\ge0$ is similar:

$$
q^\top\theta=\alpha^\top A\theta\ge0,
$$

contradicting $q^\top\theta<0$.

Conversely, suppose prices are arbitrage-free. The hard direction is a separating-hyperplane argument.

Define the cone of attainable net trades

$$
M=\{(-q^\top\theta,A\theta):\theta\in\mathbb R^J\}\subseteq\mathbb R^{S+1}.
$$

No arbitrage means

$$
M\cap\mathbb R_+^{S+1}=\{0\}.
$$

Using the separating hyperplane theorem for cones, there exists a nonzero vector $(\mu_0,\mu)$ that separates $M$ from $\mathbb R_+^{S+1}$. The separation implies $\mu\gg0$ and

$$
\begin{aligned}
0&=(\mu_0,\mu)\cdot(-q^\top\theta,A\theta)\\
&=-\mu_0q^\top\theta+\mu^\top A\theta
\qquad \forall \theta.
\end{aligned}
$$

Hence

$$
q=A^\top\left(\frac{\mu}{\mu_0}\right).
$$

Set $\psi=\mu/\mu_0\gg0$.

### No arbitrage, state prices, and market completeness

上面的定理要分成两层理解：**无套利**保证存在某个正的 state price vector；**市场完备**进一步保证这个 state price vector 唯一。

资产价格满足

$$
\begin{aligned}
q&=A^\top\psi\\
\Longleftrightarrow\quad
q_j&=\sum_{s=1}^S\psi_s a_{sj},\qquad j=1,\ldots,J.
\end{aligned}
$$

因此 $\psi_s$ 可以解释为“state $s$ 下 1 单位 numeraire 今天值多少钱”。任意 portfolio $\theta$ 的无套利价格由状态支付逐状态加总得到：

$$
\begin{aligned}
q^\top\theta
&=\theta^\top q\\
&=\theta^\top A^\top\psi\\
&=\psi^\top A\theta.
\end{aligned}
$$

更一般地，如果一个 contingent payoff $d\in\mathbb R^S$ 可以由已有资产复制，即存在 $\theta$ 使得 $A\theta=d$，则它的价格必须是

$$
\begin{aligned}
\pi(d)
&=q^\top\theta\\
&=\psi^\top A\theta\\
&=\psi^\top d.
\end{aligned}
$$

这就是 linear pricing functional：只要无套利，就存在某个线性定价函数 $\pi(d)=\psi^\top d$；只要 payoff 被资产张成（spanned），这个价格就由无套利唯一钉住。

无套利和完备性的关系可以写成：

$$
\left\{
\begin{aligned}
\text{No arbitrage}
&\Longleftrightarrow \exists\,\psi\gg0\ \text{s.t.}\ A^\top\psi=q,\\
\text{Complete markets}
&\Longleftrightarrow \operatorname{rank}(A)=S
\Longleftrightarrow \operatorname{span}(A)=\mathbb R^S,\\
\text{No arbitrage + complete markets}
&\Longleftrightarrow \exists!\,\psi\gg0\ \text{s.t.}\ A^\top\psi=q.
\end{aligned}
\right.
$$

如果市场不完备，$\operatorname{rank}(A)<S$，则仍然可能无套利；但 $A^\top\psi=q$ 的解一般不唯一。直观上，资产只观察到 $\psi$ 在 traded payoff subspace 上的影子，未被交易资产张成的方向没有被价格数据钉住。于是：

$$
\begin{aligned}
A^\top\psi=q,\quad z\in\ker(A^\top)
&\Longrightarrow A^\top(\psi+\varepsilon z)=q,\\
\psi\gg0,\ |\varepsilon|\ \text{small}
&\Longrightarrow \psi+\varepsilon z\gg0.
\end{aligned}
$$

所以 incomplete markets 下，无套利只给出一族 admissible state prices；对未被 span 的 payoff $d$，不同 $\psi$ 会给出不同 $\psi^\top d$，因此该资产没有唯一的 no-arbitrage price。图片中的直觉正是这一点：市场不完备不等于套利存在；只要无套利，仍然存在某个线性定价泛函，只是它不唯一。

## 4. Complete and incomplete markets

:::{admonition} Definition (Complete markets)
The asset structure is complete if its payoff matrix spans all state-contingent wealth transfers:

$$
\operatorname{rank}(A)=S.
$$
:::

If $A$ has full row rank, every contingent payoff $d\in\mathbb R^S$ is attainable:

$$
\exists \theta\quad A\theta=d.
$$

In a complete market, $A^\top\psi=q$ has at most one solution because $\operatorname{rank}(A^\top)=S$. Therefore the no-arbitrage state price vector is unique, and every derived asset with payoff $d$ has unique no-arbitrage price

$$
\pi(d)=\psi^\top d
$$

where $\psi$ is the unique state price vector.

If $\operatorname{rank}(A)<S$, **markets are incomplete**. Then:

- not every risk can be traded away;
- state prices may not be unique;
- only spanned payoffs have prices pinned down by traded assets;
- equilibria can be constrained inefficient;
- the First Welfare Theorem can fail relative to the full Arrow-Debreu allocation.

Slides example: with two future states and only a risk-free bond paying $(1,1)$, agents cannot trade state-contingent risk. Equilibrium may involve no trade even though a full-insurance allocation Pareto dominates the endowment allocation.

:::{admonition} Complete markets collapse GEI to Walrasian equilibrium
If $\operatorname{rank}(A)=S$, then every contingent payoff $d\in\mathbb R^S$ is attainable as $d=A\theta$ for some portfolio $\theta$. The GEI budget constraints can then be rewritten as state-contingent budget constraints, so the GEI allocation is equivalent to an Arrow-Debreu / Walrasian equilibrium in contingent commodities.

If $\operatorname{rank}(A)<S$, then some contingent payoffs are not spanned by assets, so the GEI allocation can be constrained inefficient relative to the full Arrow-Debreu allocation.
:::

:::{admonition} Variations of the basic model
No first-period consumption:

There are $S$ states in the second period, and in the first period agents can trade assets but not commodities. Equivalently,

$$
x_h(0)=e^h(0)=0,\qquad h\in\mathcal H,
$$

so agents have no first-period endowment and no first-period utility.

One good economy:

$$
L=1,
$$

so each state has a single consumption good.
:::

## 5. Full insurance and belief differences

There is one consumption good, two states, and two consumers. Utility is expected utility:

$$
\begin{aligned}
U_1(x_{11},x_{21})&=\pi_{11}u_1(x_{11})+\pi_{21}u_1(x_{21}),\\
U_2(x_{12},x_{22})&=\pi_{12}u_2(x_{12})+\pi_{22}u_2(x_{22}).
\end{aligned}
$$

### Same beliefs and consumer 1 risk neutral

Assume consumer 1 is risk neutral and both consumers have the same probabilities:

$$
\frac{\pi_{11}}{\pi_{21}}=\frac{\pi_{12}}{\pi_{22}}.
$$

Consumer 1's FOC pins down the state-price ratio:

$$
\frac{p_1}{p_2}=\frac{\pi_{11}}{\pi_{21}}.
$$

Consumer 2's FOC is

$$
\frac{p_1}{p_2} =
\frac{\pi_{12}u_2'(x_{12})}{\pi_{22}u_2'(x_{22})}.
$$

Combine:

$$
\begin{aligned}
\frac{\pi_{11}}{\pi_{21}}
&=
\frac{\pi_{12}u_2'(x_{12})}{\pi_{22}u_2'(x_{22})}\\
&=
\frac{\pi_{11}u_2'(x_{12})}{\pi_{21}u_2'(x_{22})}\\
\Longrightarrow
u_2'(x_{12})&=u_2'(x_{22})\\
\Longrightarrow
x_{12}&=x_{22}.
\end{aligned}
$$

Strict concavity gives $u_2'$ strictly decreasing, so equality of marginal utilities implies equal consumption: full insurance.

### Different beliefs

Now consumer 1 is risk neutral but probabilities differ. Still,

$$
\frac{p_1}{p_2}=\frac{\pi_{11}}{\pi_{21}}.
$$

Consumer 2's FOC gives

$$
\frac{p_1}{p_2} =
\frac{\pi_{12}u_2'(x_{12})}{\pi_{22}u_2'(x_{22})}.
$$

Therefore

$$
\begin{aligned}
\frac{u_2'(x_{12})}{u_2'(x_{22})}
&=
\frac{\pi_{11}}{\pi_{21}}\frac{\pi_{22}}{\pi_{12}}.
\end{aligned}
$$

If consumer 2 assigns relatively higher probability to state 1 than consumer 1,

$$
\frac{\pi_{12}}{\pi_{22}}>\frac{\pi_{11}}{\pi_{21}},
$$

then

$$
\begin{aligned}
\frac{u_2'(x_{12})}{u_2'(x_{22})}<1
&\Longrightarrow u_2'(x_{12})<u_2'(x_{22})\\
&\Longrightarrow x_{12}>x_{22}.
\end{aligned}
$$

Consumer 2 overconsumes in the state she views as relatively more likely. Full insurance fails because prices reflect the risk-neutral consumer's beliefs, not consumer 2's beliefs.

## 6. Pricing by arbitrage template

Given asset payoff matrix $A$ and prices $q$, compute $\psi$ from

$$
A^\top \psi=q.
$$

Then any derived asset payoff $d$ has no-arbitrage price

$$
\pi(d)=\psi^\top d
$$

provided $d$ is spanned by traded payoffs. In a complete market this is automatic; in an incomplete market, the price may be nonunique or the asset may not be replicated.
