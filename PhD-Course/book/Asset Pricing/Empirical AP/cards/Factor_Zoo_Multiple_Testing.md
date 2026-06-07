---
orphan: true
---

# Factor Zoo and Multiple Testing

**核心问题**：当测试大量因子（$M$ 个）时，即使在零假设下，也有很高概率出现至少一个"显著"的假发现。

$$
P(\text{至少一个假发现}) = 1-(1-\alpha)^M.
$$

例如 $M=100$，$\alpha=0.05$，则 $P \approx 99.4\%$。factor zoo 中的许多"发现"可能只是 data mining 的结果。

---

## Multiple testing 问题

假设 $M$ 个独立的零假设，每个在显著性水平 $\alpha$ 下检验。

**单个检验的 Type I error 概率**：$\alpha$（例如 5%）。

**至少一个假发现的概率**（familywise error rate）：

$$
P(\text{至少一个假发现}) = 1-(1-\alpha)^M.
$$

当 $M$ 很大时，这个概率接近 1：

| $M$ | $\alpha=0.05$ | 至少一个假发现的概率 |
|-----|---------------|---------------------|
| 10  | 0.05          | 40.1%               |
| 50  | 0.05          | 92.3%               |
| 100 | 0.05          | 99.4%               |

---

## Factor zoo 的背景

学术界和业界已发现数百个"anomaly"因子（momentum、value、profitability、investment、...）。

问题：
1. 许多因子彼此高度相关，并非独立
2. 研究者可能反复尝试不同变量直到找到"显著"的结果
3. 发表偏向（publication bias）：显著结果更容易发表

结果：factor zoo 中可能充斥假发现。

---

## 应对策略

**提高检验标准**：
- 使用更高的 t-stat 阈值（例如 $|t|>3$ 而非 1.96）
- 用 Bonferroni correction 或 FDR (false discovery rate) 控制

**Out-of-sample 检验**：
- 在新的时间段或市场检验已发现的因子
- 真实的因子应该在样本外依然有效

**控制已知因子**：
- 新因子应该在控制 Fama-French 等已知因子后依然显著
- 避免"换个名字"的重复发现

**经济机制检验**：
- 检查因子是否有合理的风险或行为解释
- 考虑交易成本：许多异象在扣除成本后消失

**稳健性检验**：
- 跨子样本、跨市场、不同构造方式下的表现
- 避免过度依赖单一样本期的结果

---

**来源**：EF8083 slides, pp. 195-241
**导航**：[[../../index|Asset Pricing index]] · [[../00-MOC_EF8083_Empirical_Asset_Pricing|Empirical AP MOC]] · [[../05_Cross_Section_Factor_Models|Cross-section factor models]]
