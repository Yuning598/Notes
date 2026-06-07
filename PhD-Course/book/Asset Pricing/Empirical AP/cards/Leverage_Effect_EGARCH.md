---
orphan: true
---

# Leverage Effect and EGARCH

**核心现象**：leverage effect 指负收益比同等幅度的正收益更能预测未来波动率上升。EGARCH 模型通过对数规格和非对称项 $\gamma u_{t-1}/\sigma_{t-1}$ 捕捉这一效应。

---

## Leverage effect

**实证观察**：
- 股票价格下跌时，未来波动率往往显著上升
- 价格上涨时，波动率上升幅度较小
- 收益与波动率变化呈负相关

**可能解释**：
1. **财务杠杆**：价格下跌 → 股权价值下降 → 债务/权益比上升 → 权益波动率上升
2. **波动率反馈**：预期波动率上升 → 要求更高折现率 → 价格下跌
3. **风险厌恶时变**：坏消息 → 风险厌恶上升 → 价格下跌且波动率上升

---

## EGARCH 模型

标准 GARCH(1,1) 对正负冲击对称：$\sigma_t^2$ 只依赖 $u_{t-1}^2$。

**EGARCH (Exponential GARCH)**：

$$
\log\sigma_t^2 =
\omega+\beta\log\sigma_{t-1}^2
+\alpha\left|\frac{u_{t-1}}{\sigma_{t-1}}\right|
+\gamma\frac{u_{t-1}}{\sigma_{t-1}}.
$$

---

## 参数解释

**$\alpha$ 项**：
- $\alpha\left|\frac{u_{t-1}}{\sigma_{t-1}}\right|$：冲击的幅度效应（magnitude effect）
- 冲击越大（无论正负），波动率越高

**$\gamma$ 项**：
- $\gamma\frac{u_{t-1}}{\sigma_{t-1}}$：非对称效应（asymmetry effect）
- 若 $\gamma<0$，负冲击（$u_{t-1}<0$）导致 $\log\sigma_t^2$ 下降更少或上升更多
- 即负收益比正收益更能提升波动率

**总效应**：
- 正冲击（$u_{t-1}>0$）：$\log\sigma_t^2$ 上升 $(\alpha+\gamma)u_{t-1}/\sigma_{t-1}$
- 负冲击（$u_{t-1}<0$）：$\log\sigma_t^2$ 上升 $(\alpha-\gamma)|u_{t-1}|/\sigma_{t-1}$

当 $\gamma<0$ 时，$\alpha-\gamma>\alpha+\gamma$，负冲击影响更大。

---

## 对数规格的优势

相比标准 GARCH：
1. **自动保证 $\sigma_t^2>0$**：无需参数约束
2. **指数形式捕捉乘性动态**：冲击对波动率的影响是比例而非绝对的
3. **便于引入非对称项**：$\gamma$ 项直接区分正负冲击

---

**来源**：EF8083 slides, pp. 23-36
**导航**：[[../../index|Asset Pricing index]] · [[../00-MOC_EF8083_Empirical_Asset_Pricing|Empirical AP MOC]] · [[../01_Volatility_ARCH_GARCH|01_Volatility_ARCH_GARCH]]
