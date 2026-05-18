---
orphan: true
---

# Kalman-Bucy - 一般公式

来源：[Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.3 做市商定价规则的验证：Kalman 滤波](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.3 做市商定价规则的验证：Kalman 滤波)

## 核心公式

一般线性高斯系统写成

$$
\begin{aligned}
dx_t
&=
[a_0(t)+a_1(t)x_t+a_2(t)Y_t]dt
+m_1(t)dB_{1t}+m_2(t)dB_{2t}, \\
dY_t
&=
[A_0(t)+A_1(t)x_t+A_2(t)Y_t]dt
+M_1(t)dB_{1t}+M_2(t)dB_{2t}.
\end{aligned}
$$

若

$$
\hat x_t=E[x_t\mid\mathcal F_t^Y],
\qquad
S_t=E[(x_t-\hat x_t)^2\mid\mathcal F_t^Y],
$$

则创新过程

$$
dW_t:=dY_t-[A_0(t)+A_1(t)\hat x_t+A_2(t)Y_t]dt
$$

是 $\mathcal F_t^Y$-鞅增量；其条件二次变差为

$$
d\langle W\rangle_t=(M_1^2(t)+M_2^2(t))dt.
$$

因此这里的 $W_t$ 是“未标准化创新过程”。若想把它写成标准 Brownian motion，可再定义

$$
d\widetilde W_t:=\frac{dW_t}{\sqrt{M_1^2(t)+M_2^2(t)}}.
$$

于是下面的滤波方程也可改写成对 $d\widetilde W_t$ 的形式。用未标准化写法的好处是 Kalman gain 直接显式带出分母 $M_1^2+M_2^2$。

## 连续推导

记滤波误差

$$
e_t:=x_t-\hat x_t.
$$

则

$$
\begin{aligned}
dW_t
&=
dY_t-[A_0(t)+A_1(t)\hat x_t+A_2(t)Y_t]dt \\
&=
A_1(t)e_t\,dt+M_1(t)\,dB_{1t}+M_2(t)\,dB_{2t}.
\end{aligned}
$$

另一方面，

$$
\begin{aligned}
E[dx_t\mid\mathcal F_t^Y]
&=
[a_0(t)+a_1(t)\hat x_t+a_2(t)Y_t]dt,
\end{aligned}
$$

所以滤波估计应写成

$$
\begin{aligned}
d\hat x_t
&=
E[dx_t\mid\mathcal F_t^Y]+K_t\,dW_t \\
&=
[a_0(t)+a_1(t)\hat x_t+a_2(t)Y_t]dt+K_t\,dW_t.
\end{aligned}
$$

其中 $K_t$ 的正确投影对象不是

$$
dx_t-E[dx_t\mid\mathcal F_t^Y],
$$

而是下一瞬间状态 level 的预测误差

$$
\begin{aligned}
x_{t+dt}-E[x_{t+dt}\mid\mathcal F_t^Y]
&=
x_t+dx_t-\hat x_t-E[dx_t\mid\mathcal F_t^Y] \\
&=
(x_t-\hat x_t)+\bigl(dx_t-E[dx_t\mid\mathcal F_t^Y]\bigr) \\
&=
e_t+\bigl(dx_t-E[dx_t\mid\mathcal F_t^Y]\bigr).
\end{aligned}
$$

因此一阶线性投影应写成

$$
\begin{aligned}
K_t
&=
\frac{E\!\left[\left(x_{t+dt}-E[x_{t+dt}\mid\mathcal F_t^Y]\right)dW_t\mid\mathcal F_t^Y\right]}
{E\!\left[(dW_t)^2\mid\mathcal F_t^Y\right]} \\
&=
\frac{E\!\left[\left(e_t+dx_t-E[dx_t\mid\mathcal F_t^Y]\right)dW_t\mid\mathcal F_t^Y\right]}
{E\!\left[(dW_t)^2\mid\mathcal F_t^Y\right]}.
\end{aligned}
$$

先算分母：

$$
\begin{aligned}
E\!\left[(dW_t)^2\mid\mathcal F_t^Y\right]
&=
\left[M_1^2(t)+M_2^2(t)\right]dt.
\end{aligned}
$$

再看分子。先把

$$
dx_t-E[dx_t\mid\mathcal F_t^Y]
$$

写开：

$$
\begin{aligned}
dx_t-E[dx_t\mid\mathcal F_t^Y]
&=
a_1(t)e_t\,dt+m_1(t)\,dB_{1t}+m_2(t)\,dB_{2t},
\end{aligned}
$$

因此

$$
\begin{aligned}
x_{t+dt}-E[x_{t+dt}\mid\mathcal F_t^Y]
&=
e_t+a_1(t)e_t\,dt+m_1(t)\,dB_{1t}+m_2(t)\,dB_{2t}.
\end{aligned}
$$

于是分子连续展开为

$$
\begin{aligned}
&E\!\left[
\left(x_{t+dt}-E[x_{t+dt}\mid\mathcal F_t^Y]\right)dW_t
\middle|\mathcal F_t^Y
\right] \\
&=
E\!\Big[
\big(e_t+a_1(t)e_t\,dt+m_1(t)\,dB_{1t}+m_2(t)\,dB_{2t}\big)
\big(A_1(t)e_t\,dt+M_1(t)\,dB_{1t}+M_2(t)\,dB_{2t}\big)
\Bigm|\mathcal F_t^Y
\Big] \\
&=
A_1(t)E[e_t^2\mid\mathcal F_t^Y]dt \\
&\qquad
+E\!\left[
\left(m_1(t)\,dB_{1t}+m_2(t)\,dB_{2t}\right)
\left(M_1(t)\,dB_{1t}+M_2(t)\,dB_{2t}\right)
\middle|\mathcal F_t^Y
\right]
+o(dt) \\
&=
\left[A_1(t)S_t+m_1(t)M_1(t)+m_2(t)M_2(t)\right]dt+o(dt).
\end{aligned}
$$

这里 $A_1(t)S_t$ 来自

$$
E[e_t\,dW_t\mid\mathcal F_t^Y]=A_1(t)S_t\,dt,
$$

而不是某个 $dt\times dt$ 项。
于是取一阶主项，得到

$$
\begin{aligned}
K_t
&=
\frac{m_1(t)M_1(t)+m_2(t)M_2(t)+A_1(t)S_t}{M_1^2(t)+M_2^2(t)}.
\end{aligned}
$$

代回便得到

$$
\begin{aligned}
d\hat x_t
&=
[a_0(t)+a_1(t)\hat x_t+a_2(t)Y_t]dt \\
&\qquad
+\frac{m_1(t)M_1(t)+m_2(t)M_2(t)+A_1(t)S_t}{M_1^2(t)+M_2^2(t)}dW_t,
\end{aligned}
$$

$$
\frac{dS_t}{dt}
=
2a_1(t)S_t+m_1^2(t)+m_2^2(t)
-\frac{[m_1(t)M_1(t)+m_2(t)M_2(t)+A_1(t)S_t]^2}{M_1^2(t)+M_2^2(t)}.
$$

## 在 Back(1992) 里的识别

取 $x_t\equiv \tilde v$，就有

$$
\begin{aligned}
a_0=a_1=a_2=m_1=m_2=0,
\qquad
A_1=\frac{1}{\lambda(1-t)},
\qquad
M_1=\sigma_z,
\end{aligned}
$$

并且

$$
\begin{aligned}
A_0=-\frac{\bar v}{\lambda(1-t)},
\qquad
A_2=-\frac{1}{1-t}.
\end{aligned}
$$

此时未标准化创新过程为

$$
\begin{aligned}
dN_t
&=
dY_t-\frac{\hat v_t-\bar v-\lambda Y_t}{\lambda(1-t)}dt,
\end{aligned}
$$

标准化后才是 Brownian motion：

$$
\begin{aligned}
dW_t
&=
\frac{1}{\sigma_z}dN_t.
\end{aligned}
$$

因此文中的滤波方程既可写成

$$
\begin{aligned}
d\hat v_t
&=
\frac{\Sigma_t}{\lambda\sigma_z^2(1-t)}\,dN_t,
\end{aligned}
$$

也可写成

$$
\begin{aligned}
d\hat v_t
&=
\frac{\Sigma_t}{\lambda\sigma_z(1-t)}\,dW_t.
\end{aligned}
$$
