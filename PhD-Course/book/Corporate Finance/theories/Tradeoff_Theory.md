# Trade-off Theory and Optimal Capital Structure

## 相关理论链接

- **基准理论**：[MM_and_Tax_Theory](MM_and_Tax_Theory.md) - debt tax shield 的来源
- **成本端**：[Financial_Distress_Theory](Financial_Distress_Theory.md) - expected distress costs
- **成本端**：[Agency_Theory](Agency_Theory.md) - debt overhang, risk shifting, free cash flow discipline
- **对比理论**：[Pecking_Order_Theory](Pecking_Order_Theory.md) - 盈利能力与杠杆预测相反
- **应用**：[SEO_Theory](SEO_Theory.md) - SEO 作为 target leverage rebalancing
- **整合框架**：[00_Theory_Integration](00_Theory_Integration.md) - 公司金融理论总图

---

## 1. 核心问题

**Trade-off theory** 问的是：为什么公司既不会完全不用债，也不会无限举债？

答案是债务同时有收益和成本：

$$
\begin{aligned}
\text{debt benefit}
&=
PV(\text{tax shield})
+ PV(\text{agency discipline}) \\
\text{debt cost}
&=
PV(\text{financial distress costs})
+ PV(\text{debt agency costs}) \\
D^\ast
&=
\arg\max_D V_L(D).
\end{aligned}
$$

---

## 2. 基准模型

```{admonition} Definition: Trade-off valuation
:class: important

简化版本通常写成 trade-off 估值：

$$
\begin{aligned}
V_L(D)
&=
V_U
+ \tau_C D
- C(D),
\end{aligned}
$$

其中 $C(D)$ 汇总 expected distress costs 和 debt agency costs，且满足：

$$
C'(D)>0,
\qquad
C''(D)>0.
$$

^definition-tradeoff-valuation
```

完整版本包含所有收益和成本项：

$$
\begin{aligned}
V_L(D)
&=
V_U
+ \underbrace{PV(\text{tax shield};D)}_{\text{benefit of debt}}
+ \underbrace{PV(\text{agency discipline};D)}_{\text{free cash flow discipline}} \\
&\quad
- \underbrace{PV(\text{financial distress costs};D)}_{\text{bankruptcy and indirect costs}}
- \underbrace{PV(\text{debt agency costs};D)}_{\text{underinvestment / risk shifting}} .
\end{aligned}
$$

---

## 3. 最优杠杆推导

```{admonition} Proposition: Interior optimal leverage
:class: important

若 tax shield 的边际收益递减或债务成本凸，则最优债务 $D^\ast$ 满足：

$$
\begin{aligned}
\frac{\partial V_L(D)}{\partial D}
&=
\frac{\partial PV(\text{tax shield};D)}{\partial D}
+ \frac{\partial PV(\text{agency discipline};D)}{\partial D} \\
&\quad
- \frac{\partial PV(\text{financial distress costs};D)}{\partial D}
- \frac{\partial PV(\text{debt agency costs};D)}{\partial D}
=0.
\end{aligned}
$$

^prop-interior-optimal-leverage
```

在简化模型 $V_L(D)=V_U+\tau_C D-C(D)$ 下：

$$
\begin{aligned}
\max_D V_L(D)
&\Longleftrightarrow
\max_D \left\{V_U+\tau_C D-C(D)\right\} \\
\frac{\partial V_L(D)}{\partial D}
&=
\tau_C-C'(D)=0 \\
&\Longleftrightarrow
C'(D^\ast)=\tau_C.
\end{aligned}
$$

二阶条件：

$$
\begin{aligned}
\frac{\partial^2 V_L(D)}{\partial D^2}
&=
-C''(D)<0.
\end{aligned}
$$

所以最优点是：

$$
\boxed{
\begin{aligned}
\text{marginal tax benefit of debt}
=
\text{marginal expected cost of debt}.
\end{aligned}
}
$$

---

## 4. 比较静态

### 4.1 税盾上升

$$
\begin{aligned}
\tau_C \uparrow
&\Rightarrow
\text{marginal tax benefit} \uparrow \\
&\Rightarrow
D^\ast \uparrow.
\end{aligned}
$$

**预测**：marginal tax rate 高、应税利润稳定的公司应有更高 leverage。

### 4.2 困境成本上升

$$
\begin{aligned}
\Pr(\text{distress}) \uparrow
\ \text{or}\
\text{loss given distress} \uparrow
&\Rightarrow
C'(D) \uparrow \\
&\Rightarrow
D^\ast \downarrow.
\end{aligned}
$$

**预测**：high volatility、high R&D、unique products、growth options 多的公司应有更低 leverage。

### 4.3 抵押价值上升

$$
\begin{aligned}
\text{tangibility} \uparrow
&\Rightarrow
\text{recovery value} \uparrow \\
&\Rightarrow
\text{expected distress cost} \downarrow \\
&\Rightarrow
D^\ast \uparrow.
\end{aligned}
$$

**预测**：tangible assets 多、liquidation value 高的公司应有更高 leverage。

### 4.4 成长期权上升

$$
\begin{aligned}
\text{growth opportunities} \uparrow
&\Rightarrow
\text{underinvestment problem} \uparrow \\
&\Rightarrow
\text{debt agency cost} \uparrow \\
&\Rightarrow
D^\ast \downarrow.
\end{aligned}
$$

**预测**：market-to-book 高的公司通常低 leverage。

---

## 5. 实证预测

| Firm characteristic | Trade-off prediction | 机制 |
| --- | --- | --- |
| Profitability ↑ | leverage ↑ | tax shield value ↑ |
| Marginal tax rate ↑ | leverage ↑ | tax benefit of debt ↑ |
| Tangibility ↑ | leverage ↑ | collateral / recovery value ↑ |
| Size ↑ | leverage ↑ | distress probability and bankruptcy cost ratio ↓ |
| Volatility ↑ | leverage ↓ | expected distress cost ↑ |
| Growth opportunities ↑ | leverage ↓ | underinvestment and debt overhang ↑ |
| Non-debt tax shields ↑ | leverage ↓ | substitutes for interest tax shield |

最容易和 pecking order 冲突的是 profitability：

$$
\begin{aligned}
\text{profitability} \uparrow
&\Rightarrow
\begin{cases}
\text{Trade-off: leverage} \uparrow, & \text{tax shield motive} \\
\text{Pecking order: leverage} \downarrow, & \text{internal funds motive}
\end{cases}
\end{aligned}
$$

---

## 6. 主要实证论文

### 6.1 Graham (2000)

- **问题**：企业是否充分利用 debt tax benefits？
- **设计**：估计 firm-specific marginal tax benefit curve 和 kink。
- **发现**：税盾收益很大，但很多公司看起来保守使用债务。
- **考点**：trade-off 的 benefit side 存在，但 observed leverage 不只由税盾解释。

### 6.2 Rajan and Zingales (1995)

- **问题**：G-7 国家中 leverage determinants 是否稳定？
- **设计**：跨国回归，解释 leverage 与 firm characteristics 的关系。
- **发现**：tangibility、size、market-to-book 等方向大体支持 trade-off，但 profitability 为负是 puzzle。
- **考点**：trade-off 是经验基准，但不是唯一理论。

### 6.3 Frank and Goyal (2009)

- **问题**：哪些变量最稳健地解释 capital structure？
- **设计**：大样本 leverage determinant horse race。
- **发现**：industry median leverage、market-to-book、tangibility、profits、size、inflation 是核心变量。
- **考点**：多数稳定变量能进入 trade-off 框架，但 profitability 仍更像 pecking order。

---

## 7. 考试答题模板

若题目问 trade-off theory，可以按下面顺序写：

$$
\begin{aligned}
V_L(D)
&=
V_U
+ PV(\text{tax shield};D)
- PV(\text{distress costs};D)
- PV(\text{agency costs};D) \\
\frac{\partial V_L(D)}{\partial D}
&=
MB_{\text{debt}}(D)-MC_{\text{debt}}(D)=0 \\
&\Longleftrightarrow
MB_{\text{debt}}(D^\ast)=MC_{\text{debt}}(D^\ast).
\end{aligned}
$$

然后接预测：

$$
\begin{aligned}
\tau_C,\ \text{profitability},\ \text{tangibility},\ \text{size}
&\uparrow
\Rightarrow
D^\ast \uparrow \\
\text{volatility},\ \text{growth opportunities},\ \text{non-debt tax shields}
&\uparrow
\Rightarrow
D^\ast \downarrow.
\end{aligned}
$$
