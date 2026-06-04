---
orphan: true
---

# OU 滤波 - Riccati 方程

来源：[Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#12.3 情形二：OU 漂移的滤波](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#12.3 情形二：OU 漂移的滤波)

## 核心推导

若隐藏状态服从

$$
d\tilde\mu_t=\kappa_i(\bar\mu_i-\tilde\mu_t)dt+\sigma_i d\tilde B_t,
$$

观测过程为

$$
dY_t=\tilde\mu_tdt+\sigma dB_t,
$$

则 Kalman-Bucy 滤波给出

$$
\begin{aligned}
d\hat\mu_t^i
&=
\kappa_i(\bar\mu_i-\hat\mu_t^i)dt+\frac{\Sigma_t^i}{\sigma}d\hat B_t^i,
\end{aligned}
$$

其中

$$
d\hat B_t^i:=\frac{1}{\sigma}(dY_t-\hat\mu_t^i dt).
$$

条件方差满足 Riccati 方程

$$
\frac{d\Sigma_t^i}{dt} =
-2\kappa_i\Sigma_t^i+\sigma_i^2-\frac{(\Sigma_t^i)^2}{\sigma^2}.
$$

稳态误差由

$$
-2\kappa_i\Sigma+\sigma_i^2-\frac{\Sigma^2}{\sigma^2}=0
$$

给出正根

$$
\bar\Sigma_i=-\kappa_i\sigma^2+\sqrt{\kappa_i^2\sigma^4+\sigma_i^2\sigma^2}.
$$
