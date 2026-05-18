# CARA vs CRRA - 最优风险暴露与 wealth effect

来源：[Asset Pricing/Theoretical AP/01_Single_Period_Models#1.6.2 Single Risky Asset](Asset Pricing/Theoretical AP/01_Single_Period_Models#1.6.2 Single Risky Asset) · [Asset Pricing/Theoretical AP/01_Single_Period_Models#1.6.1 CARA-Normal Model](Asset Pricing/Theoretical AP/01_Single_Period_Models#1.6.1 CARA-Normal Model)

返回：[Asset Pricing/Theoretical AP/01_Single_Period_Models](Asset Pricing/Theoretical AP/01_Single_Period_Models)

## CARA

若

$$
\begin{aligned}
u(w)=-e^{-\alpha w},
\qquad
\tilde R\sim N(\mu,\sigma^2),
\end{aligned}
$$

则

$$
\begin{aligned}
\tilde w
&=w_0R_f+\phi(\tilde R-R_f),\\
\tilde X
\equiv -\alpha\tilde w
&=-\alpha\left[w_0R_f+\phi(\tilde R-R_f)\right].
\end{aligned}
$$

因为 $\tilde R\sim N(\mu,\sigma^2)$，所以

$$
\begin{aligned}
\tilde X
\sim N\!\left(-\alpha\left[w_0R_f+\phi(\mu-R_f)\right],\ \alpha^2\phi^2\sigma^2\right).
\end{aligned}
$$

于是

$$
\begin{aligned}
E[u(\tilde w)]
&=-E[e^{\tilde X}]\\
&=-\exp\!\left(-\alpha\left[w_0R_f+\phi(\mu-R_f)\right]+\frac12\alpha^2\phi^2\sigma^2\right).
\end{aligned}
$$

定义 certainty equivalent

$$
\begin{aligned}
Z
=w_0R_f+\phi(\mu-R_f)-\frac12\alpha\phi^2\sigma^2,
\end{aligned}
$$

则

$$
\begin{aligned}
E[u(\tilde w)]=-e^{-\alpha Z}=u(Z).
\end{aligned}
$$

FOC 为

$$
\begin{aligned}
\frac{\partial Z}{\partial \phi}
=\mu-R_f-\alpha\phi\sigma^2=0,
\end{aligned}
$$

所以

$$
\begin{aligned}
\phi^*=\frac{\mu-R_f}{\alpha\sigma^2}.
\end{aligned}
$$

因此 $\phi^*$ 与 $w_0$ 无关，absence of wealth effect 成立。  
根本原因是 CARA 的 absolute risk aversion

$$
\begin{aligned}
A(w)=-\frac{u''(w)}{u'(w)}=\alpha
\end{aligned}
$$

是常数，不随财富变化。

## CRRA

若

$$
\begin{aligned}
u(w)=\frac{w^{1-\rho}}{1-\rho},
\qquad
\tilde R\sim N(\mu,\sigma^2),
\end{aligned}
$$

则 absolute risk aversion 为

$$
\begin{aligned}
A(w)=-\frac{u''(w)}{u'(w)}=\frac{\rho}{w}.
\end{aligned}
$$

CRRA 在 normal return 下通常没有像 CARA 那样的 closed form，所以用局部近似。设

$$
\begin{aligned}
\tilde w=w_0R_f+\phi(\tilde R-R_f).
\end{aligned}
$$

先记

$$
\begin{aligned}
m&=E[\tilde w]=w_0R_f+\phi(\mu-R_f),\\
\operatorname{Var}(\tilde w)&=\phi^2\sigma^2,\\
A(m)&=-\frac{u''(m)}{u'(m)}.
\end{aligned}
$$

> [!proof]- 二阶近似
> $$
> \begin{aligned}
> E[u(\tilde w)]
> &\approx u(m)+\frac12u''(m)\operatorname{Var}(\tilde w),\\
> u(CE)=u(m-\Delta)
> &\approx u(m)-u'(m)\Delta,\\
> \Delta
> &\approx -\frac{u''(m)}{2u'(m)}\operatorname{Var}(\tilde w)
> =\frac12A(m)\operatorname{Var}(\tilde w),\\
> CE
> &\approx m-\frac12A(m)\operatorname{Var}(\tilde w).
> \end{aligned}
> $$

代入 $A(m)=\rho/m$，并再用局部近似 $m\approx w_0$，得到 certainty equivalent

$$
\begin{aligned}
CE(\phi)
\approx w_0R_f+\phi(\mu-R_f)-\frac12\frac{\rho}{w_0}\phi^2\sigma^2.
\end{aligned}
$$

对 $\phi$ 求导并令其为零：

$$
\begin{aligned}
\frac{\partial CE(\phi)}{\partial \phi}
=\mu-R_f-\frac{\rho}{w_0}\phi\sigma^2=0.
\end{aligned}
$$

所以

$$
\begin{aligned}
\phi^*
\approx
\frac{\mu-R_f}{A(w_0)\sigma^2}
=\frac{w_0(\mu-R_f)}{\rho\sigma^2}.
\end{aligned}
$$

所以 CRRA 下的最优持仓一般**随财富 $w_0$ 变化**，这就是 wealth effect；和 CARA 不同，CRRA 的 absolute risk aversion 随财富上升而下降。

## 对照

$$
\begin{aligned}
\text{CARA}
&\Longrightarrow A(w)=\alpha,\ \phi^*\ \text{independent of } w_0,\\
\text{CRRA}
&\Longrightarrow A(w)=\rho/w,\ \phi^*\ \text{typically increasing in } w_0.
\end{aligned}
$$

^card-cara-vs-crra-wealth-effect

Related section: [Single Risky Asset](Asset Pricing/Theoretical AP/01_Single_Period_Models#1.6.2 Single Risky Asset)
