# 03 Probability Limits, OLS Asymptotics, and Wald Tests

## Motivation for Asymptotic Approximation

动机：有限样本正态分布依赖 strong distributional assumptions。若只假设 iid、矩存在和 exogeneity，通常依赖 large-sample approximation。三大工具是：

$$
\text{WLLN},\qquad \text{CLT},\qquad \text{CMT / Slutsky / Delta method}.
$$

:::{admonition} Definition (Convergence in probability)
随机变量 $Z_n$ 依概率收敛到 $Z$，记作 $Z_n\xrightarrow{p}Z$，若对任意 $\varepsilon>0$，

$$
\lim_{n\to\infty}P(|Z_n-Z|\le \varepsilon)=1.
$$
:::

:::{admonition} Definition (Convergence in distribution)
$Z_n\xrightarrow{d}Z$ 若在 $F_Z$ 的连续点 $z$ 上，

$$
F_{Z_n}(z)\to F_Z(z).
$$
:::

依概率收敛通常用于 consistency；依分布收敛用于 limiting distribution 和 inference。

## WLLN via Chebyshev

:::{admonition} Lemma (Weak Law of Large Numbers under finite variance)
若 $Y_i$ iid, $E[Y_i]=\mu$, $\operatorname{Var}(Y_i)=\sigma^2<\infty$，则

$$
\bar Y_n\xrightarrow{p}\mu.
$$
:::

#### Proof of Lemma (Weak Law of Large Numbers under finite variance)

$$
\bar Y_n=\frac1n\sum_{i=1}^nY_i, \qquad E\bar Y_n=\mu, \qquad \operatorname{Var}(\bar Y_n)=\frac{\sigma^2}{n}.
$$

Chebyshev inequality gives

$$
\begin{aligned}
P(|\bar Y_n-\mu|>\varepsilon) &\le \frac{\operatorname{Var}(\bar Y_n)}{\varepsilon^2}\\
&=\frac{\sigma^2}{n\varepsilon^2}\\
&\to 0.
\end{aligned}
$$

sample mean converges in probability to population mean。

向量版本直接对每个元素应用 WLLN；矩阵版本同理逐元素应用。

## CLT and Cramer-Wold

:::{admonition} Lemma (Lindeberg-Levy CLT)
若 $Y_i$ iid, $E[Y_i]=\mu$, $\operatorname{Var}(Y_i)=\sigma^2<\infty$，则

$$
\sqrt n(\bar Y_n-\mu)\xrightarrow{d}N(0,\sigma^2).
$$
:::

#### Proof of Lemma (Lindeberg-Levy CLT)

$$
\sqrt n(\bar Y_n-\mu)=\frac1{\sqrt n}\sum_{i=1}^n(Y_i-\mu).
$$

该标准化和的 moment generating function 收敛到正态分布的 mgf；课件把完整证明放在 CLT 部分。

sample average 的误差是 $O_p(n^{-1/2})$。

:::{admonition} Lemma (Cramer-Wold device)
对随机向量 $Z_n\in\mathbb R^k$，若对每个 fixed $a\in\mathbb R^k$，

$$
a'Z_n\xrightarrow{d}a'Z,
$$
则
$$
Z_n\xrightarrow{d}Z.
$$
:::

#### Proof of Lemma (Cramer-Wold device)

多元 CLT 可以通过任意线性组合的一元 CLT 来证明。

## Continuous mapping and Slutsky

:::{admonition} Lemma (Continuous Mapping Theorem)
若 $Z_n\xrightarrow{p}Z$，且 $g$ 连续，则

$$
g(Z_n)\xrightarrow{p}g(Z).
$$
:::

#### Proof of Lemma (Continuous Mapping Theorem)

sample moments 的连续函数也 consistent。例如 $\hat Q^{-1}\to_p Q^{-1}$ 需要 $Q$ nonsingular。

:::{admonition} Lemma (Slutsky theorem)
若 $X_n\xrightarrow{d}X$ 且 $Y_n\xrightarrow{p}c$，则

$$
X_n+Y_n\xrightarrow{d}X+c, \qquad X_nY_n\xrightarrow{d}Xc.
$$
:::

#### Proof of Lemma (Slutsky theorem)

estimated standard error 可以替代 true standard error。

## Delta Method

:::{admonition} Lemma (Delta method)
若

$$
\sqrt n(\hat\theta-\theta_0)\xrightarrow{d}N(0,V),
$$
且 $g$ 在 $\theta_0$ 可微，则
$$
\sqrt n(g(\hat\theta)-g(\theta_0))\xrightarrow{d}N(0,G V G'),
$$
其中 $G=\nabla g(\theta_0)'$。
:::

#### Proof of Lemma (Delta method)

Taylor expansion:

$$
g(\hat\theta)=g(\theta_0)+G(\hat\theta-\theta_0)+r_n, \qquad r_n=o_p(\|\hat\theta-\theta_0\|).
$$

$$
\begin{aligned}
\sqrt n(g(\hat\theta)-g(\theta_0)) &=G\sqrt n(\hat\theta-\theta_0)+\sqrt n r_n\\
&=G\sqrt n(\hat\theta-\theta_0)+o_p(1)\\
&\xrightarrow{d}N(0,GVG').
\end{aligned}
$$

smooth transformation 的 asymptotic variance 用梯度做 sandwich。

PS2 Q2：若 $m_k=(E[Y^k])^{1/k}$，估计量

$$
\hat m_k=\left(\frac1n\sum_iY_i^k\right)^{1/k}.
$$

令 $\mu_k=E[Y^k]$，若 $\operatorname{Var}(Y^k)<\infty$，则

$$
\sqrt n(\hat m_k-m_k)\xrightarrow{d}N\left(0,\left[\frac1k\mu_k^{1/k-1}\right]^2\operatorname{Var}(Y^k)\right).
$$

PS2 Q3：若 $\sqrt n(\hat\mu-\mu)\to_d N(0,v^2)$，且 $\hat\beta=\hat\mu^2$，则当 $\mu\ne0$：

$$
\sqrt n(\hat\beta-eta)\to_d N(0,4\mu^2v^2).
$$

当 $\mu=0$，first-order Delta method 退化，因为 derivative $2\mu=0$。此时

$$
n\hat\beta=n\hat\mu^2=(\sqrt n\hat\mu)^2\xrightarrow{d}v^2\chi_1^2.
$$

## Stochastic Order Symbols

:::{admonition} Definition (Stochastic order)
$$
Z_n=o_p(1)\iff Z_n\xrightarrow{p}0, \qquad Z_n=O_p(1)\iff Z_n\text{ is bounded in probability}.
$$
更一般地，
$$
Z_n=o_p(a_n)\iff Z_n/a_n=o_p(1), \qquad Z_n=O_p(a_n)\iff Z_n/a_n=O_p(1).
$$
:::

:::{admonition} Lemma (Algebra of $o_p$ and $O_p$)
$$
o_p(1)+o_p(1)=o_p(1), \quad O_p(1)+o_p(1)=O_p(1), \quad O_p(1)o_p(1)=o_p(1).
$$
:::

#### Proof of Lemma (Algebra of $o_p$ and $O_p$)

For the product, if $X_n=O_p(1)$ and $Y_n=o_p(1)$, then for any $\varepsilon>0$, choose $M$ so that $P(|X_n|>M)<\varepsilon/2$. Then

$$
\begin{aligned}
P(|X_nY_n|>\delta) &\le P(|X_n|>M)+P(|Y_n|>\delta/M)\\
&<\varepsilon/2+o(1).
\end{aligned}
$$

bounded-in-probability 乘以 vanishing-in-probability 仍然 vanishes。

## Convergence Counterexamples

- $a$ True: convergence in probability is stable under addition.
- $b$ False: let $X_n=n$ with probability $1/n$, and $0$ otherwise. Then $X_n\to_p0$, $X_n\ge0$, but $E[X_n]=1$.
- $c$ False: $X_n\sim N(0,1/n)$ has continuous cdf, but $X_n\to_d0$, whose cdf jumps at zero.
- $d$ False: even if moments match, convergence in probability to a particular random variable need not hold. For example let $X_n$ be independent copies with the same distribution as $X$; all moments match, but $X_n\not\to_p X$ unless degenerate.


**OLS Large-Sample Inference**

## Linear Projection Model and Assumptions

课件在渐近 OLS 部分使用 linear projection model：

$$
Y_i=X_i'\beta+e_i,
\qquad
E[X_ie_i]=0.
$$

如果有更强的 regression model $E[e_i\mid X_i]=0$，则自动推出 $E[X_ie_i]=0$。核心 assumptions 是：iid、二阶矩存在、$Q=E[X_iX_i']$ 正定。

:::{admonition} Definition (Population matrices)
在渐近 OLS 中，定义

$$
Q=E[X_iX_i'], \qquad \Omega=E[e_i^2X_iX_i'], \qquad V=Q^{-1}\Omega Q^{-1}.
$$

:::

## Consistency of OLS

:::{admonition} Lemma (OLS consistency)
在 $Q$ 正定且 $E[X_ie_i]=0$ 下，OLS estimator consistent.
:::

#### Proof of Lemma (OLS consistency)

$$
\hat\beta\xrightarrow{p}\beta.
$$

$$
\hat\beta=(X'X)^{-1}X'Y, \qquad Y_i=X_i'\beta+e_i.
$$
Define
$$
\hat Q=\frac1n\sum_iX_iX_i', \qquad \hat g=\frac1n\sum_iX_iY_i.
$$

$$
\begin{aligned}
\hat\beta &=\hat Q^{-1}\hat g\\
&=\hat Q^{-1}\left(\frac1n\sum_iX_i(X_i'\beta+e_i)\right)\\
&=\hat Q^{-1}\left(\hat Q\beta+\frac1n\sum_iX_ie_i\right)\\
&=\beta+\hat Q^{-1}\left(\frac1n\sum_iX_ie_i\right).
\end{aligned}
$$
By WLLN,

$$
\hat Q\xrightarrow{p}Q, \qquad \frac1n\sum_iX_ie_i\xrightarrow{p}E[X_ie_i]=0.
$$

By CMT,

$$
\hat Q^{-1}\xrightarrow{p}Q^{-1}.
$$
Therefore
$$
\hat\beta-\beta\xrightarrow{p}Q^{-1}0=0.
$$

**结论：** OLS consistency 来自 sample moments 收敛和正交条件。

## OLS Asymptotic Normality

:::{admonition} Lemma (Asymptotic distribution of OLS)
在 iid、$E[X_ie_i]=0$、$Q$ 正定且 $\Omega=E[e_i^2X_iX_i']$ 存在下，

$$
\sqrt n(\hat\beta-\beta)\xrightarrow{d}N(0,Q^{-1}\Omega Q^{-1}).
$$
:::

#### Proof of Lemma (Asymptotic distribution of OLS)

$$
\sqrt n(\hat\beta-\beta)\xrightarrow{d}N(0,Q^{-1}\Omega Q^{-1}).
$$

$$
\hat\beta-\beta=\hat Q^{-1}\left(\frac1n\sum_iX_ie_i\right).
$$

**连续求解：** Multiply by $\sqrt n$：

$$
\begin{aligned}
\sqrt n(\hat\beta-\beta) &=\hat Q^{-1}\left(\frac1{\sqrt n}\sum_iX_ie_i\right).
\end{aligned}
$$
By multivariate CLT,

$$
\frac1{\sqrt n}\sum_iX_ie_i\xrightarrow{d}N(0,\Omega).
$$

By Slutsky,

$$
\begin{aligned}
\sqrt n(\hat\beta-\beta) &\xrightarrow{d}Q^{-1}N(0,\Omega)\\
&=N(0,Q^{-1}\Omega Q^{-1}).
\end{aligned}
$$

**结论：** heteroskedasticity changes $\Omega$，因此改变标准误；但不改变 consistency。

若 homoskedasticity holds, $E[e_i^2\mid X_i]=\sigma^2$，则

$$
\Omega=E[e_i^2X_iX_i']=E[E[e_i^2\mid X_i]X_iX_i']=\sigma^2Q,
$$

从而

$$
V=Q^{-1}\Omega Q^{-1}=\sigma^2Q^{-1}.
$$

## Asymptotic Covariance Estimation

课件讨论估计 $V$。一般 heteroskedastic case：

$$
\hat Q=\frac1n\sum_iX_iX_i',
\qquad
\hat\Omega=\frac1n\sum_i\hat e_i^2X_iX_i',
\qquad
\hat V=\hat Q^{-1}\hat\Omega\hat Q^{-1}.
$$

:::{admonition} Lemma (Consistency of robust covariance estimator)
在 $E[e_i^4]<\infty$ 且 $\hat\beta\xrightarrow{p}\beta$ 下，

$$
\hat V=\hat Q^{-1}\hat\Omega\hat Q^{-1}\xrightarrow{p}V.
$$
:::

#### Proof of Lemma (Consistency of robust covariance estimator)

$$
\hat V\xrightarrow{p}V.
$$

$$
\hat e_i=e_i-X_i'(\hat\beta-\beta).
$$

$$
\begin{aligned}
\hat e_i^2-e_i^2 &=(e_i-X_i'(\hat\beta-\beta))^2-e_i^2\\
&=-2e_iX_i'(\hat\beta-\beta)+(X_i'(\hat\beta-\beta))^2.
\end{aligned}
$$
Averaging after multiplying by $X_iX_i'$, the first term is $o_p(1)$ because $\hat\beta-\beta=o_p(1)$ and moments are bounded; the second term is also $o_p(1)$. Therefore
$$
\hat\Omega =\frac1n\sum_ie_i^2X_iX_i'+o_p(1) \xrightarrow{p}\Omega.
$$
Since $\hat Q^{-1}\to_pQ^{-1}$,
$$
\hat V=\hat Q^{-1}\hat\Omega\hat Q^{-1}\xrightarrow{p}Q^{-1}\Omega Q^{-1}.
$$

**结论：** 用 residual 替换 true error 的误差在 large sample 下消失。

若错误使用 homoskedastic covariance $\hat\sigma^2\hat Q^{-1}$ 而真实 heteroskedastic，则 t/Wald 的 limiting distribution 不正确。这是课件第 107 页附近的重点。

## Functions of OLS and Standard Errors

若 $\theta=r(\beta)$，$r$ 可微，则

$$
\sqrt n(r(\hat\beta)-r(\beta))\xrightarrow{d}N(0,RVR'),
\qquad
R=\frac{\partial r(\beta)}{\partial \beta'}.
$$

估计标准误：

$$
\widehat{\operatorname{se}}(r(\hat\beta))
=\sqrt{\frac1n R(\hat\beta)\hat V R(\hat\beta)'}.
$$

## t Statistic and Confidence Interval

:::{admonition} Definition (Asymptotic t-statistic)
对 scalar $\theta=r(\beta)$，

$$
t_n(\theta_0)=\frac{r(\hat\beta)-\theta_0}{\widehat{\operatorname{se}}(r(\hat\beta))}.
$$
若 $H_0:\theta=\theta_0$，则
$$
t_n(\theta_0)\xrightarrow{d}N(0,1).
$$

:::

95% confidence interval:

$$
\left[r(\hat\beta)-1.96\widehat{\operatorname{se}},\; r(\hat\beta)+1.96\widehat{\operatorname{se}}\right].
$$

PS2 Q5 的 test-CI duality：拒绝 $H_0:\theta=\theta_0$ 当且仅当 $\theta_0$ 不在该区间内。这是因为

$$
\theta_0\notin \hat C
\iff
\left|\frac{\hat\theta-\theta_0}{\widehat{se}(\hat\theta)}\right|>1.96.
$$

## Residual-Variance Consistency and Limit Law

PS2 Q6 关注

$$
s^2=\frac{1}{n-k}\sum_i\hat e_i^2.
$$

若 $E[e_i^2]=\sigma^2$ 且足够矩条件成立，则

$$
s^2\xrightarrow{p}\sigma^2.
$$

:::{admonition} Lemma (Asymptotic distribution of residual variance)
Asymptotic distribution of residual variance
在 iid、$E[e_i^4]<\infty$、$E[X_ie_i]=0$ 且 OLS consistent 下，
$$
\sqrt n(s^2-\sigma^2)\xrightarrow{d}N(0,\operatorname{Var}(e_i^2)).
$$
:::

#### Proof of Lemma (Asymptotic distribution of residual variance)

$$
\hat e_i=e_i-X_i'(\hat\beta-\beta).
$$

$$
\begin{aligned}
\frac1n\sum_i\hat e_i^2 &=\frac1n\sum_i e_i^2 -2(\hat\beta-\beta)'\left(\frac1n\sum_iX_ie_i\right) +(\hat\beta-\beta)'\left(\frac1n\sum_iX_iX_i'\right)(\hat\beta-\beta).
\end{aligned}
$$
Since $\hat\beta-\beta=O_p(n^{-1/2})$ and $n^{-1}\sum_iX_ie_i=O_p(n^{-1/2})$, the last two terms are $o_p(n^{-1/2})$. Also $n/(n-k)\to1$. Thus
$$
\sqrt n(s^2-\sigma^2) =\sqrt n\left(\frac1n\sum_i e_i^2-\sigma^2\right)+o_p(1).
$$
By CLT,

$$
\sqrt n\left(\frac1n\sum_i e_i^2-\sigma^2\right)\xrightarrow{d}N(0,\operatorname{Var}(e_i^2)).
$$

residualization 不影响 $s^2$ 的 first-order limiting distribution。


**Wald Inference and Test Power**

## Hypothesis-Testing Framework

课件把假设检验写成：

$$
H_0:\theta=\theta_0
\qquad\text{vs}\qquad
H_1:\theta\ne\theta_0.
$$

决策由 test statistic $T_n$ 和 critical value $c$ 决定：

$$
\text{reject }H_0\text{ if }T_n>c.
$$

:::{admonition} Definition (Type I error, Type II error, power)
设拒绝域为 $\{T_n>c\}$，则

$$
\text{Type I error}=P(\text{reject }H_0\mid H_0\text{ true}),
$$
$$
\text{Type II error}=P(\text{accept }H_0\mid H_1\text{ true}),
$$
$$
\text{Power}=P(\text{reject }H_0\mid H_1\text{ true}).
$$
显著性水平 $\alpha$ 通常控制 Type I error。

:::

```{raw} html
<div style="width:100%;max-width:1120px;margin:0 auto;">
  <iframe src="/PhD-Course/testerror.html" title="Type I / Type II Error 与 Power 交互图" loading="lazy" style="width:100%;height:700px;border:0;display:block;border-radius:16px;"></iframe>
</div>
```

## t Test for One Restriction

若 scalar parameter $\theta=r(\beta)$，并且

$$
\frac{\hat\theta-\theta}{\widehat{se}(\hat\theta)}\xrightarrow{d}N(0,1),
$$

则双侧 t-test 拒绝规则是

$$
|t_n(\theta_0)|>z_{1-\alpha/2}.
$$

:::{admonition} Definition (p-value)
双侧正态近似下，

$$
p=2\{1-\Phi(|t_n|)\}.
$$
若 $p<\alpha$，拒绝 $H_0$。

:::

![p-value](../../attachment/image-20260525.png)

## Wald Test for Multiple Restrictions

设 $\sqrt n(\hat\beta-\beta)\to_dN(0,V)$，要检验

$$
H_0:r(\beta)=0,
$$

其中 $r(\beta)\in\mathbb R^q$。

:::{admonition} Lemma (Wald statistic)
Under $H_0:r(\beta)=0$, the Wald statistic converges to a $\chi_q^2$ limit.
:::

#### Proof of Lemma (Wald statistic)

$$
W_n=n r(\hat\beta)'[R(\hat\beta)\hat V R(\hat\beta)']^{-1}r(\hat\beta) \xrightarrow{d}\chi_q^2.
$$

$$
R(\beta)=\frac{\partial r(\beta)}{\partial\beta'}, \qquad \sqrt n(r(\hat\beta)-r(\beta))\to_dN(0,RVR').
$$

**连续求解：** Under $H_0$, $r(\beta)=0$, so

$$
\begin{aligned}
\sqrt n r(\hat\beta) &=\sqrt n(r(\hat\beta)-r(\beta))\\
&\xrightarrow{d}N(0,RVR').
\end{aligned}
$$
Standardizing a $q$-dimensional normal vector gives
$$
n r(\hat\beta)'[R\hat V R']^{-1}r(\hat\beta)\to_d\chi_q^2.
$$

**结论：** Wald test 用估计值离 null restriction 的距离衡量证据强弱。

## Matrix Restrictions in Wald Tests

给定

$$
\sqrt n(\hat\beta-\beta)\to_dN(0,\Sigma),
\qquad
\beta=(\beta_1,\beta_2,\beta_3)'.
$$

检验

$$
H_0:\beta_1=\frac12\beta_2,
\qquad
\beta_3=0.
$$

写成

$$
R\beta=0,
\qquad
R=\begin{pmatrix}
1&-1/2&0\\
0&0&1
\end{pmatrix}.
$$

:::{admonition} Lemma (Wald test for PS2 Q4)
For the two linear restrictions in PS2 Q4, the Wald statistic is asymptotically $\chi_2^2$.
:::

#### Proof of Lemma (Wald test for PS2 Q4)

$$
W_n=n(R\hat\beta)'(R\hat\Sigma R')^{-1}(R\hat\beta)\to_d\chi_2^2.
$$

$$
R\hat\beta=\begin{pmatrix}\hat\beta_1-\frac12\hat\beta_2\\ \hat\beta_3\end{pmatrix}.
$$

$$
\sqrt n R(\hat\beta-\beta)\to_dN(0,R\Sigma R').
$$
Under $H_0$, $R\beta=0$, so

$$
\sqrt n R\hat\beta\to_dN(0,R\Sigma R').
$$
Quadratic form yields $\chi_2^2$.

**结论：** Reject $H_0$ at level $\alpha$ if
$$
W_n>\chi^2_{2,1-\alpha}.
$$

## Confidence Intervals and Test Duality

PS2 Q5: parameter of interest $\theta=R'\beta$，where $R$ is $k\times1$。若 $\hat V_{\hat\beta}$ estimates $\operatorname{Var}(\hat\beta\mid X)$，则

$$
\widehat{se}(\hat\theta)=\sqrt{R'\hat V_{\hat\beta}R}.
$$

95% asymptotic CI:

$$
\hat C=\left[R'\hat\beta-1.96\sqrt{R'\hat V_{\hat\beta}R},\; R'\hat\beta+1.96\sqrt{R'\hat V_{\hat\beta}R}\right].
$$

:::{admonition} Lemma (CI-test equivalence)
Rule “reject $H_0:\theta=\theta_0$ iff $\theta_0\notin\hat C$” is asymptotic 5%.
:::

#### Proof of Lemma (CI-test equivalence)

$$
\begin{aligned}
\theta_0\notin\hat C &\iff |R'\hat\beta-\theta_0|>1.96\sqrt{R'\hat V_{\hat\beta}R}\\
&\iff \left|\frac{R'\hat\beta-\theta_0}{\sqrt{R'\hat V_{\hat\beta}R}}\right|>1.96.
\end{aligned}
$$
Under $H_0$, the statistic converges to $N(0,1)$, so rejection probability tends to 5%.

Wald CI 和 two-sided Wald/t test 是同一个检验的两种表达。

## Test Consistency

课件最后强调 power。一个检验 consistent，意味着 fixed alternative 下 rejection probability 趋于 1。

:::{admonition} Lemma (Wald test consistency under fixed alternatives)
若 $r(\beta)\ne0$，则

$$
P(W_n>\chi^2_{q,1-\alpha})\to1.
$$
:::

#### Proof of Lemma (Wald test consistency under fixed alternatives)

当 $r(\beta)\ne0$，
$$
r(\hat\beta)\to_p r(\beta)\ne0, \qquad \hat V\to_p V.
$$
Hence
$$
\begin{aligned}
W_n &=n r(\hat\beta)'[R\hat V R']^{-1}r(\hat\beta)\\
&=n\{r(\beta)'[RVR']^{-1}r(\beta)+o_p(1)\}\\
&\to_p\infty.
\end{aligned}
$$

fixed alternative 下 Wald statistic diverges，因此 power tends to one。
