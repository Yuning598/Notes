# 03 Consumption-Based Asset Pricing and Puzzles

Source: EF8083 slides, pp. 73-122  
Links: [00-MOC_EF8083_Empirical_Asset_Pricing](00-MOC_EF8083_Empirical_Asset_Pricing) | [04_Return_Predictability_Econometrics](04_Return_Predictability_Econometrics) | [cards/SDF_Euler_Equation](cards/SDF_Euler_Equation) | [cards/Hansen_Jagannathan_Bound](cards/Hansen_Jagannathan_Bound) | [cards/Campbell_Shiller_Decomposition](cards/Campbell_Shiller_Decomposition)

## 1. 资产定价的统一对象：SDF

课件从 consumption-based framework 进入 empirical asset pricing。核心不是某个特定模型，而是 pricing equation：

$$
P_t=E_t[M_{t+1}X_{t+1}].
$$

:::{admonition} Definition (Stochastic discount factor)
$M_{t+1}$ 是 stochastic discount factor，满足所有资产：
$$ P_t=E_t[M_{t+1}X_{t+1}]. $$
若用 gross return $R_{t+1}=X_{t+1}/P_t$，则
$$ E_t[M_{t+1}R_{t+1}]=1. $$

:::

在 consumption-based model 中，代表性投资者最大化

$$
E_t\sum_{j=0}^{\infty}\beta^j u(C_{t+j}),
$$

则

$$
M_{t+1}
=
\beta\frac{u'(C_{t+1})}{u'(C_t)}.
$$

见 [cards/SDF_Euler_Equation](cards/SDF_Euler_Equation)。

## 2. Euler equation 的推导

:::{admonition} Lemma
Consumption Euler equation
**WTS：**
$$ P_t=E_t\left[\beta\frac{u'(C_{t+1})}{u'(C_t)}X_{t+1}\right]. $$

**联立系统：**
设投资者在 $t$ 时刻多买 $\varepsilon$ 单位资产，当前成本 $P_t\varepsilon$，下期 payoff $X_{t+1}\varepsilon$。消费变化：
$$ \Delta C_t=-P_t\varepsilon,\qquad \Delta C_{t+1}=X_{t+1}\varepsilon. $$

**连续求解：**
$$ \begin{aligned} \frac{d}{d\varepsilon} E_t\left[u(C_t-P_t\varepsilon)+\beta u(C_{t+1}+X_{t+1}\varepsilon)\right]_{\varepsilon=0} =0\\ -u'(C_t)P_t+\beta E_t[u'(C_{t+1})X_{t+1}] =0\\ u'(C_t)P_t =\beta E_t[u'(C_{t+1})X_{t+1}]\\ P_t =E_t\left[\beta\frac{u'(C_{t+1})}{u'(C_t)}X_{t+1}\right]. \end{aligned} $$

**结论：**
$$ M_{t+1}=\beta\frac{u'(C_{t+1})}{u'(C_t)}. $$

:::

## 3. Risk premium 的 covariance 表示

从 $E_t[M R_i]=1$ 和 risk-free $R_f=1/E_t[M]$ 可以推出 expected return 由 covariance 决定。

:::{admonition} Lemma
SDF covariance pricing
**WTS：**
$$ E_t[R_{i,t+1}]-R_{f,t} = -R_{f,t}\operatorname{Cov}_t(M_{t+1},R_{i,t+1}). $$

**联立系统：**
$$ E_t[M_{t+1}R_{i,t+1}]=1,\qquad R_{f,t}=\frac{1}{E_t[M_{t+1}]}. $$

**连续求解：**
$$ \begin{aligned} 1 &=E_t[M_{t+1}R_{i,t+1}]\\ &=E_t[M_{t+1}]E_t[R_{i,t+1}] +\operatorname{Cov}_t(M_{t+1},R_{i,t+1})\\ \frac{1}{E_t[M_{t+1}]} &=E_t[R_{i,t+1}] +\frac{\operatorname{Cov}_t(M_{t+1},R_{i,t+1})}{E_t[M_{t+1}]}\\ R_{f,t} &=E_t[R_{i,t+1}] +R_{f,t}\operatorname{Cov}_t(M_{t+1},R_{i,t+1})\\ E_t[R_{i,t+1}]-R_{f,t} &=-R_{f,t}\operatorname{Cov}_t(M_{t+1},R_{i,t+1}). \end{aligned} $$

**结论：** 高收益资产必须在 marginal utility 高的状态表现差，即与 $M$ 负相关。

:::

## 4. Lognormal approximation and equity premium

课件使用 lognormal framework 得到经典公式。

设

$$
m_{t+1}=\log M_{t+1},\qquad r_{t+1}=\log R_{t+1}.
$$

若 $m+r$ 条件正态，则

$$
E_t[e^{m_{t+1}+r_{t+1}}]=1.
$$

:::{admonition} Lemma
Lognormal pricing formula
**WTS：**
$$ \log E_t[R_{t+1}]-r_{f,t} = -\operatorname{Cov}_t(m_{t+1},r_{t+1}). $$

**联立系统：**
$$ E_t[e^{m+r}]=1,\qquad E_t[e^{m+r_f}]=1. $$
若 $x$ 正态：
$$ \log E[e^x]=E[x]+\frac12\operatorname{Var}(x). $$

**连续求解：**
风险资产：
$$ \begin{aligned} 0 &=\log E_t[e^{m+r}]\\ &=E_t[m]+E_t[r] +\frac12\operatorname{Var}_t(m) +\frac12\operatorname{Var}_t(r) +\operatorname{Cov}_t(m,r). \end{aligned} $$
无风险资产：
$$ \begin{aligned} 0 &=\log E_t[e^{m+r_f}]\\ &=E_t[m]+r_f+\frac12\operatorname{Var}_t(m). \end{aligned} $$
两式相减：
$$ \begin{aligned} E_t[r]-r_f+\frac12\operatorname{Var}_t(r) +\operatorname{Cov}_t(m,r) &=0\\ E_t[r]+\frac12\operatorname{Var}_t(r)-r_f &=-\operatorname{Cov}_t(m,r). \end{aligned} $$
又因为 lognormal 下
$$ \log E_t[R]=E_t[r]+\frac12\operatorname{Var}_t(r), $$
所以
$$ \log E_t[R]-r_f = -\operatorname{Cov}_t(m,r). $$

**结论：** log expected excess return 等于 asset return 与 log SDF covariance 的相反数。

:::

## 5. Power utility 下的 equity premium 与 risk-free rate

若

$$
u(C)=\frac{C^{1-\gamma}}{1-\gamma},
$$

则

$$
u'(C)=C^{-\gamma}.
$$

因此

$$
M_{t+1}
=
\beta\left(\frac{C_{t+1}}{C_t}\right)^{-\gamma}.
$$

令

$$
\Delta c_{t+1}=\log C_{t+1}-\log C_t,\qquad
\delta=-\log\beta,
$$

得到

$$
m_{t+1}
=
\log M_{t+1}
=
-\delta-\gamma \Delta c_{t+1}.
$$

:::{admonition} Lemma
Power utility 的 equity premium
**WTS：**
$$ \log E_t[R_{t+1}]-r_{f,t} = \gamma \operatorname{Cov}_t(\Delta c_{t+1},r_{t+1}). $$

**连续求解：**
$$ \begin{aligned} \log E_t[R_{t+1}]-r_{f,t} &=-\operatorname{Cov}_t(m_{t+1},r_{t+1})\\ &=-\operatorname{Cov}_t(-\delta-\gamma\Delta c_{t+1},r_{t+1})\\ &=-\left[-\gamma\operatorname{Cov}_t(\Delta c_{t+1},r_{t+1})\right]\\ &=\gamma\operatorname{Cov}_t(\Delta c_{t+1},r_{t+1}). \end{aligned} $$

**结论：** 股票必须在 consumption growth 低时表现差，才会有正 risk premium。

**Lemma:** Power utility 的 risk-free rate
**WTS：**
$$ r_{f,t} = \delta+\gamma E_t[\Delta c_{t+1}] -\frac12\gamma^2\operatorname{Var}_t(\Delta c_{t+1}). $$

**联立系统：**
$$ E_t[e^{m_{t+1}+r_{f,t}}]=1,\qquad m_{t+1}=-\delta-\gamma\Delta c_{t+1}. $$

**连续求解：**
$$ \begin{aligned} 0 &=\log E_t[e^{m+r_f}]\\ &=E_t[m]+r_f+\frac12\operatorname{Var}_t(m)\\ &=(-\delta-\gamma E_t\Delta c)+r_f +\frac12\gamma^2\operatorname{Var}_t(\Delta c). \end{aligned} $$
所以
$$ \begin{aligned} r_f &=\delta+\gamma E_t\Delta c -\frac12\gamma^2\operatorname{Var}_t(\Delta c). \end{aligned} $$

**结论：** 高 $\gamma$ 一方面提高 precautionary saving 项，压低 $r_f$；另一方面若要解释 equity premium，需要很高 $\gamma$。

:::

## 6. Equity premium puzzle

课件中的核心矛盾：

$$
\text{Observed equity premium is large},
$$

但 consumption growth 与 stock returns 的 covariance 太小。由公式

$$
\log E[R]-r_f
=
\gamma \operatorname{Cov}(\Delta c,r),
$$

如果 $\operatorname{Cov}(\Delta c,r)$ 小，则必须给出极高 $\gamma$ 才能匹配数据。极高 $\gamma$ 又通常带来过低或不合理的 risk-free rate。这就是 equity premium puzzle 和 risk-free rate puzzle 的共同来源。

## 7. Hansen-Jagannathan bound

课件用 HJ bound 表达：任何能定价资产的 SDF 都必须足够 volatile。

:::{admonition} Lemma
HJ bound
**WTS：**
$$ \frac{\sigma(M)}{E[M]} \ge \frac{|E[R^e]|}{\sigma(R^e)}. $$

**联立系统：**
对 excess return $R^e$，pricing equation 是
$$ E[MR^e]=0. $$

**连续求解：**
$$ \begin{aligned} 0 &=E[MR^e]\\ &=E[M]E[R^e]+\operatorname{Cov}(M,R^e)\\ E[M]E[R^e] &=-\operatorname{Cov}(M,R^e). \end{aligned} $$
取绝对值并用 Cauchy-Schwarz：
$$ \begin{aligned} |E[M]E[R^e]| &=|\operatorname{Cov}(M,R^e)|\\ &\le \sigma(M)\sigma(R^e). \end{aligned} $$
两边除以 $E[M]\sigma(R^e)$：
$$ \frac{|E[R^e]|}{\sigma(R^e)} \le \frac{\sigma(M)}{E[M]}. $$

**结论：** 大 Sharpe ratio 要求 SDF 有足够高的 coefficient of variation。见 [cards/Hansen_Jagannathan_Bound](cards/Hansen_Jagannathan_Bound)。

:::

## 8. Campbell-Shiller decomposition and excess volatility

课件的另一条 puzzle 线是：价格是否相对于 dividends / cash flows 过度波动？

定义 log price-dividend ratio：

$$
pd_t=p_t-d_t.
$$

线性化 return：

$$
r_{t+1}
\approx
\kappa+\rho pd_{t+1}+\Delta d_{t+1}-pd_t.
$$

:::{admonition} Lemma
Campbell-Shiller present-value identity
**WTS：**
$$ pd_t = \frac{\kappa}{1-\rho} +\sum_{j=1}^{\infty}\rho^{j-1}E_t[\Delta d_{t+j}] -\sum_{j=1}^{\infty}\rho^{j-1}E_t[r_{t+j}]. $$

**连续求解：**
从线性化式出发：
$$ \begin{aligned} r_{t+1} &\approx \kappa+\rho pd_{t+1}+\Delta d_{t+1}-pd_t\\ pd_t &\approx \kappa+\rho pd_{t+1}+\Delta d_{t+1}-r_{t+1}. \end{aligned} $$
对 $t$ 条件取期望：
$$ pd_t = \kappa+\rho E_t[pd_{t+1}] +E_t[\Delta d_{t+1}] -E_t[r_{t+1}]. $$
继续向前迭代：
$$ \begin{aligned} pd_t &=\kappa+E_t\Delta d_{t+1}-E_t r_{t+1}\\ &\quad+\rho E_t\left[ \kappa+\rho pd_{t+2}+\Delta d_{t+2}-r_{t+2} \right]\\ &=\kappa(1+\rho) +E_t\Delta d_{t+1}+\rho E_t\Delta d_{t+2}\\ &\quad -E_t r_{t+1}-\rho E_t r_{t+2} +\rho^2E_t[pd_{t+2}]. \end{aligned} $$
令 horizon $J\to\infty$，并施加 no-bubble/transversality：
$$ \lim_{J\to\infty}\rho^J E_t[pd_{t+J}]=0. $$
得
$$ pd_t = \frac{\kappa}{1-\rho} +\sum_{j=1}^{\infty}\rho^{j-1}E_t[\Delta d_{t+j}] -\sum_{j=1}^{\infty}\rho^{j-1}E_t[r_{t+j}]. $$

**结论：** price-dividend ratio 的波动来自两类 news：cash-flow news 与 discount-rate news。见 [cards/Campbell_Shiller_Decomposition](cards/Campbell_Shiller_Decomposition)。

:::

## 9. 复习抓手

- SDF 一条线：$P=E[MX]$、$E[MR]=1$、risk premium 是 covariance。
- Consumption model 一条线：$M=\beta(C_{t+1}/C_t)^{-\gamma}$。
- Puzzles 一条线：consumption covariance 太小，SDF volatility 不够，price-dividend ratio 波动很大。
- 与下一主题连接：如果 $pd_t$ 反映 expected returns 的变化，那么 valuation ratios 应该预测未来 returns。见 [04_Return_Predictability_Econometrics](04_Return_Predictability_Econometrics)。

