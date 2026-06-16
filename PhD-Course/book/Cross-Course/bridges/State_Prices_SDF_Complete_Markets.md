---
type: bridge-note
orphan: true
qe_weight: high
courses:
  - Microeconomics
  - Asset Pricing
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

# Payoff Span and Pricing Functionals

导航：[Cross-Course Hub](../index.md) · [Microeconomic](../../Microeconomic/index.md) · [Asset Pricing](../../Asset%20Pricing/index.md)

## 共同对象

共同对象是 payoff span 上的 positive linear pricing functional。Micro 把它叫 Arrow-Debreu state prices；Asset Pricing 把它叫 SDF / pricing kernel；题目通常给 payoff matrix 和 prices，让你判断 complete markets、求 state price set、给出 no-arbitrage price interval 或构造 arbitrage。

设状态 $s=1,\ldots,S$，physical probability 为 $\pi_s$，SDF 为 $m_s$，state price 为 $q_s$，risk-neutral probability 为 $\psi_s$：

$$
\begin{aligned}
q_s&=\pi_s m_s,\\
P(X)&=\sum_{s=1}^S q_s X_s\\
&=\sum_{s=1}^S \pi_s m_s X_s\\
&=E[mX],\\
P_f&=\sum_{s=1}^S q_s=E[m],\\
R_f&=\frac{1}{P_f}=\frac{1}{E[m]},\\
\psi_s&=\frac{q_s}{\sum_{t=1}^S q_t}
&=R_f q_s\\
&=\frac{\pi_s m_s}{E[m]},\\
P(X)&=\frac{1}{R_f}E^{\mathbb Q}[X].
\end{aligned}
$$

## 等价命题

令 $A\in\mathbb R^{S\times J}$ 是 payoff matrix，$p\in\mathbb R^J$ 是资产价格，$q\in\mathbb R^S$ 是 state price vector。

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

| 共同 restriction | Microeconomics | Asset Pricing | QE 中要写清 |
| --- | --- | --- | --- |
| positive pricing functional | state prices | SDF / pricing kernel | $q_s>0$ 与 no-arbitrage |
| payoff span | complete state-contingent markets | complete asset markets | $\operatorname{rank}(A)=S$ |
| pricing extension | missing Arrow securities | incomplete-market price interval | 可行 $q$ 的集合 |
| normalization | state prices sum to bond price | risk-neutral probability | $\psi_s=R_fq_s$ 不是 physical probability |

## 跨课翻译

代表性投资者的一阶条件把 Micro 的 marginal rate of substitution 和 Asset Pricing 的 SDF 接起来：

$$
\begin{aligned}
\max_{\{c_{1,s}\},c_0}\quad
&u(c_0)+\delta\sum_{s=1}^S\pi_s u(c_{1,s})\\
\text{s.t.}\quad
&c_0+\sum_{s=1}^S q_s c_{1,s}=W_0.
\end{aligned}
$$

FOC:

$$
\begin{aligned}
u'(c_0)&=\lambda,\\
\delta\pi_s u'(c_{1,s})&=\lambda q_s,\\
q_s&=\delta\pi_s\frac{u'(c_{1,s})}{u'(c_0)},\\
m_s&=\frac{q_s}{\pi_s}
&=\delta\frac{u'(c_{1,s})}{u'(c_0)}.
\end{aligned}
$$

若 $u(c)=\frac{c^{1-\rho}}{1-\rho}$，则

$$
\begin{aligned}
q_s
&=\delta\pi_s\left(\frac{c_{1,s}}{c_0}\right)^{-\rho},\\
P_f
&=\sum_{s=1}^S q_s
&=\delta E\left[\left(\frac{c_1}{c_0}\right)^{-\rho}\right],\\
R_f
&=\frac{1}{\delta E\left[(c_1/c_0)^{-\rho}\right]}.
\end{aligned}
$$

## 考场写法

**判断完备性.** 写 payoff matrix $A$，计算 $\operatorname{rank}(A)$，再和状态数 $S$ 比较：

$$
\begin{aligned}
\operatorname{rank}(A)=S
&\Longleftrightarrow \text{complete},\\
\operatorname{rank}(A)<S
&\Longleftrightarrow \text{incomplete}.
\end{aligned}
$$

**求状态价格集合.** 用 $p=A^\top q$ 写线性方程组，用自由变量表示所有解，再加 $q_s>0$ 得到 no-arbitrage restrictions。

**算 Arrow security 价格区间.** 如果 state-$j$ Arrow security 没有被现有资产复制，则

$$
\begin{aligned}
P_{A_j}\in
\left\{
q_j:\ p=A^\top q,\ q\gg0
\right\}.
\end{aligned}
$$

**构造套利组合.** 价格出界时，把新资产加入 payoff matrix，找 portfolio $\theta$ 使得

$$
\begin{aligned}
\text{cost}(\theta)&<0,\qquad \text{payoff}(\theta)\ge0,\\
\text{or}\qquad
\text{cost}(\theta)&\le0,\qquad \text{payoff}(\theta)>0.
\end{aligned}
$$

## 常见错误

| 概念 | 正确定义 | 常见误区 |
| --- | --- | --- |
| state price $q_s$ | 状态 $s$ 支付 1 的 date-0 价格 | 把它当 probability |
| SDF $m_s$ | $q_s/\pi_s$ | 忘记依赖 physical probability |
| risk-neutral probability $\psi_s$ | $R_f q_s$ | 和 $\pi_s$ 混用 |
| Arrow security price | 对应状态的 state price | 忽略不可复制时只得到区间 |
| complete markets | payoff span 覆盖 $\mathbb R^S$ | 只数资产个数，不看 rank |

## 进入原始材料

- [Micro: Choice under Uncertainty and State-Contingent Equilibrium](../../Microeconomic/02_Choice_under_Uncertainty_and_State_Contingent_Equilibrium.md)
- [Micro card: Arrow securities and state prices](../../Microeconomic/cards/Arrow%20securities%20and%20state%20prices.md)
- [Micro card: Complete vs incomplete markets](../../Microeconomic/cards/Complete%20vs%20incomplete%20markets.md)
- [Asset Pricing: Dynamic Asset Pricing](../../Asset%20Pricing/Theoretical%20AP/02_Dynamic_Asset_Pricing.md)
- [AP card: Stochastic Discount Factor](../../Asset%20Pricing/Theoretical%20AP/cards/part2/Stochastic%20Discount%20Factor%20-%20%E5%AE%9A%E4%B9%89%E4%B8%8E%E5%9F%BA%E6%9C%AC%E5%85%B3%E7%B3%BB.md)
