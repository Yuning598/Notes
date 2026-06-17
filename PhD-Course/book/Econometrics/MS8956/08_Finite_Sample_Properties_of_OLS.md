# 08 Finite-Sample OLS, Exact Tests, and GLS

**Roadmap**

1. The Classical Linear Regression Model  
2. The Algebra of Least Squares  
3. Finite-Sample Properties of OLS  
4. Hypothesis Testing Under Normality  
5. Relation to Maximum Likelihood  
6. Generalized Least Squares (GLS)  
7. Application: Returns to Scale in Electricity Supply

---

**Classical Linear Regression Model**

## Linear Regression Matrix Form

:::{admonition} Definition (Assumption 1.1 (Linearity))

$$
y_i = \omega_1 x_{i1} + \omega_2 x_{i2} + \cdots + \omega_K x_{iK} + \varepsilon_i
$$

:::

(assumption-1-1)=

给定样本 $\{(y_i,\mathbf{x}_i)\}_{i=1}^n$，其中

$$
\mathbf{x}_i=\begin{bmatrix}x_{i1}\\ \vdots\\ x_{iK}\end{bmatrix},
\qquad
\boldsymbol{\omega}=\begin{bmatrix}\omega_1\\ \vdots\\ \omega_K\end{bmatrix},
$$

线性模型写为：

$$
y_i = \mathbf{x}_i' \boldsymbol{\omega} + \varepsilon_i
\quad (i=1,\dots,n)
$$

堆叠后得到

$$
\mathbf{y} = \mathbf{X}\boldsymbol{\omega} + \boldsymbol{\varepsilon}.
$$

:::{admonition} Note
Chapter 1 Examples
- Consumption function: $CON_i=\omega_1+\omega_2YD_i+\varepsilon_i$.
- Wage function (simplified): $LW_i=\omega_1+\omega_2S_i+\omega_3EXPR_i+\varepsilon_i$.
两者都属于同一线性回归框架。

:::

## Strict Exogeneity

:::{admonition} Definition (Assumption 1.2 (Strict Exogeneity))

$$
E(\varepsilon_i\mid \mathbf{X})=0
\quad (i=1,\dots,n)
$$
蕴含 $E(\varepsilon_i)=0$ 与所有样本点上的正交性：

$$
E(x_{jk}\varepsilon_i)=0
\quad \forall i,j,k.
$$

:::

(assumption-1-2)=

在该假设下还有

$$
E(\varepsilon_i)=0,\quad i=1,\dots,n.
$$

## Rank, Homoskedasticity, and Normality

:::{admonition} Definition (Assumption 1.3 (No Multicollinearity))
$\text{rank}(\mathbf{X})=K$ with probability 1.

**Definition (Assumption 1.4 (Spherical Error Variance)):**

$$
E(\varepsilon_i^2\mid \mathbf{X})=\sigma^2>0
\quad (i=1,\dots,n),
$$

$$
E(\varepsilon_i\varepsilon_j\mid \mathbf{X})=0
\quad (i\neq j).
$$
等价矩阵写法：

$$
E(\boldsymbol{\varepsilon}\boldsymbol{\varepsilon}'\mid \mathbf{X})
=\sigma^2\mathbf{I}_n.
$$

:::

(assumption-1-3-1-4)=

:::{admonition} Note
Time-Series Reminder
在时间序列里，严格外生性通常很强。例如 AR(1) 中即使 $E(y_{i-1}\varepsilon_i)=0$，也不代表自动满足更强的全样本严格外生性。

:::

以 AR(1) 为例：

$$
y_i=\omega y_{i-1}+\varepsilon_i,
$$

即使存在某些时点的当期正交，也不自动推出对整段样本路径的 strict exogeneity。

## Random Sampling vs Fixed Regressors

在 i.i.d. random sample 设定中：

$$
E(\varepsilon_i\mid \mathbf{X})=E(\varepsilon_i\mid \mathbf{x}_i),\quad
E(\varepsilon_i^2\mid \mathbf{X})=E(\varepsilon_i^2\mid \mathbf{x}_i),
$$

且对 $i\neq j$：

$$
E(\varepsilon_i\varepsilon_j\mid \mathbf{X})
=E(\varepsilon_i\mid \mathbf{x}_i)\,E(\varepsilon_j\mid \mathbf{x}_j).
$$

再结合外生性可得

$$
E(\varepsilon_i\varepsilon_j\mid \mathbf{X})=0\quad(i\neq j).
$$

在 fixed-regressor 设定中，$\mathbf{X}$ 视为非随机，常写为：

$$
E(\varepsilon_i)=0\quad (i=1,\dots,n),
$$

$$
E(\varepsilon_i^2)=\sigma^2,\quad E(\varepsilon_i\varepsilon_j)=0\ (i\neq j).
$$

两种写法在 Chapter 1 都可推导 OLS 有限样本性质；区别在于条件化对象（随机 $\mathbf{X}$ vs 固定 $\mathbf{X}$）。

---

**Least-Squares Algebra**

## OLS as SSR Minimization

对任意候选值 $\tilde{\boldsymbol{\omega}}$，定义

$$
SSR(\tilde{\boldsymbol{\omega}}) =
(\mathbf{y}-\mathbf{X}\tilde{\boldsymbol{\omega}})'(\mathbf{y}-\mathbf{X}\tilde{\boldsymbol{\omega}}).
$$

最小化一阶条件给出 normal equations：

$$
\mathbf{X}'\mathbf{X}\,\mathbf{b}=\mathbf{X}'\mathbf{y}.
$$

等价地，

$$
\mathbf{X}'\mathbf{e}=\mathbf{0}.
$$

若 Assumption 1.3 成立，则

$$
\mathbf{b}=(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{y}.
$$

并有两种常用分解：

$$
\mathbf{b} =
\boldsymbol{\omega}
+
(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\boldsymbol{\varepsilon},
$$

$$
\mathbf{e} =
\mathbf{M}\boldsymbol{\varepsilon}.
$$

:::{admonition} Note
Derivation Sketch (Normal Equations and OLS Form)

$$
\begin{aligned}
SSR(\tilde{\omega})
&= (\mathbf{y}-\mathbf{X}\tilde{\omega})'(\mathbf{y}-\mathbf{X}\tilde{\omega})\\
&= \mathbf{y}'\mathbf{y}-2\tilde{\omega}'\mathbf{X}'\mathbf{y}+\tilde{\omega}'\mathbf{X}'\mathbf{X}\tilde{\omega},
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial SSR(\tilde{\omega})}{\partial \tilde{\omega}}
&= -2\mathbf{X}'\mathbf{y}+2\mathbf{X}'\mathbf{X}\tilde{\omega}=0\\
&\Longrightarrow \mathbf{X}'\mathbf{X}\tilde{\omega}=\mathbf{X}'\mathbf{y}.
\end{aligned}
$$
若 $\mathrm{rank}(\mathbf{X})=K$，则

$$
\begin{aligned}
\mathbf{b}
&= (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{y}\\
&= (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'(\mathbf{X}\omega+\varepsilon)\\
&= \omega+(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\varepsilon.
\end{aligned}
$$

:::

## Projection and Residual Algebra

$$
\hat{\mathbf{y}}=\mathbf{X}\mathbf{b},\quad
\mathbf{e}=\mathbf{y}-\hat{\mathbf{y}}.
$$

定义 projection / annihilator:

$$
\mathbf{P}\equiv \mathbf{X}(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}',\quad
\mathbf{M}\equiv \mathbf{I}_n-\mathbf{P}.
$$

且

$$
\hat{\mathbf{y}}=\mathbf{P}\mathbf{y},\qquad
\mathbf{e}=\mathbf{M}\mathbf{y}.
$$

采样误差满足：

$$
\mathbf{b}-\boldsymbol{\omega} =
(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\boldsymbol{\varepsilon}.
$$

未中心化拟合优度（uncentered $R^2$）定义为

$$
R^2_{uc} =
1-\frac{\mathbf{e}'\mathbf{e}}{\mathbf{y}'\mathbf{y}} =
\frac{\hat{\mathbf{y}}'\hat{\mathbf{y}}}{\mathbf{y}'\mathbf{y}}.
$$

常用拟合指标（包含截距时）：

$$
R^2 = 1-\frac{\sum_{i=1}^n e_i^2}{\sum_{i=1}^n (y_i-\bar y)^2}.
$$

:::{admonition} Note
Influence (leave-one-out)
记去掉第 $i$ 个观测后的估计量为 $\mathbf{b}^{(i)}$，则

$$
\mathbf{b}^{(i)}-\mathbf{b} =
-\frac{1}{1-p_i}(\mathbf{X}'\mathbf{X})^{-1}\mathbf{x}_i e_i,
$$
其中

$$
p_i=\mathbf{x}_i'(\mathbf{X}'\mathbf{X})^{-1}\mathbf{x}_i,
$$
是 projection matrix 对角元（leverage）。
在影响度度量中还常配合标准化量（如 studentized residual / DFITS / Cook’s distance）进行异常点诊断。

:::

---

**Finite-Sample Properties of OLS**

:::{admonition} Proposition: Proposition 1.1 (Finite-Sample Properties of OLS)
在 Assumptions 1.1-1.3 下：

$$
E(\mathbf{b}\mid \mathbf{X})=\boldsymbol{\omega}
$$
在 Assumptions 1.1-1.4 下：

$$
\text{Var}(\mathbf{b}\mid \mathbf{X})=\sigma^2(\mathbf{X}'\mathbf{X})^{-1}.
$$
且在所有线性无偏估计量中，$\mathbf{b}$ 方差最小（Gauss-Markov / BLUE）。

:::

(prop-1-1)=

:::{admonition} Note
Proof Sketch for Proposition 1.1
由 $(1.2.6a)$：

$$
\begin{aligned}
E(\mathbf{b}\mid \mathbf{X})
&= E\!\left[\omega+(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\varepsilon\mid \mathbf{X}\right]\\
&= \omega+(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'E(\varepsilon\mid \mathbf{X})\\
&= \omega.
\end{aligned}
$$
在同方差无自相关下：

$$
\begin{aligned}
\mathrm{Var}(\mathbf{b}\mid \mathbf{X})
&= \mathrm{Var}\!\left((\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\varepsilon\mid\mathbf{X}\right)\\
&= (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathrm{Var}(\varepsilon\mid\mathbf{X})\mathbf{X}(\mathbf{X}'\mathbf{X})^{-1}\\
&= (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'(\sigma^2\mathbf{I})\mathbf{X}(\mathbf{X}'\mathbf{X})^{-1}\\
&= \sigma^2(\mathbf{X}'\mathbf{X})^{-1}.
\end{aligned}
$$

:::

定义

$$
s^2 \equiv \frac{\mathbf{e}'\mathbf{e}}{n-K}.
$$

:::{admonition} Proposition: Proposition 1.2 (Unbiasedness of $s^2$)
在 Assumptions 1.1-1.4 且 $n>K$ 下：

$$
E(s^2\mid \mathbf{X})=\sigma^2.
$$
因而

$$
\widehat{\text{Var}}(\mathbf{b}\mid \mathbf{X})=s^2(\mathbf{X}'\mathbf{X})^{-1}.
$$

:::

(prop-1-2)=

:::{admonition} Note
Proof Sketch for Proposition 1.2
记 $\mathbf{M}=\mathbf{I}-\mathbf{P}$，且 $\mathbf{e}=\mathbf{M}\varepsilon$：

$$
\begin{aligned}
E(\mathbf{e}'\mathbf{e}\mid\mathbf{X})
&= E(\varepsilon'\mathbf{M}\varepsilon\mid\mathbf{X})\\
&= \mathrm{tr}\!\left(\mathbf{M}E(\varepsilon\varepsilon'\mid\mathbf{X})\right)\\
&= \sigma^2\mathrm{tr}(\mathbf{M})\\
&= \sigma^2(n-K).
\end{aligned}
$$
因此

$$
\begin{aligned}
E(s^2\mid\mathbf{X})
&= E\!\left(\frac{\mathbf{e}'\mathbf{e}}{n-K}\middle|\mathbf{X}\right)
= \sigma^2.
\end{aligned}
$$

:::

---

**Exact Tests under Normality**

:::{admonition} Definition (Assumption 1.5 (Normality))
$\boldsymbol{\varepsilon}\mid \mathbf{X}$ jointly normal, i.e.

$$
\boldsymbol{\varepsilon}\mid \mathbf{X}
\sim N(\mathbf{0},\sigma^2\mathbf{I}_n).
$$
因而

$$
\mathbf{b}\mid\mathbf{X}
\sim
N\!\left(\boldsymbol{\omega},
\sigma^2(\mathbf{X}'\mathbf{X})^{-1}\right).
$$

:::

已知 $\sigma^2$ 时可先定义

$$
z_k \equiv
\frac{b_k-\omega_k^0}{\sqrt{\sigma^2[(\mathbf{X}'\mathbf{X})^{-1}]_{kk}}}
\sim N(0,1)
\quad\text{under }H_0.
$$

其显著性检验等价形式可写为

$$
|z_k|>z_{\alpha/2}
\quad \Longleftrightarrow\quad
\text{reject }H_0.
$$

在 Assumptions 1.1-1.5 下，单参数检验：

$$
t_k \equiv
\frac{b_k-\omega_k^0}{SE(b_k)}
\sim t(n-K)
\quad\text{under }H_0:\omega_k=\omega_k^0.
$$

:::{admonition} Proposition: Proposition 1.3 (Distribution of the t-ratio)
在 Assumptions 1.1-1.5 下，若 $H_0:\omega_k=\omega_k^0$ 成立，则 `(1.4.5)` 的统计量服从 $t(n-K)$。

:::

(prop-1-3)=
:::{admonition} Note
Proof Sketch for Proposition 1.3
在 $H_0:\omega_k=\omega_k^0$ 下，

$$
\begin{aligned}
b_k-\omega_k^0
&= c_k'\varepsilon,\quad
c_k'=\mathbf{e}_k'(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}',\\
b_k-\omega_k^0\mid X
&\sim N\!\left(0,\sigma^2[(X'X)^{-1}]_{kk}\right),
\end{aligned}
$$
因而

$$
\begin{aligned}
Z_k
&=\frac{b_k-\omega_k^0}{\sigma\sqrt{[(X'X)^{-1}]_{kk}}}
\sim N(0,1).
\end{aligned}
$$
又由正态线性模型性质：

$$
\begin{aligned}
\frac{(n-K)s^2}{\sigma^2}
&=\frac{e'e}{\sigma^2}\sim \chi^2_{n-K},
\end{aligned}
$$
且与 $Z_k$ 独立，所以

$$
\begin{aligned}
t_k
&=\frac{Z_k}{\sqrt{\chi^2_{n-K}/(n-K)}}
\sim t_{n-K}.
\end{aligned}
$$

:::

置信区间：

$$
b_k \pm t_{\alpha/2}(n-K)\,SE(b_k).
$$

决策规则：若 $|t_k|>t_{\alpha/2}(n-K)$ 则拒绝 $H_0$；或使用 p-value：

$$
p=2\Pr\!\left(t_{n-K}>|t_k|\right),
$$

当 $p<\alpha$ 时拒绝 $H_0$。

线性约束检验：

$$
H_0:\mathbf{R}\boldsymbol{\omega}=\mathbf{r}.
$$

Wald/F 统计量：

$$
F=
\frac{(\mathbf{R}\mathbf{b}-\mathbf{r})'
\left[\mathbf{R}(\mathbf{X}'\mathbf{X})^{-1}\mathbf{R}'\right]^{-1}
(\mathbf{R}\mathbf{b}-\mathbf{r})/\#r}{s^2}
\sim F(\#r,n-K).
$$

等价地也可写成 restricted / unrestricted SSR 的形式：

$$
F=\frac{(SSR_R-SSR_U)/\#r}{SSR_U/(n-K)}.
$$

其中

$$
SSR_R-SSR_U =
(\mathbf{R}\mathbf{b}-\mathbf{r})'
\left[\mathbf{R}(\mathbf{X}'\mathbf{X})^{-1}\mathbf{R}'\right]^{-1}
(\mathbf{R}\mathbf{b}-\mathbf{r}).
$$

:::{admonition} Proposition: Proposition 1.4 (Distribution of the F-ratio)
在 Assumptions 1.1-1.5 下，若 $\text{rank}(\mathbf{R})=\#r$，则 `(1.4.9)` 的统计量在 $H_0$ 下服从 $F(\#r,n-K)$。

:::

(prop-1-4)=
:::{admonition} Note
Proof Sketch for Proposition 1.4
在 $H_0:R\omega=r$ 下，

$$
\begin{aligned}
Rb-r
&=R(b-\omega)
\sim N\!\left(0,\sigma^2R(X'X)^{-1}R'\right).
\end{aligned}
$$
设

$$
\begin{aligned}
W
&=\frac{(Rb-r)'[R(X'X)^{-1}R']^{-1}(Rb-r)}{\sigma^2}
\sim \chi_q^2,\quad q=\#r.
\end{aligned}
$$
同时

$$
\begin{aligned}
U
&=\frac{(n-K)s^2}{\sigma^2}
=\frac{e'e}{\sigma^2}\sim\chi^2_{n-K},
\end{aligned}
$$
且 $W\perp U$，故

$$
\begin{aligned}
F
&=\frac{W/q}{U/(n-K)}
\sim F(q,n-K).
\end{aligned}
$$

**Note:** t versus F
当检验只有一个线性限制（$\#r=1$）时，$F=t^2$；多重限制下不能用“逐个 t 检验都不拒绝”替代联合 F 检验。

单一限制 $H_0:c'\omega=r$ 时：

$$
\begin{aligned}
t
&= \frac{c'\mathbf{b}-r}{s\sqrt{c'(\mathbf{X}'\mathbf{X})^{-1}c}},\\
F
&= \frac{(c'\mathbf{b}-r)^2}{s^2\,c'(\mathbf{X}'\mathbf{X})^{-1}c}
= t^2.
\end{aligned}
$$

:::

(testing-normality-ch1)=

---

**OLS and Gaussian Likelihood**

## Conditional and Joint Likelihood

联合密度分解：

$$
f(\mathbf{y},\mathbf{X};\vartheta) =
f(\mathbf{y}\mid\mathbf{X};\varpi)\,f(\mathbf{X};\rho).
$$

在线性回归里通常不参数化 $f(\mathbf{X};\rho)$，直接最大化条件似然 $f(\mathbf{y}\mid\mathbf{X};\varpi)$。

## Gaussian Likelihood for OLS

在 Assumptions 1.1, 1.2, 1.4, 1.5 下：

$$
\mathbf{y}\mid \mathbf{X}\sim N(\mathbf{X}\boldsymbol{\omega},\sigma^2\mathbf{I}_n).
$$

条件密度：

$$
f(\mathbf{y}\mid\mathbf{X})
=(2\pi\sigma^2)^{-n/2}
\exp\!\left(
-\frac{1}{2\sigma^2}
(\mathbf{y}-\mathbf{X}\boldsymbol{\omega})'
(\mathbf{y}-\mathbf{X}\boldsymbol{\omega})
\right).
$$

对任意 $(\tilde{\boldsymbol{\omega}},\tilde{\sigma}^2)$，对数似然：

$$
\log L(\tilde{\boldsymbol{\omega}},\tilde{\sigma}^2) =
-\frac n2\log(2\pi)
-\frac n2\log(\tilde{\sigma}^2)
-\frac{1}{2\tilde{\sigma}^2}
(\mathbf{y}-\mathbf{X}\tilde{\boldsymbol{\omega}})'
(\mathbf{y}-\mathbf{X}\tilde{\boldsymbol{\omega}}).
$$

将 $\tilde{\boldsymbol{\omega}}$ 代入 OLS 极值点得到 concentrated log-likelihood：

$$
\log L_c(\tilde{\sigma}^2) =
-\frac n2\log(2\pi)
-\frac n2\log(\tilde{\sigma}^2)
-\frac{1}{2\tilde{\sigma}^2}\,\mathbf{e}'\mathbf{e}.
$$

:::{admonition} Proposition: Proposition 1.5 (ML Estimator)
在 Assumptions 1.1-1.5 下：

$$
\hat{\boldsymbol{\omega}}_{ML}=\mathbf{b},\qquad
\hat{\sigma}^2_{ML}=\frac{1}{n}\mathbf{e}'\mathbf{e}
=\frac{SSR}{n}
=\frac{n-K}{n}s^2.
$$
最大化后的似然写为：

$$
\max_{\tilde{\boldsymbol{\omega}},\tilde{\sigma}^2}L =
\left(\frac{2\pi}{n}\right)^{-n/2}
\exp\!\left(-\frac n2\right)
(SSR)^{-n/2}.
$$

:::

(prop-1-5)=

:::{admonition} Note
Proof Sketch for Proposition 1.5
由 `(1.5.5)` 对 $\tilde\omega$ 求导：

$$
\begin{aligned}
\frac{\partial \log L}{\partial \tilde\omega}
&=\frac{1}{\tilde\sigma^2}X'(y-X\tilde\omega)=0\\
&\Longrightarrow X'X\tilde\omega=X'y\\
&\Longrightarrow \hat\omega_{ML}=b.
\end{aligned}
$$
对 $\tilde\sigma^2$ 求导：

$$
\begin{aligned}
\frac{\partial \log L}{\partial \tilde\sigma^2}
&=-\frac{n}{2\tilde\sigma^2}
+\frac{1}{2\tilde\sigma^4}(y-X\tilde\omega)'(y-X\tilde\omega)=0\\
&\Longrightarrow \hat\sigma^2_{ML}
=\frac{1}{n}(y-X\hat\omega_{ML})'(y-X\hat\omega_{ML})\\
&=\frac{1}{n}e'e=\frac{SSR}{n}
=\frac{n-K}{n}s^2.
\end{aligned}
$$

:::

## Cramer-Rao Bound and Best Unbiased Estimation

score 与信息矩阵定义：

$$
\mathbf{s}(\tilde{\vartheta})
\equiv
\frac{\partial \log L(\tilde{\vartheta})}{\partial \tilde{\vartheta}},
$$

$$
\mathbf{I}(\vartheta)\equiv E\!\left[\mathbf{s}(\vartheta)\mathbf{s}(\vartheta)'\right].
$$

并有信息矩阵等式：

$$
\mathbf{I}(\vartheta) =
-E\!\left[
\frac{\partial^2\log L(\vartheta)}{\partial \tilde{\vartheta}\partial \tilde{\vartheta}'}
\right].
$$

令参数向量 $\vartheta=(\boldsymbol{\omega}',\phi)'$ 且 $\phi=\sigma^2$，则 Hessian 分块为

$$
\frac{\partial^2\log L}{\partial \tilde{\vartheta}\partial\tilde{\vartheta}'} =
\begin{bmatrix}
\frac{\partial^2\log L}{\partial\tilde{\boldsymbol{\omega}}\partial\tilde{\boldsymbol{\omega}}'} &
\frac{\partial^2\log L}{\partial\tilde{\boldsymbol{\omega}}\partial\tilde{\phi}}\\
\frac{\partial^2\log L}{\partial\tilde{\phi}\partial\tilde{\boldsymbol{\omega}}'} &
\frac{\partial^2\log L}{\partial\tilde{\phi}^2}
\end{bmatrix}.
$$

一阶导数（在真值）：

$$
\frac{\partial\log L}{\partial \tilde{\boldsymbol{\omega}}} =
\frac{1}{\phi}\mathbf{X}'(\mathbf{y}-\mathbf{X}\boldsymbol{\omega}),
$$

$$
\frac{\partial\log L}{\partial \tilde{\phi}} =
-\frac{n}{2\phi}
+\frac{1}{2\phi^2}
(\mathbf{y}-\mathbf{X}\boldsymbol{\omega})'(\mathbf{y}-\mathbf{X}\boldsymbol{\omega}).
$$

二阶导数（在真值）：

$$
\frac{\partial^2\log L}{\partial\tilde{\boldsymbol{\omega}}\partial\tilde{\boldsymbol{\omega}}'} =
-\frac{1}{\phi}\mathbf{X}'\mathbf{X},
$$

$$
\frac{\partial^2\log L}{\partial\tilde{\phi}^2} =
\frac{n}{2\phi^2}
-\frac{1}{\phi^3}
(\mathbf{y}-\mathbf{X}\boldsymbol{\omega})'(\mathbf{y}-\mathbf{X}\boldsymbol{\omega}),
$$

$$
\frac{\partial^2\log L}{\partial\tilde{\boldsymbol{\omega}}\partial\tilde{\phi}} =
-\frac{1}{\phi^2}\mathbf{X}'(\mathbf{y}-\mathbf{X}\boldsymbol{\omega}).
$$

故信息矩阵为

$$
\mathbf{I}(\vartheta)=
\begin{bmatrix}
\sigma^{-2}\mathbf{X}'\mathbf{X} & \mathbf{0}\\
\mathbf{0}' & n/(2\sigma^4)
\end{bmatrix},
$$

其逆（Cramer-Rao lower bound）：

$$
\mathbf{I}(\vartheta)^{-1}=
\begin{bmatrix}
\sigma^2(\mathbf{X}'\mathbf{X})^{-1} & \mathbf{0}\\
\mathbf{0}' & 2\sigma^4/n
\end{bmatrix}.
$$

:::{admonition} Proposition: Proposition 1.6 (BUE)
在 Assumptions 1.1-1.5 下，$\mathbf{b}$ 达到对应 Cramer-Rao 下界，因此是 $\boldsymbol{\omega}$ 的 BUE。

:::

(prop-1-6)=

:::{admonition} Note
Proof Sketch for Proposition 1.6
由 `(1.5.16)`，任意无偏估计量 $\tilde\omega$ 满足

$$
\begin{aligned}
\mathrm{Var}(\tilde\omega\mid X)-\sigma^2(X'X)^{-1}
\succeq 0.
\end{aligned}
$$
而由 Proposition 1.1，

$$
\begin{aligned}
\mathrm{Var}(b\mid X)=\sigma^2(X'X)^{-1}.
\end{aligned}
$$
因此 $b$ 达到 Cramer-Rao 下界，故在无偏估计量类中为 BUE。

:::

## F Test as Likelihood Ratio

受限似然（$H_0:\mathbf{R}\boldsymbol{\omega}=\mathbf{r}$）：

$$
L_R=
\max_{\tilde{\boldsymbol{\omega}},\tilde{\sigma}^2:\,\mathbf{R}\tilde{\boldsymbol{\omega}}=\mathbf{r}}
L(\tilde{\boldsymbol{\omega}},\tilde{\sigma}^2)
\propto (SSR_R)^{-n/2}.
$$

似然比：

$$
\Lambda\equiv\frac{L_U}{L_R} =
\left(\frac{SSR_U}{SSR_R}\right)^{-n/2}.
$$

$F$ 统计量是其单调变换：

$$
F =
\frac{n-K}{\#r}\left(\Lambda^{-2/n}-1\right).
$$

(ml-ch1)=

---

**Generalized Least Squares (GLS)**

放宽球形误差为：

$$
E(\boldsymbol{\varepsilon}\boldsymbol{\varepsilon}'\mid \mathbf{X}) =
\sigma^2\mathbf{V}(\mathbf{X}),
\quad \mathbf{V}(\mathbf{X})\text{ nonsingular, known}.
$$

此时 OLS 不再是 BLUE（但仍可保持无偏）。

若 $\mathbf{V}$ 对称正定，可取非奇异矩阵 $\mathbf{C}$ 使

$$
\mathbf{V}^{-1}=\mathbf{C}'\mathbf{C}.
$$

定义变换变量

$$
\tilde{\mathbf{y}}\equiv \mathbf{C}\mathbf{y},\quad
\tilde{\mathbf{X}}\equiv \mathbf{C}\mathbf{X},\quad
\tilde{\boldsymbol{\varepsilon}}\equiv \mathbf{C}\boldsymbol{\varepsilon},
$$

得到变换模型

$$
\tilde{\mathbf{y}}=\tilde{\mathbf{X}}\boldsymbol{\omega}+\tilde{\boldsymbol{\varepsilon}}.
$$

在该模型上 OLS 即 GLS，故

$$
\hat{\boldsymbol{\omega}}_{GLS} =
(\mathbf{X}'\mathbf{V}^{-1}\mathbf{X})^{-1}\mathbf{X}'\mathbf{V}^{-1}\mathbf{y}.
$$

:::{admonition} Note
Derivation Sketch (From Transformed OLS to GLS)
在变换模型 $\tilde y=C y,\ \tilde X=CX$ 上应用 OLS：

$$
\begin{aligned}
\hat\omega
&= (\tilde X'\tilde X)^{-1}\tilde X'\tilde y\\
&= \big((CX)'(CX)\big)^{-1}(CX)'(Cy)\\
&= (X'C'CX)^{-1}X'C'Cy\\
&= (X'V^{-1}X)^{-1}X'V^{-1}y.
\end{aligned}
$$
条件方差：

$$
\begin{aligned}
\mathrm{Var}(\hat\omega_{GLS}\mid X)
&= (X'V^{-1}X)^{-1}X'V^{-1}\mathrm{Var}(y\mid X)V^{-1}X(X'V^{-1}X)^{-1}\\
&= (X'V^{-1}X)^{-1}X'V^{-1}(\sigma^2V)V^{-1}X(X'V^{-1}X)^{-1}\\
&= \sigma^2(X'V^{-1}X)^{-1}.
\end{aligned}
$$
:::

方差表达式：

$$
\mathrm{Var}(\hat{\boldsymbol{\omega}}_{GLS}\mid\mathbf{X}) =
\sigma^2(\mathbf{X}'\mathbf{V}^{-1}\mathbf{X})^{-1}.
$$

:::{admonition} Proposition: Proposition 1.7 (Finite-Sample Properties of GLS)
在 1.1-1.3 与 `(1.6.1)` 下：

$$
E(\hat{\boldsymbol{\omega}}_{GLS}\mid\mathbf{X})=\boldsymbol{\omega},\quad
\text{Var}(\hat{\boldsymbol{\omega}}_{GLS}\mid\mathbf{X}) =
\sigma^2(\mathbf{X}'\mathbf{V}^{-1}\mathbf{X})^{-1}.
$$

:::

(prop-1-7)=

:::{admonition} Note
Proof Sketch for Proposition 1.7
由 GLS 显式式 `(1.6.5)`：

$$
\begin{aligned}
\hat\omega_{GLS}
&=\omega+(X'V^{-1}X)^{-1}X'V^{-1}\varepsilon.
\end{aligned}
$$
因而

$$
\begin{aligned}
E(\hat\omega_{GLS}\mid X)
&=\omega+(X'V^{-1}X)^{-1}X'V^{-1}E(\varepsilon\mid X)
=\omega.
\end{aligned}
$$
并且

$$
\begin{aligned}
\mathrm{Var}(\hat\omega_{GLS}\mid X)
&= (X'V^{-1}X)^{-1}X'V^{-1}\mathrm{Var}(\varepsilon\mid X)V^{-1}X(X'V^{-1}X)^{-1}\\
&= (X'V^{-1}X)^{-1}X'V^{-1}(\sigma^2V)V^{-1}X(X'V^{-1}X)^{-1}\\
&= \sigma^2(X'V^{-1}X)^{-1}.
\end{aligned}
$$

:::

当 $\mathbf{V}$ 为对角阵时，GLS 退化为 WLS。

(gls-ch1)=

---

**Returns to Scale in Electricity Supply**

Nerlove (1961) 横截面数据（145 家电力公司）用于检验规模报酬与成本函数限制。

## Cobb-Douglas Cost Equation

生产函数（示意）：

$$
Q_i=A_i x_{i1}^{\omega_1}x_{i2}^{\omega_2}x_{i3}^{\omega_3}.
$$

对应成本函数可写为

$$
TC_i =
r\cdot
\big(A_i p_1^{\omega_1}p_2^{\omega_2}p_3^{\omega_3}\big)^{-1/r}
Q_i^{1/r}p_{i1}^{\omega_1/r}p_{i2}^{\omega_2/r}p_{i3}^{\omega_3/r},
$$

取对数得

$$
\log(TC_i) =
\mu_i+\frac{1}{r}\log(Q_i)
+\frac{\omega_1}{r}\log(p_{i1})
+\frac{\omega_2}{r}\log(p_{i2})
+\frac{\omega_3}{r}\log(p_{i3}),
$$

其中 $r=\omega_1+\omega_2+\omega_3$ 表示规模报酬参数。

令 $\mu=E(\mu_i)$ 且 $\varepsilon_i=\mu_i-\mu$，则
导出的对数成本方程（课上主回归）：

$$
\log(TC_i)=\omega_1+\omega_2\log(Q_i)+\omega_3\log(p_{i1})+\omega_4\log(p_{i2})+\omega_5\log(p_{i3})+\varepsilon_i.
$$

参数映射为

$$
\omega_1=\mu,\quad
\omega_2=\frac{1}{r},\quad
\omega_3=\frac{\varrho_1}{r},\quad
\omega_4=\frac{\varrho_2}{r},\quad
\omega_5=\frac{\varrho_3}{r}.
$$

## Homogeneity Restrictions and Tests

同质性限制：

$$
\omega_3+\omega_4+\omega_5=1.
$$

将 $\log(p_{i3})$ 移到左边可得到受限回归：

$$
\log\!\left(\frac{TC_i}{p_{i3}}\right) =
\omega_1+\omega_2\log(Q_i)
+\omega_3\log\!\left(\frac{p_{i1}}{p_{i3}}\right)
+\omega_4\log\!\left(\frac{p_{i2}}{p_{i3}}\right)
+\varepsilon_i.
$$

课程给出的 unrestricted 估计（对应 `(1.7.4)`）：

$$
\log(TC_i)=
-3.5+0.72\log(Q_i)+0.44\log(p_{i1})-0.22\log(p_{i2})+0.43\log(p_{i3}),
$$

并报告 $SSR_U=21.552,\ n=145$（括号中的标准误省略）。

restricted 估计（对应 `(1.7.6)`）：

$$
\log\!\left(\frac{TC_i}{p_{i3}}\right) =
-0.47+0.72\log(Q_i)+0.59\log\!\left(\frac{p_{i1}}{p_{i3}}\right)-0.07\log\!\left(\frac{p_{i2}}{p_{i3}}\right),
$$

并报告 $SSR_R=21.640$。

代入 `(1.4.11)`：

$$
F=\frac{(SSR_R-SSR_U)/1}{SSR_U/(145-5)}=0.57< F_{1,140}(0.95)\approx 3.9,
$$

故不能拒绝同质性限制。

## Constant Returns to Scale Restriction

检验

$$
H_0:\omega_2=1.
$$

在受限模型估计中，$t=(0.72-1)/0.017\approx -16$（参见 `(1.4.5)`），强烈拒绝常数规模报酬。

:::{admonition} Note
Residual Plot (slide 68)
残差图出现明显模式（非随机散点），提示函数形式偏误/异方差风险，说明仅靠线性同方差假设可能不足。

:::

(app-returns-to-scale)=

---

**Cross-References**

- 下一章：[09_Large_Sample_Theory](09_Large_Sample_Theory.md)
- 内生性与 IV/GMM：[10_Single_Equation_GMM](10_Single_Equation_GMM.md)
