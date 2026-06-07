# Corporate Finance Problem Set

## 1. Payout Policy: Dividends vs Repurchases

#payout_policy #dividends #share_repurchases #MM_irrelevance

**Question** 考虑公司的 payout 决策。

**Background**: MM dividend irrelevance 在 frictionless world 成立，但现实中 payout policy matters。

**1.1** 列举并解释 payout policy 相关的**四个主要 friction channels**：
- Transaction costs
- Differential taxation
- Signaling
- Agency costs of free cash flow

::::{solution}


**1.1 Four Friction Channels**

**(a) Transaction costs**
- 个人投资者自己创造 homemade dividends 有成本（交易费用、bid-ask spread）
- 公司发放 dividend 为小股东提供低成本流动性
- 但不是主要驱动力

**(b) Differential taxation**
- Dividends 通常作为 ordinary income 征税（税率较高）
- Capital gains 延迟实现，且税率可能较低
- 税收差异导致 clientele effects：高税率投资者偏好低 dividend firms

**(c) Signaling**
- Payout 传递管理层关于未来盈利的私有信息
- Dividend increase → 乐观信号 → 股价上涨
- Dividend cut → 悲观信号 → 股价下跌
- Smooth dividends 避免负面信号

**(d) Agency costs of free cash flow**
- Free cash flow problem (Jensen 1986)：管理层可能过度投资或浪费
- Payout 减少可自由支配现金，discipline managers
- Debt 的固定利息支付也有类似效果

::::

**1.2** 比较 **dividends** 和 **share repurchases** 的特点：

| 维度 | Dividends | Repurchases |
|------|-----------|-------------|
| 灵活性 | ? | ? |
| Tax treatment | ? | ? |
| 信号强度 | ? | ? |
| 承诺性 | ? | ? |

::::{solution}

**1.2 Dividends vs Repurchases 比较**

| 维度 | Dividends | Repurchases |
|------|-----------|-------------|
| **灵活性** | 低（承诺性强） | 高（可随时调整） |
| **Tax treatment** | Ordinary income（高税） | Capital gains（低税，延迟） |
| **信号强度** | 强（持续承诺） | 弱（一次性） |
| **承诺性** | 高（难以削减） | 低（无长期承诺） |
| **选择性** | 所有股东均等 | 选择性（卖出者获益） |

**Additional points**:
- Dividends sticky（粘性强）：公司不愿削减，smooth over time
- Repurchases flexible：可根据市场时机调整
- Tax advantage of repurchases 在 2003 年后部分缩小（Bush tax cuts）

::::

**1.3** 解释为什么近年来 repurchases 越来越流行（相对 dividends）。

::::{solution}

**1.3 Repurchases 流行的原因**

**(a) Tax advantages**
- Repurchases 转化为 capital gains，税率低于 dividends
- 投资者可选择何时卖出（税收 timing option）

**(b) Flexibility**
- 公司可根据 cash flow、投资机会、市场条件调整
- 不形成长期承诺，避免 dividend cut 的负面信号

**(c) Market timing**
- 公司可在股价低估时回购（value creation）
- Signal undervaluation to market

**(d) EPS management**
- Repurchases 减少 shares outstanding → EPS 上升
- 满足 EPS targets 和 analyst expectations

**(e) Options compensation**
- Repurchases offset dilution from employee stock options
- 避免影响现有股东

**Empirical trend**:
- 1980s-1990s: Repurchases 急剧增加
- 2000s: Repurchases 超过 dividends 成为主要 payout 方式
- Post-2008: Repurchases 继续主导，但 dividends 仍重要（signaling + clientele）

::::

---

## 2. Research Design: Testing Payout Motives

#research_design #payout_motives #market_timing #catering

**Question** 设计一个实证研究来检验：公司的 payout 决策是为了 **market timing**（利用错误定价）还是其他动机。

**Background**:
- **Market timing hypothesis**: 公司在股价高估时发行股票，低估时回购
- **Alternative motives**: signaling, agency reduction, tax efficiency, flexibility

**研究设计要求**：
1. Literature review（3-5 篇核心文献）
2. 研究问题和假设
3. 数据来源和样本构造
4. 实证方法（模型设计）
5. 预期结果

::::{solution}

**Part 1: Literature Review**

**核心文献**：

1. **Baker & Wurgler (2002)** - *Market Timing and Capital Structure*
   - 发现：capital structure 是过去 market timing 行为的累积结果
   - 方法：用 historical market-to-book 预测当前 leverage
   - 启示：timing 动机持续影响公司财务决策

2. **Jagannathan, Stephens & Weisbach (2000)** - *Financial Flexibility and the Choice Between Dividends and Stock Repurchases*
   - 发现：repurchases 用于临时性 cash flow，dividends 用于永久性
   - 机制：flexibility considerations 驱动 payout method 选择
   - 启示：repurchases 的灵活性使其更适合 timing

3. **Peyer & Vermaelen (2009)** - *The Nature and Persistence of Buyback Anomalies*
   - 发现：open market repurchases 后股票长期超额收益
   - 解释：公司确实在低估时回购（market timing 有效）
   - 方法：event study + long-run returns

4. **Grullon & Michaely (2004)** - *The Information Content of Share Repurchase Programs*
   - 发现：repurchases 信号 cash flow 改善，而非单纯 undervaluation
   - 机制：separates temporary vs permanent cash flow changes
   - 方法：announcement returns + subsequent performance

5. **Brav et al. (2005)** - *Payout Policy in the 21st Century*
   - Survey evidence：CFO 关注 EPS dilution、tax、flexibility
   - Market timing 不是首要考虑，但确实存在
   - 方法：大规模 CFO 调查

**Part 2: 研究问题和假设**

**Research Question**:
> 公司的 share repurchase 决策在多大程度上由 market timing 驱动？能否将 timing motive 与其他动机（如 signaling、agency reduction）分离？

**Hypotheses**:

**H1 (Market Timing)**:
- H1a: 公司更可能在股价相对低估时宣布回购计划
- H1b: 回购后长期 abnormal returns 为正（说明 timing 成功）

**H2 (Signaling Alternative)**:
- H2a: 回购公告与 future earnings improvements 正相关
- H2b: 如果纯 timing，earnings 不应改善

**H3 (Agency Reduction Alternative)**:
- H3a: Free cash flow 高的公司更可能回购
- H3b: 回购应减少 overinvestment（降低 capex/sales）

**Part 3: 数据来源和样本构造**

**Data Sources**:

1. **Repurchase announcements**:
   - SDC Platinum Mergers & Acquisitions database
   - Compustat quarterly data (repurchase amount: PRSTKC)
   - 时间跨度：1990-2020

2. **Stock returns**:
   - CRSP daily returns
   - Calculate CARs around announcements
   - Long-run BHARs (buy-and-hold abnormal returns)

3. **Firm characteristics**:
   - Compustat: financials, cash flow, leverage
   - I/B/E/S: analyst earnings forecasts
   - Thomson Reuters: institutional ownership

4. **Valuation measures**:
   - Market-to-book ratio
   - P/E ratio
   - Analyst target prices (as proxy for "fair value")

**Sample Construction**:

1. **Initial sample**: All share repurchase announcements 1990-2020
2. **Filters**:
   - 排除 financial firms (SIC 6000-6999)
   - 排除 utilities (SIC 4900-4999)
   - 要求 CRSP 和 Compustat 数据可得
   - 排除 repurchase amount < $1M
3. **Final sample**: ~5,000 firm-announcement observations

**Part 4: 实证方法**

**Model 1: Repurchase Likelihood（Logit）**

检验什么类型公司更可能回购（timing 特征 vs others）

$$
\begin{aligned}
P(\text{Repurchase}_{i,t} = 1) &= \Lambda(\beta_0 + \beta_1 \text{Undervaluation}_{i,t-1} \\
&\quad + \beta_2 \text{FCF}_{i,t-1} + \beta_3 \text{Leverage}_{i,t-1} \\
&\quad + \beta_4 \text{Size}_{i,t-1} + \gamma X_{i,t-1} + \varepsilon_{i,t})
\end{aligned}
$$

**Key variables**:
- $\text{Undervaluation}$:
  - $\text{M/B}_{\text{low}}$: dummy for bottom tercile M/B
  - $\text{P/E}_{\text{low}}$: dummy for bottom tercile P/E
  - Analyst target price > current price

- $\text{FCF}$: $(OCF - Capex) / Assets$
- $\text{Leverage}$: Debt / Assets
- Controls: ROA, sales growth, stock volatility, institutional ownership

**Prediction (H1)**: $\beta_1 > 0$ if market timing matters

**Model 2: Announcement Returns（Event Study）**

$$
CAR_{i,(-1,+1)} = \alpha + \beta_1 \text{Underval}_{i} + \beta_2 \text{Size}_{i} + \beta_3 \text{Repurchase Size}_{i} + \varepsilon_i
$$

**Prediction**: If timing works, $\text{CAR} > 0$ and larger for undervalued firms

**Model 3: Long-Run Performance**

$$
BHAR_{i,(0,+36)} = \alpha + \beta_1 \text{Underval}_{i} + \beta_2 \text{FCF}_{i} + \gamma X_i + \varepsilon_i
$$

**Prediction (H1b)**: $\text{BHAR} > 0$ and $\beta_1 > 0$ if timing successful

**Model 4: Separating Timing from Signaling**

检验回购后 operating performance 变化：

$$
\Delta ROA_{i,(0,+2)} = \alpha + \beta_1 \text{Repurchase}_{i} + \beta_2 \text{Underval}_{i} + \beta_3 \text{Repurchase} \times \text{Underval} + \gamma X_i + \varepsilon_i
$$

**Prediction (H2)**:
- If pure timing: $\beta_1 \approx 0$ (no operating improvement)
- If signaling: $\beta_1 > 0$ (operating improvement follows)
- Interaction term $\beta_3$ tests whether timing firms differ

**Model 5: Agency Reduction Test**

$$
\Delta \text{Overinvestment}_{i,(0,+2)} = \alpha + \beta_1 \text{Repurchase}_{i} + \beta_2 \text{High FCF}_{i} + \beta_3 \text{Repurchase} \times \text{High FCF} + \varepsilon_i
$$

Where $\text{Overinvestment} = \text{Capex}/\text{Sales} - \text{Industry Median}$

**Prediction (H3)**: $\beta_3 < 0$ if agency reduction motive

**Part 5: 预期结果**

**Main Findings (Expected)**:

1. **Timing evidence**:
   - Repurchases 更可能发生在低 M/B、低 P/E periods（$\beta_1 > 0$ in Model 1）
   - Announcement CAR = 2-3%（显著为正）
   - 3-year BHAR = 5-10%（长期超额收益）

2. **Mixed motives**:
   - Timing 重要，但不是唯一动机
   - FCF、leverage 也显著预测 repurchases
   - Operating performance 部分改善（signaling coexists）

3. **Cross-sectional variation**:
   - Undervalued firms: stronger timing motive, higher long-run returns
   - High FCF firms: stronger agency motive, larger overinvestment reduction
   - Small firms: more sensitive to timing（信息不对称更严重）

**Contributions**:

1. **Methodological**: 同时检验多种动机，分离 timing 效应
2. **Empirical**: 量化 timing 在 payout 决策中的相对重要性
3. **Policy**: 帮助理解公司财务决策的驱动因素

**Robustness Checks**:
- Alternative valuation measures (residual income model, etc.)
- Different event windows
- Subsample analysis (pre/post 2003 tax reform, crisis vs normal)
- Control for concurrent events (earnings announcements, analyst revisions)

::::


---

## 3. Payout Policy Channels: Tax vs Agency

#tax_clientele #agency_costs #free_cash_flow #Jensen

**Question** 比较和对比 payout policy 的 **tax channel** 和 **agency channel**。

**3.1** Tax channel: Dividend clientele theory
- 解释不同税率投资者如何形成 dividend clienteles
- 为什么 2003 Bush tax cuts 降低了 dividends 的税收劣势？
- 实证预测：高税率 vs 低税率投资者的持股偏好

::::{solution}


**3.1 Tax Channel**

**(a) Dividend Clientele Theory**

不同税率投资者偏好不同 payout policy：

**High tax bracket investors** (个人高收入者):
- 偏好 low dividend yield stocks
- 偏好 capital gains（税率低，延迟实现）
- 偏好 growth stocks（reinvest earnings）

**Low tax bracket investors** (退休账户、免税机构):
- 偏好 high dividend yield stocks
- 不在乎 dividend vs capital gains（税收中性）
- 偏好 stable income streams

**Equilibrium**:
- High dividend firms 被低税率投资者持有
- Low dividend firms 被高税率投资者持有
- 每个 clientele 选择 tax-efficient stocks
- Firm 不需要频繁改变 dividend policy（clientele 已形成）

**(b) 2003 Bush Tax Cuts**

**Before 2003**:
- Dividends 作为 ordinary income 征税（最高 38.6%）
- Long-term capital gains 税率 20%
- Tax disadvantage of dividends ≈ 18.6%

**After 2003**:
- Dividends 和 capital gains 统一为 15%（合格 dividends）
- Tax disadvantage 大幅降低
- 但 capital gains 仍有 deferral advantage（延迟实现）

**Impact**:
- Dividend initiations 增加
- Existing dividend payers 提高 payout
- 但 repurchases 仍保持优势（flexibility + deferral）

**(c) 实证预测**

**Prediction 1**: Cross-sectional holdings
- $\text{Div yield}_{\text{held by tax-exempt}} > \text{Div yield}_{\text{held by taxable}}$

**Prediction 2**: Tax reform response
- Post-2003: dividend initiations 上升（especially for taxable investors）
- Dividend/repurchase mix shifts toward dividends

**Prediction 3**: Institutional investors
- Tax-exempt institutions (pension funds) overweight high-dividend stocks
- Taxable institutions (hedge funds) underweight high-dividend stocks

::::

**3.2** Agency channel: Free cash flow hypothesis (Jensen 1986)
- 什么是 free cash flow problem？
- Payout 如何 discipline managers？
- Debt 和 dividends 在解决 agency problem 上的异同

::::{solution}

**3.2 Agency Channel**

**(a) Free Cash Flow Problem (Jensen 1986)**

**Definition**:
> Free cash flow = cash flow in excess of that required to fund all positive NPV projects

**Problem**:
- Managers reluctant to pay out excess cash
- Prefer to grow empire, invest in negative NPV projects
- Consume perquisites, build empires
- 减少股东价值

**Classic examples**:
- Overinvestment in mature industries (oil in 1980s)
- Value-destroying acquisitions
- Excessive perks and pet projects

**(b) Payout as Discipline**

**Dividends**:
- ✓ Force distribution of cash (减少可自由支配资金)
- ✓ Sticky commitment (difficult to cut) → ongoing discipline
- ✓ 需要定期从市场融资 → 外部监督
- ✗ 税收不利（相对 repurchases）

**Debt**:
- ✓ Fixed interest payments force payout
- ✓ Bankruptcy threat disciplines managers
- ✓ Monitoring by creditors
- ✗ Financial distress costs

**Repurchases**:
- ✓ Flexible (可根据投资机会调整)
- ✓ Tax efficient
- ✗ Less commitment → weaker discipline
- ✗ 可以随时停止

**Comparison**:

| Mechanism | Dividends | Debt | Repurchases |
|-----------|-----------|------|-------------|
| Commitment strength | High | High | Low |
| Flexibility | Low | Low | High |
| Tax efficiency | Low | N/A | High |
| External monitoring | Medium | High | Low |

**Optimal choice**: Depends on severity of agency problem
- Severe agency: prefer dividends + debt (strong discipline)
- Moderate agency: prefer flexible repurchases

**(c) Debt vs Dividends**

**Similarities**:
- Both reduce free cash flow
- Both force distribution to outside claimants
- Both increase external financing need (monitoring)

**Differences**:
- Debt: fixed legal obligation, bankruptcy threat
- Dividends: voluntary but sticky (reputational commitment)
- Debt: creditor monitoring + covenants
- Dividends: equity market monitoring only

::::

**3.3** 设计一个简单实证检验：
> 研究问题：当公司增加 payout 时，是税收考虑还是代理问题更重要？

提供：
- 一个可检验的 prediction
- 需要的数据
- 回归模型

::::{solution}

**3.3 Empirical Test Design**

**Research Question**: When firms increase payout, is it driven by tax considerations or agency concerns?

**Testable Predictions**:

**Tax hypothesis**:
- Payout increase when tax disadvantage reduces
- Effect stronger for firms with more taxable shareholders

**Agency hypothesis**:
- Payout increase when free cash flow high + investment opportunities low
- Effect stronger for firms with weak governance

**Data Required**:

1. **Payout changes**:
   - Compustat: DVT (total dividends), PRSTKC (repurchases)
   - Construct $\Delta \text{Payout ratio}_t$

2. **Tax measures**:
   - Thomson 13F: institutional ownership by type (tax-exempt vs taxable)
   - Tax Reform indicator: Post-2003 dummy
   - State tax rates (cross-sectional variation)

3. **Agency measures**:
   - Free cash flow: $(OCF - Capex) / Assets$
   - Investment opportunities: Market-to-book, R&D/Sales
   - Governance: G-index, board independence, CEO ownership

4. **Controls**:
   - Firm size, leverage, profitability, stock return volatility

**Regression Model**:

$$
\begin{aligned}
\Delta \text{Payout}_{i,t} &= \beta_0 + \beta_1 \text{Tax Reform}_t + \beta_2 \text{Tax-Exempt Ownership}_{i,t-1} \\
&\quad + \beta_3 \text{FCF}_{i,t-1} + \beta_4 \text{Low Investment Opp}_{i,t-1} \\
&\quad + \beta_5 \text{FCF} \times \text{Low Investment Opp} \\
&\quad + \beta_6 \text{Weak Governance}_{i,t-1} \\
&\quad + \gamma X_{i,t-1} + \alpha_i + \delta_t + \varepsilon_{i,t}
\end{aligned}
$$

**Hypotheses**:

**Tax channel**:
- $\beta_1 > 0$: payout 上升 after tax reform
- $\beta_2 > 0$: firms with more tax-exempt owners 增加 dividend 更多

**Agency channel**:
- $\beta_3 > 0$: high FCF firms 增加 payout
- $\beta_5 > 0$: FCF 在低投资机会时更重要（interaction）
- $\beta_6 > 0$: weak governance firms 在外部压力下增加 payout

**Expected Results**:

1. **Both channels matter**:
   - Tax reform 有显著正效应（$\beta_1 > 0$）
   - FCF 有显著正效应（$\beta_3 > 0$）
   - Interaction 显著（$\beta_5 > 0$）

2. **Relative importance varies**:
   - Tax effect stronger for dividend initiations
   - Agency effect stronger for repurchases (more flexible response)
   - Cross-sectional: tax matters more for high-ownership firms; agency matters more for high-FCF firms

3. **Governance matters**:
   - Weak governance firms: FCF effect stronger (agency problem more severe)
   - Strong governance firms: tax effect dominates

**Interpretation**: Tax 和 agency 都是重要的 payout determinants，但在不同情境下重要性不同。

::::



---

## 4. 综合题：Payout Policy Research Proposal

#research_proposal #payout_determinants #empirical_design

**Question** 设计一个完整的 research proposal，研究公司 payout policy 的决定因素。

这道题模拟 **James 期末考试的 research design question**。要求：

1. **Literature Review**（简要，3-5 篇）
2. **Research Question** 和 contribution
3. **Hypotheses**（基于不同理论）
4. **Data and Sample**
5. **Empirical Methodology**
6. **Expected Results and Interpretation**

**特别关注**：区分不同的 payout motives（market timing, signaling, agency, tax）。

::::{solution}

**Part 1: Literature Review**

**核心文献 5 篇**：

1. **Lintner (1956)** - *Distribution of Incomes of Corporations Among Dividends, Retained Earnings, and Taxes*
   - Classic: dividends are sticky, firms smooth dividends
   - Target payout ratio + partial adjustment model
   - 奠定 dividend policy 研究基础

2. **Baker & Wurgler (2004)** - *A Catering Theory of Dividends*
   - Theory: firms cater to investor demand for dividend-paying stocks
   - 当 dividend premium 高时，更多公司 initiate dividends
   - Challenge traditional signaling view

3. **Jagannathan, Stephens & Weisbach (2000)** - *Financial Flexibility*
   - Dividends for permanent cash flows, repurchases for temporary
   - Flexibility drives payout method choice
   - 实证：repurchases more volatile than dividends

4. **Fama & French (2001)** - *Disappearing Dividends*
   - Phenomenon: 比例下降的公司 pay dividends（1978-1999）
   - Explanation: changing firm characteristics (more small, unprofitable, high-growth)
   - 引发关于 dividend relevance 的大量研究

5. **DeAngelo, DeAngelo & Stulz (2006)** - *Dividend Policy and the Earned/Contributed Capital Mix*
   - 发现：dividend payers 是 earned equity 高的成熟公司
   - Life cycle explanation：随公司成熟，payout 增加
   - Reconciles Lintner smoothing with modern trends

**Part 2: Research Question and Contribution**

**Research Question**:

> **"What determines the choice between dividends and share repurchases, and how do these determinants vary across firm lifecycle stages?"**

**Motivation**:
- Repurchases 超过 dividends 成为主要 payout 方式
- 但 both coexist，什么因素决定 mix？
- Lifecycle dimension 尚未充分探索

**Contribution**:

1. **Theoretical**: 整合多种 payout theories（tax, signaling, agency, flexibility）在 lifecycle framework

2. **Empirical**:
   - 区分 young/growth vs mature/stable firms
   - 量化各 channel 在不同 lifecycle 阶段的相对重要性

3. **Policy**: 帮助理解为什么某些公司 prefer dividends，某些 prefer repurchases

**Part 3: Hypotheses**

基于四个理论 channels 构建 hypotheses：

**H1: Tax-based Clientele** (#tax_clientele)

- **H1a**: 高比例 tax-exempt investors 的公司更可能 pay dividends
- **H1b**: Post-2003 tax reform，dividend initiations 增加
- **Mechanism**: Tax disadvantage 降低 → dividends more attractive

**H2: Signaling** (#signaling #information_asymmetry)

- **H2a**: 信息不对称高的公司更可能 pay dividends（stronger commitment signal）
- **H2b**: Dividend increases 伴随 future earnings improvements
- **H2c**: Repurchases 用于 short-term undervaluation signaling
- **Mechanism**: Sticky dividends signal long-term prospects; repurchases signal temporary mispricing

**H3: Agency/Free Cash Flow** (#agency_costs #free_cash_flow)

- **H3a**: 高 FCF + 低投资机会的公司 payout ratio 更高
- **H3b**: 弱治理公司在高 FCF 时更依赖 debt/dividends discipline
- **H3c**: Repurchases 在治理较好时更常用（less need for commitment）
- **Mechanism**: Payout reduces agency costs of free cash flow

**H4: Financial Flexibility** (#flexibility #lifecycle)

- **H4a**: Young/growth firms prefer repurchases（flexible, preserve investment options）
- **H4b**: Mature/stable firms prefer dividends（commitment, stable cash flows）
- **H4c**: Cash flow volatility 高的公司更依赖 repurchases
- **Mechanism**: Flexibility value varies with firm lifecycle and uncertainty

**Cross-sectional predictions**:

| Firm Type | Preferred Method | Main Motive |
|-----------|------------------|-------------|
| Young, high-growth | Repurchases | Flexibility |
| Mature, stable CF | Dividends | Signaling + clientele |
| High FCF, low growth | Both (high total) | Agency reduction |
| High info asymmetry | Dividends | Signaling |
| Weak governance | Dividends + debt | Agency discipline |

**Part 4: Data and Sample**

**Data Sources**:

1. **Payout data**:
   - Compustat: DVT (cash dividends), PRSTKC (stock repurchases)
   - Construct payout measures:
     - Total payout = Dividends + Repurchases
     - Payout mix = Dividends / (Dividends + Repurchases)
     - Payout ratio = Total payout / Net income

2. **Firm characteristics**:
   - Compustat: financials, leverage, profitability, investment
   - CRSP: returns, market value
   - Calculate lifecycle proxies: firm age, RE/TE ratio, asset growth

3. **Ownership**:
   - Thomson 13F: institutional ownership by type
   - Classify into tax-exempt (pensions) vs taxable (mutual funds, hedge funds)

4. **Governance**:
   - ISS (RiskMetrics): board structure, G-index
   - ExecuComp: CEO compensation, ownership

5. **Information environment**:
   - I/B/E/S: analyst coverage, forecast dispersion
   - Stock volatility, bid-ask spread

**Sample Period**: 1990-2020 (30 years)

**Sample Selection**:
1. All Compustat firms with CRSP match
2. Exclude financials (SIC 6000-6999) and utilities (SIC 4900-4999)
3. Require non-missing data for key variables
4. Final sample: ~100,000 firm-years

**Lifecycle Classification**:

Following DeAngelo et al. (2006), use **Retained Earnings / Total Equity (RE/TE)**:
- **Young** (lifecycle stage 1): RE/TE < 0 or bottom tercile
- **Growth** (stage 2): RE/TE middle tercile
- **Mature** (stage 3): RE/TE top tercile

Alternative: Firm age, asset growth rate, sales growth volatility

**Part 5: Empirical Methodology**

**Model 1: Payout Decision (Probit)**

$$
\begin{aligned}
P(\text{Payout}_{i,t} > 0) &= \Phi(\beta_0 + \beta_1 \text{Tax-Exempt Own}_{i,t-1} \\
&\quad + \beta_2 \text{Info Asymmetry}_{i,t-1} + \beta_3 \text{FCF}_{i,t-1} \\
&\quad + \beta_4 \text{Investment Opp}_{i,t-1} + \beta_5 \text{Lifecycle}_{i,t-1} \\
&\quad + \gamma X_{i,t-1} + \varepsilon_{i,t})
\end{aligned}
$$

**Model 2: Payout Mix (Tobit or Fractional Logit)**

Conditional on paying out, what determines dividend vs repurchase mix?

$$
\begin{aligned}
\text{Div Ratio}_{i,t} &= \beta_0 + \beta_1 \text{CF Volatility}_{i,t-1} + \beta_2 \text{Lifecycle}_{i,t-1} \\
&\quad + \beta_3 \text{Governance}_{i,t-1} + \beta_4 \text{Tax-Exempt Own}_{i,t-1} \\
&\quad + \gamma X_{i,t-1} + \alpha_i + \delta_t + \varepsilon_{i,t}
\end{aligned}
$$

Where $\text{Div Ratio} = \frac{\text{Dividends}}{\text{Dividends} + \text{Repurchases}} \in [0,1]$

**Model 3: Lifecycle Interactions**

Test whether payout determinants vary by lifecycle:

$$
\begin{aligned}
\text{Payout}_{i,t} &= \sum_{s=1}^{3} \beta_s \mathbb{1}(\text{Stage } s) \times \text{Determinants}_{i,t-1} \\
&\quad + \gamma X_{i,t-1} + \alpha_i + \delta_t + \varepsilon_{i,t}
\end{aligned}
$$

**Model 4: Event Study (Payout Changes)**

$$
CAR_{i,(-1,+1)} = \alpha + \beta_1 \Delta \text{Div}_{i} + \beta_2 \Delta \text{Repurchase}_{i} + \beta_3 \text{Lifecycle}_{i} + \varepsilon_i
$$

Test whether market reaction differs by payout method and lifecycle

**Key Variables**:

- **Tax-Exempt Own**: % owned by pension funds, endowments
- **Info Asymmetry**: analyst coverage (inverse), forecast dispersion, bid-ask spread
- **FCF**: (OCF - Capex - Dividends) / Assets
- **Investment Opp**: M/B ratio, R&D/Sales, sales growth
- **Lifecycle**: RE/TE ratio, firm age
- **CF Volatility**: rolling 5-year std dev of OCF/Assets
- **Governance**: G-index, board independence, CEO delta

**Controls**: Size (log assets), leverage, profitability (ROA), stock return, industry FE, year FE

**Part 6: Expected Results and Interpretation**

**Main Findings (Expected)**:

**Finding 1**: Lifecycle matters
- Young firms: 80% prefer repurchases (flexibility)
- Mature firms: 60% use dividends (commitment + clientele)
- Payout ratio increases with lifecycle stage

**Finding 2**: Multiple motives coexist
- Tax: tax-exempt ownership → +15pp dividend ratio
- Signaling: high info asymmetry → +20pp dividend ratio
- Agency: high FCF + low growth → +30% total payout
- Flexibility: high CF volatility → +25pp repurchase ratio

**Finding 3**: Lifecycle interactions
- Young firms: FCF less important (few have excess cash)
- Mature firms: governance matters more (agency problem severe)
- Tax effect stronger for mature firms (formed clienteles)

**Finding 4**: Payout changes
- Dividend initiations: +3% CAR (strong signal)
- Repurchase announcements: +2% CAR (weaker signal)
- Mature firms: larger reactions to dividend changes
- Young firms: larger reactions to repurchase announcements

**Robustness Checks**:

1. Alternative lifecycle measures (age, growth)
2. Different payout definitions (include special dividends?)
3. Financial crisis period (2008-2009) subsample
4. Industry-specific analysis
5. International evidence (varying tax systems)

**Interpretation and Contributions**:

1. **Theoretical**: No single theory explains all payout behavior
   - Need integrated framework considering multiple channels
   - Lifecycle provides organizing principle

2. **Empirical**: Quantify relative importance of each channel
   - Tax and agency roughly equal importance
   - Signaling and flexibility vary by lifecycle

3. **Practical**: Guide for corporate managers
   - Young firms: emphasize flexibility, use repurchases
   - Mature firms: build dividend reputation, attract clienteles
   - High FCF firms: increase total payout (not just shift mix)

**Future Research Directions**:

- International comparison (different tax/governance systems)
- Dynamic model of payout policy evolution
- Role of activist investors in disciplining payout

::::

---

## 5. 简答题：Payout Policy 关键概念

#payout_concepts #quick_review

**Question** 简要回答以下概念问题（每个 2-3 句）：

**5.1** 什么是 "dividend smoothing"？为什么公司 smooth dividends？

::::{solution}


**5.1 Dividend Smoothing**

公司倾向于保持 dividends 稳定，避免频繁调整。Lintner (1956) 发现公司有 target payout ratio 并 gradually adjust。原因：(1) dividend cuts 是强烈负面信号，管理层避免；(2) 投资者偏好稳定收入流；(3) 保持 dividend reputation。实证上 dividends 比 earnings 平滑得多。

::::

**5.2** 解释 "disappearing dividends" phenomenon（Fama & French 2001）。

::::{solution}

**5.2 Disappearing Dividends**

Fama & French (2001) 发现 1978-1999 年间，支付 dividend 的公司比例从 66.5% 降至 20.8%。原因有二：(1) **changing characteristics**：更多小型、unprofitable、高成长公司上市，这些公司本就不太 pay dividends；(2) **lower propensity**：即使控制特征，公司支付 dividend 的倾向也下降。反映了 repurchases 替代 dividends 的趋势。

::::

**5.3** 什么是 dividend catering theory（Baker & Wurgler 2004）？

::::{solution}

**5.3 Dividend Catering Theory**

Baker & Wurgler (2004) 提出：公司 cater to investor demand for dividend-paying stocks。当市场给 dividend payers 更高估值（dividend premium 为正）时，更多公司 initiate dividends；当 premium 为负时，fewer initiations。挑战传统观点（dividends signal fundamentals）：管理层可能出于 market timing 动机调整 dividend policy。

::::

**5.4** Open market repurchases 和 tender offer repurchases 有什么区别？

::::{solution}

**5.4 Open Market vs Tender Offer**

**Open market repurchases**：公司通过 broker 在公开市场逐步购买，flexible and gradual，占 90%+ repurchases。**Tender offer repurchases**：公司向股东发出要约，指定价格和数量，股东决定是否 tender，one-shot and committed。Tender offer 信号更强（commitment），但较少使用（expensive, inflexible）。

::::

**5.5** 为什么 repurchases 可以用于 EPS management？这是好事还是坏事？

::::{solution}

**5.5 EPS Management**

Repurchases 减少 shares outstanding → EPS 上升，即使 net income 不变。**Arguments for**：(1) 消除 stock options dilution；(2) 反映真实 per-share value creation；(3) 提高 ROE。**Arguments against**：(1) Cosmetic boost without real value；(2) 牺牲投资满足 EPS targets；(3) Mislead investors 关注 accounting numbers。实证显示部分公司确实为 meet analyst forecasts 而回购，但并非所有回购都是 manipulation。

::::



---

## 6. Capital Structure: Trade-Off Theory

#capital_structure #trade-off_theory #debt_tax_shield #financial_distress

**Question** 考虑 trade-off theory of capital structure。

**6.1** 写出 levered firm value 的基本公式：

$$
V^L = V^U + PV(\text{Tax Shield}) - PV(\text{Financial Distress Costs})
$$

解释每一项的含义。

::::{solution}


**6.1 Levered Firm Value 公式**

$$
V^L = V^U + PV(\text{Tax Shield}) - PV(\text{Financial Distress Costs})
$$

- **$V^U$**: Unlevered firm value（all-equity financed）
  - 资产产生的现金流现值，不受资本结构影响

- **$PV(\text{Tax Shield})$**: 债务利息抵税的现值
  - 正效应：debt increases firm value
  - 来源：interest payments 可以抵扣 corporate tax

- **$PV(\text{Financial Distress Costs})$**: 财务困境成本的现值
  - 负效应：debt decreases firm value
  - 包括 direct costs（破产费用）和 indirect costs（客户流失、投资不足等）

**Optimal leverage** 在边际税收利益 = 边际困境成本处。

::::

**6.2** 假设 perpetual debt $D$，corporate tax rate $\tau_c$。推导：

$$
PV(\text{Tax Shield}) = \tau_c D
$$

::::{solution}

**6.2 Tax Shield 推导**

Perpetual debt $D$，利率 $r_D$，每期利息支付 $r_D D$。

**With debt**:
- Interest payment: $r_D D$
- Tax shield: $\tau_c \times r_D D$（减少的税收）

**Without debt**:
- No interest deduction

**Tax shield 的现值**（用 $r_D$ 折现，假设无风险债务）：

$$
\begin{aligned}
PV(\text{Tax Shield})
&= \sum_{t=1}^{\infty} \frac{\tau_c r_D D}{(1+r_D)^t} \\
&= \tau_c r_D D \sum_{t=1}^{\infty} \frac{1}{(1+r_D)^t} \\
&= \tau_c r_D D \cdot \frac{1/（1+r_D）}{1 - 1/(1+r_D)} \\
&= \tau_c r_D D \cdot \frac{1}{r_D} \\
&= \tau_c D
\end{aligned}
$$

::::

**6.3** Financial distress costs 包括哪两类？哪一类更重要？

::::{solution}

**6.3 Financial Distress Costs**

**(a) Direct bankruptcy costs**:
- Legal fees, court costs
- Administrative expenses
- Typically **3-5% of firm value**
- 相对较小

**(b) Indirect costs**:
- **Lost customers**: 担心 warranty、service 无法兑现
- **Supplier problems**: 要求 cash payment，减少 trade credit
- **Employee turnover**: 优秀员工离职
- **Asset fire sales**: 被迫低价出售资产
- **Underinvestment**: 债务压力导致放弃正 NPV 项目
- Typically **10-20% or more of firm value**
- **更重要**，是 leverage 的主要限制

**Empirical evidence** (Andrade & Kaplan 1998):
- Failed HLTs 的 distress costs ≈ 10-20% of firm value
- 主要是 indirect costs

::::

**6.4** 列举 3 个影响 optimal leverage 的 firm characteristics，并说明预测方向：

| Characteristic | 预测：Leverage ↑ or ↓ | 原因 |
|----------------|---------------------|------|
| Profitability | ? | ? |
| Asset tangibility | ? | ? |
| Growth opportunities | ? | ? |

::::{solution}

**6.4 Firm Characteristics**

| Characteristic | Leverage | 原因 |
|----------------|----------|------|
| **Profitability** | **↓** | **Pecking order**: 高利润 → 更多 retained earnings → 少需要外部融资。与 trade-off 预测相反（trade-off: 高利润 → 更多 tax shield → 更高 leverage） |
| **Asset tangibility** | **↑** | Tangible assets 作为 collateral，降低 default risk → 减少 distress costs → 更高 optimal leverage。且 liquidation value 高 → 破产时损失小 |
| **Growth opportunities** | **↓** | Growth firms 的价值在 intangibles（R&D, human capital），distress 时损失大 → Myers' underinvestment problem 更严重 → 避免高 leverage |

**Additional characteristics**:

| Characteristic | Leverage | 原因 |
|----------------|----------|------|
| **Firm size** | **↑** | Large firms 更 diversified，bankruptcy risk 低 |
| **Tax rate** | **↑** | 高税率 → tax shield 更valuable |
| **Earnings volatility** | **↓** | 高波动 → bankruptcy prob 高 |
| **R&D intensity** | **↓** | Intangible assets，distress costs 高 |

::::

**6.5** Trade-off theory 的主要实证挑战是什么？

::::{solution}

**6.5 Trade-Off Theory 的实证挑战**

**(a) Profitability puzzle**:
- **Theory predicts**: 高利润 → 高 leverage（more tax shield）
- **Empirical fact**: 高利润 → **低** leverage
- **Explanation**: Pecking order dominates（内部融资优先）

**(b) Slow adjustment**:
- Firms deviate from target leverage for long periods
- Adjustment costs 无法完全解释
- 可能 target 本身在变化

**(c) Market timing effects**:
- Baker & Wurgler (2002): leverage is cumulative outcome of past market timing
- Historical M/B predicts current leverage（与 trade-off 不符）

**(d) Missing variables**:
- Many firms with zero debt（theory predicts interior optimum）
- 可能有其他重要 frictions（financial flexibility, control）

**Conclusion**: Trade-off theory captures some cross-sectional variation, but pecking order and market timing also important.

::::



---

## 7. Pecking Order Theory and Asymmetric Information

#pecking_order #Myers-Majluf #asymmetric_information #adverse_selection

**Question** 考虑 Myers & Majluf (1984) 的 pecking order theory。

**7.1** 解释 pecking order 的融资层级：

$$
\text{Internal funds} > \text{Debt} > \text{Equity}
$$

为什么这个顺序？

::::{solution}


**7.1 Pecking Order 融资层级**

**Hierarchy**: Internal funds > Debt > Equity

**原因**：

**(1) Internal funds (retained earnings)**:
- ✓ No information asymmetry（内部资金，无需向外部解释）
- ✓ No issuance costs
- ✓ No dilution
- ✓ No adverse selection
- **Most preferred**

**(2) Debt**:
- ✓ Less information-sensitive than equity
  - Fixed claim，payoff 不太依赖 firm value
  - 只要避免 default，creditors 不关心 upside
- ✓ Lower adverse selection
- ✓ Tax shield benefit
- ✗ Financial distress risk
- **Second choice**

**(3) Equity**:
- ✗ Highly information-sensitive
  - Residual claim，完全依赖 firm value
  - 如果 managers 发行，market 怀疑 overvaluation
- ✗ Maximum adverse selection
- ✗ High issuance costs
- ✗ Dilution of existing shareholders
- **Last resort**

**Key insight**: Financing hierarchy 由 information asymmetry 的严重程度决定。

::::

**7.2** Myers-Majluf model 的核心机制：

Firm 需要融资 $I$ 投资于 NPV = $N > 0$ 的项目。管理层知道 firm value $V$，外部投资者只知道 $E[V]$。

**Setup**:
- Assets in place: $V \in \{V_L, V_H\}$，prob $= 0.5$ each
- 假设 $V_L = 100$, $V_H = 200$, $I = 50$, $N = 20$

如果发行 equity，价格 $P = E[V | \text{equity issued}]$。

**(a)** 在 pooling equilibrium，计算 equity 价格和 old shareholders 的 payoff。

**(b)** 哪种类型的 firm 会选择不发行 equity（放弃项目）？

**(c)** 在 separating equilibrium，只有哪种类型发行 equity？这导致什么问题？

::::{solution}

**7.2 Myers-Majluf Model**

**Setup**:
- $V_L = 100$, $V_H = 200$
- $I = 50$ (investment needed)
- $N = 20$ (project NPV)
- Managers know $V$, market only knows distribution

**(a) Pooling Equilibrium**

Market 相信两种类型都发行 equity：

$$
P = E[V] = 0.5 \times 100 + 0.5 \times 200 = 150
$$

**Shares issued**: $\alpha = \frac{I}{P + I} = \frac{50}{150 + 50} = \frac{50}{200} = 0.25$

**Old shareholders' payoff**:

**High type**:
$$
\begin{aligned}
\text{Payoff}_H
&= (1 - \alpha)(V_H + N) \\
&= (1 - 0.25)(200 + 20) \\
&= 0.75 \times 220 = 165
\end{aligned}
$$

Compare to not issuing: $V_H = 200$

**High type loses**: $165 < 200$ → will **NOT issue**!

**Low type**:
$$
\begin{aligned}
\text{Payoff}_L
&= (1 - \alpha)(V_L + N) \\
&= 0.75 \times (100 + 20) \\
&= 0.75 \times 120 = 90
\end{aligned}
$$

Compare to not issuing: $V_L = 100$

**Low type gains**: $90 < 100$ → also **NOT issue** in this case!

Wait, let me recalculate. If only low type issues, price adjusts.

**(b) Which type will NOT issue?**

At pooling price $P = 150$:

**High type decision**:
- Issue equity at "low" price (150 < 200)
- Old shareholders diluted unfairly
- Loss from underpricing: $(200 - 150) \times \alpha = 50 \times 0.25 = 12.5$
- Gain from project: $N \times (1 - \alpha) = 20 \times 0.75 = 15$
- Net: $15 - 12.5 = 2.5 > 0$

Actually high type **would** issue in this parameterization. Let me use different numbers.

**Better example**: $V_H = 300$, $I = 50$, $N = 20$

Pooling price: $P = 0.5(100) + 0.5(300) = 200$

$\alpha = 50/(200+50) = 0.2$

High type:
- Payoff if issue: $0.8 \times (300 + 20) = 256$
- Payoff if not: $300$
- **High type will NOT issue** (256 < 300)

Low type:
- Payoff if issue: $0.8 \times (100 + 20) = 96$
- Payoff if not: $100$
- **Low type will NOT issue** (96 < 100)

For separating, need $N$ larger or different structure.

**(c) Separating Equilibrium**

假设只有 **low type issues equity**，market 知道这一点：

$$
P = V_L = 100
$$

$$
\alpha = \frac{50}{100 + 50} = \frac{1}{3}
$$

Low type payoff:
$$
(1 - 1/3)(100 + 20) = (2/3) \times 120 = 80 < 100
$$

Low type 也不愿意发！这就是 **underinvestment problem**。

**Problem**: Adverse selection 太严重，即使正 NPV 项目也可能被放弃。

**Solution in Myers-Majluf**:
- Use less information-sensitive securities (debt)
- Or 等到内部资金充足
- → **Pecking order**

::::

**7.3** Pecking order 的实证预测：

列举 3 个可检验的 predictions。

::::{solution}

**7.3 Pecking Order 实证预测**

**Prediction 1: Financing deficit and leverage**

$$
\Delta D_{i,t} = a + b \cdot DEF_{i,t} + \varepsilon_{i,t}
$$

Where $DEF = \text{Investment} + \text{Dividends} - \text{Operating CF}$ (financing deficit)

- **Prediction**: $b \approx 1$（用 debt 填补融资缺口）
- **Empirical**: Shyam-Sunder & Myers (1999) find $b \approx 0.75$ (strong support)

**Prediction 2: Profitability and leverage**

- **Prediction**: 高利润 → 更多 retained earnings → **低 leverage**
- **Empirical**: Strongly confirmed (opposite to trade-off theory)

**Prediction 3: Equity issuance and stock returns**

- **Prediction**: Equity issuance 是 **负信号** → announcement returns < 0
- **Empirical**: Asquith & Mullins (1986): SEO announcement CAR ≈ -3%
- Long-run underperformance (Loughran & Ritter 1995)

**Prediction 4: No target leverage ratio**

- **Prediction**: Leverage ratio is **residual**，不是主动选择
- **Empirical**: Mixed evidence（some firms do rebalance toward targets）

**Additional predictions**:
- Small, high-growth firms (high info asymmetry) 更依赖 pecking order
- Public firms 比 private firms 受 pecking order 约束更强（更多外部融资需求）

::::


---

## 8. Seasoned Equity Offerings (SEO)

#SEO #equity_issuance #announcement_effects #long-run_underperformance

**Question** 考虑 Seasoned Equity Offerings (SEO) 的实证 patterns。

**8.1** SEO announcement effects:

**(a)** 平均 announcement return (CAR) 是多少？这与什么理论一致？

**(b)** 解释为什么 SEO announcements 是负面信号，但 debt issuance 不是（或较弱）。

::::{solution}


**8.1 SEO Announcement Effects**

**(a) Average CAR**

**Empirical fact**:
- SEO announcement CAR(-1, +1) ≈ **-3%** (Asquith & Mullins 1986)
- Larger for smaller firms, growth firms
- 显著为负，robust across samples

**Consistent theories**:

1. **Pecking order / Adverse selection** (Myers & Majluf 1984):
   - Equity issuance signals **overvaluation**
   - Managers 有私有信息，只在股价高时发行
   - Market rationally infers negative information

2. **Signaling**:
   - Good firms avoid dilutive equity financing
   - Only "lemons" issue equity
   - Price drop reflects quality revelation

3. **Price pressure**:
   - Supply increase → downward sloping demand
   - Temporary price decline

**(b) SEO vs Debt Issuance**

**Why SEO negative, debt neutral/less negative**:

| Aspect | Equity (SEO) | Debt |
|--------|--------------|------|
| **Information sensitivity** | High (residual claim) | Low (fixed claim) |
| **Payoff depends on firm value** | Fully | Only if default |
| **Adverse selection severity** | Maximum | Minimal |
| **Managers' incentive to time** | Strong (maximize price) | Weak |

**Equity issuance**:
- Managers 只在股价高估时发行 → strong negative signal
- Market 知道这个 incentive → rational discount

**Debt issuance**:
- Debt payoff 不太依赖 upside → less information-sensitive
- Unless bankruptcy risk high, debt issuance 不太信号 overvaluation
- Announcement CAR ≈ 0% or slightly negative

**Empirical**:
- SEO: CAR ≈ -3%
- Straight debt: CAR ≈ 0% to -0.5%
- Convertible debt: CAR ≈ -2%（介于两者之间）

::::

**8.2** Long-run performance:

Loughran & Ritter (1995) 发现 SEO 后 5 年 abnormal returns 显著为负。

**(a)** 列举两种可能的解释：
- Behavioral explanation
- Rational explanation

**(b)** 为什么 long-run underperformance 的解释存在争议？

::::{solution}

**8.2 Long-Run Performance**

**(a) Explanations**

**Behavioral explanation** (Loughran & Ritter 1995):

1. **Investor overreaction**:
   - Investors 对 SEO firm prospects 过度乐观
   - SEO 利用 "window of opportunity"
   - Subsequent correction → negative abnormal returns

2. **Market timing**:
   - Managers issue when market overvalues equity
   - Not necessarily firm-specific overvaluation
   - "Hot IPO markets" phenomenon

3. **Behavioral biases**:
   - Extrapolation bias: project recent growth too far
   - SEO 后 growth slows → disappointment

**Rational explanation**:

1. **Risk-based**:
   - SEO firms' risk characteristics change post-issuance
   - Asset pricing models mis-specify risk
   - "Underperformance" is actually fair compensation for lower risk

2. **Leverage effect**:
   - SEO reduces leverage → lower financial risk → lower expected returns
   - Not abnormal, just different risk

3. **Sample selection**:
   - Bad model: CAPM or Fama-French 3-factor inadequate
   - Need better risk adjustment

**(b) Why Controversial?**

**Measurement issues**:

1. **Benchmark problem**:
   - Choice of benchmark affects results
   - Size-matched? B/M-matched? Industry-matched?
   - Different benchmarks → different conclusions

2. **Statistical issues**:
   - Long-horizon returns have **bad statistical properties**
   - Overlapping observations → correlation
   - Skewness → standard tests invalid
   - Cross-sectional dependence

3. **Survivor bias**:
   - Delisting firms excluded
   - Bias direction unclear

4. **Definition of "abnormal"**:
   - What is "normal" return?
   - CAPM? FF3? FF5? Carhart 4-factor?
   - Model choice matters

**Fama (1998) critique**:
- Long-run anomalies are **fragile**
- Sensitive to methodology
- Many "disappear" with better methods
- Could be **chance** (data mining)

**Consensus**: Short-run announcement effect robust; long-run underperformance more controversial.

::::

**8.3** SEO timing:

**(a)** 什么是 "market timing" hypothesis？

**(b)** Baker & Wurgler (2002) 的主要发现是什么？

::::{solution}

**8.3 SEO Timing**

**(a) Market Timing Hypothesis**

**Definition**:
> Firms issue equity when their stock is **overvalued** (high market-to-book) and repurchase when undervalued (low M/B).

**Mechanism**:
1. Managers 有 market timing ability（或相信自己有）
2. 利用 mispricing 为现有股东创造价值
3. 在高 M/B 时发行，低 M/B 时回购

**Implication**:
- Capital structure 是 **market timing 的累积结果**
- 不是主动优化的结果（与 trade-off 相反）

**(b) Baker & Wurgler (2002) 发现**

**Paper**: *Market Timing and Capital Structure*

**Key findings**:

1. **Historical M/B matters**:
   $$
   \text{Leverage}_{i,t} = \alpha + \beta \cdot \text{Historical M/B}_{i,t-1} + \gamma X_{i,t} + \varepsilon_{i,t}
   $$
   - $\beta < 0$ and significant
   - 过去高 M/B 时期的公司，当前 leverage 更低（发行了 equity）

2. **Persistent effects**:
   - Market timing 的影响持续 **10+ years**
   - Firms 不快速 rebalance toward target
   - 与 trade-off theory 不符（应该快速调整）

3. **Economic magnitude**:
   - Historical M/B explains ~40% of cross-sectional leverage variation
   - 比 traditional determinants (size, profitability, tangibility) 更重要

**Interpretation**:
- Capital structure 是 **历史融资决策的积累**
- Market timing 比 target leverage 更重要
- Challenges traditional static trade-off theory

::::

**8.4** Research design: Testing information asymmetry

设计一个检验：SEO announcement returns 是否与 information asymmetry 相关。

提供：
- Hypothesis
- Information asymmetry 的 proxies（至少 3 个）
- 回归模型

::::{solution}

**8.4 Research Design**

**Hypothesis**:

> **H**: SEO announcement returns 与 information asymmetry 负相关。信息不对称越严重，adverse selection 越强，announcement CAR 越负。

**Information Asymmetry Proxies**:

1. **Analyst coverage** (inverse):
   - Low coverage → high info asymmetry
   - Proxy: number of analysts following

2. **Institutional ownership**:
   - Low institutional ownership → high info asymmetry
   - Institutions have better information

3. **Bid-ask spread**:
   - High spread → high info asymmetry
   - Market maker faces adverse selection

4. **Firm age**:
   - Young firms → less public information → high info asymmetry

5. **Volatility**:
   - High return volatility → high uncertainty → high info asymmetry

6. **R&D intensity**:
   - High R&D → intangible assets → hard to value → high info asymmetry

**Regression Model**:

$$
\begin{aligned}
CAR_{i,(-1,+1)} &= \beta_0 + \beta_1 \text{Low Coverage}_i + \beta_2 \text{Low Inst Own}_i \\
&\quad + \beta_3 \text{High Spread}_i + \beta_4 \text{Young Firm}_i \\
&\quad + \beta_5 \text{High Volatility}_i + \beta_6 \text{High R&D}_i \\
&\quad + \gamma X_i + \varepsilon_i
\end{aligned}
$$

**Controls** ($X_i$):
- Offer size / Market cap (relative size)
- Prior stock return (momentum, past performance)
- Market-to-book ratio
- Leverage
- Profitability (ROA)

**Predictions**:
- $\beta_1, \beta_2, \beta_3, \beta_4, \beta_5, \beta_6 < 0$
- Higher info asymmetry → more negative CAR

**Alternative specification** (interaction):

$$
CAR_i = \beta_0 + \beta_1 \text{Info Asym}_i + \beta_2 \text{Offer Size}_i + \beta_3 \text{Info Asym} \times \text{Offer Size} + \varepsilon_i
$$

- Prediction: $\beta_3 < 0$（interaction negative）
- Large offerings + high info asymmetry → worst reaction

**Expected results**:
- All info asymmetry proxies significant and negative
- R² ≈ 15-25%
- Economic magnitude: high info asym firms have 2-3% more negative CAR than low info asym

::::


---

## 9. 考场重点：Payout Policy Motives, Literature Review, and Research Proposal

#payout_policy #literature_review #research_design #market_timing #agency #signaling

**Question** 设计一个 research proposal，检验公司 payout policy 是为了 market timing、signaling、agency discipline、tax clientele，还是 financial flexibility。要求先写 literature review，再说明数据来源、变量处理、模型、预期结论和 identification threats。文献优先来自 [Corporate Finance Paper Index](../Corporate%20Finance/Corporate_Finance_Paper_Index.md)。

**（a）** 写一个紧凑 literature review：每篇文献研究什么、发现什么、对你的设计有什么启发。

::::{solution}

可以按 motive 分组，而不是按年份堆文献。

**MM benchmark and payout relevance**

Miller and Modigliani (1961) 提出 dividend irrelevance：在 perfect capital market 中，payout policy 不影响 firm value。它给出零假设：

$$
\begin{aligned}
\text{payout matters}
&\Longleftrightarrow
\text{taxes, information asymmetry, agency costs, transaction costs, or investment frictions matter}.
\end{aligned}
$$

**Flexibility and payout method**

Jagannathan, Stephens and Weisbach (2000) 比较 dividends 与 repurchases。核心发现是 dividends 更适合 permanent cash flows，repurchases 更适合 temporary cash flows。启发：若 flexibility motive 成立，cash-flow volatility 高、temporary cash flow shock 强的公司更偏向 repurchases。

**Market timing / undervaluation**

Ikenberry, Lakonishok and Vermaelen (1995) 发现 open-market repurchase 后有长期正 abnormal returns，解释为市场低估时公司回购。Peyer and Vermaelen (2009) 进一步研究 buyback anomaly 的性质和持久性。启发：若 market timing 成立，repurchase announcements 应集中在低估、高 past underperformance、高 book-to-market 的公司，且公告后长期 abnormal return 为正。

**Signaling**

Vermaelen (1981) 研究 repurchase tender offers，强调回购可以传递 undervaluation / private information 信号。Aharony and Swary (1980) 研究 dividend announcements，说明 dividend changes 传递关于未来 cash flow 的信息。Michaely, Thaler and Womack (1995) 研究 dividend initiations and omissions，发现市场反应和后续 drift。启发：若 signaling 成立，payout 后 operating performance 或 earnings revisions 应改善，且 announcement CAR 对 information asymmetry 更敏感。

**Agency**

Jensen (1986) 提出 agency costs of free cash flow：高 free cash flow 且投资机会低的公司容易 overinvestment，payout 可以约束管理层。La Porta et al. (2000) 从 investor protection 角度解释 dividends as outcome/substitute of governance。启发：若 agency motive 成立，高 FCF、低 Tobin's Q、弱治理公司应更倾向高 payout，且 payout 后 investment inefficiency 下降。

**Tax clientele**

Allen and Michaely (2003) 总结 payout policy 文献；Brav, Graham, Harvey and Michaely (2008) 研究 2003 dividend tax cut 后经理人反应；Kalay (1982)、Michaely and Vila (1986) 讨论 ex-dividend day 与税收客户效应。启发：若 tax clientele 成立，dividend policy 对投资者税收状态和税改更敏感，特别是 tax-exempt institutional ownership 高的公司。

**Life cycle**

Fama and French (2001) 研究 disappearing dividends；DeAngelo, DeAngelo and Stulz (2006) 用 earned/contributed capital mix 检验 life-cycle theory。启发：成熟公司更稳定 pay dividends，年轻成长公司更依赖 repurchases 或不派息。

::::

**（b）** 写出 research question、hypotheses 和机制图。

::::{solution}

Research question：

> Firms choose dividends or repurchases because of which motive: market timing, signaling, agency discipline, tax clientele, or flexibility?

机制图：

$$
\begin{aligned}
\text{low valuation / prior underperformance}
&\Rightarrow \text{repurchase timing}
\Rightarrow CAR>0,\ BHAR>0,\\
\text{private positive information}
&\Rightarrow \text{payout signal}
\Rightarrow CAR>0,\ \Delta \text{ROA}_{+1,+2}>0,\\
\text{high FCF + low growth}
&\Rightarrow \text{agency discipline}
\Rightarrow \text{payout}\uparrow,\ \text{investment efficiency}\uparrow,\\
\text{tax advantage / tax-exempt clientele}
&\Rightarrow \text{dividend preference}
\Rightarrow \text{dividend initiation}\uparrow,\\
\text{temporary cash flow / volatility}
&\Rightarrow \text{repurchase flexibility}
\Rightarrow \text{repurchase share}\uparrow.
\end{aligned}
$$

Hypotheses：

**H1 Market timing**：低估公司更可能 repurchase，且 repurchase 后长期 abnormal returns 为正。

**H2 Signaling**：payout announcement 后 analyst forecast revisions、ROA、earnings surprise 改善；该效应在 high information asymmetry firms 更强。

**H3 Agency**：高 FCF、低 growth opportunities、弱治理公司 payout 更高，payout 后 overinvestment 下降。

**H4 Tax clientele**：tax-exempt institutional ownership 高或 dividend tax penalty 下降时，公司更倾向 dividends。

**H5 Flexibility**：cash flow volatility 高、cash shock temporary 的公司更倾向 repurchases，而不是 sticky dividends。

::::

**（c）** 说明数据来源、样本和变量构造。

::::{solution}

样本：

$$
\begin{aligned}
\text{U.S. listed nonfinancial nonutility firms, 1990--2020}.
\end{aligned}
$$

数据来源：

- Compustat：financial statements，dividends，repurchases，cash flow，assets，investment。
- CRSP：stock returns，market cap，announcement-window returns。
- SDC / company announcements：repurchase authorizations 和 dividend initiations/changes。
- IBES：analyst forecasts and revisions。
- Thomson / 13F：institutional ownership and tax-exempt ownership proxy。
- ExecuComp / governance data：governance, CEO incentives, board variables。

核心变量：

$$
\begin{aligned}
\text{TotalPayout}_{i,t}
&=
\text{Dividend}_{i,t}+\text{Repurchase}_{i,t},\\
\text{PayoutRatio}_{i,t}
&=
\frac{\text{TotalPayout}_{i,t}}{\text{NetIncome}_{i,t}},\\
\text{RepurchaseShare}_{i,t}
&=
\frac{\text{Repurchase}_{i,t}}
{\text{Dividend}_{i,t}+\text{Repurchase}_{i,t}},\\
\text{FCF}_{i,t}
&=
\frac{\text{OperatingCashFlow}_{i,t}-\text{Capex}_{i,t}}{\text{Assets}_{i,t-1}},\\
\text{Misvaluation}_{i,t}
&=
\text{industry-adjusted }M/B
\text{ or residual valuation},\\
\text{CAR}_{i,[-1,+1]}
&=
\sum_{\tau=-1}^{1}
\left(R_{i,\tau}-\widehat R_{i,\tau}^{\mathrm{market\ model}}\right),\\
\text{BHAR}_{i,[1,36]}
&=
\prod_{\tau=1}^{36}(1+R_{i,\tau})
-
\prod_{\tau=1}^{36}(1+R_{\mathrm{benchmark},\tau}).
\end{aligned}
$$

处理规则：

- 排除 financials and utilities。
- winsorize continuous variables at 1% and 99%。
- payout variables scaled by assets or market cap。
- repurchase 用 net share repurchase 或 Compustat purchase of common stock，并剔除 employee option related repurchases 的噪声。
- 所有解释变量滞后一期，降低 simultaneity。

::::

**（d）** 设计 baseline model 来区分 payout motives。

::::{solution}

先估计 payout level：

$$
\begin{aligned}
\text{PayoutRatio}_{i,t}
&=
\alpha_i+\delta_t
+\beta_1\text{Misvaluation}_{i,t-1}
+\beta_2\text{InfoAsym}_{i,t-1}\\
&\quad
+\beta_3\text{FCF}_{i,t-1}\times\text{LowQ}_{i,t-1}
+\beta_4\text{TaxExemptOwn}_{i,t-1}\\
&\quad
+\beta_5\text{CFVol}_{i,t-1}
+\gamma'X_{i,t-1}
+\varepsilon_{i,t}.
\end{aligned}
$$

再估计 payout method：

$$
\begin{aligned}
\text{RepurchaseShare}_{i,t}
&=
\alpha_i+\delta_t
+\theta_1\text{Undervaluation}_{i,t-1}
+\theta_2\text{TemporaryCashShock}_{i,t}\\
&\quad
+\theta_3\text{CFVol}_{i,t-1}
+\theta_4\text{TaxExemptOwn}_{i,t-1}
+\theta_5\text{Mature}_{i,t-1}
+\Gamma'X_{i,t-1}
+u_{i,t}.
\end{aligned}
$$

预期符号：

$$
\begin{aligned}
\theta_1>0
&\Longleftrightarrow
\text{undervalued firms use repurchases for timing},\\
\theta_2>0,\ \theta_3>0
&\Longleftrightarrow
\text{temporary cash and volatility favor flexible repurchases},\\
\theta_4<0
&\Longleftrightarrow
\text{tax-exempt clientele favors dividends},\\
\theta_5<0
&\Longleftrightarrow
\text{mature firms prefer dividends}.
\end{aligned}
$$

Event-study equation for announcement returns：

$$
\begin{aligned}
CAR_{i,[-1,+1]}
&=
a
+b_1\text{Repurchase}_{i}
+b_2\text{Undervaluation}_{i}
+b_3\text{InfoAsym}_{i}\\
&\quad
+b_4(\text{Repurchase}_{i}\times\text{Undervaluation}_{i})
+b_5(\text{Payout}_{i}\times\text{InfoAsym}_{i})
+c'X_i+\varepsilon_i.
\end{aligned}
$$

如果 market timing 成立，$b_4>0$；如果 signaling 成立，$b_5>0$，且后续 operating performance 改善。

::::

**（e）** 如何判断 market timing 而不是 signaling 或 agency？

::::{solution}

核心是把不同 motive 的后验预测分开：

$$
\begin{aligned}
\text{market timing}
&\Longrightarrow
\begin{cases}
\text{repurchase after low valuation / negative prior return},\\
BHAR_{[1,36]}>0,\\
\text{operating improvement not necessarily strong};
\end{cases}\\
\text{signaling}
&\Longrightarrow
\begin{cases}
CAR_{[-1,+1]}>0,\\
\Delta \text{analyst forecast}>0,\\
\Delta ROA_{+1,+2}>0;
\end{cases}\\
\text{agency}
&\Longrightarrow
\begin{cases}
\text{high FCF + low Q predicts payout},\\
\text{capex/acquisitions fall after payout},\\
\text{investment efficiency improves};
\end{cases}\\
\text{tax clientele}
&\Longrightarrow
\begin{cases}
\text{dividends respond to tax penalty and investor tax status},\\
\text{effect stronger for tax-sensitive shareholders};
\end{cases}\\
\text{flexibility}
&\Longrightarrow
\begin{cases}
\text{temporary cash shocks predict repurchases},\\
\text{permanent cash-flow increases predict dividends}.
\end{cases}
\end{aligned}
$$

一个清晰的判别设计是同时报告三类 outcome：

$$
\begin{aligned}
\text{valuation outcome}
&: CAR,\ BHAR,\\
\text{fundamental outcome}
&: \Delta ROA,\ \Delta EPS,\ analyst\ revisions,\\
\text{real-policy outcome}
&: investment,\ acquisition,\ cash,\ leverage.
\end{aligned}
$$

若只看到 $BHAR>0$ 但 fundamentals 不改善，更像 market timing / underreaction；若 fundamentals 改善且 announcement CAR 强，更像 signaling；若 payout 后 inefficient investment 下降，更像 agency discipline。

::::

**（f）** 写出 identification threats 和可行 robustness checks。

::::{solution}

主要威胁：

- **Endogeneity / omitted variables**：未观测的投资机会或管理层质量同时影响 payout 和 returns。
- **Reverse causality**：预期未来业绩好导致 payout，而不是 payout 改善业绩。
- **Measurement error**：repurchase authorization 不等于 actual repurchase；Compustat repurchase 可能混入 option exercise。
- **Benchmark sensitivity**：长期 abnormal returns 对 benchmark choice 很敏感。
- **Concurrent events**：earnings announcements、M&A、financing events 同时发生。

Robustness：

$$
\begin{aligned}
\text{credible evidence}
&\Longleftrightarrow
\begin{cases}
\text{firm FE + year/industry-year FE},\\
\text{lagged controls and pre-trend checks},\\
\text{alternative valuation proxies},\\
\text{CAR plus BHAR plus calendar-time portfolio returns},\\
\text{separate authorization and actual repurchase},\\
\text{exclude contaminated announcements},\\
\text{subsample tests by information asymmetry, FCF, governance, tax clientele}.
\end{cases}
\end{aligned}
$$

若能使用 tax reform 或 regulatory shock，可写 DID：

$$
\begin{aligned}
\text{Dividend}_{i,t}
&=
\alpha_i+\delta_t
+\beta(\text{TaxSensitive}_{i}\times\text{PostTaxCut}_{t})
+\gamma'X_{i,t}
+\varepsilon_{i,t}.
\end{aligned}
$$

其中 $\beta>0$ 表示 tax-sensitive firms 在 dividend tax penalty 下降后更增加 dividends。DID 的核心识别是假设 treated 和 control firms 在税改前有 parallel trends，且没有同时发生只影响 treated firms 的其他 shock。

::::
