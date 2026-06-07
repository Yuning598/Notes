---
orphan: true
---

# Variance Risk Premium

**核心定义**：variance risk premium (VRP) 是风险中性测度下的期望 realized variance 与物理测度下的期望 realized variance 之差：

$$
VRP_t=E_t^Q[RV_{t,t+\tau}]-E_t^P[RV_{t,t+\tau}] =
IV_t-E_t^P[RV_{t,t+\tau}].
$$

$VRP_t>0$ 意味着投资者愿意为对冲高波动率支付溢价，卖方variance insurance 获得补偿。

---

## 定义与分解

**Implied variance (IV)**：从期权价格提取的风险中性期望 realized variance：

$$
IV_t = E_t^Q[RV_{t,t+\tau}].
$$

**Variance risk premium**：

$$
VRP_t=IV_t-E_t^P[RV_{t,t+\tau}].
$$

分解：

$$
IV_t=E_t^P[RV_{t,t+\tau}]+VRP_t.
$$

implied variance 包含两部分：
- 物理测度下的期望波动率
- 对波动率风险的补偿（VRP）

---

## 经济含义

**$VRP_t>0$（常见情形）**：
- 投资者厌恶波动率上升（risk aversion to volatility risk）
- 愿意为 variance insurance 支付溢价
- 卖出 variance swap/VIX futures 的策略平均获得正收益

**$VRP_t$ 的时变性**：
- 金融危机时 $VRP_t$ 上升（投资者更愿意为保险支付）
- 可用于预测未来市场 return 和波动率

---

## 实证测量

常见方法：
1. **Model-free IV**：用 VIX²（或类似指标）作为 $IV_t$
2. **Physical expectation**：用历史 RV 或时间序列模型预测 $E_t^P[RV]$
3. **VRP 估计**：$\widehat{VRP}_t = VIX_t^2 - \hat E_t^P[RV_{t,t+\tau}]$

---

**来源**：EF8083 slides, pp. 55-72
**导航**：[[../../index|Asset Pricing index]] · [[../00-MOC_EF8083_Empirical_AP_Pricing|Empirical AP MOC]] · [[../02_Implied_Volatility_VIX_VRP|02_Implied_Volatility_VIX_VRP]]
