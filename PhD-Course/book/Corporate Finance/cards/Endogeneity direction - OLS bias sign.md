---
orphan: true
---

# Endogeneity direction - OLS bias sign

:::{admonition} Note
OLS 偏误的方向

$$
\begin{aligned}
y_i &= \beta x_i + \underbrace{\lambda w_i}_{\text{omitted factor}} + u_i, \\
x_i &= \underbrace{\pi w_i}_{\text{endogenous channel}} + v_i.
\end{aligned}
$$

$$
\begin{aligned}
\hat\beta^{OLS}-\beta
&= \frac{\mathrm{Cov}(x_i,\lambda w_i+u_i)}{\mathrm{Var}(x_i)} \\
&\approx \frac{\lambda\pi\,\mathrm{Var}(w_i)}{\mathrm{Var}(x_i)}.
\end{aligned}
$$

$$
\begin{aligned}
\lambda\pi>0 &\Longrightarrow \hat\beta^{OLS}>\beta \qquad \text{Affirmative endogeneity} \\
\lambda\pi<0 &\Longrightarrow \hat\beta^{OLS}<\beta \qquad \text{Corrective endogeneity} \\
\operatorname{sign}(\lambda\pi)\ \text{not pinned down} &\Longrightarrow \text{Unclear}
\end{aligned}
$$
`Unclear` 通常表示：多个 omitted factors 方向相反，或经济机制无法把 $\mathrm{Cov}(x_i,u_i)$ 的符号定出来。

:::

(card-endogeneity-direction)=
(^card-endogeneity-direction)=
^card-endogeneity-direction

相关章节：[Corporate Finance IV chapter](../02_Econometric_Methods_in_Corporate_Finance.md)
