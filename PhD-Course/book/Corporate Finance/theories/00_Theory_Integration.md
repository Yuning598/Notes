# 公司金融理论知识图谱与整合

## 📚 理论笔记导航

本笔记整合公司金融六大核心理论，提供理论对比、决策框架、公式速查和考试模板。

### 理论笔记列表

1. **[MM 定理与税基资本结构理论](MM_and_Tax_Theory.md)** - MM 命题、Miller 个人税、非债务税盾、税盾价值估算
2. **[代理理论](Agency_Theory.md)** - 资产替代、投资不足、自由现金流、成长期权与杠杆
3. **[Pecking Order 与信息不对称理论](Pecking_Order_Theory.md)** - Myers-Majluf 稀释成本、融资优先顺序、债务信号
4. **[派息政策理论](Payout_Policy_Theory.md)** - 股利无关性、税基理论、信号理论、股利 vs. 回购、生命周期理论
5. **[财务困境成本理论](Financial_Distress_Theory.md)** - 破产成本、Fire Sales、清算价值与债务契约
6. **[SEO 理论](../SEO_Theory.md)** - 逆向选择、市场择时、公告效应

### ⚠️ [常见错误与易混淆点](Common_Mistakes.md) 🔥

19 个常见错误详解、理论预测对比、公式易错点、考试陷阱识别

---

## 1. 核心理论框架总览

### 1.1 企业价值分解

$$
\begin{aligned}
V_L = V_U + \underbrace{PV(\text{tax shield})}_{MM \text{ with tax}} - \underbrace{PV(\text{distress costs})}_{\text{Trade-off}} - \underbrace{PV(\text{agency costs})}_{\text{Jensen-Meckling}}
\end{aligned}
$$

**理论演进**：

```mermaid
graph TD
    A["MM (1958) Irrelevance<br/>完美市场假设"] 
    B["MM (1963) Tax Shield<br/>V_L = V_U + T_C D"]
    C["Miller (1977) Personal Tax<br/>个人税削弱税盾优势"]
    D["DeAngelo-Masulis (1980)<br/>非债务税盾替代效应"]
    E["Trade-Off Theory<br/>税盾 vs. 困境成本"]
    F["Comprehensive Theory<br/>税盾 - 困境成本 - 代理成本"]
    
    A -->|引入公司税| B
    B -->|引入个人税| C
    C -->|引入非债务税盾| D
    D -->|引入破产成本| E
    E -->|引入代理成本| F
    
    style A fill:#e1f5ff
    style B fill:#fff4e1
    style C fill:#fff4e1
    style D fill:#fff4e1
    style E fill:#ffe1e1
    style F fill:#e1ffe1
```

---

## 2. 六大理论主题关系图

### 2.1 理论互补与冲突

```mermaid
graph TD
    A[MM Irrelevance] --> B[Tax Theory]
    A --> C[Agency Theory]
    A --> D[Asymmetric Info]
    
    B --> E[Trade-Off Theory]
    C --> E
    F[Distress Costs] --> E
    
    D --> G[Pecking Order]
    D --> H[Signaling]
    
    E -.冲突.-> G
    H -.互补.-> E
    
    I[Payout Policy] --> C
    I --> D
    I --> B
    
    J[SEO Theory] --> D
    J --> H
```

---

### 2.2 理论对比矩阵

| 理论                  | 核心机制                     | 盈利与杠杆 | 成长与杠杆 | 有形资产与杠杆 |
| --------------------- | ---------------------------- | ---------- | ---------- | -------------- |
| MM Irrelevance        | 完美市场                     | 无关       | 无关       | 无关           |
| Tax Theory            | 税盾 vs. 个人税              | + (税盾)   | 0          | 0              |
| Agency (FCF)          | 约束过度投资                 | - (内部)   | - (风险)   | 0              |
| Agency (Debt Overhang)| 投资不足                     | 0          | - (严重)   | 0              |
| Pecking Order         | 信息不对称 → 融资顺序        | - (内部)   | - (slack)  | 0              |
| Signaling             | 债务作为质量信号             | + (信号)   | 0          | 0              |
| Trade-Off             | 税盾 vs. 困境成本            | + (税盾)   | - (成本)   | + (清算值)     |
| Distress Costs        | 破产成本                     | 0          | - (成本)   | - (清算值)     |

**符号说明**：
- `+`：正相关
- `-`：负相关
- `0`：无关或不确定

---

## 3. 跨理论的统一预测

### 3.1 盈利能力与杠杆

**理论冲突**：

$$
\begin{aligned}
\text{Profitability} \uparrow
&\Rightarrow
\begin{cases}
\text{Trade-off: Leverage} \uparrow \quad \text{(税盾价值 ↑)} \\
\text{Pecking order: Leverage} \downarrow \quad \text{(内部资金 ↑)}
\end{cases}
\end{aligned}
$$

**实证证据**：负相关占主导（支持 pecking order）

**调和**：
- 短期：pecking order 主导（融资缺口）
- 长期：trade-off 主导（调整向目标杠杆）

---

### 3.2 成长期权与杠杆

**理论一致**：

$$
\begin{aligned}
\text{Growth opportunities} \uparrow
&\Rightarrow
\begin{cases}
\text{Agency: Leverage} \downarrow \quad \text{(投资不足风险 ↑)} \\
\text{Pecking order: Leverage} \downarrow \quad \text{(保留 slack)} \\
\text{Distress: Leverage} \downarrow \quad \text{(困境成本 ↑)}
\end{cases}
\end{aligned}
$$

**实证证据**：强烈负相关（多理论支持）

---

### 3.3 有形资产与杠杆

**理论一致**：

$$
\begin{aligned}
\text{Tangibility} \uparrow
&\Rightarrow
\begin{cases}
\text{Distress: Leverage} \uparrow \quad \text{(清算价值 ↑)} \\
\text{Agency: Leverage} \uparrow \quad \text{(资产替代 ↓)}
\end{cases}
\end{aligned}
$$

**实证证据**：强烈正相关（多理论支持）

---

## 4. 融资决策的完整框架

### 4.1 融资选择决策树

```mermaid
graph TD
    Start["企业需要外部融资"]
    Check1{"信息不对称程度"}
    Check2{"当前杠杆 vs. 目标杠杆"}
    Check3{"成长期权价值"}
    Check4{"自由现金流"}
    
    Debt1["发行债务<br/>(Pecking Order)"]
    Debt2["发行债务<br/>(Trade-Off)"]
    Debt3["发行债务<br/>(约束 FCF)"]
    Equity1["发行股权<br/>(避免 Debt Overhang)"]
    Equity2["发行股权"]
    
    Start --> Check1
    Check1 -->|高| Debt1
    Check1 -->|低| Check2
    Check2 -->|低于目标| Debt2
    Check2 -->|高于目标| Check3
    Check3 -->|高| Equity1
    Check3 -->|低| Check4
    Check4 -->|高| Debt3
    Check4 -->|低| Equity2
    
    style Start fill:#e1f5ff
    style Debt1 fill:#fff4e1
    style Debt2 fill:#fff4e1
    style Debt3 fill:#fff4e1
    style Equity1 fill:#ffe1e1
    style Equity2 fill:#ffe1e1
```

---

### 4.2 派息决策决策树

```mermaid
graph TD
    Start["企业有多余现金"]
    Check1{"现金流性质"}
    Check2{"股价估值"}
    Check3{"自由现金流 & 成长期权"}
    
    Div["增加股利<br/>(Signaling)"]
    Buyback["股票回购<br/>(Vermaelen)"]
    Payout["增加派息<br/>(Jensen FCF)"]
    Retain["保留现金<br/>(Financial Slack)"]
    
    Start --> Check1
    Check1 -->|永久性| Div
    Check1 -->|临时性| Check2
    Check2 -->|低估| Buyback
    Check2 -->|合理估值| Check3
    Check3 -->|高 FCF & 低成长| Payout
    Check3 -->|低 FCF & 高成长| Retain
    
    style Start fill:#e1f5ff
    style Div fill:#e1ffe1
    style Buyback fill:#fff4e1
    style Payout fill:#e1ffe1
    style Retain fill:#ffe1e1
```

---

## 5. 考试核心公式速查

### 5.1 MM 定理

**MM I (无税)**：

$$
V_L = V_U
$$

**MM I (有税)**：

$$
V_L = V_U + T_C D
$$

**MM II (有税)**：

$$
r_E = r_U + \frac{D}{E}(r_U - r_D)(1-T_C)
$$

**Miller (1977)**：

$$
V_L = V_U + \left[1 - \frac{(1-T_C)(1-t_{pe})}{(1-t_{pd})}\right]D
$$

---

### 5.2 代理成本

**资产替代**：

$$
E[\text{Equity}]_{\text{risky}} > E[\text{Equity}]_{\text{safe}} \quad \text{尽管 } E[V]_{\text{risky}} < E[V]_{\text{safe}}
$$

**Debt Overhang**：

$$
\max(V + C - D, 0) - I < \max(V - D, 0) \quad \Rightarrow \quad \text{放弃投资}
$$

---

### 5.3 信息不对称

**Myers-Majluf 稀释成本**：

$$
\text{Dilution} = I \times \frac{V_H - E[V]}{E[V] + NPV}
$$

**Pecking order 检验**：

$$
\Delta D_{it} = \alpha + \beta \times \text{Financing deficit}_{it} + \varepsilon_{it}
$$

预期：$\beta \approx 1$

---

### 5.4 信号理论

**Ross 分离均衡**：

$$
\frac{\partial C(D, V_L)}{\partial D} > \frac{\partial C(D, V_H)}{\partial D} \quad \Rightarrow \quad D_H > D_L
$$

**Vermaelen 回购**：

$$
V_{\text{remaining}} = \frac{V - \alpha P}{1-\alpha}
$$

高质量企业：$V_H > P$ → 留存股东获益

---

### 5.5 派息政策

**MM Dividend Irrelevance**：

$$
V_0 = \frac{D_1 + P_1}{1+r}
$$

**Ex-dividend pricing (有税)**：

$$
P_{\text{cum}} - P_{\text{ex}} = D \times \frac{1-t_d}{1-t_g}
$$

**Lintner 平滑模型**：

$$
D_t - D_{t-1} = \alpha + \beta(D_t^* - D_{t-1}) + \varepsilon_t
$$

---

### 5.6 财务困境

**企业价值分解**：

$$
V_L = V_U + PV(\text{tax shield}) - PV(\text{distress costs}) - PV(\text{agency costs})
$$

**Fire sale discount**：

$$
\text{Discount} \approx 14\% \quad \text{(正常时)}
$$

$$
\text{Discount} \approx 30\% \quad \text{(行业困境时)}
$$

---

## 6. 政策实验设计模板

### 6.1 标准 DiD 设定

$$
\begin{aligned}
Y_{it} = \alpha + \beta(\text{Treated}_i \times \text{Post}_t) + \gamma \text{Treated}_i + \delta \text{Post}_t + \theta X_{it} + \varepsilon_{it}
\end{aligned}
$$

**关键要素**：
1. **政策冲击**：外生、突然、差异化影响
2. **Treated group**：受政策影响更强的企业
3. **Control group**：不受或少受政策影响的企业
4. **平行趋势**：政策前趋势相同

---

### 6.2 平行趋势检验

$$
\begin{aligned}
Y_{it} = \alpha + \sum_{k \neq -1} \beta_k (\text{Treated}_i \times \mathbf{1}\{t=k\}) + \gamma_i + \delta_t + \varepsilon_{it}
\end{aligned}
$$

检验：$\beta_k = 0$ for all $k < 0$

---

### 6.3 异质性检验

$$
\begin{aligned}
Y_{it} = \alpha + \beta_1 (\text{Treated}_i \times \text{Post}_t) + \beta_2 (\text{Treated}_i \times \text{Post}_t \times Z_i) + \text{controls} + \varepsilon_{it}
\end{aligned}
$$

其中 $Z_i$ 是企业特征（如信息不对称、成长期权）。

---

## 7. 理论应用：样题综合分析

### 样题：企业 A 的融资决策

**背景**：
- 企业 A：科技公司，R&D 密集，高成长
- 当前杠杆：20%（行业平均 40%）
- 盈利能力：高且稳定
- 需要融资 $100M 用于新项目（NPV = $20M）

**问题**：企业 A 应该发行债务还是股权？用多个理论分析。

---

**答案框架**：

**Trade-off theory**：

$$
\begin{aligned}
\text{当前杠杆 20\%} < \text{行业平均 40\%}
&\Rightarrow \text{低于目标杠杆} \\
&\Rightarrow \text{建议：发行债务}
\end{aligned}
$$

**Agency theory (Debt Overhang)**：

$$
\begin{aligned}
\text{高成长 + R\&D 密集}
&\Rightarrow \text{投资不足风险高} \\
&\Rightarrow \text{建议：发行股权}
\end{aligned}
$$

**Pecking order**：

$$
\begin{aligned}
\text{科技公司 + R\&D}
&\Rightarrow \text{信息不对称高} \\
&\Rightarrow \text{股权融资成本高} \\
&\Rightarrow \text{建议：优先债务}
\end{aligned}
$$

但：

$$
\begin{aligned}
\text{盈利能力高}
&\Rightarrow \text{内部资金充足} \\
&\Rightarrow \text{为何需要外部融资？}
\end{aligned}
$$

**Distress costs**：

$$
\begin{aligned}
\text{R\&D 密集 + 无形资产}
&\Rightarrow \text{清算价值低} \\
&\Rightarrow \text{困境成本高} \\
&\Rightarrow \text{建议：低杠杆，发行股权}
\end{aligned}
$$

---

**综合建议**：

**发行股权**，原因：
1. 高成长 → 避免投资不足（Agency）
2. 无形资产 → 困境成本高（Distress）
3. 当前杠杆已低于行业平均，进一步加杠杆风险大

**权衡**：
- 股权融资成本高（信息不对称）
- 可考虑：可转债（hybrid security）平衡债务与股权优劣

---

## 8. 记忆口诀与速查卡

### 8.1 杠杆决定因素（四句口诀）

```
盈利高，内部足，杠杆低（Pecking Order）
成长高，风险大，杠杆低（Agency + Distress）
有形多，清算易，杠杆高（Distress）
税率高，税盾值，杠杆高（Tax）
```

### 8.2 派息决策（四句口诀）

```
永久流，发股利（Signaling）
临时流，搞回购（Flexibility）
高 FCF，多派息（Agency）
高成长，留现金（Slack）
```

### 8.3 融资顺序（三句口诀）

```
内部资金第一选（Pecking Order）
债务其次信息少（Information Asymmetry）
股权最后成本高（Dilution Cost）
```

### 8.4 理论速查卡

#### 卡片 1：MM 定理
**核心公式**：$V_L = V_U + T_C D$

**关键数字**：税盾价值 5-10%（Graham 2000）

**考点**：推导 MM II，解释 homemade leverage

---

#### 卡片 2：代理理论
**核心机制**：资产替代 + 投资不足

**关键预测**：成长期权 ↑ → 杠杆 ↓

**考点**：数值例子说明资产替代，推导 debt overhang 条件

---

#### 卡片 3：Pecking Order
**核心公式**：$\text{Dilution} = I \times \frac{V_H - E[V]}{E[V] + NPV}$

**关键预测**：盈利 ↑ → 杠杆 ↓（与 trade-off 相反）

**考点**：推导稀释成本，解释融资顺序

---

#### 卡片 4：派息政策
**核心公式**：$P_{\text{cum}} - P_{\text{ex}} = D \times \frac{1-t_d}{1-t_g}$

**关键数字**：比率 ≈ 0.78（Elton-Gruber 1970）

**考点**：股利 vs. 回购区别，生命周期理论

---

#### 卡片 5：财务困境
**核心数字**：
- 直接成本 1-5%
- Fire sale discount 14-30%

**关键预测**：有形资产 ↑ → 杠杆 ↑

**考点**：直接 vs. 间接成本，清算价值与债务契约

---

#### 卡片 6：SEO 理论
**核心机制**：逆向选择 + 市场择时

**关键数字**：
- Firm commitment CAR = -3%
- Private placement CAR = +4%

**考点**：SEO 公告效应，长期弱势表现

---

## 9. 考前检查清单

### 9.1 必须掌握的推导

- [ ] MM Proposition II (有税)
- [ ] Miller (1977) 个人税模型
- [ ] Myers-Majluf 稀释成本
- [ ] Debt Overhang 投资不足条件
- [ ] Ross 信号分离均衡
- [ ] Ex-dividend pricing (有税)

### 9.2 必须记住的实证发现

- [ ] Graham (2000)：税盾价值 5-10%
- [ ] Warner (1977)：直接破产成本 1-5%
- [ ] Pulvino (1998)：Fire sale discount 14-30%
- [ ] Ikenberry et al. (1995)：回购后 BHAR 12%
- [ ] Fama-French (2001)：股利发放企业比例从 67% 降至 21%

### 9.3 必须会设计的实验

- [ ] 税改 → 杠杆（Tax Theory）
- [ ] 强制披露 → 股权融资（Asymmetric Info）
- [ ] 破产法改革 → 杠杆（Distress Costs）
- [ ] 强制派息 → 过度投资（Agency FCF）
- [ ] 分区法规 → 债务能力（Liquidation Value）

---

## 10. 理论发展时间线

```mermaid
timeline
    title 公司金融理论发展时间线
    1958 : MM Irrelevance (Modigliani & Miller)
    1961 : MM Dividend Irrelevance
    1963 : MM with Corporate Tax
    1970 : Ex-dividend pricing (Elton & Gruber)
    1976 : Agency Costs (Jensen & Meckling)
    1977 : Debt Overhang (Myers)
         : Debt Signaling (Ross)
         : Miller Personal Tax
    1979 : Dividend Signaling (Bhattacharya)
    1980 : DeAngelo-Masulis (Non-debt tax shields)
    1981 : Repurchase Signaling (Vermaelen)
    1984 : Myers-Majluf (Pecking Order)
         : Monitoring Hypothesis (Easterbrook)
    1986 : Free Cash Flow (Jensen)
    1990 : Managerial Discretion (Stulz)
    1992 : Smith-Watts (Growth Options)
    1995 : Ikenberry et al. (Repurchase Undervaluation)
    1998 : Pulvino (Fire Sales)
    2000 : Graham (Tax Shield Value)
    2001 : Fama-French (Disappearing Dividends)
    2002 : Baker-Wurgler (Market Timing)
    2005 : Benmelech et al. (Liquidation Value)
    2006 : DeAngelo et al. (Life-Cycle Theory)
```

---

## 参考文献索引

完整参考文献见各主题笔记：
1. `MM_and_Tax_Theory.md`
2. `Agency_Theory.md`
3. `Pecking_Order_Theory.md`
4. `Payout_Policy_Theory.md`
5. `Financial_Distress_Theory.md`
6. `SEO_Theory.md`（在上级目录）
