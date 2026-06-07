# Econometrics

### 1. Residual Variance Consistency and CLT

Consider

$$
\left\{
\begin{aligned}
&y_i=x_i'\beta+\varepsilon_i,\qquad i=1,\dots,n\\
&x_i\in\mathbb R^k,\qquad k\text{ fixed}\\
&\{(x_i,\varepsilon_i)\}_{i=1}^n\text{ i.i.d.}\\
&E[x_i\varepsilon_i]=0,\qquad Q=E[x_ix_i']\succ0,\qquad \sigma^2=E[\varepsilon_i^2]\\
&\hat\varepsilon=y-X\hat\beta=M_X\varepsilon,\qquad M_X=I-X(X'X)^{-1}X'\\
&s^2=\dfrac{\hat\varepsilon'\hat\varepsilon}{n-k}.
\end{aligned}
\right.
$$

Show the consistency and limiting distribution of $s^2$.

::::{collapse} Basic setup

目标是证明 residual sum of squares decomposition 的 scaling 下有

$$
\left\{
\begin{aligned}
&s^2\overset p\to\sigma^2\\
&\sqrt n(s^2-\sigma^2)\overset d\to N(0,E[\varepsilon_i^4]-\sigma^4),\qquad E[\varepsilon_i^4]<\infty.
\end{aligned}
\right.
$$

::::


### 2. 2SLS Coefficient as One-Dimensional IV

考虑一个含有一个内生变量 $D$、控制变量 $X$ 和 excluded instruments $Z$ 的 2SLS 模型：

$$
\left\{
\begin{aligned}
&Y=D\eta+X\Gamma+\varepsilon\\
&W=[X,Z],\qquad P_W=W(W'W)^{-1}W'\\
&P_X=X(X'X)^{-1}X',\qquad M_X=I-P_X\\
&\tilde D=P_WD,\qquad \hat D=M_X\tilde D=M_XP_WD\\
&M_0=I-\frac1N\mathbf 1\mathbf 1',\qquad X\text{ contains }\mathbf 1.
\end{aligned}
\right.
$$

证明 2SLS 中 $D$ 的系数 $\hat\eta$ 等于以 $\hat D$ 为工具变量的一元 IV 估计量：

$$
\hat\gamma =
\frac{\sum_i(Y_i-\bar Y)(\hat D_i-\bar{\hat D})}
{\sum_i(D_i-\bar D)(\hat D_i-\bar{\hat D})},
$$

当 $Z$ 为标量时，它也等于以 $\hat Z=M_XZ$ 为工具变量的一元 IV 估计量：

$$
\hat\delta =
\frac{\sum_i(Y_i-\bar Y)(\hat Z_i-\bar{\hat Z})}
{\sum_i(D_i-\bar D)(\hat Z_i-\bar{\hat Z})}.
$$

::::{collapse} Basic setup

假设 $X'X$ 和 $W'W$ 非奇异，$\operatorname{col}(X)\subseteq\operatorname{col}(W)$，且相关分母非零：

$$
\hat D'D\neq0,\qquad
\hat Z'D\neq0\quad \text{when }Z\text{ is scalar.}
$$

核心投影恒等式：

$$
\left\{
\begin{aligned}
&P_WP_X=P_XP_W=P_X\\
&M_XP_W=P_WM_X=P_W-P_X\\
&M_X\mathbf 1=0.
\end{aligned}
\right.
$$

::::

::::{solution}

**FWL reduction of 2SLS**

第二阶段把 $Y$ 对 $[\tilde D,X]$ 做 OLS。由 FWL，

$$
\begin{aligned}
\hat\eta
&=(\tilde D'M_X\tilde D)^{-1}\tilde D'M_XY
=(D'P_WM_XP_WD)^{-1}D'P_WM_XY.
\end{aligned}
$$

$$
P_WM_XP_W=P_W(I-P_X)P_W=P_W-P_WP_XP_W=P_W-P_X=M_XP_W.
$$

$$
\begin{aligned}
\tilde D'M_X\tilde D
&=D'P_WM_XP_WD=D'M_XP_WD=\hat D'D=\hat D'\hat D,\\
\tilde D'M_XY
&=D'P_WM_XY=D'(P_W-P_X)Y=(M_XP_WD)'Y=\hat D'Y.
\end{aligned}
$$

$$
\hat\eta=\frac{\hat D'Y}{\hat D'D}=\frac{\hat D'Y}{\hat D'\hat D}.
$$

**Equivalence with $\hat\gamma$**

$$
\bar{\hat D}=0\Longleftrightarrow \mathbf 1'\hat D=0\Longleftrightarrow M_0\hat D=\hat D.
$$

$$
\hat\gamma=\frac{\hat D'M_0Y}{\hat D'M_0D}=\frac{\hat D'Y}{\hat D'D}=\hat\eta.
$$

**Scalar instrument case**

当 $Z$ 为标量时，定义 $\hat Z=M_XZ$。由于 $\hat Z\perp X$，

$$
P_W=P_{[X,Z]}=P_X+P_{\hat Z}=P_X+\frac{\hat Z\hat Z'}{\hat Z'\hat Z}.
$$

$$
\hat D=M_XP_WD=M_X\left(P_X+\frac{\hat Z\hat Z'}{\hat Z'\hat Z}\right)D=\frac{\hat Z\hat Z'D}{\hat Z'\hat Z}=\left(\frac{\hat Z'D}{\hat Z'\hat Z}\right)\hat Z=c\hat Z.
$$

$X$ 含有常数项，$\bar{\hat Z}=0$ 且 $M_0\hat Z=\hat Z$。

$$
\hat\delta=\frac{\hat Z'M_0Y}{\hat Z'M_0D}=\frac{\hat Z'Y}{\hat Z'D}=\frac{c\hat Z'Y}{c\hat Z'D}=\frac{\hat D'Y}{\hat D'D}=\hat\gamma=\hat\eta.
$$

$$
\hat\eta=\hat\gamma,
\qquad
Z\text{ scalar }\Longrightarrow \hat\eta=\hat\gamma=\hat\delta.
$$

::::


### 3. Balanced Panel DID Mean Expressions

考虑一个有前、后期划分的 balanced panel DiD 设计：

$$
\left\{
\begin{aligned}
&D_{it}=D_i\mathbf 1[t\ge t^*],\qquad D_i\in\{0,1\}\\
&T_{pre}=t^*-1,\qquad T_{post}=T-t^*+1,\qquad T=T_{pre}+T_{post}\\
&N_d=\sum_{i=1}^N\mathbf 1[D_i=d],\qquad N=N_0+N_1\\
&\bar Y_d^{post}=\frac1{T_{post}}\sum_{t=t^*}^T\bar Y_{dt},\qquad
\bar Y_d^{pre}=\frac1{T_{pre}}\sum_{t=1}^{t^*-1}\bar Y_{dt}.
\end{aligned}
\right.
$$

推导 $\hat\beta_{unit}$、$\hat\beta_{time}$ 和 $\hat\beta_{ddmn}$ 的精确均值表达式。

::::{collapse} Basic setup

$D_{it}$ 的相关均值：

$$
\bar D_i=D_i\frac{T_{post}}T,\qquad
\bar D_{\cdot t}=\frac{N_1}{N}\mathbf 1[t\ge t^*],\qquad
\bar D=\frac{N_1T_{post}}{NT}.
$$

为保证残差化后的 regressor 有非零变异，假设

$$
N_1>0,\qquad N_0>0,\qquad T_{pre}>0,\qquad T_{post}>0.
$$

::::

::::{solution}

**Unit fixed effects only**

个体组内离差：

$$
D_{it}-\bar D_i
=D_i\left(\mathbf 1[t\ge t^*]-\frac{T_{post}}T\right) =
\begin{cases}
-\dfrac{T_{post}}T, & D_i=1,\ t<t^*\\
\dfrac{T_{pre}}T, & D_i=1,\ t\ge t^*\\
0, & D_i=0.
\end{cases}
$$

正交性：$\sum_{i,t}\dot D_{it}\dot Y_{it}=\sum_{i,t}\dot D_{it}Y_{it}$。

$$
\sum_{i,t}\dot D_{it}^2
=N_1\left[T_{pre}\left(\frac{T_{post}}T\right)^2+T_{post}\left(\frac{T_{pre}}T\right)^2\right]
=N_1\frac{T_{pre}T_{post}}T.
$$

$$
\begin{aligned}
\sum_{i,t}\dot D_{it}Y_{it}
&=N_1\left[-\frac{T_{post}}T\cdot T_{pre}\bar Y_1^{pre}
+\frac{T_{pre}}T\cdot T_{post}\bar Y_1^{post}\right]\\
&=N_1\frac{T_{pre}T_{post}}T\left(\bar Y_1^{post}-\bar Y_1^{pre}\right).
\end{aligned}
$$

$$
\hat\beta_{unit}
=\bar Y_1^{post}-\bar Y_1^{pre}.
$$

含义：只使用 treated group 自身的 before-after 变化；识别要求没有共同时间趋势冲击，否则混入 time effect。

**Time fixed effects only**

时间截面离差：

$$
D_{it}-\bar D_{\cdot t} =
\begin{cases}
0, & t<t^*\\
\dfrac{N_0}{N}, & D_i=1,\ t\ge t^*\\
-\dfrac{N_1}{N}, & D_i=0,\ t\ge t^*.
\end{cases}
$$

$$
\sum_{t,i}\dot D_{it}^2
=T_{post}\left[N_1\left(\frac{N_0}N\right)^2+N_0\left(\frac{N_1}N\right)^2\right]
=T_{post}\frac{N_1N_0}{N}.
$$

$$
\begin{aligned}
\sum_{t,i}\dot D_{it}Y_{it}
&=T_{post}\left[\frac{N_0}N\cdot N_1\bar Y_1^{post}
-\frac{N_1}N\cdot N_0\bar Y_0^{post}\right]\\
&=T_{post}\frac{N_1N_0}{N}\left(\bar Y_1^{post}-\bar Y_0^{post}\right).
\end{aligned}
$$

$$
\hat\beta_{time}
=\bar Y_1^{post}-\bar Y_0^{post}.
$$

含义：只使用 post-period 的 treated-control 横截面差异；识别要求没有基期组间差异，否则混入 selection effect。

**Two-way fixed effects**

双重离差可分解成 group component 和 time component：

$$
\ddot D_{it}
=D_{it}-\bar D_i-\bar D_{\cdot t}+\bar D
=\left(D_i-\frac{N_1}N\right)\left(\mathbf 1[t\ge t^*]-\frac{T_{post}}T\right).
$$

$$
\sum_{i,t}\ddot D_{it}^2
=\left[\sum_i\left(D_i-\frac{N_1}N\right)^2\right]
\left[\sum_t\left(\mathbf 1[t\ge t^*]-\frac{T_{post}}T\right)^2\right]
=\frac{N_1N_0}{N}\cdot\frac{T_{pre}T_{post}}T.
$$

$$
\begin{aligned}
\sum_{i,t}\ddot D_{it}Y_{it}
&=\frac{N_0}{N}\frac{T_{pre}}T N_1T_{post}\bar Y_1^{post}
-\frac{N_0}{N}\frac{T_{post}}T N_1T_{pre}\bar Y_1^{pre}\\
&\quad-\frac{N_1}{N}\frac{T_{pre}}T N_0T_{post}\bar Y_0^{post}
+\frac{N_1}{N}\frac{T_{post}}T N_0T_{pre}\bar Y_0^{pre}\\
&=\frac{N_1N_0T_{pre}T_{post}}{NT}
\left(\bar Y_1^{post}-\bar Y_1^{pre}-\bar Y_0^{post}+\bar Y_0^{pre}\right).
\end{aligned}
$$

$$
\hat\beta_{ddmn}
=\left(\bar Y_1^{post}-\bar Y_1^{pre}\right)
-\left(\bar Y_0^{post}-\bar Y_0^{pre}\right).
$$

含义：TWFE 系数等于 canonical DiD；它同时扣除 time-invariant group differences 和 common time shocks。因果识别需要 parallel trends：

$$
E[Y_{1}^{0,post}-Y_{1}^{0,pre}]
=E[Y_{0}^{0,post}-Y_{0}^{0,pre}].
$$

**Summary**

$$
\left\{
\begin{aligned}
&\hat\beta_{unit}=\bar Y_1^{post}-\bar Y_1^{pre}\\
&\hat\beta_{time}=\bar Y_1^{post}-\bar Y_0^{post}\\
&\hat\beta_{ddmn}=(\bar Y_1^{post}-\bar Y_1^{pre})-(\bar Y_0^{post}-\bar Y_0^{pre}).
\end{aligned}
\right.
$$

::::


### 4. Fuzzy RDD Local Linear Wald Ratio

Consider fuzzy RDD with uniform kernel and common bandwidth $h$:

$$
\left\{
\begin{aligned}
&Z_i=\mathbf 1[R_i\ge c],\qquad S_h=\{i:c-h\le R_i\le c+h\}\\
&W_i=\left(1,\ Z_i,\ R_i-c,\ Z_i(R_i-c)\right)'\\
&\hat Y_i=W_i'\hat\theta,\qquad \hat D_i=W_i'\hat\pi\\
&\hat\alpha_Y^1-\hat\alpha_Y^0=\hat\theta_1,\qquad
\hat\alpha_D^1-\hat\alpha_D^0=\hat\pi_1,\qquad \hat\pi_1\neq0.
\end{aligned}
\right.
$$

Show that local linear 2SLS equals the Wald-FRD ratio:

$$
\hat\beta=\frac{\hat\alpha_Y^1-\hat\alpha_Y^0}{\hat\alpha_D^1-\hat\alpha_D^0}.
$$

::::{collapse} Basic setup

Uniform kernel means ordinary OLS inside $S_h$; reduced form, first stage, and second stage use the same local linear basis.

$$
W=\begin{bmatrix}W_1'\\ \vdots\\ W_{|S_h|}'\end{bmatrix},
\qquad
\hat\theta=(W'W)^{-1}W'Y,\qquad
\hat\pi=(W'W)^{-1}W'D.
$$

::::

::::{solution}

**Reduced form and first stage jumps**

$$
\hat Y_i=\hat\theta_0+\hat\theta_1Z_i+\hat\theta_2(R_i-c)+\hat\theta_3Z_i(R_i-c),
\qquad
\hat D_i=\hat\pi_0+\hat\pi_1Z_i+\hat\pi_2(R_i-c)+\hat\pi_3Z_i(R_i-c).
$$

At $R_i=c$:

$$
\left\{
\begin{aligned}
&\hat\alpha_Y^0=\hat\theta_0,\qquad \hat\alpha_Y^1=\hat\theta_0+\hat\theta_1,\qquad \hat\theta_1=\hat\alpha_Y^1-\hat\alpha_Y^0\\
&\hat\alpha_D^0=\hat\pi_0,\qquad \hat\alpha_D^1=\hat\pi_0+\hat\pi_1,\qquad \hat\pi_1=\hat\alpha_D^1-\hat\alpha_D^0.
\end{aligned}
\right.
$$

**2SLS projection space**

$$
\hat D_i=\hat\pi_0+\hat\pi_1Z_i+\hat\pi_2(R_i-c)+\hat\pi_3Z_i(R_i-c),\qquad \hat\pi_1\neq0.
$$

$$
Z_i=\frac{1}{\hat\pi_1}\left[\hat D_i-\hat\pi_0-\hat\pi_2(R_i-c)-\hat\pi_3Z_i(R_i-c)\right],
$$

$$
\operatorname{span}\{1,\hat D_i,R_i-c,Z_i(R_i-c)\}
=\operatorname{span}\{1,Z_i,R_i-c,Z_i(R_i-c)\}.
$$

$$
\hat Y_i=\hat\beta\hat D_i+\hat\gamma_0+\hat\gamma_1(R_i-c)+\hat\gamma_2Z_i(R_i-c).
$$

$$
\begin{aligned}
\hat Y_i
&=\hat\beta\left[\hat\pi_0+\hat\pi_1Z_i+\hat\pi_2(R_i-c)+\hat\pi_3Z_i(R_i-c)\right]+\hat\gamma_0+\hat\gamma_1(R_i-c)+\hat\gamma_2Z_i(R_i-c)\\
&=(\hat\beta\hat\pi_0+\hat\gamma_0)+\hat\beta\hat\pi_1Z_i+(\hat\beta\hat\pi_2+\hat\gamma_1)(R_i-c)+(\hat\beta\hat\pi_3+\hat\gamma_2)Z_i(R_i-c).
\end{aligned}
$$

$$
\hat Y_i=\hat\theta_0+\hat\theta_1Z_i+\hat\theta_2(R_i-c)+\hat\theta_3Z_i(R_i-c).
$$

Coefficient matching on $Z_i$:

$$
\hat\beta\hat\pi_1=\hat\theta_1,\qquad
\hat\beta=\frac{\hat\theta_1}{\hat\pi_1}
=\frac{\hat\alpha_Y^1-\hat\alpha_Y^0}{\hat\alpha_D^1-\hat\alpha_D^0}.
$$

含义：uniform-kernel local linear FRD 的 2SLS coefficient 是 local Wald ratio；分子是 outcome discontinuity，分母是 treatment take-up discontinuity。识别对象是 cutoff 附近 compliers 的 LATE。

::::


### 5. DID Estimator 与 ATE/ATT 推导

#DID #parallel_trends #ATE #ATT

**Setup** 考虑经典 DID 设定：

- 两个时期：$t \in \{0, 1\}$（处理前、处理后）
- 两组：$D_i \in \{0, 1\}$（对照组、处理组）
- Treatment 在 $t=1$ 时施加于 $D_i=1$ 的单位
- Outcome：$Y_{it}$

**Potential outcomes**：
- $Y_{it}(0)$：不接受处理的潜在结果
- $Y_{it}(1)$：接受处理的潜在结果

**观测结果**：

$$
Y_{it} = Y_{it}(0) + D_i \cdot \mathbb{1}\{t=1\} \cdot [Y_{it}(1) - Y_{it}(0)].
$$

**Part A: 推导 DID 估计量**

**A.1** 定义四个均值：

$$
\begin{aligned}
\bar Y_{11} &= E[Y_{i1} | D_i = 1], \\
\bar Y_{10} &= E[Y_{i0} | D_i = 1], \\
\bar Y_{01} &= E[Y_{i1} | D_i = 0], \\
\bar Y_{00} &= E[Y_{i0} | D_i = 0].
\end{aligned}
$$

写出 DID 估计量：

$$
\hat\tau^{DID} = (\bar Y_{11} - \bar Y_{10}) - (\bar Y_{01} - \bar Y_{00}).
$$

::::{solution}


**A.1 DID 估计量定义**

DID 估计量测量处理组和对照组在时间差异上的差异：

$$
\begin{aligned}
\hat\tau^{DID}
&= \underbrace{(\bar Y_{11} - \bar Y_{10})}_{\text{treated group change}} - \underbrace{(\bar Y_{01} - \bar Y_{00})}_{\text{control group change}} \\
&= (\text{处理组的时间变化}) - (\text{对照组的时间变化}).
\end{aligned}
$$

::::

**A.2** 假设 **parallel trends**：

$$
E[Y_{i1}(0) - Y_{i0}(0) | D_i = 1] = E[Y_{i1}(0) - Y_{i0}(0) | D_i = 0].
$$

证明在此假设下，$\hat\tau^{DID}$ 识别 ATT (Average Treatment Effect on the Treated)：

$$
\text{ATT} = E[Y_{i1}(1) - Y_{i1}(0) | D_i = 1].
$$

**Part B: ATE vs ATT**

::::{solution}

**A.2 识别 ATT**

展开观测均值（注意 $t=1$ 时处理组接受处理，$t=0$ 时两组都未处理）：

$$
\begin{aligned}
\bar Y_{11} &= E[Y_{i1}(1) | D_i = 1], \\
\bar Y_{10} &= E[Y_{i0}(0) | D_i = 1], \\
\bar Y_{01} &= E[Y_{i1}(0) | D_i = 0], \\
\bar Y_{00} &= E[Y_{i0}(0) | D_i = 0].
\end{aligned}
$$

代入 DID 估计量：

$$
\begin{aligned}
\hat\tau^{DID}
&= [E[Y_{i1}(1) | D_i = 1] - E[Y_{i0}(0) | D_i = 1]] \\
&\quad - [E[Y_{i1}(0) | D_i = 0] - E[Y_{i0}(0) | D_i = 0]].
\end{aligned}
$$

加减 $E[Y_{i1}(0) | D_i = 1]$：

$$
\begin{aligned}
\hat\tau^{DID}
&= \underbrace{[E[Y_{i1}(1) | D_i = 1] - E[Y_{i1}(0) | D_i = 1]]}_{\text{ATT}} \\
&\quad + \underbrace{[E[Y_{i1}(0) | D_i = 1] - E[Y_{i0}(0) | D_i = 1]]}_{\text{处理组的反事实趋势}} \\
&\quad - \underbrace{[E[Y_{i1}(0) | D_i = 0] - E[Y_{i0}(0) | D_i = 0]]}_{\text{对照组的实际趋势}}.
\end{aligned}
$$

在 **parallel trends 假设**下：

$$
E[Y_{i1}(0) - Y_{i0}(0) | D_i = 1] = E[Y_{i1}(0) - Y_{i0}(0) | D_i = 0],
$$

后两项相消：

$$
\hat\tau^{DID} = E[Y_{i1}(1) - Y_{i1}(0) | D_i = 1] = \text{ATT}.
$$

**关键**：parallel trends 假设对照组的趋势可以代表处理组在无处理情况下的反事实趋势。

::::

**B.1** 定义 ATE (Average Treatment Effect)：

$$
\text{ATE} = E[Y_{i1}(1) - Y_{i1}(0)].
$$

解释为什么 DID 通常只能识别 ATT 而非 ATE。

::::{solution}

**B.1 DID 识别 ATT 而非 ATE**

ATE 是全体人口的平均处理效应：

$$
\text{ATE} = E[Y_{i1}(1) - Y_{i1}(0)].
$$

DID 只观测到处理组的处理效应，无法观测对照组的处理效应：

$$
\text{ATT} = E[Y_{i1}(1) - Y_{i1}(0) | D_i = 1].
$$

**为什么不能识别 ATE**：

1. **Selection into treatment**：处理组和对照组可能在处理效应上异质
   - 例：处理组是"early adopters"，对处理更敏感
   - $E[Y_{i1}(1) - Y_{i1}(0) | D_i = 1] \ne E[Y_{i1}(1) - Y_{i1}(0) | D_i = 0]$

2. **Counterfactual 不可观测**：
   - 对照组的 $Y_{i1}(1)$ 永远不可观测
   - 无法知道对照组接受处理会怎样

::::

**B.2** 在什么额外假设下，ATT = ATE？

::::{solution}

**B.2 ATT = ATE 的条件**

需要 **treatment effect homogeneity**：

$$
Y_{i1}(1) - Y_{i1}(0) = \tau \quad\text{for all } i,
$$

即所有单位的处理效应相同。

或者更弱的条件：**处理效应与处理状态独立**：

$$
Y_{i1}(1) - Y_{i1}(0) \perp D_i,
$$

即处理效应的分布在处理组和对照组中相同。

在这些条件下：

$$
\begin{aligned}
\text{ATT}
&= E[Y_{i1}(1) - Y_{i1}(0) | D_i = 1] \\
&= E[Y_{i1}(1) - Y_{i1}(0)] \\
&= \text{ATE}.
\end{aligned}
$$

**实践意义**：
- 大多数政策评估关注 ATT（对实际接受处理者的效应）
- 外推到全体人口（ATE）需要额外假设
- Randomized experiments 下 ATT = ATE（随机化保证独立性）

::::




### 6. DDD Estimator 推导

#DDD #triple_differences #placebo_group

**Setup** 考虑 DDD 设定，在 DID 基础上增加第三个维度：

- 时期：$t \in \{0, 1\}$
- 处理组/对照组：$D_i \in \{0, 1\}$
- **额外维度**：$G_i \in \{0, 1\}$（例如：性别、地区、行业等）

Treatment 只施加于 $D_i = 1, G_i = 1, t = 1$ 的单位。

**Part A: DDD 估计量**

**A.1** 定义八个均值：

$$
\bar Y_{dtg} = E[Y_{it} | D_i = d, t = t, G_i = g], \quad d, t, g \in \{0, 1\}.
$$

写出 DDD 估计量：

$$
\hat\tau^{DDD} = [(\bar Y_{111} - \bar Y_{110}) - (\bar Y_{011} - \bar Y_{010})] - [(\bar Y_{101} - \bar Y_{100}) - (\bar Y_{001} - \bar Y_{000})].
$$

解释这个估计量的直觉。

::::{solution}

**A.1 DDD 估计量直觉**

DDD 估计量是"差分的差分的差分"：

第一层差分（时间）：

$$
\begin{aligned}
\Delta_t^{D=1, G=1} &= \bar Y_{111} - \bar Y_{110}, \\
\Delta_t^{D=0, G=1} &= \bar Y_{011} - \bar Y_{010}, \\
\Delta_t^{D=1, G=0} &= \bar Y_{101} - \bar Y_{100}, \\
\Delta_t^{D=0, G=0} &= \bar Y_{001} - \bar Y_{000}.
\end{aligned}
$$

第二层差分（处理 vs 对照，分别对两个 $G$ 组）：

$$
\begin{aligned}
\text{DID}_{G=1} &= \Delta_t^{D=1, G=1} - \Delta_t^{D=0, G=1}, \\
\text{DID}_{G=0} &= \Delta_t^{D=1, G=0} - \Delta_t^{D=0, G=0}.
\end{aligned}
$$

第三层差分（$G=1$ 组的 DID 减去 $G=0$ 组的 DID）：

$$
\hat\tau^{DDD} = \text{DID}_{G=1} - \text{DID}_{G=0}.
$$

**直觉**：
- $G=0$ 组作为"placebo"（也经历时间和处理状态的变化，但不受真实处理影响）
- 控制所有 $D$ 组和非 $D$ 组共同的时间趋势差异
- 只保留 $G=1 \cap D=1$ 组在 $t=1$ 时的独特变化

::::

**A.2** 用回归形式表示 DDD。考虑回归：

$$
Y_{it} = \alpha + \beta_1 D_i + \beta_2 \mathbb{1}\{t=1\} + \beta_3 G_i + \beta_4 D_i \cdot \mathbb{1}\{t=1\} + \beta_5 D_i \cdot G_i + \beta_6 \mathbb{1}\{t=1\} \cdot G_i + \tau D_i \cdot \mathbb{1}\{t=1\} \cdot G_i + \varepsilon_{it}.
$$

证明 $\tau = \hat\tau^{DDD}$。

::::{solution}

**A.2 回归形式**

展开回归，对于 $D_i = 1, t = 1, G_i = 1$ 的单位：

$$
\begin{aligned}
E[Y_{it} | D_i = 1, t = 1, G_i = 1]
&= \alpha + \beta_1 + \beta_2 + \beta_3 + \beta_4 + \beta_5 + \beta_6 + \tau.
\end{aligned}
$$

类似地，计算其他七个组合的条件期望，得到：

$$
\begin{aligned}
\bar Y_{111} &= \alpha + \beta_1 + \beta_2 + \beta_3 + \beta_4 + \beta_5 + \beta_6 + \tau, \\
\bar Y_{110} &= \alpha + \beta_1 + \beta_3 + \beta_5, \\
\bar Y_{011} &= \alpha + \beta_2 + \beta_3 + \beta_6, \\
\bar Y_{010} &= \alpha + \beta_3, \\
\bar Y_{101} &= \alpha + \beta_1 + \beta_2 + \beta_4, \\
\bar Y_{100} &= \alpha + \beta_1, \\
\bar Y_{001} &= \alpha + \beta_2, \\
\bar Y_{000} &= \alpha.
\end{aligned}
$$

计算 DDD：

$$
\begin{aligned}
&(\bar Y_{111} - \bar Y_{110}) - (\bar Y_{011} - \bar Y_{010}) \\
&= [(\alpha + \beta_1 + \beta_2 + \beta_3 + \beta_4 + \beta_5 + \beta_6 + \tau) - (\alpha + \beta_1 + \beta_3 + \beta_5)] \\
&\quad - [(\alpha + \beta_2 + \beta_3 + \beta_6) - (\alpha + \beta_3)] \\
&= [\beta_2 + \beta_4 + \beta_6 + \tau] - [\beta_2 + \beta_6] \\
&= \beta_4 + \tau.
\end{aligned}
$$

$$
\begin{aligned}
&(\bar Y_{101} - \bar Y_{100}) - (\bar Y_{001} - \bar Y_{000}) \\
&= [(\alpha + \beta_1 + \beta_2 + \beta_4) - (\alpha + \beta_1)] - [(\alpha + \beta_2) - \alpha] \\
&= [\beta_2 + \beta_4] - [\beta_2] \\
&= \beta_4.
\end{aligned}
$$

因此：

$$
\hat\tau^{DDD} = [\beta_4 + \tau] - [\beta_4] = \tau.
$$

::::

**Part B: 识别假设**

**B.1** DDD 相比 DID 放松了什么假设？

::::{solution}

**B.1 DDD 相比 DID 的优势**

**DID 的问题**：假设处理组和对照组有相同的时间趋势（parallel trends）。

但实际中：
- 处理组和对照组可能有**不同的时间趋势**
- 例：发达地区 vs 欠发达地区，即使没有政策，增长率也不同

**DDD 的改进**：
- $G=0$ 组作为"placebo"，也经历 $D$ 和 $t$ 的变化
- 允许 $D=1$ 和 $D=0$ 组有不同的时间趋势
- 只要求这个趋势差异在 $G=1$ 和 $G=0$ 组之间相同

::::

**B.2** 写出 DDD 的核心识别假设（triple parallel trends）。

::::{solution}

**B.2 DDD 识别假设（Triple Parallel Trends）**

在 potential outcomes 框架下：

$$
\begin{aligned}
&E[Y_{i1}(0) - Y_{i0}(0) | D_i = 1, G_i = 1] - E[Y_{i1}(0) - Y_{i0}(0) | D_i = 0, G_i = 1] \\
&= E[Y_{i1}(0) - Y_{i0}(0) | D_i = 1, G_i = 0] - E[Y_{i1}(0) - Y_{i0}(0) | D_i = 0, G_i = 0].
\end{aligned}
$$

**含义**：
- 处理组和对照组的时间趋势差异（$D=1$ vs $D=0$）
- 在 $G=1$ 和 $G=0$ 组中是相同的
- $G=0$ 组提供了这个"背景趋势差异"的估计

::::

**B.3** 举例说明什么情况下 DID 会失效但 DDD 仍然有效。

::::{solution}

**B.3 DDD 优于 DID 的例子**

**例：最低工资对就业的影响**

- Treatment：某州提高最低工资（$D_i = 1$）
- 对照：邻近州未提高（$D_i = 0$）
- 额外维度：行业 $G_i$（高/低技能）

**DID 失效的原因**：
- 高低技能行业在两个州的增长趋势本来就不同
- 即使没有最低工资变化，$D=1$ 州可能因其他原因增长更快/慢
- Parallel trends 被违反

**DDD 如何解决**：
- $G=0$（高技能行业）不受最低工资影响（placebo）
- 但也经历两个州的差异趋势
- 用高技能行业的 DID 净化低技能行业 DID 中的混杂趋势
- 只保留低技能行业在处理州的独特变化

**关键**：需要找到一个不受处理影响但经历类似背景变化的"placebo"组。

::::



### 7. 2SLS 推导与性质证明

#2SLS #IV_estimation #consistency #asymptotic_normality

**Setup** 考虑 IV 回归：

$$
\begin{aligned}
y_i &= x_i' \beta + \varepsilon_i, \\
E[\varepsilon_i | z_i] &= 0, \\
E[x_i \varepsilon_i] &\ne 0 \quad\text{(endogeneity)},
\end{aligned}
$$

其中 $z_i$ 是工具变量（IV），$x_i$ 包含内生变量。

**Part A: 2SLS 构造**

**A.1** 写出 2SLS 的两个阶段：

**第一阶段**：回归 $x_i$ 在 $z_i$ 上，得到 fitted values $\hat x_i$。

**第二阶段**：回归 $y_i$ 在 $\hat x_i$ 上。

用矩阵形式写出 2SLS 估计量 $\hat\beta^{2SLS}$。

::::{solution}


**A.1 2SLS 构造**

**第一阶段**：

$$
x_i = z_i' \pi + v_i,
$$

OLS 估计：

$$
\hat\pi = (Z'Z)^{-1}Z'X.
$$

Fitted values：

$$
\hat X = Z\hat\pi = Z(Z'Z)^{-1}Z'X = P_Z X,
$$

其中 $P_Z = Z(Z'Z)^{-1}Z'$ 是投影矩阵。

**第二阶段**：

$$
y = \hat X \beta + \text{error},
$$

OLS 估计：

$$
\hat\beta^{2SLS} = (\hat X' \hat X)^{-1}\hat X' y.
$$

::::

**A.2** 证明 2SLS 等价于 IV 估计量：

$$
\hat\beta^{IV} = (Z'X)^{-1}Z'y.
$$

**Part B: 一致性证明**

::::{solution}

**A.2 等价于 IV 估计量**

代入 $\hat X = P_Z X$：

$$
\begin{aligned}
\hat\beta^{2SLS}
&= (\hat X' \hat X)^{-1}\hat X' y \\
&= [(P_Z X)' P_Z X]^{-1}(P_Z X)' y \\
&= [X' P_Z' P_Z X]^{-1} X' P_Z' y.
\end{aligned}
$$

因为 $P_Z$ 是投影矩阵，$P_Z' = P_Z$，$P_Z P_Z = P_Z$：

$$
\begin{aligned}
\hat\beta^{2SLS}
&= [X' P_Z X]^{-1} X' P_Z y \\
&= [X' Z(Z'Z)^{-1}Z' X]^{-1} X' Z(Z'Z)^{-1}Z' y.
\end{aligned}
$$

如果 $X'Z$ 是方阵（exactly identified，IV 数量 = 内生变量数量）：

$$
\begin{aligned}
\hat\beta^{2SLS}
&= (X'Z)^{-1}(Z'Z)(Z'X)^{-1} \cdot X'Z(Z'Z)^{-1}Z'y \\
&= (X'Z)^{-1}Z'y \\
&= (Z'X)^{-1}Z'y \\
&= \hat\beta^{IV}.
\end{aligned}
$$

对于 overidentified 情况（IV 数量 > 内生变量数量），2SLS 是最优 IV 估计量。

::::

**B.1** 假设：
- $E[z_i \varepsilon_i] = 0$（IV exogeneity）
- $E[z_i x_i']$ 有满秩（IV relevance）
- Standard regularity conditions (i.i.d., moments exist)

证明 $\hat\beta^{2SLS} \overset{p}{\to} \beta$。

::::{solution}

**B.1 一致性证明**

写出 2SLS 估计量：

$$
\hat\beta^{2SLS} = (X'P_ZX)^{-1}X'P_Zy.
$$

代入 $y = X\beta + \varepsilon$：

$$
\begin{aligned}
\hat\beta^{2SLS}
&= (X'P_ZX)^{-1}X'P_Z(X\beta + \varepsilon) \\
&= \beta + (X'P_ZX)^{-1}X'P_Z\varepsilon.
\end{aligned}
$$

需要证明：

$$
(X'P_ZX)^{-1}X'P_Z\varepsilon \overset{p}{\to} 0.
$$

由 LLN：

$$
\begin{aligned}
\frac{1}{n}X'P_ZX &= \frac{1}{n}X'Z(Z'Z)^{-1}Z'X \overset{p}{\to} E[x_i z_i']E[z_i z_i']^{-1}E[z_i x_i'] = Q_{xz}Q_{zz}^{-1}Q_{zx}, \\
\frac{1}{n}X'P_Z\varepsilon &= \frac{1}{n}X'Z(Z'Z)^{-1}Z'\varepsilon \overset{p}{\to} E[x_i z_i']E[z_i z_i']^{-1}E[z_i \varepsilon_i] = Q_{xz}Q_{zz}^{-1} \cdot 0 = 0,
\end{aligned}
$$

其中最后一步使用了 IV exogeneity $E[z_i \varepsilon_i] = 0$。

因此：

$$
\hat\beta^{2SLS} - \beta \overset{p}{\to} (Q_{xz}Q_{zz}^{-1}Q_{zx})^{-1} \cdot 0 = 0.
$$

**关键**：$Q_{xz}Q_{zz}^{-1}Q_{zx}$ 可逆当且仅当 $\text{rank}(Q_{xz}) = \dim(x)$，即 IV relevance。

::::

**B.2** 解释为什么需要 IV relevance（第一阶段 $F$-stat 要足够大）。

**Part C: 渐近正态性**

::::{solution}

**B.2 IV Relevance 的必要性**

如果第一阶段"弱"（$E[z_i x_i']$ 接近 singular）：

$$
Q_{xz}Q_{zz}^{-1}Q_{zx} \approx 0,
$$

其逆不存在或极大，导致：
- **Weak IV bias**：有限样本偏误严重
- **Inconsistency**：极端情况下不一致
- **Poor inference**：标准误失效，t-stats 不可靠

**实践中**：检查第一阶段 $F$-stat，常用阈值 $F > 10$（Stock-Yogo）。

::::

**C.1** 在 B.1 的假设下，证明：

$$
\sqrt{n}(\hat\beta^{2SLS} - \beta) \overset{d}{\to} N(0, V),
$$

其中 $V$ 的表达式是什么？

::::{solution}

**C.1 渐近正态性**

从 $\hat\beta^{2SLS} = \beta + (X'P_ZX)^{-1}X'P_Z\varepsilon$：

$$
\sqrt{n}(\hat\beta^{2SLS} - \beta) = \left(\frac{X'P_ZX}{n}\right)^{-1} \frac{X'P_Z\varepsilon}{\sqrt{n}}.
$$

由 CLT：

$$
\frac{X'P_Z\varepsilon}{\sqrt{n}} = \frac{X'Z}{\sqrt{n}}(Z'Z)^{-1}\frac{Z'\varepsilon}{\sqrt{n}} \overset{d}{\to} N(0, \Sigma),
$$

其中（使用 delta method）：

$$
\Sigma = Q_{xz}Q_{zz}^{-1}\Omega Q_{zz}^{-1}Q_{zx},\quad \Omega = E[z_i z_i' \varepsilon_i^2].
$$

因此：

$$
\sqrt{n}(\hat\beta^{2SLS} - \beta) \overset{d}{\to} N(0, V),
$$

其中：

$$
V = (Q_{xz}Q_{zz}^{-1}Q_{zx})^{-1} Q_{xz}Q_{zz}^{-1}\Omega Q_{zz}^{-1}Q_{zx} (Q_{xz}Q_{zz}^{-1}Q_{zx})^{-1}.
$$

在 homoskedasticity 下（$E[\varepsilon_i^2 | z_i] = \sigma^2$）：

$$
V = \sigma^2 (Q_{xz}Q_{zz}^{-1}Q_{zx})^{-1}.
$$

::::

**C.2** 与 OLS 的渐近方差比较，解释为什么 2SLS 通常效率更低。

::::{solution}

**C.2 与 OLS 的效率比较**

OLS（如果 exogenous）的渐近方差：

$$
V^{OLS} = \sigma^2 (E[x_i x_i'])^{-1} = \sigma^2 Q_{xx}^{-1}.
$$

2SLS 的渐近方差：

$$
V^{2SLS} = \sigma^2 (Q_{xz}Q_{zz}^{-1}Q_{zx})^{-1}.
$$

由 Cauchy-Schwarz（或矩阵不等式）：

$$
Q_{xz}Q_{zz}^{-1}Q_{zx} \preceq Q_{xx},
$$

当且仅当 $z_i = x_i$ 时等号成立。

因此：

$$
V^{2SLS} \succeq V^{OLS}.
$$

**经济含义**：
- 2SLS 使用 IV "purify" $x_i$，丢失信息
- 如果 $x_i$ 本身 exogenous，使用 IV 反而降低效率
- Trade-off：consistency (with endogeneity) vs efficiency

::::




### 8. FWL 定理证明与应用

#FWL_theorem #partial_regression #orthogonalization

**Setup** 考虑回归模型：

$$
y = X_1\beta_1 + X_2\beta_2 + \varepsilon,
$$

其中 $X_1$ 是 $n \times k_1$ 矩阵，$X_2$ 是 $n \times k_2$ 矩阵。

**Part A: FWL 定理陈述与证明**

**A.1** 陈述 FWL 定理：证明以下三种方法得到的 $\hat\beta_1$ 相同：

**方法 1**（Full regression）：

$$
\hat\beta_1 = [(X_1, X_2)'(X_1, X_2)]^{-1}(X_1, X_2)'y \text{ 中关于 } X_1 \text{ 的部分}.
$$

**方法 2**（Partial regression）：
1. 回归 $y$ 在 $X_2$ 上，得到残差 $\tilde y = M_2 y$，其中 $M_2 = I - X_2(X_2'X_2)^{-1}X_2'$
2. 回归 $X_1$ 在 $X_2$ 上，得到残差 $\tilde X_1 = M_2 X_1$
3. 回归 $\tilde y$ 在 $\tilde X_1$ 上：

$$
\hat\beta_1 = (\tilde X_1' \tilde X_1)^{-1}\tilde X_1' \tilde y.
$$

**方法 3**（Orthogonalization）：直接用 orthogonalized $X_1$ 回归。

证明三种方法等价。

::::{solution}


**A.1 FWL 定理证明**

**Full regression 的解**：

分块矩阵形式：

$$
\begin{pmatrix} X_1' X_1 & X_1' X_2 \\ X_2' X_1 & X_2' X_2 \end{pmatrix} \begin{pmatrix} \beta_1 \\ \beta_2 \end{pmatrix} = \begin{pmatrix} X_1' y \\ X_2' y \end{pmatrix}.
$$

第一个方程：

$$
X_1' X_1 \beta_1 + X_1' X_2 \beta_2 = X_1' y.
$$

第二个方程：

$$
X_2' X_1 \beta_1 + X_2' X_2 \beta_2 = X_2' y.
$$

从第二个方程解出 $\beta_2$：

$$
\beta_2 = (X_2' X_2)^{-1}(X_2' y - X_2' X_1 \beta_1).
$$

代入第一个方程：

$$
\begin{aligned}
X_1' X_1 \beta_1 + X_1' X_2 (X_2' X_2)^{-1}(X_2' y - X_2' X_1 \beta_1) &= X_1' y \\
X_1' X_1 \beta_1 + X_1' X_2 (X_2' X_2)^{-1}X_2' y - X_1' X_2 (X_2' X_2)^{-1}X_2' X_1 \beta_1 &= X_1' y \\
[X_1' X_1 - X_1' X_2 (X_2' X_2)^{-1}X_2' X_1] \beta_1 &= X_1' y - X_1' X_2 (X_2' X_2)^{-1}X_2' y \\
X_1' [I - X_2 (X_2' X_2)^{-1}X_2'] X_1 \beta_1 &= X_1' [I - X_2 (X_2' X_2)^{-1}X_2'] y \\
X_1' M_2 X_1 \beta_1 &= X_1' M_2 y.
\end{aligned}
$$

因此：

$$
\hat\beta_1 = (X_1' M_2 X_1)^{-1} X_1' M_2 y.
$$

**Partial regression 的解**：

定义：

$$
\tilde y = M_2 y,\quad \tilde X_1 = M_2 X_1.
$$

回归 $\tilde y$ 在 $\tilde X_1$ 上：

$$
\begin{aligned}
\hat\beta_1
&= (\tilde X_1' \tilde X_1)^{-1}\tilde X_1' \tilde y \\
&= [(M_2 X_1)' M_2 X_1]^{-1}(M_2 X_1)' M_2 y \\
&= [X_1' M_2' M_2 X_1]^{-1} X_1' M_2' M_2 y.
\end{aligned}
$$

因为 $M_2$ 是对称幂等矩阵（$M_2' = M_2$，$M_2 M_2 = M_2$）：

$$
\hat\beta_1 = (X_1' M_2 X_1)^{-1} X_1' M_2 y.
$$

与 full regression 完全相同！

::::

**A.2** 从分块矩阵求逆的角度证明 FWL。

**Part B: 应用**

::::{solution}

**A.2 分块矩阵求逆**

分块矩阵：

$$
A = \begin{pmatrix} A_{11} & A_{12} \\ A_{21} & A_{22} \end{pmatrix}.
$$

其逆的 $(1,1)$ 块为：

$$
[A^{-1}]_{11} = (A_{11} - A_{12}A_{22}^{-1}A_{21})^{-1}.
$$

应用到：

$$
A = \begin{pmatrix} X_1' X_1 & X_1' X_2 \\ X_2' X_1 & X_2' X_2 \end{pmatrix}.
$$

得到：

$$
[\hat\beta_1 \text{ 的系数矩阵}]^{-1} = (X_1' X_1 - X_1' X_2 (X_2' X_2)^{-1}X_2' X_1)^{-1} = (X_1' M_2 X_1)^{-1}.
$$

这就是 FWL 的矩阵形式。

::::

**B.1** 解释为什么 FWL 意味着"多元回归中，$X_1$ 的系数衡量的是 $X_1$ 中**不能被 $X_2$ 解释的部分**对 $y$ 的影响"。

::::{solution}

**B.1 经济直觉**

FWL 定理说明：

$$
\hat\beta_1 = (\tilde X_1' \tilde X_1)^{-1}\tilde X_1' \tilde y,
$$

其中：
- $\tilde y = M_2 y$：$y$ 中**不能被 $X_2$ 解释的部分**（$X_2$ 的 residual）
- $\tilde X_1 = M_2 X_1$：$X_1$ 中**不能被 $X_2$ 解释的部分**（$X_1$ 的 residual）

**含义**：
- 多元回归中，$\beta_1$ 捕捉的是 $X_1$ 的**独特贡献**
- 排除了 $X_1$ 与 $X_2$ 共同变化的部分
- "控制 $X_2$"等价于"先从 $X_1$ 和 $y$ 中移除 $X_2$ 的影响"

**例**：
- $y$ = 工资，$X_1$ = 教育，$X_2$ = 经验
- $\hat\beta_1$ 衡量：在**固定经验的情况下**，教育对工资的影响
- 等价于：用"教育中不能被经验解释的部分"解释"工资中不能被经验解释的部分"

::::

**B.2** 假设回归：

$$
\text{Wage}_i = \beta_0 + \beta_1 \text{Edu}_i + \beta_2 \text{Exp}_i + \varepsilon_i.
$$

数据：

| $i$ | Wage | Edu | Exp |
|-----|------|-----|-----|
| 1   | 50   | 16  | 10  |
| 2   | 40   | 12  | 8   |
| 3   | 60   | 18  | 12  |

使用 FWL 计算 $\hat\beta_1$（教育对工资的偏效应）。

::::{solution}

**B.2 数值计算**

数据矩阵（加入常数项）：

$$
y = \begin{pmatrix} 50 \\ 40 \\ 60 \end{pmatrix},\quad X_1 = \begin{pmatrix} 1 & 16 \\ 1 & 12 \\ 1 & 18 \end{pmatrix},\quad X_2 = \begin{pmatrix} 10 \\ 8 \\ 12 \end{pmatrix}.
$$

**Step 1**: 回归 $y$ 在 $X_2$ 上（实际上应该包括常数项，这里简化）。

计算均值：

$$
\bar y = 50, \quad \bar{\text{Edu}} = \frac{16+12+18}{3} = 15.33, \quad \bar{\text{Exp}} = 10.
$$

Demean（或者用投影矩阵，这里用简化计算）：

$$
\tilde y = y - \bar y = \begin{pmatrix} 0 \\ -10 \\ 10 \end{pmatrix},\quad \tilde{\text{Edu}} = \begin{pmatrix} 0.67 \\ -3.33 \\ 2.67 \end{pmatrix},\quad \tilde{\text{Exp}} = \begin{pmatrix} 0 \\ -2 \\ 2 \end{pmatrix}.
$$

**Step 2**: 回归 $\text{Edu}$ 在 $\text{Exp}$ 上，得到残差。

$$
\hat\gamma = \frac{\sum \tilde{\text{Edu}} \cdot \tilde{\text{Exp}}}{\sum \tilde{\text{Exp}}^2} = \frac{0.67 \times 0 + (-3.33) \times (-2) + 2.67 \times 2}{0 + 4 + 4} = \frac{0 + 6.66 + 5.34}{8} = \frac{12}{8} = 1.5.
$$

残差：

$$
\tilde{\text{Edu}}^* = \tilde{\text{Edu}} - \hat\gamma \cdot \tilde{\text{Exp}} = \begin{pmatrix} 0.67 - 0 \\ -3.33 - 1.5 \times (-2) \\ 2.67 - 1.5 \times 2 \end{pmatrix} = \begin{pmatrix} 0.67 \\ -0.33 \\ -0.33 \end{pmatrix}.
$$

**Step 3**: 回归 $\tilde y$ 在 $\tilde{\text{Edu}}^*$ 上。

$$
\hat\beta_1 = \frac{\sum \tilde y \cdot \tilde{\text{Edu}}^*}{\sum (\tilde{\text{Edu}}^*)^2} = \frac{0 \times 0.67 + (-10) \times (-0.33) + 10 \times (-0.33)}{0.67^2 + 0.33^2 + 0.33^2} = \frac{0 + 3.3 - 3.3}{0.67} = 0.
$$

（这个简化例子中，$\hat\beta_1 \approx 0$，实际计算需要更精确的矩阵运算）

**结论**：FWL 允许分步计算，避免求解大型方程组。

::::




### 9. MLE 基础与性质

#MLE #Fisher_information #asymptotic_properties

**Part A: MLE 构造与一阶条件**

**A.1** 考虑 i.i.d. 样本 $\{y_i\}_{i=1}^n$，来自密度 $f(y_i; \theta)$，$\theta \in \Theta \subset \mathbb{R}^k$。

写出 log-likelihood 函数：

$$
\ell_n(\theta) = \sum_{i=1}^n \log f(y_i; \theta).
$$

写出 MLE 的一阶条件（score equation）。

::::{solution}


**A.1 MLE 一阶条件**

Log-likelihood：

$$
\ell_n(\theta) = \sum_{i=1}^n \log f(y_i; \theta).
$$

MLE 定义为：

$$
\hat\theta_{MLE} = \arg\max_{\theta \in \Theta} \ell_n(\theta).
$$

**一阶条件（Score equation）**：

$$
\frac{\partial \ell_n(\theta)}{\partial \theta}\bigg|_{\theta = \hat\theta} = 0,
$$

即：

$$
\sum_{i=1}^n \frac{\partial \log f(y_i; \theta)}{\partial \theta}\bigg|_{\theta = \hat\theta} = 0.
$$

**Score function**：

$$
s_n(\theta) = \frac{\partial \ell_n(\theta)}{\partial \theta} = \sum_{i=1}^n \frac{\partial \log f(y_i; \theta)}{\partial \theta}.
$$

::::

**A.2** 假设 $y_i \sim N(\mu, \sigma^2)$ i.i.d.。

推导 $\mu$ 和 $\sigma^2$ 的 MLE。

**Part B: 渐近性质**

::::{solution}

**A.2 正态分布的 MLE**

Density：

$$
f(y_i; \mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y_i - \mu)^2}{2\sigma^2}\right).
$$

Log-likelihood：

$$
\begin{aligned}
\ell_n(\mu, \sigma^2)
&= \sum_{i=1}^n \log f(y_i; \mu, \sigma^2) \\
&= \sum_{i=1}^n \left[-\frac{1}{2}\log(2\pi) - \frac{1}{2}\log\sigma^2 - \frac{(y_i - \mu)^2}{2\sigma^2}\right] \\
&= -\frac{n}{2}\log(2\pi) - \frac{n}{2}\log\sigma^2 - \frac{1}{2\sigma^2}\sum_{i=1}^n(y_i - \mu)^2.
\end{aligned}
$$

**关于 $\mu$ 的一阶条件**：

$$
\frac{\partial \ell_n}{\partial \mu} = \frac{1}{\sigma^2}\sum_{i=1}^n(y_i - \mu) = 0
\quad\Longrightarrow\quad
\hat\mu_{MLE} = \frac{1}{n}\sum_{i=1}^n y_i = \bar y.
$$

**关于 $\sigma^2$ 的一阶条件**：

$$
\frac{\partial \ell_n}{\partial \sigma^2} = -\frac{n}{2\sigma^2} + \frac{1}{2(\sigma^2)^2}\sum_{i=1}^n(y_i - \mu)^2 = 0.
$$

代入 $\hat\mu = \bar y$：

$$
-\frac{n}{2\sigma^2} + \frac{1}{2(\sigma^2)^2}\sum_{i=1}^n(y_i - \bar y)^2 = 0
\quad\Longrightarrow\quad
\hat\sigma^2_{MLE} = \frac{1}{n}\sum_{i=1}^n(y_i - \bar y)^2.
$$

注意：MLE 的 $\hat\sigma^2$ 是有偏的（分母是 $n$ 而非 $n-1$）。

::::

**B.1** 陈述 MLE 的三个主要渐近性质（在 regularity conditions 下）：
1. Consistency
2. Asymptotic normality
3. Asymptotic efficiency

::::{solution}

**B.1 MLE 渐近性质**

在 regularity conditions 下：

1. **Consistency**：
   $$\hat\theta_{MLE} \overset{p}{\to} \theta_0,$$
   其中 $\theta_0$ 是真实参数值。

2. **Asymptotic normality**：
   $$\sqrt{n}(\hat\theta_{MLE} - \theta_0) \overset{d}{\to} N(0, I(\theta_0)^{-1}),$$
   其中 $I(\theta_0)$ 是 Fisher information matrix。

3. **Asymptotic efficiency**：
   MLE 达到 Cramér-Rao lower bound，在渐近意义下是最有效的估计量。

::::

**B.2** 定义 Fisher information matrix：

$$
I(\theta) = -E\left[\frac{\partial^2 \log f(y_i; \theta)}{\partial \theta \partial \theta'}\right].
$$

证明在 regularity conditions 下：

$$
I(\theta) = E\left[\frac{\partial \log f(y_i; \theta)}{\partial \theta} \frac{\partial \log f(y_i; \theta)}{\partial \theta'}\right].
$$

**Part C: 数值例子**

::::{solution}

**B.2 Fisher Information 的等价形式**

定义：

$$
I(\theta) = -E\left[\frac{\partial^2 \log f(y_i; \theta)}{\partial \theta \partial \theta'}\right] = -E[H(\theta)],
$$

其中 $H(\theta)$ 是 Hessian matrix。

**证明等价形式**：

记 score 为 $s(y_i; \theta) = \frac{\partial \log f(y_i; \theta)}{\partial \theta}$。

在 regularity conditions 下，可以交换积分和微分：

$$
\frac{\partial}{\partial \theta}\int f(y; \theta) dy = \int \frac{\partial f(y; \theta)}{\partial \theta} dy.
$$

因为 $\int f(y; \theta) dy = 1$，对 $\theta$ 求导：

$$
\frac{\partial}{\partial \theta}\int f(y; \theta) dy = \int \frac{\partial f(y; \theta)}{\partial \theta} dy = 0.
$$

利用 $\frac{\partial \log f}{\partial \theta} = \frac{1}{f}\frac{\partial f}{\partial \theta}$：

$$
\int \frac{\partial f(y; \theta)}{\partial \theta} dy = \int f(y; \theta) \frac{\partial \log f(y; \theta)}{\partial \theta} dy = E[s(y; \theta)] = 0.
$$

再次求导：

$$
\frac{\partial}{\partial \theta'} E[s(y; \theta)] = E\left[\frac{\partial s(y; \theta)}{\partial \theta'}\right] = 0.
$$

展开：

$$
\begin{aligned}
E\left[\frac{\partial s(y; \theta)}{\partial \theta'}\right]
&= E\left[\frac{\partial^2 \log f(y; \theta)}{\partial \theta \partial \theta'}\right] \\
&= -I(\theta) = 0 \quad\text{???}
\end{aligned}
$$

利用 score 的性质：

$$
\begin{aligned}
\frac{\partial^2 \log f}{\partial \theta \partial \theta'}
&= \frac{\partial}{\partial \theta'}\left(\frac{1}{f}\frac{\partial f}{\partial \theta}\right) \\
&= -\frac{1}{f^2}\frac{\partial f}{\partial \theta}\frac{\partial f}{\partial \theta'} + \frac{1}{f}\frac{\partial^2 f}{\partial \theta \partial \theta'} \\
&= -\frac{\partial \log f}{\partial \theta}\frac{\partial \log f}{\partial \theta'} + \frac{1}{f}\frac{\partial^2 f}{\partial \theta \partial \theta'}.
\end{aligned}
$$

取期望：

$$
\begin{aligned}
E\left[\frac{\partial^2 \log f}{\partial \theta \partial \theta'}\right]
&= -E\left[\frac{\partial \log f}{\partial \theta}\frac{\partial \log f}{\partial \theta'}\right] + E\left[\frac{1}{f}\frac{\partial^2 f}{\partial \theta \partial \theta'}\right] \\
&= -E[s \cdot s'] + \int \frac{\partial^2 f}{\partial \theta \partial \theta'} dy \\
&= -E[s \cdot s'] + \frac{\partial^2}{\partial \theta \partial \theta'}\int f dy \\
&= -E[s \cdot s'] + 0.
\end{aligned}
$$

因此：

$$
I(\theta) = -E\left[\frac{\partial^2 \log f}{\partial \theta \partial \theta'}\right] = E[s \cdot s'].
$$

::::

**C.1** 样本 $y = (2, 3, 5)$ 来自 exponential distribution $f(y; \lambda) = \lambda e^{-\lambda y}$，$y \ge 0$，$\lambda > 0$。

计算 $\lambda$ 的 MLE。

::::{solution}

**C.1 Exponential MLE**

Density：$f(y; \lambda) = \lambda e^{-\lambda y}$，$y \ge 0$。

Log-likelihood：

$$
\begin{aligned}
\ell_n(\lambda)
&= \sum_{i=1}^n \log(\lambda e^{-\lambda y_i}) \\
&= \sum_{i=1}^n (\log\lambda - \lambda y_i) \\
&= n\log\lambda - \lambda\sum_{i=1}^n y_i.
\end{aligned}
$$

一阶条件：

$$
\frac{\partial \ell_n}{\partial \lambda} = \frac{n}{\lambda} - \sum_{i=1}^n y_i = 0
\quad\Longrightarrow\quad
\hat\lambda_{MLE} = \frac{n}{\sum_{i=1}^n y_i} = \frac{1}{\bar y}.
$$

数值：$\bar y = (2 + 3 + 5)/3 = 10/3$。

$$
\hat\lambda_{MLE} = \frac{1}{10/3} = 0.3.
$$

::::




### 10. Logit 模型推导与边际效应

#Logit_model #MLE #marginal_effects #odds_ratio

**Setup** 考虑二元选择模型。$y_i \in \{0, 1\}$ 是结果变量，$x_i$ 是协变量向量。

**Logit 模型**假设：

$$
P(y_i = 1 | x_i) = \Lambda(x_i'\beta) = \frac{\exp(x_i'\beta)}{1 + \exp(x_i'\beta)} = \frac{1}{1 + \exp(-x_i'\beta)},
$$

其中 $\Lambda(\cdot)$ 是 logistic CDF。

**Part A: MLE 推导**

**A.1** 写出单个观测的 likelihood。

::::{solution}


**A.1 Likelihood**

单个观测的 likelihood：

$$
L(y_i | x_i; \beta) = P(y_i | x_i)^{y_i} [1 - P(y_i | x_i)]^{1 - y_i} = \Lambda(x_i'\beta)^{y_i} [1 - \Lambda(x_i'\beta)]^{1 - y_i}.
$$

::::

**A.2** 写出 log-likelihood 函数：

$$
\ell_n(\beta) = \sum_{i=1}^n [y_i \log \Lambda(x_i'\beta) + (1 - y_i) \log(1 - \Lambda(x_i'\beta))].
$$

::::{solution}

**A.2 Log-likelihood**

$$
\begin{aligned}
\ell_n(\beta)
&= \sum_{i=1}^n \log L(y_i | x_i; \beta) \\
&= \sum_{i=1}^n [y_i \log \Lambda(x_i'\beta) + (1 - y_i) \log(1 - \Lambda(x_i'\beta))].
\end{aligned}
$$

可以简化为：

$$
\ell_n(\beta) = \sum_{i=1}^n [y_i \cdot x_i'\beta - \log(1 + \exp(x_i'\beta))].
$$

::::

**A.3** 推导 score function（关于 $\beta$ 的一阶导数）：

$$
\frac{\partial \ell_n(\beta)}{\partial \beta} = \sum_{i=1}^n (y_i - \Lambda(x_i'\beta)) x_i.
$$

**Part B: Odds Ratio 与解释**

::::{solution}

**A.3 Score Function**

先推导 $\Lambda(z)$ 的导数：

$$
\Lambda(z) = \frac{e^z}{1 + e^z}
\quad\Longrightarrow\quad
\Lambda'(z) = \frac{e^z(1 + e^z) - e^z \cdot e^z}{(1 + e^z)^2} = \frac{e^z}{(1 + e^z)^2} = \Lambda(z)[1 - \Lambda(z)].
$$

对 log-likelihood 求导：

$$
\begin{aligned}
\frac{\partial \ell_n}{\partial \beta}
&= \sum_{i=1}^n \left[y_i \frac{1}{\Lambda(x_i'\beta)} \Lambda'(x_i'\beta) x_i - (1 - y_i) \frac{1}{1 - \Lambda(x_i'\beta)} \Lambda'(x_i'\beta) x_i\right] \\
&= \sum_{i=1}^n \Lambda'(x_i'\beta) x_i \left[\frac{y_i}{\Lambda(x_i'\beta)} - \frac{1 - y_i}{1 - \Lambda(x_i'\beta)}\right].
\end{aligned}
$$

简化：

$$
\frac{y_i}{\Lambda} - \frac{1 - y_i}{1 - \Lambda} = \frac{y_i(1 - \Lambda) - (1 - y_i)\Lambda}{\Lambda(1 - \Lambda)} = \frac{y_i - \Lambda}{\Lambda(1 - \Lambda)}.
$$

因此：

$$
\frac{\partial \ell_n}{\partial \beta} = \sum_{i=1}^n \Lambda(x_i'\beta)[1 - \Lambda(x_i'\beta)] x_i \cdot \frac{y_i - \Lambda(x_i'\beta)}{\Lambda(x_i'\beta)[1 - \Lambda(x_i'\beta)]} = \sum_{i=1}^n (y_i - \Lambda(x_i'\beta)) x_i.
$$

::::

**B.1** 定义 odds：

$$
\text{odds}(x_i) = \frac{P(y_i = 1 | x_i)}{P(y_i = 0 | x_i)}.
$$

证明在 logit 模型下：

$$
\log[\text{odds}(x_i)] = x_i'\beta.
$$

::::{solution}

**B.1 Odds Ratio**

Odds 定义：

$$
\text{odds}(x_i) = \frac{P(y_i = 1 | x_i)}{P(y_i = 0 | x_i)} = \frac{\Lambda(x_i'\beta)}{1 - \Lambda(x_i'\beta)}.
$$

代入 logit 形式：

$$
\begin{aligned}
\text{odds}(x_i)
&= \frac{\frac{e^{x_i'\beta}}{1 + e^{x_i'\beta}}}{\frac{1}{1 + e^{x_i'\beta}}} \\
&= e^{x_i'\beta}.
\end{aligned}
$$

取对数：

$$
\log[\text{odds}(x_i)] = x_i'\beta.
$$

::::

**B.2** 解释 $\beta_j$ 的含义：$x_j$ 增加一单位，log-odds 增加 $\beta_j$。

**Part C: 边际效应**

::::{solution}

**B.2 系数解释**

从 $\log[\text{odds}] = x_i'\beta$：

$$
\frac{\partial \log[\text{odds}]}{\partial x_j} = \beta_j.
$$

**含义**：
- $x_j$ 增加一单位，log-odds 增加 $\beta_j$
- 等价于：odds 乘以 $e^{\beta_j}$
- 例：$\beta_j = 0.5$ 意味着 $x_j$ 增加 1，odds 增加 $e^{0.5} \approx 1.65$ 倍（增加 65%）

**注意**：$\beta_j$ **不是**边际效应（概率的变化），而是 log-odds 的变化。

::::

**C.1** 计算平均边际效应（Average Marginal Effect, AME）：

$$
\text{AME}_j = \frac{1}{n}\sum_{i=1}^n \frac{\partial P(y_i = 1 | x_i)}{\partial x_{ij}}.
$$

推导：

$$
\frac{\partial \Lambda(x_i'\beta)}{\partial x_{ij}} = \beta_j \Lambda(x_i'\beta)[1 - \Lambda(x_i'\beta)].
$$

::::{solution}

**C.1 边际效应推导**

概率对 $x_j$ 的偏导：

$$
\begin{aligned}
\frac{\partial P(y_i = 1 | x_i)}{\partial x_{ij}}
&= \frac{\partial \Lambda(x_i'\beta)}{\partial x_{ij}} \\
&= \Lambda'(x_i'\beta) \cdot \beta_j \\
&= \beta_j \Lambda(x_i'\beta)[1 - \Lambda(x_i'\beta)].
\end{aligned}
$$

**Average Marginal Effect (AME)**：

$$
\text{AME}_j = \frac{1}{n}\sum_{i=1}^n \beta_j \Lambda(x_i'\beta)[1 - \Lambda(x_i'\beta)].
$$

**注意**：
- 边际效应依赖于 $x_i$（非线性模型）
- 通常在样本均值或每个观测处计算，然后取平均

::::

**C.2** 数值例子：假设估计得到：

$$
P(\text{Purchase} = 1) = \Lambda(-2 + 0.5 \times \text{Income} + 0.3 \times \text{Age}).
$$

对于 Income = 4, Age = 30 的个体：
- 计算 purchase 概率
- 计算 Income 的边际效应

::::{solution}

**C.2 数值例子**

Linear index：

$$
x'\beta = -2 + 0.5 \times 4 + 0.3 \times 30 = -2 + 2 + 9 = 9.
$$

**Purchase 概率**：

$$
P(\text{Purchase} = 1) = \Lambda(9) = \frac{1}{1 + e^{-9}} = \frac{e^9}{1 + e^9} \approx \frac{8103}{8104} \approx 0.9999.
$$

（几乎肯定购买）

**Income 的边际效应**：

$$
\begin{aligned}
\frac{\partial P}{\partial \text{Income}}
&= \beta_{\text{Income}} \cdot \Lambda(9)[1 - \Lambda(9)] \\
&= 0.5 \times 0.9999 \times (1 - 0.9999) \\
&= 0.5 \times 0.9999 \times 0.0001 \\
&\approx 0.00005.
\end{aligned}
$$

**解释**：
- 在这个个体的特征水平上，Income 增加 1 单位，purchase 概率仅增加 0.005%
- 边际效应很小，因为概率已经接近 1（ceiling effect）
- 对于 $x'\beta$ 接近 0 的个体，边际效应会更大（$\Lambda(0)[1-\Lambda(0)] = 0.25$ 是最大值）

::::



### 11. Panel Data: Fixed Effects vs Random Effects

#panel-data #fixed-effects #random-effects #Hausman-test

**Setup** Consider panel data with $N$ individuals observed over $T$ periods.

Model:

$$
y_{it} = x_{it}'\beta + \alpha_i + \varepsilon_{it},
$$

where $\alpha_i$ is individual-specific effect.

**Part A: Fixed Effects (FE)**

**A.1** Write the within transformation that eliminates $\alpha_i$:

$$
\tilde y_{it} = y_{it} - \bar y_i,\quad \tilde x_{it} = x_{it} - \bar x_i.
$$

Show that FE estimator is:

$$
\hat\beta^{FE} = \left(\sum_{i,t}\tilde x_{it}\tilde x_{it}'\right)^{-1}\sum_{i,t}\tilde x_{it}\tilde y_{it}.
$$

::::{solution}


**A.1 Fixed Effects Derivation**

Subtract individual means:

$$
y_{it} - \bar y_i = (x_{it} - \bar x_i)'\beta + (\alpha_i - \bar\alpha_i) + (\varepsilon_{it} - \bar\varepsilon_i).
$$

Since $\bar\alpha_i = \alpha_i$:

$$
\tilde y_{it} = \tilde x_{it}'\beta + \tilde\varepsilon_{it}.
$$

OLS on demeaned data:

$$
\hat\beta^{FE} = \left(\sum_{i=1}^N\sum_{t=1}^T\tilde x_{it}\tilde x_{it}'\right)^{-1}\sum_{i=1}^N\sum_{t=1}^T\tilde x_{it}\tilde y_{it}.
$$

::::

**A.2** Under what assumption is $\hat\beta^{FE}$ consistent?

**Part B: Random Effects (RE)**

::::{solution}

**A.2 Consistency**

FE is consistent under:

$$
E[\varepsilon_{it} | x_{i1}, \ldots, x_{iT}, \alpha_i] = 0 \quad\text{(strict exogeneity)}.
$$

**Key**: $\alpha_i$ can be correlated with $x_{it}$ (endogenous individual effects).

FE allows correlation between $\alpha_i$ and $x_{it}$ by removing $\alpha_i$.

::::

**B.1** Assume $\alpha_i \sim (0, \sigma_\alpha^2)$ independent of $x_{it}$ and $\varepsilon_{it}$.

Write the GLS (feasible GLS) estimator.

::::{solution}

**B.1 Random Effects GLS**

Composite error: $u_{it} = \alpha_i + \varepsilon_{it}$.

Variance structure:

$$
\begin{aligned}
\text{Var}(u_{it}) &= \sigma_\alpha^2 + \sigma_\varepsilon^2,\\
\text{Cov}(u_{it}, u_{is}) &= \sigma_\alpha^2 \quad (t \ne s).
\end{aligned}
$$

GLS transformation:

$$
y_{it} - \theta\bar y_i = (x_{it} - \theta\bar x_i)'\beta + \text{error},
$$

where:

$$
\theta = 1 - \sqrt{\frac{\sigma_\varepsilon^2}{\sigma_\varepsilon^2 + T\sigma_\alpha^2}}.
$$

**FGLS**: Replace $\sigma_\alpha^2, \sigma_\varepsilon^2$ with consistent estimates.

::::

**B.2** Under what conditions is RE more efficient than FE?

**Part C: Hausman Test**

::::{solution}

**B.2 RE Efficiency**

RE is more efficient than FE when:

$$
\text{Cov}(\alpha_i, x_{it}) = 0 \quad\text{(random effects assumption)}.
$$

Under this assumption:
- Both FE and RE are consistent
- RE is more efficient (uses between-individual variation)
- FE only uses within-individual variation

**Intuition**: RE uses more information (both within and between variation).

::::

**C.1** State the null hypothesis of the Hausman test.

::::{solution}

**C.1 Hausman Test Null**

$$
H_0: \text{Cov}(\alpha_i, x_{it}) = 0 \quad\text{(RE assumption holds)}.
$$

Under $H_0$:
- Both FE and RE are consistent
- RE is efficient

Under $H_a$:
- FE is consistent
- RE is inconsistent (biased)

::::

**C.2** Write the Hausman test statistic:

$$
H = (\hat\beta^{FE} - \hat\beta^{RE})' [\text{Var}(\hat\beta^{FE}) - \text{Var}(\hat\beta^{RE})]^{-1} (\hat\beta^{FE} - \hat\beta^{RE}).
$$

::::{solution}

**C.2 Test Statistic**

$$
H = (\hat\beta^{FE} - \hat\beta^{RE})' [\text{Var}(\hat\beta^{FE}) - \text{Var}(\hat\beta^{RE})]^{-1} (\hat\beta^{FE} - \hat\beta^{RE}).
$$

**Intuition**:
- Under $H_0$: $\hat\beta^{FE} \approx \hat\beta^{RE}$ → $H \approx 0$
- Under $H_a$: $\hat\beta^{FE} \ne \hat\beta^{RE}$ → $H$ large

::::

**C.3** What is the distribution of $H$ under the null?

::::{solution}

**C.3 Distribution**

Under $H_0$:

$$
H \overset{d}{\to} \chi^2_k,
$$

where $k$ is the dimension of $\beta$.

**Decision rule**:
- Reject $H_0$ if $H > \chi^2_k(\alpha)$ → use FE
- Fail to reject → use RE (more efficient)

::::



### 12. Probit Model and Marginal Effects

#probit #binary-choice #marginal-effects

**Setup** Binary outcome $y_i \in \{0, 1\}$, covariates $x_i$.

**Probit model**:

$$
P(y_i = 1 | x_i) = \Phi(x_i'\beta),
$$

where $\Phi(\cdot)$ is standard normal CDF.

**Question A: Derivation**

**A.1** Derive the probit model from latent variable framework:

$$
y_i^* = x_i'\beta + \varepsilon_i,\quad y_i = \mathbb{1}\{y_i^* > 0\},\quad \varepsilon_i \sim N(0, 1).
$$

::::{solution}

**A.1 Latent Variable Derivation**

Latent variable:

$$
y_i^* = x_i'\beta + \varepsilon_i.
$$

Observed:

$$
y_i = \begin{cases} 1 & \text{if } y_i^* > 0 \\ 0 & \text{if } y_i^* \leq 0 \end{cases}.
$$

Probability:

$$
\begin{aligned}
P(y_i = 1 | x_i)
&= P(y_i^* > 0 | x_i)\\
&= P(x_i'\beta + \varepsilon_i > 0 | x_i)\\
&= P(\varepsilon_i > -x_i'\beta | x_i)\\
&= 1 - \Phi(-x_i'\beta)\\
&= \Phi(x_i'\beta).
\end{aligned}
$$

::::

**A.2** Write the log-likelihood function.

::::{solution}

**A.2 Log-Likelihood**

$$
\ell(\beta) = \sum_{i=1}^n [y_i \log\Phi(x_i'\beta) + (1-y_i)\log(1 - \Phi(x_i'\beta))].
$$

MLE: $\hat\beta = \arg\max_\beta \ell(\beta)$.

::::

**Question B: Marginal Effects**

**B.1** Derive the marginal effect of $x_j$ on $P(y_i = 1 | x_i)$:

$$
\frac{\partial P(y_i = 1 | x_i)}{\partial x_j} = \beta_j \phi(x_i'\beta),
$$

where $\phi$ is standard normal PDF.

::::{solution}

**B.1 Marginal Effect**

$$
\begin{aligned}
\frac{\partial P(y_i = 1 | x_i)}{\partial x_j}
&= \frac{\partial \Phi(x_i'\beta)}{\partial x_j}\\
&= \phi(x_i'\beta) \cdot \frac{\partial (x_i'\beta)}{\partial x_j}\\
&= \phi(x_i'\beta) \cdot \beta_j.
\end{aligned}
$$

::::

**B.2** Why does the marginal effect depend on $x_i$?

::::{solution}

**B.2 Dependence on $x_i$**

Marginal effect = $\beta_j \phi(x_i'\beta)$ depends on:

1. **Coefficient** $\beta_j$: Direction and "raw" magnitude
2. **PDF value** $\phi(x_i'\beta)$: Scaling factor

Since $\phi(\cdot)$ peaks at 0 and decays:
- Marginal effect largest when $x_i'\beta \approx 0$ (probability near 0.5)
- Marginal effect small when $|x_i'\beta|$ large (probability near 0 or 1)

**Intuition**: Hard to change probability when already near boundary.

::::

**B.3** Compute Average Marginal Effect (AME):

$$
\text{AME}_j = \frac{1}{n}\sum_{i=1}^n \beta_j \phi(x_i'\hat\beta).
$$

::::{solution}

**B.3 Average Marginal Effect**

$$
\text{AME}_j = \frac{1}{n}\sum_{i=1}^n \beta_j \phi(x_i'\hat\beta).
$$

Alternative: **Marginal Effect at Average** (MEA):

$$
\text{MEA}_j = \beta_j \phi(\bar x'\hat\beta).
$$

AME preferred: averages over actual covariate distribution.

::::

**Question C: Probit vs Logit**

**C.1** Compare probit and logit models. When do they give similar results?

::::{solution}

**C.1 Probit vs Logit**

| Aspect | Probit | Logit |
|--------|--------|-------|
| CDF | $\Phi(x'\beta)$ (normal) | $\Lambda(x'\beta) = \frac{e^{x'\beta}}{1 + e^{x'\beta}}$ |
| Interpretation | Latent normal errors | Odds ratio |
| Tail behavior | Thin tails (normal) | Thicker tails |
| Computation | Requires numerical integration of $\Phi$ | Closed form |

**When similar**:
- Coefficients differ by scale ($\beta^{\text{logit}} \approx 1.6 \beta^{\text{probit}}$)
- Predicted probabilities very close (within 0.01)
- Marginal effects nearly identical

**Practical advice**: Choice rarely matters for predictions. Logit slightly easier computationally.

::::


### 13. 考场默写版：DID/DDD、2SLS、FWL、MLE 和 Logit

#DID #DDD #ATT #ATE #2SLS #FWL #MLE #Logit

**Setup** 下面每一问都要求写出可直接在考场复现的推导链。相关基础见 [DID common trends](../Econometrics/EF8090/cards/DID_Common_Trends.md)、[TwoSLS as projection](../Econometrics/EF8090/cards/TwoSLS_as_Projection.md)、[FWL theorem](../Econometrics/EF8090/cards/FWL_Theorem.md)、[MLE consistency](../Econometrics/EF8090/cards/MLE_Consistency.md)、[Separation in logit](../Econometrics/EF8090/cards/Separation_in_Logit.md)。

**（a）** 推导 two-period two-group DID 识别 ATT，并说明何时 ATT = ATE。

::::{solution}

设 $D_i\in\{0,1\}$，$T_i\in\{0,1\}$，处理只发生在 treated group 的 post period。观察结果为

$$
\begin{aligned}
Y_{it}
&=
D_iT_tY_{it}(1)+(1-D_iT_t)Y_{it}(0).
\end{aligned}
$$

DID estimand 为

$$
\begin{aligned}
\tau^{DID}
&=
\left[E(Y_{i1}\mid D_i=1)-E(Y_{i0}\mid D_i=1)\right]
-\left[E(Y_{i1}\mid D_i=0)-E(Y_{i0}\mid D_i=0)\right]\\
&=
\left[E(Y_{i1}(1)\mid D_i=1)-E(Y_{i0}(0)\mid D_i=1)\right]\\
&\quad
-\left[E(Y_{i1}(0)\mid D_i=0)-E(Y_{i0}(0)\mid D_i=0)\right]\\
&=
E[Y_{i1}(1)-Y_{i1}(0)\mid D_i=1]\\
&\quad
+\left[E(Y_{i1}(0)-Y_{i0}(0)\mid D_i=1)
-E(Y_{i1}(0)-Y_{i0}(0)\mid D_i=0)\right].
\end{aligned}
$$

Parallel trends:

$$
\begin{aligned}
E(Y_{i1}(0)-Y_{i0}(0)\mid D_i=1)
&=
E(Y_{i1}(0)-Y_{i0}(0)\mid D_i=0).
\end{aligned}
$$

因此

$$
\begin{aligned}
\tau^{DID}
&=
E[Y_{i1}(1)-Y_{i1}(0)\mid D_i=1]
=ATT.
\end{aligned}
$$

ATE 为

$$
\begin{aligned}
ATE
&=
E[Y_{i1}(1)-Y_{i1}(0)]\\
&=
P(D_i=1)ATT+P(D_i=0)ATU.
\end{aligned}
$$

所以

$$
\begin{aligned}
ATT=ATE
&\Longleftrightarrow
E[Y_{i1}(1)-Y_{i1}(0)\mid D_i=1]
=
E[Y_{i1}(1)-Y_{i1}(0)\mid D_i=0].
\end{aligned}
$$

充分条件是 treatment effect homogeneous，或 treatment assignment 与 individual treatment effect 独立。

::::

**（b）** 推导 DDD estimand，并说明 triple parallel trends。

::::{solution}

令 $G_i\in\{0,1\}$ 是第三个维度，例如 eligible group。DDD estimand 为

$$
\begin{aligned}
\tau^{DDD}
&=
\Big[
\Delta_t E(Y\mid D=1,G=1)
-\Delta_t E(Y\mid D=0,G=1)
\Big]\\
&\quad
-
\Big[
\Delta_t E(Y\mid D=1,G=0)
-\Delta_t E(Y\mid D=0,G=0)
\Big],
\end{aligned}
$$

其中

$$
\begin{aligned}
\Delta_t E(Y\mid D=d,G=g)
&=
E(Y_1\mid D=d,G=g)-E(Y_0\mid D=d,G=g).
\end{aligned}
$$

设真实处理只作用于 $(D=1,G=1,T=1)$。把观测结果拆成 untreated trend 加 treatment effect：

$$
\begin{aligned}
Y
&=
Y(0)+DGT\cdot \tau_i.
\end{aligned}
$$

代入 DDD：

$$
\begin{aligned}
\tau^{DDD}
&=
E[\tau_i\mid D=1,G=1]\\
&\quad
+\Big\{
\Delta_t E[Y(0)\mid D=1,G=1]
-\Delta_t E[Y(0)\mid D=0,G=1]\\
&\qquad
-\Delta_t E[Y(0)\mid D=1,G=0]
+\Delta_t E[Y(0)\mid D=0,G=0]
\Big\}.
\end{aligned}
$$

Triple parallel trends 要求括号中的 untreated triple difference 为 $0$：

$$
\begin{aligned}
\Delta_t E[Y(0)\mid D=1,G=1]
-\Delta_t E[Y(0)\mid D=0,G=1]
&=
\Delta_t E[Y(0)\mid D=1,G=0]
-\Delta_t E[Y(0)\mid D=0,G=0].
\end{aligned}
$$

于是

$$
\begin{aligned}
\tau^{DDD}
&=
E[\tau_i\mid D=1,G=1].
\end{aligned}
$$

回归形式中

$$
\begin{aligned}
Y_{igt}
&=
\alpha+\beta_1D_i+\beta_2G_i+\beta_3T_t
+\beta_4D_iG_i+\beta_5D_iT_t+\beta_6G_iT_t\\
&\quad
+\tau(D_iG_iT_t)+u_{igt},
\end{aligned}
$$

$\tau$ 就是 DDD coefficient。

::::

**（c）** 证明 2SLS 等于投影后的 IV / OLS，并写出一致性。

::::{solution}

结构方程：

$$
\begin{aligned}
y&=X\beta+u,\\
E[Z'u]&=0,\qquad \operatorname{rank}(E[Z'X])=K.
\end{aligned}
$$

令

$$
\begin{aligned}
P_Z&=Z(Z'Z)^{-1}Z',\\
\hat X&=P_ZX.
\end{aligned}
$$

2SLS second stage 是把 $y$ 对 $\hat X$ 回归：

$$
\begin{aligned}
\hat\beta_{2SLS}
&=
(\hat X'\hat X)^{-1}\hat X'y\\
&=
(X'P_Z'P_ZX)^{-1}X'P_Z'y\\
&=
(X'P_ZX)^{-1}X'P_Zy.
\end{aligned}
$$

代入 $y=X\beta+u$：

$$
\begin{aligned}
\hat\beta_{2SLS}-\beta
&=
(X'P_ZX)^{-1}X'P_Zu\\
&=
\left(\frac{X'Z}{n}\left(\frac{Z'Z}{n}\right)^{-1}\frac{Z'X}{n}\right)^{-1}
\left(\frac{X'Z}{n}\left(\frac{Z'Z}{n}\right)^{-1}\frac{Z'u}{n}\right).
\end{aligned}
$$

若

$$
\begin{aligned}
\frac{Z'u}{n}\overset{p}{\to}0,\qquad
\frac{Z'X}{n}\overset{p}{\to}Q_{ZX},\qquad
\frac{Z'Z}{n}\overset{p}{\to}Q_{ZZ},
\end{aligned}
$$

且 $Q_{XZ}Q_{ZZ}^{-1}Q_{ZX}$ nonsingular，则

$$
\begin{aligned}
\hat\beta_{2SLS}-\beta
&\overset{p}{\to}
(Q_{XZ}Q_{ZZ}^{-1}Q_{ZX})^{-1}
Q_{XZ}Q_{ZZ}^{-1}\cdot 0
=0.
\end{aligned}
$$

所以

$$
\begin{aligned}
\hat\beta_{2SLS}
&\overset{p}{\to}\beta.
\end{aligned}
$$

::::

**（d）** 用 FWL 证明控制变量后的系数等于 residual-on-residual regression。

::::{solution}

模型：

$$
\begin{aligned}
y
&=
X_1\beta_1+X_2\beta_2+u.
\end{aligned}
$$

令

$$
\begin{aligned}
M_2
&=
I-X_2(X_2'X_2)^{-1}X_2'.
\end{aligned}
$$

OLS normal equations：

$$
\begin{aligned}
\begin{pmatrix}
X_1'X_1 & X_1'X_2\\
X_2'X_1 & X_2'X_2
\end{pmatrix}
\begin{pmatrix}
\hat\beta_1\\
\hat\beta_2
\end{pmatrix}
&=
\begin{pmatrix}
X_1'y\\
X_2'y
\end{pmatrix}.
\end{aligned}
$$

第二行给出

$$
\begin{aligned}
\hat\beta_2
&=
(X_2'X_2)^{-1}X_2'y
-(X_2'X_2)^{-1}X_2'X_1\hat\beta_1.
\end{aligned}
$$

代入第一行：

$$
\begin{aligned}
X_1'X_1\hat\beta_1
&+
X_1'X_2(X_2'X_2)^{-1}X_2'y
-X_1'X_2(X_2'X_2)^{-1}X_2'X_1\hat\beta_1
=X_1'y\\
\Longleftrightarrow\quad
X_1'\left[I-X_2(X_2'X_2)^{-1}X_2'\right]X_1\hat\beta_1
&=
X_1'\left[I-X_2(X_2'X_2)^{-1}X_2'\right]y\\
\Longleftrightarrow\quad
X_1'M_2X_1\hat\beta_1
&=
X_1'M_2y.
\end{aligned}
$$

因此

$$
\begin{aligned}
\hat\beta_1
&=
(X_1'M_2X_1)^{-1}X_1'M_2y\\
&=
(\tilde X_1'\tilde X_1)^{-1}\tilde X_1'\tilde y,
\end{aligned}
$$

其中 $\tilde X_1=M_2X_1$，$\tilde y=M_2y$。这就是 residual-on-residual regression。

::::

**（e）** 写出 MLE 的 score expansion 和 asymptotic normality。

::::{solution}

log-likelihood：

$$
\begin{aligned}
\ell_n(\theta)
&=
\sum_{i=1}^n\ell_i(\theta),\\
s_n(\theta)
&=
\frac{\partial\ell_n(\theta)}{\partial\theta},\\
H_n(\theta)
&=
\frac{\partial^2\ell_n(\theta)}{\partial\theta\partial\theta'}.
\end{aligned}
$$

MLE satisfies score equation：

$$
\begin{aligned}
s_n(\hat\theta)
&=0.
\end{aligned}
$$

Taylor expand around $\theta_0$：

$$
\begin{aligned}
0
&=
s_n(\hat\theta)\\
&=
s_n(\theta_0)+H_n(\bar\theta)(\hat\theta-\theta_0)\\
\Longrightarrow\quad
\sqrt n(\hat\theta-\theta_0)
&=
-\left[\frac{H_n(\bar\theta)}{n}\right]^{-1}
\frac{s_n(\theta_0)}{\sqrt n}.
\end{aligned}
$$

Under regularity conditions：

$$
\begin{aligned}
\frac{s_n(\theta_0)}{\sqrt n}
&\overset{d}{\to}N(0,I(\theta_0)),\\
-\frac{H_n(\bar\theta)}{n}
&\overset{p}{\to}I(\theta_0).
\end{aligned}
$$

所以

$$
\begin{aligned}
\sqrt n(\hat\theta-\theta_0)
&\overset{d}{\to}
N(0,I(\theta_0)^{-1}).
\end{aligned}
$$

::::

**（f）** 写出 logit likelihood、score 和 marginal effect。

::::{solution}

Logit model：

$$
\begin{aligned}
p_i(\beta)
&=
P(y_i=1\mid x_i)
=
\Lambda(x_i'\beta)
=
\frac{\exp(x_i'\beta)}{1+\exp(x_i'\beta)}.
\end{aligned}
$$

Log-likelihood：

$$
\begin{aligned}
\ell(\beta)
&=
\sum_{i=1}^n
\left[
y_i\log p_i(\beta)+(1-y_i)\log(1-p_i(\beta))
\right].
\end{aligned}
$$

因为

$$
\begin{aligned}
\frac{\partial p_i}{\partial\beta}
&=
p_i(1-p_i)x_i,
\end{aligned}
$$

score 为

$$
\begin{aligned}
\frac{\partial \ell(\beta)}{\partial\beta}
&=
\sum_{i=1}^n
\left[
\frac{y_i}{p_i}
-\frac{1-y_i}{1-p_i}
\right]
p_i(1-p_i)x_i\\
&=
\sum_{i=1}^n
(y_i-p_i)x_i.
\end{aligned}
$$

MLE 一阶条件：

$$
\begin{aligned}
\sum_{i=1}^n
x_i\left[y_i-\Lambda(x_i'\hat\beta)\right]
&=0.
\end{aligned}
$$

连续变量 $x_{ij}$ 的 marginal effect：

$$
\begin{aligned}
\frac{\partial P(y_i=1\mid x_i)}{\partial x_{ij}}
&=
\frac{\partial \Lambda(x_i'\beta)}{\partial x_{ij}}\\
&=
\Lambda(x_i'\beta)\left[1-\Lambda(x_i'\beta)\right]\beta_j\\
&=
p_i(1-p_i)\beta_j.
\end{aligned}
$$

因此 $\beta_j$ 不是 probability effect；它是 log odds effect：

$$
\begin{aligned}
\log\frac{p_i}{1-p_i}
&=
x_i'\beta
\Longrightarrow
\frac{\partial}{\partial x_{ij}}
\log\frac{p_i}{1-p_i}
=\beta_j.
\end{aligned}
$$

::::

::::{solution}

**核心分解**

$$
\begin{aligned}
\hat\varepsilon'\hat\varepsilon
&=\varepsilon'M_X\varepsilon
=\varepsilon'\varepsilon-\varepsilon'X(X'X)^{-1}X'\varepsilon\\
&=\sum_{i=1}^n\varepsilon_i^2
-\left(\sum_{i=1}^n x_i\varepsilon_i\right)'
\left(\sum_{i=1}^n x_ix_i'\right)^{-1}
\left(\sum_{i=1}^n x_i\varepsilon_i\right),
\end{aligned}
$$

$$
\begin{aligned}
s^2
&=\frac{n}{n-k}
\left[
\frac1n\sum_{i=1}^n\varepsilon_i^2 -
\left(\frac1n\sum_{i=1}^n x_i\varepsilon_i\right)'
\left(\frac1n\sum_{i=1}^n x_ix_i'\right)^{-1}
\left(\frac1n\sum_{i=1}^n x_i\varepsilon_i\right)
\right].
\end{aligned}
$$

其中 cross term 的 scaling 为：两边都是 $\frac1n\sum_{i=1}^n x_i\varepsilon_i$，中间是 $\left(\frac1n\sum_{i=1}^n x_ix_i'\right)^{-1}$。

**Consistency**

若 $E[\varepsilon_i^2]<\infty$、$E[\|x_i\varepsilon_i\|]<\infty$、$E[\|x_i\|^2]<\infty$，则

$$
\left\{
\begin{aligned}
&\frac1n\sum_{i=1}^n\varepsilon_i^2\overset p\to\sigma^2\\
&\frac1n\sum_{i=1}^n x_i\varepsilon_i\overset p\to0\\
&\frac1n\sum_{i=1}^n x_ix_i'\overset p\to Q\\
&\frac{n}{n-k}\to1.
\end{aligned}
\right.
$$

$$
\begin{aligned}
s^2
&\overset p\to1\cdot\left[\sigma^2-0'Q^{-1}0\right]=\sigma^2,
\qquad
s^2\overset p\to\sigma^2.
\end{aligned}
$$

**Limiting distribution**

令 $A_n=\frac1n\sum_{i=1}^n\varepsilon_i^2$，$B_n=\frac1n\sum_{i=1}^n x_i\varepsilon_i$，$Q_n=\frac1n\sum_{i=1}^n x_ix_i'$，则 $s^2=\frac{n}{n-k}(A_n-B_n'Q_n^{-1}B_n)$。

$$
\begin{aligned}
\sqrt n(s^2-\sigma^2)
&=\frac{n}{n-k}\sqrt n(A_n-\sigma^2)
+\left(\frac{n}{n-k}-1\right)\sqrt n\sigma^2
-\frac{n}{n-k}\sqrt nB_n'Q_n^{-1}B_n.
\end{aligned}
$$

$$
\frac{n}{n-k}\to1,\qquad
\left(\frac{n}{n-k}-1\right)\sqrt n\sigma^2
=\frac{k}{n-k}\sqrt n\sigma^2\to0.
$$

若 $E[\|x_i\varepsilon_i\|^2]<\infty$，则

$$
\sqrt nB_n=\frac1{\sqrt n}\sum_{i=1}^n x_i\varepsilon_i=O_p(1),\qquad
B_n=O_p(n^{-1/2}),\qquad Q_n^{-1}=O_p(1),
$$

$$
\sqrt nB_n'Q_n^{-1}B_n=\sqrt n\cdot O_p(n^{-1})=o_p(1).
$$

$$
\sqrt n(s^2-\sigma^2)
=\sqrt n(A_n-\sigma^2)+o_p(1)
=\frac1{\sqrt n}\sum_{i=1}^n(\varepsilon_i^2-\sigma^2)+o_p(1).
$$

若进一步假设 $E[\varepsilon_i^4]<\infty$，由 CLT，

$$
\frac1{\sqrt n}\sum_{i=1}^n(\varepsilon_i^2-\sigma^2)
\overset d\to
N\left(0,\operatorname{Var}(\varepsilon_i^2)\right),
$$

$$
\operatorname{Var}(\varepsilon_i^2)
=E[\varepsilon_i^4]-\left(E[\varepsilon_i^2]\right)^2
=E[\varepsilon_i^4]-\sigma^4.
$$

考试版写法：

$$
\left\{
\begin{aligned}
&s^2\overset p\to\sigma^2\\
&\sqrt n(s^2-\sigma^2)\overset d\to N(0,E[\varepsilon_i^4]-\sigma^4).
\end{aligned}
\right.
$$

::::

### 14. Roy Model, Self-Selection, LATE and MTE

#RoyModel #Selection #LATE #MTE #ATT #ATE #PolicyEvaluation

**Setup** 个体在部门 $1$ 和部门 $0$ 之间选择。潜在收入为

$$
\begin{aligned}
Y_1 &= \mu_1+U_1,\\
Y_0 &= \mu_0+U_0,
\end{aligned}
$$

进入部门 $1$ 的成本为

$$
\begin{aligned}
C &= \gamma Z+V,
\end{aligned}
$$

其中 $Z\perp (U_1,U_0,V)$。个体选择规则为

$$
\begin{aligned}
D
&=
1\{Y_1-Y_0-C\geq 0\}.
\end{aligned}
$$

观测收入为

$$
\begin{aligned}
Y
&=
DY_1+(1-D)Y_0.
\end{aligned}
$$

相关基础见 [Roy model selection](../Econometrics/EF8090/cards/Roy_Model_Selection.md)、[LATE compliers](../Econometrics/EF8090/cards/LATE_Compliers.md)、[MTE weights](../Econometrics/EF8090/cards/MTE_Weights.md)。

**（a）** 写出 selection rule，并解释 Roy model 的比较优势机制。

::::{solution}

令

$$
\begin{aligned}
\Delta Y
&=
Y_1-Y_0\\
&=
(\mu_1-\mu_0)+(U_1-U_0).
\end{aligned}
$$

选择规则为

$$
\begin{aligned}
D
&=
1\{Y_1-Y_0-C\geq 0\}\\
&=
1\{(\mu_1-\mu_0)+(U_1-U_0)-\gamma Z-V\geq 0\}\\
&=
1\{U_1-U_0-V\geq \gamma Z-(\mu_1-\mu_0)\}.
\end{aligned}
$$

Roy model 的核心不是随机分配，而是 self-selection：

$$
\begin{aligned}
D=1
&\Longleftrightarrow
\underbrace{Y_1-Y_0}_{gain\ from\ sector\ 1}
\geq
\underbrace{C}_{entry\ cost}.
\end{aligned}
$$

因此选择部门 $1$ 的人通常满足

$$
\begin{aligned}
E(\Delta Y\mid D=1)
&>
E(\Delta Y\mid D=0),
\end{aligned}
$$

这就是 selection on comparative advantage。

::::

**（b）** 推导 observed wage gap，并说明为什么它一般不等于 $ATE$。

::::{solution}

Observed wage gap 为

$$
\begin{aligned}
E(Y\mid D=1)-E(Y\mid D=0)
&=
E(Y_1\mid D=1)-E(Y_0\mid D=0)\\
&=
E(Y_1-Y_0\mid D=1)
+E(Y_0\mid D=1)-E(Y_0\mid D=0)\\
&=
ATT
+\left[E(Y_0\mid D=1)-E(Y_0\mid D=0)\right].
\end{aligned}
$$

再与 $ATE=E(Y_1-Y_0)$ 比较：

$$
\begin{aligned}
E(Y\mid D=1)-E(Y\mid D=0)-ATE
&=
\underbrace{ATT-ATE}_{selection\ on\ gains}
+
\underbrace{E(Y_0\mid D=1)-E(Y_0\mid D=0)}_{selection\ on\ baseline}.
\end{aligned}
$$

所以 observed gap 等于 $ATE$ 需要同时满足

$$
\begin{aligned}
ATT&=ATE,\\
E(Y_0\mid D=1)&=E(Y_0\mid D=0).
\end{aligned}
$$

Roy model 中 $D$ 由 $\Delta Y-C$ 决定，通常有 selection on gains；同时 $U_0$ 也可能和选择相关，所以 raw comparison 一般不识别 $ATE$。

::::

**（c）** 定义 $ATE$、$ATT$、$ATU$，并给出 $ATT>ATE>ATU$ 的条件。

::::{solution}

Treatment effect objects：

$$
\begin{aligned}
ATE
&=
E(Y_1-Y_0),\\
ATT
&=
E(Y_1-Y_0\mid D=1),\\
ATU
&=
E(Y_1-Y_0\mid D=0).
\end{aligned}
$$

令 $\pi=P(D=1)$。由全期望公式，

$$
\begin{aligned}
ATE
&=
E(\Delta Y)\\
&=
P(D=1)E(\Delta Y\mid D=1)
+P(D=0)E(\Delta Y\mid D=0)\\
&=
\pi ATT+(1-\pi)ATU.
\end{aligned}
$$

如果 Roy selection 是 positive selection on gains：

$$
\begin{aligned}
E(\Delta Y\mid D=1)
&>
E(\Delta Y\mid D=0),
\end{aligned}
$$

则在 $0<\pi<1$ 下，

$$
\begin{aligned}
ATT-ATE
&=
ATT-\left[\pi ATT+(1-\pi)ATU\right]\\
&=
(1-\pi)(ATT-ATU)>0,\\
ATE-ATU
&=
\pi ATT+(1-\pi)ATU-ATU\\
&=
\pi(ATT-ATU)>0.
\end{aligned}
$$

因此

$$
\begin{aligned}
ATT>ATE>ATU.
\end{aligned}
$$

经济含义：已经选择部门 $1$ 的人，通常是进入部门 $1$ 的净收益较高、比较优势更强的人；未进入者的收益较低或成本较高。

::::

**（d）** 假设 $\gamma>0$，比较两个政策状态 $z_a<z_b$。定义 compliers，并推导 Wald estimand 识别的 $LATE$。

::::{solution}

潜在选择为

$$
\begin{aligned}
D(z)
&=
1\{Y_1-Y_0-\gamma z-V\geq 0\}.
\end{aligned}
$$

因为 $\gamma>0$ 且 $z_a<z_b$，

$$
\begin{aligned}
\gamma z_a<\gamma z_b
\quad\Longrightarrow\quad
D(z_a)\geq D(z_b).
\end{aligned}
$$

Compliers 是低成本状态进入、高成本状态不进入的人：

$$
\begin{aligned}
\mathcal C
&=
\{D(z_a)=1,\ D(z_b)=0\}\\
&=
\{Y_1-Y_0-\gamma z_a-V\geq 0,
Y_1-Y_0-\gamma z_b-V<0\}\\
&=
\{\gamma z_a\leq Y_1-Y_0-V<\gamma z_b\}.
\end{aligned}
$$

在 independence、exclusion、monotonicity 下，

$$
\begin{aligned}
E(Y\mid Z=z_a)-E(Y\mid Z=z_b)
&=
E\left[
D(z_a)Y_1+(1-D(z_a))Y_0
-D(z_b)Y_1-(1-D(z_b))Y_0
\right]\\
&=
E\left[
(D(z_a)-D(z_b))(Y_1-Y_0)
\right],
\end{aligned}
$$

且

$$
\begin{aligned}
E(D\mid Z=z_a)-E(D\mid Z=z_b)
&=
E[D(z_a)-D(z_b)]\\
&=
P(D(z_a)=1,D(z_b)=0).
\end{aligned}
$$

所以 Wald estimand 为

$$
\begin{aligned}
\frac{E(Y\mid Z=z_a)-E(Y\mid Z=z_b)}
{E(D\mid Z=z_a)-E(D\mid Z=z_b)}
&=
\frac{
E\left[(D(z_a)-D(z_b))(Y_1-Y_0)\right]
}{
E[D(z_a)-D(z_b)]
}\\
&=
E(Y_1-Y_0\mid D(z_a)=1,D(z_b)=0)\\
&=
LATE(z_a,z_b).
\end{aligned}
$$

因此 IV 识别的不是随机个体的平均收益，而是被 $Z$ 的成本变化推到选择边界上的 marginal group 的平均收益。

::::

**（e）** 将选择方程写成 $D=1\{P(Z)\geq U_D\}$，定义 $MTE(p)$，并说明 $ATE$、$LATE$ 与 $MTE$ 的关系。

::::{solution}

令 $U_D\sim U[0,1]$ 表示 resistance to treatment，$P(Z)=P(D=1\mid Z)$。选择方程为

$$
\begin{aligned}
D
&=
1\{P(Z)\geq U_D\}.
\end{aligned}
$$

Marginal treatment effect 定义为

$$
\begin{aligned}
MTE(p)
&=
E(Y_1-Y_0\mid U_D=p).
\end{aligned}
$$

当 $P(Z)=p$ 时，进入部门 $1$ 的人满足 $U_D\leq p$。因此

$$
\begin{aligned}
E(Y\mid P(Z)=p)
&=
E\left[Y_0+D(Y_1-Y_0)\mid P(Z)=p\right]\\
&=
E(Y_0)
+E\left[1\{U_D\leq p\}(Y_1-Y_0)\right]\\
&=
E(Y_0)
+\int_0^p E(Y_1-Y_0\mid U_D=u)\,du\\
&=
E(Y_0)
+\int_0^p MTE(u)\,du.
\end{aligned}
$$

因此 local IV derivative 为

$$
\begin{aligned}
\frac{\partial E(Y\mid P(Z)=p)}{\partial p}
&=
MTE(p).
\end{aligned}
$$

ATE 是全体 resistance type 的平均：

$$
\begin{aligned}
ATE
&=
E(Y_1-Y_0)\\
&=
\int_0^1 E(Y_1-Y_0\mid U_D=u)\,du\\
&=
\int_0^1 MTE(u)\,du.
\end{aligned}
$$

如果 $P(Z)$ 从 $p_b$ 变为 $p_a$，且 $p_a>p_b$，则对应的 LATE 为

$$
\begin{aligned}
LATE(p_b,p_a)
&=
E(Y_1-Y_0\mid p_b<U_D\leq p_a)\\
&=
\frac{1}{p_a-p_b}
\int_{p_b}^{p_a}MTE(u)\,du.
\end{aligned}
$$

所以不同 instrument 或 policy variation 改变的是不同区间的 $U_D$，从而识别不同权重的 $MTE$。

::::

**（f）** 若 $MTE(p)$ 随 $p$ 递减，解释 OLS 为什么通常不能识别 $ATE$。

::::{solution}

$D=1\{P(Z)\geq U_D\}$ 中，$U_D$ 越低，进入部门 $1$ 的 resistance 越低。若

$$
\begin{aligned}
\frac{\partial MTE(p)}{\partial p}<0,
\end{aligned}
$$

则低 resistance 个体的 treatment gain 更高：

$$
\begin{aligned}
p_1<p_2
\quad\Longrightarrow\quad
E(\Delta Y\mid U_D=p_1)
>
E(\Delta Y\mid U_D=p_2).
\end{aligned}
$$

OLS with intercept in the binary treatment regression

$$
\begin{aligned}
Y_i
&=
\alpha+\beta D_i+e_i
\end{aligned}
$$

等价于 raw mean difference：

$$
\begin{aligned}
\beta^{OLS}
&=
E(Y\mid D=1)-E(Y\mid D=0)\\
&=
ATT+\left[E(Y_0\mid D=1)-E(Y_0\mid D=0)\right].
\end{aligned}
$$

与 $ATE$ 比较：

$$
\begin{aligned}
\beta^{OLS}-ATE
&=
\underbrace{ATT-ATE}_{selection\ on\ gains}
+
\underbrace{E(Y_0\mid D=1)-E(Y_0\mid D=0)}_{selection\ on\ baseline}.
\end{aligned}
$$

当 $MTE(p)$ 递减时，已选择部门 $1$ 的人集中在较低 $U_D$，其平均收益高于总体平均：

$$
\begin{aligned}
ATT
&>
ATE.
\end{aligned}
$$

因此即使没有 baseline selection，OLS 也会因为 selection on gains 而偏离 $ATE$；若 $E(Y_0\mid D=1)\neq E(Y_0\mid D=0)$，还会叠加 baseline selection bias。

::::
