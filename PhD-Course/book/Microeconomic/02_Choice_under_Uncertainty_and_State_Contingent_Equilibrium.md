---
course: EF8070 Advanced Microeconomics
topic: Choice under Uncertainty
type: main-note
sources:
  - EF8070_slides.pdf: Choice under Uncertainty, slides 1-59
  - hmwk2_solutions.pdf
tags:
  - micro
  - uncertainty
  - expected-utility
  - qe
---

# 02 Choice under Uncertainty

## 1. Lotteries and reduction

:::{admonition} Definition (Simple lottery)
Let $C=\{1,\ldots,N\}$ be a finite set of consequences. A simple lottery is

$$
L=(p_1,\ldots,p_N),\qquad p_n\ge 0,\qquad \sum_{n=1}^N p_n=1.
$$
The set of all simple lotteries is the simplex

$$
\Delta=\{p\in\mathbb R_+^N:\sum_n p_n=1\}.
$$
:::

:::{admonition} Definition (Compound and reduced lottery)
Given simple lotteries $L^k=(p_1^k,\ldots,p_N^k)$, $k=1,\ldots,K$, and weights $\alpha_k\ge 0$, $\sum_k\alpha_k=1$, the compound lottery $(L^1,\ldots,L^K;\alpha_1,\ldots,\alpha_K)$ has reduced lottery

$$
L=\sum_{k=1}^K \alpha_k L^k,\qquad
p_n=\sum_{k=1}^K\alpha_k p_n^k.
$$
:::

Every simple lottery is a convex combination of degenerate lotteries:

$$
L=(p_1,\ldots,p_N)=\sum_{n=1}^N p_n L^n,
$$

where $L^n$ pays consequence $n$ with probability one.

The slides assume the DM only cares about the **reduced lottery over final outcomes**. The process generating that reduced distribution is irrelevant.

## 2. Preferences over lotteries

The preference relation $\succeq$ is defined on $\mathcal L$, the set of simple lotteries.

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
for all $L,L',L''\in\mathcal L$ and $\alpha\in(0,1)$.

:::

The independence axiom is the source of linearity in probabilities. It says common probability branches cancel.

## 3. Independence preserves strict preference and indifference

:::{admonition} Lemma 1
If the preference relation $\succeq$ on $\mathcal L$ satisfies the independence axiom, then for all $\alpha\in(0,1)$ and $L,L',L''\in\mathcal L$, we have

$$
L\succ L'
\Longleftrightarrow
\alpha L+(1-\alpha)L''\succ \alpha L'+(1-\alpha)L'',
$$

and

$$
L\sim L'
\Longleftrightarrow
\alpha L+(1-\alpha)L''\sim \alpha L'+(1-\alpha)L''.
$$

::: 

Proof:
For the strict-preference statement, suppose $L\succ L'$. Then $L\succeq L'$ and not $L'\succeq L$. By independence,

$$
L\succeq L'
\Longleftrightarrow
\alpha L+(1-\alpha)L''\succeq \alpha L'+(1-\alpha)L'',
$$

and

$$
L'\succeq L
\Longleftrightarrow
\alpha L'+(1-\alpha)L''\succeq \alpha L+(1-\alpha)L''.
$$

Therefore not $L'\succeq L$ implies not $\alpha L'+(1-\alpha)L''\succeq \alpha L+(1-\alpha)L''$, so

$$
\alpha L+(1-\alpha)L''\succ \alpha L'+(1-\alpha)L''.
$$

The reverse direction is the same argument in reverse.

For the indifference statement, if $L\sim L'$, then $L\succeq L'$ and $L'\succeq L$. Independence gives

$$
\alpha L+(1-\alpha)L''\succeq \alpha L'+(1-\alpha)L''
\quad\text{and}\quad
\alpha L'+(1-\alpha)L''\succeq \alpha L+(1-\alpha)L'',
$$

hence

$$
\alpha L+(1-\alpha)L''\sim \alpha L'+(1-\alpha)L''.
$$

The converse again follows by reversing the argument.

:::{admonition} Lemma 2
If the preference relation $\succeq$ on $\mathcal L$ satisfies the independence axiom, then for all $\alpha\in(0,1)$ and $L,L',L'',L'''\in\mathcal L$, if $L\succ L'$ and $L''\succ L'''$, then

$$
\alpha L+(1-\alpha)L''\succ \alpha L'+(1-\alpha)L'''.
$$
:::

Proof:
Suppose that $L\succ L'$ and $L''\succ L'''$. By Lemma 1, we have:

$$
\begin{aligned}
\alpha L+(1-\alpha)L'' &\succ \alpha L'+(1-\alpha)L'',\\
(1-\alpha)L''+\alpha L' &\succ (1-\alpha)L'''+\alpha L',
\end{aligned}
$$

By transitivity of $\succ$, we have:

$$
\alpha L+(1-\alpha)L''\succ \alpha L'+(1-\alpha)L'''.
$$

## 4. Expected utility

:::{admonition} Definition (Expected utility form)
A utility function $U:\mathcal L\to\mathbb R$ has expected utility form if there exist numbers $u_1,\ldots,u_N$ such that for every $L=(p_1,\ldots,p_N)$,

$$
U(L)=\sum_{n=1}^N p_nu_n.
$$
The numbers $u_n$ are Bernoulli utilities of final consequences.
:::

:::{admonition} Lemma (Expected utility iff linearity in lotteries)
$U$ has expected utility form iff for all lotteries $L^k$ and weights $\alpha_k\ge 0$, $\sum_k\alpha_k=1$,

$$
U\left(\sum_k\alpha_kL^k\right) =
\sum_k\alpha_kU(L^k).
$$
:::

**Proof.**

If $U(L)=\sum_n p_nu_n$, then

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

Conversely, if $U$ is linear, write $L=\sum_n p_nL^n$. Then

$$
\begin{aligned}
U(L)
&=U\left(\sum_n p_nL^n\right)\\
&=\sum_n p_nU(L^n).
\end{aligned}
$$

Let $u_n:=U(L^n)$. Then $U(L)=\sum_np_nu_n$.

![](../attachment/image-20260519.png)

:::{admonition} Proposition (Expected utility implies independence)
If the preference relation $\succeq$ on $\mathcal L$ is represented by a utility function $U(\cdot)$ with expected utility form, then $\succeq$ satisfies the independence axiom.
:::

Proof:
Assume that $\succeq$ is represented by an expected utility function

$$
U(L)=\sum_n u_np_n,\qquad L=(p_1,\ldots,p_N)\in\mathcal L.
$$

Let $L=(p_1,\ldots,p_N)$, $L'=(p'_1,\ldots,p'_N)$, $L''=(p''_1,\ldots,p''_N)$, and $\alpha\in(0,1)$. Then

$$
\begin{aligned}
L\succeq L'
&\Longleftrightarrow U(L)\ge U(L')\\
&\Longleftrightarrow \sum_n u_np_n\ge \sum_n u_np'_n\\
&\Longleftrightarrow \alpha\sum_n u_np_n+(1-\alpha)\sum_n u_np''_n
\ge \alpha\sum_n u_np'_n+(1-\alpha)\sum_n u_np''_n\\
&\Longleftrightarrow \sum_n u_n(\alpha p_n+(1-\alpha)p''_n)
\ge \sum_n u_n(\alpha p'_n+(1-\alpha)p''_n)\\
&\Longleftrightarrow U(\alpha L+(1-\alpha)L'')\ge U(\alpha L'+(1-\alpha)L'')\\
&\Longleftrightarrow \alpha L+(1-\alpha)L''\succeq \alpha L'+(1-\alpha)L'',
\end{aligned}
$$

which is independence for weak preference. The same chain with strict inequalities gives the strict-preference and indifference versions.

![](../attachment/image-20260519-1.png)

:::{admonition} Proposition 2 (Expected Utility Theorem)
Suppose that the preference relation $\succeq$ on the space of lotteries $\mathcal L$ satisfies completeness, transitivity, continuity (or Archimedean), and independence. Then $\succeq$ admits a utility representation of the expected utility form. That is, we can assign a number $u_n$ to each outcome $n=1,\ldots,N$ such that for any two lotteries $L=(p_1,\ldots,p_N)$ and $L'=(p'_1,\ldots,p'_N)$, we have

$$
L\succeq L'
\quad\Longleftrightarrow\quad
\sum_n p_nu_n\ge \sum_np_n'u_n.
$$
:::

:::{admonition} Proof sketch
Construct a utility representation $U(L)=\alpha_L$, prove that $U$ is linear on lottery mixtures, and then conclude $U(L)=\sum_{n=1}^N p_nu_n$ for some $(u_1,\ldots,u_N)$.
:::

The slide proof assumes a best lottery $\overline L$ and worst lottery $\underline L$.

Proof:
Construct a utility representation $U(L)=\alpha_L$, then show $U$ is linear.

### Proof 1: Slide proof

**Step 1.** Mixtures lie between better and worse lotteries.

If $L\succ L'$ and $\alpha\in(0,1)$, then

$$
L\succ \alpha L+(1-\alpha)L'\succ L'.
$$

Proof:
If $L\succ L'$ and $\alpha\in(0,1)$, then the independence axiom implies (use Lemma 1)

$$
L=\alpha L+(1-\alpha)L\succ \alpha L+(1-\alpha)L'
$$

and

$$
\alpha L+(1-\alpha)L'\succ \alpha L'+(1-\alpha)L'=L'.
$$

Thus,

$$
L\succ \alpha L+(1-\alpha)L'\succ L'.
$$

**Step 2.** Along the line between best and worst lotteries, more of the best lottery is better:

$$
\begin{aligned}
\beta \overline L+(1-\beta)\underline L
\succ
\alpha \overline L+(1-\alpha)\underline L
\quad\Longleftrightarrow\quad
\beta>\alpha.
\end{aligned}
$$

Proof:
Suppose $\beta>\alpha$. Note that we can write

$$
\beta \overline L+(1-\beta)\underline L =
\gamma \overline L+(1-\gamma)\big[\alpha \overline L+(1-\alpha)\underline L\big],
$$

where

$$
\gamma=\frac{\beta-\alpha}{1-\alpha}\in(0,1].
$$

Since $\overline L\succ \underline L$, by Step 1 we have

$$
\overline L\succ \alpha \overline L+(1-\alpha)\underline L.
$$

Applying Step 1 again, mixing $\overline L$ with $\alpha \overline L+(1-\alpha)\underline L$ gives

$$
\gamma \overline L+(1-\gamma)\big[\alpha \overline L+(1-\alpha)\underline L\big]
\succ
\alpha \overline L+(1-\alpha)\underline L.
$$

Thus,

$$
\beta \overline L+(1-\beta)\underline L \succ \alpha \overline L+(1-\alpha)\underline L.
$$

The converse that if $\beta \overline L+(1-\beta)\underline L \succ \alpha \overline L+(1-\alpha)\underline L$ then $\beta>\alpha$ follows by contradiction. Suppose not, then either $\beta=\alpha$ or $\beta<\alpha$. You will find either

$$
\beta \overline L+(1-\beta)\underline L \sim \alpha \overline L+(1-\alpha)\underline L
$$

or

$$
\alpha \overline L+(1-\alpha)\underline L \succ \beta \overline L+(1-\beta)\underline L,
$$

both contradictions. Therefore $\beta>\alpha$.

**Step 3.** For every $L$, continuity gives a unique $\alpha_L\in[0,1]$ such that

$$
L\sim \alpha_L\overline L+(1-\alpha_L)\underline L.
$$

Proof:
Existence of $\alpha_L$ is implied by continuity of $\succeq$. Recall that the continuity axiom implies that, given $\overline L\succ L\succ \underline L$, there exists $\alpha_L\in(0,1)$ such that

$$
\alpha_L\overline L+(1-\alpha_L)\underline L\sim L.
$$

Uniqueness follows from Step 2: if $\alpha_L$ is not unique, then you get a contradiction because two different values would imply a strict preference between lotteries that are supposed to be indifferent.

**Step 4.** Define

$$
U(L):=\alpha_L.
$$

Then $U$ represents $\succeq$:

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

Proof:
By Step 3, for any two lotteries $L,L'\in\mathcal L$, we have

$$
\alpha_L\overline L+(1-\alpha_L)\underline L\sim L
\qquad\text{and}\qquad
\alpha_{L'}\overline L+(1-\alpha_{L'})\underline L\sim L'.
$$

Then,

$$
L\succeq L'
\Longleftrightarrow
\alpha_L\overline L+(1-\alpha_L)\underline L
\succeq
\alpha_{L'}\overline L+(1-\alpha_{L'})\underline L.
$$

Thus, by Step 2,

$$
L\succeq L'
\Longleftrightarrow \alpha_L\ge \alpha_{L'}.
$$

Therefore, $U(L)=\alpha_L$ for all $L\in\mathcal L$ represents $\succeq$.

**Step 5.** The utility function $U(\cdot)$ that assigns $U(L)=\alpha_L$ for all $L\in\mathcal L$ is linear and therefore has the expected utility form.

Proof:
We want to show that for any $L,L'\in\mathcal L$ and $\beta\in[0,1]$, we have:

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

By uniqueness of the $\alpha$ in Step 3,

$$
U(\beta L+(1-\beta)L') =
\beta U(L)+(1-\beta)U(L').
$$

Therefore $U$ has expected utility form.

### Proof 2: Best-worst ruler proof

We can restate the same argument in a more structural way.

Let

$$
M(\alpha)=\alpha \bar L+(1-\alpha)\underline L,\qquad \alpha\in[0,1].
$$

Then $M(1)=\bar L$ and $M(0)=\underline L$. Since $\bar L\succ \underline L$, the map $\alpha\mapsto M(\alpha)$ is strictly increasing in the sense that if $\beta>\alpha$, then

$$
M(\beta)\succ M(\alpha).
$$

Indeed, write

$$
M(\beta)=\gamma \bar L+(1-\gamma)M(\alpha),
\qquad
\gamma=\frac{\beta-\alpha}{1-\alpha}\in(0,1),
$$

and apply independence to the comparison $\bar L\succ M(\alpha)$.

Now for any $L\in\mathcal L$, continuity and the assumption $\bar L\succeq L\succeq \underline L$ imply that there exists a unique $\alpha_L\in[0,1]$ such that

$$
M(\alpha_L)\sim L.
$$

Define

$$
U(L)=\alpha_L.
$$

Then $U$ represents preferences because

$$
L\succeq L'
\Longleftrightarrow
M(\alpha_L)\succeq M(\alpha_{L'})
\Longleftrightarrow
\alpha_L\ge \alpha_{L'}
\Longleftrightarrow
U(L)\ge U(L').
$$

To prove linearity, note that

$$
L\sim M(U(L)),\qquad L'\sim M(U(L')).
$$

By independence,

$$
\beta L+(1-\beta)L'
\sim
\beta M(U(L))+(1-\beta)M(U(L')).
$$

Expanding the right-hand side gives

$$
\beta M(U(L))+(1-\beta)M(U(L')) =
M\bigl(\beta U(L)+(1-\beta)U(L')\bigr).
$$

Uniqueness of the representation along the $M(\cdot)$-line implies

$$
U(\beta L+(1-\beta)L') =
\beta U(L)+(1-\beta)U(L').
$$

Therefore $U$ is linear on lotteries, and since every lottery is a convex combination of degenerate lotteries, we get

$$
U(L)=\sum_{n=1}^N p_nu_n,
\qquad
u_n:=U(e^n).
$$

This is the expected utility form.

## 5. Positive affine uniqueness

:::{admonition} Positive affine uniqueness
If $U$ and $V$ are both vNM expected utility representations of the same preference relation $\succeq$, then

$$
V(L)=aU(L)+b,\qquad a>0.
$$

Equivalently, vNM utility is unique up to positive affine transformations.
:::

Proof:
Sufficiency is direct. If $V(L)=aU(L)+b$ with $a>0$, then

$$
L\succeq L'
\Longleftrightarrow U(L)\ge U(L')
\Longleftrightarrow V(L)\ge V(L').
$$

Linearity is also preserved. For lotteries $L^1,\ldots,L^K$ and weights $\alpha_k\ge0$, $\sum_k\alpha_k=1$,

$$
\begin{aligned}
V\left(\sum_{k=1}^K\alpha_kL^k\right)
&=aU\left(\sum_{k=1}^K\alpha_kL^k\right)+b\\
&=a\sum_{k=1}^K\alpha_kU(L^k)+b\sum_{k=1}^K\alpha_k\\
&=\sum_{k=1}^K\alpha_k[aU(L^k)+b]\\
&=\sum_{k=1}^K\alpha_kV(L^k).
\end{aligned}
$$

Necessity uses the best-worst scale. Suppose $U$ and $V$ are both vNM representations of the same preference. Choose $\bar L\succ \underline L$. For any $L$, define

$$
\lambda_L=
\frac{U(L)-U(\underline L)}{U(\bar L)-U(\underline L)}\in[0,1].
$$

Since $U$ is linear,

$$
U(L)=U\bigl(\lambda_L\bar L+(1-\lambda_L)\underline L\bigr),
$$

so $L\sim \lambda_L\bar L+(1-\lambda_L)\underline L$. Because $V$ represents the same preference and is linear,

$$
\begin{aligned}
V(L)
&=V\bigl(\lambda_L\bar L+(1-\lambda_L)\underline L\bigr)\\
&=\lambda_LV(\bar L)+(1-\lambda_L)V(\underline L)\\
&=\frac{U(L)-U(\underline L)}{U(\bar L)-U(\underline L)}[V(\bar L)-V(\underline L)]+V(\underline L).
\end{aligned}
$$

Thus

$$
V(L)=aU(L)+b,
\qquad
a=\frac{V(\bar L)-V(\underline L)}{U(\bar L)-U(\underline L)}>0,
\qquad
b=V(\underline L)-aU(\underline L).
$$

Interpretation: ordinary utility only preserves order, so any strictly increasing transform works. vNM utility must also preserve linearity over lottery mixtures, so nonlinear monotone transforms generally fail:

$$
f\bigl(\alpha U(L)+(1-\alpha)U(L')\bigr)
\neq
\alpha f(U(L))+(1-\alpha)f(U(L')).
$$

This is why vNM curvature has content. Positive affine transformations preserve the sign of curvature:

$$
V(w)=au(w)+b,
\qquad
V''(w)=au''(w),
\qquad a>0.
$$

So risk aversion, risk neutrality, and risk loving are invariant under admissible vNM transformations.

## 6. Applications and extensions

The remaining material uses expected utility as a tool. These are applications of the lottery/EU framework rather than separate foundational chapters.

### Risk aversion and Jensen

:::{admonition} Risk aversion
For monetary outcomes, an agent with Bernoulli utility $u$ is risk averse iff for every gamble $X$,

$$
u(\mathbb E[X])\ge \mathbb E[u(X)].
$$

If the inequality is strict for every non-degenerate gamble, the agent is strictly risk averse.
:::

Proof:
If $u$ is concave, Jensen's inequality gives

$$
u(\mathbb E[X])\ge \mathbb E[u(X)].
$$

Thus the sure payoff $\mathbb E[X]$ is weakly preferred to the risky payoff $X$. If $u$ is strictly concave and $X$ is non-degenerate, Jensen is strict:

$$
u(\mathbb E[X])>\mathbb E[u(X)].
$$

The certainty equivalent $CE$ and risk premium $\pi$ satisfy

$$
u(CE)=\mathbb E[u(X)],
\qquad
\pi=\mathbb E[X]-CE.
$$

For a risk-averse agent, $CE\le \mathbb E[X]$, so $\pi\ge0$. Equivalently,

$$
u(\mathbb E[X]-\pi)=\mathbb E[u(X)].
$$

This is the bridge from lottery preference to insurance and portfolio problems: once payoffs are random, choices can be written as

$$
\max_q \mathbb E[u(W(q))],
\qquad
\max_\theta \mathbb E[u(W(\theta))].
$$

## 7. Chapter purpose

这一章不是为了研究赌博或 lottery 本身，而是为了把“不确定性下的选择”变成可推导、可优化的偏好模型。Lottery language 的作用是把随机结果统一写成概率分布上的选择对象：

$$
L=(p_1,x_1;\ldots;p_N,x_N),\qquad \sum_{i=1}^N p_i=1.
$$

核心问题是：面对两个随机对象 $L,L'$，如何比较？

$$
L\succeq L'
\Longleftrightarrow
U(L)\ge U(L').
$$

The logic is:

$$
\text{risk-choice axioms}
\;\Longrightarrow\;
\text{vNM expected utility representation}
\;\Longrightarrow\;
\text{maximize } \sum_i p_iu(x_i).
$$

The vNM theorem gives the key representation:

$$
L\succeq L'
\Longleftrightarrow
\sum_i p_iu(x_i)\ge \sum_i q_iu(y_i).
$$

So the chapter does not simply assume agents maximize expected utility. It shows that, under completeness, transitivity, continuity, and independence, preferences over lotteries can be represented by

$$
\boxed{
U(L)=\mathbb E[u(x)].
}
$$

Positive affine uniqueness matters because vNM utility must preserve the linear structure in probabilities:

$$
V(x)=au(x)+b,\qquad a>0
\quad\Longrightarrow\quad
V(L)=aU(L)+b.
$$

Unlike ordinary ordinal utility, arbitrary strictly increasing transformations generally destroy expected-utility linearity.

This is what makes the rest of the chapter possible. Risk aversion follows from Jensen:

$$
u''<0
\Longrightarrow
u(\mathbb E[x])>\mathbb E[u(x)],
$$

so certainty equivalents and risk premia are defined by

$$
u(CE)=\mathbb E[u(x)],
\qquad
\pi=\mathbb E[x]-CE.
$$

Insurance and portfolio choice then become expected-utility maximization problems:

$$
\max_q \mathbb E[u(W(q))],
\qquad
\max_\theta \mathbb E[u(W(\theta))].
$$

In asset pricing, future payoffs are also state-contingent random objects. The same vNM utility delivers the stochastic discount factor logic:

$$
p_t=\mathbb E_t[m_{t+1}x_{t+1}],
\qquad
m_{t+1}=\beta\frac{u'(c_{t+1})}{u'(c_t)}.
$$

Thus the lottery chapter is the entry point for the whole uncertainty block: it formalizes random choice objects, derives expected utility, explains positive affine uniqueness, and sets up risk aversion, insurance demand, portfolio choice, and asset pricing.
