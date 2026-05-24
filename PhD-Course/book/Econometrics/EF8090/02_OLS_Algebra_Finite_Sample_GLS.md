# 02 OLS Algebra, Finite Sample, Gauss-Markov, and GLS

Source: consolidated from 02_OLS_Algebra_FWL_OVB.md and 03_OLS_Finite_Sample_Gauss_Markov_GLS.md.
Links: [01_CEF_and_Linear_Projection](01_CEF_and_Linear_Projection) | [03_Asymptotics_OLS_Inference_Hypothesis_Testing](03_Asymptotics_OLS_Inference_Hypothesis_Testing) | [cards/FWL_Theorem](cards/FWL_Theorem) | [cards/Gauss_Markov](cards/Gauss_Markov) | [cards/GLS_Whitening](cards/GLS_Whitening)

## 02 OLS Algebra, FWL, and Omitted Variable Bias

### 1. OLS as method of moments and least squares

课件先从 projection coefficient 出发：

$$
\beta=E[XX']^{-1}E[XY].
$$

将 population moments 替换为 sample moments 得到

$$
\hat\beta
=\left(\sum_{i=1}^n X_iX_i'\right)^{-1}\left(\sum_{i=1}^n X_iY_i\right)
=(X'X)^{-1}X'Y.
$$

:::{admonition} Definition (Ordinary Least Squares estimator)
给定 $Y\in\mathbb R^n$、$X\in\mathbb R^{n\times k}$ 且 $X'X$ 可逆，OLS 估计量为
$$
\hat\beta=(X'X)^{-1}X'Y.
$$
它等价于最小化 residual sum of squares：
$$
\hat\beta=\arg\min_b (Y-Xb)'(Y-Xb).
$$
:::

:::{admonition} Lemma (OLS normal equations)
$$
X'(Y-X\hat\beta)=0.
$$
:::

#### Proof of Lemma (OLS normal equations)

$$
S(b)=(Y-Xb)'(Y-Xb).
$$

$$
\begin{aligned}
S(b) &=Y'Y-2b'X'Y+b'X'Xb,\\
\frac{\partial S(b)}{\partial b} &=-2X'Y+2X'Xb.
\end{aligned}
$$
At optimum,
$$
\begin{aligned}
0&=-2X'Y+2X'X\hat\beta,\\
X'X\hat\beta&=X'Y,\\
\hat\beta&=(X'X)^{-1}X'Y.
\end{aligned}
$$
Therefore
$$
\begin{aligned}
X'(Y-X\hat\beta) &=X'Y-X'X(X'X)^{-1}X'Y\\
&=0.
\end{aligned}
$$

OLS residual 与每一列 regressors 样本正交。

### 2. Projection matrix and residual maker

:::{admonition} Definition (Projection and annihilator matrices)
$$
P_X=X(X'X)^{-1}X', \qquad M_X=I-P_X.
$$
Fitted values and residuals are
$$
\hat Y=P_XY, \qquad \hat e=M_XY.
$$
:::

:::{admonition} Lemma (Algebra of $P_X$ and $M_X$)
$$
P_X'=P_X, \quad P_X^2=P_X, \quad M_X'=M_X, \quad M_X^2=M_X, \quad P_XX=X, \quad M_XX=0.
$$
:::

#### Proof of Lemma (Algebra of $P_X$ and $M_X$)

$$
P_X=X(X'X)^{-1}X', \qquad M_X=I-P_X.
$$

$$
\begin{aligned}
P_X^2 &=X(X'X)^{-1}X'X(X'X)^{-1}X'\\
&=X(X'X)^{-1}X'\\
&=P_X,\\
M_X^2 &=(I-P_X)^2\\
&=I-2P_X+P_X^2\\
&=I-P_X\\
&=M_X,\\
P_XX &=X(X'X)^{-1}X'X\\
&=X,\\
M_XX &=(I-P_X)X\\
&=X-X\\
&=0.
\end{aligned}
$$

$P_X$ 把向量投影到 $\operatorname{span}(X)$，$M_X$ 消去 $\operatorname{span}(X)$ 的成分。

课件还给出 orthogonal decomposition：

$$
P_XM_X=0,
\qquad
\hat Y'\hat e=Y'P_XM_XY=0,
\qquad
Y'Y=\hat Y'\hat Y+\hat e'\hat e.
$$

若模型含截距，则可写成常见 ANOVA：

$$
TSS=ESS+SSR.
$$

### 3. Frisch-Waugh-Lovell theorem

设分块模型

$$
Y=X_1\beta_1+X_2\beta_2+u,
\qquad
X=[X_1,X_2].
$$

令

$$
P_1=X_1(X_1'X_1)^{-1}X_1',
\qquad
M_1=I-P_1.
$$

:::{admonition} Lemma (FWL theorem)
FWL theorem
全模型中 $X_2$ 的 OLS 系数等于 residualized regression：
$$
\hat\beta_2=(X_2'M_1X_2)^{-1}X_2'M_1Y.
$$
:::

#### Proof of Lemma (FWL theorem)

OLS normal equations are
$$
\begin{cases} X_1'Y=X_1'X_1\hat\beta_1+X_1'X_2\hat\beta_2,\\ X_2'Y=X_2'X_1\hat\beta_1+X_2'X_2\hat\beta_2. \end{cases}
$$

From the first equation,
$$
\begin{aligned}
\hat\beta_1 &=(X_1'X_1)^{-1}X_1'Y-(X_1'X_1)^{-1}X_1'X_2\hat\beta_2.
\end{aligned}
$$
Substitute into the second equation:
$$
\begin{aligned}
X_2'Y &=X_2'X_1(X_1'X_1)^{-1}X_1'Y\\
&\quad -X_2'X_1(X_1'X_1)^{-1}X_1'X_2\hat\beta_2 +X_2'X_2\hat\beta_2,\\
X_2'[I-P_1]Y &=X_2'[I-P_1]X_2\hat\beta_2,\\
X_2'M_1Y &=X_2'M_1X_2\hat\beta_2,\\
\hat\beta_2 &=(X_2'M_1X_2)^{-1}X_2'M_1Y.
\end{aligned}
$$

控制 $X_1$ 后估计 $X_2$ 的作用，等于先从 $Y$ 和 $X_2$ 中剔除 $X_1$ 的线性预测，再对残差做 OLS。

PS1 Q8 还要求证明三个估计量等价：

$$
\hat\beta_2\text{ from }Y\sim X_1,X_2,
\quad
\tilde\beta_2\text{ from }M_1Y\sim M_1X_2,
\quad
\bar\beta_2\text{ from }Y\sim M_1X_2.
$$

原因是 $(M_1X_2)'Y=X_2'M_1Y=(M_1X_2)'M_1Y$。若 $X_1'X_2=0$，则 $M_1X_2=X_2$，因此可以直接回归 $Y$ on $X_2$。

### 4. Omitted variable bias via FWL

课件用 FWL 推出 omitted variable bias。设真实模型为

$$
Y=\beta_0+\beta_1X_1+\beta_2X_2+U,
\qquad
E[U\mid X_1,X_2]=0.
$$

如果遗漏 $X_2$，回归

$$
Y=\beta_0^*+\beta_1^*X_1+U^*,
$$

则在 scalar $X_1$ 情形有：

:::{admonition} Lemma (Scalar omitted variable bias)
:::

#### Proof of Lemma (Scalar omitted variable bias)

$$
\beta_1^*=\beta_1+\frac{\operatorname{Cov}(X_1,X_2)}{\operatorname{Var}(X_1)}\beta_2.
$$

$$
\beta_1^*=\operatorname{Var}(X_1)^{-1}\operatorname{Cov}(X_1,Y), \qquad Y=\beta_0+\beta_1X_1+\beta_2X_2+U.
$$

$$
\begin{aligned}
\operatorname{Cov}(X_1,Y) &=\operatorname{Cov}(X_1,\beta_0+\beta_1X_1+\beta_2X_2+U)\\
&=\beta_1\operatorname{Var}(X_1)+\beta_2\operatorname{Cov}(X_1,X_2)+\operatorname{Cov}(X_1,U)\\
&=\beta_1\operatorname{Var}(X_1)+\beta_2\operatorname{Cov}(X_1,X_2),\\
\beta_1^* &=\frac{\operatorname{Cov}(X_1,Y)}{\operatorname{Var}(X_1)}\\
&=\beta_1+\frac{\operatorname{Cov}(X_1,X_2)}{\operatorname{Var}(X_1)}\beta_2.
\end{aligned}
$$

**结论：** bias 的符号由 $\beta_2$ 和 omitted variable 与 included regressor 的 covariance 共同决定。

### 5. Fixed effects as FWL residualization

PS1 Q8(c) 与 PS6 Q1 都在用同一个 FWL 逻辑。个体固定效应模型：

$$
y_{it}=\alpha_i+x_{it}'\beta+\varepsilon_{it}.
$$

把所有 individual dummies 记为 $D$，则全模型为

$$
Y=D\alpha+X\beta+\varepsilon.
$$

FWL 给出：

$$
\hat\beta=(X'M_DX)^{-1}X'M_DY.
$$

其中 $M_D$ 对每个个体组内去均值：

$$
(M_DY)_{it}=y_{it}-\bar y_i,
\qquad
(M_DX)_{it}=x_{it}-\bar x_i.
$$

因此 fixed effects OLS 等价于回归 demeaned outcome on demeaned covariates。

:::{admonition} Lemma (Group demeaning solves dummy saturation)
Group demeaning solves dummy saturation
若 $F_i\in\{1,\ldots,K\}$，回归 $Y$ on $X$ and group dummies 的 $X$ 系数等于回归 $\dot Y_i$ on $\dot X_i$，其中
$$
\dot Y_i=Y_i-\bar Y_{F_i}, \qquad \dot X_i=X_i-\bar X_{F_i}.
$$
:::

#### Proof of Lemma (Group demeaning solves dummy saturation)

令 $D$ 为 group dummy matrix，$M_D=I-D(D'D)^{-1}D'$。

$$
\begin{aligned}
\hat\beta &=(X'M_DX)^{-1}X'M_DY\\
&=\left(\sum_i \dot X_i\dot X_i'\right)^{-1}\left(\sum_i \dot X_i\dot Y_i\right).
\end{aligned}
$$

dummy controls 本质上就是把变量投影到 dummy span 的正交补上。

### 6. Perfect collinearity

PS1 Q6 说明：若 $X_3=\alpha_1X_1+\alpha_2X_2$，则 $E[XX']$ 不可逆，$\beta$ 不唯一。不要用 generalized inverse；直接把线性函数写成

$$
X'\beta
=X_1(\beta_1+\alpha_1\beta_3)+X_2(\beta_2+\alpha_2\beta_3).
$$

只有组合系数

$$
\gamma_1=\beta_1+\alpha_1\beta_3,
\qquad
\gamma_2=\beta_2+\alpha_2\beta_3
$$

可识别。最佳线性预测应写成 $Y$ on $(X_1,X_2)$ 的投影，而不是试图估计唯一的 $(\beta_1,\beta_2,\beta_3)$。


## 03 OLS Finite Sample, Gauss-Markov, and GLS

### 1. Finite-sample regression model

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

$$
E[\hat\beta\mid X]=\beta.
$$

$$
\hat\beta=(X'X)^{-1}X'Y, \qquad Y=X\beta+e, \qquad E[e\mid X]=0.
$$

$$
\begin{aligned}
E[\hat\beta\mid X] &=E[(X'X)^{-1}X'Y\mid X]\\
&=(X'X)^{-1}X'E[Y\mid X]\\
&=(X'X)^{-1}X'X\beta\\
&=\beta.
\end{aligned}
$$

**结论：** 在 $E[e\mid X]=0$ 下，OLS 条件无偏，因此也无条件无偏。

:::{admonition} Lemma (Conditional variance of OLS)
:::

#### Proof of Lemma (Conditional variance of OLS)

$$
\operatorname{Var}(\hat\beta\mid X)=(X'X)^{-1}X'DX(X'X)^{-1}.
$$

$$
\hat\beta-\beta=(X'X)^{-1}X'e, \qquad E[ee'\mid X]=D.
$$

$$
\begin{aligned}
\operatorname{Var}(\hat\beta\mid X) &=E[(\hat\beta-\beta)(\hat\beta-\beta)'\mid X]\\
&=E[(X'X)^{-1}X'ee'X(X'X)^{-1}\mid X]\\
&=(X'X)^{-1}X'E[ee'\mid X]X(X'X)^{-1}\\
&=(X'X)^{-1}X'DX(X'X)^{-1}.
\end{aligned}
$$

**结论：** 若 $D=\sigma^2I$，则 $\operatorname{Var}(\hat\beta\mid X)=\sigma^2(X'X)^{-1}$。

### 2. Gauss-Markov theorem

:::{admonition} Lemma (Gauss-Markov theorem)
Gauss-Markov theorem
在 $E[e\mid X]=0$、$\operatorname{Var}(e\mid X)=\sigma^2I$ 下，OLS 是 Best Linear Unbiased Estimator。
:::

#### Proof of Lemma (Gauss-Markov theorem)

令任意线性估计量为
$$
\tilde\beta=CY.
$$
无偏要求
$$
E[CY\mid X]=CX\beta=\beta \quad\Rightarrow\quad CX=I.
$$
写
$$
C=(X'X)^{-1}X'+A.
$$

无偏条件给出
$$
\begin{aligned}
CX &=[(X'X)^{-1}X'+A]X\\
&=I+AX.
\end{aligned}
$$
因而 $AX=0$。方差为
$$
\begin{aligned}
\operatorname{Var}(\tilde\beta\mid X) &=\operatorname{Var}(CY\mid X)\\
&=C\sigma^2IC'\\
&=\sigma^2CC'\\
&=\sigma^2[(X'X)^{-1}X'+A][X(X'X)^{-1}+A']\\
&=\sigma^2[(X'X)^{-1}+ (X'X)^{-1}X'A' + AX(X'X)^{-1}+AA']\\
&=\sigma^2[(X'X)^{-1}+AA'].
\end{aligned}
$$
而 OLS 方差为
$$
\operatorname{Var}(\hat\beta\mid X)=\sigma^2(X'X)^{-1}.
$$
因此
$$
\operatorname{Var}(\tilde\beta\mid X)-\operatorname{Var}(\hat\beta\mid X)=\sigma^2AA'
$$
是 positive semidefinite。

OLS 在所有线性无偏估计量中条件方差最小。

### 3. GLS as OLS after whitening

若 $D\neq \sigma^2I$ 且 $D$ 已知，OLS 仍无偏，但不再 BLUE。课件引入 GLS。

:::{admonition} Definition (GLS estimator)
若 $E[ee'\mid X]=D$ 且 $D$ 正定，GLS 为
$$
\hat\beta_{GLS}=(X'D^{-1}X)^{-1}X'D^{-1}Y.
$$
:::

:::{admonition} Lemma (GLS equals OLS on transformed data)
GLS 是把模型 whitening 后的 OLS。
:::

#### Proof of Lemma (GLS equals OLS on transformed data)

令
$$
\tilde Y=D^{-1/2}Y, \qquad \tilde X=D^{-1/2}X, \qquad \tilde e=D^{-1/2}e.
$$

变换后模型为
$$
\tilde Y=\tilde X\beta+\tilde e,
$$
且
$$
\begin{aligned}
\operatorname{Var}(\tilde e\mid X) &=D^{-1/2}\operatorname{Var}(e\mid X)D^{-1/2}\\
&=D^{-1/2}DD^{-1/2}\\
&=I.
\end{aligned}
$$
OLS on transformed data gives
$$
\begin{aligned}
\hat\beta &=(\tilde X'\tilde X)^{-1}\tilde X'\tilde Y\\
&=(X'D^{-1}X)^{-1}X'D^{-1}Y.
\end{aligned}
$$

GLS 用 $D^{-1}$ 给 observations 加权，使 transformed errors spherical。

### 4. Error variance and covariance matrix estimation

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
$$
\widehat{\operatorname{Var}}(\hat\beta\mid X) =(X'X)^{-1}\left(\sum_{i=1}^n \hat e_i^2 X_iX_i'\right)(X'X)^{-1}.
$$
这是课件中的 sandwich estimator 的 finite-sample 版本；通常 biased，但 large sample consistent。

:::

若 homoskedasticity 被错误地假设，标准误会错误；但 $\hat\beta$ 本身的无偏性不依赖 homoskedasticity。

### 5. PS1 Q2: compare three estimators

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
三者都无偏，但 $\hat\beta$ 方差最小。
:::

#### Proof of Lemma (Conditional mean and variance comparison)

$$
y_i=\beta x_i+\varepsilon_i.
$$

$$
\begin{aligned}
\hat\beta &=\beta+\frac{\sum_i x_i\varepsilon_i}{\sum_i x_i^2},\\
E[\hat\beta\mid X]&=\beta,\\
\operatorname{Var}(\hat\beta\mid X) &=\frac{\sigma^2}{\sum_i x_i^2}.
\end{aligned}
$$
若 $\bar x\ne0$，
$$
\begin{aligned}
\tilde\beta &=\beta+\frac{\bar\varepsilon}{\bar x},\\
E[\tilde\beta\mid X]&=\beta,\\
\operatorname{Var}(\tilde\beta\mid X) &=\frac{\sigma^2}{n\bar x^2} =\frac{\sigma^2 n}{(\sum_i x_i)^2}.
\end{aligned}
$$
若每个 $x_i\ne0$，
$$
\begin{aligned}
\bar\beta &=\beta+\frac1n\sum_i\frac{\varepsilon_i}{x_i},\\
E[\bar\beta\mid X]&=\beta,\\
\operatorname{Var}(\bar\beta\mid X) &=\frac{\sigma^2}{n^2}\sum_i\frac{1}{x_i^2}.
\end{aligned}
$$
By Cauchy-Schwarz,
$$
\sum_i x_i^2\ge \frac{(\sum_i x_i)^2}{n}, \qquad \left(\sum_i x_i^2\right)\left(\sum_i\frac1{x_i^2}\right)\ge n^2.
$$
Hence
$$
\frac{\sigma^2}{\sum_i x_i^2} \le \frac{\sigma^2 n}{(\sum_i x_i)^2}, \qquad \frac{\sigma^2}{\sum_i x_i^2} \le \frac{\sigma^2}{n^2}\sum_i\frac1{x_i^2}.
$$

三者条件无偏，但 $\hat\beta$ 是 BLUE，优先使用 OLS。

### 6. PS1 Q9: variance of a coefficient after partialling out

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
