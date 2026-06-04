---
orphan: true
---

# Back 1992 - 净订单流 SDE

来源：[Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.2 均衡猜测](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.2 均衡猜测) · [Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.3 做市商定价规则的验证：Kalman 滤波](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.3 做市商定价规则的验证：Kalman 滤波) · [Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.4 Brownian bridge 解释](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.4 Brownian bridge 解释)

## 核心推导

若猜测价格规则

$$
P_t=\bar v+\lambda Y_t
$$

且终端完全揭示

$$
P_1=\tilde v,
$$

则

$$
\begin{aligned}
Y_1
&=
\frac{\tilde v-\bar v}{\lambda}.
\end{aligned}
$$

于是时点 $t$ 尚未被交易进价格的“剩余信息”是

$$
\begin{aligned}
\frac{\tilde v-\bar v}{\lambda}-Y_t
&=
\frac{\tilde v-P_t}{\lambda}.
\end{aligned}
$$

把这份剩余信息均匀分摊到剩余时间 $1-t$，得到候选交易速度

$$
\theta_t =
\frac{(\tilde v-\bar v)/\lambda-Y_t}{1-t} =
\frac{\tilde v-P_t}{(1-t)\lambda}.
$$

再由净订单流分解

$$
Y_t=X_t+Z_t,
\qquad
X_t=\int_0^t \theta_s ds,
\qquad
Z_t=\sigma_z B_t,
$$

可得

$$
\begin{aligned}
dY_t
&=
\theta_t\,dt+\sigma_z\,dB_t \\
&=
\frac{(\tilde v-\bar v)/\lambda-Y_t}{1-t}dt+\sigma_z\,dB_t.
\end{aligned}
$$

## 备注

这条 SDE 表示 insider 让订单流在噪声交易干扰下，逐步桥接到终点 $(\tilde v-\bar v)/\lambda$。
