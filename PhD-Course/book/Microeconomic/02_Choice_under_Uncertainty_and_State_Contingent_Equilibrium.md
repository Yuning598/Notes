---
course: EF8070 Advanced Microeconomics
topic: Choice under Uncertainty and Equilibrium under Uncertainty
type: main-note
sources:
  - EF8070_slides.pdf: Choice under Uncertainty, slides 1-59
  - EF8070_slides.pdf: Equilibrium Under Uncertainty, slides 1-32
  - hmwk2_solutions.pdf
  - hmwk4_soln.pdf
tags:
  - micro
  - uncertainty
  - expected-utility
  - state-prices
  - qe
---

# 02 Choice under Uncertainty and State-Contingent Equilibrium

## 1. Lotteries and reduction

:::{admonition} Definition (Simple lottery)
Let \(C=\{1,\ldots,N\}\) be a finite set of consequences. A simple lottery is

$$
L=(p_1,\ldots,p_N),\qquad p_n\ge 0,\qquad \sum_{n=1}^N p_n=1.
$$
The set of all simple lotteries is the simplex

$$
\Delta=\{p\in\mathbb R_+^N:\sum_n p_n=1\}.
$$

**Definition (Compound and reduced lottery):**
Given simple lotteries \(L^k=(p_1^k,\ldots,p_N^k)\), \(k=1,\ldots,K\), and weights \(\alpha_k\ge 0\), \(\sum_k\alpha_k=1\), the compound lottery \((L^1,\ldots,L^K;\alpha_1,\ldots,\alpha_K)\) has reduced lottery

$$
L=\sum_{k=1}^K \alpha_k L^k,\qquad
p_n=\sum_{k=1}^K\alpha_k p_n^k.
$$

:::

Every simple lottery is a convex combination of degenerate lotteries:

$$
L=(p_1,\ldots,p_N)=\sum_{n=1}^N p_n L^n,
$$

where \(L^n\) pays consequence \(n\) with probability one.

The slides assume the DM only cares about the **reduced lottery over final outcomes**. The process generating that reduced distribution is irrelevant.

## 2. Preferences over lotteries

The preference relation \(\succeq\) is defined on \(\mathcal L\), the set of simple lotteries.

:::{admonition} Definition (VNM axioms)
The expected utility theorem uses:

$$
\begin{aligned}
\text{Completeness: }& L\succeq L' \text{ or } L'\succeq L.\\
\text{Transitivity: }& L\succeq L',\ L'\succeq L''\Rightarrow L\succeq L''.\\
\text{Continuity: }& L\succ L'\succ L''\Rightarrow \exists\alpha,\beta\in(0,1):\\
&\alpha L+(1-\alpha)L''\succ L'\succ \beta L+(1-\beta)L''.\\
\text{Independence: }& L\succeq L'\Longleftrightarrow
\alpha L+(1-\alpha)L''\succeq \alpha L'+(1-\alpha)L''
\end{aligned}
$$
for all \(L,L',L''\in\mathcal L\) and \(\alpha\in(0,1)\).

:::

The independence axiom is the source of linearity in probabilities. It says common probability branches cancel.

## 3. H2 Q1: independence preserves strict preference and indifference

:::{admonition} Lemma
Independence lemma
If \(\succeq\) satisfies independence, then for all \(\alpha\in(0,1)\):

$$
\begin{aligned}
L\succ L'
&\Longleftrightarrow
\alpha L+(1-\alpha)L''\succ \alpha L'+(1-\alpha)L'',\\
L\sim L'
&\Longleftrightarrow
\alpha L+(1-\alpha)L''\sim \alpha L'+(1-\alpha)L''.
\end{aligned}
$$

:::

**Proof for strict preference.**

**WTS:**
\[
L\succ L'\Rightarrow \alpha L+(1-\alpha)L''\succ \alpha L'+(1-\alpha)L''.
\]

Start from the definition:

$$
\begin{aligned}
L\succ L'
&\Longleftrightarrow L\succeq L'\ \text{and not }L'\succeq L.
\end{aligned}
$$

Apply independence to the weak part:

$$
\begin{aligned}
L\succeq L'
&\Longleftrightarrow
\alpha L+(1-\alpha)L''\succeq
\alpha L'+(1-\alpha)L''.
\end{aligned}
$$

Apply independence to the negated reverse weak preference:

$$
\begin{aligned}
L'\succeq L
&\Longleftrightarrow
\alpha L'+(1-\alpha)L''\succeq
\alpha L+(1-\alpha)L''.
\end{aligned}
$$

Therefore

$$
\begin{aligned}
\neg(L'\succeq L)
&\Longleftrightarrow
\neg\left[
\alpha L'+(1-\alpha)L''\succeq
\alpha L+(1-\alpha)L''
\right].
\end{aligned}
$$

Combining,

$$
\alpha L+(1-\alpha)L''
\succ
\alpha L'+(1-\alpha)L''.
$$

The reverse direction is identical because independence is an iff statement.  
The indifference proof uses \(L\sim L'\Longleftrightarrow L\succeq L'\) and \(L'\succeq L\), then applies independence in both directions.

## 4. Expected utility form and linearity

:::{admonition} Definition (Expected utility form)
A utility function \(U:\mathcal L\to\mathbb R\) has expected utility form if there exist numbers \(u_1,\ldots,u_N\) such that for every \(L=(p_1,\ldots,p_N)\),

$$
U(L)=\sum_{n=1}^N p_nu_n.
$$
The numbers \(u_n\) are Bernoulli utilities of final consequences.

**Lemma:** Expected utility iff linearity in lotteries
\(U\) has expected utility form iff for all lotteries \(L^k\) and weights \(\alpha_k\ge 0\), \(\sum_k\alpha_k=1\),

$$
U\left(\sum_k\alpha_kL^k\right)
=
\sum_k\alpha_kU(L^k).
$$

:::

**Proof.**

If \(U(L)=\sum_n p_nu_n\), then

$$
\begin{aligned}
U\left(\sum_k\alpha_kL^k\right)
&=
U\left(\sum_k\alpha_k(p_1^k,\ldots,p_N^k)\right)\\
&=
U\left(\left(\sum_k\alpha_kp_1^k,\ldots,\sum_k\alpha_kp_N^k\right)\right)\\
&=
\sum_{n=1}^N\left(\sum_k\alpha_kp_n^k\right)u_n\\
&=
\sum_k\alpha_k\sum_{n=1}^Np_n^ku_n\\
&=
\sum_k\alpha_kU(L^k).
\end{aligned}
$$

Conversely, if \(U\) is linear, write \(L=\sum_n p_nL^n\). Then

$$
\begin{aligned}
U(L)
&=U\left(\sum_n p_nL^n\right)\\
&=\sum_n p_nU(L^n).
\end{aligned}
$$

Let \(u_n:=U(L^n)\). Then \(U(L)=\sum_np_nu_n\).

## 5. Expected utility theorem

**Theorem:** If \(\succeq\) on \(\mathcal L\) satisfies completeness, transitivity, continuity, and independence, then there exist \(u_1,\ldots,u_N\) such that

$$
L\succeq L'
\quad\Longleftrightarrow\quad
\sum_n p_nu_n\ge \sum_np_n'u_n.
$$

The slide proof assumes a best lottery \(\overline L\) and worst lottery \(\underline L\).

### Proof roadmap in QE style

**WTS:** Construct a utility representation \(U(L)=\alpha_L\), then show \(U\) is linear.

Step 1. Mixtures lie between better and worse lotteries.

If \(L\succ L'\) and \(\alpha\in(0,1)\), then

$$
L\succ \alpha L+(1-\alpha)L'\succ L'.
$$

Reason: use independence to mix \(L\succ L'\) with \(L\) or \(L'\).

Step 2. Along the line between best and worst lotteries, more of the best lottery is better:

$$
\begin{aligned}
\beta \overline L+(1-\beta)\underline L
\succ
\alpha \overline L+(1-\alpha)\underline L
\quad\Longleftrightarrow\quad
\beta>\alpha.
\end{aligned}
$$

Step 3. For every \(L\), continuity gives a unique \(\alpha_L\in[0,1]\) such that

$$
L\sim \alpha_L\overline L+(1-\alpha_L)\underline L.
$$

Step 4. Define

$$
U(L):=\alpha_L.
$$

Then \(U\) represents \(\succeq\):

$$
\begin{aligned}
L\succeq L'
&\Longleftrightarrow
\alpha_L\overline L+(1-\alpha_L)\underline L
\succeq
\alpha_{L'}\overline L+(1-\alpha_{L'})\underline L\\
&\Longleftrightarrow \alpha_L\ge \alpha_{L'}\\
&\Longleftrightarrow U(L)\ge U(L').
\end{aligned}
$$

Step 5. Show linearity.

**WTS:**

$$
U(\beta L+(1-\beta)L')=\beta U(L)+(1-\beta)U(L').
$$

Use

$$
\begin{aligned}
L&\sim U(L)\overline L+(1-U(L))\underline L,\\
L'&\sim U(L')\overline L+(1-U(L'))\underline L.
\end{aligned}
$$

By independence,

$$
\begin{aligned}
\beta L+(1-\beta)L'
&\sim
\beta[U(L)\overline L+(1-U(L))\underline L]
+(1-\beta)[U(L')\overline L+(1-U(L'))\underline L]\\
&=
[\beta U(L)+(1-\beta)U(L')]\overline L\\
&\qquad+
[1-\beta U(L)-(1-\beta)U(L')]\underline L.
\end{aligned}
$$

By uniqueness of the \(\alpha\) in Step 3,

$$
U(\beta L+(1-\beta)L')
=
\beta U(L)+(1-\beta)U(L').
$$

Therefore \(U\) has expected utility form.

## 6. Positive affine uniqueness

In ordinary consumer theory, any strictly increasing transformation preserves representation. In VNM theory, the EU **form** is preserved only by positive affine transformations.

**Claim:** If \(U\) is a VNM utility representation, then \(V\) is also a VNM utility representation for the same \(\succeq\) iff

$$
V(L)=aU(L)+b,\qquad a>0,\ b\in\mathbb R.
$$

Sufficiency:

$$
\begin{aligned}
V\left(\sum_k\alpha_kL^k\right)
&=
aU\left(\sum_k\alpha_kL^k\right)+b\\
&=
a\sum_k\alpha_kU(L^k)+b\\
&=
\sum_k\alpha_k[aU(L^k)+b]\\
&=
\sum_k\alpha_k V(L^k).
\end{aligned}
$$

Necessity uses the best/worst normalization: both \(U\) and \(V\) must assign values linearly along \(\alpha\overline L+(1-\alpha)\underline L\), so \(V\) must be an affine rescaling of \(U\).

## 7. Risk aversion and Jensen

For monetary consequences, a decision maker with Bernoulli utility \(u\) is risk averse if for every gamble \(g\),

$$
u(E[g])\ge E[u(g)].
$$

If \(u\) is concave, Jensen's inequality gives risk aversion. If \(u\) is strictly concave, the agent strictly dislikes non-degenerate mean-preserving risk.

Certainty equivalent \(CE(g)\) solves

$$
u(CE(g))=E[u(g)].
$$

Risk premium \(\pi(g)\) for a gamble with mean \(\bar w=E[g]\) is

$$
CE(g)=\bar w-\pi(g).
$$

H2 Q3 asks you to connect concavity to the preference for the mean over the gamble. The proof is one line under Jensen:

$$
\begin{aligned}
u(E[g])\ge E[u(g)]
&\Longleftrightarrow
\text{certainty }E[g]\text{ is weakly preferred to }g.
\end{aligned}
$$

## 8. Arrow-Debreu uncertainty model

At date \(0\), the state is known. At date \(1\), one state \(s\in\{1,\ldots,S\}\) realizes. There are \(L\) physical commodities in each state, so a complete contingent consumption plan is

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

The Arrow-Debreu model treats each commodity-state pair as a different good. Therefore the standard existence and welfare theorems apply if all contingent commodities are traded.

## 9. Arrow securities and Debreu prices

Arrow securities pay one unit of the numeraire in a specified future state.

Let \(p(s)\in\mathbb R_+^L\) be spot prices in state \(s\), normalized so the numeraire price is \(p_1(s)=1\). Let \(\psi_s\) be the date-0 price of an Arrow security paying one unit of the numeraire in state \(s\).

Then the date-0 value of a state-\(s\), commodity-\(\ell\) delivery is

$$
\rho_{\ell s}=\psi_s p_\ell(s).
$$

Thus Debreu prices \(\rho_{\ell s}\) can be decomposed into:

$$
\text{state price}\times\text{spot commodity price}.
$$

If Arrow securities for all states are traded, households can transfer wealth across states exactly as in the complete Arrow-Debreu model.

## 10. General asset markets and no arbitrage

Let \(A\in\mathbb R^{S\times J}\) be the payoff matrix of \(J\) assets across \(S\) states, where column \(j\) is the payoff vector of asset \(j\). Let \(q\in\mathbb R^J\) be the vector of asset prices.

A portfolio \(\theta\in\mathbb R^J\) has date-0 cost \(q^\top\theta\) and state payoff \(A\theta\).

:::{admonition} Definition (Arbitrage-free prices)
Prices \(q\) are arbitrage-free if there is no portfolio \(\theta\) such that

$$
q^\top\theta\le 0,\quad A\theta>0,
$$
and no portfolio such that

$$
q^\top\theta<0,\quad A\theta\ge 0.
$$

:::

**Theorem:** \(q\) is arbitrage-free iff there exists a strictly positive state price vector \(\psi\in\mathbb R_{++}^S\) such that

$$
q=A^\top\psi.
$$

### Easy direction proof

**WTS:** If \(q=A^\top\psi\) with \(\psi\gg0\), then no arbitrage.

Suppose \(\theta\) is an arbitrage with \(q^\top\theta\le0\) and \(A\theta>0\). Then

$$
\begin{aligned}
q^\top\theta
&=(A^\top\psi)^\top\theta\\
&=\psi^\top A\theta\\
&>0,
\end{aligned}
$$

because \(\psi\gg0\) and \(A\theta>0\). Contradiction. The case \(q^\top\theta<0\), \(A\theta\ge0\) is similar:

$$
q^\top\theta=\psi^\top A\theta\ge0,
$$

contradicting \(q^\top\theta<0\).

### Hard direction proof sketch

Define the cone of attainable net trades

$$
M=\{(-q^\top\theta,A\theta):\theta\in\mathbb R^J\}\subseteq\mathbb R^{S+1}.
$$

No arbitrage means

$$
M\cap\mathbb R_+^{S+1}=\{0\}.
$$

Using the separating hyperplane theorem for cones, there exists a nonzero vector \((\mu_0,\mu)\) that separates \(M\) from \(\mathbb R_+^{S+1}\). The separation implies \(\mu\gg0\) and

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

Set \(\psi=\mu/\mu_0\gg0\).

## 11. Complete and incomplete markets

:::{admonition} Definition (Complete markets)
The asset structure is complete if its payoff matrix spans all state-contingent wealth transfers:

$$
\operatorname{rank}(A)=S.
$$

:::

If \(A\) has full row rank, every contingent payoff \(d\in\mathbb R^S\) is attainable:

$$
\exists \theta\quad A\theta=d.
$$

Then a derived asset with payoff \(d\) has unique no-arbitrage price

$$
\pi(d)=\psi^\top d
$$

,

where \(\psi\) is the unique state price vector if markets are complete.

If \(\operatorname{rank}(A)<S\), markets are incomplete. Then:

- not every risk can be traded away;
- state prices may not be unique;
- equilibria can be constrained inefficient;
- the First Welfare Theorem can fail relative to the full Arrow-Debreu allocation.

Slides example: with two future states and only a risk-free bond paying \((1,1)\), agents cannot trade state-contingent risk. Equilibrium may involve no trade even though a full-insurance allocation Pareto dominates the endowment allocation.

## 12. H4 Q1-Q2: full insurance and belief differences

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

Strict concavity gives \(u_2'\) strictly decreasing, so equality of marginal utilities implies equal consumption: full insurance.

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

## 13. H4 Q3: pricing by arbitrage template

Given asset payoff matrix \(A\) and prices \(q\), compute \(\psi\) from

$$
A^\top \psi=q.
$$

Then any derived asset payoff \(d\) has no-arbitrage price

$$
\pi(d)=\psi^\top d
$$

provided \(d\) is spanned by traded payoffs. In a complete market this is automatic; in an incomplete market, the price may be nonunique or the asset may not be replicated.
