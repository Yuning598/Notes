# 03 Applied Corporate Finance Theory

:::{admonition} Note
> 这部分用来整理 dynamic corporate finance theory。重点看 assumptions, timing, equilibrium, comparative statics, 以及模型如何映射到资本结构与证券定价。

:::

## 1. Optimal Financial Contracting（slides p.325-384）
### 1.1 Why Contracts Are Central
:::{admonition} Note
Contracts are the mechanism

$$
\begin{aligned}
\text{contract} &\Longrightarrow \text{allocate resources across agents, states, and time} \\
\text{frictions (information asymmetry)} &\Longrightarrow \text{distorted equilibrium allocation} \\
\text{optimal contract} &\Longrightarrow \text{mitigate inefficiency subject to IC / PC / limited liability}
\end{aligned}
$$
Finance research often starts from the question: given frictions, what contingent claims can implement the best feasible allocation?

直观上可以拆成三层：
- `contract` 不是附属文件，而是资源配置规则，决定谁拿资金、谁承担风险、谁先后支付、何时终止。
- `frictions` 主要指 information asymmetry、limited commitment、enforcement cost 等，它们会让市场均衡偏离最优配置。
- `optimal contract` 的目标不是消灭摩擦，而是在 `IC / PC / limited liability` 等约束下，把效率损失压到最低。

所以很多 finance 问题其实都可改写成**合同设计问题**：
- debt / equity 如何分配控制权与剩余索取权；
- CEO compensation 如何激励 effort；
- lending contract 如何约束 borrower 的行为；
- VC / staging 如何在不同阶段释放资金并保留退出权。

**Note:** Key issues
1. 有 incentive problems 时，firm 如何 finance investment?
2. incentive problems 会不会导致 credit rationing?
3. financial contracts 能否被设计成去缓解 incentive problems?

**Note:** Optimal complete contracts
信息不对称主要有两类：
- hidden information: adverse selection，合约签之前就存在的类型差异
- hidden action: moral hazard，合约签之后的努力 / 行为不可观测，**本节主要关注这一类**

`complete contract` 的意思不是“合同很长”，而是：
- 所有可观测、可验证的变量都可以写进合约；
- 不再额外假设 ad hoc 的外生约束或人为合同条款；
- 除了信息摩擦以外，其他制度安排都由优化问题内生决定。

因而 financial structure 不是先验给定的，而是由最优合约推出来的：

$$
\text{frictions} \Rightarrow \text{incentive problem} \Rightarrow \text{optimal contract} \Rightarrow \text{endogenous financial structure}
$$
如果没有 hidden action / hidden information，合约可以逼近 first best；一旦 effort 不可观测，就必须用 IC 约束去替代直接监督。

:::

### 1.2 Agency Models in Corporate Finance
:::{admonition} Note
Static agency / contracting models are central
这些模型把 corporate finance 的核心摩擦写成一个可优化的 contracting problem。它们的重要性在于：不用先假定资本结构或证券形态，而是让合同条款、控制权和支付结构从激励约束中内生推出。

典型方向：
- Capital structure: Jensen and Meckling (1976) 的核心直觉是 equity ownership 和 debt 会影响风险承担与 asset substitution incentives。
- Incentive schemes: Holmstrom (1979) 强调工资 / 奖励应当依据信号的信息含量和 payoff 的单调性来设计。
- Security design: Innes (1990) 说明债务、inside equity 等证券形态可以作为最优合同的载体。

统一理解：

$$
\text{observable payoffs/signals} \Rightarrow \text{contractible} \Rightarrow \text{optimal payoff allocation}
$$
这些静态模型的作用是先回答 “contract should look like what”，再进一步讨论动态版本里的 continuation utility, liquidation, and path dependence.

:::

### 1.3 Why Dynamic Models?
:::{admonition} Note
Why dynamic models?
静态 contracting models 已经能解释很多核心摩擦，但它们通常有几个 shortcoming：
- Security design: 单期合约很难同时刻画 debt, equity, inside equity, convertible claims 等动态组合。
- Compensation: 只看当期 payoffs 不足以描述 deferred compensation, continuation incentives, 和 reputation effects。
- Capital structure: leverage 不是一次性选择，而会随现金流、风险和再融资约束动态调整。
- Shutdown / termination: 是否继续经营，往往依赖历史结果和未来状态，而不是一个静态阈值。
- Investment: 真实投资决定具有 timing option，等待与立即投资的价值不同。

所以动态模型的核心不是“更复杂”本身，而是要在

$$ 
\text{richness} \quad \text{vs.} \quad \text{tractability}
$$
之间取得平衡。Holmstrom and Milgrom (1987) 的提醒是：模型要足够 rich 才能说清激励问题，但又不能复杂到无法求解或失去比较静态。

:::

### 1.4 **Literature**
:::{admonition} Note
Representative literature
- **One period**: Holmstrom and Tirole (1997) 将 incentive compatibility 放进融资约束里，核心是设计 payoff 让 agent 更愿意 working than shirking（努力工作而非逃避）。
- **Two periods**: Bolton and Scharfstein (1990) 强调 debt / short-term financing 如何通过 continuation threat 和 renegotiation 约束来提供 discipline。
- **Infinite horizon**:

$$
\left\{
\begin{aligned}
\text{discrete time} &:\ \text{recursive problem} \Rightarrow \text{promised utility as state variable} \\
\text{continuous time} &:\ \text{continuous-time limit / martingale approach} \\
&\qquad \Rightarrow \text{investment enters dynamic contracting and shirking may be optimal in some regions}
\end{aligned}
\right.
$$

共同点是：动态 contracting 不再只看当期 transfer，而是把 history 通过 continuation utility, liquidation threat, and recursive state variables 压缩进合约。

:::

## 1.5 Model

### 1.5.1 Basic Setting
:::{admonition} Note
Players
这类模型先把角色关系定清楚：
- principal 是出资方，责任大、资金足，像 investor / bank / VC fund；
- agent 是经营方，责任有限、手里没钱，像 manager / entrepreneur；
- 项目初始规模归一化为 1，所以真正要讨论的是是否值得投入成本 `I`，以及投入后怎么分配收益和风险；
- principal 付出 `I` 并雇佣 agent 来运行项目；
- 两边都假设 risk neutral，贴现率为 `r`，这样问题重点就落在合同设计本身，而不是偏好差异。

后面所有激励约束，都是围绕一个最核心的事实展开：**agent 的 effort 看不见**，所以不能靠直接监督，只能靠 contingent transfer 来间接激励。

:::

### 1.5.2 One Period Model

#### 1.5.2.1 一期模型：IC, PC, pledgeable income
:::{admonition} Note
Unobservable Effort

$$
\left\{
\begin{aligned}
\text{Agent}
&\Rightarrow
\begin{cases}
\text{Effort} \Rightarrow
\begin{cases}
\Pr(\text{success})=1-\lambda \\
\Pr(\text{failure})=\lambda \\
\text{cash flow}=\mu,\ \mu-C \\
\text{compensation}=T(\mu),\ T(\mu-C)
\end{cases} \\
\text{Shirk} \Rightarrow
\begin{cases}
\Pr(\text{success})=1-\lambda-\Delta\lambda \\
\Pr(\text{failure})=\lambda+\Delta\lambda \\
\text{cash flow}=\mu,\ \mu-C \\
\text{compensation}=T(\mu),\ T(\mu-C) \\
\text{private benefit}=B
\end{cases}
\end{cases}
\end{aligned}
\right.
$$

:::


$$
\begin{aligned}
IC &: T(\mu)-T(\mu-C)\ge \frac{B}{\Delta\lambda} \\
PC &: (1-\lambda)T(\mu)+\lambda T(\mu-C)\le (\mu-\lambda C)-I
\end{aligned}
$$

:::{admonition} Note
IC 和 PC 的含义
- IC 是 incentive compatibility：agent 选择 effort 的期望收益，必须至少不低于 shirk。因为 shirk 会多拿私人收益 $B$，又会把成功概率差距压缩为 $\Delta\lambda$，所以要用

$$
T(\mu)-T(\mu-C)\ge \frac{B}{\Delta\lambda}
$$
来补偿这部分诱惑。
- PC 是 participation constraint。这里可以理解为 principal 是否愿意投这个项目：扣掉投资成本 $I$ 和支付给 agent 的期望报酬之后，principal 的期望利润必须非负，否则项目不会被融资。

换句话说，IC 解决的是 “agent 会不会偷懒”，PC 解决的是 “principal 值不值得做”。

:::

IF set nonempty iff

$$
\begin{aligned}
(\mu-\lambda C)-I \ge (1-\lambda)\frac{B}{\Delta\lambda}
\end{aligned}
$$

Pledgeable income:

$$
\begin{aligned}
P = (\mu-\lambda C) - (1-\lambda)\frac{B}{\Delta\lambda}
\end{aligned}
$$

- 若 $P\ge I$, 项目可融资.
- $P$ 的经济含义是 pledgeable income: 期望现金流减去为了激励 agent 必须保留的租金。
- incentive cost 随 $B$ 上升而上升, 随 $\Delta\lambda$ 下降而上升.

:::{admonition} Note
IC and PC: derivation
在 effort 下，agent 的期望收益是

$$
U^E=(1-\lambda)T(\mu)+\lambda T(\mu-C).
$$
在 shirk 下，success probability 下降 $\Delta\lambda$，但 agent 多拿到私人收益 $B$：

$$
U^S=(1-\lambda-\Delta\lambda)T(\mu)+(\lambda+\Delta\lambda)T(\mu-C)+B.
$$
因此 incentive compatibility 要求

$$
\begin{aligned}
U^E\ge U^S
&\Longleftrightarrow \Delta\lambda\big(T(\mu)-T(\mu-C)\big)\ge B \\
&\Longleftrightarrow T(\mu)-T(\mu-C)\ge \frac{B}{\Delta\lambda}.
\end{aligned}
$$
这说明：$B$ 越大，诱导 effort 越贵；$\Delta\lambda$ 越小，努力和偷懒越难区分，激励也越贵。

principal 的期望利润是

$$
\Pi_P=(1-\lambda)(\mu-T(\mu))+\lambda(\mu-C-T(\mu-C))-I.
$$
所以 participation / IR 约束等价于

$$
\begin{aligned}
\Pi_P\ge 0
&\Longleftrightarrow (1-\lambda)T(\mu)+\lambda T(\mu-C)\le (\mu-\lambda C)-I.
\end{aligned}
$$
这就是图里那条向下倾斜的线：给 agent 的总支付不能超过项目在 high effort 下能支撑的剩余。

几何上看，IC 是一条斜率为 1 的上界线，PC 是一条向下倾斜的上界线，LL 还要求 $T(\mu-C)\ge 0$；可行合同就是这几条约束的交集。

:::

#### 1.5.2.2 One-period optimal contract
:::{admonition} Note
> 如果 principal 有全部 bargaining power, 最优合同是“失败不付, 成功付 rent”:

$$
\begin{aligned}
T(\mu-C) &= 0 \\
T(\mu) &= \frac{B}{\Delta\lambda}
\end{aligned}
$$
比较 effort 与 no effort 的净收益:

$$
\begin{aligned}
\Pi^{E} &= (\mu-\lambda C-I) - (1-\lambda)\frac{B}{\Delta\lambda} \\
\Pi^{S} &= \mu-(\lambda+\Delta\lambda)C-I \\
\Pi^{E}\ge \Pi^{S} &\Longleftrightarrow \Delta\lambda C \,\ge\, (1-\lambda)\frac{B}{\Delta\lambda}
\end{aligned}
$$
- 核心权衡: incentives cost vs. efficiency gain from effort.
- 这一步已经把 “最优金融结构” 变成了 “最优 contingent claim”.

:::

### 1.5.3 Two Periods Model
:::{admonition} Note
Two-period contract
- 期末状态由第一期现金流实现决定.
- `W_2` 是 agent 的 continuation utility, `F_2` 是 principal 的 continuation value.
- second period 的 IC 结构和 one-period 类似, 但第一期 transfer 会影响后续激励.
- success 后 continuation utility 上升.
- loss 后 continuation utility 下降.
- loss 后不需要转移, 所以 `T_1(\mu-C)=0` 和 `T_2(\mu-C_1,\mu-C)=0`.
- equally patient 时, weakly optimal 把 compensation 往后推, 即 `T_1(\mu)=0`.
- liquidation becomes useful because it relaxes incentive rent while cutting off bad states.

**Note:** Two-period conclusions
- 如果 success 后继续经营, 激励主要靠 final-period payment.
- 如果 loss 后继续经营, principal face the rent-efficiency tradeoff.
- `X_2(\mu)` 和 `X_2(\mu-C)` 记录 success / loss 后是否继续.
- 动态合同用 “延迟支付 + 终止威胁” 代替频繁现金支付.

:::

### 1.5.4 N Periods
:::{admonition} Note
N-period recursion
- 第 `n` 期只需要记住两个 state:
- firm size `X_n`
- size-adjusted continuation utility `w_n`
- 递推逻辑:
- new cash flow realization changes `w_n`
- `w_n` 高则未来奖励更高, 低则未来奖励更低
- effort incentive is implemented through promised utility, not through contemporaneous wages

$$
\begin{aligned}
w_n = x_n \, \mathbb E\!\left[\sum_{k=0}^{N-n} \frac{t_{n+k}}{(1+r)^k}\,\middle|\,H_n\right]
\end{aligned}
$$
- principal 的 value function 同样递推, 所以 dynamic programming 是自然工具.
- 复杂的历史信息 `H_n` 最终可以被压缩成 `X_n` 与 `w_n`.

:::

### 1.6 机制总结
- one-period: 用 success-contingent pay 激励 effort.
- two-period: 再加上 liquidation threat 与 delayed compensation.
- N-period: 用 promised utility 作为 state variable.
- 合约实现方式:
  - cash reserves
  - inside / outside equity
  - dividend threshold
  - debt + liquidation
- 本质上是 endogenous financial structure.

### 1.7 这部分应记住的公式

$$
\begin{aligned}
IC &: T(\mu)-T(\mu-C)\ge \frac{B}{\Delta\lambda} \\
P &= (\mu-\lambda C) - (1-\lambda)\frac{B}{\Delta\lambda} \\
T(\mu-C)&=0,\qquad T(\mu)=\frac{B}{\Delta\lambda}
\end{aligned}
$$

## 2. Model Template
- Agents
- Timing
- Payoffs
- Constraints
- Equilibrium concept
- Comparative statics
- Testable implications

## 3. Derivation Log
- key equations
- FOCs
- envelope conditions
- value functions
- threshold rules

## 4. Paper Log
- Main mechanism
- Assumptions that drive the result
- What changes relative to the benchmark
- Empirical implication

## 5. Investment Under Uncertainty（slides p.394-411）
### 6.1 为什么 NPV 不够
- 例子: widget factory.
- 当价格可能先涨后跌时, “等一等再投” 可能比立刻投资更好.
- 这说明 standard NPV rule 忽略了 option value.

### 6.2 Real option 的核心
- 投资机会本身就是一个 option.
- `when to invest` 不是时间点, 而是 project value threshold `V^*`.
- uncertainty 越大, waiting option 越值钱.
- irreversibility(sunk cost) 越强, delay option 越重要.

### 6.3 项目价值动态

$$
\begin{aligned}
\frac{dV_t}{V_t} = \alpha\,dt + \sigma\,dZ_t,\qquad \alpha=\mu-\delta
\end{aligned}
$$

- `\mu`: expected return on project value.
- `\delta`: payout rate.
- `\alpha`: expected capital gain.
- `V_t` follows geometric Brownian motion(GBM).

### 6.4 投资机会的价值函数

$$
\begin{aligned}
F(V)=\max_T \mathbb E\!\left[(V_T-I)e^{-\rho T}\right]
\end{aligned}
$$

HJB:

$$
\begin{aligned}
\frac{1}{2}\sigma^2 V^2 F''(V)+\alpha V F'(V)-\rho F(V)=0
\end{aligned}
$$

Boundary conditions:

$$
\begin{aligned}
F(0)&=0 \\
F(V^*)&=V^*-I \\
F'(V^*)&=1
\end{aligned}
$$

### 6.5 解与触发阈值

$$
\begin{aligned}
F(V)&=AV^{\beta_1},\qquad V<V^* \\
F(V)&=V-I,\qquad V\ge V^* \\
V^*&=\frac{\beta_1}{\beta_1-1}I
\end{aligned}
$$

其中 `\beta_1>1` 是 characteristic root.

### 6.6 Comparative statics
- `\sigma\uparrow`  ⇒ `F\uparrow`, `V^*\uparrow`.
- `\delta\uparrow`  ⇒ `F\downarrow`, `V^*\downarrow`.
- `I\uparrow`  ⇒ `F\downarrow`, `V^*\uparrow`.
- 不确定性越强, 等待越有价值, 但真实投资越谨慎.

### 6.7 这一讲的 takeaway
- NPV 规则是 “静态” 的.
- real option 规则是 “等待价值 + 投资阈值” 的.
- 这就是后面 structural corporate finance 的资产端直觉.

## 6. Structural Models and Leland（slides p.412-443）
### 7.1 structural model 的意思
- 理论上, 所有模型都是 structural.
- 这里的 structural model 更接近 dynamic model.
- 目标是同时刻画:
  - debt/equity valuation
  - optimal financing choice
- valuation 与 financing 是 simultaneous 的, 不能分开看.

### 7.2 模型谱系
- Modigliani-Miller(1958): no taxes, no default costs 时, capital structure irrelevant.
- tradeoff theory: debt creates tax shield, but also default cost.
- Black-Scholes / Merton: 用 contingent claim valuation 处理 corporate securities.
- Leland(1994): 把税、违约和最优 default boundary 放到同一个 real option 框架里.

### 7.3 Leland 风格的设定
- firm asset value `V_t` is the state variable.
- firm pays perpetual coupon `C`.
- corporate tax rate is `\tau`.
- bankruptcy cost is `\alpha`.
- shareholders choose default boundary `V_B` endogenously.

### 7.4 一般定价方程
对任意 contingent claim `F(V)`, 在 risk-neutral 思想下可写成

$$
\begin{aligned}
\frac{1}{2}\sigma^2V^2F''(V)+rV F'(V)-rF(V)+f(V)=0
\end{aligned}
$$

其中 `f(V)` 是流量项(例如 coupon, tax shield, bankruptcy cost).

### 7.5 债券、税盾、破产成本
标准解的形状通常是 “常数项 + 幂函数项”.

$$
\begin{aligned}
D(V)&=\frac{C}{r}+A_D V^{-x} \\
TB(V)&=\frac{\tau C}{r}+A_T V^{-x} \\
BC(V)&=A_B V^{-x}
\end{aligned}
$$

边界条件:

$$
\begin{aligned}
D(\infty)&=\frac{C}{r},\qquad D(V_B)=(1-\alpha)V_B \\
TB(\infty)&=\frac{\tau C}{r},\qquad TB(V_B)=0 \\
BC(\infty)&=0,\qquad BC(V_B)=\alpha V_B
\end{aligned}
$$

### 7.6 firm value 与 equity value

$$
\begin{aligned}
v(V)&=V+TB(V)-BC(V) \\
E(V)&=v(V)-D(V)
\end{aligned}
$$

- `E(V)` 可以理解为 `V - PV(coupons after tax) + default option value`.
- default option value 越大, equity 越像一张 call option.

### 7.7 endogenous default boundary
- default boundary `V_B` 由 smooth pasting 决定:

$$
\begin{aligned}
E'(V_B)=0
\end{aligned}
$$

- 直觉:
  - `C` 越高, default 越早.
  - `\tau` 越高, 税盾越值钱, default 越晚.
  - `r` 越高, 未来现金流折现更重, boundary 会变.
  - `\alpha` 主要影响 level, 但对 boundary 的作用在标准结果里较弱或消失.

### 7.8 optimal coupon 与 capital structure
- 在时点 `0`, 选择 `C^*(V_0)` 使 firm value 最大.
- 同时可得到 debt value, yield spread, leverage ratio.
- 一般结论: optimal coupon 小于 full debt capacity.
- 这一类模型是经验研究里最常用的 structural benchmark.

### 7.9 记忆版总结
- asset side: `V_t` 的随机演化.
- liability side: `D(V)`, `E(V)`, `TB(V)`, `BC(V)`.
- default rule: `V_B`.
- financing rule: `C^*(V_0)`.

## 7. Leverage Ratchet Effect and Dynamics（slides p.444-494）
### 8.1 这一讲在讲什么
- p.444-451: 从 tradeoff theory 过渡到 leverage puzzles.
- p.452-469: leverage ratchet effect 的静态直觉.
- p.470-487: dynamic leverage equilibrium 与 regime shocks.
- p.488-494: 下一步研究方向.

### 8.2 经验谜题
- taxes matter far less than classic tradeoff theory predicts.
- leverage 在行业内、公司间、时间上都很不稳定.
- 低杠杆企业很多, 说明单纯 tax shield 不够解释现实.

### 8.3 Ratchet effect 的直觉
- 一旦已有 debt, equity holders 对 leverage reduction 很抵触.
- 但对 leverage increase 却往往更愿意接受.
- 于是 leverage 会 “beget more leverage”.

### 8.4 静态 tradeoff 模型
- terminal cash flow `\tilde x`, debt face value `D`.
- 若 `\tilde x < D`, default.
- 若 `\tilde x \ge D`, 享受税盾.
- debt payoff 与 equity payoff 可以分解为:
  - debt claim
  - equity residual
  - tax benefit
  - default cost

### 8.5 债务定价

$$
\begin{aligned}
q(D)=\frac{V_D(D)}{D}
\end{aligned}
$$

- `q(D)` 是 debt price per unit face value.
- leverage reduction 时, 老债会因违约概率下降而涨价, 这正是股东不喜欢减债的原因之一.

### 8.6 为什么股东抵制减债
- debt buyback 会让股东以更高价格回购旧债.
- 存在三个负向分量:
  - default option effect
  - reverse dilution effect
  - tax effect
- 结果: equityholders strictly worse off when they reduce leverage.

### 8.7 为什么股东又喜欢加杠杆
- 新债若是 junior debt, 仍可能引发 future dilution / tax / pricing effects.
- 已有债务会扭曲后续融资决策.
- 于是 even new junior debt can be attractive to equity.

### 8.8 动态 leverage equilibrium
- 存在一组稳定点 `D_0, D_1, D_2, ...`.
- 递推定义:

$$
\begin{aligned}
G(D_{n+1},D_n)=0
\end{aligned}
$$

- 如果当前 `D` 落在两个稳定点之间, equity 会 push firm move to higher leverage.
- 市场预期到这一点后, debt price 会提前反映 future releveraging.

### 8.9 regime shocks
- 不同 regime 里 `(...,t_j,r_j,c_j,y_j,\lambda_{j0},\phi_j,...)` 可能不同.
- regime change 会把 firm 推向另一个 stable leverage point.
- 于是 leverage not only adjusts, it ratchets across states.

### 8.10 这一讲的结论
- commitment matters.
- standard static tradeoff theory implicitly assumes too much commitment.
- dynamic capital structure has path dependence.

## 8. Compact Formula Sheet
### 9.1 Contracting

$$
\begin{aligned}
IC &: T(\mu)-T(\mu-C)\ge \frac{B}{\Delta\lambda} \\
P &= (\mu-\lambda C)-(1-\lambda)\frac{B}{\Delta\lambda}
\end{aligned}
$$

### 9.2 Real Options

$$
\begin{aligned}
\frac{dV_t}{V_t}=\alpha dt+\sigma dZ_t,\qquad
\frac{1}{2}\sigma^2V^2F''+\alpha VF'-\rho F=0,\qquad
V^*=\frac{\beta_1}{\beta_1-1}I
\end{aligned}
$$

### 9.3 Structural Finance

$$
\begin{aligned}
v(V)=V+TB(V)-BC(V),\qquad E(V)=v(V)-D(V),\qquad E'(V_B)=0
\end{aligned}
$$

### 9.4 Leverage Dynamics

$$
\begin{aligned}
q(D)=\frac{V_D(D)}{D},\qquad G(D_{n+1},D_n)=0
\end{aligned}
$$
