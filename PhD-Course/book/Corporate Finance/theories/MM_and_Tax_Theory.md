# MM 定理与税基资本结构理论

## 📌 相关理论链接

- **对比理论**：[[Pecking_Order_Theory]] - 盈利与杠杆关系相反
- **互补理论**：[[Agency_Theory]] - 代理成本降低最优杠杆
- **互补理论**：[[Financial_Distress_Theory]] - 困境成本降低最优杠杆
- **整合框架**：[[00_Theory_Integration]] - 完整 trade-off 模型

---

## 1. MM Irrelevance Propositions (1958, 1963)

### 1.1 MM Proposition I (无税，1958)

**核心命题**：在完美市场下，企业价值由资产端现金流决定，融资结构只是切分方式，不创造价值。

$$
\begin{aligned}
V_L = V_U
\end{aligned}
$$

其中：
- $V_L$：有杠杆企业价值
- $V_U$：无杠杆企业价值

**完美市场假设**：

$$
\begin{aligned}
\text{MM irrelevance holds}
&\Longleftarrow
\begin{cases}
\text{no taxes} \\
\text{no transaction costs} \\
\text{no bankruptcy costs} \\
\text{symmetric information} \\
\text{no agency costs} \\
\text{financial policy does not affect cash flows}
\end{cases}
\end{aligned}
$$

**Homemade leverage 论证**：

投资者可以自制杠杆（homemade leverage）复制企业融资决策：

$$
\begin{aligned}
\text{个人借款} + \text{买入无杠杆企业股票}
&\equiv \text{买入有杠杆企业股票}
\end{aligned}
$$

因此企业杠杆不创造额外价值。

**套利论证**：

假设 $V_L > V_U$，套利策略：
1. 卖空有杠杆企业股票 $S_L$
2. 买入无杠杆企业股票 $S_U$
3. 个人借款复制杠杆企业的债务结构

套利利润：

$$
\begin{aligned}
\pi = V_L - V_U > 0
\end{aligned}
$$

套利行为使 $V_L \to V_U$。

---

### 1.2 MM Proposition II (无税，1958)

**核心命题**：股权成本随杠杆线性上升，WACC 保持不变。

$$
\begin{aligned}
r_E = r_U + \frac{D}{E}(r_U - r_D)
\end{aligned}
$$

其中：
- $r_E$：股权成本
- $r_U$：无杠杆资产成本
- $r_D$：债务成本
- $D/E$：债务权益比

**推导**：

$$
\begin{aligned}
V_L &= V_U \\
E + D &= V_U \\
\text{WACC} &= \frac{E}{V_L}r_E + \frac{D}{V_L}r_D \\
&= r_U
\end{aligned}
$$

由 WACC 定义：

$$
\begin{aligned}
r_U &= \frac{E}{E+D}r_E + \frac{D}{E+D}r_D \\
r_U(E+D) &= Er_E + Dr_D \\
r_E &= r_U + \frac{D}{E}(r_U - r_D)
\end{aligned}
$$

**经济直觉**：杠杆增加使股东承担更多财务风险，要求更高回报率，但 WACC 不变。

---

### 1.3 MM Proposition I with Corporate Tax (1963)

**核心命题**：公司税使利息可抵扣，债务创造税盾价值。

$$
\begin{aligned}
V_L = V_U + T_C D
\end{aligned}
$$

其中：
- $T_C$：公司税率
- $T_C D$：债务税盾现值（perpetual debt）

**推导**：

无杠杆企业税后现金流：

$$
\begin{aligned}
CF_U = EBIT(1-T_C)
\end{aligned}
$$

有杠杆企业税后现金流：

$$
\begin{aligned}
CF_L &= \underbrace{(EBIT - r_D D)(1-T_C)}_{\text{税后净利润}} + \underbrace{r_D D}_{\text{利息支付}} \\
&= EBIT(1-T_C) + \underbrace{r_D D T_C}_{\text{利息税盾}}
\end{aligned}
$$

税盾价值（perpetual debt）：

$$
\begin{aligned}
PV(\text{tax shield}) = \frac{\underbrace{r_D D T_C}_{\text{年度税盾}}}{r_D} = T_C D
\end{aligned}
$$

因此：

$$
\begin{aligned}
V_L = V_U + T_C D
\end{aligned}
$$

**推论**：最优资本结构是 100% 债务融资（极端预测）。

---

### 1.4 MM Proposition II with Corporate Tax (1963)

**核心命题**：税盾降低 WACC，股权成本随杠杆上升但斜率变缓。

$$
\begin{aligned}
r_E = r_U + \frac{D}{E}(r_U - r_D)(1-T_C)
\end{aligned}
$$

**推导**：

$$
\begin{aligned}
V_L &= V_U + T_C D \\
E &= V_L - D = V_U + T_C D - D = V_U - D(1-T_C) \\
\text{WACC} &= \frac{E}{V_L}r_E + \frac{D}{V_L}r_D(1-T_C) \\
&= r_U\left(1 - \frac{D}{V_L}T_C\right)
\end{aligned}
$$

由 WACC 定义：

$$
\begin{aligned}
r_U\left(1 - \frac{D}{V_L}T_C\right) &= \frac{E}{V_L}r_E + \frac{D}{V_L}r_D(1-T_C) \\
r_E &= r_U + \frac{D}{E}(r_U - r_D)(1-T_C)
\end{aligned}
$$

**经济直觉**：税盾降低债务实际成本，WACC 随杠杆下降。

---

## 2. Miller (1977) Personal Tax Model

### 2.1 核心机制

**问题**：MM (1963) 只考虑公司税，忽略个人税。Miller (1977) 引入个人税，发现个人税削弱债务税盾优势。

**税收结构**：

- $T_C$：公司税率
- $t_{pe}$：股权收益个人税率（capital gains）
- $t_{pd}$：债务利息个人税率（ordinary income）

**投资者税后收益**：

股权投资者税后收益（每元 EBIT）：

$$
\begin{aligned}
\underbrace{(1-T_C)}_{\text{公司税后}} \times \underbrace{(1-t_{pe})}_{\text{个人税后}}
\end{aligned}
$$

债务投资者税后收益（每元利息）：

$$
\begin{aligned}
\underbrace{(1-t_{pd})}_{\text{个人税后，无公司税}}
\end{aligned}
$$

**债务相对优势**：

$$
\begin{aligned}
\text{Debt advantage} = 1 - \frac{\underbrace{(1-T_C)(1-t_{pe})}_{\text{股权税后收益}}}{\underbrace{(1-t_{pd})}_{\text{债务税后收益}}}
\end{aligned}
$$

- 若 $\frac{(1-T_C)(1-t_{pe})}{(1-t_{pd})} < 1$，债务有税收优势
- 若 $\frac{(1-T_C)(1-t_{pe})}{(1-t_{pd})} = 1$，债务无税收优势（Miller equilibrium）

---

### 2.2 Miller Equilibrium

**均衡条件**：

$$
\begin{aligned}
(1-T_C)(1-t_{pe}) = (1-t_{pd})
\end{aligned}
$$

**经济直觉**：
- 高税率投资者（高 $t_{pd}$）要求更高债务利率补偿
- 企业发债直到边际投资者无差异
- 均衡时，债务税盾被个人税完全抵消

**总债务税盾价值**：

$$
\begin{aligned}
V_L = V_U + \left[1 - \frac{(1-T_C)(1-t_{pe})}{(1-t_{pd})}\right]D
\end{aligned}
$$

若 Miller equilibrium 成立：

$$
\begin{aligned}
V_L = V_U
\end{aligned}
$$

**实证含义**：
- 美国 1986 税改前：$T_C \approx 0.46$, $t_{pe} \approx 0.20$, $t_{pd} \approx 0.50$
- 计算：$(1-0.46)(1-0.20) = 0.432$, $(1-0.50) = 0.50$
- 债务仍有税收优势，但小于 MM (1963) 预测

---

## 3. DeAngelo and Masulis (1980)

### 3.1 核心贡献

**问题**：Miller (1977) 假设所有企业面临相同税率。DeAngelo and Masulis (1980) 引入 **非债务税盾**（non-debt tax shields），如折旧、投资税收抵免。

**核心机制**：

$$
\begin{aligned}
\text{non-debt tax shields} \uparrow
&\Rightarrow \text{marginal tax rate} \downarrow \\
&\Rightarrow \text{debt tax shield value} \downarrow \\
&\Rightarrow \text{optimal leverage} \downarrow
\end{aligned}
$$

**边际税率**：

$$
\begin{aligned}
\text{Marginal tax rate} = T_C \times \Pr(\text{taxable income} > 0)
\end{aligned}
$$

非债务税盾（折旧、R&D 抵免）降低应税收入，使企业更可能进入零税率区间。

---

### 3.2 最优资本结构

**企业价值**：

$$
\begin{aligned}
V_L = V_U + T_C D - PV(\text{distress costs}) - PV(\text{lost tax shields})
\end{aligned}
$$

其中 $PV(\text{lost tax shields})$ 是因破产或低盈利无法使用税盾的损失。

**最优杠杆一阶条件**：

$$
\begin{aligned}
\frac{\partial V_L}{\partial D} = T_C - \frac{\partial PV(\text{distress})}{\partial D} - \frac{\partial PV(\text{lost shields})}{\partial D} = 0
\end{aligned}
$$

**跨企业差异**：

$$
\begin{aligned}
\text{non-debt tax shields} \uparrow
&\Rightarrow \frac{\partial PV(\text{lost shields})}{\partial D} \uparrow \\
&\Rightarrow \text{optimal leverage} \downarrow
\end{aligned}
$$

**实证预测**：
- H1：$\text{depreciation / investment tax credit} \uparrow \Rightarrow \text{leverage} \downarrow$
- H2：$\text{profitability volatility} \uparrow \Rightarrow \text{lost tax shields} \uparrow \Rightarrow \text{leverage} \downarrow$

---

## 4. Graham (2000)

### 4.1 研究问题

**核心问题**：债务税盾价值到底有多大？企业是否充分利用税盾？

**方法**：模拟企业边际税率分布，估算债务税盾价值。

---

### 4.2 边际税率模拟

**边际税率定义**：

$$
\begin{aligned}
MTR_t = \frac{\partial \text{Tax}_t}{\partial \text{Income}_t}
\end{aligned}
$$

**模拟方法**：
1. 用历史盈利数据估计盈利过程（AR 模型）
2. 模拟未来盈利路径（考虑 NOL carryforward/carryback）
3. 计算每条路径的边际税率
4. 取期望得到 $E[MTR_t]$

**税盾价值**：

$$
\begin{aligned}
PV(\text{tax shield}) = \sum_{t=1}^{\infty} \frac{E[MTR_t] \times r_D D}{(1+r)^t}
\end{aligned}
$$

---

### 4.3 主要发现

**发现 1**：债务税盾价值占企业价值 **5-10%**

$$
\begin{aligned}
\frac{PV(\text{tax shield})}{V_L} \approx 0.05 \sim 0.10
\end{aligned}
$$

远低于 MM (1963) 的 $T_C D / V_L \approx 0.35$（若 $T_C=0.35$, $D/V_L=1$）。

**发现 2**：企业实际杠杆低于税收最优水平

$$
\begin{aligned}
\text{actual leverage} < \text{tax-optimal leverage}
\end{aligned}
$$

保守估计：企业可以增加杠杆使税盾价值再提升 **7.5%**。

**发现 3**：边际税率分布高度异质

- 高盈利企业：$MTR \approx T_C$（statutory rate）
- 低盈利 / 亏损企业：$MTR \approx 0$（无法使用税盾）

**经济含义**：
- 税盾价值重要但不是唯一因素
- 企业可能因非税成本（distress, agency）保持保守杠杆

---

## 5. Graham and Tucker (2006)

### 5.1 核心机制

**问题**：税收庇护（tax shelters）可替代债务税盾。

**Tax shelters**：通过复杂交易结构降低应税收入的合法避税手段（如转移定价、离岸实体）。

**替代效应**：

$$
\begin{aligned}
\text{tax shelters} \uparrow
&\Rightarrow \text{effective tax rate} \downarrow \\
&\Rightarrow \text{debt tax shield value} \downarrow \\
&\Rightarrow \text{optimal leverage} \downarrow
\end{aligned}
$$

---

### 5.2 实证策略

**识别 tax shelter users**：
- 用 IRS 审计数据、媒体报道、诉讼记录识别使用 tax shelters 的企业

**DiD 设定**：

$$
\begin{aligned}
\text{Leverage}_{it} = \alpha + \beta \text{Tax Shelter User}_i + \gamma X_{it} + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta < 0$（使用 tax shelters 的企业杠杆率更低）

---

### 5.3 主要发现

**发现 1**：Tax shelter users 杠杆率显著更低

$$
\begin{aligned}
\text{Leverage}_{\text{shelter users}} - \text{Leverage}_{\text{non-users}} \approx -5\%
\end{aligned}
$$

**发现 2**：Tax shelters 与债务是替代关系

- 企业在 tax shelters 和债务之间权衡
- 两者都降低税负，但 tax shelters 无财务困境成本

**政策含义**：
- 打击 tax shelters 可能提高企业杠杆率
- 税收政策影响资本结构不只通过税率，还通过避税工具可得性

---

## 6. 理论整合与实证预测

### 6.1 理论演进

$$
\begin{aligned}
\text{MM (1958)} &: V_L = V_U \quad \text{(perfect markets)} \\
\text{MM (1963)} &: V_L = V_U + T_C D \quad \text{(corporate tax)} \\
\text{Miller (1977)} &: V_L = V_U + \left[1 - \frac{(1-T_C)(1-t_{pe})}{(1-t_{pd})}\right]D \quad \text{(personal tax)} \\
\text{DeAngelo-Masulis (1980)} &: V_L = V_U + T_C D - PV(\text{lost shields}) \quad \text{(non-debt shields)} \\
\text{Graham (2000)} &: \frac{PV(\text{tax shield})}{V_L} \approx 5\text{-}10\% \quad \text{(empirical estimate)}
\end{aligned}
$$

---

### 6.2 跨企业差异预测

| 企业特征                     | 对杠杆的影响 | 理论机制                                     |
| ---------------------------- | ------------ | -------------------------------------------- |
| Profitability ↑              | Leverage ↑   | 更高边际税率 → 税盾价值 ↑                    |
| Profitability volatility ↑   | Leverage ↓   | 更可能进入零税率区间 → 税盾价值 ↓            |
| Non-debt tax shields ↑       | Leverage ↓   | 折旧等替代债务税盾                           |
| Tax shelters ↑               | Leverage ↓   | 避税工具替代债务税盾                         |
| Statutory tax rate $T_C$ ↑   | Leverage ↑   | 税盾价值 ↑                                   |

---

### 6.3 政策实验设计

#### 实验 1：检验税率对杠杆的因果影响

**政策冲击**：税改降低公司税率 $T_C$（如美国 2017 TCJA：$T_C$ 从 35% 降至 21%）

**DiD 设定**：

$$
\begin{aligned}
\text{Leverage}_{it}
&= \alpha + \beta(\text{High Tax Benefit}_i \times \text{Post}_t) \\
&\quad + \gamma \text{High Tax Benefit}_i + \delta \text{Post}_t + \varepsilon_{it}
\end{aligned}
$$

其中 $\text{High Tax Benefit}_i$ 是税改前边际税率高的企业。

**预期**：$\beta < 0$（税率下降 → 税盾价值 ↓ → 杠杆 ↓）

**数据需求**：
- 企业杠杆率（book leverage, market leverage）
- 税改前边际税率（用 Graham 2000 方法模拟）
- 控制变量：size, profitability, tangibility, M/B

---

#### 实验 2：检验非债务税盾的替代效应

**政策冲击**：投资税收抵免（Investment Tax Credit, ITC）政策变化

**DiD 设定**：

$$
\begin{aligned}
\text{Leverage}_{it}
&= \alpha + \beta(\text{High Capex}_i \times \text{ITC}_t) \\
&\quad + \gamma \text{High Capex}_i + \delta \text{ITC}_t + \varepsilon_{it}
\end{aligned}
$$

其中 $\text{High Capex}_i$ 是资本支出密集型企业，$\text{ITC}_t$ 是 ITC 政策生效期。

**预期**：$\beta < 0$（ITC ↑ → 非债务税盾 ↑ → 杠杆 ↓）

---

#### 实验 3：检验 tax shelters 的替代效应

**政策冲击**：监管打击 tax shelters（如 IRS 加强审计、披露要求）

**DiD 设定**：

$$
\begin{aligned}
\text{Leverage}_{it}
&= \alpha + \beta(\text{Shelter User}_i \times \text{Post Crackdown}_t) \\
&\quad + \gamma \text{Shelter User}_i + \delta \text{Post Crackdown}_t + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta > 0$（打击 tax shelters → 企业转向债务税盾 → 杠杆 ↑）

---

## 7. 考试样题

### 样题 1：MM 定理推导

**问题**：推导 MM Proposition II with corporate tax，并解释为什么税盾降低 WACC。

**答案框架**：

$$
\begin{aligned}
V_L &= V_U + T_C D \\
E &= V_L - D = V_U + T_C D - D \\
\text{WACC} &= \frac{E}{V_L}r_E + \frac{D}{V_L}r_D(1-T_C) \\
&= r_U\left(1 - \frac{D}{V_L}T_C\right)
\end{aligned}
$$

由 WACC 定义求解 $r_E$：

$$
\begin{aligned}
r_E = r_U + \frac{D}{E}(r_U - r_D)(1-T_C)
\end{aligned}
$$

**经济直觉**：利息税盾降低债务实际成本，WACC 随杠杆下降。

---

### 样题 2：Miller equilibrium

**问题**：在 Miller (1977) 模型中，什么条件下债务无税收优势？用数值例子说明。

**答案框架**：

Miller equilibrium 条件：

$$
\begin{aligned}
(1-T_C)(1-t_{pe}) = (1-t_{pd})
\end{aligned}
$$

**数值例子**：
- $T_C = 0.35$, $t_{pe} = 0.15$, $t_{pd} = ?$
- 求解：$(1-0.35)(1-0.15) = 0.5525 = (1-t_{pd})$
- $t_{pd} = 0.4475$

若 $t_{pd} = 0.4475$，债务无税收优势。

---

### 样题 3：非债务税盾

**问题**：DeAngelo and Masulis (1980) 如何解释为什么高折旧企业杠杆率更低？

**答案框架**：

$$
\begin{aligned}
\text{depreciation} \uparrow
&\Rightarrow \text{taxable income} \downarrow \\
&\Rightarrow \Pr(\text{zero tax rate}) \uparrow \\
&\Rightarrow \text{debt tax shield value} \downarrow \\
&\Rightarrow \text{optimal leverage} \downarrow
\end{aligned}
$$

折旧是非债务税盾，替代债务税盾的作用。

---

### 样题 4：Graham (2000) 发现

**问题**：Graham (2000) 估算债务税盾价值占企业价值多少？为什么低于 MM (1963) 预测？

**答案框架**：

**估算值**：5-10%

**低于 MM 预测的原因**：
1. 边际税率 < statutory rate（因盈利波动、NOL）
2. 企业保守杠杆（考虑非税成本）
3. 个人税削弱税盾优势

---

### 样题 5：政策实验设计

**问题**：设计一个 DiD 实验检验税率变化对杠杆的因果影响。

**答案框架**：

**政策冲击**：税改降低公司税率

**DiD 设定**：

$$
\begin{aligned}
\text{Leverage}_{it} = \alpha + \beta(\text{High MTR}_i \times \text{Post}_t) + \gamma \text{High MTR}_i + \delta \text{Post}_t + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta < 0$（税率 ↓ → 税盾价值 ↓ → 杠杆 ↓）

**平行趋势检验**：

$$
\begin{aligned}
\text{Leverage}_{it} = \alpha + \sum_{k \neq -1} \beta_k (\text{High MTR}_i \times \mathbf{1}\{t=k\}) + \varepsilon_{it}
\end{aligned}
$$

检验 $\beta_k = 0$ for $k < 0$。

---

## 参考文献

**核心理论**：
- Modigliani and Miller (1958), *The Cost of Capital, Corporation Finance, and the Theory of Investment*, AER
- Modigliani and Miller (1963), *Corporate Income Taxes and the Cost of Capital: A Correction*, AER
- Miller (1977), *Debt and Taxes*, JF
- Miller (1988), *The Modigliani Miller Propositions after Thirty Years*, JEP
- DeAngelo and Masulis (1980), *Optimal Capital Structure under Corporate and Personal Taxes*, JFE

**实证证据**：
- Graham (2000), *How Big Are the Tax Benefits of Debt?*, JF
- Graham and Tucker (2006), *Tax Shelters and Corporate Debt Policy*, JFE
- Fama and French (1998), *Taxes, Financing Decisions, and Firm Value*, JF
- Panier, Perez-Gonzalez and Villanueva (2013), *Capital Structure and Taxes*, slides
