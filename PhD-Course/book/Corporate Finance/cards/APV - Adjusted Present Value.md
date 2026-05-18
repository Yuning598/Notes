---
orphan: true
---

# APV - Adjusted Present Value

APV（Adjusted Present Value，调整后现值）是把 **operating value** 和 **financing effects** 分开估值的方法。  
核心想法是：

$$
\begin{aligned}
APV
= V_U + PV(\text{financing side effects})
\end{aligned}
$$

最常见的 financing side effect 是 **interest tax shield**：

$$
\begin{aligned}
APV
= V_U + PV(TS)
\end{aligned}
$$

如果还要考虑 distress cost、issuance cost、subsidies 等，也可以继续往后加：

$$
\begin{aligned}
APV
= V_U + PV(TS) - PV(\text{distress cost}) - PV(\text{other financing costs})
\end{aligned}
$$

直觉上：

- **先估 unlevered firm value**：只看 operating assets 的价值
- **再加融资带来的增量或损失**：比如 tax shield
- 所以 APV 常比直接用 WACC 更适合处理 **逐步加债、项目融资、杠杆收购** 这类问题

在最简单的 perpetual debt / constant debt setting 里：

$$
\begin{aligned}
APV = V_U + T_C D
\end{aligned}
$$

(card-apv-adjusted-present-value)=
(^card-apv-adjusted-present-value)=
^card-apv-adjusted-present-value

Related section: <a href="../01_Empirical_Corporate_Finance.html#sec-tax-shield-capital-structure">Taxes and Levered Value</a>
