---
orphan: true
---

# Limits to Arbitrage

**核心观点**：即使存在 mispricing，套利也可能因为风险、成本和约束而无法消除错误定价，导致市场长期偏离基本面。

套利需要资本和承担风险。当预期损失 $L$ 超过可用资本 $K$ 时，即使期望收益为正，套利者也无法参与：

$$
E[R]=pm-(1-p)L>0,\quad \text{但若 } L>K, \text{ 则无法套利}。
$$

---

## 理论框架

**理想套利**（教科书）：
- 发现 mispricing
- 构造无风险套利组合
- 立即获利，mispricing 消失

**现实套利**：
- 套利组合有风险（mispricing 可能短期恶化）
- 需要资本和融资能力
- 面临 margin calls、redemption pressure
- 存在交易成本和市场摩擦

---

## 套利风险示例

假设发现一个低估资产，预期 $\tau$ 期后价格回归。

**期望收益**：

$$
E[R]=pm-(1-p)L,
$$

其中 $p$ 是成功概率，$m$ 是回归时的收益，$L$ 是失败时的损失。

**约束条件**：

$$
L \le K,
$$

其中 $K$ 是可用资本或 margin capacity。

即使 $E[R]>0$，如果 $L>K$，套利者也无法参与（资本不足以承受最坏情况）。

---

## Limits to arbitrage 的来源

**Fundamental risk**：
- 套利标的本身有基本面风险
- 即使构造 long-short 组合，hedging 也不完美

**Noise trader risk**：
- Mispricing 可能短期恶化（noise traders 继续推动价格偏离）
- 套利者被迫在错误定价更严重时平仓

**Synchronization risk**：
- 不确定何时 mispricing 会消失
- 持有期间资金成本和机会成本

**Implementation costs**：
- 交易成本（bid-ask spread、market impact）
- Short-selling 成本（borrow fee、margin requirement）
- Holding costs（funding cost）

**Agency problems**：
- 专业套利者（基金经理）面临 redemption pressure
- 短期业绩压力导致无法持有到 mispricing 消失

---

## 实证代理变量

常用的 limits to arbitrage 度量：

1. **Short-selling constraints**：
   - Short interest（做空比例）
   - Borrow fee（借券费率）
   - 高 borrow fee → 做空成本高 → arbitrage 受限

2. **Idiosyncratic volatility**：
   - 高特质波动率 → 套利风险大 → arbitrage 不吸引

3. **Institutional ownership**：
   - 低机构持股 → 缺乏理性资本 → mispricing 持续

4. **Fund flow pressure**：
   - 基金赎回压力 → 被迫平仓 → 无法持有套利头寸

5. **Leverage and funding liquidity**：
   - 金融危机时 funding liquidity 紧张 → arbitrage capital 撤出

---

## 经济后果

Limits to arbitrage 导致：
- Anomalies 长期存在（momentum、value、size、...）
- 价格可能长期偏离基本面
- 行为偏误的影响被放大（如果套利受限，非理性交易者影响更大）

---

**来源**：EF8083 slides, pp. 363-390
**导航**：[[../../index|Asset Pricing index]] · [[../00-MOC_EF8083_Empirical_Asset_Pricing|Empirical AP MOC]] · [[../08_Limits_to_Arbitrage_Prospect_Theory|08_Limits_to_Arbitrage_Prospect_Theory]]
