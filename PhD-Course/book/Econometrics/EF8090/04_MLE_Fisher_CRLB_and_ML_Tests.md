# 04 Likelihood, Fisher Information, and ML Tests

Source: consolidated from 07_MLE_Fisher_CRLB.md and 08_MLE_Asymptotics_and_ML_Tests.md.
Links: [03_Asymptotics_OLS_Inference_Hypothesis_Testing](03_Asymptotics_OLS_Inference_Hypothesis_Testing) | [05_IV_2SLS_Weak_Instruments](05_IV_2SLS_Weak_Instruments) | [cards/Fisher_Information_CRLB](cards/Fisher_Information_CRLB) | [cards/ML_Wald_LR_LM](cards/ML_Wald_LR_LM)

## Likelihood, Information, and Efficiency

### Maximum Likelihood Estimator

:::{admonition} Definition (Maximum likelihood estimator)
若 $X_1,\ldots,X_n$ iid with density $p_\theta(x)$，likelihood is
$$
\ell_n(\theta)=\prod_{i=1}^np_\theta(X_i).
$$
Log-likelihood normalized by $n$ is
$$
L_n(\theta)=\frac1n\sum_{i=1}^n\log p_\theta(X_i).
$$
MLE is
$$
\hat\theta\in\arg\max_{\theta\in\Theta}L_n(\theta).
$$

:::

Conditional MLE similarly maximizes $\prod_i p_\theta(Y_i\mid X_i)$。课件例子包括 Bernoulli、normal、conditional binary response。

### Bernoulli and Poisson Likelihoods

For Bernoulli $X_i\in\{0,1\}$, $P(X_i=1)=p$：

$$
\ell_n(p)=\prod_ip^{X_i}(1-p)^{1-X_i},
\qquad
L_n(p)=\bar X\log p+(1-\bar X)\log(1-p).
$$

FOC gives $\hat p=\bar X$。如果所有 observation 都是 0 或 1，而 parameter space 是 open interval $(0,1)$，MLE 不存在，只存在 supremum at boundary。

PS3 Q2: Poisson $X_i\sim\operatorname{Poisson}(\lambda)$。

:::{admonition} Lemma (Poisson MLE)
:::

#### Proof of Lemma (Poisson MLE)

$$
\hat\lambda=\bar X.
$$

$$
p_\lambda(x)=e^{-\lambda}\frac{\lambda^x}{x!}.
$$

$$
\begin{aligned}
\log\ell_n(\lambda) &=\sum_i[-\lambda+X_i\log\lambda-\log(X_i!)]\\
&=-n\lambda+\left(\sum_iX_i\right)\log\lambda+\text{const},\\
\frac{\partial\log\ell_n}{\partial\lambda} &=-n+\frac{\sum_iX_i}{\lambda}=0,\\
\hat\lambda&=\bar X.
\end{aligned}
$$

**结论：** Poisson mean MLE equals sample mean。

给定数据 $2,0,3,1,3,2,4,1,3,2$，$\bar X=2.1$。Wald 95% CI:

$$
2.1\pm1.96\sqrt{2.1/10}\approx[1.20,3.00].
$$

### Normal MLE and Fisher Information

PS3 Q1 asks for MLE and Fisher information for $Y_i\sim N(\mu,\sigma^2)$。Let $s=\sigma^2$。

:::{admonition} Lemma (Normal MLE)
:::

#### Proof of Lemma (Normal MLE)

$$
\hat\mu=\bar Y, \qquad \hat\sigma^2=\frac1n\sum_i(Y_i-\bar Y)^2.
$$

$$
\log\ell(\mu,s)=-\frac n2\log(2\pi)-\frac n2\log s-\frac1{2s}\sum_i(Y_i-\mu)^2.
$$

$$
\begin{aligned}
\frac{\partial\log\ell}{\partial\mu} &=\frac1s\sum_i(Y_i-\mu)=0 \quad\Rightarrow\quad \hat\mu=\bar Y,\\
\frac{\partial\log\ell}{\partial s} &=-\frac n{2s}+\frac1{2s^2}\sum_i(Y_i-\mu)^2=0\\
&\Rightarrow \hat s=\frac1n\sum_i(Y_i-\hat\mu)^2.
\end{aligned}
$$

**结论：** Normal MLE 的 variance estimator uses $n$，not $n-1$。

:::{admonition} Lemma (Fisher information for $(\mu,\sigma^2)$)
单个 observation 的 Fisher information is
$$
I_1(\mu,s)= \begin{pmatrix} 1/s&0\\ 0&1/(2s^2) \end{pmatrix}.
$$
:::

#### Proof of Lemma (Fisher information for $(\mu,\sigma^2)$)

Score components:
$$
S_\mu=\frac{Y-\mu}{s}, \qquad S_s=-\frac1{2s}+\frac{(Y-\mu)^2}{2s^2}.
$$

$$
\begin{aligned}
E[S_\mu^2] &=E[(Y-\mu)^2]/s^2=s/s^2=1/s,\\
E[S_\mu S_s] &=E\left[\frac{Y-\mu}{s}\left(-\frac1{2s}+\frac{(Y-\mu)^2}{2s^2}\right)\right]=0,\\
E[S_s^2] &=\operatorname{Var}\left(\frac{(Y-\mu)^2}{2s^2}\right)\\
&=\frac1{4s^4}\operatorname{Var}((Y-\mu)^2)\\
&=\frac1{4s^4}(2s^2)=\frac1{2s^2}.
\end{aligned}
$$

Sample information is $I_n=nI_1$。CRLB for estimating $\mu$ is $s/n$，and $\operatorname{Var}(\bar Y)=s/n$，so $\bar Y$ is efficient even if $s$ is unknown。

### Fisher Information Identities

:::{admonition} Definition (Fisher information)
For scalar $\theta$,
$$
I_1(\theta)=E\left[\left(\frac{\partial\log f(Y;\theta)}{\partial\theta}\right)^2\right].
$$
Under regularity conditions,
$$
I_1(\theta)=-E\left[\frac{\partial^2\log f(Y;\theta)}{\partial\theta^2}\right].
$$
:::

:::{admonition} Lemma (Score has mean zero)
$$
E[S_\theta(Y)]=0.
$$
:::

#### Proof of Lemma (Score has mean zero)

$$
S_\theta(y)=\frac{\partial\log f(y;\theta)}{\partial\theta} =\frac{\partial f(y;\theta)/\partial\theta}{f(y;\theta)}.
$$

$$
\begin{aligned}
E[S_\theta(Y)] &=\int \frac{\partial f(y;\theta)/\partial\theta}{f(y;\theta)}f(y;\theta)dy\\
&=\int \frac{\partial f(y;\theta)}{\partial\theta}dy\\
&=\frac{\partial}{\partial\theta}\int f(y;\theta)dy\\
&=\frac{\partial}{\partial\theta}1\\
&=0.
\end{aligned}
$$

Fisher information is score variance。

### Cramer-Rao Lower Bound

:::{admonition} Lemma (Scalar Cramer-Rao bound)
Scalar Cramer-Rao bound
若 $\hat\theta$ unbiased for $\theta$，则
$$
\operatorname{Var}(\hat\theta)\ge \frac1{I(\theta)}.
$$
:::

#### Proof of Lemma (Scalar Cramer-Rao bound)

$$
E[\hat\theta]=\theta, \qquad S_\theta(Y)=\partial\log f(Y;\theta)/\partial\theta.
$$

Differentiate unbiasedness:
$$
\begin{aligned}
1 &=\frac{\partial}{\partial\theta}\int \hat\theta(y)f(y;\theta)dy\\
&=\int \hat\theta(y)\frac{\partial f(y;\theta)}{\partial\theta}dy\\
&=E[\hat\theta S_\theta(Y)].
\end{aligned}
$$
Since $E[S_\theta]=0$,
$$
E[\hat\theta S_\theta]=E[(\hat\theta-\theta)S_\theta].
$$
Cauchy-Schwarz gives
$$
\begin{aligned}
1^2 &=\{E[(\hat\theta-\theta)S_\theta]\}^2\\
&\le E[(\hat\theta-\theta)^2]E[S_\theta^2]\\
&=\operatorname{Var}(\hat\theta)I(\theta).
\end{aligned}
$$

$\operatorname{Var}(\hat\theta)\ge I(\theta)^{-1}$。

课件还给出 vector/matrix version。若 $\hat\theta$ unbiased，

$$
\operatorname{Var}(\hat\theta)\succeq I(\theta)^{-1}.
$$

### Boundary MLE for Uniform Distribution

PS3 Q4: $X_i\sim U(\theta,2\theta)$, $\theta>0$。Likelihood:

$$
\ell(\theta)=\theta^{-n}\mathbf 1\left\{\frac{\max_iX_i}{2}\le \theta\le \min_iX_i\right\}.
$$

Since $\theta^{-n}$ decreases in $\theta$,

$$
\hat\theta=\frac12\max_iX_i.
$$

It is biased downward:

$$
E[\hat\theta]=\frac12E[X_{(n)}]=\frac12\left(\theta+\frac{n}{n+1}\theta\right)=\theta\left(1-\frac1{2(n+1)}\right)<\theta.
$$

But $X_{(n)}\to_p2\theta$, hence $\hat\theta\to_p\theta$。Moreover,

$$
n(\theta-\hat\theta)=\frac12n(2\theta-X_{(n)})\xrightarrow{d}\operatorname{Exp}(\lambda=\theta/2)
$$

where the problem set uses the scale parameterization $F(x)=1-e^{-x/\lambda}$。

### Binary-Response Likelihood and Separation

For binary $Y_i$, conditional model:

$$
P(Y_i=1\mid X_i=x)=G(x'\theta),
$$

likelihood is

$$
\ell_n(\theta)=\prod_iG(X_i'\theta)^{Y_i}[1-G(X_i'\theta)]^{1-Y_i}.
$$

Log-likelihood:

$$
L_n(\theta)=\sum_i\{Y_i\log G(X_i'\theta)+(1-Y_i)\log[1-G(X_i'\theta)]\}.
$$

PS3 Q5 的 logit 数据可以被一个阈值完全分开：positive observations have larger $x$ than negative observations。于是 log-likelihood 沿着某个方向趋近 supremum，但没有 finite maximizer，MLE 不存在。见 [cards/Separation_in_Logit](cards/Separation_in_Logit)。


## MLE Asymptotics and Likelihood-Based Tests

### Consistency of MLE

课件 supplement 里把 MLE consistency 写成 extremum estimator 的形式。设

$$
L_n(\theta)=\frac1n\sum_i\log p_\theta(X_i),
\qquad
L(\theta)=E[\log p_\theta(X_i)].
$$

:::{admonition} Lemma (Argmax consistency of MLE)
:::

#### Proof of Lemma (Argmax consistency of MLE)

$$
\hat\theta\xrightarrow{p}\theta_0.
$$

$$
\sup_{\theta\in\Theta}|L_n(\theta)-L(\theta)|\xrightarrow{p}0,
$$
and for every $\varepsilon>0$,
$$
\sup_{\theta\notin B_\varepsilon(\theta_0)}L(\theta)<L(\theta_0).
$$

**连续求解：** Since $\hat\theta$ maximizes $L_n$,
$$
L_n(\hat\theta)\ge L_n(\theta_0).
$$
Uniform convergence gives
$$
\begin{aligned}
L(\hat\theta) &\ge L_n(\hat\theta)-\sup_\theta|L_n(\theta)-L(\theta)|\\
&\ge L_n(\theta_0)-\sup_\theta|L_n(\theta)-L(\theta)|\\
&\ge L(\theta_0)-2\sup_\theta|L_n(\theta)-L(\theta)|.
\end{aligned}
$$
Therefore $L(\hat\theta)$ cannot stay below $L(\theta_0)$ by a fixed gap, so $\hat\theta$ must enter every neighborhood of $\theta_0$ with probability tending to one。

**结论：** MLE consistency needs identification plus uniform convergence。

课件给出的 sufficient conditions 包括 compact $\Theta$、continuity、unique maximizer，以及 dominated uniform law of large numbers。

### MLE Asymptotic Normality

:::{admonition} Lemma (MLE asymptotic normality)
:::

#### Proof of Lemma (MLE asymptotic normality)

$$
\sqrt n(\hat\theta-\theta_0)\xrightarrow{d}N(0,I(\theta_0)^{-1}).
$$

**联立系统：** Define score and Hessian:
$$
S_n(\theta)=\frac1n\sum_i s_i(\theta), \qquad H_n(\theta)=\frac1n\sum_i \frac{\partial s_i(\theta)}{\partial\theta'}.
$$
FOC:
$$
S_n(\hat\theta)=0.
$$

**连续求解：** Taylor expansion around $\theta_0$:
$$
\begin{aligned}
0 &=S_n(\hat\theta)\\
&=S_n(\theta_0)+H_n(\bar\theta)(\hat\theta-\theta_0).
\end{aligned}
$$
Rearranging:
$$
\sqrt n(\hat\theta-\theta_0) =-[H_n(\bar\theta)]^{-1}\sqrt n S_n(\theta_0).
$$
Under regularity,
$$
H_n(\bar\theta)\xrightarrow{p}-I(\theta_0), \qquad \sqrt nS_n(\theta_0)\xrightarrow{d}N(0,I(\theta_0)).
$$
Slutsky gives
$$
\sqrt n(\hat\theta-\theta_0)\xrightarrow{d}N(0,I^{-1}I I^{-1})=N(0,I^{-1}).
$$

**结论：** ML reaches the Cramer-Rao bound asymptotically under regularity。

### ML Wald, LR, and LM Tests

:::{admonition} Definition (ML Wald test)
If $H_0:r(\theta)=0$ has $q$ restrictions,
$$
W=n r(\hat\theta)'[R\hat I^{-1}R']^{-1}r(\hat\theta)\xrightarrow{d}\chi_q^2.
$$

**Definition (Likelihood ratio test):**
Let $\hat\theta$ be unrestricted MLE and $\tilde\theta$ restricted MLE under $H_0$。
$$
LR=2\{\log\ell_n(\hat\theta)-\log\ell_n(\tilde\theta)\}\xrightarrow{d}\chi_q^2.
$$

**Definition (Lagrange multiplier test):**
LM uses the restricted estimator and the score evaluated at it:
$$
LM=S_n(\tilde\theta)'\hat I(\tilde\theta)^{-1}S_n(\tilde\theta)
$$
with the appropriate $n$-scaling depending on whether $S_n$ is averaged or summed. Under $H_0$, $LM\to_d\chi_q^2$。

:::

Wald looks at distance of unrestricted estimator from the null; LR looks at log-likelihood loss from imposing the null; LM looks at slope of the likelihood at the restricted estimator。

### Boston Shooting Binomial Test

Slides use a Bernoulli/binomial approximation. National rate is 30 shootings per 365 days, so

$$
p_0=30/365.
$$

Boston has 35 shooting days/year, so

$$
\hat p=35/365.
$$

:::{admonition} Lemma (Wald z-test for a Bernoulli rate)
Wald z-test for a Bernoulli rate
Test $H_0:p=p_0$ using
$$
Z=\sqrt n\frac{\hat p-p_0}{\sqrt{p_0(1-p_0)}}.
$$
:::

#### Proof of Lemma (Wald z-test for a Bernoulli rate)

$$
\sqrt n(\hat p-p_0)\to_d N(0,p_0(1-p_0)).
$$

Standardize:
$$
Z=\frac{\sqrt n(\hat p-p_0)}{\sqrt{p_0(1-p_0)}}\to_dN(0,1).
$$

Slides obtain $Z\approx0.953$ using null variance, or $Z\approx0.889$ using variance evaluated at $\hat p$。Neither rejects conventional levels。

PS3 Q3 uses the same logic for sunny days in March: under $p_0=198/365$, $\hat p=10/31$,

$$
Z=\frac{10/31-198/365}{\sqrt{(198/365)(1-198/365)/31}}\approx -2.45.
$$

A two-sided 5% test rejects the “typical month” null。

### Binary-Response Existence Conditions

For logit/probit, asymptotic normality requires finite interior maximizer and identification。PS3 Q5's data create perfect separation, so the MLE does not exist. This is not a numerical bug; it is a failure of the objective to attain a finite maximum.

When the MLE exists and regularity conditions hold:

$$
\sqrt n(\hat\theta-\theta_0)\xrightarrow{d}N(0,I(\theta_0)^{-1}),
$$

where

$$
I(\theta_0)=E[s_i(\theta_0)s_i(\theta_0)']=-E[H_i(\theta_0)].
$$

### Joint Likelihood for Separate Equations

PS3 Q6 asks about estimating two equations separately or jointly:

$$
Y_i^A=X_i^A\beta_A+\varepsilon_i^A,
\qquad
Y_i^B=X_i^B\beta_B+\varepsilon_i^B,
\qquad
\varepsilon_i=(\varepsilon_i^A,\varepsilon_i^B)'\sim N(0,\Sigma).
$$

If regressors differ across equations and errors are correlated, joint MLE can improve efficiency relative to separate OLS. If each equation has the same regressors, separate OLS and GLS/SUR coincide for coefficients. This connects to Hayashi's multiple-equation GLS/SUR discussion, but EF8090 uses it mainly to practice writing conditional likelihood and Fisher information。
