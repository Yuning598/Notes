# 派息政策理论（股利与回购）

## 📌 相关理论链接

- **基准理论**：[MM_and_Tax_Theory](MM_and_Tax_Theory.md) - MM 股利无关性
- **互补理论**：[Agency_Theory](Agency_Theory.md) - 自由现金流与派息
- **互补理论**：[Pecking_Order_Theory](Pecking_Order_Theory.md) - 信号理论基础
- **对比**：[../SEO_Theory](../SEO_Theory.md) - 股权融资 vs. 回购
- **整合框架**：[00_Theory_Integration](00_Theory_Integration.md) - 派息决策树

---

## 1. MM Dividend Irrelevance (Miller and Modigliani 1961)

### 1.1 核心命题

**问题**：在完美市场下，股利政策不影响企业价值。

**MM Dividend Irrelevance Proposition**：

$$
\begin{aligned}
V_0 = \frac{D_1 + P_1}{1+r}
\end{aligned}
$$

其中：
- $V_0$：当前股价
- $D_1$：下期股利
- $P_1$：下期股价
- $r$：要求回报率

**关键推导**：

企业价值由投资决策决定，股利只是现金分配方式：

$$
\begin{aligned}
\text{Sources} &= \text{Uses} \\
\text{Operating CF} + \text{New equity} &= \text{Investment} + \text{Dividends}
\end{aligned}
$$

若增加股利 $\Delta D$，需增发股权 $\Delta E = \Delta D$，稀释现有股东价值恰好等于股利收益。

---

### 1.2 Homemade Dividends

**投资者自制股利**（homemade dividends）：

投资者可通过买卖股票复制任意股利政策：
- 想要更多现金：卖出部分股票
- 想要更少现金：用股利再投资

因此企业股利政策不创造价值。

---

### 1.3 完美市场假设

$$
\begin{aligned}
\text{MM dividend irrelevance holds}
&\Longleftarrow
\begin{cases}
\text{no taxes} \\
\text{no transaction costs} \\
\text{symmetric information} \\
\text{no agency costs} \\
\text{investment policy fixed}
\end{cases}
\end{aligned}
$$

一旦这些假设失效，股利政策开始影响企业价值。

---

## 2. Tax-Based Theories

### 2.1 Dividend Tax Disadvantage

**问题**：股利税率通常高于资本利得税率，股利存在税收劣势。

**投资者税后收益**：

股利：

$$
\begin{aligned}
\text{After-tax dividend} = D(1-t_d)
\end{aligned}
$$

资本利得：

$$
\begin{aligned}
\text{After-tax capital gain} = (P_1 - P_0)(1-t_g)
\end{aligned}
$$

若 $t_d > t_g$，股利税收劣势：

$$
\begin{aligned}
\text{Tax disadvantage} = D(t_d - t_g)
\end{aligned}
$$

---

### 2.2 Ex-Dividend Day Pricing

**理论预测**：除息日股价下跌应反映税收差异。

**无税情况**：

$$
\begin{aligned}
P_{\text{cum}} - P_{\text{ex}} = D
\end{aligned}
$$

**有税情况**：

$$
\begin{aligned}
P_{\text{cum}} - P_{\text{ex}} = D \times \frac{\overbrace{1-t_d}^{\text{股利税后}}}{\underbrace{1-t_g}_{\text{资本利得税后}}}
\end{aligned}
$$

若 $t_d > t_g$（股利税劣势）：

$$
\begin{aligned}
\frac{P_{\text{cum}} - P_{\text{ex}}}{D} < 1
\end{aligned}
$$

**实证证据**（Elton and Gruber 1970）：

$$
\begin{aligned}
\frac{P_{\text{cum}} - P_{\text{ex}}}{D} \approx 0.78 < 1
\end{aligned}
$$

支持股利税收劣势假说。

---

### 2.3 Tax Clientele Theory

**核心机制**：不同税率投资者偏好不同派息政策。

**投资者分类**：

| 投资者类型           | 税率特征         | 偏好派息政策 |
| -------------------- | ---------------- | ------------ |
| 高税率个人投资者     | $t_d$ 高         | 低股利       |
| 低税率个人投资者     | $t_d$ 低         | 高股利       |
| 免税机构（养老金）   | $t_d = t_g = 0$  | 无差异       |
| 公司投资者           | 股利部分免税     | 高股利       |

**均衡**：

$$
\begin{aligned}
\text{high-dividend firms}
&\Rightarrow \text{attract low-tax clientele} \\
\text{low-dividend firms}
&\Rightarrow \text{attract high-tax clientele}
\end{aligned}
$$

**实证预测**：
- H1：高股利企业机构持股比例更高
- H2：股利政策变化导致投资者结构调整

---

### 2.4 Tax Reform Evidence

**自然实验**：2003 年美国股利税改（JGTRRA）

税率变化：
- 股利税率：$t_d$ 从 38.6% 降至 15%
- 资本利得税率：$t_g$ 保持 15%

**实证预测**：

$$
\begin{aligned}
t_d \downarrow
&\Rightarrow \text{dividend tax disadvantage} \downarrow \\
&\Rightarrow \text{dividend payout} \uparrow \\
&\Rightarrow \text{dividend initiation} \uparrow
\end{aligned}
$$

**实证证据**（Chetty and Saez 2005）：
- 股利发放企业比例从 20% 升至 25%
- 股利金额增长 20%
- 支持税收影响派息政策

---

## 3. Signaling Theories

### 3.1 Bhattacharya (1979) Dividend Signaling

**核心机制**：股利传递关于未来现金流的信号。

**设定**：
- 管理层知道未来现金流 $X$，外部投资者不知道
- 派息 $D$，若 $D > X$ 需外部融资，成本为 $c$

**高现金流企业**：

$$
\begin{aligned}
\text{Choose } D_H \text{ such that } D_H < X_H
\end{aligned}
$$

无需外部融资，成本为 0。

**低现金流企业**：

若模仿 $D_H$：

$$
\begin{aligned}
\text{Cost} = c(D_H - X_L) > 0
\end{aligned}
$$

**分离均衡条件**：

$$
\begin{aligned}
c(D_H - X_L) > V_H - V_L
\end{aligned}
$$

外部融资成本足够高，低现金流企业不模仿。

---

### 3.2 Miller and Rock (1985) Implied Cash Flow

**核心机制**：股利揭示当前经营现金流。

**现金流恒等式**：

$$
\begin{aligned}
X(t) + E(t) = I(t) + D(t)
\end{aligned}
$$

其中：
- $X(t)$：经营现金流
- $E(t)$：外部融资
- $I(t)$：投资
- $D(t)$：股利

**市场推断**：

给定 $I(t)$，若 $D(t) \uparrow$：

$$
\begin{aligned}
X(t) = I(t) + D(t) - E(t) \uparrow
\end{aligned}
$$

市场推断现金流更高。

**实证预测**：

$$
\begin{aligned}
\text{dividend increase announcement} \Rightarrow CAR > 0
\end{aligned}
$$

---

### 3.3 Dividend Smoothing

**Lintner (1956) 模型**：

$$
\begin{aligned}
D_t - D_{t-1} = \alpha + \beta(D_t^* - D_{t-1}) + \varepsilon_t
\end{aligned}
$$

其中：
- $D_t^*$：目标股利（与盈利挂钩）
- $\beta$：调整速度（通常 $\beta \approx 0.3$）

**经济直觉**：管理层平滑股利，避免频繁调整。

**信号解释**（Fudenberg and Tirole 1995）：

$$
\begin{aligned}
\text{dividend smoothing}
&\Rightarrow \text{dividend cut is costly signal} \\
&\Rightarrow \text{credible commitment to future cash flows}
\end{aligned}
$$

削减股利传递强烈负面信号，管理层只在确信盈利持续下降时才削减。

---

### 3.4 实证证据

**股利公告效应**（Aharony and Swary 1980, Michaely et al. 1995）：

| 事件                 | 平均 CAR |
| -------------------- | -------- |
| Dividend increase    | +1%      |
| Dividend decrease    | -7%      |
| Dividend initiation  | +3%      |
| Dividend omission    | -7%      |

**非对称性**：削减股利的负面反应远大于增加股利的正面反应。

**长期漂移**：股利削减后长期弱势表现（支持信号理论）。

---

## 4. Agency-Based Theories

### 4.1 Easterbrook (1984) Monitoring Hypothesis

**核心机制**：股利迫使企业频繁进入资本市场融资，增加外部监督。

$$
\begin{aligned}
\text{dividend payout} \uparrow
&\Rightarrow \text{external financing need} \uparrow \\
&\Rightarrow \text{capital market monitoring} \uparrow \\
&\Rightarrow \text{agency cost} \downarrow
\end{aligned}
$$

**权衡**：

$$
\begin{aligned}
\text{Benefit: monitoring}
&\quad \text{vs.} \quad
\text{Cost: transaction costs + underinvestment}
\end{aligned}
$$

**实证预测**：
- H1：高代理成本企业（低管理层持股）派息率更高
- H2：高增长企业派息率更低（避免低效外部融资）

---

### 4.2 Jensen (1986) Free Cash Flow

**核心机制**：股利减少自由现金流，约束管理层过度投资。

$$
\begin{aligned}
\text{dividend} \uparrow
&\Rightarrow FCF \downarrow \\
&\Rightarrow \text{overinvestment} \downarrow \\
&\Rightarrow \text{firm value} \uparrow
\end{aligned}
$$

**跨企业差异**：

$$
\begin{aligned}
FCF \uparrow \text{ and growth opportunities} \downarrow
&\Rightarrow \text{overinvestment risk} \uparrow \\
&\Rightarrow \text{optimal payout} \uparrow
\end{aligned}
$$

**实证预测**：
- H1：成熟企业（低增长、高 FCF）派息率更高
- H2：派息增加公告对高 FCF 企业反应更正

---

### 4.3 La Porta et al. (2000) Agency and Legal Protection

**核心机制**：法律保护弱的国家，股利是少数股东从控股股东手中获取现金的重要途径。

**两种模型**：

**Outcome model**：

$$
\begin{aligned}
\text{legal protection} \uparrow
&\Rightarrow \text{minority shareholder power} \uparrow \\
&\Rightarrow \text{dividend payout} \uparrow
\end{aligned}
$$

**Substitute model**：

$$
\begin{aligned}
\text{legal protection} \downarrow
&\Rightarrow \text{reputation concern} \uparrow \\
&\Rightarrow \text{dividend as substitute for legal protection} \\
&\Rightarrow \text{dividend payout} \uparrow
\end{aligned}
$$

**实证证据**：支持 outcome model（法律保护强 → 派息率高）。

---

## 5. Dividend vs. Repurchase

### 5.1 Jagannathan et al. (2000) Financial Flexibility

**核心区别**：

| 维度                 | Dividend                     | Repurchase                   |
| -------------------- | ---------------------------- | ---------------------------- |
| 承诺性               | 强（smoothing）              | 弱（灵活）                   |
| 现金流性质           | 永久性（permanent）          | 临时性（temporary）          |
| 税收                 | 股利税                       | 资本利得税（通常更低）       |
| 信号强度             | 强（削减成本高）             | 弱（可随时停止）             |

**实证预测**：

$$
\begin{aligned}
\text{permanent cash flow} \uparrow
&\Rightarrow \text{dividend} \uparrow \\
\text{temporary cash flow} \uparrow
&\Rightarrow \text{repurchase} \uparrow
\end{aligned}
$$

---

### 5.2 Grullon and Michaely (2002) Maturity Hypothesis

**核心机制**：企业成熟度影响派息方式选择。

**生命周期理论**：

$$
\begin{aligned}
\text{firm maturity} \uparrow
&\Rightarrow
\begin{cases}
\text{growth opportunities} \downarrow \\
\text{free cash flow} \uparrow \\
\text{systematic risk} \downarrow
\end{cases}
\end{aligned}
$$

**派息政策变化**：

$$
\begin{aligned}
\text{maturity} \uparrow
&\Rightarrow \text{dividend initiation or increase} \\
&\Rightarrow \text{signal: transition to mature stage}
\end{aligned}
$$

**实证证据**：
- 股利增加后，企业 beta 下降
- 资本支出下降
- 支持成熟度假说

---

### 5.3 Ikenberry et al. (1995) Repurchase Undervaluation

**核心机制**：回购传递低估信号。

**长期表现**：

回购公告后 4 年 buy-and-hold abnormal return：

$$
\begin{aligned}
BHAR_{4\text{-year}} \approx 12\%
\end{aligned}
$$

**跨企业差异**：

| 企业特征         | BHAR  | 解释                         |
| ---------------- | ----- | ---------------------------- |
| Value firms      | +45%  | 低估更严重                   |
| Growth firms     | -6%   | 可能是管理层过度自信         |
| Small firms      | +20%  | 信息不对称更严重             |

**结论**：回购确实传递低估信号，市场反应不足。

---

### 5.4 Payout Substitution

**Grullon and Michaely (2002) 替代假说**：

$$
\begin{aligned}
\text{repurchase} \uparrow
&\Rightarrow \text{dividend} \downarrow
\end{aligned}
$$

**实证证据**：
- 1980s-2000s：回购占总派息比例从 5% 升至 50%
- 股利发放企业比例从 67% 降至 21%（Fama and French 2001）

**原因**：
1. 税收优势（资本利得税 < 股利税）
2. 灵活性（无承诺压力）
3. 管理层股权激励（回购提升 EPS）

---

## 6. Disappearing Dividends

### 6.1 Fama and French (2001)

**现象**：1978-1999 年，股利发放企业比例从 67% 降至 21%。

**两种解释**：

**Changing characteristics**：

$$
\begin{aligned}
\text{new listings} \uparrow
&\Rightarrow \text{small, unprofitable, high-growth firms} \uparrow \\
&\Rightarrow \text{propensity to pay} \text{ unchanged, but composition changed}
\end{aligned}
$$

**Lower propensity to pay**：

$$
\begin{aligned}
\text{propensity to pay} \downarrow
&\Rightarrow \text{even profitable firms less likely to pay}
\end{aligned}
$$

**实证发现**：两种效应各占一半。

---

### 6.2 DeAngelo et al. (2004) Dividend Concentration

**核心发现**：股利集中在少数大企业。

**集中度**：
- Top 25 企业占总股利 50%
- Top 100 企业占总股利 75%

**解释**：

$$
\begin{aligned}
\text{earnings concentration} \uparrow
&\Rightarrow \text{dividend concentration} \uparrow
\end{aligned}
$$

大企业盈利能力更强、更稳定，更有能力维持股利。

---

### 6.3 DeAngelo et al. (2006) Life-Cycle Theory

**核心机制**：企业生命周期决定派息政策。

**Earned/Contributed capital mix**：

$$
\begin{aligned}
\frac{RE}{TE} = \frac{\text{Retained earnings}}{\text{Total equity}}
\end{aligned}
$$

**实证预测**：

$$
\begin{aligned}
\frac{RE}{TE} \uparrow
&\Rightarrow \text{mature stage} \\
&\Rightarrow \Pr(\text{dividend payout}) \uparrow
\end{aligned}
$$

**实证证据**：
- $RE/TE$ 是派息倾向最强预测变量
- 控制 $RE/TE$ 后，profitability、size 解释力大幅下降

---

## 7. 理论整合与实证预测

### 7.1 理论对比

| 理论                 | 核心机制                     | 派息政策预测                 | 公告效应     |
| -------------------- | ---------------------------- | ---------------------------- | ------------ |
| MM Irrelevance       | 完美市场                     | 无关                         | 0            |
| Tax disadvantage     | $t_d > t_g$                  | 低股利优                     | -            |
| Tax clientele        | 投资者异质性                 | 匹配税率偏好                 | 0            |
| Signaling            | 信息不对称                   | 高质量 → 高股利              | +            |
| Agency (monitoring)  | 外部监督                     | 高代理成本 → 高股利          | +            |
| Agency (FCF)         | 约束过度投资                 | 高 FCF → 高股利              | +            |
| Life-cycle           | 企业成熟度                   | 成熟 → 高股利                | +            |

---

### 7.2 跨企业差异预测

| 企业特征                     | 派息倾向 | 理论机制                                     |
| ---------------------------- | -------- | -------------------------------------------- |
| Profitability ↑              | ↑        | 现金流充足（life-cycle）                     |
| Growth opportunities ↑       | ↓        | 保留现金投资（agency, life-cycle）           |
| Free cash flow ↑             | ↑        | 约束过度投资（Jensen 1986）                  |
| Firm size ↑                  | ↑        | 成熟度高、信息不对称低                       |
| Earned/contributed capital ↑ | ↑        | 生命周期成熟（DeAngelo et al. 2006）         |
| Institutional ownership ↑    | ↑        | 监督需求（Easterbrook 1984）                 |

---

### 7.3 政策实验设计

#### 实验 1：检验税收对派息政策的影响

**政策冲击**：股利税改（如 2003 JGTRRA）

**DiD 设定**：

$$
\begin{aligned}
\text{Dividend payout}_{it}
&= \alpha + \beta(\text{High Tax Sensitivity}_i \times \text{Post}_t) \\
&\quad + \gamma \text{High Tax Sensitivity}_i + \delta \text{Post}_t + \varepsilon_{it}
\end{aligned}
$$

其中 $\text{High Tax Sensitivity}_i$ 是个人投资者持股比例高的企业。

**预期**：$\beta > 0$（税率 ↓ → 股利税劣势 ↓ → 派息 ↑）

---

#### 实验 2：检验 Free Cash Flow Theory

**政策冲击**：监管要求高 FCF 企业强制派息

**DiD 设定**：

$$
\begin{aligned}
\text{Overinvestment}_{it}
&= \alpha + \beta(\text{High FCF}_i \times \text{Post}_t) \\
&\quad + \gamma \text{High FCF}_i + \delta \text{Post}_t + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta < 0$（强制派息 → FCF ↓ → 过度投资 ↓）

---

#### 实验 3：检验信号理论

**政策冲击**：强制披露改革降低信息不对称

**DiD 设定**：

$$
\begin{aligned}
CAR_i^{\text{dividend increase}}
&= \alpha + \beta(\text{Opaque}_i \times \text{Post}_t) \\
&\quad + \gamma \text{Opaque}_i + \delta \text{Post}_t + \varepsilon_i
\end{aligned}
$$

**预期**：$\beta < 0$（披露 ↑ → 信息不对称 ↓ → 信号价值 ↓ → 公告效应 ↓）

---

## 8. 考试样题

### 样题 1：MM Dividend Irrelevance

**问题**：推导 MM dividend irrelevance，并说明什么假设失效时股利政策开始影响企业价值。

**答案框架**：

$$
\begin{aligned}
V_0 = \frac{D_1 + P_1}{1+r}
\end{aligned}
$$

增加股利 $\Delta D$ 需增发股权 $\Delta E = \Delta D$，稀释价值 = 股利收益。

**假设失效**：税收、信息不对称、代理成本 → 股利政策开始影响价值。

---

### 样题 2：Ex-Dividend Day Pricing

**问题**：推导有税情况下的除息日股价变化，并解释 Elton-Gruber 发现。

**答案框架**：

$$
\begin{aligned}
P_{\text{cum}} - P_{\text{ex}} = D \times \frac{1-t_d}{1-t_g}
\end{aligned}
$$

若 $t_d > t_g$：

$$
\begin{aligned}
\frac{P_{\text{cum}} - P_{\text{ex}}}{D} < 1
\end{aligned}
$$

Elton-Gruber (1970) 发现比率 ≈ 0.78，支持股利税劣势。

---

### 样题 3：Dividend Signaling

**问题**：Bhattacharya (1979) 如何用外部融资成本实现分离均衡？

**答案框架**：

高现金流企业选择 $D_H < X_H$，无外部融资成本。

低现金流企业若模仿：成本 = $c(D_H - X_L)$。

分离均衡条件：$c(D_H - X_L) > V_H - V_L$。

---

### 样题 4：Dividend vs. Repurchase

**问题**：Jagannathan et al. (2000) 如何区分股利与回购的使用场景？

**答案框架**：

| 现金流性质 | 派息方式   | 原因                         |
| ---------- | ---------- | ---------------------------- |
| Permanent  | Dividend   | 承诺性强，传递持续信号       |
| Temporary  | Repurchase | 灵活性高，无承诺压力         |

---

### 样题 5：Life-Cycle Theory

**问题**：DeAngelo et al. (2006) 如何用 earned/contributed capital mix 预测派息倾向？

**答案框架**：

$$
\begin{aligned}
\frac{RE}{TE} \uparrow
&\Rightarrow \text{累积盈利多，成熟度高} \\
&\Rightarrow \text{growth opportunities} \downarrow \\
&\Rightarrow \Pr(\text{dividend}) \uparrow
\end{aligned}
$$

$RE/TE$ 是派息倾向最强预测变量。

---

## 参考文献

**核心理论**：
- Miller and Modigliani (1961), *Dividend Policy, Growth, and the Valuation of Shares*, Journal of Business
- Bhattacharya (1979), *Imperfect Information, Dividend Policy, and "The Bird in the Hand" Fallacy*, Bell Journal
- Miller and Rock (1985), *Dividend Policy under Asymmetric Information*, JF
- Easterbrook (1984), *Two Agency-Cost Explanations of Dividends*, AER
- Jensen (1986), *Agency Costs of Free Cash Flow, Corporate Finance, and Takeovers*, AER

**实证证据**：
- Elton and Gruber (1970), *Marginal Stockholder Tax Rates and the Clientele Effect*, RES
- Aharony and Swary (1980), *Quarterly Dividend and Earnings Announcements and Stockholders' Returns*, JF
- Michaely, Thaler and Womack (1995), *Price Reactions to Dividend Initiations and Omissions*, JF
- Jagannathan, Stephens and Weisbach (2000), *Financial Flexibility and the Choice between Dividends and Stock Repurchases*, JFE
- Ikenberry, Lakonishok and Vermaelen (1995), *Market Underreaction to Open Market Share Repurchases*, JFE
- Fama and French (2001), *Disappearing Dividends*, JFE
- DeAngelo, DeAngelo and Skinner (2004), *Are Dividends Disappearing?*, JFE
- DeAngelo, DeAngelo and Stulz (2006), *Dividend Policy and the Earned/Contributed Capital Mix*, JFE
- Grullon and Michaely (2002), *Dividends, Share Repurchases, and the Substitution Hypothesis*, JF
- La Porta et al. (2000), *Agency Problems and Dividend Policies around the World*, JF
