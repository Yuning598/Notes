# 05 OLS Asymptotics and Robust Inference

Source: EF8090 slides, PDF pp. 86-114; PS2 Q5-Q6.  
Links: [04_Asymptotic_Tools](04_Asymptotic_Tools) | [06_Hypothesis_Testing](06_Hypothesis_Testing) | [cards/Heteroskedastic_Robust_Variance](cards/Heteroskedastic_Robust_Variance) | [cards/Delta_Method](cards/Delta_Method) | [cards/Wald_Test_Matrix_R](cards/Wald_Test_Matrix_R)

## 1. Linear projection model and assumptions

课件在渐近 OLS 部分使用 linear projection model：

$$
Y_i=X_i'\beta+e_i,
\qquad
E[X_ie_i]=0.
$$

如果有更强的 regression model $E[e_i\mid X_i]=0$，则自动推出 $E[X_ie_i]=0$。核心 assumptions 是：iid、二阶矩存在、$Q=E[X_iX_i']$ 正定。

:::{admonition} Definition (Population matrices)
$$ Q=E[X_iX_i'], \qquad \Omega=E[e_i^2X_iX_i'], \qquad V=Q^{-1}\Omega Q^{-1}. $$

:::

## 2. Consistency of OLS

:::{admonition} Lemma
OLS consistency
**WTS：**
$$ \hat\beta\xrightarrow{p}\beta. $$

**联立系统：**
$$ \hat\beta=(X'X)^{-1}X'Y, \qquad Y_i=X_i'\beta+e_i. $$
Define
$$ \hat Q=\frac1n\sum_iX_iX_i', \qquad \hat g=\frac1n\sum_iX_iY_i. $$

**连续求解：**
$$ \begin{aligned} \hat\beta &=\hat Q^{-1}\hat g\\ &=\hat Q^{-1}\left(\frac1n\sum_iX_i(X_i'\beta+e_i)\right)\\ &=\hat Q^{-1}\left(\hat Q\beta+\frac1n\sum_iX_ie_i\right)\\ &=\beta+\hat Q^{-1}\left(\frac1n\sum_iX_ie_i\right). \end{aligned} $$
By WLLN,
$$ \hat Q\xrightarrow{p}Q, \qquad \frac1n\sum_iX_ie_i\xrightarrow{p}E[X_ie_i]=0. $$
By CMT,
$$ \hat Q^{-1}\xrightarrow{p}Q^{-1}. $$
Therefore
$$ \hat\beta-\beta\xrightarrow{p}Q^{-1}0=0. $$

**结论：** OLS consistency 来自 sample moments 收敛和正交条件。

:::

## 3. Asymptotic normality

:::{admonition} Lemma
Asymptotic distribution of OLS
**WTS：**
$$ \sqrt n(\hat\beta-\beta)\xrightarrow{d}N(0,Q^{-1}\Omega Q^{-1}). $$

**联立系统：**
$$ \hat\beta-\beta=\hat Q^{-1}\left(\frac1n\sum_iX_ie_i\right). $$

**连续求解：** Multiply by $\sqrt n$：
$$ \begin{aligned} \sqrt n(\hat\beta-\beta) &=\hat Q^{-1}\left(\frac1{\sqrt n}\sum_iX_ie_i\right). \end{aligned} $$
By multivariate CLT,
$$ \frac1{\sqrt n}\sum_iX_ie_i\xrightarrow{d}N(0,\Omega). $$
By Slutsky,
$$ \begin{aligned} \sqrt n(\hat\beta-\beta) &\xrightarrow{d}Q^{-1}N(0,\Omega)\\ &=N(0,Q^{-1}\Omega Q^{-1}). \end{aligned} $$

**结论：** heteroskedasticity changes $\Omega$，因此改变标准误；但不改变 consistency。

:::

若 homoskedasticity holds, $E[e_i^2\mid X_i]=\sigma^2$，则

$$
\Omega=E[e_i^2X_iX_i']=E[E[e_i^2\mid X_i]X_iX_i']=\sigma^2Q,
$$

从而

$$
V=Q^{-1}\Omega Q^{-1}=\sigma^2Q^{-1}.
$$

## 4. Covariance matrix estimation

课件讨论估计 $V$。一般 heteroskedastic case：

$$
\hat Q=\frac1n\sum_iX_iX_i',
\qquad
\hat\Omega=\frac1n\sum_i\hat e_i^2X_iX_i',
\qquad
\hat V=\hat Q^{-1}\hat\Omega\hat Q^{-1}.
$$

:::{admonition} Lemma
Consistency of robust covariance estimator
**WTS：**
$$ \hat V\xrightarrow{p}V. $$

**联立系统：**
$$ \hat e_i=e_i-X_i'(\hat\beta-\beta). $$

**连续求解：**
$$ \begin{aligned} \hat e_i^2-e_i^2 &=(e_i-X_i'(\hat\beta-\beta))^2-e_i^2\\ &=-2e_iX_i'(\hat\beta-\beta)+(X_i'(\hat\beta-\beta))^2. \end{aligned} $$
Averaging after multiplying by $X_iX_i'$, the first term is $o_p(1)$ because $\hat\beta-\beta=o_p(1)$ and moments are bounded; the second term is also $o_p(1)$. Therefore
$$ \hat\Omega =\frac1n\sum_ie_i^2X_iX_i'+o_p(1) \xrightarrow{p}\Omega. $$
Since $\hat Q^{-1}\to_pQ^{-1}$,
$$ \hat V=\hat Q^{-1}\hat\Omega\hat Q^{-1}\xrightarrow{p}Q^{-1}\Omega Q^{-1}. $$

**结论：** 用 residual 替换 true error 的误差在 large sample 下消失。

:::

若错误使用 homoskedastic covariance $\hat\sigma^2\hat Q^{-1}$ 而真实 heteroskedastic，则 t/Wald 的 limiting distribution 不正确。这是课件第 107 页附近的重点。

## 5. Functions of OLS and standard errors

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

## 6. t-statistic and confidence interval

:::{admonition} Definition (Asymptotic t-statistic)
对 scalar $\theta=r(\beta)$，
$$ t_n(\theta_0)=\frac{r(\hat\beta)-\theta_0}{\widehat{\operatorname{se}}(r(\hat\beta))}. $$
若 $H_0:\theta=\theta_0$，则
$$ t_n(\theta_0)\xrightarrow{d}N(0,1). $$

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

## 7. Residual variance consistency and limiting distribution

PS2 Q6 关注

$$
s^2=\frac{1}{n-k}\sum_i\hat e_i^2.
$$

若 $E[e_i^2]=\sigma^2$ 且足够矩条件成立，则

$$
s^2\xrightarrow{p}\sigma^2.
$$

:::{admonition} Lemma
Asymptotic distribution of residual variance
**WTS：** 在 iid、$E[e_i^4]<\infty$、$E[X_ie_i]=0$ 且 OLS consistent 下，
$$ \sqrt n(s^2-\sigma^2)\xrightarrow{d}N(0,\operatorname{Var}(e_i^2)). $$

**联立系统：**
$$ \hat e_i=e_i-X_i'(\hat\beta-\beta). $$

**连续求解：**
$$ \begin{aligned} \frac1n\sum_i\hat e_i^2 &=\frac1n\sum_i e_i^2 -2(\hat\beta-\beta)'\left(\frac1n\sum_iX_ie_i\right) +(\hat\beta-\beta)'\left(\frac1n\sum_iX_iX_i'\right)(\hat\beta-\beta). \end{aligned} $$
Since $\hat\beta-\beta=O_p(n^{-1/2})$ and $n^{-1}\sum_iX_ie_i=O_p(n^{-1/2})$, the last two terms are $o_p(n^{-1/2})$. Also $n/(n-k)\to1$. Thus
$$ \sqrt n(s^2-\sigma^2) =\sqrt n\left(\frac1n\sum_i e_i^2-\sigma^2\right)+o_p(1). $$
By CLT,
$$ \sqrt n\left(\frac1n\sum_i e_i^2-\sigma^2\right)\xrightarrow{d}N(0,\operatorname{Var}(e_i^2)). $$

**结论：** residualization 不影响 $s^2$ 的 first-order limiting distribution。

:::

