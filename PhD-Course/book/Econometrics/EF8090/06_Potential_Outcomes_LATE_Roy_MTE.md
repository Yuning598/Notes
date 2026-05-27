# 06 Potential Outcomes, LATE, and Selection Models


## Potential Outcomes

:::{admonition} Definition (Potential outcomes)
For binary treatment $D\in\{0,1\}$, each unit has two potential outcomes.
$$
Y_i(1),\qquad Y_i(0).
$$
Observed outcome:
$$
Y_i=D_iY_i(1)+(1-D_i)Y_i(0).
$$
:::

:::{admonition} Definition (SUTVA)
SUTVA has two parts.

No interference:
$$
Y_i(d_1,\dots,d_n)=Y_i(d_i).
$$

No hidden versions of treatment:
$$
Y_i(d,v)=Y_i(d), \qquad d\in\{0,1\}.
$$

Then each unit's observed outcome under a treatment status equals the corresponding potential outcome.

:::

Main estimands:

$$
ATE=E[Y(1)-Y(0)],
\qquad
ATT=E[Y(1)-Y(0)\mid D=1],
$$

$$
CATE(x)=E[Y(1)-Y(0)\mid X=x].
$$

### Randomized ATE

If treatment is randomly assigned,

$$
(Y(1),Y(0))\perp D.
$$

Then

$$
E[Y\mid D=1]-E[Y\mid D=0]
=E[Y(1)]-E[Y(0)]=ATE.
$$

:::{admonition} Lemma (Difference in means identifies ATE under random assignment)
:::

**Proof.**

$$
E[Y\mid D=1]-E[Y\mid D=0]=ATE.
$$

$$
Y=DY(1)+(1-D)Y(0), \qquad (Y(1),Y(0))\perp D.
$$

$$
\begin{aligned}
E[Y\mid D=1] &=E[Y(1)\mid D=1]\\
&=E[Y(1)],\\
E[Y\mid D=0] &=E[Y(0)\mid D=0]\\
&=E[Y(0)].
\end{aligned}
$$
$$
E[Y\mid D=1]-E[Y\mid D=0]=E[Y(1)-Y(0)].
$$

Randomization turns missing counterfactual means into observed group means.

Sample difference in means:

$$
\widehat{ATE}_{DM}=\bar Y_{D=1}-\bar Y_{D=0}.
$$

PS4 Q2's heterogeneous treatment model $Y_i=\alpha_i+\beta_iD_i$ with $(\alpha_i,\beta_i)\perp D_i$ gives BLP slope $E[\beta_i]$.

### Unconfoundedness

:::{admonition} Definition (Unconfoundedness and overlap)
$$
(Y(1),Y(0))\perp D\mid X.
$$
Overlap:
$$
0<p(X)=P(D=1\mid X)<1\quad\text{a.s.}
$$
:::

:::{admonition} Lemma (CATE identification)
$$
CATE(x)=E[Y\mid D=1,X=x]-E[Y\mid D=0,X=x].
$$
:::

**Proof.**

$$
Y=DY(1)+(1-D)Y(0), \qquad (Y(1),Y(0))\perp D\mid X.
$$

$$
\begin{aligned}
E[Y\mid D=1,X=x] &=E[Y(1)\mid D=1,X=x]\\
&=E[Y(1)\mid X=x],\\
E[Y\mid D=0,X=x] &=E[Y(0)\mid D=0,X=x]\\
&=E[Y(0)\mid X=x].
\end{aligned}
$$
$$
E[Y\mid D=1,X=x]-E[Y\mid D=0,X=x]=E[Y(1)-Y(0)\mid X=x].
$$

selection on observables makes within-X treated and control groups comparable.

ATE from CATE:

$$
ATE=E[CATE(X)].
$$

Course notation: regression adjustment is the ATE_3 estimator.

$$
\widehat{ATE}_3
=\frac1n\sum_i \widehat{CATE}(X_i)
=\frac1n\sum_i\big[\hat g_1(X_i)-\hat g_0(X_i)\big].
$$

Equivalently,

$$
\widehat{ATE}_3
=\frac1n\sum_i\Big[D_i\big(Y_i-\hat g_1(X_i)\big)
-(1-D_i)\big(Y_i-\hat g_0(X_i)\big)
+\hat g_1(X_i)-\hat g_0(X_i)\Big].
$$

### IPW

:::{admonition} Definition (Propensity score)
$$
p(X)=P(D=1\mid X).
$$
:::

:::{admonition} Lemma (Inverse probability weighting identifies ATE)
$$
E\left[\frac{DY}{p(X)}\right]=E[Y(1)], \qquad E\left[\frac{(1-D)Y}{1-p(X)}\right]=E[Y(0)].
$$
:::

**Proof.**

$$
Y=DY(1)+(1-D)Y(0), \qquad (Y(1),Y(0))\perp D\mid X.
$$

$$
\begin{aligned}
E\left[\frac{DY}{p(X)}\right] &=E\left[\frac{DY(1)}{p(X)}\right]\\
&=E\left[E\left[\frac{DY(1)}{p(X)}\mid X\right]\right]\\
&=E\left[\frac{E[D\mid X]E[Y(1)\mid X]}{p(X)}\right]\\
&=E[E[Y(1)\mid X]]\\
&=E[Y(1)].
\end{aligned}
$$
The control expression is analogous.

IPW reweights observed outcomes to reconstruct the full population potential-outcome mean.

Sample IPW estimator:

$$
\widehat{ATE}_{IPW}
=\frac1n\sum_i\left[\frac{D_iY_i}{p(X_i)}-\frac{(1-D_i)Y_i}{1-p(X_i)}\right].
$$

### Balancing Score

PS5 Q3 asks to prove the propensity score result.

:::{admonition} Lemma (Propensity score is a balancing score)
:::

**Proof.**

$$
D\perp X\mid p(X).
$$

$$
p(X)=P(D=1\mid X).
$$

$$
\begin{aligned}
P(D=1\mid X=x,p(X)=p) &=P(D=1\mid X=x)\\
&=p(x)\\
&=p.
\end{aligned}
$$
Also
$$
P(D=1\mid p(X)=p)=E[P(D=1\mid X)\mid p(X)=p]=p.
$$
Thus
$$
P(D=1\mid X=x,p(X)=p)=P(D=1\mid p(X)=p).
$$

Conditional on $p(X)$, treatment status no longer depends on the full $X$.

If $(Y(1),Y(0))\perp D\mid X$, then combining balancing with Rosenbaum-Rubin logic gives

$$
(Y(1),Y(0))\perp D\mid p(X).
$$

PS5 Q3 also asks: if $b(X)$ is any balancing score, then $p(X)$ is a function of $b(X)$:

$$
p(x)=P(D=1\mid X=x)=P(D=1\mid b(X)=b(x))\equiv f(b(x)).
$$

### Orthogonal Score

Slides combine regression adjustment and propensity score weighting. Define

$$
\mu_d(x)=E[Y\mid D=d,X=x].
$$

A common orthogonal score for ATE is

$$
\psi(W;\eta)=\mu_1(X)-\mu_0(X)+\frac{D(Y-\mu_1(X))}{p(X)}-\frac{(1-D)(Y-\mu_0(X))}{1-p(X)}.
$$

Then

$$
E[\psi(W;\eta_0)]=ATE.
$$

Course notation: the orthogonal / doubly robust estimator is ATE_4.

$$
\widehat{ATE}_4
=\frac1n\sum_i\Big[
\frac{D_i\big(Y_i-\hat g_1(X_i)\big)}{\hat p(X_i)}
-\frac{(1-D_i)\big(Y_i-\hat g_0(X_i)\big)}{1-\hat p(X_i)}
+\hat g_1(X_i)-\hat g_0(X_i)
\Big].
$$

If either the propensity score or the outcome regressions are correctly specified, this score remains valid to first order.

This connects to modern double/debiased machine learning, though EF8090 slides keep the emphasis on intuition.

### Matching

Slides define matching by imputing missing potential outcomes using nearest observations in the other treatment group.

:::{admonition} Definition (Matching estimator with $M$ matches)
Let $\mathcal M_i^C$ be the $M$ closest controls to treated unit $i$, and $\mathcal M_i^T$ the $M$ closest treated units to control unit $i$. Then
$$
\hat Y_{i1}=D_iY_i+(1-D_i)\frac1M\sum_{j\in\mathcal M_i^T}Y_j,
$$
$$
\hat Y_{i0}=D_i\frac1M\sum_{j\in\mathcal M_i^C}Y_j+(1-D_i)Y_i,
$$
$$
\widehat{ATE}_M=\frac1n\sum_i(\hat Y_{i1}-\hat Y_{i0}).
$$

:::

Matching targets ATE; compare $\widehat{ATE}_M$ with $ATE$.

Bias-corrected matching adjusts matched outcomes by estimated regression functions:

$$
Y_j+\hat g_d(X_i)-\hat g_d(X_j).
$$

If the match is exact, $X_i=X_j$, the correction disappears.

:::{admonition} ATE estimators in one frame
All estimators target the same object:
$$
ATE=E[Y(1)-Y(0)].
$$
They differ only in how they fill in the missing counterfactual.

- Difference in means: $\widehat{ATE}_{DM}=\bar Y_1-\bar Y_0$. Fill the missing outcome with the opposite group mean; this needs random assignment.
- IPW: reweight observed outcomes by $\hat e(X)$ and $1-\hat e(X)$. It uses the propensity score to recover population means without explicit outcome imputation.
- Regression adjustment / $\widehat{ATE}_3$: fill missing outcomes with $\hat g_1(X)$ and $\hat g_0(X)$. This is efficient when the outcome model is informative.
- AIPW / orthogonal / $\widehat{ATE}_4$: combine regression adjustment with weighted residual correction. This is doubly robust and orthogonal.
- Matching: fill missing outcomes with nearest-neighbor outcomes. This is intuitive but can have finite-match bias.
- Bias-corrected matching: matching plus regression correction. This reduces local mismatch bias.

Shared identities:
$$
ATE=E[CATE(X)],\qquad g_d(x)=E[Y(d)\mid X=x],\qquad e(x)=P(D=1\mid X=x).
$$

For any balancing score $b(X)$, $(Y(1),Y(0))\perp D\mid b(X)$ whenever it holds given $X$ and $b(X)$ is sufficient to balance treatment assignment. The propensity score is the canonical minimal such score.
:::

## LATE and Selection Models

### LATE Setup

Slides introduce LATE through Angrist's draft lottery setting: instrument affects treatment take-up, but treatment is not perfectly determined by the instrument.

Let $Z\in\{0,1\}$ be instrument, $D(z)\in\{0,1\}$ potential treatment, and $Y(d)$ potential outcome.

:::{admonition} Definition (LATE assumptions)
1. Independence: $(Y(1),Y(0),D(1),D(0))\perp Z$.
2. Exclusion: $Z$ affects $Y$ only through $D$.
3. Relevance: $E[D\mid Z=1]\ne E[D\mid Z=0]$.
4. Monotonicity: $D(1)\ge D(0)$ a.s., so no defiers.

:::

Compliance types:

$$
\begin{array}{c|cc}
\text{Type}&D(0)&D(1)\\\hline
\text{Never taker}&0&0\\
\text{Complier}&0&1\\
\text{Always taker}&1&1\\
\text{Defier}&1&0
\end{array}
$$

### Wald = LATE

:::{admonition} Lemma (LATE theorem)
:::

**Proof.**

$$
\frac{E[Y\mid Z=1]-E[Y\mid Z=0]}{E[D\mid Z=1]-E[D\mid Z=0]} =E[Y(1)-Y(0)\mid D(1)>D(0)].
$$

$$
D=ZD(1)+(1-Z)D(0),
$$
$$
Y=Y(0)+D(Y(1)-Y(0)).
$$

$$
\begin{aligned}
E[D\mid Z=1]-E[D\mid Z=0] &=E[D(1)-D(0)],\\
E[Y\mid Z=1]-E[Y\mid Z=0] &=E[(D(1)-D(0))(Y(1)-Y(0))].
\end{aligned}
$$

$$
\frac{E[Y\mid Z=1]-E[Y\mid Z=0]}{E[D\mid Z=1]-E[D\mid Z=0]}
=E[Y(1)-Y(0)\mid D(1)>D(0)].
$$

IV identifies the average treatment effect for compliers, not necessarily ATE.

### Compliance Shares

PS4 Q6 asks whether always-taker, never-taker, and complier shares are estimable.
Under independence and monotonicity:

$$
a=P(D(1)=1,D(0)=1)=P(D=1\mid Z=0),
$$

$$
n=P(D(1)=0,D(0)=0)=P(D=0\mid Z=1),
$$

$$
c=P(D(1)=1,D(0)=0)=P(D=1\mid Z=1)-P(D=1\mid Z=0).
$$

Sample analogs replace probabilities by sample proportions.

If monotonicity is dropped, the Wald estimand becomes

$$
\frac{P(C)E[\tau\mid C]-P(DF)E[\tau\mid DF]}{P(C)-P(DF)},
$$

where $DF$ are defiers. This is hard to interpret as a clean average treatment effect.

## Roy and MTE

### Normalization

PS5 Q1 supports the Roy/MTE normalization. If $X$ has continuous strictly increasing cdf $F$, define $Y=F(X)$. Then

$$
P(Y\le y)=P(F(X)\le y)=P(X\le F^{-1}(y))=F(F^{-1}(y))=y.
$$

So $Y\sim U[0,1]$. This lets the latent selection variable $U_D$ be normalized to uniform.

### Roy Model

:::{admonition} Definition (Nonparametric Roy / selection model)
$$
Y=DY_1+(1-D)Y_0, \qquad D=1[U_D\le p(Z)],
$$
where $U_D\sim U[0,1]$ and $(Y_0,Y_1,U_D)\perp Z$.

:::

The key economic object is selection on gains: individuals with low $U_D$ are more likely to take treatment.

:::{admonition} Definition (Marginal Treatment Effect)
$$
MTE(u)=E[Y_1-Y_0\mid U_D=u].
$$
It is the treatment effect for individuals indifferent at margin $u$.

:::

### MTE Weights

Slides stress that ATE, ATT, LATE and IV estimands are weighted averages of MTE.

:::{admonition} Lemma (ATE is integral of MTE)
:::

**Proof.**

$$
ATE=\int_0^1MTE(u)du.
$$

$$
U_D\sim U[0,1].
$$

$$
\begin{aligned}
E[Y_1-Y_0] &=E[E[Y_1-Y_0\mid U_D]]\\
&=\int_0^1E[Y_1-Y_0\mid U_D=u]du\\
&=\int_0^1MTE(u)du.
\end{aligned}
$$

ATE weights all margins equally.

:::{admonition} Lemma (LATE weights MTE over changed margins)
If $p(z)>p(z')$,
$$
LATE(z,z')=\frac{\int_{p(z')}^{p(z)}MTE(u)du}{p(z)-p(z')}.
$$
:::

**Proof.**

$$
D=1[U_D\le p(Z)].
$$

The first stage is
$$
E[D\mid Z=z]-E[D\mid Z=z']=p(z)-p(z').
$$
The reduced form is
$$
\begin{aligned}
E[Y\mid Z=z]-E[Y\mid Z=z'] &=\int_0^{p(z)}MTE(u)du-\int_0^{p(z')}MTE(u)du\\
&=\int_{p(z')}^{p(z)}MTE(u)du.
\end{aligned}
$$
Ratio gives the result.

IV identifies treatment effects for individuals whose treatment status is shifted by the instrument.

PS5 Q2 asks for the untreated-group effect:

$$
E[Y_1-Y_0\mid D=0]
=\int_0^1MTE(u)\frac{P[p(Z)<u]}{P[D=0]}du.
$$

Derivation:

$$
\begin{aligned}
E[\tau\mathbf 1\{D=0\}]
&=E[\tau\mathbf 1\{U_D>p(Z)\}]\\
&=\int_0^1E[\tau\mid U_D=u]P[p(Z)<u]du\\
&=\int_0^1MTE(u)P[p(Z)<u]du.
\end{aligned}
$$

Divide by $P[D=0]$.

### Vytlacil and Policy

Slides state Vytlacil's equivalence: monotonicity in the LATE model corresponds to a latent index selection model

$$
D=1[p(Z)\ge U_D].
$$

Thus LATE and MTE frameworks are not separate worlds; LATE is a special weighted average of MTE.

Policy relevant treatment effect changes the distribution of $p(Z)$ under a policy and compares average outcomes before and after policy. MTE is useful because once $MTE(u)$ is identified or modeled, many policy counterfactuals become alternative weighting schemes over $u$.

$$
X\sim F \quad\Longrightarrow\quad F(X)\sim U[0,1].
$$

$$
ATE=\int_0^1 MTE(u)\,du.
$$

For untreated units,

$$
E[Y_1-Y_0\mid D=0]
=\int_0^1 MTE(u)\frac{P[p(Z)<u]}{P[D=0]}du.
$$

Weighted average over margins not selected into treatment.
