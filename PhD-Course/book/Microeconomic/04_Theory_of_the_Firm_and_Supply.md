---
course: EF8070 Advanced Microeconomics
topic: Theory of the Firm and Supply
type: main-note
sources:
  - EF8070_slides.pdf: Theory of the Firm and Supply, slides 1-30
  - hmwk3_soln.pdf
  - hmwk4_soln.pdf
tags:
  - micro
  - firm
  - supply
  - production
---

# 04 Theory of the Firm and Supply

## 1. Theory of the firm: production set

:::{admonition} Definition (Production set)
A production plan is $y\in\mathbb R^L$, where positive components are outputs and negative components are inputs. The production set $Y\subseteq\mathbb R^L$ contains feasible production plans.

:::

Common assumptions:

$$
\begin{aligned}
1.\quad &0\in Y \quad \text{(possibility of inaction)},\\
2.\quad &Y \text{ is closed},\\
3.\quad &y\in Y,\ \hat y\le y \Longrightarrow \hat y\in Y \quad \text{(free disposal)},\\
4.\quad &y\in Y,\ y\ge 0 \Longrightarrow y=0 \quad \text{(no free lunch)},\\
5.\quad &Y \text{ is convex},\\
6.\quad &Y \text{ is a cone: } y\in Y,\ \lambda>0 \Longrightarrow \lambda y\in Y.
\end{aligned}
$$

Items 1--4 are the minimal regularity assumptions used in the standard theory. Items 5--6 are stronger shape restrictions used when we study convex technology and constant returns to scale.

For a single-output firm, write the production plan as $(-x,y)$, where $x\in\mathbb R_+^{L-1}$ and $y\in\mathbb R_+$. The production function is

$$
f(x)=\max\{y:(-x,y)\in Y\}.
$$

MRTS:

$$
MRTS_{ij}(x)=\frac{f_i(x)}{f_j(x)}.
$$

## 2. Production function concavity and convex production set

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

## 3. CRS iff production set is a cone

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

## 4. Profit maximization

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

## 5. Supply and input demand comparative statics

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

## 6. Cost minimization and supply

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
