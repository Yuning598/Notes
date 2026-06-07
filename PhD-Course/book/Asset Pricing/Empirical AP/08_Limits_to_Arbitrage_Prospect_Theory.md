# 08 Limits to Arbitrage, Prospect Theory, Ambiguity

Source: EF8083 slides, pp. 363-428  
导航：[07_Behavioral_Empirical_AP_Overview](07_Behavioral_Empirical_AP_Overview) | [09_Beliefs_Attention_Sentiment_Credit](09_Beliefs_Attention_Sentiment_Credit) | [cards/Limits_to_Arbitrage](cards/Limits_to_Arbitrage) | [cards/Prospect_Theory_Lottery_Preference](cards/Prospect_Theory_Lottery_Preference)

## 1. Roadmap

- Limits to arbitrage
  - mispricing why persists
  - constraints / funding / short-sale
- Prospect theory
  - what it is
  - why it departs from expected utility
  - asset pricing implications
- Ambiguity aversion
  - model uncertainty
  - required compensation

## 2. Limits to arbitrage

- 直觉：price can deviate from fundamental value for a long time
- 核心：理性套利者有风险和约束，不能无成本纠偏

:::{admonition} Definition (Limits to arbitrage)
Limits to arbitrage 指理性交易者即使发现 mispricing，也因为风险、融资约束、短售约束、赎回风险、期限错配或交易成本，无法完全消除 mispricing。

:::

### 2.1 常见约束

- fundamental risk：hedge 不完全
- noise trader risk：先亏后赚，或先赚后亏
- implementation cost：shorting cost / borrow fee / transaction cost
- funding liquidity：margin call / redemption
- horizon mismatch：收敛太慢，资金先耗尽

### 2.2 最小模型

设 fundamental value 为 $V$，当前价格为

$$
P_0=V-m.
$$

套利者买入一单位，未来 mispricing 以概率 $p$ 收敛，以概率 $1-p$ 继续扩大并被迫平仓。

:::{admonition} Lemma: 有 forced liquidation 时的套利条件
期望收益为正不够；还要满足融资约束下的 downside condition。


$$
\begin{cases} P_0=V-m,\\ P_1=V,\quad \text{prob. }p,\\ P_1=V-m-L,\quad \text{prob. }1-p. \end{cases}
$$


$$
\begin{aligned}
R_1^{good} &=V-(V-m)=m,\\
R_1^{bad} &=(V-m-L)-(V-m)=-L.
\end{aligned}
$$

$$
\begin{aligned}
E[R_1] &=pm+(1-p)(-L)\\
&=pm-(1-p)L.
\end{aligned}
$$

若要求 $L\le K$，则即使 $E[R_1]>0$，套利者仍可能不能持仓。

:::

### 2.3 实证含义

- short-sale constraints 高 -> mispricing 更强
- idiosyncratic volatility 高 -> arbitrage 风险更大
- outflows / funding shock -> 被迫卖出
- 典型案例：ETF arbitrage, closed-end fund discounts, Siamese twins

## 3. Prospect theory

### 3.1 这是什么

:::{admonition} Definition (Prospect theory)
Prospect theory 是对 expected utility 的修正：偏好围绕 reference point 定义，且对 losses 更敏感。

:::

核心对象：

- reference dependence：围绕参照点看 gains / losses
- loss aversion：loss 的权重更大
- diminishing sensitivity：边际敏感度递减
- probability weighting：小概率和大概率会被扭曲

### 3.2 从 EU 到 PT

EU 的问题不在于“不能算”，而在于太强：

- 只看 final wealth
- 假设概率线性进入
- 假设偏好稳定、上下文无关

PT 的改法：

1. 先选 reference point
2. 再把结果写成 gain / loss
3. 用 asymmetric value function 评价

### 3.3 形式化

常见 value function：

$$
v(x)=
\begin{cases}
x^\alpha, & x\ge 0,\\
\!- \lambda(-x)^\alpha, & x<0,
\end{cases}
\qquad \lambda>1.
$$

含义：

- gains 和 losses 不对称
- loss 一侧更陡
- 参照点很重要

## 4. Prospect theory 的实证含义

- trading behavior
  - disposition effect
  - narrow framing
  - lottery preference
  - skewness demand
- cross-section
  - lottery-like stocks priced too high
  - high skewness / high idio vol assets overvalued
  - low future return
- aggregate stock market
  - equity premium
  - crash aversion
  - demand for downside protection

### 4.1 trading behavior

- disposition effect
- narrow framing
- lottery preference
- skewness preference

### 4.2 cross-section

- lottery-like stocks
- high skewness / high idio vol
- overpricing via demand pressure
- low expected return

### 4.3 aggregate stock market

- equity premium
- crash protection demand
- downside risk premium

一个常用交互回归：

$$
R_{i,t+1} =
\alpha+\beta Mispricing_{i,t}
+\gamma Constraint_{i,t}
+\delta Mispricing_{i,t}\times Constraint_{i,t}
+\varepsilon_{i,t+1}.
$$

若 mispricing 在高约束资产中更强，通常预期 $\delta$ 显著。

## 5. Lottery preference and skewness

若投资者 overweight small probabilities，会偏好极端正偏 payoff。需求推高价格，压低未来收益。

:::{admonition} Lemma: Lottery demand 对 expected return 的影响
如果投资者愿意为正偏彩票型 payoff 付出额外溢价，均衡 expected return 下降。

设 fundamental price under standard SDF：
$$
P^*=E[MX].
$$
Lottery investors 额外愿意支付 $\pi_{lot}>0$，则市场价格：
$$
P=P^*+\pi_{lot}.
$$

$$
\begin{aligned}
E[R]-E[R^*]
&= \frac{E[X]}{P^*+\pi_{lot}} -\frac{E[X]}{P^*}\\
&= -E[X]\frac{\pi_{lot}}{P^*(P^*+\pi_{lot})}<0.
\end{aligned}
$$

lottery demand 使价格偏高、未来平均收益偏低。

:::

## 6. Narrow framing

:::{admonition} Definition (Narrow framing)
投资者把单个账户或单个 gamble 单独评估，而不是只看整体财富。这样 loss aversion 更容易影响 risky asset demand。

:::

在 asset pricing 中，它可以帮助解释：

- high equity premium
- crash risk aversion
- low stock participation
- option demand pressure

$$
\underbrace{\text{high volatility}}_{\text{降低股票价值}}

+\underbrace{\text{high average return}}_{\text{提高股票价值}}
\Rightarrow
V^{PT}(R^S)\approx V^{PT}(R^B).
$$

## 7. Ambiguity aversion

:::{admonition} Definition (Ambiguity aversion)
如果投资者面对多个可能概率模型 $\mathcal P$，采用 max-min preference：
$$
U(X)=\min_{P\in\mathcal P}E_P[u(X)].
$$
则资产价格会反映最悲观模型下的边际效用。

:::

直觉：

- not only risk, but model uncertainty
- uncertainty about probabilities -> higher required compensation
- relevant for disaster risk, long-run risk, volatility risk

## 8. 复习抓手

- Limits to arbitrage：mispricing 为什么能持续
- Prospect theory：preferences 怎么偏离 EU
- Empirical channels：trading behavior / cross-section / aggregate market
- Ambiguity aversion：model uncertainty 的补偿

