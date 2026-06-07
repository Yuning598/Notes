---
orphan: true
---

# GARCH Infinite ARCH and Half-Life

**核心结论**：GARCH(1,1) 可以表示为无穷阶 ARCH，权重呈几何衰减；波动率冲击的半衰期为 $h_{1/2}=\log(1/2)/\log(\alpha_1+\beta_1)$。

---

## GARCH(1,1) 模型

$$
\sigma_t^2=\alpha_0+\alpha_1u_{t-1}^2+\beta_1\sigma_{t-1}^2.
$$

当前条件方差由：常数项 + 上期冲击 $u_{t-1}^2$ + 上期条件方差 $\sigma_{t-1}^2$ 决定。

---

## Infinite ARCH 表示

递归代入 $\sigma_{t-1}^2$：

$$
\begin{aligned}
\sigma_t^2
&= \alpha_0+\alpha_1u_{t-1}^2+\beta_1\sigma_{t-1}^2 \\
&= \alpha_0+\alpha_1u_{t-1}^2+\beta_1(\alpha_0+\alpha_1u_{t-2}^2+\beta_1\sigma_{t-2}^2) \\
&= \alpha_0(1+\beta_1)+\alpha_1u_{t-1}^2+\alpha_1\beta_1u_{t-2}^2+\beta_1^2\sigma_{t-2}^2.
\end{aligned}
$$

继续迭代并施加平稳性条件（$\lim_{j\to\infty}\beta_1^j\sigma_{t-j}^2=0$）：

$$
\sigma_t^2 =
\frac{\alpha_0}{1-\beta_1}
+\alpha_1\sum_{j=1}^{\infty}\beta_1^{j-1}u_{t-j}^2.
$$

所有过去冲击以几何衰减权重影响当前波动率。

---

## 无条件方差

对 GARCH(1,1) 取无条件期望，利用平稳性 $E[\sigma_t^2]=E[\sigma_{t-1}^2]$：

$$
\begin{aligned}
E[\sigma_t^2]
&= \alpha_0+\alpha_1E[u_{t-1}^2]+\beta_1E[\sigma_{t-1}^2] \\
&= \alpha_0+(\alpha_1+\beta_1)E[\sigma_t^2].
\end{aligned}
$$

解得：

$$
\bar\sigma^2=\frac{\alpha_0}{1-\alpha_1-\beta_1}.
$$

平稳性要求 $\alpha_1+\beta_1<1$。

---

## 波动率预测与半衰期

**$h$ 期预测**：

$$
E_t[\sigma_{t+h}^2] =
\bar\sigma^2+(\alpha_1+\beta_1)^{h-1}(E_t[\sigma_{t+1}^2]-\bar\sigma^2).
$$

条件方差以几何速度 $\alpha_1+\beta_1$ 向无条件均值回归。

**半衰期**（冲击衰减一半所需期数）：

$$
(\alpha_1+\beta_1)^{h_{1/2}}=\frac{1}{2}
\quad\Longrightarrow\quad
h_{1/2} =
\frac{\log(1/2)}{\log(\alpha_1+\beta_1)}.
$$

例如 $\alpha_1+\beta_1=0.95$，则 $h_{1/2}\approx 13.5$ 天。

---

**来源**：EF8083 slides, pp. 15-22
**导航**：[[../../index|Asset Pricing index]] · [[../00-MOC_EF8083_Empirical_Asset_Pricing|Empirical AP MOC]] · [[../01_Volatility_ARCH_GARCH|01_Volatility_ARCH_GARCH]]
