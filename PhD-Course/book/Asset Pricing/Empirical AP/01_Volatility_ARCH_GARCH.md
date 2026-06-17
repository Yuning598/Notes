# 01 Volatility, ARCH, GARCH

导航：[Asset Pricing index](../index.md) | [02_Implied_Volatility_VIX_VRP](02_Implied_Volatility_VIX_VRP) | [cards/Weak_Stationarity](cards/Weak_Stationarity) | [cards/ARCH_Unconditional_Variance](cards/ARCH_Unconditional_Variance) | [cards/GARCH_Infinite_ARCH_and_Half_Life](cards/GARCH_Infinite_ARCH_and_Half_Life) | [cards/Realized_Variance_Microstructure](cards/Realized_Variance_Microstructure)

## 1. 为什么 volatility 是 empirical asset pricing 的起点

volatility连接了几乎所有资产定价对象：

- sign forecasting：均值相同但波动率不同，负收益概率 $P(r_t<0)$ 会很不同；
- credit/default risk：默认概率本质是 $P(\text{Assets}<\text{Liabilities})$；
- CAPM：$\beta_i=\operatorname{Cov}(r_i,r_m)/\operatorname{Var}(r_m)$，所以 covariance 与 variance 是核心输入；
- portfolio allocation：均值-方差组合直接约束 $\omega'\operatorname{Cov}(r)\omega$；
- option pricing：Black-Scholes 中最重要的输入是 volatility $\sigma$。

:::{admonition} Definition (Volatility)
Volatility 是资产收益不确定性的条件尺度。它通常不是直接可观测的，因此 empirical asset pricing 需要用模型或高频数据估计：
$$
\sigma_t^2=\operatorname{Var}(r_t\mid \mathcal F_{t-1}).
$$

:::

课件中的经验事实：financial returns 的 volatility 是 time-varying 且具有 volatility clustering。Mandelbrot 的直觉是：large changes tend to be followed by large changes, of either sign.

## 2. Weak stationarity

课件在 ARCH/GARCH 之前先定义 weak stationarity，因为我们要用过去信息预测未来，而这种预测关系至少需要二阶矩结构稳定。

:::{admonition} Definition (Weak stationarity)
随机过程 $\{y_t\}$ 是弱平稳的，如果
$$
E[y_t]=\mu,\qquad  E[(y_t-\mu)^2]=\sigma^2,\qquad E[(y_t-\mu)(y_{t-s}-\mu)]=\gamma_s,
$$
且这些量不随 $t$ 变化，只依赖 lag $s$。

:::

理解：弱平稳不是说 $y_t$ 每期一样，而是说序列围绕固定水平波动，二阶依赖结构稳定。见 [cards/Weak_Stationarity](cards/Weak_Stationarity)。

## 3. ARCH(1)

:::{admonition} Definition (ARCH(1))
课件设定：

$$
\begin{aligned}
y_t &= \mu_t+u_t,\\
u_t &= v_t\sigma_t,\qquad v_t \overset{i.i.d.}{\sim}(0,1),\\
\sigma_t^2 &= \alpha_0+\alpha_1 u_{t-1}^2.
\end{aligned}
$$

其中 $\mu_t$ 是 conditional mean，$u_t$ 是 innovation，$\sigma_t^2$ 是 conditional variance。

:::

直觉：如果上一期 $|u_{t-1}|$ 很大，无论正负，下一期条件方差 $\sigma_t^2$ 都上升，因此 ARCH 可以生成 volatility clustering。

:::{admonition} Lemma: ARCH(1) 的 unconditional variance
For ARCH(1),

$$
E[u_t^2]=E[\sigma_t^2]=\frac{\alpha_0}{1-\alpha_1}.
$$

Proof:

$$
\begin{aligned}
E[\sigma_t^2]
&=E[\alpha_0+\alpha_1u_{t-1}^2]\\
&=\alpha_0+\alpha_1E[u_{t-1}^2]\\
&=\alpha_0+\alpha_1E[v_{t-1}^2\sigma_{t-1}^2]\\
&=\alpha_0+\alpha_1E[\sigma_{t-1}^2].
\end{aligned}
$$

If the second moment is time-invariant, let

$$
E[\sigma_t^2]=E[\sigma_{t-1}^2]\equiv \bar\sigma^2.
$$

Then

$$
\begin{aligned}
\bar\sigma^2
&=\alpha_0+\alpha_1\bar\sigma^2,\\
(1-\alpha_1)\bar\sigma^2
&=\alpha_0,\\
\bar\sigma^2
&=\frac{\alpha_0}{1-\alpha_1}.
\end{aligned}
$$

The usual sufficient restrictions are

$$
\alpha_0>0,\qquad 0<\alpha_1<1.
$$

Here $\alpha_0>0$ keeps variance positive, and $\alpha_1<1$ makes the unconditional variance finite.
:::

:::{admonition} Lemma: ARCH(1) 的 conditional variance
For ARCH(1), $\sigma_t^2$ is $\mathcal F_{t-1}$-measurable, so

$$
\operatorname{Var}(u_t\mid \mathcal F_{t-1})=\sigma_t^2.
$$

Proof:

$$
\begin{aligned}
\operatorname{Var}(u_t\mid \mathcal F_{t-1})
&=E[u_t^2\mid \mathcal F_{t-1}]
-\{E[u_t\mid \mathcal F_{t-1}]\}^2\\
&=E[v_t^2\sigma_t^2\mid \mathcal F_{t-1}]
-\{E[v_t\sigma_t\mid \mathcal F_{t-1}]\}^2\\
&=\sigma_t^2E[v_t^2\mid \mathcal F_{t-1}]
-\sigma_t^2\{E[v_t\mid \mathcal F_{t-1}]\}^2\\
&=\sigma_t^2.
\end{aligned}
$$

ARCH 中 unconditional variance 可以是常数，但 conditional variance 是 time-varying。
:::

## 4. Heavy tails

课件指出：如果进一步假设 $v_t\sim N(0,1)$，ARCH(1) 的 $u_t$ 可以产生 heavy tails：

$$
K =
3\frac{1-\alpha_1^2}{1-3\alpha_1^2}
>3,
\qquad
0<\alpha_1^2<\frac13.
$$

这个结论解释了为什么即使 shocks $v_t$ 正态，收益创新 $u_t$ 仍可以比正态分布厚尾。原因是 $u_t$ 是 normal shock 与随机尺度 $\sigma_t$ 的乘积。见 [cards/ARCH_Unconditional_Variance](cards/ARCH_Unconditional_Variance)。

## 5. ARCH(q)

:::{admonition} Definition (ARCH(q))

$$
\begin{aligned}
y_t&=\mu_t+u_t,\\
u_t&=v_t\sigma_t,\\
\sigma_t^2&=\alpha_0+\alpha_1u_{t-1}^2+\cdots+\alpha_qu_{t-q}^2.
\end{aligned}
$$

:::

当 $q$ 很大时，ARCH(q) 能捕捉更长的波动持续性，但参数过多、估计不稳定。因此课件引入 GARCH 作为更 parsimonious 的替代。

## 6. GARCH(1,1)

:::{admonition} Definition (GARCH(1,1))
$$
\sigma_t^2 = \alpha_0+\alpha_1u_{t-1}^2+\beta_1\sigma_{t-1}^2.
$$

其中 $\alpha_1$ 度量新 shock 对 volatility 的影响，$\beta_1$ 度量 volatility persistence。
:::

:::{admonition} Lemma: GARCH(1,1) 的 unconditional variance
For GARCH(1,1),

$$
E[\sigma_t^2]=\frac{\alpha_0}{1-\alpha_1-\beta_1}.
$$

Proof:

$$
\begin{aligned}
E[\sigma_t^2]
&=\alpha_0+\alpha_1E[u_{t-1}^2]+\beta_1E[\sigma_{t-1}^2]\\
&=\alpha_0+\alpha_1E[v_{t-1}^2\sigma_{t-1}^2]+\beta_1E[\sigma_{t-1}^2]\\
&=\alpha_0+(\alpha_1+\beta_1)E[\sigma_{t-1}^2].
\end{aligned}
$$

若 $\bar\sigma^2=E[\sigma_t^2]=E[\sigma_{t-1}^2]$，则

$$
\begin{aligned}
\bar\sigma^2
&=\alpha_0+(\alpha_1+\beta_1)\bar\sigma^2,\\
(1-\alpha_1-\beta_1)\bar\sigma^2
&=\alpha_0,\\
\bar\sigma^2
&=\frac{\alpha_0}{1-\alpha_1-\beta_1}.
\end{aligned}
$$

The usual sufficient restrictions are

$$
\alpha_0>0,\qquad \alpha_1\ge 0,\qquad \beta_1\ge 0,\qquad \alpha_1+\beta_1<1.
$$

:::

## 7. GARCH as infinite ARCH

GARCH(1,1) 的核心便利是：少量参数可以近似 long-memory ARCH。

:::{admonition} Lemma: GARCH(1,1) 的 ARCH($\infty$) 表示
Iterating the GARCH recursion gives

$$
\sigma_t^2
=\frac{\alpha_0}{1-\beta_1}
+\alpha_1\sum_{j=1}^{\infty}\beta_1^{j-1}u_{t-j}^2.
$$

Proof:

$$
\begin{aligned}
\sigma_t^2
&=\alpha_0+\alpha_1u_{t-1}^2+\beta_1\sigma_{t-1}^2\\
&=\alpha_0+\alpha_1u_{t-1}^2
  +\beta_1(\alpha_0+\alpha_1u_{t-2}^2+\beta_1\sigma_{t-2}^2)\\
&=\alpha_0(1+\beta_1)
  +\alpha_1u_{t-1}^2+\alpha_1\beta_1u_{t-2}^2
  +\beta_1^2\sigma_{t-2}^2\\
&=\alpha_0(1+\beta_1+\beta_1^2+\cdots)
  +\alpha_1\left(u_{t-1}^2+\beta_1u_{t-2}^2+\beta_1^2u_{t-3}^2+\cdots\right)\\
&=\frac{\alpha_0}{1-\beta_1}
  +\alpha_1\sum_{j=1}^{\infty}\beta_1^{j-1}u_{t-j}^2.
\end{aligned}
$$

GARCH 是带几何衰减权重的 ARCH($\infty$)。见 [cards/GARCH_Infinite_ARCH_and_Half_Life](cards/GARCH_Infinite_ARCH_and_Half_Life)。

:::

## 8. Volatility forecasting

令

$$
\phi=\alpha_1+\beta_1,\qquad
\bar\sigma^2=\frac{\alpha_0}{1-\phi}.
$$

:::{admonition} Lemma: GARCH(1,1) 的 $h$-step variance forecast
For $h\ge 1$,

$$
E_t[\sigma_{t+h}^2]
=\bar\sigma^2+\phi^{h-1}\left(E_t[\sigma_{t+1}^2]-\bar\sigma^2\right).
$$

Proof:

$$
\begin{aligned}
E_t[\sigma_{t+2}^2]
&=\alpha_0+\phi E_t[\sigma_{t+1}^2]\\
&=\bar\sigma^2(1-\phi)+\phi E_t[\sigma_{t+1}^2]\\
&=\bar\sigma^2+\phi(E_t[\sigma_{t+1}^2]-\bar\sigma^2).
\end{aligned}
$$

继续迭代：

$$
\begin{aligned}
E_t[\sigma_{t+3}^2]
&=\bar\sigma^2+\phi(E_t[\sigma_{t+2}^2]-\bar\sigma^2)\\
&=\bar\sigma^2+\phi^2(E_t[\sigma_{t+1}^2]-\bar\sigma^2),\\
&\vdots\\
E_t[\sigma_{t+h}^2]
&=\bar\sigma^2+\phi^{h-1}(E_t[\sigma_{t+1}^2]-\bar\sigma^2).
\end{aligned}
$$

$\phi$ 越接近 1，volatility forecast 越 persistent。

:::

## 9. Asymmetric volatility: leverage effect

leverage effect：**negative returns 往往伴随更高 future volatility**。常见机制包括：

1. financial leverage effect：股价下跌导致 equity value 降低，debt/equity 上升，equity volatility 上升；
2. volatility feedback：预期 future volatility 上升会提高 required return，从而压低当前价格；
3. behavioral / attention channel：bad news 更容易引发交易和重新定价。

GARCH(1,1) 对正负 shock 对称，因此需要扩展，例如 EGARCH、GJR-GARCH。见 [cards/Leverage_Effect_EGARCH](cards/Leverage_Effect_EGARCH)。

## 10. Source of volatility, realized volatility, and microstructure noise

### Source of volatility

这两页先回答一个更基础的问题：**股票价格为什么会波动，而且为什么交易时间更波动**。

经验事实是

$$
\left\{
\begin{aligned}
\text{overnight volatility} &: \text{close-to-open 波动},\\
\text{intraday volatility} &: \text{open-to-close 波动}.
\end{aligned}
\right.
$$

实证上通常有

$$
\text{intraday volatility}>\text{overnight volatility}.
$$

French and Roll (1986) 的经典发现是 open-to-close volatility 约为 weekend close-to-open volatility 的 6 倍。后来的新闻分解结果进一步说明：overnight 波动更多由 public news 驱动，而 intraday 波动中只有一小部分能被 public news 解释，更多成分来自交易过程本身。

这条逻辑对应三种解释：

1. public information during business hours：business hours 里更多 earnings announcements、macro news、analyst reports、company announcements，fundamental value 在交易时段变化更快。
2. private information is traded on：信息可能先到达 informed investors，但只有在 market open 之后才通过 order flow 进入价格。可写成

$$
\left\{
\begin{aligned}
\text{private signal arrives}
&\Rightarrow \text{informed trading},\\
\text{informed trading}
&\Rightarrow \text{order flow becomes informative},\\
\text{market makers update beliefs}
&\Rightarrow \text{price discovery},\\
\text{price discovery}
&\Rightarrow \text{intraday volatility}.
\end{aligned}
\right.
$$

3. trading noise：bid-ask bounce、inventory pressure、liquidity trading、temporary price impact、order imbalance 等 microstructure frictions 会让 observed price 比 fundamental price 更 noisy。Kyle / Glosten-Milgrom 解释信息如何通过交易进入价格，这里是它的实证版本。

对照 Boudoukh et al. (2018) 的分解：

$$
\left\{
\begin{aligned}
\text{median intraday volatility} &= 2.02\%,\\
\text{median overnight volatility} &= 1.20\%,
\end{aligned}
\right.
$$

所以 intraday 比 overnight 高约

$$
\frac{2.02-1.20}{1.20}\approx 68\%.
$$

他们还发现：

$$
\left\{
\begin{aligned}
\text{public news explains overnight volatility} &= 49.6\%,\\
\text{public news explains intraday volatility} &= 12.4\%.
\end{aligned}
\right.
$$

所以可以把这两页压缩成一句话：

$$
\boxed{
\text{overnight volatility mostly reflects public news, while intraday volatility mostly reflects trading and price discovery.}
}
$$

更形式化的高频测量和 microstructure noise 写法，见 [cards/Realized_Variance_Microstructure](cards/Realized_Variance_Microstructure)。

### Realized volatility and microstructure noise

课件从低频 ARCH/GARCH 过渡到高频 realized variance。连续推导可以写成：

$$
\begin{aligned}
dp_t &= \mu_t dt + \sigma_t dW_t, \qquad \text{(log price 的连续时间过程)}\\
r_{t+1} &\equiv p_{t+1}-p_t
        = \int_t^{t+1}\mu_s ds + \int_t^{t+1}\sigma_s dW_s,\\
IV_{t+1} &\equiv \int_t^{t+1}\sigma_s^2 ds
        &&\text{(区间 }[t,t+1]\text{ 上的 integrated variance)}.
\end{aligned}
$$

把区间 $[t,t+1]$ 划分成 $M$ 个小区间，令 $\Delta = 1/M$，$t_j=t+j\Delta$，则高频收益为

$$
r_{t+j\Delta}=p(t_j)-p(t_{j-1}),
$$

对应 realized variance 为

$$
\begin{aligned}
RV_{t+1}(\Delta)
&\equiv \sum_{j=1}^{M}\big[p(t_j)-p(t_{j-1})\big]^2\\
&= \sum_{j=1}^{M} r_{t+j\Delta}^2.
\end{aligned}
$$

由 quadratic variation 的理论，

$$
RV_{t+1}(\Delta)\xrightarrow{p} IV_{t+1}, \qquad \Delta\to 0.
$$

所以在”采样足够高且没有 microstructure noise”的理想情形下，$RV$ 就是 $IV$ 的一致估计。但实际交易价格有 bid-ask bounce、discreteness、asynchronous trading 等 microstructure noise；采样频率太高时，noise 会放大 RV 偏误。见 [cards/Realized_Variance_Microstructure](cards/Realized_Variance_Microstructure)。

## Review Summary

- ARCH/GARCH 的考点一般是条件方差、无条件方差、stationarity condition、forecast。
- 经验直觉：returns 本身 autocorrelation 弱，但 squared returns / absolute returns 的 autocorrelation 强。
- 从这一讲通往下一讲：用 realized variance 衡量物理测度下的 variance，用 option-implied variance 衡量风险中性测度下的 variance，两者差就是 [cards/Variance_Risk_Premium](cards/Variance_Risk_Premium)。
