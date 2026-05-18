---
orphan: true
---

# Threats to identification - empirical categories

识别威胁本质上是：估计到的 $\hat\beta$ 不能只解释为目标机制的 causal effect。

$$
\begin{aligned}
\hat\beta
&=
\underbrace{\beta}_{\text{target causal effect}}
+\underbrace{\text{bias from invalid counterfactual}}_{\text{identification threat}}.
\end{aligned}
$$

## 1. Differential trends / invalid counterfactual

- 核心问题：treated 和 control 在没有政策或事件时，本来就会朝不同方向变化。
- 对 DiD 来说，就是违反 <a href="../02_Econometric_Methods_in_Corporate_Finance.html#assumption-parallel-trends">parallel trends</a>。

$$
\begin{aligned}
\beta^{DiD}
&=
\Big(\Delta Y^{obs}_{T}-\Delta Y^{obs}_{C}\Big) \\
&=
\underbrace{\tau}_{\text{treatment effect}}
+\underbrace{
\Big(\Delta Y^{0}_{T}-\Delta Y^{0}_{C}\Big)
}_{\text{differential trends bias}}.
\end{aligned}
$$

所以：

- 如果 $\Delta Y^{0}_{T}>\Delta Y^{0}_{C}$，估计值会被推大。
- 如果 $\Delta Y^{0}_{T}<\Delta Y^{0}_{C}$，估计值会被压小。

常见来源：

- treated firms 原本就更高 growth / distress / financing need。
- treated industries 原本处在不同 business cycle。
- treated firms 有不同的 pre-trend。

## 2. Confounding shocks

- 核心问题：同一时间发生了另一个 shock，同时影响 treatment exposure 和 outcome。

$$
\begin{aligned}
Y_{it}
&=
\alpha_i+\delta_t
+\beta(Treated_i\times Post_t)
+\underbrace{\theta Z_{it}}_{\text{omitted confounder}}
+\varepsilon_{it},\\
\widehat{\beta}
&=
\beta
+\theta
\frac{
\operatorname{Cov}(Treated_i\times Post_t,Z_{it})
}{
\operatorname{Var}(Treated_i\times Post_t)
}.
\end{aligned}
$$

常见来源：

- 政策变化同时影响 credit supply、investment、profitability、tax planning。
- 事件窗口里有 earnings announcement、M&A、rating change。
- 宏观冲击对 treated group 影响更强。

## 3. Selection into treatment

- 核心问题：谁进入 treated group 不是随机的，而是由 firm characteristics 或 expected outcomes 决定。

$$
\begin{aligned}
D_i
&=1\{g(X_i,\eta_i)>0\},\\
\mathbb{E}[\varepsilon_i\mid D_i=1]
&\neq
\mathbb{E}[\varepsilon_i\mid D_i=0]
\Longrightarrow
\widehat{\beta}\text{ biased}.
\end{aligned}
$$

常见来源：

- high leverage firms 自己选择 equity issuance。
- firms choose policy exposure through lobbying / avoidance / timing。
- bad-news firms 更可能在某类事件中被观察到。

## 4. Anticipation and timing

- 核心问题：市场或公司在正式 treatment 前已经反应，导致 post effect 被提前释放。

$$
\begin{aligned}
Y_{it}
&=
\alpha_i+\delta_t
+\sum_{k\neq -1}\beta_k
\mathbf{1}\{t-T_i=k\}
+\varepsilon_{it}.
\end{aligned}
$$

判断：

- pre-period leads 显著：可能是 anticipation，也可能是 nonparallel trends。
- 事件日期不准：会把真实反应分散到错误窗口。

## 5. Measurement and composition

- 核心问题：变量定义或样本构成改变，使估计结果不是同一对象的比较。

常见来源：

- treatment exposure 测量误差。
- outcome window 选择不一致。
- survivorship bias。
- treated 和 control 的 industry / size composition 改变。

## 用法

在具体题目里，至少写两类：

1. Differential trends / invalid counterfactual：说明 treated 和 control 为什么本来趋势不同。
2. Confounding shocks：说明还有什么同时发生的事件会影响 outcome。

对 <a href="../01_Empirical_Corporate_Finance.html#sec-optimal-capital-structure-hypothesis">Optimal Capital Structure Hypothesis</a> 的政策设计，最自然的两个威胁就是：

- 高杠杆公司本来就可能有不同的融资趋势。
- 税盾政策变化可能同时影响投资、利润、信贷供给和宏观融资环境。

(card-threats-to-identification)=
(^card-threats-to-identification)=
^card-threats-to-identification
