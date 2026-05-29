# Pecking Order 与信息不对称理论

## 📌 相关理论链接

- **基准理论**：[[MM_and_Tax_Theory]] - MM 对称信息假设
- **对比理论**：[[MM_and_Tax_Theory]] - 盈利与杠杆关系相反
- **互补理论**：[[Agency_Theory]] - 投资不足与 debt overhang
- **应用**：[[../SEO_Theory]] - 股权融资的逆向选择
- **应用**：[[Payout_Policy_Theory]] - 回购信号理论
- **整合框架**：[[00_Theory_Integration]] - Pecking Order vs. Trade-Off

---

## 1. Myers and Majluf (1984)

### 1.1 核心问题

**问题**：信息不对称下，管理层比外部投资者更清楚公司真实价值，导致股权融资被视为高估信号。

**设定**：
- 企业有新投资机会，需要外部融资 $I$
- 管理层知道企业真实价值 $V$，外部投资者只知道 $E[V]$
- 管理层代表现有股东利益（不稀释现有股东价值）

---

### 1.2 模型推导

#### 两类企业

**高质量企业**：$V_H > E[V]$（被低估）

**低质量企业**：$V_L < E[V]$（被高估）

#### 股权融资决策

发行股权比例 $\alpha$ 融资 $I$：

$$
\begin{aligned}
\alpha \times (V + NPV) = I
\end{aligned}
$$

现有股东价值：

$$
\begin{aligned}
V_{\text{old}} = (1-\alpha)(V + NPV)
\end{aligned}
$$

不融资现有股东价值：

$$
\begin{aligned}
V_{\text{no issue}} = V
\end{aligned}
$$

#### 高质量企业的困境

高质量企业发行股权时，外部投资者按 $E[V]$ 定价：

$$
\begin{aligned}
\alpha = \frac{I}{E[V] + NPV}
\end{aligned}
$$

现有股东价值：

$$
\begin{aligned}
V_{\text{old}} = (1-\alpha)(V_H + NPV) = V_H + NPV - I \times \frac{V_H + NPV}{E[V] + NPV}
\end{aligned}
$$

若 $V_H > E[V]$，则：

$$
\begin{aligned}
V_{\text{old}} < V_H + NPV - I
\end{aligned}
$$

**稀释成本**（dilution cost）：

$$
\begin{aligned}
\text{Dilution} = I \times \frac{\overbrace{V_H - E[V]}^{\text{被低估程度}}}{\underbrace{E[V] + NPV}_{\text{市场估值}}}
\end{aligned}
$$

#### 投资不足均衡

若稀释成本 > NPV，高质量企业放弃投资：

$$
\begin{aligned}
\underbrace{I \times \frac{V_H - E[V]}{E[V] + NPV}}_{\text{稀释成本}} > \underbrace{NPV}_{\text{项目价值}}
\end{aligned}
$$

**分离均衡**（separating equilibrium）：
- 高质量企业不发股，用内部资金或债务
- 低质量企业发股
- 市场推断：发股 = 低质量信号

---

### 1.3 Pecking Order 推论

**融资优先顺序**：

$$
\begin{aligned}
\text{internal funds} \succ \text{debt} \succ \text{equity}
\end{aligned}
$$

**原因**：
1. **内部资金**：无信息不对称问题
2. **债务**：信息敏感度低（debt is less information-sensitive）
3. **股权**：信息敏感度高，稀释成本最大

**债务信息敏感度低的原因**：

$$
\begin{aligned}
\text{Debt value} = \min(D, V)
\end{aligned}
$$

当 $V \gg D$ 时，债务价值对 $V$ 不敏感（安全债务）。

---

### 1.4 实证预测

**H1：融资缺口与股权发行**

$$
\begin{aligned}
\text{Financing deficit} = \text{Capex} + \Delta WC + \text{Dividends} - \text{Operating CF}
\end{aligned}
$$

预测：

$$
\begin{aligned}
\Delta \text{Debt}_t = \alpha + \beta \times \text{Financing deficit}_t + \varepsilon_t
\end{aligned}
$$

$\beta \approx 1$：企业优先用债务填补融资缺口。

**H2：盈利能力与杠杆**

$$
\begin{aligned}
\text{Profitability} \uparrow
&\Rightarrow \text{internal funds} \uparrow \\
&\Rightarrow \text{external financing need} \downarrow \\
&\Rightarrow \text{leverage} \downarrow
\end{aligned}
$$

预测：盈利能力与杠杆负相关（与 trade-off theory 相反）。

**H3：股权发行公告效应**

$$
\begin{aligned}
\text{SEO announcement} \Rightarrow CAR < 0
\end{aligned}
$$

市场推断：发股 = 高估信号。

---

## 2. Myers (1984) The Capital Structure Puzzle

### 2.1 核心贡献

**问题**：为什么企业不追求目标杠杆率（target leverage）？

**Pecking order theory 解释**：

$$
\begin{aligned}
\text{leverage}_t = \text{leverage}_{t-1} + \text{financing deficit}_t - \text{equity issuance}_t
\end{aligned}
$$

杠杆率是融资决策的累积结果，不是主动选择的目标。

---

### 2.2 Pecking Order vs. Trade-Off Theory

| 维度                 | Pecking Order                          | Trade-Off Theory                       |
| -------------------- | -------------------------------------- | -------------------------------------- |
| 核心机制             | 信息不对称 → 融资优先顺序              | 税盾 vs. 财务困境成本                  |
| 目标杠杆             | 无目标杠杆                             | 有目标杠杆                             |
| 盈利能力与杠杆       | 负相关（内部资金充足 → 杠杆 ↓）        | 正相关（税盾价值 ↑ → 杠杆 ↑）          |
| 融资缺口与债务发行   | 强正相关（$\beta \approx 1$）          | 弱相关（调整向目标杠杆）               |
| 股权发行公告效应     | 负（高估信号）                         | 可正可负（取决于用途）                 |

---

### 2.3 实证检验

**Shyam-Sunder and Myers (1999) 检验**：

$$
\begin{aligned}
\Delta D_{it} = \alpha + \beta_1 \text{DEF}_{it} + \beta_2 (\text{Target leverage}_i - \text{Leverage}_{it-1}) + \varepsilon_{it}
\end{aligned}
$$

其中：
- $\text{DEF}_{it}$：融资缺口
- $\text{Target leverage}_i - \text{Leverage}_{it-1}$：杠杆偏离

**Pecking order 预测**：$\beta_1 \approx 1$, $\beta_2 \approx 0$

**Trade-off 预测**：$\beta_1 \approx 0$, $\beta_2 > 0$

**实证发现**：$\beta_1 \approx 0.75$, $\beta_2 > 0$（两种理论都有解释力）

---

## 3. Myers (2003) Financing of Corporations

### 3.1 综述贡献

**问题**：整合 pecking order 与 trade-off theory。

**修正 pecking order**：

$$
\begin{aligned}
\text{financing choice}
&\Longleftarrow
\begin{cases}
\text{information asymmetry} \uparrow \Rightarrow \text{pecking order stronger} \\
\text{financial slack} \uparrow \Rightarrow \text{pecking order weaker} \\
\text{tax benefits} \uparrow \Rightarrow \text{trade-off stronger}
\end{cases}
\end{aligned}
$$

---

### 3.2 Financial Slack

**定义**：

$$
\begin{aligned}
\text{Financial slack} = \text{Cash} + \text{Unused debt capacity}
\end{aligned}
$$

**作用**：

$$
\begin{aligned}
\text{financial slack} \uparrow
&\Rightarrow \text{avoid costly external financing} \\
&\Rightarrow \text{reduce underinvestment risk}
\end{aligned}
$$

**最优 slack 权衡**：

$$
\begin{aligned}
\text{slack} \uparrow
&\Rightarrow
\begin{cases}
\text{Benefit: avoid underinvestment} \\
\text{Cost: overinvestment risk (agency cost)}
\end{cases}
\end{aligned}
$$

---

### 3.3 跨企业差异

**高信息不对称企业**（科技、生物医药）：
- Pecking order 更强
- 保持更多 financial slack
- 杠杆率更低

**低信息不对称企业**（公用事业、成熟制造业）：
- Trade-off theory 更强
- 追求目标杠杆
- 杠杆率更高

---

## 4. Ross (1977) Signaling Theory

### 4.1 核心机制

**问题**：融资决策本身传递关于公司质量的信号。

**信号成本类型**：
- **Dissipative cost**：破坏价值的成本（如破产成本）
- **Non-dissipative cost**：财富转移（如稀释）

---

### 4.2 债务信号模型

**设定**：
- 两类企业：高质量 $V_H$，低质量 $V_L$
- 管理层选择债务水平 $D$ 发信号
- 破产成本：$C(D, V)$，且 $\frac{\partial C}{\partial D} > 0$, $\frac{\partial^2 C}{\partial D \partial V} < 0$

**关键假设**：

$$
\begin{aligned}
\frac{\partial C(D, V_L)}{\partial D} > \frac{\partial C(D, V_H)}{\partial D}
\end{aligned}
$$

低质量企业的边际破产成本更高。

---

### 4.3 分离均衡

**高质量企业选择**：$D_H$

**低质量企业选择**：$D_L < D_H$

**激励相容条件**（incentive compatibility）：

高质量企业不模仿低质量：

$$
\begin{aligned}
V_H - C(D_H, V_H) \geq V_L - C(D_L, V_H)
\end{aligned}
$$

低质量企业不模仿高质量：

$$
\begin{aligned}
V_L - C(D_L, V_L) \geq V_H - C(D_H, V_L)
\end{aligned}
$$

**分离均衡结果**：

$$
\begin{aligned}
D_H > D_L
\end{aligned}
$$

高质量企业通过高杠杆发信号。

---

### 4.4 实证预测

**H1：杠杆变化公告效应**

$$
\begin{aligned}
\text{leverage increase announcement} \Rightarrow CAR > 0
\end{aligned}
$$

市场推断：高杠杆 = 高质量信号。

**H2：债换股 vs. 股换债**

- **债换股**（debt-for-equity swap）：$CAR > 0$（杠杆 ↑）
- **股换债**（equity-for-debt swap）：$CAR < 0$（杠杆 ↓）

**实证支持**：Masulis (1980) 发现债换股公告正向反应，股换债负向反应。

---

## 5. Vermaelen (1981) Repurchase Signaling

### 5.1 核心机制

**问题**：股票回购如何传递低估信号？

**信号成本类型**：**Non-dissipative**（财富转移，不破坏价值）

---

### 5.2 回购溢价作为信号

**设定**：
- 企业以溢价 $P > P_{\text{market}}$ 回购股票
- 不参与回购的股东获益（财富转移）

**高质量企业**：

$$
\begin{aligned}
\text{True value} = V_H > P > P_{\text{market}}
\end{aligned}
$$

回购后留存股东价值：

$$
\begin{aligned}
V_{\text{remaining}} = \frac{V_H - \alpha P}{1-\alpha} > V_H
\end{aligned}
$$

其中 $\alpha$ 是回购比例。

**低质量企业**：

$$
\begin{aligned}
\text{True value} = V_L < P
\end{aligned}
$$

回购损害留存股东：

$$
\begin{aligned}
V_{\text{remaining}} = \frac{V_L - \alpha P}{1-\alpha} < V_L
\end{aligned}
$$

---

### 5.3 分离均衡

**激励相容条件**：

低质量企业不模仿高质量：

$$
\begin{aligned}
V_L > \frac{V_L - \alpha P}{1-\alpha}
\end{aligned}
$$

即：

$$
\begin{aligned}
P > V_L
\end{aligned}
$$

**分离均衡结果**：
- 高质量企业以溢价回购
- 低质量企业不回购
- 市场推断：回购 = 低估信号

---

### 5.4 实证预测

**H1：回购公告效应**

$$
\begin{aligned}
\text{repurchase announcement} \Rightarrow CAR > 0
\end{aligned}
$$

**H2：回购溢价与公告效应**

$$
\begin{aligned}
\text{repurchase premium} \uparrow \Rightarrow CAR \uparrow
\end{aligned}
$$

溢价越高，信号越强。

**实证支持**：Vermaelen (1981) 发现 tender offer 回购公告平均 CAR = +16%。

---

## 6. 信息不对称的度量

### 6.1 常用代理变量

| Proxy                          | 含义                                     | 预期关系                     |
| ------------------------------ | ---------------------------------------- | ---------------------------- |
| Analyst coverage               | 分析师覆盖数量                           | ↑ → 信息不对称 ↓             |
| Bid-ask spread                 | 买卖价差                                 | ↑ → 信息不对称 ↑             |
| R&D / Sales                    | 研发密集度                               | ↑ → 信息不对称 ↑             |
| Firm age                       | 上市年限                                 | ↑ → 信息不对称 ↓             |
| Institutional ownership        | 机构持股比例                             | ↑ → 信息不对称 ↓             |
| Disclosure quality             | 财务披露质量                             | ↑ → 信息不对称 ↓             |

---

### 6.2 信息不对称与融资选择

**实证预测**：

$$
\begin{aligned}
\text{information asymmetry} \uparrow
&\Rightarrow \text{equity issuance cost} \uparrow \\
&\Rightarrow \text{pecking order stronger} \\
&\Rightarrow \text{leverage} \uparrow \text{ (use more debt)}
\end{aligned}
$$

**异质性检验**：

$$
\begin{aligned}
\Delta D_{it} = \alpha + \beta_1 \text{DEF}_{it} + \beta_2 (\text{DEF}_{it} \times \text{High Info Asym}_i) + \varepsilon_{it}
\end{aligned}
$$

预期：$\beta_2 > 0$（高信息不对称企业更依赖债务）

---

## 7. 理论整合与实证预测

### 7.1 理论对比

| 理论                  | 核心机制                     | 融资优先顺序                 | 盈利与杠杆关系 |
| --------------------- | ---------------------------- | ---------------------------- | -------------- |
| Pecking Order         | 信息不对称 → 稀释成本        | 内部 > 债务 > 股权           | 负相关         |
| Signaling (Ross)      | 债务作为质量信号             | 高质量 → 高杠杆              | 正相关         |
| Signaling (Vermaelen) | 回购作为低估信号             | 低估 → 回购                  | -              |

---

### 7.2 跨企业差异预测

| 企业特征                     | Pecking Order 预测           | Signaling 预测               |
| ---------------------------- | ---------------------------- | ---------------------------- |
| Information asymmetry ↑      | Leverage ↑（避免股权融资）   | Leverage ↑（高质量信号）     |
| Profitability ↑              | Leverage ↓（内部资金充足）   | Leverage ↑（税盾价值）       |
| Growth opportunities ↑       | Leverage ↓（保留 slack）     | Leverage ↓（避免投资不足）   |

---

### 7.3 政策实验设计

#### 实验 1：检验信息不对称对融资选择的影响

**政策冲击**：监管要求部分企业强制披露更细的财务信息

**DiD 设定**：

$$
\begin{aligned}
\text{Equity issuance}_{it}
&= \alpha + \beta(\text{High Info Asym}_i \times \text{Post}_t) \\
&\quad + \gamma \text{High Info Asym}_i + \delta \text{Post}_t + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta > 0$（披露 ↑ → 信息不对称 ↓ → 股权融资成本 ↓ → 股权发行 ↑）

---

#### 实验 2：检验 Pecking Order

**政策冲击**：税改降低债务税盾价值

**检验**：Pecking order 预测融资缺口与债务发行关系不受税改影响（因核心是信息不对称，非税收）

$$
\begin{aligned}
\Delta D_{it} = \alpha + \beta_1 \text{DEF}_{it} + \beta_2 (\text{DEF}_{it} \times \text{Post}_t) + \varepsilon_{it}
\end{aligned}
$$

**Pecking order 预测**：$\beta_2 \approx 0$

**Trade-off 预测**：$\beta_2 < 0$（税盾 ↓ → 债务吸引力 ↓）

---

#### 实验 3：检验债务信号理论

**政策冲击**：破产法改革降低破产成本

**DiD 设定**：

$$
\begin{aligned}
CAR_i^{\text{leverage increase}}
&= \alpha + \beta(\text{High Quality}_i \times \text{Post Reform}_t) \\
&\quad + \gamma \text{High Quality}_i + \delta \text{Post Reform}_t + \varepsilon_i
\end{aligned}
$$

**预期**：$\beta < 0$（破产成本 ↓ → 信号成本 ↓ → 信号价值 ↓ → 公告效应 ↓）

---

## 8. 考试样题

### 样题 1：Myers-Majluf 稀释成本

**问题**：推导高质量企业的稀释成本，并说明什么条件下企业放弃 NPV>0 项目。

**答案框架**：

稀释成本：

$$
\begin{aligned}
\text{Dilution} = I \times \frac{V_H - E[V]}{E[V] + NPV}
\end{aligned}
$$

放弃投资条件：

$$
\begin{aligned}
\text{Dilution} > NPV
\end{aligned}
$$

即：

$$
\begin{aligned}
I \times \frac{V_H - E[V]}{E[V] + NPV} > NPV
\end{aligned}
$$

---

### 样题 2：Pecking Order 实证预测

**问题**：Pecking order theory 如何解释盈利能力与杠杆的负相关？

**答案框架**：

$$
\begin{aligned}
\text{profitability} \uparrow
&\Rightarrow \text{internal funds} \uparrow \\
&\Rightarrow \text{external financing need} \downarrow \\
&\Rightarrow \text{debt issuance} \downarrow \\
&\Rightarrow \text{leverage} \downarrow
\end{aligned}
$$

与 trade-off theory 相反（后者预测盈利 ↑ → 税盾价值 ↑ → 杠杆 ↑）。

---

### 样题 3：Ross 信号模型

**问题**：Ross (1977) 如何用破产成本差异实现分离均衡？

**答案框架**：

关键假设：

$$
\begin{aligned}
\frac{\partial C(D, V_L)}{\partial D} > \frac{\partial C(D, V_H)}{\partial D}
\end{aligned}
$$

低质量企业边际破产成本更高 → 无法模仿高杠杆 → 分离均衡：$D_H > D_L$。

---

### 样题 4：Vermaelen 回购信号

**问题**：为什么回购溢价是 non-dissipative signal？

**答案框架**：

回购溢价是财富转移（从留存股东到卖出股东），不破坏企业总价值。

高质量企业：$V_H > P$ → 留存股东获益

低质量企业：$V_L < P$ → 留存股东受损

分离均衡：只有高质量企业回购。

---

### 样题 5：政策实验设计

**问题**：设计实验检验信息不对称对股权融资成本的影响。

**答案框架**：

**政策冲击**：强制披露改革

**DiD 设定**：

$$
\begin{aligned}
\text{SEO discount}_{it} = \alpha + \beta(\text{Opaque}_i \times \text{Post}_t) + \text{controls} + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta < 0$（披露 ↑ → 信息不对称 ↓ → 发行折价 ↓）

**数据需求**：
- SEO discount：(offer price - market price) / market price
- Opacity proxy：analyst coverage, R&D intensity
- 控制变量：size, profitability, M/B

---

## 参考文献

**核心理论**：
- Myers and Majluf (1984), *Corporate Financing and Investment Decisions When Firms Have Information that Investors Do Not Have*, JFE
- Myers (1984), *The Capital Structure Puzzle*, JF
- Myers (2003), *Financing of Corporations*, Handbook of Economics of Finance
- Ross (1977), *The Determination of Financial Structure: The Incentive Signaling Approach*, Bell Journal
- Vermaelen (1981), *Common Stock Repurchases and Market Signaling*, JFE

**实证检验**：
- Shyam-Sunder and Myers (1999), *Testing Static Tradeoff against Pecking Order Models of Capital Structure*, JFE
- Fama and French (2002), *Testing Trade-Off and Pecking Order Predictions about Dividends and Debt*, RFS
- Frank and Goyal (2003), *Testing the Pecking Order Theory of Capital Structure*, JFE
