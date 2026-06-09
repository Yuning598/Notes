# Itô process 与 Itô formula

来源：[Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing#5.4.1 A Stochastic Growth Model](Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing#5.4.1 A Stochastic Growth Model)

返回：[Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing](Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing)

关联卡片：[Asset Pricing/Theoretical AP/cards/part2/连续时间组合选择问题](Asset Pricing/Theoretical AP/cards/part2/连续时间组合选择问题) · [Asset Pricing/Theoretical AP/cards/part2/HJB 方程与动态规划](Asset Pricing/Theoretical AP/cards/part2/HJB 方程与动态规划)

:::{admonition} Definition (Itô formula)
设 $X_t$ 满足一维 Itô process

$$
\begin{aligned}
dX_t=\mu_t\,dt+\sigma_t\,dB_t,
\end{aligned}
$$
且 $f(t,x)\in C^{1,2}$，则

$$
\begin{aligned}
df(t,X_t)
&=f_t(t,X_t)\,dt+f_x(t,X_t)\,dX_t+\frac12 f_{xx}(t,X_t)(dX_t)^2\\
&=\Big[f_t+\mu_t f_x+\frac12\sigma_t^2 f_{xx}\Big]dt+\sigma_t f_x\,dB_t.
\end{aligned}
$$

:::

^def-ito-formula

## 一维公式

对增量做二阶 Taylor expansion：

$$
\begin{aligned}
f(t+dt,X_t+dX_t)
&=f(t,X_t)+f_t\,dt+f_x\,dX_t+\frac12f_{xx}(dX_t)^2 \\
&\quad + o(dt)+o(|dX_t|^2).
\end{aligned}
$$

若

$$
\begin{aligned}
dX_t=\mu_tdt+\sigma_tdB_t,
\end{aligned}
$$

则

$$
\begin{aligned}
(dX_t)^2
&=(\mu_tdt+\sigma_tdB_t)^2 \\
&=\mu_t^2dt^2+2\mu_t\sigma_t\,dt\,dB_t+\sigma_t^2(dB_t)^2 \\
&=\sigma_t^2dt,
\end{aligned}
$$

因为

$$
\begin{aligned}
dt^2&=0,\qquad dt\,dB_t=0,\qquad (dB_t)^2=dt.
\end{aligned}
$$

于是得到一维 Itô formula。

## 多维公式

若

$$
\begin{aligned}
dX_t=\mu_t\,dt+\Sigma_t\,dB_t,
\end{aligned}
$$

其中 $X_t\in\mathbb R^n$，$B_t\in\mathbb R^m$，$f(t,x)\in C^{1,2}$，则

$$
\begin{aligned}
df(t,X_t)
&=
f_t\,dt
+\nabla f' dX_t
+\frac12 \operatorname{tr}\!\big(\Sigma_t\Sigma_t' D^2f\big)\,dt.
\end{aligned}
$$

在 HJB / asset pricing 里，Itô formula 的作用是把 value function 沿状态过程展开，从而识别 drift 项和 quadratic variation 项。

## 常用展开与记忆公式

若

$$
\begin{aligned}
\frac{dX_t}{X_t}=\mu_t\,dt+\sigma_t\,dB_t,\qquad X_t>0,
\end{aligned}
$$

则先写成

$$
\begin{aligned}
dX_t=X_t(\mu_t\,dt+\sigma_t\,dB_t).
\end{aligned}
$$

### 1. 对数

令 $f(x)=\ln x$，则

$$
\begin{aligned}
f'(x)&=\frac{1}{x},\qquad f''(x)=-\frac{1}{x^2}.
\end{aligned}
$$

因此

$$
\begin{aligned}
d\ln X_t
&=\frac{1}{X_t}\,dX_t+\frac12\left(-\frac{1}{X_t^2}\right)(dX_t)^2 \\
&=\mu_t\,dt+\sigma_t\,dB_t-\frac12\sigma_t^2\,dt \\
&=\left(\mu_t-\frac12\sigma_t^2\right)dt+\sigma_t\,dB_t.
\end{aligned}
$$

### 2. 幂函数

令 $f(x)=x^a$，则

$$
\begin{aligned}
f'(x)&=a x^{a-1},\qquad f''(x)=a(a-1)x^{a-2}.
\end{aligned}
$$

因此

$$
\begin{aligned}
d(X_t^a)
&=aX_t^{a-1}\,dX_t+\frac12a(a-1)X_t^{a-2}(dX_t)^2 \\
&=aX_t^a(\mu_t\,dt+\sigma_t\,dB_t)
 +\frac12a(a-1)X_t^a\sigma_t^2\,dt \\
&=X_t^a\left(a\mu_t+\frac12a(a-1)\sigma_t^2\right)dt+aX_t^a\sigma_t\,dB_t,
\end{aligned}
$$

所以

$$
\begin{aligned}
\frac{d(X_t^a)}{X_t^a}
&=\left(a\mu_t+\frac12a(a-1)\sigma_t^2\right)dt+a\sigma_t\,dB_t.
\end{aligned}
$$

特别地，取 $a=-\gamma$，

$$
\begin{aligned}
\frac{d(X_t^{-\gamma})}{X_t^{-\gamma}}
&=\left(-\gamma\mu_t+\frac12\gamma(\gamma+1)\sigma_t^2\right)dt-\gamma\sigma_t\,dB_t.
\end{aligned}
$$

再取 $a=-1$，得到倒数的常用公式

$$
\begin{aligned}
\frac{d(1/X_t)}{1/X_t}
&=\left(-\mu_t+\sigma_t^2\right)dt-\sigma_t\,dB_t.
\end{aligned}
$$

### 3. 指数函数

若 $Y_t$ 是 Itô process，且

$$
\begin{aligned}
dY_t=\mu_Y\,dt+\sigma_Y\,dB_t,
\end{aligned}
$$

则令 $f(y)=e^y$，有

$$
\begin{aligned}
f'(y)=e^y,\qquad f''(y)=e^y.
\end{aligned}
$$

于是

$$
\begin{aligned}
d(e^{Y_t})
&=e^{Y_t}\,dY_t+\frac12 e^{Y_t}(dY_t)^2 \\
&=e^{Y_t}\left(\mu_Y\,dt+\sigma_Y\,dB_t\right)
 +\frac12e^{Y_t}\sigma_Y^2\,dt \\
&=e^{Y_t}\left(\mu_Y+\frac12\sigma_Y^2\right)dt+e^{Y_t}\sigma_Y\,dB_t,
\end{aligned}
$$

所以

$$
\begin{aligned}
\frac{d(e^{Y_t})}{e^{Y_t}}
&=\left(\mu_Y+\frac12\sigma_Y^2\right)dt+\sigma_Y\,dB_t.
\end{aligned}
$$

### 4. 乘积

若

$$
\begin{aligned}
dX_t=\mu_X\,dt+\sigma_X\,dB_t,\qquad dY_t=\mu_Y\,dt+\sigma_Y\,dB_t,
\end{aligned}
$$

则

$$
\begin{aligned}
d(X_tY_t)
&=X_t\,dY_t+Y_t\,dX_t+dX_t\,dY_t \\
&=X_t(\mu_Y\,dt+\sigma_Y\,dB_t)+Y_t(\mu_X\,dt+\sigma_X\,dB_t)+\sigma_X\sigma_Y\,dt \\
&=\big(X_t\mu_Y+Y_t\mu_X+\sigma_X\sigma_Y\big)dt+\big(X_t\sigma_Y+Y_t\sigma_X\big)dB_t.
\end{aligned}
$$

如果两者由不同 Brownian motions 驱动，

$$
\begin{aligned}
dX_t=\mu_X\,dt+\sigma_X\,dB_t^{(1)},\qquad dY_t=\mu_Y\,dt+\sigma_Y\,dB_t^{(2)},
\end{aligned}
$$

且

$$
\begin{aligned}
dB_t^{(1)}\,dB_t^{(2)}=\rho_{12}\,dt,
\end{aligned}
$$

则

$$
\begin{aligned}
d(X_tY_t)
&=X_t\,dY_t+Y_t\,dX_t+dX_t\,dY_t \\
&=\big(X_t\mu_Y+Y_t\mu_X+\rho_{12}\sigma_X\sigma_Y\big)dt
+X_t\sigma_Y\,dB_t^{(2)}+Y_t\sigma_X\,dB_t^{(1)}.
\end{aligned}
$$

### 5. 时间确定项的指数折现

若

$$
\begin{aligned}
f(t)=e^{-\rho t},
\end{aligned}
$$

则

$$
\begin{aligned}
df(t)=-\rho e^{-\rho t}\,dt.
\end{aligned}
$$

因此常见的贴现—幂函数乘积

$$
\begin{aligned}
X_t=e^{-\rho t}Y_t^{-\gamma}
\end{aligned}
$$

可先拆成两个因子，再用乘积法则：

$$
\begin{aligned}
dX_t
&=e^{-\rho t}\,d(Y_t^{-\gamma})+Y_t^{-\gamma}\,d(e^{-\rho t}) \\
&=e^{-\rho t}\left[\left(-\gamma\mu_t+\frac12\gamma(\gamma+1)\sigma_t^2\right)dt-\gamma\sigma_t\,dB_t\right]
-\rho e^{-\rho t}Y_t^{-\gamma}\,dt \\
&=e^{-\rho t}Y_t^{-\gamma}\left[-\rho-\gamma\mu_t+\frac12\gamma(\gamma+1)\sigma_t^2\right]dt
-\gamma e^{-\rho t}Y_t^{-\gamma}\sigma_t\,dB_t.
\end{aligned}
$$

### 5. 复合函数模板

一般地，对 $f(X_t)$ 先写成

$$
\begin{aligned}
d f(X_t)
&=f'(X_t)\,dX_t+\frac12f''(X_t)(dX_t)^2 \\
&=f'(X_t)\big(\mu_t\,dt+\sigma_t\,dB_t\big)+\frac12f''(X_t)\sigma_t^2\,dt.
\end{aligned}
$$

这些展开最常用在资产定价里：
- 幂函数：$X_t^{-\gamma}$、$X_t^\gamma$、$1/X_t$
- 对数：$\ln X_t$、$\ln \pi_t$、$\ln c_t$
- 指数：$e^{Y_t}$、$e^{-\rho t}$、$e^{-\rho t}X_t^{-\gamma}$
- 乘积：$\pi_t\delta_t$、$M_tS_t$、$e^{-\rho t}X_t^{-\gamma}$
