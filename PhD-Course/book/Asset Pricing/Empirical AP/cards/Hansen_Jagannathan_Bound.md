---
orphan: true
---

# Hansen-Jagannathan Bound

**核心结论**：任何能定价资产的 SDF 的波动率（coefficient of variation）必须足够高，至少要匹配市场上最高的 Sharpe ratio。

$$
\frac{\sigma(M)}{E[M]} \ge \frac{|E[R^e]|}{\sigma(R^e)}.
$$

高 Sharpe ratio 资产要求 SDF 必须足够 volatile。

---

## 推导

对 excess return $R^e$，pricing equation 为 $E[MR^e] = 0$。

$$
\begin{aligned}
0 = E[MR^e]
&= E[M]E[R^e] + \operatorname{Cov}(M, R^e) \\
\Longrightarrow \quad E[M]E[R^e] &= -\operatorname{Cov}(M, R^e).
\end{aligned}
$$

取绝对值并用 Cauchy-Schwarz 不等式：

$$
\begin{aligned}
|E[M]E[R^e]| &= |\operatorname{Cov}(M, R^e)| \\
&\le \sigma(M)\sigma(R^e).
\end{aligned}
$$

两边除以 $E[M]\sigma(R^e)$：

$$
\frac{|E[R^e]|}{\sigma(R^e)}
\le \frac{\sigma(M)}{E[M]}.
$$

左边是资产的 Sharpe ratio，右边是 SDF 的 coefficient of variation。

---

## 与 HJ distance 的区别

$$
\begin{aligned}
\text{HJ bound} &:\quad \text{任意 admissible SDF 的最小波动率要求},\\
\text{HJ distance} &:\quad \text{某个候选 SDF 到 admissible SDF 集合的距离}.
\end{aligned}
$$

见 [[Hansen_Jagannathan_Distance]]。

---

**来源**：EF8083 slides, pp. 94-103
**导航**：[[../../index|Asset Pricing index]] · [[../00-MOC_EF8083_Empirical_Asset_Pricing|Empirical AP MOC]] · [[../03_Consumption_Based_AP_Puzzles|03_Consumption_Based_AP_Puzzles]]
