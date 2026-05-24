# 12 Panel Data

## Random Effects as Common-Coefficient GMM

:::{admonition} Definition (Assumptions for Random Effects Estimator)

1.  **Random Sample**: The sample
$$
\{y_i, Z_i\}\tag{5.1.2}
$$
is i.i.d. This is satisfied in most popular panels, such as the Panel Study of Income Dynamics (PSID) and the National Longitudinal Survey (NLS).

2.  **System of $M$ linear equations**:

$$
y_i = Z_i \delta + \varepsilon_i
\tag{5.1.1}
$$

3.  **SUR Assumption**:

$$
\mathbb{E}(z_{im} \cdot \varepsilon_{ih}) = 0 \quad \text{for } m, h = 1, 2, \dots, M
\tag{5.1.3}
$$
i.e., $\mathbb{E}(\varepsilon_i \otimes x_i) = 0$, where $x_i$ is the union of $(z_{i1}, \dots, z_{iM})$.

4.  **Identification**:
$$
\mathbb{E}(Z_i \otimes x_i)\tag{5.1.4}
$$
is of full column rank.


5.  **Conditional Homoskedasticity**:

$$
\mathbb{E}(\varepsilon_i \varepsilon_i' \mid x_i) = \mathbb{E}(\varepsilon_i \varepsilon_i') \equiv \Sigma
\tag{5.1.5}
$$

6.  **Nonsingularity**:
$$
\mathbb{E}(g_i g_i')\tag{5.1.6}
$$
is nonsingular, where $g_i \equiv \varepsilon_i \otimes x_i$.


Under conditional homoskedasticity, $\mathbb{E}(g_i g_i') = \Sigma \otimes \mathbb{E}(x_i x_i')$.

:::

^assumption-re

---

## Error-Components Model

:::{admonition} Note
Error Components

在 Panel Data 中，不可观测误差项可以分解为两部分：

$$
\omega_{im} = \varepsilon_i + \vartheta_{im}
\tag{5.1.7}
$$
其中，$\varepsilon_i$ 是 individual effect / fixed effect，且对同一 $i$ 的所有方程都相同；$\vartheta_{im}$ 是随时间变化的 idiosyncratic error.

若定义

$$
\eta_i \equiv
\begin{bmatrix}
\eta_{i1} \\
\vdots \\
\eta_{iM}
\end{bmatrix}
$$
则 $M$-equation system 可写为

$$
\begin{aligned}
\underset{(M \times 1)}{y_i}
&= \underset{(M \times K)}{Z_i}\delta
+ \underset{(M \times 1)}{1_M}\varepsilon_i
+ \underset{(M \times 1)}{\eta_i} \\
y_{im} &= z_{im}'\delta + \varepsilon_i + \eta_{im}
\end{aligned}
\tag{5.1.1'}
$$

Orthogonality conditions:

$$
\mathbb{E}(z_{im}\varepsilon_i)=0
\tag{5.1.8a}
$$

$$
\mathbb{E}(z_{im}\eta_{ih})=0
\quad \text{for } m,h=1,2,\dots,M
\tag{5.1.8b}
$$

(5.1.8a) is typically not reasonable in panel data, because $\varepsilon_i$ captures time-invariant unobserved heterogeneity and is often correlated with $z_{im}$.
Hence, if $\mathbb{E}(z_{im}\varepsilon_i)\neq 0$, Random Effects is inconsistent and Fixed Effects is needed.

:::

^orth-5-1-8

### Production Function with Firm Heterogeneity

$$
\log(Q_{im}) = \phi_0 + \phi_1 \log(L_{im}) + u_i + v_{im}
$$

对应到 error-components notation：

$$
y_{im}=\log(Q_{im}),\quad z_{im}=\bigl(1,\log(L_{im})\bigr),\quad \delta=(\phi_0,\phi_1)'
$$

$$
\alpha_i=u_i,\quad \eta_{im}=v_{im}
$$

$$
x_i=\bigl(1,\log(L_{i1}),\dots,\log(L_{iM})\bigr)'
$$

这里 $u_i$ 表示 firm-specific efficiency，通常会和投入选择相关，所以一般不能假设 $u_i \perp x_i$。这正是 fixed effect 需要被保留的原因。

^ex-5-1-prod

### Wage Equation with Individual Heterogeneity

$$
\left\{
\begin{aligned}
LW69_i &= \phi_1 + \beta S69_i + \gamma IQ_i + \alpha_i + \eta_{i1} \\
LW80_i &= \phi_2 + \beta S80_i + \gamma IQ_i + \alpha_i + \eta_{i2} \\
LW82_i &= \phi_3 + \beta S82_i + \gamma IQ_i + \alpha_i + \eta_{i3}
\end{aligned}
\right.
$$

对应到 common-coefficient system：

$$
y_i=
\begin{bmatrix}
LW69_i\\
LW80_i\\
LW82_i
\end{bmatrix},
\quad
Z_i=
\begin{bmatrix}
1&0&0&S69_i&IQ_i\\
0&1&0&S80_i&IQ_i\\
0&0&1&S82_i&IQ_i
\end{bmatrix}
$$

$$
\delta=(\phi_1,\phi_2,\phi_3,\beta,\gamma)',\quad
\alpha_i=\text{individual ability effect},\quad
\eta_i=
\begin{bmatrix}
\eta_{i1}\\
\eta_{i2}\\
\eta_{i3}
\end{bmatrix}
$$

$$
x_i=\bigl(1,S69_i,S80_i,S82_i,IQ_i\bigr)'
$$

这里能力项 $\alpha_i$ 很可能与 schooling 和 IQ 相关，因此同样是典型的 RE 不成立、FE 更稳妥的场景。

^ex-5-2-wage

### Between Transformation with Group Means

存在一个常用估计量 `fixed-effects estimator`，它对 `(5.1.8a)` 失效是 robust 的（见 [Orthogonality (5.1.8)](#^orth-5-1-8))。

核心思路：把原始系统 `(5.1.1')` 变换为一个新的 $M$-equation system，使个体不随时间变化的成分被消除。

用于变换的矩阵是与 $1_M$ 对应的 annihilator matrix：

$$
\underset{(M\times M)}{Q}
\equiv I_M - 1_M(1_M'1_M)^{-1}1_M'
= I_M - \frac{1}{M}1_M1_M'
= I_M -
\begin{bmatrix}
1/M & \cdots & 1/M \\
\vdots & \ddots & \vdots \\
1/M & \cdots & 1/M
\end{bmatrix}
\tag{5.1.10}
$$

因为 $Q1_M=0$，任何在组内“各期都相同”的向量分量都会被 annihilate；保留下来的就是每一期相对该个体组均值的偏离（deviations from group means）。

^group-means-5-1-10

### Error-Components Reparameterization

为说明变换后可识别性（与 [Group Means (5.1.10)](#^group-means-5-1-10) 和 [Example 5.2](#^ex-5-2-wage) 对应），将回归元分解为

$$
Z_i=\bigl(F_i:1_M b_i'\bigr)
\tag{5.1.12}
$$

并令

$$
\delta=
\begin{bmatrix}
\beta\\
\gamma
\end{bmatrix}
$$

若某变量在个体内对所有方程相同（如 Example 5.2 的 $IQ_i$），其对应列在 $QZ_i$ 中为零，故对应系数在 FE 变换后不可识别。

在 Example 5.2 中，可作如下重参数化：

$$
F_i=
\begin{bmatrix}
1 & 0 & S69_i\\
0 & 1 & S80_i\\
0 & 0 & S82_i
\end{bmatrix},
\qquad
b_i=(1,IQ_i)'
\tag{5.1.13}
$$

于是

$$
Z_i=
\begin{bmatrix}
1 & 0 & S69_i & 1 & IQ_i\\
0 & 1 & S80_i & 1 & IQ_i\\
0 & 0 & S82_i & 1 & IQ_i
\end{bmatrix},
\quad
\beta=(\phi_1-\phi_3,\phi_2-\phi_3,\beta)',
\quad
\gamma=(\phi_3,\gamma)'
\tag{5.1.14}
$$

更一般地，FE 的识别条件是

$$
\mathbb{E}(QF_i\otimes x_i)\text{ is of full column rank}
\tag{5.1.15}
$$

进一步地，在将 $Z_i$ 分解为 $F_i$ 与 $b_i$ 后，原始 $M$-equation system `(5.1.1')` 可重写为

$$
\begin{aligned}
y_i &= F_i\beta + 1_M\cdot b_i'\gamma + 1_M\cdot \alpha_i + \eta_i
\qquad (i=1,2,\dots,n) \\
y_{im} &= f_{im}'\beta + b_i'\gamma + \alpha_i + \eta_{im}
\qquad (i=1,2,\dots,n;\;m=1,\dots,M)
\end{aligned}
\tag{5.1.1''}
$$

其中 $f_{im}'$ 是 $F_i$ 的第 $m$ 行。

因此，error-components model 的一组工作假设可写为：
`(5.1.1'')`（$M$ 线性方程）、`(5.1.2)`（random sample）、`(5.1.5)`（conditional homoskedasticity）、`(5.1.6)`（nonsingularity）、`(5.1.8b)`（SUR orthogonality）、以及 `(5.1.15)`（fixed-effects identification）。

^reparam-5-1-15

## Fixed-Effects Estimator

承接 [FE identification (5.1.15)](#^reparam-5-1-15)，Fixed-Effects Estimator 通过组内去均值变换消除 $\varepsilon_i$，并据此构造可估计的样本矩条件。

Let $Q \equiv I_M - 1_M(1_M'1_M)^{-1}1_M'$ be the within-transformation matrix. Multiplying the original system from the left by $Q$, we obtain

$$
\begin{aligned}
Q y_i &= Q F_i \beta + Q \eta_i \\
\tilde{y}_i &= \tilde{F}_i \beta + \tilde{\eta}_i
\end{aligned}
$$

此时个体效应 $\varepsilon_i$ 被消除。

:::{admonition} Note
The Formula

Multiplying both sides of the original $M$-equation system from the left by $Q$, we obtain

$$
Qy_i = QF_i\beta + Q\eta_i
$$
or

$$
\tilde{y}_i = \tilde{F}_i\beta + \tilde{\eta}_i
\qquad (i=1,2,\dots,n)
\tag{5.2.1}
$$
where

$$
\tilde{y}_i \equiv Qy_i,\qquad \tilde{F}_i \equiv QF_i,\qquad \tilde{\eta}_i \equiv Q\eta_i
\tag{5.2.2}
$$
Form the pooled sample of transformed $y_i$ and $F_i$ as

$$
\tilde{y} \equiv
\begin{bmatrix}
\tilde{y}_1\\
\vdots\\
\tilde{y}_n
\end{bmatrix},
\qquad
\tilde{F} \equiv
\begin{bmatrix}
\tilde{F}_1\\
\vdots\\
\tilde{F}_n
\end{bmatrix}
\tag{5.2.3}
$$
The fixed-effects estimator of $\beta$, denoted by $\hat{\beta}_{FE}$, is the pooled OLS estimator applied to $(\tilde{y},\tilde{F})$:

$$
\hat{\beta}_{FE} \equiv (\tilde{F}'\tilde{F})^{-1}\tilde{F}'\tilde{y}
= \left(\frac{1}{n}\sum_{i=1}^n \tilde{F}_i'\tilde{F}_i\right)^{-1}
\left(\frac{1}{n}\sum_{i=1}^n \tilde{F}_i'\tilde{y}_i\right)
\tag{5.2.4}
$$
and

$$
\hat{\beta}_{FE}-\beta
=
\left(\frac{1}{n}\sum_{i=1}^n \tilde{F}_i'\tilde{F}_i\right)^{-1}
\left(\frac{1}{n}\sum_{i=1}^n \tilde{F}_i'\tilde{\eta}_i\right)
=
\left(\frac{1}{n}\sum_{i=1}^n F_i'QF_i\right)^{-1}
\left(\frac{1}{n}\sum_{i=1}^n F_i'Q\eta_i\right)
\tag{5.2.5}
$$

**Proposition:** Proposition 5.1 (Large-Sample Properties of the Fixed-Effects Estimator)
Consider the error-components model (consisting of `(5.1.1'')`, `(5.1.2)`, `(5.1.8)`, `(5.1.4)`-`(5.1.6)`, and `(5.1.15)`), and relax the SUR assumption `(5.1.8b)` by requiring only

$$
\mathbb{E}(f_{im}'\eta_{ih})=0
\quad \text{for all } m,h\;(=1,2,\dots,M)
\tag{5.2.6}
$$
where $f_{im}'$ is the $m$-th row of $F_i$. Define $\tilde{y}_i,\tilde{F}_i,\tilde{\eta}_i$ by `(5.2.2)`. Then the fixed-effects estimator `(5.2.4)` is consistent and asymptotically normal with

$$
\text{Avar}(\hat{\beta}_{FE})
=
\left[\mathbb{E}(\tilde{F}_i'\tilde{F}_i)\right]^{-1}
\mathbb{E}\!\left[\tilde{F}_i'\mathbb{E}(\tilde{\eta}_i\tilde{\eta}_i')\tilde{F}_i\right]
\left[\mathbb{E}(\tilde{F}_i'\tilde{F}_i)\right]^{-1}
\tag{5.2.7}
$$
This asymptotic variance is consistently estimated by

$$
\widehat{\text{Avar}}(\hat{\beta}_{FE})
=
\left(\frac{1}{n}\sum_{i=1}^n \tilde{F}_i'\tilde{F}_i\right)^{-1}
\left(\frac{1}{n}\sum_{i=1}^n \tilde{F}_i'\hat{V}\tilde{F}_i\right)
\left(\frac{1}{n}\sum_{i=1}^n \tilde{F}_i'\tilde{F}_i\right)^{-1}
\tag{5.2.8}
$$
where $\hat{V}$ is the sample cross-moment matrix of transformed residuals associated with the fixed-effects estimator:

$$
\underset{(M\times M)}{\hat{V}}
\equiv
\frac{1}{n}\sum_{i=1}^n
(\tilde{y}_i-\tilde{F}_i\hat{\beta}_{FE})
(\tilde{y}_i-\tilde{F}_i\hat{\beta}_{FE})'
\tag{5.2.9}
$$

:::

^prop-5-1

**Digression: When $\eta_i$ is Spherical**

假设二阶误差项 $\eta_i$ 是球形扰动（Spherical）：

$$
\mathbb{E}[\eta_i \eta_i'] = \sigma_\eta^2 I_M \implies \mathbb{E}[\tilde{\eta}_i \tilde{\eta}_i'] = \sigma_\eta^2 Q
\tag{5.2.12}
$$

此时，渐近方差可以简化为：

$$
\text{Avar}(\hat{\beta}_{FE}) = \sigma_\eta^2 \left[ \mathbb{E}(\tilde{F}_i'\tilde{F}_i) \right]^{-1}
\tag{5.2.13}
$$

并且可一致估计为

$$
\widehat{\text{Avar}}(\hat{\beta}_{FE})
=
\hat{\sigma}_\eta^2
\left(\frac{1}{n}\sum_{i=1}^n \tilde{F}_i'\tilde{F}_i\right)^{-1}
\tag{5.2.14}
$$

其中 $\hat{\sigma}_\eta^2$ 是 $\sigma_\eta^2$ 的一致估计量。

To extend the OLS analogy, define

$$
SSR
=
(\tilde{y}-\tilde{F}\hat{\beta}_{FE})'(\tilde{y}-\tilde{F}\hat{\beta}_{FE})
=
\sum_{i=1}^n
(\tilde{y}_i-\tilde{F}_i\hat{\beta}_{FE})'
(\tilde{y}_i-\tilde{F}_i\hat{\beta}_{FE})
\tag{5.2.15}
$$

则一个常用的一致估计量为

$$
\hat{\sigma}_\eta^2 = \frac{SSR}{Mn-n-\#\beta}
\tag{5.2.17}
$$

分母不是 $Mn-\#\beta$，因为 within transformation 等价于为每个个体去掉一个 group mean，自由度再减少 $n$。

### Random Effects vs Fixed Effects

Comparing `(5.2.6)` with `(5.1.8)`, the orthogonality conditions not required by the fixed-effects estimator are

$$
\mathbb{E}(f_{im}'\alpha_i)=0\ \text{for all }m,\qquad
\mathbb{E}(b_i\alpha_i)=0,\qquad
\mathbb{E}(b_i\eta_{im})=0\ \text{for all }m
\tag{5.2.18}
$$

Let $\hat{\beta}_{RE}$ be the elements of $\hat{\delta}_{RE}$ that correspond to $\beta$:

$$
\hat{\delta}_{RE}\equiv
\begin{bmatrix}
\hat{\beta}_{RE}\\
\hat{\gamma}_{RE}
\end{bmatrix}
\tag{5.2.19}
$$

Define

$$
\hat{q}\equiv \hat{\beta}_{FE}-\hat{\beta}_{RE}
\tag{5.2.20}
$$

and let $\text{Avar}(\hat{\beta}_{RE})$ be the asymptotic variance of $\hat{\beta}_{RE}$.  
The Hausman principle implies

$$
\text{Avar}(\hat{q})=\text{Avar}(\hat{\beta}_{FE})-\text{Avar}(\hat{\beta}_{RE})
\tag{5.2.21}
$$

:::{admonition} Proposition
Proposition 5.2 (Hausman Specification Test)
Suppose the assumptions of the error-components model (`(5.1.1'')`, `(5.1.2)`, `(5.1.8)`, `(5.1.4)`-`(5.1.6)`, and `(5.1.15)`) hold. Define $\hat{q}$ and $\widehat{\text{Avar}}(\hat{q})$ as above. Then the Hausman statistic is

$$
H \equiv n\,\hat{q}'\left(\widehat{\text{Avar}}(\hat{q})\right)^{-1}\hat{q}
\tag{5.2.22}
$$
and is asymptotically $\chi^2$ with $\#\beta$ degrees of freedom.

:::

^prop-5-2

### Relaxing Conditional Homoskedasticity

:::{admonition} Proposition
Proposition 5.3 (Fixed-Effects Estimator without Conditional Homoskedasticity)
Drop conditional homoskedasticity `(5.1.5)` from Proposition 5.1. Define $\tilde{y}_i,\tilde{F}_i,\tilde{\eta}_i$ by `(5.2.2)`. Then:

$$
\text{Avar}(\hat{\beta}_{FE})
=
\left[\mathbb{E}(\tilde{F}_i'\tilde{F}_i)\right]^{-1}
\mathbb{E}(\tilde{F}_i'\tilde{\eta}_i\tilde{\eta}_i'\tilde{F}_i)
\left[\mathbb{E}(\tilde{F}_i'\tilde{F}_i)\right]^{-1}
\tag{5.2.23}
$$
If an appropriate finite fourth-moment condition holds, a consistent estimator is

$$
\widehat{\text{Avar}}(\hat{\beta}_{FE})
=
\left(\frac{1}{n}\sum_{i=1}^n \tilde{F}_i'\tilde{F}_i\right)^{-1}
\left(\frac{1}{n}\sum_{i=1}^n \tilde{F}_i'\hat{\eta}_i\hat{\eta}_i'\tilde{F}_i\right)
\left(\frac{1}{n}\sum_{i=1}^n \tilde{F}_i'\tilde{F}_i\right)^{-1}
\tag{5.2.24}
$$
where $\hat{\eta}_i\equiv \tilde{y}_i-\tilde{F}_i\hat{\beta}_{FE}$.

:::

## Growth Convergence Panel Application

研究国家的经济增长率（Do poor economies grow faster than rich economies?）。

### Growth-Convergence Estimation Equation

Do poor economies grow faster than rich economies? 这一节先推导可估计方程，再讨论如何一致估计收敛速度。

在 neoclassical growth theory 中，单位有效劳动产出 $q(t)$ 收敛到稳态 $q^*$。其稳态附近的 log-linear approximation 为

$$
\frac{d\log(q(t))}{dt}=\lambda\,[\log(q^*)-\log(q(t))]
\tag{5.4.1}
$$

对任意相邻时点 $t_m,t_{m-1}$，可写成

$$
\log(q(t_m))=(1-\rho)\log(q^*)+\rho\log(q(t_{m-1}))
\tag{5.4.2}
$$

其中

$$
\rho\equiv \exp[-\lambda\,(t_m-t_{m-1})].
\tag{5.4.3}
$$

定义单位有效劳动产出

$$
q(t)\equiv \frac{Y(t)}{A(t)L(t)}
\tag{5.4.4}
$$

若 $A(t)=A(0)\exp(gt)$，则

$$
\log(q(t))=\log\!\left(\frac{Y(t)}{L(t)}\right)-\log(A(0))-g\,t
\tag{5.4.5}
$$

将 `(5.4.5)` 代入 `(5.4.2)` 得

$$
\log\!\left(\frac{Y(t_m)}{L(t_m)}\right)
=
\rho\log\!\left(\frac{Y(t_{m-1})}{L(t_{m-1})}\right)
+
(1-\rho)\,[\log(q^*)+\log(A(0))]
+
\phi_m
\tag{5.4.6}
$$

其中

$$
\phi_m \equiv g\,(t_m-\rho\,t_{m-1}).
\tag{5.4.7}
$$

与 `(5.4.6)` 等价的一种写法是

$$
\log\!\left(\frac{Y(t_m)}{L(t_m)}\right)
-
\log\!\left(\frac{Y(t_{m-1})}{L(t_{m-1})}\right)
=
(\rho-1)\log\!\left(\frac{Y(t_{m-1})}{L(t_{m-1})}\right)
+
(1-\rho)\,[\log(q^*)+\log(A(0))]
+
\phi_m
\tag{5.4.6'}
$$

这更直观地说明：初始人均收入越低，后续增长越高（conditional convergence）。但为选择估计方法，`(5.4.6)` 更直接。

若进一步假设收敛速度 $\lambda$ 与技术增长率 $g$ 在各国相同，则对国家 $i$ 可整理为：

$$
y_{im} = \phi_m + \rho y_{i,m-1} + \alpha_i
\tag{5.4.8}
$$

其中

$$
y_{im}=\log\!\left(\frac{Y(t_m)}{L(t_m)}\right)
\quad \text{for country } i
\tag{5.4.9}
$$

以及

$$
\alpha_i=(1-\rho)\{\log(q_i^*)+\log(A_i(0))\}
\quad \text{for country } i.
$$

### Growth Regression Error Term

应用计量中，常见做法是先从理论得到无误差项方程，再附加误差项用于估计。向 `(5.4.8)` 加入 $\eta_{im}$ 得

$$
y_{im} = \phi_m + \rho y_{i,m-1} + \alpha_i + \eta_{im}
\tag{5.4.10}
$$

可将 $\eta_{im}$ 理解为商业周期冲击（actual output 与 potential output 的偏离）。这会带来两类问题：

1. 可能存在 errors-in-variables 导致的内生性。
2. 跨国误差可能相关（国际商业周期联动），即空间相关可能为正。

**The Treatment of $\alpha_i$**

由 `(5.4.9)` 可见，`(5.4.10)` 中的 $\alpha_i$ 依赖于稳态水平 $q_i^*$ 与初始技术水平 $A_i(0)$。

若按 Cass-Koopmans 最优增长模型，稳态水平主要由劳动增长率决定。若知识国际流动使 $A_i(0)$ 在各国接近一致，则跨国 $\alpha_i$ 差异可主要由劳动增长率解释；此时在回归中加入劳动增长率控制项，OLS 可能一致。

若采用 Solow-Swan 框架，储蓄率也是 $q_i^*$ 的决定因素，因此回归中应同时加入储蓄率与劳动增长率。

在 conditional convergence 设定下，还可加入政治稳定、金融中介发展程度等变量来控制 $\alpha_i$。但通常仍有一部分 $\alpha_i$ 无法完全观测，会进入误差并与回归元 $y_{i,m-1}$ 相关，因此更稳妥做法是将 $\alpha_i$ 视作 unobservable fixed effect。

### Speed-of-Convergence Consistency

给定 $M+1$ 个时点 $t_0,t_1,\dots,t_M$，方程 `(5.4.10)` 对 $m=1,\dots,M$ 构成一个动态的 $M$-equation system。虽然可对该系统应用 fixed-effects 技术，但在动态面板中并不一致，因为部分回归元是其他方程的被解释变量滞后值。

例如前两条方程：

$$
\begin{aligned}
y_{i1} &= \phi_1 + \rho y_{i0} + \alpha_i + \eta_{i1} \\
y_{i2} &= \phi_2 + \rho y_{i1} + \alpha_i + \eta_{i2}
\end{aligned}
$$

由此可见

$$
\mathbb{E}(y_{i1}\eta_{i1})=\text{Var}(\eta_{i1})\neq 0,
$$

cross orthogonalities 被破坏。

可行方式是一阶差分得到 $M-1$ 条方程：

$$
\begin{aligned}
y_{i2}-y_{i1} &= \mu_1 + \rho(y_{i1}-y_{i0}) + (\eta_{i2}-\eta_{i1}) \\
y_{i3}-y_{i2} &= \mu_2 + \rho(y_{i2}-y_{i1}) + (\eta_{i3}-\eta_{i2}) \\
&\ \vdots \\
y_{iM}-y_{i,M-1} &= \mu_{M-1} + \rho(y_{i,M-1}-y_{i,M-2}) + (\eta_{iM}-\eta_{i,M-1}),
\end{aligned}
\quad
\mu_m\equiv \phi_{m+1}-\phi_m
\tag{5.4.11}
$$

但 equation-by-equation OLS 或 random-effects 在该差分系统下仍不一致，因为回归元与差分误差不正交（如第一条中 $y_{i1}-y_{i0}$ 与 $\eta_{i2}-\eta_{i1}$ 相关）。

因此需借助有效工具变量，用 multiple-equation GMM 才能实现一致估计（作业里可用 saving rate 作为工具变量做检验）。
