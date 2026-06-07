# 07 Behavioral Empirical Asset Pricing Overview

导航：[06_Subjective_Expectations_Learning](06_Subjective_Expectations_Learning) | [08_Limits_to_Arbitrage_Prospect_Theory](08_Limits_to_Arbitrage_Prospect_Theory) | [09_Beliefs_Attention_Sentiment_Credit](09_Beliefs_Attention_Sentiment_Credit)

## 1. Overview

### Roadmap

- Asset pricing
  - aggregate stock market
  - cross-section of stock returns
  - other asset classes
  - bubbles
- Investor trading and portfolio choice
  - individual investors
  - institutional investors

| Paradigm            | Rationality  | Frictions | Psychology                                                                     |
| ------------------- | ------------ | --------- | ------------------------------------------------------------------------------ |
| Traditional finance | yes          | no        | very basic                                                                     |
| Frictional finance  | yes          | yes       | institutionally realistic                                                      |
| Behavioral finance  | no / partial | maybe     | psychologically realistic                                                      |

- Behavioural finance
	- Definition 1: less than fully rational thinking
	- Definition 2: psychologically more realistic models
- rationality
  - **beliefs**: Bayes update rule
  - **preferences**: expected utility
	- utility over wealth / consumption
- behavioral focus
  - less than fully rational beliefs
	- Bayes deviations
  - less than fully rational preferences
	- non-EU；EU 不是定义在 wealth / consumption 上
- challenges
  1. The arbitrage critique：理性套利者会很快消除错误定价影响，但存在套利限制
  2. The lack-of-discipline critique：容易“用心理解释一切”，所以要看新预测

## 2. 为什么需要 behavioral asset pricing

- 主线：risk 解释 expected returns 之外，再看 beliefs / preferences / constraints / attention
- 背景：理性预期、learning、survey evidence 之后进入 behavioral AP

:::{admonition} Definition (Behavioral asset pricing)
Behavioral asset pricing 研究非标准 beliefs、非标准 preferences、limits to arbitrage、机构约束和注意力如何影响资产价格、交易量和收益可预测性。

:::

puzzles:
1. **aggregate**：equity premium, excess volatility, return predictability, bubbles
2. **cross-sectional**：value, momentum, PEAD, low volatility, lottery demand
  - solution: test new predictions

## 3. Asset pricing

- aggregate stock market
- cross-section of stock returns
- other asset classes
- bubbles

## 4. Investor trading and portfolio choice

- individual investors
- institutional investors

## 5. 标准模型的基准

标准模型的核心约束仍是：

$$
E_t[M_{t+1}R_{i,t+1}]=1.
$$

如果某个 anomaly 存在，三条路线：

1. risk：遗漏 SDF / factor
2. behavior：beliefs / preferences 偏离
3. frictions：套利资本有限，mispricing 不能立刻消失

## 6. Mispricing 的最小框架

设资产价格为：

$$
P_t=P_t^*+m_t,
$$

其中 $P_t^*$ 是 fundamental value，$m_t$ 是 mispricing。

:::{admonition} Lemma: Mispricing 与未来收益
若 mispricing mean-reverts，则高 $m_t$ 预测低未来收益。

$$
P_t=P_t^*+m_t,\qquad E_t[m_{t+1}]=\phi m_t,\quad |\phi|<1.
$$
简化设 fundamental expected return 为 $\bar R$。

未来价格变化中的 mispricing 部分：

$$
\begin{aligned} E_t[m_{t+1}-m_t] &=\phi m_t-m_t\\ &=-(1-\phi)m_t. \end{aligned}
$$

因此 expected return 可写为：

$$
\begin{aligned} E_t[R_{t+1}] &\approx \bar R+\frac{E_t[m_{t+1}-m_t]}{P_t}\\ &=\bar R-\frac{(1-\phi)m_t}{P_t}. \end{aligned}
$$

价格被高估越多，未来 expected return 越低；价格被低估越多，未来 expected return 越高。

:::

这个框架连接了 sentiment、bubble、overreaction、limits to arbitrage。

## 7. Bubbles

:::{admonition} Definition (Bubble)
若价格超过 fundamental value：
$$
P_t=P_t^*+B_t,
$$
且 bubble component 满足
$$
B_t=E_t[M_{t+1}B_{t+1}],
$$
则 $B_t$ 可以在无套利条件下存在，尤其当市场不完全、短售受限或信念异质时。

:::

理性 bubble 需要 bubble 预期增长补偿风险；行为 bubble 通常来自 extrapolative beliefs、overconfidence、short-sale constraints 和 resale option。

## 8. Individual investor evidence

课件中的 behavioral evidence 包括：

- individual investors 交易频繁，但平均表现较差；
- overconfidence 导致过度交易；
- disposition effect：投资者倾向卖出盈利股票、持有亏损股票；
- lottery preference：偏好小概率极端高收益资产；
- attention-driven buying：散户更容易买入吸引注意力的股票。

这些证据说明投资者不是完全按均值-方差和理性 Bayesian 更新交易。

## 9. Institutional investor evidence

机构投资者也不是 frictionless arbitrageurs：

- fund flows 对短期业绩敏感；
- career concerns 使基金经理偏好跟随 benchmark；
- leverage constraint 和 funding risk 限制反向套利；
- mandate constraints 使一些资产不能被某些机构持有。

因此，即使聪明资金知道 mispricing，也可能因为风险和约束无法完全修正价格。连接 [08_Limits_to_Arbitrage_Prospect_Theory](08_Limits_to_Arbitrage_Prospect_Theory)。

## 10. Behavioral explanations and empirical design

一个 behavioral explanation 必须回答三件事：

1. **belief/preference channel 是什么？**
   例如 extrapolation、overconfidence、prospect utility。

2. **为什么价格不被套利消除？**
   例如 short-sale constraints、limits to arbitrage、noise trader risk。

3. **可检验预测是什么？**
   例如高 sentiment 股票未来低收益；高 short-sale constraint 中 disagreement 更强；lottery demand 推高高 skewness 股票价格。

## 10. 复习抓手

- Behavioral AP 不是放弃定价方程，而是改变 SDF、beliefs 或市场约束。
- 任何 anomaly 都要同时考虑 risk-based 与 behavioral explanations。
- 经验论文要有 mechanism、measure、identification、pricing implication。
