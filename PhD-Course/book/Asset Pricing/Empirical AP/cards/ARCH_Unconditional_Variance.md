---
orphan: true
---

# ARCH Unconditional Variance

**核心结论**：ARCH(1) 模型下，无条件方差为 $E[u_t^2]=\alpha_0/(1-\alpha_1)$；即使条件于 $v_t\sim N(0,1)$，$u_t$ 也呈现厚尾特征。

---

## ARCH(1) 模型

$$
u_t=v_t\sigma_t,\qquad \sigma_t^2=\alpha_0+\alpha_1u_{t-1}^2,
$$

其中 $v_t\sim \text{i.i.d.}(0,1)$ 是标准化创新。

当前条件方差 $\sigma_t^2$ 依赖上期冲击 $u_{t-1}^2$。

---

## 无条件方差推导

$$
\begin{aligned}
E[\sigma_t^2]
&=\alpha_0+\alpha_1E[u_{t-1}^2] \\
&=\alpha_0+\alpha_1E[v_{t-1}^2\sigma_{t-1}^2] \\
&=\alpha_0+\alpha_1E[v_{t-1}^2]E[\sigma_{t-1}^2] \\
&=\alpha_0+\alpha_1E[\sigma_{t-1}^2].
\end{aligned}
$$

利用平稳性 $E[\sigma_t^2]=E[\sigma_{t-1}^2]$：

$$
E[\sigma_t^2]=\alpha_0+\alpha_1E[\sigma_t^2]
\quad\Longrightarrow\quad
E[\sigma_t^2]=\frac{\alpha_0}{1-\alpha_1}.
$$

又因 $E[u_t^2]=E[E[u_t^2|\mathcal{F}_{t-1}]]=E[\sigma_t^2]$，所以：

$$
E[u_t^2]=\frac{\alpha_0}{1-\alpha_1}.
$$

平稳性要求 $\alpha_1<1$。

---

## 厚尾性质

即使 $v_t\sim N(0,1)$（条件正态），$u_t$ 的无条件分布也表现出厚尾。

**峰度**（kurtosis）：

$$
K=\frac{E[u_t^4]}{(E[u_t^2])^2}=3\frac{1-\alpha_1^2}{1-3\alpha_1^2}>3.
$$

正态分布的峰度为 3，ARCH(1) 的峰度 $>3$（要求 $\alpha_1^2<1/3$ 保证四阶矩存在）。

**直觉**：
- 条件方差本身是随机的（依赖 $u_{t-1}^2$）
- 即使条件于 $\sigma_t$ 时 $u_t$ 正态，无条件分布是"正态的混合"
- 混合分布导致尾部更厚

---

**来源**：EF8083 slides, pp. 11-14
**导航**：[[../../index|Asset Pricing index]] · [[../00-MOC_EF8083_Empirical_Asset_Pricing|Empirical AP MOC]] · [[../01_Volatility_ARCH_GARCH|01_Volatility_ARCH_GARCH]]
