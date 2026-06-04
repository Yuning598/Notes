# Econometrics

## Question 1

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

目标：修正 residual sum of squares decomposition 的 scaling，并证明

$$
\left\{
\begin{aligned}
&s^2\overset p\to\sigma^2\\
&\sqrt n(s^2-\sigma^2)\overset d\to N(0,E[\varepsilon_i^4]-\sigma^4),\qquad E[\varepsilon_i^4]<\infty.
\end{aligned}
\right.
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

图片里的 cross term scaling 笔误在这里：两边都应是 $\frac1n\sum_{i=1}^n x_i\varepsilon_i$，中间是 $\left(\frac1n\sum_{i=1}^n x_ix_i'\right)^{-1}$。

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

考试版结论：

$$
\left\{
\begin{aligned}
&s^2\overset p\to\sigma^2\\
&\sqrt n(s^2-\sigma^2)\overset d\to N(0,E[\varepsilon_i^4]-\sigma^4).
\end{aligned}
\right.
$$

::::

---

## Question 2

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

---

## Question 3

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

---

## Question 4

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
