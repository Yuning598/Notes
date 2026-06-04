---
orphan: true
---

# Back 1992 - Brownian bridge

来源：[Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.4 Brownian bridge 解释](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.4 Brownian bridge 解释)

## 核心推导

把净订单流标准化为

$$
Y_t^*:=\frac{Y_t}{\sigma_z},
\qquad
\xi:=\frac{\tilde v-\bar v}{\lambda\sigma_z},
$$

则

$$
\begin{aligned}
dY_t^*
&=
\frac{\xi-Y_t^*}{1-t}dt+dB_t.
\end{aligned}
$$

## Brownian bridge 型 SDE 的显式解

$$
\begin{aligned}
dY_t^*
&=
\frac{\xi-Y_t^*}{1-t}dt+dB_t \\
&\Longleftrightarrow
dY_t^*+\frac{1}{1-t}Y_t^*dt =
\frac{\xi}{1-t}dt+dB_t.
\end{aligned}
$$

$$
\begin{aligned}
M_t
&=
\exp\left(\int_0^t \frac{1}{1-s}ds\right) =
\exp\left(-\log(1-t)\right) =
\frac{1}{1-t}, \\
U_t
&:=
M_tY_t^* =
\frac{Y_t^*}{1-t}.
\end{aligned}
$$

$$
\begin{aligned}
dU_t
&=
\frac{1}{1-t}dY_t^*+Y_t^*d\!\left(\frac{1}{1-t}\right) \\
&=
\frac{1}{1-t}\left(\frac{\xi-Y_t^*}{1-t}dt+dB_t\right)
+\frac{Y_t^*}{(1-t)^2}dt \\
&=
\frac{\xi}{(1-t)^2}dt+\frac{1}{1-t}dB_t.
\end{aligned}
$$

$$
\begin{aligned}
U_0
&=
0, \\
U_t-U_0
&=
\int_0^t \frac{\xi}{(1-s)^2}ds+\int_0^t \frac{1}{1-s}dB_s \\
&=
\xi\left(\frac{1}{1-t}-1\right)+\int_0^t \frac{1}{1-s}dB_s, \\
\frac{Y_t^*}{1-t}
&=
\xi\left(\frac{1}{1-t}-1\right)+\int_0^t \frac{1}{1-s}dB_s, \\
Y_t^*
&=
t\,\xi+(1-t)\int_0^t \frac{1}{1-s}dB_s.
\end{aligned}
$$

当 $\lambda=\sigma_v/\sigma_z$ 时，

$$
\xi=\frac{\tilde v-\bar v}{\sigma_v}\sim N(0,1).
$$

并且 $\xi$ 与 $B$ 独立，所以 $Y^*$ 是高斯过程。进一步可算出

$$
E[Y_s^*Y_t^*]=\min\{s,t\},
$$

因此 $Y^*$ 与标准 Brownian motion 有相同的有限维分布，故

$$
E[Y_1^*\mid\mathcal F_t^{Y^*}]=Y_t^*.
$$

于是

$$
\begin{aligned}
P_t
&=
E[\tilde v\mid\mathcal F_t^Y] \\
&=
\bar v+\lambda\sigma_z E[Y_1^*\mid\mathcal F_t^{Y^*}] \\
&=
\bar v+\lambda Y_t.
\end{aligned}
$$
