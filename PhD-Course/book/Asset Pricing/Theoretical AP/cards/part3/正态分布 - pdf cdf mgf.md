# 正态分布 - pdf cdf mgf

:::{admonition} Definition (Standard normal)
若 $Z\sim N(0,1)$，则其 probability density function (pdf) 为

$$
\begin{aligned}
\phi(z)
&=\frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}z^2},
\end{aligned}
$$
cumulative distribution function (cdf) 为

$$
\begin{aligned}
\Phi(a)
&=\int_{-\infty}^a \phi(z)\,dz.
\end{aligned}
$$

:::

^def-standard-normal-pdf-cdf

:::{admonition} Definition (General normal)
若 $X\sim N(\mu,\sigma^2)$，则其 pdf 为

$$
\begin{aligned}
f_X(x)
&=\frac{1}{\sigma\sqrt{2\pi}}
\exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right),
\end{aligned}
$$
cdf 为

$$
\begin{aligned}
F_X(x)
&=P(X\le x)
=\Phi\!\left(\frac{x-\mu}{\sigma}\right).
\end{aligned}
$$

:::

^def-general-normal-pdf-cdf

由 cdf 的定义，常用尾积分写法是

$$
\begin{aligned}
\int_a^{\infty}\phi(z)\,dz
&=1-\Phi(a)
=\Phi(-a).
\end{aligned}
$$

若积分里出现平移后的正态核，则

$$
\begin{aligned}
\frac{1}{\sqrt{2\pi}}\int_a^{\infty}e^{-\frac{1}{2}(z-\mu)^2}\,dz
&=\Phi(\mu-a).
\end{aligned}
$$

这正是 Black-Scholes 推导里把 definite integral 改写成 $\Phi(\cdot)$ 的关键一步。

一般正态分布的标准化（standardization）是

$$
\begin{aligned}
X\sim N(\mu,\sigma^2)
\quad\Longrightarrow\quad
Z:=\frac{X-\mu}{\sigma}\sim N(0,1).
\end{aligned}
$$

因此很多概率都先转成标准正态：

$$
\begin{aligned}
P(X\le x)
&=P\!\left(\frac{X-\mu}{\sigma}\le \frac{x-\mu}{\sigma}\right) \\
&=\Phi\!\left(\frac{x-\mu}{\sigma}\right),\\
P(X>a)
&=1-\Phi\!\left(\frac{a-\mu}{\sigma}\right)
=\Phi\!\left(\frac{\mu-a}{\sigma}\right).
\end{aligned}
$$

若积分里直接出现一般正态 density，则

$$
\begin{aligned}
\int_a^\infty
\frac{1}{\sigma\sqrt{2\pi}}
\exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)\,dx
&=1-\Phi\!\left(\frac{a-\mu}{\sigma}\right)
=\Phi\!\left(\frac{\mu-a}{\sigma}\right).
\end{aligned}
$$

线性变换仍保持正态：

$$
\begin{aligned}
X\sim N(\mu,\sigma^2)
\quad\Longrightarrow\quad
a+bX\sim N(a+b\mu,b^2\sigma^2).
\end{aligned}
$$

:::{admonition} Definition (Moment generating function)
若 $Z\sim N(0,1)$，则 mgf 为

$$
\begin{aligned}
M_Z(t)
:=E[e^{tZ}]
=e^{\frac{1}{2}t^2}.
\end{aligned}
$$
更一般地，若 $X\sim N(\mu,\sigma^2)$，则

$$
\begin{aligned}
M_X(t)
:=E[e^{tX}]
=e^{\mu t+\frac{1}{2}\sigma^2 t^2}.
\end{aligned}
$$

:::

^def-normal-mgf

mgf 的常用推论：若 $Z\sim N(0,1)$，则

$$
\begin{aligned}
E[e^{a+bZ}]
&=e^aE[e^{bZ}]\\
&=e^{a+\frac{1}{2}b^2}.
\end{aligned}
$$

更一般地，若 $X\sim N(\mu,\sigma^2)$，则

$$
\begin{aligned}
E[e^{a+bX}]
&=e^aE[e^{bX}]\\
&=e^{a+b\mu+\frac{1}{2}b^2\sigma^2}.
\end{aligned}
$$

这也是 lognormal expectation 公式的基础。

:::{admonition} Note
对称性与常用恒等式

$$
\begin{aligned}
\phi(-z)&=\phi(z),\\
\Phi(-z)&=1-\Phi(z).
\end{aligned}
$$

因此

$$
\begin{aligned}
\int_{-\infty}^a \phi(z)\,dz
&=\Phi(a),\\
\int_a^{\infty} \phi(z)\,dz
&=\Phi(-a).
\end{aligned}
$$

:::

在 Black-Scholes 里，常把下限 $a$ 通过配方改写成 $-d_1,-d_2$，于是积分自然变成 $\Phi(d_1),\Phi(d_2)$。
