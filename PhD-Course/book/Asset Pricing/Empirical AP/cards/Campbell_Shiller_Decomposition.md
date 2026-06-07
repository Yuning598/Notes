---
orphan: true
---

# Campbell-Shiller Decomposition

**核心结论**：price-dividend ratio 可以分解为未来 cash-flow news 与 discount-rate news 的现值：

$$
pd_t =
\frac{\kappa}{1-\rho}
+\sum_{j=1}^{\infty}\rho^{j-1}E_t[\Delta d_{t+j}]
-\sum_{j=1}^{\infty}\rho^{j-1}E_t[r_{t+j}].
$$

valuation 的波动来自对未来 dividend growth 的预期变化，或对 required return 的预期变化。

---

## 推导

定义 log price-dividend ratio：

$$
pd_t=p_t-d_t.
$$

线性化 return：

$$
r_{t+1}\approx \kappa+\rho pd_{t+1}+\Delta d_{t+1}-pd_t.
$$

改写：

$$
pd_t \approx \kappa+\rho pd_{t+1}+\Delta d_{t+1}-r_{t+1}.
$$

对 $t$ 条件取期望：

$$
pd_t = \kappa+\rho E_t[pd_{t+1}] +E_t[\Delta d_{t+1}] -E_t[r_{t+1}].
$$

继续向前迭代：

$$
\begin{aligned}
pd_t
&=\kappa+E_t[\Delta d_{t+1}]-E_t[r_{t+1}] \\
&\quad+\rho E_t\left[ \kappa+\rho pd_{t+2}+\Delta d_{t+2}-r_{t+2} \right] \\
&=\kappa(1+\rho) +E_t[\Delta d_{t+1}]+\rho E_t[\Delta d_{t+2}] \\
&\quad -E_t[r_{t+1}]-\rho E_t[r_{t+2}] +\rho^2E_t[pd_{t+2}].
\end{aligned}
$$

令 horizon $J\to\infty$，并施加 no-bubble/transversality 条件：

$$
\lim_{J\to\infty}\rho^J E_t[pd_{t+J}]=0.
$$

得到：

$$
pd_t = \frac{\kappa}{1-\rho} +\sum_{j=1}^{\infty}\rho^{j-1}E_t[\Delta d_{t+j}] -\sum_{j=1}^{\infty}\rho^{j-1}E_t[r_{t+j}].
$$

---

## 经济含义

$$
pd_t =
\underbrace{\sum_{j=1}^{\infty}\rho^{j-1}E_t[\Delta d_{t+j}]}_{\text{cash-flow news}} -
\underbrace{\sum_{j=1}^{\infty}\rho^{j-1}E_t[r_{t+j}]}_{\text{discount-rate news}}.
$$

- 高 $pd_t$ 可能因为预期未来 dividend growth 高
- 或因为预期未来 required return 低（折现率下降）

---

**来源**：EF8083 slides, pp. 104-122
**导航**：[[../../index|Asset Pricing index]] · [[../00-MOC_EF8083_Empirical_Asset_Pricing|Empirical AP MOC]] · [[../03_Consumption_Based_AP_Puzzles|03_Consumption_Based_AP_Puzzles]]
