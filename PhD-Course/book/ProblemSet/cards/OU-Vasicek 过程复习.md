---
orphan: true
---

# OU/Vasicek 过程复习

来源：[ProblemSet/ProblemSet](../ProblemSet/ProblemSet)

:::{admonition} Note
+ 核心结论
OU/Vasicek 过程是最常见的 **mean-reverting** 扩散：

$$
dX_t=\kappa(\bar X-X_t)dt+\nu dB_t,
$$
其中 $\kappa>0$ 是回归速度，$\bar X$ 是长期均值，$\nu$ 是波动率。

它的一个关键特征是：当 $X_t$ 高于 $\bar X$ 时，漂移项为负；当 $X_t$ 低于 $\bar X$ 时，漂移项为正，所以过程会向 $\bar X$ 拉回去。

:::

## 这是什么

如果把一般扩散写成

$$
dX_t=\mu(X_t)dt+\nu dB_t,
$$

那么 OU/Vasicek 选择的是线性漂移

$$
\mu(X_t)=\kappa(\bar X-X_t).
$$

这意味着漂移大小和当前状态 $X_t$ 的偏离成正比，所以它不会一直往一个方向跑，而是围绕长期均值波动。

Vasicek 模型在金融里常用来描述：

$$
r_t,\ \hat\mu_t,\ y_t
$$

这类会回到长期均值的状态变量。

## 为什么叫 mean-reverting

看 drift 项：

$$
\kappa(\bar X-X_t).
$$

若 $X_t>\bar X$，则 $\bar X-X_t<0$，所以 drift 向下；
若 $X_t<\bar X$，则 $\bar X-X_t>0$，所以 drift 向上。

所以它会被拉回到 $\bar X$ 附近。

## 证明：显式解

令

$$
Y_t:=e^{\kappa t}X_t.
$$

则

$$
\begin{aligned}
dY_t
&=
\kappa e^{\kappa t}X_tdt+e^{\kappa t}dX_t \\
&=
\kappa e^{\kappa t}X_tdt+e^{\kappa t}\bigl[\kappa(\bar X-X_t)dt+\nu dB_t\bigr] \\
&=
\kappa \bar X e^{\kappa t}dt+\nu e^{\kappa t}dB_t.
\end{aligned}
$$

从 $t$ 积到 $t+s$ 得

$$
e^{\kappa(t+s)}X_{t+s}
=
e^{\kappa t}X_t
+\int_t^{t+s}\kappa \bar X e^{\kappa u}du
+\int_t^{t+s}\nu e^{\kappa u}dB_u.
$$

整理：

$$
X_{t+s}
=
\bar X+(X_t-\bar X)e^{-\kappa s}
+\nu\int_0^s e^{-\kappa(s-u)}\,dB_{t+u}.
$$

## 证明：条件均值与方差

由上式直接取条件期望：

$$
E_t[X_{t+s}]
=
\bar X+(X_t-\bar X)e^{-\kappa s}.
$$

随机积分的方差由 Itô isometry 得到：

$$
\begin{aligned}
\operatorname{Var}_t(X_{t+s})
&=
\nu^2 E_t\!\left[\left(\int_0^s e^{-\kappa(s-u)}\,dB_{t+u}\right)^2\right] \\
&=
\nu^2\int_0^s e^{-2\kappa(s-u)}du \\
&=
\frac{\nu^2}{2\kappa}\left(1-e^{-2\kappa s}\right).
\end{aligned}
$$

## 证明：积分过程

在 bond pricing 里常见的是

$$
I_{t,T}:=\int_t^T X_sds,\qquad \tau:=T-t.
$$

把显式解代入：

$$
\begin{aligned}
I_{t,T}
&=
\int_0^\tau\left[\bar X+(X_t-\bar X)e^{-\kappa u}\right]du
+
\nu\int_0^\tau\int_0^u e^{-\kappa(u-v)}\,dB_{t+v}\,du.
\end{aligned}
$$

定义

$$
b(\tau):=\int_0^\tau e^{-\kappa u}du=\frac{1-e^{-\kappa\tau}}{\kappa}.
$$

这个 $b(\tau)$ 是 mean-reversion kernel 的累积效应。因为 OU 解里总会出现 $e^{-\kappa u}$，一旦把 $X_s$ 再积分一次，就自然得到这个短记号。
则

$$
E_t[I_{t,T}]
=
\bar X\tau+(X_t-\bar X)b(\tau).
$$

对随机积分用 stochastic Fubini：

$$
\begin{aligned}
\int_0^\tau\int_0^u e^{-\kappa(u-v)}\,dB_{t+v}\,du
&=
\int_0^\tau\left(\int_v^\tau e^{-\kappa(u-v)}du\right)dB_{t+v} \\
&=
\frac{1}{\kappa}\int_0^\tau\left(1-e^{-\kappa(\tau-v)}\right)dB_{t+v}.
\end{aligned}
$$

因此

$$
\begin{aligned}
\operatorname{Var}_t(I_{t,T})
&=
\frac{\nu^2}{\kappa^2}
\int_0^\tau\left(1-e^{-\kappa(\tau-v)}\right)^2dv \\
&=
\frac{\nu^2}{\kappa^2}
\left[
\tau-2b(\tau)+\frac{1-e^{-2\kappa\tau}}{2\kappa}
\right].
\end{aligned}
$$

## 与本题对应

本题里把

$$
\bar X=\bar\mu_j^Q,\qquad \kappa=\kappa_j,\qquad \nu=\nu_j,\qquad X_t=\hat\mu_t^j
$$

代入，就得到

$$
b_j(\tau)=\frac{1-e^{-\kappa_j\tau}}{\kappa_j},
\qquad
m_j(\tau)=E_t^{\widetilde Q^j}\!\left[\int_t^T\hat\mu_s^jds\right],
\qquad
v_j(\tau)=\operatorname{Var}_t^{\widetilde Q^j}\!\left[\int_t^T\hat\mu_s^jds\right].
$$
