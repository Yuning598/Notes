# 08 MLE Asymptotics and ML Tests

Source: EF8090 slides, PDF pp. 163-176; PS3 Q2-Q3, Q5.  
Links: [07_MLE_Fisher_CRLB](07_MLE_Fisher_CRLB) | [09_IV_2SLS_Weak_Instruments](09_IV_2SLS_Weak_Instruments) | [cards/MLE_Consistency](cards/MLE_Consistency) | [cards/ML_Wald_LR_LM](cards/ML_Wald_LR_LM)

## 1. Consistency of MLE

课件 supplement 里把 MLE consistency 写成 extremum estimator 的形式。设

$$
L_n(\theta)=\frac1n\sum_i\log p_\theta(X_i),
\qquad
L(\theta)=E[\log p_\theta(X_i)].
$$

:::{admonition} Lemma
Argmax consistency of MLE
**WTS：**
$$ \hat\theta\xrightarrow{p}\theta_0. $$

**联立系统：**
$$ \sup_{\theta\in\Theta}|L_n(\theta)-L(\theta)|\xrightarrow{p}0, $$
and for every $\varepsilon>0$,
$$ \sup_{\theta\notin B_\varepsilon(\theta_0)}L(\theta)<L(\theta_0). $$

**连续求解：** Since $\hat\theta$ maximizes $L_n$,
$$ L_n(\hat\theta)\ge L_n(\theta_0). $$
Uniform convergence gives
$$ \begin{aligned} L(\hat\theta) &\ge L_n(\hat\theta)-\sup_\theta|L_n(\theta)-L(\theta)|\\ &\ge L_n(\theta_0)-\sup_\theta|L_n(\theta)-L(\theta)|\\ &\ge L(\theta_0)-2\sup_\theta|L_n(\theta)-L(\theta)|. \end{aligned} $$
Therefore $L(\hat\theta)$ cannot stay below $L(\theta_0)$ by a fixed gap, so $\hat\theta$ must enter every neighborhood of $\theta_0$ with probability tending to one。

**结论：** MLE consistency needs identification plus uniform convergence。

:::

课件给出的 sufficient conditions 包括 compact $\Theta$、continuity、unique maximizer，以及 dominated uniform law of large numbers。

## 2. Asymptotic normality of MLE

:::{admonition} Lemma
MLE asymptotic normality
**WTS：**
$$ \sqrt n(\hat\theta-\theta_0)\xrightarrow{d}N(0,I(\theta_0)^{-1}). $$

**联立系统：** Define score and Hessian:
$$ S_n(\theta)=\frac1n\sum_i s_i(\theta), \qquad H_n(\theta)=\frac1n\sum_i \frac{\partial s_i(\theta)}{\partial\theta'}. $$
FOC:
$$ S_n(\hat\theta)=0. $$

**连续求解：** Taylor expansion around $\theta_0$:
$$ \begin{aligned} 0 &=S_n(\hat\theta)\\ &=S_n(\theta_0)+H_n(\bar\theta)(\hat\theta-\theta_0). \end{aligned} $$
Rearranging:
$$ \sqrt n(\hat\theta-\theta_0) =-[H_n(\bar\theta)]^{-1}\sqrt n S_n(\theta_0). $$
Under regularity,
$$ H_n(\bar\theta)\xrightarrow{p}-I(\theta_0), \qquad \sqrt nS_n(\theta_0)\xrightarrow{d}N(0,I(\theta_0)). $$
Slutsky gives
$$ \sqrt n(\hat\theta-\theta_0)\xrightarrow{d}N(0,I^{-1}I I^{-1})=N(0,I^{-1}). $$

**结论：** ML reaches the Cramer-Rao bound asymptotically under regularity。

:::

## 3. ML Wald, LR, and LM tests

:::{admonition} Definition (ML Wald test)
If $H_0:r(\theta)=0$ has $q$ restrictions,
$$ W=n r(\hat\theta)'[R\hat I^{-1}R']^{-1}r(\hat\theta)\xrightarrow{d}\chi_q^2. $$

**Definition (Likelihood ratio test):**
Let $\hat\theta$ be unrestricted MLE and $\tilde\theta$ restricted MLE under $H_0$。
$$ LR=2\{\log\ell_n(\hat\theta)-\log\ell_n(\tilde\theta)\}\xrightarrow{d}\chi_q^2. $$

**Definition (Lagrange multiplier test):**
LM uses the restricted estimator and the score evaluated at it:
$$ LM=S_n(\tilde\theta)'\hat I(\tilde\theta)^{-1}S_n(\tilde\theta) $$
with the appropriate $n$-scaling depending on whether $S_n$ is averaged or summed. Under $H_0$, $LM\to_d\chi_q^2$。

:::

Wald looks at distance of unrestricted estimator from the null; LR looks at log-likelihood loss from imposing the null; LM looks at slope of the likelihood at the restricted estimator。

## 4. Boston shooting example as binomial test

Slides use a Bernoulli/binomial approximation. National rate is 30 shootings per 365 days, so

$$
p_0=30/365.
$$

Boston has 35 shooting days/year, so

$$
\hat p=35/365.
$$

:::{admonition} Lemma
Wald z-test for a Bernoulli rate
**WTS：** Test $H_0:p=p_0$ using
$$ Z=\sqrt n\frac{\hat p-p_0}{\sqrt{p_0(1-p_0)}}. $$

**联立系统：**
$$ \sqrt n(\hat p-p_0)\to_d N(0,p_0(1-p_0)). $$

**连续求解：** Standardize:
$$ Z=\frac{\sqrt n(\hat p-p_0)}{\sqrt{p_0(1-p_0)}}\to_dN(0,1). $$

**结论：** Slides obtain $Z\approx0.953$ using null variance, or $Z\approx0.889$ using variance evaluated at $\hat p$。Neither rejects conventional levels。

:::

PS3 Q3 uses the same logic for sunny days in March: under $p_0=198/365$, $\hat p=10/31$,

$$
Z=\frac{10/31-198/365}{\sqrt{(198/365)(1-198/365)/31}}\approx -2.45.
$$

A two-sided 5% test rejects the “typical month” null。

## 5. Binary response model and existence

For logit/probit, asymptotic normality requires finite interior maximizer and identification。PS3 Q5's data create perfect separation, so the MLE does not exist. This is not a numerical bug; it is a failure of the objective to attain a finite maximum.

When the MLE exists and regularity conditions hold:

$$
\sqrt n(\hat\theta-\theta_0)\xrightarrow{d}N(0,I(\theta_0)^{-1}),
$$

where

$$
I(\theta_0)=E[s_i(\theta_0)s_i(\theta_0)']=-E[H_i(\theta_0)].
$$

## 6. Joint likelihood and seemingly separate equations

PS3 Q6 asks about estimating two equations separately or jointly:

$$
Y_i^A=X_i^A\beta_A+\varepsilon_i^A,
\qquad
Y_i^B=X_i^B\beta_B+\varepsilon_i^B,
\qquad
\varepsilon_i=(\varepsilon_i^A,\varepsilon_i^B)'\sim N(0,\Sigma).
$$

If regressors differ across equations and errors are correlated, joint MLE can improve efficiency relative to separate OLS. If each equation has the same regressors, separate OLS and GLS/SUR coincide for coefficients. This connects to Hayashi's multiple-equation GLS/SUR discussion, but EF8090 uses it mainly to practice writing conditional likelihood and Fisher information。

