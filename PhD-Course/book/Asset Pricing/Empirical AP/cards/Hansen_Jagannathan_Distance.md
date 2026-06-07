---
orphan: true
---

# Hansen-Jagannathan Distance

**核心结论**：HJ distance 衡量候选 SDF 与能够定价 test assets 的 SDF 集合之间的距离（model misspecification 的度量）：

$$
d_{HJ}(\theta)^2=g(\theta)'G^{-1}g(\theta),
$$

其中 $g(\theta)=E[m(\theta)R^e]$，$G=E[R^eR^{e'}]$。

---

## 定义

设 $m(\theta)$ 是候选 SDF，$R^e$ 是 test-asset excess returns 向量。

定义：

$$
\left\{
\begin{aligned}
g(\theta)&=E[m(\theta)R^e], \\
G&=E[R^eR^{e'}].
\end{aligned}
\right.
$$

HJ distance 为：

$$
\boxed{
d_{HJ}(\theta)^2=g(\theta)'G^{-1}g(\theta)
}
$$

等价形式：

$$
d_{HJ}(\theta) =
\min_{m^*:E[m^*R^e]=0}
\sqrt{E[(m(\theta)-m^*)^2]}.
$$

$d_{HJ}(\theta)$ 是候选 SDF $m(\theta)$ 到最近的 admissible SDF $m^*$ 的 L2 距离。

---

## GMM 对应

在 GMM 框架中，HJ distance 对应 weighting matrix：

$$
W_{HJ} =
\left(\frac1T\sum_{t=1}^T R_t^eR_t^{e'}\right)^{-1}.
$$

使用这个 weighting matrix 的 GMM 目标函数就是 HJ distance 的样本版本。

---

## 与 HJ bound 的区别

$$
\begin{aligned}
\text{HJ bound:}\quad
&\frac{\sigma(M)}{E[M]}\ge \max_R\frac{\lvert E[R^e]\rvert}{\sigma(R^e)}
&&\text{任意 admissible SDF 的最小波动率要求}, \\
\text{HJ distance:}\quad
&d_{HJ}^2=g'G^{-1}g
&&\text{某个候选 SDF 到 admissible SDF 集合的距离}.
\end{aligned}
$$

- **HJ bound** 是对所有 admissible SDF 的波动率下界（是否足够 volatile）
- **HJ distance** 是特定模型的 misspecification 度量（离正确的 SDF 有多远）

见 [[Hansen_Jagannathan_Bound]]。

---

**来源**：EF8083 slides, pp. 213-224; Hansen and Jagannathan (1997)
**导航**：[[../../index|Asset Pricing index]] · [[../00-MOC_EF8083_Empirical_Asset_Pricing|Empirical AP MOC]] · [[../05_Cross_Section_Factor_Models|Cross-section factor models]]
