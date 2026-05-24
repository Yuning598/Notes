# 12 Difference-in-Differences, Fixed Effects, and Event Studies

Source: EF8090 slides, PDF pp. 326-384; PS6 Q1-Q2.  
Links: [11_LATE_Roy_MTE](11_LATE_Roy_MTE) | [13_RD_Nonparametric_Kernel](13_RD_Nonparametric_Kernel) | [cards/DID_Common_Trends](cards/DID_Common_Trends) | [cards/TWFE_Event_Study](cards/TWFE_Event_Study) | [cards/Fixed_Effects_Demeaning](cards/Fixed_Effects_Demeaning)

## 1. The simplest 2x2 DiD

Two groups $D_i\in\{0,1\}$, two periods $Post_t\in\{0,1\}$。Treatment group receives treatment only in post period。

:::{admonition} Definition (Difference-in-differences estimand)
$$ \tau_{DiD}=[E(Y\mid D=1,Post=1)-E(Y\mid D=1,Post=0)] -[E(Y\mid D=0,Post=1)-E(Y\mid D=0,Post=0)]. $$

**Definition (Common trends assumption):**
In the absence of treatment, treated and control groups would have experienced the same average change:
$$ E[Y_0(1)-Y_0(0)\mid D=1]=E[Y_0(1)-Y_0(0)\mid D=0]. $$

**Lemma:** DiD identifies ATT under common trends
**WTS：**
$$ \tau_{DiD}=E[Y_1(1)-Y_0(1)\mid D=1]. $$

**联立系统：** Observed:
$$ Y_{it}=D_iPost_tY_{1t}+(1-D_iPost_t)Y_{0t}. $$

**连续求解：**
$$ \begin{aligned} \tau_{DiD} &=\{E[Y_1(1)\mid D=1]-E[Y_0(0)\mid D=1]\}\\ &\quad -\{E[Y_0(1)\mid D=0]-E[Y_0(0)\mid D=0]\}\\ &=E[Y_1(1)-Y_0(1)\mid D=1]\\ &\quad +\{E[Y_0(1)-Y_0(0)\mid D=1]-E[Y_0(1)-Y_0(0)\mid D=0]\}\\ &=ATT+0. \end{aligned} $$

**结论：** DiD subtracts off the untreated counterfactual trend using control group trend。

:::

## 2. DiD as regression

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

## 3. PS6 Q1: fixed effects via group demeaning

This is the same FWL result as [02_OLS_Algebra_FWL_OVB](02_OLS_Algebra_FWL_OVB)。With group $F_i$, regression of $Y$ on $X$ and group dummies has the same $X$ coefficient as regression of within-group demeaned variables。

:::{admonition} Lemma (Group fixed effects residualization)
:::

#### Proof of Lemma (Group fixed effects residualization)

$$ \tilde\beta=\hat\beta. $$

$$ \dot Y_i=Y_i-\bar Y_{F_i}, \qquad \dot X_i=X_i-\bar X_{F_i}. $$

**连续求解：** Let $D_F$ be group dummy matrix。FWL gives
$$ \begin{aligned} \hat\beta &=(X'M_{D_F}X)^{-1}X'M_{D_F}Y\\ &=\left(\sum_i\dot X_i\dot X_i'\right)^{-1}\left(\sum_i\dot X_i\dot Y_i\right)\\ &=\tilde\beta. \end{aligned} $$

**结论：** Fixed effects coefficients are OLS coefficients after removing group means。

## 4. PS6 Q2: unit FE, time FE, and double demeaning

Treatment starts at $t^*$ for treated units and continues afterwards。Define post/pre group means:

$$
\bar Y_d^{post}=\frac1{T-t^*+1}\sum_{t=t^*}^T\bar Y_{dt},
\qquad
\bar Y_d^{pre}=\frac1{t^*-1}\sum_{t=1}^{t^*-1}\bar Y_{dt}.
$$

:::{admonition} Lemma (Unit FE only identifies treated before-after change)
Unit FE only identifies treated before-after change
**WTS：** coefficient on $D_{it}$ after unit demeaning equals
$$ \hat\beta_{unit}=\bar Y_1^{post}-\bar Y_1^{pre}. $$

**联立系统：** Unit FE removes $\alpha_i$，so identifying variation in $D_{it}=D_i1[t\ge t^*]$ exists only within treated units；never-treated units have no within variation in $D_{it}$。

**连续求解：** For treated units, within-transformed treatment is positive in post and negative in pre。The coefficient reduces to the contrast between treated post and treated pre means。

**结论：** This is a before-after estimator, not a DiD estimator；it does not subtract control trends。

:::

:::{admonition} Lemma (Time FE only identifies post treated-control difference)
**WTS：** coefficient equals
$$ \hat\beta_{time}=\bar Y_1^{post}-\bar Y_0^{post}. $$

**结论：** Time FE removes common time shocks but not permanent treated-control level differences；it is a post-period cross-sectional contrast。

:::

:::{admonition} Lemma (Unit and time FE identify the DiD contrast)
**WTS：** double demeaning coefficient equals
$$ \hat\beta_{ddmn}=\bar Y_1^{post}-\bar Y_1^{pre}-\bar Y_0^{post}+\bar Y_0^{pre}. $$

**联立系统：** TWFE residualizes both unit and time components。The remaining variation is the interaction-like component of treatment。

**连续求解：** The double-demeaned treatment is positive only for treated-post cells relative to what unit means and time means predict。Regressing double-demeaned $Y$ on double-demeaned $D$ recovers the cell contrast
$$ (1,post)-(1,pre)-(0,post)+(0,pre). $$

**结论：** TWFE in the 2x2 design equals canonical DiD。

:::

## 5. Pre-trends and event studies

Slides warn that eyeballing can mislead。Formal event study estimates leads and lags around treatment:

$$
Y_{it}=\alpha_i+\lambda_t+\sum_{k\ne -1}\tau_k1[t-G_i=k]+u_{it}.
$$

Pre-treatment coefficients $\tau_k$ for $k<0$ are pre-trend checks。They do not prove common trends, but large pre-trend deviations are evidence against the design。

## 6. Triple differences

:::{admonition} Definition (Triple differences)
If there is another comparison dimension $S\in\{0,1\}$, DDD is
$$ DDD=DiD(S=1)-DiD(S=0). $$
It removes shocks common to treated/control over time within both $S$ groups and differential time shocks shared across treatment states。

:::

In regression form, DDD is the coefficient on the triple interaction $D_i\times Post_t\times S_i$。

## 7. Staggered treatment timing and TWFE caution

Slides discuss variable treatment timing。When treatment effects are heterogeneous over cohorts or event time, static TWFE can compare already-treated units to newly-treated units and create non-convex weights。Event-study and modern DiD estimators avoid using inappropriate comparisons by defining cohort-time specific treatment effects first, then aggregating transparently。

## 8. Inference issues

Slides highlight clustered standard errors and the problem of one treated group。If there is only one treated aggregate unit, increasing individual sample size $N$ may not make the treatment effect estimator consistent because the treated group time-series shock does not average out。Possible fixes require stronger assumptions, more treated clusters, randomization inference, or designs with credible untreated units informing treated counterfactuals。

