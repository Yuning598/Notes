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
u_h(x_h)
=
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

## 3. General asset markets and no arbitrage

Let $A\in\mathbb R^{S\times J}$ be the payoff matrix of $J$ assets across $S$ states, where column $j$ is the payoff vector of asset $j$. Let $q\in\mathbb R^J$ be the vector of asset prices.

A portfolio $\theta\in\mathbb R^J$ has date-0 cost $q^\top\theta$ and state payoff $A\theta$.

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

:::{admonition} Theorem (Arbitrage-free prices and state prices)
$q$ is arbitrage-free iff there exists a strictly positive state price vector $\psi\in\mathbb R_{++}^S$ such that

$$
q=A^\top\psi.
$$
:::

Proof:
First, suppose $q=A^\top\psi$ with $\psi\gg0$. Suppose $\theta$ is an arbitrage with $q^\top\theta\le0$ and $A\theta>0$. Then

$$
\begin{aligned}
q^\top\theta
&=(A^\top\psi)^\top\theta\\
&=\psi^\top A\theta\\
&>0,
\end{aligned}
$$

because $\psi\gg0$ and $A\theta>0$. Contradiction. The case $q^\top\theta<0$, $A\theta\ge0$ is similar:

$$
q^\top\theta=\psi^\top A\theta\ge0,
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

Then a derived asset with payoff $d$ has unique no-arbitrage price

$$
\pi(d)=\psi^\top d
$$

where $\psi$ is the unique state price vector if markets are complete.

If $\operatorname{rank}(A)<S$, markets are incomplete. Then:

- not every risk can be traded away;
- state prices may not be unique;
- equilibria can be constrained inefficient;
- the First Welfare Theorem can fail relative to the full Arrow-Debreu allocation.

Slides example: with two future states and only a risk-free bond paying $(1,1)$, agents cannot trade state-contingent risk. Equilibrium may involve no trade even though a full-insurance allocation Pareto dominates the endowment allocation.

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
\frac{p_1}{p_2}
=
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
\frac{p_1}{p_2}
=
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
