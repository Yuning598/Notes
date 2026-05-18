# Chapter 2: Large-Sample Theory

## 0. Chapter Roadmap

1. Modes of convergence  
2. Stochastic-process classes and dependence conditions  
3. Asymptotic distribution of OLS  
4. Robust linear/nonlinear hypothesis testing  
5. Estimation of long-run covariance objects  
6. Conditional homoskedasticity and classical statistics in large samples  
7. Testing conditional homoskedasticity  
8. WLS with estimated variance function  
9. Best linear prediction  
10. Box-Pierce / Ljung-Box and residual autocorrelation tests  
11. Application: Efficient market hypothesis  
12. Time-trend regression with nonstationary deterministic regressor

---

## 1. Modes of Convergence

### 1.1 Convergence in Probability

:::{admonition} Definition (Convergence in Probability)

$$
x_n \xrightarrow{p} x
\Longleftrightarrow
\Pr(|x_n-x|>\epsilon)\to 0,\ \forall \epsilon>0.
\tag{2.1.1}
$$

:::

### 1.2 Almost Sure Convergence

:::{admonition} Definition (Almost Sure Convergence)

$$
x_n \xrightarrow{a.s.} x
\Longleftrightarrow
\Pr\!\left(\lim_{n\to\infty}x_n=x\right)=1.
\tag{2.1.2}
$$

**Note:** Strength Ordering

$$
x_n\xrightarrow{a.s.}x \Rightarrow x_n\xrightarrow{p}x.
\tag{2.1.3}
$$
且若 $x_n\xrightarrow{p}x$，则任意子序列存在 a.s. 收敛子子序列：

$$
x_{n_k}\xrightarrow{a.s.}x\ \text{for some } \{n_k\}.
\tag{2.1.4}
$$

:::

### 1.3 Convergence in Distribution and Tools

- $x_n\xrightarrow{d}x$ 表示分布函数逐点收敛于极限分布的连续点。
- 多元情形使用 Cramer-Wold device。
- 常用结论：continuous mapping, Slutsky, delta method（后续反复使用）。

^ch2-convergence

---

## 2. Stochastic Processes and Dependence

### 2.1 Stationarity and Covariance Structure

协方差平稳过程满足：

$$
E(g_t)=\mu,\quad
E[(g_t-\mu)(g_{t-j}-\mu)]=\gamma_j.
\tag{2.2.1}
$$

自相关函数：

$$
\rho_j=\gamma_j/\gamma_0.
\tag{2.2.2}
$$

长程协方差和（long-run variance 的核心对象）：

$$
S=\sum_{j=-\infty}^{\infty}\gamma_j.
\tag{2.2.3}
$$

### 2.2 Martingale and Martingale Difference

令 $\mathcal{F}_{t-1}$ 为信息集，martingale 条件：

$$
E(g_t\mid \mathcal{F}_{t-1})=g_{t-1}.
\tag{2.2.4}
$$

martingale difference sequence (MDS)：

$$
E(u_t\mid \mathcal{F}_{t-1})=0.
\tag{2.2.5}
$$

对任意 $\mathcal{F}_{t-1}$-measurable $z_{t-1}$，有

$$
E(z_{t-1}u_t)=0.
\tag{2.2.6}
$$

以及

$$
E(u_tu_{t-j})=0,\ j\ge 1.
\tag{2.2.7}
$$

### 2.3 Serial Independence vs MDS

弱于 i.i.d. 的关键无序列相关条件可写为

$$
E(u_tu_{t-j})=0,\ \forall j\neq 0.
\tag{2.2.9}
$$

若 $\{u_t\}$ 是严格平稳 MDS 且二阶矩有限，则

$$
\frac{1}{\sqrt{n}}\sum_{t=1}^n u_t \xrightarrow{d}N(0,S),
\tag{2.2.10}
$$

并在 MDS 情况下通常有 $S=E(u_t^2)$，记为

$$
S=E(u_t^2).
\tag{2.2.13}
$$

更一般地，序列不相关条件写作

$$
E(u_tu_{t-j})=0,\ j\ge 1.
\tag{2.2.15}
$$

^ch2-processes

---

## 3. Asymptotic Distribution of OLS

### 3.1 Model and Assumptions

:::{admonition} Definition (Assumption 2.1 (Linearity))

$$
y_i=x_i'\beta+\varepsilon_i,\quad i=1,\dots,n.
\tag{2.3.1}
$$

**Definition (Assumption 2.4 (Rank Condition)):**

$$
Q\equiv E(x_ix_i')\ \text{is nonsingular}.
\tag{2.3.3}
$$

:::

### 3.2 OLS Expansion

$$
\sqrt{n}(b-\beta)=Q_n^{-1}\cdot \frac{1}{\sqrt{n}}\sum_{i=1}^n x_i\varepsilon_i,
\quad
Q_n\equiv \frac{1}{n}\sum_{i=1}^n x_ix_i'.
\tag{2.3.4}
$$

若

$$
Q_n\xrightarrow{p}Q,\qquad
\frac{1}{\sqrt{n}}\sum_{i=1}^n x_i\varepsilon_i\xrightarrow{d}N(0,S),
\tag{2.3.5}
$$

则由 Slutsky：

$$
\sqrt{n}(b-\beta)\xrightarrow{d}N(0,Q^{-1}SQ^{-1}).
\tag{2.3.6}
$$

**3.3 Consistency of $s^2$**

在标准矩条件下：

$$
s^2=\frac{e'e}{n-K}\xrightarrow{p}\sigma^2.
$$

这为渐近标准误与 Wald 推断提供可行替代。

^ch2-ols-asym

---

## 4. Robust Hypothesis Testing

### 4.1 Linear Restrictions

检验

$$
H_0:r'\beta=r_0
\tag{2.4.1}
$$

时，robust Wald/t 统计量渐近正态。一般线性限制 $H_0:R\beta=r$ 的 Wald 统计量：

$$
W_n
=
n(Rb-r)'[R\widehat{\mathrm{Avar}}(b)R']^{-1}(Rb-r)
\xrightarrow{d}\chi^2_q.
\tag{2.4.2}
$$

### 4.2 Local Alternatives and Asymptotic Power

局部备择：

$$
H_{1n}:R\beta-r=\frac{c}{\sqrt{n}}
\tag{2.4.3}
$$

导致

$$
W_n\xrightarrow{d}\chi^2_q(\lambda),\quad
\lambda=c'[R\mathrm{Avar}(b)R']^{-1}c.
\tag{2.4.4}
$$

### 4.3 Nonlinear Hypotheses

对 $H_0:g(\beta)=0$，delta method 线性化后可得

$$
n\,g(b)'[G\,\widehat{\mathrm{Avar}}(b)\,G']^{-1}g(b)
\xrightarrow{d}\chi^2_m,\quad G=\frac{\partial g(\beta)}{\partial \beta'}.
\tag{2.4.11}
$$

^ch2-robust-testing

---

## 5. Estimating Long-Run Covariance Components

定义 moment：

$$
g_i=x_i\varepsilon_i,\qquad
S=E(g_ig_i').
\tag{2.5.1}
$$

可行做法是用残差替代误差：$\hat g_i=x_ie_i$。在附加矩条件下

$$
\hat S=\frac1n\sum_{i=1}^n \hat g_i\hat g_i' \xrightarrow{p} S,
\tag{2.5.4}
$$

或记等价写法

$$ 
\hat S \xrightarrow{p} S.
\tag{2.5.4’}
$$

^ch2-s-estimation

---

## 6. Conditional Homoskedasticity and Classical Statistics

### 6.1 Assumption and Implications

:::{admonition} Definition (Assumption 2.7)

$$
E(\varepsilon_i^2\mid x_i)=\sigma^2.
\tag{2.6.1}
$$
则

$$
S=\sigma^2Q.
\tag{2.6.2}
$$

:::

由此得到 classical OLS 渐近方差：

$$
\mathrm{Avar}(b)=\sigma^2Q^{-1}.
\tag{2.6.4}
$$

对应可行估计：

$$
\widehat{\mathrm{Avar}}(b)=s^2Q_n^{-1}.
\tag{2.6.5}
$$

:::{admonition} Note
Link to Chapter 1
在该条件下，大样本下 t/F 与 Chapter 1 的 `(1.4.5)`、`(1.4.9)` 对齐。  
对应可回看 [Proposition 1.3 (t-ratio)](Econometrics/MS8956/ART-Chap1 Finite-Sample Properties of OLS#^prop-1-3) 与 [Proposition 1.4 (F-ratio)](Econometrics/MS8956/ART-Chap1 Finite-Sample Properties of OLS#^prop-1-4)。

:::

^ch2-homosked

---

## 7. Testing Conditional Homoskedasticity

从一致估计对象出发，构造

$$
\hat g_i=x_ie_i,\quad
\hat S=\frac1n\sum \hat g_i\hat g_i'.
\tag{2.7.1}
$$

并与同方差结构下的目标矩阵比较：

$$
\hat\Omega\equiv \hat S-\hat\sigma^2 Q_n.
\tag{2.7.2}
$$

将独立元素向量化，记为

$$
\hat h=\mathrm{vech}(\hat\Omega).
\tag{2.7.3}
$$

检验统计量（Wald 型）：

$$
T_n=n\,\hat h'\,\hat V_h^{-1}\,\hat h \xrightarrow{d}\chi^2_{d_h}.
\tag{2.7.4}
$$

^ch2-test-homosked

---

## 8. WLS with Estimated Variance Function

假设

$$
\mathrm{Var}(\varepsilon_i\mid z_i)=\sigma^2\omega_i,\quad \omega_i>0,
\tag{2.8.1}
$$

用估计值 $\hat\omega_i$ 构造可行 WLS：

$$
\hat\beta_{WLS}
=
\left(\sum \frac{x_ix_i'}{\hat\omega_i}\right)^{-1}
\left(\sum \frac{x_iy_i}{\hat\omega_i}\right).
\tag{2.8.2}
$$

若 $\hat\omega_i\to_p\omega_i$ 且常规矩条件成立，则 FGLS 与可行 WLS 一致并渐近正态。

^ch2-wls

---

## 9. Best Linear Predictor

在所有线性预测器 $a+b'z$ 中，最优线性预测系数满足正交投影条件，典型结果：

$$
b^*=\Sigma_{zz}^{-1}\Sigma_{zy},
\tag{2.9.5}
$$

等价正交条件：

$$
E\!\left[z\,(y-a^*-b^{*'}z)\right]=0.
\tag{2.9.6}
$$

样本 OLS 对应投影系数的一致估计。

^ch2-prediction

---

## 10. Serial Correlation Tests

### 10.1 Box-Pierce and Ljung-Box

样本自相关（基于真误差）：

$$
\hat\rho_j=\frac{\sum_{t=j+1}^T \hat u_t\hat u_{t-j}}{\sum_{t=1}^T \hat u_t^2}.
\tag{2.10.1}
$$

Box-Pierce:

$$
Q_{BP}=T\sum_{j=1}^m \hat\rho_j^2.
\tag{2.10.2}
$$

Ljung-Box:

$$
Q_{LB}=T(T+2)\sum_{j=1}^m\frac{\hat\rho_j^2}{T-j}.
\tag{2.10.4}
$$

在白噪声原假设下：

$$
Q_{BP},Q_{LB}\xrightarrow{d}\chi^2_m.
\tag{2.10.5}
$$

### 10.2 Residual-Based ACF Corrections

回归残差定义与协方差估计：

$$
\hat u_t=y_t-x_t'b,\quad
\hat\gamma_j=\frac1T\sum_{t=j+1}^T \hat u_t\hat u_{t-j}.
\tag{2.10.6}
$$

标准化自相关：

$$
\hat r_j=\hat\gamma_j/\hat\gamma_0.
\tag{2.10.7}
$$

有限样本修正常写为

$$
\tilde r_j=\frac{T}{T-j}\hat r_j.
\tag{2.10.8}
$$

并据此构造替代 portmanteau：

$$
\tilde Q=T\sum_{j=1}^m \tilde r_j^2.
\tag{2.10.9}
$$

进一步可写作等价统计量：

$$
Q^*=f(\hat r_1,\dots,\hat r_m).
\tag{2.10.10}
$$

### 10.3 Predetermined Regressors (Not Strictly Exogenous)

关键正交条件调整为

$$
E(x_tu_t)=0,\quad
E(x_tu_{t-j})=0\ (j\ge 1),
\tag{2.10.15}
$$

但允许

$$
E(x_tu_{t+1})\neq 0.
\tag{2.10.16}
$$

对应检验可写为

$$
H_0:\rho_1=\cdots=\rho_m=0
\tag{2.10.17}
$$

以及

$$
\sqrt{T}\,\hat{\boldsymbol\rho}_m\xrightarrow{d}N(0,\Omega_\rho),
\tag{2.10.18}
$$

$$
Q_\rho=T\,\hat{\boldsymbol\rho}_m'\hat\Omega_\rho^{-1}\hat{\boldsymbol\rho}_m
\xrightarrow{d}\chi^2_m.
\tag{2.10.19}
$$

也可转化为辅助回归统计量：

$$
\hat u_t=\sum_{j=1}^m \rho_j\hat u_{t-j}+v_t,
\tag{2.10.20}
$$

并使用

$$
LM=T\cdot R^2_{aux}\xrightarrow{d}\chi_m^2.
\tag{2.10.21}
$$

^ch2-serial-corr

---

## 11. Application: Efficient Market Hypothesis

课程应用围绕 ex-post real interest rate 的可预测性展开，核心检验是“是否存在序列相关 / 是否可被名义利率线性预测”。

最优线性预测关系（示意）：

$$
r_{t+1}=a+bR_t+\eta_{t+1}.
\tag{2.11.4}
$$

当扩展信息集时，对应预测方程可写为

$$
r_{t+1}=a+b'Z_t+\eta_{t+1}.
\tag{2.11.9}
$$

如果 $R_t$ 非严格外生，需回到第 10 节的 predetermined-regressor 检验框架。

^ch2-emh

---

## 12. Time Regression with Deterministic Trend

### 12.1 Model and OLS

$$
y_t=\alpha+\delta t+\varepsilon_t.
\tag{2.12.1}
$$

向量记号：

$$
x_t=\begin{bmatrix}1\\ t\end{bmatrix},\quad
\beta=\begin{bmatrix}\alpha\\ \delta\end{bmatrix}.
\tag{2.12.2}
$$

OLS:

$$
b=\left(\sum_{t=1}^n x_tx_t'\right)^{-1}\left(\sum_{t=1}^n x_ty_t\right).
\tag{2.12.3}
$$

并且

$$
\sum_{t=1}^n x_tx_t'
=
\begin{bmatrix}
n & \sum t\\
\sum t & \sum t^2
\end{bmatrix}
=
\begin{bmatrix}
n & n(n+1)/2\\
n(n+1)/2 & n(n+1)(2n+1)/6
\end{bmatrix}.
\tag{2.12.5}
$$

### 12.2 Rate Matrix and Asymptotic Law

$$
\Upsilon_n=
\begin{bmatrix}
\sqrt{n} & 0\\
0 & n^{3/2}
\end{bmatrix}.
\tag{2.12.6}
$$

标准化展开：

$$
\Upsilon_n(b-\beta)=Q_n^{-1}v_n,
\tag{2.12.7}
$$

其中

$$
Q_n=\Upsilon_n^{-1}\left(\sum x_tx_t'\right)\Upsilon_n^{-1},
\quad
v_n=\Upsilon_n^{-1}\sum x_t\varepsilon_t.
\tag{2.12.8}
$$

并有

$$
Q_n\to
Q=
\begin{bmatrix}
1 & 1/2\\
1/2 & 1/3
\end{bmatrix}.
\tag{2.12.10}
$$

在白噪声矩条件下

$$
v_n\xrightarrow{d}N(0,\sigma^2Q).
\tag{2.12.11}
$$

:::{admonition} Proposition
Proposition 2.11 (Time Trend OLS)
在 `(2.12.1)` 下，若 $\{\varepsilon_t\}$ 为独立白噪声且 $E(\varepsilon_t^4)<\infty$，则

$$
\begin{bmatrix}
\sqrt{n}(\hat\alpha-\alpha)\\
n^{3/2}(\hat\delta-\delta)
\end{bmatrix}
\xrightarrow{d}
N\!\left(0,\sigma^2Q^{-1}\right).
$$

:::

^ch2-time-regression

---

## 13. Links

- 上一章：[Econometrics/MS8956/ART-Chap1 Finite-Sample Properties of OLS](Econometrics/MS8956/ART-Chap1 Finite-Sample Properties of OLS)
- 下一章：[Econometrics/MS8956/ART-Chap3 Single-Equation GMM](Econometrics/MS8956/ART-Chap3 Single-Equation GMM)

---

## Appendix A. 你最初的 Chap2 草稿（恢复保留）

:::{admonition} Note
说明
这一节用于保留你原始写法，不覆盖上面的重整结构；后续你可以再决定是否合并。

:::

### A.1 Model Specification

#### A.1.1 The Time Trend Model

We consider a regression case where the regressors are non-stationary, yet OLS remains applicable:

$$
y_t=\alpha+\delta\cdot t+\varepsilon_t
\quad (2.12.1)
$$

where $\{\varepsilon_t\}$ is a sequence of independent white noise.

#### A.1.2 Matrix Representation

The regression can be expressed in vector form as

$$
y_t=\mathbf{x}_t'\boldsymbol{\beta}+\varepsilon_t,\quad
\mathbf{x}_t=\begin{pmatrix}1\\ t\end{pmatrix},\quad
\boldsymbol{\beta}=\begin{pmatrix}\alpha\\ \delta\end{pmatrix}
\quad (2.12.2)
$$

### A.2 Definitions & Key Concepts

#### A.2.1 时间趋势 (Time Trend)

指一个变量随时间推移而呈现出的确定性系统性变化。  
- 确定性：代表均值在时间轴上的系统性漂移，而非随机漂移。  
- OLS 特殊性：$t$ 虽非平稳但确定性，和随机趋势不同。  
- 控制变量作用：加入 $t$ 可吸收长期趋势，使残差更接近平稳。

#### A.2.2 Trend Stationary (趋势平稳)

若

$$
y_t=f(t)+\varepsilon_t
$$

其中 $f(t)$ 为确定性函数（如 $\alpha+\delta t$），$\varepsilon_t$ 为平稳过程，则称 $y_t$ 趋势平稳。  
去趋势后得到平稳序列；这与单位根过程（需差分）不同。

### A.3 Asymptotic Properties (渐近性质推导)

#### A.3.1 OLS Estimator

$$
\mathbf{b}\equiv
\begin{bmatrix}\hat{\alpha}\\ \hat{\delta}\end{bmatrix}
=
\left(\sum_{t=1}^{n}\mathbf{x}_t\mathbf{x}_t'\right)^{-1}
\left(\sum_{t=1}^{n}\mathbf{x}_t y_t\right)
\quad (2.12.3)
$$

**A.3.2 Explicit Form of $\sum \mathbf{x}_t\mathbf{x}_t'$**

$$
\sum_{t=1}^{n}\mathbf{x}_t\mathbf{x}_t'
=
\begin{bmatrix}
n & \frac{n(n+1)}{2}\\
\frac{n(n+1)}{2} & \frac{n(n+1)(2n+1)}{6}
\end{bmatrix}
\quad (2.12.5)
$$

元素阶数分别为 $O(n), O(n^2), O(n^3)$。

#### A.3.3 Scaling Matrix and Rates

$$
\boldsymbol{\Upsilon}_n=
\begin{bmatrix}
\sqrt{n}&0\\
0&n^{3/2}
\end{bmatrix}
\quad (2.12.6)
$$

- $\hat\alpha$ 速度：$\sqrt{n}$  
- $\hat\delta$ 速度：$n^{3/2}$

#### A.3.4 Normalized Expansion

从

$$
\mathbf{b}-\boldsymbol{\beta}
=
\left(\sum_{t=1}^{n}\mathbf{x}_t\mathbf{x}_t'\right)^{-1}
\left(\sum_{t=1}^{n}\mathbf{x}_t\varepsilon_t\right)
$$

两边左乘 $\Upsilon_n$，并插入单位阵 $\Upsilon_n\Upsilon_n^{-1}$，得到

$$
\Upsilon_n(\mathbf{b}-\boldsymbol{\beta})
=
\left[
\Upsilon_n^{-1}\left(\sum_{t=1}^{n}\mathbf{x}_t\mathbf{x}_t'\right)\Upsilon_n^{-1}
\right]^{-1}
\left(
\Upsilon_n^{-1}\sum_{t=1}^{n}\mathbf{x}_t\varepsilon_t
\right)
=
\mathbf{Q}_n^{-1}\mathbf{v}_n
\quad (2.12.7)
$$

**A.3.5 Convergence of $\mathbf{Q}_n$**

$$
\mathbf{Q}_n=
\Upsilon_n^{-1}
\left(\sum_{t=1}^{n}\mathbf{x}_t\mathbf{x}_t'\right)
\Upsilon_n^{-1}
\to
\mathbf{Q}\equiv
\begin{bmatrix}
1&1/2\\
1/2&1/3
\end{bmatrix}
\quad (2.12.10)
$$

**A.3.6 Asymptotic Distribution of $\mathbf{v}_n$**

$$
\mathbf{v}_n=
\Upsilon_n^{-1}\sum_{t=1}^{n}\mathbf{x}_t\varepsilon_t
=
\begin{bmatrix}
\frac{1}{\sqrt n}\sum\varepsilon_t\\
\frac{1}{n^{3/2}}\sum t\varepsilon_t
\end{bmatrix}
$$

并且

$$
\mathrm{Var}(\mathbf{v}_n)=\sigma^2\mathbf{Q}_n
\to
\sigma^2\mathbf{Q}
$$

在 $E(\varepsilon_t^4)<\infty$ 下，由多元 CLT：

$$
\mathbf{v}_n\xrightarrow{d}N(\mathbf{0},\sigma^2\mathbf{Q})
\quad (2.12.11)
$$

#### A.3.7 Proposition 2.11

:::{admonition} Proposition
Proposition 2.11 (OLS estimation of the time regression)
Consider the time regression (2.12.1) where $\varepsilon_t$ is independent white noise with $E(\varepsilon_t^2)=\sigma^2$ and $E(\varepsilon_t^4)<\infty$. Let $\hat{\alpha}$ and $\hat{\delta}$ be OLS estimators of $\alpha$ and $\delta$. Then

$$
\begin{bmatrix}
\sqrt{n}(\hat{\alpha}-\alpha)\\
n^{3/2}(\hat{\delta}-\delta)
\end{bmatrix}
\xrightarrow{d}
N\!\left(
\mathbf{0},
\sigma^2
\begin{bmatrix}
1&1/2\\
1/2&1/3
\end{bmatrix}^{-1}
\right).
$$

:::

Inference insight: 可以按标准大样本推断框架进行，但要使用正确的收敛速度与协方差阵。
