---
orphan: true
---

# VIX Static Replication

**核心原理**：通过 Carr-Madan 公式，log payoff 可以用 OTM puts 和 calls 的连续谱静态复制，权重为 $1/K^2$。这是 model-free implied variance 和 VIX 构造的数学基础。

$$
-2\log(S_T/S_0) = \frac{2}{S_0^2}\int_0^{S_0} (K-S_T)^+dK + \frac{2}{S_0^2}\int_{S_0}^{\infty} (S_T-K)^+dK.
$$

---

## Carr-Madan 公式

对任意二次可微的 payoff function $g(S_T)$，选择 pivot point $x$：

$$
\begin{aligned}
g(S_T)=
&g(x)+g'(x)(S_T-x) \\
&+\int_0^x g''(K)(K-S_T)^+dK \\
&+\int_x^\infty g''(K)(S_T-K)^+dK.
\end{aligned}
$$

$(K-S_T)^+$ 是 strike $K$ 的 put payoff，$(S_T-K)^+$ 是 call payoff。

任何 payoff 可以分解为：线性项 + put 和 call 的加权组合，权重由 $g''(K)$ 决定。

---

## Log contract 复制

取 $g(S)=\log S$，则：

$$
g''(S) = -\frac{1}{S^2}.
$$

或者取 $g(S)=-2\log S$（为了方便），则：

$$
g''(K)=\frac{2}{K^2}.
$$

代入 Carr-Madan 公式，选择 $x=S_0$（当前价格）：

$$
\begin{aligned}
-2\log\frac{S_T}{S_0}
&= -2\log S_T + 2\log S_0 \\
&= \int_0^{S_0} \frac{2}{K^2}(K-S_T)^+dK + \int_{S_0}^{\infty} \frac{2}{K^2}(S_T-K)^+dK.
\end{aligned}
$$

即：log payoff 可以用所有 OTM puts (strike $K<S_0$) 和 OTM calls (strike $K>S_0$) 复制，权重为 $2/K^2$。

---

## VIX 构造

取无套利定价：

$$
E^Q[-2\log(S_T/S_0)] = \int_0^{S_0} \frac{2}{K^2}P(K)dK + \int_{S_0}^{\infty} \frac{2}{K^2}C(K)dK,
$$

其中 $P(K)$、$C(K)$ 是当前 put 和 call 价格。

根据 log return 的性质，可以近似得到 model-free implied variance：

$$
IV^2 \approx \frac{2}{T}\left[\int_0^{S_0} \frac{P(K)}{K^2}dK + \int_{S_0}^{\infty} \frac{C(K)}{K^2}dK\right].
$$

VIX 就是这个 implied variance 的年化标准差（乘以 $\sqrt{252}$ 等调整）。

---

**来源**：EF8083 slides, pp. 37-54
**导航**：[[../../index|Asset Pricing index]] · [[../00-MOC_EF8083_Empirical_Asset_Pricing|Empirical AP MOC]] · [[../02_Implied_Volatility_VIX_VRP|02_Implied_Volatility_VIX_VRP]]
