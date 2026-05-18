---
orphan: true
---

# Back 1992 - HJB 分解

来源：[Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.5 知情者最优性：HJB 推导](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.5 知情者最优性：HJB 推导) · [Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.6 验证定理](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.6 验证定理)

## 核心推导

HJB 为

$$
0=
\sup_\theta
\left\{(v-p)\theta+J_t+\lambda\theta J_p+\frac{1}{2}\sigma_v^2J_{pp}\right\}.
$$

把它按“含 $\theta$”与“不含 $\theta$”拆开：

$$
\begin{aligned}
0
&=
\sup_\theta\left\{
\big[v-p+\lambda J_p\big]\theta
+\left[J_t+\frac{1}{2}\sigma_v^2J_{pp}\right]
\right\}.
\end{aligned}
$$

因为 $\theta$ 无约束且线性进入，若

$$
v-p+\lambda J_p\neq 0,
$$

就可把上式推到 $+\infty$，因此必须有

$$
v-p+\lambda J_p=0.
$$

随后剩余常数项也必须为零：

$$
J_t+\frac{1}{2}\sigma_v^2J_{pp}=0.
$$

于是

$$
J_p=\frac{p-v}{\lambda}
\Longrightarrow
J(t,p,v)=\frac{(v-p)^2}{2\lambda}+A(t,v),
$$

再由

$$
A_t(t,v)+\frac{\sigma_v^2}{2\lambda}=0,
\qquad
J(1,v,v)=0,
$$

得到

$$
J(t,p,v)=\frac{(v-p)^2+\sigma_v^2(1-t)}{2\lambda}.
$$
