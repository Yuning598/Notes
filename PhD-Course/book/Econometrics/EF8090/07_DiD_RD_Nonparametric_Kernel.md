# 07 DiD, Regression Discontinuity, and Nonparametric Kernel Methods

Source: consolidated from 12_DiD_Fixed_Effects_Event_Study.md and 13_RD_Nonparametric_Kernel.md.
Links: [06_Potential_Outcomes_LATE_Roy_MTE](06_Potential_Outcomes_LATE_Roy_MTE) | [cards/DID_Common_Trends](cards/DID_Common_Trends) | [cards/TWFE_Event_Study](cards/TWFE_Event_Study) | [cards/RD_Wald_Estimand](cards/RD_Wald_Estimand) | [cards/Kernel_Bandwidth_Bias_Variance](cards/Kernel_Bandwidth_Bias_Variance)

## Panel Treatment Effects and Fixed Effects

### Two-by-Two DiD Estimand

Two groups $D_i\in\{0,1\}$, two periods $Post_t\in\{0,1\}$。Treatment group receives treatment only in post period。

:::{admonition} Definition (Difference-in-differences estimand)
$$
\tau_{DiD}=[E(Y\mid D=1,Post=1)-E(Y\mid D=1,Post=0)] -[E(Y\mid D=0,Post=1)-E(Y\mid D=0,Post=0)].
$$

**Definition (Common trends assumption):**
In the absence of treatment, treated and control groups would have experienced the same average change:
$$
E[Y_0(1)-Y_0(0)\mid D=1]=E[Y_0(1)-Y_0(0)\mid D=0].
$$
:::

:::{admonition} Lemma (DiD identifies ATT under common trends)
$$
\tau_{DiD}=E[Y_1(1)-Y_0(1)\mid D=1].
$$
:::

#### Proof of Lemma (DiD identifies ATT under common trends)

Observed:
$$
Y_{it}=D_iPost_tY_{1t}+(1-D_iPost_t)Y_{0t}.
$$

$$
\begin{aligned}
\tau_{DiD} &=\{E[Y_1(1)\mid D=1]-E[Y_0(0)\mid D=1]\}\\
&\quad -\{E[Y_0(1)\mid D=0]-E[Y_0(0)\mid D=0]\}\\
&=E[Y_1(1)-Y_0(1)\mid D=1]\\
&\quad +\{E[Y_0(1)-Y_0(0)\mid D=1]-E[Y_0(1)-Y_0(0)\mid D=0]\}\\
&=ATT+0.
\end{aligned}
$$

DiD subtracts off the untreated counterfactual trend using control group trend。

### DiD Regression Representation

The 2x2 regression:

$$
Y_{it}=\alpha+\gamma D_i+\lambda Post_t+\tau(D_iPost_t)+u_{it}.
$$

The coefficient $\tau$ equals the 2x2 DiD contrast。

Slides then generalize to static TWFE:

$$
Y_{it}=\alpha_i+\lambda_t+\tau D_{it}+u_{it}.
$$

and dynamic event study:

$$
Y_{it}=\alpha_i+\lambda_t+\sum_{\ell\ne -1}\tau_\ell 1[t-G_i=\ell]+u_{it}.
$$

### Fixed Effects via Group Demeaning

This is the same FWL result as [02_OLS_Algebra_Finite_Sample_GLS](02_OLS_Algebra_Finite_Sample_GLS)。With group $F_i$, regression of $Y$ on $X$ and group dummies has the same $X$ coefficient as regression of within-group demeaned variables。

:::{admonition} Lemma (Group fixed effects residualization)
:::

#### Proof of Lemma (Group fixed effects residualization)

$$
\tilde\beta=\hat\beta.
$$

$$
\dot Y_i=Y_i-\bar Y_{F_i}, \qquad \dot X_i=X_i-\bar X_{F_i}.
$$

**连续求解：** Let $D_F$ be group dummy matrix。FWL gives
$$
\begin{aligned}
\hat\beta &=(X'M_{D_F}X)^{-1}X'M_{D_F}Y\\
&=\left(\sum_i\dot X_i\dot X_i'\right)^{-1}\left(\sum_i\dot X_i\dot Y_i\right)\\
&=\tilde\beta.
\end{aligned}
$$

**结论：** Fixed effects coefficients are OLS coefficients after removing group means。

### Unit FE, Time FE, and Double Demeaning

Treatment starts at $t^*$ for treated units and continues afterwards。Define post/pre group means:

$$
\bar Y_d^{post}=\frac1{T-t^*+1}\sum_{t=t^*}^T\bar Y_{dt},
\qquad
\bar Y_d^{pre}=\frac1{t^*-1}\sum_{t=1}^{t^*-1}\bar Y_{dt}.
$$

:::{admonition} Lemma (Unit FE only identifies treated before-after change)
Unit FE only identifies treated before-after change
coefficient on $D_{it}$ after unit demeaning equals
$$
\hat\beta_{unit}=\bar Y_1^{post}-\bar Y_1^{pre}.
$$
:::

#### Proof of Lemma (Unit FE only identifies treated before-after change)

Unit FE removes $\alpha_i$，so identifying variation in $D_{it}=D_i1[t\ge t^*]$ exists only within treated units；never-treated units have no within variation in $D_{it}$。

For treated units, within-transformed treatment is positive in post and negative in pre。The coefficient reduces to the contrast between treated post and treated pre means。

This is a before-after estimator, not a DiD estimator；it does not subtract control trends。

:::{admonition} Lemma (Time FE only identifies post treated-control difference)
coefficient equals
$$
\hat\beta_{time}=\bar Y_1^{post}-\bar Y_0^{post}.
$$
:::

#### Proof of Lemma (Time FE only identifies post treated-control difference)

Time FE removes common time shocks but not permanent treated-control level differences；it is a post-period cross-sectional contrast。

:::{admonition} Lemma (Unit and time FE identify the DiD contrast)
double demeaning coefficient equals
$$
\hat\beta_{ddmn}=\bar Y_1^{post}-\bar Y_1^{pre}-\bar Y_0^{post}+\bar Y_0^{pre}.
$$
:::

#### Proof of Lemma (Unit and time FE identify the DiD contrast)

TWFE residualizes both unit and time components。The remaining variation is the interaction-like component of treatment。

The double-demeaned treatment is positive only for treated-post cells relative to what unit means and time means predict。Regressing double-demeaned $Y$ on double-demeaned $D$ recovers the cell contrast
$$
(1,post)-(1,pre)-(0,post)+(0,pre).
$$

TWFE in the 2x2 design equals canonical DiD。

### Pre-Trends and Event Studies

Slides warn that eyeballing can mislead。Formal event study estimates leads and lags around treatment:

$$
Y_{it}=\alpha_i+\lambda_t+\sum_{k\ne -1}\tau_k1[t-G_i=k]+u_{it}.
$$

Pre-treatment coefficients $\tau_k$ for $k<0$ are pre-trend checks。They do not prove common trends, but large pre-trend deviations are evidence against the design。

### Triple-Differences Estimand

:::{admonition} Definition (Triple differences)
If there is another comparison dimension $S\in\{0,1\}$, DDD is
$$
DDD=DiD(S=1)-DiD(S=0).
$$
It removes shocks common to treated/control over time within both $S$ groups and differential time shocks shared across treatment states。

:::

In regression form, DDD is the coefficient on the triple interaction $D_i\times Post_t\times S_i$。

### Staggered Timing and TWFE Caution

Slides discuss variable treatment timing。When treatment effects are heterogeneous over cohorts or event time, static TWFE can compare already-treated units to newly-treated units and create non-convex weights。Event-study and modern DiD estimators avoid using inappropriate comparisons by defining cohort-time specific treatment effects first, then aggregating transparently。

### DiD Inference Issues

Slides highlight clustered standard errors and the problem of one treated group。If there is only one treated aggregate unit, increasing individual sample size $N$ may not make the treatment effect estimator consistent because the treated group time-series shock does not average out。Possible fixes require stronger assumptions, more treated clusters, randomization inference, or designs with credible untreated units informing treated counterfactuals。


## Discontinuity Designs and Local Smoothing

### Sharp RD Identification

:::{admonition} Definition (Sharp regression discontinuity)
Let $R$ be running variable and $c$ cutoff。Treatment is deterministically assigned:
$$
D=1[R\ge c].
$$
Sharp RD estimand is
$$
\tau_{SRD}=\lim_{r\downarrow c}E[Y\mid R=r]-\lim_{r\uparrow c}E[Y\mid R=r].
$$

:::

Identification requires continuity of potential outcome conditional means at the cutoff:

$$
\lim_{r\downarrow c}E[Y(0)\mid R=r]=\lim_{r\uparrow c}E[Y(0)\mid R=r],
$$

and similarly for $Y(1)$ if needed。Then discontinuity in observed outcome at cutoff is attributed to treatment。

### Fuzzy RD as Local IV

If treatment probability jumps but not from 0 to 1, RD is fuzzy:

$$
\tau_{FRD}=\frac{\lim_{r\downarrow c}E[Y\mid R=r]-\lim_{r\uparrow c}E[Y\mid R=r]}{\lim_{r\downarrow c}E[D\mid R=r]-\lim_{r\uparrow c}E[D\mid R=r]}.
$$

This is a local Wald estimand。It parallels LATE: the estimand is for units induced into treatment by crossing the cutoff。

:::{admonition} Lemma (Fuzzy RD is a Wald ratio)
:::

#### Proof of Lemma (Fuzzy RD is a Wald ratio)

$$
\tau_{FRD}=\frac{\Delta_Y(c)}{\Delta_D(c)}.
$$

**联立系统：** Define
$$
\Delta_Y(c)=\lim_{r\downarrow c}E[Y\mid R=r]-\lim_{r\uparrow c}E[Y\mid R=r],
$$
$$
\Delta_D(c)=\lim_{r\downarrow c}E[D\mid R=r]-\lim_{r\uparrow c}E[D\mid R=r].
$$

**连续求解：** In a local neighborhood of $c$, assignment $Z=1[R\ge c]$ acts as an instrument。The local reduced form is $\Delta_Y(c)$，and local first stage is $\Delta_D(c)$。Wald logic gives ratio。

**结论：** Fuzzy RD = local IV at cutoff。

### Local Polynomial Regression

Slides use local linear estimation。On each side of the cutoff, estimate

$$
(\hat\alpha_s,\hat\beta_s)
=\arg\min_{a,b}\sum_{i:R_i\in\mathcal N_s(c,h)}K\left(\frac{R_i-c}{h}\right)(Y_i-a-b(R_i-c))^2,
$$

where $s\in\{0,1\}$ denotes left/right side。Then $\hat\alpha_1-\hat\alpha_0$ estimates $\Delta_Y(c)$。Analogously for $D$。

### Local Linear Fuzzy RD as 2SLS

Problem set defines right/left local linear intercepts $\hat\alpha_Y^1,\hat\alpha_Y^0$ and $\hat\alpha_D^1,\hat\alpha_D^0$，using uniform kernel and bandwidth $h$。It then asks to show that 2SLS with outcome $Y$, endogenous $D$, controls constant, $R-c$, $Z(R-c)$, and instrument $Z=1[R\ge c]$，within $[c-h,c+h]$，satisfies

$$
\hat\beta=\frac{\hat\alpha_Y^1-\hat\alpha_Y^0}{\hat\alpha_D^1-\hat\alpha_D^0}.
$$

:::{admonition} Lemma (Local linear fuzzy RD as 2SLS)
:::

#### Proof of Lemma (Local linear fuzzy RD as 2SLS)

$$
\hat\beta=\frac{\hat\alpha_Y^1-\hat\alpha_Y^0}{\hat\alpha_D^1-\hat\alpha_D^0}.
$$

**联立系统：** Estimate within bandwidth:
$$
Y_i=\alpha+\beta D_i+\gamma(R_i-c)+\delta Z_i(R_i-c)+u_i,
$$
using $Z_i$ as excluded instrument for $D_i$。The included controls allow separate slopes on each side but a discontinuity through $D_i$。

**连续求解：** First stage local linear regression of $D$ on $Z$, constant, $R-c$, $Z(R-c)$ produces a fitted discontinuity
$$
\hat\alpha_D^1-\hat\alpha_D^0.
$$
Reduced form local linear regression of $Y$ on the same controls and $Z$ produces a fitted discontinuity
$$
\hat\alpha_Y^1-\hat\alpha_Y^0.
$$
In just-identified IV, coefficient equals reduced form divided by first stage:
$$
\hat\beta=\frac{\widehat{RF}}{\widehat{FS}} =\frac{\hat\alpha_Y^1-\hat\alpha_Y^0}{\hat\alpha_D^1-\hat\alpha_D^0}.
$$

**结论：** The 2SLS specification is exactly the fuzzy RD local Wald estimator with local linear fits。

### Kernels and Bandwidth Choice

:::{admonition} Definition (Kernel estimator)
For nonparametric regression $g(x)=E[Y\mid X=x]$, Nadaraya-Watson estimator:
$$
\hat g(x)=\frac{\sum_iY_iK_h(X_i-x)}{\sum_iK_h(X_i-x)}, \qquad K_h(u)=K(u/h).
$$

:::

Slides' key intuition：smaller $h$ uses nearby observations and has lower bias but higher variance；larger $h$ uses more observations and has lower variance but higher bias。

:::{admonition} Lemma (Bias-variance tradeoff for kernel regression)
Bias-variance tradeoff for kernel regression
in univariate case,
$$
MSE(\hat g(x))=O((nh)^{-1})+O(h^4).
$$
:::

#### Proof of Lemma (Bias-variance tradeoff for kernel regression)

Under smoothness,
$$
\operatorname{Bias}(\hat g(x))=O(h^2), \qquad \operatorname{Var}(\hat g(x))=O((nh)^{-1}).
$$

$$
\begin{aligned}
MSE &=\operatorname{Var}+\operatorname{Bias}^2\\
&=O((nh)^{-1})+O(h^4).
\end{aligned}
$$
Equating rates:
$$
h^4\asymp (nh)^{-1} \quad\Rightarrow\quad h^5\asymp n^{-1} \quad\Rightarrow\quad h\asymp n^{-1/5}.
$$

Optimal bandwidth shrinks with $n$, but not too fast。

### Curse of Dimensionality

If $q$ input variables and each bandwidth is $h$, slides state

$$
\text{variance}=O((nh^q)^{-1}),
\qquad
\text{squared bias}=O(h^4).
$$

Equating gives

$$
h\asymp n^{-1/(q+4)},
\qquad
MSE=O(n^{-4/(q+4)}).
$$

As $q$ increases, convergence slows sharply。

### Cross-Validation for Bandwidth Selection

Leave-one-out CV:

$$
\hat y_{i,h}=\frac{\sum_{j\ne i}Y_jK_h(X_j-X_i)}{\sum_{j\ne i}K_h(X_j-X_i)},
\qquad
CV(h)=\sum_i(Y_i-\hat y_{i,h})^2.
$$

Choose

$$
\hat h=\arg\min_hCV(h).
$$

K-fold CV is analogous, leaving out a fold instead of one observation。

### Additional Results from Older Notes

The old notes make the rate intuition more explicit:

$$
MSE(\hat g(x))=O((nh)^{-1})+O(h^4).
$$

So the bandwidth tradeoff is always the same:

$$
\text{smaller }h \Rightarrow \text{less bias, more variance},
\qquad
\text{larger }h \Rightarrow \text{more bias, less variance}.
$$

They also keep the dimensionality penalty visible:

$$
\text{variance}=O((nh^q)^{-1}),
\qquad
\text{squared bias}=O(h^4),
\qquad
h\asymp n^{-1/(q+4)}.
$$

For QE, the point is not memorizing kernel formulas but knowing why local methods get fragile fast as the number of covariates rises.
