# 06 Potential Outcomes, LATE, and Selection Models

Source: consolidated from 10_Potential_Outcomes_ATE_Matching.md and 11_LATE_Roy_MTE.md.
Links: [05_IV_2SLS_Weak_Instruments](05_IV_2SLS_Weak_Instruments) | [07_DiD_RD_Nonparametric_Kernel](07_DiD_RD_Nonparametric_Kernel) | [cards/Potential_Outcomes_ATE_ATT_CATE](cards/Potential_Outcomes_ATE_ATT_CATE) | [cards/LATE_Compliers](cards/LATE_Compliers) | [cards/MTE_Weights](cards/MTE_Weights)

## Potential Outcomes and Selection on Observables

### Neyman-Rubin Potential Outcomes

:::{admonition} Definition (Potential outcomes)
For binary treatment $D\in\{0,1\}$, each unit has two potential outcomes:
$$
Y_i(1),\qquad Y_i(0).
$$
Observed outcome is
$$
Y_i=D_iY_i(1)+(1-D_i)Y_i(0).
$$

**Definition (SUTVA):**
Stable Unit Treatment Value Assumption requires: no interference across units and no hidden versions of treatment。Then each unit's observed outcome under a treatment status equals the corresponding potential outcome。

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

### Randomized Trial ATE Estimator

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

#### Proof of Lemma (Difference in means identifies ATE under random assignment)

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
Therefore
$$
E[Y\mid D=1]-E[Y\mid D=0]=E[Y(1)-Y(0)].
$$

**结论：** Randomization turns missing counterfactual means into observed group means。

PS4 Q2's heterogeneous treatment model $Y_i=\alpha_i+\beta_iD_i$ with $(\alpha_i,\beta_i)\perp D_i$ gives BLP slope $E[\beta_i]$。

### Unconfoundedness and CATE Identification

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

#### Proof of Lemma (CATE identification)

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
Difference gives $E[Y(1)-Y(0)\mid X=x]$。

selection on observables makes within-X treated and control groups comparable。

ATE from CATE:

$$
ATE=E[CATE(X)].
$$

### Propensity-Score Weighting

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

#### Proof of Lemma (Inverse probability weighting identifies ATE)

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
The control expression is analogous。

IPW reweights observed outcomes to reconstruct the full population potential-outcome mean。

### Propensity-Score Balancing

PS5 Q3 asks to prove the propensity score result。

:::{admonition} Lemma (Propensity score is a balancing score)
:::

#### Proof of Lemma (Propensity score is a balancing score)

$$
D\perp X\mid p(X).
$$

$$
p(X)=P(D=1\mid X).
$$

**连续求解：** For any value $p$,
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

**结论：** Conditional on $p(X)$, treatment status no longer depends on the full $X$。

If $(Y(1),Y(0))\perp D\mid X$, then combining balancing with Rosenbaum-Rubin logic gives

$$
(Y(1),Y(0))\perp D\mid p(X).
$$

PS5 Q3 also asks: if $b(X)$ is any balancing score, then $p(X)$ is a function of $b(X)$：

$$
p(x)=P(D=1\mid X=x)=P(D=1\mid b(X)=b(x))\equiv f(b(x)).
$$

### Regression Adjustment and Orthogonal Scores

Slides combine regression adjustment and propensity score weighting。Define

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

This connects to modern double/debiased machine learning, though EF8090 slides keep the emphasis on intuition。

### Matching Estimator

Slides define matching by imputing missing potential outcomes using nearest observations in the other treatment group。

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

Bias-corrected matching adjusts matched outcomes by estimated regression functions:

$$
Y_j+\hat g_d(X_i)-\hat g_d(X_j).
$$

If the match is exact, $X_i=X_j$，the correction disappears。

### Additional Results from Older Notes

The older notes keep the estimands in a compact form:

$$
ATE=E[CATE(X)].
$$

For any balancing score $b(X)$,

$$
(Y(1),Y(0))\perp D\mid b(X)
$$

whenever it holds given $X$ and $b(X)$ is sufficient to balance treatment assignment. The propensity score is the canonical minimal such score.

The old notes also keep the IPW identities explicit:

$$
E\left[\frac{DY}{p(X)}\right]=E[Y(1)],
\qquad
E\left[\frac{(1-D)Y}{1-p(X)}\right]=E[Y(0)].
$$

That is the clean one-line statement of why IPW recovers potential-outcome means.

## Local Treatment Effects and Selection Models

### LATE Compliance Setting

Slides introduce LATE through Angrist's draft lottery setting：instrument affects treatment take-up, but treatment is not perfectly determined by the instrument。

Let $Z\in\{0,1\}$ be instrument, $D(z)\in\{0,1\}$ potential treatment, and $Y(d)$ potential outcome。

:::{admonition} Definition (LATE assumptions)
1. Independence: $(Y(1),Y(0),D(1),D(0))\perp Z$.
2. Exclusion: $Z$ affects $Y$ only through $D$.
3. Relevance: $E[D\mid Z=1]\ne E[D\mid Z=0]$.
4. Monotonicity: $D(1)\ge D(0)$ a.s., so no defiers。

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

### Wald Estimand as LATE

:::{admonition} Lemma (LATE theorem)
:::

#### Proof of Lemma (LATE theorem)

$$
\frac{E[Y\mid Z=1]-E[Y\mid Z=0]}{E[D\mid Z=1]-E[D\mid Z=0]} =E[Y(1)-Y(0)\mid D(1)>D(0)].
$$

**联立系统：** Observed treatment and outcome:
$$
D=ZD(1)+(1-Z)D(0),
$$
$$
Y=Y(0)+D(Y(1)-Y(0)).
$$

**连续求解：** By independence,
$$
\begin{aligned}
E[D\mid Z=1]-E[D\mid Z=0] &=E[D(1)-D(0)].
\end{aligned}
$$
For outcomes,
$$
\begin{aligned}
E[Y\mid Z=1]-E[Y\mid Z=0] &=E[Y(0)+D(1)(Y(1)-Y(0))]\\
&\quad -E[Y(0)+D(0)(Y(1)-Y(0))]\\
&=E[(D(1)-D(0))(Y(1)-Y(0))].
\end{aligned}
$$
Under monotonicity, $D(1)-D(0)=1$ for compliers and 0 otherwise。Thus
$$
\begin{aligned}
\frac{E[(D(1)-D(0))\tau]}{E[D(1)-D(0)]} &=\frac{E[\tau\mathbf 1\{C\}]}{P(C)}\\
&=E[\tau\mid C].
\end{aligned}
$$

**结论：** IV identifies the average treatment effect for compliers, not necessarily ATE。

### Compliance Share Estimation

PS4 Q6 asks whether always-taker, never-taker, and complier shares are estimable。
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

Sample analogs replace probabilities by sample proportions。

If monotonicity is dropped, the Wald estimand becomes

$$
\frac{P(C)E[\tau\mid C]-P(DF)E[\tau\mid DF]}{P(C)-P(DF)},
$$

where $DF$ are defiers。This is hard to interpret as a clean average treatment effect。

### Probability Integral Transform

PS5 Q1 supports the Roy/MTE normalization。If $X$ has continuous strictly increasing cdf $F$, define $Y=F(X)$。Then

$$
P(Y\le y)=P(F(X)\le y)=P(X\le F^{-1}(y))=F(F^{-1}(y))=y.
$$

So $Y\sim U[0,1]$。This lets the latent selection variable $U_D$ be normalized to uniform。

### Roy Selection Model

:::{admonition} Definition (Nonparametric Roy / selection model)
$$
Y=DY_1+(1-D)Y_0, \qquad D=1[U_D\le p(Z)],
$$
where $U_D\sim U[0,1]$ and $(Y_0,Y_1,U_D)\perp Z$。

:::

The key economic object is selection on gains：individuals with low $U_D$ are more likely to take treatment。

:::{admonition} Definition (Marginal Treatment Effect)
$$
MTE(u)=E[Y_1-Y_0\mid U_D=u].
$$
It is the treatment effect for individuals indifferent at margin $u$。

:::

### MTE Weighting Formula

Slides stress that ATE, ATT, LATE and IV estimands are weighted averages of MTE。

:::{admonition} Lemma (ATE is integral of MTE)
:::

#### Proof of Lemma (ATE is integral of MTE)

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

**结论：** ATE weights all margins equally。

:::{admonition} Lemma (LATE weights MTE over changed margins)
If $p(z)>p(z')$,
$$
LATE(z,z')=\frac{\int_{p(z')}^{p(z)}MTE(u)du}{p(z)-p(z')}.
$$
:::

#### Proof of Lemma (LATE weights MTE over changed margins)

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
Ratio gives the result。

IV identifies treatment effects for individuals whose treatment status is shifted by the instrument。

PS5 Q2 asks for untreated-group effect:

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

Divide by $P[D=0]$。

### Vytlacil Equivalence and Policy Effects

Slides state Vytlacil's equivalence: monotonicity in the LATE model corresponds to a latent index selection model

$$
D=1[p(Z)\ge U_D].
$$

Thus LATE and MTE frameworks are not separate worlds；LATE is a special weighted average of MTE。

Policy relevant treatment effect changes the distribution of $p(Z)$ under a policy and compares average outcomes before and after policy。MTE is useful because once $MTE(u)$ is identified or modeled, many policy counterfactuals become alternative weighting schemes over $u$。

### Additional Results from Older Notes

The older notes make the normalization step explicit:

$$
X\sim F \quad\Longrightarrow\quad F(X)\sim U[0,1].
$$

That is the clean way to think about the latent selection variable in Roy-type models: after normalization, the marginal individual is indexed by $u\in[0,1]$.

They also keep the weighting logic visible:

$$
ATE=\int_0^1 MTE(u)\,du.
$$

For untreated units,

$$
E[Y_1-Y_0\mid D=0]
=\int_0^1 MTE(u)\frac{P[p(Z)<u]}{P[D=0]}du.
$$

The point is that the estimand is a weighted average over the margins not selected into treatment.
