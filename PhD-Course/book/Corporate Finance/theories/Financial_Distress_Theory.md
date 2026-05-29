# Financial Distress Costs Theory

## 相关理论链接

- **基准理论**：[MM_and_Tax_Theory](MM_and_Tax_Theory.md) - MM 无破产成本假设
- **互补理论**：[Agency_Theory](Agency_Theory.md) - 投资不足与困境成本
- **应用**：[Tradeoff_Theory](Tradeoff_Theory.md) - Trade-off theory 的成本端
- **实证方法**：清算价值识别策略
- **整合框架**：[00_Theory_Integration](00_Theory_Integration.md) - 困境成本在最优杠杆中的角色

---

## 1. 财务困境成本的类型

### 1.1 定义

**Financial distress**：企业无法履行债务合约义务或履行成本很高的状态。

**财务困境成本**（costs of financial distress）：

$$
\begin{aligned}
V_L = V_U + PV(\text{tax shield}) - PV(\text{distress costs})
\end{aligned}
$$

---

### 1.2 直接成本 vs. 间接成本

**直接成本**（direct costs）：
- 法律费用（legal fees）
- 会计费用（accounting fees）
- 管理时间成本（management time）
- 破产程序成本（bankruptcy proceedings）

**间接成本**（indirect costs）：
- 客户流失（lost sales）
- 供应商要求现金支付（supplier terms tightening）
- 员工离职（employee turnover）
- 投资不足（underinvestment）
- 资产贱卖（fire sales）

**相对重要性**：

$$
\begin{aligned}
\text{Indirect costs} \gg \text{Direct costs}
\end{aligned}
$$

间接成本通常是直接成本的数倍。

---

## 2. 直接破产成本

### 2.1 Warner (1977)

**研究对象**：铁路公司破产案例（1933-1955）

**直接成本度量**：

$$
\begin{aligned}
\text{Direct cost} = \frac{\text{Legal + administrative fees}}{\text{Firm value at bankruptcy}}
\end{aligned}
$$

**主要发现**：

直接成本占企业价值比例：

$$
\begin{aligned}
\frac{\text{Direct cost}}{V} \approx 1\% \sim 5\%
\end{aligned}
$$

**规模效应**：

$$
\begin{aligned}
\text{firm size} \uparrow \Rightarrow \frac{\text{Direct cost}}{V} \downarrow
\end{aligned}
$$

小企业直接成本比例更高（规模不经济）。

---

### 2.2 Weiss (1990)

**研究对象**：Chapter 11 破产案例（1980-1986）

**直接成本分解**：

$$
\begin{aligned}
\text{Direct cost} = \text{Legal fees} + \text{Accounting fees} + \text{Other professional fees}
\end{aligned}
$$

**主要发现**：

平均直接成本：

$$
\begin{aligned}
\frac{\text{Direct cost}}{V} \approx 3.1\%
\end{aligned}
$$

**时间成本**：

破产程序平均持续时间：2.5 年

时间成本 > 直接费用成本。

---

### 2.3 Andrade and Kaplan (1998)

**研究对象**：高杠杆交易（HLT）后陷入财务困境的企业

**直接成本估算**：

$$
\begin{aligned}
\frac{\text{Direct cost}}{V} \approx 10\% \sim 20\%
\end{aligned}
$$

远高于 Warner (1977) 和 Weiss (1990) 的估计。

**原因**：
1. 包含更广泛的成本（不只是破产程序费用）
2. HLT 企业杠杆极高，困境更严重
3. 样本期包含经济衰退

---

## 3. 间接破产成本

### 3.1 客户-供应商渠道

**核心机制**：财务困境影响产品市场关系。

#### 客户流失

**耐用品行业**（Hortacsu et al. 2011）：

$$
\begin{aligned}
\text{financial distress} \uparrow
&\Rightarrow \text{warranty concern} \uparrow \\
&\Rightarrow \text{customer demand} \downarrow \\
&\Rightarrow \text{market share} \downarrow
\end{aligned}
$$

**数值例子**（汽车行业）：

通用汽车 2008-2009 破产危机：
- 市场份额从 22% 降至 18%
- 销量下降 30%
- 间接成本远超直接破产费用

#### 供应商关系恶化

$$
\begin{aligned}
\text{financial distress} \uparrow
&\Rightarrow \text{supplier concern about payment} \uparrow \\
&\Rightarrow \text{trade credit} \downarrow \\
&\Rightarrow \text{cash-on-delivery requirement} \uparrow \\
&\Rightarrow \text{working capital pressure} \uparrow
\end{aligned}
$$

---

### 3.2 劳动力市场渠道

**核心机制**：财务困境影响员工行为。

#### 员工离职

**Brown and Matsa (2016)**：

$$
\begin{aligned}
\text{financial distress} \uparrow
&\Rightarrow \text{job security concern} \uparrow \\
&\Rightarrow \text{employee turnover} \uparrow \\
&\Rightarrow \text{firm-specific human capital loss} \uparrow
\end{aligned}
$$

**实证证据**：
- 财务困境企业员工离职率提高 20-30%
- 高技能员工更易离职
- 人力资本损失占企业价值 5-10%

#### 工资溢价

**Baghai et al. (2021)**：

$$
\begin{aligned}
\text{bankruptcy risk} \uparrow
&\Rightarrow \text{compensating wage differential} \uparrow \\
&\Rightarrow \text{labor cost} \uparrow
\end{aligned}
$$

财务困境企业需支付更高工资吸引员工（补偿失业风险）。

---

### 3.3 投资不足

**核心机制**：Debt overhang 导致投资不足（见 Myers 1977）。

$$
\begin{aligned}
\text{financial distress} \uparrow
&\Rightarrow \text{debt overhang} \uparrow \\
&\Rightarrow \text{underinvestment} \uparrow \\
&\Rightarrow \text{firm value} \downarrow
\end{aligned}
$$

**实证证据**（Chava and Roberts 2008）：

违反债务契约（covenant violation）后：
- 资本支出下降 15-20%
- R&D 支出下降 10-15%
- 支持投资不足假说

---

### 3.4 资产贱卖（Fire Sales）

**核心机制**：财务困境迫使企业低价出售资产。

#### Pulvino (1998) 商用飞机交易

**研究设计**：比较财务困境企业与正常企业的飞机出售价格。

**主要发现**：

$$
\begin{aligned}
\text{Fire sale discount} \approx 14\%
\end{aligned}
$$

财务困境企业出售飞机价格比市场价低 14%。

**行业流动性效应**：

$$
\begin{aligned}
\text{industry distress} \uparrow
&\Rightarrow \text{potential buyers also distressed} \\
&\Rightarrow \text{fire sale discount} \uparrow \uparrow
\end{aligned}
$$

行业整体困境时，折价高达 30%。

---

#### Benmelech and Bergman (2011) 航空业

**核心机制**：资产流动性影响债务能力。

**Collateral channel**：

$$
\begin{aligned}
\text{asset liquidity} \uparrow
&\Rightarrow \text{liquidation value} \uparrow \\
&\Rightarrow \text{debt capacity} \uparrow
\end{aligned}
$$

**实证策略**：利用飞机型号作为资产流动性代理变量。

**主要发现**：
- 流动性高的飞机（如 Boeing 737）可支持更高杠杆
- 流动性低的飞机（如定制机型）债务能力低 20-30%

---

#### Benmelech (2007) 19世纪铁路

**研究对象**：美国 19 世纪铁路公司债务结构。

**核心机制**：

$$
\begin{aligned}
\text{asset redeployability} \uparrow
&\Rightarrow \text{liquidation value} \uparrow \\
&\Rightarrow \text{debt capacity} \uparrow
\end{aligned}
$$

**Redeployability 度量**：铁路线路是否连接主要城市（易于转售）。

**主要发现**：
- 可重新部署资产支持的债务利率低 50-100 bps
- 资产专用性（asset specificity）降低债务能力

---

## 4. 清算价值与债务契约

### 4.1 Benmelech, Garmaise and Moskowitz (2005)

**研究问题**：清算价值如何影响债务契约条款？

**识别策略**：利用分区法规（zoning regulation）作为清算价值外生冲击。

**核心机制**：

$$
\begin{aligned}
\text{zoning flexibility} \uparrow
&\Rightarrow \text{liquidation value} \uparrow \\
&\Rightarrow \text{collateral value} \uparrow \\
&\Rightarrow
\begin{cases}
\text{loan amount} \uparrow \\
\text{interest rate} \downarrow \\
\text{covenant strictness} \downarrow
\end{cases}
\end{aligned}
$$

---

### 4.2 实证设定

**分区法规作为工具变量**：

$$
\begin{aligned}
\text{Loan terms}_{it} = \alpha + \beta \text{Liquidation value}_{it} + \gamma X_{it} + \varepsilon_{it}
\end{aligned}
$$

其中 $\text{Liquidation value}$ 用分区灵活性（zoning flexibility）工具变量。

**分区灵活性度量**：
- 允许用途数量（number of permitted uses）
- 重新分区难度（rezoning difficulty）

---

### 4.3 主要发现

**发现 1**：清算价值与贷款规模正相关

$$
\begin{aligned}
\text{liquidation value} \uparrow 10\%
&\Rightarrow \text{loan amount} \uparrow 5\%
\end{aligned}
$$

**发现 2**：清算价值与利率负相关

$$
\begin{aligned}
\text{liquidation value} \uparrow 10\%
&\Rightarrow \text{interest rate} \downarrow 20 \text{ bps}
\end{aligned}
$$

**发现 3**：清算价值与契约严格性负相关

高清算价值资产需要更少契约保护。

---

## 5. 财务困境成本的决定因素

### 5.1 资产特征

**有形资产 vs. 无形资产**：

$$
\begin{aligned}
\text{tangibility} \uparrow
&\Rightarrow \text{liquidation value} \uparrow \\
&\Rightarrow \text{fire sale discount} \downarrow \\
&\Rightarrow \text{distress cost} \downarrow
\end{aligned}
$$

**资产专用性**（asset specificity）：

$$
\begin{aligned}
\text{asset specificity} \uparrow
&\Rightarrow \text{redeployability} \downarrow \\
&\Rightarrow \text{liquidation value} \downarrow \\
&\Rightarrow \text{distress cost} \uparrow
\end{aligned}
$$

---

### 5.2 行业特征

**耐用品 vs. 非耐用品**：

$$
\begin{aligned}
\text{durable goods}
&\Rightarrow \text{warranty concern} \uparrow \\
&\Rightarrow \text{customer loss} \uparrow \\
&\Rightarrow \text{indirect distress cost} \uparrow
\end{aligned}
$$

**行业流动性**：

$$
\begin{aligned}
\text{industry distress} \uparrow
&\Rightarrow \text{potential buyers distressed} \\
&\Rightarrow \text{fire sale discount} \uparrow
\end{aligned}
$$

---

### 5.3 人力资本密集度

**核心机制**：

$$
\begin{aligned}
\text{firm-specific human capital} \uparrow
&\Rightarrow \text{employee turnover cost} \uparrow \\
&\Rightarrow \text{distress cost} \uparrow \\
&\Rightarrow \text{optimal leverage} \downarrow
\end{aligned}
$$

**实证预测**：
- H1：高技能行业（科技、咨询）杠杆率更低
- H2：员工流动性高的行业杠杆率更低

---

## 6. 财务困境成本与资本结构

### 6.1 Trade-Off Theory

**最优杠杆一阶条件**：

$$
\begin{aligned}
\frac{\partial V_L}{\partial D} = \frac{\partial PV(\text{tax shield})}{\partial D} - \frac{\partial PV(\text{distress costs})}{\partial D} = 0
\end{aligned}
$$

**跨企业差异**：

$$
\begin{aligned}
\text{distress cost} \uparrow
&\Rightarrow \frac{\partial PV(\text{distress})}{\partial D} \uparrow \\
&\Rightarrow \text{optimal leverage} \downarrow
\end{aligned}
$$

---

### 6.2 实证预测

| 企业特征                     | 困境成本 | 预测杠杆 |
| ---------------------------- | -------- | -------- |
| Asset tangibility ↑          | ↓        | ↑        |
| Asset specificity ↑          | ↑        | ↓        |
| Durable goods producer       | ↑        | ↓        |
| Firm-specific human capital ↑| ↑        | ↓        |
| R&D intensity ↑              | ↑        | ↓        |
| Industry volatility ↑        | ↑        | ↓        |

---

### 6.3 实证证据

**Titman and Wessels (1988)**：

$$
\begin{aligned}
\text{Leverage}_i = \alpha + \beta_1 \text{Tangibility}_i + \beta_2 \text{Uniqueness}_i + \gamma X_i + \varepsilon_i
\end{aligned}
$$

**发现**：
- $\beta_1 > 0$：有形资产 ↑ → 杠杆 ↑
- $\beta_2 < 0$：产品独特性 ↑ → 杠杆 ↓（困境成本高）

**Rajan and Zingales (1995)**：

G7 国家数据支持：
- Tangibility 与杠杆正相关
- Profitability 与杠杆负相关（pecking order）

---

## 7. 政策实验设计

### 7.1 检验清算价值对债务能力的影响

**政策冲击**：分区法规改革提高土地用途灵活性

**DiD 设定**：

$$
\begin{aligned}
\text{Leverage}_{it}
&= \alpha + \beta(\text{High Real Estate}_i \times \text{Post Reform}_t) \\
&\quad + \gamma \text{High Real Estate}_i + \delta \text{Post Reform}_t + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta > 0$（清算价值 ↑ → 债务能力 ↑ → 杠杆 ↑）

**数据需求**：
- 企业杠杆率
- 房地产资产占比
- 分区法规变化（treated vs. control 地区）
- 控制变量：size, profitability, tangibility

---

### 7.2 检验破产法改革对困境成本的影响

**政策冲击**：破产法改革降低破产程序成本或缩短破产时间

**DiD 设定**：

$$
\begin{aligned}
\text{Leverage}_{it}
&= \alpha + \beta(\text{High Distress Risk}_i \times \text{Post Reform}_t) \\
&\quad + \gamma \text{High Distress Risk}_i + \delta \text{Post Reform}_t + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta > 0$（破产成本 ↓ → 困境成本 ↓ → 杠杆 ↑）

---

### 7.3 检验行业流动性对 Fire Sale 的影响

**政策冲击**：行业整体冲击（如 2008 金融危机）

**识别策略**：比较行业内困境企业与正常企业的资产出售价格

**回归设定**：

$$
\begin{aligned}
\text{Sale price}_{it}
&= \alpha + \beta_1 \text{Distressed seller}_i + \beta_2 (\text{Distressed seller}_i \times \text{Industry distress}_t) \\
&\quad + \gamma X_{it} + \varepsilon_{it}
\end{aligned}
$$

**预期**：
- $\beta_1 < 0$：困境企业折价出售
- $\beta_2 < 0$：行业困境时折价更大

**数据需求**：
- 资产交易价格（如飞机、房地产）
- 卖方财务状况
- 行业困境指标（破产率、股价表现）
- 资产特征控制变量

---

## 8. 考试样题

### 样题 1：直接 vs. 间接成本

**问题**：区分财务困境的直接成本与间接成本，并说明哪类成本更重要。

**答案框架**：

**直接成本**：法律费用、会计费用、破产程序成本

**间接成本**：客户流失、供应商关系恶化、员工离职、投资不足、资产贱卖

**相对重要性**：间接成本 >> 直接成本（通常是数倍）

**原因**：间接成本在破产前就开始发生，持续时间更长。

---

### 样题 2：Fire Sale 机制

**问题**：用 Pulvino (1998) 解释为什么财务困境企业资产出售价格更低，以及行业流动性如何影响折价。

**答案框架**：

**Fire sale discount**：

$$
\begin{aligned}
\text{financial distress} \uparrow
&\Rightarrow \text{forced sale} \\
&\Rightarrow \text{sale price} \downarrow 14\%
\end{aligned}
$$

**行业流动性效应**：

$$
\begin{aligned}
\text{industry distress} \uparrow
&\Rightarrow \text{potential buyers distressed} \\
&\Rightarrow \text{discount} \uparrow \text{ to } 30\%
\end{aligned}
$$

---

### 样题 3：清算价值与债务契约

**问题**：Benmelech et al. (2005) 如何用分区法规识别清算价值对债务契约的因果影响？

**答案框架**：

**识别策略**：分区灵活性作为清算价值的外生冲击

$$
\begin{aligned}
\text{zoning flexibility} \uparrow
&\Rightarrow \text{liquidation value} \uparrow \\
&\Rightarrow
\begin{cases}
\text{loan amount} \uparrow \\
\text{interest rate} \downarrow \\
\text{covenant strictness} \downarrow
\end{cases}
\end{aligned}
$$

**外生性**：分区法规由政府决定，不受企业融资需求影响。

---

### 样题 4：劳动力市场渠道

**问题**：Brown and Matsa (2016) 如何解释财务困境通过劳动力市场影响企业价值？

**答案框架**：

$$
\begin{aligned}
\text{financial distress} \uparrow
&\Rightarrow \text{job security concern} \uparrow \\
&\Rightarrow \text{employee turnover} \uparrow 20\text{-}30\% \\
&\Rightarrow \text{firm-specific human capital loss} \\
&\Rightarrow \text{firm value} \downarrow 5\text{-}10\%
\end{aligned}
$$

高技能员工更易离职，人力资本损失是重要间接成本。

---

### 样题 5：政策实验设计

**问题**：设计实验检验破产法改革对企业杠杆的影响。

**答案框架**：

**政策冲击**：破产法改革降低破产程序成本

**DiD 设定**：

$$
\begin{aligned}
\text{Leverage}_{it} = \alpha + \beta(\text{High Distress Risk}_i \times \text{Post}_t) + \text{controls} + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta > 0$（破产成本 ↓ → 困境成本 ↓ → 杠杆 ↑）

**平行趋势检验**：

$$
\begin{aligned}
\text{Leverage}_{it} = \alpha + \sum_{k \neq -1} \beta_k (\text{High Distress Risk}_i \times \mathbf{1}\{t=k\}) + \varepsilon_{it}
\end{aligned}
$$

检验 $\beta_k = 0$ for $k < 0$。

---

## 9. 理论整合

### 9.1 困境成本在资本结构理论中的角色

$$
\begin{aligned}
V_L = V_U + \underbrace{PV(\text{tax shield})}_{+} - \underbrace{PV(\text{distress costs})}_{-} - \underbrace{PV(\text{agency costs})}_{-}
\end{aligned}
$$

**最优杠杆**：平衡税盾收益与困境成本、代理成本。

---

### 9.2 跨企业差异的统一框架

| 企业特征                     | 税盾价值 | 困境成本 | 代理成本 | 净效应（杠杆） |
| ---------------------------- | -------- | -------- | -------- | -------------- |
| Profitability ↑              | ↑        | ↓        | ↓        | ？（实证：↓）  |
| Tangibility ↑                | 0        | ↓        | 0        | ↑              |
| Growth opportunities ↑       | 0        | ↑        | ↑        | ↓              |
| Firm size ↑                  | ↑        | ↓        | ↓        | ↑              |
| Industry volatility ↑        | 0        | ↑        | 0        | ↓              |

---

## 参考文献

**直接成本**：
- Warner (1977), *Bankruptcy Costs: Some Evidence*, JF
- Weiss (1990), *Bankruptcy Resolution: Direct Costs and Violation of Priority of Claims*, JFE
- Andrade and Kaplan (1998), *How Costly is Financial Distress?*, JF

**间接成本**：
- Pulvino (1998), *Do Asset Fire Sales Exist?*, JF
- Hortacsu et al. (2011), *Indirect Costs of Financial Distress in Durable Goods Industries*, RFS
- Brown and Matsa (2016), financial distress / labor market evidence
- Baghai et al. (2021), financial distress / labor market evidence

**清算价值**：
- Benmelech (2007), *Asset Salability and Debt Maturity*, RFS
- Benmelech, Garmaise and Moskowitz (2005), *Do Liquidation Values Affect Financial Contracts?*, QJE
- Benmelech and Bergman (2011), *Bankruptcy and the Collateral Channel*, JF

**资本结构实证**：
- Titman and Wessels (1988), *The Determinants of Capital Structure Choice*, JF
- Rajan and Zingales (1995), *What Do We Know about Capital Structure?*, JF
