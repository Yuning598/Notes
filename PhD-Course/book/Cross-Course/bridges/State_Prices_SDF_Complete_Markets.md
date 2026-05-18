---
type: bridge-note
qe_weight: high
courses:
  - Microeconomics
  - Asset Pricing
  - QE-PS
topics:
  - state-prices
  - sdf
  - complete-markets
  - no-arbitrage
exam_modes:
  - proof
  - computation
  - construction
  - interpretation
tags:
  - qe
  - cross-course
  - state-prices
  - sdf
---

# State Prices, SDF, and Complete Markets

## 1. 一句话主线

状态价格（state prices）是共同对象：在 Micro 里它是 Arrow-Debreu 状态商品的 date-0 价格，在 Asset Pricing 里它等价于 physical probability 乘以 SDF，在 QE 题里它决定无套利价格区间和套利组合。

## 2. 核心等价关系

设状态 $s=1,\ldots,S$，physical probability 为 $\pi_s$，SDF 为 $m_s$，state price 为 $q_s$，risk-neutral probability 为 $\psi_s$。

$$
\begin{aligned}
q_s&=\pi_s m_s,\\
P(X)&=\sum_{s=1}^S q_s X_s\\
&=\sum_{s=1}^S \pi_s m_s X_s\\
&=E[mX],\\
P_f&=\sum_{s=1}^S q_s=E[m],\\
R_f&=\frac{1}{P_f}=\frac{1}{E[m]},\\
\psi_s&=\frac{q_s}{\sum_{t=1}^S q_t}\\
&=R_f q_s\\
&=\frac{\pi_s m_s}{E[m]},\\
P(X)&=\frac{1}{R_f}E^{\mathbb Q}[X].
\end{aligned}
$$

## 3. 课程来源

### Microeconomics

核心页面：

- [Choice under Uncertainty and State-Contingent Equilibrium](../../Microeconomic/02%20Choice%20under%20Uncertainty%20and%20State-Contingent%20Equilibrium.md)
- [Arrow securities and state prices](../../Microeconomic/cards/Arrow%20securities%20and%20state%20prices.md)
- [Complete vs incomplete markets](../../Microeconomic/cards/Complete%20vs%20incomplete%20markets.md)
- [No arbitrage and state price vector](../../Microeconomic/cards/No%20arbitrage%20and%20state%20price%20vector.md)

Micro 的语言是 state-contingent commodities。若每个状态都有 Arrow security，household 可以在状态之间转移财富，市场就像完整的 Arrow-Debreu 商品市场。

### Asset Pricing

核心页面：

- [Theoretical AP Part 2](../../Asset%20Pricing/Theoretical%20AP/02_Dynamic_Asset_Pricing.md)
- [Stochastic Discount Factor](../../Asset%20Pricing/Theoretical%20AP/Part2-%E5%8D%A1%E7%89%87/Stochastic%20Discount%20Factor%20-%20%E5%AE%9A%E4%B9%89%E4%B8%8E%E5%9F%BA%E6%9C%AC%E5%85%B3%E7%B3%BB.md)
- [Arrow securities and state prices](../../Asset%20Pricing/Theoretical%20AP/Part2-%E5%8D%A1%E7%89%87/Arrow%20securities%20%E4%B8%8E%20state%20prices.md)
- [Risk-neutral probability](../../Asset%20Pricing/Theoretical%20AP/Part2-%E5%8D%A1%E7%89%87/%E9%A3%8E%E9%99%A9%E4%B8%AD%E6%80%A7%E6%A6%82%E7%8E%87%20-%20%E4%BB%8E%20SDF%20%E5%88%B0%20Q.md)

Asset Pricing 的语言是 pricing kernel / SDF。状态价格不是新对象，而是 SDF 在有限状态模型中的逐状态表示。

### QE-PS

核心题目：

- [QE-PS 1: Market completeness and Arrow security](../../ProblemSet/ProblemSet.md)
- [QE-PS 2: Representative investor pricing](../../ProblemSet/ProblemSet.md)
- [QE-PS 4: SDF and risk-neutral pricing](../../ProblemSet/ProblemSet.md)

QE 的语言通常更计算化：给 payoff matrix 和价格，要求判断完备性、求 state price set、给出无套利价格区间，或者在价格出界时构造套利策略。

## 4. 完备性与状态价格唯一性

令 $A\in\mathbb R^{S\times J}$ 是 payoff matrix，$p\in\mathbb R^J$ 是资产价格，$q\in\mathbb R^S$ 是状态价格向量。

$$
\begin{aligned}
p&=A^\top q,\\
\text{no arbitrage}
&\Longleftrightarrow \exists q\gg0 \text{ such that } p=A^\top q,\\
\text{complete markets}
&\Longleftrightarrow \operatorname{rank}(A)=S,\\
\operatorname{rank}(A)=S
&\Longrightarrow q \text{ is unique},\\
\operatorname{rank}(A)<S
&\Longrightarrow q \text{ may not be unique}.
\end{aligned}
$$

直觉：资产 payoff span 若覆盖所有状态 contingent payoff，任意 Arrow security 都可复制，所以状态价格唯一；若 payoff span 不满，某些状态方向无法由现有资产复制，因此只得到一个状态价格集合。

## 5. 代表性投资者定价

代表性投资者的一阶条件把 Micro 的边际替代率和 Asset Pricing 的 SDF 接起来。

$$
\begin{aligned}
\max_{\{c_{1,s}\},c_0}\quad
&u(c_0)+\delta\sum_{s=1}^S\pi_s u(c_{1,s})\\
\text{s.t.}\quad
&c_0+\sum_{s=1}^S q_s c_{1,s}=W_0.
\end{aligned}
$$

FOC 给出

$$
\begin{aligned}
u'(c_0)&=\lambda,\\
\delta\pi_s u'(c_{1,s})&=\lambda q_s,\\
q_s&=\delta\pi_s\frac{u'(c_{1,s})}{u'(c_0)},\\
m_s&=\frac{q_s}{\pi_s}
=\delta\frac{u'(c_{1,s})}{u'(c_0)}.
\end{aligned}
$$

若 $u(c)=\frac{c^{1-\rho}}{1-\rho}$，则

$$
\begin{aligned}
q_s
&=\delta\pi_s\left(\frac{c_{1,s}}{c_0}\right)^{-\rho},\\
P_f
&=\sum_{s=1}^S q_s
=\delta E\left[\left(\frac{c_1}{c_0}\right)^{-\rho}\right],\\
R_f
&=\frac{1}{\delta E\left[(c_1/c_0)^{-\rho}\right]}.
\end{aligned}
$$

## 6. QE 出题形态

### 6.1 判断完备性

步骤：

1. 写 payoff matrix $A$。
2. 计算 $\operatorname{rank}(A)$。
3. 与状态数 $S$ 比较。

$$
\begin{aligned}
\operatorname{rank}(A)=S
&\Longleftrightarrow \text{complete},\\
\operatorname{rank}(A)<S
&\Longleftrightarrow \text{incomplete}.
\end{aligned}
$$

### 6.2 求状态价格集合

步骤：

1. 用 $p=A^\top q$ 写线性方程组。
2. 用自由变量表示所有解。
3. 加上 $q_s>0$ 得到无套利限制。

### 6.3 算 Arrow security 价格区间

如果 state-$j$ Arrow security 没有被现有资产复制，则其无套利价格就是所有可行状态价格中 $q_j$ 的范围。

$$
\begin{aligned}
P_{A_j}\in
\left\{
q_j:\ p=A^\top q,\ q\gg0
\right\}.
\end{aligned}
$$

### 6.4 构造套利组合

若某个 Arrow security 的市场价格 $\hat q_j$ 超出无套利区间，就把它加入资产集合，寻找 $\theta$ 使得

$$
\begin{aligned}
\text{cost}(\theta)&<0,\qquad \text{payoff}(\theta)\ge0,\\
\text{or}\qquad
\text{cost}(\theta)&\le0,\qquad \text{payoff}(\theta)>0.
\end{aligned}
$$

## 7. 易混点

| 概念 | 定义 | 常见误区 |
| --- | --- | --- |
| state price $q_s$ | 状态 $s$ 支付 1 的 date-0 价格 | 不是 probability |
| SDF $m_s$ | $q_s/\pi_s$ | 依赖 physical probability |
| risk-neutral probability $\psi_s$ | $R_f q_s$ | 是归一化后的 state price |
| Arrow security price | 对应状态的 state price | 只有在该 Arrow security 可交易或可复制时才是唯一价格 |
| complete markets | payoff span 覆盖 $\mathbb R^S$ | 不是资产数量多就够，关键是 rank |

## 8. 最短复习路线

1. [Micro: no arbitrage and positive state prices](../../Microeconomic/02%20Choice%20under%20Uncertainty%20and%20State-Contingent%20Equilibrium.md)
2. [AP: SDF definition](../../Asset%20Pricing/Theoretical%20AP/Part2-%E5%8D%A1%E7%89%87/Stochastic%20Discount%20Factor%20-%20%E5%AE%9A%E4%B9%89%E4%B8%8E%E5%9F%BA%E6%9C%AC%E5%85%B3%E7%B3%BB.md)
3. [QE-PS 1](../../ProblemSet/ProblemSet.md)
4. [QE-PS 2](../../ProblemSet/ProblemSet.md)
5. [QE-PS 4](../../ProblemSet/ProblemSet.md)
