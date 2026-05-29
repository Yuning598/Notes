# 代理理论与资本结构

## 📌 相关理论链接

- **基准理论**：[[MM_and_Tax_Theory]] - MM 完美市场假设
- **互补理论**：[[Financial_Distress_Theory]] - 成长期权与困境成本
- **对比理论**：[[Pecking_Order_Theory]] - 不同的杠杆预测
- **应用**：[[Payout_Policy_Theory]] - 自由现金流与派息
- **整合框架**：[[00_Theory_Integration]] - 代理成本在 trade-off 中的角色

---

## 1. Jensen and Meckling (1976)

### 1.1 核心贡献

**问题**：所有权与控制权分离导致代理成本（agency costs），影响最优资本结构。

**两类代理冲突**：
1. **Manager-Shareholder conflicts**：管理层与股东利益不一致
2. **Shareholder-Debtholder conflicts**：股东与债权人利益不一致

---

### 1.2 Manager-Shareholder Conflicts

#### 代理成本来源

管理层持股比例 $\alpha < 1$ 时，管理层承担全部努力成本，但只获得 $\alpha$ 比例收益：

$$
\begin{aligned}
\text{Manager's utility} = \alpha \times \text{Firm value} + (1-\alpha) \times \text{Private benefits}
\end{aligned}
$$

**私人收益**（private benefits）：
- 在职消费（perquisites）：豪华办公室、公司飞机
- 帝国建设（empire building）：过度扩张
- 规避风险（risk avoidance）：放弃高风险高回报项目

#### 股权融资的代理成本

**机制**：

$$
\begin{aligned}
\text{equity issuance} \uparrow
&\Rightarrow \text{managerial ownership} \downarrow \\
&\Rightarrow \text{incentive alignment} \downarrow \\
&\Rightarrow \text{private benefits} \uparrow \\
&\Rightarrow \text{firm value} \downarrow
\end{aligned}
$$

**数值例子**：

初始状态：管理层持股 100%，企业价值 $V_0 = 100$

发行股权后：管理层持股 50%
- 管理层可获得私人收益 $B = 20$（如在职消费）
- 企业价值下降至 $V_1 = 100 - 20 = 80$
- 管理层总效用：$0.5 \times 80 + 20 = 60 > 0.5 \times 100 = 50$

外部投资者预期到这一点，只愿支付：

$$
\begin{aligned}
P = 0.5 \times 80 = 40
\end{aligned}
$$

管理层承担全部代理成本：$100 - 40 - 40 = 20$。

#### 债务融资的约束作用

**机制**：

$$
\begin{aligned}
\text{debt} \uparrow
&\Rightarrow \text{fixed payment obligation} \uparrow \\
&\Rightarrow \text{free cash flow} \downarrow \\
&\Rightarrow \text{private benefits} \downarrow \\
&\Rightarrow \text{agency cost of equity} \downarrow
\end{aligned}
$$

债务承诺定期支付利息，减少管理层可支配现金流，降低在职消费和过度投资。

---

### 1.3 Shareholder-Debtholder Conflicts

#### 资产替代问题（Asset Substitution）

**机制**：有限责任使股东有动机投资高风险项目。

**数值例子**：

企业有债务 $D = 80$，面临两个项目选择：

**安全项目**：
- 好状态（概率 0.8）：$V = 100$
- 坏状态（概率 0.2）：$V = 60$
- 期望价值：$E[V] = 0.8 \times 100 + 0.2 \times 60 = 92$

**风险项目**：
- 好状态（概率 0.5）：$V = 140$
- 坏状态（概率 0.5）：$V = 20$
- 期望价值：$E[V] = 0.5 \times 140 + 0.5 \times 20 = 80$

**股东收益**：

安全项目：

$$
\begin{aligned}
E[\text{Equity}] = 0.8 \times \underbrace{(100-80)}_{=20} + 0.2 \times \underbrace{0}_{\text{破产}} = 16
\end{aligned}
$$

风险项目：

$$
\begin{aligned}
E[\text{Equity}] = 0.5 \times \underbrace{(140-80)}_{=60} + 0.5 \times \underbrace{0}_{\text{破产}} = 30
\end{aligned}
$$

**结论**：股东偏好风险项目（$30 > 16$），尽管企业价值更低（$80 < 92$）。

**债权人损失**：

安全项目：$E[\text{Debt}] = 0.8 \times 80 + 0.2 \times 60 = 76$

风险项目：$E[\text{Debt}] = 0.5 \times 80 + 0.5 \times 20 = 50$

债权人损失：$\underbrace{76 - 50}_{=26} = \text{财富转移}$

#### 投资不足问题（Underinvestment / Debt Overhang）

见 Myers (1977) 部分。

---

### 1.4 最优资本结构

**权衡**：

$$
\begin{aligned}
V_L = V_U + PV(\text{tax shield}) - PV(\text{agency costs})
\end{aligned}
$$

其中：

$$
\begin{aligned}
PV(\text{agency costs}) = PV(\text{equity agency cost}) + PV(\text{debt agency cost})
\end{aligned}
$$

**最优杠杆一阶条件**：

$$
\begin{aligned}
\frac{\partial V_L}{\partial D} = \frac{\partial PV(\text{tax shield})}{\partial D} - \frac{\partial PV(\text{equity agency})}{\partial D} - \frac{\partial PV(\text{debt agency})}{\partial D} = 0
\end{aligned}
$$

**经济直觉**：
- 债务 ↑ → 股权代理成本 ↓（约束管理层）
- 债务 ↑ → 债务代理成本 ↑（资产替代、投资不足）
- 最优杠杆平衡两类代理成本

---

## 2. Jensen (1986) Free Cash Flow Theory

### 2.1 核心机制

**问题**：自由现金流（free cash flow）使管理层过度投资或浪费资源。

**Free cash flow 定义**：

$$
\begin{aligned}
FCF = \text{Operating cash flow} - \text{Investment in positive NPV projects}
\end{aligned}
$$

**代理问题**：

$$
\begin{aligned}
FCF \uparrow
&\Rightarrow \text{managerial discretion} \uparrow \\
&\Rightarrow \text{overinvestment / empire building} \uparrow \\
&\Rightarrow \text{firm value} \downarrow
\end{aligned}
$$

---

### 2.2 债务的约束作用

**机制**：

$$
\begin{aligned}
\text{debt} \uparrow
&\Rightarrow \text{interest payment obligation} \uparrow \\
&\Rightarrow FCF \downarrow \\
&\Rightarrow \text{overinvestment} \downarrow \\
&\Rightarrow \text{firm value} \uparrow
\end{aligned}
$$

**债务作为承诺机制**（commitment device）：
- 债务强制派息（利息支付）
- 违约威胁约束管理层
- 债权人监督降低代理成本

---

### 2.3 实证预测

**跨企业差异**：

$$
\begin{aligned}
\text{FCF} \uparrow \text{ and growth opportunities} \downarrow
&\Rightarrow \text{overinvestment risk} \uparrow \\
&\Rightarrow \text{optimal leverage} \uparrow
\end{aligned}
$$

**行业特征**：
- **成熟行业**（石油、烟草）：高 FCF、低增长 → 高杠杆有利
- **成长行业**（科技、生物医药）：低 FCF、高增长 → 低杠杆有利

**事件研究预测**：
- H1：高 FCF 企业增加杠杆 → 正向市场反应
- H2：低 FCF 企业增加杠杆 → 负向市场反应

---

### 2.4 LBO 与 Free Cash Flow

**Leveraged Buyout (LBO) 机制**：

$$
\begin{aligned}
\text{LBO}
&\Rightarrow \text{leverage} \uparrow \uparrow \\
&\Rightarrow FCF \downarrow \downarrow \\
&\Rightarrow \text{operational efficiency} \uparrow \\
&\Rightarrow \text{firm value} \uparrow
\end{aligned}
$$

**实证证据**：
- LBO 后企业削减资本支出、剥离非核心业务
- 运营现金流提升
- 支持 free cash flow theory

---

## 3. Myers (1977) Debt Overhang

### 3.1 核心机制

**问题**：现有债务使股东投资 NPV>0 项目时，收益部分归债权人，导致投资不足（underinvestment）。

**设定**：
- 企业有现有债务 $D$，到期日 $T$
- $t < T$ 时出现新投资机会，需投资 $I$，产生现金流 $C$
- NPV = $C - I > 0$

**股东决策**：

投资后企业价值：$V + C$

股东收益：

$$
\begin{aligned}
E_{\text{invest}} = \max(V + C - D, 0) - I
\end{aligned}
$$

不投资股东收益：

$$
\begin{aligned}
E_{\text{no invest}} = \max(V - D, 0)
\end{aligned}
$$

**投资不足条件**：

$$
\begin{aligned}
E_{\text{invest}} < E_{\text{no invest}}
\end{aligned}
$$

即：

$$
\begin{aligned}
\max(V + C - D, 0) - I < \max(V - D, 0)
\end{aligned}
$$

---

### 3.2 数值例子

**参数**：
- 现有债务：$D = 100$
- 当前企业价值：$V = 80$（财务困境）
- 新项目：$I = 20$, $C = 30$, NPV = $10$

**股东收益**：

投资：

$$
\begin{aligned}
E_{\text{invest}} = \max(80 + 30 - 100, 0) - 20 = 10 - 20 = -10
\end{aligned}
$$

不投资：

$$
\begin{aligned}
E_{\text{no invest}} = \max(80 - 100, 0) = 0
\end{aligned}
$$

**结论**：股东拒绝投资（$-10 < 0$），尽管 NPV = $10 > 0$。

**债权人收益**：

投资：$\min(110, 100) = 100$

不投资：$\min(80, 100) = 80$

债权人获益 $20$，但无法强制股东投资。

---

### 3.3 Debt Overhang 的严重性

**关键因素**：

$$
\begin{aligned}
\text{Debt overhang severity}
&\propto \frac{D - V}{C} \\
&= \frac{\text{debt shortfall}}{\text{project cash flow}}
\end{aligned}
$$

- $(D - V) \uparrow$：财务困境越严重，投资不足越严重
- $C \uparrow$：项目现金流越大，债权人分享越多，投资不足越严重

**实证预测**：
- H1：$\text{leverage} \uparrow \Rightarrow \text{investment} \downarrow$（尤其在财务困境时）
- H2：$\text{growth opportunities} \uparrow \Rightarrow \text{optimal leverage} \downarrow$（避免投资不足）

---

### 3.4 解决方案

**方案 1：债务重组**

$$
\begin{aligned}
\text{debt forgiveness or extension}
&\Rightarrow D \downarrow \text{ or maturity} \uparrow \\
&\Rightarrow \text{debt overhang} \downarrow \\
&\Rightarrow \text{investment} \uparrow
\end{aligned}
$$

**方案 2：优先股权融资**

发行优先于现有债务的新债（senior debt）或股权，确保新投资者获得足够回报。

**方案 3：契约条款**

债务契约限制分红、资产出售，保护债权人利益，降低事后代理成本。

---

## 4. Smith and Watts (1992)

### 4.1 核心贡献

**问题**：成长期权（growth options）多的企业面临更严重的代理问题，应降低杠杆。

**Investment Opportunity Set (IOS)**：

$$
\begin{aligned}
\text{Firm value} = \text{Assets in place} + \text{Growth options}
\end{aligned}
$$

---

### 4.2 成长期权与代理成本

**机制**：

$$
\begin{aligned}
\text{growth options} \uparrow
&\Rightarrow \text{asset substitution risk} \uparrow \\
&\Rightarrow \text{underinvestment risk} \uparrow \\
&\Rightarrow \text{debt agency cost} \uparrow \\
&\Rightarrow \text{optimal leverage} \downarrow
\end{aligned}
$$

**原因**：
1. **资产替代**：成长期权价值对风险敏感，股东更易通过高风险项目转移价值
2. **投资不足**：成长期权需要持续投资，债务悬置使股东放弃投资
3. **监督困难**：成长期权难以观察和估值，债权人监督成本高

---

### 4.3 实证预测

**跨企业差异**：

| 企业特征                | IOS proxy                  | 预测杠杆 |
| ----------------------- | -------------------------- | -------- |
| 成长期权多              | M/B ↑, R&D/Sales ↑         | 低       |
| 有形资产多              | PPE/Assets ↑               | 高       |
| 成熟企业                | Dividend payout ↑          | 高       |

**融资政策预测**：

$$
\begin{aligned}
\text{M/B} \uparrow
&\Rightarrow \text{leverage} \downarrow \\
&\Rightarrow \text{dividend payout} \downarrow \\
&\Rightarrow \text{equity-based compensation} \uparrow
\end{aligned}
$$

---

### 4.4 实证证据

**发现 1**：M/B 与杠杆显著负相关

$$
\begin{aligned}
\text{Leverage}_i = \alpha - \beta \times \text{M/B}_i + \gamma X_i + \varepsilon_i
\end{aligned}
$$

$\beta > 0$ 且显著。

**发现 2**：高 M/B 企业更多使用股权激励

成长期权多的企业用股权激励对齐管理层与股东利益。

**发现 3**：高 M/B 企业分红率更低

保留现金用于未来投资，避免债务悬置。

---

## 5. Stulz (1990)

### 5.1 核心贡献

**问题**：管理层自由裁量权（managerial discretion）既有成本也有收益，最优融资政策平衡两者。

**权衡**：

$$
\begin{aligned}
\text{managerial discretion} \uparrow
&\Rightarrow
\begin{cases}
\text{Benefit: flexibility to invest in good projects} \\
\text{Cost: overinvestment in bad projects}
\end{cases}
\end{aligned}
$$

---

### 5.2 最优现金持有与债务

**现金持有的权衡**：

$$
\begin{aligned}
\text{cash holdings} \uparrow
&\Rightarrow
\begin{cases}
\text{Benefit: avoid underinvestment} \\
\text{Cost: overinvestment risk}
\end{cases}
\end{aligned}
$$

**债务的权衡**：

$$
\begin{aligned}
\text{debt} \uparrow
&\Rightarrow
\begin{cases}
\text{Benefit: reduce overinvestment} \\
\text{Cost: increase underinvestment}
\end{cases}
\end{aligned}
$$

---

### 5.3 最优融资政策

**一阶条件**：

$$
\begin{aligned}
\frac{\partial V}{\partial D} = \underbrace{\frac{\partial PV(\text{tax shield})}{\partial D}}_{+} - \underbrace{\frac{\partial PV(\text{overinvestment})}{\partial D}}_{-} - \underbrace{\frac{\partial PV(\text{underinvestment})}{\partial D}}_{-} = 0
\end{aligned}
$$

**跨企业差异**：

$$
\begin{aligned}
\text{good investment opportunities} \uparrow
&\Rightarrow \frac{\partial PV(\text{underinvestment})}{\partial D} \uparrow \\
&\Rightarrow \text{optimal leverage} \downarrow
\end{aligned}
$$

$$
\begin{aligned}
\text{poor investment opportunities + high FCF} \uparrow
&\Rightarrow \frac{\partial PV(\text{overinvestment})}{\partial D} \uparrow \\
&\Rightarrow \text{optimal leverage} \uparrow
\end{aligned}
$$

---

## 6. 理论整合与实证预测

### 6.1 代理成本的类型

| 代理冲突                  | 核心机制                                 | 债务的作用       | 最优杠杆预测                     |
| ------------------------- | ---------------------------------------- | ---------------- | -------------------------------- |
| Manager-Shareholder       | 在职消费、帝国建设                       | 约束自由现金流   | FCF ↑ → Leverage ↑               |
| Shareholder-Debtholder    | 资产替代、投资不足                       | 加剧代理冲突     | Growth options ↑ → Leverage ↓    |

---

### 6.2 跨企业差异预测

| 企业特征                     | 对杠杆的影响 | 理论机制                                     |
| ---------------------------- | ------------ | -------------------------------------------- |
| Free cash flow ↑             | Leverage ↑   | 债务约束过度投资（Jensen 1986）              |
| Growth opportunities ↑       | Leverage ↓   | 避免投资不足（Myers 1977, Smith-Watts 1992） |
| Asset tangibility ↑          | Leverage ↑   | 降低资产替代风险                             |
| Profitability ↑              | Leverage ↓   | 内部资金充足，避免股权代理成本               |
| Managerial ownership ↑       | Leverage ↓   | 激励对齐，债务约束作用减弱                   |

---

### 6.3 政策实验设计

#### 实验 1：检验 Free Cash Flow Theory

**政策冲击**：监管要求高 FCF 企业强制分红或回购

**DiD 设定**：

$$
\begin{aligned}
\text{Leverage}_{it}
&= \alpha + \beta(\text{High FCF}_i \times \text{Post}_t) \\
&\quad + \gamma \text{High FCF}_i + \delta \text{Post}_t + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta < 0$（强制派息降低 FCF → 债务约束作用减弱 → 杠杆 ↓）

---

#### 实验 2：检验 Debt Overhang

**政策冲击**：破产法改革降低债务重组成本

**DiD 设定**：

$$
\begin{aligned}
\text{Investment}_{it}
&= \alpha + \beta(\text{High Leverage}_i \times \text{Post Reform}_t) \\
&\quad + \gamma \text{High Leverage}_i + \delta \text{Post Reform}_t + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta > 0$（重组成本 ↓ → debt overhang ↓ → 投资 ↑）

---

#### 实验 3：检验成长期权与杠杆

**政策冲击**：R&D 税收抵免提高成长期权价值

**DiD 设定**：

$$
\begin{aligned}
\text{Leverage}_{it}
&= \alpha + \beta(\text{High R&D}_i \times \text{Tax Credit}_t) \\
&\quad + \gamma \text{High R&D}_i + \delta \text{Tax Credit}_t + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta < 0$（成长期权价值 ↑ → 投资不足风险 ↑ → 杠杆 ↓）

---

## 7. 考试样题

### 样题 1：资产替代问题

**问题**：用数值例子说明资产替代问题，并解释为什么有限责任导致股东偏好高风险项目。

**答案框架**：

企业有债务 $D = 80$，两个项目：

**安全项目**：$E[V] = 92$, 股东收益 = $16$

**风险项目**：$E[V] = 80$, 股东收益 = $30$

股东偏好风险项目因为有限责任：下行风险由债权人承担，上行收益归股东。

---

### 样题 2：Debt Overhang

**问题**：推导 debt overhang 条件，并说明什么因素加剧投资不足。

**答案框架**：

投资不足条件：

$$
\begin{aligned}
\max(V + C - D, 0) - I < \max(V - D, 0)
\end{aligned}
$$

加剧因素：
1. $(D - V) \uparrow$：财务困境越严重
2. $C \uparrow$：项目现金流越大，债权人分享越多

---

### 样题 3：Free Cash Flow Theory

**问题**：Jensen (1986) 如何解释为什么成熟行业企业应该高杠杆？

**答案框架**：

$$
\begin{aligned}
\text{mature industry}
&\Rightarrow \text{high FCF + low growth} \\
&\Rightarrow \text{overinvestment risk} \uparrow \\
&\Rightarrow \text{debt as commitment device} \\
&\Rightarrow \text{optimal leverage} \uparrow
\end{aligned}
$$

债务强制派息，约束管理层过度投资。

---

### 样题 4：成长期权与杠杆

**问题**：Smith and Watts (1992) 为什么预测高 M/B 企业杠杆率更低？

**答案框架**：

$$
\begin{aligned}
\text{M/B} \uparrow
&\Rightarrow \text{growth options} \uparrow \\
&\Rightarrow \text{asset substitution + underinvestment risk} \uparrow \\
&\Rightarrow \text{debt agency cost} \uparrow \\
&\Rightarrow \text{optimal leverage} \downarrow
\end{aligned}
$$

---

### 样题 5：政策实验设计

**问题**：设计一个实验检验 free cash flow theory。

**答案框架**：

**政策冲击**：监管要求高 FCF 企业强制分红

**DiD 设定**：

$$
\begin{aligned}
\text{Overinvestment}_{it} = \alpha + \beta(\text{High FCF}_i \times \text{Post}_t) + \text{controls} + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta < 0$（强制分红 → FCF ↓ → 过度投资 ↓）

**数据需求**：
- Overinvestment proxy：资本支出超过行业中位数
- FCF：Operating cash flow - Capex - Dividends
- 控制变量：Q, size, profitability

---

## 参考文献

**核心理论**：
- Jensen and Meckling (1976), *Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure*, JFE
- Jensen (1986), *Agency Costs of Free Cash Flow, Corporate Finance, and Takeovers*, AER
- Myers (1977), *Determinants of Corporate Borrowing*, JFE
- Smith and Watts (1992), *The Investment Opportunity Set and Corporate Financing, Dividend, and Compensation Policies*, JFE
- Stulz (1990), *Managerial Discretion and Optimal Financing Policies*, JFE
