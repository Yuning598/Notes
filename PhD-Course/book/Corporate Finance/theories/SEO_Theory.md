# Seasoned Equity Offerings (SEO) Theory

## 相关理论链接

- **基准理论**：[MM_and_Tax_Theory](MM_and_Tax_Theory.md) - 完美市场下融资无关性
- **资本结构基准**：[Tradeoff_Theory](Tradeoff_Theory.md) - target leverage rebalancing 只是 SEO 的一个机制
- **互补理论**：[Pecking_Order_Theory](Pecking_Order_Theory.md) - internal funds / debt / equity 的融资顺序
- **互补理论**：[Payout_Policy_Theory](Payout_Policy_Theory.md) - repurchase 与 SEO 的对照
- **互补理论**：[Agency_Theory](Agency_Theory.md) - 监控、控制权与代理成本
- **整合框架**：[00_Theory_Integration](00_Theory_Integration.md) - SEO 在公司金融三大问题中的位置

## 📌 目录

- [1. Definition and Background](#1-definition-and-background)
- [2. Core SEO Mechanisms](#2-core-seo-mechanisms)
  - [2.1 Adverse Selection Theory (Myers and Majluf 1984)](#21-adverse-selection-theory-myers-and-majluf-1984)
  - [2.2 Market Timing Theory (Baker and Wurgler 2002)](#22-market-timing-theory-baker-and-wurgler-2002)
  - [2.3 Signaling Theory (Ross 1977)](#23-signaling-theory-ross-1977)
  - [2.4 Cash Flow Signaling (Miller and Rock 1985)](#24-cash-flow-signaling-miller-and-rock-1985)
  - [2.5 Price Pressure Theory](#25-price-pressure-theory)
  - [2.6 Ownership and Monitoring Theory](#26-ownership-and-monitoring-theory)
  - [2.7 Target Leverage Rebalancing (Trade-off Application)](#27-target-leverage-rebalancing-trade-off-application)
- [3. SEO Flotation Methods and Cost Trade-off](#3-seo-flotation-methods-and-cost-trade-off)
  - [3.1 Firm Commitment Offer](#31-firm-commitment-offer)
  - [3.2 Rights Offer](#32-rights-offer)
  - [3.3 Private Placement](#33-private-placement)
  - [3.4 Shelf Registration](#34-shelf-registration)
  - [3.5 Cost Trade-off and Summary](#35-cost-trade-off-and-summary)
- [4. Empirical Separation of Mechanisms](#4-empirical-separation-of-mechanisms)
- [5. Integrated SEO Framework](#5-integrated-seo-framework)
- [6. Key Empirical Evidence](#6-key-empirical-evidence)
- [7. Policy Experiment Designs](#7-policy-experiment-designs)
- [8. Theory-to-Evidence Mapping](#8-theory-to-evidence-mapping)
- [References](#references)

## 1. Definition and Background

**Seasoned Equity Offering (SEO)**：已上市公司在 IPO 之后再次向市场发行股票以筹集外部股权资金的行为。

核心区别：
- **Primary SEO**：公司发行新股，资金流入公司
- **Secondary sale**：老股东出售持股，资金不流入公司

## 2. Core SEO Mechanisms

SEO 是单独的 equity issuance 主题，不是 trade-off theory 的附录。课件里的核心问题是：

$$
\begin{aligned}
\text{SEO announcement / issuance outcome}
&\Longleftarrow
\begin{cases}
\text{adverse selection} \\
\text{market timing} \\
\text{cash-flow signaling} \\
\text{price pressure} \\
\text{ownership and monitoring} \\
\text{target leverage rebalancing} \\
\text{flotation cost trade-off}
\end{cases}
\end{aligned}
$$

其中 **target leverage rebalancing** 只是 capital-structure channel；SEO 自身还必须解释发行方式、公告效应、长期表现和 cross-sectional heterogeneity。

### 2.1 Adverse Selection Theory (Myers and Majluf 1984)

**核心机制**：信息不对称下，管理层比外部投资者更清楚公司真实价值，市场怀疑公司在股票被高估时发行新股。

$$
\begin{aligned}
&\text{managers know } V > \text{market belief} \\
&\Rightarrow \text{managers prefer internal funds or debt} \\
&\Rightarrow \text{equity issuance reveals } V \text{ may be low} \\
&\Rightarrow \text{market revises valuation downward} \\
&\Rightarrow \text{SEO announcement } CAR < 0
\end{aligned}
$$

**Pecking order 推论**：

$$
\begin{aligned}
\text{financing preference}: \quad
\text{internal funds} \succ \text{debt} \succ \text{equity}
\end{aligned}
$$

**关键预测**：
- H1：$\text{information asymmetry} \uparrow \Rightarrow \text{SEO announcement } CAR \downarrow$
- H2：$\text{growth opportunities} \uparrow \Rightarrow \text{adverse selection} \downarrow$（因为信息不对称更多来自成长期权而非现有资产）

**实证支持**：
- Asquith and Mullins (1986)：SEO announcement returns 平均为负
- Masulis and Korwar (1986)：管理层同时卖股时，announcement effect 更负

---

### 2.2 Market Timing Theory (Baker and Wurgler 2002)

**核心机制**：理性管理者利用市场错误定价，在股价高时发股、低时回购。

$$
\begin{aligned}
&\text{market-to-book} \uparrow \text{ or prior return} \uparrow \\
&\Rightarrow \text{perceived overvaluation} \uparrow \\
&\Rightarrow \Pr(\text{SEO}) \uparrow \\
&\Rightarrow \text{future valuation correction} \\
&\Rightarrow \text{post-SEO long-run return} \downarrow
\end{aligned}
$$

**关键预测**：
- H1：$\text{prior return} \uparrow \Rightarrow \Pr(\text{SEO}) \uparrow$
- H2：$\text{market-to-book} \uparrow \Rightarrow \Pr(\text{SEO}) \uparrow$
- H3：$\text{hot issue market} \Rightarrow \text{SEO volume} \uparrow$
- H4：$\text{SEO completed} \Rightarrow \text{long-run abnormal return} \downarrow$

**实证支持**：
- Loughran and Ritter (1995)：SEO 后 5 年 buy-and-hold returns 明显低于 matching firms
- Spiess and Affleck-Graves (1995)：SEO 后 3 年 cumulative abnormal return 偏低
- Choe, Masulis and Nanda (1993)：business cycle 影响 SEO announcement effects
- Bayless and Chaplinsky (1996)：hot markets 中 SEO volume 更高，announcement effect 较不负

---

### 2.3 Signaling Theory (Ross 1977)

**核心机制**：融资决策本身传递关于公司质量的信号。

$$
\begin{aligned}
&\text{high-quality firm} \Rightarrow \text{prefers debt (costly signal)} \\
&\text{low-quality firm} \Rightarrow \text{cannot afford high debt} \\
&\Rightarrow \text{equity issuance} = \text{negative signal}
\end{aligned}
$$

**分离均衡条件**：

$$
\begin{aligned}
\underbrace{C_{\text{distress}}^{\text{low}}}_{\text{低质量公司破产成本}}
> \underbrace{C_{\text{distress}}^{\text{high}}}_{\text{高质量公司破产成本}}
\end{aligned}
$$

高质量公司通过高杠杆发信号，因为破产成本对低质量公司更高。

---

### 2.4 Cash Flow Signaling (Miller and Rock 1985)

**核心机制**：外部融资需求揭示当前经营现金流信息。

$$
\begin{aligned}
\text{sources} &= \text{uses} \\
\underbrace{X(t)}_{\text{operating cash flow}} + \underbrace{E(t)}_{\text{external financing}}
&= \underbrace{I(t)}_{\text{investment}} + \underbrace{D(t)}_{\text{dividend}}
\end{aligned}
$$

给定投资需求 $I(t)$，外部融资 $E(t) \uparrow$ 反推出：

$$
\begin{aligned}
X(t) = I(t) + D(t) - E(t) \downarrow
\end{aligned}
$$

**关键推论**：SEO 的负面反应可能来自 implied cash-flow news，不必完全依赖 equity overvaluation。

---

### 2.5 Price Pressure Theory

**核心机制**：SEO 突然增加股票供给，短期需求曲线向下倾斜或流动性不足时，需要价格折让才能被市场吸收。

$$
\begin{aligned}
&\text{relative offer size} \uparrow \text{ and liquidity} \downarrow \\
&\Rightarrow \text{temporary supply pressure} \uparrow \\
&\Rightarrow \text{price impact} \downarrow \\
&\Rightarrow CAR \downarrow
\end{aligned}
$$

**关键预测**：
- H1：$\text{offer size / market cap} \uparrow \Rightarrow CAR \downarrow$
- H2：$\text{liquidity} \downarrow \Rightarrow \text{price impact} \uparrow$

**实证支持**：
- Asquith and Mullins (1986)：issue size 与 announcement returns 负相关
- Masulis and Korwar (1986)：issue characteristics 影响 announcement returns

**与 adverse selection 的区别**：
- Price pressure 是临时供需压力，不涉及基本面信息
- Adverse selection 是信息揭示，改变市场对公司价值的预期

---

### 2.6 Ownership and Monitoring Theory

**核心机制**：SEO 改变 ownership structure，从而影响 monitoring strength 和 manager-shareholder incentive alignment。

$$
\begin{aligned}
&\text{monitoring investor participation} \uparrow \\
&\Rightarrow \text{certification value} \uparrow \\
&\Rightarrow CAR \uparrow
\end{aligned}
$$

$$
\begin{aligned}
&\text{management share sales} \uparrow \\
&\Rightarrow \text{incentive alignment} \downarrow \\
&\Rightarrow CAR \downarrow
\end{aligned}
$$

**实证支持**：
- Masulis and Korwar (1986)：伴随 management sales 的 SEO 公告反应更差
- Wruck (1989)：private placement 引入监督型投资者时，announcement effect 可为正

---

### 2.7 Target Leverage Rebalancing (Trade-off Application)

**核心机制**：公司用 SEO 调整 leverage，使资本结构更接近 target leverage。理论基础见 [Tradeoff_Theory](Tradeoff_Theory.md)。

$$
\begin{aligned}
&|\text{leverage} - \text{target leverage}| \uparrow \\
&\Rightarrow \text{distress cost / tax benefit loss / agency cost} \uparrow \\
&\Rightarrow \Pr(\text{SEO for rebalancing}) \uparrow
\end{aligned}
$$

**关键预测**：
- H1：$|\text{leverage} - \text{target leverage}| \uparrow \Rightarrow \Pr(\text{SEO}) \uparrow$
- H2：$\text{SEO for target leverage adjustment} \Rightarrow \text{announcement effect} \uparrow$（市场理解为 value-enhancing rebalancing）
- H3：$\text{SEO completed} \Rightarrow |\text{post-SEO leverage} - \text{target leverage}| \downarrow$

**实证策略**：利用税改作为外生冲击，检验 target leverage 变化是否影响 SEO probability 和 announcement returns。

---

## 3. SEO Flotation Methods and Cost Trade-off

### 3.1 Firm Commitment Offer

**机制**：underwriter 以固定价格买断全部股票，再向公众销售。

**理论预测**：
- Adverse selection 最强 → announcement effect 最负
- Price pressure 较大（大量股票进入公开市场）

### 3.2 Rights Offer

**机制**：现有股东按持股比例获得优先认购权。

**理论预测**：
- Adverse selection 较弱（现有股东可避免稀释）
- Announcement effect 较不负

**Rights offer paradox (Eckbo and Masulis 1992)**：
- 理论上 rights offer 应优于 firm commitment（减少财富转移）
- 实际上美国市场 rights offer 很少使用
- 原因：participation frictions、underwriting costs、standby fees

### 3.3 Private Placement

**机制**：向特定投资者（通常是机构投资者）非公开发行。

**理论预测**：
- Monitoring and certification effect → announcement effect 可为正
- Information asymmetry 通过投资者尽职调查降低

**实证支持**：
- Wruck (1989)：private placement 平均 announcement return 为正

### 3.4 Shelf Registration

**机制**：预先登记潜在股权发行，可在未来存托登记年度内分批出售。

**理论预测**：
- Market timing flexibility 增强
- 但也可能降低 adverse selection（因为可以在信息透明时发行）

### 3.5 Cost Trade-off and Summary

课件里的 SEO 逻辑最后会收束到一个很简洁的链条：

$$
\begin{aligned}
\text{flotation method}
\rightarrow
\text{cost trade-off}
\rightarrow
\text{announcement effect}
\rightarrow
\text{long-run performance}
\end{aligned}
$$

**核心 trade-off**：
- rights offer 的 direct flotation cost 通常最低，但 indirect flotation cost 可能更高
- firm commitment 的 underwriter certification 更强，但承销和折价成本更高
- private placement 可能通过 monitoring / certification 降低信息成本，但会改变 control rights

**Reverse puzzle in UK and HK**：
- 关键变量是 **private benefits of control**，记作 $c$
- 当 $c$ 高时，insider 更重视控制权，rights issue 的控制稀释更小，所以更受偏好
- 当 $c$ 低时，placement 的相对成本下降，rights 的控制优势变弱

$$
\begin{aligned}
\underbrace{U_R-U_P}_{\text{rights vs. placement}}
&=
\underbrace{\lambda c}_{\text{rights preserve control rents}}
-\underbrace{D}_{\text{placement dilutes control}}\\
&\gtrless 0
\quad\Longleftrightarrow\quad
c \gtrless c^\ast \equiv \frac{D}{\lambda}.
\end{aligned}
$$

**Announcement effect**：
- 美国样本里，SEO announcement effect 通常显著为负
- 但如果 asymmetric information more from investment opportunities than from assets-in-place，则 announcement effect 可以较不负甚至为正

**Long-run performance**：
- 后续研究发现 SEO 之后长期表现偏弱
- 这说明 market timing / overvaluation correction 可能是长期弱势的重要来源

---

## 4. Empirical Separation of Mechanisms

### 4.1 Adverse Selection vs. Market Timing

| 维度                     | Adverse Selection                          | Market Timing                                |
| ------------------------ | ------------------------------------------ | -------------------------------------------- |
| 核心机制                 | 信息不对称 → 高估担忧                      | 估值偏高 → 择时发行                          |
| 关键预测变量             | information asymmetry proxies              | prior return, market-to-book, hot market     |
| 时间维度                 | announcement day 一次性坏消息              | long-run underperformance（估值修正）        |
| 政策实验                 | 强制披露降低信息不对称 → CAR less negative | 限制发行择时 → long-run underperformance 减弱 |

### 4.2 Adverse Selection vs. Price Pressure

| 维度         | Adverse Selection              | Price Pressure                     |
| ------------ | ------------------------------ | ---------------------------------- |
| 核心机制     | 信息揭示 → 估值下调            | 供需压力 → 临时价格下跌            |
| 持续性       | 永久性（基本面信息）           | 临时性（供需失衡）                 |
| 关键预测变量 | information asymmetry proxies  | relative offer size, liquidity     |
| 政策实验     | 强制披露 → CAR less negative   | 流动性支持 → price impact 减弱     |

### 4.3 Cash Flow Signaling vs. Adverse Selection

| 维度         | Cash Flow Signaling                  | Adverse Selection                  |
| ------------ | ------------------------------------ | ---------------------------------- |
| 核心机制     | 融资需求揭示经营现金流               | 发行时机揭示股票估值               |
| 关键预测变量 | investment opportunities             | information asymmetry              |
| 政策实验     | 强制现金流预告 → SEO 信息含量下降    | 强制披露 → overvaluation concern 下降 |

---

## 5. Integrated SEO Framework

$$
\begin{aligned}
\text{SEO outcomes}
&= \underbrace{\text{adverse selection effect}}_{\text{信息不对称}}
+ \underbrace{\text{market timing effect}}_{\text{估值择时}}
+ \underbrace{\text{cash flow signal effect}}_{\text{融资需求揭示}}
+ \underbrace{\text{price pressure effect}}_{\text{供需压力}} \\
&\quad + \underbrace{\text{ownership effect}}_{\text{监督与激励}}
+ \underbrace{\text{leverage rebalancing effect}}_{\text{资本结构调整}}
+ \underbrace{\text{flotation method effect}}_{\text{发行方式成本}}
\end{aligned}
$$

**实证策略**：
1. 用 **information asymmetry proxies**（analyst coverage, disclosure quality）区分 adverse selection
2. 用 **prior return / market-to-book / hot market**区分 market timing
3. 用 **relative offer size / liquidity**区分 price pressure
4. 用 **investor type / management sales**区分 ownership effect
5. 用 **leverage deviation from target**区分 leverage rebalancing
6. 用 **offer method / underwriting contract / participation rate**区分 flotation method effect

---

## 6. Key Empirical Evidence

### 6.1 Announcement Effects

| 发行方式              | 平均 CAR | 理论解释                                     |
| --------------------- | -------- | -------------------------------------------- |
| Firm commitment       | -3%      | Adverse selection 最强                       |
| Rights offer          | -1%      | 现有股东可避免稀释，adverse selection 较弱   |
| Private placement     | +4%      | Monitoring and certification effect          |

### 6.2 Long-Run Performance

| 研究                              | 样本期      | 发现                                         |
| --------------------------------- | ----------- | -------------------------------------------- |
| Loughran and Ritter (1995)        | 1970-1990   | SEO 后 5 年 BHAR = -30%                      |
| Spiess and Affleck-Graves (1995)  | 1975-1989   | SEO 后 3 年 CAR 明显低于 matched firms       |
| Fu (2014)                         | 2003-2012   | Underperformance 收敛，说明市场学习或制度改进 |

### 6.3 Cross-Sectional Variation

| 变量                     | 与 SEO CAR 关系 | 理论机制                 |
| ------------------------ | --------------- | ------------------------ |
| Information asymmetry ↑  | CAR ↓           | Adverse selection        |
| Prior return ↑           | CAR ↓           | Market timing            |
| Relative offer size ↑    | CAR ↓           | Price pressure           |
| Management sales ↑       | CAR ↓           | Ownership and incentives |
| Growth opportunities ↑   | CAR ↑           | Adverse selection 减弱   |

---

## 7. Policy Experiment Designs

### 7.1 Test Adverse Selection

**政策冲击**：监管要求部分公司在 SEO 前强制披露更细的项目用途、管理层持股变化和关键资产估值信息。

**DiD 设定**：

$$
\begin{aligned}
CAR_i^{SEO}
&= \alpha + \beta(\text{High Opacity}_i \times \text{Post}_t) \\
&\quad + \gamma \text{High Opacity}_i + \delta \text{Post}_t + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta > 0$（强制披露降低信息不对称 → CAR less negative）

### 7.2 Test Market Timing

**政策冲击**：监管对部分公司随机延长 SEO filing 到 issuance 的等待期，降低择时能力。

**DiD 设定**：

$$
\begin{aligned}
Y_{it}
&= \alpha + \beta(\text{Treated}_i \times \text{Post}_t) \\
&\quad + \theta(\text{Treated}_i \times \text{Post}_t \times \text{High M/B}_i) \\
&\quad + \text{controls} + \varepsilon_{it}
\end{aligned}
$$

其中 $Y_{it}$ 可以是：
- SEO indicator
- Post-SEO long-run abnormal return

**预期**：
- $\beta < 0$（限制择时 → SEO probability 下降）
- $\theta$ 对 long-run return：限制择时后，underperformance 减弱

### 7.3 Test Price Pressure

**政策冲击**：交易所随机提高部分股票的临时流动性支持（market-making obligation）。

**DiD 设定**：

$$
\begin{aligned}
CAR_i
&= \alpha + \beta(\text{Treated}_i \times \text{SEO}_i) \\
&\quad + \gamma \text{Treated}_i + \delta \text{SEO}_i + \varepsilon_i
\end{aligned}
$$

**预期**：$\beta > 0$（流动性支持 → price impact 减弱 → CAR less negative）

### 7.4 Test Ownership and Monitoring

**政策冲击**：指数纳入、机构投资者持股规则变化，或 private placement 披露规则改变。

**DiD 设定**：

$$
\begin{aligned}
CAR_i
&=
\alpha
+\beta(\text{Monitoring Investor}_i \times \text{Post}_t)
+\gamma'X_i
+\varepsilon_i.
\end{aligned}
$$

**预期**：$\beta>0$。如果 SEO 引入的投资者能提供 certification 或 monitoring，announcement effect 应更不负或为正。

### 7.5 Test Target Leverage Rebalancing

**政策冲击**：税改或破产法改革改变 target leverage，使部分公司偏离目标杠杆更远。

**DiD 设定**：

$$
\begin{aligned}
\Pr(\text{SEO}_{it}=1)
&=
\alpha
+\beta(\text{Target Leverage Gap}_{i,t-1}\times \text{Post}_t)
+\gamma'X_{it}
+\varepsilon_{it}.
\end{aligned}
$$

**预期**：$\beta>0$。若 SEO 用于 capital structure rebalancing，偏离 target leverage 越大的公司越可能发行 equity 来降杠杆。

---

## 8. Theory-to-Evidence Mapping

| 理论机制              | 核心预测                                                     | 关键实证证据                                                 |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Adverse selection     | information asymmetry ↑ → SEO CAR ↓                          | Asquith and Mullins (1986), Masulis and Korwar (1986)       |
| Market timing         | prior return / M/B ↑ → SEO probability ↑ → long-run return ↓ | Loughran and Ritter (1995), Spiess and Affleck-Graves (1995) |
| Cash flow signaling   | external financing ↑ → implied cash flow ↓ → CAR ↓          | Miller and Rock (1985) 理论，实证较少直接检验                |
| Price pressure        | relative offer size ↑, liquidity ↓ → CAR ↓                   | Asquith and Mullins (1986) issue size effect                 |
| Ownership-monitoring  | monitoring investor ↑ → CAR ↑; management sales ↑ → CAR ↓   | Wruck (1989), Masulis and Korwar (1986)                      |
| Target leverage       | leverage deviation ↑ → SEO probability ↑                     | 税改自然实验（理论推导，实证较少）                           |
| Flotation method      | rights / firm commitment / private placement imply different direct and indirect costs | Eckbo and Masulis (1992), Kothare (1997), Holderness and Pontiff (2016) |

---

## References

**核心理论**：
- Myers and Majluf (1984), *Corporate Financing and Investment Decisions When Firms Have Information that Investors Do Not Have*, JFE
- Ross (1977), *The Determination of Financial Structure: The Incentive Signaling Approach*, Bell Journal
- Miller and Rock (1985), *Dividend Policy under Asymmetric Information*, JF
- Baker and Wurgler (2002), *Market Timing and Capital Structure*, JF

**实证证据**：
- Asquith and Mullins (1986), *Equity Issues and Offering Dilution*, JFE
- Masulis and Korwar (1986), *Seasoned Equity Offerings: An Empirical Investigation*, JFE
- Loughran and Ritter (1995), *The New Issues Puzzle*, JF
- Spiess and Affleck-Graves (1995), *Underperformance in Long-Run Stock Returns Following Seasoned Equity Offerings*, JFE
- Wruck (1989), *Equity Ownership Concentration and Firm Value*, JFE
- Eckbo and Masulis (1992), *Adverse Selection and the Rights Offer Paradox*, JFE
- Kothare (1997), *The Effects of Equity Issues on Ownership Structure and Stock Liquidity*, JFE
- Holderness and Pontiff (2016), rights offers and shareholder participation

**市场条件**：
- Choe, Masulis and Nanda (1993), *Common Stock Offerings across the Business Cycle*, JFE
- Bayless and Chaplinsky (1996), *Is There a Window of Opportunity for Seasoned Equity Issuance?*, JF
