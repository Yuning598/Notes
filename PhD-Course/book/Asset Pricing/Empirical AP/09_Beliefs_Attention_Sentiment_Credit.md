# 09 Beliefs, Attention, Sentiment, and Credit Market Cycle

Source: EF8083 slides, pp. 429-520  
Links: [06_Subjective_Expectations_Learning](06_Subjective_Expectations_Learning) | [07_Behavioral_Empirical_AP_Overview](07_Behavioral_Empirical_AP_Overview) | [08_Limits_to_Arbitrage_Prospect_Theory](08_Limits_to_Arbitrage_Prospect_Theory) | [cards/Heterogeneous_Beliefs_SSC](cards/Heterogeneous_Beliefs_SSC) | [cards/Limited_Attention_PEAD](cards/Limited_Attention_PEAD) | [cards/Investor_Sentiment_Credit_Cycle](cards/Investor_Sentiment_Credit_Cycle)

## 1. Psychology of beliefs

课件最后部分从 preferences 转向 beliefs。关键偏差包括：

- overconfidence；
- extrapolation；
- representativeness；
- conservatism；
- limited attention；
- category thinking；
- sentiment cycles。

这些偏差都可以进入价格：

$$
P_t=\tilde E_t[M_{t+1}X_{t+1}],
$$

其中 $\tilde E_t$ 是主观期望。即使 $M$ 不变，beliefs 的变化也会导致价格变化。

## 2. Overconfidence

:::{admonition} Definition (Overconfidence)
Overconfidence 指投资者高估自己信号精度，或低估不确定性。形式化地，真实信号为
$$ s=\theta+\eta,\qquad \eta\sim N(0,\sigma_\eta^2), $$
但投资者认为噪声方差是
$$ \tilde\sigma_\eta^2<\sigma_\eta^2. $$

**Lemma:** 过度自信放大 posterior reaction
**WTS：** 信号噪声方差越低，posterior mean 对信号权重越高。

**联立系统：**
$$ \theta\sim N(\mu_0,\sigma_0^2),\qquad s=\theta+\eta,\qquad \eta\sim N(0,\tilde\sigma_\eta^2). $$

**连续求解：**
Bayesian posterior mean：

$$
\begin{aligned} \tilde E[\theta\mid s] &= w s+(1-w)\mu_0,\\ w &= \frac{\sigma_0^2}{\sigma_0^2+\tilde\sigma_\eta^2}. \end{aligned}
$$

对 $\tilde\sigma_\eta^2$ 求导：
$$ \frac{\partial w}{\partial \tilde\sigma_\eta^2} = -\frac{\sigma_0^2}{(\sigma_0^2+\tilde\sigma_\eta^2)^2}<0. $$

**结论：** 过度自信使投资者对私人信号反应过强，导致过度交易与价格过度反应。

:::

## 3. Extrapolation

Extrapolation 是课件与 survey evidence 最紧密相连的 belief bias。

$$
\tilde E_t[R_{t+1}] =
a+bR_{t-k,t},\qquad b>0.
$$

这可以解释：

- 短期 momentum；
- 长期 reversals；
- bubble-like dynamics；
- 高 sentiment 后低未来收益。

:::{admonition} Lemma: Extrapolative demand and reversal
**WTS：** 若过去高收益推高主观预期与需求，价格上升；当 beliefs mean-revert，未来收益下降。

**联立系统：**
$$ D_t=\chi \tilde E_t[R_{t+1}],\qquad P_t=P_t^*+\lambda D_t. $$
且
$$ \tilde E_t[R_{t+1}]=a+bR_{t-k,t}. $$

**连续求解：**

$$
\begin{aligned} P_t &=P_t^*+\lambda\chi(a+bR_{t-k,t}). \end{aligned}
$$

若未来主观信念回归均值：
$$ E_t[P_{t+1}-P_t] \approx -\lambda\chi b(R_{t-k,t}-\bar R). $$

**结论：** 过去收益越高，当前价格越可能被推高，随后 reversal 更强。

:::

## 4. Heterogeneous beliefs and short-sale constraints

课件中一个重要机制：当投资者意见分歧且不能自由 short sell 时，价格更接近乐观者估值，因为悲观者无法充分表达观点。

:::{admonition} Definition (Difference of opinion)
Difference of opinion 指投资者对同一资产 payoff 的主观分布不同。若短售受限，悲观投资者不能卖空，市场价格由乐观投资者边际定价。

**Lemma:** Heterogeneous beliefs + short-sale constraints generates overpricing
**WTS：** 在短售受限下，乐观者可以把价格推高到高于平均信念价值。

**联立系统：**
两类投资者对 payoff $X$ 的估值：
$$ V^O=E^O[X]/R_f,\qquad V^P=E^P[X]/R_f,\qquad V^O>V^P. $$
悲观者不能 short。

**连续求解：**
若无短售限制且风险中性，市场价格可能接近平均估值：
$$ P^{avg}=\omega V^O+(1-\omega)V^P. $$
若短售受限，悲观者需求下限为 0：
$$ q^P(P)\ge 0. $$
当 $P>V^P$ 时，悲观者想 short，但只能持有 0。边际买方是乐观者，均衡价格可接近：
$$ P^{SSC}\approx V^O>P^{avg}. $$

**结论：** disagreement 高且 short-sale constraints 强的股票更容易 overpricing，未来收益更低。见 [cards/Heterogeneous_Beliefs_SSC](cards/Heterogeneous_Beliefs_SSC)。

:::

## 5. Limited attention

课件讨论 attention：投资者不能同时处理所有信息，因此价格对信息的反应可能延迟。

:::{admonition} Definition (Limited attention)
Limited attention 指投资者的信息处理能力有限。即使信息公开，价格也可能因为关注不足而逐渐吸收。

:::

一个典型现象是 post-earnings announcement drift：

$$
R_{i,t+1:t+k}=\alpha+\beta SUE_{i,t}+\varepsilon_{i,t+k},
$$

其中 $SUE$ 是 standardized unexpected earnings。若 $\beta>0$，说明盈利惊喜后价格继续漂移。

:::{admonition} Lemma: Inattention generates delayed reaction
**WTS：** 若只有比例 $\lambda$ 的投资者每期处理信息，价格逐步反映 shock。

**联立系统：**
fundamental shock $s$ 对价值影响为 $\Delta V=s$。价格每期反映剩余未吸收信息的比例 $\lambda$：
$$ P_{t+j}-P_{t+j-1}=\lambda(1-\lambda)^{j-1}s. $$

**连续求解：**
到第 $k$ 期累计反应：

$$
\begin{aligned} P_{t+k}-P_t &=\sum_{j=1}^k\lambda(1-\lambda)^{j-1}s\\ &=s\lambda\frac{1-(1-\lambda)^k}{1-(1-\lambda)}\\ &=s[1-(1-\lambda)^k]. \end{aligned}
$$

未反映部分：
$$ s-(P_{t+k}-P_t)=s(1-\lambda)^k. $$

**结论：** 信息逐步进入价格，形成 momentum 或 announcement drift。见 [cards/Limited_Attention_PEAD](cards/Limited_Attention_PEAD)。

:::

## 6. Category thinking

Category thinking 指投资者按类别而非单个资产处理信息。例如把股票分为 growth/value、industry、country、ESG、AI theme 等。资产被纳入热门类别会产生共同需求冲击。

可检验预测：

$$
R_{i,t} =
\alpha+\beta CategoryFlow_{c(i),t}
+\gamma X_{i,t}+\varepsilon_{i,t}.
$$

如果 $\beta>0$，说明 category-level demand 影响个股价格。

## 7. Investor sentiment

:::{admonition} Definition (Investor sentiment)
Sentiment 是与基本面无关的投资者乐观/悲观状态，可能影响难以套利、难以估值、投机性强的资产。

:::

课件思路：sentiment 高时，投机性股票被高估，随后收益低。典型横截面预测：

$$
R_{i,t+1} =
\alpha+\beta Sent_t\times DifficultToArbitrage_i+\gamma X_{i,t}+\varepsilon_{i,t+1}.
$$

若 $\beta<0$，说明 sentiment 高时，难套利股票未来收益更低。

:::{admonition} Lemma: Sentiment mean reversion predicts returns
**WTS：** 如果 sentiment 推高价格且 sentiment mean-reverts，则高 sentiment 预测低未来收益。

**联立系统：**
$$ P_t=V_t+aS_t,\qquad E_t[S_{t+1}]=\phi S_t,\quad 0<\phi<1. $$

**连续求解：**

$$
\begin{aligned} E_t[P_{t+1}-P_t] &= E_t[V_{t+1}-V_t]+aE_t[S_{t+1}-S_t]\\ &= E_t[V_{t+1}-V_t]+a(\phi-1)S_t\\ &= E_t[V_{t+1}-V_t]-a(1-\phi)S_t. \end{aligned}
$$

所以
$$ E_t[R_{t+1}] \approx \bar R-\frac{a(1-\phi)}{P_t}S_t. $$

**结论：** sentiment 越高，未来 expected return 越低，特别是 sentiment-sensitive stocks。

:::

## 8. Credit market sentiment and cycle

课件结尾把 sentiment 扩展到 credit markets。典型经验现象：

- credit booms 后 future credit returns 较低；
- lending standards 宽松时，未来 default risk 上升；
- low credit spreads 可能反映低风险，也可能反映过度乐观；
- intermediary leverage 与 risk appetite 形成 cycle。

:::{admonition} Definition (Credit market sentiment)
Credit sentiment 是信贷市场中对违约概率、回收率和风险补偿的乐观程度。它会体现在 credit spreads、issuance quality、loan covenants、rating standards、intermediary leverage 中。

:::

一个简单 spread 分解：

$$
Spread_t =
ExpectedLoss_t+RiskPremium_t+SentimentDiscount_t.
$$

若 sentiment 过高，$SentimentDiscount_t$ 大，spread 被压低。之后当 default realization 或 risk appetite 反转，credit returns 变差。见 [cards/Investor_Sentiment_Credit_Cycle](cards/Investor_Sentiment_Credit_Cycle)。

## 9. 课程收束

EF8083 的经验资产定价主线可以总结为：

$$
\text{Prices} =
\text{Risk}
+
\text{Beliefs}
+
\text{Preferences}
+
\text{Constraints}.
$$

- Volatility/VIX/VRP 衡量 risk 和 risk compensation。
- SDF/factor models 给出标准风险定价框架。
- Predictability 连接价格比率与未来收益。
- Survey/learning/beliefs 解释主观期望与客观回报的差距。
- Behavioral/limits/sentiment 解释 mispricing 为什么存在并持续。

