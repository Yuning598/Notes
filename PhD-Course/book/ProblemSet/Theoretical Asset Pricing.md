# Theoretical Asset Pricing

## Question 1. Market Completeness, State Prices, and Arrow Security
Consider a two-period economy ($t=0, 1$) with three possible future states $\Omega = \{\omega_1, \omega_2, \omega_3\}$. The market contains two primary assets:

1. **A Risk-free Bond**: Provides a payoff of $1$ in all states. Its current price is $P_f = 0.95$.

2. **A Risky Stock**: Provides a payoff vector $X_s = [1.2, 1.0, 0.8]^\top$. Its current price is $P_s = 0.90$.

Assume there are no arbitrage opportunities in the market.

**Required:**
1. Determine if the market is complete.
2. Derive the set of all strictly positive state prices $(q_1, q_2, q_3)$.
3. Calculate the no-arbitrage price range for an **Arrow Security** that pays $1$ if state $\omega_3$ occurs and $0$ otherwise.
4. Explain the arbitrage strategy if the price of this Arrow Security were to be $0.20$.


::::{solution}

### 1.1 市场完备性 (Market Completeness)

The payoff matrix $D$ is:

$$
\begin{aligned}
D
&=
\begin{pmatrix}
1 & 1 & 1 \\
1.2 & 1.0 & 0.8
\end{pmatrix}^{\top} =
\begin{pmatrix}
1 & 1.2 \\
1 & 1.0 \\
1 & 0.8
\end{pmatrix}.
\end{aligned}
$$

- The number of states $S = 3$.
- The number of linearly independent assets $N$ is the rank of $D$:
  见 矩阵秩 rank。（行/列变换后非零行/列的数量就是秩），所以$\operatorname{rank}(D)=2.$
- **Conclusion**:
  - If $N < S$, the market is **incomplete**. The state price vector $q$ is not unique. (this question)
  - If $N = S$, the market is **complete**. In the no-arbitrage case, the state price vector $q$ is unique.
  - If $N > S$, this cannot happen in a finite-state model for payoff rank, because $\operatorname{rank}(D)\le S$; equivalently, the payoff space cannot have more than $S$ linearly independent directions.

### 1.2 求解状态价格 (Solving for State Prices)

Based on the Law of One Price, $P = D^\top q$:

$$
\left\{
\begin{aligned}
q_1+q_2+q_3&=0.95,\\
1.2q_1+1.0q_2+0.8q_3&=0.90.
\end{aligned}
\right.
$$

To find the relationship, we express $q_1$ and $q_2$ in terms of $q_3$:
- From (1): $q_2 = 0.95 - q_1 - q_3$.
- Substitute into (2): $1.2q_1 + (0.95 - q_1 - q_3) + 0.8q_3 = 0.90$

$$
\begin{aligned}
0.2q_1-0.2q_3&=-0.05\\
\Longleftrightarrow\quad
q_1&=q_3-0.25.
\end{aligned}
$$

- Substitute $q_1$ back to find $q_2$: $q_2 = 0.95 - (q_3 - 0.25) - q_3 \implies \mathbf{q_2 = 1.20 - 2q_3}$

### 1.3 无套利价格区间 (No-Arbitrage Price Range)

According to the **First Fundamental Theorem of Asset Pricing**, no arbitrage implies the existence of a **strictly positive** state price vector ($q_s > 0$ for all $s$):
1. $q_1 > 0 \implies q_3 - 0.25 > 0 \implies q_3 > 0.25$
2. $q_2 > 0 \implies 1.20 - 2q_3 > 0 \implies q_3 < 0.60$
3. $q_3 > 0$

Therefore, the no-arbitrage price for the State-3 Arrow Security ($P_{A3} = q_3$) must fall within the interval:

$$
\begin{aligned}
0.25<P_{A3}<0.60.
\end{aligned}
$$

### 1.4 套利策略 (Arbitrage Strategy)

**Scenario: $P_{A3} = 0.20$** (Price is below the lower bound).

If $P_{A3} = 0.20$, then $q_3 = 0.20$. Plugging this into our equations:
- $q_1 = 0.20 - 0.25 = -0.05$
- $q_2 = 1.20 - 2(0.20) = 0.80$

**Arbitrage Mechanism（套利构造）:**

考虑组合

$$
\begin{aligned}
\theta_f=-5,\qquad \theta_s=5,\qquad \theta_{A3}=1.
\end{aligned}
$$

其期末支付为

$$
\begin{aligned}
-5\begin{pmatrix}1\\1\\1\end{pmatrix}
+5\begin{pmatrix}1.2\\1.0\\0.8\end{pmatrix}
+1\begin{pmatrix}0\\0\\1\end{pmatrix}
=\begin{pmatrix}1\\0\\0\end{pmatrix}.
\end{aligned}
$$

因此该组合复制了 **Arrow 1**：state 1 支付 1，其余状态支付 0。其初始成本为

$$
\begin{aligned}
-5(0.95)+5(0.90)+1(0.20)=-0.05<0.
\end{aligned}
$$

所以这是一个套利组合：$t=0$ 时刻净流入 $0.05$，而 $t=1$ 时刻各状态下净支付都非负，且在 state 1 严格为正。

::::

---



## Question 2. Representative Investor, Arrow Security Pricing, and Risk-Free Rate
Consider a two-period economy ($t=0, 1$) with three possible future states at $t=1$, denoted by $s \in \{1, 2, 3\}$, each occurring with probability $\pi_s = 1/3$.
The economy is populated by a **Representative Investor** with a time-additive power utility function (CRRA):

$$
\begin{aligned}
U(c_0,\tilde c_1)
&=u(c_0)+\delta E[u(\tilde c_1)],
\qquad
u(c)=\frac{c^{1-\rho}}{1-\rho}.
\end{aligned}
$$

where $\rho > 0$ is the coefficient of relative risk aversion and $\delta \in (0, 1)$ is the time discount factor.
Aggregate endowment (consumption) at $t=0$ is $c_0$. Aggregate consumption at $t=1$ in each state is given by the vector $\mathbf{c}_1 = (c_{1,1}, c_{1,2}, c_{1,3})$.

**Required:**
1. **State Price Derivation**: Use the representative investor's First-Order Condition (FOC) to derive the formula for the $j$-th **Arrow Security price** ($q_j$).
2. **Risk-Free Rate**: Derive the expression for the gross risk-free rate $R_f$ in this economy.
3. **Numerical Calculation**: Assume $c_0 = 1$, $\mathbf{c}_1 = (1.1, 1.0, 0.9)$, $\delta = 0.95$, and $\rho = 2$. Calculate the price of the Arrow Security for State 1 ($q_1$) and the risk-free rate $R_f$.


::::{solution}

### 2.1 Arrow Security Price ($q_j$) 的数学推导

在代表性投资者模型中，均衡状态下的资产价格由该投资者的边际替代率（MRS）决定 。 Arrow Security $j$ 的定义是在状态 $j$ 支付 1 单位，其余状态支付 0 。

- **投资者优化问题**：

$$
\left\{
\begin{aligned}
\max_{c_0,\{c_{1,s}\}}\quad
&u(c_0)+\delta\sum_{s=1}^3\pi_su(c_{1,s}),\\
\text{s.t.}\quad
&c_0+\sum_{s=1}^3q_sc_{1,s}=W_0.
\end{aligned}
\right.
$$

代表性投资者在初始财富 $W_0$ 给定时，选择 $t=0$ 消费 $c_0$ 和各状态下的 $t=1$ 消费 $c_{1,s}$；约束式表示这些消费必须能被现值预算买下，而 $q_s$ 就是“在状态 $s$ 下多消费 1 单位的现值成本”。（endowment = consumption quantity，$q_s c_{1,s}$表示price×quantity=总金额or财富量）
- **一阶条件 (FOC)**：
    对于任意状态 $j$ 的消费 $c_{1,j}$，其 Lagrange 乘子对应的条件为：

$$
\begin{aligned}
\delta\pi_ju'(c_{1,j})&=\lambda q_j.
\end{aligned}
$$

    对于 $t=0$ 的消费 $c_0$：

$$
\begin{aligned}
u'(c_0)&=\lambda.
\end{aligned}
$$

- **消除 $\lambda$ 得到状态价格公式**：

$$
\begin{aligned}
q_j&=\delta\pi_j\frac{u'(c_{1,j})}{u'(c_0)}.
\end{aligned}
$$

- **代入 CRRA 效用函数 $u'(c) = c^{-\rho}$**：

$$
\begin{aligned}
q_j
&=
\delta\pi_j
\left(\frac{c_{1,j}}{c_0}\right)^{-\rho}.
\end{aligned}
$$

### 2.2 Risk-Free Rate ($R_f$) 的推导

无风险债券在所有状态下都支付 1。其价格 $P_f$ 是所有状态价格之和 ：

$$
\begin{aligned}
P_f
&=\sum_{s=1}^3q_s\\
&=\sum_{s=1}^3\delta\pi_s
\left(\frac{c_{1,s}}{c_0}\right)^{-\rho}\\
&=
E\left[
\delta
\left(\frac{\tilde c_1}{c_0}\right)^{-\rho}
\right].
\end{aligned}
$$

根据 $R_f = 1/P_f$，我们得到：

$$
\begin{aligned}
R_f
&=
\frac{1}{
\delta E\left[
(\tilde c_1/c_0)^{-\rho}
\right]
}.
\end{aligned}
$$

### 2.3 数值计算 (Numerical Calculation)

已知条件：$\pi_s = 1/3, c_0 = 1, \mathbf{c}_1 = (1.1, 1.0, 0.9), \delta = 0.95, \rho = 2$。
- **计算 $q_1$**：

$$
\begin{aligned}
q_1
&=
0.95\times\frac{1}{3}\times(1.1/1)^{-2}\\
&=
0.3167\times0.8264
\approx0.2617.
\end{aligned}
$$

- **计算其余状态价格**：
    $q_2 = 0.95 \times \frac{1}{3} \times (1.0 / 1)^{-2} = 0.3167$
    $q_3 = 0.95 \times \frac{1}{3} \times (0.9 / 1)^{-2} = 0.3167 \times 1.2346 \approx 0.3909$
- **计算 $R_f$**：
    $P_f = q_1 + q_2 + q_3 = 0.2617 + 0.3167 + 0.3909 = 0.9693$
    $R_f = 1 / 0.9693 \approx \mathbf{1.0317}$ (即 3.17% 的无风险利率)

::::

---


## Question 3. Linear SDF Implies CAPM and MVF
证明：如果 SDF $m$ 是市场组合收益率 $R_m$ 的线性函数，那么 CAPM 成立，且 $R_m$ 必须位于均值-方差有效边界（MVF）上。


::::{solution}

### 3.1 线性 SDF 推出 CAPM

不失一般性，写成 $m=a-bR_m$，其中 $b\neq 0$。

$$
\begin{aligned}
1&=E[mR_i]=E[m]E[R_i]-b\,\operatorname{Cov}(R_i,R_m),\\
1&=E[mR_m]=E[m]E[R_m]-b\,\operatorname{Var}(R_m).
\end{aligned}
$$

由 $R_f=1/E[m]$，

$$
\begin{aligned}
E[R_i]-R_f
&=\frac{b}{E[m]}\operatorname{Cov}(R_i,R_m),\\
E[R_m]-R_f
&=\frac{b}{E[m]}\operatorname{Var}(R_m).
\end{aligned}
$$

因而

$$
\begin{aligned}
E[R_i]-R_f
&=\frac{\operatorname{Cov}(R_i,R_m)}{\operatorname{Var}(R_m)}\big(E[R_m]-R_f\big)\\
&=\beta_i\big(E[R_m]-R_f\big).
\end{aligned}
$$

这就是 CAPM. 又因为 $R_m$ 自己满足 $\beta_m=1$，并且它是同均值 risky portfolio 里方差最小的那个，所以 $R_m$ 必在 mean-variance efficient frontier 上。更完整的等价证明见 CAPM and Mean-Variance Efficiency。

::::

---



## Question 4. State Prices, SDF, and Risk-Neutral Pricing

State Prices, SDF, and Risk-Neutral Pricing


::::{solution}

设状态 $s$ 的 physical probability 为 $\pi_s$，SDF 为 $m_s$，state price 为 $q_s$，risk-neutral probability 为 $\psi_s$。

$$
\begin{aligned}
q_s&=\pi_s m_s,\\
\psi_s&:=\frac{q_s}{\sum_t q_t}=\frac{\pi_s m_s}{E[m]},\\
\sum_s \psi_s&=1.
\end{aligned}
$$

又因为

$$
\begin{aligned}
R_f&=\frac{1}{\sum_s q_s}=\frac{1}{E[m]},
\end{aligned}
$$

所以

$$
\begin{aligned}
q_s&=\frac{\psi_s}{R_f},\\
\psi_s&=R_f q_s.
\end{aligned}
$$

对任意到期 payoff $X=(X_s)$，

$$
\begin{aligned}
P
&=\sum_s q_s X_s\\
&=\frac{1}{R_f}\sum_s \psi_s X_s\\
&=\frac{1}{R_f}E^{\mathbb Q}[X].
\end{aligned}
$$

这里 $E^{\mathbb Q}[X]:=\sum_s \psi_s X_s$ 是 risk-neutral expectation。等价地，也可写成 $P=E[mX]$。

::::

---



## Question 5. No-Dividend Stock: American Call Equals European Call

证明对于一个不支付红利（No Dividends）的股票，美式看涨期权（American Call Option）的价值等于欧式看涨期权（European Call Option），且提前行权（Early Exercise）永远不是最优的。


::::{solution}

### 5.1 美式看涨期权的提前行权条件

设到期时刻为 $T$，当前时刻为 $t<T$，$\tau=T-t$。美式看涨期权在 $t$ 立即行权的价值为

$$
\begin{aligned}
\text{Immediate Exercise Value}
=S_t-K.
\end{aligned}
$$

若选择继续持有到到期，其欧式看涨期权价值为

$$
\begin{aligned}
C_t^{E}
=E_t^{\mathbb Q}\!\left[e^{-r\tau}(S_T-K)^+\right].
\end{aligned}
$$

### 5.2 为什么不该提前行权

因为 $(x)^+\ge x$，所以

$$
\begin{aligned}
C_t^{E}
&=E_t^{\mathbb Q}\!\left[e^{-r\tau}(S_T-K)^+\right] \\
&\ge E_t^{\mathbb Q}\!\left[e^{-r\tau}(S_T-K)\right] \\
&=E_t^{\mathbb Q}\!\left[e^{-r\tau}S_T\right]-K e^{-r\tau}.
\end{aligned}
$$

对不支付红利的股票，贴现股价是 $\mathbb Q$-martingale，因此

$$
\begin{aligned}
E_t^{\mathbb Q}\!\left[e^{-r\tau}S_T\right]=S_t.
\end{aligned}
$$

于是

$$
\begin{aligned}
C_t^{E}
&\ge S_t-K e^{-r\tau} \\
&\ge S_t-K,
\end{aligned}
$$

其中最后一步用到 $e^{-r\tau}\le 1$（标准情形 $r\ge 0$）。

因此，立即行权的价值从不超过继续持有到到期的价值；也就是说，**提前行权永远不是最优的**。

1. **看涨期权没有义务，但有选择权**。你现在不行权，损失的只是一次行权机会；但你保留了未来继续上涨的全部收益。
2. **No Dividends 意味着提前行权没有“额外收入”补偿**。若现在行权，你只是把执行价 $K$ 提前付出，并立刻持有股票；但这只会让你提前锁定成本，却不会因为持有股票而损失任何现金红利。于是你得到的只是“更早付款”，失去的是“未来上涨的上行空间”。

提前行权的即时价值严格低于继续持有的期望价值。只有当股票会发放红利时，提前行权才可能为了截取红利而变得有意义。

### 5.3 无红利 vs 有红利：提前行权的两种情况

设股票在某个除息日前会发放确定红利 $D>0$，除息前价格为 $S_t$，除息后价格约为 $S_t-D$。

**Case 1: No Dividends**

若 $D=0$，则提前行权的即时价值是

$$
\begin{aligned}
V_{\text{exercise}}&=S_t-K,
\end{aligned}
$$

而继续持有到到期的价值满足

$$
\begin{aligned}
V_{\text{hold}}
&=E_t^{\mathbb Q}\!\left[e^{-r\tau}(S_T-K)^+\right]\\
&\ge S_t-Ke^{-r\tau}\\
&\ge S_t-K.
\end{aligned}
$$

所以

$$
\begin{aligned}
V_{\text{hold}}\ge V_{\text{exercise}},
\end{aligned}
$$

提前行权不优。

**Case 2: Dividends**

设股票在除息时刻 $t_d\in(t,T)$ 支付确定红利 $D>0$，除息前股价为 $S_{t_d^-}$，除息后股价为 $S_{t_d^+}=S_{t_d^-}-D$。

若在 $t$ 立即行权，则得到

$$
\begin{aligned}
V_{\text{exercise}}&=S_t-K.
\end{aligned}
$$

### 5.4 American Call = European Call

American call 的价格是所有可行行权时点价值的上确界。由于任何提前行权都不优于持有到到期，而到期时美式与欧式的 payoff 相同，所以

$$
\begin{aligned}
C_t^{A}
=C_t^{E}.
\end{aligned}
$$

若不立即行权，而是在 $t_d$ 前继续持有，则期权在除息前的价值至少包含“未来仍可参与股价上涨”的部分；但一旦公司发放红利，股票价格会在除息时下降 $D$。于是继续持有的价值可以写成

$$
\begin{aligned}
V_{\text{hold}}
&=E_t^{\mathbb Q}\!\left[e^{-r(t_d-t)} C_{t_d}\right],
\end{aligned}
$$

其中 $C_{t_d}$ 是除息前的期权价值。

比较“现在行权”和“继续持有到除息前”时，关键只看红利损失：

$$
\begin{aligned}
V_{\text{hold}}-V_{\text{exercise}}
&\ge e^{-r(t_d-t)}D - \Big(K - K e^{-r(t_d-t)}\Big).
\end{aligned}
$$

因此，只要

$$
\begin{aligned}
e^{-r(t_d-t)}D&>K\big(1-e^{-r(t_d-t)}\big),
\end{aligned}
$$

就有

$$
\begin{aligned}
V_{\text{hold}}&<V_{\text{exercise}},
\end{aligned}
$$

提前行权可能是最优的。

等价地，写成

$$
\begin{aligned}
D&>K\big(e^{r(t_d-t)}-1\big),
\end{aligned}
$$

说明：**红利现值足够大时，提前行权为了拿红利是有可能最优的**。这就是有红利股票和无红利股票的本质差别。

::::

---


## Question 6. American vs European Options as an Optimal Stopping Problem

考虑无套利市场下的标的资产价格过程

$$
\begin{aligned}
dS_t&=(r-q)S_t\,dt+\sigma S_t\,dW_t^{\mathbb Q},
\qquad 0\le t\le T.
\end{aligned}
$$

其中 $r>0$ 为无风险利率，$q\ge 0$ 为连续分红率，$\sigma>0$ 为常数波动率。执行价为 $K>0$。

记欧式看涨、欧式看跌、美式看涨、美式看跌的价值函数分别为

$$
\begin{aligned}
C^E(t,S),\quad P^E(t,S),\quad C^A(t,S),\quad P^A(t,S).
\end{aligned}
$$

**Required:**
1. 写出欧式看涨与欧式看跌在风险中性测度下的定价表达式，并说明为什么它们是“纯定到期支付”问题，而不是 optimal stopping 问题。

2. 证明：当 $q=0$ 时，美式看涨期权从不应提前行权，因此

$$
\begin{aligned}
C^A(t,S)=C^E(t,S).
\end{aligned}
$$

要求同时给出：
（1）一个 no-arbitrage / convexity 证明
（2）一个 dynamic programming / optimal stopping 视角的解释

3. 讨论为什么美式看跌期权即使在 $q=0$ 时也可能提前行权。要求解释：

$$
\begin{aligned}
\text{“提前收到 }K\text{ 的时间价值”}
\quad\text{与}\quad
\text{“继续持有的下行期权价值”}
\end{aligned}
$$

之间的权衡。

4. 对美式期权写出变分不等式（variational inequality）。以美式看跌为例，若记价值函数为 $P^A(t,S)$，生成元为

$$
\begin{aligned}
\mathcal Lf
&=f_t+(r-q)Sf_S+\frac12\sigma^2S^2f_{SS}.
\end{aligned}
$$

则写出其 continuation region 与 exercise region 中分别满足的方程，并合并成一个变分不等式。

5. 设美式看跌的最优行权边界为 $S^*(t)$。写出并解释以下条件的经济含义：

$$
\begin{aligned}
P^A(t,S^*(t))&=K-S^*(t),\\
P_S^A(t,S^*(t))&=-1.
\end{aligned}
$$

并说明第二个条件为什么被称为 smooth pasting。

6. 现在令 $q>0$。讨论美式看涨期权何时可能提前行权，并解释为什么“有分红”会改变第 2 问中的结论。你不需要给 closed-form solution，但需要清楚说明：**分红收益** v.s. **推迟支付执行价所带来的好处**的比较逻辑。

7. 比较欧式期权与美式期权在数学结构上的不同。要求至少从以下三个角度组织回答：（1）payoff timing；（2）PDE vs. variational inequality；（4）free boundary / optimal stopping。

8. （加分问）若把美式期权价格问题离散化到有限差分网格，说明：为什么欧式问题对应线性系统，而美式问题对应带 obstacle 的互补问题。


::::{solution}

### 6.1 解析框架

这道题的核心是把

$$
\begin{aligned}
\text{European option}
\quad\text{vs.}\quad
\text{American option}
\end{aligned}
$$

的区别统一到

$$
\begin{aligned}
\text{fixed exercise date}
\quad\text{vs.}\quad
\text{optimal stopping time}
\end{aligned}
$$

上来理解。

**1. 欧式期权**

只能在 $T$ 行权，所以价格直接写成 risk-neutral expectation：

$$
\begin{aligned}
C^E(t,S)&=E_t^{\mathbb Q}\!\left[e^{-r(T-t)}(S_T-K)^+\right],\\
P^E(t,S)&=E_t^{\mathbb Q}\!\left[e^{-r(T-t)}(K-S_T)^+\right].
\end{aligned}
$$

因而它是 terminal payoff pricing problem，不是 optimal stopping problem。

**2. 无红利美式看涨**

当 $q=0$ 时，提前行权的即时价值为

$$
\begin{aligned}
S_t-K,
\end{aligned}
$$

而继续持有至少值

$$
\begin{aligned}
E_t^{\mathbb Q}\!\left[e^{-r(T-t)}(S_T-K)^+\right]
\ge S_t-Ke^{-r(T-t)}
\ge S_t-K.
\end{aligned}
$$

所以提前行权不优，从而

$$
\begin{aligned}
C^A(t,S)=C^E(t,S).
\end{aligned}
$$

**3. 美式看跌**

提前行权的收益是立刻拿到

$$
\begin{aligned}
K-S_t,
\end{aligned}
$$

这意味着可以更早收到 $K$ 的时间价值；因此即使 $q=0$，提前行权也可能最优。

**4. 变分不等式与自由边界**

美式期权价格满足“继续 vs. 行权”的逐点比较。以 put 为例，

$$
\begin{aligned}
0
=
\max\Big\{
\mathcal L P^A-rP^A,\;
(K-S)-P^A
\Big\}.
\end{aligned}
$$

continuation region 内满足 PDE，exercise region 内满足

$$
\begin{aligned}
P^A=K-S.
\end{aligned}
$$

二者交界处的自由边界 $S^*(t)$ 由

$$
\begin{aligned}
P^A(t,S^*(t))&=K-S^*(t),\\
P_S^A(t,S^*(t))&=-1
\end{aligned}
$$

pin down。

**5. 有分红的美式看涨**

当 $q>0$ 时，提前行权能更早持有股票、截取分红；因此“推迟支付执行价”的好处不再必然压过“提早拿分红”的好处，美式看涨就可能提前行权。

**6. 数值方法**

欧式问题通常是线性 PDE；美式问题因为有 obstacle / early exercise constraint，会变成 free-boundary / complementarity problem。有限差分离散后，对应的是线性系统 vs. 带障碍约束的离散互补系统。

::::

---


## Question 7. Grossman-Stiglitz：信息价值与最高支付意愿

设代理人具有 CARA utility，风险厌恶系数为 $\lambda>0$，初始确定财富为 $m$。风险资产终值为 $v$，当前价格为 $p$，代理人选择持仓 $X$，则终值财富为

$$
\begin{aligned}
W&=m+X(v-p).
\end{aligned}
$$

交易前代理人可以支付信息成本 $c$ 观察私人信号 $s$；若不支付，则只能像 uninformed trader 一样从价格 $p$ 中学习。记任意信息集 $\mathcal I$ 下的后验矩为

$$
\begin{aligned}
\mu_{\mathcal I}&:=E[v\mid \mathcal I],\\
\Sigma_{\mathcal I}&:=\operatorname{Var}(v\mid \mathcal I).
\end{aligned}
$$

1. 对任意信息集 $\mathcal I$，写出 CARA-Normal 下的 certainty equivalent，并求最优持仓 $X^*(\mathcal I)$。
2. 若代理人支付成本 $c$ 观察到私人信号 $s$，写出她的 certainty equivalent $CE_I(s)$。
3. 若代理人不买信息、只从价格中学习，写出她的 certainty equivalent $CE_U(p)$。
4. 推导她在交易前对信息的最高支付意愿 $c^*$。
5. 解释为什么：若价格完全揭示私人信息，则不可能与正的信息获取成本同时成立。


::::{solution}

### 7.1 任意信息集下的最优持仓与 certainty equivalent

在信息集 $\mathcal I$ 下，CARA-Normal 等价于最大化

$$
\begin{aligned}
CE(\mathcal I)
&:=\max_X\left\{m+X(\mu_{\mathcal I}-p)-\frac{\lambda}{2}X^2\Sigma_{\mathcal I}\right\}.
\end{aligned}
$$

一阶条件为

$$
\begin{aligned}
\frac{\partial CE(\mathcal I)}{\partial X}
&=\mu_{\mathcal I}-p-\lambda X\Sigma_{\mathcal I}=0
\end{aligned}
$$

所以

$$
\begin{aligned}
X^*(\mathcal I)
&=\frac{\mu_{\mathcal I}-p}{\lambda\Sigma_{\mathcal I}}.
\end{aligned}
$$

代回得到

$$
\begin{aligned}
CE(\mathcal I)
&=m+X^*(\mathcal I)(\mu_{\mathcal I}-p)-\frac{\lambda}{2}\big(X^*(\mathcal I)\big)^2\Sigma_{\mathcal I}\\
&=m+\frac{(\mu_{\mathcal I}-p)^2}{\lambda\Sigma_{\mathcal I}}-\frac{1}{2}\frac{(\mu_{\mathcal I}-p)^2}{\lambda\Sigma_{\mathcal I}}\\
&=m+\frac{(\mu_{\mathcal I}-p)^2}{2\lambda\Sigma_{\mathcal I}}.
\end{aligned}
$$

因此

$$
\begin{aligned}
X^*(\mathcal I)&=\frac{\mu_{\mathcal I}-p}{\lambda\Sigma_{\mathcal I}},\\
CE(\mathcal I)&=m+\frac{(\mu_{\mathcal I}-p)^2}{2\lambda\Sigma_{\mathcal I}}.
\end{aligned}
$$

### 7.2 买入私人信息时的 certainty equivalent

若先支付信息成本 $c$ 再观察到私人信号 $s$，则信息集变成 $\mathcal I=\sigma(s)$，于是

$$
\begin{aligned}
CE_I(s)
&=m-c+\frac{(E[v\mid s]-p)^2}{2\lambda\operatorname{Var}(v\mid s)}.
\end{aligned}
$$

其中 $-c$ 表示购买信息的确定成本。

### 7.3 不买信息、只从价格学习时的 certainty equivalent

若不支付成本，则代理人只能利用价格所包含的信息，因此

$$
\begin{aligned}
CE_U(p)
&=m+\frac{(E[v\mid p]-p)^2}{2\lambda\operatorname{Var}(v\mid p)}.
\end{aligned}
$$

这里的关键区别是：有私人信号时后验来自 $s$，不买信息时后验只来自 $p$。

### 7.4 最高支付意愿

交易前尚未看到信号 realizations，所以若信息成本为 $c$，买信息相对不买信息的事前净增益为

$$
\begin{aligned}
\Delta(c)
&:=E\big[CE_I(s)-CE_U(p)\big]\\
&=-c+\frac{1}{2\lambda}E\left[
\frac{(E[v\mid s]-p)^2}{\operatorname{Var}(v\mid s)} -
\frac{(E[v\mid p]-p)^2}{\operatorname{Var}(v\mid p)}
\right].
\end{aligned}
$$

因此无差异时愿意支付的最高信息成本为

$$
\begin{aligned}
c^*
&=\frac{1}{2\lambda}E\left[
\frac{(E[v\mid s]-p)^2}{\operatorname{Var}(v\mid s)} -
\frac{(E[v\mid p]-p)^2}{\operatorname{Var}(v\mid p)}
\right].
\end{aligned}
$$

于是

$$
\begin{aligned}
\text{买信息}
&\Longleftrightarrow \Delta(c)\ge 0
\Longleftrightarrow c\le c^*,\\
\text{无差异内部均衡}
&\Longleftrightarrow c=c^*.
\end{aligned}
$$

### 7.5 为什么完全揭示价格不能和正信息成本并存

若价格完全揭示私人信息，则价格本身已经把 $s$ 的内容全部编码出来，于是

$$
\begin{aligned}
E[v\mid p]&=E[v\mid s],\\
\operatorname{Var}(v\mid p)&=\operatorname{Var}(v\mid s).
\end{aligned}
$$

代回上式立即得到

$$
\begin{aligned}
c^*
&=\frac{1}{2\lambda}E\left[
\frac{(E[v\mid s]-p)^2}{\operatorname{Var}(v\mid s)} -
\frac{(E[v\mid s]-p)^2}{\operatorname{Var}(v\mid s)}
\right]\\
&=0.
\end{aligned}
$$

因此

$$
\begin{aligned}
\text{fully revealing price}
\Longrightarrow c^*=0.
\end{aligned}
$$

但若信息获取成本满足 $c>0$，则

$$
\begin{aligned}
c>c^*=0,
\end{aligned}
$$

没有人愿意付费获取私人信息；既然没人买信息，价格就不可能继续完全揭示该私人信息。

所以 Grossman-Stiglitz 的核心逻辑是

$$
\begin{aligned}
\text{正的信息成本}
\Longrightarrow
\text{价格至多部分揭示信息}.
\end{aligned}
$$

::::

---



## Question 8. Heterogeneous Beliefs with Log Utility（part4-Exercise5）

设两个 agent 都具有 log utility，discount rates 分别为 $\rho_1,\rho_2$，总消费品供给为 $\delta_t$，均衡满足 $c_t^1+c_t^2=\delta_t$。在 agent $j$ 的主观测度下，endowment dynamics 为

$$
\begin{aligned}
\frac{d\delta_t}{\delta_t}
&= \hat\mu_t^jdt+\sigma dB_t^j.
\end{aligned}
$$

两个 agent 对 drift 的信念不同，并满足

$$
\begin{aligned}
dB_t^2&=dB_t^1+\beta_t^{12}dt,\\
\beta_t^{12}&=\frac{\hat\mu_t^1-\hat\mu_t^2}{\sigma}.
\end{aligned}
$$

**Required:**
1. 用 FOC 与市场清算推导消费分配，并定义相对消费份额 $\eta_t$。
2. 推导 $\eta_t$ 的动态。
3. 推导短利率 $r_t$ 与两位 agent 的 market price of risk $\theta_t^1,\theta_t^2$。
4. 推导股票价格、price-dividend ratio 与股票波动率。
5. 推导各 agent 的财富与股票持仓比例，并验证股票市场与债券市场清算。
6. 推导零息债价格；若 $\hat\mu_t^j$ 服从 OU/Vasicek 过程，进一步写出 $G_j(t,T)$。
7. 解释这道题的经济含义：为什么 heterogeneous beliefs 会带来 stochastic valuation ratio 与 excess volatility。


::::{solution}

**（1）基本设定**

两个 agent，效用为 log utility，discount rates 分别为 $\rho_1,\rho_2$。总消费品供给为 $\delta_t$，均衡中：

$$
c_t^1+c_t^2=\delta_t.
$$

在 agent $j$ 的主观测度下：

$$
\frac{d\delta_t}{\delta_t} =
\hat\mu_t^jdt+\sigma dB_t^j.
$$

两个 agent 对 drift 的信念不同，所以他们的 Brownian motion 也不同。令 $\beta_t^{12}$ 满足：

$$
dB_t^2=dB_t^1+\beta_t^{12}dt,
\qquad
\beta_t^{12}=\frac{\hat\mu_t^1-\hat\mu_t^2}{\sigma}.
$$

所以等价地：

$$
\hat\mu_t^2=\hat\mu_t^1-\sigma\beta_t^{12}.
$$


**（2）FOC 与消费分配**

agent $i$ 的 FOC 是：

$$
c_t^i =
e^{-\rho_i t}\frac{1}{\varphi_i\xi_t^i}.
$$

这里 $\xi_t^i$ 是以 agent $i$ 的主观概率写出的 state price density（也就是 pricing kernel / SDF）。agent $i$ 的问题可以写成

$$
\left\{
\begin{aligned}
\max_{\{c_t^i\}} \quad & E_0^i\!\left[\int_0^\infty e^{-\rho_i t}\log c_t^i\,dt\right] \\
\text{s.t.}\quad & E_0^i\!\left[\int_0^\infty \xi_t^i c_t^i\,dt\right]\le W_0^i,
\end{aligned}
\right.
$$

在 log utility 下有

$$
\varphi_i\xi_t^i=e^{-\rho_i t}u'(c_t^i)=\frac{e^{-\rho_i t}}{c_t^i},
$$

$\varphi_i$ 是 Lagrange multiplier。

**从 pricing kernel 开始**

由于两个 agent 面对同一个资产市场，任意可交易 payoff $X_T$ 的市场价格 $P_t(X_T)$ 必须唯一，所以无论用哪个 agent 的主观测度来定价，结果都应一致：

$$
P_t(X_T)
=\frac{1}{\xi_t^1}E_t^1[\xi_T^1X_T]
=\frac{1}{\xi_t^2}E_t^2[\xi_T^2X_T].
$$

为了把 agent 2 的定价写回到 agent 1 的测度下，令

$$
\xi_t^{21}:=\frac{dP^2}{dP^1}\bigg|_{\mathcal F_t}.
$$

Bayes formula 给出

$$
E_t^2[Y]
=\frac{1}{\xi_t^{21}}E_t^1[\xi_T^{21}Y].
$$

因此

$$
P_t(X_T)
=\frac{1}{\xi_t^2\xi_t^{21}}E_t^1[\xi_T^{21}\xi_T^2X_T].
$$

与 agent 1 的定价式比较，对任意 $X_T$ 都必须有

$$
\xi_T^1=\xi_T^{21}\xi_T^2,
\qquad\Rightarrow\qquad
\xi_t^1=\xi_t^{21}\xi_t^2.
$$

所以这里的 $\xi_t^{21}$ 更准确地说是 belief-change density / likelihood ratio，不是 SPD 本身。

所以：

$$
\frac{1}{\xi_t^2} =
\frac{\xi_t^{21}}{\xi_t^1}.
$$

代入消费 FOC：

$$
\begin{aligned}
c_t^1+c_t^2
&=
e^{-\rho_1t}\frac{1}{\varphi_1\xi_t^1}
+
e^{-\rho_2t}\frac{1}{\varphi_2\xi_t^2} \\[3pt]
&=
e^{-\rho_1t}\frac{1}{\varphi_1\xi_t^1}
+
e^{-\rho_2t}\frac{\xi_t^{21}}{\varphi_2\xi_t^1} \\[3pt]
&=
\delta_t.
\end{aligned}
$$

定义 $\eta_t=\eta_t^{21}=c_t^2/c_t^1$，则：

$$
\eta_t =
\frac{\varphi_1}{\varphi_2}
e^{-(\rho_2-\rho_1)t}
\xi_t^{21}.
$$

因此：

$$
c_t^1=\frac{\delta_t}{1+\eta_t},
\qquad
c_t^2=\frac{\eta_t}{1+\eta_t}\delta_t.
$$

这一步很重要：$\eta_t$ 是 agent 2 相对于 agent 1 的消费份额。


**（3）$\eta_t$ 的动态**

先从每个小时间段的正态密度比推出 likelihood ratio。由

$$
\begin{aligned}
\Delta B_t^2
&=
\Delta B_t^1+\beta_t^{12}\Delta t, \\
\Delta B_t^2\mid P^1
&\sim N(\beta_t^{12}\Delta t,\Delta t), \\
\Delta B_t^2\mid P^2
&\sim N(0,\Delta t).
\end{aligned}
$$

所以局部 likelihood ratio 是

$$
\begin{aligned}
\Delta\log \xi_t^{21}
&=
\log\frac{f_{P^2}(\Delta B_t^2)}{f_{P^1}(\Delta B_t^2)} \\
&=
-\frac{(\Delta B_t^2)^2}{2\Delta t}
+\frac{(\Delta B_t^2-\beta_t^{12}\Delta t)^2}{2\Delta t} \\
&=
-\beta_t^{12}\Delta B_t^2
+\frac12(\beta_t^{12})^2\Delta t \\
&=
-\beta_t^{12}\Delta B_t^1
-\frac12(\beta_t^{12})^2\Delta t.
\end{aligned}
$$

连续时间极限下，

$$
\begin{aligned}
\log \xi_t^{21}
&=
-\int_0^t \beta_s^{12}\,dB_s^1
-\frac12\int_0^t (\beta_s^{12})^2\,ds, \\
\xi_t^{21}
&=
\frac{dP^2}{dP^1}\bigg|_{\mathcal F_t} =
\exp\!\left(
-\int_0^t \beta_s^{12}\,dB_s^1
-\frac12\int_0^t (\beta_s^{12})^2\,ds
\right), \\
\frac{d\xi_t^{21}}{\xi_t^{21}}
&=
d\log \xi_t^{21}
+\frac12(d\log \xi_t^{21})^2 =
-\beta_t^{12}dB_t^1.
\end{aligned}
$$

这里没有矛盾，但要区分两层对象：

$$
\begin{aligned}
\xi_t^{21}
&:=
\frac{dP^2}{dP^1}\bigg|_{\mathcal F_t}
\qquad \text{(likelihood ratio)}, \\
\xi_t^i
&\qquad \text{agent }i\text{ 主观测度下的 SPD}.
\end{aligned}
$$

由于两个 SPD 对应同一组资产价格，前面已经推出

$$
\xi_t^1=\xi_t^{21}\xi_t^2
\qquad\Longleftrightarrow\qquad
\xi_t^{21}=\frac{\xi_t^1}{\xi_t^2}.
$$

由同一价格的 SPD 关系和 FOC 得到相对消费份额：

$$
\begin{aligned}
\xi_t^{21}
&=
\frac{\xi_t^1}{\xi_t^2} =
\frac{e^{-\rho_1 t}}{\varphi_1 c_t^1}\cdot \frac{\varphi_2 c_t^2}{e^{-\rho_2 t}} =
\frac{\varphi_2}{\varphi_1}e^{-(\rho_1-\rho_2)t}\eta_t \\
&\implies
\eta_t=\frac{\varphi_1}{\varphi_2}e^{-(\rho_2-\rho_1)t}\xi_t^{21} \\
&\implies
\frac{d\eta_t}{\eta_t}=-(\rho_2-\rho_1)dt+\frac{d\xi_t^{21}}{\xi_t^{21}} \\
&=
-(\rho_2-\rho_1)dt-\beta_t^{12}dB_t^1.
\end{aligned}
$$


**（4）Interest rate 与 price of risk**

先从 agent 1 的 state price density 推。

由消费清算式：

$$
\delta_t =
e^{-\rho_1t}\frac{1+\eta_t}{\varphi_1\xi_t^1},
$$

得到：

$$
\xi_t^1 =
e^{-\rho_1t}
\frac{1+\eta_t}{\varphi_1\delta_t}.
$$

记 $h_t=\eta_t/(1+\eta_t)$。先分别算两个中间项：

$$
\begin{aligned}
d\eta_t
&=
\eta_t\left[-(\rho_2-\rho_1)dt-\beta_t^{12}dB_t^1\right], \\
(d\eta_t)^2
&=
\eta_t^2(\beta_t^{12})^2dt, \\
d\log(1+\eta_t)
&=
\frac{1}{1+\eta_t}d\eta_t
-\frac12\frac{1}{(1+\eta_t)^2}(d\eta_t)^2 \\
&=
h_t\left[-(\rho_2-\rho_1)dt-\beta_t^{12}dB_t^1\right]
-\frac12 h_t^2(\beta_t^{12})^2dt, \\
d\log\delta_t
&=
\left(\hat\mu_t^1-\frac12\sigma^2\right)dt+\sigma dB_t^1.
\end{aligned}
$$

对 $\xi_t^1$ 用 Itô。先写 log：

$$
\begin{aligned}
d\log\xi_t^1
&=
-\rho_1dt
+
d\log(1+\eta_t) -
d\log\delta_t \\[3pt]
&=
-\rho_1dt
+
h_t\left[-(\rho_2-\rho_1)dt-\beta_t^{12}dB_t^1\right] -
\frac{1}{2}h_t^2(\beta_t^{12})^2dt -
\left[
\left(\hat\mu_t^1-\frac{1}{2}\sigma^2\right)dt
+
\sigma dB_t^1
\right] \\[3pt]
&=
\left[
-\rho_1
-h_t(\rho_2-\rho_1)
-\hat\mu_t^1
+\frac{1}{2}\sigma^2
-\frac{1}{2}h_t^2(\beta_t^{12})^2
\right]dt -
\left(\sigma+h_t\beta_t^{12}\right)dB_t^1.
\end{aligned}
$$

所以：

$$
\begin{aligned}
\frac{d\xi_t^1}{\xi_t^1}
&=
d\log\xi_t^1
+
\frac{1}{2}
\left(\sigma+h_t\beta_t^{12}\right)^2dt \\[3pt]
&=
\left[
-\rho_1
-h_t(\rho_2-\rho_1)
-\hat\mu_t^1
+\sigma^2
+h_t\sigma\beta_t^{12}
\right]dt -
\left(\sigma+h_t\beta_t^{12}\right)dB_t^1.
\end{aligned}
$$

一般形式（SPD）是：

**复习卡片：martingale = zero drift**
关联：状态价格密度、EMM 与鞅定价；Part2: Arbitrage, SPD, and EMM

$$
\begin{aligned}
dX_t
&=
\mu_t^Xdt+\sigma_t^XdB_t, \\
X_t\text{ is martingale}
&\Longleftrightarrow
\mu_t^X=0.
\end{aligned}
$$

SPD 的定义就是：$\xi_t$ 调整后的资产价格过程是 martingale。因此先设

$$
\begin{aligned}
\frac{d\xi_t}{\xi_t}
&=
a_tdt+b_tdB_t, \\
\frac{dB_t^0}{B_t^0}
&=
r_tdt
\quad\Rightarrow\quad
d(\xi_tB_t^0)\text{ has zero drift} \\
&\Rightarrow
a_t+r_t=0
\Rightarrow
a_t=-r_t, \\
\frac{dS_t}{S_t}
&=
\mu_tdt+\sigma_tdB_t
\quad\Rightarrow\quad
d(\xi_tS_t)\text{ has zero drift} \\
&\Rightarrow
a_t+\mu_t+b_t\sigma_t=0 \\
&\Rightarrow
\mu_t-r_t=-b_t\sigma_t.
\end{aligned}
$$

令 $\theta_t=-b_t$，则 $\mu_t-r_t=\sigma_t\theta_t$，并且

$$
\begin{aligned}
\frac{d\xi_t}{\xi_t}
&=
-r_tdt-\theta_tdB_t, \\
d\log \xi_t
&=
-\left(r_t+\frac12\theta_t^2\right)dt-\theta_t dB_t, \\
\xi_t
&=
\xi_0
\exp\!\left(
-\int_0^t r_s\,ds
-\int_0^t \theta_s\,dB_s
-\frac12\int_0^t \theta_s^2\,ds
\right).
\end{aligned}
$$

其中 $r_t$ 是 short rate，$\theta_t$ 是 market price of risk；本题在 agent $1$ 的测度下写成 $dB_t^1$ 与 $\theta_t^1$。

$$
\frac{d\xi_t^1}{\xi_t^1} =
-r_tdt-\theta_t^1dB_t^1.
$$

因此：

$$
\theta_t^1 =
\sigma+\frac{\eta_t}{1+\eta_t}\beta_t^{12}.
$$

再用 $\hat\mu_t^2=\hat\mu_t^1-\sigma\beta_t^{12}$，可得短利率：

$$
\begin{aligned}
r_t
&=
\rho_1
+
\frac{\eta_t}{1+\eta_t}(\rho_2-\rho_1)
+
\hat\mu_t^1 -
\frac{\eta_t}{1+\eta_t}\sigma\beta_t^{12} -
\sigma^2 \\[3pt]
&=
\frac{
\rho_1+\hat\mu_t^1-\sigma^2
+
(\rho_2+\hat\mu_t^2-\sigma^2)\eta_t
}
{1+\eta_t}.
\end{aligned}
$$

这说明短利率是两个 homogeneous-agent 利率的 consumption-share weighted average。

对 agent 2，price of risk 满足：

$$
\theta_t^2=\theta_t^1-\beta_t^{12}.
$$

所以：

$$
\theta_t^2 =
\sigma-\frac{1}{1+\eta_t}\beta_t^{12}.
$$

总结：

$$
\boxed{
\theta_t^1 =
\sigma+\frac{\eta_t}{1+\eta_t}\beta_t^{12},
\qquad
\theta_t^2 =
\sigma-\frac{1}{1+\eta_t}\beta_t^{12}.
}
$$


**（5）Stock price**

股票是 aggregate Lucas tree，dividend 是 $\delta_t$（见 普通股票设定与 Lucas tree 股票设定）。股票价格为：

**复习卡片：Lucas tree stock pricing**
关联：普通股票设定与 Lucas tree 股票设定；Lucas tree model 与代表性消费者均衡；Part2: Lucas Tree Equilibrium

Lucas tree 中，股票是对 aggregate endowment 的索取权：

$$
\begin{aligned}
\text{stock payoff flow}
&=
\text{dividend flow} =
\delta_tdt.
\end{aligned}
$$

用 SPD 定价任意 dividend claim。关键是：SPD 加权后变成 martingale 的是 $\xi_tS_t$，不是 $S_t$ 本身：

$$
\begin{aligned}
\xi_tS_t
&=
E_t\!\left[\int_t^\infty \xi_s\delta_s\,ds\right], \\
S_t
&=
\frac{1}{\xi_t}
E_t\!\left[\int_t^\infty \xi_s\delta_s\,ds\right], \\
\frac{S_t}{\delta_t}
&=
E_t\!\left[\int_t^\infty
\frac{\xi_s}{\xi_t}\frac{\delta_s}{\delta_t}\,ds
\right].
\end{aligned}
$$

因此 price-dividend ratio 是“未来 dividend growth”乘上“未来 SPD discount”的条件期望。

$$
S_t =
\frac{1}{\xi_t^1}
E_t^1
\left[
\int_t^\infty
\xi_s^1\delta_sds
\right].
$$

由消费清算式可得：

$$
\xi_s^1\delta_s =
\frac{e^{-\rho_1s}}{\varphi_1}
+
\frac{e^{-\rho_2s}}{\varphi_2}\xi_s^{21}.
$$

又因为 $\xi_s^{21}$ 是 $P^1$-martingale，所以 $E_t^1[\xi_s^{21}]=\xi_t^{21}$。因此：

$$
\begin{aligned}
S_t
&=
\frac{1}{\xi_t^1}
\int_t^\infty
E_t^1[\xi_s^1\delta_s]ds \\[3pt]
&=
\frac{1}{\xi_t^1}
\int_t^\infty
\left[
\frac{e^{-\rho_1s}}{\varphi_1}
+
\frac{e^{-\rho_2s}}{\varphi_2}\xi_t^{21}
\right]ds \\[3pt]
&=
\frac{1}{\xi_t^1}
\left[
\frac{e^{-\rho_1t}}{\varphi_1\rho_1}
+
\frac{e^{-\rho_2t}}{\varphi_2\rho_2}\xi_t^{21}
\right].
\end{aligned}
$$

再利用 $\xi_t^1=e^{-\rho_1t}(1+\eta_t)/(\varphi_1\delta_t)$，得到：

$$
S_t =
\frac{
\frac{1}{\rho_1}
+
\frac{\eta_t}{\rho_2}
}
{1+\eta_t}
\delta_t.
$$

所以 price-dividend ratio 是：

$$
\frac{S_t}{\delta_t} =
\frac{
\frac{1}{\rho_1}
+
\frac{\eta_t}{\rho_2}
}
{1+\eta_t}.
$$

这就是截图里说的：**stock price 是两个 homogeneous-agent stock prices 的 consumption-weighted average**。

如果只有 agent 1，价格是 $\delta_t/\rho_1$；如果只有 agent 2，价格是 $\delta_t/\rho_2$。现在两者按 $\eta_t$ 加权。


**（6）Stock price volatility**

设 $q(\eta_t)=S_t/\delta_t$，即：

$$
q(\eta_t) =
\frac{
\frac{1}{\rho_1}
+
\frac{\eta_t}{\rho_2}
}
{1+\eta_t}.
$$

因为 $S_t=\delta_t q(\eta_t)$，所以股票价格波动率来自两部分：$\delta_t$ 的波动和 $q(\eta_t)$ 的波动。

对 $q(\eta_t)$ 求 diffusion coefficient。先写

$$
\begin{aligned}
\log q(\eta_t)
&=
\log\!\left(\frac{1}{\rho_1}+\frac{\eta_t}{\rho_2}\right)
-\log(1+\eta_t).
\end{aligned}
$$

因此只看 $dB_t^1$ 项：

$$
\begin{aligned}
d\log q(\eta_t)
&=
\left[
\frac{\eta_t/\rho_2}{1/\rho_1+\eta_t/\rho_2} -
\frac{\eta_t}{1+\eta_t}
\right]\frac{d\eta_t}{\eta_t}
+\cdots dt \\
&=
\left[
\frac{\eta_t/\rho_2}{1/\rho_1+\eta_t/\rho_2} -
\frac{\eta_t}{1+\eta_t}
\right]\left[-\beta_t^{12}dB_t^1\right]
+\cdots dt \\
&=
\left[
\frac{\eta_t}{1+\eta_t} -
\frac{\eta_t/\rho_2}{1/\rho_1+\eta_t/\rho_2}
\right]\beta_t^{12}dB_t^1
+\cdots dt.
\end{aligned}
$$

又因为 $S_t=\delta_tq(\eta_t)$，所以

$$
\frac{dS_t}{S_t} =
\cdots
+
\left[
\sigma
+
\left(
\frac{\eta_t}{1+\eta_t} -
\frac{\eta_t/\rho_2}{1/\rho_1+\eta_t/\rho_2}
\right)
\beta_t^{12}
\right]dB_t^1.
$$

因此股票价格波动率为：

$$
\boxed{
\sigma_{S,t} =
\sigma
+
\left[
\frac{\eta_t}{1+\eta_t} -
\frac{\eta_t/\rho_2}{1/\rho_1+\eta_t/\rho_2}
\right]\beta_t^{12}.
}
$$

解释一下这个公式。

第一项 $\sigma$ 是 dividend 本身的波动。

第二项来自 price-dividend ratio 的波动。只要 beliefs 不同，$\beta_t^{12}\neq0$，且两个 agent 的 discount rates 不同，$\rho_1\neq\rho_2$，那么 $S_t/\delta_t$ 会随 $\eta_t$ 波动。

所以这个模型可以产生：

$$
\sigma_{S,t}>\sigma.
$$

这正是 heterogeneous beliefs model 想解释的 excess volatility。


**（7）Agent $j$ 的 wealth**

agent $j$ 在 $t$ 时点的 continuation problem 可以写成

$$
\left\{
\begin{aligned}
\max_{\{c_s^j\}_{s\ge t}} \quad
&E_t^j\!\left[\int_t^\infty e^{-\rho_j s}\log c_s^j\,ds\right] \\
\text{s.t.}\quad
&E_t^j\!\left[\int_t^\infty \xi_s^j c_s^j\,ds\right]\le \xi_t^j W_t^j.
\end{aligned}
\right.
$$

因此 agent $j$ 的 wealth 是未来消费 stream 的现值：

$$
W_t^j =
\frac{1}{\xi_t^j}
E_t^j
\left[
\int_t^\infty
\xi_s^j c_s^jds
\right].
$$

由 FOC：

$$
\xi_s^j c_s^j =
\frac{e^{-\rho_js}}{\varphi_j}.
$$

所以：

$$
\begin{aligned}
W_t^j
&=
\frac{1}{\xi_t^j}
\int_t^\infty
\frac{e^{-\rho_js}}{\varphi_j}ds \\[3pt]
&=
\frac{1}{\xi_t^j}
\frac{e^{-\rho_jt}}{\varphi_j\rho_j} \\[3pt]
&=
\frac{c_t^j}{\rho_j}.
\end{aligned}
$$

因此：

$$
W_t^1 =
\frac{\delta_t}{\rho_1(1+\eta_t)},
\qquad
W_t^2 =
\frac{\eta_t\delta_t}{\rho_2(1+\eta_t)}.
$$

并且：

$$
W_t^1+W_t^2 =
\frac{
\frac{1}{\rho_1}
+
\frac{\eta_t}{\rho_2}
}
{1+\eta_t}\delta_t =
S_t.
$$

所以两个人的总财富刚好等于股票总市值。


**（8）Agent $j$ 投资在股票上的比例 $\pi_t^j$**

动态预算约束为：

**复习卡片：动态预算约束**
关联：连续时间组合选择问题；Part2: Portfolio Choice

若 $\pi_t^j$ 是 agent $j$ 投在股票上的 wealth share，则

$$
\begin{aligned}
\text{stock wealth}
&=
\pi_t^jW_t^j,
\qquad
\text{bond wealth} =
(1-\pi_t^j)W_t^j, \\
\text{stock shares}
&=
\frac{\pi_t^jW_t^j}{S_t}.
\end{aligned}
$$

因此财富变化等于 bond return + stock cum-dividend return - consumption：

$$
\begin{aligned}
dW_t^j
&=
\underbrace{(1-\pi_t^j)W_t^jr_tdt}_{\text{bond return}}
+
\underbrace{\frac{\pi_t^jW_t^j}{S_t}(dS_t+\delta_tdt)}_{\text{stock price gain + dividend}} -
\underbrace{c_t^jdt}_{\text{consumption}}.
\end{aligned}
$$

只有 $dS_t$ 含 Brownian shock，所以 wealth 的 diffusion coefficient 来自股票仓位。

$$
dW_t^j =
(1-\pi_t^j)W_t^jr_tdt
+
\frac{\pi_t^jW_t^j}{S_t}(dS_t+\delta_tdt) -
c_t^jdt.
$$

只有股票项带有 Brownian shock。因此 wealth return 的 diffusion coefficient 等于 $\pi_t^j\sigma_{S,t}$。

先看 agent 1。需要用到的等式是：

$$
\begin{aligned}
W_t^1
&=
\frac{c_t^1}{\rho_1} =
\frac{\delta_t}{\rho_1(1+\eta_t)}, \\
\frac{d\delta_t}{\delta_t}
&=
\hat\mu_t^1dt+\sigma dB_t^1, \\
\frac{d\eta_t}{\eta_t}
&=
-(\rho_2-\rho_1)dt-\beta_t^{12}dB_t^1.
\end{aligned}
$$

只看 diffusion coefficient：

$$
\begin{aligned}
d\log W_t^1
&=
d\log\delta_t-d\log(1+\eta_t)+\cdots dt \\
&=
\sigma dB_t^1
-\frac{\eta_t}{1+\eta_t}\frac{d\eta_t}{\eta_t}
+\cdots dt \\
&=
\left(
\sigma+\frac{\eta_t}{1+\eta_t}\beta_t^{12}
\right)dB_t^1+\cdots dt.
\end{aligned}
$$

所以其财富波动率是：

$$
\sigma_{W^1,t} =
\sigma+\frac{\eta_t}{1+\eta_t}\beta_t^{12} =
\theta_t^1.
$$

因此：

$$
\pi_t^1\sigma_{S,t} =
\theta_t^1.
$$

所以：

$$
\boxed{
\pi_t^1 =
\frac{\theta_t^1}{\sigma_{S,t}} =
\frac{
\sigma+\frac{\eta_t}{1+\eta_t}\beta_t^{12}
}
{
\sigma
+
\left[
\frac{\eta_t}{1+\eta_t} -
\frac{\eta_t/\rho_2}{1/\rho_1+\eta_t/\rho_2}
\right]\beta_t^{12}
}.
}
$$

agent 2 也直接展开。需要用到的等式是：

$$
\begin{aligned}
W_t^2
&=
\frac{c_t^2}{\rho_2} =
\frac{\eta_t\delta_t}{\rho_2(1+\eta_t)}, \\
\frac{d\delta_t}{\delta_t}
&=
\hat\mu_t^1dt+\sigma dB_t^1, \\
\frac{d\eta_t}{\eta_t}
&=
-(\rho_2-\rho_1)dt-\beta_t^{12}dB_t^1.
\end{aligned}
$$

只看 diffusion coefficient：

$$
\begin{aligned}
d\log W_t^2
&=
d\log\delta_t+d\log\eta_t-d\log(1+\eta_t)+\cdots dt \\
&=
\sigma dB_t^1
+\frac{d\eta_t}{\eta_t}
-\frac{\eta_t}{1+\eta_t}\frac{d\eta_t}{\eta_t}
+\cdots dt \\
&=
\sigma dB_t^1
+\frac{1}{1+\eta_t}\frac{d\eta_t}{\eta_t}
+\cdots dt \\
&=
\left(
\sigma-\frac{1}{1+\eta_t}\beta_t^{12}
\right)dB_t^1+\cdots dt.
\end{aligned}
$$

所以其财富波动率是：

$$
\sigma_{W^2,t} =
\sigma-\frac{1}{1+\eta_t}\beta_t^{12} =
\theta_t^2.
$$

所以：

$$
\boxed{
\pi_t^2 =
\frac{\theta_t^2}{\sigma_{S,t}} =
\frac{
\sigma-\frac{1}{1+\eta_t}\beta_t^{12}
}
{
\sigma
+
\left[
\frac{\eta_t}{1+\eta_t} -
\frac{\eta_t/\rho_2}{1/\rho_1+\eta_t/\rho_2}
\right]\beta_t^{12}
}.
}
$$

这也符合 log utility 的常见结论：log investor 的 risky share 等于 market price of risk 除以 asset volatility。


**（9）验证金融市场清算**

题目类型：资产定价 / 市场清算 / 均衡

先验证 stock market clearing。因为 $\pi_t^j=\theta_t^j/\sigma_{S,t}$，所以只需证明

$$
\theta_t^1W_t^1+\theta_t^2W_t^2=\sigma_{S,t}S_t.
$$

由

$$
\left\{
\begin{aligned}
W_t^1&=\frac{\delta_t}{\rho_1(1+\eta_t)}, \\
W_t^2&=\frac{\eta_t\delta_t}{\rho_2(1+\eta_t)}, \\
\theta_t^1&=\sigma+\frac{\eta_t}{1+\eta_t}\beta_t^{12}, \\
\theta_t^2&=\sigma-\frac{1}{1+\eta_t}\beta_t^{12},
\end{aligned}
\right.
$$

得

$$
\begin{aligned}
\theta_t^1W_t^1+\theta_t^2W_t^2
&=
\left(\sigma+\frac{\eta_t}{1+\eta_t}\beta_t^{12}\right)\frac{\delta_t}{\rho_1(1+\eta_t)}
+
\left(\sigma-\frac{1}{1+\eta_t}\beta_t^{12}\right)\frac{\eta_t\delta_t}{\rho_2(1+\eta_t)} \\
&=
\sigma(W_t^1+W_t^2)
+
\beta_t^{12}\left[
\frac{\eta_t}{1+\eta_t}W_t^1 -
\frac{1}{1+\eta_t}W_t^2
\right] \\
&=
\sigma S_t
+
\beta_t^{12}\frac{\eta_t\delta_t}{(1+\eta_t)^2}
\left(
\frac{1}{\rho_1} -
\frac{1}{\rho_2}
\right).
\end{aligned}
$$

另一方面，由股票波动率公式，

$$
\begin{aligned}
\sigma_{S,t}S_t
&=
\left[
\sigma
+
\left(
\frac{\eta_t}{1+\eta_t} -
\frac{\eta_t/\rho_2}{1/\rho_1+\eta_t/\rho_2}
\right)\beta_t^{12}
\right]
\frac{
\frac{1}{\rho_1}
+
\frac{\eta_t}{\rho_2}
}
{1+\eta_t}\delta_t \\
&=
\sigma S_t
+
\beta_t^{12}\frac{\eta_t\delta_t}{(1+\eta_t)^2}
\left(
\frac{1}{\rho_1} -
\frac{1}{\rho_2}
\right).
\end{aligned}
$$

两边相等，所以

$$
\pi_t^1W_t^1+\pi_t^2W_t^2=S_t.
$$

再验证 bond market clearing。市场清算条件是：

**复习卡片：market clearing**
关联：普通股票设定与 Lucas tree 股票设定；连续时间组合选择问题

市场清算就是总需求等于总供给：

$$
\begin{aligned}
\text{stock market}
&: \quad \sum_j N_t^{S,j}=1, \\
\text{bond market}
&: \quad \sum_j B_t^{d,j}=0.
\end{aligned}
$$

Lucas tree 只有一棵树，所以股票总供给是 1；bond 只是内部借贷，没有净外生供给，所以总和必须为 0。

$$
\left\{
\begin{aligned}
N_t^{S,1}+N_t^{S,2}&=1, \\
B_t^{d,1}+B_t^{d,2}&=0.
\end{aligned}
\right.
$$

其中每个 agent 的股票市值和债券持仓为

$$
\left\{
\begin{aligned}
N_t^{S,j}S_t&=\pi_t^jW_t^j, \\
B_t^{d,j}&=(1-\pi_t^j)W_t^j.
\end{aligned}
\right.
$$

联立得到

$$
\begin{aligned}
B_t^d
&:=
B_t^{d,1}+B_t^{d,2} \\
&=
(1-\pi_t^1)W_t^1+(1-\pi_t^2)W_t^2 \\
&=
W_t^1+W_t^2-(\pi_t^1W_t^1+\pi_t^2W_t^2) \\
&=
S_t-S_t \\
&=
0.
\end{aligned}
$$

这里不是说每个 agent 都只持有股票，而是说 aggregate bond demand 为零；个体可以有正负债券头寸，但债券是零净供给资产，所以总和必须为 $0$。

所以两个金融市场都清算。


**（10）Zero-coupon bond price**

**复习卡片：zero-coupon bond pricing**
关联：Radon-Nikodym density 与 Girsanov 复习；OU-Vasicek 过程复习

- 先把 $P(t,T)$ 写成 agent 1 的 SPD 定价式
- 再用 $\xi_t^1=\xi_t^{21}\xi_t^2$ 把 agent 2 的项改写回 agent 1 的测度
- 最后把 $G_j(t,T)$ 化成 OU 积分的 normal MGF

现在求 $T>t$ 时支付 $1$ 的 bond price，记为 $P(t,T)$，期限 $\tau=T-t$。

先列主方程组：

$$
\left\{
\begin{aligned}
P(t,T)
&=
\frac{1}{\xi_t^1}E_t^1[\xi_T^1], \\
\xi_T^1
&=
\frac{e^{-\rho_1T}}{\varphi_1\delta_T}
+
\frac{e^{-\rho_2T}}{\varphi_2}\frac{\xi_T^{21}}{\delta_T}, \\
\xi_t^{21}
&=
\frac{\varphi_2}{\varphi_1}e^{-(\rho_1-\rho_2)t}\eta_t, \\
\xi_t^1
&=
\frac{e^{-\rho_1t}}{\varphi_1\delta_t}(1+\eta_t), \\
E_t^1\!\left[\frac{\xi_T^{21}}{\delta_T}\right]
&=
\xi_t^{21}
E_t^2\!\left[\frac{1}{\delta_T}\right].
\end{aligned}
\right.
$$

由此逐步消元：

$$
\begin{aligned}
P(t,T)
&=
\frac{1}{\xi_t^1}
E_t^1[\xi_T^1] \\
&=
\frac{1}{\xi_t^1}
\left[
\frac{e^{-\rho_1T}}{\varphi_1}
E_t^1\!\left(\frac{1}{\delta_T}\right)
+
\frac{e^{-\rho_2T}}{\varphi_2}
E_t^1\!\left(\frac{\xi_T^{21}}{\delta_T}\right)
\right] \\
&=
\frac{1}{\xi_t^1}
\left[
\frac{e^{-\rho_1T}}{\varphi_1}
E_t^1\!\left(\frac{1}{\delta_T}\right)
+
\frac{e^{-\rho_2T}}{\varphi_2}
\xi_t^{21}
E_t^2\!\left(\frac{1}{\delta_T}\right)
\right] \\
&=
\frac{1}{1+\eta_t}
\left[
e^{-\rho_1\tau}G_1(t,T)
+
\eta_t e^{-\rho_2\tau}G_2(t,T)
\right].
\end{aligned}
$$

其中 $G_j(t,T)=E_t^j[\delta_t/\delta_T]$。

这说明 bond price 也是两个 homogeneous-agent bond prices 的 consumption-weighted average：

$$
\boxed{
P(t,T) =
\frac{
P_1^{\mathrm{hom}}(t,T)
+
\eta_t P_2^{\mathrm{hom}}(t,T)
}
{1+\eta_t}.
}
$$

其中 $P_j^{\mathrm{hom}}(t,T)=e^{-\rho_j\tau}G_j(t,T)$。

**计算 $G_j(t,T)$**

联立这里需要的方程组：

$$
\left\{
\begin{aligned}
\frac{d\delta_t}{\delta_t}
&=
\hat\mu_t^jdt+\sigma dB_t^j, \\
d\widetilde B_t^j
&=
dB_t^j+\sigma dt, \\
d\hat\mu_t^j
&=
\kappa_j(\bar\mu_j-\hat\mu_t^j)dt+\nu_jdB_t^j.
\end{aligned}
\right.
$$

计算：

$$
\begin{aligned}
d\log\delta_t
&=
\left(\hat\mu_t^j-\frac12\sigma^2\right)dt+\sigma dB_t^j, \\
\log\frac{\delta_t}{\delta_T}
&=
\int_t^T\left(\frac12\sigma^2-\hat\mu_s^j\right)ds-\int_t^T\sigma dB_s^j, \\
\frac{\delta_t}{\delta_T}
&=
\exp\!\left[
\int_t^T\left(\frac12\sigma^2-\hat\mu_s^j\right)ds-\int_t^T\sigma dB_s^j
\right].
\end{aligned}
$$

$$
\begin{aligned}
G_j(t,T)
&=
E_t^{Q^j}\!\left[\frac{\delta_t}{\delta_T}\right] \\
&=
E_t^{Q^j}\!\left[
\underbrace{\exp\!\left(\int_t^T(\sigma^2-\hat\mu_s^j)ds\right)}_{\text{drift part}}
\underbrace{\exp\!\left(-\int_t^T\sigma dB_s^j-\frac12\int_t^T\sigma^2ds\right)}_{\text{Radon-Nikodym density }\,d\widetilde Q^j/dQ^j}
\right] \\
&=
E_t^{\widetilde Q^j}\!\left[
\exp\!\left(\int_t^T(\sigma^2-\hat\mu_s^j)ds\right)
\right].
\end{aligned}
$$

****复习卡片：Radon-Nikodym density****
这里的关键是把

$$
\exp\!\left(-\int_t^T\sigma dB_s^j-\frac12\int_t^T\sigma^2ds\right)
$$

识别成从 $Q^j$ 到 $\widetilde Q^j$ 的 density increment；它的作用是把 Brownian drift shift 吸收到测度里。
细节见 Radon-Nikodym density 与 Girsanov 复习.

所以

$$
G_j(t,T) =
E_t^{\widetilde Q^j}\!\left[
\exp\!\left(\int_t^T(\sigma^2-\hat\mu_s^j)ds\right)
\right].
$$

****复习卡片：OU/Vasicek 过程****
这里用到 OU 过程的显式解、条件均值和方差；细节见 OU-Vasicek 过程复习.

$$
\begin{aligned}
d\hat\mu_t^j
&=
\kappa_j(\bar\mu_j-\hat\mu_t^j)dt+\nu_jdB_t^j \\
&=
\kappa_j\!\left(\bar\mu_j-\frac{\nu_j\sigma}{\kappa_j}-\hat\mu_t^j\right)dt+\nu_jd\widetilde B_t^j.
\end{aligned}
$$

于是

$$
\bar\mu_j^{Q} =
\bar\mu_j-\frac{\nu_j\sigma}{\kappa_j}.
$$

设

$$
I_{t,T}^j:=\int_t^T\hat\mu_s^jds,\qquad \tau:=T-t.
$$

在 $\widetilde Q^j$ 下，主要方程组是：

$$
\left\{
\begin{aligned}
d\hat\mu_{t+s}^j
&=
\kappa_j(\bar\mu_j^Q-\hat\mu_{t+s}^j)\,ds+\nu_j\,d\widetilde B_{t+s}^j, \\
Y_s
&=
e^{\kappa_j s}\hat\mu_{t+s}^j.
\end{aligned}
\right.
$$

于是

$$
\begin{aligned}
dY_s
&=
\kappa_j e^{\kappa_j s}\hat\mu_{t+s}^j\,ds
+
e^{\kappa_j s}d\hat\mu_{t+s}^j \\
&=
\kappa_j\bar\mu_j^Q e^{\kappa_j s}\,ds
+
\nu_j e^{\kappa_j s}\,d\widetilde B_{t+s}^j.
\end{aligned}
$$

从 $0$ 积分到 $s$：

$$
\begin{aligned}
e^{\kappa_j s}\hat\mu_{t+s}^j
&=
\hat\mu_t^j
+
\int_0^s \kappa_j\bar\mu_j^Q e^{\kappa_j u}\,du
+
\nu_j\int_0^s e^{\kappa_j u}\,d\widetilde B_{t+u}^j \\
&=
\hat\mu_t^j
+
\bar\mu_j^Q(e^{\kappa_j s}-1)
+
\nu_j\int_0^s e^{\kappa_j u}\,d\widetilde B_{t+u}^j.
\end{aligned}
$$

所以

$$
\hat\mu_{t+s}^j =
\bar\mu_j^Q
+
(\hat\mu_t^j-\bar\mu_j^Q)e^{-\kappa_j s}
+
\nu_j\int_0^s e^{-\kappa_j(s-u)}\,d\widetilde B_{t+u}^j.
$$

积分得

$$
\begin{aligned}
I_{t,T}^j
&=
\int_0^\tau \hat\mu_{t+s}^j\,ds \\
&=
\bar\mu_j^Q\tau
+
(\hat\mu_t^j-\bar\mu_j^Q)\underbrace{\int_0^\tau e^{-\kappa_j u}\,du}_{b_j(\tau)}
+
\nu_j\int_0^\tau\int_0^s e^{-\kappa_j(s-u)}\,d\widetilde B_{t+u}^j\,ds.
\end{aligned}
$$

对随机积分用 stochastic Fubini：

$$
\begin{aligned}
\int_0^\tau\int_0^s e^{-\kappa_j(s-u)}\,d\widetilde B_{t+u}^j\,ds
&=
\int_0^\tau
\left(\int_u^\tau e^{-\kappa_j(s-u)}\,ds\right)
d\widetilde B_{t+u}^j \\
&=
\frac{1}{\kappa_j}\int_0^\tau\left(1-e^{-\kappa_j(\tau-u)}\right)d\widetilde B_{t+u}^j.
\end{aligned}
$$

于是

$$
\begin{aligned}
E_t^{\widetilde Q^j}[I_{t,T}^j]
&=
\bar\mu_j^Q\tau+(\hat\mu_t^j-\bar\mu_j^Q)b_j(\tau)
=: m_j(\tau), \\
\operatorname{Var}_t^{\widetilde Q^j}[I_{t,T}^j]
&=
\frac{\nu_j^2}{\kappa_j^2}
\int_0^\tau\left(1-e^{-\kappa_j(\tau-u)}\right)^2du \\
&=
\frac{\nu_j^2}{\kappa_j^2}
\left[
\tau-2b_j(\tau)+\frac{1-e^{-2\kappa_j\tau}}{2\kappa_j}
\right]
=: v_j(\tau).
\end{aligned}
$$

$$
\begin{aligned}
G_j(t,T)
&=
E_t^{\widetilde Q^j}\!\left[
\exp\!\left(
\int_t^T(\sigma^2-\hat\mu_s^j)ds
\right)
\right] \\
&=
E_t^{\widetilde Q^j}\!\left[
\exp\!\left(
\sigma^2\int_t^T ds-\int_t^T\hat\mu_s^jds
\right)
\right] \\
&=
E_t^{\widetilde Q^j}\!\left[
\exp\!\left(
\sigma^2\tau-I_{t,T}^j
\right)
\right] \\
&=
\exp\!\left(\sigma^2\tau\right)
E_t^{\widetilde Q^j}\!\left[\exp(-I_{t,T}^j)\right].
\end{aligned}
$$

由于 $I_{t,T}^j\mid \mathcal F_t$ 在 $\widetilde Q^j$ 下是 normal，且

$$
E_t^{\widetilde Q^j}[I_{t,T}^j]=m_j(\tau),\qquad
\operatorname{Var}_t^{\widetilde Q^j}[I_{t,T}^j]=v_j(\tau),
$$

所以，令

$$
X:=I_{t,T}^j\mid \mathcal F_t\sim N\!\bigl(m_j(\tau),v_j(\tau)\bigr),
$$

其 moment generating function 为

$$
M_X(u)
:=
E_t^{\widetilde Q^j}\!\left[e^{uX}\right] =
\exp\!\left(
u\,m_j(\tau)+\frac12u^2v_j(\tau)
\right).
$$

取 $u=-1$，得到

$$
\begin{aligned}
E_t^{\widetilde Q^j}\!\left[\exp(-I_{t,T}^j)\right]
&=
M_X(-1) \\
&=
\exp\!\left(
-m_j(\tau)+\frac12v_j(\tau)
\right).
\end{aligned}
$$

因此

$$
\begin{aligned}
G_j(t,T)
&=
\exp\!\left[
\sigma^2\tau-m_j(\tau)+\frac12v_j(\tau)
\right].
\end{aligned}
$$

因此

$$
\left\{
\begin{aligned}
P(t,T)
&=
\frac{
e^{-\rho_1\tau}G_1(t,T)
+
\eta_t e^{-\rho_2\tau}G_2(t,T)
}
{1+\eta_t}.
\end{aligned}
\right.
$$


**（11）这题的经济含义**

单 agent log utility 下，stock price 是 $S_t=\delta_t/\rho$，所以 price-dividend ratio 是常数，股票波动率只能等于 consumption volatility $\sigma$。

但两个 log agents 且 beliefs 不同的时候：

$$
\frac{S_t}{\delta_t} =
\frac{
1/\rho_1+\eta_t/\rho_2
}
{1+\eta_t}.
$$

由于 $\eta_t$ 随 beliefs 差异随机波动，price-dividend ratio 也随机波动。因此：

$$
\sigma_{S,t} =
\sigma
+
\text{belief disagreement component}.
$$

所以这个模型可以产生 stochastic stock volatility，也可能产生 excess volatility。核心机制不是 log utility 本身，而是 **heterogeneous beliefs 使得财富权重 $\eta_t$ 随机变化，从而带来 valuation ratio 波动**。

::::

---



## Question 9. 信息扩散与动量交易

Consider an economy with two traded assets, a safe asset with net return zero, and a risky asset that makes a single dividend payment of

$$
D_T=D_0+\sum_{j=0}^T \varepsilon_j
$$

on a finite future date $T$. Here $\varepsilon_j\sim N(0,\sigma^2)$ are i.i.d., and each $\varepsilon_j$ can be decomposed as $\varepsilon_j=\varepsilon_j^1+\varepsilon_j^2+\cdots+\varepsilon_j^z$ for some fixed $z>0$ integer.

This economy has $z$ equal-sized groups of news-watchers, who gradually learn the information contained in the $\varepsilon_j^k$ news. Learning about $\varepsilon_{t+z-1}$ starts in period $t$, when group 1 observes $\varepsilon_{t+z-1}^1$, group 2 observes $\varepsilon_{t+z-1}^2$, and so on, with group $z$ observing $\varepsilon_{t+z-1}^z$. In period $t+1$, groups “rotate” in learning about $\varepsilon_{t+z-1}$: now group 1 observes $\varepsilon_{t+z-1}^2$, group 2 observes $\varepsilon_{t+z-1}^3$, and so on, with group $z$ observing $\varepsilon_{t+z-1}^1$. Thus all subinnovations of $\varepsilon_{t+z-1}$ are observed by exactly two groups at the end of period $t+1$. Learning about $\varepsilon_{t+z-1}$ continues in this fashion over the subsequent periods, and by the end of period $t+z-1$, $\varepsilon_{t+z-1}$ becomes publicly known. This procedure implies that at the end of some date $t$, any given agent knows $\varepsilon_t$ completely, knows $z-1$ of the $z$ sub-innovations in $\varepsilon_{t+1}$, i.e. a share $(z-1)/z$ of $\varepsilon_{t+1}$, knows a share $(z-2)/z$ of $\varepsilon_{t+2}$, and so on, with a share $1/z$ of $\varepsilon_{t+z-1}$. Thus, while agents in different groups have different information, on any given date they have the same “amount” of information. Throughout this problem, you can assume that $t$ is much smaller than $T$, so $t+z-1$ does not “bump” into $T$.

**（a）** Suppose that news-watchers have utility function

$$
U=E[-\exp\{-a\cdot c_T\}],
$$

where $c_T$ is consumption in period $T$ and $a$ measures risk aversion. News-watchers choose their portfolios on every date $t$. Each time, however, they assume incorrectly that they will have to hold their chosen portfolio until $T$, i.e. that they will not be able to rebalance before $T$. Show that, under these assumptions, the number of shares of the risky asset demanded by a news-watcher in group $i$ on date $t$ is

$$
x_{it}=\frac{E_{it}[D_T]-P_t}{a\cdot \operatorname{var}_{it}[D_T]},
$$

where $P_t$ is the asset price, and $E_{it}$ and $\operatorname{var}_{it}$ are the conditional mean and variance. Explain the comparative statics of $x_{it}$ with respect to $E_{it}[D_T]$, $\operatorname{var}_{it}[D_T]$, and $a$.

**（b）** Assuming that news-watchers only use information contained in the news they observe when computing $E_t[D_T]$ and $\operatorname{var}_{it}[D_T]$, i.e. that they ignore the information content of the asset price, prove

$$
\begin{aligned}
\frac{1}{z}\sum_{i=1}^z E_{it}[D_T]
&=
D_t
+
\frac{1}{z}
\left[
(z-1)\varepsilon_{t+1}
+
(z-2)\varepsilon_{t+2}
+\cdots
+2\varepsilon_{t+z-2}
+\varepsilon_{t+z-1}
\right],
\end{aligned}
$$

where $D_t=D_0+\sum_{j=0}^t\varepsilon_j$.

**（c）** Denote the supply of the risky asset by $Q$ and assume that there is a unit mass of news-watchers, so each group has a mass of $1/z$ people. Write down the market clearing condition for the risky asset. Using the notation $\theta=a\cdot \operatorname{var}_{it}[D_T]$, and treating $\theta$ as a constant, rewrite this condition to express $P_t$.

**（d）** Now suppose that the price of the asset at time $t-1$ is $P_{t-1}=0$, and then a single shock of $\varepsilon_{t+z-1}^1=1$ occurs, after which all other sub-innovations equal zero. Plot the asset price $P_s$ against time $s$ for $t-1\leq s\leq T$. Is the asset underpriced or overpriced in the short term? In the long term? Explain the intuition. What facts in finance are consistent with this model?

Now we add another class of agents, called momentum-traders. Suppose that at the beginning of each date $t$, momentum traders submit a quantity order $\phi\cdot \Delta P_{t-1}$, where $\phi>0$ is an exogenous parameter, and $\Delta P_{t-1}=P_{t-1}-P_{t-2}$ is the price change in the previous period. Momentum traders then hold their positions for $j$ periods. There are $j$ generations of momentum traders, thus at each date $t$, exactly one generation submits a new quantity order.

**（e）** The quantity orders of momentum traders can be thought of as affecting the supply of the risky asset $Q$. Using this insight, express the asset price $P_t$ as an ARMA process.

**（f）** Assuming that $P_s=0$ for all $s\leq t-1$, and that $\varepsilon_s^i=0$ except for $\varepsilon_{t+z-1}^1=1$, plot $P_s$ against time $s$ for $t-1\leq s\leq T$. Is the asset underpriced or overpriced in the short term? In the medium term? In the long term? Can this model explain additional facts relative to the pure news-watcher model?

**（g）** Now suppose you add a positive mass of fully rational agents. Will they eliminate all mispricing? Why?



::::{solution}

**信息扩散图示**

在任意日期 $t$ 结束时，所有 group 都完全知道 $\varepsilon_t$ 以及更早的 shock；对未来 shock $\varepsilon_{t+1},\ldots,\varepsilon_{t+z-1}$，不同 group 知道不同的 sub-innovations，但知道的数量相同。可以用下面的结构来理解：

单个 shock $\varepsilon_{t+z-1}$ 的扩散顺序：

- 日期 $t$：group $k$ 只知道 $\varepsilon_{t+z-1}^{k}$。
- 日期 $t+1$：group $k$ 知道 $\varepsilon_{t+z-1}^{k}$ 和 $\varepsilon_{t+z-1}^{k+1}$（indices mod $z$）。
- 日期 $t+2$：group $k$ 知道从 $\varepsilon_{t+z-1}^{k}$ 到 $\varepsilon_{t+z-1}^{k+2}$ 的三份 sub-innovations。
- 一般地，日期 $t+m$ 时 group $k$ 知道 $m+1$ 份 sub-innovations。
- 日期 $t+z-1$：所有 group 都知道完整的 $\varepsilon_{t+z-1}$。

若固定观察日期 $t$，则不同 future shocks 正处在不同扩散阶段：

固定观察日期 $t$ 时，不同 future shocks 的平均信息权重为：

$$
\left\{
\begin{aligned}
\varepsilon_t &: \text{fully known},\qquad \text{weight }1,\\
\varepsilon_{t+1} &: \text{each group knows }z-1\text{ parts},\qquad \text{weight }\frac{z-1}{z},\\
\varepsilon_{t+2} &: \text{each group knows }z-2\text{ parts},\qquad \text{weight }\frac{z-2}{z},\\
&\vdots\\
\varepsilon_{t+z-1} &: \text{each group knows }1\text{ part},\qquad \text{weight }\frac{1}{z},\\
\varepsilon_{t+z}\text{ and later} &: \text{unknown},\qquad \text{weight }0.
\end{aligned}
\right.
$$

**（a）CARA-Normal 组合需求**

**复习卡片：CARA-Normal demand**
见 CARA-Normal framework。核心是：

$$
\begin{aligned}
W\mid \mathcal I
&\sim N(m_{\mathcal I},s_{\mathcal I}^2), \\
m_{\mathcal I}
&:=
E[W\mid\mathcal I],
\qquad
s_{\mathcal I}^2
:=
\operatorname{Var}(W\mid\mathcal I), \\
E[e^{tW}\mid\mathcal I]
&=
\exp\!\left(
t m_{\mathcal I}
+
\frac12t^2s_{\mathcal I}^2
\right), \\
E[-e^{-aW}\mid\mathcal I]
&=
-\exp\!\left(
-a m_{\mathcal I}
+
\frac12a^2s_{\mathcal I}^2
\right) \\
&=
-\exp\!\left[
-a
\left(
m_{\mathcal I} -
\frac{a}{2}s_{\mathcal I}^2
\right)
\right], \\
\max E[-e^{-aW}\mid\mathcal I]
&\Longleftrightarrow
\max \left\{
m_{\mathcal I} -
\frac{a}{2}s_{\mathcal I}^2
\right\}.
\end{aligned}
$$

在本题中，$\mathcal I=\mathcal I_{it}$，payoff 是 $D_T-P_t$，持仓是 $x_{it}$：

$$
\begin{aligned}
c_T
&=
W_t+x_{it}(D_T-P_t), \\
E_{it}[c_T]
&=
W_t+x_{it}(E_{it}[D_T]-P_t), \\
\operatorname{Var}_{it}(c_T)
&=
x_{it}^2\operatorname{Var}_{it}(D_T).
\end{aligned}
$$

所以目标函数变成（见 certainty equivalent 推导）：

$$
\begin{aligned}
CE_{it}(x_{it})
&=
W_t+x_{it}(E_{it}[D_T]-P_t) -
\frac{a}{2}x_{it}^2\operatorname{Var}_{it}(D_T), \\
0
&=
E_{it}[D_T]-P_t -
a x_{it}\operatorname{Var}_{it}(D_T), \\
x_{it}
&=
\frac{E_{it}[D_T]-P_t}
{a\operatorname{Var}_{it}(D_T)}.
\end{aligned}
$$

在日期 $t$，group $i$ 的 news-watcher 选择持有 $x_{it}$ 股 risky asset，并错误地认为会一直持有到 $T$。题干里的 $P_t$ 是日期 $t$ 的 risky asset price，$D_T$ 是 $T$ 期一次性支付的 dividend/payoff，所以每股净收益是 $D_T-P_t$。safe asset 的 net return 为 0，因此没有额外利息项，terminal consumption 可以写成：

$$
c_T =
W_t+x_{it}(D_T-P_t).
$$

在 group $i$ 的信息下，$D_T$ 条件正态，因此 CARA-Normal 下最大化期望效用等价于最大化 certainty equivalent：

$$
\begin{aligned}
CE_{it}
&=
W_t+x_{it}(E_{it}[D_T]-P_t)
-\frac{a}{2}x_{it}^2\operatorname{var}_{it}[D_T].
\end{aligned}
$$

对 $x_{it}$ 求一阶条件：

$$
\begin{aligned}
0
&=
E_{it}[D_T]-P_t
-a x_{it}\operatorname{var}_{it}[D_T], \\[3pt]
x_{it}
&=
\frac{E_{it}[D_T]-P_t}
{a\operatorname{var}_{it}[D_T]}.
\end{aligned}
$$

把

$$
\Delta_{it}:=E_{it}[D_T]-P_t,
\qquad
\sigma_{it}^2:=\operatorname{var}_{it}[D_T]
$$

记为 perceived mispricing 与 perceived payoff variance，则需求可以写成

$$
x_{it}(a)=\frac{\Delta_{it}}{a\sigma_{it}^2},
\qquad a>0.
$$

比较静态可以联立看：

$$
\begin{aligned}
\frac{\partial x_{it}}{\partial E_{it}[D_T]}
&=
\frac{1}{a\sigma_{it}^2}>0,\\
\frac{\partial x_{it}}{\partial a}
&=
-\frac{\Delta_{it}}{a^2\sigma_{it}^2}
=-\frac{x_{it}}{a},\\
\frac{\partial x_{it}}{\partial \sigma_{it}^2}
&=
-\frac{\Delta_{it}}{a(\sigma_{it}^2)^2}
=-\frac{x_{it}}{\sigma_{it}^2}.
\end{aligned}
$$

第一条偏导永远为正：预期 dividend 越高，perceived mispricing $\Delta_{it}$ 越大，需求越大。后两条偏导的符号取决于当前头寸方向：

$$
\begin{aligned}
\Delta_{it}>0
&\Longrightarrow x_{it}>0
\Longrightarrow
\frac{\partial x_{it}}{\partial a}<0,\quad
\frac{\partial x_{it}}{\partial \sigma_{it}^2}<0,\\
\Delta_{it}<0
&\Longrightarrow x_{it}<0
\Longrightarrow
\frac{\partial x_{it}}{\partial a}>0,\quad
\frac{\partial x_{it}}{\partial \sigma_{it}^2}>0,\\
\Delta_{it}=0
&\Longrightarrow x_{it}=0
\Longrightarrow
\frac{\partial x_{it}}{\partial a}=0,\quad
\frac{\partial x_{it}}{\partial \sigma_{it}^2}=0.
\end{aligned}
$$

这里要区分 $x_{it}$ 的数值方向和头寸规模 $|x_{it}|$：

$$
\begin{aligned}
|x_{it}|
&=\frac{|\Delta_{it}|}{a\sigma_{it}^2},
\qquad
\frac{\partial |x_{it}|}{\partial a}
=-\frac{|\Delta_{it}|}{a^2\sigma_{it}^2}<0,
\qquad
\frac{\partial |x_{it}|}{\partial \sigma_{it}^2}
=-\frac{|\Delta_{it}|}{a(\sigma_{it}^2)^2}<0.
\end{aligned}
$$

所以三条比较静态的共同逻辑是：
- $E_{it}[D_T]$ 改变的是方向性信念 $\Delta_{it}$：预期 payoff 越高，需求越向多头方向移动。
- $a$ 和 $\sigma_{it}^2$ 改变的是风险惩罚：无论当前是多头还是空头，它们上升都会把头寸绝对值压小，使 $x_{it}$ 向 $0$ 靠近。

因此 $x_{it}$ 与 $a$ 的关系是一条关于 $a$ 的双曲线，符号完全由 $\Delta_{it}$ 决定：

$$
\begin{aligned}
\Delta_{it}>0
&\Longrightarrow x_{it}(a)>0
\quad \text{long position},\\
\Delta_{it}=0
&\Longrightarrow x_{it}(a)=0
\quad \text{no position},\\
\Delta_{it}<0
&\Longrightarrow x_{it}(a)<0
\quad \text{short position}.
\end{aligned}
$$

**position size 的绝对值**：

$$
\begin{aligned}
|x_{it}(a)|
&=\frac{|\Delta_{it}|}{a\sigma_{it}^2},
\qquad
\frac{\partial |x_{it}|}{\partial a}
=-\frac{|\Delta_{it}|}{a^2\sigma_{it}^2}<0.
\end{aligned}
$$

- 多头情形 $\Delta_{it}>0$：$a$ 越大，$x_{it}$ 从正方向向 $0$ 靠近，做多规模下降。
- 空头情形 $\Delta_{it}<0$：$a$ 越大，$x_{it}$ 从负方向向 $0$ 靠近，空头规模下降。
- 无误价情形 $\Delta_{it}=0$：不论 $a$ 多大，最优头寸始终为 $0$。

**（b）平均条件期望**
在日期 $t$，所有人都已经完全知道 $\varepsilon_0,\ldots,\varepsilon_t$，所以公共部分是：

$$
D_t =
D_0+\sum_{j=0}^t\varepsilon_j.
$$

未来 $\varepsilon_{t+1},\ldots,\varepsilon_{t+z-1}$ 被部分观察。对于 $\varepsilon_{t+k}$，其中 $k=1,\ldots,z-1$，每个 agent 知道其中的 $(z-k)/z$ 份信息。因此，在跨 $z$ 个 group 取平均时，$\varepsilon_{t+k}$ 的平均权重是 $(z-k)/z$。

$$
\begin{aligned}
\frac{1}{z}\sum_{i=1}^zE_{it}[D_T]
&=
D_t
+
\frac{z-1}{z}\varepsilon_{t+1}
+
\frac{z-2}{z}\varepsilon_{t+2}
+\cdots
+
\frac{1}{z}\varepsilon_{t+z-1} \\[3pt]
&=
D_t+\frac{1}{z}
\left[
(z-1)\varepsilon_{t+1}
+(z-2)\varepsilon_{t+2}
+\cdots
+\varepsilon_{t+z-1}
\right].
\end{aligned}
$$

信息逐步扩散，所以越近的 future shock 被更多人知道，越远的 future shock 被更少人知道。

**（c）市场清算与价格**

把 (a) 的需求、(b) 的平均信念和市场清算写成一个方程组。令

$$
\theta:=a\operatorname{var}_{it}[D_T],
\qquad
\bar E_t[D_T]:=\frac{1}{z}\sum_{i=1}^zE_{it}[D_T].
$$

联立系统为：

$$
\left\{
\begin{aligned}
x_{it}
&=\frac{E_{it}[D_T]-P_t}{\theta},
\qquad i=1,\ldots,z,\\[4pt]
\bar E_t[D_T]
&=
D_t+\frac{1}{z}
\left[
(z-1)\varepsilon_{t+1}
+(z-2)\varepsilon_{t+2}
+\cdots
+\varepsilon_{t+z-1}
\right],\\[4pt]
\frac{1}{z}\sum_{i=1}^zx_{it}
&=Q \quad \text{(market clearing condition)}.
\end{aligned}
\right.
$$

$$
\begin{aligned}
Q
&=
\frac{1}{z}\sum_{i=1}^z x_{it} =
\frac{1}{z}\sum_{i=1}^z
\frac{E_{it}[D_T]-P_t}{\theta} =
\frac{1}{\theta}
\left(
\frac{1}{z}\sum_{i=1}^zE_{it}[D_T]
-P_t
\right) =
\frac{1}{\theta}
\left(
\bar E_t[D_T]-P_t
\right)\\
\Longleftrightarrow\quad
P_t
&=
\bar E_t[D_T]-\theta Q=
D_t+\frac{1}{z}
\left[
(z-1)\varepsilon_{t+1}
+(z-2)\varepsilon_{t+2}
+\cdots
+\varepsilon_{t+z-1}
\right]
-\theta Q.
\end{aligned}
$$

$$
\boxed{
P_t =
D_t+\frac{1}{z}
\left[
(z-1)\varepsilon_{t+1}
+(z-2)\varepsilon_{t+2}
+\cdots
+\varepsilon_{t+z-1}
\right]
-\theta Q.
}
$$

其中 $\theta Q$ 是 risk discount。供给越大，投资者需要持有更多 risky asset，所以价格越低。

**（d）单一 news shock 下的价格路径**

假设 $P_{t-1}=0$，并且只有一个 shock：$\varepsilon_{t+z-1}^1=1$，其余所有 sub-innovations 都为 0。

为了突出动态，把没有这条 news shock 时的基准价格归一化为 $0$，并把后文的价格理解为相对该基准的增量价格：

$$
\begin{aligned}
P_{t-1}
&=
D_{t-1}-\theta Q
=0
&\quad \text{(no-news benchmark price)},\\
\Delta P_s
&:=P_s-(D_{t-1}-\theta Q)
&\quad \text{(price relative to benchmark)},\\
D_{t-1}-\theta Q=0
&\Longrightarrow
\Delta P_s=P_s
&\quad \text{(normalized notation used below)}.
\end{aligned}
$$

价格路径可以直接写成：

$$
\left\{
\begin{aligned}
P_{t-1}&=0,\\
P_{t+m}&=\frac{m+1}{z},\qquad m=0,1,\ldots,z-2,\\
P_{t+z-1}&=1,\\
P_s&=1,\qquad s\ge t+z-1.
\end{aligned}
\right.
$$

即 $\varepsilon_{t+z-1}$ 被 $m+1$ 个 group 观察到时，平均信念只反映 $\frac{m+1}{z}$ 的 shock。

图形是一个逐步上升到 1 后保持平稳的阶梯形路径。

结论：
- 短期内，资产 **underpriced**，因为只有一部分投资者知道好消息，价格只部分反映信息。
- 长期内，资产价格正确反映信息，不再 mispriced，因为信息最终完全公开。

这个 pure news-watcher model 可以解释：
1. 信息扩散缓慢；
2. 短期 underreaction；
3. 正的 return autocorrelation；
4. momentum，即好消息后价格继续上涨。
但它不能很好解释长期 reversal，因为价格只是逐步收敛到 fundamental value，没有明显 overshooting。

**（e）加入 momentum traders 后的 ARMA 表示**

momentum traders 在日期 $t$ 提交订单并持有 $j$ 期：

$$
\left\{
\begin{aligned}
x_t^M
&=\phi\Delta P_{t-1},
&\Delta P_{t-1}&=P_{t-1}-P_{t-2},\\
X_t^M
&=\phi\sum_{k=1}^j\Delta P_{t-k}
&&\text{(date }t\text{ 存续总需求)}.
\end{aligned}
\right.
$$

这相当于减少 news-watchers 需要吸收的供给：

$$
\left\{
\begin{aligned}
Q_t^R
&=Q-\phi\sum_{k=1}^j\Delta P_{t-k}
&&\text{(residual supply)},\\
P_t
&=\bar E_t[D_T]-\theta Q_t^R,\\
\bar E_t[D_T]
&=\frac{1}{z}\sum_iE_{it}[D_T].
\end{aligned}
\right.
$$

因此：

$$
\begin{aligned}
P_t
&=\bar E_t[D_T]-\theta
\left[
Q-\phi\sum_{k=1}^j\Delta P_{t-k}
\right] =\bar E_t[D_T]-\theta Q+\theta\phi\sum_{k=1}^j\Delta P_{t-k},\\
&\lambda=\theta\phi,\qquad
F_t=\bar E_t[D_T]-\theta Q
\Longrightarrow
\boxed{
P_t=F_t+\lambda\sum_{k=1}^j\Delta P_{t-k}
}.
\end{aligned}
$$

由 telescoping sum：

$$
\begin{aligned}
\sum_{k=1}^j\Delta P_{t-k}
&=P_{t-1}-P_{t-j-1}\\
&\Longrightarrow
\boxed{
P_t=F_t+\lambda P_{t-1}-\lambda P_{t-j-1}
}\\
&\Longleftrightarrow
\boxed{
(1-\lambda L+\lambda L^{j+1})P_t=F_t
}.
\end{aligned}
$$

其中 $L$ 是 lag operator：

$$
L^qP_t=P_{t-q},
\qquad
LP_t=P_{t-1},
\qquad
L^{j+1}P_t=P_{t-j-1}.
$$

而 $F_t$ 本身是新闻冲击的有限 distributed lag / moving average，所以 $P_t$ 是一个 ARMA 型过程。AR 部分来自 momentum traders，MA 部分来自 gradual news diffusion。

**（f）加入 momentum traders 后的 impulse response**

设定与 pure news-watcher fundamental path：

$$
\left\{
\begin{aligned}
P_s&=0, &&s\leq t-1,\\
\varepsilon_{t+z-1}^1&=1, &&\varepsilon_{\tau}^{i}=0\ \text{otherwise},\\
F_{t+m}&=\dfrac{m+1}{z}, &&m=0,1,\ldots,z-1,\\
F_s&=1, &&s\geq t+z-1.
\end{aligned}
\right.
$$

加入 momentum 后的递推式：

$$
\left\{
\begin{aligned}
P_s&=F_s+\lambda\sum_{k=1}^j\Delta P_{s-k},\\
\Delta P_s&=P_s-P_{s-1}.
\end{aligned}
\right.
$$

momentum term 只看过去收益。对 $m=0,1,\ldots,z-1$：

$$
\begin{aligned}
\Delta P_{t-r}
&=0,
&&r\geq1,\\
P_{t+m}
&=F_{t+m}
+\lambda\sum_{k=1}^{\min\{j,m\}}\Delta P_{t+m-k}\\
&=\frac{m+1}{z}
+\lambda\left(P_{t+m-1}-P_{t+m-\min\{j,m\}-1}\right).
\end{aligned}
$$

$$
P_{t+m} =
\begin{cases}
\dfrac{m+1}{z}+\lambda P_{t+m-1},
&0\leq m\leq \min\{j,z-1\},\\[6pt]
\dfrac{m+1}{z}+\lambda\left(P_{t+m-1}-P_{t+m-j-1}\right),
&j<m\leq z-1.
\end{cases}
$$

令 fundamental-information component 为

$$
F_{t+m}=\frac{m+1}{z},\qquad m=0,1,\ldots,z-1.
$$

加入 momentum orders 后，价格递推为

$$
P_{t+m}=F_{t+m}+\lambda\sum_{k=1}^{\min\{j,m\}}\Delta P_{t+m-k}.
$$

前几期为

$$
\left\{
\begin{aligned}
P_t&=\frac{1}{z},\\
P_{t+1}&=\frac{2}{z}+\frac{\lambda}{z}=\frac{2+\lambda}{z},\\
P_{t+2}&=\frac{3}{z}+\lambda(\Delta P_{t+1}+\mathbf 1\{j\ge2\}\Delta P_t),\\
P_{t+z-1}&=1+\lambda\sum_{k=1}^{\min\{j,z-1\}}\Delta P_{t+z-1-k}.
\end{aligned}
\right.
$$

过去正收益 $\Delta P>0$ 会诱发 momentum demand，从而推高价格。

结论：
- 短期内，价格通常仍然 **underpriced**，因为信息仍然只被部分投资者知道。
- 中期内，价格可能 **overpriced**，因为 momentum traders 根据过去上涨继续买入，推动价格超过 fundamental value。
- 长期内，价格回到正确水平，因为信息完全公开，而且 momentum positions 最终退出。

所以加入 momentum traders 后，模型不仅可以解释短期 underreaction 和 momentum，还可以解释中期 overreaction 以及长期 reversal。

相对于 pure news-watcher model，它能多解释：
1. short-run momentum；
2. medium-run overreaction；
3. long-run reversal；
4. 价格波动被交易行为放大。

**（g）加入 fully rational agents 是否消除全部 mispricing？**

一般不会完全消除。

fully rational agents 会识别到价格偏离 fundamental value，因此在 underpriced 时买入，在 overpriced 时卖出。他们的交易会减弱 mispricing，但不一定完全消除。

原因是 rational arbitrage 有限制：
1. 他们风险厌恶，不能无限持仓；
2. dividend payoff 有风险，套利不是无风险；
3. 他们财富有限；
4. 如果存在 short-sale constraints 或 leverage constraints，套利能力更弱；
5. momentum-driven mispricing 可能在短期继续扩大，rational traders 面临 interim loss risk。

除非他们是风险中性、有无限资本、无约束，并且能完全承受中间价格波动，否则 mispricing 仍然可以存在。

::::

---



## Question 10. 内幕交易与噪声交易

Consider a financial market with three types of agents: (i) an insider; (ii) market makers; and (iii) noise traders. The market is open for one period, and one risky financial asset is traded. Denote the terminal value of the asset by $v$, a normally distributed random variable with expected value zero and variance $\sigma_v^2$.

The market operates the following way. The insider, who has zero endowment of the risky asset, observes $v$ and then places a market order for purchasing $x$ shares. The insider has constant absolute risk aversion $a$, so he maximizes

$$
E[-\exp\{-aW\}]
$$

where $W$ is his terminal wealth.

Risk neutral market makers observe the total order flow $x+u$, where $u$ is the demand of noise traders, which is independent of $v$ and normally distributed with mean zero and variance $\sigma_u^2$. Competition among market makers results in the market price

$$
p=E[v\mid x+u].
$$

The insider behaves strategically: in deciding his optimal strategy, he takes into account the effect of his demand on the price $p$.

**（a）** Assuming that $W$ is normally distributed, show that the insider’s optimization problem is equivalent to maximizing

$$
E[W]-\frac{a}{2}\operatorname{var}[W]
$$

where the expectation and variance are conditional on the insider’s information, i.e. $v$.

**（b）** Assume that the market price is a linear function of the total order flow

$$
p=\lambda(x+u).
$$

Express $W$ as a function of $x,v,u$ and $\lambda$. Compute the mean and variance of $W$ conditional on $v$ and solve for the optimal choice of $x$ by maximizing the insider’s objective. Express $x$ as a function of $\lambda$ and exogenous parameters. Why is his demand $x$ finite? What is $x$ in the special case where the insider is risk neutral?

**（c）** Denote the total order flow by $y=x+u$. Note that the price is determined as

$$
p=E[v\mid y]=\mu+\lambda y
$$

where linearity of the conditional expectation follows from joint normality. Viewing the conditional expectation as a regression, compute the parameter $\mu$ and derive an equilibrium condition for $\lambda$ as a function of exogenous parameters.

**（d）** Interpret $\lambda$ as a measure of illiquidity. What is $\lambda$ when the insider is risk neutral? What is $\lambda$ when the risk aversion of the insider approaches infinity? Based on these results, what kind of relationship do you expect between the insider’s risk aversion and $\lambda$? What is the economic intuition for this? Note: explicitly characterizing $\lambda$ as a function of $a$ is difficult. How would this result be affected if the insider could observe the value of noise demand $u$ before submitting his order?

**（e）** Now suppose that the insider is the CEO of the firm that is being valued, and he is overconfident about the prospects of his company. Specifically, he believes — incorrectly — that the terminal value of the firm will be $v^*=v+v_0$, where the constant $v_0>0$ is the insider’s overconfidence. If market makers know that the insider is overconfident and know $v_0$, what happens to the market price $p$ compared to the fully rational case? Is this result similar to the conclusions of the De Long et al paper? Why? What would happen to the price if the market makers were not aware of the insider’s overconfidence?


::::{solution}

回顾卡片：One-period Kyle 模型复习

**（a）CARA-Normal 等价于最大化 certainty equivalent**

如果 $W\mid v$ 正态，设条件均值为 $m=E[W\mid v]$，条件方差为 $s^2=\operatorname{var}(W\mid v)$。正态随机变量的指数矩公式给出：

$$
\begin{aligned}
E[-\exp(-aW)\mid v]
&=
-\exp\left(-aE[W\mid v]+\frac{a^2}{2}\operatorname{var}(W\mid v)\right).
\end{aligned}
$$

因为外层函数 $-\exp(\cdot)$ 对括号里的表达式是单调递减的，所以最大化期望效用等价于最大化：

$$
\boxed{
E[W\mid v]-\frac{a}{2}\operatorname{var}(W\mid v).
}
$$

这就是 CARA-Normal 下的 certainty equivalent。

**（b）给定线性价格 $p=\lambda(x+u)$ 时的最优需求**

insider 买入 $x$ 股，支付价格 $p$，终值为 $v$。给定线性价格时，模型系统是：

$$
\left\{
\begin{aligned}
p
&=\lambda(x+u)
&&\text{(linear price)},\\
u
&\sim N(0,\sigma_u^2)
&&\text{(noise trader order)},\\
W
&=x(v-p)
=x[v-\lambda(x+u)]
=xv-\lambda x^2-\lambda xu
&&\text{(terminal wealth)},\\
E[W\mid v]
&=xv-\lambda x^2
&&\text{because }E[u]=0,\\
\operatorname{var}(W\mid v)
&=\operatorname{var}(-\lambda xu\mid v)
=\lambda^2x^2\sigma_u^2
&&\text{only }u\text{ is random},\\
CE(x)
&=E[W\mid v]-\frac{a}{2}\operatorname{var}(W\mid v)
=xv-\lambda x^2-\frac{a}{2}\lambda^2x^2\sigma_u^2
&&\text{CARA-Normal}.
\end{aligned}
\right.
$$

$$
\begin{aligned}
\max_x CE(x)
&=\max_x\left\{
xv-\lambda x^2-\frac{a}{2}\lambda^2x^2\sigma_u^2
\right\}
&&\text{choose insider order }x,\\
0
&=\frac{\partial CE}{\partial x}
=v-2\lambda x-a\lambda^2\sigma_u^2x
&&\text{FOC},\\
x^*(v)
&=\frac{v}{2\lambda+a\lambda^2\sigma_u^2}
&&\text{optimal demand},\\
\frac{\partial^2 CE}{\partial x^2}
&=-2\lambda-a\lambda^2\sigma_u^2<0
&&\text{SOC: maximum}.
\end{aligned}
$$

为什么 $x$ 是有限的？因为 denominator 里有两个限制力量：
1. $2\lambda$：insider 知道自己买得越多，价格被自己推得越高，即 price impact；
2. $a\lambda^2\sigma_u^2$：风险厌恶和噪声交易带来的财富风险。

如果 insider 风险中性，即 $a=0$，则：

$$
\boxed{
x=\frac{v}{2\lambda}.
}
$$

这时需求仍然有限，因为存在价格冲击 $\lambda>0$。

**（c）用回归形式求 $\mu$ 和均衡条件**

由 (b)，模型系统可以写成：

$$
\left\{
\begin{aligned}
x&=\beta v,
&&\text{(insider linear strategy)},\\
\beta&=\frac{1}{2\lambda+a\lambda^2\sigma_u^2},
&&\text{(optimal-response slope)},\\
y&=x+u=\beta v+u,
&&\text{(total order flow)},\\
v&\sim N(0,\sigma_v^2),\quad
u\sim N(0,\sigma_u^2),\quad v\perp u,
&&\text{(independent normal shocks)},\\
E[v\mid y]&=\mu+\lambda y
&&\text{(linear projection by joint normality)}.
\end{aligned}
\right.
$$

回归求解：

$$
\begin{aligned}
\mu
&=E[v]-\lambda E[y]
=0
&&\text{(zero intercept)},\\
\lambda
&=\frac{\operatorname{Cov}(v,y)}{\operatorname{Var}(y)}
=\frac{\operatorname{Cov}(v,\beta v+u)}
{\operatorname{Var}(\beta v+u)}\\
&=\frac{\beta\sigma_v^2}
{\beta^2\sigma_v^2+\sigma_u^2}
&&\text{(market maker price impact)}.
\end{aligned}
$$

均衡要求 insider 最优反应中的 $\beta$ 与 market maker 的回归斜率 $\lambda$ 同时成立。Fixed point：insider 选择 $x=\beta v$ 时把 $\lambda$ 当作 price impact；market maker 看到总订单流 $y=\beta v+u$ 后，又用这个 $\beta$ 来回归出 price impact $\lambda$。

$$
\boxed{
\left\{
\begin{aligned}
\beta&=
\frac{1}{2\lambda+a\lambda^2\sigma_u^2},
\qquad &&\text{(insider optimality)},\\
\lambda&=
\frac{\beta\sigma_v^2}
{\beta^2\sigma_v^2+\sigma_u^2}
&&\text{(market efficiency)}.
\end{aligned}
\right.
}
$$

代入 $\beta=1/(2\lambda+a\lambda^2\sigma_u^2)$，得到只含 $\lambda$ 的 equilibrium condition：

$$
\lambda^2\sigma_u^2(2+a\lambda\sigma_u^2)^2
=\sigma_v^2(1+a\lambda\sigma_u^2)
$$

**（d）$\lambda$ 作为 illiquidity 的解释**

$$
\left\{
\begin{aligned}
p&=\lambda y
&&\text{price impact / illiquidity},\\
\lambda\uparrow
&\Longleftrightarrow
\text{同一 order flow 引起更大 price movement}
&&\text{less liquid}.
\end{aligned}
\right.
$$

**Case 1：风险中性 insider**

当 $a=0$ 时：

$$
\begin{aligned}
\lambda^2\sigma_u^2(2+a\lambda\sigma_u^2)^2
&=\sigma_v^2(1+a\lambda\sigma_u^2)
&&\text{equilibrium condition},\\
4\lambda^2\sigma_u^2
&=\sigma_v^2
&&\text{substitute }a=0,\\
\boxed{
\lambda=\frac{\sigma_v}{2\sigma_u}
},
\qquad
\beta
&=\frac{1}{2\lambda}
=\frac{\sigma_u}{\sigma_v}
&&\text{standard one-period Kyle}.
\end{aligned}
$$

**Case 2：风险厌恶趋于无穷大**

当 $a\to\infty$ 时：

$$
\left\{
\begin{aligned}
a\uparrow
&\Longrightarrow
\text{insider 交易更保守}
&&\text{wealth risk from }u,\\
\beta\downarrow
&\Longrightarrow
y=\beta v+u\text{ 对 }v\text{ 的信息含量下降}
&&\text{weaker adverse selection},\\
&\boxed{\lambda\to0},
\qquad
\boxed{a\uparrow\Longrightarrow\lambda\downarrow}
&&\text{market looks more liquid}.
\end{aligned}
\right.
$$

**Case 3：insider 先观察 $u$**

如果 insider 在提交订单前观察到 $u$，则条件在 $(v,u)$ 下财富确定，风险厌恶 $a$ 不再进入优化问题。模型系统：

$$
\left\{
\begin{aligned}
p&=\lambda(x+u)
&&\text{linear price},\\
W&=x[v-\lambda(x+u)]
&&\text{deterministic conditional on }(v,u),\\
\max_x W
&=\max_x x[v-\lambda(x+u)]
&&\text{risk aversion irrelevant}.
\end{aligned}
\right.
$$

求解过程：

$$
\begin{aligned}
0
&=\frac{\partial W}{\partial x}
=v-\lambda(2x+u)
&&\text{FOC},\\
x
&=\frac{v-\lambda u}{2\lambda}
&&\text{insider order},\\
y=x+u
&=\frac{v}{2\lambda}+\frac{u}{2}
&&\text{total order flow},\\
\lambda
&=\frac{\operatorname{Cov}(v,y)}{\operatorname{Var}(y)}
=\frac{\sigma_v^2/(2\lambda)}
{\sigma_v^2/(4\lambda^2)+\sigma_u^2/4}
&&\text{market maker regression},\\
\lambda\left(
\frac{\sigma_v^2}{4\lambda^2}
+\frac{\sigma_u^2}{4}
\right)
&=\frac{\sigma_v^2}{2\lambda}
&&\text{clear denominator},\\
\boxed{
\lambda=\frac{\sigma_v}{\sigma_u}
}
&>
\frac{\sigma_v}{2\sigma_u}
&&\text{more informative order flow}.
\end{aligned}
$$

观察到 $u$ 后，insider 可以更好地利用 noise demand 交易；order flow 的信息含量和 adverse selection 更强，因此 market maker 报价更敏感。

**（e）CEO overconfidence**

**e-1: Market makers 知道 overconfidence 且知道 $v_0$**

insider 误以为资产终值是 $v^*=v+v_0$，$v_0>0$，但真实终值仍然是 $v$。若 market makers 知道这个 bias，则模型系统为：

$$
\left\{
\begin{aligned}
v&\sim N(0,\sigma_v^2),\quad
u\sim N(0,\sigma_u^2),\quad
v\perp u,
&&\text{(fundamental and noise order)},\\
v^*&=v+v_0,
&&\text{(insider belief)},\\
p&=\mu+\lambda y,
&&\text{(linear pricing rule)},\\
\beta&=\frac{1}{2\lambda+a\lambda^2\sigma_u^2},
&&\text{(trading intensity from part b)},\\
x&=\beta(v+v_0-\mu),
&&\text{(insider demand under biased belief)},\\
y&=x+u
=\beta v+\beta(v_0-\mu)+u,
&&\text{(total order flow)},\\
E[y]&=\beta(v_0-\mu),
&&\text{(known systematic buy pressure)},\\
p&=E[v\mid y]
=\lambda\big(y-E[y]\big)
=\lambda y-\lambda\beta(v_0-\mu),
&&\text{(market maker removes known bias)}.
\end{aligned}
\right.
$$

$$
\begin{aligned}
E[v\mid y]
&=E[v]+\frac{\operatorname{Cov}(v,y)}{\operatorname{Var}(y)}\big(y-E[y]\big) \\
&=0+\lambda\big(y-E[y]\big),
\qquad
\lambda:=\frac{\operatorname{Cov}(v,y)}{\operatorname{Var}(y)}.
\end{aligned}
$$

与 $p=\mu+\lambda y$ 对比，截距必须满足：

$$
\begin{aligned}
\mu
&=-\lambda\beta(v_0-\mu) \\
&=-\lambda\beta v_0+\lambda\beta\mu,\\
\mu(1-\lambda\beta)
&=-\lambda\beta v_0,\\
\boxed{\mu=-\frac{\lambda\beta}{1-\lambda\beta}v_0.}
\end{aligned}
$$

把 $y$ 代回价格规则：

$$
\begin{aligned}
p
&=\mu+\lambda y \\
&=\mu+\lambda[\beta v+\beta(v_0-\mu)+u] \\
&=\lambda\beta v+\lambda u+\mu+\lambda\beta(v_0-\mu) \\
&=\lambda\beta v+\lambda u
&&\text{because }\mu+\lambda\beta(v_0-\mu)=0.
\end{aligned}
$$

结论：

$$
\boxed{
p=\lambda\beta v+\lambda u,
\qquad
\text{known overconfidence 不改变价格。}
}
$$

虽然 insider 因为 overconfidence 买得更多，但 market makers 知道 $v_0$，会把订单流中的系统性乐观成分 $\beta(v_0-\mu)$ 扣掉。因此价格不会被这个已知常数偏差推高，和 fully rational case 相同。

**和 De Long et al. 的关系**

这个结果不完全类似于 De Long et al. 的噪声交易者模型。De Long et al. 强调的是噪声交易者的错误信念可能影响价格，尤其当错误信念带来噪声交易者风险、套利受限时，价格可以偏离基本面。

而这里，如果 overconfidence 是一个已知常数 $v_0$，并且 market makers 完全知道它，那么 market makers 可以完全修正这个偏差。因此 overconfidence 不影响价格。

**e-2: market makers 不知道 overconfidence**

如果 market makers 不知道 insider 有 $v_0$ 的正偏差，他们会把额外买单误认为真实私人信息。此时他们不会扣掉 $\beta v_0$ 这部分平均偏差。

$$
\left\{
\begin{aligned}
x&=\beta(v+v_0),
&&\text{(insider demand under biased belief)},\\
y&=x+u
=\beta(v+v_0)+u,
&&\text{(observed order flow)},\\
p&=\lambda y,
&&\text{(market maker uses fully rational rule)},\\
p^R&=\lambda\beta v+\lambda u,
&&\text{(fully rational benchmark)}.
\end{aligned}
\right.
$$

代入求解：

$$
\begin{aligned}
p
&=\lambda y \\
&=\lambda[\beta(v+v_0)+u] \\
&=\lambda\beta v+\lambda u+\lambda\beta v_0,\\
p-p^R
&=(\lambda\beta v+\lambda u+\lambda\beta v_0)
-(\lambda\beta v+\lambda u)\\
&=\lambda\beta v_0>0.
\end{aligned}
$$

结论：

$$
\boxed{
p-p^R=\lambda\beta v_0>0,
\qquad
\text{market makers 不知道 overconfidence 时，资产会被高估。}
}
$$

::::

---




## Textbook Exercise Q 1.2(a)

![Pasted image 20260428115441.png](../attachment/Pasted image 20260428115441.png)

::::{solution}

设 CRRA utility 为

$$
\begin{aligned}
u(w)=\frac{w^{1-\rho}}{1-\rho},\qquad \rho\neq 1.
\end{aligned}
$$

若 gamble 为 $\tilde w=w\pm x$，且两种状态概率各为 $\frac12$，定义 risk premium $\pi$ 使得 $u(w-\pi)=E[u(\tilde w)]$。

1. 精确推导：

$$
\left\{
\begin{aligned}
E[u(\tilde w)]
&=\frac12u(w+x)+\frac12u(w-x)\\
&=\frac{1}{2(1-\rho)}(w+x)^{1-\rho}
+\frac{1}{2(1-\rho)}(w-x)^{1-\rho}\\
u(w-\pi)
&=\frac{1}{1-\rho}(w-\pi)^{1-\rho}
\end{aligned}
\right.
$$

令 $E[u(\tilde w)]=u(w-\pi)$，则

$$
\begin{aligned}
\frac{1}{2(1-\rho)}\left[(w+x)^{1-\rho}+(w-x)^{1-\rho}\right]
&=\frac{1}{1-\rho}(w-\pi)^{1-\rho}\\
&\Longleftrightarrow
(w-\pi)^{1-\rho}
=\frac12\left[(w+x)^{1-\rho}+(w-x)^{1-\rho}\right]\\
&\Longleftrightarrow
\pi
=w-\left\{\frac12\left[(w+x)^{1-\rho}+(w-x)^{1-\rho}\right]\right\}^{\frac{1}{1-\rho}}.
\end{aligned}
$$

2. 小风险近似：

对 $x$ 和 $\pi$ 在 $w$ 附近做二阶 Taylor expansion：

$$
\left\{
\begin{aligned}
u(w+x)
&\approx u(w)+u'(w)x+\frac12u''(w)x^2\\
u(w-x)
&\approx u(w)-u'(w)x+\frac12u''(w)x^2\\
u(w-\pi)
&\approx u(w)-u'(w)\pi+\frac12u''(w)\pi^2
\end{aligned}
\right.
$$

所以

$$
\begin{aligned}
E[u(\tilde w)]
&\approx u(w)+\frac12u''(w)x^2\\
u(w-\pi)
&\approx u(w)-u'(w)\pi+\frac12u''(w)\pi^2.
\end{aligned}
$$

令二者相等，并忽略高阶小量 $\pi^2$：

$$
\begin{aligned}
u(w)+\frac12u''(w)x^2
&\approx u(w)-u'(w)\pi\\
&\Longleftrightarrow
\pi
\approx
-\frac{u''(w)}{2u'(w)}x^2.
\end{aligned}
$$

CRRA 下

$$
\begin{aligned}
u'(w)=w^{-\rho},
\qquad
u''(w)=-\rho w^{-\rho-1}.
\end{aligned}
$$

代入得

$$
\boxed{
\pi\approx \frac{\rho x^2}{2w}
}
$$

::::

---



## Textbook Exercise Q 1.2(b,d)

![Pasted image 20260428101237.png](../attachment/Pasted image 20260428101237.png)

::::{solution}

设 $u(w)=\dfrac{w^{1-\rho}}{1-\rho}$，且 gamble 为

$$
\left\{
\begin{aligned}
w-x, &\qquad \text{prob. } \frac12,\\
w+y, &\qquad \text{prob. } \frac12.
\end{aligned}
\right.
$$

1. 给定 gain $y$，愿意接受的最大 loss $x$：

$$
\begin{aligned}
\text{cutoff }x_{\max}:\quad
u(w)
&= \frac12u(w-x_{\max})+\frac12u(w+y)\\
&\Longleftrightarrow
\frac{w^{1-\rho}}{1-\rho} =
\frac12\left[
\frac{(w-x_{\max})^{1-\rho}}{1-\rho}
+
\frac{(w+y)^{1-\rho}}{1-\rho}
\right]\\
&\Longleftrightarrow
(w-x_{\max})^{1-\rho} =
2w^{1-\rho}-(w+y)^{1-\rho}\\
&\Longleftrightarrow
x_{\max} =
w-\left(2w^{1-\rho}-(w+y)^{1-\rho}\right)^{\frac{1}{1-\rho}}.
\end{aligned}
$$

2. 固定 loss $x$，对所有 gain $y$ 都拒绝 gamble 的充分条件：

当 $\rho>1$ 时，$1-\rho<0$，且 $(w+y)^{1-\rho}>0$。若要对任意 $y$ 都有拒绝，即

$$
\begin{aligned}
u(w)
&\ge \frac12u(w-x)+\frac12u(w+y)\\
&\Longleftrightarrow
\frac{w^{1-\rho}}{1-\rho}
\ge
\frac12\left[
\frac{(w-x)^{1-\rho}}{1-\rho}
+
\frac{(w+y)^{1-\rho}}{1-\rho}
\right]\\
&\Longleftrightarrow
w^{1-\rho}
\le
\frac12\left[(w-x)^{1-\rho}+(w+y)^{1-\rho}\right],
\qquad (1-\rho<0)\\
\end{aligned}
$$

只需

$$
\begin{aligned}
w^{1-\rho}
&\le \frac12(w-x)^{1-\rho}\\
&\Longleftrightarrow
\log(w^{1-\rho})
\le
\log\left[\frac12(w-x)^{1-\rho}\right]\\
&\Longleftrightarrow
(1-\rho)\log w
\le
\log(0.5)+(1-\rho)\log(w-x)\\
&\Longleftrightarrow
(\rho-1)\log\left(1-\frac{x}{w}\right)
\le
\log(0.5)\\
&\Longleftrightarrow
\rho
\ge
1+\frac{\log(0.5)}{\log(1-x/w)}
=\frac{\log(0.5)+\log(1-x/w)}{\log(1-x/w)}.
\end{aligned}
$$

其中 $\log(1-x/w)\le 0$，所以最后一步除以负数时不等号方向会反转。

::::

---



![Pasted image 20260428104131.png](../attachment/Pasted image 20260428104131.png)

::::{solution}

1. 因为 $\tilde y$ 与 $\tilde R$ 独立，非金融收入只会乘上一个与 $\phi$ 无关的常数项：

$$
\left\{
\begin{aligned}
\tilde w
&=\phi_fR_f+\phi\tilde R+\tilde y=w_0R_f+\phi(\tilde R-R_f)+\tilde y\\
u(\tilde w)
&=-e^{-\alpha\tilde w}
=-e^{-\alpha[w_0R_f+\phi(\tilde R-R_f)]}e^{-\alpha\tilde y}
\end{aligned}
\right.
$$

$$
\begin{aligned}
E[u(\tilde w)]
&=-E\!\left[
e^{-\alpha[w_0R_f+\phi(\tilde R-R_f)]}e^{-\alpha\tilde y}
\right]=-E\!\left[
e^{-\alpha[w_0R_f+\phi(\tilde R-R_f)]}
\right]E[e^{-\alpha\tilde y}]
\end{aligned}
$$

其中 $E[e^{-\alpha\tilde y}]$ 与 $\phi$ 无关，所以

$$
\begin{aligned}
\max_{\phi}E[u(\tilde w)]
\Longleftrightarrow
\max_{\phi}
\left\{
-E\!\left[e^{-\alpha[w_0R_f+\phi(\tilde R-R_f)]}\right]
\right\}.
\end{aligned}
$$

2. 将 $\tilde y$ 对 $\tilde R$ 做 linear projection：

$$
\left\{
\begin{aligned}
\tilde y
&=aR_f+b\tilde R+\tilde\epsilon\\
b
&=\frac{\operatorname{cov}(\tilde y,\tilde R)}{\operatorname{var}(\tilde R)}\\
a
&=\frac{E[\tilde y]-bE[\tilde R]}{R_f}\\
\tilde\epsilon
&=\tilde y-aR_f-b\tilde R
\end{aligned}
\right.
$$

均值为零：

$$
\begin{aligned}
E[\tilde\epsilon]
&=E[\tilde y]-aR_f-bE[\tilde R]\\
&=E[\tilde y]-\frac{E[\tilde y]-bE[\tilde R]}{R_f}R_f-bE[\tilde R]\\
&=E[\tilde y]-E[\tilde y]+bE[\tilde R]-bE[\tilde R]=0.
\end{aligned}
$$

与 $\tilde R$ 正交：

$$
\begin{aligned}
\operatorname{cov}(\tilde\epsilon,\tilde R)
&=\operatorname{cov}(\tilde y-aR_f-b\tilde R,\tilde R)\\
&=\operatorname{cov}(\tilde y,\tilde R)-a\operatorname{cov}(R_f,\tilde R)-b\operatorname{var}(\tilde R)\\
&=\operatorname{cov}(\tilde y,\tilde R)-\frac{\operatorname{cov}(\tilde y,\tilde R)}{\operatorname{var}(\tilde R)}\operatorname{var}(\tilde R)=0.
\end{aligned}
$$


::::

---



Show that, if there is a strictly positive SDF, then there are no arbitrage opportunities.

设市场中有 $n$ 个资产，价格向量为 $q$，期末 payoff 向量为 $\widetilde x$。若存在严格正 SDF $m>0$ a.s.，则

$$
\left\{
\begin{aligned}
q_i&=E[m\widetilde x_i],\qquad i=1,\dots,n,\\
\theta'q&=E[m\theta'\widetilde x].
\end{aligned}
\right.
$$

反证。若存在套利组合 $\theta$，则

$$
\left\{
\begin{aligned}
\theta'q&\le 0,\\
\theta'\widetilde x&\ge 0 \quad \text{a.s.},\\
P(\theta'\widetilde x>0)&>0.
\end{aligned}
\right.
$$

但由 SDF 定价公式与 $m>0$ a.s.，

$$
\begin{aligned}
\theta'q
&=E[m\theta'\widetilde x]>0
&&\text{since }m>0,\ \theta'\widetilde x\ge 0\text{ a.s.},\ P(\theta'\widetilde x>0)>0.
\end{aligned}
$$

这与套利要求的 $\theta'q\le 0$ 矛盾。

$$
\boxed{
m>0\ \text{a.s. and } q=E[m\widetilde x]
\quad\Longrightarrow\quad
\text{no arbitrage}.
}
$$

直觉是：严格正 SDF 会给任何非负且正概率严格为正的 payoff 严格正价格，所以不可能免费获得。

---



![Pasted image 20260428110613.png](../attachment/Pasted image 20260428110613.png)

::::{solution}

**$\pi_{GMV}$ 和 $\pi_{mv}$**
GMV portfolio 是 fully invested 下方差最小的组合：

$$
\left\{
\begin{aligned}
\min_{\pi}\quad &\frac12\pi'\Sigma\pi\\
\iota'\pi&=1
\end{aligned}
\right.
$$

FOC 直接给出

$$
\begin{aligned}
\Sigma\pi=\eta\iota
\Longleftrightarrow
\pi=\eta\Sigma^{-1}\iota
\Longleftrightarrow
\eta=\frac{1}{\iota'\Sigma^{-1}\iota}
\Longleftrightarrow
\pi_{GMV}=\frac{\Sigma^{-1}\iota}{\iota'\Sigma^{-1}\iota}.
\end{aligned}
$$

risky-only frontier 是在给定目标均值 $\bar\mu$ 和 fully invested 条件下最小化方差：

$$
\left\{
\begin{aligned}
\min_{\pi}\quad &\frac12\pi'\Sigma\pi\\
\mu'\pi&=\bar\mu\\
\iota'\pi&=1
\end{aligned}
\right.
$$

Lagrangian 的 FOC 给出

$$
\begin{aligned}
\Sigma\pi-\alpha\mu-\beta\iota=0
&\Longleftrightarrow
\Sigma\pi=a\mu+b\iota
\Longleftrightarrow
\pi=a\Sigma^{-1}\mu+b\Sigma^{-1}\iota.
\end{aligned}
$$

因此整条 risky-only frontier 都落在 $\Sigma^{-1}\mu$ 与 $\Sigma^{-1}\iota$ 张成的二维空间里。为了选一个和 $\pi_{GMV}$ 不同、但仍然 fully invested 的 frontier fund，把 $\Sigma^{-1}\mu$ 归一化，使权重和为 1：

$$
\pi_{mv} =
\frac{\Sigma^{-1}\mu}{\iota'\Sigma^{-1}\mu} =
\frac{\Sigma^{-1}\mu}{\mu'\Sigma^{-1}\iota}.
$$

因为 $\iota'\pi_{GMV}=1$ 且 $\iota'\pi_{mv}=1$，所以

$$
\pi=\lambda\pi_{mv}+(1-\lambda)\pi_{GMV}
$$

仍然 fully invested，并可张成 risky-only mean-variance frontier。

只考虑 risky assets 的 mean-variance frontier 与包含 risk-free asset 的 frontier 分别为

$$
\left\{
\begin{aligned}
\pi
&=\lambda\pi_{mv}+(1-\lambda)\pi_{GMV}\\
\pi_{mv}
&=\frac{\Sigma^{-1}\mu}{\mu'\Sigma^{-1}\iota}\\
\pi_{GMV}
&=\frac{\Sigma^{-1}\iota}{\iota'\Sigma^{-1}\iota}\\
\pi
&=\delta\Sigma^{-1}(\mu-R_f\iota)
\end{aligned}
\right.
$$

若 tangency portfolio 同时在两条 frontier 上，则

$$
\begin{aligned}
\delta\Sigma^{-1}(\mu-R_f\iota)
&=\lambda\frac{\Sigma^{-1}\mu}{\mu'\Sigma^{-1}\iota}
+(1-\lambda)\frac{\Sigma^{-1}\iota}{\iota'\Sigma^{-1}\iota}\\
&\Longleftrightarrow
\left(\delta-\frac{\lambda}{\mu'\Sigma^{-1}\iota}\right)\Sigma^{-1}\mu =
\left(\delta R_f+\frac{1-\lambda}{\iota'\Sigma^{-1}\iota}\right)\Sigma^{-1}\iota\\
&\Longleftrightarrow
\left(\delta-\frac{\lambda}{\mu'\Sigma^{-1}\iota}\right)\mu =
\left(\delta R_f+\frac{1-\lambda}{\iota'\Sigma^{-1}\iota}\right)\iota.
\end{aligned}
$$

由于 $\mu$ 不是 $\iota$ 的 scalar multiple，只能有

$$
\left\{
\begin{aligned}
\delta-\frac{\lambda}{\mu'\Sigma^{-1}\iota}
&=0 &&\implies R_f\left(\delta-\frac{\lambda}{\mu'\Sigma^{-1}\iota}\right)=0\\
\delta R_f+\frac{1-\lambda}{\iota'\Sigma^{-1}\iota}
&=0 &&\implies \frac{\lambda R_f}{\mu'\Sigma^{-1}\iota}
+\frac{1-\lambda}{\iota'\Sigma^{-1}\iota}=0
\end{aligned}
\right.
$$

这里 $R_f=\dfrac{\mu'\Sigma^{-1}\iota}{\iota'\Sigma^{-1}\iota}$ 来自题目条件：risk-free rate 等于 GMV portfolio 的 expected return，因为

$$
\begin{aligned}
R_f=\mu_{GMV}
&=\mu'\pi_{GMV}
=\mu'\frac{\Sigma^{-1}\iota}{\iota'\Sigma^{-1}\iota}
=\frac{\mu'\Sigma^{-1}\iota}{\iota'\Sigma^{-1}\iota}.
\end{aligned}
$$

$$
\begin{aligned}
\frac{\lambda}{\iota'\Sigma^{-1}\iota}
+\frac{1-\lambda}{\iota'\Sigma^{-1}\iota}
=\frac{1}{\iota'\Sigma^{-1}\iota}
=0,
\end{aligned}
$$

矛盾。因此该 tangency portfolio 不存在。

::::

---



![Pasted image 20260428122408.png](../attachment/Pasted image 20260428122408.png)

::::{solution}

**设定**：这是 **CARA-normal portfolio choice**，$\theta'\widetilde{\mathbf x}$ 正态，最大化期望效用等价于最大化 certainty equivalent。

$$
\left\{
\begin{aligned}
\widetilde W_1
&=(w_0-c_0-\theta'\mathbf p)R_f+\theta'\widetilde{\mathbf x}\\
&=(w_0-c_0)R_f+\theta'(\widetilde{\mathbf x}-R_f\mathbf p),\\
\theta'\widetilde{\mathbf x}
&\sim N(\theta'\mu_x,\theta'\Sigma_x\theta),\\
E[\widetilde W_1]
&=(w_0-c_0)R_f+\theta'(\mu_x-R_f\mathbf p),\\
\operatorname{var}(\widetilde W_1)
&=\theta'\Sigma_x\theta.
\end{aligned}
\right.
$$

$c_0$ 只进入常数项，不影响最优 risky share holdings $\theta$。

**a. 求最优 share holdings $\theta^*$**

$$
\begin{aligned}
CE(\theta)
&=E[\widetilde W_1]-\frac{\alpha}{2}\operatorname{var}(\widetilde W_1)\\
&=(w_0-c_0)R_f+\theta'(\mu_x-R_f\mathbf p)-\frac{\alpha}{2}\theta'\Sigma_x\theta,\\
\frac{\partial CE(\theta)}{\partial \theta}
&=\mu_x-R_f\mathbf p-\alpha\Sigma_x\theta=0\\
&\Longleftrightarrow
\boxed{\theta^*=\frac{1}{\alpha}\Sigma_x^{-1}(\mu_x-R_f\mathbf p)}.
\end{aligned}
$$

最优 **number of shares**；不依赖 $w_0,c_0$，体现 CARA 的 no wealth effect。

**b. 推出以 returns 表示的投资额公式**

因 $p_i>0$，令 $P=\operatorname{diag}(p_i)$：

$$
\left\{
\begin{aligned}
\widetilde{\mathbf R}
&=P^{-1}\widetilde{\mathbf x},&
\mu
&=E[\widetilde{\mathbf R}]
=P^{-1}\mu_x,\\
\Sigma
&=\operatorname{var}(\widetilde{\mathbf R})
=P^{-1}\Sigma_xP^{-1},\\
\mathbf p
&=P\iota,&
\phi
&=P\theta.
\end{aligned}
\right.
$$

代入 $\mu_x=P\mu,\ \Sigma_x=P\Sigma P$：

$$
\begin{aligned}
\theta^*
&=\frac{1}{\alpha}\Sigma_x^{-1}(\mu_x-R_f\mathbf p)\\
&=\frac{1}{\alpha}(P\Sigma P)^{-1}(P\mu-R_fP\iota)\\
&=\frac{1}{\alpha}P^{-1}\Sigma^{-1}P^{-1}P(\mu-R_f\iota)\\
&=\frac{1}{\alpha}P^{-1}\Sigma^{-1}(\mu-R_f\iota),\\
\phi^*
&=P\theta^*\\
&=\boxed{\frac{1}{\alpha}\Sigma^{-1}(\mu-R_f\iota)}.
\end{aligned}
$$

Notation：

- $\phi$：risky assets **dollar** investment。
- $\theta$：number of **shares**。
- $\widetilde{\mathbf R}$：risky assets **returns**。
- $P$：price diagonal matrix。

$$
\left\{
\begin{aligned}
P&=\operatorname{diag}(p_1,\ldots,p_N),\\
\widetilde{\mathbf R}
&=P^{-1}\widetilde{\mathbf x}
\Longleftrightarrow
\widetilde{\mathbf x}=P\widetilde{\mathbf R},\\
\phi
&=P\theta
\Longleftrightarrow
\theta=P^{-1}\phi.
\end{aligned}
\right.
$$

**结论**：最优 risky investment = risk tolerance $1/\alpha$ $\times$ mean-variance efficient demand $\Sigma^{-1}(\mu-R_f\iota)$；$\alpha$ 越大，risky position 越小。

::::

---



![Pasted image 20260428125930.png](../attachment/Pasted image 20260428125930.png)

::::{solution}

**设定**：date-1 财富为 $(w_0-c_0)R_f+\widetilde y$，其中 $E[\widetilde y]=0$。选择 $c_0$：

$$
\begin{aligned}
\max_{c_0}\
&u(c_0)+\delta E\!\left[u\!\left((w_0-c_0)R_f+\widetilde y\right)\right],\\
\frac{\partial}{\partial c_0}
\left\{
u(c_0)+\delta E\!\left[u\!\left((w_0-c_0)R_f+\widetilde y\right)\right]
\right\}
&=
u'(c_0)
+\delta E\!\left[
u'\!\left((w_0-c_0)R_f+\widetilde y\right)(-R_f)
\right]\\
&=
u'(c_0)-\delta R_fE\!\left[u'\!\left((w_0-c_0)R_f+\widetilde y\right)\right]
=0.
\end{aligned}
$$

**比较两种情形**：令 $c_0^*$ 表示无风险劳动收入时的最优消费，$c_0^{**}$ 表示有风险劳动收入时的最优消费。

$$
\left\{
\begin{aligned}
\widetilde y=0:\quad
u'(c_0^*)
&=\delta R_fu'\!\left((w_0-c_0^*)R_f\right),\\
\widetilde y\neq 0:\quad
u'(c_0^{**})
&=\delta R_fE\!\left[u'\!\left((w_0-c_0^{**})R_f+\widetilde y\right)\right].
\end{aligned}
\right.
$$

**Jensen inequality**：效用函数满足 $u''<0$ 和 $u'''>0$；前者表示 $u'$ decreasing，后者表示 $u'$ convex。因为 $E[\widetilde y]=0$，

$$
\begin{aligned}
E\!\left[u'\!\left((w_0-c_0^{**})R_f+\widetilde y\right)\right]
&>
u'\!\left(E[(w_0-c_0^{**})R_f+\widetilde y]\right)=
u'\!\left((w_0-c_0^{**})R_f\right).
\end{aligned}
$$

$$
\begin{aligned}
u'(c_0^{**})
&=\delta R_fE\!\left[u'\!\left((w_0-c_0^{**})R_f+\widetilde y\right)\right]>
\delta R_fu'\!\left((w_0-c_0^{**})R_f\right).
\end{aligned}
$$

令无风险 Euler gap 为 $H(c)=u'(c)-\delta R_fu'((w_0-c)R_f)$。由上式和无风险 FOC：

$$
\begin{aligned}
H(c_0^{**})
&=u'(c_0^{**})-\delta R_fu'\!\left((w_0-c_0^{**})R_f\right)>0,\\
H(c_0^*)
&=u'(c_0^*)-\delta R_fu'\!\left((w_0-c_0^*)R_f\right)=0,\\
H'(c)
&=u''(c)+\delta R_f^2u''\!\left((w_0-c)R_f\right)<0,\\
H(c_0^{**})>H(c_0^*),\quad H'(c)<0
&\Longrightarrow
\boxed{c_0^{**}<c_0^*}.
\end{aligned}
$$

**结论**：引入 mean-zero labor income risk 后，最优当期消费下降、储蓄上升；这就是 precautionary savings。

::::

---



## Textbook Exercise Q 6.1
![Pasted image 20260428133349.png](../attachment/Pasted image 20260428133349.png)

::::{solution}

**Factor model**
核心是用少数 common factors 解释 assets 的 expected returns。详细定义见 Part1: General Factor Models、Single-Factor Model、Multifactor Model。

$$
\left\{
\begin{aligned}
\text{single-factor regression:}\quad
\tilde R
&=a+\beta \tilde f+\tilde\varepsilon,
\qquad \operatorname{cov}(\tilde f,\tilde\varepsilon)=0,\\
\text{single factor:}\quad
E[\tilde R]-R_z
&=\lambda\beta(\tilde R;\tilde f),\\
\beta(\tilde R;\tilde f)
&=\frac{\operatorname{cov}(\tilde f,\tilde R)}{\operatorname{var}(\tilde f)},\\
\text{multifactor regression:}\quad
\tilde R
&=a+\beta'\tilde F+\tilde\varepsilon,
\qquad \operatorname{Cov}(\tilde F,\tilde\varepsilon)=0,\\
\text{multifactor:}\quad
E[\tilde R]-R_z
&=\lambda'\beta,\\
\beta
&=\Sigma_F^{-1}\operatorname{Cov}(\tilde F,\tilde R).
\end{aligned}
\right.
$$

**含义**：$\beta$ 是资产对 factor risk 的 exposure，$\lambda$ 是 factor price of risk；因此 expected excess return 来自 “factor exposure $\times$ factor compensation”。

$$
\begin{aligned}
\text{risk premium}
&=
\text{factor exposure}
\times
\text{price of risk}.
\end{aligned}
$$

**和 Part1 的关系**：CAPM 是 single-factor model，factor 是 market return；更一般的 factor model 等价于 SDF 的 affine representation，也和 mean-variance efficiency 相连。

^qe-ps-factor-model-review

**设定**：存在 risk-free asset。令 risky asset returns 向量为 $\widetilde R^{vec}$，均值和协方差为

$$
\left\{
\begin{aligned}
\mu&=E[\widetilde R^{vec}],\\
\Sigma&=\operatorname{var}(\widetilde R^{vec}),\\
\widetilde R_*
&=R_f+\pi'(\widetilde R^{vec}-R_f\mathbf 1).
\end{aligned}
\right.
$$

因此

$$
\left\{
\begin{aligned}
E[\widetilde R_*]-R_f
&=\pi'(\mu-R_f\mathbf 1),\\
\operatorname{var}(\widetilde R_*)
&=\pi'\Sigma\pi,\\
\operatorname{Cov}(\widetilde R^{vec},\widetilde R_*)
&=\Sigma\pi.
\end{aligned}
\right.
$$

**第一步：beta-pricing $\Rightarrow$ $\widetilde R_*$ 在 frontier 上**。先看第 $i$ 个 risky asset。以 $\widetilde R_*$ 为 pricing portfolio 的 beta-pricing model 是

$$
\begin{aligned}
\mu_i-R_f
&=\beta_{i,*}\bigl(E[\widetilde R_*]-R_f\bigr),\\
\beta_{i,*}
&=\frac{\operatorname{cov}(\widetilde R_i,\widetilde R_*)}{\operatorname{var}(\widetilde R_*)}.
\end{aligned}
$$

所以对第 $i$ 个资产：

$$
\begin{aligned}
\mu_i-R_f
&=
\frac{E[\widetilde R_*]-R_f}{\operatorname{var}(\widetilde R_*)}
\operatorname{cov}(\widetilde R_i,\widetilde R_*).
\end{aligned}
$$

把 $i=1,\ldots,n$ 的式子堆叠成向量：

$$
\begin{aligned}
\underbrace{\mu-R_f\mathbf 1}_{n\times 1}
&=
\frac{E[\widetilde R_*]-R_f}{\operatorname{var}(\widetilde R_*)}
\underbrace{\operatorname{Cov}(\widetilde R^{vec},\widetilde R_*)}_{n\times 1}\\
&=
\frac{E[\widetilde R_*]-R_f}{\operatorname{var}(\widetilde R_*)}
\Sigma\pi.
\end{aligned}
$$

所以

$$
\begin{aligned}
\pi
&=
\frac{\operatorname{var}(\widetilde R_*)}{E[\widetilde R_*]-R_f}
\Sigma^{-1}(\mu-R_f\mathbf 1)\\
&=
\delta\Sigma^{-1}(\mu-R_f\mathbf 1),
\qquad
\delta =
\frac{\operatorname{var}(\widetilde R_*)}{E[\widetilde R_*]-R_f} =
\frac{\pi'\Sigma\pi}{\pi'(\mu-R_f\mathbf 1)}.
\end{aligned}
$$

这正是 risk-free asset 存在时 frontier portfolio 的权重形式；推导见 Part1: risk-free frontier weight：

$$
\begin{aligned}
\pi
&=\delta\Sigma^{-1}(\mu-R_f\mathbf 1),
\end{aligned}
$$

因此 $\widetilde R_*$ 正好是 mean-variance frontier 上的 return。

^qe-ps-q6-1-frontier-weight

**第二步：frontier return $\Rightarrow$ factor pricing form**。若 $\widetilde R_*$ 又可以由 factors 线性表示：

$$
\begin{aligned}
\widetilde R_*
&=a+b'\widetilde F,
\end{aligned}
$$

则任意 asset $i$ 满足 beta pricing：

$$
\begin{aligned}
E[\widetilde R_i]-R_f
&=\beta_{i,*}\bigl(E[\widetilde R_*]-R_f\bigr),\\
\beta_{i,*}
&=\frac{\operatorname{cov}(\widetilde R_i,\widetilde R_*)}{\operatorname{var}(\widetilde R_*)}\\
&=\frac{\operatorname{cov}(\widetilde R_i,a+b'\widetilde F)}{\operatorname{var}(a+b'\widetilde F)}\\
&=\frac{b'\operatorname{Cov}(\widetilde F,\widetilde R_i)}{b'\operatorname{Var}(\widetilde F)b}.
\end{aligned}
$$

代回 expected return：

$$
\begin{aligned}
E[\widetilde R_i]
&=R_f+
\frac{E[\widetilde R_*]-R_f}{b'\operatorname{Var}(\widetilde F)b}
b'\operatorname{Cov}(\widetilde F,\widetilde R_i).
\end{aligned}
$$

若用 factor regression beta 表示

$$
\begin{aligned}
\beta_i
&=\operatorname{Var}(\widetilde F)^{-1}\operatorname{Cov}(\widetilde F,\widetilde R_i)
\quad\Longleftrightarrow\quad
\operatorname{Cov}(\widetilde F,\widetilde R_i)
=\operatorname{Var}(\widetilde F)\beta_i,
\end{aligned}
$$

则

$$
\begin{aligned}
E[\widetilde R_i]
&=R_f+
\frac{E[\widetilde R_*]-R_f}{b'\operatorname{Var}(\widetilde F)b}
b'\operatorname{Var}(\widetilde F)\beta_i\\
&=R_f+\lambda'\beta_i,
\qquad
\lambda =
\frac{E[\widetilde R_*]-R_f}{b'\operatorname{Var}(\widetilde F)b}
\operatorname{Var}(\widetilde F)b.
\end{aligned}
$$

**总逻辑**：

$$
\begin{aligned}
\text{beta-pricing by }\widetilde R_*
&\Longrightarrow
\widetilde R_* \in \text{mean-variance frontier},\\
\widetilde R_*=a+b'\widetilde F
&\Longrightarrow
E[\widetilde R_i]=R_f+\lambda'\beta_i.
\end{aligned}
$$

::::

---



![Pasted image 20260428141951.png](../attachment/Pasted image 20260428141951.png)

::::{solution}

**设定**：每个 type $h$ 的 signal $\widetilde w_m$ 条件分布为 normal，先验权重相同。令 state-$h$ density ratio 为 $\widetilde z_h=g_h(\widetilde w_m)$。

$$
\left\{
\begin{aligned}
\phi_h(w)
&=\frac{1}{\sigma\sqrt{2\pi}}
\exp\!\left(-\frac{(w-\mu_h)^2}{2\sigma^2}\right),\\
\phi_j(w)
&=\frac{1}{\sigma\sqrt{2\pi}}
\exp\!\left(-\frac{(w-\mu_j)^2}{2\sigma^2}\right),\\
\widetilde z_h
&=g_h(\widetilde w_m).
\end{aligned}
\right.
$$

**a. 求 $\widetilde z_h=g_h(\widetilde w_m)$**

对任意 $\widetilde x=f(\widetilde w_m)$，Radon-Nikodym derivative 的定义给出

$$
\begin{aligned}
E_h[\widetilde x]
&=E[\widetilde x\widetilde z_h]=\frac{1}{H}\sum_{j=1}^H
\int_{-\infty}^{\infty}
f(w)g_h(w)\phi_j(w)\,dw,\\
E_h[\widetilde x]
&=\int_{-\infty}^{\infty}f(w)\phi_h(w)\,dw\\
&\Longrightarrow
\int_{-\infty}^{\infty}f(w)\phi_h(w)\,dw
=\frac{1}{H}\sum_{j=1}^H
\int_{-\infty}^{\infty}
f(w)g_h(w)\phi_j(w)\,dw\\
&\phantom{\Longrightarrow
\int_{-\infty}^{\infty}f(w)\phi_h(w)\,dw}
=\int_{-\infty}^{\infty}
f(w)g_h(w)\left(\frac{1}{H}\sum_{j=1}^H\phi_j(w)\right)\,dw.
\end{aligned}
$$

因为对任意 $f$ 都成立，integrand 必须相等：

$$
\begin{aligned}
\phi_h(w)
&=
g_h(w)\frac{1}{H}\sum_{j=1}^H\phi_j(w)\\
\Longleftrightarrow\quad
g_h(w)
&=
\frac{\phi_h(w)}
{\frac{1}{H}\sum_{j=1}^H\phi_j(w)}=
\frac{
\exp\!\left(-\frac{(w-\mu_h)^2}{2\sigma^2}\right)
}{
\frac{1}{H}\sum_{j=1}^H
\exp\!\left(-\frac{(w-\mu_j)^2}{2\sigma^2}\right)
}.
\end{aligned}
$$

**b. Log ratio 与 sharing rule**

Pareto planner 的 sharing rule 来自逐状态优化。设 type-$h$ utility 为 normalized CARA：

$$
\begin{aligned}
u_h(w_h)
&=-\tau_h\exp\!\left(-\frac{w_h}{\tau_h}\right),
\qquad
u_h'(w_h)=\exp\!\left(-\frac{w_h}{\tau_h}\right).
\end{aligned}
$$

因为 $E_h[\widetilde x]=E[\widetilde z_h\widetilde x]$，planner problem 可写成

$$
\begin{aligned}
\max_{\{\widetilde w_h\}_{h=1}^H}
\sum_{h=1}^H\lambda_h\alpha_h
E_h[u_h(\widetilde w_h)]
&\Longleftrightarrow
\max_{\{\widetilde w_h\}_{h=1}^H}
E\!\left[
\sum_{h=1}^H
\lambda_h\alpha_h\widetilde z_h
u_h(\widetilde w_h)
\right]\\
\text{s.t.}\qquad
\sum_{h=1}^H\widetilde w_h
&=\widetilde w_m.
\end{aligned}
$$

逐 realization 固定 $\widetilde w_m$，令资源约束的 multiplier 为 $\eta$：

$$
\begin{aligned}
\mathcal L
&=
\sum_{h=1}^H
\lambda_h\alpha_h\widetilde z_h
u_h(\widetilde w_h)
+\eta\left(\widetilde w_m-\sum_{h=1}^H\widetilde w_h\right),\\
\frac{\partial\mathcal L}{\partial \widetilde w_h}=0
&\Longleftrightarrow
\lambda_h\alpha_h\widetilde z_h
u_h'(\widetilde w_h)-\eta=0\\
&\Longleftrightarrow
\lambda_h\alpha_h\widetilde z_h
\exp\!\left(-\frac{\widetilde w_h}{\tau_h}\right)=\eta\\
&\Longleftrightarrow
\widetilde w_h
=\tau_h\log(\lambda_h\alpha_h\widetilde z_h)-\tau_h\log\eta.
\end{aligned}
$$

用资源约束解出 $\log\eta$：

$$
\begin{aligned}
\sum_{h=1}^H\widetilde w_h=\widetilde w_m
&\Longleftrightarrow
\sum_{h=1}^H
\tau_h\log(\lambda_h\alpha_h\widetilde z_h)
-\tau\log\eta
=\widetilde w_m\\
&\Longleftrightarrow
\log\eta =
\sum_{j=1}^H\frac{\tau_j}{\tau}
\log(\lambda_j\alpha_j\widetilde z_j)
-\frac{1}{\tau}\widetilde w_m,
\qquad
\tau=\sum_{j=1}^H\tau_j.
\end{aligned}
$$

代回 FOC 解：

$$
\begin{aligned}
\widetilde w_h
&=
\tau_h\log(\lambda_h\alpha_h\widetilde z_h)
-\tau_h
\left[
\sum_{j=1}^H\frac{\tau_j}{\tau}
\log(\lambda_j\alpha_j\widetilde z_j)
-\frac{1}{\tau}\widetilde w_m
\right]\\
&=
\tau_h
\left[
\log(\lambda_h\alpha_h\widetilde z_h)
-\sum_{j=1}^H\frac{\tau_j}{\tau}
\log(\lambda_j\alpha_j\widetilde z_j)
\right]
+\frac{\tau_h}{\tau}\widetilde w_m.
\end{aligned}
$$

$$
\begin{aligned}
\log\!\left(\frac{\widetilde z_h}{\widetilde z_j}\right)
&=
\log\!\left(\frac{g_h(\widetilde w_m)}{g_j(\widetilde w_m)}\right)=
\frac{(\widetilde w_m-\mu_j)^2-(\widetilde w_m-\mu_h)^2}{2\sigma^2}\\
&=
\frac{\mu_j^2-\mu_h^2+2(\mu_h-\mu_j)\widetilde w_m}{2\sigma^2}.
\end{aligned}
$$

若 $\sum_{j=1}^H\tau_j/\tau=1$，则

$$
\begin{aligned}
\log(\lambda_h\alpha_h\widetilde z_h)
-\sum_{j=1}^H\frac{\tau_j}{\tau}
\log(\lambda_j\alpha_j\widetilde z_j)
&=
\sum_{j=1}^H\frac{\tau_j}{\tau}
\left[
\log\!\left(\frac{\lambda_h\alpha_h}{\lambda_j\alpha_j}\right)
+\log\!\left(\frac{\widetilde z_h}{\widetilde z_j}\right)
\right]\\
&=
\sum_{j=1}^H\frac{\tau_j}{\tau}
\log\!\left(\frac{\lambda_h\alpha_h}{\lambda_j\alpha_j}\right)
+\sum_{j=1}^H\frac{\tau_j}{\tau}
\left[
\frac{\mu_j^2-\mu_h^2}{2\sigma^2}
+\frac{\mu_h-\mu_j}{\sigma^2}\widetilde w_m
\right]\\
&=
\sum_{j=1}^H\frac{\tau_j}{\tau}
\left[
\log\!\left(\frac{\lambda_h\alpha_h}{\lambda_j\alpha_j}\right)
+\frac{\mu_j^2-\mu_h^2}{2\sigma^2}
\right]
+\left(
\sum_{j=1}^H\frac{\tau_j(\mu_h-\mu_j)}{\tau\sigma^2}
\right)\widetilde w_m.
\end{aligned}
$$

代回 sharing rule：

$$
\begin{aligned}
\widetilde w_h
&=
\tau_h
\left[
\log(\lambda_h\alpha_h\widetilde z_h)
-\sum_{j=1}^H\frac{\tau_j}{\tau}
\log(\lambda_j\alpha_j\widetilde z_j)
\right]
+\frac{\tau_h}{\tau}\widetilde w_m\\
&=
\tau_h\sum_{j=1}^H\frac{\tau_j}{\tau}
\left[
\log\!\left(\frac{\lambda_h\alpha_h}{\lambda_j\alpha_j}\right)
+\frac{\mu_j^2-\mu_h^2}{2\sigma^2}
\right]
+\frac{\tau_h}{\tau}\widetilde w_m
+\tau_h
\left(
\sum_{j=1}^H\frac{\tau_j(\mu_h-\mu_j)}{\tau\sigma^2}
\right)\widetilde w_m.
\end{aligned}
$$

**结论**：代回原 sharing rule 后，state-$h$ allocation 是 $\widetilde w_m$ 的 affine function。

**c. 异方差版本**

若各 state 的 variance 不同：

$$
\left\{
\begin{aligned}
\phi_h(w)
&=\frac{1}{\sigma_h\sqrt{2\pi}}
\exp\!\left(-\frac{(w-\mu_h)^2}{2\sigma_h^2}\right),\\
\widetilde z_h
&=
\frac{
\frac{1}{\sigma_h}
\exp\!\left(-\frac{(\widetilde w_m-\mu_h)^2}{2\sigma_h^2}\right)
}{
\frac{1}{H}\sum_{j=1}^H
\frac{1}{\sigma_j}
\exp\!\left(-\frac{(\widetilde w_m-\mu_j)^2}{2\sigma_j^2}\right)
}.
\end{aligned}
\right.
$$

于是

$$
\begin{aligned}
\log\!\left(\frac{\widetilde z_h}{\widetilde z_j}\right)
&=
\log\!\left(\frac{\sigma_j}{\sigma_h}\right)
+\frac{(\widetilde w_m-\mu_j)^2}{2\sigma_j^2}
-\frac{(\widetilde w_m-\mu_h)^2}{2\sigma_h^2}.
\end{aligned}
$$

**结论**：异方差时 log ratio 含有 $\widetilde w_m^2/\sigma_j^2$ 项，sharing rule 不再只是 $\widetilde w_m$ 的 affine function。

::::

---





![Pasted image 20260428151130.png](../attachment/Pasted image 20260428151130.png)

::::{solution}

**设定与 planner problem**

$$
\left\{
\begin{aligned}
u(C_{ht})
&=\frac{C_{ht}^{1-\rho}}{1-\rho},
\qquad \rho>0,\ \rho\ne 1,\\
\lambda_h
&=\text{Pareto weight of agent }h,\\
Z_{ht}
&=\text{belief density process of agent }h,\qquad
E_t[Z_{h,t+1}]=Z_{ht},\\
\delta
&\in(0,1).
\end{aligned}
\right.
$$

$$
\begin{aligned}
\max_{\{C_{ht}\}_{h,t}}
\sum_{h=1}^H\sum_{t=0}^T
\lambda_h\delta^t
E\!\left[
Z_{ht}\frac{C_{ht}^{1-\rho}}{1-\rho}
\right]
\quad
\text{s.t.}\quad
\sum_{h=1}^HC_{ht}=C_t,\ \forall t
&\Longleftrightarrow
\max_{\{C_{ht}\}_{h=1}^H}
\sum_{h=1}^H
\lambda_hZ_{ht}\frac{C_{ht}^{1-\rho}}{1-\rho}\\
&\phantom{\Longleftrightarrow\max_{\{C_{ht}\}_{h=1}^H}}
\text{s.t.}\quad
\sum_{h=1}^HC_{ht}=C_t
\quad \text{for each }(t,\omega).
\end{aligned}
$$

**FOC 与 sharing rule**

$$
\left\{
\begin{aligned}
\mathcal L_t
&=
\sum_{h=1}^H
\lambda_hZ_{ht}\frac{C_{ht}^{1-\rho}}{1-\rho}
+\eta_t\left(C_t-\sum_{h=1}^HC_{ht}\right),\\
\frac{\partial\mathcal L_t}{\partial C_{ht}}=0
&\Longleftrightarrow
\lambda_hZ_{ht}C_{ht}^{-\rho}=\eta_t,\\
C_{ht}
&=\eta_t^{-1/\rho}(\lambda_hZ_{ht})^{1/\rho},\\
\sum_{h=1}^HC_{ht}=C_t
&\Longleftrightarrow
\eta_t^{-1/\rho}
=\frac{C_t}{S_t},
\qquad
S_t=\sum_{j=1}^H(\lambda_jZ_{jt})^{1/\rho}.
\end{aligned}
\right.
$$

$$
\begin{aligned}
C_{ht}
&=
\frac{(\lambda_hZ_{ht})^{1/\rho}}{S_t}C_t =
\frac{(\lambda_hZ_{ht})^{1/\rho}}
{\sum_{j=1}^H(\lambda_jZ_{jt})^{1/\rho}}C_t.
\end{aligned}
$$

**代表性 agent 权重**

$$
\begin{aligned}
\lambda_hZ_{ht}\frac{C_{ht}^{1-\rho}}{1-\rho}
&=
\lambda_hZ_{ht}
\frac{\left[\frac{(\lambda_hZ_{ht})^{1/\rho}}{S_t}C_t\right]^{1-\rho}}{1-\rho}\\
&=
\frac{(\lambda_hZ_{ht})^{1/\rho}}{S_t^{1-\rho}}
\frac{C_t^{1-\rho}}{1-\rho},\\
\sum_{h=1}^H
\lambda_hZ_{ht}\frac{C_{ht}^{1-\rho}}{1-\rho}
&=
S_t^\rho\frac{C_t^{1-\rho}}{1-\rho}.
\end{aligned}
$$

定义 $Z_t=S_t^\rho$，则

$$
\begin{aligned}
Z_t
&=
\left(
\sum_{h=1}^H(\lambda_hZ_{ht})^{1/\rho}
\right)^\rho,\\
\sum_{h=1}^H\sum_{t=0}^T
\lambda_h\delta^t
E\!\left[
Z_{ht}\frac{C_{ht}^{1-\rho}}{1-\rho}
\right]
&=
\sum_{t=0}^T
\delta^tE\!\left[
Z_t\frac{C_t^{1-\rho}}{1-\rho}
\right].
\end{aligned}
$$

**$\rho>1$ 时的 supermartingale 性质**

$$
\begin{aligned}
\widetilde x_h
&=(\lambda_hZ_{h,t+1})^{1/\rho},
\qquad
Z_{t+1}=\left(\sum_{h=1}^H\widetilde x_h\right)^\rho,\\
\left(E_t[Z_{t+1}]\right)^{1/\rho}
&=
\left(
E_t\!\left[
\left(\sum_{h=1}^H\widetilde x_h\right)^\rho
\right]
\right)^{1/\rho}\\
&\le
\sum_{h=1}^H
\left(E_t[\widetilde x_h^\rho]\right)^{1/\rho} =
\sum_{h=1}^H
\left(E_t[\lambda_hZ_{h,t+1}]\right)^{1/\rho}\\
&=
\sum_{h=1}^H(\lambda_hZ_{ht})^{1/\rho}
=Z_t^{1/\rho}
\quad \text{(Minkowski + density process)}\\
&\Longrightarrow
E_t[Z_{t+1}]\le Z_t.
\end{aligned}
$$

**结论**：heterogeneous-belief planner 等价于 representative agent with stochastic weight $Z_t$，且 $\rho>1$ 时 $Z_t$ 是 supermartingale。


::::

---




![Pasted image 20260428151432.png](../attachment/Pasted image 20260428151432.png)

::::{solution}


**设定**：$D_t\in\{0,1\}$，$\delta=3/4$，fundamental value 定义为

$$
\begin{aligned}
V_h(s)
&=
E_h\!\left[\sum_{t=1}^{\infty}\delta^tD_t\mid D_0=s\right],
\qquad s\in\{0,1\}.
\end{aligned}
$$

递归式来自先看 $D_{t+1}$，若 $D_{t+1}=1$，下一期收到 dividend $1$ 并进入 state $1$：

$$
\begin{aligned}
V_h(s)
&=
\delta
\left[
P_h(0\mid s)V_h(0)
+P_h(1\mid s)\bigl(1+V_h(1)\bigr)
\right]\\
\Longleftrightarrow\quad
\frac{V_h(s)}{\delta}
&=
P_h(0\mid s)V_h(0)
+P_h(1\mid s)\bigl(1+V_h(1)\bigr).
\end{aligned}
$$

**Investor 1**

令 $x=V_1(0)$，$y=V_1(1)$。由于 $1/\delta=4/3$：

$$
\left\{
\begin{aligned}
\frac{4}{3}x
&=\frac{1}{2}x+\frac{1}{2}(1+y),\\
\frac{4}{3}y
&=\frac{2}{3}x+\frac{1}{3}(1+y)
\end{aligned}
\right.
\Longleftrightarrow
\left\{
\begin{aligned}
5x-3y&=3,\\
-2x+3y&=1
\end{aligned}
\right.
\Longleftrightarrow
\left\{
\begin{aligned}
V_1(0)&=\frac{4}{3},\\
V_1(1)&=\frac{11}{9}.
\end{aligned}
\right.
$$

**Investor 2**

令 $x=V_2(0)$，$y=V_2(1)$：

$$
\left\{
\begin{aligned}
\frac{4}{3}x
&=\frac{2}{3}x+\frac{1}{3}(1+y),\\
\frac{4}{3}y
&=\frac{1}{4}x+\frac{3}{4}(1+y)
\end{aligned}
\right.
\Longleftrightarrow
\left\{
\begin{aligned}
2x-y&=1,\\
-3x+7y&=9
\end{aligned}
\right.
\Longleftrightarrow
\left\{
\begin{aligned}
V_2(0)&=\frac{16}{11},\\
V_2(1)&=\frac{21}{11}.
\end{aligned}
\right.
$$

**Fundamental value 比较**

$$
\begin{aligned}
V_2(0)-V_1(0)
&=
\frac{16}{11}-\frac{4}{3}
=\frac{4}{33}>0,\\
V_2(1)-V_1(1)
&=
\frac{21}{11}-\frac{11}{9}
=\frac{68}{99}>0.
\end{aligned}
$$

因此 investor 2 在两个 state 下都有更高的 fundamental value。

**State $D=0$ 下 investor 1 对 investor 2 未来估值更乐观**

题目要比较的是在当前 $D_t=0$ 时，两个人对 investor 2 下一期 value 的条件期望：

$$
\begin{aligned}
&P_1(0\mid0)V_2(0)+P_1(1\mid0)\bigl(1+V_2(1)\bigr) \gt
P_2(0\mid0)V_2(0)+P_2(1\mid0)\bigl(1+V_2(1)\bigr)\\
&\Longleftrightarrow
\frac{1}{2}\cdot\frac{16}{11}
+\frac{1}{2}\left(1+\frac{21}{11}\right) \gt
\frac{2}{3}\cdot\frac{16}{11}
+\frac{1}{3}\left(1+\frac{21}{11}\right)\\
&\Longleftrightarrow
\frac{24}{11} \gt
\frac{64}{33}.
\end{aligned}
$$

结论成立。直观上，虽然 investor 2 自己的 fundamental value 更高，但在 state $0$，investor 1 给下一期进入 high-dividend state 的概率是 $1/2$，高于 investor 2 的 $1/3$，所以 investor 1 对 investor 2 的下一期 valuation 更乐观。

::::

---




![Pasted image 20260428155824.png](../attachment/Pasted image 20260428155824.png)

::::{solution}

**设定与候选均衡**

$$
\left\{
\begin{aligned}
\widetilde x
&=\text{risky asset payoff},\\
\widetilde s
&=\text{informed signal},
\qquad
\widetilde z=\text{noise supply / noise shock},\\
p(\widetilde s,\widetilde z)
&=
\frac{E[\widetilde x\mid p(\widetilde s,\widetilde z)]}{R_f}
&\text{(REE condition)},\\
\mu(\widetilde s)
&=E[\widetilde x\mid \widetilde s],\\
\bar x&=E[\widetilde x],
\qquad
\bar s=E[\widetilde s],
\qquad
\bar z=E[\widetilde z],\\
\operatorname{cov}(\widetilde s,\widetilde z)
&=0,
\qquad
\operatorname{cov}(\widetilde x,\widetilde z)=0,\\
p_F(\widetilde s,\widetilde z)
&=\frac{\mu(\widetilde s)}{R_f}
&\text{(fully revealing)},\\
p_U(\widetilde s,\widetilde z)
&=\frac{\bar x}{R_f}
&\text{(unrevealing)},\\
p_b(\widetilde s,\widetilde z)
&=a_0+a_1(\widetilde s+b\widetilde z),
\qquad a_1\ne0
&\text{(partially revealing)}.
\end{aligned}
\right.
$$

**三种情况的均衡验证**

$$
\begin{aligned}
\frac{E[\widetilde x\mid p_F(\widetilde s,\widetilde z)]}{R_f}
&=
\frac{E[\widetilde x\mid \mu(\widetilde s)]}{R_f}
=\frac{\mu(\widetilde s)}{R_f}
=p_F(\widetilde s,\widetilde z),\\
\frac{E[\widetilde x\mid p_U(\widetilde s,\widetilde z)]}{R_f}
&=
\frac{E[\widetilde x]}{R_f}
=\frac{\bar x}{R_f}
=p_U(\widetilde s,\widetilde z).
\end{aligned}
$$

对 partially revealing case，因为 $a_1\ne0$，观察 $p_b$ 等价于观察 noisy signal $\widetilde y_b=\widetilde s+b\widetilde z$。先写 $\widetilde x$ 对 $\widetilde y_b$ 的 linear projection：

$$
\begin{aligned}
\widetilde y_b
&=\widetilde s+b\widetilde z,
\qquad
\bar y_b=\bar s+b\bar z,\\
\widetilde x
&=
\bar x+\beta_b(\widetilde y_b-\bar y_b)+\widetilde\varepsilon_b,
\qquad
E[\widetilde\varepsilon_b]=0,\quad
\operatorname{cov}(\widetilde\varepsilon_b,\widetilde y_b)=0,\\
\operatorname{cov}(\widetilde x,\widetilde y_b)
&=
\beta_b\operatorname{var}(\widetilde y_b)
+\operatorname{cov}(\widetilde\varepsilon_b,\widetilde y_b)
=\beta_b\operatorname{var}(\widetilde y_b),\\
\beta_b
&=
\frac{\operatorname{cov}(\widetilde x,\widetilde y_b)}
{\operatorname{var}(\widetilde y_b)} =
\frac{\operatorname{cov}(\widetilde x,\widetilde s+b\widetilde z)}
{\operatorname{var}(\widetilde s+b\widetilde z)}\\
&=
\frac{
\operatorname{cov}(\widetilde x,\widetilde s)
+b\operatorname{cov}(\widetilde x,\widetilde z)
}{
\operatorname{var}(\widetilde s)
+b^2\operatorname{var}(\widetilde z)
+2b\operatorname{cov}(\widetilde s,\widetilde z)
}\\
&=
\frac{\operatorname{cov}(\widetilde x,\widetilde s)}
{\operatorname{var}(\widetilde s)+b^2\operatorname{var}(\widetilde z)}.
\end{aligned}
$$

$$
\begin{aligned}
\frac{E[\widetilde x\mid p_b(\widetilde s,\widetilde z)]}{R_f}
&=
\frac{E[\widetilde x\mid \widetilde s+b\widetilde z]}{R_f}\\
&=
\frac{1}{R_f}
\left[
\bar x+\beta_b(\widetilde s-\bar s+b\widetilde z-b\bar z)
\right]\\
&=
\frac{1}{R_f}
\left[
\bar x-\beta_b(\bar s+b\bar z)
\right]
+\frac{\beta_b}{R_f}\widetilde s
+\frac{b\beta_b}{R_f}\widetilde z.
\end{aligned}
$$

要使 $p_b=a_0+a_1\widetilde s+a_1b\widetilde z$ 满足 REE condition，比较常数项、$\widetilde s$ 项、$\widetilde z$ 项：

$$
\left\{
\begin{aligned}
a_0
&=
\frac{1}{R_f}
\left[
\bar x-\beta_b(\bar s+b\bar z)
\right],\\
a_1
&=
\frac{\beta_b}{R_f} =
\frac{1}{R_f}
\frac{\operatorname{cov}(\widetilde x,\widetilde s)}
{\operatorname{var}(\widetilde s)+b^2\operatorname{var}(\widetilde z)},\\
a_1b
&=
\frac{b\beta_b}{R_f}.
\end{aligned}
\right.
$$

第三个方程由第二个方程自动推出。因此对任意 $b$，都可以用前两个方程定义 $a_0,a_1$，得到一个 reveal $\widetilde s+b\widetilde z$ 的 partially revealing equilibrium。

::::

---





![Pasted image 20260428162212.png](../attachment/Pasted image 20260428162212.png)

::::{solution}

**设定**

$\widetilde x$ 是 risky asset payoff，$\widetilde y$ 是随机 outside supply / noise supply。投资者不是分别观察到 $\widetilde x$ 和 $\widetilde y$，而是观察价格；若猜测线性价格

$$
\begin{aligned}
p(\widetilde x,\widetilde y)
&=a_0+a_1(\widetilde x+b\widetilde y),
\qquad a_1\ne0,
\end{aligned}
$$

则观察 price 等价于观察一个 price-revealed index：

$$
\begin{aligned}
\widetilde r_b
&=\widetilde x+b\widetilde y.
\end{aligned}
$$

这里 $\widetilde x+b\widetilde y$ 不是说投资者分别知道 $\widetilde x,\widetilde y$ 后相加，而是 price 把 payoff fundamental 和 supply noise 混成一个标量信号；$b$ 把 supply shock 转换成 payoff-index 的单位。

**（a）** 设 $\tau\phi=\int_0^1\tau_h\phi_h\,dh$。Investor $h$ 的 risky asset demand $\theta_h$ 与 market clearing 联立如下；出清条件是 aggregate demand 等于随机总供给 $\widetilde y$：

$$
\left\{
\begin{aligned}
&\theta_h =
\tau_h\phi_h
\left(
E[\widetilde x\mid \widetilde r_b,\widetilde s_h]
-R_fp(\widetilde x,\widetilde y)
\right),\\
&\int_0^1\theta_h\,dh
=\widetilde y
\end{aligned}
\right.
\Longleftrightarrow
\begin{aligned}
&R_fp(\widetilde x,\widetilde y)\int_0^1\tau_h\phi_h\,dh =
\int_0^1\tau_h\phi_h
E[\widetilde x\mid \widetilde r_b,\widetilde s_h]\,dh
-\widetilde y,\\
&p(\widetilde x,\widetilde y) =
\int_0^1
\frac{\tau_h\phi_h}{\tau\phi}
\frac{E[\widetilde x\mid \widetilde r_b,\widetilde s_h]}{R_f}\,dh
-\frac{\widetilde y}{\tau\phi R_f}.
\end{aligned}
$$

equilibrium price 是 discounted weighted average of conditional expectations minus risk premium term：

$$
\begin{aligned}
p(\widetilde x,\widetilde y)
&=
\int_0^1
\underbrace{\frac{\tau_h\phi_h}{\tau\phi}}_{\text{weight on investor }h}
\frac{E[\widetilde x\mid \widetilde r_b,\widetilde s_h]}{R_f}\,dh
-\underbrace{\frac{\widetilde y}{\tau\phi R_f}}_{\text{risk premium / supply discount}}.
\end{aligned}
$$

这里 $-\widetilde y/(\tau\phi R_f)$ 表面来自 market-clearing 的 supply $\widetilde y$，经济含义是 risk premium：当 risky asset 总供给 $\widetilde y$ 更大时，投资者必须吸收更多风险，价格要相对 discounted expected payoff 下降；aggregate risk-bearing capacity $\tau\phi$ 越大，这个 discount 越小。

**（b）** 从题目定义直接推出 aggregation weight：

$$
\left\{
\begin{aligned}
\beta
&=
\frac{\operatorname{var}(\widetilde x)}
{\operatorname{var}(\widetilde x)+b^2\operatorname{var}(\widetilde y)},\\
\kappa_h
&=
\frac{(1-\beta)\operatorname{var}(\widetilde x)}
{(1-\beta)\operatorname{var}(\widetilde x)+\operatorname{var}(\widetilde\varepsilon_h)},\\
\sigma_h^2
&=
\operatorname{var}(\widetilde x\mid \widetilde r_b,\widetilde s_h)
=(1-\kappa_h)(1-\beta)\operatorname{var}(\widetilde x),\\
\phi_h
&=\frac{1}{\sigma_h^2}
\qquad\text{(conditional precision)}.
\end{aligned}
\right.
$$

工具公式见 正态条件方差 与 贝叶斯更新：先验、似然、后验。本题只使用其中的 Gaussian / linear projection 后验方差更新。

两步更新写成联立链：

第二步使用 $\widetilde s_h=\widetilde x+\widetilde\varepsilon_h$，且 $\widetilde\varepsilon_h$ 与 $\widetilde x$ 的 price-revealed residual 独立。

$$
\left\{
\begin{aligned}
\operatorname{var}(\widetilde x)
&=\operatorname{var}(\widetilde x),\\
\operatorname{var}(\widetilde x\mid \widetilde x+b\widetilde y)
&=
\operatorname{var}(\widetilde x)
-\frac{\operatorname{cov}(\widetilde x,\widetilde x+b\widetilde y)^2}
{\operatorname{var}(\widetilde x+b\widetilde y)}\\
&=
\operatorname{var}(\widetilde x)
-\frac{\operatorname{var}(\widetilde x)^2}
{\operatorname{var}(\widetilde x)+b^2\operatorname{var}(\widetilde y)}
=(1-\beta)\operatorname{var}(\widetilde x),\\
\operatorname{var}(\widetilde x\mid \widetilde x+b\widetilde y,\widetilde s_h)
&=
\underbrace{\operatorname{var}(\widetilde x\mid \widetilde x+b\widetilde y)}_{A} -
\frac{
\operatorname{cov}(\widetilde x,\widetilde s_h\mid \widetilde x+b\widetilde y)^2
}{
\operatorname{var}(\widetilde s_h\mid \widetilde x+b\widetilde y)
}\\
&=
\underbrace{\operatorname{var}(\widetilde x\mid \widetilde x+b\widetilde y)}_{A} -
\frac{
\underbrace{\operatorname{var}(\widetilde x\mid \widetilde x+b\widetilde y)^2}_{A^2}
}{
\underbrace{\operatorname{var}(\widetilde x\mid \widetilde x+b\widetilde y)
+\operatorname{var}(\widetilde\varepsilon_h)}_{A+\operatorname{var}(\widetilde\varepsilon_h)}
}\\
&=
A-\frac{A^2}{A+\operatorname{var}(\widetilde\varepsilon_h)} =
A-\underbrace{\frac{A}{A+\operatorname{var}(\widetilde\varepsilon_h)}}_{\kappa_h}A\\
&=
(1-\kappa_h)\operatorname{var}(\widetilde x\mid \widetilde x+b\widetilde y)\\
&=
(1-\kappa_h)(1-\beta)\operatorname{var}(\widetilde x)
=\sigma_h^2.
\end{aligned}
\right.
$$

精度（precision）写法更直接。设

$$
\begin{aligned}
A
&=\operatorname{var}(\widetilde x\mid \widetilde x+b\widetilde y)
=(1-\beta)\operatorname{var}(\widetilde x).
\end{aligned}
$$

第二步观察 private signal $\widetilde s_h=\widetilde x+\widetilde\varepsilon_h$，所以

$$
\begin{aligned}
\underbrace{\frac{1}{\operatorname{var}(\widetilde x\mid \widetilde x+b\widetilde y,\widetilde s_h)}}_{\text{posterior precision}}
&=
\underbrace{\frac{1}{A}}_{\text{prior precision after price}}
+
\underbrace{\frac{1}{\operatorname{var}(\widetilde\varepsilon_h)}}_{\text{private signal precision}}\\
\Longleftrightarrow\quad
\operatorname{var}(\widetilde x\mid \widetilde x+b\widetilde y,\widetilde s_h)
&=
\left(\frac{1}{A}+\frac{1}{\operatorname{var}(\widetilde\varepsilon_h)}\right)^{-1}\\
&=
\frac{A\operatorname{var}(\widetilde\varepsilon_h)}
{A+\operatorname{var}(\widetilde\varepsilon_h)} =
\left(
1-\frac{A}{A+\operatorname{var}(\widetilde\varepsilon_h)}
\right)A\\
&=
(1-\kappa_h)A
=(1-\kappa_h)(1-\beta)\operatorname{var}(\widetilde x).
\end{aligned}
$$

其中

$$
\left\{
\begin{aligned}
\beta
&=
\frac{\operatorname{var}(\widetilde x)}
{\operatorname{var}(\widetilde x)+b^2\operatorname{var}(\widetilde y)},\\
\kappa_h
&=
\frac{
\operatorname{cov}(\widetilde x,\widetilde s_h\mid \widetilde x+b\widetilde y)^2
}{
\operatorname{var}(\widetilde s_h\mid \widetilde x+b\widetilde y)
\operatorname{var}(\widetilde x\mid \widetilde x+b\widetilde y)
}\\
&=
\frac{\operatorname{var}(\widetilde x\mid \widetilde x+b\widetilde y)}
{\operatorname{var}(\widetilde x\mid \widetilde x+b\widetilde y)+\operatorname{var}(\widetilde\varepsilon_h)} =
\frac{(1-\beta)\operatorname{var}(\widetilde x)}
{(1-\beta)\operatorname{var}(\widetilde x)+\operatorname{var}(\widetilde\varepsilon_h)}.
\end{aligned}
\right.
$$

$$
\begin{aligned}
\frac{1-\kappa_h}{\kappa_h}(1-\beta)\operatorname{var}(\widetilde x)
&=
\operatorname{var}(\widetilde\varepsilon_h),\\
\frac{1}{\phi_h\kappa_h}
&=
\frac{\sigma_h^2}{\kappa_h} =
\frac{1-\kappa_h}{\kappa_h}(1-\beta)\operatorname{var}(\widetilde x)
=\operatorname{var}(\widetilde\varepsilon_h).
\end{aligned}
$$

所以

$$
\tau_h\phi_h\kappa_h =
\frac{\phi_h\kappa_h}{\alpha_h}
=\frac{1}{\alpha_h\operatorname{var}(\widetilde\varepsilon_h)}
$$

**（c）**

$$
\left\{
\begin{aligned}
\tau_h\phi_h\kappa_h
&=
\frac{\phi_h\kappa_h}{\alpha_h}
=\frac{1}{\alpha_h\operatorname{var}(\widetilde\varepsilon_h)},\\
\kappa
&=
\frac{1}{\tau\phi}\int_0^1\tau_h\phi_h\kappa_h\,dh,\\
\int_0^1\tau_h\phi_h\kappa_h\widetilde s_h\,dh
&=
\tau\phi\kappa\widetilde x.
\end{aligned}
\right.
$$

条件期望分解：

$$
\begin{aligned}
E[\widetilde x\mid \widetilde r_b,\widetilde s_h]
&=
E[\widetilde x\mid \widetilde r_b]
+\kappa_h
\left(
\widetilde s_h
-E[\widetilde s_h\mid \widetilde r_b]
\right)\\
&=
E[\widetilde x\mid \widetilde r_b]
+\kappa_h
\left(
\widetilde s_h
-E[\widetilde x\mid \widetilde r_b]
\right)\\
&=
(1-\kappa_h)E[\widetilde x\mid \widetilde r_b]
+\kappa_h\widetilde s_h.
\end{aligned}
$$

代回 market-clearing price：

$$
\begin{aligned}
p(\widetilde x,\widetilde y)
&=
\frac{1}{\tau\phi R_f}
\int_0^1\tau_h\phi_h
\left[
(1-\kappa_h)E[\widetilde x\mid \widetilde r_b]
+\kappa_h\widetilde s_h
\right]dh
-\frac{\widetilde y}{\tau\phi R_f}\\
&=
\frac{E[\widetilde x\mid \widetilde r_b]}{R_f}
-\frac{\kappa E[\widetilde x\mid \widetilde r_b]}{R_f}
+\frac{\kappa\widetilde x}{R_f}
-\frac{\widetilde y}{\tau\phi R_f}\\
&=
\frac{(1-\kappa)E[\widetilde x\mid \widetilde r_b]}{R_f}
+\frac{\kappa\widetilde x}{R_f}
-\frac{\widetilde y}{\tau\phi R_f}.
\end{aligned}
$$

由 linear projection：

$$
\begin{aligned}
E[\widetilde x\mid \widetilde r_b]
&=
\bar x+\beta(\widetilde r_b-\bar x-b\bar y)
=\bar x+\beta(\widetilde x-\bar x+b\widetilde y-b\bar y).
\end{aligned}
$$

因此

$$
\begin{aligned}
p(\widetilde x,\widetilde y)
&=
\frac{(1-\kappa)[\bar x+\beta(\widetilde x-\bar x+b\widetilde y-b\bar y)]}{R_f}
+\frac{\kappa\widetilde x}{R_f}
-\frac{\widetilde y}{\tau\phi R_f}.
\end{aligned}
$$

令 $p(\widetilde x,\widetilde y)=a_0+a_1(\widetilde x+b\widetilde y)$，比较常数项、$\widetilde x$ 项、$\widetilde y$ 项：

$$
\left\{
\begin{aligned}
a_0
&=
\frac{(1-\kappa)[(1-\beta)\bar x-\beta b\bar y]}{R_f},\\
a_1
&=
\frac{(1-\kappa)\beta+\kappa}{R_f},\\
a_1b
&=
\frac{(1-\kappa)\beta b}{R_f}
-\frac{1}{\tau\phi R_f}.
\end{aligned}
\right.
$$

后两式联立：

$$
\begin{aligned}
\frac{[(1-\kappa)\beta+\kappa]b}{R_f}
&=
\frac{(1-\kappa)\beta b}{R_f}
-\frac{1}{\tau\phi R_f}\\
\Longleftrightarrow\quad
\frac{\kappa b}{R_f}
&=
-\frac{1}{\tau\phi R_f}\\
\Longleftrightarrow\quad
b
&=
-\frac{1}{\tau\phi\kappa} =
-\left(\int_0^1\tau_h\phi_h\kappa_h\,dh\right)^{-1} =
-\left(\int_0^1
\frac{1}{\alpha_h\operatorname{var}(\widetilde\varepsilon_h)}
\,dh\right)^{-1}.
\end{aligned}
$$

::::

---




![Pasted image 20260428183959.png](../attachment/Pasted image 20260428183959.png)

#Kyle-model #CARA-normal #linear-equilibrium

::::{solution}

**设定与线性猜测**

$$
\left\{
\begin{aligned}
\widetilde x&=\text{risky asset payoff / liquidation value},\\
\widetilde s&=\widetilde x+\widetilde\varepsilon,
\qquad
\widetilde\varepsilon\perp\widetilde x,\\
\widetilde z&=\text{noise order},
\qquad
E[\widetilde z]=0,
\qquad
\widetilde z\perp(\widetilde x,\widetilde\varepsilon),\\
\widetilde v&=E[\widetilde x\mid\widetilde s],
\qquad
\sigma^2=\operatorname{var}(\widetilde x\mid\widetilde s) =
\left(
\frac{1}{\operatorname{var}(\widetilde x)}
+\frac{1}{\operatorname{var}(\widetilde\varepsilon)}
\right)^{-1},\\
V&=\operatorname{var}(\widetilde v),
\qquad
Z=\operatorname{var}(\widetilde z),\\
\theta(\widetilde v)&=a+\beta\widetilde v
\quad\text{(informed demand)},\\
\widetilde y&=\theta(\widetilde v)+\widetilde z
=a+\beta\widetilde v+\widetilde z
\quad\text{(total order flow)},\\
p(\widetilde y)&=E[\widetilde x\mid\widetilde y]
=E[\widetilde v\mid\widetilde y]
=\delta+\lambda\widetilde y
\quad\text{(market maker price)}.
\end{aligned}
\right.
$$

变量对应关系：

- $\theta(\widetilde v)=a+\beta\widetilde v$：informed trader 的 order / informed volume。
- $\widetilde z$：noise order，即 liquidity / noise trader 的随机订单。
- $\widetilde y=\theta(\widetilde v)+\widetilde z$：market maker 观察到的 total order flow。
- $p(\widetilde y)=\delta+\lambda\widetilde y$：market maker 的线性定价规则。
- $\widetilde\pi(\theta)=\theta[\widetilde x-p(\theta+\widetilde z)]$：informed trader 持有 $\theta$ shares 的交易利润。

$$
\begin{aligned}
E[\widetilde v\mid\widetilde y]
&=
\underbrace{\left[\bar v-\lambda(a+\beta\bar v)\right]}_{\delta}
+\lambda\widetilde y,\\
\lambda
&=
\frac{\operatorname{cov}(\widetilde v,a+\beta\widetilde v+\widetilde z)}
{\operatorname{var}(a+\beta\widetilde v+\widetilde z)} =
\frac{\beta V}{\beta^2V+Z}.
\end{aligned}
\tag{19.1}
$$

Informed trader 给定 $\widetilde s$ 选择 order $\theta$；其 order 和 noise order 合成 market maker 看到的 total order flow：

$$
\begin{aligned}
\widetilde y(\theta)
&=\theta+\widetilde z,\\
p(\widetilde y(\theta))
&=\delta+\lambda\widetilde y(\theta)
=\delta+\lambda\theta+\lambda\widetilde z,\\
\widetilde\pi(\theta)
&=\theta\left[\widetilde x-p(\widetilde y(\theta))\right]\\
&=
\theta(\widetilde x-\delta-\lambda\theta-\lambda\widetilde z).
\end{aligned}
$$

CARA-normal certainty equivalent：

$$
\begin{aligned}
CE(\theta\mid\widetilde s)
&=
E[\widetilde\pi(\theta)\mid\widetilde s]
-\frac{\alpha}{2}\operatorname{var}(\widetilde\pi(\theta)\mid\widetilde s)\\
&=
\theta(\widetilde v-\delta-\lambda\theta)
-\frac{\alpha}{2}\theta^2(\sigma^2+\lambda^2Z)\\
\frac{\partial CE}{\partial\theta}=0
&\Longleftrightarrow
\theta =
\frac{\widetilde v-\delta}{2\lambda+\alpha\sigma^2+\alpha\lambda^2Z}\\
&=
\underbrace{\frac{-\delta}{2\lambda+\alpha\sigma^2+\alpha\lambda^2Z}}_{a}
+
\underbrace{\frac{1}{2\lambda+\alpha\sigma^2+\alpha\lambda^2Z}}_{\beta}
\widetilde v.
\end{aligned}
\tag{19.2}
$$

其中 $\operatorname{var}(\widetilde x-\delta-\lambda\theta-\lambda\widetilde z\mid\widetilde s)=\sigma^2+\lambda^2Z$。

**消去 $\beta$**

$$
\left\{
\begin{aligned}
\lambda
&=\frac{\beta V}{\beta^2V+Z},\\
\beta
&=\frac{1}{2\lambda+\alpha\sigma^2+\alpha\lambda^2Z}
\end{aligned}
\right.
\Longrightarrow
\begin{aligned}
\lambda V+\lambda Z(2\lambda+\alpha\sigma^2+\alpha\lambda^2Z)^2
&=
V(2\lambda+\alpha\sigma^2+\alpha\lambda^2Z).
\end{aligned}
$$

因此

$$
\boxed{
\lambda V+\lambda Z(2\lambda+\alpha\sigma^2+\alpha\lambda^2Z)^2
-V(2\lambda+\alpha\sigma^2+\alpha\lambda^2Z)=0
}
$$

最高次项为 $\alpha^2Z^3\lambda^5$，所以 $\lambda$ 是 fifth-order polynomial 的根。

::::

---




![Pasted image 20260428194818.png](../attachment/Pasted image 20260428194818.png)

::::{solution}

**a. Brownian bridge 与价格过程**

$$
\begin{aligned}
c
&=\frac{\log\widetilde v-\mu}{\sigma_v}
\sim N(0,1)
\qquad\text{(insider 要最终 reveal 的标准化值)},\\
Y_t
&=\theta_t+\sigma_zB_t,
\qquad
W_t=\frac{Y_t}{\sigma_z}
\qquad
W_0=0
\qquad\text{(标准化 order flow)},\\
d\theta_t
&=\sigma_z\frac{c-W_t}{1-t}\,dt
\qquad\text{(给定策略：把 }W_t\text{ 拉向 }c\text{)},\\
dW_t
&=\frac{1}{\sigma_z}(d\theta_t+\sigma_z\,dB_t)
=\frac{c-W_t}{1-t}\,dt+dB_t\\
&=
\frac{\frac{\log\widetilde v-\mu}{\sigma_v}-W_t}{1-t}\,dt+dB_t.
\end{aligned}
$$

由策略推出 $W$ 满足 Brownian bridge 的 SDE。验证 terminal value：

$$
\begin{aligned}
d(c-W_t)
&=
-\frac{c-W_t}{1-t}\,dt-dB_t,\\
d\left(\frac{c-W_t}{1-t}\right)
&=
\frac{1}{1-t}d(c-W_t)
+\frac{c-W_t}{(1-t)^2}\,dt\\
&=
\frac{1}{1-t}
\left[
-\frac{c-W_t}{1-t}\,dt-dB_t
\right]
+\frac{c-W_t}{(1-t)^2}\,dt\\
&=
-\frac{1}{1-t}\,dB_t\\
\Longrightarrow\quad
W_t
&=
tc+(1-t)\int_0^t\frac{1}{1-u}\,dB_u,\\
\operatorname{var}\!\left((1-t)\int_0^t\frac{1}{1-u}\,dB_u\right)
&=
(1-t)^2\int_0^t\frac{1}{(1-u)^2}\,du
=t(1-t)\to0.
\end{aligned}
$$

因此

$$
\begin{aligned}
W_t-c
&=
-(1-t)c
+(1-t)\int_0^t\frac{1}{1-u}\,dB_u,\\
E[(W_t-c)^2]
&\le
2(1-t)^2E[c^2]+2t(1-t)
\to0,
\end{aligned}
$$

所以 $W_t\to c=(\log\widetilde v-\mu)/\sigma_v$ in $L^2$，即 $W$ 是 terminal value 为 $c$ 的 Brownian bridge。又因为 $c\sim N(0,1)$ 且与 noise Brownian motion 独立，

$$
\begin{aligned}
\operatorname{var}(W_t)
&=
t^2\operatorname{var}(c)+t(1-t)=t,\\
\operatorname{cov}(W_s,W_t)
&=
st+(1-s)(1-t)\int_0^s\frac{1}{(1-u)^2}\,du\\
&=
st+s(1-t)=s
\qquad(s\le t).
\end{aligned}
$$

所以在 market makers' filtration 下，$W$ 是 Brownian motion。价格过程为

$$
\begin{aligned}
\frac{dP_t}{P_t}
&=\lambda\,dY_t
=\lambda\sigma_z\,dW_t
=\sigma_v\,dW_t,\\
d\log P_t
&=
\frac{dP_t}{P_t}
-\frac{1}{2}\left(\frac{dP_t}{P_t}\right)^2
=\sigma_v\,dW_t-\frac{1}{2}\sigma_v^2\,dt,\\
P_t
&=
P_0\exp\!\left(\sigma_vW_t-\frac{1}{2}\sigma_v^2t\right),\\
P_1
&=
P_0\exp\!\left(\sigma_vW_1-\frac{1}{2}\sigma_v^2\right)\\
&=
e^{\mu+\frac{1}{2}\sigma_v^2}
\exp\!\left(\log\widetilde v-\mu-\frac{1}{2}\sigma_v^2\right)
=\widetilde v.
\end{aligned}
$$

因此 $P$ 在 market makers' filtration 下是 geometric Brownian motion，且 $P_t=E[\widetilde v\mid\mathcal F_t^Y]$、$P_1=\widetilde v$。

**b. Itô 展开与最优性**

对函数 $J(t,p)$：

$$
\left\{
\begin{aligned}
J_t&=-\frac{\sigma_v\sigma_z v}{2},\\
J_p&=\frac{1}{\lambda}-\frac{v}{\lambda p},\\
J_{pp}&=\frac{v}{\lambda p^2},\\
(dP)^2&=\sigma_v^2P^2\,dt.
\end{aligned}
\right.
$$

Itô 展开：

$$
\begin{aligned}
J(1,P_1)
&=
J(0,P_0)+\int_0^1J_t\,dt+\int_0^1J_p\,dP
+\frac{1}{2}\int_0^1J_{pp}(dP)^2\\
&=
J(0,P_0)-\frac{\sigma_v\sigma_zv}{2}
+\int_0^1\left(\frac{1}{\lambda}-\frac{v}{\lambda P}\right)dP
+\frac{1}{2}\frac{v\sigma_v^2}{\lambda}\\
&=
J(0,P_0)+\int_0^1\frac{P-v}{\lambda}\frac{dP}{P}\\
&=
J(0,P_0)+\int_0^1(P-v)(d\theta+\sigma_z\,dB).
\end{aligned}
$$

移项得

$$
\begin{aligned}
\int_0^1(v-P)\,d\theta
&=
J(0,P_0)-J(1,P_1)+\int_0^1(P-v)\sigma_z\,dB.
\end{aligned}
$$

取期望，且 stochastic integral 的期望为 $0$：

$$
\begin{aligned}
E\!\left[\int_0^1(\widetilde v-P)\,d\theta\right]
&=
J(0,P_0)-J(1,P_1)
\le J(0,P_0).
\end{aligned}
$$

这里的 objective 是 informed trader 的 expected profit。上式说明对任意 admissible strategy，

$$
\begin{aligned}
E\!\left[\int_0^1(\widetilde v-P)\,d\theta\right]
&\le J(0,P_0)
\qquad\text{(universal upper bound)},\\
J(1,p)
&\ge J(1,v)=0,
\qquad
J(1,p)=0\Longleftrightarrow p=v,\\
P_1=\widetilde v
&\Longrightarrow
J(1,P_1)=0\\
&\Longrightarrow
E\!\left[\int_0^1(\widetilde v-P)\,d\theta\right]
=J(0,P_0).
\end{aligned}
$$

因此 $P_1=\widetilde v$ 的策略达到所有策略的收益上界，所以是 optimal。

::::

---



![Pasted image 20260428195122.png](../attachment/Pasted image 20260428195122.png)

::::{solution}

**解析** 本题只有三个 possible payoffs：

$$
\begin{aligned}
x_1&=\$0,\qquad x_2=\$3000,\qquad x_3=\$4000.
\end{aligned}
$$

令 probability simplex 的坐标为 $(p_1,p_3)$，即第一维是 payoff $x_1=\$0$ 的概率，第二维是 payoff $x_3=\$4000$ 的概率，剩余概率给 $x_2=\$3000$：

$$
\begin{aligned}
p_2
&=1-p_1-p_3.
\end{aligned}
$$

于是

$$
\left\{
\begin{aligned}
A&=(0,0) &\text{(sure }x_2),\\
B&=(0.2,0.8) &\text{(0.2 prob. of }x_1,\ 0.8\text{ prob. of }x_3),\\
Q&=(1,0) &\text{(sure }x_1),\\
C&=0.25A+0.75Q=(0.75,0),\\
D&=0.25B+0.75Q=(0.8,0.2).
\end{aligned}
\right.
$$

**a. 偏好等价**

$$
\begin{aligned}
C\succ D
&\Longleftrightarrow
0.25u(x_2)>0.2u(x_3)\\
&\Longleftrightarrow
u(x_2)>0.8u(x_3)
\Longleftrightarrow
A\succ B.
\end{aligned}
$$

**b. Independence 的写法**

$$
\begin{aligned}
C&=\alpha A+(1-\alpha)Q,\\
D&=\alpha B+(1-\alpha)Q,
\qquad
\alpha=0.25.
\end{aligned}
$$

所以由 independence axiom，

$$
\begin{aligned}
A\succ B
&\Longleftrightarrow
\alpha A+(1-\alpha)Q\succ\alpha B+(1-\alpha)Q\\
&\Longleftrightarrow
C\succ D.
\end{aligned}
$$

**c. 几何解释**

$$
\begin{aligned}
\operatorname{slope}(AB)
&=\frac{0.8-0}{0.2-0}=4,\\
\operatorname{slope}(CD)
&=\frac{0.2-0}{0.8-0.75}=4.
\end{aligned}
$$

因此 $AB\parallel CD$；从 $A$ 到 $B$ 与从 $C$ 到 $D$ 是同一个 risky direction，只是混入了不同数量的 sure-zero lottery $Q$。



::::

---



![Pasted image 20260428203158.png](../attachment/Pasted image 20260428203158.png)

::::{solution}

**解析** 两组偏好都化到同一个 utility inequality：

$$
\left\{
\begin{aligned}
A\succ B
&\Longleftrightarrow
0.002u(x_2)+0.998u(x_1) \gt
0.001u(x_3)+0.999u(x_1)\\
&\Longleftrightarrow
0.002u(x_2)>0.001u(x_3)+0.001u(x_1)\\
&\Longleftrightarrow
u(x_2)>\frac{1}{2}u(x_3)+\frac{1}{2}u(x_1),\\[0.4em]
C\succ D
&\Longleftrightarrow
0.9u(x_2)+0.1u(x_1) \gt
0.45u(x_3)+0.55u(x_1)\\
&\Longleftrightarrow
0.9u(x_2)>0.45u(x_3)+0.45u(x_1)\\
&\Longleftrightarrow
u(x_2)>\frac{1}{2}u(x_3)+\frac{1}{2}u(x_1).
\end{aligned}
\right.
$$

因此

$$
\begin{aligned}
A\succ B
&\Longleftrightarrow
C\succ D.
\end{aligned}
$$


::::

---



![Pasted image 20260428204347.png](../attachment/Pasted image 20260428204347.png)

::::{solution}

**解析** 令

$$
\begin{aligned}
F(\sigma)
&=
v(w-\pi(\sigma))E[\lambda(w+\sigma\widetilde\varepsilon)]
-E[\lambda(w+\sigma\widetilde\varepsilon)v(w+\sigma\widetilde\varepsilon)]
=0.
\end{aligned}
$$

一阶导：

$$
\begin{aligned}
0=F'(\sigma)
&=
-v'(w-\pi(\sigma))\pi'(\sigma)E[\lambda(w+\sigma\widetilde\varepsilon)]
+v(w-\pi(\sigma))E[\lambda'(w+\sigma\widetilde\varepsilon)\widetilde\varepsilon]\\
&\quad
-E\!\left[
\left(
\lambda'(w+\sigma\widetilde\varepsilon)v(w+\sigma\widetilde\varepsilon)
+\lambda(w+\sigma\widetilde\varepsilon)v'(w+\sigma\widetilde\varepsilon)
\right)\widetilde\varepsilon
\right].
\end{aligned}
$$

在 $\sigma=0$，用 $E[\widetilde\varepsilon]=0$：

$$
\begin{aligned}
0
&=
-v'(w)\lambda(w)\pi'(0)
\Longrightarrow
\pi'(0)=0.
\end{aligned}
$$

二阶导用 $F(\sigma)=G(\sigma)-H(\sigma)$ 压缩计算：

$$
\begin{aligned}
G(\sigma)
&=
v(w-\pi(\sigma))E[\lambda(w+\sigma\widetilde\varepsilon)],\\
H(\sigma)
&=
E[\lambda(w+\sigma\widetilde\varepsilon)v(w+\sigma\widetilde\varepsilon)].
\end{aligned}
$$

由 $\pi'(0)=0$、$E[\widetilde\varepsilon]=0$、$E[\widetilde\varepsilon^2]=1$，

$$
\begin{aligned}
G''(0)
&=
\left[
v''(w)(-\pi'(0))^2-v'(w)\pi''(0)
\right]\lambda(w)\\
&\quad
+2[-v'(w)\pi'(0)]\lambda'(w)E[\widetilde\varepsilon]
+v(w)\lambda''(w)E[\widetilde\varepsilon^2]\\
&=
\left[-v'(w)\pi''(0)\right]\lambda(w)
+v(w)\lambda''(w),\\
H''(0)
&=
E\!\left[
\left(
\lambda''(w)v(w)
+2\lambda'(w)v'(w)
+\lambda(w)v''(w)
\right)\widetilde\varepsilon^2
\right]\\
&=
\lambda''(w)v(w)+2\lambda'(w)v'(w)+\lambda(w)v''(w),\\
0=F''(0)
&=
G''(0)-H''(0)\\
&=
\left[-v'(w)\pi''(0)\right]\lambda(w)
+v(w)\lambda''(w)\\
&\quad
-\left[
\lambda''(w)v(w)+2\lambda'(w)v'(w)+\lambda(w)v''(w)
\right].
\end{aligned}
$$

整理得

$$
\begin{aligned}
-v'(w)\lambda(w)\pi''(0)
&=
2\lambda'(w)v'(w)+\lambda(w)v''(w)\\
\Longrightarrow\quad
\pi''(0)
&=
-\frac{v''(w)}{v'(w)}
-\frac{2\lambda'(w)}{\lambda(w)}.
\end{aligned}
$$

::::

---



![Pasted image 20260428205902.png](../attachment/Pasted image 20260428205902.png)

::::{solution}

**解析** 对 CRRA weighted utility，式 (25.13) 可写成

$$
\begin{aligned}
g(y)
&=y^{\gamma+1-\rho}-y^\gamma.
\end{aligned}
$$

**a. Monotonicity**

$$
\begin{aligned}
g'(y)
&=(\gamma+1-\rho)y^{\gamma-\rho}-\gamma y^{\gamma-1}\\
&=
y^{\gamma-1}\left[(\gamma+1-\rho)y^{1-\rho}-\gamma\right].
\end{aligned}
$$

由于 $y^{\gamma-1}>0$，要使 $g'(y)>0$ 对所有 $y>0$ 成立，需要

$$
\begin{aligned}
\gamma\le0,\qquad
\gamma+1-\rho\ge0,
\end{aligned}
$$

且至少一个严格，即 $\gamma\le0$、$\rho\le\gamma+1$ 且不能同时取等号。

**b. Concavity**

$$
\begin{aligned}
g''(y)
&=
(\gamma+1-\rho)(\gamma-\rho)y^{\gamma-\rho-1}
-\gamma(\gamma-1)y^{\gamma-2}\\
&=
y^{\gamma-2}
\left[
(\gamma+1-\rho)(\gamma-\rho)y^{1-\rho}
-\gamma(\gamma-1)
\right].
\end{aligned}
$$

在 (a) 的 monotonicity 条件下，$g''(y)\le0$ 对所有 $y>0$ 等价于

$$
\begin{aligned}
\gamma-\rho\le0
\qquad\Longleftrightarrow\qquad
\gamma\le\rho.
\end{aligned}
$$

所以

$$
\begin{aligned}
g\text{ increasing and concave}
\Longleftrightarrow
\gamma\le0,\qquad
\gamma\le\rho\le\gamma+1,
\end{aligned}
$$

且 $\gamma<0$ 或 $\rho<\gamma+1$。

**c. Lognormal certainty equivalent**

令 $\widetilde z=\log(1+\widetilde\varepsilon)\sim N(-\sigma^2/2,\sigma^2)$。由 certainty equivalent 定义：

$$
\begin{aligned}
\frac{[w(1-\pi)]^{1-\rho}}{1-\rho}
&=
\frac{
E\!\left[(we^{\widetilde z})^\gamma
\frac{(we^{\widetilde z})^{1-\rho}}{1-\rho}\right]
}{
E[(we^{\widetilde z})^\gamma]
}\\
\Longleftrightarrow\quad
(1-\pi)^{1-\rho}
&=
\frac{E[e^{(\gamma+1-\rho)\widetilde z}]}
{E[e^{\gamma\widetilde z}]}\\
&=
\frac{
\exp\!\left[-(\gamma+1-\rho)\frac{\sigma^2}{2}
+(\gamma+1-\rho)^2\frac{\sigma^2}{2}\right]
}{
\exp\!\left[-\gamma\frac{\sigma^2}{2}
+\gamma^2\frac{\sigma^2}{2}\right]
}\\
&=
\exp\!\left[-(\rho-2\gamma)(1-\rho)\frac{\sigma^2}{2}\right].
\end{aligned}
$$

因此

$$
\begin{aligned}
1-\pi
&=
e^{-(\rho-2\gamma)\sigma^2/2},
\qquad
\pi=1-e^{-(\rho-2\gamma)\sigma^2/2}.
\end{aligned}
$$

::::

---



![Pasted image 20260428214804.png](../attachment/Pasted image 20260428214804.png)

::::{solution}

**解析** LRT 表示 risk tolerance 线性：

$$
\begin{aligned}
T(w)
&=-\frac{u'(w)}{u''(w)}
=A+Bw.
\end{aligned}
$$

**i. Constant risk tolerance** 若 $T(w)=A$，令 $\alpha=1/A$：

$$
\begin{aligned}
\frac{d\log u'(w)}{dw}
&=\frac{u''(w)}{u'(w)}
=-\alpha\\
\Longrightarrow\quad
u'(w)&=K e^{-\alpha w}\\
\Longrightarrow\quad
u(w)&=C-\frac{K}{\alpha}e^{-\alpha w}.
\end{aligned}
$$

所以 $u$ 是 $-e^{-\alpha w}$ 的 monotone affine transform。

**ii. Proportional risk tolerance** 若 $T(w)=Bw$，令 $\rho=1/B$：

$$
\begin{aligned}
\frac{d\log u'(w)}{d\log w}
&=
\frac{wu''(w)}{u'(w)}
=-\rho\\
\Longrightarrow\quad
u'(w)&=Kw^{-\rho}.
\end{aligned}
$$

因此

$$
\begin{aligned}
\rho=1&:\quad u(w)=C+K\log w,\\
\rho\ne1&:\quad u(w)=C+\frac{K}{1-\rho}w^{1-\rho}.
\end{aligned}
$$

即 log 或 power utility 的 monotone affine transform。

**iii. General linear risk tolerance** 若 $T(w)=A+Bw$ 且 $A\ne0,B\ne0$，设

$$
\begin{aligned}
v(x)
&=u\!\left(\frac{x-A}{B}\right),
\qquad x=A+Bw.
\end{aligned}
$$

则

$$
\begin{aligned}
v'(x)
&=
\frac{1}{B}u'\!\left(\frac{x-A}{B}\right),\\
v''(x)
&=
\frac{1}{B^2}u''\!\left(\frac{x-A}{B}\right),\\
-\frac{v'(x)}{v''(x)}
&=
-B\frac{u'((x-A)/B)}{u''((x-A)/B)}
=B\left[A+B\left(\frac{x-A}{B}\right)\right]
=Bx.
\end{aligned}
$$

由 case (ii)，$v$ 是 log 或 power。令 $\zeta=-A/B$，则 $x=B(w-\zeta)$，故 $u$ 是 shifted log 或 shifted power：

$$
\begin{aligned}
B=1&:\quad u(w)\sim \log(w-\zeta),\\
B\ne1&:\quad
u(w)\sim
\frac{1}{1-\rho}
\left(\frac{w-\zeta}{\rho}\right)^{1-\rho},
\qquad
\rho=\frac{1}{B}.
\end{aligned}
$$

综上，monotone LRT utility 只能是 negative exponential、log、power、shifted log、shifted power 的 monotone affine transform。

::::

---



![Pasted image 20260428221909.png](../attachment/Pasted image 20260428221909.png)

::::{solution}

**解析** 设 risky payoff vector 为 $\widetilde R\in\mathbb R^n$，投资组合持仓为 $\phi\in\mathbb R^n$：

$$
\left\{
\begin{aligned}
\mu&=E[\widetilde R] &&\text{(expected payoff vector)},\\
\Sigma&=\operatorname{var}(\widetilde R) &&\text{(payoff covariance matrix)},\\
\phi'\widetilde R&=\text{portfolio payoff},\\
1'\phi&=w_0 &&\text{(no risk-free asset: full wealth invested)}.
\end{aligned}
\right.
$$

因此

$$
\begin{aligned}
E[\phi'\widetilde R]
&=\phi'\mu,\qquad
\operatorname{var}(\phi'\widetilde R)=\phi'\Sigma\phi.
\end{aligned}
$$

CARA-normal 下最大化 expected utility 等价于 mean-variance problem：

$$
\begin{aligned}
\max_{\phi:\,1'\phi=w_0}
\left\{
\phi'\mu-\frac{\alpha}{2}\phi'\Sigma\phi
\right\}.
\end{aligned}
$$

Lagrangian 与 FOC：

$$
\begin{aligned}
\mathcal L
&=
\phi'(\mu-\lambda 1)-\frac{\alpha}{2}\phi'\Sigma\phi+\lambda w_0,\\
\frac{\partial\mathcal L}{\partial\phi}=0
&\Longleftrightarrow
\mu-\lambda1-\alpha\Sigma\phi=0\\
&\Longleftrightarrow
\phi=\frac{1}{\alpha}\Sigma^{-1}(\mu-\lambda1).
\end{aligned}
$$

用 $1'\phi=w_0$ 解 $\lambda$：

$$
\begin{aligned}
w_0
&=
\frac{1}{\alpha}1'\Sigma^{-1}\mu
-\frac{\lambda}{\alpha}1'\Sigma^{-1}1\\
\Longleftrightarrow\quad
\lambda
&=
\frac{1'\Sigma^{-1}\mu-\alpha w_0}{1'\Sigma^{-1}1}.
\end{aligned}
$$

代回：

$$
\boxed{
\begin{aligned}
\phi
&=
\frac{1}{\alpha}\Sigma^{-1}\mu
+
\left(
\frac{\alpha w_0-1'\Sigma^{-1}\mu}
{\alpha\,1'\Sigma^{-1}1}
\right)\Sigma^{-1}1.
\end{aligned}
}
$$

::::

---




**对比：有没有 risk-free asset**

这里 $\widetilde R=(\widetilde R_1,\dots,\widetilde R_n)'$ 是 $n$ 个 risky assets 的**gross return** 向量，$\mu=E[\widetilde R]$ 是其期望收益向量，$\Sigma=\operatorname{Var}(\widetilde R)$ 是其协方差矩阵；$\phi=(\phi_1,\dots,\phi_n)'$ 表示在各 risky assets 上投入的**财富金额**，因此 $\widetilde W$ 要由资产收益 $\widetilde R$ 与持仓 $\phi$ 相乘得到。

无 risk-free asset 时，全部财富都投在 risky assets 上，故 $1'\phi=w_0$ 且

$$
\begin{aligned}
\widetilde W
&=\sum_{i=1}^n \phi_i \widetilde R_i \\
&=\phi'\widetilde R,
\end{aligned}
$$

从而

$$
\begin{aligned}
E[\widetilde W]
&=E[\phi'\widetilde R]
=\phi'E[\widetilde R]
=\phi'\mu, \\
\operatorname{Var}(\widetilde W)
&=\operatorname{Var}(\phi'\widetilde R)
=\phi'\operatorname{Var}(\widetilde R)\phi
=\phi'\Sigma\phi.
\end{aligned}
$$

$$
\left\{
\begin{aligned}
\text{共同起点:}\quad
&CE=E[\widetilde W]-\frac{\alpha}{2}\operatorname{var}(\widetilde W),\\
\text{n risky + 0 risk-free:}\quad
&\max_{\phi}\ \phi'\mu-\frac{\alpha}{2}\phi'\Sigma\phi
\quad\text{s.t. }1'\phi=w_0,\\
\text{n risky + 1 risk-free:}\quad
&\max_{\phi}\ \phi'(\mu-R_f1)-\frac{\alpha}{2}\phi'\Sigma\phi.
\end{aligned}
\right.
$$

第二类没有显式 such that，是因为 $\phi$ 只表示 risky assets 的持仓，剩余财富自动投到 risk-free asset：

$$
\begin{aligned}
\phi_f
&=w_0-1'\phi.
\end{aligned}
$$

所以 budget constraint 已经被代入 objective，不再限制 $1'\phi$。

更具体地，有 risk-free asset 时

$$
\begin{aligned}
\widetilde W
&=
\phi'\widetilde R+\phi_fR_f,
\qquad
\phi_f=w_0-1'\phi\\
&=
w_0R_f+\phi'(\widetilde R-R_f1),\\
CE
&=
w_0R_f+\phi'(\mu-R_f1)-\frac{\alpha}{2}\phi'\Sigma\phi.
\end{aligned}
$$

其中 $w_0R_f$ 与 $\phi$ 无关，所以优化时丢掉；第二类看起来是 unconstrained maximization，本质上是已经把 budget constraint 消元了。

---



## Question 11. Risk-Free Asset and Beginning/End-of-Period Consumption

Consider the portfolio choice problem with only a risk-free asset and with consumption at both the beginning and end of the period.

Assume the investor has time-additive power utility:

$$
\max_{c_0,c_1}
\frac{1}{1-\rho}c_0^{1-\rho}
+\delta\frac{1}{1-\rho}c_1^{1-\rho}
\quad
\text{subject to}
\quad
c_0+\frac{1}{R_f}c_1=w_0.
$$

Show that the optimal consumption-to-wealth ratio $c_0/w_0$ is decreasing in $R_f$ if $\rho<1$ and increasing in $R_f$ if $\rho>1$.


::::{solution}

模型系统：

$$
\left\{
\begin{aligned}
u(c)&=\frac{c^{1-\rho}}{1-\rho},
\qquad \rho>0,\quad \rho\ne1,
&&\text{(power utility)},\\
U(c_0,c_1)
&=\frac{c_0^{1-\rho}}{1-\rho}
+\delta\frac{c_1^{1-\rho}}{1-\rho},
&&\text{(time-additive utility)},\\
c_0+\frac{c_1}{R_f}&=w_0,
&&\text{(budget constraint)},\\
c_1&=R_f(w_0-c_0).
&&\text{(end-of-period consumption)}
\end{aligned}
\right.
$$

这里 $\delta$ 和 $1/R_f$ 的角色不同：

$$
\left\{
\begin{aligned}
\delta
&=\text{subjective discount factor}
&&\text{investor 如何评价 future utility},\\
\frac{1}{R_f}
&=\text{market discount factor}
&&\text{今天需要投入多少 wealth 才能得到 future consumption},\\
\delta u(c_1)
&\in \text{objective},
&&\text{偏好权重},\\
\frac{c_1}{R_f}
&\in \text{budget constraint},
&&\text{资源价格}.
\end{aligned}
\right.
$$

因此 $\delta$ 决定“主观上多想要未来消费”，$R_f$ 决定“市场上未来消费有多便宜”。二者在 FOC 中一起决定 $c_0$ 和 $c_1$ 的相对大小。

把 budget constraint 代入 objective：

$$
\begin{aligned}
\max_{c_0}\ U(c_0)
&=
\max_{c_0}
\left\{
\frac{c_0^{1-\rho}}{1-\rho}
+\delta\frac{\big[R_f(w_0-c_0)\big]^{1-\rho}}{1-\rho}
\right\}\\
&=
\max_{c_0}
\left\{
\frac{c_0^{1-\rho}}{1-\rho}
+\delta\frac{R_f^{1-\rho}(w_0-c_0)^{1-\rho}}{1-\rho}
\right\}.
\end{aligned}
$$

FOC：

$$
\begin{aligned}
0
&=\frac{\partial U}{\partial c_0}\\
&=c_0^{-\rho}
-\delta R_f^{1-\rho}(w_0-c_0)^{-\rho}\\
\Longleftrightarrow\quad
c_0^{-\rho}
&=\delta R_f^{1-\rho}(w_0-c_0)^{-\rho}\\
\Longleftrightarrow\quad
\left(\frac{w_0-c_0}{c_0}\right)^\rho
&=\delta R_f^{1-\rho}\\
\Longleftrightarrow\quad
\frac{c_0}{w_0-c_0}
&=\delta^{-1/\rho}R_f^{1-1/\rho}.
\end{aligned}
$$

令

$$
\begin{aligned}
A(R_f)
&:=\delta^{-1/\rho}R_f^{1-1/\rho}.
\end{aligned}
$$

由 $\dfrac{c_0}{w_0-c_0}=A(R_f)$ 解出 consumption-to-wealth ratio：

$$
\begin{aligned}
c_0
&=A(R_f)(w_0-c_0)\\
&=A(R_f)w_0-A(R_f)c_0\\
\Longleftrightarrow\quad
c_0\big(1+A(R_f)\big)
&=A(R_f)w_0\\
\Longleftrightarrow\quad
\frac{c_0}{w_0}
&=\frac{A(R_f)}{1+A(R_f)}\\
&=
\frac{\delta^{-1/\rho}R_f^{1-1/\rho}}
{1+\delta^{-1/\rho}R_f^{1-1/\rho}}.
\end{aligned}
$$

单调性：

$$
\left\{
\begin{aligned}
\frac{A}{1+A}\text{ 随 }A\text{ 单调递增},\\
A(R_f)&=\delta^{-1/\rho}R_f^{(\rho-1)/\rho},\\
\rho>1
&\Longrightarrow
\frac{\rho-1}{\rho}>0
\Longrightarrow A(R_f)\uparrow R_f
\Longrightarrow \frac{c_0}{w_0}\uparrow R_f,\\
0<\rho<1
&\Longrightarrow
\frac{\rho-1}{\rho}<0
\Longrightarrow A(R_f)\downarrow R_f
\Longrightarrow \frac{c_0}{w_0}\downarrow R_f.
\end{aligned}
\right.
$$

结论：

$$
\boxed{
\frac{c_0}{w_0} =
\frac{\delta^{-1/\rho}R_f^{1-1/\rho}}
{1+\delta^{-1/\rho}R_f^{1-1/\rho}},
\qquad
\rho>1\Rightarrow \frac{\partial(c_0/w_0)}{\partial R_f}>0,
\qquad
0<\rho<1\Rightarrow \frac{\partial(c_0/w_0)}{\partial R_f}<0.
}
$$

::::

---



**Verification theorem 怎么验证**

核心不是重新解最优控制，而是证明候选 value function $J$ 给出任意策略 payoff 的上界，且候选策略达到上界。以 Back 模型为例：

$$
\begin{aligned}
dP_t&=\lambda\theta_tdt+\sigma_vdB_t,
\qquad
\max_\theta E\!\left[\int_0^1(v-P_t)\theta_tdt\right],\\
J(t,p,v)
&=\frac{(v-p)^2+\sigma_v^2(1-t)}{2\lambda}.
\end{aligned}
$$

先验证 HJB 分解：

$$
\begin{aligned}
J_p&=\frac{p-v}{\lambda},
\qquad
J_{pp}=\frac{1}{\lambda},
\qquad
J_t=-\frac{\sigma_v^2}{2\lambda},\\
v-p+\lambda J_p&=0,
\qquad
J_t+\frac{1}{2}\sigma_v^2J_{pp}=0.
\end{aligned}
$$

所以对任意 admissible $\theta$，沿 $P_t$ 用 Itô：

$$
\begin{aligned}
dJ(t,P_t,v)
&=
\left(J_t+\lambda\theta_tJ_p+\frac{1}{2}\sigma_v^2J_{pp}\right)dt
+\sigma_vJ_p\,dB_t\\
&=
-(v-P_t)\theta_tdt+\sigma_vJ_p\,dB_t.
\end{aligned}
$$

积分取期望：

$$
\begin{aligned}
E\!\left[\int_0^1(v-P_t)\theta_tdt\right]
&=
J(0,P_0,v)-E[J(1,P_1,v)]\\
&\le J(0,P_0,v),
\qquad
J(1,P_1,v)=\frac{(v-P_1)^2}{2\lambda}\ge0.
\end{aligned}
$$

若候选策略使 $P_1=v$，则 $J(1,P_1,v)=0$，收益达到上界 $J(0,P_0,v)$，因此候选策略 optimal。

---



## Question 5.3 No Tangency Portfolio When $R_f$ Equals GMV Return

Suppose that the risk-free return is equal to the expected return of the global minimum variance portfolio:

$$
R_f=\frac{B}{C}.
$$

Show that there is no tangency portfolio. Hint: show there is no $\delta$ and $\lambda$ satisfying

$$
\delta\Sigma^{-1}(\mu-R_f1)=\lambda\pi_\mu+(1-\lambda)\pi_1.
$$

Assume $\mu$ is not proportional to $1$.

::::{solution}

**解析** 记

$$
\begin{aligned}
B&:=1'\Sigma^{-1}\mu,
\qquad
C:=1'\Sigma^{-1}1,\\
\pi_\mu&:=\frac{\Sigma^{-1}\mu}{B},
\qquad
\pi_1:=\frac{\Sigma^{-1}1}{C}.
\end{aligned}
$$

若 tangency portfolio 存在，则 risk-free frontier 与 risky-only frontier 相交，即存在 $\delta,\lambda$：

$$
\begin{aligned}
\delta\Sigma^{-1}(\mu-R_f1)
&=\lambda\pi_\mu+(1-\lambda)\pi_1\\
&=
\frac{\lambda}{B}\Sigma^{-1}\mu
+\frac{1-\lambda}{C}\Sigma^{-1}1.
\end{aligned}
$$

移项并左乘 $\Sigma$：

$$
\begin{aligned}
\left(\delta-\frac{\lambda}{B}\right)\mu
&=
\left(\delta R_f+\frac{1-\lambda}{C}\right)1.
\end{aligned}
$$

因为 $\mu$ not proportional to $1$，只能两边系数同时为零：

$$
\begin{aligned}
\delta-\frac{\lambda}{B}&=0,\\
\delta R_f+\frac{1-\lambda}{C}&=0.
\end{aligned}
$$

代入 $\delta=\lambda/B$ 与 $R_f=B/C$：

$$
\begin{aligned}
0
&=\frac{\lambda}{B}\frac{B}{C}+\frac{1-\lambda}{C}
=\frac{1}{C},
\end{aligned}
$$

但 $C=1'\Sigma^{-1}1>0$，矛盾。因此不存在 tangency portfolio。

::::

---



## Question 6.1 Beta Pricing Implies $\widetilde R_*$ Is on the Mean-Variance Frontier

::::{solution}

**合并位置**
这题已经在 Q 6.1 推导：beta-pricing by $\widetilde R_*$ $\Rightarrow$ $\widetilde R_*\in$ mean-variance frontier。核心公式见 Q 6.1 的 frontier 权重推导。

**与 6.2 的 FOC 对比**：

$$
\left\{
\begin{aligned}
\text{with risk-free:}\quad
&\min_\pi \frac{1}{2}\pi'\Sigma\pi
\quad\text{s.t.}\quad
\pi'(\mu-R_f1)=m,\\
&\Sigma\pi-\delta(\mu-R_f1)=0
\quad\Longrightarrow\quad
\pi=\delta\Sigma^{-1}(\mu-R_f1),\\[0.4em]
\text{no risk-free:}\quad
&\min_\pi \frac{1}{2}\pi'\Sigma\pi
\quad\text{s.t.}\quad
1'\pi=1,\quad \pi'\mu=\bar R,\\
&\Sigma\pi-\delta\mu-\gamma1=0
\quad\Longrightarrow\quad
\pi=\delta\Sigma^{-1}\mu+\gamma\Sigma^{-1}1.
\end{aligned}
\right.
$$

区别：with risk-free 时 $\pi$ 是 risky excess-return position，不要求 $1'\pi=1$；no risk-free 时 $\pi$ 是完整 risky portfolio，必须满足 $1'\pi=1$。

::::

---



## Question 6.2 No-Risk-Free Beta Pricing and Mean-Variance Frontier

Suppose there is no risk-free asset. Use the formula for frontier portfolios to show that a beta-pricing model is equivalent to the return $\widetilde R_*$ being on the mean-variance frontier and not equal to the global minimum variance return.

::::{solution}

**解析** 令

$$
\left\{
\begin{aligned}
\widetilde R_*&=\pi'\widetilde R^{vec},\qquad 1'\pi=1,\\
\mu&=E[\widetilde R^{vec}],\qquad
\Sigma=\operatorname{var}(\widetilde R^{vec}),\\
\pi_1&=\frac{\Sigma^{-1}1}{1'\Sigma^{-1}1}
\qquad\text{(GMV portfolio)}.
\end{aligned}
\right.
$$

No-risk-free beta-pricing 的单资产形式是

$$
\begin{aligned}
E[\widetilde R_i]-\alpha
&=
\beta_{i,*}\big(E[\widetilde R_*]-\alpha\big),
\qquad
\beta_{i,*} =
\frac{\operatorname{cov}(\widetilde R_i,\widetilde R_*)}
{\operatorname{var}(\widetilde R_*)},
\end{aligned}
$$

其中 $\alpha$ 是 zero-beta return。Stack over $i=1,\ldots,n$：

$$
\left\{
\begin{aligned}
\mu-\alpha1
&=
\frac{E[\widetilde R_*]-\alpha}
{\operatorname{var}(\widetilde R_*)}
\operatorname{cov}(\widetilde R^{vec},\widetilde R_*),\\
\operatorname{cov}(\widetilde R^{vec},\widetilde R_*)
&=
\Sigma\pi,\\
E[\widetilde R_*]&=\pi'\mu,\qquad
\operatorname{var}(\widetilde R_*)=\pi'\Sigma\pi.
\end{aligned}
\right.
$$

因此若 beta-pricing 成立且 $E[\widetilde R_*]\ne\alpha$，

$$
\begin{aligned}
\mu-\alpha1
&=
\frac{\pi'\mu-\alpha}{\pi'\Sigma\pi}\Sigma\pi\\
\Longleftrightarrow\quad
\pi
&=
\underbrace{\frac{\pi'\Sigma\pi}{\pi'\mu-\alpha}}_{\delta}
\Sigma^{-1}\mu
+
\underbrace{\left(
-\alpha\frac{\pi'\Sigma\pi}{\pi'\mu-\alpha}
\right)}_{\gamma}
\Sigma^{-1}1.
\end{aligned}
$$

这正是 no-risk-free frontier FOC 的形式，所以 $\widetilde R_*$ 在 mean-variance frontier 上。并且 beta-pricing 推出的 $\gamma=-\alpha\delta$；若 $\pi=\pi_1$，则因 $\mu$ not proportional to $1$，必须 $\delta=0$，从而 $\gamma=0$，得到 $\pi=0$，与 $1'\pi=1$ 矛盾。因此 $\widetilde R_*$ 不是 GMV return。

反过来，若 $\widetilde R_*$ 在 frontier 且 $\pi\ne\pi_1$，则

$$
\begin{aligned}
\pi&=\delta\Sigma^{-1}\mu+\gamma\Sigma^{-1}1,
\qquad \delta\ne0,\\
\Sigma\pi&=\delta\mu+\gamma1
=\delta(\mu-\alpha1),
\qquad
\alpha:=-\frac{\gamma}{\delta}.
\end{aligned}
$$

又因为 $1'\pi=1$，

$$
\begin{aligned}
\pi'\Sigma\pi
&=
\delta\pi'(\mu-\alpha1)
=\delta(\pi'\mu-\alpha)
=\delta(E[\widetilde R_*]-\alpha),
\end{aligned}
$$

所以

$$
\begin{aligned}
\mu-\alpha1
&=
\frac{E[\widetilde R_*]-\alpha}
{\operatorname{var}(\widetilde R_*)}
\Sigma\pi,
\end{aligned}
$$

即 no-risk-free beta-pricing model 成立。

::::

---



## Question 6.2A Single-Factor Return and Mean-Variance Frontier


**题目** 证明：若一个 traded single-factor return $\widetilde R$ 给出 beta-pricing，且它不是 zero-beta return $R_z$（精确地说 $E[\widetilde R]\ne R_z$），则 $\widetilde R$ 在 no-risk-free 的 mean-variance frontier 上。

::::{solution}

**设定** 令 risky returns 向量为 $\widetilde R^{vec}$，single factor 是一个 traded portfolio return：

$$
\left\{
\begin{aligned}
\mu&=E[\widetilde R^{vec}],\qquad
\Sigma=\operatorname{var}(\widetilde R^{vec}),\\
\widetilde R&=\pi'\widetilde R^{vec},\qquad 1'\pi=1,\\
E[\widetilde R]&=\pi'\mu,\qquad
\operatorname{var}(\widetilde R)=\pi'\Sigma\pi,\\
\operatorname{cov}(\widetilde R^{vec},\widetilde R)
&=\operatorname{cov}(\widetilde R^{vec},\pi'\widetilde R^{vec})
=\Sigma\pi.
\end{aligned}
\right.
$$

Single-factor beta-pricing 写作

$$
\begin{aligned}
E[\widetilde R_i]-R_z
&=\lambda\beta_i,\qquad
\beta_i =
\frac{\operatorname{cov}(\widetilde R_i,\widetilde R)}
{\operatorname{var}(\widetilde R)}.
\end{aligned}
$$

先把 factor 本身代入 pricing equation。因为 $\beta(\widetilde R;\widetilde R)=1$，

$$
\begin{aligned}
E[\widetilde R]-R_z
&=\lambda\beta(\widetilde R;\widetilde R)
=\lambda.
\end{aligned}
$$

所以非退化 single-factor pricing 要求

$$
\boxed{
\begin{aligned}
\lambda\ne0
&\Longleftrightarrow
E[\widetilde R]\ne R_z.
\end{aligned}
}
$$

若 $E[\widetilde R]=R_z$，则 $\lambda=0$，从而所有 assets 都满足 $E[\widetilde R_i]=R_z$；这只是所有 expected returns 相同的退化情形，不能给出有效的 factor risk premium。

接着把 $i=1,\ldots,n$ 的 beta-pricing 方程堆叠：

$$
\begin{aligned}
\mu-R_z1
&=
\frac{\lambda}{\operatorname{var}(\widetilde R)}
\operatorname{cov}(\widetilde R^{vec},\widetilde R)\\
&=
\frac{E[\widetilde R]-R_z}
{\operatorname{var}(\widetilde R)}
\Sigma\pi\\
&=
\frac{\pi'\mu-R_z}
{\pi'\Sigma\pi}
\Sigma\pi.
\end{aligned}
$$

由于 $E[\widetilde R]\ne R_z$，可整理为

$$
\begin{aligned}
\pi
&=
\frac{\pi'\Sigma\pi}{\pi'\mu-R_z}
\Sigma^{-1}(\mu-R_z1)\\
&=
\underbrace{
\frac{\pi'\Sigma\pi}{\pi'\mu-R_z}
}_{\delta}
\Sigma^{-1}\mu
+
\underbrace{
\left(
-R_z\frac{\pi'\Sigma\pi}{\pi'\mu-R_z}
\right)
}_{\gamma}
\Sigma^{-1}1.
\end{aligned}
$$

而 no-risk-free mean-variance frontier 的权重形式由 FOC 给出：

$$
\begin{aligned}
\pi^{F}
&=\delta\Sigma^{-1}\mu+\gamma\Sigma^{-1}1,\qquad 1'\pi^F=1.
\end{aligned}
$$

因此 single-factor return $\widetilde R=\pi'\widetilde R^{vec}$ 的权重 $\pi$ 正好满足 frontier FOC：

$$
\boxed{
\begin{aligned}
E[\widetilde R]\ne R_z
\quad\text{and}\quad
E[\widetilde R_i]-R_z =
\lambda
\frac{\operatorname{cov}(\widetilde R_i,\widetilde R)}
{\operatorname{var}(\widetilde R)}
,\qquad i=1,\ldots,n
&\Longrightarrow
\widetilde R\in\text{mean-variance frontier}.
\end{aligned}
}
$$

**结论**：证明的核心不是把 $R_z$ 当成 risk-free rate，而是把它当作 zero-beta intercept。Single-factor return 必须有非零 premium $E[\widetilde R]-R_z$；只要 beta-pricing 成立，这个 factor portfolio 的权重就满足 no-risk-free frontier 的 FOC。

若课程把 efficient frontier 严格指 upper branch，还需要 $\lambda=E[\widetilde R]-R_z>0$；若只要求 mean-variance frontier，则 $E[\widetilde R]\ne R_z$ 已足够排除 GMV/zero-premium 退化情形。

^qe-ps-q6-2a-single-factor-frontier

::::

---



## Question 6.3 Borrowing and Lending at Different Rates

Suppose investors can borrow and lend at different rates. Let $R_b$ denote the return on borrowing and $R_\ell$ the return on lending. Suppose

$$
\frac{B}{C}>R_b>R_\ell.
$$

Suppose each investor chooses a mean-variance efficient portfolio. Show that the CAPM holds with

$$
R_\ell\le R_z\le R_b.
$$

::::{solution}

**解析** 记

$$
\left\{
\begin{aligned}
B&:=1'\Sigma^{-1}\mu,\qquad C:=1'\Sigma^{-1}1,\\
\pi_b&:=\frac{\Sigma^{-1}(\mu-R_b1)}{B-CR_b},
\qquad
\pi_\ell:=\frac{\Sigma^{-1}(\mu-R_\ell1)}{B-CR_\ell}.
\end{aligned}
\right.
$$

每个投资者的 risky holding 是两条切点组合的 convex combination，再乘以 risky share：

$$
\begin{aligned}
\phi_h
&=\delta_h\left[\lambda_h\pi_\ell+(1-\lambda_h)\pi_b\right],
\qquad
\delta_h\ge0,\quad 0\le\lambda_h\le1.
\end{aligned}
$$

加总后市场 risky portfolio 仍为 convex combination：

$$
\begin{aligned}
\pi_m
&=\lambda\pi_\ell+(1-\lambda)\pi_b,
\qquad 0\le\lambda\le1.
\end{aligned}
$$

于是

$$
\left\{
\begin{aligned}
\operatorname{cov}(\widetilde R^{vec},\widetilde R_m)
&=\Sigma\pi_m\\
&=
\lambda\Sigma\pi_\ell+(1-\lambda)\Sigma\pi_b\\
&=
\frac{\lambda}{B-CR_\ell}(\mu-R_\ell1)
+\frac{1-\lambda}{B-CR_b}(\mu-R_b1),\\
\theta_\ell&:=\frac{\lambda}{B-CR_\ell},
\qquad
\theta_b:=\frac{1-\lambda}{B-CR_b}.
\end{aligned}
\right.
$$

由于 $B/C>R_b>R_\ell$，有 $B-CR_b>0$ 与 $B-CR_\ell>0$，所以 $\theta_b,\theta_\ell\ge0$。整理上式：

$$
\begin{aligned}
\operatorname{cov}(\widetilde R^{vec},\widetilde R_m)
&=
(\theta_b+\theta_\ell)\mu
-(\theta_bR_b+\theta_\ell R_\ell)1\\
\Longleftrightarrow\quad
\mu
&=
\frac{1}{\theta_b+\theta_\ell}
\operatorname{cov}(\widetilde R^{vec},\widetilde R_m)
+
\underbrace{
\frac{\theta_bR_b+\theta_\ell R_\ell}
{\theta_b+\theta_\ell}
}_{R_z}
1.
\end{aligned}
$$

这就是 no-risk-free CAPM / zero-beta pricing：

$$
\begin{aligned}
\mu-R_z1
&=
\frac{1}{\theta_b+\theta_\ell}
\operatorname{cov}(\widetilde R^{vec},\widetilde R_m).
\end{aligned}
$$

且

$$
\begin{aligned}
R_z
&=
\frac{\theta_bR_b+\theta_\ell R_\ell}
{\theta_b+\theta_\ell},
\qquad
\theta_b,\theta_\ell\ge0
\Longrightarrow
R_\ell\le R_z\le R_b.
\end{aligned}
$$

::::

---



## Question 6.8 Limited Awareness and Positive Alpha

Assume there are $H$ investors with CARA utility and the same absolute risk aversion $\alpha$. There is a risk-free asset and two risky assets with jointly normal payoffs $\widetilde x=(\widetilde x_1,\widetilde x_2)'$, mean $\mu$, and nonsingular covariance matrix $\Sigma$. Let $H_U$ investors be unaware of asset 2 and invest only in asset 1 and the risk-free asset; let $H_I=H-H_U$. If all investors were aware, the equilibrium price would be

$$
p^*=\frac{1}{R_f}\mu-\frac{\alpha}{HR_f}\Sigma\bar\theta.
$$

Show that $p_1=p_1^*$ and

$$
p_2=p_2^*-\frac{\alpha}{HR_f}\frac{H_U}{H_I}
\left(\operatorname{var}(\widetilde x_2)
-\frac{\operatorname{cov}(\widetilde x_1,\widetilde x_2)^2}
{\operatorname{var}(\widetilde x_1)}\right)<p_2^*.
$$

Then show that the beta-pricing relation has a positive alpha for asset 2.

::::{solution}

**题目直觉** 市场里有两类投资者：

$$
\left\{
\begin{aligned}
H_I&=H-H_U &&\text{aware investors: know both risky assets},\\
H_U&&&\text{unaware investors: only know asset 1}.
\end{aligned}
\right.
$$

若所有人都 aware，价格为 benchmark $p^*$。现在 $H_U>0$ 的投资者不买 asset 2，asset 2 的需求不足，所以 $p_2$ 被压低；由于价格低，asset 2 的 expected return 偏高，且这部分高收益不是 market beta 能解释的，于是在 beta-pricing relation 中表现为 positive alpha：

$$
\begin{aligned}
E[\widetilde R_2]
&=
R_f
+\lambda\frac{\operatorname{cov}(\widetilde R_2,\widetilde R_m)}
{\operatorname{var}(\widetilde R_m)}
+A,
\qquad A>0.
\end{aligned}
$$

**a. Prices** 写

$$
\left\{
\begin{aligned}
\Sigma&=
\begin{pmatrix}
\sigma_{11}&\sigma_{12}\\
\sigma_{12}&\sigma_{22}
\end{pmatrix},
\qquad
\bar\theta=(\bar\theta_1,\bar\theta_2)',\\
\theta_U&=(\theta_{U1},0)',
\qquad
\theta_{U1}=\frac{\mu_1-R_fp_1}{\alpha\sigma_{11}},\\
\alpha\Sigma\theta_I&=\mu-R_fp,
\qquad
\bar\theta=H_I\theta_I+H_U\theta_U.
\end{aligned}
\right.
$$

这两个 demand 方程来自 CARA-normal portfolio choice：

$$
\left\{
\begin{aligned}
\theta_{U1}
&=
\frac{\mu_1-R_fp_1}{\alpha\sigma_{11}}
&&\text{unaware investor 只认识 asset 1，所以是一维需求},\\
\alpha\Sigma\theta_I
&=\mu-R_fp
&&\text{aware investor 认识两只资产，所以是二维需求系统}.
\end{aligned}
\right.
$$

其中 $\mu_i-R_fp_i$ 是 asset $i$ 的 expected excess payoff：买一单位 asset $i$ 需要支付 $p_i$，若把这笔钱放到 risk-free asset，期末会变成 $R_fp_i$；asset $i$ 自身的 expected payoff 是 $\mu_i$，所以额外补偿是 $\mu_i-R_fp_i$。$\alpha\sigma_{11}$ 是一维风险惩罚；二维情形中风险由 covariance matrix $\Sigma$ 共同决定，所以写成 $\theta_I=\frac{1}{\alpha}\Sigma^{-1}(\mu-R_fp)$。

具体推导如下。CARA-normal 下，选择 risky shares 等价于最大化 certainty equivalent。

Unaware investor 只买 asset 1：

$$
\begin{aligned}
\max_{\theta_{U1}}\quad
&\theta_{U1}(\mu_1-R_fp_1)
-\frac{\alpha}{2}\theta_{U1}^2\sigma_{11}\\
\Longrightarrow\quad
0
&=
\mu_1-R_fp_1-\alpha\sigma_{11}\theta_{U1}\\
\Longrightarrow\quad
\theta_{U1}
&=
\frac{\mu_1-R_fp_1}{\alpha\sigma_{11}}.
\end{aligned}
$$

Aware investor 同时买两只 risky assets：

$$
\begin{aligned}
\max_{\theta_I}\quad
&\theta_I'(\mu-R_fp)
-\frac{\alpha}{2}\theta_I'\Sigma\theta_I\\
\Longrightarrow\quad
0
&=
\mu-R_fp-\alpha\Sigma\theta_I\\
\Longrightarrow\quad
\alpha\Sigma\theta_I
&=
\mu-R_fp.
\end{aligned}
$$

市场清算乘以 $\alpha\Sigma$：

$$
\begin{aligned}
\alpha\Sigma\bar\theta
&=
H_I(\mu-R_fp)
+H_U\Sigma
\begin{pmatrix}
\frac{\mu_1-R_fp_1}{\sigma_{11}}\\
0
\end{pmatrix}\\
&=
\begin{pmatrix}
H&0\\
H_U\sigma_{12}/\sigma_{11}&H_I
\end{pmatrix}
(\mu-R_fp).
\end{aligned}
$$

因此

$$
\begin{aligned}
\mu-R_fp
&=
\alpha
\begin{pmatrix}
1/H&0\\
-H_U\sigma_{12}/(HH_I\sigma_{11})&1/H_I
\end{pmatrix}
\Sigma\bar\theta\\
&=
\frac{\alpha}{H}\Sigma\bar\theta
+\frac{\alpha H_U}{HH_I}
\begin{pmatrix}
0\\
\left(\sigma_{22}-\frac{\sigma_{12}^2}{\sigma_{11}}\right)\bar\theta_2
\end{pmatrix}.
\end{aligned}
$$

所以

$$
\begin{aligned}
p
&=
\frac{1}{R_f}\mu-\frac{\alpha}{HR_f}\Sigma\bar\theta
-\frac{\alpha}{HR_f}\frac{H_U}{H_I}
\begin{pmatrix}
0\\
\left(\sigma_{22}-\frac{\sigma_{12}^2}{\sigma_{11}}\right)\bar\theta_2
\end{pmatrix}\\
&=
p^*
-\frac{\alpha}{HR_f}\frac{H_U}{H_I}
\begin{pmatrix}
0\\
\left(\sigma_{22}-\frac{\sigma_{12}^2}{\sigma_{11}}\right)\bar\theta_2
\end{pmatrix}.
\end{aligned}
$$

因此 $p_1=p_1^*$，且若 $\bar\theta_2>0$，

$$
\begin{aligned}
p_2
&=
p_2^*-\frac{\alpha}{HR_f}\frac{H_U}{H_I}
\left(\sigma_{22}-\frac{\sigma_{12}^2}{\sigma_{11}}\right)\bar\theta_2
<p_2^*,
\end{aligned}
$$

其中 $\sigma_{22}-\sigma_{12}^2/\sigma_{11}>0$ 来自 $\Sigma$ nonsingular positive definite。

**b. Beta pricing with positive alpha** 定义 gross returns 与 market return：

$$
\left\{
\begin{aligned}
\widetilde R_i&=\frac{\widetilde x_i}{p_i},\\
\widetilde R_m&=
\frac{\bar\theta_1\widetilde x_1+\bar\theta_2\widetilde x_2}
{\bar\theta_1p_1+\bar\theta_2p_2},\\
M&:=\bar\theta_1p_1+\bar\theta_2p_2,\qquad
\pi_2:=\frac{p_2\bar\theta_2}{M}.
\end{aligned}
\right.
$$

收益协方差换算为

$$
\left\{
\begin{aligned}
\operatorname{cov}(\widetilde R_i,\widetilde R_m)
&=
\frac{(\Sigma\bar\theta)_i}{p_iM},\\
\operatorname{var}(\widetilde R_m)
&=
\frac{\bar\theta'\Sigma\bar\theta}{M^2}.
\end{aligned}
\right.
$$

由价格方程 $\mu=R_fp+\frac{\alpha}{H}\Sigma\bar\theta+\frac{\alpha}{H}\frac{H_U}{H_I}(0,q\bar\theta_2)'$，其中 $q:=\sigma_{22}-\sigma_{12}^2/\sigma_{11}$，逐项除以 $p_i$：

$$
\left\{
\begin{aligned}
E[\widetilde R_1]
&=
R_f+\frac{\alpha}{H}\frac{(\Sigma\bar\theta)_1}{p_1},\\
E[\widetilde R_2]
&=
R_f+\frac{\alpha}{H}\frac{(\Sigma\bar\theta)_2}{p_2}
+\frac{\alpha}{H}\frac{H_U}{H_I}\frac{q\bar\theta_2}{p_2}.
\end{aligned}
\right.
$$

令

$$
\left\{
\begin{aligned}
\lambda
&:=
\frac{\alpha}{H}M\,\operatorname{var}(\widetilde R_m),\\
A
&:=
\frac{\alpha}{H}\frac{H_U}{H_I}
\left(
\frac{\operatorname{var}(\widetilde R_1)\operatorname{var}(\widetilde R_2)
-\operatorname{cov}(\widetilde R_1,\widetilde R_2)^2}
{\operatorname{var}(\widetilde R_1)}
\right)p_2\bar\theta_2>0.
\end{aligned}
\right.
$$

因为

$$
\begin{aligned}
\lambda
\frac{\operatorname{cov}(\widetilde R_i,\widetilde R_m)}
{\operatorname{var}(\widetilde R_m)}
&=
\frac{\alpha}{H}\frac{(\Sigma\bar\theta)_i}{p_i},
\qquad
A=
\frac{\alpha}{H}\frac{H_U}{H_I}\frac{q\bar\theta_2}{p_2},
\end{aligned}
$$

所以

$$
\left\{
\begin{aligned}
E[\widetilde R_1]
&=
R_f+\lambda
\frac{\operatorname{cov}(\widetilde R_1,\widetilde R_m)}
{\operatorname{var}(\widetilde R_m)},\\
E[\widetilde R_2]
&=
R_f+A+\lambda
\frac{\operatorname{cov}(\widetilde R_2,\widetilde R_m)}
{\operatorname{var}(\widetilde R_m)}.
\end{aligned}
\right.
$$

最后，由 $\widetilde R_m=\pi_1\widetilde R_1+\pi_2\widetilde R_2$，

$$
\begin{aligned}
E[\widetilde R_m]
&=
R_f+\lambda+\pi_2A\\
\Longleftrightarrow\quad
\lambda
&=
E[\widetilde R_m]-R_f-\pi_2A
<
E[\widetilde R_m]-R_f.
\end{aligned}
$$

因此 asset 2 有 positive alpha $A>0$，且共同 slope $\lambda$ 小于 standard CAPM market risk premium。

::::

---



## Question 8.2 Marketed Consumption Processes

**题目** 设每期消费 $C_t$ 都是 marketed payoff。证明存在财富过程 $W$ 和组合过程 $\pi$ 使

$$
\begin{aligned}
W_{t+1}&=(W_t-C_t)\pi_t'R_{t+1},\qquad t=0,\ldots,T-1,\\
C_T&=W_T.
\end{aligned}
$$

::::{solution}

**思路** 对每个 $t\le T$，令 $W_{t,s}$ 表示复制 $C_t$ 的自融资财富过程，满足 $W_{t,t}=C_t$，并记

$$
\left\{
\begin{aligned}
W_{t,s+1}&=W_{t,s}\pi_{t,s}'R_{s+1},\qquad s<t,\\
W_s&=\sum_{t=s}^T W_{t,s},\\
\pi_s&=\frac{\sum_{t=s+1}^T W_{t,s}\pi_{t,s}}{\sum_{t=s+1}^T W_{t,s}}.
\end{aligned}
\right.
$$

则

$$
\begin{aligned}
W_s-C_s
&=\sum_{t=s+1}^T W_{t,s},\\
(W_s-C_s)\pi_s'R_{s+1}
&=\sum_{t=s+1}^T W_{t,s}\pi_{t,s}'R_{s+1}\\
&=\sum_{t=s+1}^T W_{t,s+1}
 =W_{s+1}.
\end{aligned}
$$

又因为 $W_T=W_{T,T}=C_T$，故所求 wealth/portfolio process 存在。

::::

---



## Question 8.1 Marked Dividend Trees and SDFs

**题目** 设有常数无风险收益率 $R_f$ 和单一 risky asset，其 dividend 满足

$$
\begin{aligned}
D_{t+1}=
\begin{cases}
\lambda_hD_t & \text{with probability }1/2,\\
\lambda_\ell D_t & \text{with probability }1/2,
\end{cases}
\qquad
\lambda_h>\lambda_\ell,\quad D_0>0,
\qquad
P_t=kD_t.
\end{aligned}
$$

信息结构为 dividend history；对每条路径，令 $\nu_t$ 表示到 $t$ 时刻出现 $\lambda_h$ 的次数，则

$$
\begin{aligned}
D_t=D_0\lambda_h^{\nu_t}\lambda_\ell^{t-\nu_t},
\qquad
\Pr(\nu_t=n)=2^{-t}\frac{t!}{n!(t-n)!}.
\end{aligned}
$$

(a) 给出每个有限期限 $T$ 无套利的条件。
(b) 求 one-period SDF $Z_{t+1}$，使其只依赖于 $D_{t+1}/D_t$，并用 $R_f,k,\lambda_h,\lambda_\ell$ 表示 $z_h,z_\ell$。
(c) 证明 SDF process $M_t$ 唯一，并说明它只依赖于 $\nu_t$ 与参数 $R_f,k,\lambda_h,\lambda_\ell$。
(d) 证明任意路径的 risk-neutral probability 只依赖于 $\nu_t$ 与这些参数。
(e) 对指示变量

$$
\begin{aligned}
x=
\begin{cases}
1 & \text{if }D_{t+1}=\lambda_hD_t\text{ for each }t<T,\\
0 & \text{if }D_{t+1}=\lambda_\ell D_t\text{ for any }t<T,
\end{cases}
\end{aligned}
$$

求满足 $W_T=x$ 的 self-financing wealth process。
(f) 若代表性投资者有 time-additive utility、CRRA $\rho$、discount factor $\delta$，且 risk-free asset zero net supply，求 $R_f$ 和 $k$。
(g) 由 (f) 的 $k$，找出 $k>0$ 的参数条件，并证明这等价于

$$
\begin{aligned}
\mathbb E\!\left[\sum_{t=1}^\infty \delta^tD_t^{1-\rho}\right]<\infty.
\end{aligned}
$$

::::{solution}

**解析** 先把一期间对象联立：

$$
\left\{
\begin{aligned}
R_h&=\frac{P_{t+1}+D_{t+1}}{P_t}=\frac{k+1}{k}\lambda_h,\\
R_\ell&=\frac{P_{t+1}+D_{t+1}}{P_t}=\frac{k+1}{k}\lambda_\ell,\\
\text{no arbitrage}
&\Longleftrightarrow R_h>R_f>R_\ell,\\
q_h&=\frac{R_f-R_\ell}{R_f(R_h-R_\ell)},\qquad
q_\ell=\frac{R_h-R_f}{R_f(R_h-R_\ell)},\\
z_h&=2q_h,\qquad z_\ell=2q_\ell.
\end{aligned}
\right.
$$

因为每期树是 complete two-state market，one-period SDF 唯一；复合得到

$$
\left\{
\begin{aligned}
M_t&=z_h^{\nu_t}z_\ell^{t-\nu_t}
=2^tq_h^{\nu_t}q_\ell^{t-\nu_t},\\
\mathbb Q(\text{path})
&=R_f^T\frac{M_T}{2^T}
=R_f^Tq_h^{\nu_T}q_\ell^{T-\nu_T}.
\end{aligned}
\right.
$$

对 digital payoff $x=\mathbf 1\{\text{all high before }T\}$：

$$
\left\{
\begin{aligned}
W_t&=\mathbb E_t\!\left[\frac{M_Tx}{M_t}\right],\\
W_t&=
\begin{cases}
q_h^{T-t},& D_s/D_{s-1}=\lambda_h\ \forall s\le t,\\
0,& \text{otherwise}.
\end{cases}
\end{aligned}
\right.
$$

代表性投资者均衡中令 aggregate consumption $C_t=D_t$：

$$
\left\{
\begin{aligned}
D_t&=D_0\delta^{t/\rho}M_t^{-1/\rho}
=D_0\Big(\frac{2q_h}{\delta}\Big)^{-\nu_t/\rho}
\Big(\frac{2q_\ell}{\delta}\Big)^{-(t-\nu_t)/\rho},\\
D_t&=D_0\lambda_h^{\nu_t}\lambda_\ell^{t-\nu_t}.
\end{aligned}
\right.
$$

逐项比较可得

$$
\left\{
\begin{aligned}
q_h&=\frac{\delta}{2}\lambda_h^{-\rho},\qquad
q_\ell=\frac{\delta}{2}\lambda_\ell^{-\rho},\\
R_f&=\frac{1}{q_h+q_\ell}
=\frac{2}{\delta(\lambda_h^{-\rho}+\lambda_\ell^{-\rho})}.
\end{aligned}
\right.
$$

再由 risky asset pricing equation：

$$
\begin{aligned}
1=q_hR_h+q_\ell R_\ell
=\frac{\delta}{2}\Big(\frac{k+1}{k}\lambda_h^{1-\rho}
+\frac{k+1}{k}\lambda_\ell^{1-\rho}\Big),
\end{aligned}
$$

得

$$
\begin{aligned}
k=\frac{\delta\big(\lambda_h^{1-\rho}+\lambda_\ell^{1-\rho}\big)}
{2-\delta\big(\lambda_h^{1-\rho}+\lambda_\ell^{1-\rho}\big)}.
\end{aligned}
$$

所以

$$
\left\{
\begin{aligned}
\gamma
&:=\mathbb E\!\left[\delta\Big(\frac{D_t}{D_{t-1}}\Big)^{1-\rho}\right]
=\frac{\delta}{2}\big(\lambda_h^{1-\rho}+\lambda_\ell^{1-\rho}\big),\\
k>0
&\Longleftrightarrow
\lambda_h^{1-\rho}+\lambda_\ell^{1-\rho}<\frac{2}{\delta}
\Longleftrightarrow \gamma<1.
\end{aligned}
\right.
$$

最后，

$$
\begin{aligned}
\delta^tD_t^{1-\rho}
=D_0^{1-\rho}\prod_{s=1}^t\Big(\delta\Big(\frac{D_s}{D_{s-1}}\Big)^{1-\rho}\Big),
\qquad
\mathbb E[\delta^tD_t^{1-\rho}]
=D_0^{1-\rho}\gamma^t,\\
\mathbb E\!\left[\sum_{t=1}^\infty \delta^tD_t^{1-\rho}\right]
=D_0^{1-\rho}\sum_{t=1}^\infty \gamma^t<\infty
\Longleftrightarrow \gamma<1.
\end{aligned}
$$

::::

---



## Question 9.1 Log Utility with i.i.d. Returns

**题目** 考虑 terminal wealth 的动态投资问题，returns i.i.d.，投资者为 log utility。令

$$
\begin{aligned}
U=\max_{\pi}\mathbb E[\log(\pi'R_{t+1})],
\qquad U<\infty.
\end{aligned}
$$

证明：

$$
\begin{aligned}
V_t(w)&=(T-t)U+\log w,\\
\pi_t^*&\in\arg\max_{\pi}\mathbb E[\log(\pi'R_{t+1})].
\end{aligned}
$$

::::{solution}

**解析** 用 backward induction。终端条件为

$$
\begin{aligned}
V_T(w)=\log w=(T-T)U+\log w.
\end{aligned}
$$

若 $V_{s+1}(w)=(T-s-1)U+\log w$，则 Bellman equation 给出

$$
\begin{aligned}
V_s(w)
&=\max_{\pi}\mathbb E\!\left[V_{s+1}\bigl(w\pi'R_{s+1}\bigr)\right]\\
&=\max_{\pi}\mathbb E\!\left[(T-s-1)U+\log(w\pi'R_{s+1})\right]\\
&=(T-s-1)U+\log w+\max_{\pi}\mathbb E[\log(\pi'R_{s+1})]\\
&=(T-s)U+\log w.
\end{aligned}
$$

同时

$$
\begin{aligned}
\arg\max_{\pi}\mathbb E\!\left[V_{s+1}\bigl(w\pi'R_{s+1}\bigr)\right]
&=
\arg\max_{\pi}\left\{(T-s-1)U+\log w+\mathbb E[\log(\pi'R_{s+1})]\right\}\\
&=
\arg\max_{\pi}\mathbb E[\log(\pi'R_{s+1})].
\end{aligned}
$$

因此 log utility 下最优组合与当前财富 $w$ 和日期 $t$ 无关；每期都选择同一个 one-period log-optimal portfolio。

::::

---



## Question 10.1 考场原题回忆：n Risky Assets + 0 Risk-Free Asset

#mean-variance #CARA-normal #no-risk-free #two-fund-separation

**题目回忆** $n$ 个 risky assets，没有 risk-free asset。证明 mean-variance/CARA-normal 下最优 risky position $\phi$ 的公式；$\phi$ 由两个部分组成。

**与 10.5 的关系**
这题是 10.5 no-risk-free mean-variance frontier 的 CARA-normal 应用：10.5 解 fully invested frontier，10.1 在约束 $1'\phi=w_0$ 下直接解 investor 的 optimal risky dollar position。

**设定** 令 risky payoff/return vector 为 $\widetilde R\in\mathbb R^n$：

$$
\left\{
\begin{aligned}
\mu&=E[\widetilde R],\\
\Sigma&=\operatorname{var}(\widetilde R),\qquad \Sigma\succ0,\\
\phi&=(\phi_1,\dots,\phi_n)',\\
1'\phi&=w_0 &&\text{(no risk-free asset: all wealth invested in risky assets)}.
\end{aligned}
\right.
$$

CARA-normal 下：

$$
\begin{aligned}
\max_{\phi:\,1'\phi=w_0}
\left\{
\phi'\mu-\frac{\alpha}{2}\phi'\Sigma\phi
\right\}.
\end{aligned}
$$

::::{collapse} Basic setup

$$
\begin{aligned}
1'\phi=w_0,\qquad
\mathcal L=\phi'\mu-\frac{\alpha}{2}\phi'\Sigma\phi-\lambda(1'\phi-w_0).
\end{aligned}
$$

::::

::::{solution}

**推导**

$$
\begin{aligned}
\mathcal L
&=\phi'\mu-\frac{\alpha}{2}\phi'\Sigma\phi-\lambda(1'\phi-w_0),\\
\frac{\partial\mathcal L}{\partial\phi}=0
&\Longleftrightarrow
\mu-\alpha\Sigma\phi-\lambda1=0\\
&\Longleftrightarrow
\phi=\frac{1}{\alpha}\Sigma^{-1}\mu-\frac{\lambda}{\alpha}\Sigma^{-1}1.
\end{aligned}
$$

用 budget constraint 解 $\lambda$：

$$
\begin{aligned}
w_0
&=1'\phi\\
&=\frac{1}{\alpha}1'\Sigma^{-1}\mu
-\frac{\lambda}{\alpha}1'\Sigma^{-1}1\\
\Longleftrightarrow\quad
\lambda
&=
\frac{1'\Sigma^{-1}\mu-\alpha w_0}
{1'\Sigma^{-1}1}.
\end{aligned}
$$

代回得到：

$$
\begin{aligned}
\phi^*
&=
\underbrace{\frac{1}{\alpha}\Sigma^{-1}\mu}_{\text{mean-risk tradeoff / speculative demand}}
+
\underbrace{
\frac{\alpha w_0-1'\Sigma^{-1}\mu}
{\alpha\,1'\Sigma^{-1}1}
\Sigma^{-1}1
}_{\text{budget-balancing / GMV direction}}.
\end{aligned}
$$

也可以写成：

$$
\begin{aligned}
\phi^*
&=
\frac{1}{\alpha}\Sigma^{-1}
\left(
\mu-\frac{1'\Sigma^{-1}\mu-\alpha w_0}{1'\Sigma^{-1}1}1
\right).
\end{aligned}
$$

**记忆点** 没有 risk-free asset 时，$\phi$ 不能任意缩放，必须满足 $1'\phi=w_0$；所以最优持仓不是单纯的 $\frac{1}{\alpha}\Sigma^{-1}\mu$，还要加上沿 $\Sigma^{-1}1$ 方向的 budget adjustment。

::::

---



## Question 10.2 考场原题回忆：CARA Endowment Economy and Budget Constraint

 CARA #continuous-time #budget-constraint #state-price-density #EMM #risk-neutral-measure #interest-rate #market-price-of-risk

**题目回忆** CARA；市场里有 $N+1$ 个资产：0 号资产是 risk-free asset，1 到 $N$ 号资产是 risky assets。写出 dynamic problem 和 static problem；写出 budget constraint。资产或 state variable dynamics 类似：

$$
\left\{
\begin{aligned}
dS_t^0&=r_tS_t^0dt,\\
dS_t
&=
I_{S_t}\left[
(r_t1_N+Y_t\eta_t)dt+\sqrt{Y_t}\xi\,dB_t
\right],\\
dY_t&=\mu(Y_t,t)dt+\sigma_Y(Y_t,t)'dB_t.
\end{aligned}
\right.
$$

其中

$$
\left\{
\begin{aligned}
S_t&=(S_t^1,\dots,S_t^N)' &&\text{(risky asset price vector)},\\
I_{S_t}&=\operatorname{diag}(S_t^1,\dots,S_t^N) &&\text{(diagonal price matrix / diagonal metric)},\\
\eta_t&\in\mathbb R^N &&\text{(scaled excess-return vector)},\\
\xi&\in\mathbb R^{N\times d},\quad \operatorname{rank}(\xi)=N,\qquad B_t\in\mathbb R^d
&&\text{(full-row-rank diffusion loading and Brownian motion)}.
\end{aligned}
\right.
$$

因此 $d\ge N$，且 $N$ 个 risky assets 的 diffusion exposure 线性独立；若市场还要求 complete，通常还需这些 risky shocks 能 span 与消费/endowment 相关的风险。

等价地，

$$
\begin{aligned}
I_{S_t}^{-1}dS_t
&=(r_t1_N+Y_t\eta_t)dt+\sqrt{Y_t}\xi\,dB_t.
\end{aligned}
$$

**符号回忆** 题目里还可能出现一个上下相除的相对权重，例如

$$
\begin{aligned}
\eta_t
&=\frac{\xi_t^2}{\xi_t^1}
\qquad\text{or}\qquad
\eta_t=\frac{\xi_t^1}{\xi_t^2}.
\end{aligned}
$$

这里的 $\xi_t^i$ 若表示 agent $i$ 的 SPD / marginal utility density / state-price density，则 $\eta_t$ 的经济含义是两个 agents 的相对 marginal utility 或相对 pricing kernel。方向取决于题目把 $\eta_t$ 定义为 agent 2 相对 agent 1，还是 agent 1 相对 agent 2；推导时只要全程保持同一方向即可。

要求：

1. 写出 dynamic problem。
2. 写出 static problem，并说明 SPD 和 EMM，再从 dynamic budget constraint 推出 intertemporal budget constraint。
3. 求 interest rate，并确定 $S_t,\eta_t$ 与 endowment 的关系。

::::{collapse} Basic setup

$$
\begin{aligned}
\sigma_{S,t}:=\sqrt{Y_t}\xi,\qquad
\mu_{S,t}-r_t1_N:=Y_t\eta_t,\qquad
\frac{d\zeta_t}{\zeta_t}=-r_tdt-\theta_t'dB_t.
\end{aligned}
$$

::::

::::{solution}

**（1）Dynamic problem**

若 agent 有外生 endowment $e_t$，持有 risky dollar position $\pi_t\in\mathbb R^N$，消费 $c_t$，直接选择消费与交易策略：

$$
\left\{
\begin{aligned}
\max_{\{c_t,\pi_t\}}
&\quad
E_0\!\left[
\int_0^\infty e^{-\rho t}u(c_t)\,dt
\right],\\
\text{s.t.}\quad
dW_t
&=
\left[
r_tW_t+\pi_t'Y_t\eta_t+e_t-c_t
\right]dt
+\pi_t'\sqrt{Y_t}\xi\,dB_t,\\
W_t&\ge0,
\qquad c_t\ge0.
\end{aligned}
\right.
$$

这里 $\pi_t$ 是 risky exposure / dollar position；若用 stock-share vector $\vartheta_t\in\mathbb R^N$，则

$$
\begin{aligned}
\pi_t&=I_{S_t}\vartheta_t.
\end{aligned}
$$

因此用 shares 写的 self-financing wealth dynamics 是：

$$
\begin{aligned}
dW_t
&=
r_t\left(W_t-\vartheta_t'S_t\right)dt+\vartheta_t'dS_t+e_tdt-c_tdt\\
&=
\left[
r_tW_t+\vartheta_t'I_{S_t}Y_t\eta_t+e_t-c_t
\right]dt
+\vartheta_t'I_{S_t}\sqrt{Y_t}\xi\,dB_t.
\end{aligned}
$$

**（2）Static problem**

用 state price density (SPD) 把 trading strategy 消掉，只选择 consumption plan。令

$$
\begin{aligned}
\frac{d\zeta_t}{\zeta_t}
&=-r_tdt-\theta_t'dB_t.
\end{aligned}
$$

这里 $\zeta_t$ 是 SPD / pricing kernel：任意到期 payoff $X_T$ 的价格满足

$$
\begin{aligned}
P_t(X_T)
&=
\frac{1}{\zeta_t}
E_t^{\mathbb P}[\zeta_TX_T].
\end{aligned}
$$

令 money-market account 为

$$
\begin{aligned}
B_t^0
&=
\exp\!\left(\int_0^t r_sds\right),
\qquad
\frac{dB_t^0}{B_t^0}=r_tdt.
\end{aligned}
$$

SPD 和 EMM 的关系是：把 SPD 乘回 money-market account 得到换测度密度

$$
\begin{aligned}
Z_t
&:=
\frac{\zeta_tB_t^0}{\zeta_0B_0^0},\\
\frac{dZ_t}{Z_t}
&=-\theta_t'dB_t.
\end{aligned}
$$

若 $Z_t$ 是 martingale，则定义 equivalent martingale measure (EMM) $\mathbb Q$：

$$
\begin{aligned}
\frac{d\mathbb Q}{d\mathbb P}\bigg|_{\mathcal F_t}
&=Z_t,
\qquad
dB_t^{\mathbb Q}=dB_t+\theta_tdt.
\end{aligned}
$$

在 $\mathbb Q$ 下，discounted traded price 是 martingale。若 $S_t$ 是无 dividend 或 total-return price，向量形式为：

$$
\begin{aligned}
I_{S_t}^{-1}dS_t
&=
(r_t1_N+\sigma_{S,t}\theta_t)dt+\sigma_{S,t}dB_t\\
&=
r_t1_Ndt+\sigma_{S,t}dB_t^{\mathbb Q},\\
d\left(\frac{S_t}{B_t^0}\right)
&=
\frac{I_{S_t}}{B_t^0}\sigma_{S,t}dB_t^{\mathbb Q}.
\end{aligned}
$$

因此同一个价格也可写成 risk-neutral / EMM pricing：

$$
\begin{aligned}
P_t(X_T)
&=
B_t^0
E_t^{\mathbb Q}\!\left[\frac{X_T}{B_T^0}\right].
\end{aligned}
$$

记

$$
\begin{aligned}
\sigma_{S,t}&:=\sqrt{Y_t}\xi,
\qquad
\mu_{S,t}-r_t1_N:=Y_t\eta_t.
\end{aligned}
$$

由 Itô product rule，dynamic budget constraint 推出：

$$
\begin{aligned}
d(\zeta_tW_t)
&=\zeta_tdW_t+W_td\zeta_t+d\zeta_tdW_t\\
&=
\zeta_t
\left[
\pi_t'(\mu_{S,t}-r_t1_N-\sigma_{S,t}\theta_t)+e_t-c_t
\right]dt\\
&\quad
+\zeta_t(\pi_t'\sigma_{S,t}-W_t\theta_t')dB_t.
\end{aligned}
$$

无套利要求 $\mu_{S,t}-r_t1_N=\sigma_{S,t}\theta_t$，所以：

$$
\begin{aligned}
d(\zeta_tW_t)+\zeta_t(c_t-e_t)dt
&=
\zeta_t(\pi_t'\sigma_{S,t}-W_t\theta_t')dB_t.
\end{aligned}
$$

积分并取期望，若 terminal wealth 非负且 no-Ponzi 条件成立：

$$
\begin{aligned}
E_0[\zeta_TW_T]
+E_0\!\left[\int_0^T\zeta_tc_tdt\right]
&=
W_0+
E_0\!\left[\int_0^T\zeta_te_tdt\right]\\
\Longrightarrow\quad
E_0\!\left[\int_0^\infty\zeta_tc_tdt\right]
&\le
W_0+
E_0\!\left[\int_0^\infty\zeta_te_tdt\right].
\end{aligned}
$$

因此 static problem 是：

$$
\left\{
\begin{aligned}
\max_{\{c_t\}}
&\quad
E_0\!\left[
\int_0^\infty e^{-\rho t}u(c_t)\,dt
\right],\\
\text{s.t.}\quad
E_0\!\left[\int_0^\infty \zeta_t c_t\,dt\right]
&\le
W_0+
E_0\!\left[\int_0^\infty \zeta_t e_t\,dt\right].
\end{aligned}
\right.
$$

所以 dynamic problem 的 feasible consumption 必须满足 static budget constraint；在 complete market 中，满足 static constraint 的 consumption plan 可以由某个 trading strategy replicate，二者等价。

**（3）Interest rate 与 $S_t,\eta_t$**

若代表性 agent 的 utility 为

$$
\begin{aligned}
E_0\!\left[\int_0^\infty e^{-\rho t}
\left(-e^{-\alpha c_t}\right)dt\right],
\end{aligned}
$$

则 FOC 给出：

$$
\begin{aligned}
\alpha e^{-\rho t-\alpha c_t}
&=\lambda\zeta_t
\quad\Longleftrightarrow\quad
\zeta_t\propto e^{-\rho t-\alpha c_t}.
\end{aligned}
$$

如果题目使用 $\xi_t^i$ 表示 agent $i$ 的 SPD，而不是本文这里用的 $\zeta_t$，则同一市场中的相对权重通常来自两个 SPD 的 ratio：

$$
\begin{aligned}
\frac{\xi_t^2}{\xi_t^1}
&=
\frac{\text{agent 2 marginal utility density}}{\text{agent 1 marginal utility density}}
\quad\Longleftrightarrow\quad
\eta_t \text{ or } \eta_t^{-1}.
\end{aligned}
$$

因此若考题写 $\eta_t=\xi_t^2/\xi_t^1$，就按该定义代入；若答案中要用 consumption-sharing rule，则先确认 $\eta_t$ 是 $c_t^2/c_t^1$ 还是 $c_t^1/c_t^2$。

均衡中 consumption 等于 aggregate endowment。若记 $c_t=e_t=Y_t$，且

$$
\begin{aligned}
dY_t
&=\mu(Y_t,t)dt+\sigma_Y(Y_t,t)'dB_t,
\qquad \sigma_Y(Y_t,t)\in\mathbb R^d,
\end{aligned}
$$

则

$$
\begin{aligned}
\frac{d\zeta_t}{\zeta_t}
&=
\left[-\rho-\alpha\mu(Y_t,t)
+\frac{\alpha^2}{2}\sigma_Y(Y_t,t)'\sigma_Y(Y_t,t)\right]dt
-\alpha\sigma_Y(Y_t,t)'dB_t.
\end{aligned}
$$

和 $\frac{d\zeta_t}{\zeta_t}=-r_tdt-\theta_t'dB_t$ 对比：

$$
\begin{aligned}
r_t
&=
\rho+\alpha\mu(Y_t,t)
-\frac{\alpha^2}{2}\sigma_Y(Y_t,t)'\sigma_Y(Y_t,t),\\
\theta_t&=\alpha\sigma_Y(Y_t,t).
\end{aligned}
$$

risky assets 的 expected excess return vector 必须等于 covariance risk premium：

$$
\begin{aligned}
\mu_{S,t}-r_t1_N
&=\sigma_{S,t}\theta_t.
\end{aligned}
$$

若题目写成

$$
\begin{aligned}
I_{S_t}^{-1}dS_t
&=(r_t1_N+Y_t\eta_t)dt+\sqrt{Y_t}\xi\,dB_t,
\end{aligned}
$$

则

$$
\begin{aligned}
Y_t\eta_t
&=
\sqrt{Y_t}\xi\,\theta_t\\
&=
\sqrt{Y_t}\xi\,\alpha\sigma_Y(Y_t,t),
\end{aligned}
$$

即

$$
\begin{aligned}
\eta_t
&=
\frac{\alpha\xi\sigma_Y(Y_t,t)}{\sqrt{Y_t}}.
\end{aligned}
$$

这里 $\eta_t$ 是 $N\times1$ vector；若 $d=1$，$\xi$ 是 $N\times1$ loading vector，上式逐资产成立。题目给 $\operatorname{rank}(\xi)=N$ 时，表示 $N$ 个 risky assets 的 shock loading 满行秩。

如果原题的 $Y_t$ 不是 aggregate endowment，而是 stochastic volatility factor，则只需把上面 $c_t=e_t$ 换成题目给定的 aggregate endowment process；核心仍是：

$$
\begin{aligned}
\zeta_t\propto e^{-\rho t-\alpha e_t},
\qquad
r_t=-\text{drift}\left(\frac{d\zeta_t}{\zeta_t}\right),
\qquad
\theta_t=-\text{diffusion}\left(\frac{d\zeta_t}{\zeta_t}\right).
\end{aligned}
$$

::::

---



## Question 10.3 考场原题回忆：Two Countries, Two Goods, Exchange Rate, Log Utility


::::{solution}

**合并位置**
这题已合并到 10.7 考场题重构：Two-Country Two-Good Pure-Exchange Economy。10.7 保留完整的 optimization problems、goods clearing、FOC、allocation、exchange rate、interest rate、stock prices 和 symmetric case。

**本题最小记忆式**：若 good 1 是 numeraire，$\epsilon_t$ 表示 good 2 以 good 1 计价，则

$$
\left\{
\begin{aligned}
\epsilon_t
&=\frac{\zeta_t^{(2)}}{\zeta_t^{(1)}},\\
S_t^{(1)}
&=\frac{1}{\zeta_t^{(1)}}
E_t\left[\int_t^\infty \zeta_s^{(1)}D_s^1\,ds\right],\\
S_t^{(2)}
&=\frac{1}{\zeta_t^{(1)}}
E_t\left[\int_t^\infty \zeta_s^{(1)}\epsilon_sD_s^2\,ds\right].
\end{aligned}
\right.
$$

Likelihood ratio / belief weight 的动态、allocation shares 与 closed-form log-utility price-dividend ratio 统一看 10.7，避免这里和后文出现符号方向不一致。

::::

---



## Question 10.4 考场原题回忆：Bid-Ask Spread and Risk Aversion

#bid-ask-spread #certainty-equivalent #risk-aversion #CARA-normal

**题目回忆** 给定随机初始财富 $\widetilde x$ 和随机 payoff / position $\widetilde w$。Bid price 和 ask price 由无差异条件定义：

$$
\left\{
\begin{aligned}
E[u(\widetilde x)]
&=
E[u(\widetilde x+\widetilde w-\operatorname{BID})],\\
E[u(\widetilde x)]
&=
E[u(\widetilde x-\widetilde w+\operatorname{ASK})].
\end{aligned}
\right.
$$

求 bid-ask spread，并解释。

::::{collapse} Basic setup

$$
\begin{aligned}
CE(Z):=u^{-1}(E[u(Z)]),\qquad
V(q):=CE(\widetilde x+q\widetilde w).
\end{aligned}
$$

::::

::::{solution}

**一般解：certainty equivalent 写法** 定义

$$
\begin{aligned}
CE(Z)
&:=u^{-1}(E[u(Z)]).
\end{aligned}
$$

由 cash translation：

$$
\begin{aligned}
CE(\widetilde x)
&=
CE(\widetilde x+\widetilde w-\operatorname{BID})
=CE(\widetilde x+\widetilde w)-\operatorname{BID},\\
CE(\widetilde x)
&=
CE(\widetilde x-\widetilde w+\operatorname{ASK})
=CE(\widetilde x-\widetilde w)+\operatorname{ASK}.
\end{aligned}
$$

因此

$$
\left\{
\begin{aligned}
\operatorname{BID}
&=
CE(\widetilde x+\widetilde w)-CE(\widetilde x),\\
\operatorname{ASK}
&=
CE(\widetilde x)-CE(\widetilde x-\widetilde w).
\end{aligned}
\right.
$$

所以 bid-ask spread 为

$$
\begin{aligned}
\operatorname{ASK}-\operatorname{BID}
&=
2CE(\widetilde x)
-CE(\widetilde x+\widetilde w)
-CE(\widetilde x-\widetilde w).
\end{aligned}
$$

令 $V(q):=CE(\widetilde x+q\widetilde w)$，则

$$
\begin{aligned}
\operatorname{BID}&=V(1)-V(0),\\
\operatorname{ASK}&=V(0)-V(-1),\\
\operatorname{ASK}-\operatorname{BID}
&=2V(0)-V(1)-V(-1).
\end{aligned}
$$

若 $V(q)$ 对 position $q$ concave（CARA-normal 中成立），则

$$
\begin{aligned}
\operatorname{ASK}-\operatorname{BID}\ge0.
\end{aligned}
$$

**CARA-normal 特例** 若 $u(W)=-e^{-\alpha W}$，且 $(\widetilde x,\widetilde w)$ jointly normal，则

$$
\begin{aligned}
CE(Z)
&=
E[Z]-\frac{\alpha}{2}\operatorname{Var}(Z).
\end{aligned}
$$

于是

$$
\begin{aligned}
\operatorname{BID}
&=
E[\widetilde w]
-\frac{\alpha}{2}
\left[
\operatorname{Var}(\widetilde x+\widetilde w)
-\operatorname{Var}(\widetilde x)
\right]\\
&=
E[\widetilde w]
-\alpha\operatorname{Cov}(\widetilde x,\widetilde w)
-\frac{\alpha}{2}\operatorname{Var}(\widetilde w),
\end{aligned}
$$

且

$$
\begin{aligned}
\operatorname{ASK}
&=
E[\widetilde w]
+\frac{\alpha}{2}
\left[
\operatorname{Var}(\widetilde x-\widetilde w)
-\operatorname{Var}(\widetilde x)
\right]\\
&=
E[\widetilde w]
-\alpha\operatorname{Cov}(\widetilde x,\widetilde w)
+\frac{\alpha}{2}\operatorname{Var}(\widetilde w).
\end{aligned}
$$

所以

$$
\begin{aligned}
\operatorname{ASK}-\operatorname{BID}
&=
\alpha\operatorname{Var}(\widetilde w).
\end{aligned}
$$

注意 covariance 只影响 bid 和 ask 的共同水平，不影响 CARA-normal 下的 spread：

$$
\begin{aligned}
\frac{\operatorname{ASK}+\operatorname{BID}}{2}
&=
E[\widetilde w]-\alpha\operatorname{Cov}(\widetilde x,\widetilde w).
\end{aligned}
$$

**解释** risk-neutral agent 的 certainty equivalent 是 expectation，所以 bid = ask = $E[\widetilde w]$，spread 为 0。Risk-averse agent 买入 $\widetilde w$ 要承担额外风险，因此 bid 低于 expected payoff；卖出或做空 $\widetilde w$ 也要补偿风险，因此 ask 高于 expected payoff。Spread 是风险补偿，随风险厌恶 $\alpha$ 和 payoff risk 上升而扩大。

::::

---



## Question 10.5 考场题重构：No-Risk-Free Mean-Variance Frontier


**题面重构** 考虑 one-period economy，有 $n$ 个 risky assets，没有 risk-free asset。令 risky returns 向量为

$$
\begin{aligned}
\widetilde R&=(\widetilde R_1,\dots,\widetilde R_n)',\qquad
\mu=E[\widetilde R],\qquad
\Sigma=\operatorname{Var}(\widetilde R),\qquad
\Sigma\succ0.
\end{aligned}
$$

令 $1$ 为 $n\times1$ 的全 1 向量，并假设 $\mu$ not proportional to $1$。Portfolio weight 为 $\phi\in\mathbb R^n$。因为没有 risk-free asset，feasible portfolio 必须 fully invested：

$$
\begin{aligned}
1'\phi&=1.
\end{aligned}
$$

定义

$$
\left\{
\begin{aligned}
A&=\mu'\Sigma^{-1}\mu,\\
B&=\mu'\Sigma^{-1}1,\\
C&=1'\Sigma^{-1}1,\\
D&=AC-B^2.
\end{aligned}
\right.
$$

给定目标 expected return $\bar\mu$，mean-variance frontier problem 为

$$
\left\{
\begin{aligned}
\min_{\phi\in\mathbb R^n}\quad
&\phi'\Sigma\phi,\\
\text{s.t.}\quad
&\mu'\phi=\bar\mu,\\
&1'\phi=1.
\end{aligned}
\right.
$$

**任务**：

1. 写出 FOC 并解出 frontier portfolio $\phi(\bar\mu)$。
2. 证明 $\phi(\bar\mu)$ 可以写成两个 basic portfolios 的线性组合。
3. 定义 global minimum-variance portfolio $\phi_{GMV}$ 和 mean portfolio $\phi_\mu$。
4. 证明 two-fund separation。
5. 解释为什么 efficient portfolio 由 “two parts” 组成。

::::{collapse} Basic setup

$$
\begin{aligned}
A&=\mu'\Sigma^{-1}\mu,\qquad
B=\mu'\Sigma^{-1}1,\qquad
C=1'\Sigma^{-1}1,\qquad
D=AC-B^2.
\end{aligned}
$$

::::

::::{solution}

**解析：FOC 与闭式解** 取 Lagrangian：

$$
\begin{aligned}
\mathcal L
&=\phi'\Sigma\phi
-2\lambda(\mu'\phi-\bar\mu)
-2\gamma(1'\phi-1).
\end{aligned}
$$

FOC 给出

$$
\begin{aligned}
\frac{\partial\mathcal L}{\partial\phi}=0
&\Longleftrightarrow
2\Sigma\phi-2\lambda\mu-2\gamma1=0\\
&\Longleftrightarrow
\Sigma\phi=\lambda\mu+\gamma1\\
&\Longleftrightarrow
\phi=\lambda\Sigma^{-1}\mu+\gamma\Sigma^{-1}1.
\end{aligned}
$$

用两个约束解 $\lambda,\gamma$：

$$
\left\{
\begin{aligned}
\mu'\phi
&=\lambda\mu'\Sigma^{-1}\mu+\gamma\mu'\Sigma^{-1}1
=\lambda A+\gamma B=\bar\mu,\\
1'\phi
&=\lambda1'\Sigma^{-1}\mu+\gamma1'\Sigma^{-1}1
=\lambda B+\gamma C=1.
\end{aligned}
\right.
$$

因此

$$
\begin{aligned}
\begin{pmatrix}
A&B\\
B&C
\end{pmatrix}
\begin{pmatrix}
\lambda\\
\gamma
\end{pmatrix}
&=
\begin{pmatrix}
\bar\mu\\
1
\end{pmatrix},
\qquad
D=AC-B^2>0.
\end{aligned}
$$

解得

$$
\left\{
\begin{aligned}
\lambda
&=\frac{C\bar\mu-B}{D},\\
\gamma
&=\frac{A-B\bar\mu}{D}.
\end{aligned}
\right.
$$

代回 frontier portfolio：

$$
\begin{aligned}
\phi(\bar\mu)
&=
\frac{C\bar\mu-B}{D}\Sigma^{-1}\mu
+
\frac{A-B\bar\mu}{D}\Sigma^{-1}1.
\end{aligned}
$$

**两个 basic portfolios** 定义

$$
\left\{
\begin{aligned}
\phi_{GMV}
&=\frac{\Sigma^{-1}1}{1'\Sigma^{-1}1}
=\frac{\Sigma^{-1}1}{C},\\
\phi_\mu
&=\frac{\Sigma^{-1}\mu}{1'\Sigma^{-1}\mu}
=\frac{\Sigma^{-1}\mu}{B}
\qquad (B\ne0).
\end{aligned}
\right.
$$

其中

$$
\left\{
\begin{aligned}
1'\phi_{GMV}&=1,
\qquad
\mu'\phi_{GMV}=\frac{B}{C},\\
1'\phi_\mu&=1,
\qquad
\mu'\phi_\mu=\frac{A}{B}.
\end{aligned}
\right.
$$

令

$$
\begin{aligned}
\phi(\bar\mu)
&=\kappa\phi_\mu+(1-\kappa)\phi_{GMV}.
\end{aligned}
$$

比较 $\Sigma^{-1}\mu$ 的系数：

$$
\begin{aligned}
\frac{\kappa}{B}
&=\frac{C\bar\mu-B}{D}\\
\Longleftrightarrow\quad
\kappa
&=
\frac{BC\bar\mu-B^2}{AC-B^2}.
\end{aligned}
$$

所以 two-fund separation 为

$$
\begin{aligned}
\phi(\bar\mu)
&=
\kappa\phi_\mu+(1-\kappa)\phi_{GMV},\\
\kappa
&=
\frac{BC\bar\mu-B^2}{AC-B^2}.
\end{aligned}
$$

**结论** 没有 risk-free asset 时，frontier portfolio 不能只沿 $\Sigma^{-1}\mu$ 调整，因为还必须满足 $1'\phi=1$。所以有效组合由两个部分组成：

$$
\begin{aligned}
\text{frontier portfolio}
&=
\underbrace{\text{mean direction } \Sigma^{-1}\mu}_{\text{return-seeking fund}}
+
\underbrace{\text{GMV direction } \Sigma^{-1}1}_{\text{budget / minimum-variance fund}}.
\end{aligned}
$$

若 $B=0$，$\phi_\mu=\Sigma^{-1}\mu/B$ 不可定义；此时仍有 $\phi(\bar\mu)\in\operatorname{span}\{\Sigma^{-1}\mu,\Sigma^{-1}1\}$，只是不能用上述 normalized $\phi_\mu$ 表达。

::::

---



## Question 10.6 考场题重构：CARA Terminal Wealth, SPD, and Market Price of Risk


**题面重构** 考虑 $[0,T]$ 上的 continuous-time economy。有 $N+1$ 个 traded assets。Asset $0$ 是 risk-free asset，assets $1,\dots,N$ 是 risky assets：

$$
\left\{
\begin{aligned}
dS_t^0&=r_tS_t^0dt,\\
dS_t
&=
I_{S_t}
\left[
(r_t1_N+Y_t\eta_t)dt+\sqrt{Y_t}\xi\,dB_t
\right],\\
dY_t&=\mu(Y_t,t)dt+\sigma_Y(Y_t,t)'dB_t.
\end{aligned}
\right.
$$

其中

$$
\left\{
\begin{aligned}
S_t&=(S_t^1,\dots,S_t^N)',\\
I_{S_t}&=\operatorname{diag}(S_t^1,\dots,S_t^N),\\
\eta_t&\in\mathbb R^N,\\
\xi&\in\mathbb R^{N\times d},\qquad \operatorname{rank}(\xi)=N,\\
B_t&\in\mathbb R^d.
\end{aligned}
\right.
$$

Investor 初始财富 $X_0=x$，CARA utility 为

$$
\begin{aligned}
U(w)&=-\frac{1}{\gamma}e^{-\gamma w},\qquad \gamma>0.
\end{aligned}
$$

令 $\pi_t\in\mathbb R^N$ 表示投在 risky assets 上的 dollar amount，terminal random endowment 为 $H(Y_T)$。

**任务**：

1. 写出 self-financing wealth equation / dynamic budget constraint。
2. 写出 dynamic optimization problem。
3. 用 martingale approach 写出 static problem。
4. Characterize state-price density process。
5. 解释 $\operatorname{rank}(\xi)=N$ 的作用，并区分 $d=N$ 与 $d>N$。
6. 推导 market price of Brownian risk $\lambda_t$ 与 $\eta_t$ 的关系。
7. Complete market 下写出 CARA optimal terminal wealth 的 FOC。
8. 解释 terminal endowment $H(Y_T)$ 如何进入最优 terminal wealth。

::::{collapse} Basic setup

$$
\begin{aligned}
\mu_{S,t}-r_t1_N&=Y_t\eta_t,\qquad
\sigma_{S,t}=\sqrt{Y_t}\xi,\qquad
\frac{dZ_t}{Z_t}=-r_tdt-\lambda_t'dB_t.
\end{aligned}
$$

::::

::::{solution}

**解析：dynamic budget constraint** 因为 $\pi_t$ 是 risky dollar position，risk-free position 是 $X_t^\pi-1'\pi_t$。由 risky gross return dynamics

$$
\begin{aligned}
I_{S_t}^{-1}dS_t
&=(r_t1_N+Y_t\eta_t)dt+\sqrt{Y_t}\xi\,dB_t,
\end{aligned}
$$

得到 self-financing wealth equation：

$$
\begin{aligned}
dX_t^\pi
&=
\left[
r_tX_t^\pi+Y_t\pi_t'\eta_t
\right]dt
+
\sqrt{Y_t}\pi_t'\xi\,dB_t,\\
X_0^\pi&=x.
\end{aligned}
$$

**Dynamic problem**

$$
\begin{aligned}
V(t,x,y)
&=
\sup_{\pi\in\mathcal A}
E_{t,x,y}
\left[
-\frac{1}{\gamma}
\exp\{-\gamma(X_T^\pi+H(Y_T))\}
\right].
\end{aligned}
$$

**State-price density 与 market price of risk** 令 state-price density $Z_t$ 满足

$$
\begin{aligned}
\frac{dZ_t}{Z_t}
&=-r_tdt-\lambda_t'dB_t,\qquad Z_0=1.
\end{aligned}
$$

无套利要求 $Z_tS_t^i+\int_0^t Z_s\,dD_s^i$ 为 local martingale；这里 risky assets 无中间 dividend 时，等价于 discounted risky prices 在 $Z$ 对应的 EMM 下为 martingales。对 price drift 匹配：

$$
\begin{aligned}
\mu_{S,t}-r_t1_N
&=\sigma_{S,t}\lambda_t,
\end{aligned}
$$

其中

$$
\begin{aligned}
\mu_{S,t}-r_t1_N&=Y_t\eta_t,\\
\sigma_{S,t}&=\sqrt{Y_t}\xi.
\end{aligned}
$$

所以核心关系是

$$
\begin{aligned}
\sqrt{Y_t}\xi\lambda_t
&=Y_t\eta_t.
\end{aligned}
$$

等价地，当 $Y_t>0$：

$$
\begin{aligned}
\xi\lambda_t&=\sqrt{Y_t}\eta_t.
\end{aligned}
$$

**Complete vs incomplete markets** 因为 $\xi$ 是 $N\times d$ 且 $\operatorname{rank}(\xi)=N$，$N$ 个 risky assets 的 Brownian exposure 满行秩，所以所有 risky excess returns 都有唯一的 row-space risk premium。

若 $d=N$，则 $\xi$ 可逆，market price of risk 唯一：

$$
\begin{aligned}
\lambda_t
&=\sqrt{Y_t}\xi^{-1}\eta_t.
\end{aligned}
$$

此时 risky assets span all Brownian shocks，market complete。

若 $d>N$，则 Brownian shocks 多于 risky assets，$\lambda_t$ 不唯一。所有 admissible market prices of risk 可写为

$$
\begin{aligned}
\lambda_t^\nu
&=
\sqrt{Y_t}\xi'(\xi\xi')^{-1}\eta_t+\nu_t,\\
\xi\nu_t&=0.
\end{aligned}
$$

其中 $\nu_t$ 是 unspanned Brownian risk 的任意 admissible price。对应的 SPD 为

$$
\begin{aligned}
\frac{dZ_t^\nu}{Z_t^\nu}
&=-r_tdt-(\lambda_t^\nu)'dB_t.
\end{aligned}
$$

**Static primal problem** 在 complete market 或给定某个 admissible SPD $Z_T$ 时，martingale approach 把问题写成

$$
\left\{
\begin{aligned}
\sup_{X_T}\quad
&E\left[
-\frac{1}{\gamma}e^{-\gamma(X_T+H(Y_T))}
\right],\\
\text{s.t.}\quad
&E[Z_TX_T]\le x.
\end{aligned}
\right.
$$

**Complete market 下的 CARA FOC** 设预算约束乘子为 $y>0$。FOC：

$$
\begin{aligned}
e^{-\gamma(X_T^*+H(Y_T))}
&=yZ_T\\
\Longleftrightarrow\quad
X_T^*+H(Y_T)
&=-\frac{1}{\gamma}\log(yZ_T)\\
\Longleftrightarrow\quad
X_T^* =
-H(Y_T)-\frac{1}{\gamma}\log(yZ_T).
\end{aligned}
$$

其中 $y$ 由 binding budget constraint 决定：

$$
\begin{aligned}
E[Z_TX_T^*]&=x.
\end{aligned}
$$

**Terminal endowment 的作用** 最优的是 total terminal wealth $W_T^*=X_T^*+H(Y_T)$。因此 $H(Y_T)$ 进入 financial terminal wealth 时是完全 hedge/subtract 的形式：

$$
\begin{aligned}
X_T^*
&=
\underbrace{-\frac{1}{\gamma}\log(yZ_T)}_{\text{CARA demand for total wealth}} -
\underbrace{H(Y_T)}_{\text{external terminal endowment}}.
\end{aligned}
$$

若 $H(Y_T)$ 高的状态本身带来财富，投资组合需要的 traded payoff $X_T^*$ 就更低；若 $H(Y_T)$ 与 unspanned shocks 有关，在 incomplete market 中不能完全 hedge，只能通过 dual choice of $Z^\nu$ 调整。

**Incomplete-market dual form** 当 $d>N$ 时，要在所有 admissible SPDs 上取 dual：

$$
\begin{aligned}
\inf_{y>0,\nu}
E\left[
\sup_{X_T}
\left\{
-\frac{1}{\gamma}e^{-\gamma(X_T+H(Y_T))}
-yZ_T^\nu X_T
\right\}
\right]
+yx,
\end{aligned}
$$

subject to

$$
\begin{aligned}
\frac{dZ_t^\nu}{Z_t^\nu}
&=-r_tdt-(\lambda_t^\nu)'dB_t,\qquad
\lambda_t^\nu =
\sqrt{Y_t}\xi'(\xi\xi')^{-1}\eta_t+\nu_t,\qquad
\xi\nu_t=0.
\end{aligned}
$$

::::

---



## Question 10.7 考场题重构：Two-Country Two-Good Pure-Exchange Economy


**题面重构** 考虑 continuous-time pure-exchange economy。两个国家 $i=1,2$，两种 perishable consumption goods $k=1,2$。没有 production、storage 或 investment technology。两种 goods 的 aggregate endowment 为 $D_t^1,D_t^2$。Good 1 是 numeraire，real exchange rate $\epsilon_t$ 是 good 2 以 good 1 计价的价格。

Investor $i$ 的 utility 为

$$
\begin{aligned}
U_i
&=
E^i
\left[
\int_0^\infty e^{-\rho_i t}
\left(
\alpha_i\log c_{i1,t}
+
(1-\alpha_i)\log c_{i2,t}
\right)dt
\right],
\end{aligned}
$$

其中 $\rho_i>0$，$\alpha_i\in(0,1)$。两位投资者对 endowment process 有 heterogeneous beliefs。以 $P^1$ 为 reference belief，likelihood-ratio process 为

$$
\begin{aligned}
\eta_t^{2/1}
&=
\frac{dP_t^2}{dP_t^1} =
\exp\left[
-\frac{1}{2}(\beta_1^2+\beta_2^2)t
-\beta_1B_{1t}^1-\beta_2B_{2t}^1
\right].
\end{aligned}
$$

因此

$$
\begin{aligned}
\frac{d\eta_t^{2/1}}{\eta_t^{2/1}}
&=-\beta'dB_t^1,
\qquad
\beta=(\beta_1,\beta_2)'.
\end{aligned}
$$

Girsanov 关系可写为

$$
\begin{aligned}
dB_t^2&=dB_t^1+\beta dt,
\end{aligned}
$$

具体符号方向取决于 likelihood ratio 的定义；解题时只要和 $\eta_t^{2/1}$ 保持一致。

Market 有 risk-free asset 和两个 stocks。Stock $k$ 是对 aggregate endowment stream $D_t^k$ 的 claim，价格 $S_t^k$ 用 good 1 表示。

**任务**：

1. 写出两位 representative investors 的 optimization problems。
2. 写出 goods-market clearing conditions。
3. 推导两位投资者的 FOC。
4. 定义两种 beliefs 下的 state-price densities，并用 $\eta_t^{2/1}$ 写出关系。
5. 推导 equilibrium allocation。
6. 推导 real exchange rate $\epsilon_t$。
7. 推导 domestic risk-free interest rate $r_t$。
8. 推导 stock prices $S_t^1,S_t^2$。
9. 解释 heterogeneous beliefs 如何影响 exchange-rate volatility 和 stock-price volatility。
10. 在 $\rho_1=\rho_2=\rho$ 且 $\alpha_1=\alpha_2=1/2$ 时化简。

::::{collapse} Basic setup

$$
\begin{aligned}
\epsilon_t&=\frac{\zeta_t^{(2)}}{\zeta_t^{(1)}},\qquad
\frac{d\eta_t^{2/1}}{\eta_t^{2/1}}=-\beta'dB_t^1,\qquad
c_{1k,t}+c_{2k,t}=D_t^k.
\end{aligned}
$$

::::

::::{solution}

**Optimization problems 与 market clearing** 以 good 1 为 numeraire，agent $i$ 面临的 budget constraint 可抽象写为

$$
\begin{aligned}
E^i\left[
\int_0^\infty
\zeta_t^{(1),i}
\left(c_{i1,t}+\epsilon_tc_{i2,t}\right)dt
\right]
&\le W_{i0},
\end{aligned}
$$

并最大化 $U_i$。Goods-market clearing：

$$
\left\{
\begin{aligned}
c_{11,t}+c_{21,t}&=D_t^1,\\
c_{12,t}+c_{22,t}&=D_t^2.
\end{aligned}
\right.
$$

**FOC 与 SPD relation** 在 $P^1$ 下写 agent 2 的期望时要乘以 $\eta_t^{2/1}$。令 $\Lambda_i$ 为 budget multiplier。FOC 为

$$
\left\{
\begin{aligned}
e^{-\rho_1t}\frac{\alpha_1}{c_{11,t}}
&=\Lambda_1\zeta_t^{(1)},\\
e^{-\rho_1t}\frac{1-\alpha_1}{c_{12,t}}
&=\Lambda_1\zeta_t^{(2)}
=\Lambda_1\epsilon_t\zeta_t^{(1)},\\
\eta_t^{2/1}e^{-\rho_2t}\frac{\alpha_2}{c_{21,t}}
&=\Lambda_2\zeta_t^{(1)},\\
\eta_t^{2/1}e^{-\rho_2t}\frac{1-\alpha_2}{c_{22,t}}
&=\Lambda_2\zeta_t^{(2)}
=\Lambda_2\epsilon_t\zeta_t^{(1)}.
\end{aligned}
\right.
$$

若 $\widehat\zeta_t^{(k),i}$ 表示在 $P^i$ 下书写的 own-measure SPD，则同一 claim 的价格必须满足

$$
\begin{aligned}
\widehat\zeta_t^{(k),1}
&=
\eta_t^{2/1}\widehat\zeta_t^{(k),2},
\qquad
\widehat\zeta_t^{(k),2}
=\frac{\widehat\zeta_t^{(k),1}}{\eta_t^{2/1}},
\qquad k=1,2,
\end{aligned}
$$

up to constant budget multipliers / normalization。上面的 FOC 已经把 agent 2 的 $P^2$ expectation 转成了 $P^1$ expectation，所以 $\eta_t^{2/1}$ 直接乘在 agent 2 的 marginal utility 上。

**Equilibrium allocation** 定义 good-specific relative belief-weight processes：

$$
\left\{
\begin{aligned}
\omega_{1,t}
&=
\frac{\Lambda_1\alpha_2}{\Lambda_2\alpha_1}
e^{-(\rho_2-\rho_1)t}\eta_t^{2/1},\\
\omega_{2,t}
&=
\frac{\Lambda_1(1-\alpha_2)}{\Lambda_2(1-\alpha_1)}
e^{-(\rho_2-\rho_1)t}\eta_t^{2/1}.
\end{aligned}
\right.
$$

则 FOC ratio 与 goods clearing 给出

$$
\left\{
\begin{aligned}
c_{11,t}
&=\frac{D_t^1}{1+\omega_{1,t}},
\qquad
c_{21,t}
=\frac{\omega_{1,t}D_t^1}{1+\omega_{1,t}},\\
c_{12,t}
&=\frac{D_t^2}{1+\omega_{2,t}},
\qquad
c_{22,t}
=\frac{\omega_{2,t}D_t^2}{1+\omega_{2,t}}.
\end{aligned}
\right.
$$

如果沿题面 compact notation，把 $\Lambda_i$ 定义为上面 budget multiplier 的倒数，并把 taste weights 吸收到 $\Lambda_i$ 中；或者在 symmetric taste case $\alpha_1=\alpha_2$ 下，可以用单一过程

$$
\begin{aligned}
\omega_t
&=
\frac{\Lambda_2}{\Lambda_1}
e^{-(\rho_2-\rho_1)t}
\eta_t^{2/1}
\end{aligned}
$$

表示相对 belief weight；此时两种 goods 的 allocation share 由同一个 $\omega_t$ 控制。

**Exchange rate** 由 agent 1 的两个 FOC 相除：

$$
\begin{aligned}
\epsilon_t
&=
\frac{\zeta_t^{(2)}}{\zeta_t^{(1)}} =
\frac{1-\alpha_1}{\alpha_1}
\frac{c_{11,t}}{c_{12,t}}.
\end{aligned}
$$

代入 equilibrium allocation：

$$
\begin{aligned}
\epsilon_t
&=
\frac{1-\alpha_1}{\alpha_1}
\frac{D_t^1}{D_t^2}
\frac{1+\omega_{2,t}}{1+\omega_{1,t}}.
\end{aligned}
$$

同理，用 agent 2 的 FOC 可得同一个 $\epsilon_t$；这是 FOC 与 allocation 同时满足的结果。

**Domestic SPD 与 interest rate** 令 good 1 下的 domestic SPD 为

$$
\begin{aligned}
\zeta_t^{(1)}
&=
\frac{e^{-\rho_1t}\alpha_1}{\Lambda_1c_{11,t}}
\propto
e^{-\rho_1t}\frac{1+\omega_{1,t}}{D_t^1}.
\end{aligned}
$$

设在 $P^1$ 下

$$
\begin{aligned}
\frac{dD_t^1}{D_t^1}
&=\mu_{1,t}dt+\sigma_{1,t}'dB_t^1,
\qquad
\frac{d\omega_{1,t}}{\omega_{1,t}}
=(\rho_1-\rho_2)dt-\beta'dB_t^1.
\end{aligned}
$$

令

$$
\begin{aligned}
a_{1,t}&=\frac{\omega_{1,t}}{1+\omega_{1,t}}.
\end{aligned}
$$

Itô lemma 给出

$$
\begin{aligned}
\frac{d\zeta_t^{(1)}}{\zeta_t^{(1)}}
&=
\left[
-\rho_1
+a_{1,t}(\rho_1-\rho_2)
-\mu_{1,t}
+\sigma_{1,t}'\sigma_{1,t}
+a_{1,t}\beta'\sigma_{1,t}
\right]dt\\
&\quad
-(\sigma_{1,t}+a_{1,t}\beta)'dB_t^1.
\end{aligned}
$$

和

$$
\begin{aligned}
\frac{d\zeta_t^{(1)}}{\zeta_t^{(1)}}
&=-r_t^{(1)}dt-(\theta_t^{(1)})'dB_t^1
\end{aligned}
$$

对比：

$$
\begin{aligned}
r_t^{(1)}
&=
(1-a_{1,t})\rho_1+a_{1,t}\rho_2
+\mu_{1,t}
-\sigma_{1,t}'\sigma_{1,t}
-a_{1,t}\beta'\sigma_{1,t},\\
\theta_t^{(1)}
&=\sigma_{1,t}+a_{1,t}\beta.
\end{aligned}
$$

**Stock prices** Stock $1$ 支付 good 1 dividend $D_t^1$，所以 good-1 price 为

$$
\begin{aligned}
S_t^1
&=
\frac{1}{\zeta_t^{(1)}}
E_t^1\left[
\int_t^\infty \zeta_s^{(1)}D_s^1\,ds
\right].
\end{aligned}
$$

若 $\rho_i$ 常数且 $\eta^{2/1}$ 是 $P^1$-martingale，则闭式为

$$
\begin{aligned}
S_t^1
&=
D_t^1
\frac{
\frac{1}{\rho_1}+\frac{\omega_{1,t}}{\rho_2}
}
{1+\omega_{1,t}}.
\end{aligned}
$$

Stock $2$ 支付 good 2 dividend $D_t^2$。先用 good 2 numeraire 定价，再乘 exchange rate 转回 good 1：

$$
\begin{aligned}
S_t^2
&=
\epsilon_t
\frac{1}{\zeta_t^{(2)}}
E_t^1\left[
\int_t^\infty \zeta_s^{(2)}D_s^2\,ds
\right]\\
&=
\epsilon_tD_t^2
\frac{
\frac{1}{\rho_1}+\frac{\omega_{2,t}}{\rho_2}
}
{1+\omega_{2,t}}.
\end{aligned}
$$

**Heterogeneous beliefs 的 volatility channel** 因为

$$
\begin{aligned}
\frac{d\omega_{k,t}}{\omega_{k,t}}
&=(\rho_1-\rho_2)dt-\beta'dB_t^1,
\end{aligned}
$$

只要 $\beta\ne0$，relative belief weight $\omega_{k,t}$ 就随机波动。它进入 allocation、exchange rate、domestic SPD 和 stock valuation ratio：

$$
\begin{aligned}
\epsilon_t
&=
\frac{1-\alpha_1}{\alpha_1}
\frac{D_t^1}{D_t^2}
\frac{1+\omega_{2,t}}{1+\omega_{1,t}},\\
\frac{S_t^k}{D_t^k}
&=
\frac{
\frac{1}{\rho_1}+\frac{\omega_{k,t}}{\rho_2}
}
{1+\omega_{k,t}}.
\end{aligned}
$$

因此 disagreement shock $\beta'dB_t$ 会带来额外 exchange-rate volatility 与 stock-price volatility。核心不是 endowment 本身变得更 volatile，而是 beliefs 改变了 stochastic discounting 和 wealth/allocation weights。

**Symmetric log-utility case** 若

$$
\begin{aligned}
\rho_1=\rho_2=\rho,
\qquad
\alpha_1=\alpha_2=\frac{1}{2},
\end{aligned}
$$

则 $\omega_{1,t}=\omega_{2,t}=\omega_t$，且

$$
\begin{aligned}
\frac{d\omega_t}{\omega_t}
&=-\beta'dB_t^1.
\end{aligned}
$$

Allocation：

$$
\left\{
\begin{aligned}
c_{11,t}&=\frac{D_t^1}{1+\omega_t},
\qquad
c_{21,t}=\frac{\omega_tD_t^1}{1+\omega_t},\\
c_{12,t}&=\frac{D_t^2}{1+\omega_t},
\qquad
c_{22,t}=\frac{\omega_tD_t^2}{1+\omega_t}.
\end{aligned}
\right.
$$

Exchange rate 化简为

$$
\begin{aligned}
\epsilon_t
&=\frac{D_t^1}{D_t^2}.
\end{aligned}
$$

Stock prices 化简为 Lucas-tree log-utility price-dividend ratio：

$$
\begin{aligned}
S_t^1&=\frac{D_t^1}{\rho},\\
S_t^2&=\epsilon_t\frac{D_t^2}{\rho}
=\frac{D_t^1}{\rho}.
\end{aligned}
$$

在完全对称 case，heterogeneous beliefs 仍改变 individual allocation shares，但由于两位 agent 对两种 goods 的 taste weights 完全相同，$\omega_t$ 在 exchange rate 和 price-dividend ratio 中抵消；若 $\rho_i$ 或 $\alpha_i$ 不同，$\omega_t$ 不再抵消，belief disagreement 会直接进入 exchange rate 和 stock prices。

::::
