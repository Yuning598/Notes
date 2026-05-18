# 04 Return Predictability and Econometric Issues

Source: EF8083 slides, pp. 123-194  
Links: [03_Consumption_Based_AP_Puzzles](03_Consumption_Based_AP_Puzzles) | [05_Cross_Section_Factor_Models](05_Cross_Section_Factor_Models) | [cards/Predictive_Regression_Stambaugh_Bias](cards/Predictive_Regression_Stambaugh_Bias) | [cards/Out_of_Sample_R2](cards/Out_of_Sample_R2)

**Data construction.**

| Data source | Typical measurement | 文献里用的 |
|---|---|---|
| Consumption | Consumption growth $\Delta c_{t+1}$；通常用 NIPA 的 real per capita expenditure on nondurables and services | nondurables-durables substitution (Yogo, 2006)；garbage growth as true consumption proxy (Savov, 2011)；NIPA filtering and aggregation correction (Kroencke, 2017) |
| Dividend | Dividend growth $\Delta d_{t+1}$；通常用 CRSP stock index 的 real per share dividends；monthly dividends 有 seasonality，通常用过去 12 个月加总 | CRSP real per share dividends (Beeler and Campbell, 2012)；per capita dividends with consumption-dividend cointegration (Bansal et al., 2007)；cash-dividend decline / repurchase adjustment (Fama and French, 2001; Bansal et al., 2005; Boudoukh et al., 2008)；repurchase-adjusted price-dividend ratio (Nagel and Xu, 2022) |
| Inflation | 用 Consumer Price Index 的变化率调整 nominal series，把模型变量转成 real series | long-run CPI series from Robert Shiller website |
| Population | 用 population 把 series 转成 per capita values；1947 年后 quarterly population 来自 FRED；1947 年前用 Historical Statistics of the United States 的 annual population，再 log-linear interpolation 成 quarterly | FRED quarterly population since 1947；Historical Statistics annual population before 1947 |
| Asset prices | Nominal stock returns $r_{t+1}^{\$}$ 通常用 value-weighted CRSP index returns，1926 年后可得；real risk-free rate $r_{f,t}$ 通常用 FRED 的 3-month Treasury bill yields，1934 年后可得；one-year horizon 可用 one-year Treasury Constant Maturity rates | pre-1926 stock returns (Schwert, 1990)；pre-1934 risk-free rate from NBER Macrohistory Database (Nagel, 2016; Welch and Goyal, 2008)；CRSP risk-free rate at 1- and 3-month horizons |

## 1. 预测回归的基本问题

Return predictability 的核心回归：

$$
r_{t+1}
=
\alpha+\beta x_t+\varepsilon_{t+1},
$$

其中 $x_t$ 常是 valuation ratio，例如 dividend-price ratio、earnings-price ratio、book-to-market、term spread、default spread 等。

:::{admonition} Definition (Predictive regression)
Predictive regression 用 $t$ 时刻可观测变量 $x_t$ 预测未来收益 $r_{t+1}$。检验重点是
$$ H_0:\beta=0. $$
若 $\beta\ne 0$，说明 expected return time-varying。

:::

课件强调：return predictability 的困难不是写出回归，而是 $x_t$ 通常高度 persistent，样本又有限，导致 finite-sample bias 和 size distortion。

## 2. Valuation ratio 的 present-value 逻辑

由 [03_Consumption_Based_AP_Puzzles](03_Consumption_Based_AP_Puzzles) 的 Campbell-Shiller identity：

$$
pd_t
=
\frac{\kappa}{1-\rho}
+
\sum_{j=1}^{\infty}\rho^{j-1}E_t[\Delta d_{t+j}]
-
\sum_{j=1}^{\infty}\rho^{j-1}E_t[r_{t+j}].
$$

如果 dividend growth 不太可预测，而 $pd_t$ 波动很大，则 $pd_t$ 主要反映 expected returns。低 price-dividend ratio，即高 dividend yield，意味着未来 expected returns 高。

## 3. Autocorrelation and long-horizon predictability

单期预测回归：

$$
r_{t+1}=\alpha+\beta x_t+\varepsilon_{t+1}.
$$

长 horizon 预测回归：

$$
r_{t,t+k}=r_{t+1}+r_{t+2}+\cdots+r_{t+k}
=
\alpha_k+\beta_kx_t+\varepsilon_{t,t+k}.
$$

课件提醒：overlapping observations 会导致 residual serial correlation，必须使用 HAC/Newey-West 或其他校正。

:::{admonition} Lemma
Overlapping return residual 的 MA($k-1$) 结构
**WTS：** 若 one-period shocks 不相关，$k$-period overlapping return regression 的误差至少具有 $k-1$ 阶 serial correlation。

**连续求解：**
设
$$ \varepsilon_{t,t+k}=\sum_{j=1}^k u_{t+j}. $$
则
$$ \begin{aligned} \varepsilon_{t,t+k} &=u_{t+1}+u_{t+2}+\cdots+u_{t+k},\\ \varepsilon_{t+1,t+1+k} &=u_{t+2}+u_{t+3}+\cdots+u_{t+k+1}. \end{aligned} $$
两者共享 $u_{t+2},\ldots,u_{t+k}$，所以
$$ \operatorname{Cov}(\varepsilon_{t,t+k},\varepsilon_{t+1,t+1+k})\ne 0. $$
更一般地，当 lag $h<k$ 时有重叠；当 $h\ge k$ 时不重叠。

**结论：** overlapping long-horizon regression 不能用普通 OLS standard error。

:::

## 4. Kendall bias

课件给出 autoregressive coefficient 的 finite-sample downward bias。若

$$
x_t=\rho x_{t-1}+\nu_t,
$$

OLS 估计 $\hat \rho$ 在有限样本中有 bias。

:::{admonition} Lemma
Kendall bias 的一阶近似
**WTS：**
$$ E(\hat\rho-\rho) \approx -\frac{1+3\rho}{T}. $$

**联立系统：**
$$ x_t=\rho x_{t-1}+\nu_t,\qquad \hat\rho=\frac{\sum x_{t-1}x_t}{\sum x_{t-1}^2}. $$

**课件结论：**
$$ E(\hat\rho_1)=-\frac1T+O(T^{-2}) $$
以及 AR(1) 情形
$$ E(\hat\rho-\rho) = -\frac{1+3\rho}{T} +O(T^{-2}). $$

**结论：** persistent regressor 的 persistence 会被低估，因此基于 $\hat \rho$ 的预测检验容易出现 finite-sample distortion。

:::

课件给出 bias adjustment 的形式：

$$
\hat\rho^{adj}
=
\hat\rho+\frac{1+3\hat\rho}{T}.
$$

## 5. Stambaugh bias

Predictive regression 的关键偏误来自两个方程误差相关：

$$
\begin{aligned}
r_{t+1}&=\alpha+\beta x_t+\varepsilon_{t+1},\\
x_{t+1}&=\theta+\rho x_t+\nu_{t+1}.
\end{aligned}
$$

若 $\varepsilon_{t+1}$ 与 $\nu_{t+1}$ 相关，则 $\hat\beta$ 与 $\hat\rho$ 的偏误相连。

:::{admonition} Lemma
Stambaugh bias
**WTS：**
$$ E(\hat\beta-\beta) = \frac{\operatorname{Cov}(\varepsilon_t,\nu_t)} {\operatorname{Var}(\nu_t)} E(\hat\rho-\rho). $$

**联立系统：**
$$ \begin{cases} r_{t+1}=\alpha+\beta x_t+\varepsilon_{t+1},\\ x_{t+1}=\theta+\rho x_t+\nu_{t+1},\\ \operatorname{Cov}(\varepsilon_{t+1},\nu_{t+1})\ne 0. \end{cases} $$
线性投影：
$$ \varepsilon_{t+1}=\gamma\nu_{t+1}+\eta_{t+1}, \qquad \gamma= \frac{\operatorname{Cov}(\varepsilon_{t+1},\nu_{t+1})} {\operatorname{Var}(\nu_{t+1})}. $$

**连续求解：**
代入 return equation：
$$ \begin{aligned} r_{t+1} &=\alpha+\beta x_t+\gamma\nu_{t+1}+\eta_{t+1}\\ &=\alpha+\beta x_t+\gamma(x_{t+1}-\theta-\rho x_t)+\eta_{t+1}\\ &=(\alpha-\gamma\theta)+(\beta-\gamma\rho)x_t+\gamma x_{t+1}+\eta_{t+1}. \end{aligned} $$
估计时，$\rho$ 用 $\hat\rho$ 替代，引致
$$ \hat\beta-\beta \approx \gamma(\hat\rho-\rho). $$
取期望：
$$ E(\hat\beta-\beta) = \gamma E(\hat\rho-\rho) = \frac{\operatorname{Cov}(\varepsilon,\nu)} {\operatorname{Var}(\nu)} E(\hat\rho-\rho). $$

**结论：** 若 $\operatorname{Cov}(\varepsilon,\nu)<0$ 且 $E(\hat\rho-\rho)<0$，则 $E(\hat\beta-\beta)>0$：predictability 会被夸大。见 [cards/Predictive_Regression_Stambaugh_Bias](cards/Predictive_Regression_Stambaugh_Bias)。

:::

结合 Kendall bias：

$$
E(\hat\beta-\beta)
\approx
-\gamma\frac{1+3\rho}{T}.
$$

## 6. Bias adjustment and bootstrap

课件讲了两类处理：

1. analytical bias adjustment；
2. bootstrap / simulation under null。

基本 bootstrap 思路：

$$
H_0:\beta=0
$$

下估计系统：

$$
\begin{aligned}
r_{t+1}&=\alpha+\varepsilon_{t+1},\\
x_{t+1}&=\theta+\rho x_t+\nu_{t+1}.
\end{aligned}
$$

保留 $(\varepsilon,\nu)$ 的相关结构，模拟许多样本，得到 $\hat\beta$ 的有限样本分布，再计算 p-value。

## 7. Standard error bias and local-to-unity problem

当 $x_t$ 近似 unit root：

$$
\rho=1-\frac{c}{T},
$$

传统 $t$-statistic 的正态近似可能不准确。课件提到 Campbell-Yogo 类方法，用 local-to-unity asymptotics 改善 size。

复习时记住：

- persistence 越强，OLS t-test 越不可靠；
- dividend yield 一类变量高度 persistent；
- finite-sample correction 是 return predictability 文献的关键。

## 8. In-sample vs out-of-sample

In-sample $R^2$ 衡量回归在样本内拟合程度，但可能过拟合。Out-of-sample $R^2$ 衡量预测相对 benchmark 的表现。

:::{admonition} Definition (Out-of-sample $R^2$)
$$ R^2_{OS} = 1- \frac{\sum_{t}(r_{t+1}-\hat r_{t+1})^2} {\sum_t(r_{t+1}-\bar r_{t+1})^2}. $$
若 $R^2_{OS}>0$，模型预测误差小于 historical mean benchmark。

:::

见 [cards/Out_of_Sample_R2](cards/Out_of_Sample_R2)。

**9. Campbell-Thompson: 小 $R^2$ 的经济价值**

Campbell-Thompson 的重点：predictive regression 的统计 $R^2$ 可能很小，但对 mean-variance investor 的 timing strategy 仍可能有明显经济价值。目标是推出：

$$
\boxed{
\frac{\Delta E[r]}{E[r]}
=
\frac{R^2}{1-R^2}\frac{1+S^2}{S^2}
}
$$

**建立系统.**

$$
\left\{
\begin{aligned}
r^e_{t+1}&=\mu_t+\varepsilon_{t+1},\\
\mu_t&=E_t[r^e_{t+1}],\\
E_t[\varepsilon_{t+1}]&=0,\\
\mu&=E[r^e_{t+1}],\\
\sigma^2&=Var(r^e_{t+1}),\\
S&=\frac{\mu}{\sigma},\\
R^2&=\frac{Var(\mu_t)}{Var(r^e_{t+1})}
=\frac{Var(\mu_t)}{\sigma^2}.
\end{aligned}
\right.
$$

因此

$$
\left\{
\begin{aligned}
Var(\mu_t)&=R^2\sigma^2,\\
Var(\varepsilon_{t+1})&=(1-R^2)\sigma^2,\\
E[\mu_t^2]&=Var(\mu_t)+[E(\mu_t)]^2\\
&=R^2\sigma^2+\mu^2\\
&=\sigma^2(R^2+S^2).
\end{aligned}
\right.
$$

**Timing strategy.** 每期选择 risky asset weight $w_t$：

$$
\begin{aligned}
\max_{w_t}\left\{
w_t\mu_t-\frac{\gamma}{2}w_t^2Var_t(r^e_{t+1})
\right\}
&=
\max_{w_t}\left\{
w_t\mu_t-\frac{\gamma}{2}w_t^2(1-R^2)\sigma^2
\right\},\\
0&=\mu_t-\gamma w_t(1-R^2)\sigma^2,\\
w_t^*&=\frac{\mu_t}{\gamma(1-R^2)\sigma^2}.
\end{aligned}
$$

对应的无条件期望收益：

$$
\begin{aligned}
E[r^{timing}]
&=E[w_t^*r^e_{t+1}]\\
&=E\left[
\frac{\mu_t}{\gamma(1-R^2)\sigma^2}
(\mu_t+\varepsilon_{t+1})
\right]\\
&=\frac{E[\mu_t^2]+E[\mu_t\varepsilon_{t+1}]}
{\gamma(1-R^2)\sigma^2}\\
&=\frac{E[\mu_t^2]}{\gamma(1-R^2)\sigma^2}
\qquad \text{since }E[\mu_t\varepsilon_{t+1}]=E[\mu_tE_t(\varepsilon_{t+1})]=0\\
&=\frac{\sigma^2(R^2+S^2)}{\gamma(1-R^2)\sigma^2}\\
&=\frac{R^2+S^2}{\gamma(1-R^2)}.
\end{aligned}
$$

**No-timing strategy.** 不用预测信息，只用无条件均值 $\mu$：

$$
\begin{aligned}
w^*&=\frac{\mu}{\gamma\sigma^2},\\
E[r^{no\ timing}]
&=w^*\mu=\frac{\mu^2}{\gamma\sigma^2}=\frac{S^2}{\gamma}.
\end{aligned}
$$

所以预测性带来的相对经济价值为

$$
\begin{aligned}
\frac{\Delta E[r]}{E[r^{no\ timing}]}
&=
\frac{E[r^{timing}]-E[r^{no\ timing}]}
{E[r^{no\ timing}]}\\
&=
\frac{
\frac{R^2+S^2}{\gamma(1-R^2)}
-\frac{S^2}{\gamma}
}
{\frac{S^2}{\gamma}}\\
&=
\frac{
\frac{R^2+S^2-S^2(1-R^2)}{1-R^2}
}
{S^2}\\
&=
\frac{R^2(1+S^2)}{(1-R^2)S^2}\\
&=
\frac{R^2}{1-R^2}\frac{1+S^2}{S^2}.
\end{aligned}
$$

结论：

$$
\boxed{
\frac{\Delta E[r]}{E[r]}
=
\frac{R^2}{1-R^2}\frac{1+S^2}{S^2}
}
$$

直觉是：$R^2$ 衡量预测信号解释了多少 return variation，$S^2$ 衡量原本市场投资机会有多好。当 $S$ 较小时，即使 $R^2$ 很小，predictive signal 也可能有较大经济价值，因为投资者可以在 $\mu_t$ 高时多持有 risky asset，在 $\mu_t$ 低时少持有 risky asset。

$$
\boxed{
\text{小 }R^2\text{ 不等于小经济价值；关键是 predictability 是否能改变 } \mu_t.
}
$$

## 10. Cochrane 的 long-run return predictability intuition

课件强调：即使 one-period return predictability 弱，valuation ratios 的 present-value identity 会把长期 expected return variation 放大。直觉是：

$$
pd_t
=
\text{expected future dividend growth}
-
\text{expected future returns}.
$$

若 $pd_t$ 明显波动，而 dividend growth 可预测性弱，则 long-run returns 必须可预测，否则 identity 无法成立。

## 11. 复习抓手

- 先写 present-value identity，再解释 valuation ratio 为什么预测 returns。
- 碰到 predictive regression，马上检查：

  $$
x_{t+1}=\theta+\rho x_t+\nu_{t+1}
$$

  是否 persistent。
- Stambaugh bias 必须把 return shock 与 predictor shock 的相关性写出来。
- Long-horizon regression 必须提 overlapping residual 与 HAC。
