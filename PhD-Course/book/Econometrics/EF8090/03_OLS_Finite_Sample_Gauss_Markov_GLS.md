# 03 OLS Finite Sample, Gauss-Markov, and GLS

Source: EF8090 slides, PDF pp. 41-54; PS1 Q2, Q9.  
Links: [02_OLS_Algebra_FWL_OVB](02_OLS_Algebra_FWL_OVB) | [04_Asymptotic_Tools](04_Asymptotic_Tools) | [cards/Gauss_Markov](cards/Gauss_Markov) | [cards/GLS_Whitening](cards/GLS_Whitening) | [cards/Heteroskedastic_Robust_Variance](cards/Heteroskedastic_Robust_Variance)

## 1. Finite-sample regression model

课件在 finite-sample 部分考虑条件于 $X$ 的性质。基本模型写作

$$
Y=X\beta+e,
\qquad
E[e\mid X]=0.
$$

若进一步令

$$
\operatorname{Var}(e\mid X)=D=\operatorname{diag}(\sigma_1^2,\ldots,\sigma_n^2),
$$

则允许 heteroskedasticity；若 $D=\sigma^2I$，就是 homoskedastic spherical errors。

:::{admonition} Lemma (Conditional unbiasedness of OLS)
:::

#### Proof of Lemma (Conditional unbiasedness of OLS)

$$ E[\hat\beta\mid X]=\beta. $$

$$ \hat\beta=(X'X)^{-1}X'Y, \qquad Y=X\beta+e, \qquad E[e\mid X]=0. $$

$$ \begin{aligned} E[\hat\beta\mid X] &=E[(X'X)^{-1}X'Y\mid X]\\ &=(X'X)^{-1}X'E[Y\mid X]\\ &=(X'X)^{-1}X'X\beta\\ &=\beta. \end{aligned} $$

**结论：** 在 $E[e\mid X]=0$ 下，OLS 条件无偏，因此也无条件无偏。

:::{admonition} Lemma (Conditional variance of OLS)
:::

#### Proof of Lemma (Conditional variance of OLS)

$$ \operatorname{Var}(\hat\beta\mid X)=(X'X)^{-1}X'DX(X'X)^{-1}. $$

$$ \hat\beta-\beta=(X'X)^{-1}X'e, \qquad E[ee'\mid X]=D. $$

$$ \begin{aligned} \operatorname{Var}(\hat\beta\mid X) &=E[(\hat\beta-\beta)(\hat\beta-\beta)'\mid X]\\ &=E[(X'X)^{-1}X'ee'X(X'X)^{-1}\mid X]\\ &=(X'X)^{-1}X'E[ee'\mid X]X(X'X)^{-1}\\ &=(X'X)^{-1}X'DX(X'X)^{-1}. \end{aligned} $$

**结论：** 若 $D=\sigma^2I$，则 $\operatorname{Var}(\hat\beta\mid X)=\sigma^2(X'X)^{-1}$。

## 2. Gauss-Markov theorem

:::{admonition} Lemma (Gauss-Markov theorem)
Gauss-Markov theorem
**WTS：** 在 $E[e\mid X]=0$、$\operatorname{Var}(e\mid X)=\sigma^2I$ 下，OLS 是 Best Linear Unbiased Estimator。

**联立系统：** 令任意线性估计量为
$$ \tilde\beta=CY. $$
无偏要求
$$ E[CY\mid X]=CX\beta=\beta \quad\Rightarrow\quad CX=I. $$
写
$$ C=(X'X)^{-1}X'+A. $$

**连续求解：** 无偏条件给出
$$ \begin{aligned} CX &=[(X'X)^{-1}X'+A]X\\ &=I+AX. \end{aligned} $$
因而 $AX=0$。方差为
$$ \begin{aligned} \operatorname{Var}(\tilde\beta\mid X) &=\operatorname{Var}(CY\mid X)\\ &=C\sigma^2IC'\\ &=\sigma^2CC'\\ &=\sigma^2[(X'X)^{-1}X'+A][X(X'X)^{-1}+A']\\ &=\sigma^2[(X'X)^{-1}+ (X'X)^{-1}X'A' + AX(X'X)^{-1}+AA']\\ &=\sigma^2[(X'X)^{-1}+AA']. \end{aligned} $$
而 OLS 方差为
$$ \operatorname{Var}(\hat\beta\mid X)=\sigma^2(X'X)^{-1}. $$
因此
$$ \operatorname{Var}(\tilde\beta\mid X)-\operatorname{Var}(\hat\beta\mid X)=\sigma^2AA' $$
是 positive semidefinite。

**结论：** OLS 在所有线性无偏估计量中条件方差最小。

:::

## 3. GLS as OLS after whitening

若 $D\neq \sigma^2I$ 且 $D$ 已知，OLS 仍无偏，但不再 BLUE。课件引入 GLS。

:::{admonition} Definition (GLS estimator)
若 $E[ee'\mid X]=D$ 且 $D$ 正定，GLS 为
$$ \hat\beta_{GLS}=(X'D^{-1}X)^{-1}X'D^{-1}Y. $$

**Lemma:** GLS equals OLS on transformed data
**WTS：** GLS 是把模型 whitening 后的 OLS。

**联立系统：** 令
$$ \tilde Y=D^{-1/2}Y, \qquad \tilde X=D^{-1/2}X, \qquad \tilde e=D^{-1/2}e. $$

**连续求解：** 变换后模型为
$$ \tilde Y=\tilde X\beta+\tilde e, $$
且
$$ \begin{aligned} \operatorname{Var}(\tilde e\mid X) &=D^{-1/2}\operatorname{Var}(e\mid X)D^{-1/2}\\ &=D^{-1/2}DD^{-1/2}\\ &=I. \end{aligned} $$
OLS on transformed data gives
$$ \begin{aligned} \hat\beta &=(\tilde X'\tilde X)^{-1}\tilde X'\tilde Y\\ &=(X'D^{-1}X)^{-1}X'D^{-1}Y. \end{aligned} $$

**结论：** GLS 用 $D^{-1}$ 给 observations 加权，使 transformed errors spherical。

:::

## 4. Error variance and covariance matrix estimation

课件先讨论

$$
\hat\sigma^2=\frac{1}{n}\sum_i\hat e_i^2=\frac{1}{n}\hat e'\hat e.
$$

在 homoskedasticity 下，

$$
E[\hat e'\hat e\mid X]=\sigma^2\operatorname{tr}(M_X)=\sigma^2(n-k).
$$

因此无偏 estimator 是

$$
s^2=\frac{\hat e'\hat e}{n-k}.
$$

:::{admonition} Definition (Heteroskedasticity-robust covariance estimator)
在一般 heteroskedastic case 中，
$$ \widehat{\operatorname{Var}}(\hat\beta\mid X) =(X'X)^{-1}\left(\sum_{i=1}^n \hat e_i^2 X_iX_i'\right)(X'X)^{-1}. $$
这是课件中的 sandwich estimator 的 finite-sample 版本；通常 biased，但 large sample consistent。

:::

若 homoskedasticity 被错误地假设，标准误会错误；但 $\hat\beta$ 本身的无偏性不依赖 homoskedasticity。

## 5. PS1 Q2: compare three estimators

模型为

$$
y_i=\beta x_i+\varepsilon_i,
\qquad
E[\varepsilon_i\mid X]=0,
\qquad
\operatorname{Var}(\varepsilon\mid X)=\sigma^2I.
$$

三个估计量是

$$
\hat\beta=\frac{\sum_i x_iy_i}{\sum_i x_i^2},
\qquad
\tilde\beta=\frac{\bar y}{\bar x},
\qquad
\bar\beta=\frac1n\sum_i\frac{y_i}{x_i}.
$$

:::{admonition} Lemma (Conditional mean and variance comparison)
Conditional mean and variance comparison
**WTS：** 三者都无偏，但 $\hat\beta$ 方差最小。

**联立系统：**
$$ y_i=\beta x_i+\varepsilon_i. $$

**连续求解：**
$$ \begin{aligned} \hat\beta &=\beta+\frac{\sum_i x_i\varepsilon_i}{\sum_i x_i^2},\\ E[\hat\beta\mid X]&=\beta,\\ \operatorname{Var}(\hat\beta\mid X) &=\frac{\sigma^2}{\sum_i x_i^2}. \end{aligned} $$
若 $\bar x\ne0$，
$$ \begin{aligned} \tilde\beta &=\beta+\frac{\bar\varepsilon}{\bar x},\\ E[\tilde\beta\mid X]&=\beta,\\ \operatorname{Var}(\tilde\beta\mid X) &=\frac{\sigma^2}{n\bar x^2} =\frac{\sigma^2 n}{(\sum_i x_i)^2}. \end{aligned} $$
若每个 $x_i\ne0$，
$$ \begin{aligned} \bar\beta &=\beta+\frac1n\sum_i\frac{\varepsilon_i}{x_i},\\ E[\bar\beta\mid X]&=\beta,\\ \operatorname{Var}(\bar\beta\mid X) &=\frac{\sigma^2}{n^2}\sum_i\frac{1}{x_i^2}. \end{aligned} $$
By Cauchy-Schwarz,
$$ \sum_i x_i^2\ge \frac{(\sum_i x_i)^2}{n}, \qquad \left(\sum_i x_i^2\right)\left(\sum_i\frac1{x_i^2}\right)\ge n^2. $$
Hence
$$ \frac{\sigma^2}{\sum_i x_i^2} \le \frac{\sigma^2 n}{(\sum_i x_i)^2}, \qquad \frac{\sigma^2}{\sum_i x_i^2} \le \frac{\sigma^2}{n^2}\sum_i\frac1{x_i^2}. $$

**结论：** 三者条件无偏，但 $\hat\beta$ 是 BLUE，优先使用 OLS。

:::

## 6. PS1 Q9: variance of a coefficient after partialling out

在模型

$$
Y=X\beta+Z\delta+\varepsilon,
\qquad
\varepsilon\mid X,Z\sim N(0,\sigma^2I),
$$

对 $Z$ 的 coefficient 可以用 FWL 写成

$$
\hat\delta=(Z'M_XZ)^{-1}Z'M_XY.
$$

因此

$$
\operatorname{Var}(\hat\delta\mid X,Z)=\sigma^2(Z'M_XZ)^{-1}.
$$

若含截距且 $R_X^2$ 是把 $Z$ 回归到 $X$ 上的 $R^2$，则

$$
Z'M_XZ=TSS_Z(1-R_X^2),
$$

所以

$$
\operatorname{Var}(\hat\delta\mid X,Z)=\frac{\sigma^2}{TSS_Z(1-R_X^2)}.
$$

直觉：$Z$ 与 controls 越共线，$1-R_X^2$ 越小，估计 $\delta$ 越不精确。

