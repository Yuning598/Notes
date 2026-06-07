---
orphan: true
---

# 状态价格密度、EMM 与鞅定价

导航：[Asset Pricing index](../../../index.md) · [Theoretical AP](../../../Theoretical_Asset_Pricing.md) · 来源：[02_Dynamic_Asset_Pricing](../../02_Dynamic_Asset_Pricing.md)


:::{admonition} Definition (Definition)
状态价格密度（SPD）$\xi_t$ 是严格正过程，使得 SPD 调整后的价格或收益过程成为鞅。

:::

## SPD 怎么算出来

最常见的做法是从代表性消费者的最优性条件反推。若效用为

$$
\begin{aligned}
E_0\!\left[\int_0^\infty e^{-\rho t}u(c_t)\,dt\right],
\end{aligned}
$$

则在最优分配下，**边际效用权重就是 SPD**：

$$
\begin{aligned}
\xi_t&=e^{-\rho t}u'(c_t).
\end{aligned}
$$

这是因为任意一个可交易支付流的最优定价都满足

$$
\begin{aligned}
V_0
&=E_0\!\left[\int_0^\infty \xi_t x_t\,dt\right],
\end{aligned}
$$

而一阶条件要求“多一单位资源在时点 $t$ 的影子价格”正比于该时点的边际效用。

若偏好是 CRRA，

$$
\begin{aligned}
u(c_t)=\frac{c_t^{1-\gamma}}{1-\gamma},
\end{aligned}
$$

则

$$
\begin{aligned}
u'(c_t)&=c_t^{-\gamma},
\end{aligned}
$$

所以

$$
\begin{aligned}
\xi_t
&=e^{-\rho t}c_t^{-\gamma}.
\end{aligned}
$$

如果再有均衡消费 $c_t=\delta_t$，就得到

$$
\begin{aligned}
\xi_t=e^{-\rho t}\delta_t^{-\gamma}.
\end{aligned}
$$

这就是后面 Lucas tree 里 SPD 的来源。

:::{admonition} Note
SPD 是什么直观上可以理解成什么？
在代表性消费者、时间可分偏好（time-separable utility）这类标准设定下，SPD 就是“边际效用的折现值”：

$$
\begin{aligned}
\xi_t=e^{-\rho t}u'(c_t).
\end{aligned}
$$
所以它衡量的是：时点 $t$ 的一单位消费，在当期偏好与贴现之后值多少钱。
但更一般地说，SPD 是定价核（pricing kernel），不一定非要通过代表性消费者来解释；上式只是最常见的经济学实现方式。

**Note:** pricing kernel、SDF、SPD 是一回事吗？
在这套笔记里，这几个词基本是在说同一个核心对象，只是表述角度不同：

$$
\begin{aligned}
\text{SPD } \xi_t
&\;\text{是“时点 }t\text{ 的价格权重”},\\
\text{pricing kernel}
&\;\text{强调它是定价用的核},\\
\text{SDF}
&\;\text{强调它是“随机折现因子”}.
\end{aligned}
$$
价格公式写成

$$
\begin{aligned}
P_t
&=\frac{1}{\xi_t}E_t[\xi_T X_T],
\end{aligned}
$$
或者等价地写成一个区间上的 SDF

$$
\begin{aligned}
M_{t,T}
&=\frac{\xi_T}{\xi_t}.
\end{aligned}
$$
在一时期模型里常直接写 $m_{t+1}$；在连续时间里常直接写 $\xi_t$。
所以“pricing kernel 不是 SDF 吗？”——是的，通常就是同一个东西，只是有时一个写成 level 过程 $\xi_t$，一个写成 one-step 贴现因子 $M_{t,T}$。

**Note:** SDF 是不是贴现过程？
严格说，**不是**。
- **贴现过程**通常指无风险资产的倒数，例如

$$
\begin{aligned}
B_t^{-1}=e^{-\int_0^t r_s\,ds},
\end{aligned}
$$
它只反映“按无风险利率折现”。
- **SDF / pricing kernel** 是随机的，还额外包含风险调整：

$$
\begin{aligned}
M_{t,T}
&=\frac{\xi_T}{\xi_t}.
\end{aligned}
$$
它不仅有时间价值，还包含状态依赖的风险补偿。
因此可以把 SDF 理解成“**风险调整后的随机贴现因子**”，而不是单纯的 deterministic discount factor。

在完全无风险的世界里，

$$
\begin{aligned}
M_{t,T}=e^{-\int_t^T r_s\,ds},
\end{aligned}
$$
> 这时 SDF 才退化成普通贴现因子。

:::

## 放松假设后 SPD 对应什么

若**不是 representative agent**，SPD 仍然存在，但通常不再等于“某一个人”的边际效用折现值。常见对应是：

- **heterogeneous agents**：SPD 来自均衡中的聚合边际替代率（aggregate marginal rate of substitution），本质上是“哪位代理人在边际上决定价格”；
- **incomplete markets**：不同消费者不能完全互相保险，SPD 仍由均衡定价核决定，但不一定能写成单一消费过程的简单函数；
- **Pareto-weighted planner problem**：若市场完备且偏好可加总，SPD 常可写成社会规划者的边际效用，带上 Pareto weights；
- **recursive / non-time-separable utility**：SPD 不再只依赖当前消费 $c_t$，还会依赖 continuation utility / 未来预期的边际价值；
- **habit formation**：SPD 变成“相对消费”或“消费减习惯项”的边际效用，而不是纯粹的当期消费水平；
- **multiple goods / production economy**：SPD 对应的是相关消费篮子、利润流或状态变量的边际定价，而不是单一标量消费。

所以更一般的结论是：

$$

\begin{aligned}
\xi_t
&=\text{pricing kernel}
\;\approx\;
\text{marginal value of wealth in equilibrium},
\end{aligned}

$$
而

$$

\begin{aligned}
\xi_t=e^{-\rho t}u'(c_t)
\end{aligned}

$$
只是最干净、最常见的特例。

:::{admonition} Definition (Definition)
等价鞅测度（EMM）$Q$ 满足 $Q\sim P$，且贴现价格过程在 $Q$ 下是鞅。

**Proposition:** Proposition
无套利 $\Longleftrightarrow$ 存在 SPD $\Longleftrightarrow$ 存在 EMM。

:::

## 定价公式

若存在股息流 $\omega_t$，则

$$

\xi_tS_t
=E_t\!\left[\xi_TS_T+\int_t^T\xi_s\omega_s\,ds\right].

$$

等价地，在风险中性测度下

$$

S_t
=E_t^Q\!\left[e^{-\int_t^Tr_u\,du}S_T+\int_t^Te^{-\int_t^sr_u\,du}\omega_s\,ds\right].

$$

## 核心推导

线性定价规则可写成

$$

\begin{aligned}
\Psi(c)
&=K_0\sum_{t=0}^T \frac{q_t}{B_t}c_t
=K_0\sum_{t=0}^T p_t\pi_t c_t,
\end{aligned}

$$
其中

$$

\begin{aligned}
q_t&=p_t\pi_t B_t.
\end{aligned}

$$

若 $\mathbb Q\ll P$，则存在 Radon-Nikodym 导数

$$

\begin{aligned}
Z_T:=\frac{d\mathbb Q}{dP}.
\end{aligned}

$$
于是对任意 integrable random variable $X$，

$$

\begin{aligned}
E^{\mathbb Q}[X]
&=E[Z_T X].
\end{aligned}

$$
进一步定义 density process

$$

\begin{aligned}
Z_t:=E[Z_T\mid\mathcal F_t],
\end{aligned}

$$
则 $\{Z_t\}$ 是 strictly positive martingale，且

$$

\begin{aligned}
E_t^{\mathbb Q}[X]
&=\frac{1}{Z_t}E_t[Z_T X].
\end{aligned}

$$

由 EMM 定价公式，

$$

\begin{aligned}
S_t
&=E_t^{\mathbb Q}\!\left[\frac{B_t}{B_{t+1}}(\delta_{t+1}+S_{t+1})\right].
\end{aligned}

$$
因此

$$

\begin{aligned}
\frac{S_t}{B_t}
&=E_t^{\mathbb Q}\!\left[\frac{\delta_{t+1}+S_{t+1}}{B_{t+1}}\right].
\end{aligned}

$$
无分红时，

$$

\begin{aligned}
\frac{S_t}{B_t}
&=E_t^{\mathbb Q}\!\left[\frac{S_{t+1}}{B_{t+1}}\right],
\end{aligned}

$$
所以 discounted price process 是 martingale。

有分红时，定义

$$

\begin{aligned}
\hat G_t
&:=\frac{S_t}{B_t}+\sum_{s=1}^t\frac{\delta_s}{B_s},
\end{aligned}

$$
则

$$

\begin{aligned}
\hat G_t
&=E_t^{\mathbb Q}[\hat G_{t+1}],
\end{aligned}

$$
所以 discounted gain process 是 martingale。

若无分红，记 gross return

$$

\begin{aligned}
R_{t+1}:=\frac{S_{t+1}}{S_t},
\end{aligned}

$$
且 $B_{t+1}=B_t(1+r_t)$，则

$$

\begin{aligned}
\frac{S_t}{B_t}
&=E_t^{\mathbb Q}\!\left[\frac{S_{t+1}}{B_{t+1}}\right]
=\frac{S_t}{B_t}E_t^{\mathbb Q}\!\left[\frac{R_{t+1}}{1+r_t}\right].
\end{aligned}

$$
因此

$$

\begin{aligned}
E_t^{\mathbb Q}[R_{t+1}]
&=1+r_t.
\end{aligned}

$$

## 含义

SPD 在真实测度下做风险调整；EMM 把风险调整吸收到测度变换里，于是价格表现为“按无风险利率贴现的期望值”。
