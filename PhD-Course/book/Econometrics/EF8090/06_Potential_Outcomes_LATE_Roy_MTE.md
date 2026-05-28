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

For a heterogeneous treatment model,

$$
Y_i=\alpha_i+\beta_iD_i.
$$

If $(\alpha_i,\beta_i)\perp D_i$, the BLP slope is $E[\beta_i]$.

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

Regression adjustment is the $ATE_3$ estimator:

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

$$
\begin{aligned}
P(D=1\mid p(X)=p)
&=E[P(D=1\mid X)\mid p(X)=p]\\
&=E[p(X)\mid p(X)=p]\\
&=p.
\end{aligned}
$$

$$
P(D=1\mid X=x,p(X)=p)=P(D=1\mid p(X)=p).
$$

* Conditional on $p(X)$, treatment status no longer depends on the full $X$.

* If $(Y(1),Y(0))\perp D\mid X$, then combining balancing with Rosenbaum-Rubin logic gives

$$
(Y(1),Y(0))\perp D\mid p(X).
$$

If $b(X)$ is any balancing score, then $p(X)$ is a function of $b(X)$:

$$
p(x)=P(D=1\mid X=x)=P(D=1\mid b(X)=b(x))\equiv f(b(x)).
$$

### Orthogonal Score

Regression adjustment and propensity weighting combine through the orthogonal score. Define

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

The orthogonal / doubly robust estimator is $ATE_4$:

$$
\widehat{ATE}_4
=\frac1n\sum_i\Big[
\frac{D_i\big(Y_i-\hat g_1(X_i)\big)}{\hat p(X_i)}
-\frac{(1-D_i)\big(Y_i-\hat g_0(X_i)\big)}{1-\hat p(X_i)}
+\hat g_1(X_i)-\hat g_0(X_i)
\Big].
$$

If either the propensity score or the outcome regressions are correctly specified, this score remains valid to first order.

### Matching

Matching imputes missing potential outcomes using nearest observations in the other treatment group.

:::{admonition} Definition (Matching estimator with $M$ matches)
$\mathcal M_i^C$ is the $M$ closest controls to treated unit $i$, and $\mathcal M_i^T$ is the $M$ closest treated units to control unit $i$.

$$
\begin{aligned}
\hat Y_{i1}
&=D_iY_i+(1-D_i)\frac1M\sum_{j\in\mathcal M_i^T}Y_j,\\
\hat Y_{i0}
&=D_i\frac1M\sum_{j\in\mathcal M_i^C}Y_j+(1-D_i)Y_i,\\
\widehat{ATE}_M
&=\frac1n\sum_i(\hat Y_{i1}-\hat Y_{i0}).
\end{aligned}
$$

:::

Matching targets $ATE$; compare $\widehat{ATE}_M$ with $ATE$.

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

**Difference in means.**

$$
\widehat{ATE}_{DM}=\bar Y_1-\bar Y_0.
$$

Uses only treated and control sample means.

**IPW.**

$$
\widehat{ATE}_{IPW}
=\frac1n\sum_i\left[\frac{D_iY_i}{\hat e(X_i)}-\frac{(1-D_i)Y_i}{1-\hat e(X_i)}\right].
$$

Reweights observed outcomes by the propensity score.

**Regression adjustment.**

$$
\widehat{ATE}_3
=\frac1n\sum_i\big[\hat g_1(X_i)-\hat g_0(X_i)\big].
$$

Uses fitted conditional means.

**AIPW / orthogonal.**

$$
\widehat{ATE}_4
=\frac1n\sum_i\Big[
\frac{D_i\big(Y_i-\hat g_1(X_i)\big)}{\hat e(X_i)}
-\frac{(1-D_i)\big(Y_i-\hat g_0(X_i)\big)}{1-\hat e(X_i)}
+\hat g_1(X_i)-\hat g_0(X_i)
\Big].
$$

Combines regression adjustment with weighted residual correction.

**Matching.**

$$
\widehat{ATE}_M=\frac1n\sum_i(\hat Y_{i1}-\hat Y_{i0}).
$$

Uses nearest-neighbor outcomes.

**Bias-corrected matching.**

$$
\widehat{ATE}_M^{bc}=\frac1n\sum_i(\tilde Y_{i1}-\tilde Y_{i0}).
$$

Matching plus regression correction.

Shared identities:

- $ATE=E[CATE(X)]$
- $g_d(x)=E[Y(d)\mid X=x]$
- $e(x)=P(D=1\mid X=x)$

Balancing score:

- For any balancing score $b(X)$, $(Y(1),Y(0))\perp D\mid b(X)$ whenever it holds given $X$ and $b(X)$ is sufficient to balance treatment assignment.
- The propensity score is the canonical minimal such score.
:::

## LATE and Selection Models

### LATE Setup

LATE applies when an instrument affects treatment take-up, but treatment is not perfectly determined by the instrument.

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

:::{admonition} LATE in one frame
Potential-outcome system:

$$
Y=DY(1)+(1-D)Y(0),\qquad D=D(Z).
$$

Identifying variation:

$$
E[D\mid Z=1]-E[D\mid Z=0].
$$

Reduced-form shift:

$$
E[Y\mid Z=1]-E[Y\mid Z=0].
$$

Wald ratio:

$$
LATE=\frac{E[Y\mid Z=1]-E[Y\mid Z=0]}{E[D\mid Z=1]-E[D\mid Z=0]}
=E[Y(1)-Y(0)\mid D(1)>D(0)].
$$

The estimand is the complier effect, not ATE in general.

Complier logic:

$$
\begin{aligned}
\text{never taker} &:\ D(0)=D(1)=0,\\
\text{complier} &:\ D(0)=0,\ D(1)=1,\\
\text{always taker} &:\ D(0)=D(1)=1.
\end{aligned}
$$

Monotonicity rules out defiers.
:::

## Roy and MTE

### Selection Model and MTE

:::{admonition} Definition (Roy selection model)
Outcome is generated by the selected potential outcome:

$$
Y=DY_1+(1-D)Y_0.
$$

Treatment follows a latent-index rule:

$$
D=1[U_D\le p(Z)],\qquad U_D\sim U[0,1],
$$

with $(Y_0,Y_1,U_D)\perp Z$.
:::

:::{admonition} Definition (Marginal treatment effect)
The marginal treatment effect is the treatment effect for units whose latent resistance to treatment is $u$:

$$
MTE(u)=E[Y_1-Y_0\mid U_D=u].
$$
:::

The normalization $U_D\sim U[0,1]$ is without loss if the latent variable has a continuous strictly increasing cdf $F$:

$$
\begin{aligned}
Y=F(X)
&\Longrightarrow
P(Y\le y)=P(F(X)\le y)\\
&=P(X\le F^{-1}(y))\\
&=F(F^{-1}(y))=y.
\end{aligned}
$$

### MTE as a Weighting Device

:::{admonition} Weighted averages of MTE
Different treatment-effect parameters put different weights on the same marginal treatment effects:

$$
\begin{aligned}
ATE
&=\int_0^1MTE(u)\,du,\\
LATE(z,z')
&=\frac{\int_{p(z')}^{p(z)}MTE(u)\,du}{p(z)-p(z')},\\
ATU
&=E[Y_1-Y_0\mid D=0]
=\int_0^1MTE(u)\frac{P[p(Z)<u]}{P[D=0]}\,du.
\end{aligned}
$$
:::

For LATE, the first stage and reduced form are

$$
\begin{aligned}
E[D\mid Z=z]-E[D\mid Z=z']
&=p(z)-p(z'),\\
E[Y\mid Z=z]-E[Y\mid Z=z']
&=\int_{p(z')}^{p(z)}MTE(u)\,du.
\end{aligned}
$$

For the untreated-group effect,

$$
\begin{aligned}
E[(Y_1-Y_0)\mathbf 1\{D=0\}]
&=E[(Y_1-Y_0)\mathbf 1\{U_D>p(Z)\}]\\
&=\int_0^1E[Y_1-Y_0\mid U_D=u]P[p(Z)<u]\,du\\
&=\int_0^1MTE(u)P[p(Z)<u]\,du.
\end{aligned}
$$

### Fully Parametric Roy Model

:::{admonition} Parametric Roy model (Heckman selection correction)
Assume linear potential outcomes and normal selection:

$$
\left\{
\begin{aligned}
Y_d &=X'\beta_d+V_d,\qquad d=0,1,\\
D &=1[U\le W'\gamma],\qquad W=(X,Z).
\end{aligned}
\right.
$$

Then the treatment-effect heterogeneity decomposes as

$$
Y_1-Y_0=X'(\beta_1-\beta_0)+(V_1-V_0).
$$
:::

For the selected treated group,

$$
\begin{aligned}
E[Y\mid W,D=1]
&=E[Y_1\mid W,U\le W'\gamma]\\
&=X'\beta_1+E[V_1\mid W,U\le W'\gamma]\\
&=X'\beta_1+\rho_1\lambda(W'\gamma).
\end{aligned}
$$

Thus identification proceeds as

$$
\begin{aligned}
D\text{ probit on }W
&\Longrightarrow \hat\gamma,\ \lambda(W'\hat\gamma),\\
Y\text{ on }X\text{ and }\lambda(W'\hat\gamma)\text{ among }D=1
&\Longrightarrow \beta_1,\rho_1.
\end{aligned}
$$

:::{admonition} Critique (parametric identification)
Point identification can come from the nonlinearity of $\lambda(W'\gamma)$, even when the excluded instrument $Z$ is weak or absent:

$$
X \not\parallel \lambda(X'\gamma)
\quad\Longrightarrow\quad
\beta_1,\rho_1\text{ can be separately fit by functional form.}
$$

The identifying power is therefore partly parametric, not purely design-based.
:::

### Nonparametric Identification

:::{admonition} Lemma (local IV identifies MTE)
If $P=p(Z)$ is continuously distributed, then for all $u$ in the interior support of $P$,

$$
\left.\frac{\partial}{\partial p}E[Y\mid P=p]\right|_{p=u}
=MTE(u).
$$
:::

**Proof.**

$$
\begin{aligned}
E[Y\mid P=p]
&=E[DY_1+(1-D)Y_0\mid P=p]\\
&=E[Y_0]+E[D(Y_1-Y_0)\mid P=p]\\
&=E[Y_0]+E[1\{U_D\le p\}(Y_1-Y_0)]\\
&=E[Y_0]+\int_0^p E[Y_1-Y_0\mid U_D=u]\,du\\
&=E[Y_0]+\int_0^p MTE(u)\,du.
\end{aligned}
$$

Therefore

$$
\frac{\partial}{\partial p}E[Y\mid P=p]=MTE(p).
$$

This is pointwise identification. ATE needs the whole curve:

$$
ATE=\int_0^1MTE(u)\,du.
$$

If $P$ has support only on a small interval, common parameters outside that interval require extrapolation.

### Discrete Instruments and Parametric MTE

When $Z$ is discrete, $P=p(Z)$ has finite support, so the derivative in the local-IV formula is not directly available. A parametric restriction on $u\mapsto E[Y_d\mid U_D=u]$ restores identification.

:::{admonition} Linear MTE specification (Brinch-Mogstad-Wiswall)
Assume

$$
E[Y_d\mid U_D=u]=\alpha_d+\beta_d u,\qquad d=0,1.
$$

Then

$$
MTE(u)=(\alpha_1-\alpha_0)+(\beta_1-\beta_0)u.
$$
:::

For treated units at propensity score $P=p$,

$$
\begin{aligned}
E[Y\mid D=1,P=p]
&=E[Y_1\mid U_D\le p]\\
&=\frac1p\int_0^p(\alpha_1+\beta_1u)\,du\\
&=\alpha_1+\frac{\beta_1}{2}p.
\end{aligned}
$$

For untreated units,

$$
\begin{aligned}
E[Y\mid D=0,P=p]
&=E[Y_0\mid U_D>p]\\
&=\frac{1}{1-p}\int_p^1(\alpha_0+\beta_0u)\,du\\
&=\alpha_0+\frac{\beta_0}{2}(1+p).
\end{aligned}
$$

Thus regressing $Y$ on $P$ separately by $D=d$ identifies $\alpha_d,\beta_d$. Two support points in $P$ are enough for the linear case, so a binary instrument can identify the full linear MTE curve.

### Linear-in-Parameters MTE

:::{admonition} General linear-in-parameters specification
Let the marginal treatment response be

$$
m(d,u,x)=E[Y_d\mid U_D=u,X=x]=\sum_{k=1}^K\theta_k b_k(d,u,x),
$$

where $b_k$ are known basis functions.
:::

Observed conditional means integrate over the selected part of $U_D$:

$$
\bar b_k(d,x,z)
\equiv
\frac{d}{p(x,z)}\int_0^{p(x,z)} b_k(1,u,x)\,du
+\frac{1-d}{1-p(x,z)}\int_{p(x,z)}^1 b_k(0,u,x)\,du.
$$

Therefore

$$
E[Y\mid D=d,X=x,Z=z]
=\sum_{k=1}^K\theta_k\bar b_k(d,x,z).
$$

Identification reduces to a rank condition in the transformed regressors:

$$
\operatorname{rank}E[\bar b(D,X,Z)\bar b(D,X,Z)']=K.
$$

### Separability and Estimation

:::{admonition} Separability
If

$$
m(d,u,x)=g_d(u)+h_d(x),
$$

then heterogeneity in $u$ does not interact with $x$. Support requirements can use the unconditional support of $P=p(Z)$ rather than the support of $P$ conditional on every $X=x$.
:::

The estimation logic is:

$$
\begin{aligned}
\hat p(X,Z)
&\Longrightarrow \widehat P_i,\\
\frac{\partial}{\partial p}E[Y\mid X=x,P=p]
&\Longrightarrow MTE(x,p),\\
MTE(x,u)
&=E[Y_1\mid X=x,U_D=u]-E[Y_0\mid X=x,U_D=u].
\end{aligned}
$$

:::{admonition} Roy/MTE in one frame
$$
\left\{
\begin{aligned}
&D=1[U_D\le p(Z)],\qquad U_D\sim U[0,1],\\
&MTE(u)=E[Y_1-Y_0\mid U_D=u],\\
&E[Y\mid P=p]=E[Y_0]+\int_0^pMTE(u)\,du,\\
&\partial_p E[Y\mid P=p]=MTE(p),\\
&ATE=\int_0^1MTE(u)\,du,\\
&LATE(z,z')=\frac{\int_{p(z')}^{p(z)}MTE(u)\,du}{p(z)-p(z')}.
\end{aligned}
\right.
$$
:::
