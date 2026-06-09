# 02 Dynamic Asset Pricing


## Lecture 4. Arbitrage and Martingales

### 4.1 Discrete-time Securities Market, Trading Strategy, and Self-Financing


### 4.1.1 Securities Market Model

:::{admonition} Definition (Securities Market Model)
离散时间证券市场由

$$
\begin{aligned}
(\Omega,\mathcal F,P),\quad \{\mathcal F_t\}_{t=0}^T,\quad \{B_t\}_{t=0}^T,\quad \{S_t\}_{t=0}^T
\end{aligned}
$$

构成，其中：
- $\Omega$ 是有限状态空间，且各状态概率为正；
- $t=1,\ldots,T$ 是 trading days；
- $\{\mathcal F_t\}$ 是 filtration；
- $N+1$ 只证券 indexed by $n=0,\ldots,N$；
- security $0$ 是 riskless security，不支付股息，$\delta_0=0$；
- risky securities $n=1,\ldots,N$ 有 dividend process $\delta_n$ 与 ex-dividend price process $S_n$。

无风险资产价格满足

$$
\begin{aligned}
S_{0,t}
&=(1+r_{t-1})S_{0,t-1},
\end{aligned}
$$

其中 $r_t$ 是 short rate process。

所有价格与股息过程都是 adapted processes；记

$$
\begin{aligned}
\delta&=(\delta_0,\ldots,\delta_N),\qquad
S=(S_0,\ldots,S_N).
\end{aligned}
$$

:::


这就是说：每一期观察到的信息只能决定当期可交易的价格与股息，不能预知未来未揭示的状态。

### 4.1.2 Trading Strategy and Cash Flow

### 推导核对：自融资约束到财富递推式

:::{admonition} Lemma: Self-Financing Wealth Recursion
若策略在 $t\ge1$ 不再外部注入或提取现金，则财富变化完全来自持有资产的价格变动与股息：

$$
W_t-W_{t-1}=\theta_{t-1}(S_t-S_{t-1}+\delta_t).
$$

:::

从 cash flow 定义

$$
 c_t=\theta_{t-1}(S_t+\delta_t)-\theta_tS_t
$$

推出财富递推式。


$$
\begin{aligned}
W_t&=\theta_tS_t,\\
W_{t-1}&=\theta_{t-1}S_{t-1},\\
c_t&=\theta_{t-1}(S_t+\delta_t)-\theta_tS_t,\\
\text{self-financing: } c_t&=0,\quad t=1,\ldots,T.
\end{aligned}
$$

由 $c_t=0$，

$$
\begin{aligned}
\theta_tS_t
&=\theta_{t-1}(S_t+\delta_t).
\end{aligned}
$$

两边减去 $\theta_{t-1}S_{t-1}$，

$$
\begin{aligned}
W_t-W_{t-1}
&=\theta_tS_t-\theta_{t-1}S_{t-1}\\
&=\theta_{t-1}(S_t+\delta_t)-\theta_{t-1}S_{t-1}\\
&=\theta_{t-1}(S_t-S_{t-1}+\delta_t).
\end{aligned}
$$

递推求和得

$$
\begin{aligned}
W_t
&=W_0+\sum_{u=1}^t\theta_{u-1}(S_u-S_{u-1}+\delta_u).
\end{aligned}
$$

自融资不是“没有交易”，而是再平衡时买卖证券的现金流在组合内部相互抵消。


:::{admonition} Definition (Trading Strategy)
trading strategy 是一个 adapted process

$$
\begin{aligned}
\theta=(\theta_0,\ldots,\theta_N),
\end{aligned}
$$

且满足

$$
\begin{aligned}
\theta_T=0.
\end{aligned}
$$

这里 $\theta_{t,n}$ 表示时点 $t$ 交易后持有的第 $n$ 只证券份额。

$\theta_T=0$ 表示到终点 $T$ 必须平仓、关闭头寸。
:::


:::{admonition} Definition (Cash Flow)
cash flow 是一个 adapted process $c$。若策略 $\theta$ 在时点 $t$ 的现金流为

$$
\begin{aligned}
c_t
&=\theta_{t-1}(S_t+\delta_t)-\theta_t S_t,
\end{aligned}
$$

则该策略为该 cash flow 提供融资。

于是：

$$
\begin{aligned}
c_t>0
&\Longleftrightarrow \text{at }t\text{ 提取现金},\\
c_t<0
&\Longleftrightarrow \text{at }t\text{ 注入现金}.
\end{aligned}
$$

:::


:::{admonition} Lemma: Self-Financing
若除初始时点外不再注入或提取现金，即

$$
\begin{aligned}
c_1=\cdots=c_T=0,
\end{aligned}
$$

则称策略 self-financing。

此时财富过程满足

$$
\begin{aligned}
W_t
&=\theta_t S_t,\\
W_t-W_{t-1}
&=\theta_{t-1}(S_t-S_{t-1})+\theta_{t-1}\delta_t.
\end{aligned}
$$

递推求和得

$$
\begin{aligned}
W_t
&=W_0+\sum_{u=1}^t \theta_{u-1}\big[(S_u-S_{u-1})+\delta_u\big].
\end{aligned}
$$

:::


### 4.1.3 Fundamental Theorem of Asset Pricing

:::{admonition} Definition (Positive and Strictly Positive Processes)
adapted process $X$ is positive iff

$$
\begin{aligned}
X_t\ge 0, \forall t,
\end{aligned}
$$

and strictly positive iff

$$
\begin{aligned}
X_t>0, \forall t.
\end{aligned}
$$

- $\mathcal L^+$ 为 positive adapted processes 的集合；
- $\mathcal L_0^+$ 为 nonzero positive adapted processes 的集合；
- $\mathcal L^{++}$ 为 strictly positive adapted processes 的集合。
:::


:::{admonition} Definition (Arbitrage)
arbitrage 是一个 marketable cash flow $c\in \mathcal L_0^+$ 且初始成本不正。

换句话说，

$$
\begin{aligned}
c_0&\le 0,\\
c_t&\ge 0,\ \forall t,\\
P(c_t>0)&>0 \text{ for some }t.
\end{aligned}
$$

:::


:::{admonition} Definition (Linear Pricing Functional)
一个函数 $\Psi:\mathcal L\to\mathbb R$ 若满足线性，则对 cash flow 给出价格；若还满足

$$
\begin{aligned}
X<Y \;\Rightarrow\; \Psi(X)<\Psi(Y),
\end{aligned}
$$

则称它 strictly increasing.
:::


:::{admonition} Lemma: Fundamental Theorem of Asset Pricing

$$
\begin{aligned}
\text{no arbitrage}
\quad\Longleftrightarrow\quad
\exists\,\Psi:\mathcal L\to\mathbb R
\text{ strictly increasing, linear,}
\\
\Psi(c)=0,\ \forall c\in\mathcal M.
\end{aligned}
$$

其中 $\mathcal M$ 是 attainable marketable cash flows 的集合。
:::


no arbitrage 等价于：市场里存在一个对正现金流严格奖励、对可复制 cash flow 精确定价的 linear functional。  

**说明：Why is it $0$?**
这里的 $\mathcal M$ 可以理解为 **attainable / marketable cash flows with zero external cost**。  
如果一个 cash flow 可以由 self-financing 策略复制出来，那么它的“外部融资成本”就是

$$
\begin{aligned}
\Psi(c)=0.
\end{aligned}
$$

直观地说：你没有额外掏钱或拿钱进来，只是在市场内部换仓，所以净价格必须为 0。

若 $\Psi(c)\neq 0$，则同一个可复制 cash flow 会有非零成本；再配合线性，就会破坏 law of one price，并最终给出套利。

**FTAP I (No-arbitrage / Existence)**

$$
\text{No Arbitrage} \iff \exists \mathbb{Q} \sim P \text{ s.t. } \frac{S_t}{B_t} = E_t^{\mathbb{Q}} \left[ \frac{S_T}{B_T} \right]
$$
$$
\begin{aligned}
\text{No Arbitrage}
\Longleftrightarrow
\exists\,\text{strictly positive pricing rule}
\Longleftrightarrow
\exists\,\text{SPD}
\Longleftrightarrow
\exists\,\text{EMM}.
\end{aligned}
$$

离散时间里，这个 pricing rule 可写成 state price / probability 的形式；连续时间里，它对应一个 strictly positive density process（SPD）和一个 equivalent martingale measure $\mathbb Q$。

**FTAP II (Completeness / Uniqueness)**

市场 complete 的含义是：每个可复制 payoff 都有唯一价格，因此 EMM 也唯一。

$$
\begin{aligned}
\text{markets are complete}
\quad\Longleftrightarrow\quad
\text{the EMM is unique}.
\end{aligned}
$$

在连续时间模型中，这进一步等价于风险资产扩散矩阵满秩：

$$
\begin{aligned}
\operatorname{rank}(\sigma_t)=d \quad \text{a.s.}
\end{aligned}
$$

离散时间里则对应“非冗余证券的数量足以张成所有 states of nature”。

| **定理**               | **关注点**              | **经济含义**        | **数学对应**            |
| -------------------- | -------------------- | --------------- | ------------------- |
| **第一基本定理 (FTAP I)**  | **存在性 (Existence)**  | 市场是否理性（无套利）     | 存在 $\mathbb{Q} > 0$ |
| **第二基本定理 (FTAP II)** | **唯一性 (Uniqueness)** | 市场是否发达（可对冲所有风险） | $\mathbb{Q}$ 唯一     |
### 4.1.4 Security Prices and State Prices

:::{admonition} Definition (State-Price Operator)
在多期 binomial tree 中，设 $D(t,\omega)$ 为节点 $(t,\omega)$ 的所有后继节点集合。对 adapted process $X$，定义

$$
\begin{aligned}
K_{t,\omega}[X]
&:=
\sum_{u\in D(t,\omega)}X_u.
\end{aligned}
$$

简记为 $K_t[X]$。
:::


:::{admonition} Lemma: Security Prices and State Prices
下列条件等价：
1. no arbitrage；
2. 存在严格正的 state-price process $\psi\in\mathcal L^{++}$，使得对所有 $t<T$，

$$
\begin{aligned}
S_t
&=\frac{1}{\psi_t}K_t\!\left[\psi_{t+1}(\delta_{t+1}+S_{t+1})\right];
\end{aligned}
$$

3. 存在严格正的 state-price process $\psi\in\mathcal L^{++}$，使得

$$
\begin{aligned}
S_t
&=\frac{1}{\psi_t}K_t\!\left(\sum_{u=t+1}^T\psi_u\delta_u+\psi_T S_T\right).
\end{aligned}
$$

因而一个证券的价格等于未来所有 dividends 与 time-$T$ price 的 discounted present value。
:::


**说明：Derivation**
从 $t=T-1$ 开始，

$$
\begin{aligned}
S_{T-1}
&=\frac{1}{\psi_{T-1}}K_{T-1}\!\left[\psi_T(\delta_T+S_T)\right].
\end{aligned}
$$

再往前一步，

$$
\begin{aligned}
S_{T-2}
&=\frac{1}{\psi_{T-2}}K_{T-2}\!\left[\psi_{T-1}(\delta_{T-1}+S_{T-1})\right] \\
&=\frac{1}{\psi_{T-2}}K_{T-2}\!\left[\psi_{T-1}\delta_{T-1}+\psi_T\delta_T+\psi_T S_T\right].
\end{aligned}
$$

反复代入得到一般式

$$
\begin{aligned}
S_t
&=\frac{1}{\psi_t}K_t\!\left(\sum_{u=t+1}^T\psi_u\delta_u+\psi_T S_T\right).
\end{aligned}
$$

其中 $\frac{1}{\psi_t}$ 是把“当前节点”标准化，$K_t[\cdot]$ 是把所有后继节点的价值加总。

**说明：Interpretation**
第 2 式是一步递推：

$$
\begin{aligned}
S_t
&=
\frac{1}{\psi_t}K_t\!\left[\psi_{t+1}(\delta_{t+1}+S_{t+1})\right].
\end{aligned}
$$

第 3 式是从当前时点看未来所有 dividends 和 terminal price 的总现值：

$$
\begin{aligned}
S_t
&=
\frac{1}{\psi_t}K_t\!\left(\sum_{u=t+1}^T\psi_u\delta_u+\psi_T S_T\right).
\end{aligned}
$$

### 4.2 Continuous-time Securities Market Model

### 4.2.1 Trading strategy and gains

:::{admonition} Definition (Trading Strategy)
连续时间里，一个 trading strategy 是一个 process $\theta\in\mathcal L(S)$。
记 $\theta_{1:N}:=(\theta_1,\ldots,\theta_N)$ 为 risky assets 上的持仓向量。

:::

若资产价格满足

$$
\begin{aligned}
dS_{0,t}&=r_tS_{0,t}\,dt,\\
dS_{1:N,t}&=\mu_t\,dt+\sigma_t\,dZ_t,
\end{aligned}
$$

则 trading gains 为

$$
\begin{aligned}
dG_t
&=\theta_t\,dS_t\\
&=\theta_{0,t}r_tS_{0,t}\,dt+\theta_{1:N,t}'\mu_t\,dt+\theta_{1:N,t}'\sigma_t\,dZ_t,
\end{aligned}
$$

积分形式是

$$
\begin{aligned}
\int_0^t\theta_s\,dS_s
=\int_0^t\big(\theta_{0,s}r_sS_{0,s}+\theta_{1:N,s}'\mu_s\big)\,ds+\int_0^t\theta_{1:N,s}'\sigma_s\,dZ_s.
\end{aligned}
$$

:::{admonition} Definition (Self-Financing)
若财富始终等于持仓市值

$$
\begin{aligned}
W_t=\theta_t'S_t,
\end{aligned}
$$

且

$$
\begin{aligned}
dW_t=\theta_t\,dS_t,
\end{aligned}
$$

则称该策略 self-financing。

这表示财富变化完全来自 asset returns，没有外部注资或取款。

:::

### 4.2.2 Cash flow and marketability

:::{admonition} Definition (Cash Flow)
连续时间中的 cash flow 是一对 $(C_0,C_T)$，其中 $C_0\in\mathbb R$，$C_T$ 是 $\mathcal F_T$-measurable。
:::

:::{admonition} Lemma: Self-Financing Strategy Finances Cash Flow
若 self-financing strategy $\theta$ 融资 $(C_0,C_T)$，则

$$
\begin{aligned}
C_0=-\theta_0'S_0,\qquad C_T=\theta_T'S_T.
\end{aligned}
$$

反过来，若上述条件成立，则该 cash flow 被 $\theta$ financing。
:::

:::{admonition} Definition (Marketable)
若某个 cash flow 可以由某个 trading strategy financing，则称其 marketable。

:::

由 self-financing 定义，

$$
\begin{aligned}
W_T-W_0=\int_0^T\theta_t\,dS_t,
\end{aligned}
$$

因此 marketable cash flow 本质上就是可由 trading gains 复制出来的 payoff。


### 4.3 Arbitrage, SPD, and EMM


| 视角        | Discrete-time                                                                 | Continuous-time                                                                                    |
| --------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Arbitrage | cash flow 由时点序列 $c_t$ 表示                                                      | cash flow 由连续过程、积分形式表示                                                                             |
| SPD       | state price / probability 权重 $\pi_t$，满足 $\Psi(c)=K_0\sum p_t\pi_t c_t$        | strictly positive Itô process $\pi_t$，使 SPD-adjusted price / gain 成为 martingale                    |
| EMM       | 测度 $\mathbb Q\sim P$，贴现价格过程在 $\mathbb Q$ 下是 martingale                        | 同样是等价测度 $\mathbb Q$，但贴现 price / gain 的鞅性用 Itô 过程表达                                                 |
| 定价公式      | $S_t=E_t^{\mathbb Q}\!\left[\frac{B_t}{B_{t+1}}(\delta_{t+1}+S_{t+1})\right]$ | $S_t=E_t^{\mathbb Q}\!\left[e^{-\int_t^T r_u\,du}S_T+\int_t^T e^{-\int_t^s r_u\,du}c_s\,ds\right]$ |
| 直观        | “状态价格 × 后继 payoff 加总”                                                         | “贴现后的未来现金流条件期望”                                                                                    |

**Discrete-time**
### 4.3.1 Arbitrage and Linear Pricing

:::{admonition} Definition (Definition)
Arbitrage 是一个 marketable cash flow，使得初始成本不正、未来支付几乎处处非负，并且至少在某个状态严格为正。

:::

### 4.3.2 State Price Density and Pricing

### 推导核对：SPD、EMM 与风险中性定价的转换

:::{admonition} Lemma: SPD to Equivalent Martingale Measure
若存在严格正的 state price density $\xi_t$，则可定义等价测度 $Q$ 使贴现含股息价格为 $Q$-鞅；反之，EMM 给出 SPD。

:::

从

$$
S_t=E_t\left[\frac{\xi_T}{\xi_t}X_T+\int_t^T\frac{\xi_u}{\xi_t}\,dD_u\right]
$$

得到 $Q$ 下的风险中性价格。

令 money market account $B_t$ 满足 $dB_t/B_t=r_tdt$，设

$$
\begin{aligned}
\zeta_t&\equiv \xi_tB_t,\\
\frac{dQ}{dP}\Big|_{\mathcal F_t}&=\frac{\zeta_t}{\zeta_0},\\
\tilde S_t&\equiv \frac{S_t}{B_t}.
\end{aligned}
$$

若 $\zeta_t$ 是正 $P$-鞅，则 Bayes 公式给出

$$
\begin{aligned}
E_t^Q[Y]
&=\frac{1}{\zeta_t}E_t^P[\zeta_TY].
\end{aligned}
$$

对无股息 terminal payoff $X_T$，

$$
\begin{aligned}
S_t
&=E_t^P\left[\frac{\xi_T}{\xi_t}X_T\right]\\
&=B_t\frac{1}{\zeta_t}E_t^P[\zeta_TX_T/B_T]\\
&=B_tE_t^Q\left[\frac{X_T}{B_T}\right].
\end{aligned}
$$

若有股息流，价格为

$$
\begin{aligned}
S_t
&=B_tE_t^Q\left[\frac{S_T}{B_T}+\int_t^T\frac{1}{B_u}\,dD_u\right].
\end{aligned}
$$

SPD 是 $P$ 测度下的贴现边际价值；EMM 是把同一价格关系改写为 $Q$ 测度下的贴现鞅。


:::{admonition} Definition (Definition)
状态价格密度（state-price density, SPD）$\pi_t$ 是严格正过程，用来把“概率”转换成“价格”：

$$
\begin{aligned}
\Psi(c)
&=K_0\sum_{t=0}^T q_t c_t
=K_0\sum_{t=0}^T p_t\pi_t c_t,
\end{aligned}
$$

其中

$$
\begin{aligned}
q_t&=p_t\pi_t,\qquad \pi_t>0.
\end{aligned}
$$

因而

$$
\begin{aligned}
\pi_t=\frac{q_t}{p_t},
\qquad
\pi_0=1.
\end{aligned}
$$

直观上，$q_t$ 是 state price，$p_t$ 是 physical probability，$\pi_t$ 是每单位 state probability 对应的 price。

:::

**说明：状态价格密度的量纲（Dimensionality）与跨期折现机制**

要理解状态价格密度 $\pi_T(\omega)$ 的量纲，必须回到离散状态下的 Arrow-Debreu 纯净状态价格 $p_T(\omega)$。它的经济学含义是：为了在 $T$ 时刻的某一个特定状态 $\omega$ 发生时获得 1 元钱，你今天（$t=0$）需要支付的价格。因此，$p_T(\omega)$ 的量纲为：

$$
\text{量纲}[p_T] = \frac{[t=0 \text{ 时刻的绝对现值}]}{[T \text{ 时刻特定状态下的未来金额}]}
$$

由于客观物理概率 $\mathbb{P}(\omega)$ 是一个纯数字，不附带任何量纲（无量纲），因此状态价格密度 $\pi_T(\omega) = \frac{p_T(\omega)}{\mathbb{P}(\omega)}$ 的量纲与纯净状态价格完全一致，它本质上是"单位概率下的跨期折现乘数"。

当 $\pi_T$ 与 $T$ 时刻的具体资产价格（或期权 payoff）$X_T$ 相乘时，量纲相互抵消：

$$
\begin{aligned}
\text{量纲}[\pi_T \times X_T] &= \frac{[t=0 \text{ 现值}]}{[T \text{ 时刻金额}]} \times [T \text{ 时刻金额}] \\
&= [t=0 \text{ 时刻的绝对现值}]
\end{aligned}
$$

这说明 $\pi_T$ 与价格相乘后，得到的是该笔未来随机收益在期初（$0$ 时刻）的绝对等效现值。

**从绝对折现到相对折现：$\frac{\pi_T}{\pi_t}$ 的基准点滑动**

在动态定价中，公式并不直接使用 $\pi_T$，而是使用它与 $\pi_t$ 的比值（即随机折现因子 SDF）。通过量纲除法，可以清晰看到基准点的滑动转移：

$$
\begin{aligned}
\text{量纲}\left[ \frac{\pi_T}{\pi_t} \right] &= \frac{\text{量纲}[\pi_T]}{\text{量纲}[\pi_t]} = \frac{[0 \text{ 时刻现值}] / [T \text{ 时刻金额}]}{[0 \text{ 时刻现值}] / [t \text{ 时刻金额}]} \\
&= \frac{[t \text{ 时刻的当前金额}]}{[T \text{ 时刻的未来金额}]}
\end{aligned}
$$

将该比值与期权在 $T$ 时刻的行权收益 $(S_T - K)$ 相乘，分母被再次抵消，$\frac{\pi_T}{\pi_t}(S_T - K)$ 的量纲彻底变成了 $[t \text{ 时刻的当前金额}]$。此时再对其套用基于 $t$ 时刻信息集的条件期望算子 $E_t[\cdot]$，将所有未来可能状态的概率加权求和，即可无套利地算出期权在 $t$ 时刻的当前合理定价。

**核心直观**

状态价格密度 $\pi$ 本质上是自带概率剥离属性的绝对折现核，其与资产未来名义价格相乘的量纲结果是统一锚定于期初原点的绝对现值。而在动态定价框架中，通过比值 $\frac{\pi_T}{\pi_t}$ 实现了折现基准点从期初 $t=0$ 向当前时刻 $t$ 的自然滑动，使得条件期望定价公式在任意时点都能保持一致的经济含义。

**说明：Binomial tree intuition**

- $t=0 \rightarrow t=1$: up / down
- $t=1 \rightarrow t=2$: uu / ud / du / dd
- 每个节点的价格等于后继现金流按 state price 加权求和
在每个节点上都可以理解为：该节点的 cash flow 乘上该节点的 state price，再对后继节点加总，得到当前价格。

从 state price 角度，线性定价就是

$$
\begin{aligned}
\Psi(c)
&=K_0\sum_{t=0}^T q_t c_t
=K_0\sum_{t=0}^T p_t\pi_t c_t,
\qquad q_t=p_t\pi_t,\ \pi_t>0,\ \pi_0=1.
\end{aligned}
$$

若记 $\xi_t$ 为 SPD，则

$$
\begin{aligned}
\xi_t S_t
&=E_t\!\left[\xi_{t+1}(\delta_{t+1}+S_{t+1})\right]
=E_t\!\left[\sum_{u=t+1}^T \xi_u\delta_u+\xi_T S_T\right],\\
S_t
&=E_t\!\left[\frac{\xi_{t+1}}{\xi_t}(\delta_{t+1}+S_{t+1})\right].
\end{aligned}
$$

- 无分红时 $\delta_t\equiv0$，所以

$$
\begin{aligned}
\frac{S_t}{B_t}
&=E_t^{\mathbb Q}\!\left[\frac{S_{t+1}}{B_{t+1}}\right],
\end{aligned}
$$

	即 **discounted price process 是 martingale**；

- 有分红时，

$$
\begin{aligned}
\hat G_t:=\frac{S_t}{B_t}+\sum_{s=1}^t\frac{\delta_s}{B_s}
\end{aligned}
$$

	满足

$$
\begin{aligned}
\hat G_t=E_t^{\mathbb Q}[\hat G_{t+1}].
\end{aligned}
$$

总结：

$$
\begin{aligned}
\left(\delta_t\equiv 0\right)
\;&\Longrightarrow\;
\frac{S_t}{B_t}\text{ is a }\mathbb Q\text{-martingale},\\
\left(\delta_t\not\equiv 0\right)
\;&\Longrightarrow\;
\frac{S_t}{B_t}+\sum_{s=1}^t\frac{\delta_s}{B_s}\text{ is a }\mathbb Q\text{-martingale}.
\end{aligned}
$$


### 4.3.3 EMM and Risk-Neutral Pricing

:::{admonition} Definition (EMM)
等价鞅测度（equivalent martingale measure, EMM）$\mathbb Q$ 满足

$$
\begin{aligned}
\mathbb Q\sim P,
\end{aligned}
$$

且贴现价格过程在 $\mathbb Q$ 下是 martingale。

记 money market account 为 $B_t=S_{0,t}$，则定价公式可写为

$$
\begin{aligned}
\Psi(c)
&=E_0^{\mathbb Q}\!\left[\sum_{t=0}^T\frac{c_t}{B_t}\right].
\end{aligned}
$$

因而在 $\mathbb Q$ 下，资产的 expected return 等于 interest rate。

:::

若 $\mathbb Q\ll P$，则存在 Radon-Nikodym 导数

$$
\begin{aligned}
Z_T=\frac{d\mathbb Q}{dP},\qquad
E^{\mathbb Q}[X]=E[Z_T X],\qquad
Z_t=E[Z_T\mid\mathcal F_t].
\end{aligned}
$$

于是

$$
\begin{aligned}
E_t^{\mathbb Q}[X]=\frac{1}{Z_t}E_t[Z_T X].
\end{aligned}
$$

若无分红，记 $R_{t+1}=S_{t+1}/S_t$ 且 $B_{t+1}=B_t(1+r_t)$，则

$$
\begin{aligned}
\frac{S_t}{B_t}
&=E_t^{\mathbb Q}\!\left[\frac{S_tR_{t+1}}{B_t(1+r_t)}\right]
=\frac{S_t}{B_t}E_t^{\mathbb Q}\!\left[\frac{R_{t+1}}{1+r_t}\right],
\end{aligned}
$$

所以

$$
\begin{aligned}
E_t^{\mathbb Q}[R_{t+1}]=1+r_t.
\end{aligned}
$$

### Change of Numeraire: $\mathbb Q$、$\mathbb Q^k$ 与 $\mathbb Q^T$

**Goal** 对比连续时间资产定价中 standard risk-neutral measure $\mathbb Q$、numeraire-specific risk-neutral measure $\mathbb Q^k$ 与 $T$-forward measure $\mathbb Q^T$ 的数学结构。核心是：换计价物（numeraire）等价于换 deflator，因此测度的 Girsanov kernel 会随计价尺度改变。

**基本系统**

$$
\left\{
\begin{aligned}
\mathbb Q
&:\quad
\text{以基础货币滚动账户 }
B_t=\exp\left(\int_0^t r_sds\right)
\text{ 为 numeraire},\\
\mathbb Q^k
&:\quad
\text{以商品/货币 }k\text{ 的滚动账户 }
B_{k,t}=\exp\left(\int_0^t r_s^{(k)}ds\right)
\text{ 为 numeraire},\\
\mathbb Q^T
&:\quad
\text{以到期日为 }T\text{ 的零息债券 }P_k(t,T)
\text{ 为 numeraire},\\
S_t^{(k)}
&:\quad
\text{以商品 }k\text{ 计价的任意风险资产价格}.
\end{aligned}
\right.
$$

**$\mathbb Q$ 与 $\mathbb Q^k$ 的分化**

在多商品或多国开放经济中，不同商品/国家可能对应不同 instant real risk-free rate $r_t^{(k)}$。因此以商品 $k$ 计价的资产，应该用商品 $k$ 的滚动账户 $B_{k,t}$ 贴现。

根据 change of numeraire，在 $\mathbb Q^k$ 下：

$$
\begin{aligned}
\frac{S_t^{(k)}}{B_{k,t}}
&=
E_t^{\mathbb Q^k}
\left[
\frac{S_T^{(k)}}{B_{k,T}}
\right]\\
&\Longleftrightarrow
S_t^{(k)}
=
E_t^{\mathbb Q^k}
\left[
\exp\left(
-\int_t^T r_s^{(k)}ds
\right)
S_T^{(k)}
\right].
\end{aligned}
$$

若从 physical measure $P$ 出发，标准本币风险中性测度与商品 $k$ 风险中性测度可写成

$$
\left\{
\begin{aligned}
dW_t^{\mathbb Q}
&=dW_t^P+\lambda_tdt,\\
dW_t^{\mathbb Q^k}
&=dW_t^P+\lambda_t^{(k)}dt.
\end{aligned}
\right.
$$

在 two-good / heterogeneous-belief notation 中，常见地有

$$
\begin{aligned}
\lambda_t^{(k)}
&=
\sigma_{k,t}+a_{k,t}\beta,
\qquad
a_{k,t}:=\frac{\omega_{k,t}}{1+\omega_{k,t}}.
\end{aligned}
$$

所以两个风险中性 Brownian motion 的差异为

$$
\begin{aligned}
dW_t^{\mathbb Q^k}
&=
dW_t^{\mathbb Q}
+(\lambda_t^{(k)}-\lambda_t)dt.
\end{aligned}
$$

这说明 $\mathbb Q$ 与 $\mathbb Q^k$ 的区别不是“概率技巧”，而是计价物改变后，风险补偿所对应的价值尺度改变。

**从滚动账户到零息债券：$T$-forward measure**

在 $\mathbb Q^k$ 下，若 $r_s^{(k)}$ 随机，则

$$
\begin{aligned}
S_t^{(k)}
&=
E_t^{\mathbb Q^k}
\left[
\exp\left(
-\int_t^T r_s^{(k)}ds
\right)
S_T^{(k)}
\right]
\end{aligned}
$$

一般不能写成

$$
\begin{aligned}
E_t^{\mathbb Q^k}
\left[
\exp\left(
-\int_t^T r_s^{(k)}ds
\right)
S_T^{(k)}
\right]
&\ne
E_t^{\mathbb Q^k}
\left[
\exp\left(
-\int_t^T r_s^{(k)}ds
\right)
\right]
E_t^{\mathbb Q^k}[S_T^{(k)}],
\end{aligned}
$$

因为随机折现因子与 terminal payoff 之间可能有 nonzero covariance。

为消去随机折现流，将 numeraire 从 rolling account $B_{k,t}$ 换成 zero-coupon bond $P_k(t,T)$。定义

$$
\begin{aligned}
M_t^T
&:=
\left.
\frac{d\mathbb Q^T}{d\mathbb Q^k}
\right|_{\mathcal F_t}\\
&=
\frac{P_k(t,T)/P_k(0,T)}
{B_{k,t}/B_{k,0}}\\
&=
\frac{P_k(t,T)}{P_k(0,T)}
\exp\left(
-\int_0^t r_s^{(k)}ds
\right),
\qquad B_{k,0}=1.
\end{aligned}
$$

在 $\mathbb Q^T$ 下，任意以商品 $k$ 计价的资产相对于零息债券的价格为 martingale：

$$
\begin{aligned}
\frac{S_t^{(k)}}{P_k(t,T)}
&=
E_t^{\mathbb Q^T}
\left[
\frac{S_T^{(k)}}{P_k(T,T)}
\right]\\
&=
E_t^{\mathbb Q^T}
\left[
S_T^{(k)}
\right],
\qquad P_k(T,T)=1.
\end{aligned}
$$

因此

$$
\begin{aligned}
S_t^{(k)}
&=
P_k(t,T)
E_t^{\mathbb Q^T}
\left[
S_T^{(k)}
\right].
\end{aligned}
$$

若零息债券在 $\mathbb Q^k$ 下满足

$$
\begin{aligned}
\frac{dP_k(t,T)}{P_k(t,T)}
&=
r_t^{(k)}dt+\sigma_P(t,T)'dW_t^{\mathbb Q^k},
\end{aligned}
$$

则

$$
\begin{aligned}
\frac{dM_t^T}{M_t^T}
&=
\sigma_P(t,T)'dW_t^{\mathbb Q^k}.
\end{aligned}
$$

由 Girsanov theorem，$T$-forward measure 下的 Brownian motion 为

$$
\begin{aligned}
dW_t^{\mathbb Q^T}
&=
dW_t^{\mathbb Q^k}-\sigma_P(t,T)dt.
\end{aligned}
$$

这一步的经济含义是：用 $P_k(t,T)$ 作 numeraire 时，债券自身的风险载荷被吸收到测度变换中，远期定价只剩 terminal payoff 的 $\mathbb Q^T$ 条件期望。

**结构对比**

| 概率测度 | 核心计价物 (Numeraire) | Deflator / SDF component | 核心用途 |
| --- | --- | --- | --- |
| $\mathbb Q$ | 基础货币滚动账户 $B_t$ | $\exp\left(-\int_0^t r_sds\right)$ | 单一本币资产的标准 risk-neutral pricing |
| $\mathbb Q^k$ | 商品 $k$ 滚动账户 $B_{k,t}$ | $\exp\left(-\int_0^t r_s^{(k)}ds\right)$ | 多商品 / 多国模型中的本地资产定价 |
| $\mathbb Q^T$ | 零息债券 $P_k(t,T)$ | $P_k(t,T)$ | 剥离 stochastic interest-rate discounting，定价 forwards / derivatives |

三者之间的区别，本质上是 asset pricing theorem 在不同价值尺度下的同一套 martingale pricing relation。换 numeraire 后，随机折现因子在“rolling account discounting”、“local risk-neutral discounting”与“terminal payoff forward pricing”之间代数变形。

**Continuous-time**

### 4.3.4 Dividends and Intermediate Consumption

:::{admonition} Definition (Dividends and Gain Process)
设 dividend rate process 为 $\delta=(0,\delta_1,\ldots,\delta_N)$，定义 cumulative dividend process

$$
\begin{aligned}
D_t=\int_0^t \delta_s\,ds,
\end{aligned}
$$

以及 gain process

$$
\begin{aligned}
G_t=S_t+D_t.
\end{aligned}
$$

若引入 intermediate consumption rate $c\in\mathcal L^1$，则消费累计为 $\int_0^t c_s\,ds$。

:::

:::{admonition} Definition (Trading Strategy and Cash Flow)
一个 trading strategy 是一个过程 $\theta\in\mathcal L(G)$。
现金流是三元组 $(C_0,c,C_T)$，其中 $C_0\in\mathbb R$，$c\in\mathcal L^1$，$C_T$ 是 $\mathcal F_T$-measurable。
该策略融资 $(C_0,c,C_T)$ 当且仅当

$$
\begin{aligned}
\theta_tS_t
&=\theta_0S_0+\int_0^t\theta_s\,dG_s-\int_0^t c_s\,ds,
\end{aligned}
$$

且

$$
\begin{aligned}
C_0=-\theta_0S_0,\qquad C_T=\theta_TS_T.
\end{aligned}
$$

:::

:::{admonition} Definition (Arbitrage)
arbitrage 是一个 marketable cash flow，满足

$$
\begin{aligned}
C_0\ge 0,\qquad c_t\ge 0,\qquad C_T\ge 0,
\end{aligned}
$$

并且至少在某一部分上严格为正，且具有正概率。

:::

若无套利，则存在严格正的 SPD 过程 $\pi$，使得

$$
\begin{aligned}
\pi_tS_t
=E_t\!\left[\pi_TS_T+\int_t^T\pi_sc_s\,ds\right].
\end{aligned}
$$

因此

$$
\begin{aligned}
\hat G_t
:=\pi_tS_t+\int_0^t\pi_sc_s\,ds
\end{aligned}
$$

是 martingale。

在 EMM $\mathbb Q$ 下，同样有

$$
\begin{aligned}
\tilde G_t
:=\frac{S_t}{B_t}+\int_0^t\frac{c_s}{B_s}\,ds
\end{aligned}
$$

是 martingale，等价地，

$$
\begin{aligned}
S_t
=E_t^{\mathbb Q}\!\left[e^{-\int_t^T r_u\,du}S_T+\int_t^T e^{-\int_t^s r_u\,du}c_s\,ds\right].
\end{aligned}
$$

**Price of risk example**

若资产收益写成

$$
\begin{aligned}
R_1
&=1+\mu+\sigma\varepsilon^P,\qquad \varepsilon^P\sim N(0,1),
\end{aligned}
$$

则在 $\mathbb Q$ 下可写成

$$
\begin{aligned}
\varepsilon^Q
&=\varepsilon^P+\eta,\\
R_1
&=1+\mu-\sigma\eta+\sigma\varepsilon^Q.
\end{aligned}
$$

由 EMM 定义，

$$
\begin{aligned}
E^{\mathbb Q}[R_1]
&=1+r,
\end{aligned}
$$

所以

$$
\begin{aligned}
\mu-r
&=\sigma\eta.
\end{aligned}
$$

这里 $\eta$ 是 price of risk，$\sigma$ 是 quantity of risk，所以 risk premium = quantity of risk × price of risk.

:::{admonition} Lemma: Proposition
无套利等价于存在严格正的线性定价泛函；在动态模型中，这等价于存在 SPD，亦等价于存在 EMM。

:::

### 4.4 Replication and Complete Markets


### 4.4.1 Redundant Securities

:::{admonition} Definition (Definition)
若某个终值支付 $C_T$ 可由现有资产的 self-financing 策略完全复制，则对应证券是 redundant security。

:::

若交易策略 $\theta$ replication payoff $\tilde S_T$，则

$$
\begin{aligned}
\tilde S_T=\theta_T'S_T.
\end{aligned}
$$

因此其价格必须等于复制组合的价格：

$$
\begin{aligned}
\tilde S_t=\theta_t'S_t.
\end{aligned}
$$

若存在另一复制策略 $\bar\theta$ 也生成相同 payoff，则由 no arbitrage / law of one price，

$$
\begin{aligned}
\theta_t'S_t=\bar\theta_t'S_t.
\end{aligned}
$$

这就是 risk-neutral pricing 的核心。

:::{admonition} Lemma: Proposition
冗余证券必须按复制组合价格定价；这就是 risk-neutral pricing 的核心。

:::

### 4.4.2 Complete Markets

FTAP II 在这里的具体化就是：complete markets 等价于 EMM 唯一。

:::{admonition} Lemma: Complete Markets

$$
\begin{aligned}
\text{markets are complete}
\quad\Longleftrightarrow\quad
\text{the EMM is unique}.
\end{aligned}
$$

更具体地，在连续时间模型中，若风险资产扩散矩阵为 $\sigma_t$，则

$$
\begin{aligned}
\operatorname{rank}(\sigma_t)=d \quad \text{a.s.}
\end{aligned}
$$

当且仅当市场 complete。
:::


要让市场 complete，必须有足够多的 non-redundant securities 来张成 $d$ 个 independent Brownian motions；这和离散时间里“需要足够多的 non-redundant securities 才能覆盖所有 states of nature”是同一个想法。

### 4.4.3 Risk-Neutral Pricing

:::{admonition} Lemma: Risk-neutral pricing
冗余证券由 no arbitrage 定价：

$$
\begin{aligned}
\tilde S_t
&=E_t^{\mathbb Q}\!\left[\exp\!\left(-\int_t^T r_s\,ds\right)\tilde S_T\right].
\end{aligned}
$$

若 $\tilde S_T$ 可由某个 self-financing strategy 复制，则其价格必须等于复制组合的价格；而在 EMM $\mathbb Q$ 下，这个复制价格就是贴现后的条件期望。

:::

### 4.5 Martingale Approach to Portfolio Choice


### 4.5.1 Feasible Consumption and Static Problem

:::{admonition} Definition (Feasible Consumption Plan)
可行消费计划 $(c,C_T)$ 指其对应现金流能被某个交易策略融资。
:::

:::{admonition} Lemma: Static Problem
在 complete markets 下，动态最优消费问题等价于静态问题：

$$
\begin{aligned}
\max_{c,C_T}\quad
&E\!\left[\int_0^T u_t(c_t)\,dt+U_T(C_T)\right] \\
\text{s.t.}\quad
&E^{\mathbb Q}\!\left[\int_0^T \frac{c_t}{B_t}\,dt+\frac{C_T}{B_T}\right]=W,\\
&c_t\ge 0,\ C_T\ge 0.
\end{aligned}
$$

写成 $P$-测度下的预算约束就是

$$
\begin{aligned}
E\!\left[\int_0^T \xi_t c_t\,dt+\xi_T C_T\right]=W.
\end{aligned}
$$

:::

$B_t$ 是 money market account / bank account，也就是无风险资产价格过程；离散时间里 $B_{t+1}=B_t(1+r_t)$，连续时间里 $dB_t=r_tB_t\,dt$。  
为什么要除以 $B_t$？因为我们把未来现金流换成 **今天的价值**：  

$$
\begin{aligned}
\frac{c_t}{B_t},\qquad \frac{C_T}{B_T}
\end{aligned}
$$

就是把各时点的消费 / 终值都按无风险资产折现后的单位。这样动态预算约束就变成一个静态约束：  

$$
\begin{aligned}
E^{\mathbb Q}\!\left[\int_0^T \frac{c_t}{B_t}\,dt+\frac{C_T}{B_T}\right]=W.
\end{aligned}
$$

等价地，在 $P$-测度下写成

$$
\begin{aligned}
E\!\left[\int_0^T \xi_t c_t\,dt+\xi_T C_T\right]=W.
\end{aligned}
$$

这里用 $\max$ 是因为投资者在所有 feasible consumption plans 里挑选使期望效用最大的那个计划，也就是在预算约束下做优化。

### 4.5.2 Optimal Consumption

### 推导核对：鞅方法下最优消费的一阶条件

:::{admonition} Lemma: Static Budget Problem in Complete Markets
若完整市场中存在 SPD $\xi_t$，动态消费选择可化为静态问题：

$$
\max_{(c_t,C_T)}E\left[\int_0^T u_t(c_t)dt+U_T(C_T)\right]
\quad\text{s.t.}\quad
E\left[\int_0^T\xi_t c_tdt+\xi_TC_T\right]\le W_0.
$$

内点最优满足

$$
u_t'(c_t^*)=\lambda\xi_t,
\qquad
U_T'(C_T^*)=\lambda\xi_T.
$$

:::

用 Lagrangian 推出最优消费是 SPD 的反函数。


$$
\begin{aligned}
\mathcal L
&=E\left[\int_0^T u_t(c_t)dt+U_T(C_T)\right]
-\lambda\left(E\left[\int_0^T\xi_tc_tdt+\xi_TC_T\right]-W_0\right).
\end{aligned}
$$

对每个 $t$ 的 $c_t$ 做点态扰动 $c_t+\epsilon h_t$，最优性要求一阶变分为零：

$$
\begin{aligned}
0
&=\frac{d}{d\epsilon}\mathcal L(c+\epsilon h)\Big|_{\epsilon=0}\\
&=E\left[\int_0^T\big(u_t'(c_t)-\lambda\xi_t\big)h_tdt\right].
\end{aligned}
$$

由于任意 admissible $h_t$ 都可取，

$$
\begin{aligned}
u_t'(c_t^*)=\lambda\xi_t.
\end{aligned}
$$

终端消费同理：

$$
\begin{aligned}
0
&=E\left[(U_T'(C_T)-\lambda\xi_T)H_T\right]
\quad\forall H_T,\\
U_T'(C_T^*)
&=\lambda\xi_T.
\end{aligned}
$$

若 $I_t=(u_t')^{-1}$、$I_T=(U_T')^{-1}$，则

$$
\begin{aligned}
c_t^*&=I_t(\lambda\xi_t),\\
C_T^*&=I_T(\lambda\xi_T),
\end{aligned}
$$

其中 $\lambda$ 由预算约束绑定确定。

鞅方法的核心是“先用 SPD 定价全部消费，再逐状态 equate marginal utility to state price”。


构造 Lagrangian：

$$
\begin{aligned}
\mathcal L
=E\!\left[\int_0^T u_t(c_t)\,dt+U_T(C_T)\right]
\!+\lambda\!\left(W-E\!\left[\int_0^T\xi_t c_t\,dt+\xi_T C_T\right]\right).
\end{aligned}
$$

一阶条件给出

$$
\begin{aligned}
u_t'(c_t^*)&=\lambda\xi_t,\\
U_T'(C_T^*)&=\lambda\xi_T.
\end{aligned}
$$

若记逆边际效用为

$$
\begin{aligned}
I_t:=\left(u_t'\right)^{-1},\qquad I_T:=\left(U_T'\right)^{-1},
\end{aligned}
$$

则

$$
\begin{aligned}
c_t^*&=I_t(\lambda\xi_t),\\
C_T^*&=I_T(\lambda\xi_T).
\end{aligned}
$$

乘子 $\lambda$ 由预算约束唯一确定。

### 4.5.3 Optimal Trading Strategy

最优财富过程是 optimal consumption claim 的价格：

$$
\begin{aligned}
W_t^*
&=E_t^{\mathbb Q}\!\left[\int_t^T\frac{c_s^*}{B_s}\,ds+\frac{C_T^*}{B_T}\right]B_t \\
&=\frac{1}{\xi_t}E_t\!\left[\int_t^T\xi_s c_s^*\,ds+\xi_T C_T^*\right].
\end{aligned}
$$

因此

$$
\begin{aligned}
dW_t^*
&=\theta_t^{*'}\,dS_t-c_t^*\,dt.
\end{aligned}
$$

若写成 $W_t^*=F(t,S_t,t)$，则 Ito 展开给出

$$
\begin{aligned}
dF
&=\left(F_t+\mathcal L^Q F\right)dt+\nabla_SF'\sigma_t\,dZ_t,
\end{aligned}
$$

与 self-financing 条件比较 diffusion 项，得到

$$
\begin{aligned}
\theta_{1:N,t}^{*'}
=\nabla_SF(t,S_t,t)'.
\end{aligned}
$$

也就是说：最优交易策略由最优财富函数对 risky assets 价格的敏感度决定。

---

## Lecture 5. Dynamic Programming

### 5.1 Value Function and HJB Equation


### 5.1.1 Motivating Example

关联前文：[连续时间证券市场模型](02_Dynamic_Asset_Pricing.md) · [HJB 方程与动态规划](cards/part2/HJB%20%E6%96%B9%E7%A8%8B%E4%B8%8E%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.md)

考虑两种资产：

$$
\begin{aligned}
dB_t=rB_t\,dt,\qquad dS_t=\mu S_t\,dt+\sigma S_t\,dZ_t.
\end{aligned}
$$

这里 $B_t$ 是 money market account / bank account，所以在短时间 $dt$ 内按无风险利率 $r$ 连续增长；而 $S_t$ 用几何布朗运动（GBM）表示，是因为股票价格通常建模为“相对变化率”：

$$
\begin{aligned}
\frac{dS_t}{S_t}
=\mu\,dt+\sigma\,dZ_t,
\end{aligned}
$$

即确定性漂移 $\mu$ 加上随机冲击 $\sigma\,dZ_t$，从而价格始终保持正值。

投资者关心的是 lifetime expected utility：

$$
\begin{aligned}
\max E_0\!\left[\int_0^\infty e^{-\rho t}\log C_t\,dt\right].
\end{aligned}
$$

目标是同时决定 consumption policy 和 portfolio policy。

若持有 $\theta_t^B$ 单位 bond、$\theta_t^S$ 单位 stock，消费率为 $C_t\,dt$，则 wealth dynamics 是

$$
\begin{aligned}
dW_t
&=\theta_t^B\,dB_t+\theta_t^S\,dS_t-C_t\,dt\\
&=r\theta_t^B B_t\,dt+\mu \theta_t^S S_t\,dt-C_t\,dt+\sigma \theta_t^S S_t\,dZ_t.
\end{aligned}
$$

若记

$$
\begin{aligned}
\phi_t:=\frac{\theta_t^S S_t}{W_t},
\qquad
1-\phi_t=\frac{\theta_t^B B_t}{W_t},
\end{aligned}
$$

则

$$
\begin{aligned}
dW_t
&=r(1-\phi_t)W_t\,dt+\mu \phi_tW_t\,dt-C_t\,dt+\sigma \phi_tW_t\,dZ_t\\
&=\big(rW_t-r\phi_tW_t+\mu \phi_tW_t-C_t\big)\,dt+\sigma \phi_tW_t\,dZ_t\\
&=\big(rW_t+(\mu-r)\phi_tW_t-C_t\big)\,dt+\sigma \phi_tW_t\,dZ_t.
\end{aligned}
$$

这里 $W_t$ 是 **wealth stock**（时点 $t$ 的财富存量），而 $C_t\,dt$ 是 **consumption flow**（在区间 $[t,t+dt]$ 的消费支出）；所以消费不是“放进” $W_t$ 里，而是从财富增量里扣除：

$$
\begin{aligned}
dW_t=\text{投资收益}-\text{消费支出}.
\end{aligned}
$$

这说明投资—消费问题本质上是一个 controlled diffusion。

### 5.1.2 Investor's Problem

在时点 $t$，课件先把 investor’s problem 写成一个无限期、对数效用 (log utility) 的控制问题：

$$
\begin{aligned}
P_t:\quad
\max_{C_s,\phi_s}\;
E_t\!\left[\int_t^\infty e^{-\beta(s-t)}\log C_s\,ds\right]
\end{aligned}
$$

subject to

$$
\begin{aligned}
dW_t
=\big(rW_t+W_t\phi_t(\mu-r)-C_t\big)\,dt+W_t\phi_t\sigma\,dZ_t.
\end{aligned}
$$

这里 $\phi_t$ 是 risky asset 的 wealth share，所以 $W_t\phi_t$ 就是投在股票上的 dollar amount。  
动态规划 (dynamic programming) 的核心是把这个 multi-period problem 分解成一连串 one-period problems。

### 5.1.3 Heuristic Derivation of the HJB Equation

### 推导核对：从 Bellman 原理到 HJB

:::{admonition} Lemma: HJB Equation
对状态 $X_t$、控制 $a_t$ 与价值函数 $V(t,x)$，若

$$
dX_t=\mu(t,X_t,a_t)dt+\sigma(t,X_t,a_t)dW_t,
$$

且 instantaneous payoff 为 $f(t,X_t,a_t)$，则 HJB 为

$$
0=\sup_a\left\{f(t,x,a)+V_t+V_x\mu(t,x,a)+\frac12\operatorname{tr}[\sigma\sigma'V_{xx}]\right\}.
$$

:::

从短时间 Bellman 关系推出 PDE。


$$
\begin{aligned}
V(t,x)
&=\sup_{a_s}E_{t,x}\left[\int_t^T f(s,X_s,a_s)ds+g(X_T)\right],\\
V(t,x)
&=\sup_{a\text{ on }[t,t+dt]}E_{t,x}\left[f(t,x,a)dt+V(t+dt,X_{t+dt})\right].
\end{aligned}
$$

对 $V(t,X_t)$ 用 Itô 展开，

$$
\begin{aligned}
dV(t,X_t)
&=V_tdt+V_xdX_t+\frac12 V_{xx}(dX_t)^2\\
&=\left(V_t+V_x\mu+\frac12\operatorname{tr}[\sigma\sigma'V_{xx}]\right)dt+V_x\sigma dW_t.
\end{aligned}
$$

取条件期望并代回 Bellman 关系：

$$
\begin{aligned}
V(t,x)
&=\sup_a\left\{f(t,x,a)dt+V(t,x)
+\left(V_t+V_x\mu+\frac12\operatorname{tr}[\sigma\sigma'V_{xx}]\right)dt+o(dt)\right\}.
\end{aligned}
$$

两边消去 $V(t,x)$，除以 $dt$，令 $dt\downarrow0$：

$$
\begin{aligned}
0
=\sup_a\left\{f(t,x,a)+V_t+V_x\mu+\frac12\operatorname{tr}[\sigma\sigma'V_{xx}]\right\}.
\end{aligned}
$$

HJB 是 Bellman 原理的局部极限；每个项都来自“即时效用 + 价值函数的漂移”。


:::{admonition} Definition (Value Function in the Investor's Problem)
在这个 motivating example 里，唯一相关的 state variable 就是当前财富 $W_t$；因此 [value function](cards/part2/%E4%BB%B7%E5%80%BC%E5%87%BD%E6%95%B0.md) 只需要写成

$$
\begin{aligned}
V(W_t)
:=\sup_{\{C_s,\phi_s\}_{s\ge t}}
E_t\!\left[\int_t^\infty e^{-\beta(s-t)}\log C_s\,ds\right].
\end{aligned}
$$

也就是说，给定当前财富 $W_t$ 以后，未来最优值就被完全决定了。

以后若再引入状态变量 $X_t$，再推广成 $V(t,W_t,X_t)$。

:::


Bellman equation 不是“凭空定义”的；它来自 **principle of optimality**：  
从时点 $t$ 往后看，最优策略在前面这一个极短区间 $[t,t+\Delta t]$ 上先做一次最优决策，然后从 $t+\Delta t$ 开始仍然必须继续最优。  
因此 value function 必须满足“当前最优值 = 当期回报 + 下一期最优值”的递归结构。

先把连续时间问题离散化为时间间隔 $\Delta t$ 的 Bellman equation：

$$
\begin{aligned}
V(W_t)
=\max_{C_t,\phi_t}
\left\{(\log C_t)\Delta t+E_t\!\left[e^{-\beta \Delta t}V(W_{t+\Delta t})\right]\right\}.
\end{aligned}
$$

更一般地，若状态变量记为 $X_t$、控制变量记为 $a_t$，则短期递推可以写成

$$
\begin{aligned}
V(t,X_t)
&=\sup_{a_t}
\mathbb E_t\!\left[
\int_t^{t+\Delta t} e^{-\beta(s-t)}u(a_s,X_s)\,ds
+e^{-\beta\Delta t}V(t+\Delta t,X_{t+\Delta t})
\right].
\end{aligned}
$$

当 $\Delta t$ 很小时，

$$
\begin{aligned}
\int_t^{t+\Delta t} e^{-\beta(s-t)}u(a_s,X_s)\,ds
&=u(a_t,X_t)\Delta t+o(\Delta t),\\
V(t+\Delta t,X_{t+\Delta t})
&=V+V_t\Delta t+V_X'\Delta X+\frac12 V_{XX}(\Delta X)^2+o(\Delta t),
\end{aligned}
$$

再把 $e^{-\beta\Delta t}=1-\beta\Delta t+o(\Delta t)$ 代回去、保留一阶项并令 $\Delta t\downarrow 0$，就得到 HJB equation。

其中

$$
\begin{aligned}
W_{t+\Delta t}
=W_t+\big[W_t r\Delta t+W_t\phi_t(\mu-r)\Delta t-C_t\Delta t\big]+W_t\phi_t\sigma\sqrt{\Delta t}\,\varepsilon_t,
\end{aligned}
$$

$$
\begin{aligned}
\Delta W_t
=\big[W_t r\Delta t+W_t\phi_t(\mu-r)\Delta t-C_t\Delta t\big]+W_t\phi_t\sigma\sqrt{\Delta t}\,\varepsilon_t,
\end{aligned}
$$

且

$$
\begin{aligned}
P(\varepsilon_t=+1)=P(\varepsilon_t=-1)=\frac12.
\end{aligned}
$$

对 $V(W_{t+\Delta t})$ 作 Taylor expansion：

$$
\begin{aligned}
V(W_{t+\Delta t})
\approx V(W_t)+V_W\,\Delta W_t+\frac12 V_{WW}(\Delta W_t)^2.
\end{aligned}
$$

取条件期望并保留一阶项，得到

$$
\begin{aligned}
E_t[V(W_{t+\Delta t})]
\approx V+V_W\big[rW_t+W_t\phi_t(\mu-r)-C_t\big]\Delta t
+\frac12 V_{WW}W_t^2\phi_t^2\sigma^2\Delta t.
\end{aligned}
$$

$$
\begin{aligned}
e^{-\beta\Delta t}=1-\beta\Delta t+o(\Delta t),
\end{aligned}
$$

代回 Bellman equation，移项并除以 $\Delta t$，令 $\Delta t\to 0$，就得到 HJB equation：

$$
\begin{aligned}
0
=\max_{C_t,\phi_t}\Big\{
\log C_t-\beta V
+V_W\big[rW_t+W_t\phi_t(\mu-r)-C_t\big]
+\frac12 V_{WW}W_t^2\phi_t^2\sigma^2
\Big\}.
\end{aligned}
$$

一阶条件为

$$
\begin{aligned}
\frac{\partial}{\partial C_t}:\quad \frac{1}{C_t^*}=V_W,
\qquad
\frac{\partial}{\partial \phi_t}:\quad
W_t(\mu-r)V_W+V_{WW}W_t^2\phi_t^*\sigma^2=0.
\end{aligned}
$$

$$
\begin{aligned}
C_t^*&=\frac{1}{V_W} \iff V_W=\frac{1}{C_t^*},\\
\phi_t^*&=-\frac{V_W}{W_tV_{WW}}\cdot\frac{\mu-r}{\sigma^2}.
\end{aligned}
$$

这就是 [envelope condition](cards/part2/Envelope%20condition%20%E4%B8%8E%20FOC%20%E7%9A%84%E5%8C%BA%E5%88%AB.md)：最优点上，消费一单位的边际效用等于保留一单位财富进入下一期的边际价值；它和 FOC 的控制变量一阶条件不同。

若把 $C_t^*$ 与 $\phi_t^*$ 直接代回 HJB，就会得到关于 $V(W_t)$ 的 nonlinear ODE；这一步通常先靠 analytical guess，或用 numerical methods 求解。对于 log utility，常见的猜测是

$$
\begin{aligned}
V(W_t)=a+b\log W_t,
\end{aligned}
$$

于是 $V_W=b/W_t$，$V_{WW}=-b/W_t^2$，再代回上式即可把 $C_t^*$ 与 $\phi_t^*$ 化成比例形式。

### 5.1.4 Solving the HJB Equation

HJB equation 写出来之后，通常有三种解法。
1. **Numerical methods**
   直接在 state space 上离散成 grid：先对每个 grid point 给一个 initial guess for $V(W)$，再反复迭代 HJB equation，直到收敛。
2. **Plug in the FOCs**
   把FOC直接代回 HJB equation。这样原来的 maximization problem 就被消掉了，剩下一个关于 $V(W)$ 的 non-linear ODE。
3. **Analytic guess**
   有时可以直接猜 value function 的形式，例如 log utility 下常猜

$$
\begin{aligned}
V(W)=A\log W+G.
\end{aligned}
$$

   代回 HJB 后，如果常数 $A,G$ 能被解出来并且方程成立，就得到 closed-form solution。这里课件强调的是：**先猜函数型，再验证**。

$$
   \begin{aligned}
   0
   =\max_{C_t,\phi_t}\Big\{
   \log C_t-\beta V
   +V_W\big[rW_t+W_t\phi_t(\mu-r)-C_t\big]
   +\frac12 V_{WW}W_t^2\phi_t^2\sigma^2
   \Big\}.
   \end{aligned}
$$

   对 $C_t,\phi_t$ 求一阶条件，得

$$
   \begin{aligned}
   C_t^*&=\frac{1}{V_W},\qquad \phi_t^*=-\frac{V_W}{W_tV_{WW}}\cdot\frac{\mu-r}{\sigma^2}.
   \end{aligned}
$$

	现在猜

$$
	   \begin{aligned}
	   V(W)=A\log W+G,
	   \end{aligned}
$$

$$
	   \begin{aligned}
	   V_W&=\frac{A}{W},\qquad V_{WW}=-\frac{A}{W^2}.
	   \end{aligned}
$$

	代回 FOC，得到

$$
   \begin{aligned}
   C_t^*&=\frac{W_t}{A},\\
   \phi_t^*&=\frac{\mu-r}{\sigma^2}.
   \end{aligned}
$$

   再代回 HJB：

$$
   \begin{aligned}
   0
   &=\log\!\left(\frac{W_t}{A}\right)-\beta(A\log W_t+G)
   +\frac{A}{W_t}\left(rW_t+W_t\frac{\mu-r}{\sigma^2}(\mu-r)-\frac{W_t}{A}\right)
   -\frac12\frac{A}{W_t^2}W_t^2\left(\frac{\mu-r}{\sigma^2}\right)^2\sigma^2 \\
   &=\log W_t-\log A-\beta A\log W_t-\beta G
   +A\left(r+\frac{(\mu-r)^2}{\sigma^2}-\frac{1}{A}\right)
   -\frac12A\frac{(\mu-r)^2}{\sigma^2}.
   \end{aligned}
$$

   为了让这个式子对所有 $W_t$ 都成立，$\log W_t$ 的系数必须消失，所以

$$
   \begin{aligned}
   1-\beta A=0
   \qquad\Longrightarrow\qquad
   A=\beta^{-1}.
   \end{aligned}
$$

   常数项再给出

$$
   \begin{aligned}
   -\beta\log \beta
   =-\beta^2 G+r+\frac{(\mu-r)^2}{\sigma^2}-\beta-\frac12\frac{(\mu-r)^2}{\sigma^2}.
   \end{aligned}
$$

   因而最优政策是

$$
   \begin{aligned}
   C_t^*&=\beta W_t,\\
   \phi_t^*&=\frac{\mu-r}{\sigma^2}.
   \end{aligned}
$$

 log utility 允许 value function 保持同类形式，猜 $A\log W+G$ 后，HJB 会把未知数压缩成常数方程。

**说明：为什么 log utility 对应 $A\log W+G$？**
这里的 $\log C$ 是 **instantaneous utility**，而 $V(W)$ 是“从当前财富 $W$ 出发、在最优策略下能拿到的最大期望效用”。  
由于财富动态是乘法型的，log utility 具有缩放性质：把财富按比例放大，最优消费也按比例放大，所以最优值函数通常只会在 $\log W$ 上做平移和缩放。自然猜

$$
\begin{aligned}
V(W)=A\log W+G.
\end{aligned}
$$

### 5.1.5 Portfolio Choice Problem in Continuous Time

先看一般的 [portfolio choice problem in continuous time](cards/part2/%E8%BF%9E%E7%BB%AD%E6%97%B6%E9%97%B4%E7%BB%84%E5%90%88%E9%80%89%E6%8B%A9%E9%97%AE%E9%A2%98.md)。
设无风险资产和第 $n$ 只风险资产的价格过程分别满足

$$
\begin{aligned}
dB_t&=r(X_t,t)B_t\,dt,\\
\frac{dS_{n,t}}{S_{n,t}}
&=\mu_n(X_t,t)\,dt+\sum_{i=1}^d\sigma_{ni}(X_t,t)\,dZ_{i,t}.
\end{aligned}
$$

其中 $\mu_n$ 是第 $n$ 只资产的 instantaneous expected return，$\sigma_{ni}$ 是它对第 $i$ 个 Brownian motion 的 loading。状态变量 $X_t$ 则满足

$$
\begin{aligned}
dX_t=\mu_X(X_t,t)\,dt+\sigma_X(X_t,t)\,dZ_t.
\end{aligned}
$$

投资者在时点 $t$ 的财富写成

$$
\begin{aligned}
W_t=\theta_{0,t}B_t+\theta_{1,t}S_{1,t}+\cdots+\theta_{N,t}S_{N,t},
\end{aligned}
$$

控制变量由 consumption $c_t$ 与 risky asset holdings $\theta_{1:N,t}$ 组成，并假设它们都只依赖于当期状态 $(t,X_t,W_t)$。

若记风险资产的 wealth share 为

$$
\begin{aligned}
\phi_{n,t}:=\frac{\theta_{n,t}S_{n,t}}{W_t},
\qquad
\phi_t=(\phi_{1,t},\ldots,\phi_{N,t}),
\end{aligned}
$$

则 wealth dynamics 可写成

$$
\begin{aligned}
dW_t
&=\big(W_t r(X_t,t)+W_t\phi_t(\mu(X_t,t)-r(X_t,t)\mathbf 1)-c_t\big)\,dt
 +W_t\phi_t\sigma(X_t,t)\,dZ_t.
\end{aligned}
$$

一般的投资—消费问题可以写成

$$
\begin{aligned}
P_t:\quad
\max_{c_s,\phi_s}\;
E_t\!\left[\int_t^T u_s(c_s)\,ds+U_T(C_T)\right]
\end{aligned}
$$

subject to

$$
\begin{aligned}
dX_s&=\mu_X(X_s,s)\,ds+\sigma_X(X_s,s)\,dZ_s,\\
dW_s
&=\big(W_s r(X_s,s)+W_s\phi_s(\mu(X_s,s)-r(X_s,s)\mathbf 1)-c_s\big)\,ds
+W_s\phi_s\sigma(X_s,s)\,dZ_s\\
C_T &= W_T
\end{aligned}
$$

这时 value function 就写成 $V(t,W_t,X_t)$；后面的 HJB 就是把这个 dynamic control problem 转成 PDE。


:::{admonition} Lemma: Bellman Equation
设 value function 为 $V(t,W_t,X_t)$，且 $V$ 连续可微、最优控制存在。则 Bellman equation 可写成

$$
\begin{aligned}
0 =
\max_{c_t,\phi_t}
\Big\{
u(c_t)+D_t^{W,X}V(t,W_t,X_t)+V_t(t,W_t,X_t)
\Big\},
\end{aligned}
$$

其中

$$
\begin{aligned}
D_t^{W,X}V
&=
V_W\big[W_t r(X_t,t)+W_t\phi_t(\mu(X_t,t)-r(X_t,t)\mathbf 1)-c_t\big] \\
&\quad+\frac12 V_{WW}W_t^2\phi_t\sigma(X_t,t)\sigma(X_t,t)'\phi_t' \\
&\quad+V_X\mu_X(X_t,t)
+\frac12\operatorname{tr}\!\big(\sigma_X(X_t,t)\sigma_X(X_t,t)'V_{XX}\big) \\
&\quad+V_{WX}W_t\phi_t\sigma(X_t,t)\sigma_X(X_t,t)'.
\end{aligned}
$$

终端条件为

$$
\begin{aligned}
V(T,W_T,X_T)=U_T(W_T).
\end{aligned}
$$

:::


:::{admonition} Lemma: Verification Theorem
若候选函数 $V(t,W_t,X_t)\in C^{1,2}$ 满足 HJB equation 与终端条件

$$
\begin{aligned}
V(T,W_T,X_T)=U_T(W_T),
\end{aligned}
$$

且对任意 admissible control

$$
\begin{aligned}
E\!\left[\int_t^T (V_WW_s\phi_s\sigma_s)^2\,ds\right]
+
E\!\left[\int_t^T \|V_X\sigma_{X,s}\|^2\,ds\right]
<\infty,
\end{aligned}
$$

则

$$
\begin{aligned}
E_t\!\left[\int_t^T u(c_s)\,ds+U_T(W_T)\right]\le V(t,W_t,X_t),
\end{aligned}
$$

而使 HJB 中 supremum 取到的控制就是最优控制；此时 $V$ 就是 value function。

:::



### 5.2 Optimal Portfolio Rule

### 推导核对：连续时间组合选择的最优风险头寸

:::{admonition} Lemma: Myopic Portfolio Rule
若财富动态为

$$
dW_t=(rW_t-c_t+\phi_t'(\mu-r\iota))dt+\phi_t'\sigma dZ_t,
$$

则 HJB 中关于风险持仓 $\phi$ 的一阶条件给出

$$
\phi_t^*=-\frac{V_W}{V_{WW}}(\sigma\sigma')^{-1}(\mu-r\iota).
$$

:::

从 HJB 的 $\phi$ 项解出最优风险资产 dollar holding。

HJB 中与 $\phi$ 有关的项为

$$
\begin{aligned}
\Phi(\phi)
=V_W\phi'(\mu-r\iota)+\frac12 V_{WW}\phi'\sigma\sigma'\phi.
\end{aligned}
$$

假设 $V_W>0,V_{WW}<0$。

对 $\phi$ 求梯度，

$$
\begin{aligned}
0
&=\nabla_\phi\Phi(\phi)\\
&=V_W(\mu-r\iota)+V_{WW}\sigma\sigma'\phi.
\end{aligned}
$$

移项并左乘逆矩阵：

$$
\begin{aligned}
V_{WW}\sigma\sigma'\phi
&=-V_W(\mu-r\iota),\\
\phi^*
&=-\frac{V_W}{V_{WW}}(\sigma\sigma')^{-1}(\mu-r\iota).
\end{aligned}
$$

其中

$$
\begin{aligned}
-\frac{V_W}{V_{WW}}
\end{aligned}
$$

是动态风险容忍度。

最优风险持仓 = 风险容忍度 $\times$ mean-variance 方向；CRRA 情形下它与财富成比例，因而风险资产权重为常数。



:::{admonition} Lemma: Optimal Portfolio Rule from the HJB Equation
若 $\theta_t$ 表示财富中投向风险资产的比例，且 $\sigma_t\sigma_t'$ 可逆，则最优投资满足

$$
(\theta_t^*)'
=(\sigma_t\sigma_t')^{-1}
\left[
-\frac{V_W}{W_tV_{WW}}(\mu_t-r_t\mathbf 1)
-\frac{1}{W_tV_{WW}}\sigma_t\sigma_{X,t}'V_{WX}
\right]'.
$$

:::


第一项是 **myopic demand**，第二项是 **hedging demand**：当投资机会集会随状态变量变化时，投资者会额外持仓来对冲未来机会变化。

**说明：Derivation**
Bellman / HJB 中与控制变量有关的项可写成

$$
\begin{aligned}
0 =
\max_{c_t,\theta_t}
\Big\{
u(c_t)+V_t
&+V_W\big[W_t r_t+W_t\theta_t(\mu_t-r_t\mathbf 1)-c_t\big] \\
&+\frac12 V_{WW}W_t^2\,\theta_t\sigma_t\sigma_t'\theta_t' \\
&+W_tV_{WX}\theta_t\sigma_t\sigma_{X,t}'
+\cdots
\Big\},
\end{aligned}
$$

其中省略号表示与最优控制无关的状态项。  
对消费求一阶条件：

$$
\begin{aligned}
\frac{\partial}{\partial c_t}
\Big\{
u(c_t)-V_W c_t
\Big\}
=0
\quad\Longleftrightarrow\quad
u_c(c_t^*)=V_W.
\end{aligned}
$$

对风险资产权重求一阶条件：

$$
\begin{aligned}
0
&=
V_W W_t(\mu_t-r_t\mathbf 1)
+V_{WW}W_t^2(\sigma_t\sigma_t')\theta_t'
+W_tV_{WX}\sigma_t\sigma_{X,t}'.
\end{aligned}
$$

若 $\sigma_t\sigma_t'$ 可逆，则

$$
\begin{aligned}
(\theta_t^*)'
&=
-\frac{V_W}{W_tV_{WW}}(\sigma_t\sigma_t')^{-1}(\mu_t-r_t\mathbf 1)' \\
&\quad
-\frac{1}{W_tV_{WW}}(\sigma_t\sigma_t')^{-1}\sigma_t\sigma_{X,t}'V_{WX}.
\end{aligned}
$$

于是

$$
\begin{aligned}
(\theta_t^*)'
&=
(\sigma_t\sigma_t')^{-1}
\left[
-\frac{V_W}{W_tV_{WW}}(\mu_t-r_t\mathbf 1)
-\frac{1}{W_tV_{WW}}\sigma_t\sigma_{X,t}'V_{WX}
\right]'.
\end{aligned}
$$

第一项只依赖于当期 $\mu_t-r_t\mathbf 1$ 与局部风险，故是 myopic demand；第二项含 $V_{WX}$，反映状态变量变化对未来投资机会集的影响，故是 hedging demand。  
若投资机会集不随状态变化，则 $V_{WX}=0$，hedging demand 消失。

**说明：+ 这条 HJB 先解什么**
1. 先对消费 $c_t$ 求 FOC，得到 $u_c(c_t^*)=V_W$。
2. 再对风险资产权重 $\theta_t$ 求 FOC，得到一阶线性方程组。
3. 把该线性方程组反解回来，就得到 myopic demand 与 hedging demand 的分解。

(sec-5-3-merton)=
### 5.3 Merton Special Case

### 推导核对：Merton CRRA 特例的常数权重

:::{admonition} Lemma: Merton Constant Share
对 CRRA 效用 $u(c)=c^{1-\gamma}/(1-\gamma)$，若投资机会集常数，则最优风险资产权重为

$$
\pi^*=\frac{1}{\gamma}(\sigma\sigma')^{-1}(\mu-r\iota).
$$

:::

用猜测 $V(t,W)=\dfrac{A(t)}{1-\gamma}W^{1-\gamma}$ 推出常数风险权重。


$$
\begin{aligned}
V_W&=A(t)W^{-\gamma},\\
V_{WW}&=-\gamma A(t)W^{-\gamma-1},\\
\phi^*&=-\frac{V_W}{V_{WW}}(\sigma\sigma')^{-1}(\mu-r\iota).
\end{aligned}
$$

先计算动态风险容忍度：

$$
\begin{aligned}
-\frac{V_W}{V_{WW}}
&=-\frac{A(t)W^{-\gamma}}{-\gamma A(t)W^{-\gamma-1}}\\
&=\frac{W}{\gamma}.
\end{aligned}
$$

代入最优 dollar holding：

$$
\begin{aligned}
\phi^*
&=\frac{W}{\gamma}(\sigma\sigma')^{-1}(\mu-r\iota).
\end{aligned}
$$

将 dollar holding 除以财富得到权重：

$$
\begin{aligned}
\pi^*
&=\frac{\phi^*}{W}\\
&=\frac{1}{\gamma}(\sigma\sigma')^{-1}(\mu-r\iota).
\end{aligned}
$$

Merton 特例中权重是常数，不是因为“没有动态问题”，而是因为 CRRA 同质性使风险容忍度与财富同比例变化。



对照后文：[5.4.2.1 No Transitory Shocks](#sec-5-4-2-1-no-transitory)（此时最优组合一般是 $\phi(x)$；Merton 特例则进一步退化成常数权重）。

Assume:
- $(i)$ constant investment opportunity set: $\mu$ and $\sigma$ are time-invariant;
- $(ii)$ CRRA utility:

$$
\begin{aligned}
u_t(c_t)&=b\,u(c_t)e^{-\beta t}, \\
U_T(C_T)&=u(C_T)e^{-\beta T},
\end{aligned}
$$

where

$$
\begin{aligned}
u(c)
&=\frac{c^{1-\gamma}}{1-\gamma},\qquad \gamma>0,\ \gamma\neq 1,\\
u(c)&=\log c,\qquad \gamma=1.
\end{aligned}
$$

Under these assumptions, the value function depends only on $(t,W_t)$, not on the state variable $X_t$.  

**说明：+ value function 为什么常猜“同类形式”？**
不是只看偏好函数本身，而是看 **utility + wealth dynamics** 是否一起满足 homogeneity / scale invariance。  
对 CRRA / log utility，

$$
\begin{aligned}
u(\kappa c)=\kappa^{1-\gamma}u(c)\quad(\gamma\neq 1),
\qquad
u(\kappa c)=u(c)+\log\kappa\quad(\gamma=1),
\end{aligned}
$$

同时财富方程又是乘法型的，所以把 $W_t$ 按比例放大时，最优消费和最优持仓通常也按同一比例放大。  
因此 value function 往往保留和效用函数一致的尺度形式，例如

$$
\begin{aligned}
V(t,W_t)\propto W_t^{1-\gamma},
\qquad
\gamma=1 \text{ 时 } V(t,W_t)\propto \log W_t.
\end{aligned}
$$

但如果状态变量、约束或投资机会集打破了这种同质性，就不能直接猜同类形式，需要把额外的 state dependence 一起带进去。

For CRRA utility,

$$
\begin{aligned}
u(c)=\frac{b\,c^{1-\gamma}}{1-\gamma},\qquad \gamma\neq 1,
\end{aligned}
$$

自然猜测 value function 也保持同类幂函数形式：

$$
\begin{aligned}
V(t,W_t)=\frac{A_t e^{-\beta t}}{1-\gamma}W_t^{1-\gamma}.
\end{aligned}
$$

于是

$$
\begin{aligned}
V_t
&=\frac{e^{-\beta t}}{1-\gamma}\Big(\dot A_t-\beta A_t\Big)W_t^{1-\gamma}, \\
V_W
&=A_t e^{-\beta t}W_t^{-\gamma},\\
V_{WW}
&=-\gamma A_t e^{-\beta t}W_t^{-\gamma-1}.
\end{aligned}
$$

把这些代回 HJB：

$$
\begin{aligned}
0 =
\max_{c_t,\phi_t}
\Big\{
&\frac{b\,c_t^{1-\gamma}}{1-\gamma}
+V_t
+V_W\big[W_t r+W_t\phi_t(\mu-r\mathbf 1)-c_t\big] \\
&+\frac12 V_{WW}W_t^2\phi_t\sigma\sigma'\phi_t'
\Big\}.
\end{aligned}
$$

对消费求一阶条件：

$$
\begin{aligned}
\frac{\partial}{\partial c_t}
\Big\{
\frac{b\,c_t^{1-\gamma}}{1-\gamma}-V_W c_t
\Big\}=0
\quad\Longleftrightarrow\quad
b(c_t^*)^{-\gamma}=V_W.
\end{aligned}
$$

因此

$$
\begin{aligned}
c_t^*
=\left(\frac{A_t e^{-\beta t}}{b}\right)^{-1/\gamma}W_t.
\end{aligned}
$$

对组合权重求一阶条件：

$$
\begin{aligned}
0
&=
V_W W_t(\mu-r\mathbf 1)
+V_{WW}W_t^2\phi_t^*\sigma\sigma' \\
&\Longleftrightarrow\quad
(\phi_t^*)'
=-\frac{V_W}{W_tV_{WW}}(\sigma\sigma')^{-1}(\mu-r\mathbf 1)'.
\end{aligned}
$$

再代入 $V_W,V_{WW}$，得到

$$
\begin{aligned}
(\phi_t^*)'
=\frac{1}{\gamma}(\sigma\sigma')^{-1}(\mu-r\mathbf 1)'.
\end{aligned}
$$

最后把 $c_t^*$ 与 $\phi_t^*$ 代回 HJB，并将所有项都整理成 $W_t^{1-\gamma}$ 的同次幂，便得到关于 $A_t$ 的 ODE：

$$
\begin{aligned}
\frac{dA_t}{dt}
+\psi\gamma A_t
+b^{1/\gamma}A_t^{(1-\gamma)/\gamma}
=0,
\end{aligned}
$$

其中

$$
\begin{aligned}
\psi
&=
\left(\frac{1}{\gamma}-1\right)\left(r+\frac{\eta^2}{2\gamma}\right)-\frac{\beta}{\gamma},\\
\eta^2
&=
(\mu-r\mathbf 1)'(\sigma\sigma')^{-1}(\mu-r\mathbf 1).
\end{aligned}
$$

终端条件为 $A_T=1$。  
当 $\gamma=1$ 时，猜测改为 $V(t,W_t)=[A_t\log W_t+G_t]e^{-\beta t}$，消费仍为比例型，代回后得到对应的线性方程组。

:::{admonition} Lemma: CRRA Risky-Asset Weight
若投资机会集常数、效用为 CRRA，则最优风险资产权重为

$$
(\theta_t^*)'
=\frac{1}{\gamma}(\sigma\sigma')^{-1}(\mu-r\mathbf 1)'.
$$

:::


:::{admonition} Lemma: Log Utility Consumption Rule
在对数效用的特殊情形下，最优消费具有比例形式

$$
c_t^*=\rho W_t,
$$

且单风险资产时

$$
\theta_t^*=\frac{\mu-r}{\sigma^2}.
$$

:::


**说明：+ 代回 HJB 的关键一步**
将

$$
\begin{aligned}
c_t^*
=\left(\frac{A_t e^{-\beta t}}{b}\right)^{-1/\gamma}W_t,
\qquad
(\phi_t^*)'
=\frac{1}{\gamma}(\sigma\sigma')^{-1}(\mu-r\mathbf 1)'
\end{aligned}
$$

代回 HJB 后，所有关于 $W_t$ 的幂次都会对齐，剩下一个只含 $A_t$ 的常微分方程。  
这就是 CRRA / log utility 的核心：**先猜同类形式，再把 PDE 压缩成 ODE**。

**说明：+ $\gamma=1$ 时的 log utility 形式**
当 $\gamma=1$，价值函数改猜为

$$
\begin{aligned}
V(t,W_t)=\big[A_t\log W_t+G_t\big]e^{-\beta t}.
\end{aligned}
$$

这时 $V_W=A_t e^{-\beta t}/W_t$，消费规则仍是比例型，且再代回 HJB 后得到关于 $A_t,G_t$ 的线性方程组。

**说明：+ 为什么有时写成 $a\log W+b$，有时前面还乘 $e^{-\beta t}$？**
这两种写法本质上是在处理同一个 **discounting**，只是 normalization 不同。  
若目标函数本身就是

$$
\begin{aligned}
E_t\!\left[\int_t^\infty e^{-\beta(s-t)}u(c_s)\,ds\right],
\end{aligned}
$$

那么折现已经在 objective 里，value function 的时间依赖常被吸收到系数里；在 stationary case 下，就可以直接猜

$$
\begin{aligned}
V(W)=a\log W+b.
\end{aligned}
$$

但如果把时间依赖显式写出来，或者用 “present-value / current-value” 的 HJB 写法，就常把解写成

$$
\begin{aligned}
V(t,W)=e^{-\beta t}\,\widetilde V(t,W),
\end{aligned}
$$

于是

$$
\begin{aligned}
\widetilde V(t,W)=A_t\log W+G_t
\end{aligned}
$$

就对应你看到的 $[A_t\log W_t+G_t]e^{-\beta t}$。  
所以：

$$
\begin{aligned}
\text{“}a\log W+b\text{”}
\quad\Longleftrightarrow\quad
\text{stationary guess after discounting normalization},
\end{aligned}
$$

$$
\begin{aligned}
\text{“}[A_t\log W_t+G_t]e^{-\beta t}\text{”}
\quad\Longleftrightarrow\quad
\text{time-explicit version of the same guess}.
\end{aligned}
$$



**说明：+ 两种方法的对比**
- **Dynamic programming / HJB** 不需要 market completeness；直接从 value function 出发，得到的是 nonlinear PDE。
- **Martingale approach** 往往利用 complete market，把问题改写成 linear PDE 或对偶问题，计算更简洁。
- 两种方法最终必须给出同一个最优解；它们的连接点是边际效用与 shadow price 的识别关系：

$$
\begin{aligned}
V_W(F(\pi_t,X_t,t),X_t,t)=u_c(c_t^*)=\lambda_t.
\end{aligned}
$$

这里 $\lambda_t$ 是 shadow price。

**说明：+ SPD、Martingale Approach、Martingale Representation 的区别**
三者不是互斥方法，而是同一套 complete-market 解题链条的不同层：

$$
\left\{
\begin{aligned}
\text{SPD / pricing kernel}
&:\quad \text{给定现金流 }X_T\text{，计算价格 }
P_t=\frac{1}{\xi_t}E_t[\xi_TX_T],\\
\text{Martingale approach}
&:\quad \text{用 SPD 把动态优化改成静态预算约束}\\
&:\quad \max E[U(C_T)]
\quad\text{s.t.}\quad E[\xi_TC_T]\le W_0,\\
\text{Martingale representation}
&:\quad \text{已知最优 }C_T^*\text{ 或 }W_T^*\text{ 后，找交易策略复制它}\\
&:\quad W_t^*=\frac{1}{\xi_t}E_t[\xi_TW_T^*]
\quad\Longrightarrow\quad dW_t^*=\theta_t^{*'}dS_t.
\end{aligned}
\right.
$$

记忆方式：

$$
\begin{aligned}
\text{SPD}
&\Longrightarrow \text{price cash flow},\\
\text{Martingale approach}
&\Longrightarrow \text{choose optimal cash flow},\\
\text{Martingale representation}
&\Longrightarrow \text{implement cash flow by trading}.
\end{aligned}
$$

### 5.4 Examples: Stochastic Growth Model and Portfolio Choice with Labor Income

### 5.4.1 A Stochastic Growth Model

设简单 $AK$ 模型满足

$$
\begin{aligned}
Y_t&=A_tK_t,\\
dK_t&=(Y_t-C_t-\delta K_t)\,dt,\\
dA_t&=\mu_AA_t\,dt+\sigma_AA_t\,dZ_t,
\end{aligned}
$$

效用为对数型：

$$
\begin{aligned}
U_t=E_t\!\left[\int_t^\infty e^{-\rho(s-t)}\log C_s\,ds\right].
\end{aligned}
$$

此时 value function 依赖于 $(K_t,A_t)$。先写 Bellman equation：

$$
\begin{aligned}
V(K_t,A_t)
=\max_{C_t} \left\{\log C_t\,dt + E_t\!\left[e^{-\rho dt}V(K_{t+dt},A_{t+dt})\right]\right\}.
\end{aligned}
$$

由 [Itô 公式](cards/part2/It%C3%B4%20%E5%85%AC%E5%BC%8F.md)，

$$
\begin{aligned}
dV
&=V_K\,dK_t+V_A\,dA_t+\frac12V_{AA}(dA_t)^2\\
&=V_K(A_tK_t-C_t-\delta K_t)\,dt
+V_A\mu_AA_t\,dt
+V_A\sigma_AA_t\,dZ_t
+\frac12V_{AA}\sigma_A^2A_t^2\,dt.
\end{aligned}
$$

取条件期望，随机项消失，因此

$$
\begin{aligned}
E_t[dV]
=\Big[
V_K(A_tK_t-C_t-\delta K_t)
+\mu_AA_tV_A
+\frac12\sigma_A^2A_t^2V_{AA}
\Big]dt.
\end{aligned}
$$

$$
\begin{aligned}
e^{-\rho dt}=1-\rho dt+o(dt),
\end{aligned}
$$

代回 Bellman equation，减去 $V(K_t,A_t)$，忽略 $o(dt)$，并除以 $dt$，得到

$$
\begin{aligned}
0
=\max_{C_t}\Big\{
\log C_t-\rho V
+V_K(A_tK_t-C_t-\delta K_t)
+\mu_AA_tV_A
+\frac12\sigma_A^2A_t^2V_{AA}
\Big\}.
\end{aligned}
$$

这就是 HJB。

猜测

$$
\begin{aligned}
V(K,A)=G\log K+f(A).
\end{aligned}
$$

则

$$
\begin{aligned}
V_K=\frac{G}{K},
\qquad
V_A=f'(A),
\qquad
V_{AA}=f''(A).
\end{aligned}
$$

消费的一阶条件为

$$
\begin{aligned}
\frac{1}{C_t}=\frac{G}{K_t}
\quad\Longleftrightarrow\quad
C_t=G^{-1}K_t.
\end{aligned}
$$

代入 HJB：

$$
\begin{aligned}
\log C_t^*-\rho V_t
&=\log(G^{-1}K_t)-\rho (G\log K_t+f(A))\\
&=\log K_t-\log G-\rho G\log K_t-\rho f(A)\\
&=(1-\rho G)\log K_t-\log G-\rho f(A).
\end{aligned}
$$

要让 HJB 对所有 $K_t$ 都成立，就必须有

$$
\begin{aligned}
1-\rho G=0
\quad\Longrightarrow\quad
G=\rho^{-1}.
\end{aligned}
$$

于是剩下一个关于 $f(A)$ 的 ODE。把 $C_t^*=G^{-1}K_t$ 与 $G=\rho^{-1}$ 代回 HJB：

$$
\begin{aligned}
0
&=\log C_t^*-\rho\big(G\log K_t+f(A_t)\big)
+\frac{G}{K_t}\big(A_tK_t-C_t^*-\delta K_t\big)
+\mu_AA_t f'(A_t)
+\frac12\sigma_A^2A_t^2 f''(A_t)\\
&=\log\!\left(\frac{K_t}{G}\right)
-\rho G\log K_t
-\rho f(A_t)
+G\left(A_t-\delta-\frac{1}{G}\right)
+\mu_AA_t f'(A_t)
+\frac12\sigma_A^2A_t^2 f''(A_t)\\
&=\big(1-\rho G\big)\log K_t
-\log G
-\rho f(A_t)
+G(A_t-\delta)-1
+\mu_AA_t f'(A_t)
+\frac12\sigma_A^2A_t^2 f''(A_t)\\
&=\log\rho-\rho f(A_t)
+\rho^{-1}(A_t-\delta)
-1
+\mu_AA_t f'(A_t)
+\frac12\sigma_A^2A_t^2 f''(A_t).
\end{aligned}
$$

因此得到关于 $f(A)$ 的 ODE：

$$
\begin{aligned}
0
=\log\rho-\rho f(A_t)
+\rho^{-1}(A_t-\delta)
-1
+\mu_AA_t f'(A_t)
+\frac12\sigma_A^2A_t^2 f''(A_t).
\end{aligned}
$$

**说明：+ 这个 ODE 怎么解？**
先试 affine guess

$$
\begin{aligned}
f(A)=aA+b.
\end{aligned}
$$

于是

$$
\begin{aligned}
f'(A)=a,\qquad f''(A)=0.
\end{aligned}
$$

代回 ODE 得

$$
\begin{aligned}
0
&=
\log\rho-\rho(aA+b)+\rho^{-1}(A-\delta)-1+\mu_AAa\\
&=
A\big[-\rho a+\rho^{-1}+\mu_Aa\big]
+\big[\log\rho-\rho b-\rho^{-1}\delta-1\big].
\end{aligned}
$$

因为这个等式要对所有 $A$ 都成立，所以一次项和常数项分别为零：

$$
\begin{aligned}
-\rho a+\rho^{-1}+\mu_Aa&=0,\\
\log\rho-\rho b-\rho^{-1}\delta-1&=0.
\end{aligned}
$$

解得

$$
\begin{aligned}
a&=\frac{1}{\rho(\rho-\mu_A)},\\
b&=\frac{\log\rho-1}{\rho}-\frac{\delta}{\rho^2}.
\end{aligned}
$$

$$
\begin{aligned}
f(A)=\frac{A}{\rho(\rho-\mu_A)}+\frac{\log\rho-1}{\rho}-\frac{\delta}{\rho^2}.
\end{aligned}
$$

这也说明 value function 事实上是 “$\log K$ + 线性 $A$” 的形式。

因此消费是资本存量的常数比例：

$$
\begin{aligned}
C_t=\rho K_t.
\end{aligned}
$$

### 5.4.2 Portfolio Choice with Labor Income

设有一只风险资产和一只无风险资产：

$$
\begin{aligned}
dS_t=\mu S_t\,dt+\sigma S_t\,dZ_t^1.
\end{aligned}
$$

投资者有**不可交易**的 labor income $L_t$。设

$$
\begin{aligned}
L_t=L_0e^{y_t}S_t^b,
\end{aligned}
$$

其中 $S_t$ 是 risky asset price，且

$$
\begin{aligned}
dy_t=-\kappa y_t\,dt+\nu\,dZ_t^2+\rho\,dZ_t^1,
\qquad
\frac{dS_t}{S_t}=\mu\,dt+\sigma\,dZ_t^1.
\end{aligned}
$$

先对 $S_t$ 用 Itô 公式：

$$
\begin{aligned}
d\log S_t
&=\frac{1}{S_t}dS_t-\frac12\frac{1}{S_t^2}(dS_t)^2\\
&=\mu\,dt+\sigma\,dZ_t^1-\frac12\sigma^2dt\\
&=\left(\mu-\frac12\sigma^2\right)dt+\sigma\,dZ_t^1.
\end{aligned}
$$

再对

$$
\begin{aligned}
\log L_t=\log L_0+y_t+b\log S_t
\end{aligned}
$$

求微分：

$$
\begin{aligned}
d\log L_t
&=dy_t+b\,d\log S_t\\
&=\big(-\kappa y_t\,dt+\nu\,dZ_t^2+\rho\,dZ_t^1\big)
+b\left[\left(\mu-\frac12\sigma^2\right)dt+\sigma\,dZ_t^1\right]\\
&=\left(-\kappa y_t+b\mu-\frac12b\sigma^2\right)dt
+\nu\,dZ_t^2
+(\rho+b\sigma)\,dZ_t^1.
\end{aligned}
$$

于是

$$
\begin{aligned}
(d\log L_t)^2
&=\nu^2(dZ_t^2)^2+(\rho+b\sigma)^2(dZ_t^1)^2\\
&=\big[\nu^2+(\rho+b\sigma)^2\big]dt.
\end{aligned}
$$

因此

$$
\begin{aligned}
\frac{dL_t}{L_t}
&=d\log L_t+\frac12(d\log L_t)^2\\
&=\left(-\kappa y_t+b\mu-\frac12b\sigma^2+\frac12\nu^2+\frac12(\rho+b\sigma)^2\right)dt
+\nu\,dZ_t^2
+(\rho+b\sigma)\,dZ_t^1.
\end{aligned}
$$

记

$$
\begin{aligned}
c_1&=b\mu-\frac12b\sigma^2+\frac12\nu^2+\frac12(\rho+b\sigma)^2,\\
\sigma_L&=\rho+b\sigma,
\end{aligned}
$$

就得到

$$
\begin{aligned}
\frac{dL_t}{L_t}=\big(c_1-\kappa y_t\big)\,dt+\nu\,dZ_t^2+\sigma_L\,dZ_t^1.
\end{aligned}
$$

若退休/消费发生时点 $\tau$ 服从参数为 $\lambda$ 的 exponential distribution，则目标函数可写成

$$
\begin{aligned}
\max E_0[U(W_\tau)]
\;\Longleftrightarrow\;
\max E_0\!\left[\int_0^\infty \lambda e^{-\lambda t}U(W_t)\,dt\right].
\end{aligned}
$$

这样就不需要显式处理 intermediate consumption 和 calendar time。

设财富过程为

$$
\begin{aligned}
dW_t=\big[rW_t+\phi_tW_t(\mu-r)+L_t\big]dt+\phi_tW_t\sigma\,dZ_t^1.
\end{aligned}
$$

若 value function 依赖于 $(W_t,L_t,y_t)$，则先对 $V(W_t,L_t,y_t)$ 用 Itô 公式：

$$
\begin{aligned}
dV
&=V_W\,dW_t+V_L\,dL_t+V_y\,dy_t\\
&\quad+\frac12V_{WW}(dW_t)^2+\frac12V_{LL}(dL_t)^2+\frac12V_{yy}(dy_t)^2\\
&\quad+V_{WL}\,dW_t\,dL_t+V_{Wy}\,dW_t\,dy_t+V_{Ly}\,dL_t\,dy_t.
\end{aligned}
$$

由

$$
\begin{aligned}
dL_t&=L_t\big(c_1-\kappa y_t\big)\,dt+L_t\nu\,dZ_t^2+L_t\sigma_L\,dZ_t^1,\\
dy_t&=-\kappa y_t\,dt+\nu\,dZ_t^2+\rho\,dZ_t^1,
\end{aligned}
$$

可得各二次变差与交叉项：

$$
\begin{aligned}
(dW_t)^2&=\phi_t^2W_t^2\sigma^2\,dt,\\
(dL_t)^2&=L_t^2(\nu^2+\sigma_L^2)\,dt,\\
(dy_t)^2&=(\nu^2+\rho^2)\,dt,\\
dW_t\,dL_t&=\phi_tW_tL_t\sigma\sigma_L\,dt,\\
dW_t\,dy_t&=\phi_tW_t\sigma\rho\,dt,\\
dL_t\,dy_t&=L_t(\nu^2+\rho\sigma_L)\,dt.
\end{aligned}
$$

取条件期望后，随机项消失，因此漂移项为

$$
\begin{aligned}
E_t[dV]
&=
\Big\{
V_W\big[rW_t+\phi_tW_t(\mu-r)+L_t\big]
+V_L L_t(c_1-\kappa y_t)
+V_y(-\kappa y_t)\\
&\qquad
+\frac12V_{WW}W_t^2\phi_t^2\sigma^2
+\frac12V_{LL}L_t^2(\nu^2+\sigma_L^2)
+\frac12V_{yy}(\nu^2+\rho^2)\\
&\qquad
+V_{WL}W_tL_t\phi_t\sigma\sigma_L
+V_{Wy}W_t\phi_t\sigma\rho
+V_{Ly}L_t(\nu^2+\rho\sigma_L)
\Big\}dt.
\end{aligned}
$$

再代回 Bellman equation：

$$
\begin{aligned}
V(W_t,L_t,y_t)
=\max_{\phi_t}\Big\{
\lambda \frac{W_t^{1-\gamma}}{1-\gamma}\,dt
 +E_t\!\left[e^{-\lambda dt}V(W_{t+dt},L_{t+dt},y_{t+dt})\right]
\Big\}.
\end{aligned}
$$

并用

$$
\begin{aligned}
e^{-\lambda dt}=1-\lambda dt+o(dt),
\end{aligned}
$$

得到 HJB：

$$
\begin{aligned}
0
=\max_{\phi_t}\Big\{
\lambda \frac{W_t^{1-\gamma}}{1-\gamma}
-\lambda V
+V_W\big[rW_t+\phi_tW_t(\mu-r)+L_t\big]\\
\qquad
+V_L L_t(c_1-\kappa y_t)
+V_y(-\kappa y_t)
+\frac12V_{WW}W_t^2\phi_t^2\sigma^2\\
\qquad
+\frac12V_{LL}L_t^2(\nu^2+\sigma_L^2)
+\frac12V_{yy}(\nu^2+\rho^2)
+V_{WL}W_tL_t\phi_t\sigma\sigma_L\\
\qquad
+V_{Wy}W_t\phi_t\sigma\rho
+V_{Ly}L_t(\nu^2+\rho\sigma_L)
\Big\}.
\end{aligned}
$$

对 $\phi_t$ 求 FOC 得

$$
\begin{aligned}
\phi_t^* =
-\frac{V_W}{W_tV_{WW}}\frac{\mu-r}{\sigma^2}
-\frac{V_{WL}}{W_tV_{WW}}\frac{\sigma_L}{\sigma}
-\frac{V_{Wy}}{W_tV_{WW}}\frac{\rho}{\sigma},
\end{aligned}
$$

所以有非传统收入时，风险资产配置会同时依赖 wealth、labor income 以及收入状态变量。

(sec-5-4-2-1-no-transitory)=
### 5.4.2.1 Special Case: No Transitory Shocks

对照前文：[5.3 Merton Special Case](#sec-5-3-merton)（若连 labor income / ratio state $x$ 都消失，就回到 Merton 的 constant portfolio rule）。

若进一步 **no transitory shocks**，则只保留与 risky asset 共同波动的那部分 labor income：

$$
\begin{aligned}
\frac{dL_t}{L_t}
=\big(c_1-\kappa y_t\big)\,dt+\nu\,dZ_t^2+\sigma_L\,dZ_t^1
\end{aligned}
$$

**transitory shock** 指的是由独立噪声 $dZ_t^2$ 驱动、不会通过 traded risky asset 被直接 span 的那部分短期收入波动。  因此 **no transitory shocks** 就是把这一部分关掉，令

$$
\begin{aligned}
\nu=0,\qquad y_t\equiv 0,
\end{aligned}
$$

于是

$$
\begin{aligned}
\frac{dL_t}{L_t}
=c_1\,dt+\sigma_L\,dZ_t^1.
\end{aligned}
$$

在课件设定$L_t=L_0S_t^b$下，更进一步有

$$
\begin{aligned}
\frac{dL_t}{L_t}
=b\frac{dS_t}{S_t}
=b\mu\,dt+b\sigma\,dZ_t,
\end{aligned}
$$

所以$L_t=L_0S_t^b$说明 labor income 不再有独立于市场的额外噪声，而只是 risky asset 的幂函数。一旦 $\nu=0$ 且 $y_t$ 不再单独演化，$L_t$ 的唯一随机源就只剩和 $S_t$ 相同的 Brownian motion；于是

$$
\begin{aligned}
\text{state space from }(W,L,y)
\Longrightarrow
\text{state space from }(W,L),
\end{aligned}
$$

并且由于 $L/W$ 才是决定组合问题的相对规模变量，还可以进一步压缩成

$$
\begin{aligned}
x=\log\frac{L}{W}.
\end{aligned}
$$

**说明：+ $\nu$ 到底是什么？为什么设 $\nu=0$ 就是在关掉 transitory shock？**
**连续时间扩散过程 (diffusion process)** 里，每一个 Brownian motion 都代表一个独立的随机风险源。  
在

$$
\begin{aligned}
dy_t=-\kappa y_t\,dt+\nu\,dZ_t^2+\rho\,dZ_t^1
\end{aligned}
$$

里：
- $dZ_t^1$ 是和 risky asset 共用的 shock；
- $dZ_t^2$ 是额外的、独立的 shock；
- $\nu$ 是这个独立 shock 的 **loading / volatility coefficient**，控制它对 $y_t$ 有多大影响。

所以：

$$
\begin{aligned}
\nu=0
\quad\Longleftrightarrow\quad
dZ_t^2 \text{ 不再进入 }dy_t,
\end{aligned}
$$

也就是把“独立于金融市场的那条噪声通道”关掉。

但为什么课件还常同时写 $y_t=0$ 或把 $y_t$ 去掉？因为即使 $\nu=0$，若 $y_t$ 仍满足

$$
\begin{aligned}
dy_t=-\kappa y_t\,dt+\rho\,dZ_t^1,
\end{aligned}
$$

那么 $y_t$ 还是一个单独的 state variable；它虽然不再含独立噪声，却仍然会通过自己的动态影响 labor income。  
课件里的 **no transitory shocks** 特例更强：它不仅去掉独立噪声，还把这整个额外状态变量都关掉，于是 labor income 直接写成

$$
\begin{aligned}
L_t=L_0S_t^b.
\end{aligned}
$$

所以更准确地说：

$$
\begin{aligned}
\nu=0
&\Longrightarrow \text{没有独立的 transitory noise},\\
y_t \text{ 被去掉 / 设为常数}
&\Longrightarrow \text{没有额外的 transitory state}.
\end{aligned}
$$

两步一起，才得到课件里的简化版。

三个背景概念：
1. **Brownian motion = 独立风险源**  
2. **state variable = 会影响最优决策的额外状态**  
3. **spanned vs. unspanned income risk**：能否被 traded asset 的风险张成

一旦把这三点分清，$\nu$、$y_t$、transitory shock 的关系就会很清楚。

**说明：+ 为什么有无 transitory shock 会影响 $\phi$ 是常数还是 $x$ 的函数？**
关键不在“shock 多一个少一个”本身，而在于：**最优组合要不要对额外 state variable 做条件反应**。  
如果有 transitory shock，则 labor income 一般写成

$$
\begin{aligned}
\frac{dL_t}{L_t}
=\big(c_1-\kappa y_t\big)\,dt+\nu\,dZ_t^2+\sigma_L\,dZ_t^1,
\end{aligned}
$$

这时最优决策要看 $(W_t,L_t,y_t)$，因为：

$$
\begin{aligned}
\text{future labor-income risk}
\text{ depends on } y_t \text{ and on the unspanned shock } dZ_t^2.
\end{aligned}
$$

所以 value function 必须写成

$$
\begin{aligned}
V=V(W,L,y),
\end{aligned}
$$

从而 FOC 里的对冲需求会含 $V_{Wy},V_{WL}$ 等项；于是

$$
\begin{aligned}
\phi^*=\phi^*(W,L,y),
\end{aligned}
$$

或在降维后写成 $\phi^*(x,y)$，一般**不是常数**。

反过来，若 **no transitory shocks**，并且 labor income 完全退化成

$$
\begin{aligned}
L_t=L_0S_t^b,
\end{aligned}
$$

那么 $L_t$ 不再携带额外独立风险，只是 traded risky asset 的函数。  
这时问题的相关状态被大幅压缩：

$$
\begin{aligned}
(W,L,y)\Longrightarrow (W,L)\Longrightarrow x=\log\frac{L}{W}.
\end{aligned}
$$

因此最优组合只需要对这个相对规模变量作反应：

$$
\begin{aligned}
\phi^*=\phi^*(x).
\end{aligned}
$$

再进一步，如果连 labor income 都不存在，或者问题具有完全的 homothetic / Merton constant-opportunity structure，那么连 $x$ 都不需要，才会退化成

$$
\begin{aligned}
\phi^*=\text{constant}.
\end{aligned}
$$

所以要分三层看：

$$
\begin{aligned}
\text{有额外 unspanned state}
&\Longrightarrow \phi^*=\phi^*(W,L,y)\ \text{or}\ \phi^*(x,y),\\
\text{无 transitory shock，但有 labor income}
&\Longrightarrow \phi^*=\phi^*(x),\\
\text{连 }x\text{ 也消失（Merton 特例）}
&\Longrightarrow \phi^*=\text{constant}.
\end{aligned}
$$

此时 value function 可猜为

$$
\begin{aligned}
V(W,L)=\frac{W^{1-\gamma}}{1-\gamma}f(x),
\qquad
x=\log\frac{L}{W}.
\end{aligned}
$$

先算出 $x$ 对 $(W,L)$ 的偏导：

$$
\begin{aligned}
x_W=-\frac{1}{W},
\qquad
x_L=\frac{1}{L}.
\end{aligned}
$$

于是

$$
\begin{aligned}
V_W
&=W^{-\gamma}f(x)+\frac{W^{1-\gamma}}{1-\gamma}f'(x)\left(-\frac{1}{W}\right)\\
&=\frac{W^{-\gamma}}{1-\gamma}\big[(1-\gamma)f(x)-f'(x)\big],\\[4pt]
V_{WW}
&=-\frac{W^{-\gamma-1}}{1-\gamma}
\big[\gamma(1-\gamma)f(x)-(2\gamma-1)f'(x)-f''(x)\big],\\[4pt]
V_L
&=\frac{W^{1-\gamma}}{1-\gamma}\frac{f'(x)}{L},\\[4pt]
V_{LL}
&=\frac{W^{1-\gamma}}{1-\gamma}\frac{f''(x)-f'(x)}{L^2},\\[4pt]
V_{WL}
&=\frac{W^{-\gamma}}{1-\gamma}\frac{(1-\gamma)f'(x)-f''(x)}{L}.
\end{aligned}
$$

这时 HJB 为

$$
\begin{aligned}
0
=\max_{\phi}\Big\{
&\lambda \frac{W^{1-\gamma}}{1-\gamma}
-\lambda V
+V_W\big[(r+\phi(\mu-r))W+L\big]
+\frac12V_{WW}W^2\phi^2\sigma^2\\
&\qquad
+V_L\,L\,b\mu
+\frac12V_{LL}L^2b^2\sigma^2
+V_{WL}WL\phi b\sigma^2
\Big\}.
\end{aligned}
$$

再利用

$$
\begin{aligned}
\frac{L}{W}=e^x,
\end{aligned}
$$

并把整条 HJB 乘以 $\frac{1-\gamma}{W^{1-\gamma}}$，逐项化简：

$$
\begin{aligned}
\frac{1-\gamma}{W^{1-\gamma}}\lambda \frac{W^{1-\gamma}}{1-\gamma}
&=\lambda,\\
\frac{1-\gamma}{W^{1-\gamma}}(-\lambda V)
&=-\lambda f(x),\\
\frac{1-\gamma}{W^{1-\gamma}}V_W\big[(r+\phi(\mu-r))W+L\big]
&=\big[(1-\gamma)f(x)-f'(x)\big]\big[(r+\phi(\mu-r))+e^x\big],\\
\frac{1-\gamma}{W^{1-\gamma}}\frac12V_{WW}W^2\phi^2\sigma^2
&=\frac12\big[\gamma(\gamma-1)f(x)+(2\gamma-1)f'(x)+f''(x)\big]\phi^2\sigma^2,\\
\frac{1-\gamma}{W^{1-\gamma}}V_L\,L\,b\mu
&=b\mu f'(x),\\
\frac{1-\gamma}{W^{1-\gamma}}\frac12V_{LL}L^2b^2\sigma^2
&=\frac12\big[f''(x)-f'(x)\big]b^2\sigma^2,\\
\frac{1-\gamma}{W^{1-\gamma}}V_{WL}WL\phi b\sigma^2
&=\big[(1-\gamma)f'(x)-f''(x)\big]\phi b\sigma^2.
\end{aligned}
$$

得到 HJB：

$$
\begin{aligned}
0
=\max_{\phi}\Big\{&
\lambda-\lambda f(x)
+\big[(1-\gamma)f(x)-f'(x)\big]\big[(r+\phi(\mu-r))+e^x\big]\\
&\qquad
+\frac12\big[\gamma(\gamma-1)f(x)+(2\gamma-1)f'(x)+f''(x)\big]\phi^2\sigma^2\\
&\qquad
+b\mu f'(x)
+\frac12\big[f''(x)-f'(x)\big]b^2\sigma^2
+\big[(1-\gamma)f'(x)-f''(x)\big]\phi b\sigma^2
\Big\}.
\end{aligned}
$$

对 $\phi$ 求一阶条件：

$$
\begin{aligned}
0
&=\big[(1-\gamma)f(x)-f'(x)\big]\!(\mu-r)\\
&\qquad
+\big[\gamma(\gamma-1)f(x)+(2\gamma-1)f'(x)+f''(x)\big]\phi\sigma^2\\
&\qquad
+\big[(1-\gamma)f'(x)-f''(x)\big]b\sigma^2.
\end{aligned}
$$

移项并解出 $\phi$：

$$
\begin{aligned}
\phi
&=
\frac{(1-\gamma)f(x)-f'(x)}
{\gamma(1-\gamma)f(x)-(2\gamma-1)f'(x)-f''(x)}
\frac{\mu-r}{\sigma^2}\\
&\qquad
-\frac{(\gamma-1)f'(x)+f''(x)}
{\gamma(1-\gamma)f(x)-(2\gamma-1)f'(x)-f''(x)}\,b.
\end{aligned}
$$

代回上一条 HJB，就得到只含 $f(x),f'(x),f''(x)$ 的一维 ODE，也就是说最优风险资产配置不再是常数，而是 $x=\log(L/W)$ 的函数。

### 5.4.2.2 Finite Difference Solution

**把“每个 $x$ 上都成立的连续 HJB”改写成“每个网格点上一条方程”**。

先把上一节的 HJB 记成

$$
\begin{aligned}
0=\mathcal H\big(x,f(x),f'(x),f''(x),\phi(x)\big),
\end{aligned}
$$

其中

$$
\begin{aligned}
\phi(x)
&=
\frac{(1-\gamma)f(x)-f'(x)}
{\gamma(1-\gamma)f(x)-(2\gamma-1)f'(x)-f''(x)}
\frac{\mu-r}{\sigma^2}\\
&\qquad
-\frac{(\gamma-1)f'(x)+f''(x)}
{\gamma(1-\gamma)f(x)-(2\gamma-1)f'(x)-f''(x)}\,b.
\end{aligned}
$$

把这个 $\phi(x)$ 代回去后，就剩

$$
\begin{aligned}
0=\mathcal G\big(x,f(x),f'(x),f''(x)\big),
\end{aligned}
$$

这才是要数值解的一维非线性 ODE。

具体操作分五步：

1. **选区间与网格**  先取一个足够大的区间 $x\in[\underline x,\bar x],$再均匀切成 $N$ 个点：

$$
   \begin{aligned}
   x_i=\underline x+(i-1)h,
   \qquad
   h=\frac{\bar x-\underline x}{N-1},
   \qquad
   i=1,\dots,N.
   \end{aligned}
$$

   记

$$
   \begin{aligned}
   f_i=f(x_i).
   \end{aligned}
$$

2. **在每个 interior grid point 近似导数**  对 $i=2,\dots,N-1$，常用 central differences：

$$
   \begin{aligned}
   f'(x_i)&\approx \frac{f_{i+1}-f_{i-1}}{2h},\\
   f''(x_i)&\approx \frac{f_{i+1}-2f_i+f_{i-1}}{h^2}.
   \end{aligned}
$$

   如果担心方向性或稳定性，也可用 one-sided difference：

$$
   \begin{aligned}
   f'(x_i)\approx \frac{f_i-f_{i-1}}{h}
   \quad\text{or}\quad
   \frac{f_{i+1}-f_i}{h}.
   \end{aligned}
$$

3. **把连续方程改成离散方程**  在每个 interior point，把

$$
   \begin{aligned}
   f(x_i),\quad f'(x_i),\quad f''(x_i)
   \end{aligned}
$$

   分别替换成

$$
   \begin{aligned}
   f_i,\quad \frac{f_{i+1}-f_{i-1}}{2h},\quad \frac{f_{i+1}-2f_i+f_{i-1}}{h^2},
   \end{aligned}
$$

   得到

$$
   \begin{aligned}
   0=\mathcal G_i(f_{i-1},f_i,f_{i+1}),
   \qquad
   i=2,\dots,N-1.
   \end{aligned}
$$

   所以原来的微分方程现在变成 $N-2$ 条非线性代数方程。

4. **补两条边界条件**  因为二阶 ODE 需要两条边界条件，常见做法有两类：
   - **给定边界值**：直接指定 $f_1$ 与 $f_N$；
   - **reflecting boundary**：在边界令斜率为零，例如

$$
	     \begin{aligned}
	     f'(\underline x)=0,\qquad f'(\bar x)=0,
	     \end{aligned}
$$

		离散化后可写成

$$
	     \begin{aligned}
	     f_2-f_1=0,\qquad f_N-f_{N-1}=0.
	     \end{aligned}
$$

	   这样总共得到 $N$ 条方程，未知数正好是 $f_1,\dots,f_N$。

5. **解非线性方程组**  
   现在问题变成

$$
   \begin{aligned}
   F(f_1,\dots,f_N)=0.
   \end{aligned}
$$

   通常做法是：
   - 给一个初始 guess $f^{(0)}=(f_1^{(0)},\dots,f_N^{(0)})$；
   - 用 Newton method / quasi-Newton / policy iteration 迭代；
   - 每次更新后重新计算离散导数、$\phi_i$ 与 residual；
   - 直到

$$
     \begin{aligned}
     \max_i |F_i|<\varepsilon.
     \end{aligned}
$$

算出来 $f_i$ 之后，再回代

$$
\begin{aligned}
\phi_i =
\frac{(1-\gamma)f_i-\widehat f_i'}
{\gamma(1-\gamma)f_i-(2\gamma-1)\widehat f_i'-\widehat f_i''}
\frac{\mu-r}{\sigma^2}
-\frac{(\gamma-1)\widehat f_i'+\widehat f_i''}
{\gamma(1-\gamma)f_i-(2\gamma-1)\widehat f_i'-\widehat f_i''}\,b,
\end{aligned}
$$

其中 $\widehat f_i',\widehat f_i''$ 是网格上的差分近似，就得到每个状态点上的最优组合。

**说明：+ 这套方法在直觉上到底做了什么？**
连续模型里，“对每个 $x$，HJB 都要等于 0”。  
finite differences 做的事，就是把“每个 $x$”换成“每个网格点 $x_i$”，再把导数换成相邻点的斜率和曲率。  
所以它本质上是在用一个离散化的局部几何近似，去逼近原来的连续最优控制问题。

### 5.5 Optimal Stopping


### 5.5.1 Optimal Stopping Times

:::{admonition} Definition (Optimal Stopping Times)
最优停止问题是在所有 stopping times 中选择 $\tau$，使
V(X_0)=\sup_{\tau}E\!\left[\int_0^{\tau} e^{-\rho t}g(X_t)dt+e^{-\rho\tau}h(X_\tau)\right].

其中 $g(X)$ 是 continuation region 的 flow payoff，$h(X)$ 是停止时的一次性 payoff。
:::


若最优停止只依赖当前状态 $X_t$，则 continuation region $D$ 与 stopping region $D^c$ 满足

$$
\begin{aligned}
V(X)
&>
h(X), \qquad X\in D,\\
V(X)
&=
h(X), \qquad X\notin D.
\end{aligned}
$$

HJB 变成变分不等式：

$$
\begin{aligned}
0 =
\max\big\{
-\beta V(X)+\mathcal D_XV(X)+g(X),\; h(X)-V(X)
\big\}.
\end{aligned}
$$

这个式子来自“继续 / 停止”两种选择同时存在。对任意当前状态 $X$，最优值只能是下面两者中的较大者：

$$
\begin{aligned}
V(X) =
\max\left\{
\underbrace{h(X)}_{\text{立刻停止}},
\underbrace{g(X)\,dt+e^{-\beta dt}E[V(X_{t+dt})]}_{\text{继续一个 }dt}
\right\}.
\end{aligned}
$$

对“继续一个 $dt$”那一项作 generator 展开：

$$
\begin{aligned}
E[V(X_{t+dt})]
&=V(X)+\mathcal D_XV(X)\,dt+o(dt),\\
e^{-\beta dt}
&=1-\beta dt+o(dt).
\end{aligned}
$$

代回 Bellman equation 并连续整理：

$$
\begin{aligned}
V(X)
&=
\max\left\{
h(X),\;
g(X)\,dt+\big(1-\beta dt\big)\big[V(X)+\mathcal D_XV(X)\,dt\big]+o(dt)
\right\}\\
&=
\max\left\{
h(X),\;
V(X)+\underbrace{\big[-\beta V(X)+\mathcal D_XV(X)+g(X)\big]}_{\text{继续时的局部净增值}}dt+o(dt)
\right\}.
\end{aligned}
$$

两边减去 $V(X)$：

$$
\begin{aligned}
0
&=
\max\left\{
\underbrace{h(X)-V(X)}_{\text{若停止，则这一项绑定}},
\underbrace{\big[-\beta V(X)+\mathcal D_XV(X)+g(X)\big]dt+o(dt)}_{\text{若继续，则这一项绑定}}
\right\}.
\end{aligned}
$$

这里的 “绑定 / binding” 含义见 [binding（绑定）](cards/part2/binding%EF%BC%88%E7%BB%91%E5%AE%9A%EF%BC%89.md)。
这里要特别注意：不能把整个 $\max\{\cdot,\cdot\}$ 直接除以 $dt$，因为

$$
\begin{aligned}
h(X)-V(X)
\end{aligned}
$$

不是 $O(dt)$ 项。正确做法是先分情形。

先由

$$
\begin{aligned}
V(X)=\max\{h(X),\text{continue value}\}
\Longrightarrow
V(X)\ge h(X)
\Longrightarrow
h(X)-V(X)\le 0.
\end{aligned}
$$

**(1) continuation region**

$$
\begin{aligned}
V(X)>h(X)
&\Longrightarrow
h(X)-V(X)<0 \\
&\Longrightarrow
\text{停止项不可能取到最大值，只能是继续项绑定} \\
&\Longrightarrow
\big[-\beta V(X)+\mathcal D_XV(X)+g(X)\big]dt+o(dt)=0 \\
&\Longrightarrow
-\beta V(X)+\mathcal D_XV(X)+g(X)=0.
\end{aligned}
$$

**(2) stopping region**

$$
\begin{aligned}
h(X)-V(X)=0
&\Longleftrightarrow
V(X)=h(X).
\end{aligned}
$$


把 (1) 与 (2) 合并，就得到变分不等式

$$
\begin{aligned}
0 =
\max\big\{
-\beta V(X)+\mathcal D_XV(X)+g(X),\;
h(X)-V(X)
\big\}.
\end{aligned}
$$

所以这不是“普通 HJB + 一个约束”硬拼出来的，而是因为最优停止问题在每个点都要比较：

$$
\begin{aligned}
\underbrace{\text{继续的局部净增值}}_{-\beta V+\mathcal D_XV+g}
\quad\text{vs.}\quad
\underbrace{\text{立刻停止的相对价值}}_{h-V}.
\end{aligned}
$$

若继续更优，则第一项绑定；若立即停止更优，则第二项绑定。

:::{admonition} Lemma: Value Matching 与 Smooth Pasting
若最优策略由阈值 $X^*$ 划分，且停止收益写成 $h(X)$，则自由边界（free boundary）通常满足

$$
\begin{aligned}
V(X^*)&=h(X^*) \qquad \text{(value matching)}\\
V'(X^*)&=h'(X^*) \qquad \text{(smooth pasting)}.
\end{aligned}
$$

其中第一条表示在边界点“继续”和“立刻停止”的价值必须接上；第二条表示最优边界是内生选出来的，故一阶斜率也要接上。  
在本节卖出资产问题里，

$$
\begin{aligned}
h(X)=X-K
&\Longrightarrow
V(X^*)=X^*-K,\qquad V'(X^*)=1.
\end{aligned}
$$


:::

### 5.5.2 Optimal Time to Sell an Asset

设 risky asset 价格满足

$$
\begin{aligned}
dX_t=\mu X_t\,dt+\sigma X_t\,dZ_t,
\end{aligned}
$$

持有一单位股票，若此时卖出则要支付 fixed transaction cost $K$，故停止时的净收益为

$$
\begin{aligned}
\Pi(\tau)=e^{-\beta\tau}(X_\tau-K).
\end{aligned}
$$

为了保证最优停止时间有限，假设$\mu<\beta.$
此时 stopping problem 为

$$
\begin{aligned}
V(X_0)=\sup_{\tau}E\!\left[e^{-\beta\tau}(X_\tau-K)\right].
\end{aligned}
$$


若存在阈值 $X^*$，则 continuation region 为

$$
\begin{aligned}
D=\{X:X<X^*\},
\end{aligned}
$$

且在 $X<X^*$ 内满足

$$
\begin{aligned}
0&=-\beta V(X)+\mu X V'(X)+\frac12\sigma^2X^2V''(X) \\
V(X)=CX^\gamma
&\Longrightarrow
V'(X)=C\gamma X^{\gamma-1},\qquad
V''(X)=C\gamma(\gamma-1)X^{\gamma-2} \\
&\Longrightarrow
0=CX^\gamma\left[\frac12\sigma^2\gamma(\gamma-1)+\mu\gamma-\beta\right] \\
&\Longrightarrow
\frac12\sigma^2\gamma(\gamma-1)+\mu\gamma-\beta=0 \\
\gamma
&=\frac{-\left(\mu-\frac12\sigma^2\right)+\sqrt{\left(\mu-\frac12\sigma^2\right)^2+2\beta\sigma^2}}{\sigma^2}>1 \\
&\Longrightarrow
V(X)=CX^\gamma,\qquad X<X^*.
\end{aligned}
$$


这里的停止收益函数就是

$$
\begin{aligned}
h(X)=X-K,
\end{aligned}
$$

因为一旦停止（卖出），立刻拿到标的价格 $X$，同时支付 fixed transaction cost $K$。因此 value matching 与 smooth pasting 实际上是

$$
\begin{aligned}
V(X^*)&=h(X^*)=X^*-K,\\
V'(X^*)&=h'(X^*)=1.
\end{aligned}
$$

也就是说：value matching 要求边界点处“继续持有的价值”和“立刻卖出的价值”相等；smooth pasting 则要求两边斜率也相等。于是可写成

$$
\begin{aligned}
V(X^*)&=X^*-K,\\
V'(X^*)&=1.
\end{aligned}
$$

由 $V(X)=CX^\gamma$ 得

$$
\begin{aligned}
C(X^*)^\gamma&=X^*-K,\\
C\gamma(X^*)^{\gamma-1}&=1.
\end{aligned}
$$

消去 $C$：

$$
\begin{aligned}
\frac{X^*}{\gamma}&=X^*-K
\quad\Longrightarrow\quad
X^*=\frac{\gamma}{\gamma-1}K.
\end{aligned}
$$

于是

$$
\begin{aligned}
C=\frac{(X^*)^{1-\gamma}}{\gamma}.
\end{aligned}
$$

最终 value function 为

$$
\begin{aligned}
V(X)
=
\begin{cases}
(X^*-K)\left(\dfrac{X}{X^*}\right)^\gamma, & X<X^*,\\[8pt]
X-K, & X\ge X^*.
\end{cases}
\end{aligned}
$$

这说明：当价格低于阈值时等待更优；当价格达到 $X^*$ 时立即卖出。


---

## Lecture 6. Consumption-Based Models

[Reference Notes](https://rsigalov.github.io/APNotes/chapter6.pdf)
### 6.0 Equity Premium Background


:::{admonition} Lemma: Equity Premium Puzzle
由于消费增长波动过低、与股票回报相关性有限，标准 CCAPM 往往需要非常大的风险厌恶系数才能解释历史股权溢价，这就是 equity premium puzzle 的核心。

:::

股权溢价（equity premium）是资产定价里最著名的谜题之一：历史上股票的平均超额回报非常高，

$$
\begin{aligned}
\text{equity premium}
&=E[R_{e,t+1}]-R_{f,t+1},
\end{aligned}
$$

但若只用“风险补偿”来解释，所需要的风险厌恶往往高得不合理。于是一个自然问题是：  
为什么股票愿意提供这么高的风险补偿，而代表性消费者模型（representative agent model）里常见的消费波动却解释不了这么大的回报？

代表性消费者框架通常作为起点：假设总消费（aggregate consumption）能代表经济状态，且偏好为 CRRA，则定价核由边际消费效用决定，

$$
\begin{aligned}
M_{t,t+1}
\propto
\frac{u'(c_{t+1})}{u'(c_t)}
\;=\;
\left(\frac{c_{t+1}}{c_t}\right)^{-\gamma},
\end{aligned}
$$

从而资产定价满足

:::{admonition} Lemma: CCAPM Euler Equation
CCAPM 的 Euler 方程给出
E_t\big[M_{t,t+1}R_{i,t+1}\big]=1.


:::

### 6.1 Representative Agent and CCAPM

### 推导核对：代表性代理人的消费 SDF

:::{admonition} Lemma: Consumption-Based SDF
若代表性代理人最大化
E_t\sum_{j\ge0}\beta^j u(C_{t+j}),

则一阶条件给出
1=E_t\left[\beta\frac{u'(C_{t+1})}{u'(C_t)}R_{i,t+1}\right].

因而
M_{t+1}=\beta\frac{u'(C_{t+1})}{u'(C_t)}

是单期 SDF。

:::

对“少消费一点、买入一单位资产、明天卖出”的扰动求一阶条件。

在 $t$ 时刻用 $p_{i,t}$ 买入资产 $i$ 的 $\epsilon$ 单位：

$$
\begin{aligned}
\Delta C_t&=-\epsilon p_{i,t},\\
\Delta C_{t+1}&=\epsilon X_{i,t+1},\\
R_{i,t+1}&=X_{i,t+1}/p_{i,t}.
\end{aligned}
$$


最优下边际效用变化为零：

$$
\begin{aligned}
0
&=u'(C_t)(-p_{i,t})+\beta E_t[u'(C_{t+1})X_{i,t+1}]\\
&=-u'(C_t)p_{i,t}+\beta E_t[u'(C_{t+1})X_{i,t+1}].
\end{aligned}
$$

移项并除以 $u'(C_t)p_{i,t}$：

$$
\begin{aligned}
1
&=E_t\left[\beta\frac{u'(C_{t+1})}{u'(C_t)}\frac{X_{i,t+1}}{p_{i,t}}\right]\\
&=E_t[M_{t+1}R_{i,t+1}].
\end{aligned}
$$


CCAPM 的定价核来自跨期边际替代率；资产在高边际效用状态下 payoff 越高，均衡预期收益越低。



更具体地，课件里的代表性消费者写成

$$
\begin{aligned}
E_0\!\left[\int_0^\infty e^{-\rho t}\frac{c_t^{1-\gamma}}{1-\gamma}\,dt\right],
\end{aligned}
$$

总消费与股票收益过程设为

$$
\begin{aligned}
\frac{dc_t}{c_t}&=\mu_c\,dt+\sigma_c\,dZ_{c,t},\\
\frac{dR_t}{R_t}&=\mu_R\,dt+\sigma_R\,dZ_{R,t},\\
dZ_{c,t}\,dZ_{R,t}&=\rho_{R,c}\,dt.
\end{aligned}
$$

因此 state-price density 为

$$
\begin{aligned}
\pi_t=e^{-\rho t}c_t^{-\gamma},
\end{aligned}
$$

CCAPM 于是给出风险溢价公式

$$
\begin{aligned}
E_t\!\left[\frac{dR_t}{R_t}-r_{f,t}dt\right]
&=\gamma\,\operatorname{Cov}_t\!\left(\frac{dR_t}{R_t},\frac{dc_t}{c_t}\right) \\
&=\gamma\,\sigma_c\sigma_R\rho_{R,c}\,dt.
\end{aligned}
$$

把课件里的历史数值代入

$$
\begin{aligned}
\sigma_c&=0.01,\qquad \sigma_R=0.15,\qquad \rho_{R,c}=0.34,\\
E_t\!\left[\frac{1}{dt}\frac{dR_t}{R_t}-r_{f,t}\right]
&=0.07,
\end{aligned}
$$

就得到

$$
\begin{aligned}
\gamma
\;=\;
\frac{0.07}{0.01\times 0.15\times 0.34}
\;=\;137.
\end{aligned}
$$

这就是 equity premium puzzle 的典型结论：为了匹配看起来并不太大的消费—股票协方差，模型需要极端大的风险厌恶系数。

连续时间下，风险溢价可写为

E_t[dR_{i,t}]-r_{f,t}dt
=\gamma\,\operatorname{Cov}_t\!\left(dR_{i,t},\frac{dc_t}{c_t}\right).


### 6.2 Lucas Tree Equilibrium


Lucas tree model 把股票看成 aggregate endowment 的索取权。设 [endowment 过程](cards/part2/Endowment%20process.md) 为

$$
\begin{aligned}
\frac{d\delta_t}{\delta_t}&=\mu_\delta\,dt+\sigma_\delta\,dZ_t,
\end{aligned}
$$

且代表性消费者在均衡中消费整个 endowment：

$$
\begin{aligned}
c_t=\delta_t.
\end{aligned}
$$


这里的 [endowment economy](cards/part2/Endowment%20economy.md) 是“给定 aggregate endowment、再由均衡分配消费”的一般均衡框架。

由 [前面关于 SPD 的笔记](cards/part2/%E7%8A%B6%E6%80%81%E4%BB%B7%E6%A0%BC%E5%AF%86%E5%BA%A6%E3%80%81EMM%20%E4%B8%8E%E9%9E%85%E5%AE%9A%E4%BB%B7.md)，若偏好为 CRRA，

$$
\begin{aligned}
u(c_t)&=\frac{c_t^{1-\gamma}}{1-\gamma},
\end{aligned}
$$

则 state-price density（SPD）为

$$
\begin{aligned}
\pi_t&=e^{-\rho t}c_t^{-\gamma}=e^{-\rho t}\delta_t^{-\gamma}.
\end{aligned}
$$

对 $\pi_t$ 用 [Itô 公式](cards/part2/It%C3%B4%20%E5%85%AC%E5%BC%8F.md) 展开：

$$
\begin{aligned}
\frac{d\pi_t}{\pi_t}
&=\frac{d\left(e^{-\rho t}\right)}{e^{-\rho t}}
+\frac{d\left(\delta_t^{-\gamma}\right)}{\delta_t^{-\gamma}} \\
&=-\rho\,dt
+\left[-\gamma\frac{d\delta_t}{\delta_t}
+\frac12\gamma(\gamma+1)\sigma_\delta^2\,dt\right] \\
&=-\rho\,dt
+\left[-\gamma(\mu_\delta\,dt+\sigma_\delta\,dZ_t)
+\frac12\gamma(\gamma+1)\sigma_\delta^2\,dt\right] \\
&=-\Big(\rho+\gamma\mu_\delta-\frac12\gamma(\gamma+1)\sigma_\delta^2\Big)dt
-\gamma\sigma_\delta\,dZ_t.
\end{aligned}
$$

因此无风险利率为

$$
\begin{aligned}
r_t=\rho+\gamma\mu_\delta-\frac12\gamma(\gamma+1)\sigma_\delta^2.
\end{aligned}
$$

由 [EMM / martingale 定价公式](cards/part2/%E7%8A%B6%E6%80%81%E4%BB%B7%E6%A0%BC%E5%AF%86%E5%BA%A6%E3%80%81EMM%20%E4%B8%8E%E9%9E%85%E5%AE%9A%E4%BB%B7.md)，股票价格由 present-value formula 给出：

$$
\begin{aligned}
s_t
&=E_t\!\left[\int_t^\infty \frac{\pi_s}{\pi_t}\,\delta_s\,ds\right]=E_t\!\left[\int_0^\infty \frac{\pi_{t+u}}{\pi_t}\,\delta_{t+u}\,du\right]=E_t\!\left[\int_0^\infty
\frac{e^{-\rho(t+u)}\delta_{t+u}^{-\gamma}}{e^{-\rho t}\delta_t^{-\gamma}}
\delta_{t+u}\,du\right] \\
&=E_t\!\left[\int_0^\infty
e^{-\rho u}\left(\frac{\delta_{t+u}}{\delta_t}\right)^{-\gamma}
\delta_{t+u}\,du\right]=E_t\!\left[\int_0^\infty e^{-\rho u}\left(\frac{\delta_{t+u}}{\delta_t}\right)^{1-\gamma}\delta_t\,du\right] \\
&=\delta_t\int_0^\infty\exp\!\left(-\rho u+(1-\gamma)\mu_\delta u+\frac12\gamma(\gamma-1)\sigma_\delta^2u\right)du=A\,\delta_t,
\end{aligned}
$$

其中

$$
\begin{aligned}
\frac{d\delta_t}{\delta_t}
&=\mu_\delta\,dt+\sigma_\delta\,dZ_t \\
\Longrightarrow\quad
d\ln\delta_t
&=\left(\mu_\delta-\frac12\sigma_\delta^2\right)dt+\sigma_\delta\,dZ_t \\
\Longrightarrow\quad
\ln\frac{\delta_{t+u}}{\delta_t}
&=\left(\mu_\delta-\frac12\sigma_\delta^2\right)u+\sigma_\delta\big(Z_{t+u}-Z_t\big) \\
\Longrightarrow\quad
\left(\frac{\delta_{t+u}}{\delta_t}\right)^{1-\gamma}
&=\exp\!\left((1-\gamma)\left(\mu_\delta-\frac12\sigma_\delta^2\right)u+(1-\gamma)\sigma_\delta\big(Z_{t+u}-Z_t\big)\right) \\
\Longrightarrow\quad
E_t\!\left[\left(\frac{\delta_{t+u}}{\delta_t}\right)^{1-\gamma}\right]
&=\exp\!\left((1-\gamma)\left(\mu_\delta-\frac12\sigma_\delta^2\right)u+\frac12(1-\gamma)^2\sigma_\delta^2u\right) \\
&=\exp\!\left((1-\gamma)\mu_\delta u+\frac12\gamma(\gamma-1)\sigma_\delta^2u\right).
\end{aligned}
$$

这里用到

$$
\begin{aligned}
Z_{t+u}-Z_t\mid \mathcal F_t &\sim N(0,u),\\
E_t[e^{a(Z_{t+u}-Z_t)}]
&=\exp\!\left(\frac12a^2u\right),\\
a&=(1-\gamma)\sigma_\delta.
\end{aligned}
$$

其中

$$
\begin{aligned}
A
&=\int_0^\infty\exp\!\left(-\Big[\rho-(1-\gamma)\mu_\delta-\frac12\gamma(\gamma-1)\sigma_\delta^2\Big]u\right)du \\
&=\frac{1}{\rho-(1-\gamma)\mu_\delta-\frac12\gamma(\gamma-1)\sigma_\delta^2}.
\end{aligned}
$$

这里令

$$
\begin{aligned}
\kappa
&:=\rho-(1-\gamma)\mu_\delta-\frac12\gamma(\gamma-1)\sigma_\delta^2,
\end{aligned}
$$

则

$$
\begin{aligned}
A
&=\int_0^\infty e^{-\kappa u}\,du \\
&=\left[-\frac{1}{\kappa}e^{-\kappa u}\right]_{0}^{\infty} \\
&=\frac{1}{\kappa},
\end{aligned}
$$

其中需要 $\kappa>0$ 才能保证积分收敛，从而$A$ is a constant.

所以股票回报与 endowment 回报完全同波动：

$$
\begin{aligned}
\frac{ds_t}{s_t}&=\frac{d\delta_t}{\delta_t}=\mu_\delta\,dt+\sigma_\delta\,dZ_t,\\
\sigma_R&=\sigma_\delta.
\end{aligned}
$$

再由资产定价条件

$$
\begin{aligned}
\mu_R
&:=E_t\!\left[\frac{dS_t+\delta_t\,dt}{S_t\,dt}\right],\\
\mu_R-r_t
&=E_t\!\left[\frac{dS_t+\delta_t\,dt}{S_t\,dt}\right]-r_t.
\end{aligned}
$$

其中$\frac{dS_t+\delta_t\,dt}{S_t\,dt}$是股票在区间 $[t,t+dt]$ 的总回报率：$dS_t$ 是 capital gain，$\delta_t\,dt$ 是 dividend。所以 $\mu_R$ 表示 **expected instantaneous gross return**，再减去无风险利率 $r_t$ 就得到超额回报。

这一步也可以从 SPD 的小步长定价公式推出。设

$$
\begin{aligned}
g_t&:=\frac{dS_t+\delta_t\,dt}{S_t}=\mu_R\,dt+o(dt),\\
M_t&:=\frac{\pi_{t+dt}}{\pi_t}=1-r_t\,dt+o(dt),
\end{aligned}
$$


$$
\begin{aligned}
E_t[M_t]
&=1-r_t\,dt+o(dt),\\
E_t[1+g_t]
&=1+\mu_R\,dt+o(dt).
\end{aligned}
$$

则无套利给出

$$
\begin{aligned}
1&=E_t[M_t(1+g_t)].
\end{aligned}
$$

展开协方差：

$$
\begin{aligned}
1
&=E_t[M_t]E_t[1+g_t]+\operatorname{Cov}_t(M_t,1+g_t) \\
&=\big(1-r_t\,dt\big)\big(1+\mu_R\,dt\big)+\operatorname{Cov}_t(M_t,g_t)+o(dt) \\
&=1+(\mu_R-r_t)dt+\operatorname{Cov}_t(M_t,g_t)+o(dt),
\end{aligned}
$$


$$
\begin{aligned}
\mu_R-r_t
&=-\frac{\operatorname{Cov}_t(M_t,g_t)}{dt}.
\end{aligned}
$$


$$
\begin{aligned}
M_t
&=\frac{\pi_{t+dt}}{\pi_t}
=1+\frac{d\pi_t}{\pi_t}+o(dt),
\end{aligned}
$$


$$
\begin{aligned}
\mu_R-r_t
&=-\frac{\operatorname{Cov}_t\!\left(\frac{dS_t+\delta_t\,dt}{S_t},\frac{d\pi_t}{\pi_t}\right)}{dt}=-\frac{\operatorname{Cov}_t\!\left(\frac{ds_t}{s_t},\frac{d\pi_t}{\pi_t}\right)}{dt} \\
&=-\frac{\operatorname{Cov}_t\!\left(\sigma_\delta\,dZ_t,-\gamma\sigma_\delta\,dZ_t\right)}{dt}=-\frac{-\gamma\sigma_\delta^2\,dt}{dt} \\
&=\gamma\sigma_\delta^2=\gamma\sigma_R\sigma_\delta.
\end{aligned}
$$

因此

$$
\begin{aligned}
r_t&=\rho+\gamma\mu_\delta-\frac12\gamma(\gamma+1)\sigma_\delta^2,\\
\sigma_R&=\sigma_\delta,\\
\mu_R-r_t&=\gamma\sigma_\delta^2.
\end{aligned}
$$

这就说明 Lucas tree model 能把 equity premium 和 consumption risk 联系起来，但它通常难以同时匹配高股权溢价、合理的无风险利率与股票波动率。

### 6.3 Excess Volatility

如果坚持 frictionless representative-agent + i.i.d. consumption growth 的框架，那么就很难同时解释 **equity premium** 和 **excess volatility**。一个自然的放松方式，是让 **SPD / pricing kernel** 不再只依赖消费，而是也依赖额外状态变量：

$$
\begin{aligned}
\lambda_t=U_c(c_t,X_t),
\end{aligned}
$$

其中 $\lambda_t$ 就是 SPD，$X_t$ 是另一个状态变量。  
“更敏感”指的是：当 $X_t$ 变化时，$\lambda_t$ 也变化，所以 SPD 的波动不再只来自消费增长，还会来自这个额外状态变量。这样一来，SPD 的波动可以比消费本身更大，于是资产价格也可以比 fundamentals 更 volatile。

这就是为什么改偏好有时能同时处理两类经验事实：

$$
\begin{aligned}
\text{high equity premium}
&\Longleftrightarrow
\text{more volatile SPD},\\
\text{excess volatility}
&\Longleftrightarrow
\text{stock prices fluctuate more than dividends}.
\end{aligned}
$$


### 6.4 Separability

另一条路是放松 **time-separability**。  
若偏好只依赖当前消费序列，则不同的消费路径常会在效用上变得“太接近”。例如：

$$
\begin{aligned}
\text{stream }A &: c_t \text{ is i.i.d. } (50/50),\\
\text{stream }B &: c_t \text{ is also } 50/50 \text{ each date, but perfectly correlated over time}.
\end{aligned}
$$

在 time-separable utility 下，如果每期 marginal distribution 相同，消费者往往对 $A$ 和 $B$ 近似无差异；但在资产定价里，我们关心的是 **路径的 persistence / correlation structure**，而不只是每期的边际分布。

因此更一般的偏好需要让消费者关心整条 consumption path 的分布，而不只是每期的边际分布。这样一来，冲击的 persistence、长期风险和状态持续性都会进入 SPD：

$$
\begin{aligned}
\xi_t
\neq e^{-\rho t}u'(c_t)\quad\text{(一般情形)}.
\end{aligned}
$$

而会依赖 continuation utility、habit、长期增长状态等变量。  
这正是后面 recursive preferences 和 long-run risk 模型要处理的核心。

### 6.5 Recursive Preferences

**说明：How to read recursive utility**
recursive utility 的核心不是“把所有未来消费一次性加总”，而是把效用拆成两层：

$$
\begin{aligned}
U_t=\text{current consumption }c_t \;+\; \text{future continuation value}.
\end{aligned}
$$

也就是说，今天的效用不只看今天消费，还看“未来这条消费路径的价值”。

直观上：
- **time-separable utility** 只关心每期消费加权后的总和；
- **recursive utility** 还关心未来效用本身的分布、持续性和风险。

所以 recursive utility 的重点是：  
**当前消费决定当期满足感，continuation utility 决定你有多在乎未来以及未来的不确定性。**

recursive utility 不是直接把效用写成当前消费的静态函数，而是写成

$$
\begin{aligned}
U_t=G\big(c_t,m(U_{t+1})\big),
\end{aligned}
$$

其中 $m(U_{t+1})$ 是 continuation utility $U_{t+1}$ 的某个统计量。常见的规范写法是

$$
\begin{aligned}
U_t=G\left(c_t, m^{-1}\big(E_t[m(U_{t+1})]\big)\right).
\end{aligned}
$$


$$
\begin{aligned}
U_{t+1}
\xrightarrow{\;m\;}
m(U_{t+1})
\xrightarrow{\;E_t[\cdot]\;}
E_t[m(U_{t+1})]
\xrightarrow{\;m^{-1}\;}
m^{-1}\!\big(E_t[m(U_{t+1})]\big)
\xrightarrow{\;G(c_t,\cdot)\;}
U_t.
\end{aligned}
$$

- 先把未来 continuation utility $U_{t+1}$ 经过 $m(\cdot)$ 压缩成一个标量；
- 再对这个标量取条件期望；
- 再用 $m^{-1}(\cdot)$ 把它变回“效用尺度”；
- 最后和当前消费 $c_t$ 一起输入 $G$，得到当前效用 $U_t$。

这里

$$
\begin{aligned}
G&=\text{across-time aggregator},\\
m&=\text{across-state aggregator}.
\end{aligned}
$$

如果偏好是 time-separable utility，那么它只是这个 recursive form 的特殊情况：

$$
\begin{aligned}
u(x)=x,\qquad G(x,y)=u(x)+\delta y
\Longrightarrow
U_t=u(c_t)+\delta E_t[U_{t+1}].
\end{aligned}
$$


### 6.5.1 Epstein-Zin Preferences

Epstein-Zin 的核心是把 **risk aversion** 和 **elasticity of intertemporal substitution (EIS)** 分开。  
普通 CRRA / time-additive utility 会把二者绑在一起：同一个 curvature parameter 同时决定“愿不愿意跨期替代”与“怕不怕风险”。

**说明：Time-additive utility 的绑定**
若效用是 power utility，

$$
\begin{aligned}
u(c)=\frac{c^{1-\gamma}}{1-\gamma},
\end{aligned}
$$

则 SDF 典型地写成

$$
\begin{aligned}
M_{t,t+1}
&=\delta\left(\frac{c_{t+1}}{c_t}\right)^{-\gamma}.
\end{aligned}
$$

这里同一个 $\gamma$ 既控制 marginal utility 的 curvature，也决定 intertemporal substitution：

$$
\begin{aligned}
\text{EIS}=\frac{1}{\gamma}.
\end{aligned}
$$

所以在 time-additive CRRA 里，risk aversion 和 EIS 被绑定在同一个参数上。

Epstein-Zin 把这个绑定拆开：

$$
\begin{aligned}
J_t
&=\left[(1-\delta)c_t^{1-\psi^{-1}}
+\delta\left(E_t\left[J_{t+1}^{1-\gamma}\right]\right)^{\frac{1-\psi^{-1}}{1-\gamma}}\right]^{\frac{1}{1-\psi^{-1}}},
\end{aligned}
$$

其中先定义 future utility 的 certainty equivalent：

$$
\begin{aligned}
\operatorname{CE}_t(J_{t+1})
:=
\left(E_t\left[J_{t+1}^{1-\gamma}\right]\right)^{\frac{1}{1-\gamma}}.
\end{aligned}
$$

这里 $\gamma$ 只出现在 certainty equivalent 里，所以它只负责 **risk attitude**。  
而 $\psi$ 只出现在 time aggregator 里，所以它只负责 **intertemporal substitution**。

更直接地看：

$$
\begin{aligned}
J_t
&=\left[
\underbrace{(1-\delta)c_t^{1-\psi^{-1}}}_{\text{current consumption / EIS}}
+\underbrace{\delta\left(E_t\left[J_{t+1}^{1-\gamma}\right]\right)^{\frac{1-\psi^{-1}}{1-\gamma}}}_{\text{continuation utility / risk}}
\right]^{\frac{1}{1-\psi^{-1}}}.
\end{aligned}
$$

所以：
- 改变 $\psi$，只改变当前消费与 continuation utility 的替代弹性；
- 改变 $\gamma$，只改变对 continuation utility 不确定性的评价方式。

并且终端条件为

$$
\begin{aligned}
J_T=c_T.
\end{aligned}
$$

其中

$$
\begin{aligned}
\delta&=\text{time discount factor},\\
\gamma&=\text{risk aversion parameter},\\
\psi&=\text{EIS parameter}.
\end{aligned}
$$

如果再定义

$$
\begin{aligned}
\rho:=1-\psi^{-1},\qquad V_t:=J_t^{\rho},
\end{aligned}
$$

则整个递归就变成幂函数的加权和，方便保持 homotheticity 并推出后面的 Euler equation。  
所以和前面那句 $\lambda_t=U_c(c_t,X_t)$ 的意思是一致的：recursive preference 不是只看当前消费，而是把额外状态 $X_t$ 通过 future utility / continuation utility 传进来。

:::{admonition} Definition (Homogeneity of the Functional Form)
homothetic preference 的核心是：缩放消费和财富，只会按幂次缩放 value function，而不会改变最优比例。

$$
\begin{aligned}
c_t\to \lambda c_t,\qquad W_t\to \lambda W_t
\qquad\Longrightarrow\qquad
V\to \lambda^{\rho}V.
\end{aligned}
$$

因而可以写成

$$
\begin{aligned}
V(W,X,t)=W^{\rho}F(X,t).
\end{aligned}
$$

所以

$$
\begin{aligned}
\frac{\partial V}{\partial W}=\frac{\rho V}{W}.
\end{aligned}
$$

其中 $X$ 可以理解成 investment opportunity set。

:::

### 6.5.2 Euler Equation

### 推导核对：Epstein-Zin Euler 方程的结构

:::{admonition} Lemma: Epstein-Zin SDF Decomposition
Epstein-Zin 偏好下，一期 SDF 可写成“消费增长项”和“财富组合收益项”的乘积。常见记号下，

$$
M_{t+1}=\left[\beta\left(\frac{C_{t+1}}{C_t}\right)^{-\rho}\right]^\theta R_{a,t+1}^{\theta-1},
\qquad
\theta=\frac{1-\gamma}{1-\rho}.
$$

:::

说明为什么 recursive utility 的 Euler equation 不只依赖消费增长，还依赖 continuation value / aggregate wealth return。

递归效用写作

$$
\begin{aligned}
V_t
=\left[(1-\beta)C_t^{1-\rho}+\beta\left(E_t[V_{t+1}^{1-\gamma}]\right)^{\frac{1-\rho}{1-\gamma}}\right]^{\frac{1}{1-\rho}}.
\end{aligned}
$$

其中

$$
\begin{aligned}
\gamma&=\text{risk aversion},\\
1/\rho&=\text{EIS},\\
R_{a,t+1}&=\text{return on aggregate wealth / continuation claim}.
\end{aligned}
$$


资产 Euler equation 的抽象形式仍是

$$
\begin{aligned}
1=E_t[M_{t+1}R_{i,t+1}].
\end{aligned}
$$

EZ 的关键是 $M_{t+1}$ 不再等于单纯的 $\beta u'(C_{t+1})/u'(C_t)$。递归效用的链式求导会产生 continuation value 的边际项，整理后得到

$$
\begin{aligned}
M_{t+1}
&=\left[\beta\left(\frac{C_{t+1}}{C_t}\right)^{-\rho}\right]^\theta R_{a,t+1}^{\theta-1}.
\end{aligned}
$$

取对数可见两个风险来源：

$$
\begin{aligned}
\log M_{t+1}
&=\theta\log\beta-\theta\rho\Delta c_{t+1}+(\theta-1)r_{a,t+1}.
\end{aligned}
$$


EZ 偏好把 risk aversion $\gamma$ 与 EIS $1/\rho$ 分开；长期风险模型正是利用 $r_{a,t+1}$ 与长期消费增长消息的暴露来放大风险价格。


设动态预算约束为

$$
\begin{aligned}
W_{t+1}=(W_t-c_t)R_{a,t+1},
\end{aligned}
$$

其中 $W_t$ 是 wealth，$R_{a,t+1}$ 是资产组合的 gross return。再定义便于写法的幂变换

$$
\begin{aligned}
V_t=J_t^\rho,
\qquad \rho:=1-\psi^{-1}.
\end{aligned}
$$

则递归形式可以转成

$$
\begin{aligned}
V_t=(1-\delta)c_t^\rho+\delta\left(E_t\left[V_{t+1}^{\theta/\rho}\right]\right)^{\rho/\theta},
\end{aligned}
$$

其中 $\theta=1-\gamma$。

**说明：$\delta$ 是什么**
这里的 $\delta$ 是 **time discount factor**（主观贴现因子）。  
递归偏好里，当前 utility 的权重是

$$
\begin{aligned}
(1-\delta)\cdot \text{current consumption term}
+\delta\cdot \text{continuation utility term}.
\end{aligned}
$$

所以 $\delta$ 越大，越重视未来；$\delta$ 越小，越重视当前消费。

**说明：How the Euler equation is obtained**
假设 $c_t$ 是最优计划。考虑一个可行偏离

$$
\begin{aligned}
c_t\to c_t+\varepsilon,\qquad W_{t+1}\to W_{t+1}-\varepsilon R_{i,t+1}.
\end{aligned}
$$

在最优点，价值函数对 $\varepsilon$ 的导数必须为 0，因此

$$
\begin{aligned}
0
&=
\left.\frac{\partial}{\partial\varepsilon}\right|_{\varepsilon=0}
\Big[
(1-\delta)(c_t+\varepsilon)^\rho
+\delta\Big(E_t\big[V_{t+1}^{\theta/\rho}\big]\Big)^{\rho/\theta}
\Big] \\
&=(1-\delta)\rho c_t^{\rho-1}
-\delta\frac{\rho}{\theta}
\Big(E_t\big[V_{t+1}^{\theta/\rho}\big]\Big)^{\rho/\theta-1}
E_t\!\left[
V_{t+1}^{\theta/\rho-1}
\frac{\theta}{\rho}
\frac{\partial V_{t+1}}{\partial W_{t+1}}
R_{i,t+1}
\right].
\end{aligned}
$$

因而在一期偏离下，消费和投资的边际条件相等。

对每个资产 $i$，一阶条件都可以写成同一“边际项 × 收益率”形式：

$$
\begin{aligned}
E_t\!\left[
\frac{V_{t+1}^{\theta/\rho}}{W_{t+1}}R_{i,t+1}
\right]
=\text{same constant for all }i.
\end{aligned}
$$

因而对任意两个资产 $i$ 和 $j$ 取差，就把这个共同常数消掉：

$$
\begin{aligned}
E_t\!\left[
\frac{V_{t+1}^{\theta/\rho}}{W_{t+1}}
(R_{i,t+1}-R_{j,t+1})
\right]=0.
\end{aligned}
$$

再用 homotheticity

$$
\begin{aligned}
V_{t+1}=c_{t+1}^{\rho-1}W_{t+1},
\end{aligned}
$$

就得到

$$
\begin{aligned}
E_t\!\left[
c_{t+1}^{(\rho-1)\theta/\rho}
W_{t+1}^{\theta/\rho-1}
(R_{i,t+1}-R_{j,t+1})
\right]=0.
\end{aligned}
$$

取 $j$ 为 risk-free bond，就得到 asset pricing 的 moment restriction.

**说明：+ Three ingredients behind the Euler equation**
1. **Envelope condition**：在最优点，agent 对“消费一块钱”与“把这一块钱投资出去”无差异，所以

$$
\begin{aligned}
(1-\delta)\rho c_t^{\rho-1}
&=\frac{\partial V_t}{\partial W_t}
=\rho\frac{V_t}{W_t}.
\end{aligned}
$$

于是

$$
\begin{aligned}
V_t=(1-\delta)c_t^{\rho-1}W_t.
\end{aligned}
$$

2. **Homotheticity**：把 $t+1$ 期的 $V_{t+1}$ 也代入同样形式，

$$
\begin{aligned}
V_{t+1}=c_{t+1}^{\rho-1}W_{t+1}.
\end{aligned}
$$

代回 moment restriction，就得到

$$
\begin{aligned}
E_t\!\left[
c_{t+1}^{(\rho-1)\theta/\rho}
W_{t+1}^{\theta/\rho-1}
(R_{i,t+1}-R_{j,t+1})
\right]=0.
\end{aligned}
$$

3. **Risk premium moment restriction**：取 $j$ 为 risk-free bond $R_{f,t}$，

$$
\begin{aligned}
E_t\!\left[
c_{t+1}^{(\rho-1)\theta/\rho}
W_{t+1}^{\theta/\rho-1}
(R_{i,t+1}-R_{f,t})
\right]=0.
\end{aligned}
$$


由一阶条件得到 Euler equation：

$$
\begin{aligned}
1&=E_t\big[M_{t,t+1}R_{i,t+1}\big].
\end{aligned}
$$

把 $M_{t,t+1}$ 写成 state price ratio（[Euler Equation推导](cards/part2/Euler%20Equation%E6%8E%A8%E5%AF%BC.md)）：


$$
\begin{aligned}
M_{t,t+1}
&:=\frac{\pi_{t+1}}{\pi_t} \\
&=\delta^{\frac{\theta}{\rho}}
\left(\frac{c_{t+1}}{c_t}\right)^{\frac{(\rho-1)\theta}{\rho}}
\left(\frac{W_{t+1}}{W_t-c_t}\right)^{\frac{\theta}{\rho}-1} \\
&=\delta^{\frac{\theta}{\rho}}\,
\underbrace{g_{c,t+1}^{\frac{(\rho-1)\theta}{\rho}}}_{\text{consumption growth}}
\underbrace{R_{a,t+1}^{\frac{\theta}{\rho}-1}}_{\text{gross return on wealth}},
\end{aligned}
$$


$$
\begin{aligned}
g_{c,t+1}:=\frac{c_{t+1}}{c_t},
\qquad
R_{a,t+1}:=\frac{W_{t+1}}{W_t-c_t}.
\end{aligned}
$$


**说明：+ 为什么会出现 $\delta^{\theta/\rho}$**
这里不是 “SPD 直接变成 $\delta$”，而是 **time discount factor** $\delta$ 先进入 Epstein-Zin 的递归偏好，再进入 marginal utility / pricing kernel。  
也就是说，$\delta$ 不是从市场里来的，而是从偏好里来的。

连续写法是

$$
\begin{aligned}
\pi_t
&\propto \delta^{\theta/\rho} \cdot \text{marginal utility term},\\
\frac{\pi_{t+1}}{\pi_t}
&=\delta^{\theta/\rho} \cdot \frac{\text{marginal utility term at }t+1}{\text{marginal utility term at }t}.
\end{aligned}
$$

所以 $\delta^{\theta/\rho}$ 会直接留在 SDF 里。

预算约束给出

$$
\begin{aligned}
W_{t+1}
&=(W_t-c_t)R_{a,t+1},
\end{aligned}
$$

所以 $R_{a,t+1}$ 就是 wealth gross return。
又因为

$$
\begin{aligned}
\frac{\rho-1}{\rho}=-\frac1\psi,
\end{aligned}
$$

所以

$$
\begin{aligned}
g_{c,t+1}^{(\rho-1)\theta/\rho}=g_{c,t+1}^{-\theta/\psi}.
\end{aligned}
$$

于是对任意风险资产 $i$，

$$
\begin{aligned}
0
&=E_t\!\left[M_{t,t+1}(R_{i,t+1}-R_{f,t})\right] \\
&=E_t\!\left[\delta^{\theta/\rho} g_{c,t+1}^{(\rho-1)\theta/\rho}R_{a,t+1}^{\theta/\rho-1}(R_{i,t+1}-R_{f,t})\right] \\
&\Longleftrightarrow
E_t\!\left[g_{c,t+1}^{(\rho-1)\theta/\rho}R_{a,t+1}^{\theta/\rho-1}(R_{i,t+1}-R_{f,t})\right]=0.
\end{aligned}
$$

等价地，

$$
\begin{aligned}
E_t\![R_{i,t+1}-R_{f,t}]
&=-\frac{\operatorname{Cov}_t\!\left(M_{t,t+1},R_{i,t+1}-R_{f,t}\right)}{E_t[M_{t,t+1}] }.
\end{aligned}
$$

所以 expected excess return 由 $M_{t,t+1}$ 与收益率的 covariance 决定，也就是 consumption growth 和 wealth return 这两个因子共同定价。

### 6.6 Long-Run Risk


Long-run risk model 的核心不是把消费波动做得更大，而是让 expected consumption growth 本身带有一个 persistent state。

:::{admonition} Definition (Long-Run Risk State Dynamics)
Long-run risk 模型令消费增长含有一个高持久性的预期增长成分：

$$
\begin{aligned}
\tilde{g_{c,t+1}} \equiv \log g_{c,t+1}
&=\mu+x_t+\sigma_c\varepsilon_{c,t+1}, \\
x_{t+1}
&=\phi x_t+\sigma_x\varepsilon_{x,t+1}.
\end{aligned}
$$

这里 $\phi$ 越接近 $1$，长期增长状态越 persistent。

Epstein-Zin 偏好写成

$$
\begin{aligned}
J_t
&=\left[(1-\delta)c_t^{1-\frac1\psi}
+\delta\left(E_t\left[J_{t+1}^{1-\gamma}\right]\right)^{\frac{1-\frac1\psi}{1-\gamma}}\right]^{\frac{1}{1-\frac1\psi}},
\end{aligned}
$$

其中 $\rho=1-\psi^{-1}$，$\theta=1-\gamma$。

:::

### 6.6.0 SDF Derivation

从 6.5 的 Euler equation 出发，

$$
\begin{aligned}
1
&=E_t\!\left[M_{t,t+1}R_{i,t+1}\right], \\
M_{t,t+1}
&=\delta^{\theta/\rho}g_{c,t+1}^{(\rho-1)\theta/\rho}R_{a,t+1}^{\theta/\rho-1},
\qquad
\rho:=1-\psi^{-1},\ \theta:=1-\gamma.
\end{aligned}
$$

取对数得

$$
\begin{aligned}
\log M_{t,t+1}
&=\frac{\theta}{\rho}\log\delta
+\frac{(\rho-1)\theta}{\rho}\log g_{c,t+1}
+\left(\frac{\theta}{\rho}-1\right)\log R_{a,t+1} \\
&=\frac{\theta}{\rho}\log\delta
-\frac{\theta}{\psi\rho}\widehat g_{c,t+1}
+\left(\frac{\theta}{\rho}-1\right)r_{a,t+1},
\end{aligned}
$$

其中

$$
\begin{aligned}
\widehat g_{c,t+1}:=\log g_{c,t+1},
\qquad
r_{a,t+1}:=\log R_{a,t+1}.
\end{aligned}
$$

再用 Campbell--Shiller log-linearization，

$$
\begin{aligned}
r_{a,t+1}
=\log R_{a,t+1}
\approx \widehat g_{c,t+1}+k_1z_{t+1}-z_t+k_0.
\end{aligned}
$$

### 6.6.1 Approximate Solution

考虑一个 claim on aggregate consumption，价格为 $S_t$。定义

$$
\begin{aligned}
z_t:=\log\left(\frac{S_t}{c_t}\right),
\qquad
r_{a,t+1}:=\log R_{a,t+1},
\qquad
\widehat g_{c,t+1}:=\log g_{c,t+1}=\log\left(\frac{c_{t+1}}{c_t}\right).
\end{aligned}
$$

则 equilibrium 中的 wealth-consumption ratio 就是 $z_t$。

由 identity

$$
\begin{aligned}
\frac{S_t}{c_t}
&=
 e^{-r_{a,t+1}}\frac{S_{t+1}+c_{t+1}}{c_t}
 =e^{-r_{a,t+1}}\left(\frac{S_{t+1}}{c_{t+1}}+1\right)g_{c,t+1},
\end{aligned}
$$

取对数得

$$
\begin{aligned}
z_t
&=-r_{a,t+1}+\widehat g_{c,t+1}+\log\left(1+e^{z_{t+1}}\right).
\end{aligned}
$$


设

$$
\begin{aligned}
A_0:=E[z_t],\qquad
k_1:=\frac{e^{A_0}}{1+e^{A_0}},
\qquad
k_0:=\log(1+e^{A_0})-k_1A_0.
\end{aligned}
$$

在 $A_0$ 附近做一阶 Taylor expansion：

$$
\begin{aligned}
\log(1+e^{z_{t+1}})
&\approx \log(1+e^{A_0})
+\frac{e^{A_0}}{1+e^{A_0}}(z_{t+1}-A_0) \\
&=\log(1+e^{A_0})+k_1z_{t+1}-k_1A_0 \\
&=k_0+k_1z_{t+1}.
\end{aligned}
$$

于是

$$
\begin{aligned}
z_t
&=-r_{a,t+1}+\widehat g_{c,t+1}+\log\left(1+e^{z_{t+1}}\right) \\
&\approx -r_{a,t+1}+\widehat g_{c,t+1}+k_0+k_1z_{t+1}.
\end{aligned}
$$

若 $z_t$ bounded（no bubbles），则

$$
\begin{aligned}
\lim_{j\to\infty}k_1^j z_{t+j}=0.
\end{aligned}
$$

迭代 forward 得

$$
\begin{aligned}
z_t
&\approx k_0+\big(\widehat g_{c,t+1}-r_{a,t+1}\big)+k_1z_{t+1} \\
&\approx k_0+\big(\widehat g_{c,t+1}-r_{a,t+1}\big)
+k_1\Big[k_0+\big(\widehat g_{c,t+2}-r_{a,t+2}\big)+k_1z_{t+2}\Big] \\
&\approx (1+k_1)k_0+\big(\widehat g_{c,t+1}-r_{a,t+1}\big)
+k_1\big(\widehat g_{c,t+2}-r_{a,t+2}\big)+k_1^2z_{t+2} \\
&\approx \cdots \\
&\approx \sum_{j=1}^n k_1^{j-1}k_0
+\sum_{j=1}^n k_1^{j-1}\big(\widehat g_{c,t+j}-r_{a,t+j}\big)
+k_1^n z_{t+n} \\
&=k_0\frac{1-k_1^n}{1-k_1}
+\sum_{j=1}^n k_1^{j-1}\big(\widehat g_{c,t+j}-r_{a,t+j}\big)
+k_1^n z_{t+n}.
\end{aligned}
$$

令 $n\to\infty$，再用 no-bubbles 条件

$$
\begin{aligned}
k_1^n z_{t+n}\to 0,
\end{aligned}
$$

就得到

$$
\begin{aligned}
z_t
&\approx \frac{k_0}{1-k_1}
+\sum_{j=1}^{\infty}k_1^{j-1}\big(\widehat g_{c,t+j}-r_{a,t+j}\big).
\end{aligned}
$$

因此 price-dividend ratio 取决于未来消费增长和未来回报的 discounted sum。

### 6.6.2 Long-Run State Loading

猜测线性形式

$$
\begin{aligned}
z_t=A_0+A_1x_t.
\end{aligned}
$$

由上一节的近似递推式

$$
\begin{aligned}
z_t
&\approx -r_{a,t+1}+\widehat g_{c,t+1}+k_0+k_1z_{t+1},
\end{aligned}
$$

又因为

$$
\begin{aligned}
\widehat g_{c,t+1}
&=\mu+x_t+\sigma_c\varepsilon_{c,t+1},\\
E_t[\widehat g_{c,t+1}]
&=\mu+x_t,\\
E_t[x_{t+1}]
&=\phi x_t,
\end{aligned}
$$

代入猜测式 $z_{t+1}=A_0+A_1x_{t+1}$，并对条件期望取一阶近似，

$$
\begin{aligned}
E_t[z_{t+1}]
&=A_0+A_1E_t[x_{t+1}]\\
&=A_0+A_1\phi x_t.
\end{aligned}
$$

同时，把 Euler equation applied to $R_{a,t+1}$ 写成

$$
\begin{aligned}
E_t\!\left[
\exp\!\left(
\frac{\theta}{\rho}\log\delta
-\frac{\theta}{\psi\rho}\widehat g_{c,t+1}
+\frac{\theta}{\rho}\big(\widehat g_{c,t+1}+k_1z_{t+1}-z_t+k_0\big)
\right)
\right]
=1.
\end{aligned}
$$

把 $\widehat g_{c,t+1}$ 的系数合并，

$$
\begin{aligned}
-\frac{\theta}{\psi\rho}\widehat g_{c,t+1}
+\frac{\theta}{\rho}\widehat g_{c,t+1}
&=\frac{\theta}{\rho}(1-\psi^{-1})\widehat g_{c,t+1},
\end{aligned}
$$

所以 $\psi$ 正是从这里进入系数匹配：它决定 consumption growth 项前面的斜率，而由于

$$
\begin{aligned}
\widehat g_{c,t+1}
=\mu+x_t+\sigma_c\varepsilon_{c,t+1},
\end{aligned}
$$

收集 $x_t$ 的线性项时，就会出现 $(1-\psi^{-1})x_t$。
因此

$$
\begin{aligned}
z_t
&\approx E_t\!\left[-r_{a,t+1}+\widehat g_{c,t+1}+k_0+k_1z_{t+1}\right] \\
&\approx \text{const}+(1-\psi^{-1})x_t+k_1\big(A_0+A_1\phi x_t\big).
\end{aligned}
$$

这里的 $(1-\psi^{-1})x_t$ 来自 Euler equation applied to $R_{a,t+1}$ 后，对 $x_t$ 的线性项收集；常数项都并入 $\text{const}$。再代入左边的猜测式

$$
\begin{aligned}
A_0+A_1x_t
&\approx \text{const}+(1-\psi^{-1})x_t+k_1\big(A_0+A_1\phi x_t\big).
\end{aligned}
$$

把常数项并入 $A_0$，收集 $x_t$ 的系数，

$$
\begin{aligned}
 A_1
&=(1-\psi^{-1})+k_1\phi A_1 \\
\Longrightarrow\qquad
A_1
&=\frac{1-\psi^{-1}}{1-k_1\phi}.
\end{aligned}
$$

所以：
- $\psi>1$ 时，price-dividend ratio 对长期增长状态更敏感；
- $\phi$ 越接近 $1$，长期风险越 persistent，$A_1$ 越大。

### 6.6.3 Pricing of Shocks

Euler equation applied to $R_{a,t+1}$ gives

$$
\begin{aligned}
1
&=E_t\!\left[M_{t,t+1}R_{a,t+1}\right] \\
&=E_t\!\left[\exp\!\big(\log M_{t,t+1}+r_{a,t+1}\big)\right] \\
&=E_t\!\left[
\exp\!\left(
\frac{\theta}{\rho}\log\delta
-\frac{\theta}{\psi\rho}\widehat g_{c,t+1}
+\frac{\theta}{\rho}r_{a,t+1}
\right)
\right] \\
&\approx E_t\!\left[
\exp\!\left(
\frac{\theta}{\rho}\log\delta
-\frac{\theta}{\psi\rho}\widehat g_{c,t+1}
+\frac{\theta}{\rho}\big(\widehat g_{c,t+1}+k_1z_{t+1}-z_t+k_0\big)
\right)
\right]
=1.
\end{aligned}
$$

因此可以把 pricing kernel 的创新写成

$$
\begin{aligned}
\widetilde M_{t,t+1}-E_t[\widetilde M_{t,t+1}]
&=\left(\frac{\theta}{\rho}(1-\psi^{-1})-1\right)\sigma_c\varepsilon_{c,t+1}
+\left(\frac{\theta}{\rho}-1\right)k_1A_1\sigma_x\varepsilon_{x,t+1} \\
&=\left(\frac{1-\gamma}{1-\psi^{-1}}(1-\psi^{-1})-1\right)\sigma_c\varepsilon_{c,t+1}
+\left(\frac{1-\gamma}{1-\psi^{-1}}-1\right)k_1A_1\sigma_x\varepsilon_{x,t+1} \\
&=-\gamma\sigma_c\varepsilon_{c,t+1}
+\frac{\psi^{-1}-\gamma}{1-\psi^{-1}}\,k_1A_1\sigma_x\varepsilon_{x,t+1}.
\end{aligned}
$$

其中上面第一行来自

$$
\begin{aligned}
\widetilde M_{t,t+1}
&:=\log M_{t,t+1}+r_{a,t+1} \\
&\approx \frac{\theta}{\rho}\log\delta
-\frac{\theta}{\psi\rho}\widehat g_{c,t+1}
+\frac{\theta}{\rho}\big(\widehat g_{c,t+1}+k_1z_{t+1}-z_t+k_0\big),
\end{aligned}
$$


再代入

$$
\begin{aligned}
\widehat g_{c,t+1}
&=\mu+x_t+\sigma_c\varepsilon_{c,t+1},\\
E_t[\widehat g_{c,t+1}]
&=\mu+x_t,\\
E_t[x_{t+1}]
&=\phi x_t,\\
z_t&=A_0+A_1x_t,\\
z_{t+1}
&=A_0+A_1x_{t+1}
=A_0+A_1(\phi x_t+\sigma_x\varepsilon_{x,t+1}),
\end{aligned}
$$

于是

$$
\begin{aligned}
E_t[z_{t+1}]
&=A_0+A_1E_t[x_{t+1}]\\
&=A_0+A_1\phi x_t,
\end{aligned}
$$

从而

$$
\begin{aligned}
E_t[\widetilde M_{t,t+1}]
&\approx \frac{\theta}{\rho}\log\delta
-\frac{\theta}{\psi\rho}E_t[\widehat g_{c,t+1}]
+\frac{\theta}{\rho}\big(E_t[\widehat g_{c,t+1}]+k_1E_t[z_{t+1}]-z_t+k_0\big) \\
&=\frac{\theta}{\rho}\log\delta
-\frac{\theta}{\psi\rho}(\mu+x_t)
+\frac{\theta}{\rho}\big(\mu+x_t+k_1(A_0+A_1\phi x_t)-(A_0+A_1x_t)+k_0\big) \\
&=\left[
\frac{\theta}{\rho}\log\delta
-\frac{\theta}{\psi\rho}\mu
+\frac{\theta}{\rho}\big(\mu+k_1A_0-A_0+k_0\big)
\right] \\
&\qquad
+\left[
\frac{\theta}{\rho}(1-\psi^{-1})
+\frac{\theta}{\rho}k_1A_1\phi
-\frac{\theta}{\rho}A_1
\right]x_t.
\end{aligned}
$$


只保留 innovation 部分：

$$
\begin{aligned}
\widetilde M_{t,t+1}-E_t[\widetilde M_{t,t+1}]
&=\left(-\frac{\theta}{\psi\rho}+\frac{\theta}{\rho}\right)\sigma_c\varepsilon_{c,t+1}
+\frac{\theta}{\rho}k_1A_1\sigma_x\varepsilon_{x,t+1}
-k_1A_1\sigma_x\varepsilon_{x,t+1} \\
&=\left(\frac{\theta}{\rho}(1-\psi^{-1})-1\right)\sigma_c\varepsilon_{c,t+1}
+\left(\frac{\theta}{\rho}-1\right)k_1A_1\sigma_x\varepsilon_{x,t+1}.
\end{aligned}
$$


这说明：
- consumption shocks 被定价；
- consumption growth / long-run state shocks 也被定价；
- 如果 $\psi>1$ 且 $x_t$ highly persistent，那么长期增长风险的价格可以很高。

因此可以把 pricing kernel 近似看成两个因子的乘积：

$$
\begin{aligned}
\widetilde M_{t,t+1}
\approx
\delta^\theta g_{c,t+1}^{-\theta/\psi}R_{a,t+1}^{\theta-1}.
\end{aligned}
$$

其中

$$
\begin{aligned}
g_{c,t+1}^{-\theta/\psi}
\end{aligned}
$$

是 consumption-growth factor，

$$
\begin{aligned}
R_{a,t+1}^{\theta-1}
\end{aligned}
$$

是 wealth-return factor。  
这就是 long-run risk 里“消费冲击 + 财富回报冲击”共同定价资产的来源。

:::{admonition} Lemma: Pricing Long-Run Growth Risk
在 Epstein-Zin 偏好下，风险溢价不仅取决于当期消费冲击，也取决于长期增长预期冲击；因此模型能让“长期增长风险”获得较高的风险价格。
:::

:::{admonition} Lemma: Return Predictability from Persistent Growth
当 $\psi>1$ 且 $x_t$ 高度持久时，价格—股利比会对长期增长预期更敏感，从而有助于解释高股权溢价与回报可预测性。
:::
