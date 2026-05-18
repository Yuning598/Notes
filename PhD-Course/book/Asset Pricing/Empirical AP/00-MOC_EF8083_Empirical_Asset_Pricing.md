# EF8083 Empirical Asset Pricing MOC

## 0. 课程主线

Empirical Asset Pricing 的核心问题可以写成三条线：

1. **风险如何度量？**  
   波动率、条件波动率、隐含方差、VIX、VRP。见 [01_Volatility_ARCH_GARCH](01_Volatility_ARCH_GARCH) 与 [02_Implied_Volatility_VIX_VRP](02_Implied_Volatility_VIX_VRP)。

2. **平均收益为何不同？**  
   消费 SDF、equity premium puzzle、risk-free rate puzzle、HJ bound、return predictability。见 [03_Consumption_Based_AP_Puzzles](03_Consumption_Based_AP_Puzzles) 与 [04_Return_Predictability_Econometrics](04_Return_Predictability_Econometrics)。

3. **横截面收益如何解释？**  
   beta pricing、linear factor model、Fama-MacBeth、GMM、factor zoo。见 [05_Cross_Section_Factor_Models](05_Cross_Section_Factor_Models)。

4. **理性模型为何不够？**  
   subjective expectation、learning、behavioral preference、limits to arbitrage、beliefs、sentiment、attention。见 [06_Subjective_Expectations_Learning](06_Subjective_Expectations_Learning) 至 [09_Beliefs_Attention_Sentiment_Credit](09_Beliefs_Attention_Sentiment_Credit)。

## 1. 建议复习顺序

**Review Flow**

Volatility -> VIX / VRP -> Return Predictability -> Cross-section Factors

SDF / Consumption AP -> Return Predictability -> Cross-section Factors

Subjective Expectations -> Behavioral AP -> Limits to Arbitrage -> Beliefs / Attention / Sentiment


## 2. 常用小卡片

### 波动率线
- [cards/Weak_Stationarity](cards/Weak_Stationarity)
- [cards/ARCH_Unconditional_Variance](cards/ARCH_Unconditional_Variance)
- [cards/GARCH_Infinite_ARCH_and_Half_Life](cards/GARCH_Infinite_ARCH_and_Half_Life)
- [cards/Leverage_Effect_EGARCH](cards/Leverage_Effect_EGARCH)
- [cards/Realized_Variance_Microstructure](cards/Realized_Variance_Microstructure)

### 期权与方差风险线
- [cards/VIX_Static_Replication](cards/VIX_Static_Replication)
- [cards/Variance_Risk_Premium](cards/Variance_Risk_Premium)
- [cards/Correlation_Risk_Premium](cards/Correlation_Risk_Premium)

### SDF 与 puzzle 线
- [cards/SDF_Euler_Equation](cards/SDF_Euler_Equation)
- [cards/Hansen_Jagannathan_Bound](cards/Hansen_Jagannathan_Bound)
- [cards/Campbell_Shiller_Decomposition](cards/Campbell_Shiller_Decomposition)

### Predictability 与横截面线
- [cards/Predictive_Regression_Stambaugh_Bias](cards/Predictive_Regression_Stambaugh_Bias)
- [cards/Out_of_Sample_R2](cards/Out_of_Sample_R2)
- [cards/Beta_SDF_Equivalence](cards/Beta_SDF_Equivalence)
- [cards/Fama_MacBeth_Shanken](cards/Fama_MacBeth_Shanken)
- [cards/GMM_Asset_Pricing](cards/GMM_Asset_Pricing)
- [cards/Factor_Zoo_Multiple_Testing](cards/Factor_Zoo_Multiple_Testing)

### Beliefs / behavioral 线
- [cards/Bayesian_Learning_Return_Predictability](cards/Bayesian_Learning_Return_Predictability)
- [cards/Survey_Expectations](cards/Survey_Expectations)
- [cards/Experience_Based_Learning](cards/Experience_Based_Learning)
- [cards/Martin_Option_Implied_Lower_Bound](cards/Martin_Option_Implied_Lower_Bound)
- [cards/Limits_to_Arbitrage](cards/Limits_to_Arbitrage)
- [cards/Prospect_Theory_Lottery_Preference](cards/Prospect_Theory_Lottery_Preference)
- [cards/Heterogeneous_Beliefs_SSC](cards/Heterogeneous_Beliefs_SSC)
- [cards/Limited_Attention_PEAD](cards/Limited_Attention_PEAD)
- [cards/Investor_Sentiment_Credit_Cycle](cards/Investor_Sentiment_Credit_Cycle)
