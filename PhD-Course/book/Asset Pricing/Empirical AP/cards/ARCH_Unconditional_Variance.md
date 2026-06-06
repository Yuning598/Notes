---
orphan: true
---

# ARCH Unconditional Variance

Source: EF8083 slides, pp. 11-14  
Backlinks: [01_Volatility_ARCH_GARCH](../01_Volatility_ARCH_GARCH)

ARCH(1):

$$
u_t=v_t\sigma_t,\qquad \sigma_t^2=\alpha_0+\alpha_1u_{t-1}^2.
$$

:::{admonition} Lemma: ARCH(1) unconditional variance
For ARCH(1),

$$
E[u_t^2]=E[\sigma_t^2]=\frac{\alpha_0}{1-\alpha_1}.
$$

Proof:

$$
\begin{aligned}
E[\sigma_t^2]
&=\alpha_0+\alpha_1E[u_{t-1}^2]\\
&=\alpha_0+\alpha_1E[v_{t-1}^2\sigma_{t-1}^2]\\
&=\alpha_0+\alpha_1E[\sigma_{t-1}^2].
\end{aligned}
$$

Stationarity gives $E[\sigma_t^2]=E[\sigma_{t-1}^2]$, so

$$
E[\sigma_t^2]=\frac{\alpha_0}{1-\alpha_1}.
$$

:::

Heavy-tail result under normal $v_t$:

$$
K=3\frac{1-\alpha_1^2}{1-3\alpha_1^2}>3.
$$
