---
orphan: true
---

# Radon-Nikodym density 与 Girsanov 复习

来源：[ProblemSet/ProblemSet](../ProblemSet/ProblemSet)

:::{admonition} Note
+ 核心结论
若在测度 $Q^j$ 下

$$
d\widetilde B_t^j=dB_t^j+\sigma dt,
$$
则从 $Q^j$ 到 $\widetilde Q^j$ 的 density process 可写成

$$
Z_t^j
=
\exp\!\left(
-\int_0^t \sigma\,dB_s^j
-\frac12\int_0^t \sigma^2\,ds
\right).
$$
结论：换测度只改 drift，不改 quadratic variation。

:::

## 需要满足的条件

如果一个过程 $Z_t$ 要作为 Radon-Nikodym density，通常要满足：

$$
\begin{aligned}
Z_t &> 0, \\
Z_0 &= 1, \\
E^{Q^j}[Z_T] &= 1.
\end{aligned}
$$

最常见的候选形式是 stochastic exponential：

$$
Z_t=\mathcal E\!\left(\int_0^t \theta_s\,dB_s\right)
=
\exp\!\left(
\int_0^t \theta_s\,dB_s
-\frac12\int_0^t \theta_s^2\,ds
\right).
$$

再检查 Novikov 条件：

$$
E\!\left[\exp\!\left(\frac12\int_0^T \theta_s^2\,ds\right)\right]<\infty,
$$

就可以保证它是 true martingale，从而可以作为 density process。

## 推导

令

$$
X_t
:=
-\int_0^t \sigma\,dB_s^j
-\frac12\int_0^t \sigma^2\,ds.
$$

则

$$
dX_t=-\sigma dB_t^j-\frac12\sigma^2dt,
\qquad
d[X]_t=\sigma^2dt.
$$

由 Itô 公式，

$$
\begin{aligned}
d(e^{X_t})
&=
e^{X_t}dX_t+\frac12 e^{X_t}d[X]_t \\
&=
e^{X_t}\left(-\sigma dB_t^j-\frac12\sigma^2dt\right)
+\frac12 e^{X_t}\sigma^2dt \\
&=
-\sigma e^{X_t}dB_t^j.
\end{aligned}
$$

所以

$$
\frac{dZ_t^j}{Z_t^j}=-\sigma dB_t^j,
$$

即 $Z_t^j$ 没有 $dt$ 漂移项，是 strictly positive martingale。若满足 Novikov 条件，则

$$
E^{Q^j}[Z_t^j]=1.
$$

因此可以定义新测度

$$
\left.\frac{d\widetilde Q^j}{dQ^j}\right|_{\mathcal F_t}=Z_t^j.
$$

若记

$$
Z_t^j
:=
\exp\!\left(
-\int_0^t \sigma\,dB_s^j
-\frac12\int_0^t \sigma^2\,ds
\right),
$$

则对任意 $0\le t\le T$，

$$
\frac{Z_T^j}{Z_t^j}
=
\exp\!\left(
-\int_t^T \sigma\,dB_s^j
-\frac12\int_t^T \sigma^2\,ds
\right).
$$

若定义新测度

$$
\left.\frac{d\widetilde Q^j}{dQ^j}\right|_{\mathcal F_T}
=
Z_T^j,
$$

则 Bayes formula 给出

$$
E_t^{Q^j}\!\left[\frac{Z_T^j}{Z_t^j}X_T\right]
=
E_t^{\widetilde Q^j}[X_T].
$$

因此，只要随机积分部分能写成 $\frac{Z_T^j}{Z_t^j}$，它就会被吸收到测度变换里。对应地，

$$
d\widetilde B_t^j:=dB_t^j+\sigma dt
$$

在 $\widetilde Q^j$ 下成为 Brownian motion，这就是 Girsanov theorem 的内容。

## 本题里的用法

把

$$
\frac{\delta_t}{\delta_T}
=
\underbrace{\exp\!\left(\int_t^T(\sigma^2-\hat\mu_s^j)ds\right)}_{\text{drift part}}
\underbrace{\exp\!\left(
-\int_t^T \sigma dB_s^j-\frac12\int_t^T\sigma^2ds
\right)}_{\text{Radon-Nikodym density increment}},
$$

就得到

$$
G_j(t,T)
=
E_t^{\widetilde Q^j}\!\left[
\exp\!\left(\int_t^T(\sigma^2-\hat\mu_s^j)ds\right)
\right].
$$
