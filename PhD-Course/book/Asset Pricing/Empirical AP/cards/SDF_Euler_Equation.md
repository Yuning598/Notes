---
orphan: true
---

# SDF Euler Equation

**核心结论**：代表性投资者最优化问题导出 SDF $M_{t+1} = \beta u'(C_{t+1})/u'(C_t)$，所有资产满足 pricing equation $E_t[M_{t+1}R_{t+1}] = 1$。

---

## SDF 定义

代表性投资者最大化：

$$
\max E_t\sum_{j=0}^{\infty}\beta^j u(C_{t+j}).
$$

stochastic discount factor 为：

$$
M_{t+1}=\beta\frac{u'(C_{t+1})}{u'(C_t)}.
$$

---

## Pricing equation 的三种形式

**Payoff 形式**：

$$
P_t=E_t[M_{t+1}X_{t+1}].
$$

**Return 形式**：

$$
E_t[M_{t+1}R_{t+1}]=1.
$$

**Excess return 形式**：

$$
E_t[M_{t+1}R_{t+1}^e]=0.
$$

---

## 推导：从最优化到 pricing equation

设投资者在 $t$ 时刻多买 $\varepsilon$ 单位资产，当前成本 $P_t\varepsilon$，下期 payoff $X_{t+1}\varepsilon$。消费变化：

$$
\Delta C_t=-P_t\varepsilon,\qquad \Delta C_{t+1}=X_{t+1}\varepsilon.
$$

一阶条件：

$$
\begin{aligned}
\frac{d}{d\varepsilon} E_t\left[u(C_t-P_t\varepsilon)+\beta u(C_{t+1}+X_{t+1}\varepsilon)\right]\bigg|_{\varepsilon=0} &= 0 \\
-u'(C_t)P_t+\beta E_t[u'(C_{t+1})X_{t+1}] &= 0 \\
P_t &= E_t\left[\beta\frac{u'(C_{t+1})}{u'(C_t)}X_{t+1}\right] \\
&= E_t[M_{t+1}X_{t+1}].
\end{aligned}
$$

---

**来源**：EF8083 slides, pp. 73-93
**导航**：[[../../index|Asset Pricing index]] · [[../00-MOC_EF8083_Empirical_Asset_Pricing|Empirical AP MOC]] · [[../03_Consumption_Based_AP_Puzzles|03_Consumption_Based_AP_Puzzles]]
