# 04 Likelihood, Fisher Information, and ML Tests

## Maximum Likelihood Estimator

:::{admonition} Definition (Maximum likelihood estimator)
若 $X_1,\ldots,X_n$ iid with density $p_\theta(x)$，则

$$
\begin{aligned}
\ell_n(\theta)&=\prod_{i=1}^n p_\theta(X_i),\\
L_n(\theta)&=\frac1n\sum_{i=1}^n\log p_\theta(X_i),\\
\hat\theta&\in\arg\max_{\theta\in\Theta}L_n(\theta).
\end{aligned}
$$

:::

## Bernoulli and Poisson Likelihoods

:::{admonition} Bernoulli model
若 $X_i\in\{0,1\}$ 且 $P(X_i=1)=p$，则

$$
\begin{aligned}
p(x_i;p)&=p^{x_i}(1-p)^{1-x_i},\qquad x_i\in\{0,1\},\\
\ell_n(p)&=\prod_i p^{X_i}(1-p)^{1-X_i},\qquad \hat p=\bar X.
\end{aligned}
$$

若样本全为 $0$ 或 $1$ 且参数空间是 $(0,1)$，MLE 只可能在边界取上确界。
:::

PS3 Q2: Poisson $X_i\sim\operatorname{Poisson}(\lambda)$。

:::{admonition} Poisson model
若 $X_i\sim\operatorname{Poisson}(\lambda)$，则

$$
\begin{aligned}
p(x_i;\lambda)&=e^{-\lambda}\frac{\lambda^{x_i}}{x_i!},\qquad x_i\in\mathbb N_0,\\
\ell_n(\lambda)&=\prod_i e^{-\lambda}\frac{\lambda^{X_i}}{X_i!},\qquad \hat\lambda=\bar X.
\end{aligned}
$$

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

## Normal MLE and Fisher Information

PS3 Q1 asks for MLE and Fisher information for $Y_i\sim N(\mu,\sigma^2)$。Let $s=\sigma^2$。

:::{admonition} Normal model
若 $Y_i\sim N(\mu,\sigma^2)$，令 $s=\sigma^2$，则

$$
\begin{aligned}
f(y;\mu,s)&=\frac{1}{\sqrt{2\pi s}}\exp\left[-\frac{(y-\mu)^2}{2s}\right],\\
\hat\mu&=\bar Y,\qquad \hat\sigma^2=\frac1n\sum_i(Y_i-\bar Y)^2.
\end{aligned}
$$

注意这里的 variance MLE uses $n$，not $n-1$。
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

:::{admonition} Fisher information for $(\mu,\sigma^2)$
单个 observation 的 Fisher information is

$$
I_1(\mu,s)=\begin{pmatrix}1/s&0\\0&1/(2s^2)\end{pmatrix}.
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

## Fisher Information Identities

:::{admonition} Definition (Fisher information)
For scalar $\theta$,

$$
I_1(\theta)=E\!\left[\left(\frac{\partial\log f(Y;\theta)}{\partial\theta}\right)^2\right]
=-E\!\left[\frac{\partial^2\log f(Y;\theta)}{\partial\theta^2}\right].
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

## Cramer-Rao Lower Bound

:::{admonition} Lemma (Scalar Cramer-Rao bound)
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

Vector version: if $\hat\theta$ is unbiased,

$$
\operatorname{Var}(\hat\theta)\succeq I(\theta)^{-1}.
$$

## Boundary MLE for Uniform Distribution

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

## Binary-Response Likelihood and Separation

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

:::{admonition} Binary-response models at a glance
Binary-response 模型通常写成 single-index 形式

$$
P(Y_i=1\mid X_i=x_i)=G(x_i'\beta),
$$

其中 $G$ 是一个 cdf。Logit 用 logistic cdf，probit 用 standard normal cdf。二者都没有闭式 MLE，需要数值最大化；边际效应一般依赖 $x_i$，而不是常数。

如果样本出现 perfect separation 或 quasi-separation，logit/probit 的 likelihood 可能没有 finite maximizer。
:::

:::{admonition} Logit model
For binary $Y_i$ and covariates $X_i$, the logit specification is

$$
P(Y_i=1\mid X_i=x_i)=\Lambda(x_i'\beta),\qquad \Lambda(t)=\frac{e^t}{1+e^t}.
$$

The observed likelihood is

$$
\ell_n(\beta)=\prod_i \Lambda(X_i'\beta)^{Y_i}\big[1-\Lambda(X_i'\beta)\big]^{1-Y_i}.
$$

The MLE is

$$
\hat\beta\in\arg\max_\beta \sum_i\Big\{Y_i\log\Lambda(X_i'\beta)+(1-Y_i)\log[1-\Lambda(X_i'\beta)]\Big\}.
$$

Perfect separation can make the MLE fail to exist in finite form.

The marginal effect is

$$
\frac{\partial}{\partial x_k}P(Y_i=1\mid X_i=x_i)=\Lambda(x_i'\beta)\big[1-\Lambda(x_i'\beta)\big]\beta_k.
$$

On the log-odds scale,

$$
\log\frac{P(Y_i=1\mid X_i=x_i)}{P(Y_i=0\mid X_i=x_i)}=x_i'\beta.
$$

:::

## Probit and Tobit Templates

Let $\phi$ denote the standard normal pdf and $\Phi$ the standard normal cdf.

:::{admonition} Probit model
For binary $Y_i$ and covariates $X_i$, the probit specification is

$$
P(Y_i=1\mid X_i=x_i)=\Phi(x_i'\beta).
$$

The observed likelihood is

$$
\ell_n(\beta)=\prod_i \Phi(X_i'\beta)^{Y_i}\big[1-\Phi(X_i'\beta)\big]^{1-Y_i}.
$$

The MLE is

$$
\hat\beta\in\arg\max_\beta \sum_i\Big\{Y_i\log\Phi(X_i'\beta)+(1-Y_i)\log[1-\Phi(X_i'\beta)]\Big\}.
$$

Unlike Bernoulli/Poisson/Normal, there is no closed-form MLE; it is computed numerically.

The marginal effect is

$$
\frac{\partial}{\partial x_k}P(Y_i=1\mid X_i=x_i)=\phi(x_i'\beta)\beta_k.
$$

Probit is the latent-normal model: $Y_i=1$ if $Y_i^*=x_i'\beta+u_i>0$ with $u_i\sim N(0,1)$ after normalization.
:::

:::{admonition} Tobit model
For left-censoring at zero, let the latent outcome be

$$
Y_i^*=X_i'\beta+u_i,\qquad u_i\sim N(0,\sigma^2),
$$

and the observed outcome be $Y_i=\max(0,Y_i^*)$.

The observed likelihood is mixed discrete-continuous:

$$
\ell_n(\beta,\sigma)=
\prod_{i:Y_i=0}\Phi\left(-\frac{X_i'\beta}{\sigma}\right)
\cdot\prod_{i:Y_i>0}\frac{1}{\sigma}\phi\left(\frac{Y_i-X_i'\beta}{\sigma}\right).
$$

Equivalently, in log form,

$$
\log\ell_n(\beta,\sigma)
=\sum_{i:Y_i=0}\log\Phi\left(-\frac{X_i'\beta}{\sigma}\right)
+\sum_{i:Y_i>0}\left[-\log\sigma+\log\phi\left(\frac{Y_i-X_i'\beta}{\sigma}\right)\right].
$$

The MLE is obtained by numerical maximization over $(\beta,\sigma)$; there is no closed-form solution.

This is a censored regression model, not a truncated sample model. The point mass at zero and the continuous density above zero must be handled together in the likelihood.

The censoring probability and conditional mean are

$$
P(Y_i=0\mid X_i=x_i)=\Phi\left(-\frac{x_i'\beta}{\sigma}\right),
$$

$$
E[Y_i\mid X_i=x_i]=x_i'\beta\ \Phi\left(\frac{x_i'\beta}{\sigma}\right)+\sigma\phi\left(\frac{x_i'\beta}{\sigma}\right).
$$

So Tobit combines a discrete mass at the censoring point with a continuous normal density above it.
:::

## MLE Asymptotic Properties

### Consistency of MLE

:::{admonition} MLE consistency roadmap
$$
\begin{aligned}
L_n(\theta)&=\frac1n\sum_i\log p_\theta(X_i),\\
L(\theta)&=E[\log p_\theta(X_i)].
\end{aligned}
$$
MLE consistency is obtained by combining identification, approximate argmax consistency, compactness/continuity, and a uniform law of large numbers.
:::

:::{admonition} Lemma 1 (Identification)
$$
\begin{aligned}
P\{p_\theta(Y\mid X)>p_{\theta_0}(Y\mid X)\}&>0, \qquad \forall \theta\neq\theta_0,\\
L(\theta)=E[\log p_\theta(Y\mid X)]&\text{ is uniquely maximized at }\theta=\theta_0.
\end{aligned}
$$
:::

:::{admonition} Lemma 2 (Approximate argmax consistency)
$$
\begin{aligned}
L_n(\hat\theta_n)&\ge L_n(\theta_0)-o_p(1),\\
\sup_{\theta\in\Theta}|L_n(\theta)-L(\theta)|&\xrightarrow{p}0,\\
\sup_{\theta\in\Theta\setminus B_\delta(\theta_0)}L(\theta)&<L(\theta_0), \qquad \forall \delta>0,\\
\hat\theta_n&\xrightarrow{p}\theta_0.
\end{aligned}
$$
:::

:::{admonition} Lemma 3 (Compactness / continuity)
$$
\begin{aligned}
\Theta\text{ is compact},\qquad L(\theta)\text{ is continuous},\qquad
L(\theta)\text{ is uniquely maximized over }\theta\in\Theta\text{ at }\theta=\theta_0,\\
\sup_{\theta\in\Theta\setminus B_\delta(\theta_0)}L(\theta)<L(\theta_0).
\end{aligned}
$$
:::

:::{admonition} Lemma 4 (Uniform law of large numbers)
$$
\begin{aligned}
X_i&\text{ are i.i.d. on }\mathbb R^d,\qquad S=\operatorname{supp}(P),\qquad \Theta\subset\mathbb R^k\text{ compact},\\
f:\Theta\times S&\to\mathbb R,\qquad f(\theta,x)\text{ continuous in }\theta\ \forall x\in S,\\
|f(\theta,x)|&\le F(x),\qquad E[F(X_i)]<\infty,\\
\sup_{\theta\in\Theta}\left|\frac1n\sum_{i=1}^n f(\theta,X_i)-E[f(\theta,X_i)]\right|&\xrightarrow{p}0.
\end{aligned}
$$
:::

#### Proof of MLE consistency

$$
\hat\theta_n\in\arg\max_{\theta\in\Theta}L_n(\theta).
$$

$$
L_n(\hat\theta_n)\ge L_n(\theta_0).
$$

$$
\begin{aligned}
L(\hat\theta_n)
&\ge L_n(\hat\theta_n)-\sup_{\theta\in\Theta}|L_n(\theta)-L(\theta)|\\
&\ge L_n(\theta_0)-\sup_{\theta\in\Theta}|L_n(\theta)-L(\theta)|\\
&\ge L(\theta_0)-2\sup_{\theta\in\Theta}|L_n(\theta)-L(\theta)|.
\end{aligned}
$$

Therefore $\hat\theta_n$ must enter every neighborhood of $\theta_0$ with probability tending to one. Hence

$$
\hat\theta_n\xrightarrow{p}\theta_0.
$$

### Asymptotic Normality and Efficiency

:::{admonition} Lemma (MLE asymptotic normality)
Under the usual interiority and regularity conditions, the MLE is asymptotically normal with covariance $I(\theta_0)^{-1}$.
:::

:::{admonition} Notation (score and Hessian)
$$
\begin{aligned}
S_n(\theta)&=\frac1n\sum_i s_i(\theta),\\
H_n(\theta)&=\frac1n\sum_i \frac{\partial s_i(\theta)}{\partial\theta'}.
\end{aligned}
$$

$$
S_n(\hat\theta)=0.
$$
:::

#### Proof of Lemma (MLE asymptotic normality)

$$
\sqrt n(\hat\theta-\theta_0)\xrightarrow{d}N(0,I(\theta_0)^{-1}).
$$

$$
\begin{aligned}
0&=S_n(\hat\theta)\\
&=S_n(\theta_0)+H_n(\bar\theta)(\hat\theta-\theta_0).
\end{aligned}
$$

$$
\sqrt n(\hat\theta-\theta_0) =-[H_n(\bar\theta)]^{-1}\sqrt n S_n(\theta_0).
$$

$$
H_n(\bar\theta)\xrightarrow{p}-I(\theta_0), \qquad \sqrt nS_n(\theta_0)\xrightarrow{d}N(0,I(\theta_0)).
$$

$$
\sqrt n(\hat\theta-\theta_0)\xrightarrow{d}N(0,I(\theta_0)^{-1}I(\theta_0)I(\theta_0)^{-1})=N(0,I(\theta_0)^{-1}).
$$

#### Proof of asymptotic efficiency

The asymptotic covariance of the MLE is

$$
\operatorname{AVar}\!\left(\sqrt n(\hat\theta-\theta_0)\right)=I(\theta_0)^{-1}.
$$

For regular estimators, the asymptotic Cramér-Rao lower bound is also $I(\theta_0)^{-1}$, so the MLE attains the bound.

## ML Wald, LR, and LM Tests

:::{admonition} Definition (ML Wald test)
If $H_0:r(\theta)=0$ has $q$ restrictions,

$$
W=n r(\hat\theta)'[R\hat I^{-1}R']^{-1}r(\hat\theta)\xrightarrow{d}\chi_q^2.
$$
:::

:::{admonition} Definition (Likelihood ratio test)
Let $\hat\theta$ be unrestricted MLE and $\tilde\theta$ restricted MLE under $H_0$。

$$
LR=2\{\log\ell_n(\hat\theta)-\log\ell_n(\tilde\theta)\}\xrightarrow{d}\chi_q^2.
$$
:::

:::{admonition} Definition (Lagrange multiplier test)
LM uses the restricted estimator and the score evaluated at it:

$$
LM=S_n(\tilde\theta)'\hat I(\tilde\theta)^{-1}S_n(\tilde\theta)
$$

with the appropriate $n$-scaling depending on whether $S_n$ is averaged or summed. Under $H_0$, $LM\to_d\chi_q^2$。

:::

Wald looks at distance of unrestricted estimator from the null; LR looks at log-likelihood loss from imposing the null; LM looks at slope of the likelihood at the restricted estimator。

## Boston Shooting Binomial Test

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

## Binary-Response Existence Conditions

For logit/probit, asymptotic normality requires finite interior maximizer and identification。PS3 Q5's data create perfect separation, so the MLE does not exist. This is not a numerical bug; it is a failure of the objective to attain a finite maximum.

When the MLE exists and regularity conditions hold:

$$
\sqrt n(\hat\theta-\theta_0)\xrightarrow{d}N(0,I(\theta_0)^{-1}),
$$

where

$$
I(\theta_0)=E[s_i(\theta_0)s_i(\theta_0)']=-E[H_i(\theta_0)].
$$

## Joint Likelihood for Separate Equations

PS3 Q6 asks about estimating two equations separately or jointly:

$$
Y_i^A=X_i^A\beta_A+\varepsilon_i^A,
\qquad
Y_i^B=X_i^B\beta_B+\varepsilon_i^B,
\qquad
\varepsilon_i=(\varepsilon_i^A,\varepsilon_i^B)'\sim N(0,\Sigma).
$$

If regressors differ across equations and errors are correlated, joint MLE can improve efficiency relative to separate OLS. If each equation has the same regressors, separate OLS and GLS/SUR coincide for coefficients. This connects to Hayashi's multiple-equation GLS/SUR discussion, but EF8090 uses it mainly to practice writing conditional likelihood and Fisher information。
