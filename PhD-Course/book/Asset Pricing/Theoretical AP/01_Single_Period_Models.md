# 01 Single-Period Models

## Overview

- 先按主题主线重新梳理标题层级，避免多个一级标题或跳号造成阅读断点。
- 保留原有材料的核心信息，但把散落的推导合并到对应主题，不采用“只在文首叠加补丁”的方式。
- 对关键结论补充 **WTS → 联立系统 → 连续求解 → 结论** 的证明块。
- 原来的 proposition / theorem / property 已经统一转为普通说明文字，减少网页端对 callout 的依赖。
- 对易混概念补充“符号约定 / 经济含义 / 边界条件”三类解释，减少公式跳步。


## Lecture 1. Utility, Risk Aversion, and Portfolio Choice

### 1.1 Risk Aversion and Jensen

#### 推导核对：风险厌恶与凹性的等价方向

:::{admonition} Lemma
Risk Aversion $\Longleftrightarrow$ Concavity
设 $u$ 单调递增。若 $u$ 凹，则任何均值保持风险都降低期望效用；反过来，若对所有二点风险都满足 Jensen 型不等式，则 $u$ 必须凹。

:::

**WTS：** 对任意随机财富 $\tilde w$ 且 $E[\tilde w]=w$，证明

$$
\begin{aligned}
u(w)\ge E[u(\tilde w)]
\end{aligned}
$$

并说明二阶可导时等价于 $u''(w)\le 0$。

**联立系统：**

$$
\begin{aligned}
E[\tilde w]&=w,\\
x&\equiv \text{CE}(\tilde w),\\
u(x)&=E[u(\tilde w)],\\
\pi&\equiv w-x.
\end{aligned}
$$

**连续求解：** 若 $u$ 凹，则由 Jensen 不等式，

$$
\begin{aligned}
E[u(\tilde w)]
&\le u(E[\tilde w])\\
&=u(w).
\end{aligned}
$$

又因为 $u$ 单调递增，$u(x)=E[u(\tilde w)]\le u(w)$ 蕴含

$$
\begin{aligned}
x&\le w,\\
\pi&=w-x\ge 0.
\end{aligned}
$$

反过来，取任意 $w_1,w_2$ 与 $\lambda\in[0,1]$，令

$$
\tilde w=
\begin{cases}
w_1,&\lambda,\\
w_2,&1-\lambda,
\end{cases}
\qquad
E[\tilde w]=\lambda w_1+(1-\lambda)w_2.
$$

风险厌恶假设给出

$$
\begin{aligned}
u\big(\lambda w_1+(1-\lambda)w_2\big)
&=u(E[\tilde w])\\
&\ge E[u(\tilde w)]\\
&=\lambda u(w_1)+(1-\lambda)u(w_2),
\end{aligned}
$$

这正是凹性的定义。若 $u$ 二阶可导，凹性又等价于 $u''(w)\le 0$。

**结论：** 课件中“风险厌恶—Jensen—凹性”的逻辑链应读作：

$$
\begin{aligned}
\text{risk aversion}
\Longleftrightarrow
u(E[\tilde w])\ge E[u(\tilde w)]
\Longleftrightarrow
u\text{ concave}
\Longleftrightarrow
u''\le 0.
\end{aligned}
$$



:::{admonition} Definition (Jensen’s Inequality)
若对任意满足 $E[\tilde w]=w$ 的随机财富 $\tilde w$，都有

$$
u(w)\ge E[u(\tilde w)],
$$

则投资者是（弱）风险厌恶的。
:::

:::{admonition} Lemma
Concavity and Jensen
Jensen 不等式给出

$$
u(E[\tilde w])\ge E[u(\tilde w)].
$$

若 $u$ 二阶可导，则凹性等价于

$$
u''(w)\le 0,
\qquad \forall w.
$$

:::

$$
\begin{aligned}
\tilde w
&=
\begin{cases}
w-\Delta, & 1/2,\\
w+\Delta, & 1/2,
\end{cases}
\qquad
E[\tilde w]=w, \\
E[u(\tilde w)]
&=\frac12 u(w-\Delta)+\frac12 u(w+\Delta) \\
&\le u\!\left(\frac12(w-\Delta)+\frac12(w+\Delta)\right)
&& \text{Jensen} \\
&=u(w), \\
u(x)
&=E[u(\tilde w)]\le u(w) \\
\Longrightarrow\quad x&\le w \\
\Longrightarrow\quad \pi&=w-x\ge 0, \\
x&=w-\pi.
\end{aligned}
$$

### 1.2 Arrow-Pratt Risk Aversion


:::{admonition} Definition (Arrow-Pratt Risk Aversion Measures)
Arrow-Pratt 风险厌恶测度定义为

$$
\begin{aligned}
\alpha(w)
&=-\frac{u''(w)}{u'(w)},
&& \text{Absolute Risk Aversion} \\
\rho(w)
&=w\alpha(w)=-\frac{wu''(w)}{u'(w)},
&& \text{Relative Risk Aversion} \\
\tau(w)
&=\frac{1}{\alpha(w)}=-\frac{u'(w)}{u''(w)},
&& \text{risk tolerance}.
\end{aligned}
$$


:::

### 1.3 Certainty Equivalent and Risk Premium

#### 推导核对：小风险溢价的 Arrow-Pratt 二阶近似

:::{admonition} Lemma
Local Risk Premium Approximation
若 $\tilde\varepsilon$ 满足 $E[\tilde\varepsilon]=0$、$\operatorname{Var}(\tilde\varepsilon)=\sigma^2$，小风险 $k\tilde\varepsilon$ 在财富 $w$ 处的风险溢价满足

$$
\pi(k)=\frac{1}{2}\alpha(w)\sigma^2 k^2+o(k^2),
\qquad
\alpha(w)=-\frac{u''(w)}{u'(w)}.
$$

:::

**WTS：** 从

$$
\begin{aligned}
u(w-\pi(k))=E[u(w+k\tilde\varepsilon)]
\end{aligned}
$$

推出 $\pi(0)=0,\ \pi'(0)=0,\ \pi''(0)=\alpha(w)\sigma^2$。

**联立系统：**

$$
\begin{aligned}
F(k)&\equiv u(w-\pi(k))-E[u(w+k\tilde\varepsilon)]=0,\\
E[\tilde\varepsilon]&=0,\\
E[\tilde\varepsilon^2]&=\sigma^2.
\end{aligned}
$$

**连续求解：** 对 $F(k)=0$ 一阶求导，

$$
\begin{aligned}
0=F'(k)
&=-u'(w-\pi(k))\pi'(k)-E[u'(w+k\tilde\varepsilon)\tilde\varepsilon].
\end{aligned}
$$

令 $k=0$，

$$
\begin{aligned}
0
&=-u'(w)\pi'(0)-u'(w)E[\tilde\varepsilon]\\
&=-u'(w)\pi'(0),
\end{aligned}
$$

因此 $\pi'(0)=0$。再二阶求导，

$$
\begin{aligned}
0=F''(k)
&=u''(w-\pi(k))[\pi'(k)]^2-u'(w-\pi(k))\pi''(k)
 -E[u''(w+k\tilde\varepsilon)\tilde\varepsilon^2].
\end{aligned}
$$

令 $k=0$ 并代入 $\pi'(0)=0$，

$$
\begin{aligned}
0
&=-u'(w)\pi''(0)-u''(w)E[\tilde\varepsilon^2],\\
\pi''(0)
&=-\frac{u''(w)}{u'(w)}\sigma^2\\
&=\alpha(w)\sigma^2.
\end{aligned}
$$

由 Taylor 展开，

$$
\begin{aligned}
\pi(k)
&=\pi(0)+\pi'(0)k+\frac{1}{2}\pi''(0)k^2+o(k^2)\\
&=\frac{1}{2}\alpha(w)\sigma^2 k^2+o(k^2).
\end{aligned}
$$

**结论：** Arrow-Pratt 绝对风险厌恶系数是“小风险溢价对风险方差的一阶价格”。



:::{admonition} Definition (Certainty Equivalent and Risk Premium)
设随机财富为 $\tilde w$，且

$$
w=E[\tilde w].
$$

定义确定性等价 $x$ 与风险溢价 $\pi$ 为

$$
\begin{aligned}
u(x)&=E[u(\tilde w)], \\
u(w-\pi)&=E[u(\tilde w)], \\
x&=w-\pi.
\end{aligned}
$$

其中 $w$ 是随机财富的期望值，$x$ 是使投资者获得同样期望效用的确定性财富，$\pi$ 是为了把不确定财富 $\tilde w$ 替换成确定性财富 $w$ 而愿意支付的风险溢价。

:::

CARA情形：

$$
\tilde w=w+\tilde\varepsilon,
\qquad
u(w)=-e^{-\alpha w},
$$

$$
\begin{aligned}
u(w-\pi)
&=E[u(\tilde w)] \\
-e^{-\alpha(w-\pi)}
&=E\!\left[-e^{-\alpha(w+\tilde\varepsilon)}\right] \\
e^{-\alpha w}e^{\alpha\pi}
&=e^{-\alpha w}E\!\left(e^{-\alpha\tilde\varepsilon}\right) \\
e^{\alpha\pi}
&=E\!\left(e^{-\alpha\tilde\varepsilon}\right) \\
\pi
&=\frac{1}{\alpha}\log E\!\left(e^{-\alpha\tilde\varepsilon}\right).
\end{aligned}
$$


### 1.4 HARA and Classic Utility Functions


:::{admonition} Definition (HARA Risk Tolerance)
若风险容忍度满足

$$
\tau(w)=A+Bw,
$$

则该类效用属于 HARA 家族，且

$$
\alpha(w)=\frac{1}{A+Bw}.
$$

其中 $B$ 叫做 caution parameter；当 $B>0$ 时，$\alpha(w)$ 随财富上升而下降，故绝对风险厌恶是双曲线型（hyperbolic ARA）。

**Definition (CARA, CRRA, and Quadratic Utility):**
三类经典效用：
- [Asset Pricing/Theoretical AP/cards/part1/CARA 效用 - 常绝对风险厌恶](Asset Pricing/Theoretical AP/cards/part1/CARA 效用 - 常绝对风险厌恶)：$u(w)=-e^{-\alpha w}$
- [Asset Pricing/Theoretical AP/cards/part1/CRRA 效用 - 常相对风险厌恶](Asset Pricing/Theoretical AP/cards/part1/CRRA 效用 - 常相对风险厌恶)：$u(w)=\dfrac{w^{1-\rho}}{1-\rho}$，$\rho=1$ 时为 $\log w$
- [Asset Pricing/Theoretical AP/cards/part1/二次效用 - Mean-Variance 基础](Asset Pricing/Theoretical AP/cards/part1/二次效用 - Mean-Variance 基础)：$u(w)=-\dfrac12(w-\zeta)^2$

:::


$$
\begin{aligned}
u(w)&=-e^{-\alpha w}
\Longrightarrow\quad
u'(w)=\alpha e^{-\alpha w},\quad
u''(w)=-\alpha^2 e^{-\alpha w} \\
\Longrightarrow\quad
\text{ARA } \alpha(w)
&=-\frac{u''(w)}{u'(w)}=\alpha,
\qquad
\text{RRA } \rho(w)=w\alpha,
\qquad
\tau(w)=\frac{1}{\alpha};
\\[4pt]
u(w)&=\frac{w^{1-\rho}}{1-\rho}
\Longrightarrow\quad
u'(w)=w^{-\rho},\quad
u''(w)=-\rho w^{-\rho-1} \\
\Longrightarrow\quad
\text{ARA } \alpha(w)
&=-\frac{u''(w)}{u'(w)}=\frac{\rho}{w},
\qquad
\text{RRA } \rho(w)=\rho,
\qquad
\tau(w)=\frac{w}{\rho};
\\[4pt]
u(w)&=-\frac12(w-\zeta)^2
\Longrightarrow\quad
u'(w)=\zeta-w,\quad
u''(w)=-1 \\
\Longrightarrow\quad
\text{ARA } \alpha(w)
&=-\frac{u''(w)}{u'(w)}=\frac{1}{\zeta-w},
\qquad
\text{RRA } \rho(w)=\frac{w}{\zeta-w},
\qquad
\tau(w)=\zeta-w.
\end{aligned}
$$


### 1.5 Single-Period Portfolio Choice

#### 推导核对：组合选择的一阶条件与 SDF 雏形

:::{admonition} Lemma
Portfolio FOC as Marginal Utility Pricing
在内点最优、允许卖空且可交换微分与期望时，任一资产 payoff $\tilde x_i$ 的价格满足

$$
p_i=E[\tilde m\tilde x_i],
\qquad
\tilde m=\frac{u'(\tilde w^*)}{\gamma},
$$

其中 $\gamma$ 是预算约束乘子。

:::

**WTS：** 从份额选择问题推出

$$
\begin{aligned}
E[u'(\tilde w^*)\tilde x_i]=\gamma p_i,
\qquad i=1,\ldots,n.
\end{aligned}
$$

**联立系统：**

$$
\begin{aligned}
\max_{\theta_1,\ldots,\theta_n}\quad
& E\!\big[u(\tilde y+\theta'\tilde x)\big],\\
\text{s.t.}\quad
& \theta'p=w_0,\\
\tilde w&=\tilde y+\theta'\tilde x.
\end{aligned}
$$

构造 Lagrangian：

$$
\begin{aligned}
\mathcal L(\theta,\gamma)
=E[u(\tilde y+\theta'\tilde x)]-\gamma(\theta'p-w_0).
\end{aligned}
$$

**连续求解：** 对 $\theta_i$ 求导，

$$
\begin{aligned}
0
&=\frac{\partial\mathcal L}{\partial\theta_i}\\
&=E\left[u'(\tilde y+\theta'\tilde x)\frac{\partial(\tilde y+\theta'\tilde x)}{\partial\theta_i}\right]-\gamma p_i\\
&=E[u'(\tilde w)\tilde x_i]-\gamma p_i.
\end{aligned}
$$

因此在最优 $\theta^*$ 处，

$$
\begin{aligned}
p_i
&=E\left[\frac{u'(\tilde w^*)}{\gamma}\tilde x_i\right]\\
&=E[\tilde m\tilde x_i].
\end{aligned}
$$

若第 $i$ 个资产用 return 表示，$\tilde x_i=p_i\tilde R_i$，则

$$
\begin{aligned}
1=E[\tilde m\tilde R_i].
\end{aligned}
$$

**结论：** 单期组合选择的一阶条件已经包含 SDF 定价式；后面 SDF 不是新假设，而是最优边际效用的规范化表达。



:::{admonition} Definition (Single-Period Portfolio Choice Problem)
投资者在单期内选择组合以最大化期望效用：

$$
\begin{aligned}
\phi_i=\theta_i p_i, \qquad \tilde R_i=\frac{\tilde x_i}{p_i}, \qquad \pi_i=\frac{\phi_i}{w_0}.
\end{aligned}
$$

其中 $\phi_i$ 是投入资产 $i$ 的资金金额（dollar holding），$\tilde R_i$ 是资产 $i$ 的 gross return，$\pi_i$ 是资金权重（portfolio weight）。 $p_i$ 是资产价格，$\theta_i$ 是持有份额，$w_0$ 是初始财富，$\tilde y$ 是非金融收入，$\tilde x_i$ 是资产 $i$ 的随机 payoff。

三种等价写法为

$$
\begin{aligned}
\max_{\{\theta_i\}}E[u(\tilde w)]
&\quad \text{s.t.} \quad \sum_{i=1}^n\theta_i p_i=w_0,
\qquad
\tilde w=\tilde y+\sum_{i=1}^n\theta_i\tilde x_i, \\
\max_{\{\phi_i\}}E[u(\tilde w)]
&\quad \text{s.t.} \quad \sum_{i=1}^n\phi_i=w_0,
\qquad
\tilde w=\tilde y+\sum_{i=1}^n\phi_i\tilde R_i, \\
\max_{\{\pi_i\}}E[u(\tilde w)]
&\quad \text{s.t.} \quad \sum_{i=1}^n\pi_i=1,
\qquad
\tilde w=\tilde y+w_0\sum_{i=1}^n\pi_i\tilde R_i.
\end{aligned}
$$

允许 $\theta_i<0$ 或 $\phi_i<0$，表示 short selling；正持仓是 long position。
决策变量是 $\theta_i,\phi_i,\pi_i$，所以 FOC 对这些 choice variables 求偏导。


:::

**说明：Derivation**

$$
\text{(Lagrangian)}\quad
\mathcal{L}
=E\!\left[u\!\left(\tilde y+\sum_{i=1}^n\theta_i\tilde x_i\right)\right]
-\gamma\left(\sum_{i=1}^n\theta_i p_i-w_0\right).
$$

$$
\text{(FOC, w.r.t. }\theta_i\text{)}\quad
\frac{\partial\mathcal{L}}{\partial \theta_i}
=E[u'(\tilde w)\tilde x_i]-\gamma p_i=0
\Longleftrightarrow
E\!\left[\frac{u'(\tilde w)}{\gamma}\tilde x_i\right]=p_i.
$$

$$
\text{(gross return)}\quad
\tilde R_i=\frac{\tilde x_i}{p_i}
\Longrightarrow
E\!\left[\frac{u'(\tilde w)}{\gamma}\tilde R_i\right]=1.
$$

$$
\text{(pairwise)}\quad
E\!\left[\frac{u'(\tilde w)}{\gamma}(\tilde R_i-\tilde R_j)\right]=0,\qquad p_i\neq 0,\ p_j\neq 0.
$$

$$
\text{(with }R_f\text{)}\quad
E\!\left[\frac{u'(\tilde w)}{\gamma}(\tilde R_i-R_f)\right]=0,\qquad \tilde R_j=R_f.
$$

#### 1.5.1 Single Risky Asset

:::{admonition} Definition (Single Risky Asset)
设 $n=1$，存在一个风险资产 $\tilde R$ 和一个无风险资产 $R_f$。投资者选择投入风险资产的金额 $\phi$，则期末财富为

$$
\begin{aligned}
\tilde w
&=\phi \tilde R+(w_0-\phi)R_f=w_0R_f+\phi(\tilde R-R_f).
\end{aligned}
$$

这里 $\phi>0$ 表示 long risky asset，$\phi<0$ 表示 short risky asset。
:::

:::{admonition} Lemma
FOC and Sign of Optimal Exposure
$$U(\phi)=E\!\left[u\!\left(w_0R_f+\phi(\tilde R-R_f)\right)\right]$$

$$
\begin{aligned}
U'(\phi)
&=E\!\left[u'\!\left(w_0R_f+\phi(\tilde R-R_f)\right)(\tilde R-R_f)\right],\\
U''(\phi)
&=E\!\left[u''\!\left(w_0R_f+\phi(\tilde R-R_f)\right)(\tilde R-R_f)^2\right]<0.
\end{aligned}
$$

因为 $u''<0$，$U(\phi)$ 关于 $\phi$ 严格凹，所以只要看 $U'(0)$ 的符号即可：

$$
\begin{aligned}
U'(0)
&=E\!\left[u'(w_0R_f)(\tilde R-R_f)\right]=u'(w_0R_f)\,E[\tilde R-R_f].
\end{aligned}
$$

若 $\mu>R_f$，则 $E[\tilde R-R_f]>0$，所以 $U'(0)>0$；由于 $U$ 严格凹，最优点不能在 $\phi\le 0$，因此 $\phi^*>0$。
若 $\mu<R_f$，则 $E[\tilde R-R_f]<0$，所以 $U'(0)<0$；由于 $U$ 严格凹，最优点不能在 $\phi\ge 0$，因此 $\phi^*<0$。
因而

$$
\begin{aligned}
\mu>R_f &\Longrightarrow \phi^*>0,\\
\mu<R_f &\Longrightarrow \phi^*<0.
\end{aligned}
$$

风险溢价为正时，投资者应当持有正的风险资产头寸；风险溢价为负时，最优选择是做空风险资产、增加无风险资产配置。

:::

#### 1.5.2 Multiple Risky Assets

**Matrix notation**

$$
\begin{aligned}
\boldsymbol{\phi}&=(\phi_1,\ldots,\phi_n)',\qquad
\boldsymbol{\pi}=(\pi_1,\ldots,\pi_n)',\qquad
\tilde{\mathbf R}=(\tilde R_1,\ldots,\tilde R_n)'.
\end{aligned}
$$

**说明：Portfolio vector, full investment, mean, and variance**
设

$$
\boldsymbol{\pi}\in\mathbb{R}^{n\times 1},\qquad
\tilde{\mathbf R}\in\mathbb{R}^{n\times 1},\qquad
\boldsymbol{\mu}=E[\tilde{\mathbf R}],\qquad
\boldsymbol{\Sigma}=\operatorname{Var}(\tilde{\mathbf R}).
$$

组合权重向量 $\boldsymbol{\pi}$ 是列向量；$\tilde{\mathbf R}$ 是风险资产 gross returns 的列向量。
若组合 fully invested，则

$$
\begin{aligned}
\iota'\boldsymbol{\pi}=1
&\Longleftrightarrow
\sum_{i=1}^n\pi_i=1.
\end{aligned}
$$

此时组合收益与其一、二阶矩为

$$
\begin{aligned}
\tilde R_p
&=\boldsymbol{\pi}'\tilde{\mathbf R}
=\sum_{i=1}^n\pi_i\tilde R_i, \\
E[\tilde R_p]
&=E[\boldsymbol{\pi}'\tilde{\mathbf R}]
=\boldsymbol{\pi}'E[\tilde{\mathbf R}]
=\boldsymbol{\pi}'\boldsymbol{\mu}, \\
\operatorname{Var}(\tilde R_p)
&=\operatorname{Var}(\boldsymbol{\pi}'\tilde{\mathbf R})
=\boldsymbol{\pi}'\operatorname{Var}(\tilde{\mathbf R})\boldsymbol{\pi}
=\boldsymbol{\pi}'\boldsymbol{\Sigma}\boldsymbol{\pi}.
\end{aligned}
$$

若初始财富为 $w_0$，则组合财富可写成

$$
\begin{aligned}
\tilde w_p
&=w_0\tilde R_p
=w_0\boldsymbol{\pi}'\tilde{\mathbf R}, \\
E[\tilde w_p]
&=w_0\boldsymbol{\pi}'\boldsymbol{\mu}, \\
\operatorname{Var}(\tilde w_p)
&=w_0^2\boldsymbol{\pi}'\boldsymbol{\Sigma}\boldsymbol{\pi}.
\end{aligned}
$$

budget constraint:

$$
\begin{aligned}
\phi_f+\sum_{i=1}^n\phi_i=w_0
\iff
\phi_f+\boldsymbol{\phi}'\iota=w_0
\iff
\phi_f=w_0-\boldsymbol{\phi}'\iota.
\end{aligned}
$$

$$
\begin{aligned}
\tilde w
&=\phi_f R_f+\sum_{i=1}^n\phi_i\tilde R_i=\phi_f R_f+\boldsymbol{\phi}'\tilde{\mathbf R}\\
&=(w_0-\boldsymbol{\phi}'\iota)R_f+\boldsymbol{\phi}'\tilde{\mathbf R}=w_0R_f+\boldsymbol{\phi}'(\tilde{\mathbf R}-R_f\iota)\\
&=w_0\left(R_f+\boldsymbol{\pi}'(\tilde{\mathbf R}-R_f\iota)\right),
\end{aligned}
$$

**Portfolio average and variance**

期末财富的期望为

$$
\begin{aligned}
E[\tilde w]
&=\phi_f R_f+\boldsymbol{\phi}'\boldsymbol{\mu}\\
&=w_0R_f+\boldsymbol{\phi}'(\boldsymbol{\mu}-R_f\iota)\\
&=w_0\left(R_f+\boldsymbol{\pi}'(\boldsymbol{\mu}-R_f\iota)\right).
\end{aligned}
$$

期末财富的方差为

$$
\begin{aligned}
\operatorname{Var}(\tilde w)
&=\operatorname{Var}\!\left(\phi_f R_f+\boldsymbol{\phi}'\tilde{\mathbf R}\right)=\operatorname{Var}\!\left(\boldsymbol{\phi}'\tilde{\mathbf R}\right)\\
&=E\!\left[\left(\boldsymbol{\phi}'(\tilde{\mathbf R}-\boldsymbol{\mu})\right)^2\right]=E\!\left[\boldsymbol{\phi}'(\tilde{\mathbf R}-\boldsymbol{\mu})(\tilde{\mathbf R}-\boldsymbol{\mu})'\boldsymbol{\phi}\right]\\
&=\boldsymbol{\phi}'E\!\left[(\tilde{\mathbf R}-\boldsymbol{\mu})(\tilde{\mathbf R}-\boldsymbol{\mu})'\right]\boldsymbol{\phi}=\boldsymbol{\phi}'\boldsymbol{\Sigma}\boldsymbol{\phi}=w_0^2\,\boldsymbol{\pi}'\boldsymbol{\Sigma}\boldsymbol{\pi}.
\end{aligned}
$$

This means the portfolio problem is a trade-off between $\boldsymbol{\pi}'(\boldsymbol{\mu}-R_f\iota)$ and $\boldsymbol{\pi}'\boldsymbol{\Sigma}\boldsymbol{\pi}$: the former gives expected return, the latter gives risk.

#### 1.5.3 Diversification

若资产两两不相关且方差相同，都等于 $\sigma^2$，则

$$
\begin{aligned}
\operatorname{Var}(\boldsymbol{\phi}'\tilde{\mathbf R})
=\boldsymbol{\phi}'\boldsymbol{\Sigma}\boldsymbol{\phi}
=\sigma^2\sum_{i=1}^n\phi_i^2.
\end{aligned}
$$

在 fully invested 条件下，

$$
\begin{aligned}
\sum_{i=1}^n\pi_i=1,\qquad \pi_i=\frac{1}{n}\ \text{for each }i
\end{aligned}
$$

:::{admonition} Lemma
Diversification via Equal Weighting
若 $n$ 个资产相互不相关且方差都为 $\sigma^2$，则等权组合满足

$$
\pi_i=\frac{1}{n},\qquad i=1,\ldots,n.
$$

因而组合收益为

$$
\begin{aligned}
\tilde R_p
&=\sum_{i=1}^n\pi_i\tilde R_i
=\frac{1}{n}\sum_{i=1}^n\tilde R_i.
\end{aligned}
$$

组合财富为

$$
\begin{aligned}
\tilde w_p
&=w_0\tilde R_p.
\end{aligned}
$$

从而

$$
\begin{aligned}
\operatorname{Var}(\tilde w_p)
&=w_0^2\operatorname{Var}(\tilde R_p)=w_0^2\operatorname{Var}\!\left(\frac{1}{n}\sum_{i=1}^n\tilde R_i\right)\\
&=w_0^2\frac{1}{n^2}\sum_{i=1}^n\operatorname{Var}(\tilde R_i)=w_0^2\frac{1}{n^2}\cdot n\sigma^2\\
&=w_0^2\frac{\sigma^2}{n}\to 0,\qquad n\to\infty.
\end{aligned}
$$

:::

### 1.6 CARA-Normal and Euler Equation


#### 1.6.1 CARA-Normal Model

#### 推导核对：CARA-Normal 下最优风险暴露

:::{admonition} Lemma
CARA-Normal Demand
若 $\tilde R-r_f$ 正态，且 $u(w)=-e^{-\alpha w}$，则单个风险资产的最优投入满足

$$
\phi^*=\frac{E[\tilde R]-R_f}{\alpha\operatorname{Var}(\tilde R)}.
$$

多资产情形下，若超额收益向量 $\tilde R-R_f\iota$ 正态，

$$
\phi^*=\frac{1}{\alpha}\Sigma^{-1}(\mu-R_f\iota).
$$

:::

**WTS：** 把 CARA-Normal 的期望效用最大化化为均值—方差目标并解出 $\phi^*$。

**联立系统：** 单资产财富为

$$
\begin{aligned}
\tilde w
&=w_0R_f+\phi(\tilde R-R_f),\\
\tilde R-R_f&\sim N(\mu_e,\sigma^2),
\qquad \mu_e=E[\tilde R]-R_f.
\end{aligned}
$$

**连续求解：** 因为 $\tilde w$ 正态，

$$
\begin{aligned}
E[\tilde w]&=w_0R_f+\phi\mu_e,\\
\operatorname{Var}(\tilde w)&=\phi^2\sigma^2.
\end{aligned}
$$

CARA 正态的确定性等价为

$$
\begin{aligned}
CE(\tilde w)
&=E[\tilde w]-\frac{\alpha}{2}\operatorname{Var}(\tilde w)\\
&=w_0R_f+\phi\mu_e-\frac{\alpha}{2}\phi^2\sigma^2.
\end{aligned}
$$

于是

$$
\begin{aligned}
0
&=\frac{\partial CE}{\partial\phi}\\
&=\mu_e-\alpha\phi\sigma^2,\\
\phi^*
&=\frac{\mu_e}{\alpha\sigma^2}.
\end{aligned}
$$

多资产时，

$$
\begin{aligned}
CE(\phi)
&=w_0R_f+\phi'(\mu-R_f\iota)-\frac{\alpha}{2}\phi'\Sigma\phi,\\
0
&=\nabla_\phi CE(\phi)\\
&=(\mu-R_f\iota)-\alpha\Sigma\phi,\\
\phi^*
&=\frac{1}{\alpha}\Sigma^{-1}(\mu-R_f\iota).
\end{aligned}
$$

**结论：** CARA-Normal 下，风险需求等于“风险溢价 / 风险惩罚”；风险厌恶 $\alpha$ 只缩放总风险暴露，不改变切点组合方向。


:::{admonition} Definition (CARA-Normal setup)
假设风险资产收益服从正态分布，且投资者具有 CARA utility：

$$
\tilde R\sim N(\mu,\sigma^2),\qquad u(w)=-e^{-\alpha w}.
$$

如果 $\tilde X\sim N(\mu_X,\sigma_X^2)$，则

$$
E[e^{\tilde X}]=e^{\mu_X+\frac12\sigma_X^2}.
$$

因而 CARA + Normal 下，expected utility 可以改写成 certainty equivalent。

:::

#### 1.6.2 Single Risky Asset

设单个风险资产收益 $\tilde R\sim N(\mu,\sigma^2)$，持仓为 $\phi$，则

$$
\left\{
\begin{aligned}
\tilde w
&=\phi\tilde R+(w_0-\phi)R_f=w_0R_f+\phi(\tilde R-R_f)\\
\tilde X
&\equiv -\alpha\tilde w
=-\alpha\left[w_0R_f+\phi(\tilde R-R_f)\right]\\
\tilde X
&\sim N\!\left(
-\alpha\left[w_0R_f+\phi(\mu-R_f)\right],
\alpha^2\phi^2\sigma^2
\right)
\end{aligned}
\right.
$$

$$
\begin{aligned}
E[u(\tilde w)]
&=-E\!\left[e^{\tilde X}\right]=-\exp\!\left(-\alpha\left[w_0R_f+\phi(\mu-R_f)\right]+\frac12\alpha^2\phi^2\sigma^2\right).
\end{aligned}
$$

$$
\left\{
\begin{aligned}
Z
&=w_0R_f+\phi(\mu-R_f)-\frac12\alpha\phi^2\sigma^2\\
E[u(\tilde w)]
&=-e^{-\alpha Z}
=u(Z)
\end{aligned}
\right.
$$

因此 maximizing expected utility 等价于 maximizing CE $Z$；FOC 为

$$
\begin{aligned}
\frac{\partial Z}{\partial \phi}
=\mu-R_f-\alpha\phi\sigma^2=0.
\end{aligned}
$$

求解得

$$
\begin{aligned}
\alpha\phi\sigma^2=\mu-R_f
\Longleftrightarrow
\phi^*=\frac{\mu-R_f}{\alpha\sigma^2}.
\end{aligned}
$$

这说明 $\phi^*$ 随 risk premium 上升而上升，随 variance 和 absolute risk aversion 上升而下降；并且 $\phi^*$ 与 $w_0$ 无关，[absence of wealth effect](Asset Pricing/Theoretical AP/cards/part1/CARA vs CRRA - 最优风险暴露与 wealth effect) 成立。

#### 1.6.3 Multiple Risky Assets

若存在 $n$ 个 joint normal 风险资产，令 dollar holding vector 为 $\boldsymbol{\phi}$，则

$$
\left\{
\begin{aligned}
\tilde w
&=w_0R_f+\boldsymbol{\phi}'(\tilde{\mathbf R}-R_f\iota)\\
Z
&=w_0R_f+\boldsymbol{\phi}'(\boldsymbol{\mu}-R_f\iota)-\frac12\alpha\,\boldsymbol{\phi}'\boldsymbol{\Sigma}\boldsymbol{\phi}
\end{aligned}
\right.
$$

FOC 为

$$
\begin{aligned}
\frac{\partial Z}{\partial \boldsymbol{\phi}}
=\boldsymbol{\mu}-R_f\iota-\alpha\boldsymbol{\Sigma}\boldsymbol{\phi}=0.
\end{aligned}
$$

求解得

$$
\begin{aligned}
\alpha\boldsymbol{\Sigma}\boldsymbol{\phi}=\boldsymbol{\mu}-R_f\iota
\Longleftrightarrow
\boldsymbol{\phi}^*
=\frac1\alpha \boldsymbol{\Sigma}^{-1}(\boldsymbol{\mu}-R_f\iota).
\end{aligned}
$$

#### 1.6.4 Beginning-of-Period Consumption

若在期初同时选择消费 $c_0$ 和 portfolio $\{\phi_i\}_{i=1}^n$，则决策变量是$c_0,\phi_1,\dots,\phi_n$，期末消费为 $\tilde c_1$。

这里先区分两层效用：

$$
\left\{
\begin{aligned}
v(c_0,c_1) &= u_0(c_0)+u_1(c_1),\\
u(c_0,\tilde c_1) &= u_0(c_0)+E[u_1(\tilde c_1)].
\end{aligned}
\right.
$$

前者是给定 realized $c_1$ 的 period utility；后者是期初决策时的 expected utility。

choice problem 写成

$$
\left\{
\begin{aligned}
\max_{c_0,\{\phi_i\}_{i=1}^n}\quad
&u_0(c_0)+E[u_1(\tilde c_1)]\\
c_0+\sum_{i=1}^n\phi_i p_i
&=w_0\\
\tilde c_1
&=\tilde y+\sum_{i=1}^n\phi_i\tilde x_i
\end{aligned}
\right.
$$

>这里不把 $\tilde c_1$ 作为独立的 choice variable，因为它由 $\{\phi_i\}$ 通过$\tilde c_1=\tilde y+\sum_{i=1}^n\phi_i\tilde x_i$ 内生决定，所以 FOC 只对$c_0$ 和 $\phi_i$ 求偏导。

拉格朗日函数为

$$
\begin{aligned}
\mathcal L
=u_0(c_0)+E[u_1(\tilde c_1)]-\gamma\left(c_0+\sum_{i=1}^n\phi_i p_i-w_0\right).
\end{aligned}
$$

一阶条件为

$$
\left\{
\begin{aligned}
\frac{\partial \mathcal L}{\partial c_0}
&=u_0'(c_0)-\gamma=0 &&\implies \gamma=u_0'(c_0)\\
\frac{\partial \mathcal L}{\partial \phi_i}
&=E[u_1'(\tilde c_1)\tilde x_i]-\gamma p_i=0 &&\implies p_i u_0'(c_0)
=E[u_1'(\tilde c_1)\tilde x_i]
\end{aligned}
\right.
$$

定义 $\tilde m=\dfrac{u_1'(\tilde c_1)}{u_0'(c_0)}$，则

$$
\begin{aligned}
p_i=E[\tilde m\tilde x_i],
\qquad
1=E[\tilde m\tilde R_i].
\end{aligned}
$$

---

## Lecture 2. Stochastic Discount Factors and Mean-Variance Analysis (No Risk-Free Asset)

### 2.1 Definition of SDF


:::{admonition} Definition (Stochastic Discount Factor)
随机贴现因子（SDF）是任意随机变量 $\tilde m$，只要对每个资产 $i$ 都满足

$$
p_i=E[\tilde m\tilde x_i].
$$

:::

这里的核心意思是：**今天价格 = 对未来 payoff 做折现后的期望值**。  
SDF 把两种折现合在一起：

- time value of money：时间价值
- risk adjustment：风险补偿

若 $p_i>0$，则

$$
1=E[\tilde m\tilde R_i].
$$

若世界只有有限多个状态 $\omega_1,\dots,\omega_k$，则

$$
\begin{aligned}
p_i
=\sum_{j=1}^k \tilde m(\omega_j)\tilde x_i(\omega_j)\Pr(\omega_j),
\end{aligned}
$$

即价格是各状态 payoff 乘以 state price density 的加权和。

#### 2.1.1 Formulas for Prices

对任意资产，设其期末 payoff 为 $\tilde x$、价格为 $p$。若市场上存在 gross risk-free return $R_f$，则 $E[\tilde m]=1/R_f$，所以

$$
\left\{
\begin{aligned}
&p
=E[\tilde m\tilde x]=E[\tilde m]E[\tilde x]+\operatorname{cov}(\tilde m,\tilde x)\\
&E[\tilde m]
=\frac{1}{R_f}\\
&p
=\frac{E[\tilde x]}{R_f}+\operatorname{cov}(\tilde m,\tilde x)
=\frac{E[\tilde x]+R_f\operatorname{cov}(\tilde m,\tilde x)}{R_f}
\end{aligned}
\right.
$$

其中 $\operatorname{cov}(\tilde m,\tilde x)$ 就是 risk adjustment。若 payoff 与 SDF 不相关，则

$$
\begin{aligned}
\operatorname{cov}(\tilde m,\tilde x)=0
\Longrightarrow
p=\frac{E[\tilde x]}{R_f}.
\end{aligned}
$$

这就是把未来 payoff 按无风险利率折现后的结果。若多数资产的 payoff 与 SDF 负相关，则 $\operatorname{cov}(\tilde m,\tilde x)<0$，价格会比单纯折现更低。

更一般地，我们也可以把价格看成“**expected future cash flows discounted at a risk-adjusted rate**”。令 $\tilde R=\dfrac{\tilde x}{p}$，即 $\tilde x=p\tilde R$，则

$$
\begin{aligned}
1
&=E[\tilde m\tilde R]
=E[\tilde m]E[\tilde R]+\operatorname{cov}(\tilde m,\tilde R)
=\frac{1}{R_f}E[\tilde R]+\operatorname{cov}(\tilde m,\tilde R)\\
&\Longleftrightarrow
E[\tilde R]=R_f\bigl(1-\operatorname{cov}(\tilde m,\tilde R)\bigr)\\
&\Longleftrightarrow
\frac{E[\tilde x]}{p}=R_f\bigl(1-\operatorname{cov}(\tilde m,\tilde R)\bigr)\\
&\Longleftrightarrow
p=\frac{E[\tilde x]}{R_f\bigl(1-\operatorname{cov}(\tilde m,\tilde R)\bigr)}.
\end{aligned}
$$

这说明：
- 如果 $\tilde x$ 与 SDF 不相关，那么风险调整项为 0，价格就是风险自由折现值；
- 如果 $\tilde x$ 与 SDF 负相关，那么 $\operatorname{cov}(\tilde m,\tilde R)<0$，分母变大，价格下降；
- 如果 $\tilde x$ 与 SDF 正相关，那么它更像 bad-state payoff，分母变小，价格上升。

换句话说，**most assets’ payoffs are negatively correlated with a SDF, so the risk adjustment is a deduction from the expected payoff**，而不是简单的加成。

#### 2.1.2 Marginal Utility Defines a SDF

SDF 也可以由边际效用给出。设

$$
\left\{
\begin{aligned}
\max_{c_0,\{\phi_i\}_{i=1}^n}\quad
&E\!\left[v(c_0,\tilde c_1)\right]\\
c_0+\sum_{i=1}^n\phi_i p_i
&=w_0\\
\tilde c_1
&=\tilde y+\sum_{i=1}^n\phi_i\tilde x_i
\end{aligned}
\right.
$$

拉格朗日函数为

$$
\begin{aligned}
\mathcal L
=E\!\left[v(c_0,\tilde c_1)\right]
-\gamma\left(c_0+\sum_{i=1}^n\phi_i p_i-w_0\right).
\end{aligned}
$$

一阶条件为

$$
\left\{
\begin{aligned}
E\!\left[\frac{\partial v(c_0,\tilde c_1)}{\partial c_0}\right]
&=\gamma\\
E\!\left[\frac{\partial v(c_0,\tilde c_1)}{\partial c_1}\tilde x_i\right]
&=\gamma p_i
&&\implies
p_i=\frac{E\!\left[\frac{\partial v(c_0,\tilde c_1)}{\partial c_1}\tilde x_i\right]}
{E\!\left[\frac{\partial v(c_0,\tilde c_1)}{\partial c_0}\right]}
\end{aligned}
\right.
$$

从而

$$
\begin{aligned}
\tilde m
\equiv
\frac{\frac{\partial v(c_0,\tilde c_1)}{\partial c_1}}
{\mathbb{E}\!\left[\frac{\partial v(c_0,\tilde c_1)}{\partial c_0}\right]},
\qquad
p_i=E[\tilde m\tilde x_i].
\end{aligned}
$$

这说明 SDF 的本质是 **date-1 consumption 的边际效用 / date-0 consumption 的边际效用**，也就是跨期替代率（marginal rate of substitution）。若效用是 time-additive，即 $v(c_0,c_1)=u_0(c_0)+u_1(c_1)$，则

$$
\begin{aligned}
\tilde m=\frac{u_1'(\tilde c_1)}{u_0'(c_0)}.
\end{aligned}
$$

更一般地，边际效用高的状态更值钱，边际效用低的状态更便宜。

### 2.2 Arrow Securities, Risk-Neutral Probability, and SDF Existence


#### 2.2.1 Law of One Price and Arbitrage

:::{admonition} Definition (Law of One Price)
如果两个 portfolio 产生相同的 payoff，则它们的价格必须相同。  
设两个 portfolio 的持仓分别为 $\theta,\hat\theta$，若

$$
\begin{aligned}
\sum_{i=1}^n \theta_i\tilde x_i=\sum_{i=1}^n \hat\theta_i\tilde x_i,
\implies
p'\theta=p'\hat\theta.
\end{aligned}
$$

:::

:::{admonition} Definition (Arbitrage Opportunity)
套利机会（arbitrage opportunity）是一个 portfolio $\theta$，满足
1. 初始成本不高于0：$p'\theta \le 0$
2. 未来不会亏：$Pr(\sum_{i=1}^n \theta_i\tilde x_i \ge 0)=1$
3. 至少有一种情况赚钱：至少有一个严格不等式成立

$$
p'\theta<0
\qquad \text{or} \qquad
\Pr\!\left(\sum_{i=1}^n\theta_i\tilde x_i>0\right)>0
$$

:::

:::{admonition} Lemma
Law of One Price and Arbitrage-Free Pricing
若市场不存在套利机会，则相同 payoff 必须有相同价格；反过来，若 Law of One Price 被破坏，就会构造出套利组合。  
因此，**无套利定价**的核心就是：payoff 相同，price 相同。

:::

若两个 portfolio 的 payoff 相同，那么它们的差组合

$$
\begin{aligned}
\sum_{i=1}^n(\theta_i-\hat\theta_i)\tilde x_i=0
\end{aligned}
$$

必须满足零价格

$$
\begin{aligned}
p'(\theta-\hat\theta)=0.
\end{aligned}
$$

否则，若 $p'(\theta-\hat\theta)\neq 0$，则可以通过买入便宜组合、卖出贵组合构造套利。

#### 2.2.2 Arrow Securities and State Prices

:::{admonition} Definition (Arrow Security and State Price)
Arrow security 只在某个状态支付 1 unit 的 consumption good，在其他状态支付 0。  
该 Arrow security 的价格叫做 state price。

:::

若世界只有有限多个状态 $\omega_1,\dots,\omega_k$，记第 $j$ 个状态对应的 Arrow security 价格为 $q_j$，则

$$
\begin{aligned}
q_j
=E[\tilde m 1_{\{\omega_j\}}]
=\tilde m(\omega_j)\Pr(\omega_j).
\end{aligned}
$$

从而

$$
\begin{aligned}
\tilde m(\omega_j)=\frac{q_j}{\Pr(\omega_j)}.
\end{aligned}
$$

也就是说，某个状态下的 SDF 值等于该状态的 state price 除以该状态的概率。

若任意资产 $\tilde x$ 在各状态的 payoff 为 $\tilde x(\omega_j)$，则它的价格可以写成

$$
\begin{aligned}
p
=\sum_{j=1}^k q_j\tilde x(\omega_j),
\end{aligned}
$$

即任何资产都可以看成 Arrow securities 的组合，价格就是各组成 Arrow securities 价格之和。

#### 2.2.3 Existence of SDFs

#### 推导核对：有限状态下 LOP 与 SDF 存在

:::{admonition} Lemma
Law of One Price Implies an SDF on the Asset Span
设 payoff 矩阵为 $X\in\mathbb R^{S\times N}$，价格向量为 $p\in\mathbb R^N$。若 law of one price 成立，则存在 $m\in\mathbb R^S$ 使

$$
p=X'\Pi m,
$$

其中 $\Pi=\operatorname{diag}(P_1,\\ldots,P_S)$。若还要求无套利，则可选择严格正的 $m$。

:::

**WTS：** 将线性定价函数写成状态价格 / SDF 表达。

**联立系统：**

$$
\begin{aligned}
\text{payoff of portfolio }\theta &: X\theta,\\
\text{cost of portfolio }\theta &: p'\theta,\\
\text{LOP} &: X\theta=0\Rightarrow p'\theta=0.
\end{aligned}
$$

**连续求解：** LOP 等价于 $p$ 对 $\ker(X)$ 为零：

$$
\begin{aligned}
\theta\in\ker(X)
&\Longrightarrow p'\theta=0.
\end{aligned}
$$

线性代数基本定理给出

$$
\begin{aligned}
p\in \operatorname{Range}(X').
\end{aligned}
$$

所以存在状态价格向量 $q\in\mathbb R^S$ 使

$$
\begin{aligned}
p=X'q.
\end{aligned}
$$

若每个状态概率 $P_s>0$，令

$$
\begin{aligned}
m_s=\frac{q_s}{P_s},
\qquad
\Pi=\operatorname{diag}(P_s),
\end{aligned}
$$

则

$$
\begin{aligned}
p_i
&=\sum_{s=1}^S q_s X_{si}\\
&=\sum_{s=1}^S P_s m_s X_{si}\\
&=E[m\tilde x_i].
\end{aligned}
$$

若 $q_s>0$ 对所有 $s$ 成立，则 $m_s>0$，这排除了正 payoff 零成本的套利。

**结论：** LOP 给出“线性 SDF”，无套利把它强化为“正 SDF”。


一期、有限状态的模型。

- **Law of One Price $\iff$ Existence of SDF**
	- **（$\Rightarrow$）**：若两个 portfolio 的 payoff 相同，则它们价格也相同。令状态 $j$ 的 Arrow security 价格为 $q_j$，并设

$$
		  \begin{aligned}
		  m(\omega_j)=\frac{q_j}{\Pr(\omega_j)}.
		  \end{aligned}
$$

		  对任意 payoff $\tilde x$，有

$$
		  \begin{aligned}
		  p
		  &=\sum_{j=1}^k q_j\tilde x(\omega_j)
		  =\sum_{j=1}^k m(\omega_j)\tilde x(\omega_j)\Pr(\omega_j)
		  =E[\tilde m\tilde x].
		  \end{aligned}
$$

		  所以存在 SDF。
	- **（$\Leftarrow$）**：若 $p_i=E[\tilde m\tilde x_i]$ 对所有资产成立，而两个 portfolio 产生相同 payoff，即

$$
		  \begin{aligned}
		  \sum_{i=1}^n\theta_i\tilde x_i=\sum_{i=1}^n\hat\theta_i\tilde x_i,
		  \end{aligned}
$$

$$
		  \begin{aligned}
		  p'\theta
		  &=E\!\left[\tilde m\sum_{i=1}^n\theta_i\tilde x_i\right]
		  =E\!\left[\tilde m\sum_{i=1}^n\hat\theta_i\tilde x_i\right]
		  =p'\hat\theta.
		  \end{aligned}
$$

		  因此相同 payoff 必有相同价格。

- **No Arbitrage $\Longrightarrow$ Law of One Price**
	  若 Law of One Price 被破坏，存在两个 portfolio 满足相同 payoff 但不同价格。设它们的差组合为 $\Delta\theta=\theta-\hat\theta$，则

$$
	  \begin{aligned}
	  \sum_{i=1}^n\Delta\theta_i\tilde x_i=0,
	  \qquad
	  p'\Delta\theta\neq 0.
	  \end{aligned}
$$

	  若 $p'\Delta\theta<0$，买入 $\Delta\theta$ 就得到零未来 payoff、负初始成本；若 $p'\Delta\theta>0$，卖空 $\Delta\theta$ 即可。两种情况都构成套利，所以无套利必须推出 Law of One Price。

- **No Arbitrage $\Longleftrightarrow$ Existence of Strictly Positive SDF**
	- （$\Rightarrow$）在一期、有限状态模型里，无套利等价于存在一组严格正的 state prices $q_j>0$；再令

$$
	  \begin{aligned}
	  \tilde m(\omega_j)=\frac{q_j}{\Pr(\omega_j)},
	  \end{aligned}
$$

	  就得到严格正的 SDF。
	- （$\Leftarrow$）若 $\tilde m>0$ a.s.，而 $\theta$ 是套利组合，则

$$
	  \begin{aligned}
	  p'\theta
	  &=E[\tilde m\tilde x_\theta]
	  \le 0,
	  \end{aligned}
$$

	  其中 $\tilde x_\theta\ge 0$ a.s.。但只要 $\Pr(\tilde x_\theta>0)>0$，就有

$$
	  \begin{aligned}
	  E[\tilde m\tilde x_\theta]>0,
	  \end{aligned}
$$

	  矛盾。因此严格正的 SDF 排除套利。

总结起来就是：

$$
\begin{aligned}
\text{No Arbitrage}
\Longrightarrow
\text{Law of One Price}
\Longleftrightarrow
\text{Existence of SDF},
\end{aligned}
$$

而在有限状态模型中进一步有

$$
\begin{aligned}
\text{No Arbitrage}
\Longleftrightarrow
\text{Existence of Strictly Positive SDF}.
\end{aligned}
$$

#### 2.2.4 Market Completeness and Uniqueness of the SDF


- **市场完备性（Market Completeness）**
  若在有限状态模型中，资产 payoff 的线性张成空间满足

$$
  \begin{aligned}
  \mathcal S=\operatorname{span}\{\tilde x_1,\dots,\tilde x_n\}=\mathbb R^k,
  \end{aligned}
$$

  则市场完备。直观上，市场 payoff 已经把整个状态空间张满了，因此每个 Arrow payoff 都可复制。

- **SDF 的唯一性（Uniqueness of the SDF）**
  若 Law of One Price 成立且市场完备，则每个 Arrow payoff $1_{\{\omega_j\}}$ 的价格 $q_j$ 唯一，从而

$$
  \begin{aligned}
  q_j=E[\tilde m1_{\{\omega_j\}}]=\tilde m(\omega_j)\Pr(\omega_j),
  \end{aligned}
$$

  即

$$
  \begin{aligned}
  \tilde m(\omega_j)=\frac{q_j}{\Pr(\omega_j)}.
  \end{aligned}
$$

  所以 SDF 唯一（a.s.）。详细证明见 [Asset Pricing/Theoretical AP/cards/part1/市场完备性与 SDF 唯一性](Asset Pricing/Theoretical AP/cards/part1/市场完备性与 SDF 唯一性)。

- **风险中性概率的唯一性（Uniqueness of the Risk-Neutral Probability）**
  若无风险资产 $R_f$ 存在，则

$$
  \begin{aligned}
  Q(A)=R_fE[\tilde m1_A].
  \end{aligned}
$$

  因为 $\tilde m$ 唯一，所以 $Q$ 也唯一。

- **Remark**
  市场完备性比 Law of One Price 更强；没有完备性时，SDF 可以存在，但未必唯一。细节见 [Asset Pricing/Theoretical AP/cards/part1/市场完备性与 SDF 唯一性](Asset Pricing/Theoretical AP/cards/part1/市场完备性与 SDF 唯一性)。

#### 2.2.5 Risk-Neutral Probability from SDF

由无风险资产定价条件

$$
\begin{aligned}
1=E[\tilde mR_f]=R_fE[\tilde m],
\end{aligned}
$$

所以

$$
\begin{aligned}
E[\tilde m]=\frac{1}{R_f}\qquad \text{(SDF 的均值等于无风险利率倒数)}.
\end{aligned}
$$

定义

$$
\begin{aligned}
Q(A)=R_fE[\tilde m1_A],
\end{aligned}
$$

则

$$
\begin{aligned}
Q(\Omega)=R_fE[\tilde m]=1,
\end{aligned}
$$

故 $Q$ 是概率测度。

对任意 payoff $\tilde x$，

$$
\begin{aligned}
p
&=E[\tilde m\tilde x]
=\frac{1}{R_f}R_fE[\tilde m\tilde x]
=\frac{1}{R_f}E^Q[\tilde x].
\end{aligned}
$$

有限状态下，$Q(\omega_j)=R_f\tilde m(\omega_j)P(\omega_j)$，所以

$$
\begin{aligned}
p
=\sum_{j=1}^k \tilde m(\omega_j)\tilde x(\omega_j)P(\omega_j)
=\frac{1}{R_f}\sum_{j=1}^k Q(\omega_j)\tilde x(\omega_j)
=\frac{1}{R_f}E^Q[\tilde x].
\end{aligned}
$$

### 2.3 Risk Premia and Hansen-Jagannathan Bound


若 $p_i>0$，定义 gross return

$$
\begin{aligned}
\tilde R_i=\frac{\tilde x_i}{p_i}.
\end{aligned}
$$

$$
\begin{aligned}
1
&=E[\tilde m\tilde R_i]
=E[\tilde m]E[\tilde R_i]+\operatorname{cov}(\tilde m,\tilde R_i)
=\frac{1}{R_f}E[\tilde R_i]+\operatorname{cov}(\tilde m,\tilde R_i) \\
\Longleftrightarrow\quad
E[\tilde R_i]-R_f
&=-R_f\operatorname{cov}(\tilde m,\tilde R_i) \\
&=-R_f\,\operatorname{corr}(\tilde m,\tilde R_i)\operatorname{std}(\tilde m)\operatorname{std}(\tilde R_i) \\
\Longrightarrow\quad
\frac{|E[\tilde R_i]-R_f|}{\operatorname{std}(\tilde R_i)}
&\le R_f\operatorname{std}(\tilde m),
\end{aligned}
$$

对任意 $i,j$，

$$
\begin{aligned}
E[\tilde m(\tilde R_i-\tilde R_j)]
=E[\tilde m\tilde R_i]-E[\tilde m\tilde R_j]
=1-1
=0
\qquad \text{(excess return 的定价条件)}.
\end{aligned}
$$

:::{admonition} Lemma
Hansen-Jagannathan Bound

$$
\frac{\operatorname{std}(\tilde m)}{E[\tilde m]}
\ge
\sup_{\tilde R}\frac{|E[\tilde R]-R_f|}{\operatorname{std}(\tilde R)}.
$$

再用 $E[\tilde m]=1/R_f$ 得到结论；若 $\tilde m$ 太平滑，就无法解释足够大的 Sharpe ratio。

:::

### 2.4 Mean-Variance Frontier without a Risk-Free Asset


$$
A=\mu'\Sigma^{-1}\mu,
\qquad
B=\mu'\Sigma^{-1}\iota,
\qquad
C=\iota'\Sigma^{-1}\iota.
$$

#### 2.4.1 Global Minimum Variance Portfolio

:::{admonition} Lemma
Global Minimum Variance Portfolio
GMV 组合只最小化组合方差，不指定目标收益，因此问题写成

$$
\begin{aligned}
\left\{
\begin{aligned}
\min_\pi\ \frac12\pi'\Sigma\pi
&\quad \text{s.t.}\quad \iota'\pi=1,\\
\mathcal{L}(\pi,\lambda)
&=\frac12\pi'\Sigma\pi-\lambda(\iota'\pi-1)
\end{aligned}
\right.
\Longrightarrow
\left\{
\begin{aligned}
\Sigma\pi&=\lambda\iota,\\
\iota'\pi&=1.
\end{aligned}
\right.
\end{aligned}
$$

由第一式左乘 $\Sigma^{-1}$，

$$
\begin{aligned}
\pi
&=\lambda \Sigma^{-1}\iota.
\end{aligned}
$$

再代回预算约束

$$
\begin{aligned}
1
&=\iota'\pi
=\iota'(\lambda\Sigma^{-1}\iota)
=\lambda\,\iota'\Sigma^{-1}\iota
\Longleftrightarrow
\lambda=\frac{1}{\iota'\Sigma^{-1}\iota},
\end{aligned}
$$

代回 $\pi=\lambda\Sigma^{-1}\iota$，得到

$$
\begin{aligned}
\pi_{GMV}
&=\frac{\Sigma^{-1}\iota}{\iota'\Sigma^{-1}\iota}.
\end{aligned}
$$

由 $\Sigma\succ 0$ 可知目标函数严格凸，故该解唯一。
进一步可得 GMV 的期望收益与方差：

$$
\begin{aligned}
\mu_{GMV}
&=E[\tilde R_{GMV}]
=\pi_{GMV}'\mu
=\frac{\iota'\Sigma^{-1}\mu}{\iota'\Sigma^{-1}\iota}
=\frac{B}{C}, \\
\sigma_{GMV}^2
&=\operatorname{Var}(\tilde R_{GMV})
=\pi_{GMV}'\Sigma\pi_{GMV}
=\frac{1}{\iota'\Sigma^{-1}\iota}
=\frac{1}{C}.
\end{aligned}
$$

:::

##### 2.4.1.1 Graphical Analysis for Two Assets

若只有两只风险资产，且组合满足 full investment $\iota'\pi=1$，则可写成

$$
\begin{aligned}
\pi_1=w,\qquad \pi_2=1-w.
\end{aligned}
$$

于是

$$
\begin{aligned}
\mu_p
=\pi_1\mu_1+\pi_2\mu_2
=w\mu_1+(1-w)\mu_2,
\end{aligned}
$$

$$
\begin{aligned}
\sigma_p^2
=\pi_1^2\sigma_1^2+\pi_2^2\sigma_2^2+2\pi_1\pi_2\operatorname{cov}(\tilde R_1,\tilde R_2)
\end{aligned}
$$

因此组合收益的标准差为

$$
\begin{aligned}
\sigma_p
&=\sqrt{\pi'\Sigma\pi} \\
&=\sqrt{\pi_1^2\operatorname{var}(\tilde R_1)+\pi_2^2\operatorname{var}(\tilde R_2)+2\pi_1\pi_2\operatorname{cov}(\tilde R_1,\tilde R_2)}.
\end{aligned}
$$

从而当 $w$ 变化时，$\mu_p$ 与 $\sigma_p$ 共同描出一条二维前沿曲线。若 $\mu_2>\mu_1$ 且 $\sigma_2>\sigma_1$，则前沿在均值—标准差平面中呈弯曲上升形状；GMV 点位于曲线最低处，右上方分支为 efficient frontier。

##### 2.4.1.2 General Case with More Than Two Assets

当 $n>2$ 时，不再直接画二维参数曲线，而是解约束优化

$$
\begin{aligned}
\min_\pi \frac12\pi'\Sigma\pi
\quad \text{s.t.}\quad
\mu'\pi=\mu_{target},\ \iota'\pi=1.
\end{aligned}
$$

所有满足不同 $\mu_{target}$ 的最优解共同扫出 mean-variance frontier；其中最低点是 GMV，GMV 右侧的上支为 efficient frontier。换言之，$n=2$ 时是“画图”，$n>2$ 时是“优化后取包络”。

#### 2.4.2 Mean-Variance Frontier

#### 推导核对：无风险资产缺失时的均值—方差前沿

:::{admonition} Lemma
General Mean-Variance Frontier
令

$$
A=\mu'\Sigma^{-1}\mu,
\quad B=\mu'\Sigma^{-1}\iota,
\quad C=\iota'\Sigma^{-1}\iota,
\quad D=AC-B^2.
$$

对目标期望收益 $\mu_p$，前沿组合为

$$
\pi(\mu_p)=\frac{C\mu_p-B}{D}\Sigma^{-1}\mu+\frac{A-B\mu_p}{D}\Sigma^{-1}\iota,
$$

方差为

$$
\sigma_p^2=\frac{C\mu_p^2-2B\mu_p+A}{D}.
$$

:::

**WTS：** 解

$$
\min_\pi \frac12\pi'\Sigma\pi
\quad\text{s.t.}\quad
\mu'\pi=\mu_p,
\quad
\iota'\pi=1.
$$

**联立系统：** Lagrangian 写为

$$
\begin{aligned}
\mathcal L(\pi,a,b)
=\frac12\pi'\Sigma\pi-a(\mu'\pi-\mu_p)-b(\iota'\pi-1).
\end{aligned}
$$

FOC 与两个约束组成系统：

$$
\left\{
\begin{aligned}
\Sigma\pi&=a\mu+b\iota,\\
\mu'\pi&=\mu_p,\\
\iota'\pi&=1.
\end{aligned}
\right.
$$

**连续求解：** 先由 FOC 得

$$
\begin{aligned}
\pi=a\Sigma^{-1}\mu+b\Sigma^{-1}\iota.
\end{aligned}
$$

代回约束，

$$
\left\{
\begin{aligned}
A a+B b&=\mu_p,\\
B a+C b&=1.
\end{aligned}
\right.
$$

矩阵形式为：

$$
\begin{aligned}
\begin{bmatrix}A&B\\B&C\end{bmatrix}
\begin{bmatrix}a\\b\end{bmatrix}
&=
\begin{bmatrix}\mu_p\\1\end{bmatrix},\\
\begin{bmatrix}a\\b\end{bmatrix}
&=\frac{1}{D}
\begin{bmatrix}C&-B\\-B&A\end{bmatrix}
\begin{bmatrix}\mu_p\\1\end{bmatrix}\\
&=
\begin{bmatrix}
\dfrac{C\mu_p-B}{D}\\[6pt]
\dfrac{A-B\mu_p}{D}
\end{bmatrix},
\end{aligned}
$$

故

$$
\begin{aligned}
\pi(\mu_p)
&=\frac{C\mu_p-B}{D}\Sigma^{-1}\mu+\frac{A-B\mu_p}{D}\Sigma^{-1}\iota.
\end{aligned}
$$

前沿方差可用 FOC 简化：

$$
\begin{aligned}
\sigma_p^2
&=\pi'\Sigma\pi\\
&=\pi'(a\mu+b\iota)\\
&=a\mu'\pi+b\iota'\pi\\
&=a\mu_p+b\\
&=\frac{C\mu_p^2-B\mu_p}{D}+\frac{A-B\mu_p}{D}\\
&=\frac{C\mu_p^2-2B\mu_p+A}{D}.
\end{aligned}
$$

**结论：** 前沿的所有公式都来自同一个 $2\times2$ 线性系统；GMV 是其中 $\mu_p=B/C$ 的最低方差点。


:::{admonition} Definition (Mean-Variance Frontier without Risk-Free Asset)
无风险资产缺失时，均值—方差前沿由下列问题定义：

$$
\min_\pi \frac12\pi'\Sigma\pi
\quad \text{s.t.} \quad
\mu'\pi=\mu_{target},
\qquad
\iota'\pi=1.
$$

其中

$$
\begin{aligned}
\pi&=(\pi_1,\ldots,\pi_n)', && \text{portfolio weights} \\
\Sigma&=\operatorname{Var}(\tilde{\mathbf R}), && \text{return covariance matrix} \\
\sigma_p^2&=\operatorname{Var}(\tilde R_p)=\pi'\Sigma\pi, && \text{portfolio variance} \\
\sigma_p&=\sqrt{\pi'\Sigma\pi}. &&
\end{aligned}
$$

因为 $\sqrt{\cdot}$ 单调递增，最小化 $\pi'\Sigma\pi$ 与最小化 $\sigma_p$ 是等价的；写成 $\frac12\pi'\Sigma\pi$ 只是为了求导更方便。

在给定 $\mu_{target}$ 的前提下，收益已经被约束住了，此时剩下要比较的是“谁更稳”：

$$
\begin{aligned}
\mu'\pi=\mu_{target}
\end{aligned}
\quad\Longrightarrow\quad
\text{在所有满足同一目标收益的组合中，选择方差最小者}.
$$

若反过来只最大化收益，而不约束风险，则只会把权重推向高收益、高波动资产，问题本身没有有效的风险控制；均值—方差分析要刻画的是 risk-return trade-off，所以标准形式是“给定收益，最小化风险”。


:::

**说明：Lagrangian Derivation**
对每个给定的 $\mu_{target}$，构造

$$
\begin{aligned}
\mathcal{L}(\pi,\delta,\gamma)
&=\frac12\pi'\Sigma\pi-\delta(\mu'\pi-\mu_{target})-\gamma(\iota'\pi-1),
\end{aligned}
$$

其中 $\delta$ 与 $\gamma$ 为 Lagrange multipliers。
一阶条件为

$$
\begin{aligned}
\frac{\partial\mathcal{L}}{\partial \pi}
&=\Sigma\pi-\delta\mu-\gamma\iota=0 \\
&\Longleftrightarrow\quad
\Sigma\pi=\delta\mu+\gamma\iota \\
&\Longleftrightarrow\quad
\pi=\delta\Sigma^{-1}\mu+\gamma\Sigma^{-1}\iota.
\end{aligned}
$$

代回两个约束：

$$
\begin{aligned}
\mu'\pi
&=\delta\,\mu'\Sigma^{-1}\mu+\gamma\,\mu'\Sigma^{-1}\iota
=\delta A+\gamma B
=\mu_{target}, \\
\iota'\pi
&=\delta\,\iota'\Sigma^{-1}\mu+\gamma\,\iota'\Sigma^{-1}\iota
=\delta B+\gamma C
=1.
\end{aligned}
$$

解得

$$
\begin{aligned}
\delta
&=\frac{C\mu_{target}-B}{AC-B^2}, \\
\gamma
&=\frac{A-B\mu_{target}}{AC-B^2}.
\end{aligned}
$$

因而最优组合为

$$
\begin{aligned}
\pi(\mu_{target})
&=\frac{C\mu_{target}-B}{AC-B^2}\Sigma^{-1}\mu
+\frac{A-B\mu_{target}}{AC-B^2}\Sigma^{-1}\iota.
\end{aligned}
$$

再将 $\pi(\mu_{target})$ 代入 $\sigma_p^2=\pi'\Sigma\pi$，即可得到 frontier equation：

$$
\sigma_p^2=\frac{A-2B\mu_{target}+C\mu_{target}^2}{AC-B^2}.
$$


:::{admonition} Lemma
Mean-Variance Frontier Equation VS Global Minimum Variance
前沿满足

$$
\sigma_p^2=\frac{A-2B\mu_{target}+C\mu_{target}^2}{AC-B^2}.
$$

这里 $\mu_{target}$ 是**事先指定的目标收益**：对每一个给定的 $\mu_{target}$，都先在满足

$$
\begin{aligned}
\mu'\pi=\mu_{target},\qquad \iota'\pi=1
\end{aligned}
$$

的组合里找方差最小者；当 $\mu_{target}$ 改变时，最优组合 $\pi$ 也随之改变，所有这些最优点连起来就是 mean-variance frontier。

GMV 则是这个框架中的特例：

$$
\begin{aligned}
\pi_{GMV}
&=
\arg\min_{\pi}\ \frac12\pi'\Sigma\pi
\quad \text{s.t.}\quad
\iota'\pi=1.
\end{aligned}
$$

它不预先固定收益，只在 full investment 约束下寻找方差最小的单点；该点恰好位于 frontier 的最低处。
:::

##### Case 1: No Risk-Free Asset Component

若 $B=0$，则

$$
\begin{aligned}
\mu_{GMV}
&=\mu'\pi_{GMV}
=\frac{\mu'\Sigma^{-1}\iota}{\iota'\Sigma^{-1}\iota}
=\frac{B}{C}
=0.
\end{aligned}
$$

并且

$$
\begin{aligned}
\delta&=\frac{\mu_{target}}{A}, \\
\gamma&=\frac{1}{C},
\end{aligned}
$$

从而

$$
\begin{aligned}
\pi
&=\delta\Sigma^{-1}\mu+\gamma\Sigma^{-1}\iota \\
&=\frac{\mu_{target}}{A}\Sigma^{-1}\mu+\frac{1}{C}\Sigma^{-1}\iota \\
&=\frac{\mu_{target}}{A}\Sigma^{-1}\mu+\pi_{GMV}.
\end{aligned}
$$

##### Case 2: With a Risk-Free Asset Component

定义

$$
\begin{aligned}
\pi_u
&=\frac{1}{B}\Sigma^{-1}\mu,
\qquad
\iota'\pi_u=1.
\end{aligned}
$$

则

$$
\begin{aligned}
\pi
&=\delta\Sigma^{-1}\mu+\gamma\Sigma^{-1}\iota \\
&=\delta\,\underbrace{B\pi_u}_{\Sigma^{-1}\mu}
+\gamma\,\underbrace{C\pi_{GMV}}_{\Sigma^{-1}\iota} \\
&=\lambda\pi_u+(1-\lambda)\pi_{GMV}
\end{aligned}
$$

> 记号上，$\pi$ 表示给定 $\mu_{target}$ 时的最优权重；$\pi_u$ 与 $\pi_{GMV}$ 是两只固定的基组合：
> $$

$$
\begin{aligned}
\pi_u
&=\frac{1}{B}\Sigma^{-1}\mu, \qquad
\iota'\pi_u=1, \qquad
\mu'\pi_u=\frac{A}{B}, \\
\pi_{GMV}
&=\frac{1}{C}\Sigma^{-1}\iota, \qquad
\iota'\pi_{GMV}=1, \qquad
\mu'\pi_{GMV}=\frac{B}{C}.
\end{aligned}
$$

$$
> 因此当 $B\neq 0$ 时，前面的解可以写成
> $$
\begin{aligned}
\pi=\lambda\pi_u+(1-\lambda)\pi_{GMV},
\qquad
\lambda=\frac{BC\,\mu_{target}-B^2}{AC-B^2}.
\end{aligned}
$$

> 再由 $\mu_{target}=\mu'\pi$ 可得
>$$

$$
\begin{aligned}
\mu_{target}
&=\lambda\,\mu'\pi_u+(1-\lambda)\mu'\pi_{GMV} \\
&=\lambda\frac{A}{B}+(1-\lambda)\frac{B}{C},
\end{aligned}
$$

> 从而验证上式中的 $\lambda$。
> “先定义 $\pi_u$ 和 $\pi_{GMV}$，再把一般最优组合写成它们的线性组合”的原因：它们是两只固定锚点，$\pi$ 只是随目标收益变化的最优点。

#### 2.4.3 Two-Fund Spanning

:::{admonition} Lemma
Two-Fund Separation Theorem
任意两个位于 mean-variance frontier 上的组合都张成整条前沿。更具体地，若 $\pi_a,\pi_b$ 都在 frontier 上，则对任意第三个 frontier 组合 $\pi_c$，存在某个 $\lambda$ 使得

$$
\begin{aligned}
\pi_c
&=\lambda\pi_a+(1-\lambda)\pi_b.
\end{aligned}
$$

因而 frontier 上的任意组合都可以表示成两个 frontier 组合的加权平均；若再要求收益高于 GMV，则得到 efficient frontier.

:::

**说明：+ Proof**
##### Proof when the Risk-Free Component is Zero
若 $B=0$，则任意 frontier 组合满足

$$
\begin{aligned}
\pi_i
&=\frac{\mu\prime\pi_i}{A}\Sigma^{-1}\mu+\pi_{GMV},
\qquad i\in\{a,b,c\}.
\end{aligned}
$$

frontier 上不同组合对应不同 expected return，因此 $\mu\prime\pi_a\neq\mu\prime\pi_b$。于是

$$
\begin{aligned}
\lambda\pi_a+(1-\lambda)\pi_b
&=\frac{\lambda\mu\prime\pi_a+(1-\lambda)\mu\prime\pi_b}{A}\Sigma^{-1}\mu+\pi_{GMV}.
\end{aligned}
$$

取

$$
\begin{aligned}
\lambda
&=\frac{\mu\prime\pi_c-\mu\prime\pi_b}{\mu\prime\pi_a-\mu\prime\pi_b},
\end{aligned}
$$

则

$$
\begin{aligned}
\lambda\pi_a+(1-\lambda)\pi_b
&=\pi_c.
\end{aligned}
$$


**说明：Proof**
##### Proof when the Risk-Free Component is Nonzero
若 $B\neq 0$，则每个 frontier 组合都可写成

$$
\begin{aligned}
\pi_i
&=\lambda_i\pi_u+(1-\lambda_i)\pi_{GMV},
\qquad i\in\{a,b,c\}.
\end{aligned}
$$

由于 $\pi_a\neq\pi_b$，故 $\lambda_a\neq\lambda_b$。于是

$$
\begin{aligned}
\lambda\pi_a+(1-\lambda)\pi_b
&=\big(\lambda\lambda_a+(1-\lambda)\lambda_b\big)\pi_u \\
&\quad +\big(\lambda(1-\lambda_a)+(1-\lambda)(1-\lambda_b)\big)\pi_{GMV}.
\end{aligned}
$$

取

$$
\begin{aligned}
\lambda
&=\frac{\lambda_c-\lambda_b}{\lambda_a-\lambda_b},
\end{aligned}
$$

则

$$
\begin{aligned}
\lambda\pi_a+(1-\lambda)\pi_b
&=\pi_c.
\end{aligned}
$$

任意 frontier 组合都可由两个 frontier 组合线性表示，two-fund spanning 得证.

#### 2.4.4 Mean-Variance Efficiency

:::{admonition} Definition (Mean-Variance Efficiency)
若 frontier 组合的 expected return 低于 GMV 组合的 expected return，则该组合位于 mean-variance frontier 的 inefficient part；若 frontier 组合的 expected return 高于 GMV 组合的 expected return，则该组合位于 efficient part，并称为 mean-variance efficient。

记 GMV 的 expected return 为

$$
\begin{aligned}
\mu_{GMV}
&=\mu'\pi_{GMV}
=\frac{B}{C}.
\end{aligned}
$$

则

$$
\begin{aligned}
\mu'\pi<\mu_{GMV}
&\Longrightarrow \pi \text{ is inefficient}, \\
\mu'\pi\ge \mu_{GMV}
&\Longrightarrow \pi \text{ is efficient}.
\end{aligned}
$$

直观上，若某个 frontier portfolio 的 expected return 还低于 GMV，则沿 frontier 向 GMV 移动会同时提高 expected return 并降低 variance；因此它不是 efficient。反过来，GMV 右侧的 frontier points 才是真正的 mean-variance trade-off 区域。
![Mean-variance frontier illustration 1](../../attachment/Pasted image 20260423100816.png)


:::

---

## Lecture 3. Mean-Variance Analysis (Risk-Free Asset), Factor Models, and Equilibrium

### 3.1 Frontier with a Risk-Free Asset


![Mean-variance frontier illustration 2](../../attachment/Pasted image 20260423100917.png)

#### 3.1.1 One Risky Asset and One Risk-Free Asset

设只有一只风险资产 $\tilde R$ 和一只无风险资产 $R_f$，投资者在风险资产上的持仓比例为 $\pi$，则无风险资产持仓为 $1-\pi$，组合收益为

$$
\begin{aligned}
\tilde R_p=\pi\tilde R+(1-\pi)R_f.
\end{aligned}
$$

于是

$$
\begin{aligned}
E[\tilde R_p]
=\pi E[\tilde R]+(1-\pi)R_f
=R_f+\pi(E[\tilde R]-R_f),
\end{aligned}
$$


$$
\begin{aligned}
\operatorname{std}(\tilde R_p)
=|\pi|\operatorname{std}(\tilde R).
\end{aligned}
$$

消去 $\pi$ 得

$$
\begin{aligned}
E[\tilde R_p]-R_f
=\frac{E[\tilde R]-R_f}{\operatorname{std}(\tilde R)}\operatorname{std}(\tilde R_p).
\end{aligned}
$$

因此在均值—标准差平面中，with one risky asset and one risk-free asset 的前沿是一条通过 $(0,R_f)$ 的直线；其斜率就是该风险资产的 Sharpe ratio。

#### 3.1.2 Framework

令 $\pi$ 表示**风险资产**的持仓向量，$\mu$ 为风险资产的期望收益向量，$\Sigma$ 为风险资产的协方差矩阵，则无风险资产持仓为 $1-\iota'\pi$。因此

$$
\begin{aligned}
\underbrace{(1-\iota'\pi)R_f}_{\text{risk-free part}}
+\underbrace{\mu'\pi}_{\text{risky part}}
=R_f+(\mu-R_f\iota)'\pi.
\end{aligned}
$$

所以

$$
\begin{aligned}
\text{risk premium}=(\mu-R_f\iota)'\pi,
\qquad
\operatorname{Var}(\tilde R_p)=\pi'\Sigma\pi.
\end{aligned}
$$


:::{admonition} Lemma
Mean-Variance Frontier with Risk-Free Asset
若存在无风险资产 $R_f$，则

$$
\begin{aligned}
\min_\pi \frac12\pi'\Sigma\pi
\quad \text{s.t.} \quad
R_f+(\mu-R_f\iota)'\pi=\mu_{target}
\end{aligned}
$$

$$
\begin{aligned}
\Longleftrightarrow\quad
\pi=\delta\Sigma^{-1}(\mu-R_f\iota),
\qquad
\delta=\frac{\mu_{target}-R_f}{(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota)}.
\end{aligned}
$$

因而

$$
\begin{aligned}
\pi
=\frac{\mu_{target}-R_f}{(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota)}\Sigma^{-1}(\mu-R_f\iota).
\end{aligned}
$$

:::

对应的方差为

$$
\begin{aligned}
\operatorname{Var}(\tilde R_p)
&=\pi'\Sigma\pi \\
&=\left(\frac{\mu_{target}-R_f}{(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota)}\Sigma^{-1}(\mu-R_f\iota)\right)'\Sigma
\left(\frac{\mu_{target}-R_f}{(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota)}\Sigma^{-1}(\mu-R_f\iota)\right) \\
&=\left(\frac{\mu_{target}-R_f}{(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota)}\right)^2
(\mu-R_f\iota)'\Sigma^{-1}\Sigma\Sigma^{-1}(\mu-R_f\iota) \\
&=\left(\frac{\mu_{target}-R_f}{(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota)}\right)^2
(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota).
\end{aligned}
$$

因此

$$
\begin{aligned}
\sigma_p
&=
\frac{|\mu_{target}-R_f|}{\sqrt{(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota)}}.
\end{aligned}
$$

所以 frontier portfolio 的 Sharpe ratio 为

$$
\begin{aligned}
\frac{E[\tilde R_p]-R_f}{\operatorname{std}(\tilde R_p)}
&=\frac{\mu_{target}-R_f}{\sigma_p} \\
&=\pm\sqrt{(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota)}.
\end{aligned}
$$

取正号就是最大 Sharpe ratio，因此 Capital Market Line 的斜率为

$$
\begin{aligned}
\max_\pi \frac{E[\tilde R_p]-R_f}{\operatorname{std}(\tilde R_p)}
&=
\sqrt{(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota)}.
\end{aligned}
$$

#### 3.1.3 Tangency Portfolio

#### 推导核对：为什么 risk-free rate equals B over C 时没有切点组合

:::{admonition} Lemma
No Tangency Portfolio when $R_f=B/C$
若无风险收益等于 GMV 组合期望收益，且 $\mu$ 不是 $\iota$ 的标量倍数，则不存在普通意义下的切点组合。

:::

**WTS：** 证明不存在 $\delta,\lambda$ 使

$$
\begin{aligned}
\delta\Sigma^{-1}(\mu-R_f\iota)
&=
\lambda\pi_{mu}+(1-\lambda)\pi_{GMV}
\end{aligned}
$$

同时构成资本市场线的切点方向。

**联立系统：**

$$
\begin{aligned}
\pi_{GMV}&=\frac{1}{C}\Sigma^{-1}\iota,\\
\pi_{mu}&=\frac{1}{B}\Sigma^{-1}\mu,\\
R_f&=\frac{B}{C},\\
\mu_e&=\mu-R_f\iota=\mu-\frac{B}{C}\iota.
\end{aligned}
$$


**连续求解：** 任何风险资产切点组合的方向都应与 $\Sigma^{-1}\mu_e$ 成比例。先看这个方向的 full-investment 权重和期望超额收益：

$$
\begin{aligned}
\iota'\Sigma^{-1}\mu_e
&=\iota'\Sigma^{-1}\mu-\frac{B}{C}\iota'\Sigma^{-1}\iota\\
&=B-\frac{B}{C}C\\
&=0.
\end{aligned}
$$

因此 $\Sigma^{-1}\mu_e$ 是一个 **零成本组合方向**，无法被标准化成 $\iota'\pi=1$ 的切点组合。再看该方向的期望超额收益：

$$
\begin{aligned}
\mu_e'\Sigma^{-1}\mu_e
&=(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota)\\
&=A-2R_fB+R_f^2C\\
&=A-2\frac{B^2}{C}+\frac{B^2}{C}\\
&=A-\frac{B^2}{C}\\
&=\frac{AC-B^2}{C}\\
&=\frac{D}{C}>0.
\end{aligned}
$$

所以它是正 Sharpe 的零成本套利方向式组合，而不是与无风险资产相切的 full-investment risky fund。

若强行写成 $\lambda\pi_{mu}+(1-\lambda)\pi_{GMV}$，右边始终满足 full investment：

$$
\begin{aligned}
\iota'[\lambda\pi_{mu}+(1-\lambda)\pi_{GMV}]
=\lambda+(1-\lambda)=1,
\end{aligned}
$$

而左边

$$
\begin{aligned}
\iota'[\delta\Sigma^{-1}\mu_e]
=\delta\cdot0=0.
\end{aligned}
$$

两者矛盾。

**结论：** $R_f=B/C$ 时，资本市场线经过 GMV 点且斜率退化；风险资产“切点方向”是零成本超额收益方向，不是可作为 risky fund 的切点组合。


:::{admonition} Lemma
Tangency Portfolio
切点组合（tangency portfolio）是只由风险资产构成、且 Sharpe ratio 最高的组合。先引入一个规范化目标组合 $\pi_{\text{target}}$，令它满足
(\mu-R_f\iota)'\pi_{\text{target}}=1.

这里几个符号要区分：
\left\{

$$
\begin{aligned}
\pi_{\text{target}}
&: \text{按 }(\mu-R_f\iota)'\pi=1\text{ 归一化的方向向量，不要求 }\iota'\pi_{\text{target}}=1,\\
\pi_{tan}
&: \text{按 }\iota'\pi=1\text{ 归一化后的切点风险基金，可以直接作为 risky portfolio 持有},\\
\pi_{GMV}
&: \text{risky-only frontier 上方差最低的 fully invested 组合},\\
\pi_{mv}
&: \text{risky-only frontier 上另一个 normalized frontier fund，用来和 }\pi_{GMV}\text{ 张成整条 frontier}.
\end{aligned}
$$

\right.

因为 Sharpe ratio 对缩放不变，所以切点问题等价于下面的规范化最小方差问题：

$$
\begin{aligned}
\min_{\pi_{\text{target}}} \ \frac12\pi_{\text{target}}'\Sigma\pi_{\text{target}} \quad \text{s.t.}\quad (\mu-R_f\iota)'\pi_{\text{target}}=1.
\end{aligned}
$$

拉格朗日函数为

$$
\begin{aligned}
\mathcal L(\pi_{\text{target}},\lambda)
=\frac12\pi_{\text{target}}'\Sigma\pi_{\text{target}}-\lambda\big((\mu-R_f\iota)'\pi_{\text{target}}-1\big).
\end{aligned}
$$

一阶条件给出

$$
\begin{aligned}
\Sigma\pi_{\text{target}}-\lambda(\mu-R_f\iota)=0
\qquad\Longleftrightarrow\qquad
\pi_{\text{target}}=\lambda\Sigma^{-1}(\mu-R_f\iota).
\end{aligned}
$$

代回约束得

$$
\begin{aligned}
1
&=(\mu-R_f\iota)'\pi_{\text{target}}
=\lambda(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota), \\
\lambda
&=\frac{1}{(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota)}.
\end{aligned}
$$

因而

$$
\begin{aligned}
\pi_{\text{target}}
=\frac{\Sigma^{-1}(\mu-R_f\iota)}{(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota)}.
\end{aligned}
$$

再按 $\iota'\pi_{tan}=1$ 归一化，得到

$$
\begin{aligned}
\pi_{tan}
=\frac{\pi_{\text{target}}}{\iota'\pi_{\text{target}}}
=\frac{\Sigma^{-1}(\mu-R_f\iota)}{\iota'\Sigma^{-1}(\mu-R_f\iota)}.
\end{aligned}
$$

因而切点组合的期望收益为

$$
\begin{aligned}
\mu_{tan}
&:=
E[\tilde R_{tan}]
=R_f+(\mu-R_f\iota)'\pi_{tan}\\
&=R_f+\frac{(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota)}{\iota'\Sigma^{-1}(\mu-R_f\iota)}.
\end{aligned}
$$

等价地，

$$
\begin{aligned}
\frac{\mu_{tan}-R_f}{(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota)}
=\frac{1}{\iota'\Sigma^{-1}(\mu-R_f\iota)}.
\end{aligned}
$$

这里 $\pi_{\text{target}}$ 是先按 excess return 归一化出来的中间变量；切点组合 $\pi_{tan}$ 再按 $\iota'\pi_{tan}=1$ 归一化。它位于 efficient frontier 上当且仅当其 expected return 大于 GMV 的 expected return。

:::

**说明：- 切点组合的两个等价视角**
**视角 1：和无风险资产一起看**
若投资者把财富中的比例 $y$ 放进切点基金，其余放进无风险资产，则总收益可写成

$$
\begin{aligned}
\tilde R_p
&= (1-y)R_f+y\tilde R_{tan} \\
&= R_f+y(\tilde R_{tan}-R_f).
\end{aligned}
$$

这里 $\tilde R_{tan}=\pi_{tan}'\tilde R$。因为切点基金是风险资产部分 Sharpe ratio 最高的那只，所以任意“无风险资产 + 风险基金”的可行组合，只是在这只基金上做缩放。

**视角 2：只看风险资产本身**
切点基金必须是一个 fully invested 的风险资产组合，因此

$$
\begin{aligned}
\iota'\pi_{tan}=1,
\end{aligned}
$$

这表示它不是“方向向量”而已，而是一只可以直接持有的风险基金。前面先求出的 $\pi_{\text{target}}$ 只是为了把方向固定住；再除以 $\iota'\pi_{\text{target}}$，就把它变成总权重为 1 的标准基金。

从符号上看，若

$$
\begin{aligned}
(\mu-R_f\iota)'\Sigma^{-1}(\mu-R_f\iota)>0,
\end{aligned}
$$

那么该方向对应 efficient part；若为负，则同一方向落到下支，需要整体翻转符号才对应上支。

#### 3.1.4 Two-Fund Spanning

:::{admonition} Lemma
Two-Fund Spanning with a Risk-Free Asset
若存在无风险资产 $R_f$，则 mean-variance frontier 由无风险资产和切点组合 $\pi_{tan}$ 张成。更具体地，对任意有效组合，都存在某个 $y$ 使得

$$
\begin{aligned}
\tilde R_p
=(1-y)R_f+y\tilde R_{tan}
=R_f+y(\tilde R_{tan}-R_f).
\end{aligned}
$$

因而只要知道 $R_f$ 和 $\pi_{tan}$，就能生成整条前沿。

:::

**说明：Proof**
设任意 frontier 组合在风险资产上的权重为 $\pi$，则其均值—方差问题可写成

$$
\begin{aligned}
\min_\pi \ \frac12\pi'\Sigma\pi
\quad \text{s.t.}\quad
R_f+(\mu-R_f\iota)'\pi=\mu_{target}.
\end{aligned}
$$

拉格朗日函数为

$$
\begin{aligned}
\mathcal L(\pi,\delta)
=\frac12\pi'\Sigma\pi-\delta\big(R_f+(\mu-R_f\iota)'\pi-\mu_{target}\big).
\end{aligned}
$$

一阶条件给出

$$
\begin{aligned}
\Sigma\pi=\delta(\mu-R_f\iota)
\qquad\Longleftrightarrow\qquad
\pi=\delta\Sigma^{-1}(\mu-R_f\iota).
\end{aligned}
$$

这说明所有 frontier 组合的风险资产部分都沿着同一个方向 $\Sigma^{-1}(\mu-R_f\iota)$，也就是切点组合的方向。

为了把比例写出来，对 FOC 左乘 $\pi'$，得

$$
\begin{aligned}
\pi'\Sigma\pi
&=\delta\,\pi'(\mu-R_f\iota),\\
\delta
&=\frac{\pi'\Sigma\pi}{\pi'(\mu-R_f\iota)}.
\end{aligned}
$$

代回 FOC，可得

$$
\begin{aligned}
\mu-R_f\iota
&=\frac{\pi'(\mu-R_f\iota)}{\pi'\Sigma\pi}\,\Sigma\pi.
\end{aligned}
$$

所以任一 frontier 组合的风险暴露都只是 tangency direction 的缩放。若记

$$
\begin{aligned}
\pi=y\pi_{tan},
\end{aligned}
$$

则

$$
\begin{aligned}
\tilde R_p
&=R_f+(\mu-R_f\iota)'(y\pi_{tan}) \\
&=R_f+y\big((\mu-R_f\iota)'\pi_{tan}\big) \\
&=R_f+y(\tilde R_{tan}-R_f).
\end{aligned}
$$

于是整条 frontier 由 $R_f$ 和 $\pi_{tan}$ 两个基金张成；这就是 two-fund spanning.

**说明：Remark**
从这个表达式还可以看出：若切点组合的 expected return 高于 $R_f$，则它位于 efficient part；若低于 $R_f$，则对应的是下支，需要把方向翻转后才得到上支的切点基金.

关联后文：[CAPM and Mean-Variance Efficiency](Asset Pricing/Theoretical AP/01_Single_Period_Models#^prop-3-2-4-mve)

**说明：- 另一种证明与 FOC 的经济含义**
设任意三个 frontier 组合满足

$$
\begin{aligned}
\pi_i=\delta_i\Sigma^{-1}(\mu-R_f\iota),\qquad i\in\{1,2,3\},
\end{aligned}
$$

其中 $\delta_1,\delta_2,\delta_3$ 为常数。若 $\delta_1\neq\delta_2$，令

$$
\begin{aligned}
\lambda=\frac{\delta_3-\delta_2}{\delta_1-\delta_2},
\end{aligned}
$$

则

$$
\begin{aligned}
\delta_3=\lambda\delta_1+(1-\lambda)\delta_2,
\end{aligned}
$$

因而

$$
\begin{aligned}
\pi_3
&=\delta_3\Sigma^{-1}(\mu-R_f\iota) \\
&=\lambda\delta_1\Sigma^{-1}(\mu-R_f\iota)+(1-\lambda)\delta_2\Sigma^{-1}(\mu-R_f\iota) \\
&=\lambda\pi_1+(1-\lambda)\pi_2.
\end{aligned}
$$

所以 frontier 上任意三只组合都在同一条直线上，two-fund spanning 再次得证。

另一种看 FOC 的方式是从

$$
\begin{aligned}
\Sigma\pi=\delta(\mu-R_f\iota)
\end{aligned}
$$

出发，左乘 $\pi'$ 得

$$
\begin{aligned}
\delta
=\frac{\pi'\Sigma\pi}{\pi'(\mu-R_f\iota)}.
\end{aligned}
$$

代回原式便得到

$$
\begin{aligned}
\mu-R_f\iota
=\frac{\pi'(\mu-R_f\iota)}{\pi'\Sigma\pi}\,\Sigma\pi.
\end{aligned}
$$

这里$\mu-R_f\iota$是风险溢价向量，
$\pi'(\mu-R_f\iota)$是组合 $\pi$ 的风险溢价，
$\Sigma\pi$是该组合与各风险资产的协方差向量，
$\pi'\Sigma\pi$是该组合方差。于是
$\frac{\Sigma\pi}{\pi'\Sigma\pi}$就是风险资产相对于组合 $\pi$ 的 beta 向量；FOC 的含义就是：**资产的风险溢价 = 资产 beta × 组合的风险溢价**。

### 3.2 Factor Models and Jensen's Alpha

从一般定价条件出发，

$$
\begin{aligned}
E[\tilde m\tilde R]=1,
\end{aligned}
$$


$$
\begin{aligned}
\operatorname{cov}(\tilde m,\tilde R)+E[\tilde m]E[\tilde R]=1.
\end{aligned}
$$


$$
\begin{aligned}
E[\tilde R]
&=\frac{1-\operatorname{cov}(\tilde m,\tilde R)}{E[\tilde m]}.
\end{aligned}
$$

定义 zero-beta return

$$
\begin{aligned}
R_z:=\frac{1}{E[\tilde m]},
\end{aligned}
$$

就得到

$$
\begin{aligned}
E[\tilde R]
&=R_z-R_z\operatorname{cov}(\tilde m,\tilde R),\\
E[\tilde R]-R_z
&=-R_z\operatorname{cov}(\tilde m,\tilde R).
\end{aligned}
$$

若某资产和 SDF 正协动越强，它的期望收益就越低；反过来，若它能在坏状态里提供保险，它就必须给出更高的期望收益来补偿投资者。

如果存在无风险资产 $\tilde R_f$，则令它代入上式：

$$
\begin{aligned}
E[\tilde m\tilde R_f]=1
\qquad\Longrightarrow\qquad
\tilde R_f=\frac{1}{E[\tilde m]}=R_z.
\end{aligned}
$$

**zero-beta return 在有无风险资产时就退化成 risk-free rate**。这就是后面所有因子模型、beta 定价公式的共同起点：先选一个 SDF，再看资产回报与它的协动结构。

#### 3.2.1 Capital Asset Pricing Model (CAPM)


:::{admonition} Lemma
Capital Asset Pricing Model
设 $\tilde R_m$ 为 market return，$R_z$ 为 zero-beta return。对任意资产 $\tilde R_i$，

$$
\begin{aligned}
E[\tilde R_i]-R_z
&=\frac{\operatorname{cov}(\tilde R_i,\tilde R_m)}{\operatorname{var}(\tilde R_m)}
\big(E[\tilde R_m]-R_z\big),
\end{aligned}
$$

其中

$$
\begin{aligned}
\beta_i
&=\frac{\operatorname{cov}(\tilde R_i,\tilde R_m)}{\operatorname{var}(\tilde R_m)}
\end{aligned}
$$

是资产 $\tilde R_i$ 的 market beta。若市场上存在无风险资产 $\tilde R_f$，则

$$
\begin{aligned}
R_z&=R_f,\\
E[\tilde R_i]-R_f
&=\beta_i\big(E[\tilde R_m]-R_f\big).
\end{aligned}
$$


:::



资产的风险溢价由 beta 线性决定，market risk premium 是共同的“价格”，不同资产只是 beta 不同。

**资产的期望收益可以写成某个“因子”或 SDF 的 beta / covariance 形式**

#### 3.2.2 Capital Market Line

:::{admonition} Lemma
Capital Market Line
上侧有效前沿就是 Capital Market Line；其斜率等于最大 Sharpe ratio。


**Definition (Security Market Line):**
用 $\bar r:=E[\tilde r]$ 表示 expected return，则 CAPM 的收益率写法为

$$
\begin{aligned}
\bar r_i-r_z
&=\beta_i\big(\bar r_m-r_z\big),\\
\beta_i
&=\frac{\operatorname{cov}(\tilde R_i,\tilde R_m)}{\operatorname{var}(\tilde R_m)}
=\frac{\operatorname{cov}(\tilde r_i,\tilde r_m)}{\operatorname{var}(\tilde r_m)}.
\end{aligned}
$$

因而

$$
\begin{aligned}
\bar r_i
&=r_z+\beta_i\big(\bar r_m-r_z\big).
\end{aligned}
$$

以 $\beta \mapsto \bar r$ 的图像称为 security market line。
若存在无风险资产，则 $r_z=r_f$，于是

$$
\begin{aligned}
\bar r_i
&=r_f+\beta_i\big(\bar r_m-r_f\big).
\end{aligned}
$$

:::


#### 3.2.3 Cost of Capital

:::{admonition} Definition (Cost of Capital)
设 $\bar x:=E[\tilde x]$ 为 expected payoff，$p$ 为价格，且

$$
\begin{aligned}
\bar r
&=\frac{\bar x}{p}-1.
\end{aligned}
$$

若 CAPM 成立，则

$$
\begin{aligned}
\frac{\bar x}{p}-1
&=r_z+\beta\big(\bar r_m-r_z\big)\\
\iff\quad
p
&=\frac{\bar x}{1+r_z+\beta\big(\bar r_m-r_z\big)}.
\end{aligned}
$$

因而价格等于 expected payoff 按

$$
\begin{aligned}
r_z+\beta\big(\bar r_m-r_z\big)
\end{aligned}
$$

这一 required rate of return 折现后的结果，这个 rate 叫做 cost of capital。
:::


#### 3.2.4 Mean-Variance Efficiency

关联前文：[mean-variance frontier with a risk-free asset](Asset Pricing/Theoretical AP/01_Single_Period_Models#3.1.2 Framework)、[tangency portfolio](Asset Pricing/Theoretical AP/01_Single_Period_Models#3.1.3 Tangency Portfolio)、[two-fund spanning](Asset Pricing/Theoretical AP/01_Single_Period_Models#3.1.4 Two-Fund Spanning)

:::{admonition} Lemma
CAPM and Mean-Variance Efficiency
CAPM 与 market portfolio 在 mean-variance frontier 上是等价的：

$$
\begin{aligned}
\text{CAPM}
\quad\Longleftrightarrow\quad
\tilde R_m \text{ 在 mean-variance frontier 上}.
\end{aligned}
$$

更具体地，若某个资产 $\tilde R_i$ 的 expected return 与 market portfolio 相同，即

$$
\begin{aligned}
E[\tilde R_i]&=E[\tilde R_m],
\end{aligned}
$$

则在 CAPM 下

$$
\begin{aligned}
\beta_i&=1,\\
\operatorname{cov}(\tilde R_i,\tilde R_m)
&=\operatorname{var}(\tilde R_m).
\end{aligned}
$$

由 Cauchy-Schwarz 不等式，

$$
\begin{aligned}
\operatorname{cov}(\tilde R_i,\tilde R_m)
&\le \operatorname{std}(\tilde R_i)\operatorname{std}(\tilde R_m),
\end{aligned}
$$

因而

$$
\begin{aligned}
\operatorname{std}(\tilde R_i)
&\ge \operatorname{std}(\tilde R_m).
\end{aligned}
$$

在所有 expected return 相同的组合里，market portfolio 的 variance 最小。

反过来，若 market portfolio 本身位于 mean-variance frontier，则它满足有效前沿上的切点条件，风险溢价必须满足 CAPM 形式；若存在无风险资产，则同样得到

$$
\begin{aligned}
E[\tilde R_i]-R_f
&=\beta_i\big(E[\tilde R_m]-R_f\big).
\end{aligned}
$$

若不存在无风险资产，则用 zero-beta return $R_z$ 取代 $R_f$，结论形式不变。

:::


**说明：Proof**
分两种情况。

**Case 1: there is a risk-free asset.**
已知 market portfolio $m$ 在 mean-variance frontier 上时，最大 Sharpe ratio 组合满足切点条件，因此对任意 risky asset $i$，

$$
\begin{aligned}
E[\tilde R_i]-R_f
&=\beta_i\big(E[\tilde R_m]-R_f\big),\\
\beta_i
&=\frac{\operatorname{cov}(\tilde R_i,\tilde R_m)}{\operatorname{var}(\tilde R_m)}.
\end{aligned}
$$

这就是 CAPM.

反过来，若 CAPM 成立，则对任意资产 $i$，

$$
\begin{aligned}
E[\tilde R_i]
&=R_f+\beta_i\big(E[\tilde R_m]-R_f\big).
\end{aligned}
$$

取 $i=m$ 得

$$
\begin{aligned}
E[\tilde R_m]-R_f
&=\beta_m\big(E[\tilde R_m]-R_f\big),
\end{aligned}
$$

且

$$
\begin{aligned}
\beta_m
&=\frac{\operatorname{cov}(\tilde R_m,\tilde R_m)}{\operatorname{var}(\tilde R_m)}=1.
\end{aligned}
$$

所以 market portfolio 的 beta 为 $1$，它与 frontier 上同均值资产相比具有最小方差，因此 market portfolio 在 mean-variance frontier 上.

**Case 2: there is no risk-free asset.**
设均值—方差问题的 FOC 写成

$$
\begin{aligned}
\Sigma\pi=\delta(\mu-\gamma\iota).
\end{aligned}
$$

定义

$$
\begin{aligned}
R_z&:=-\gamma/\delta,
\end{aligned}
$$

则

$$
\begin{aligned}
\Sigma\pi=\delta(\mu-R_z\iota).
\end{aligned}
$$

于是任意 efficient portfolio 都满足与 $(\mu-R_z\iota)$ 同方向的结构；对 market portfolio 取同样的方向系数，就得到

$$
\begin{aligned}
E[\tilde R_i]-R_z
&=\beta_i\big(E[\tilde R_m]-R_z\big),\\
\beta_i
&=\frac{\operatorname{cov}(\tilde R_i,\tilde R_m)}{\operatorname{var}(\tilde R_m)}.
\end{aligned}
$$

这就是 no-risk-free-asset 版本的 CAPM.

反过来，若上述 zero-beta CAPM 成立，则对 market portfolio 取 $i=m$ 得

$$
\begin{aligned}
E[\tilde R_m]-R_z
&=\beta_m\big(E[\tilde R_m]-R_z\big),
\end{aligned}
$$

同样有 $\beta_m=1$. 因而 market portfolio 是与其均值相同的组合里方差最小者，所以它在 mean-variance frontier 上。

#### 3.2.5 The SDF in the CAPM

:::{admonition} Lemma
The SDF in the CAPM
CAPM 蕴含存在一个对 market return 的 affine SDF。设

$$
\begin{aligned}
\psi
&=\frac{E[\tilde R_m]-R_z}{\operatorname{var}(\tilde R_m)},
\end{aligned}
$$

并定义

$$
\begin{aligned}
\tilde m
&=\frac{1}{R_z}\Big(1+\psi\big(E[\tilde R_m]-\tilde R_m\big)\Big).
\end{aligned}
$$

则 $\tilde m$ 是一个 SDF，即对任意 return $\tilde R$，

$$
\begin{aligned}
E[\tilde m\tilde R]
&=1.
\end{aligned}
$$


:::

**说明：Proof**

$$
\begin{aligned}
E[\tilde m\tilde R]
&=\frac{1}{R_z}E\!\left[\Big(1+\psi\big(E[\tilde R_m]-\tilde R_m\big)\Big)\tilde R\right] \\
&=\frac{1}{R_z}\Big(E[\tilde R]+\psi E[\tilde R_m]E[\tilde R]-\psi E[\tilde R_m\tilde R]\Big) \\
&=\frac{1}{R_z}\Big(E[\tilde R]-\psi\,\operatorname{cov}(\tilde R_m,\tilde R)\Big).
\end{aligned}
$$

由 CAPM 与 zero-beta return 的关系，

$$
\begin{aligned}
E[\tilde R]-R_z
&=\frac{\operatorname{cov}(\tilde R,\tilde R_m)}{\operatorname{var}(\tilde R_m)}
\big(E[\tilde R_m]-R_z\big),
\end{aligned}
$$

故

$$
\begin{aligned}
\psi\,\operatorname{cov}(\tilde R_m,\tilde R)
&=\frac{E[\tilde R_m]-R_z}{\operatorname{var}(\tilde R_m)}
\operatorname{cov}(\tilde R_m,\tilde R) \\
&=E[\tilde R]-R_z.
\end{aligned}
$$

代回即得

$$
\begin{aligned}
E[\tilde m\tilde R]
&=\frac{1}{R_z}\big(E[\tilde R]-(E[\tilde R]-R_z)\big)=1.
\end{aligned}
$$



**说明：Sign of the CAPM SDF**
$\tilde m$ 可能对某些实现值为负。若 CAPM 成立，则有三种可能：
1. market return 被限制在某个范围内，使得 $\tilde m>0$ 几乎必然成立；
2. 市场是不完全的，$\tilde m$ 可能为负或为零，但仍存在另一个严格为正的 SDF；
3. 存在套利机会。

因而：若 CAPM 成立、市场 complete、且无套利，则 market return 必须有界。

#### 3.2.6 General Factor Models

QE-PS 速查：[Factor model 快速复习](ProblemSet/ProblemSet#^qe-ps-factor-model-review)

:::{admonition} Lemma
General Factor Models
CAPM is a single factor model in which the factor is the market return.

更一般地，因子模型可以看作由某个特定 SDF 导出的定价关系：

$$
\begin{aligned}
E[\tilde R]-R_z
&=-R_z\operatorname{cov}(\tilde m,\tilde R).
\end{aligned}
$$

只要指定一个 particular SDF，就得到一个对应的 factor model；因子暴露决定 expected return 的横截面排序。

若进一步把 $\tilde m$ 写成若干因子的 affine function，则可写成标准的 linear factor pricing form。
:::


#### 3.2.7 Single-Factor Model

关联前文：[General Factor Models](Asset Pricing/Theoretical AP/01_Single_Period_Models#^prop-3-2-6-factor-models)

:::{admonition} Lemma
Single-Factor Model
设 factor 为 $\tilde f$。若存在常数 $R_z$ 和 $\lambda$，使得对任意 return $\tilde R$，

$$
\begin{aligned}
E[\tilde R]-R_z
&=\lambda\frac{\operatorname{cov}(\tilde f,\tilde R)}{\operatorname{var}(\tilde f)},
\end{aligned}
$$

则称 $\tilde R$ follows a single-factor model with factor $\tilde f$。
其中

$$
\begin{aligned}
\beta(\tilde R;\tilde f)
&=\frac{\operatorname{cov}(\tilde f,\tilde R)}{\operatorname{var}(\tilde f)}
\end{aligned}
$$

是 beta，$R_z$ 是 zero-beta return，$\lambda$ 是 factor risk premium / price of risk。
:::


:::{admonition} Lemma
When the Single Factor Is a Return
若 factor 本身就是一个 return $\tilde R_k$，把 $\tilde R=\tilde R_k$ 代入 single-factor formula：

$$
\begin{aligned}
E[\tilde R_k]-R_z
&=\lambda\frac{\operatorname{cov}(\tilde R_k,\tilde R_k)}{\operatorname{var}(\tilde R_k)}
=\lambda.
\end{aligned}
$$

因而

$$
\begin{aligned}
\lambda
&=E[\tilde R_k]-R_z.
\end{aligned}
$$

所以 price of risk 就是 factor 的 risk premium。

进一步，factor model 等价于 return $\tilde R_k$ 位于 mean-variance frontier 上；证明与 CAPM 的证明同型。
:::


:::{admonition} Lemma
When the Single Factor Is an Excess Return
设 $\tilde f=\tilde R_1-\tilde R_2$。则

$$
\begin{aligned}
E[\tilde f]
&=E[\tilde R_1]-E[\tilde R_2],
\end{aligned}
$$

且

$$
\begin{aligned}
\operatorname{var}(\tilde f)
&=\operatorname{var}(\tilde R_1-\tilde R_2) \\
&=\operatorname{var}(\tilde R_1)+\operatorname{var}(\tilde R_2)-2\operatorname{cov}(\tilde R_1,\tilde R_2) \\
&=cov(\tilde R_1 - \tilde R_2, \tilde R_1) - cov(\tilde R_1 - \tilde R_2, \tilde R_2)\\
&=\operatorname{cov}(\tilde f,\tilde R_1)-\operatorname{cov}(\tilde f,\tilde R_2).
\end{aligned}
$$

分别对 $\tilde R_1,\tilde R_2$ 用 single-factor formula 再相减：

$$
\begin{aligned}
E[\tilde R_1]-E[\tilde R_2]
&=\lambda\frac{\operatorname{cov}(\tilde f,\tilde R_1)-\operatorname{cov}(\tilde f,\tilde R_2)}{\operatorname{var}(\tilde f)} \\
&=\lambda.
\end{aligned}
$$

因而

$$
\begin{aligned}
\lambda
&=E[\tilde f].
\end{aligned}
$$

所以 price of risk 等于 factor 的 mean。
:::


#### 3.2.8 Multifactor Model

:::{admonition} Lemma
Multifactor Model
设 factors 为 $\tilde f_1,\ldots,\tilde f_k$，记

$$
\begin{aligned}
\tilde F&=(\tilde f_1,\ldots,\tilde f_k)',\\
\Sigma_F&=\operatorname{Var}(\tilde F).
\end{aligned}
$$

若存在常数 $R_z$ 和 $k$ 维向量 $\lambda$，使得对每个 return $\tilde R$，

$$
\begin{aligned}
E[\tilde R]
&=R_z+\lambda'\beta,
\end{aligned}
$$

其中

$$
\begin{aligned}
\beta
&=\Sigma_F^{-1}\operatorname{Cov}(\tilde F,\tilde R),
\end{aligned}
$$

则称 $\tilde R$ satisfies a multifactor model.

这里 $\beta$ 是 multiple regression betas 向量，$\operatorname{Cov}(\tilde F,\tilde R)$ 是由 $\operatorname{cov}(\tilde f_j,\tilde R)$ 组成的 $k\times 1$ 向量。
:::


**说明：Interpretation**
$\beta$ 依赖于具体的 return $\tilde R$；而 $\lambda$ 对所有资产相同，是各因子的价格 of risk / risk premium。
因而每个资产的 risk premium 等于其各个 beta 乘以对应 factor price of risk 之后再求和。


$$
\begin{aligned}
E[\tilde R]-R_z
&=\lambda_1\beta_1+\cdots+\lambda_k\beta_k
=\lambda'\beta.
\end{aligned}
$$


这其实是在做一个“风险分解”：

1. $\beta$ 是资产 $\tilde R$ 在各个 factor 上的暴露，告诉我们这只资产对每个因子有多敏感；
2. $\lambda$ 是每个 factor 的 price of risk，告诉我们市场愿意为每单位 factor risk 付出多少额外收益；
3. 所以 $\lambda'\beta$ 就是把每个因子的风险补偿加总起来，得到这只资产的总 risk premium。

换成一句话：

$$
\begin{aligned}
E[\tilde R]
=\underbrace{R_z}_{\text{基准收益}}
+\underbrace{\lambda'\beta}_{\text{因子风险补偿}}
\end{aligned}
$$

就是“无风险/zero-beta 基准收益 + 风险补偿”。

如果某资产对某个高 price-of-risk 因子的暴露更大，那么它的期望收益就更高；如果它对所有因子的 beta 都接近 0，那么它的期望收益就接近 $R_z$。

:::{admonition} Lemma
Prices of Risk in Multifactor Models
若某个 factor $\tilde f_j$ 本身就是一个 return $\tilde R_j$，则它的 price of risk 等于它的 risk premium：

$$
\begin{aligned}
\lambda_j
&=E[\tilde R_j]-R_z.
\end{aligned}
$$

若某个 factor $\tilde f_j$ 是一个 excess return，则它的 price of risk 等于它的 mean：

$$
\begin{aligned}
\lambda_j
&=E[\tilde f_j].
\end{aligned}
$$

因而 multifactor model 的定价含义与 single-factor model 完全一致：每个因子的 price of risk 取决于该因子的定义形式。
:::


#### 3.2.9 Factor Models Are Equivalent to Mean-Variance Efficiency

#### 推导核对：因子定价、SDF 与均值—方差效率的闭环

:::{admonition} Lemma
Factor Pricing as an SDF Restriction
若存在 $a,b$ 使

$$
m=a-b'f
$$

且 $E[mR_i^e]=0$ 对所有资产成立，则期望超额收益服从 beta pricing：

$$
E[R_i^e]=\beta_i'\lambda_f.
$$

:::

**WTS：** 从 $E[mR_i^e]=0$ 推出 beta representation。

**联立系统：**

$$
\begin{aligned}
R_i^e&=\alpha_i+\beta_i'f+\varepsilon_i,\\
E[\varepsilon_i]&=0,\\
\operatorname{Cov}(f,\varepsilon_i)&=0,\\
m&=a-b'f.
\end{aligned}
$$


**连续求解：** SDF 定价给出

$$
\begin{aligned}
0
&=E[mR_i^e]\\
&=E[m]E[R_i^e]+\operatorname{Cov}(m,R_i^e).
\end{aligned}
$$

由于 $m=a-b'f$，

$$
\begin{aligned}
\operatorname{Cov}(m,R_i^e)
&=\operatorname{Cov}(-b'f,R_i^e)\\
&=-b'\operatorname{Cov}(f,R_i^e)\\
&=-b'\operatorname{Cov}(f,\beta_i'f+\varepsilon_i)\\
&=-b'\operatorname{Var}(f)\beta_i.
\end{aligned}
$$

代回：

$$
\begin{aligned}
0
&=E[m]E[R_i^e]-b'\operatorname{Var}(f)\beta_i,\\
E[R_i^e]
&=\beta_i'\frac{\operatorname{Var}(f)b}{E[m]}.
\end{aligned}
$$

令 $\lambda_f\equiv \operatorname{Var}(f)b/E[m]$，得到

$$
\begin{aligned}
E[R_i^e]=\beta_i'\lambda_f.
\end{aligned}
$$


**结论：** 因子模型不是“回归形式”本身，而是存在一个落在因子张成空间里的 SDF；CAPM 是因子取市场组合时的特例。


:::{admonition} Lemma
Factor Models Are Equivalent to Mean-Variance Efficiency
若一组 random variables 张成了一个位于 mean-variance frontier 上的 return，则这些 random variables 可以作为 factor，构成一个 factor model。

反过来，若存在 factor pricing model 且 factors 是 excess returns，并且存在 risk-free asset，则 factors 与 risk-free return 的线性组合中，必有一个 return 位于 mean-variance frontier 上。

换言之，

$$
\begin{aligned}
\text{factor model}
\quad\Longleftrightarrow\quad
\text{mean-variance efficiency}.
\end{aligned}
$$

这个结论在 CAPM 中的特例就是：market return 位于 mean-variance frontier.
:::


**Proof**


$$
\begin{aligned}
\tilde f\in\mathcal F_{\text{mv}}
\;&\Longrightarrow\;
\tilde f=w'\tilde F,\\
\tilde R_p
\;&=R_f+y(\tilde f-R_f),\\
E[\tilde R_p]-R_f
\;&=y\big(E[\tilde f]-R_f\big),\\
\operatorname{cov}(\tilde f,\tilde R)
\;&=\operatorname{cov}(w'\tilde F,\tilde R)
=w'\operatorname{Cov}(\tilde F,\tilde R),\\
\operatorname{var}(\tilde f)
\;&=\operatorname{var}(w'\tilde F)
=w'\Sigma_F w,\\
\beta(\tilde R;\tilde f)
\;&=\frac{\operatorname{cov}(\tilde f,\tilde R)}{\operatorname{var}(\tilde f)}.
\end{aligned}
$$

因此对任意 return $\tilde R$，

$$
\begin{aligned}
E[\tilde R]-R_z
\;&=\lambda\,\beta(\tilde R;\tilde f)=\lambda\frac{\operatorname{cov}(\tilde f,\tilde R)}{\operatorname{var}(\tilde f)}.
\end{aligned}
$$

反过来，若存在 factor pricing model 且 factors 是 excess returns，则存在

$$
\begin{aligned}
\tilde f^\star
\;&=(W^\star)'\tilde F,\\
W^\star
\;&\propto \Sigma_F^{-1}\lambda,
\end{aligned}
$$

于是

$$
\begin{aligned}
\tilde f^\star\in\mathcal F_{\text{mv}}
\;&\Longleftrightarrow\;
\Sigma_F W^\star \propto \lambda
\;\Longleftrightarrow\;
\text{factor model}.
\end{aligned}
$$


$$
\begin{aligned}
\text{factor model}
\quad\Longleftrightarrow\quad
\text{mean-variance efficiency}.
\end{aligned}
$$


#### 3.2.10 Factor Models Are Equivalent to SDFs

:::{admonition} Lemma
Factor Models Are Equivalent to SDFs
因子模型本质上等价于 SDF 的 affine representation。

更具体地，若存在 factor model with $R_z\neq 0$，则某个 affine function of the factors 是一个 SDF。

反过来，若存在

$$
\begin{aligned}
\tilde m
&=a+b_1\tilde f_1+\cdots+b_k\tilde f_k,
\end{aligned}
$$

且 $\tilde m$ 是 SDF，则这些 factors 构成一个 factor model。

因而

$$
\begin{aligned}
\text{factor model}
\quad\Longleftrightarrow\quad
\text{affine SDF}.
\end{aligned}
$$

若 factor model 在 complete market 中成立，则 factors 必须有界；否则会导出套利机会。
:::


Empirical AP 连接：[Linear SDF implies beta pricing](../../Empirical AP/05_Cross_Section_Factor_Models.md) 是本命题在 excess-return / cross-sectional setting 下的写法；[Beta-SDF Equivalence](../../Empirical AP/cards/Beta_SDF_Equivalence.md) 汇总 EF8077 与 EF8083 的符号转换。

**Proof**


$$
\begin{aligned}
E[\tilde R]-R_z
&=\lambda'\beta,\\
\beta
&=\Sigma_F^{-1}\operatorname{Cov}(\tilde F,\tilde R).
\end{aligned}
$$

令

$$
\begin{aligned}
\tilde m
&=\frac{1}{R_z}\Big(1-\lambda'\Sigma_F^{-1}(\tilde F-E[\tilde F])\Big).
\end{aligned}
$$

则

$$
\begin{aligned}
E[\tilde m\tilde R]
&=\frac{1}{R_z}\Big(E[\tilde R]-\lambda'\Sigma_F^{-1}\operatorname{Cov}(\tilde F,\tilde R)\Big)\\
&=\frac{1}{R_z}\big(E[\tilde R]-(E[\tilde R]-R_z)\big)=1,
\end{aligned}
$$

所以 $\tilde m$ 是 SDF，且是 $\tilde F$ 的 affine function.

反过来，若

$$
\begin{aligned}
\tilde m
&=a+b'\tilde F,
\end{aligned}
$$

则

$$
\begin{aligned}
1
&=E[\tilde m\tilde R]
=aE[\tilde R]+b' E[\tilde F\tilde R]\\
&=(a+b'E[\tilde F])E[\tilde R]+b'\operatorname{Cov}(\tilde F,\tilde R),
\end{aligned}
$$

因此

$$
\begin{aligned}
E[\tilde R]
&=\frac{1}{a+b'E[\tilde F]}-\frac{b'\operatorname{Cov}(\tilde F,\tilde R)}{a+b'E[\tilde F]}\\
&=R_z+\lambda'\beta,
\end{aligned}
$$

其中

$$
\begin{aligned}
R_z&:=\frac{1}{a+b'E[\tilde F]},\\
\lambda'&:=-R_z\,b'\Sigma_F,\\
\beta&:=\Sigma_F^{-1}\operatorname{Cov}(\tilde F,\tilde R).
\end{aligned}
$$

故得到 factor model。

#### 3.2.11 Jensen's Alpha

:::{admonition} Definition (Jensen's Alpha)
设 benchmark return 为 $\tilde R_b$，单因子模型写成

$$
\begin{aligned}
\tilde R-R_f
&=\alpha+\beta(\tilde R_b-R_f)+\tilde\varepsilon.
\end{aligned}
$$

则 $\alpha$ 叫做 Jensen's alpha.

若模型正确，则 $\alpha=0$；若 $\alpha\neq 0$，则模型在该资产上失效。
:::


#### 3.2.12 Performance Evaluation

:::{admonition} Lemma
Performance Evaluation
评价一个投资者是否创造 alpha，等价于检验其 return 的 Sharpe ratio 是否超过某个临界阈值。

更具体地，

$$
\begin{aligned}
\alpha>0
\iff
\frac{E[\tilde R-R_f]}{\operatorname{std}(\tilde R)}
>
\frac{E[\tilde R_b-R_f]}{\operatorname{std}(\tilde R_b)}
\times \operatorname{corr}(\tilde R,\tilde R_b).
\end{aligned}
$$

因此 correlation 在绩效评价中很重要：它决定把 benchmark 的风险调整后收益“折算”到目标投资上之后，是否仍然有正 alpha。

需要注意：正 alpha 并不必然意味着 return mean-variance dominates benchmark；更准确地说，**marginal investment** 的增量如果同时在收益和相关性上满足上式，才会 mean-variance dominate benchmark.
:::


#### 3.2.13 Empirical Performance of Popular Models

**说明：Popular Factors**
经验研究中常见的因子模型包括：
- Fama-French three-factor model: market, SMB, HML
- Carhart four-factor model: add UMD (momentum)
- Fama-French five-factor model: add RMW and CMA

这些模型都可以看作是在 CAPM 之后，对 factor set 的进一步扩展，用来提高对 cross-section of returns 的解释力。


### 3.3 Competitive Equilibrium and Representative Investor


:::{admonition} Lemma
Competitive Equilibrium and Pareto Efficiency
完全市场中的竞争均衡是帕累托最优的。

**Definition (Representative Investor):**
若均衡价格也可由一个“拥有全市场财富”的单一投资者生成，则称该均衡 admit a representative investor。

:::

其边际效用在市场财富处的取值与 SDF 成比例。
