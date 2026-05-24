# 13 Regression Discontinuity and Nonparametric Kernel Methods

Source: EF8090 slides, PDF pp. 385-401; PS6 Q3.  
Links: [12_DiD_Fixed_Effects_Event_Study](12_DiD_Fixed_Effects_Event_Study) | [00-MOC_EF8090_Econometrics](00-MOC_EF8090_Econometrics) | [cards/RD_Wald_Estimand](cards/RD_Wald_Estimand) | [cards/Kernel_Bandwidth_Bias_Variance](cards/Kernel_Bandwidth_Bias_Variance)

## 1. Sharp RD

:::{admonition} Definition (Sharp regression discontinuity)
Let $R$ be running variable and $c$ cutoff。Treatment is deterministically assigned:
$$ D=1[R\ge c]. $$
Sharp RD estimand is
$$ \tau_{SRD}=\lim_{r\downarrow c}E[Y\mid R=r]-\lim_{r\uparrow c}E[Y\mid R=r]. $$

:::

Identification requires continuity of potential outcome conditional means at the cutoff:

$$
\lim_{r\downarrow c}E[Y(0)\mid R=r]=\lim_{r\uparrow c}E[Y(0)\mid R=r],
$$

and similarly for $Y(1)$ if needed。Then discontinuity in observed outcome at cutoff is attributed to treatment。

## 2. Fuzzy RD as local IV

If treatment probability jumps but not from 0 to 1, RD is fuzzy:

$$
\tau_{FRD}=\frac{\lim_{r\downarrow c}E[Y\mid R=r]-\lim_{r\uparrow c}E[Y\mid R=r]}{\lim_{r\downarrow c}E[D\mid R=r]-\lim_{r\uparrow c}E[D\mid R=r]}.
$$

This is a local Wald estimand。It parallels LATE: the estimand is for units induced into treatment by crossing the cutoff。

:::{admonition} Lemma (Fuzzy RD is a Wald ratio)
:::

#### Proof of Lemma (Fuzzy RD is a Wald ratio)

$$ \tau_{FRD}=\frac{\Delta_Y(c)}{\Delta_D(c)}. $$

**联立系统：** Define
$$ \Delta_Y(c)=\lim_{r\downarrow c}E[Y\mid R=r]-\lim_{r\uparrow c}E[Y\mid R=r], $$
$$ \Delta_D(c)=\lim_{r\downarrow c}E[D\mid R=r]-\lim_{r\uparrow c}E[D\mid R=r]. $$

**连续求解：** In a local neighborhood of $c$, assignment $Z=1[R\ge c]$ acts as an instrument。The local reduced form is $\Delta_Y(c)$，and local first stage is $\Delta_D(c)$。Wald logic gives ratio。

**结论：** Fuzzy RD = local IV at cutoff。

## 3. Local polynomial regression

Slides use local linear estimation。On each side of the cutoff, estimate

$$
(\hat\alpha_s,\hat\beta_s)
=\arg\min_{a,b}\sum_{i:R_i\in\mathcal N_s(c,h)}K\left(\frac{R_i-c}{h}\right)(Y_i-a-b(R_i-c))^2,
$$

where $s\in\{0,1\}$ denotes left/right side。Then $\hat\alpha_1-\hat\alpha_0$ estimates $\Delta_Y(c)$。Analogously for $D$。

## 4. PS6 Q3: local linear fuzzy RD equals 2SLS coefficient

Problem set defines right/left local linear intercepts $\hat\alpha_Y^1,\hat\alpha_Y^0$ and $\hat\alpha_D^1,\hat\alpha_D^0$，using uniform kernel and bandwidth $h$。It then asks to show that 2SLS with outcome $Y$, endogenous $D$, controls constant, $R-c$, $Z(R-c)$, and instrument $Z=1[R\ge c]$，within $[c-h,c+h]$，satisfies

$$
\hat\beta=\frac{\hat\alpha_Y^1-\hat\alpha_Y^0}{\hat\alpha_D^1-\hat\alpha_D^0}.
$$

:::{admonition} Lemma (Local linear fuzzy RD as 2SLS)
:::

#### Proof of Lemma (Local linear fuzzy RD as 2SLS)

$$ \hat\beta=\frac{\hat\alpha_Y^1-\hat\alpha_Y^0}{\hat\alpha_D^1-\hat\alpha_D^0}. $$

**联立系统：** Estimate within bandwidth:
$$ Y_i=\alpha+\beta D_i+\gamma(R_i-c)+\delta Z_i(R_i-c)+u_i, $$
using $Z_i$ as excluded instrument for $D_i$。The included controls allow separate slopes on each side but a discontinuity through $D_i$。

**连续求解：** First stage local linear regression of $D$ on $Z$, constant, $R-c$, $Z(R-c)$ produces a fitted discontinuity
$$ \hat\alpha_D^1-\hat\alpha_D^0. $$
Reduced form local linear regression of $Y$ on the same controls and $Z$ produces a fitted discontinuity
$$ \hat\alpha_Y^1-\hat\alpha_Y^0. $$
In just-identified IV, coefficient equals reduced form divided by first stage:
$$ \hat\beta=\frac{\widehat{RF}}{\widehat{FS}} =\frac{\hat\alpha_Y^1-\hat\alpha_Y^0}{\hat\alpha_D^1-\hat\alpha_D^0}. $$

**结论：** The 2SLS specification is exactly the fuzzy RD local Wald estimator with local linear fits。

## 5. Kernels and bandwidth

:::{admonition} Definition (Kernel estimator)
For nonparametric regression $g(x)=E[Y\mid X=x]$, Nadaraya-Watson estimator:
$$ \hat g(x)=\frac{\sum_iY_iK_h(X_i-x)}{\sum_iK_h(X_i-x)}, \qquad K_h(u)=K(u/h). $$

:::

Slides' key intuition：smaller $h$ uses nearby observations and has lower bias but higher variance；larger $h$ uses more observations and has lower variance but higher bias。

:::{admonition} Lemma (Bias-variance tradeoff for kernel regression)
Bias-variance tradeoff for kernel regression
**WTS：** in univariate case,
$$ MSE(\hat g(x))=O((nh)^{-1})+O(h^4). $$

**联立系统：** Under smoothness,
$$ \operatorname{Bias}(\hat g(x))=O(h^2), \qquad \operatorname{Var}(\hat g(x))=O((nh)^{-1}). $$

**连续求解：**
$$ \begin{aligned} MSE &=\operatorname{Var}+\operatorname{Bias}^2\\ &=O((nh)^{-1})+O(h^4). \end{aligned} $$
Equating rates:
$$ h^4\asymp (nh)^{-1} \quad\Rightarrow\quad h^5\asymp n^{-1} \quad\Rightarrow\quad h\asymp n^{-1/5}. $$

**结论：** Optimal bandwidth shrinks with $n$, but not too fast。

:::

## 6. Curse of dimensionality

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

## 7. Cross-validation

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

## 8. What the older notes add

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
