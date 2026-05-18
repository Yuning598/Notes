# 10 Potential Outcomes, ATE, Propensity Score, and Matching

Source: EF8090 slides, PDF pp. 225-247; PS4 Q2, PS5 Q3.  
Links: [09_IV_2SLS_Weak_Instruments](09_IV_2SLS_Weak_Instruments) | [11_LATE_Roy_MTE](11_LATE_Roy_MTE) | [cards/Potential_Outcomes_ATE_ATT_CATE](cards/Potential_Outcomes_ATE_ATT_CATE) | [cards/Propensity_Score_Balancing](cards/Propensity_Score_Balancing) | [cards/Doubly_Robust_AIPW](cards/Doubly_Robust_AIPW)

## 1. Neyman-Rubin causal model

:::{admonition} Definition (Potential outcomes)
For binary treatment $D\in\{0,1\}$, each unit has two potential outcomes:
$$ Y_i(1),\qquad Y_i(0). $$
Observed outcome is
$$ Y_i=D_iY_i(1)+(1-D_i)Y_i(0). $$

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

## 2. Randomized trial and simple ATE estimator

If treatment is randomly assigned,

$$
(Y(1),Y(0))\perp D.
$$

Then

$$
E[Y\mid D=1]-E[Y\mid D=0]
=E[Y(1)]-E[Y(0)]=ATE.
$$

:::{admonition} Lemma
Difference in means identifies ATE under random assignment
**WTS：**
$$ E[Y\mid D=1]-E[Y\mid D=0]=ATE. $$

**联立系统：**
$$ Y=DY(1)+(1-D)Y(0), \qquad (Y(1),Y(0))\perp D. $$

**连续求解：**
$$ \begin{aligned} E[Y\mid D=1] &=E[Y(1)\mid D=1]\\ &=E[Y(1)],\\ E[Y\mid D=0] &=E[Y(0)\mid D=0]\\ &=E[Y(0)]. \end{aligned} $$
Therefore
$$ E[Y\mid D=1]-E[Y\mid D=0]=E[Y(1)-Y(0)]. $$

**结论：** Randomization turns missing counterfactual means into observed group means。

:::

PS4 Q2's heterogeneous treatment model $Y_i=\alpha_i+\beta_iD_i$ with $(\alpha_i,\beta_i)\perp D_i$ gives BLP slope $E[\beta_i]$。

## 3. Unconfoundedness and CATE identification

:::{admonition} Definition (Unconfoundedness and overlap)
$$ (Y(1),Y(0))\perp D\mid X. $$
Overlap:
$$ 0<p(X)=P(D=1\mid X)<1\quad\text{a.s.} $$

**Lemma:** CATE identification
**WTS：**
$$ CATE(x)=E[Y\mid D=1,X=x]-E[Y\mid D=0,X=x]. $$

**联立系统：**
$$ Y=DY(1)+(1-D)Y(0), \qquad (Y(1),Y(0))\perp D\mid X. $$

**连续求解：**
$$ \begin{aligned} E[Y\mid D=1,X=x] &=E[Y(1)\mid D=1,X=x]\\ &=E[Y(1)\mid X=x],\\ E[Y\mid D=0,X=x] &=E[Y(0)\mid D=0,X=x]\\ &=E[Y(0)\mid X=x]. \end{aligned} $$
Difference gives $E[Y(1)-Y(0)\mid X=x]$。

**结论：** selection on observables makes within-X treated and control groups comparable。

:::

ATE from CATE:

$$
ATE=E[CATE(X)].
$$

## 4. Propensity score weighting

:::{admonition} Definition (Propensity score)
$$ p(X)=P(D=1\mid X). $$

**Lemma:** Inverse probability weighting identifies ATE
**WTS：**
$$ E\left[\frac{DY}{p(X)}\right]=E[Y(1)], \qquad E\left[\frac{(1-D)Y}{1-p(X)}\right]=E[Y(0)]. $$

**联立系统：**
$$ Y=DY(1)+(1-D)Y(0), \qquad (Y(1),Y(0))\perp D\mid X. $$

**连续求解：**
$$ \begin{aligned} E\left[\frac{DY}{p(X)}\right] &=E\left[\frac{DY(1)}{p(X)}\right]\\ &=E\left[E\left[\frac{DY(1)}{p(X)}\mid X\right]\right]\\ &=E\left[\frac{E[D\mid X]E[Y(1)\mid X]}{p(X)}\right]\\ &=E[E[Y(1)\mid X]]\\ &=E[Y(1)]. \end{aligned} $$
The control expression is analogous。

**结论：** IPW reweights observed outcomes to reconstruct the full population potential-outcome mean。

:::

## 5. Propensity score balancing

PS5 Q3 asks to prove the propensity score result。

:::{admonition} Lemma
Propensity score is a balancing score
**WTS：**
$$ D\perp X\mid p(X). $$

**联立系统：**
$$ p(X)=P(D=1\mid X). $$

**连续求解：** For any value $p$,
$$ \begin{aligned} P(D=1\mid X=x,p(X)=p) &=P(D=1\mid X=x)\\ &=p(x)\\ &=p. \end{aligned} $$
Also
$$ P(D=1\mid p(X)=p)=E[P(D=1\mid X)\mid p(X)=p]=p. $$
Thus
$$ P(D=1\mid X=x,p(X)=p)=P(D=1\mid p(X)=p). $$

**结论：** Conditional on $p(X)$, treatment status no longer depends on the full $X$。

:::

If $(Y(1),Y(0))\perp D\mid X$, then combining balancing with Rosenbaum-Rubin logic gives

$$
(Y(1),Y(0))\perp D\mid p(X).
$$

PS5 Q3 also asks: if $b(X)$ is any balancing score, then $p(X)$ is a function of $b(X)$：

$$
p(x)=P(D=1\mid X=x)=P(D=1\mid b(X)=b(x))\equiv f(b(x)).
$$

## 6. Regression adjustment and doubly robust / orthogonal score

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

## 7. Matching estimator

Slides define matching by imputing missing potential outcomes using nearest observations in the other treatment group。

:::{admonition} Definition (Matching estimator with $M$ matches)
Let $\mathcal M_i^C$ be the $M$ closest controls to treated unit $i$, and $\mathcal M_i^T$ the $M$ closest treated units to control unit $i$. Then
$$ \hat Y_{i1}=D_iY_i+(1-D_i)\frac1M\sum_{j\in\mathcal M_i^T}Y_j, $$
$$ \hat Y_{i0}=D_i\frac1M\sum_{j\in\mathcal M_i^C}Y_j+(1-D_i)Y_i, $$
$$ \widehat{ATE}_M=\frac1n\sum_i(\hat Y_{i1}-\hat Y_{i0}). $$

:::

Bias-corrected matching adjusts matched outcomes by estimated regression functions:

$$
Y_j+\hat g_d(X_i)-\hat g_d(X_j).
$$

If the match is exact, $X_i=X_j$，the correction disappears。

## 8. What the older notes add

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
