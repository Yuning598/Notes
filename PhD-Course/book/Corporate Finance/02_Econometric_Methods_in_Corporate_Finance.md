# 02 Econometric Methods in Corporate Finance

:::{admonition} Note (Scope).
Source range in this run: `EF8084_slides.pdf` pages `194-324`.
Organization: Causal Inference and Panel/DiD (`195-254`), RDD (`255-287`), IV (`288-324`).

:::

## Mock Question: Causal Identification in Empirical Corporate Finance

(mock-q4-causal-identification)=

:::{admonition} Note
+ Mock Question: **Causal Identification in Empirical Corporate Finance**
1. Briefly state the identifying assumptions and estimands for three methods among panel fixed effects, difference-in-differences, sharp RDD, fuzzy RDD, and instrumental variables.
2. For each selected method, summarize one empirical corporate-finance application or example and its main takeaway.
3. For one selected method, propose an ideal policy change or institutional setting to identify the effect of financing constraints on investment.
4. Give two plausible threats to identification.

:::

### Methods: assumptions, estimands, and corporate-finance examples

corporate-finance 常见自然实验叙事：DiD、RDD、IV，若题目强调 panel data 则用 FE 替换其中一种。

**Panel fixed effects (FE)**：细节见 [Panel Data Basics](#sec-2-1-panel-basics) 与 [FE Estimation](#sec-2-2-fe-estimation)。

$$
\begin{aligned}
y_{it}=\alpha_i+X_{it}'\beta+u_{it},\qquad\mathbb{E}[u_{it}\mid \alpha_i,X_{i1},\ldots,X_{iT}]=0
\end{aligned}
$$

- 识别假设：不可观测异质性 $\alpha_i$ 是 time-invariant，且在 within transformation 后 $X_{it}$ 与剩余误差满足外生性。
- Estimand：$\beta$，即同一 firm / manager / bank 内部随时间变化的 $X$ 对 $Y$ 的平均边际效应；不使用 between-firm variation。
- Corporate finance example：Bertrand and Schoar (2003) 用 manager fixed effects 识别管理者固定特征对企业政策的影响；takeaway 是 corporate policies 中存在可持续的 manager style。

**Difference-in-differences (DiD)**：细节见 [DiD Identification](#prop-did) 与 [Parallel Trends](#assumption-parallel-trends)。

$$
\begin{aligned}
Y_{it}
&=\alpha_i+\gamma_t+\beta D_{it}+\varepsilon_{it},\\
\mathbb{E}[Y_{it}(0)-Y_{i,t-1}(0)\mid treated]
&=\mathbb{E}[Y_{it}(0)-Y_{i,t-1}(0)\mid control]
\end{aligned}
$$

- 识别假设：parallel trends、no anticipation、没有与 treatment 同时发生且只影响 treated group 的 shock，样本构成稳定。
- Estimand：通常是 treated group 的 $ATT$；在 2×2 DiD 中等于交互项 $\beta_3$。
- Corporate finance example：利用 state law changes、financial crises 或 natural disasters 比较受影响企业与未受影响企业；takeaway 是政策或冲击对融资、投资、治理等结果的因果影响来自 differential change，而不是水平差异。

RDD 用“cutoff 附近的准随机性”识别局部因果效应；DiD 用“处理组和控制组在政策前后的趋势差异”识别平均处理效应。

**Sharp RDD**：细节见 [Sharp RDD Setup](#sec-3-1-sharp-rdd) 与 [Local Continuity](#assumption-rdd-continuity)。

$$
\begin{aligned}
D_i&=1\{R_i>c\},\\
\tau_{SRD}
&=\lim_{r\to c^+}\mathbb{E}[Y_i\mid R_i=r]
-\lim_{r\to c^-}\mathbb{E}[Y_i\mid R_i=r]\\
&=\mathbb{E}[Y_i(1)-Y_i(0)\mid R_i=c]
\end{aligned}
$$

- 识别假设：treatment 由 cutoff deterministic assignment 决定；potential outcome CEFs 在 cutoff 连续；个体不能精确操纵 running variable。
- Estimand：cutoff 处的局部平均处理效应 $\tau_{SRD}$。
- Corporate finance example：loan covenant violation 由会计指标跨过阈值触发；takeaway 是阈值附近的企业近似可比，covenant violation 可识别债权人控制权变化对投资、融资或经营决策的局部影响。

**Fuzzy RDD**：细节见 [Fuzzy RDD and LATE](#sec-3-2-fuzzy-rdd)。

$$
\begin{aligned}
\tau_{FRD}
&=\frac{
\lim_{r\to c^+}\mathbb{E}[Y_i\mid R_i=r]
-\lim_{r\to c^-}\mathbb{E}[Y_i\mid R_i=r]
}{
\lim_{r\to c^+}\mathbb{E}[D_i\mid R_i=r]
-\lim_{r\to c^-}\mathbb{E}[D_i\mid R_i=r]
}\\
&=\mathbb{E}[Y_i(1)-Y_i(0)\mid D_i(1)>D_i(0),R_i=c]
\end{aligned}
$$

- 识别假设：outcome 与 treatment potential status 在 cutoff 附近平滑；cutoff 诱发 first-stage jump；monotonicity；阈值指示变量只通过 treatment 影响 outcome。
- Estimand：cutoff 附近 compliers 的 LATE，即 score-local + type-local。
- Corporate finance example：项目排名、信用分、指数纳入排名或政府资助门槛只提高 treatment probability；takeaway 是识别的是被阈值推动而改变融资或投资状态的 marginal firms，而不是所有企业的 ATE。

**Instrumental variables (IV)**：细节见 [Valid IV](#assumption-iv-validity)、[LATE](#definition-late) 与 [Weak IV](#weak-instrument-problem)。

$$
\begin{aligned}
\text{First stage:}\quad X_i&=\pi_0+\pi_1 Z_i+W_i'\pi+\nu_i,\qquad \pi_1\neq 0,\\
\text{Exclusion:}\quad Z_i&\perp \varepsilon_i,\qquad Z_i\to Y_i\text{ only through }X_i,\\
\beta^{IV}&=\frac{\mathrm{Cov}(Y_i,Z_i)}{\mathrm{Cov}(X_i,Z_i)}
\end{aligned}
$$

- 识别假设：relevance、exogeneity、exclusion；若 treatment effects 异质，还需 monotonicity 来解释为 LATE。
- Estimand：同质效应下为结构参数 $\beta$；异质效应下通常是 compliers 的 LATE。
- Corporate finance example：用外生 capital supply shock、监管冲击或资格规则作为工具变量识别融资对投资的影响；takeaway 是 IV 使用 $X$ 中由 $Z$ 推动的 good variation，但必须严肃报告 first-stage strength 与 exclusion 论证。

### Ideal setting for financing constraints and investment

选择 fuzzy RDD / local IV 最自然：政府或金融机构推出一项 credit guarantee / subsidized loan policy，资格由政策前已固定的信用分、资产规模或评级阈值 $R_i\gt c$ 决定，但实际贷款 take-up 不完全。

$$
\begin{aligned}
Z_i&=1\{R_i>c\},\\
D_i&=\text{access / take-up of subsidized credit},\\
Y_i&=\text{post-policy investment or CAPEX},\\
\tau
&=\frac{\Delta_c\mathbb{E}[Y_i\mid R_i]}{\Delta_c\mathbb{E}[D_i\mid R_i]}
=\mathbb{E}[Y_i(1)-Y_i(0)\mid D_i(1)>D_i(0),R_i=c].
\end{aligned}
$$

理想制度条件：
- cutoff 在政策前确定，企业短期内无法精确操纵 $R_i$；
- cutoff 附近 firms 在预处理投资趋势、现金流、规模、行业等协变量上连续；
- policy 只通过改善融资可得性影响投资，不同时改变税收、补贴、监管强度或信息披露要求。

因此识别的是“阈值附近、因政策资格而获得新增融资的 marginal constrained firms”的投资反应；这比全体企业 ATE 更局部，但更接近 financing constraints 的机制。

### Two plausible threats to identification

1. Manipulation / selection：企业可能调整报告资产、信用分、会计指标或 timing 来跨过 cutoff；在 DiD 中对应 treated group 与 control group 本来就有不同趋势。
2. Exclusion / concurrent shocks：政策资格或工具变量可能同时改变税负、监管关注、披露要求、声誉或客户需求；此时 outcome jump / IV reduced form 不只来自 financing constraints。


## 1. Causal Inference Foundations (pp.195-254)

### 1.1 What Is a Causal Effect?
:::{admonition} Definition (Causal Effect)
A causal effect is the change in outcome generated by manipulating one variable while holding other relevant factors fixed (*ceteris paribus*).

:::

(def-causal-effect)=

### 1.2 Potential Outcomes and the Fundamental Problem
定义 potential outcomes:

$$
\begin{aligned}
\delta_i &= Y_i(1)-Y_i(0)
\end{aligned}
$$

观测到的结果是：

$$
\begin{aligned}
Y_i &= Y_i(0)+\big(Y_i(1)-Y_i(0)\big)T_i
\end{aligned}
$$

由上式分情况可得

$$
\begin{aligned}
T_i=1 &\Rightarrow Y_i=Y_i(1),\ \text{missing }Y_i(0) \\
T_i=0 &\Rightarrow Y_i=Y_i(0),\ \text{missing }Y_i(1)
\end{aligned}
$$

:::{admonition} (Fundamental problem)
对同一个个体，$Y_i(1)$ 与 $Y_i(0)$ 不能同时观测，缺失的是 counterfactual。

:::

因此个体层面的处理效应对任何单个 $i$ 都不可被同时观测识别；识别需转向群体参数（如 ATE/LATE）并依赖额外假设（random assignment, unconfoundedness, IV assumptions 等）。

平均处理效应（ATE）定义为

$$
\begin{aligned}
ATE &= \mathbb{E}[Y_i(1)-Y_i(0)]
\end{aligned}
$$

### 1.3 Randomized Controlled Trials (RCTs) Benchmark
:::{admonition} Definition (Random Assignment in RCT)

$$
(Y_i(1),Y_i(0))\perp T_i
$$

:::

为什么这条独立性在 RCT 中成立：$T_i$ 由随机机制生成，而不是由个体“本来会有的结果”决定。  
等价写法是

$$
\begin{aligned}
\Pr(T_i=1\mid Y_i(1),Y_i(0),X_i)=\Pr(T_i=1)
\end{aligned}
$$

即 assignment rule 不使用 potential outcomes 信息。  
因此处理组与对照组在期望上可比，均值差可解释为因果效应；若存在 noncompliance、attrition 或 interference，这个独立性会被削弱。

$$
\left\{
\begin{aligned}
T_i &\in \{0,1\}, &&\text{随机分配（assignment）}\\
D_i &\in \{0,1\}, &&\text{实际接受处理（received/take-up）}
\end{aligned}
\right.
$$

- `non-compliance`：$D_i\neq T_i$（$\Pr(D_i\neq T_i)\gt 0$），识别对象从 $ATE$ 转为 $ITT=\mathbb{E}[Y_i\mid T_i=1]-\mathbb{E}[Y_i\mid T_i=0]$。
	- `ITT`（intention-to-treat）：分配到处理组 vs 对照组的平均结果差，衡量 assignment 的因果效应（不要求人人遵从）。
- `attrition`：令 $R_i\in\{0,1\}$ 为是否留样，若 $(Y_i(1),Y_i(0))\not\perp R_i\mid T_i$，则 $\mathbb{E}[Y_i\mid T_i=t,R_i=1]\neq \mathbb{E}[Y_i(t)]$。
- `interference`：个体 $i$ 的结果受他人处理状态影响，故应写作 $Y_i(t_i,\mathbf t_{-i})$；若 $\exists\,\mathbf t_{-i}\neq \mathbf t'_{-i}$ 使 $Y_i(t_i,\mathbf t_{-i})\neq Y_i(t_i,\mathbf t'_{-i})$，则存在干预外溢（SUTVA 失效）。

先定义处理组与对照组的观测均值差，由 observed outcome identity 与随机分配独立性，连续推导：

$$
\begin{aligned}
\Delta
&= \mathbb{E}[Y_i(1)\mid T_i=1]-\mathbb{E}[Y_i(0)\mid T_i=0]
&&\text{(consistency)}\\
&= \mathbb{E}[Y_i(1)]-\mathbb{E}[Y_i(0)]
&&\text{(random assignment)}\\
&= \mathbb{E}[Y_i(1)-Y_i(0)]
&&\text{(linearity of expectation)}\\
&= ATE
&&\text{(definition of }ATE\text{)}
\end{aligned}
$$

经验研究的基准：观察性数据是否能在可辩护假设下逼近这个等式。

### 1.3.1 When RCTs Aren't Possible

- 许多问题中无法随机分配：$T_i$ 不可操纵（如“企业是否上市”）。
- 仍以理想 RCT 为参照：先写目标 estimand（若可随机化时要识别什么）。
- 核心问题：何时 observational data $\approx$ RCT 信息结构？
- 本课程方法可视为用观察性数据逼近 RCT 识别逻辑。
- 实证三目标：
  - Identification：learn $\mathbb{E}[Y(1)-Y(0)]$ 的哪一部分可识别。
  - Estimation：给定识别结果，如何构造估计量 $\hat\theta$。
  - Inference：给定样本波动，如何量化不确定性（SE/CI/test）。

### 1.4 CMI Assumption and Main Threats
线性模型：

$$
\begin{aligned}
y &= \beta_0 + \beta_1 x_1 + \cdots + \beta_k x_k + u
\end{aligned}
$$

:::{admonition} Definition (Conditional Mean Independence (CMI))

$$
\mathbb{E}[u\mid x_1,\ldots,x_k]=0
$$
这是 OLS 因果解释的核心条件。

**CMI Quick Summary**
在线性模型 $y=\beta_0+\beta_1x_1+\cdots+\beta_kx_k+u$ 中，$\beta_1$ 具因果解释的关键是：

$$
\mathbb{E}[u\mid X]=0,\quad X=(x_1,\ldots,x_k).
$$
该条件 $\Rightarrow \mathbb{E}[u]=0$ 且 $\mathrm{Cov}(x_j,u)=0,\ \forall j$。  
但反向一般不成立：$\mathrm{Cov}(x_j,u)=0,\ \forall j \centernot\Rightarrow \mathbb{E}[u\mid X]=0$（仅零协方差不足以保证 CMI）。

:::

(assumption-cmi)=

三类主要违背（slides p205）：

- omitted variable bias (OVB)
- measurement error
- simultaneity / reverse causality

### 1.5 OVB (pp.206-213)

#### 1.5.1 形式（Form）

单遗漏变量情形：

$$
\begin{aligned}
\text{True: } y &= \beta_0+\beta_1x+\beta_2z+\nu, \\
\text{Estimated: } y &= \beta_0+\beta_1x+u,\qquad u=\beta_2 z+\nu.
\end{aligned}
$$

若 $\mathbb{E}[\nu\mid x,z]=0$，则

$$
\begin{aligned}
\operatorname*{plim}\hat\beta_1
=\beta_1+\frac{\mathrm{Cov}(x,z)}{\mathrm{Var}(x)}\beta_2.
\end{aligned}
$$

记

$$
\delta_{xz}:=\frac{\mathrm{Cov}(x,z)}{\mathrm{Var}(x)},
$$

则

$$
\operatorname*{plim}\hat\beta_1=\beta_1+\delta_{xz}\beta_2,\qquad
\mathrm{Bias}(\hat\beta_1)=\delta_{xz}\beta_2.
$$

一般矩阵形式：

$$
\begin{aligned}
\text{True: } y &= X\beta+Z\gamma+\nu,\qquad \mathbb{E}[\nu\mid X,Z]=0,\\
\text{Estimated: } y &= X\beta+\tilde u.
\end{aligned}
$$

遗漏 $Z$ 回归 $y$ on $X$ 时

$$
\operatorname*{plim}\hat\beta
=\beta+\left(\mathbb{E}[X'X]\right)^{-1}\mathbb{E}[X'Z]\gamma.
$$

因此

$$
B:=\operatorname*{plim}\hat\beta-\beta
=\left(\mathbb{E}[X'X]\right)^{-1}\mathbb{E}[X'Z]\gamma.
$$

#### 1.5.2 例子（Example: Education and Wages）

$$
\begin{aligned}
\text{Estimate: }\ln(wage)&=\beta_0+\beta_1\,educ+u,\\
\text{True: }\ln(wage)&=\beta_0+\beta_1\,educ+\beta_2\,ability+\nu.
\end{aligned}
$$

若遗漏 $ability$，且 $ability$ 既影响工资（$\beta_2\neq 0$）又与 $educ$ 相关（$\mathrm{Cov}(educ,ability)\neq 0$），则 OLS 会把部分“能力回报”归到“教育回报”：

$$
\operatorname*{plim}\hat\beta_1
=\beta_1+\frac{\mathrm{Cov}(educ,ability)}{\mathrm{Var}(educ)}\beta_2.
$$

#### 1.5.3 Bias 如何产生（Mechanism）

OVB 的核心是 CMI 失效。遗漏后误差项含有 $z$ 成分：

$$
u=\beta_2 z+\nu
\quad\Rightarrow\quad
\mathrm{Cov}(x,u)=\beta_2\mathrm{Cov}(x,z)+\mathrm{Cov}(x,\nu).
$$

在 $\mathbb{E}[\nu\mid x,z]=0$ 下，$\mathrm{Cov}(x,\nu)=0$，故

$$
\mathrm{Cov}(x,u)=\beta_2\mathrm{Cov}(x,z).
$$

总结：遗漏变量进入误差项本身不必然导致偏误；关键在于它是否使 CMI 失效。  
即使遗漏变量进入了误差，只要仍有 $\mathbb{E}[u\mid x]=0$（等价地，不与解释变量系统相关），OLS 对目标系数仍可一致；一旦 $\mathbb{E}[u\mid x]\neq 0$，OVB 才出现。

所以产生 OVB 的两个必要条件是：
- 被遗漏变量对 $y$ 有真实影响：$\beta_2\neq 0$；
- 被遗漏变量与核心解释变量相关：$\mathrm{Cov}(x,z)\neq 0$。

偏误方向与大小：

$$
\operatorname{sign}(\mathrm{Bias})=\operatorname{sign}(\beta_2)\times \operatorname{sign}(\mathrm{Cov}(x,z)),
$$

$$
|\mathrm{Bias}|=|\beta_2|\cdot\left|\frac{\mathrm{Cov}(x,z)}{\mathrm{Var}(x)}\right|.
$$

补充：遗漏非线性项（如真实模型含 $x^2$ 却只估线性项）本质上也是 OVB。

#### 1.5.4 如何解决 OVB（Remedies）

- 可观测遗漏变量：直接纳入 controls。
- 不可观测遗漏变量：proxy / FE / DiD / IV。

Proxy 思路（用可观测变量吸收未观测变量可预测部分）：

$$
\begin{aligned}
\text{True: }y&=\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_3^*+u,\\
x_3^*&=\delta_0+\delta_1x_3+v.
\end{aligned}
$$

这里 $x_3^*$ 是真实但不可观测变量，$x_3$ 是可观测 proxy。

代入后

$$
\begin{aligned}
y
&=\beta_0+\beta_1x_1+\beta_2x_2+\beta_3(\delta_0+\delta_1x_3+v)+u \\
&=(\beta_0+\beta_3\delta_0)+\beta_1x_1+\beta_2x_2+(\beta_3\delta_1)x_3+(u+\beta_3v).
\end{aligned}
$$

定义

$$
\alpha_0:=\beta_0+\beta_3\delta_0,\qquad
\alpha_1:=\beta_3\delta_1,\qquad
\varepsilon:=u+\beta_3v,
$$

得到可估计式

$$
y=\alpha_0+\beta_1x_1+\beta_2x_2+\alpha_1x_3+\varepsilon.
$$

:::{admonition} Claim
若 $\mathbb{E}[u\mid x_1,x_2,x_3]=0$ 且 $\mathbb{E}[v\mid x_1,x_2,x_3]=0$，则对该可估计式做 OLS 时，$\beta_1,\beta_2$ 一致。
:::

:::{admonition} Proof
由 $\varepsilon=u+\beta_3 v$，

$$
\mathbb{E}[\varepsilon\mid x_1,x_2,x_3]
=\mathbb{E}[u\mid x_1,x_2,x_3]+\beta_3\mathbb{E}[v\mid x_1,x_2,x_3]=0.
$$
令 $W_i=(1,x_{1i},x_{2i},x_{3i})'$，$\theta=(\alpha_0,\beta_1,\beta_2,\alpha_1)'$，则

$$
y_i=W_i'\theta+\varepsilon_i.
$$
OLS:

$$
\hat\theta-\theta
=\left(\frac{1}{n}\sum_{i=1}^nW_iW_i'\right)^{-1}
\left(\frac{1}{n}\sum_{i=1}^nW_i\varepsilon_i\right).
$$
取概率极限并用 $\mathbb{E}[W_i\varepsilon_i]=\mathbb{E}\!\left[W_i\,\mathbb{E}[\varepsilon_i\mid W_i]\right]=0$，
得 $\operatorname*{plim}\hat\theta=\theta$，故 $\hat\beta_1,\hat\beta_2$ 一致。

:::

Proxy variables work if:
- 若目标仅是 $\beta_1,\beta_2$，并且上述条件均值假设成立，proxy 可移除这两个系数的 OVB。
- 由 $\alpha_1=\beta_3\delta_1$，若可接受 $\delta_1\gt 0$ 的先验，可用 $\operatorname{sign}(\alpha_1)$ 识别 $\operatorname{sign}(\beta_3)$。
- 例：market-to-book ratio 作为 Tobin's $Q$ 的 proxy。

### 1.6 Measurement Error (pp.214-218)

Measurement error 指变量可定义、可量化，但观测值带噪声（measured imprecisely）。

常见 finance 例子：
- Altman $Z$-score 作为 default risk 的 noisy measure。
- Average tax rate 作为 marginal tax rate 的 noisy measure。
- Market leverage 中用账面债务近似市场债务（后者难观测）。
- CEO compensation 中用 Black-Scholes 近似期权价值。
- 实证数据处理误差（如 merge datasets 错配）。

**1.6.1 Measurement Error in Dependent Variable ($y$)**

设真实模型

$$
y^*=\beta_0+\beta_1x_1+\cdots+\beta_kx_k+\epsilon,\qquad
y=y^*+w.
$$

可估计模型写为

$$
y=\beta_0+\beta_1x_1+\cdots+\beta_kx_k+u,\qquad u=\epsilon+w.
$$

:::{admonition} Claim
在 $u=\epsilon+w$ 下：
1. 若 $\mathrm{Cov}(w,x_j)=0,\ \forall j$，则 OLS 一致；
2. 若存在 $j$ 使 $\mathrm{Cov}(w,x_j)\neq 0$，则 OLS 不一致。
:::

:::{admonition} Proof
记 $X=(1,x_1,\ldots,x_k)$，可估计模型为 $y=X\beta+u$，其中 $u=\epsilon+w$。  
OLS 的极限偏误项是

$$
\left(\mathbb{E}[X'X]\right)^{-1}\mathbb{E}[X'u].
$$
且

$$
\mathbb{E}[X'u]
=\mathbb{E}[X'(\epsilon+w)]
=\mathbb{E}[X'\epsilon]+\mathbb{E}[X'w].
$$
在 $\mathbb{E}[\epsilon\mid X]=0$ 下有 $\mathbb{E}[X'\epsilon]=0$，所以是否一致完全取决于 $\mathbb{E}[X'w]$：

$$
\mathbb{E}[X'w]=0 \iff \mathrm{Cov}(w,x_j)=0,\ \forall j.
$$
因此：
- 若 $\mathrm{Cov}(w,x_j)=0,\ \forall j$，则 $\mathbb{E}[X'u]=0$，OLS 一致；
- 若存在 $j$ 使 $\mathrm{Cov}(w,x_j)\neq 0$，则 $\mathbb{E}[X'u]\neq 0$，OLS 不一致。

另外，当 $\mathbb{E}[X'w]=0$ 时虽一致，但

$$
\mathrm{Var}(u)=\mathrm{Var}(\epsilon)+\mathrm{Var}(w)+2\,\mathrm{Cov}(\epsilon,w)
$$
通常更大（classical 下 $\mathrm{Cov}(\epsilon,w)=0$），故标准误上升、显著性下降。

:::

**1.6.2 Measurement Error in Independent Variable ($x$)**

单解释变量的 classical measurement error：

$$
x=x^*+w,\qquad \mathbb{E}[w\mid x^*]=0.
$$

此时 OLS 出现 attenuation bias：

$$
\begin{aligned}
\operatorname*{plim}\,\hat\beta
&= \beta\cdot \frac{\sigma^2_{x^*}}{\sigma^2_{x^*}+\sigma^2_w}
\end{aligned}
$$

推导核心：观测到的 $y$ 由真实变量 $x^*$ 生成（$y=\alpha+\beta x^*+u$），而回归里使用的观测解释变量是 $x=x^*+w$（真实值 + 测量误差）。proof 的关键就是把这两个“观测表达式”代入 $\operatorname*{plim}\hat\beta=\frac{\mathrm{Cov}(x,y)}{\mathrm{Var}(x)}$，在 classical 假设下消去交叉项，得到衰减系数。

本质：先写对 DGP，再看观测机制如何改变矩。measurement error 会把 $\mathrm{Var}(x)$ 中加入纯噪声 $\sigma_w^2$，但不会同比例增加与 $y$ 的有效协方差，因此估计系数被乘上信号占比 $\frac{\sigma_{x^*}^2}{\sigma_{x^*}^2+\sigma_w^2}$ 并向 0 收缩（attenuation）。

:::{admonition} Claim
在 classical measurement error（$x=x^*+w$）下，
$$
\operatorname*{plim}\,\hat\beta
= \beta\cdot \frac{\sigma^2_{x^*}}{\sigma^2_{x^*}+\sigma^2_w},
$$
即斜率被衰减到 0 的方向（attenuation）。
:::

:::{admonition} Proof
设真实模型

$$
y=\alpha+\beta x^*+u,\qquad \mathbb{E}[u\mid x^*]=0,
$$
但可观测的是 $x=x^*+w$，并满足 classical 条件

$$
\mathbb{E}[w]=0,\quad \mathrm{Cov}(x^*,w)=0,\quad \mathrm{Cov}(w,u)=0.
$$
简单回归 $y$ on $x$ 时，

$$
\operatorname*{plim}\,\hat\beta=\frac{\mathrm{Cov}(x,y)}{\mathrm{Var}(x)}.
$$
分子：

$$
\begin{aligned}
\mathrm{Cov}(x,y)
&=\mathrm{Cov}(x^*+w,\ \alpha+\beta x^*+u) \\
&=\beta\,\mathrm{Cov}(x^*,x^*)+\beta\,\mathrm{Cov}(w,x^*)+\mathrm{Cov}(x^*,u)+\mathrm{Cov}(w,u) \\
&=\beta\,\mathrm{Var}(x^*) \\
&=\beta\,\sigma_{x^*}^2.
\end{aligned}
$$
分母：

$$
\begin{aligned}
\mathrm{Var}(x)
&=\mathrm{Var}(x^*+w) \\
&=\mathrm{Var}(x^*)+\mathrm{Var}(w)+2\,\mathrm{Cov}(x^*,w) \\
&=\sigma_{x^*}^2+\sigma_w^2.
\end{aligned}
$$
故

$$
\operatorname*{plim}\,\hat\beta
=\beta\cdot\frac{\sigma_{x^*}^2}{\sigma_{x^*}^2+\sigma_w^2},
$$
且衰减因子 $\lambda:=\frac{\sigma_{x^*}^2}{\sigma_{x^*}^2+\sigma_w^2}\in(0,1)$，因此估计量向 0 收缩（attenuation）。

:::

多解释变量下（仅 $x_k$ 含 classical measurement error）：

$$
y=\beta_0+\beta_1x_1+\cdots+\beta_{k-1}x_{k-1}+\beta_k x_k^*+\epsilon,\qquad x_k=x_k^*+w.
$$

在 $\mathbb{E}[\epsilon]=\mathbb{E}[w]=0$ 且 $w\perp (x_1,\ldots,x_{k-1},x_k^*)$ 下，

$$
\operatorname*{plim}\,\hat\beta_k
=\beta_k\cdot \frac{\sigma_r^2}{\sigma_r^2+\sigma_w^2},
$$

其中 $\sigma_r^2$ 是将 $x_k^*$ 对 $(x_1,\ldots,x_{k-1})$ 与常数项做线性投影后的残差方差。  
因此 $\hat\beta_k$ 仍是向 0 的衰减偏误；其余系数的偏误方向一般不易直接判定。

:::{admonition} Note
Measurement Error with Multiple Variables
若多个解释变量同时进入回归，只要其中一个解释变量存在测量误差，所有系数都可能被污染。  
偏误大小与方向取决于解释变量之间的相关结构（correlations among all $X$'s），因此一般不再能像单变量情形那样直接判断方向。

经验例子：
- Fazzari et al. (1988): investment regression 中 Tobin's $Q$ 含噪声测量误差。
- Erickson and Whited (2000): 在校正 measurement error 后，现金流（cash flow）系数显著减弱或消失。

**Claim.**
在多解释变量回归中，若只有第 $j$ 个解释变量存在 classical measurement error，则偏误向量满足

$$
\operatorname*{plim}\hat\beta-\beta
=-\beta_j\sigma_w^2\,Q^{-1}e_j,\qquad Q:=\mathbb{E}[x_i x_i'].
$$
因而当解释变量相关时，$Q^{-1}e_j$ 通常有多个非零元素，故所有系数都可能被污染。

<hr>

**Proof**
设

$$
y_i=x_i^{*'}\beta+\varepsilon_i,\qquad x_i=x_i^*+e_j w_i,
$$
其中 $e_j$ 为第 $j$ 个基向量，$\mathbb{E}[w_i]=0,\ w_i\perp (x_i^*,\varepsilon_i)$，并令

$$
u_i:=\varepsilon_i-\beta_j w_i,\qquad Q:=\mathbb{E}[x_i x_i'].
$$

$$
\begin{aligned}
\operatorname*{plim}(\hat\beta-\beta)
&=\operatorname*{plim}\!\left[\left(\frac{X'X}{n}\right)^{-1}\left(\frac{X'u}{n}\right)\right] \\
&=Q^{-1}\mathbb{E}[x_i u_i] \\
&=Q^{-1}\mathbb{E}\!\left[x_i(\varepsilon_i-\beta_j w_i)\right] \\
&=Q^{-1}\!\left(\mathbb{E}[x_i\varepsilon_i]-\beta_j\mathbb{E}[x_i w_i]\right) \\
&=Q^{-1}\!\left(0-\beta_j\mathbb{E}[(x_i^*+e_j w_i)w_i]\right) \\
&=Q^{-1}\!\left[-\beta_j\left(\mathbb{E}[x_i^*w_i]+e_j\mathbb{E}[w_i^2]\right)\right] \\
&=Q^{-1}(-\beta_j\sigma_w^2 e_j) \\
&=-\beta_j\sigma_w^2\,Q^{-1}e_j.
\end{aligned}
$$
若 $Q$ 非对角（解释变量相关），$Q^{-1}e_j$ 一般含多个非零分量，因此多个系数同时偏误；只有在解释变量正交时才可能只污染第 $j$ 个系数。

:::

Measurement Error vs. Proxy：
- Measurement error：目标变量本身定义清晰（如 Tobin's $Q$），但测量不精确。
- Proxy：目标变量本身不可观测（如 ability），用可观测变量去近似其可预测部分。
- 两者都会引入识别挑战，但经济含义不同：前者是 noisy measure of a defined construct，后者是 stand-in for an unobservable construct。

### 1.7 Simultaneity Bias(p219)
Simultaneity（reverse causality）指 $y$ 与 $x$ 在同一系统内共同决定（equilibrium determination），而非单向因果。  
典型 finance 例子：CEO ownership 与 financial leverage 可能相互影响。

简单方程组：

$$
\begin{aligned}
y &= \beta x+\epsilon, \\
x &= \alpha y+\nu,
\end{aligned}
\qquad \mathrm{Cov}(\epsilon,\nu)=0.
$$

:::{admonition} Claim
在上述系统下，$\mathrm{Cov}(x,\epsilon)=\frac{\alpha}{1-\alpha\beta}\mathrm{Var}(\epsilon)\neq 0$（只要 $\alpha\neq 0$），故用 OLS 回归 $y$ on $x$ 不一致。
:::

:::{admonition} Proof

由方程组代入得

$$
x=\alpha(\beta x+\epsilon)+\nu
\Rightarrow
(1-\alpha\beta)x=\alpha\epsilon+\nu
\Rightarrow
x=\frac{\alpha\epsilon+\nu}{1-\alpha\beta}.
$$
因而

$$
\mathrm{Cov}(x,\epsilon)
=\mathrm{Cov}\!\left(\frac{\alpha\epsilon+\nu}{1-\alpha\beta},\epsilon\right)
=\frac{\alpha}{1-\alpha\beta}\mathrm{Var}(\epsilon)
+\frac{1}{1-\alpha\beta}\mathrm{Cov}(\nu,\epsilon).
$$
由 $\mathrm{Cov}(\nu,\epsilon)=0$，

$$
\mathrm{Cov}(x,\epsilon)=\frac{\alpha}{1-\alpha\beta}\mathrm{Var}(\epsilon)\neq 0.
$$
故结构方程 $y=\beta x+\epsilon$ 中解释变量 $x$ 与误差项相关，CMI 失效，OLS 不一致。

:::

simultaneity 下 OLS 一般不一致，且偏误方向在更一般设定下不易直接判断。

## 2. Panel Data, FE, and DiD (pp.220-254)

:::{admonition} Note
Exam positioning
本节对应 [Mock Question 4](#mock-q4-causal-identification) 中的 panel fixed effects 与 DiD：重点是 identifying assumptions、estimand、corporate-finance application。

:::

(sec-2-1-panel-basics)=
### 2.1 Panel Data Basics and FE Motivation

#### 2.1.1 Data Structure

- Pure cross-sectional dataset：$N$ 个个体在单一时点 $t$（或个体特定时点 $t_i$）的观测。例：M\&As。
- Pure time-series dataset：单一个体 $i$ 在 $T$ 个时期的观测。例：S\&P500 returns。
- Panel dataset：$N$ 个个体在 $T$ 个时期的观测，样本规模约为 $N\times T$。典型观测写作 $(y_{it},x_{1it},\ldots,x_{kit})$。例：Compustat 上自 1950 年以来上市公司面板。

#### 2.1.2 Panel Model and RE vs FE

面板数据基本模型：

$$
\begin{aligned}
y_{it}
&=\alpha_i+\beta_1x_{1it}+\cdots+\beta_kx_{kit}+u_{it}
\end{aligned}
$$

常用条件：

$$
\mathbb{E}[u_{it}]=0,\qquad
\mathbb{E}[u_{it}\mid \alpha_i,X_{i1},\ldots,X_{iT}]=0
$$

其中 $\alpha_i$ 是不可观测个体效应（unobserved heterogeneity）。

Random effects vs fixed effects：
- 若 $\mathrm{Cov}(\alpha_i,x_{kit})=0$，RE 可行（OLS/GLS 一致）。
- 若 $\mathrm{Cov}(\alpha_i,x_{kit})\neq 0$，应优先 FE（此时 pooled OLS/RE 不一致）。

pooled OLS 形式（忽略个体效应）：

$$
y_{it}=\beta_0+X_{it}'\beta+e_{it},\qquad e_{it}:=\alpha_i+u_{it}.
$$

在 corporate finance 中，cross-sectional unobserved heterogeneity 往往与 $X$ 相关；若不控制 fixed effects，容易产生 OVB。


:::{admonition} Claim
在模型
$$
y_{it}=\alpha_i+\beta x_{it}+u_{it}
$$
下，若 $\mathrm{Cov}(x_{it},\alpha_i)\neq 0$，则 pooled OLS 存在 OVB；FE 的 within 变换可消去 $\alpha_i$ 并缓解该偏误。
:::

:::{admonition} Proof
若忽略 $\alpha_i$，pooled OLS 估计的是

$$
y_{it}=\beta x_{it}+\varepsilon_{it},\qquad \varepsilon_{it}:=\alpha_i+u_{it}.
$$
因而

$$
\mathrm{Cov}(x_{it},\varepsilon_{it})
=\mathrm{Cov}(x_{it},\alpha_i)+\mathrm{Cov}(x_{it},u_{it}).
$$
即使 $\mathrm{Cov}(x_{it},u_{it})=0$，只要 $\mathrm{Cov}(x_{it},\alpha_i)\neq 0$，仍有 $\mathrm{Cov}(x_{it},\varepsilon_{it})\neq 0$，CMI 失效。  
单变量直观偏误式：

$$
\operatorname*{plim}\hat\beta^{pooled}
=\beta+\frac{\mathrm{Cov}(x_{it},\alpha_i)}{\mathrm{Var}(x_{it})}.
$$
FE 做 within 变换：

$$
\begin{aligned}
y_{it}&=\alpha_i+\beta x_{it}+u_{it},\\
\bar y_i&=\alpha_i+\beta \bar x_i+\bar u_i,\\
y_{it}-\bar y_i
&= (\alpha_i-\alpha_i)+\beta(x_{it}-\bar x_i)+(u_{it}-\bar u_i)\\
&=\beta(x_{it}-\bar x_i)+(u_{it}-\bar u_i).
\end{aligned}
$$
其中

$$
\bar y_i:=\frac{1}{T}\sum_{t=1}^T y_{it},\qquad
\bar x_i:=\frac{1}{T}\sum_{t=1}^T x_{it},\qquad
\bar u_i:=\frac{1}{T}\sum_{t=1}^T u_{it}.
$$
常数个体效应 $\alpha_i$ 被消去，从而避免由 $\mathrm{Cov}(x_{it},\alpha_i)$ 引致的 OVB。

:::

(sec-2-2-fe-estimation)=
### 2.2 Fixed Effects Estimation: Within, FD, and LSDV

在

$$
y_{it}=\alpha_i+X_{it}'\beta+u_{it}
$$

下，常见 FE 估计器有三类：

#### 2.2.1 Three Estimators

1. Within transformation (demeaning)

$$
\tilde y_{it}:=y_{it}-\bar y_i,\qquad
\tilde X_{it}:=X_{it}-\bar X_i,\qquad
\tilde u_{it}:=u_{it}-\bar u_i,
$$

$$
\tilde y_{it}=\tilde X_{it}'\beta+\tilde u_{it}.
$$

在该式上做 OLS，得到 within-group（fixed effects）估计量。

2. First differencing

$$
\Delta y_{it}=(\Delta X_{it})'\beta+\Delta u_{it}.
$$

3. Least Squares Dummy Variable (LSDV)

$$
y_{it}=\alpha+X_{it}'\beta+\sum_{m=1}^{N-1}\delta_m D_{im}+u_{it},
$$

其中 $D_{im}$ 是个体虚拟变量（省略一个 dummy 避免完全共线）。

#### 2.2.2 Consistency Conditions

Within 一致性需要

$$
\mathbb{E}\!\left[(u_{it}-\bar u_i)X_{it}\right]=0.
$$

strict exogeneity

$$
\mathbb{E}[u_{it}\mid \alpha_i,X_{i1},\ldots,X_{iT}]=0
$$

可推出该条件（但假设较强）。

FD 一致性需要

$$
\mathbb{E}\!\left[(u_{it}-u_{i,t-1})(X_{it}-X_{i,t-1})\right]=0.
$$

该条件通常被视为弱于 strict exogeneity，但若 $X_{it}$ 受 $u_{i,t-1}$ 影响，仍会被违反。

:::{admonition} Note
Equivalence Note
在 balanced panel 下三种做法常得到相同或非常接近的 $\beta$ 估计。  
严格结论：Within 与 LSDV 在同一设定下数值等价；FD 与 Within 在 $T=2$ 时等价，$T\gt 2$ 时一般不必然数值相同（但在标准外生性条件下都可一致识别 $\beta$）。

**Claim.**
证明两点：  
1. Within 与 LSDV 对 $\beta$ 的估计数值等价；  
2. FD 与 Within 在 $T=2$ 时数值等价（$T\gt 2$ 一般不等价）。

<hr>

**Proof**
令堆叠模型为

$$
y=D\alpha+X\beta+u,
$$
其中 $D$ 是个体虚拟变量矩阵。按 Frisch-Waugh-Lovell 定理，LSDV 的 $\beta$ 估计量为

$$
\hat\beta_{LSDV}=(X'M_DX)^{-1}X'M_Dy,\qquad M_D:=I-D(D'D)^{-1}D'.
$$
对个体虚拟变量，$M_D$ 恰好实现“去个体均值”（within 变换）：

$$
(M_Dy)_{it}=y_{it}-\bar y_i,\qquad (M_DX)_{it}=X_{it}-\bar X_i.
$$
故

$$
\hat\beta_{LSDV}
=\left(\tilde X'\tilde X\right)^{-1}\tilde X'\tilde y
=\hat\beta_{Within}.
$$

再证 $T=2$ 时 FD 与 Within 等价。记

$$
\Delta y_i:=y_{i2}-y_{i1},\qquad \Delta X_i:=X_{i2}-X_{i1}.
$$
对 $T=2$，

$$
\tilde y_{i1}=-\frac{1}{2}\Delta y_i,\quad
\tilde y_{i2}= \frac{1}{2}\Delta y_i,\quad
\tilde X_{i1}=-\frac{1}{2}\Delta X_i,\quad
\tilde X_{i2}= \frac{1}{2}\Delta X_i.
$$
解释：当 $T=2$ 时，demeaning 后两期“和为 0”，并把 difference 放在一起写：

$$
\begin{aligned}
\tilde X_{i1}+\tilde X_{i2}
&= (X_{i1}-\bar X_i)+(X_{i2}-\bar X_i)
= \underbrace{X_{i1}+X_{i2}-2\bar X_i}_{=\,0},\\
\tilde y_{i1}+\tilde y_{i2}
&= (y_{i1}-\bar y_i)+(y_{i2}-\bar y_i)
= \underbrace{y_{i1}+y_{i2}-2\bar y_i}_{=\,0}.
\end{aligned}
$$
因而 $\tilde X_{i1}=-\tilde X_{i2}=-\frac12\Delta X_i,\ \tilde y_{i1}=-\tilde y_{i2}=-\frac12\Delta y_i$，并有

$$
\begin{aligned}
\tilde X'\tilde X
&=\sum_i\left(\tilde X_{i1}\tilde X_{i1}'+\tilde X_{i2}\tilde X_{i2}'\right) \\
&=\sum_i\left[\left(-\frac12\Delta X_i\right)\left(-\frac12\Delta X_i\right)'+\left(\frac12\Delta X_i\right)\left(\frac12\Delta X_i\right)'\right] \\
&=\frac12\sum_i \Delta X_i\Delta X_i',\\
\tilde X'\tilde y
&=\sum_i\left(\tilde X_{i1}\tilde y_{i1}+\tilde X_{i2}\tilde y_{i2}\right) \\
&=\sum_i\left[\left(-\frac12\Delta X_i\right)\left(-\frac12\Delta y_i\right)+\left(\frac12\Delta X_i\right)\left(\frac12\Delta y_i\right)\right] \\
&=\frac12\sum_i \Delta X_i\Delta y_i.
\end{aligned}
$$
所以

$$
\hat\beta_{Within}
=(\tilde X'\tilde X)^{-1}\tilde X'\tilde y
=\left(\sum_i \Delta X_i\Delta X_i'\right)^{-1}\sum_i \Delta X_i\Delta y_i
=\hat\beta_{FD}.
$$
当 $T\gt 2$ 时，上述 $\frac12$ 比例关系不再成立，故 FD 与 Within 一般不再数值等价（但在标准条件下都可一致）。

:::

#### 2.2.3 Benefits of FE Estimator

- 允许 $\alpha_i$ 与 $X_{it}$ 任意相关（这是 FE 相对 RE 的核心优势）。
- 非常灵活：$\alpha_i$ 吸收所有“组内不随时间变化”的不可观测因素。
- 可扩展到多维 fixed effects（如 year FE, industry FE, headquarters-state FE, industry-year FE）。
- 在很多实证场景有用：例如识别 manager 固定特征影响（Bertrand and Schoar, 2003）；区分金融中介流动性的供需因素（Khwaja and Mian, 2008）。

#### 2.2.4 Limitations of FE Estimator

- 去除了 between-group variation，识别仅来自 within-group variation。
- 无法估计 time-invariant regressors 的系数（被 FE 吸收）。
- 可能放大 measurement error（attenuation bias 变重）。
- 非线性模型（Logit/Probit）下，small-$T$ 会出现 incidental parameters problem。

#### 2.2.5 Standard Errors in Panel Data

面板回归中误差常存在相关性，需按依赖结构做稳健标准误：

- Within-firm over time（serial correlation）：按 firm 聚类（cluster by firm）。
- Across firms in same period（cross-sectional dependence）：按 time 聚类（cluster by time）或使用 Fama-MacBeth 推断。
- 同时存在两类相关：做双向聚类（two-way clustering by firm and time）。

实践原则：通常按 treatment variation 所在层级聚类。  
例如 treatment 主要在 state/industry 层面变化，应至少在该层级聚类。

Reference：Petersen (2008).

### 2.3 Simple Differences as DiD Building Blocks

1. Cross-sectional difference  
2. Time-series difference

这两种 simple differences 是 DiD 的基础构件：前者比较同一时点处理组/对照组差异，后者比较同一组在前后时期变化。

#### 2.3.1 Cross-sectional Simple Difference

只使用 post-treatment 截面时，可写为

$$
y_{i,t}=\beta_0+\beta_1 d_i+u_{i,t},
$$

其中 $d_i=1$ 表示处理组，$d_i=0$ 表示对照组。

系数含义可压缩为

$$
\begin{aligned}
\mathbb{E}[y\mid d=1]-\mathbb{E}[y\mid d=0]
&=\beta_1+\underbrace{\big(\mathbb{E}[u\mid d=1]-\mathbb{E}[u\mid d=0]\big)}_{=\,0\ \text{(no selection bias)}}\\
&=\beta_1.
\end{aligned}
$$

若令 $u=y(0)-\mathbb{E}[y(0)]$，则上面的零限制等价于

$$
\underbrace{\mathbb{E}[y(0)\mid d=1]-\mathbb{E}[y(0)\mid d=0]}_{=\,0},
$$

即 treated 组与 control 组在“未处理状态”下可比。

#### 2.3.2 Time-series Simple Difference

仅使用 treated 组在 treatment 前后两期时，可写为

$$
y_{i,t}=\beta_0+\beta_1 p_t+u_{i,t},
$$

其中 $p_t=1$ 表示 post-treatment，$p_t=0$ 表示 pre-treatment。  
此时 pre-period 充当“对照组”。

系数含义可压缩为

$$
\begin{aligned}
\mathbb{E}[y\mid p=1]-\mathbb{E}[y\mid p=0]
&=\beta_1+\underbrace{\big(\mathbb{E}[u\mid p=1]-\mathbb{E}[u\mid p=0]\big)}_{=\,0}\\
&=\beta_1+\underbrace{\big(\mathbb{E}[y(0)\mid p=1]-\mathbb{E}[y(0)\mid p=0]\big)}_{=\,0\ \text{(no common shock)}}\\
&=\beta_1.
\end{aligned}
$$

即识别要求“若无 treatment，pre/post 的反事实均值不变”；存在 macroeconomic shocks 时该条件常失效，因此 time-series simple difference 单独使用可信度有限。

### 2.4 Difference-in-Differences

DiD 用 panel data 同时结合两种 simple differences（cross-sectional + time-series）。  
典型应用：natural disasters、state law changes、financial crises、private equity buyouts 等自然实验场景。

:::{admonition} Proposition: DiD Identification
在 parallel trends 成立下，DiD 交互项识别平均处理效应。

:::

(prop-did)=

标准 2x2 DiD 模型：

$$
\begin{aligned}
y_{it} &= \beta_0 + \beta_1 d_i + \beta_2 p_t + \beta_3(d_i\times p_t) + u_{it}
\end{aligned}
$$

其中：
- $d_i$：treated 组指示变量（treated=1, control=0）
- $p_t$：post 期指示变量（post=1, pre=0）

2×2 条件均值展开：

$$
\begin{aligned}
\mathbb{E}[y\mid d=1,p=1] &= \beta_0+\beta_1+\beta_2+\beta_3,\\
\mathbb{E}[y\mid d=1,p=0] &= \beta_0+\beta_1,\\
\mathbb{E}[y\mid d=0,p=1] &= \beta_0+\beta_2,\\
\mathbb{E}[y\mid d=0,p=0] &= \beta_0.
\end{aligned}
$$

因此

$$
\begin{aligned}
\text{treated 组前后变化}
&=\mathbb{E}[y\mid d=1,p=1]-\mathbb{E}[y\mid d=1,p=0]
=\beta_2+\beta_3,\\
\text{control 组前后变化}
&=\mathbb{E}[y\mid d=0,p=1]-\mathbb{E}[y\mid d=0,p=0]
=\beta_2,\\
\text{DiD}
&=(\beta_2+\beta_3)-\beta_2
=\beta_3.
\end{aligned}
$$

参数解释：
- $\beta_1$：treatment 与 control 在 pre-treatment 的平均截面差异。
- $\beta_2$：两组共享的 pre-post 时间变化（common shock/trend）。
- $\beta_3$：DiD estimand（核心参数，treatment 组相对 control 组的差异化变化）。

等价写法：

$$
\beta_3=
\big(\mathbb{E}[y\mid d=1,p=1]-\mathbb{E}[y\mid d=1,p=0]\big)
-\big(\mathbb{E}[y\mid d=0,p=1]-\mathbb{E}[y\mid d=0,p=0]\big).
$$

加入 controls 后（要求 $X_{it}$ 不受 treatment 影响，即不是 bad controls）：

$$
\begin{aligned}
y_{it} &= \beta_0 + \beta_1 d_i + \beta_2 p_t + \beta_3(d_i\times p_t) + X'_{it}\Gamma + \varepsilon_{it}
\end{aligned}
$$

识别可写成

$$
\beta_3
=\text{DiD effect}
+\underbrace{\Big(\mathbb{E}[\varepsilon\mid d=1,p=1,X]-\mathbb{E}[\varepsilon\mid d=1,p=0,X]-\mathbb{E}[\varepsilon\mid d=0,p=1,X]+\mathbb{E}[\varepsilon\mid d=0,p=0,X]\Big)}_{=\,0\ \text{if }\mathbb{E}[\varepsilon\mid d,p,X]=0}.
$$

为何加 controls：
- Efficiency：若 assignment 已随机，加入能解释 $y_{it}$ 的预处理协变量可降低残差方差，提高 $\beta_3$ 估计精度。
- Randomization check：在随机分配下，加入/不加入 $X$ 时 $\beta_3$ 应基本稳定；明显变化提示可比性问题。
- Conditional randomization：若 assignment 由可观测规则决定（导致 $\mathbb{E}[\varepsilon\mid d,p]\neq 0$），控制该规则对应的 $X$ 后可恢复 $\mathbb{E}[\varepsilon\mid d,p,X]=0$，从而识别 $\beta_3$。

#### 2.4.1 Key Features of DiD

在

$$
y_{it}=\beta_0+\beta_1 d_i+\beta_2 p_t+\beta_3(d_i\times p_t)+u_{it}
$$

中，$\beta_3$ 由“双重差分”识别，因此自动净化两类干扰：

$$
\beta_3
=\underbrace{\Delta_t\mathbb{E}[y\mid d=1]}_{\text{treated pre-post change}}
-\underbrace{\Delta_t\mathbb{E}[y\mid d=0]}_{\text{control pre-post change}}.
$$

- 时间不变组间差异（time-invariant group differences）由 $d_i$ 吸收，不进入 $\beta_3$。
- 两组共同时间趋势（common time trend）由 $p_t$ 吸收，不进入 $\beta_3$。
- 因而内部效度威胁主要来自“组间异质趋势”或并发冲击（而非纯组别常数差异、纯共同时间趋势）。
- 在带 group FE 和 time FE 的设定里，$d_i$ 与 $p_t$ 往往被 FE 吸收，核心识别仍来自交互项 $d_i\times p_t$。

#### 2.4.2 When Would Simple Approaches Work?

基于同一模型，可把三种做法的识别条件并列为：

- Cross-sectional difference（只看同一时点组间差）要求

$$
\mathbb{E}[y\mid d=1]-\mathbb{E}[y\mid d=0]
=\beta_1+\beta_3p_t+\underbrace{\big(\mathbb{E}[u\mid d=1]-\mathbb{E}[u\mid d=0]\big)}_{=\,0},
$$

核心是“无预存组间差异/无截面选择偏差”（实践上通常依赖随机分配）。

- Time-series difference（只看同一组前后差）要求

$$
\mathbb{E}[y\mid p=1]-\mathbb{E}[y\mid p=0]
=\beta_2+\beta_3d_i+\underbrace{\big(\mathbb{E}[u\mid p=1]-\mathbb{E}[u\mid p=0]\big)}_{=\,0},
$$

核心是“无共同时间冲击”，实证中通常较强、常被违反。

- DiD 允许 $\beta_1\neq 0$、$\beta_2\neq 0$；只要求 parallel trends（在无处理时两组变化趋势相同）即可识别 $\beta_3$。

### 2.5 Parallel Trends and Event Study
:::{admonition} Definition (Parallel Trends)
Absent treatment, treated and control groups would evolve in parallel over time.

:::

(assumption-parallel-trends)=

识别含义：若无 treatment，treated 与 control 的反事实路径应“平行”演化。  
该假设本身不能被正式检验（counterfactual 不可观测），实证上通常用 event-study 的 pre-trend 检查做间接支持。

#### 2.5.1 Graphical Intuition: Why Parallel Trends Matters

记

$$
\Delta y_T:=\mathbb{E}[y\mid d=1,p=1]-\mathbb{E}[y\mid d=1,p=0],\quad
\Delta y_C:=\mathbb{E}[y\mid d=0,p=1]-\mathbb{E}[y\mid d=0,p=0],\quad
\text{DiD}:=\Delta y_T-\Delta y_C.
$$

Case A: Parallel trends + placebo treatment（应估计为 0）  

- 图中 treated 与 control 的 pre-post 变化相同：$\Delta y_T=\Delta y_C$。
- 因此 $\text{DiD}=0$，安慰剂检验通过。

Case B: Parallel trends + true positive effect（可被 DiD 正确识别）  

- treated 组观测到的变化可分解为“共同趋势 + treatment jump”。
- DiD 净掉共同趋势后得到正效应：$\text{DiD}\gt 0$，且等于图中的竖直 gap。

Case C: Nonparallel trends + placebo（假阳性）  

- 即使真实 treatment effect 为 0，treated 组的反事实趋势本来就更陡。
- 于是 $\Delta y_T(0)\gt \Delta y_C(0)$，会机械地产生 $\text{DiD}\gt 0$（把趋势差误判为 treatment effect）。

Case D: Nonparallel trends + placebo（假阴性/反向偏误）  

- 图示中 $\Delta y_T=0$ 而 $\Delta y_C\gt 0$，因此 $\text{DiD}\lt 0$。
- 这说明 nonparallel trends 不仅会制造“假阳性”，也可能制造“负向伪效应”。

#### 2.5.2 Event Study Specification

令 $e_i\in\{1,\dots,T\}$ 为个体 $i$ 的 treatment date，定义 event time dummies

$$
D^k_{it}:=1\{t=e_i+k\}.
$$

即使是 staggered adoption（最终各单位都可能被处理），也可在同一回归中“pooled DiDs”估计动态效应：

$$
\begin{aligned}
Y_{it} = \alpha_i + \gamma_t + X'_{it}\phi + \sum_{k\in K}\beta_k D^k_{it} + \varepsilon_{it}
\end{aligned}
$$

常用两侧分布滞后窗口：

$$
K=\{\underline{k},\ldots,-2,0,\ldots,\bar{k}\}.
$$

实践上常把两端做 binning（把更远 lead/lag 合并到端点 bin）；并需归一化一个系数（通常设 $\beta_{-1}=0$）以避免线性依赖。
检验 parallel trends 时，重点看处理前 leads 是否联合接近 0。

#### 2.5.3 Multiple Treatments at Different Points in Time

当不同 group 在不同年份进入 treatment（staggered adoption）时，可写

$$
y_{igt}=\beta_1 d_{gt}+X'_{igt}\Gamma+\gamma_t+\alpha_g+\varepsilon_{igt}.
$$

其中：
- $i$：个体，$g$：group，$t$：时间。
- $d_{gt}$：group $g$ 在 $t$ 时是否已受 treatment 的指示变量。
- $X_{igt}$：控制变量。
- $\gamma_t$：time fixed effects（吸收共同时间冲击）。
- $\alpha_g$：group fixed effects（吸收组间时间不变异质性）。
- $\beta_1$：平均 DiD treatment effect（在对应识别条件下）。

在该设定下仍可画 event-study 系数与置信区间，用于检查动态效应与 pre-trend。

#### 2.5.4 Good Practice: Show Event-Date Histogram

- 建议报告 event dates 的直方图（histogram of event timing）。
- 用于检查各 cohort 的进入时点是否均衡（balance of timing）。
- 也可暴露样本构成问题（composition issues），如后期 cohort 样本流失（sample attrition）。

## 3. Regression Discontinuity Design (pp.255-287)

:::{admonition} Note
Exam positioning
本节对应 [Mock Question 4](#mock-q4-causal-identification) 中的 sharp RDD 与 fuzzy RDD：重点是 cutoff-local estimand、local continuity、manipulation diagnostics。

:::

### 3.0 Motivation

很多二元决策由“已知阈值规则（cutoff rules）”触发；阈值会制造不连续（discontinuity），从而提供准实验识别机会。

常见 corporate finance 场景：
- 会计指标超过某阈值触发 loan covenant violation（Chava and Roberts, 2008; Roberts and Sufi, 2009）。
- 项目申请中的排名决定是否入选（Howell, 2017; Gonzalez-Uribe and Leatherbee, 2018）。
- 公司市值排名决定指数纳入（Chang et al., 2015）。
- FICO 超过 620 决定证券化资格（Keys et al., 2010）。

RDD 直觉（放在动机层面）：
- treatment/control 的分配并非全局随机，而是基于 running variable $R$ 与 cutoff $c$ 的规则。
- 但在阈值附近（$R_i\approx c$）可把“刚好在两侧”的个体近似看作随机分配。
- 在 sharp 设定下，观测上对应为：$R_i\gt c$ 时观察 $Y_i(1)$，$R_i\le c$ 时观察 $Y_i(0)$。
- 因此 RDD 的核心比较是阈值“刚上方 vs 刚下方”样本的结果差异，用于识别局部 treatment effect。

两类 RDD（按 treatment assignment 规则）：
- Sharp RDD（deterministic assignment）：

$$
\mathbb{P}(D_i=1\mid R_i=r)=1\{r>c\}.
$$

- Fuzzy RDD（probabilistic assignment）：

$$
\mathbb{P}(D_i=1\mid R_i=r)
\text{ 在 }c\text{ 处有跳跃，但 }0<\mathbb{P}(D_i=1\mid R_i=c^-)<\mathbb{P}(D_i=1\mid R_i=c^+)<1.
$$

(sec-3-1-sharp-rdd)=
### 3.1 Sharp RDD Setup

$$
\begin{aligned}
D_i = 1\{R_i > c\}
\end{aligned}
$$

$R_i$ 是 running/forcing variable，sharp RDD 中 treatment 完全由阈值规则决定：$R_i\gt c$ 必处理，$R_i\le c$ 必不处理。

可观测结果满足

$$
Y_i = Y_i(0) + \big(Y_i(1)-Y_i(0)\big)D_i,
$$

并且在 sharp RDD 中

$$
R_i>c \Rightarrow \text{observe }Y_i(1),\qquad
R_i\le c \Rightarrow \text{observe }Y_i(0).
$$

因此 sharp RDD 的核心比较是 cutoff 两侧局部样本的结果跳跃。

#### 3.1.1 Identification Assumption and Result (Sharp RDD)

:::{admonition} Definition (Local Continuity)
Potential outcome CEFs are continuous at the cutoff.

:::

(assumption-rdd-continuity)=

形式化：

$$
\begin{aligned}
\lim_{r\to c^+}\mathbb{E}[Y_i(t)\mid R_i=r]
= \lim_{r\to c^-}\mathbb{E}[Y_i(t)\mid R_i=r],\quad t\in\{0,1\}.
\end{aligned}
$$

含义（识别层面）：
- potential outcome CEF 在 cutoff 处平滑，因此“刚低于 $c$”样本可作为“刚高于 $c$”样本的有效反事实基准。
- cutoff 两侧总体在局部上应可比，不应在阈值处出现除 treatment 规则外的离散构成变化。
- 因而在阈值处允许发生不连续跳跃的仅应是 treatment assignment（或 treatment probability）。

在该假设下，sharp RDD 的识别结果是

$$
\begin{aligned}
\lim_{r\to c^+}\mathbb{E}[Y_i\mid R_i=r]-\lim_{r\to c^-}\mathbb{E}[Y_i\mid R_i=r]
&=\lim_{r\to c^+}\mathbb{E}[Y_i(1)\mid R_i=r]-\lim_{r\to c^-}\mathbb{E}[Y_i(0)\mid R_i=r]\\
&=\mathbb{E}[Y_i(1)\mid R_i=c]-\mathbb{E}[Y_i(0)\mid R_i=c]\\
&=\mathbb{E}[Y_i(1)-Y_i(0)\mid R_i=c]
\equiv \tau_{SRD}.
\end{aligned}
$$

补充解释：
- 当 potential outcomes 在阈值附近平滑时，比较“刚高于 $c$”与“刚低于 $c$”可识别阈值处的局部平均处理效应（ATE at cutoff）。
- 上述识别论证本质是 nonparametric 的：除 CEF 连续性外，不要求 $Y_i(t)$ 的分布函数形式。
- 若写成线性回归框架 $Y=\alpha+\beta D+\lambda X+\varepsilon$（$D$ 为 treatment indicator），对应的局部连续性要求可写为 $\mathbb{E}[\varepsilon\mid X]$ 在 $c$ 处连续。

#### 3.1.2 Estimation Intuition (Sharp RDD)

Intuition（对应 estimation problem）：
- treatment effect 的识别来自 $c$ 处的不连续（jump in $Y$ at cutoff）。
- 估计时比较阈值两侧的条件期望，使用 $R_i\in[c-u,c+u]$ 的局部样本（$u$ 为 bandwidth）。
- $u$ 更大：statistical power 更高，但可能引入更多来自远离 cutoff 样本的 bias。
- 核心权衡：bias vs noise（variance）。
- 两类估计路线：global parametric（更强调 power）与 local nonparametric（更强调 consistency）。

形式化地，估计核心是逼近

$$
\tau_{SRD}
=\lim_{r\to c^+}\mathbb{E}[Y\mid R=r]-\lim_{r\to c^-}\mathbb{E}[Y\mid R=r].
$$

**(a) Global polynomial approach**

左右两侧分别拟合：

$$
\begin{aligned}
Y_i&=\beta_b+f_b(R_i-c)+\nu_i,\quad R_i<c,\\
Y_i&=\beta_a+f_a(R_i-c)+\mu_i,\quad R_i\ge c,
\end{aligned}
$$

其中 $f_b(\cdot),f_a(\cdot)$ 常取多项式，阈值 jump 为

$$
\tau_{SRD}=\beta_a-\beta_b.
$$

等价 pooled 写法（$D_i=1\{R_i\ge c\}$）：

$$
\begin{aligned}
Y_i
&=\{\beta_b+f_b(R_i-c)\}(1-D_i)+\{\beta_a+f_a(R_i-c)\}D_i+\varepsilon_i\\
&=\beta_b+\tau_{SRD}D_i+f_b(R_i-c)+[f_a(R_i-c)-f_b(R_i-c)]D_i+\varepsilon_i.
\end{aligned}
$$

常见参数化形式（$K$ 阶）：

$$
\begin{aligned}
Y_i
=\alpha+\tau_{SRD}1\{R_i\ge c\}
+\sum_{k=1}^{K}\gamma_{0k}(R_i-c)^k
+\sum_{k=1}^{K}\gamma_{1k}1\{R_i\ge c\}(R_i-c)^k+\varepsilon_i.
\end{aligned}
$$

优点是 power 高（用到更多样本）；风险是函数形式错设会引入偏误。

**(b) Local linear approach**

仅使用阈值邻域 $R_i\in[c-u,c+u]$：

$$
\begin{aligned}
Y_i=\beta_b+\tau_{SRD}D_i+\gamma_b(R_i-c)(1-D_i)+\gamma_a(R_i-c)D_i+\varepsilon_i.
\end{aligned}
$$

即使全局非线性，局部线性在小邻域内通常近似更稳健。

Bandwidth带宽 $u$ 的权衡：$u$ 大则 power 高但 bias 可能更大；$u$ 小则 bias 低但方差更大。  
实践上应报告不同 $u$ 的稳健性结果，并检查估计跳跃是否稳定。

(sec-3-2-fuzzy-rdd)=
### 3.2 Fuzzy RDD and LATE

#### 3.2.1 Setup (Fuzzy Assignment)
:::{admonition} Definition (Fuzzy RDD)
fuzzy RDD 中，$R_i\gt c$ 只会提高 treatment probability，而不会把概率从 0 跳到 1。

:::

#### 3.2.2 Identification Assumptions
:::{admonition} Definition (> - 结果平滑性（与 sharp RDD 同）：$Y_i(1),Y_i(0)$ 在阈值 $c$ 附近平滑。)
- 处理状态平滑性：令 $D_i(1),D_i(0)$ 分别表示个体 $i$ 在“阈值上方/下方”时的潜在处理状态，二者在 $c$ 附近也平滑。
- 单调性（no defiers）：

$$
\begin{aligned}
D_i(1)\ge D_i(0),\quad \forall i.
\end{aligned}
$$
- 含义：跨过阈值 weakly increases treatment probability（对每个人都不降低处理倾向）。

:::

由观测等式

$$
Y_i = Y_i(0)+\big(Y_i(1)-Y_i(0)\big)D_i
$$

比较阈值两侧，有

$$
\begin{aligned}
&\lim_{r\to c^+}\mathbb{E}[Y_i\mid R_i=r]-\lim_{r\to c^-}\mathbb{E}[Y_i\mid R_i=r] \\
=\;&\lim_{r\to c^+}\mathbb{E}\!\left[Y_i(0)+\big(Y_i(1)-Y_i(0)\big)D_i(1)\mid R_i=r\right] \\
&\quad-\lim_{r\to c^-}\mathbb{E}\!\left[Y_i(0)+\big(Y_i(1)-Y_i(0)\big)D_i(0)\mid R_i=r\right] \\
=\;&\mathbb{E}\!\left[\big(Y_i(1)-Y_i(0)\big)\big(D_i(1)-D_i(0)\big)\mid R_i=c\right].
\end{aligned}
$$

#### 3.2.3 Identification Logic
:::{admonition} Summary
outcome jump 识别的是“处理效应 × compliance indicator”的局部均值；再除以 first-stage jump（处理概率跳跃）得到 Wald 比率。
:::


在单调性 $D_i(1)\ge D_i(0)$ 下，$D_i(1)-D_i(0)\in\{0,1\}$，因此可写为

$$
\begin{aligned}
\mathbb{E}\!\left[\big(Y_i(1)-Y_i(0)\big)\big(D_i(1)-D_i(0)\big)\mid R_i=c\right]
=\;&\mathbb{E}\!\left[Y_i(1)-Y_i(0)\mid D_i(1)>D_i(0),R_i=c\right] \\
&\times \Pr\!\left(D_i(1)>D_i(0)\mid R_i=c\right).
\end{aligned}
$$

且处理概率在 cutoff 的跳跃满足

$$
\lim_{r\to c^+}\mathbb{E}[D_i\mid R_i=r]-\lim_{r\to c^-}\mathbb{E}[D_i\mid R_i=r]
=\Pr\!\left(D_i(1)>D_i(0)\mid R_i=c\right).
$$

识别量为 Wald ratio：

$$
\begin{aligned}
\tau_{FRD}
= \frac{\lim_{r\to c^+}\mathbb{E}[Y_i\mid R_i=r]-\lim_{r\to c^-}\mathbb{E}[Y_i\mid R_i=r]}{\lim_{r\to c^+}\mathbb{E}[D_i\mid R_i=r]-\lim_{r\to c^-}\mathbb{E}[D_i\mid R_i=r]}
\end{aligned}
$$

在上述假设下，

$$
\tau_{FRD}
=\mathbb{E}[Y_i(1)-Y_i(0)\mid D_i(1)>D_i(0),\,R_i=c].
$$

#### 3.2.4 Fuzzy RDD is Local IV
:::{admonition} Summary
fuzzy RDD 可写成“局部 IV”问题：在 cutoff 邻域，使用阈值指示变量
:::


$$
Z_i=1\{R_i>c\}
$$

作为 treatment 的工具变量。直观上，outcome CEF 的跳跃除以 treatment probability 的跳跃，识别的是阈值处 switcher/complier 的平均处理效应。

:::{admonition} Note.
$\tau_{FRD}$ 是 cutoff 附近 compliers 的 LATE（double local: local in score, local in compliance type）。

:::

#### 3.2.5 Local Nature (Double Local)
:::{admonition} Summary
- 对 running variable 局部：识别来自 $R_i=c$ 附近的两侧极限比较（这一点 sharp RDD 也成立）。
- 对个体类型局部：识别对象是 cutoff 处的 compliers（$D_i(1)\gt D_i(0)$），而非所有 $R_i\approx c$ 的个体。
- 因此这里的 “local” 同时指 score-local 与 type-local（即 LATE 的 local）。
:::


#### 3.2.6 Implementing Fuzzy RDD

:::{admonition} Summary
可用 global polynomial 2SLS 实现 fuzzy RDD；也可用 local linear 方法做局部实现。
:::


全局多项式 2SLS（阶数 $K$）：

First stage

$$
\begin{aligned}
D_i
=\lambda+\pi\,1\{R_i>c\}
+\sum_{k=1}^{K}\theta_{0k}(R_i-c)^k
+\sum_{k=1}^{K}\theta_{1k}\,1\{R_i>c\}(R_i-c)^k+\eta_i.
\end{aligned}
$$

Second stage

$$
\begin{aligned}
Y_i
=\alpha+\beta \hat D_i
+\sum_{k=1}^{K}\gamma_{0k}(R_i-c)^k
+\sum_{k=1}^{K}\gamma_{1k}\,1\{R_i>c\}(R_i-c)^k+\varepsilon_i.
\end{aligned}
$$

其中 excluded instrument 是

$$
Z_i=1\{R_i>c\},
$$

其余多项式项与交互项作为控制函数进入两阶段。  
替代实现是局部线性 fuzzy RDD（只用 cutoff 邻域样本，配合带宽选择与稳健性检验）。

#### 3.2.7 Econometric Interpretation of Each Term

:::{admonition} Summary
核心思想：用同一组 running-variable 多项式把“平滑部分”净掉，只让阈值指示变量 $Z_i=1\{R_i\gt c\}$ 提供离散外生变动，从而识别局部因果效应。
:::


First stage 各部分含义：
- $\lambda$：阈值左侧基准处理概率。
- $\pi\,1\{R_i\gt c\}$：cutoff 处处理概率离散跳跃（first-stage jump）；$\pi\neq 0$ 对应 relevance。
- $\sum_{k=1}^K\theta_{0k}(R_i-c)^k$：左侧随 running variable 的平滑趋势。
- $\sum_{k=1}^K\theta_{1k}1\{R_i\gt c\}(R_i-c)^k$：允许右侧趋势（斜率/曲率）不同。
- $\eta_i$：剩余扰动。

Second stage 各部分含义：
- $\beta \hat D_i$：由阈值诱导的处理变动对结果的因果效应（目标参数）。
- 两组 $\gamma$ 多项式：控制结果变量在 cutoff 两侧的平滑演化，避免把平滑趋势误当作 jump。
- $\varepsilon_i$：结果方程扰动。

“为什么要两侧都放多项式 + 交互”：
- 若只放单一趋势，左右两侧函数形状被强行设为相同，易把函数形式误设转化为偏误。
- 交互项使两侧可有不同局部斜率/曲率，识别主要来自 $R_i=c$ 的离散跳跃而非远端函数拟合。

与 Wald 比率的对应关系（在 cutoff 处）：

$$
\beta_{FRD}
=\frac{\Delta Y_c}{\Delta D_c}
=\frac{\lim_{r\to c^+}\mathbb{E}[Y_i\mid R_i=r]-\lim_{r\to c^-}\mathbb{E}[Y_i\mid R_i=r]}{\lim_{r\to c^+}\mathbb{E}[D_i\mid R_i=r]-\lim_{r\to c^-}\mathbb{E}[D_i\mid R_i=r]}.
$$

2SLS 的样本实现本质上就是该局部 Wald 比率的回归版本。

#### 3.2.8 Practical Issues (Fuzzy RDD)

:::{admonition} Summary
fuzzy RDD 的实务问题与 sharp RDD 基本相同：函数形式选择、带宽选择、以及规格稳健性展示。
:::


- 多项式阶数通常未知：更高阶更灵活，但更易 overfitting。
- 小带宽下应偏向低阶局部近似：核心权衡仍是 bias vs variance（noise）。
- 应报告不同规格稳健性：不同多项式阶数、不同带宽、global vs local 估计结果。
- 图形证据要完整：除 outcome-on-$R$ 图外，还应画 treatment-on-$R$ 图，展示 cutoff 处处理概率不连续（first-stage jump）。
- 若处理概率跳跃很弱，fuzzy RDD 会面临 weak-instrument 风险，估计方差上升、推断不稳。

### 3.3 Validity Diagnostics

#### 3.3.1 Internal Validity and Identifying Assumption

:::{admonition} Definition (> RDD 的核心识别假设是局部连续性（local continuity）：在 $R_i=c$ 的邻域内，阈值指示变量)

$$
1\{R_i>c\}
$$
可视为“近似随机分配”。

:::

该假设在以下情形会受威胁：个体能精确操纵 $R_i$ 从而选择阈值两侧位置（sorting/manipulation）。  
例：若资格由 self-reported income 决定，个体可能故意少报收入以跨过阈值。

#### 3.3.2 Why Diagnostics Are Needed

- 识别假设本身不可被直接检验（fundamentally untestable）。
- 因此需要：
  - 机制层讨论：代理人是否有激励且有能力操纵 $R$；
  - 数据层诊断：检验假设是否“看起来合理”（plausibility checks）。

### 3.4 Testing Local Continuity in Practice

把“内部有效性”转成可操作的 3 个统计对象：

#### 3.4.1 Covariate Jump Tests

对每个预处理协变量 $X^{(m)}$，检验

$$
H_0^{(m)}:\ \Delta_X^{(m)}(c)=
\lim_{r\to c^+}\mathbb{E}[X_i^{(m)}\mid R_i=r]
-\lim_{r\to c^-}\mathbb{E}[X_i^{(m)}\mid R_i=r]=0.
$$

实现：把 $X^{(m)}$ 当因变量做 local linear RDD。若系统性拒绝 $H_0^{(m)}$，local continuity 可疑。

#### 3.4.2 Density Continuity of Running Variable

检验 cutoff 处密度是否连续：

$$
H_0:\ \Delta_f(c)=\lim_{r\to c^+}f_R(r)-\lim_{r\to c^-}f_R(r)=0.
$$

若 $\Delta_f(c)\neq 0$，常解释为 sorting/manipulation 风险（阈值附近有异常堆积/缺口）。

#### 3.4.3 McCrary Test (Operational Form)

分箱后令 $z_j$ 为第 $j$ 箱计数、$m_j$ 为箱中点、$d_j=1\{m_j\ge c\}$，估计

$$
z_j=\beta_0+\beta d_j+\gamma_b m_j(1-d_j)+\gamma_a m_j d_j+e_j.
$$

检验

$$
H_0:\beta=0.
$$

$\hat\beta$ 显著偏离 0 表示 cutoff 处密度 jump。

### 3.5 External Validity: Local vs Global

区分 internal / external 的最好方式：先写清“你估计的是谁”。

#### 3.5.1 Estimand by Design

Sharp RDD:

$$
\tau_{SRD}(c)=\mathbb{E}[Y(1)-Y(0)\mid R=c].
$$

Fuzzy RDD:

$$
\tau_{FRD}(c)=
\mathbb{E}[Y(1)-Y(0)\mid D(1)>D(0),R=c].
$$

#### 3.5.2 Internal Validity (Identification at $c$)

核心是“上述 estimand 是否被一致识别”：
- local continuity 成立；
- 无精确操纵（密度不跳）；
- fuzzy 还需 first-stage jump 与 monotonicity。

#### 3.5.3 External Validity (Extrapolation Away from $c$)

外推要额外假设 treatment effect 的结构，例如

$$
\tau(r)=\mathbb{E}[Y(1)-Y(0)\mid R=r].
$$

RDD 只识别 $\tau(c)$（或 fuzzy 的 complier 版）。若 $\tau(r)$ 随 $r$ 变化，直接把 $\tau(c)$ 当全体 ATE 会有偏差。

#### 3.5.4 Practical Reporting Rule

- 必报：estimand（是 $\tau_{SRD}(c)$ 还是 $\tau_{FRD}(c)$）与 target population。
- 可做但不等于识别：多带宽稳定性、多个 cutoff 对比。

## 4. Instrumental Variables (pp.288-324)

:::{admonition} Note
Exam positioning
本节对应 [Mock Question 4](#mock-q4-causal-identification) 中的 IV：重点是 relevance、exclusion、LATE、weak IV 与 corporate-finance 识别叙事。

:::

### 4.0 The Endogeneity Problem (p289)

:::{admonition} Summary
在 finance 实证中，内生性最常见的两类来源是：
- Omitted variable bias：不可观测因素同时影响 treatment 与 outcome；
- Reverse causality：outcome 反过来影响 treatment 决策。
:::


例（课件）：PE 收购对机场绩效的影响。  
- OVB 路径：机场运营与管理的 private information 同时影响 PE 进入与后续绩效；  
- 反向因果路径：对机场盈利上升的预期吸引 PE 投资。  

缺少随机变异时，因果识别困难，需借助 IV 提取可用于识别的外生变异。

线性模型表达（对应 p290）：

$$
\begin{aligned}
y=\beta_0+\beta_1x_1+\cdots+\beta_Kx_K+\varepsilon,\qquad
\mathrm{Cov}(x_K,\varepsilon)\neq 0.
\end{aligned}
$$

则 OLS 的偏误会通过解释变量相关结构传播，通常导致 $\hat\beta_k$（不仅是 $\hat\beta_K$）都可能有偏。  
IV 的修正思路是：用 $x_K$ 在工具变量 $z$（及外生 controls）上的投影分量 $\hat x_K$ 替换原始 $x_K$，只保留与 $\varepsilon$ 不相关的“干净变异”。

### 4.1 Endogeneity Setup and IV Logic (pp.289-293)

结构方程（以 $x_K$ 内生为例）：

$$
\begin{aligned}
y = \beta_0 + \beta_1 x_1 + \cdots + \beta_K x_K + \varepsilon,\qquad
\mathrm{Cov}(x_K,\varepsilon)\neq 0.
\end{aligned}
$$

把 $x_K$ 分成两部分理解：
- “bad variation”：与 $\varepsilon$ 相关；
- “good variation”：与 $\varepsilon$ 不相关。

工具变量 $z$ 的目标是提取 $x_K$ 的 good variation。

:::{admonition} Definition (> Valid IV 的两个条件：)
1. Relevance（相关性）  
first stage 中工具变量必须能解释内生变量：

$$
x_K=\alpha_0+X_{-K}'\alpha+\gamma z+\zeta,\qquad H_0:\gamma=0\ \text{vs}\ H_1:\gamma\neq 0.
$$
即 $\mathrm{Cov}(z,x_K\mid X_{-K})\neq 0$（可检验）。

2. Exogeneity + Exclusion（外生性 + 排除限制）  
- 外生性：$\mathrm{Cov}(z,\varepsilon)=0$（条件独立，$z$ 近似随机）；  
- 排除限制：$z$ 只能通过 $x_K$ 影响 $y$（single known causal channel）。  
该条件不可直接统计检验，需强经济学论证支撑。

:::

(assumption-iv-validity)=

:::{admonition} 为何 exclusion 不能靠”把 $z$ 直接塞进结构方程”来检验
$$
\begin{aligned}
y=\beta_0+X_{-K}'\beta+\beta_K x_K+\delta z+u,
\end{aligned}
$$
并尝试检验 $H_0:\delta=0$。
若 $\mathrm{Cov}(x_K,\varepsilon)\neq 0$，该回归本身就不一致，$z$ 的系数检验不具识别含义。

---

**Proof**


简要推导（为什么不一致）：
设

$$
W_i=\begin{bmatrix}1\\ X_{-K,i}\\ x_{K,i}\\ z_i\end{bmatrix},\qquad
y_i=W_i'\theta+\varepsilon_i.
$$
OLS 的概率极限为

$$
\operatorname*{plim}\,\hat\theta
=\theta+\underbrace{\left(\mathbb{E}[W_iW_i']\right)^{-1}\mathbb{E}[W_i\varepsilon_i]}_{\text{bias term}}.
$$
由于 $\mathrm{Cov}(x_K,\varepsilon)\neq 0$，

$$
\mathbb{E}[W_i\varepsilon_i]
=\begin{bmatrix}
0\\
\mathbb{E}[X_{-K}\varepsilon]\\
\mathbb{E}[x_K\varepsilon]\\
\mathbb{E}[z\varepsilon]
\end{bmatrix}
\text{ 至少含一个非零分量（通常在 }x_K\text{ 位置）}.
$$
即使 $\mathbb{E}[z\varepsilon]=0$，只要 relevance 使 $z$ 与 $x_K$ 相关，$\left(\mathbb{E}[W_iW_i']\right)^{-1}$ 的非对角项会把 $x_K$ 的内生性偏误传导到 $\hat\delta$，故

$$
\operatorname*{plim}\,\hat\delta\neq \delta\ (=0)\ \text{一般成立}.
$$
因此“在结构方程里加 $z$ 检验 $\delta=0$”不能验证 exclusion。

:::

### 4.2 2SLS, Reduced Form, and Wald Link (pp.294-297)

:::{admonition} Info: First Stage（先用 instruments + controls 预测内生变量）
$$
\begin{aligned}
x_K = \alpha_0 + X'_{-K}\alpha + \gamma z + \zeta
\end{aligned}
$$
:::


由 first stage 得到拟合值（predicted treatment）：

$$
\begin{aligned}
\hat x_{K,i}
=\hat\alpha_0+X_{-K,i}'\hat\alpha+\hat\gamma z_i.
\end{aligned}
$$

矩阵写法（样本层面）：

$$
\begin{aligned}
x_K &= Z\pi+\zeta,\qquad Z:=[\mathbf{1},X_{-K},z],\\
\hat\pi&=(Z'Z)^{-1}Z'x_K \\
\Longrightarrow\ \hat x_K
&=Z\hat\pi
=Z(Z'Z)^{-1}Z'x_K
=P_Zx_K.
\end{aligned}
$$

其中

$$
\begin{aligned}
P_Z:=Z(Z'Z)^{-1}Z'
\end{aligned}
$$

是投影矩阵，$\hat x_K$ 是 $x_K$ 在 $\operatorname{span}(Z)$ 上的投影（仅保留由 instruments + controls 解释的外生变动）。

几何分解（projection view）：

$$
\begin{aligned}
x_K&=\hat x_K+\hat\zeta,\\
\hat x_K&=P_Zx_K\in \operatorname{span}(Z),\\
\hat\zeta&=M_Zx_K,\quad M_Z:=I-P_Z,\quad Z'\hat\zeta=0.
\end{aligned}
$$

其中正交条件 $Z'\hat\zeta=0$ 表示 $\hat\zeta$ 与常数项、$X_{-K}$、$z$ 的每一列都正交。

```text
                 x_K  (original endogenous regressor)
                /
               /
              /|
             / |   orthogonal part:  \hat\zeta = M_Z x_K
            /  |
-----------*---+------------------------------->  span(Z) = span([1, X_{-K}, z])
          origin  \
                   \ projected part: \hat x_K = P_Z x_K
```

所以：一般情形不是“投到 z 一条线”，而是“投到 Z 张成的子空间”；只有在先 partial-out controls 后、且单个 IV 的简化图里，才可画成“沿着 residualized $z$ 方向的线性投影”。

:::{admonition} Info: Second Stage（用 $\hat{x}_K$ 识别结构系数）
$$
\begin{aligned}
y = \beta_0 + X'_{-K}\beta + \beta_K\hat x_K + \varepsilon
\end{aligned}
$$
:::


Reduced form:

$$
\begin{aligned}
y = \pi_0 + X'_{-K}\pi + \delta z + \eta
\end{aligned}
$$

核心恒等关系：

$$
\delta=\gamma\beta_K,\qquad
\beta_K^{IV}=\frac{\delta}{\gamma}.
$$

计量解释：
- reduced form（$\delta$）是 instrument assignment 对 outcome 的总影响（ITT 含义）；
- first stage（$\gamma$）是 instrument 对 treatment 的推动强度；
- ratio 把“结果变化”按“处理变化”标准化，得到 treatment effect。

实现原则：
- 用 `ivreg/2SLS` 一步估计，不手工两步 OLS 报标准误；
- 禁止“forbidden regression”（如第一阶段非线性后直接代入拟合值做第二阶段线性 OLS）。

#### Link to Reduced Form Estimation

**Reduced form equation** shows the direct effect of the instrument on the outcome:

$$
y = \beta_0 + \beta_1 x_1 + \dots + \beta_{K-1} x_{K-1} + \delta z + \epsilon
$$

where $\delta$ is the reduced form coefficient on $z$.

**Relationship** between reduced form, first stage, and IV estimand:
- $\delta$ = reduced form coefficient on $z$
- $\gamma$ = first stage coefficient on $z$
- $\beta_K$ = IV/2SLS coefficient on $x_K$

:::{admonition} Claim
$$
\beta_K^{IV} = \frac{\delta}{\gamma}.
$$
:::

***
:::{admonition} Proof
1. 考虑第二阶段（Structural Model）的数据生成过程：

$$
y = \beta_0 + \beta_1 x_1 + \dots + \beta_{K-1} x_{K-1} + \beta_K x_K + u
$$
2. 考虑第一阶段（First Stage）回归模型，即内生变量 $x_K$ 对工具变量 $z$ 和其他外生控制变量的投影：

$$
x_K = \pi_0 + \pi_1 x_1 + \dots + \pi_{K-1} x_{K-1} + \gamma z + v
$$
3. 将第一阶段等式代入到 Structural Model 中：

$$
y = \beta_0 + \beta_1 x_1 + \dots + \beta_{K-1} x_{K-1} + \beta_K (\pi_0 + \pi_1 x_1 + \dots + \pi_{K-1} x_{K-1} + \gamma z + v) + u
$$
4. 重新整理并合并同类项，我们得到 $y$ 仅对外生变量和 $z$ 的回归等式（即 Reduced Form Equation）：

$$
y = (\beta_0 + \beta_K \pi_0) + (\beta_1 + \beta_K \pi_1) x_1 + \dots + (\beta_{K-1} + \beta_K \pi_{K-1}) x_{K-1} + (\beta_K \gamma) z + (\beta_K v + u)
$$
5. 通过与上文的 Reduced form equation 对比 $z$ 的系数，可知：

$$
\delta = \beta_K \gamma
$$
6. 整理即得 IV estimand：

$$
\beta_K^{IV} = \frac{\delta}{\gamma} \qquad \blacksquare
$$

参见：[#assumption-iv-validity](#assumption-iv-validity)

:::

**Intuition**: Scale the direct effect of $z$ on $y$ by how much $z$ affects $x_K$.

:::{admonition} Note
为什么 Reduced Form 很重要？
见卡片 [ITT vs LATE](cards/ITT%20vs%20LATE%20-%20Estimand%20distinction.md#card-itt-late-distinction)。Reduced form 的系数 $\delta$ 就是 ITT；在 binary IV 下，$\beta_K^{IV}=\delta/\gamma=\mathrm{LATE}$。

**Definition (Intention-to-Treat (ITT) Effect):**
见卡片 [ITT vs LATE](cards/ITT%20vs%20LATE%20-%20Estimand%20distinction.md#card-itt-late-distinction)。ITT 是 assignment effect，不要求实际依从。

:::

(definition-itt)=

### 4.3 LATE, Compliance Types, and ITT (pp.298-305)

IV 在异质性下识别的是 compliers 的局部效应。细节见卡片 [ITT vs LATE](cards/ITT%20vs%20LATE%20-%20Estimand%20distinction.md#card-itt-late-distinction)；本节只保留结论：
:::{admonition} Definition (Local Average Treatment Effect (LATE))

$$
\text{binary IV} + \text{monotonicity} + \text{exclusion} + \text{independence} \Rightarrow \text{IV identifies LATE}
$$

:::

(definition-late)=

### 4.4 Weak Instruments: Bias and Inference Failure (pp.306-308, 321)

:::{admonition} Note
The Weak Instrument Problem

$$
\begin{aligned}
x_i &= \underbrace{\gamma z_i}_{\text{first stage}} + u_i \\
y_i &= \beta x_i + \varepsilon_i = \beta x_i + \underbrace{(\mu z_i+\eta_i)}_{\text{structural equation}}
\end{aligned}
$$

$$
\begin{aligned}
\beta^{IV}
&= \frac{\operatorname{Cov}(y_i,z_i)}{\operatorname{Cov}(x_i,z_i)} \\
&= \frac{\operatorname{Cov}(\beta x_i+\mu z_i+\eta_i,z_i)}{\operatorname{Cov}(x_i,z_i)} \\
&= \beta + \frac{\mu}{\gamma}
\end{aligned}
$$
- $\gamma$: strength of instrument in first stage
- $\mu$: direct effect of the instrument on the outcome, i.e. exclusion violation
- IV estimate combines the true treatment effect plus a potential blow-up of the direct effect of $z_i$ on $y_i$
- In general, hard to find any variable with explanatory power that is fully exogenous
- A more acceptable argument for a good, but not godsend, instrument is that the direct effect of $z_i$ on $y_i$ is of a secondary order compared to that of $x_i$, so $\mu/\gamma\approx 0$
- If $\gamma$ is small, even a tiny $\mu$ can cause large bias
- Weak instrument tests such as the $F$-statistic may not detect this

:::

(weak-instrument-problem)=

:::{admonition} Note
Weak IV: bias amplification
若真实模型为

$$
\begin{aligned}
Y &= \beta X + \varepsilon
\end{aligned}
$$
则 IV 估计量可以写成

$$
\begin{aligned}
\beta^{IV}
&= \frac{\mathbb{E}[Y\mid Z=1]-\mathbb{E}[Y\mid Z=0]}{\mathbb{E}[X\mid Z=1]-\mathbb{E}[X\mid Z=0]} \\
&= \frac{\mathbb{E}[\beta X+\varepsilon\mid Z=1]-\mathbb{E}[\beta X+\varepsilon\mid Z=0]}{\mathbb{E}[X\mid Z=1]-\mathbb{E}[X\mid Z=0]} \\
&= \beta + \frac{\mathbb{E}[\varepsilon\mid Z=1]-\mathbb{E}[\varepsilon\mid Z=0]}{\mathbb{E}[X\mid Z=1]-\mathbb{E}[X\mid Z=0]}
\end{aligned}
$$
若 exclusion restriction 成立，则

$$
\mathbb{E}[\varepsilon\mid Z=1]-\mathbb{E}[\varepsilon\mid Z=0]=0
$$
因而 $\beta^{IV}=\beta$。
若 exclusion 失败，则 bias 为

$$
\begin{aligned}
\mathrm{Bias}
&= \beta^{IV}-\beta \\
&= \frac{\mathbb{E}[\varepsilon\mid Z=1]-\mathbb{E}[\varepsilon\mid Z=0]}{\mathbb{E}[X\mid Z=1]-\mathbb{E}[X\mid Z=0]}
\end{aligned}
$$
当分母 $\mathbb{E}[X\mid Z=1]-\mathbb{E}[X\mid Z=0]\to 0$ 时，bias 会被放大并趋于发散。

:::

进一步看有限样本偏误，2SLS 常向 OLS 靠拢：

$$
\mathrm{Bias}\approx \frac{j\,\rho(1-r^2)}{Nr^2},
$$

其中 $j$ 为工具变量个数，$\rho=\mathrm{Corr}(x_K,\varepsilon)$，$r^2$ 为 first-stage $R^2$。

因此弱工具变量会同时带来两类问题：
- point estimate 不稳定，容易被 small denominator 放大；
- inference 失真，常规标准误和 $t$ 统计量不可靠，容易过度拒真。

诊断与报告：
- first-stage F（经验上先看 $F\ge 10$）；
- partial $R^2$；
- reduced-form 方向与量级；
- just-identified 与 overidentified 结果对照。

:::{admonition} Note
Weak IV 的直观推导
设单一内生变量与单一工具变量：

$$
\begin{aligned}
x &= \pi_0+\pi_1 z+v \\
y &= \beta x+u
\end{aligned}
$$
当 $\pi_1$ 很小，$z$ 对 $x$ 的解释力弱，则 first stage 的噪声占比高，2SLS 会把第一阶段估计误差放大到第二阶段。

在弱工具变量近似下，Bound, Jaeger, and Baker (1995) 给出有限样本偏误比：

$$
\begin{aligned}
\frac{\mathbb{E}[\hat\beta_{2SLS}]-\beta}{\mathbb{E}[\hat\beta_{OLS}]-\beta}
\approx \frac{1}{F+1}
\end{aligned}
$$

**一个常用推导思路（heuristic）**
设单一内生变量 $x$ 与单一工具变量 $z$：

$$
\begin{aligned}
x &= \pi z + v \\
y &= \beta x + u
\end{aligned}
$$
把 $x$ 分成 “由工具变量解释的信号” 与 “剩余噪声”：

$$
\begin{aligned}
x &= \underbrace{\pi z}_{\text{signal}} + \underbrace{v}_{\text{noise}} \\
\hat x &= P_z x = \pi z
\end{aligned}
$$
OLS 使用完整的 $x$，因此 endogeneity 会通过全部的 $x$ 进入估计量；2SLS 只使用 $\hat x$，所以其偏误可以近似看成被 first stage 的解释力缩小了。

在单工具变量、单内生变量、忽略自由度修正的近似下，

$$
\begin{aligned}
R^2
&= \frac{\operatorname{Var}(\pi z)}{\operatorname{Var}(x)} \\
&= \frac{\operatorname{Var}(\pi z)}{\operatorname{Var}(\pi z)+\operatorname{Var}(v)}
\end{aligned}
$$
因此

$$
\begin{aligned}
1-R^2
&= \frac{\operatorname{Var}(v)}{\operatorname{Var}(\pi z)+\operatorname{Var}(v)}
\end{aligned}
$$
把 “剩余噪声占比” 视为 2SLS 相对 OLS 的残余偏误比例，则

$$
\begin{aligned}
\frac{\mathbb{E}[\hat\beta_{2SLS}]-\beta}{\mathbb{E}[\hat\beta_{OLS}]-\beta}
&\approx 1-R^2
\end{aligned}
$$
而对单个排除工具变量，

$$
\begin{aligned}
F
&= \frac{R^2}{1-R^2}
\end{aligned}
$$
因此

$$
\begin{aligned}
1-R^2
&= \frac{1}{F+1}
\end{aligned}
$$
从而得到

$$
\begin{aligned}
\frac{\mathbb{E}[\hat\beta_{2SLS}]-\beta}{\mathbb{E}[\hat\beta_{OLS}]-\beta}
&\approx \frac{1}{F+1}
\end{aligned}
$$
其中 $F$ 是 first-stage F-statistic。

因此：

$$
\begin{aligned}
F \uparrow &\Longrightarrow \text{instrument relevance stronger} \\
&\Longrightarrow \text{2SLS bias smaller relative to OLS} \\
F \downarrow &\Longrightarrow \text{2SLS more likely to behave like OLS}
\end{aligned}
$$
经验上常用 $F\ge 10$ 作为粗略门槛，但它只是 rule of thumb，不是充分条件。

:::

### 4.5 Multiple IVs and Overidentification (pp.309-310)

设内生变量数为 $H$，工具变量数为 $M$：
- order condition: $M\ge H$，否则方程组欠识别（underidentified）；
- rank condition: 工具变量对内生变量有足够独立相关性，即 first-stage 系数矩阵满秩。

若写成矩阵形式：

$$
\begin{aligned}
X &= Z\Pi + V \\
\operatorname{rank}(\Pi) &= H
\end{aligned}
$$

则识别要求是 $Z$ 对 $X$ 的线性投影能提供 $H$ 个独立方向。

若进一步写成每个内生变量的 first stage：

$$
\begin{aligned}
x_h &= z_1\gamma_{1h}+\cdots+z_M\gamma_{Mh}+v_h,\qquad h=1,\dots,H
\end{aligned}
$$

则 relevance 的联合原假设为

$$
\begin{aligned}
H_0:\gamma_{mh}=0,\qquad \forall m,h
\end{aligned}
$$

或者对某个具体内生变量做 joint test：

$$
\begin{aligned}
H_0:\gamma_{1h}=\cdots=\gamma_{Mh}=0
\end{aligned}
$$

其经济含义是：这些工具变量对该内生变量没有解释力。

当 $M\gt H$（过识别）：
- 多出来的 $M-H$ 个工具变量形成 **overidentifying restrictions**；
- 可做 Sargan/Hansen 型检验：

$$
\begin{aligned}
H_0 &: \mathbb{E}[z\varepsilon]=0 \\
J &= n\cdot \hat g' \hat\Omega^{-1}\hat g,\qquad \hat g=\frac{1}{n}Z'\hat e
\end{aligned}
$$

其中 $\hat e$ 是 2SLS 残差。
- 在同方差下，$J\sim\chi^2_{M-H}$；异方差稳健版本通常称为 Hansen $J$ test。
- 拒绝 $H_0$ 说明至少一个工具变量可能与误差项相关；
- 不拒绝 $H_0$ 只表示“没有足够证据否定所有工具同时有效”，不等于全部工具都真的有效。

:::{admonition} Note
Overidentification 的逻辑
若所有工具变量都有效，则每个工具给出的结构方程限制都应一致，因此多出来的限制应当落在残差正交条件上：

$$
\mathbb{E}[z_m\varepsilon]=0,\qquad m=1,\dots,M
$$
若 $M=H$，没有多余限制；若 $M\gt H$，就有 $M-H$ 个 overidentifying restrictions 可供检验。

于是 Sargan/Hansen $J$ test 其实是在问：这些额外的正交条件是否同时成立，

$$
H_0:\mathbb{E}[z'\varepsilon]=0,\qquad J\sim\chi^2_{M-H}\ \text{(homoskedastic)}
$$
不拒绝只能说明“没有足够证据反对这些限制”，不能反过来证明每个 IV 都有效。

**Note:** 直观理解：relevance 不是 validity
- `relevance` 看的是 $Z$ 是否能解释 $X$；
- `validity` 看的是 $Z$ 是否与结构误差 $\varepsilon$ 独立。

因此：

$$
\begin{aligned}
\text{first stage strong} &\not\Rightarrow \text{instrument valid} \\
\text{overidentified} &\Rightarrow \text{can test restrictions} \\
\text{not rejected} &\not\Rightarrow \text{no evidence against validity}
\end{aligned}
$$
过识别检验检到的是“多出来的限制是否自洽”，不是证明每个工具变量都真外生。

:::

### 4.6 IV Sources and Fragile Choices (pp.311-316)

#### 4.6.0 IV Sources: Good Variation vs. Exclusion Risk

(iv-source-taxonomy)=

选择 IV 时先问两件事：

$$
\begin{aligned}
\text{Good IV}
&\Longleftrightarrow
\left\{
\begin{aligned}
\text{relevance} &: \mathrm{Cov}(Z,X)\neq 0 \\
\text{exogeneity / exclusion} &: \mathrm{Cov}(Z,\varepsilon)=0,\quad Z \text{ only affects }Y\text{ through }X
\end{aligned}
\right.
\end{aligned}
$$

经验判断不是“这个 IV 听起来外生”，而是：

$$
\begin{aligned}
\text{IV credibility}
&=
\underbrace{\text{first-stage strength}}_{\text{relevance}}
\times
\underbrace{\text{narrow channel}}_{\text{exclusion}}
\times
\underbrace{\text{institutional / economic argument}}_{\text{why quasi-random}}
\end{aligned}
$$

| IV 来源 | 为什么可能是 good reason | 为什么常常不是 good reason / 风险 | 总体判断 |
| :--- | :--- | :--- | :--- |
| 政策阈值 / eligibility rule / lottery | relevance 来自制度；exclusion 可通过制度流程论证；最好是 quasi-random assignment | 可能伴随其他配套政策；treatment take-up 不完全随机 | 通常较好，若制度清楚 |
| 随机或准随机 assignment：judge、examiner、quota | instrument 的 good variation 来自随机分配；可讨论 complier 和 monotonicity | exclusion 要非常严谨；decision-maker 可能不只影响一个渠道 | 较好，但必须有强制度论证 |
| 州法改革 / 税改 / regulatory shock 作为 instrument | relevance 往往强；经济逻辑清楚 | exclusion 容易被同期宏观 / 法规 bundle 破坏 | 可以很好，但要 narrow channel |
| Shift-share / Bartik | national shocks 与 local exposure 的交互提供 cross-sectional variation；常用于 labor / regional papers | 需要非常清楚地分解供给侧冲击；shares 可能 endogenous；common shocks 问题严重 | 有用但危险，必须非常谨慎 |
| Lagged endogenous variable 作为 IV | first stage 常常很强，因为变量有 persistence | serial correlation、dynamic relationships、feedback 极易破坏 exclusion | 通常是坏理由，除非有非常强的经济论证 |
| Group average / leave-out mean | 常常和个体变量相关，因为 peer similarity 强 | 共同组因子几乎必然威胁 exclusion；Gormley-Matsa critique 经典 | 通常是坏理由 |
| 地理距离 / geography IV | relevance 有时直观 | geography 往往直接影响 outcome，exclusion 极弱 | 经常站不住 |

**Exam use**

- 先写 relevance：为什么 $Z$ 能推动 $X$。
- 再写 exclusion：为什么 $Z$ 不通过其他渠道影响 $Y$。
- 如果是 policy / threshold / lottery，强调制度流程和 quasi-random assignment。
- 如果是 shift-share / Bartik，必须拆开 national shock、local exposure 和 common shocks。
- 如果是 lagged $X$、leave-out mean、geography IV，默认先怀疑 exclusion，再说明需要什么额外论证。

:::{admonition} Note
Lagged `x` as IV for current `x`
典型模型写成

$$
\begin{aligned}
y_t &= \beta_0+\beta_1 x_t+u_t, \qquad \mathrm{Cov}(x_t,u_t)\neq 0
\end{aligned}
$$
候选工具变量常取

$$
\begin{aligned}
z &= x_{t-1}
\end{aligned}
$$
其动机是：

$$
\begin{aligned}
\mathrm{Cov}(x_{t-1},x_t)\neq 0 &\quad \text{(persistence / serial correlation)}\\
\mathrm{Cov}(x_{t-1},u_t)=0 &\quad \text{(exclusion: 只通过 }x_t\text{ 影响 }y_t\text{)}
\end{aligned}
$$
所以 `lagged x` 的问题不在 relevance，而在 exclusion：一旦误差项有动态相关，或 $y_t$ 受过去状态直接影响，$x_{t-1}$ 就可能通过不止一条通道进入当期结果。


:::

**4.6.1 Lagged $X$ as IV**

候选工具是 $z=x_{t-1}$，对应的核心条件是

$$
\begin{aligned}
\mathrm{Cov}(x_{t-1},x_t)\neq 0,\qquad
\mathrm{Cov}(x_{t-1},u_t)=0.
\end{aligned}
$$

relevance 往往来自 $x$ 的 persistence / serial correlation；关键是把 exclusion 写成“过去的 $x$ 不会绕开当前 $x_t$ 直接影响 $y_t$”。

若

$$
u_t=\rho u_{t-1}+\epsilon_t,
$$

则

$$
\begin{aligned}
\mathrm{Cov}(x_{t-1},u_t)
&= \mathrm{Cov}(x_{t-1},\rho u_{t-1}+\epsilon_t) \\
&= \rho\,\mathrm{Cov}(x_{t-1},u_{t-1})+\mathrm{Cov}(x_{t-1},\epsilon_t).
\end{aligned}
$$

若再有

$$
\mathrm{Cov}(x_{t-1},\epsilon_t)=0,\qquad \rho\neq 0,\qquad \mathrm{Cov}(x_{t-1},u_{t-1})\neq 0,
$$

则

$$
\mathrm{Cov}(x_{t-1},u_t)=\rho\,\mathrm{Cov}(x_{t-1},u_{t-1})\neq 0,
$$

所以 exclusion 失败。直觉上，误差的 persistence 把过去的未观测冲击传到当期，而 $x_{t-1}$ 仍然携带了这些过去冲击的信息。

:::{warning} Dynamic relationships
若
$$
y_t=f(y_{t-1},x_t,x_{t-1}),
$$
则
$$
\frac{\partial y_t}{\partial x_{t-1}}=f_{x_{t-1}}(y_{t-1},x_t,x_{t-1})\neq 0
$$
表示 $x_{t-1}$ 对 $y_t$ 存在直接通道，不再满足“只通过 $x_t$ 影响 $y_t$”的 exclusion 解释；因此 lagged $x$ 失效。
:::


因此，lagged $x$ 只有在“过去的 $x$ 只通过当前 $x_t$ 影响 $y_t$，且误差项没有把过去信息带到当期”时才可用：

$$
\begin{aligned}
\mathrm{Cov}(x_{t-1},x_t)\neq 0
\quad &\text{(relevance)}\\
\mathrm{Cov}(x_{t-1},u_t)=0
\quad &\text{(exclusion, no serial correlation and no dynamic feedback)}
\end{aligned}
$$

#### 4.6.2 Group Average (Leave-out Mean) IV

候选工具：

$$
\bar{x}_{-i,j}=\frac{1}{J-1}\sum_{k\in j,\;k\neq i}x_{k,j}.
$$

两条条件：

$$
\begin{aligned}
\text{Relevance:}\quad &\mathrm{Cov}(\bar{x}_{-i,j},x_{i,j})\neq 0 \\
&\text{(leave-out mean 和个体自身变量通过 peer effects 相关)} \\
\text{Exclusion:}\quad &\mathrm{Cov}(\bar{x}_{-i,j},u_{i,j})=0 \\
&\text{(leave-out mean 不能直接影响 }y_{i,j}\text{，只能通过 }x_{i,j}\text{ 起作用)}
\end{aligned}
$$

这里的逻辑要拆开看：`common factor` 不是“对某个单一变量”的，而是**组 $j$ 内所有个体共享的未观测冲击**。它可以出现在 first stage，也可能进入结构误差项。

$$
\left\{
\begin{aligned}
x_{i,j} &= \underbrace{\pi f_j}_{\text{group common factor}} + \underbrace{\eta_{i,j}}_{\text{idiosyncratic part}} \\
y_{i,j} &= \alpha+\beta x_{i,j} + \underbrace{\lambda f_j}_{\text{common factor in }y} + \underbrace{u_{i,j}}_{\text{idiosyncratic error}}
\end{aligned}
\right.
$$

令工具变量为 `leave-out mean`：

$$
\begin{aligned}
z_{i,j}
:=\bar{x}_{-i,j}
&= \frac{1}{J-1}\sum_{k\in j,\;k\neq i}x_{k,j} \\
&= \underbrace{\pi f_j}_{\text{same }f_j} + \underbrace{\bar{\eta}_{-i,j}}_{\frac{1}{J-1}\sum_{k\neq i}\eta_{k,j}}.
\end{aligned}
$$

若 $\mathrm{Cov}(f_j,\eta_{k,j})=0$，则

$$
\begin{aligned}
\mathrm{Cov}(z_{i,j},x_{i,j})
&= \mathrm{Cov}(\pi f_j+\bar{\eta}_{-i,j},\;\pi f_j+\eta_{i,j}) \\
&= \pi^2\mathrm{Var}(f_j)+\mathrm{Cov}(\bar{\eta}_{-i,j},\eta_{i,j}) \\
&\approx \pi^2\mathrm{Var}(f_j)\neq 0,
\end{aligned}
$$

这给出 `relevance`：`leave-out mean` 通过共同因子和个体自身变量相关。

但 exclusion 要求的是

$$
\mathrm{Cov}(z_{i,j},\varepsilon_{i,j})=0,\qquad \varepsilon_{i,j}:=\lambda f_j+u_{i,j}.
$$

于是

$$
\begin{aligned}
\mathrm{Cov}(z_{i,j},\varepsilon_{i,j})
&= \mathrm{Cov}(\pi f_j+\bar{\eta}_{-i,j},\;\lambda f_j+u_{i,j}) \\
&= \pi\lambda\,\mathrm{Var}(f_j)+\mathrm{Cov}(\bar{\eta}_{-i,j},u_{i,j}) \\
&\neq 0 \qquad (\lambda\neq 0),
\end{aligned}
$$

所以真正的问题不是“$z$ 能不能和 $f_j$ 相关”，而是 $f_j$ 一旦进入 $y$ 的误差项，$z$ 就会通过共享的 $f_j$ 进入误差项，exclusion 失效。

### 4.7 Interpretation and Research Practice (pp.317-322)

课件证据（Jiang, 2017）提醒三点：
- 经验上 IV 系数常显著大于 OLS，不应机械解读为“更接近真值”；
- 可能来源：[endogeneity direction](cards/Endogeneity%20direction%20-%20OLS%20bias%20sign.md#card-endogeneity-direction)、[estimand choice](cards/ITT%20vs%20LATE%20-%20Estimand%20distinction.md#card-itt-late-distinction)、[weak IV](#weak-instrument-problem) 放大偏误、规格搜索与发表偏误；
- 结论应同时报告：estimand（[LATE](cards/ITT%20vs%20LATE%20-%20Estimand%20distinction.md#card-itt-late-distinction) 还是 [政策 ITT](cards/ITT%20vs%20LATE%20-%20Estimand%20distinction.md#card-itt-late-distinction)）、first-stage 强度、exclusion 经济论证。

:::{admonition} Note
Jiang (2017): IV estimates are often much larger

$$
\begin{aligned}
\Pr\!\left(|\beta^{IV}| > |\beta^{OLS}|\right)
&=
\begin{cases}
79.8\% & \text{Affirmative endogeneity} \\
88.9\% & \text{Unclear} \\
94.1\% & \text{Corrective endogeneity}
\end{cases}
\end{aligned}
$$

$$
\begin{aligned}
\left|\beta^{IV}/\beta^{OLS}\right|
&\approx
\begin{cases}
18.8/9.2 & \text{Affirmative endogeneity} \\
4.3/4.0 & \text{Corrective endogeneity} \\
3.5/3.3 & \text{Unclear}
\end{cases}
\end{aligned}
$$
这说明：即使 OLS 已经存在偏误，IV 估计值仍可能系统性更大，不能简单解读为“更接近真值”。

**Note:** Possible explanations for large IV estimates
1. $\mathrm{LATE}\neq \mathrm{ATE}$

$$
\beta^{IV} = \mathbb{E}[Y(1)-Y(0)\mid C],\qquad
\mathrm{ATE} = \mathbb{E}[Y(1)-Y(0)]
$$
若 compliers 的回报更高，则 $\mathrm{LATE}\gt \mathrm{ATE}$；在 finance 里，supply-side instruments 往往识别的是 constrained agents。

2. Weak instruments

$$
\begin{aligned}
x_i &= \gamma z_i+u_i \\
y_i &= \beta x_i+\varepsilon_i=\beta x_i+(\mu z_i+\eta_i)
\end{aligned}
$$

$$
\begin{aligned}
\beta^{IV}
&= \beta+\frac{\mu}{\gamma}
\end{aligned}
$$
$\gamma$ 越小，任何很小的 $\mu$ 都会被放大；weak instrument tests 也未必能稳健捕捉这种问题。

3. Specification search / publication bias

$$
\begin{aligned}
|\hat\beta^{IV}| &\ge c\cdot \widehat{\mathrm{se}}(\hat\beta^{IV})
\end{aligned}
$$
IV standard errors 通常比 OLS 大，所以要达到同样的显著性门槛，$\hat\beta^{IV}$ 往往必须更大。
这会形成一个 selection filter：更大的 IV estimates、更强的 t-stat、更漂亮的 story 更容易进入正文；而较小、无显著性或更像 placebo / critique 的规格更容易被留在附录、被替换掉，或根本不被报告。

**Note:** Recommendations for researchers
1. Anticipate and reconcile $\beta^{IV}$ vs. $\beta^{OLS}$
- 先用 economic theory 解释为什么 IV 可能 larger / smaller than OLS；
- 明确说明这个方向支持的是 affirmative / corrective / unclear 哪一种 endogeneity；
- 用 subsample analyses, placebo, or alternative specifications 去验证这个方向，而不是只报一个主规格。
2. Transparency about IV potency
- 报告 first-stage strength；
- 报告 excluded instruments 的 partial $R^2$；
- 讨论 compliers 的特征，以及他们是否代表总体。
3. Reality check on magnitude
- 直接问：这个 effect 在经济上是否 plausible？
- 如果 treatment 真的让 CEO empire building 增加了 $50\%$ firm value，却没有看到任何 activism 或 governance response，就要警惕估计量是否太大或识别故事不完整。

:::

相关卡片：[Corporate Finance/cards/Endogeneity direction - OLS bias sign#card-endogeneity-direction](cards/Endogeneity%20direction%20-%20OLS%20bias%20sign.md#card-endogeneity-direction) · [Corporate Finance/cards/ITT vs LATE - Estimand distinction#card-itt-late-distinction](cards/ITT%20vs%20LATE%20-%20Estimand%20distinction.md#card-itt-late-distinction)

:::{admonition} Note
Endogeneity direction: OLS bias 的方向
设

$$
\begin{aligned}
y_i &= \beta x_i + \underbrace{\lambda w_i}_{\text{omitted factor}} + u_i, \\
x_i &= \underbrace{\pi w_i}_{\text{endogenous component}} + v_i.
\end{aligned}
$$
则

$$
\begin{aligned}
\hat\beta^{OLS}-\beta
&= \frac{\mathrm{Cov}(x_i,\lambda w_i+u_i)}{\mathrm{Var}(x_i)} \\
&\approx \frac{\lambda\pi\,\mathrm{Var}(w_i)}{\mathrm{Var}(x_i)}.
\end{aligned}
$$
因而：

$$
\begin{aligned}
\lambda\pi>0 &\Longrightarrow \hat\beta^{OLS}>\beta \qquad \text{(Affirmative endogeneity)} \\
\lambda\pi<0 &\Longrightarrow \hat\beta^{OLS}<\beta \qquad \text{(Corrective endogeneity)}
\end{aligned}
$$
也就是：前者是 OLS 把真实效应“推大”了，后者是 OLS 把真实效应“压小”了。


:::

## 5. Empirical Execution Checklist

### 5.1 Identification
- 写清 counterfactual
- 明确核心假设（CMI / parallel trends / continuity / exclusion）
- 写出会导致识别失效的机制

### 5.2 Estimation
- baseline + alternative specifications
- 与理论一致的系数方向和量级核对
- 对关键参数做可解释的标定

### 5.3 Inference and Credibility
- 正确聚类标准误
- pre-trend, placebo, balance, density checks
- 报告 first-stage strength 与 complier interpretation
