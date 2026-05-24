# 07 MLE, Fisher Information, and Cramer-Rao Bound

Source: EF8090 slides, PDF pp. 133-162; PS3 Q1-Q5.  
Links: [06_Hypothesis_Testing](06_Hypothesis_Testing) | [08_MLE_Asymptotics_and_ML_Tests](08_MLE_Asymptotics_and_ML_Tests) | [cards/Fisher_Information_CRLB](cards/Fisher_Information_CRLB) | [cards/Boundary_MLE_Uniform](cards/Boundary_MLE_Uniform) | [cards/Separation_in_Logit](cards/Separation_in_Logit)

## 1. Maximum likelihood estimator

:::{admonition} Definition (Maximum likelihood estimator)
若 $X_1,\ldots,X_n$ iid with density $p_\theta(x)$，likelihood is
$$ \ell_n(\theta)=\prod_{i=1}^np_\theta(X_i). $$
Log-likelihood normalized by $n$ is
$$ L_n(\theta)=\frac1n\sum_{i=1}^n\log p_\theta(X_i). $$
MLE is
$$ \hat\theta\in\arg\max_{\theta\in\Theta}L_n(\theta). $$

:::

Conditional MLE similarly maximizes $\prod_i p_\theta(Y_i\mid X_i)$。课件例子包括 Bernoulli、normal、conditional binary response。

## 2. Bernoulli and Poisson examples

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

$$ \hat\lambda=\bar X. $$

$$ p_\lambda(x)=e^{-\lambda}\frac{\lambda^x}{x!}. $$

$$ \begin{aligned} \log\ell_n(\lambda) &=\sum_i[-\lambda+X_i\log\lambda-\log(X_i!)]\\ &=-n\lambda+\left(\sum_iX_i\right)\log\lambda+\text{const},\\ \frac{\partial\log\ell_n}{\partial\lambda} &=-n+\frac{\sum_iX_i}{\lambda}=0,\\ \hat\lambda&=\bar X. \end{aligned} $$

**结论：** Poisson mean MLE equals sample mean。

给定数据 $2,0,3,1,3,2,4,1,3,2$，$\bar X=2.1$。Wald 95% CI:

$$
2.1\pm1.96\sqrt{2.1/10}\approx[1.20,3.00].
$$

## 3. Normal MLE and Fisher information

PS3 Q1 asks for MLE and Fisher information for $Y_i\sim N(\mu,\sigma^2)$。Let $s=\sigma^2$。

:::{admonition} Lemma (Normal MLE)
:::

#### Proof of Lemma (Normal MLE)

$$ \hat\mu=\bar Y, \qquad \hat\sigma^2=\frac1n\sum_i(Y_i-\bar Y)^2. $$

$$ \log\ell(\mu,s)=-\frac n2\log(2\pi)-\frac n2\log s-\frac1{2s}\sum_i(Y_i-\mu)^2. $$

$$ \begin{aligned} \frac{\partial\log\ell}{\partial\mu} &=\frac1s\sum_i(Y_i-\mu)=0 \quad\Rightarrow\quad \hat\mu=\bar Y,\\ \frac{\partial\log\ell}{\partial s} &=-\frac n{2s}+\frac1{2s^2}\sum_i(Y_i-\mu)^2=0\\ &\Rightarrow \hat s=\frac1n\sum_i(Y_i-\hat\mu)^2. \end{aligned} $$

**结论：** Normal MLE 的 variance estimator uses $n$，not $n-1$。

:::{admonition} Lemma (Fisher information for $(\mu,\sigma^2)$)
**WTS：** 单个 observation 的 Fisher information is
$$ I_1(\mu,s)= \begin{pmatrix} 1/s&0\\ 0&1/(2s^2) \end{pmatrix}. $$

**联立系统：** Score components:
$$ S_\mu=\frac{Y-\mu}{s}, \qquad S_s=-\frac1{2s}+\frac{(Y-\mu)^2}{2s^2}. $$

**连续求解：**
$$ \begin{aligned} E[S_\mu^2] &=E[(Y-\mu)^2]/s^2=s/s^2=1/s,\\ E[S_\mu S_s] &=E\left[\frac{Y-\mu}{s}\left(-\frac1{2s}+\frac{(Y-\mu)^2}{2s^2}\right)\right]=0,\\ E[S_s^2] &=\operatorname{Var}\left(\frac{(Y-\mu)^2}{2s^2}\right)\\ &=\frac1{4s^4}\operatorname{Var}((Y-\mu)^2)\\ &=\frac1{4s^4}(2s^2)=\frac1{2s^2}. \end{aligned} $$

**结论：** Sample information is $I_n=nI_1$。CRLB for estimating $\mu$ is $s/n$，and $\operatorname{Var}(\bar Y)=s/n$，so $\bar Y$ is efficient even if $s$ is unknown。

:::

## 4. Fisher information identities

:::{admonition} Definition (Fisher information)
For scalar $\theta$,
$$ I_1(\theta)=E\left[\left(\frac{\partial\log f(Y;\theta)}{\partial\theta}\right)^2\right]. $$
Under regularity conditions,
$$ I_1(\theta)=-E\left[\frac{\partial^2\log f(Y;\theta)}{\partial\theta^2}\right]. $$

**Lemma:** Score has mean zero
**WTS：**
$$ E[S_\theta(Y)]=0. $$

**联立系统：**
$$ S_\theta(y)=\frac{\partial\log f(y;\theta)}{\partial\theta} =\frac{\partial f(y;\theta)/\partial\theta}{f(y;\theta)}. $$

**连续求解：**
$$ \begin{aligned} E[S_\theta(Y)] &=\int \frac{\partial f(y;\theta)/\partial\theta}{f(y;\theta)}f(y;\theta)dy\\ &=\int \frac{\partial f(y;\theta)}{\partial\theta}dy\\ &=\frac{\partial}{\partial\theta}\int f(y;\theta)dy\\ &=\frac{\partial}{\partial\theta}1\\ &=0. \end{aligned} $$

**结论：** Fisher information is score variance。

:::

## 5. Cramer-Rao lower bound

:::{admonition} Lemma (Scalar Cramer-Rao bound)
Scalar Cramer-Rao bound
**WTS：** 若 $\hat\theta$ unbiased for $\theta$，则
$$ \operatorname{Var}(\hat\theta)\ge \frac1{I(\theta)}. $$

**联立系统：**
$$ E[\hat\theta]=\theta, \qquad S_\theta(Y)=\partial\log f(Y;\theta)/\partial\theta. $$

**连续求解：** Differentiate unbiasedness:
$$ \begin{aligned} 1 &=\frac{\partial}{\partial\theta}\int \hat\theta(y)f(y;\theta)dy\\ &=\int \hat\theta(y)\frac{\partial f(y;\theta)}{\partial\theta}dy\\ &=E[\hat\theta S_\theta(Y)]. \end{aligned} $$
Since $E[S_\theta]=0$,
$$ E[\hat\theta S_\theta]=E[(\hat\theta-\theta)S_\theta]. $$
Cauchy-Schwarz gives
$$ \begin{aligned} 1^2 &=\{E[(\hat\theta-\theta)S_\theta]\}^2\\ &\le E[(\hat\theta-\theta)^2]E[S_\theta^2]\\ &=\operatorname{Var}(\hat\theta)I(\theta). \end{aligned} $$

**结论：** $\operatorname{Var}(\hat\theta)\ge I(\theta)^{-1}$。

:::

课件还给出 vector/matrix version。若 $\hat\theta$ unbiased，

$$
\operatorname{Var}(\hat\theta)\succeq I(\theta)^{-1}.
$$

## 6. Boundary MLE: uniform distribution

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

## 7. Binary response likelihood and separation

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

