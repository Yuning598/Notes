# 05 Cross-Section of Returns and Factor Models

导航：[03_Consumption_Based_AP_Puzzles](03_Consumption_Based_AP_Puzzles) | [04_Return_Predictability_Econometrics](04_Return_Predictability_Econometrics) | [cards/Beta_SDF_Equivalence](cards/Beta_SDF_Equivalence) | [cards/Hansen_Jagannathan_Distance](cards/Hansen_Jagannathan_Distance) | [cards/Fama_MacBeth_Shanken](cards/Fama_MacBeth_Shanken) | [cards/GMM_Asset_Pricing](cards/GMM_Asset_Pricing) | [cards/Factor_Zoo_Multiple_Testing](cards/Factor_Zoo_Multiple_Testing)

## 1. 横截面问题

Time-series predictability 问的是：市场整体 expected return 是否随时间变化。Cross-section of returns 问的是：为什么不同资产平均收益不同？

:::{admonition} Definition (Cross-sectional asset pricing)
对 $N$ 个资产，研究
$$
E[R_i^e]
$$
是否能由暴露于共同风险因子 $f_t$ 的 beta 解释：
$$
E[R_i^e]=\beta_i'\lambda.
$$
:::

## 2. Beta representation 与 SDF representation

课件先从一般 SDF 定价式出发：

$$
\left\{
\begin{aligned}
E[MR_i]&=1,\\
E[MR_i^e]&=0.
\end{aligned}
\right.
$$

对 gross return，beta representation 是：

$$
\begin{aligned}
E[R_i]
&=\frac{1}{E[M]}-\frac{Cov(R_i,M)}{E[M]}\\
&=\underbrace{\frac{1}{E[M]}}_{R_f}
+\underbrace{\frac{Cov(R_i,M)}{Var(M)}}_{\beta_{i,M}}
\underbrace{\left(-\frac{Var(M)}{E[M]}\right)}_{\lambda_M}.
\end{aligned}
$$

对 excess return，去掉 $R_f$ 后：

$$
\begin{aligned}
E[R_i^e]
&=-\frac{Cov(R_i^e,M)}{E[M]}\\
&=\beta_{i,M}\lambda_M.
\end{aligned}
$$

这说明 beta representation 的本质不是“回归技巧”，而是 SDF 定价式的 covariance 改写：资产平均收益由它和 SDF 的协动决定。

:::{admonition} Lemma: Linear SDF implies factor beta pricing
$$
E[R_i^e]=\beta_i'\lambda, \qquad \beta_i=\operatorname{Cov}(R_i^e,f)\operatorname{Var}(f)^{-1}.
$$
$$
E[M R_i^e]=0,\qquad M=a-b'f.
$$

$$
\begin{aligned} 0 &=E[(a-b'f)R_i^e]\\ &=aE[R_i^e]-b'E[fR_i^e]\\ &=aE[R_i^e]-b'\left(E[f]E[R_i^e]+\operatorname{Cov}(f,R_i^e)\right). \end{aligned}
$$

整理：

$$
\begin{aligned} \left(a-b'E[f]\right)E[R_i^e] &=b'\operatorname{Cov}(f,R_i^e)\\ E[R_i^e] &=\operatorname{Cov}(R_i^e,f) \frac{b}{a-b'E[f]}. \end{aligned}
$$

插入
$$
\operatorname{Cov}(R_i^e,f)=\beta_i\operatorname{Var}(f),
$$
得

$$
\begin{aligned} E[R_i^e] &=\beta_i\operatorname{Var}(f)\frac{b}{a-b'E[f]}\\ &=\beta_i'\lambda, \end{aligned}
$$

其中
$$
\lambda=\operatorname{Var}(f)\frac{b}{a-b'E[f]}.
$$
beta pricing 与 linear SDF 是同一件事的两种表达。见 [cards/Beta_SDF_Equivalence](cards/Beta_SDF_Equivalence)。

:::

(lemma-linear-sdf-beta-pricing)=

**课件中的两种 representation.**

| 表达 | 形式 | 估计对象 | 检验对象 |
|---|---|---|---|
| Beta representation | $E[R_i^e]=\sum_k\beta_{i,k}\lambda_k$ | $\beta_{i,k}$ 与 $\lambda_k$ | pricing error：traded factor 用 $\alpha_i$；non-traded factor 用 $\eta_i$ |
| SDF representation | $M_{t+1}=\theta'F_{t+1}$ | SDF 参数 $\theta$ | Euler moment：$E[X_{t+1}F_{t+1}'\theta-P_t]=0$ |

两者的连接可以写成：

$$
\left\{
\begin{aligned}
\text{Beta representation:}\quad
E[R_i^e]&=\beta_i'\lambda,\\
\text{Linear SDF:}\quad
M&=a-b'f,\\
\text{SDF pricing:}\quad
E[MR_i^e]&=0.
\end{aligned}
\right.
$$

如果只给定 test-asset excess returns $R^e=(R_1^e,\ldots,R_N^e)'$，HJ 1991 还给出一个能定价这些资产、并由 excess returns 张成的 SDF：

$$
\begin{aligned}
M^*
&=1-E[R^e]'\operatorname{Var}(R^e)^{-1}(R^e-E[R^e]),\\
E[M^*R^e]
&=E[R^e]
-E\left[R^e(R^e-E[R^e])'\right]\operatorname{Var}(R^e)^{-1}E[R^e]\\
&=E[R^e]-\operatorname{Var}(R^e)\operatorname{Var}(R^e)^{-1}E[R^e]\\
&=0.
\end{aligned}
$$

条件版本同理：

$$
M^*_{t+1}
=1-E_t[R^e_{t+1}]'\operatorname{Var}_t(R^e_{t+1})^{-1}
\left(R^e_{t+1}-E_t[R^e_{t+1}]\right).
$$

SDF $\Longleftrightarrow$ beta pricing 的等价性证明见 [Beta-SDF Equivalence](cards/Beta_SDF_Equivalence.md)，EF8077/theoretical 版本见 [Factor Models Are Equivalent to SDFs](../Theoretical%20AP/01_Single_Period_Models.md)。

(link-ef8077-factor-sdf)=

## 3. Traded factor model

若 factors 本身是 traded excess returns $F_t$，典型模型：

$$
R_{i,t}^e=\alpha_i+\beta_i'F_t+\varepsilon_{i,t}.
$$

:::{admonition} Definition (Traded factor test)
若 $F_t$ 是 traded excess returns，则模型含义是：
$$
\alpha_i=0\quad \forall i.
$$
因为 factor portfolio 自身的风险价格就是 $E[F]$。

:::

时间序列回归检验：

$$
R_{i,t}^e=\alpha_i+\beta_i'F_t+\varepsilon_{i,t}.
$$

若所有 $\alpha_i=0$，说明 factor model 定价这些 test assets。

## 4. Non-traded factor and two-pass regression

若 factors 不是 traded returns，例如 consumption growth、macro variables，需要估计 factor risk prices $\lambda$。

### First pass

$$
R_{i,t}^e=a_i+\beta_i'f_t+\varepsilon_{i,t}.
$$

得到 $\hat\beta_i$。

### Second pass

$$
\bar R_i^e=\hat\beta_i'\lambda+\alpha_i.
$$

:::{admonition} Lemma: Fama-MacBeth two-pass estimator
$$
\hat\lambda=(\hat B'\hat B)^{-1}\hat B'\bar R^e.
$$
令

$$
\bar R^e= \begin{bmatrix} \bar R_1^e\\ \vdots\\ \bar R_N^e \end{bmatrix}, \qquad \hat B= \begin{bmatrix} \hat\beta_1'\\ \vdots\\ \hat\beta_N' \end{bmatrix}.
$$

Cross-sectional regression：
$$
\bar R^e=\hat B\lambda+\alpha.
$$
OLS objective：
$$
Q(\lambda)=(\bar R^e-\hat B\lambda)'(\bar R^e-\hat B\lambda).
$$
FOC：

$$
\begin{aligned} \frac{\partial Q}{\partial \lambda} &=-2\hat B'(\bar R^e-\hat B\lambda)=0\\ \hat B'\bar R^e-\hat B'\hat B\lambda &=0\\ \hat B'\hat B\lambda &=\hat B'\bar R^e\\ \hat\lambda &=(\hat B'\hat B)^{-1}\hat B'\bar R^e. \end{aligned}
$$

risk price 是用 beta 解释平均收益的横截面斜率。见 [cards/Fama_MacBeth_Shanken](cards/Fama_MacBeth_Shanken)。

:::

## 5. Shanken correction

课件强调 two-pass 回归中 $\hat\beta_i$ 是估计值，不是真值。因此 second-pass standard error 需要 correction。直觉：

$$
\bar R_i^e=\beta_i'\lambda+u_i,
$$

但实际用 $\hat\beta_i=\beta_i+\text{estimation error}$，所以右侧变量有 measurement error。Shanken correction 调整的就是 generated regressor uncertainty。

复习时不必死背复杂矩阵，但要记住考点：

- first-pass beta estimation error 会使 second-pass t-stat 过大；
- traded factor 的 alpha test 与 non-traded factor 的 $\lambda$ test 不同；
- 若 factors 是 returns，$\lambda=E[F]$。

## 6. SDF representation 与 GMM

SDF representation 直接指定一个 discount factor：

$$
M_{t+1}=\theta'F_{t+1},
$$

其中 $F_{t+1}$ 包含常数项和 factors。Euler equation 写成：

$$
E[X_{t+1}F_{t+1}'\theta-P_t]=0.
$$

若 $X_{t+1}=R^e_{t+1}$ 且 $P_t=0$，就回到 excess-return moment：

$$
E[(\theta'F_{t+1})R^e_{t+1}]=0.
$$

GMM 把这些 asset-pricing restrictions 写成 sample moment conditions。

:::{admonition} Definition (GMM moment condition)
若 $M_t(\theta)$ 是模型 SDF，则
$$
E[g_t(\theta)]=0,\qquad g_t(\theta)=M_t(\theta)R_t^e.
$$
样本矩：
$$
\bar g_T(\theta)=\frac1T\sum_{t=1}^Tg_t(\theta).
$$
**Lemma:** GMM estimator
$$
\hat\theta = \arg\min_{\theta} \bar g_T(\theta)'W_T\bar g_T(\theta).
$$
$$
E[g_t(\theta_0)]=0, \qquad Q_T(\theta)=\bar g_T(\theta)'W_T\bar g_T(\theta).
$$
一阶条件：

$$
\begin{aligned} \frac{\partial Q_T(\theta)}{\partial\theta} &= 2\left(\frac{\partial \bar g_T(\theta)}{\partial\theta}\right)'W_T\bar g_T(\theta)=0. \end{aligned}
$$

记
$$
D_T(\theta)=\frac{\partial \bar g_T(\theta)}{\partial\theta'},
$$
则
$$
D_T(\hat\theta)'W_T\bar g_T(\hat\theta)=0.
$$
GMM 直接最小化 pricing errors，不必先转成 beta regression。见 [cards/GMM_Asset_Pricing](cards/GMM_Asset_Pricing)。

:::

## 7. J-test

若 moment 条件数量 $N$ 大于参数数量 $K$，模型 overidentified。检验 pricing errors 是否 jointly zero：

$$
J =
T\bar g_T(\hat\theta)'\hat S^{-1}\bar g_T(\hat\theta)
\sim \chi^2_{N-K}.
$$

其中 $\hat S$ 是 moment 的 long-run covariance matrix。若 $J$ 太大，说明模型不能同时定价所有 assets。

## 8. Hansen-Jagannathan distance

课件两次强调 HJ distance：

- 在 beta representation 中：GRS statistic 不应用来比较模型；比较模型需要 Hansen-Jagannathan distance 或更高级检验。
- 在 SDF/GMM representation 中：取

$$
  W_{HJ}
  =
  \left(\frac1T\sum_{t=1}^T X_tX_t'\right)^{-1}
$$

  会最小化 Hansen-Jagannathan distance。

**定义.** 给定候选 SDF $m(\theta)$ 和 test assets $R^e$，pricing error 为

$$
g(\theta)=E[m(\theta)R^e].
$$

HJ distance 是候选 SDF 到所有 admissible SDF 的最短 $L^2$ 距离：

$$
d_{HJ}(\theta) =
\min_{m^*:E[m^*R^e]=0}
\sqrt{E[(m(\theta)-m^*)^2]}.
$$

**投影推导.** 令 $G=E[R^eR^{e'}]$，设修正项 $u=m^*-m(\theta)$，则

$$
\left\{
\begin{aligned}
E[m^*R^e]&=0,\\
E[uR^e]&=-g(\theta),\\
G&=E[R^eR^{e'}].
\end{aligned}
\right.
$$

最小范数修正项在 $R^e$ 的 span 中：

$$
\begin{aligned}
u^*
&=-g(\theta)'G^{-1}R^e,\\
E[u^*R^e]
&=-g(\theta)'G^{-1}E[R^eR^{e'}]\\
&=-g(\theta)',\\
E[(u^*)^2]
&=g(\theta)'G^{-1}E[R^eR^{e'}]G^{-1}g(\theta)\\
&=g(\theta)'G^{-1}g(\theta).
\end{aligned}
$$

所以

$$
\boxed{
d_{HJ}(\theta)^2 =
g(\theta)'E[R^eR^{e'}]^{-1}g(\theta)
}
$$

样本中对应的 GMM criterion 是

$$
\bar g_T(\theta)'
\left(\frac1T\sum_{t=1}^T R_t^eR_t^{e'}\right)^{-1}
\bar g_T(\theta),
$$

若 payoff 写作一般 $X_t$，就得到课件公式 $W_{HJ}=(T^{-1}\sum_tX_tX_t')^{-1}$。

**和 HJ bound / GRS 的区别.**

| 概念 | 问的问题 | 核心公式 | 在这里的作用 |
|---|---|---|---|
| HJ bound (HJ 1991) | 任意可行 SDF 必须多 volatile？ | $\frac{\sigma(M)}{E[M]}\ge \frac{\lvert E[R^e]\rvert}{\sigma(R^e)}$ | 用在 [03_Consumption_Based_AP_Puzzles](03_Consumption_Based_AP_Puzzles.md)：consumption SDF 太平滑，解释不了高 Sharpe ratio |
| HJ distance (HJ 1997) | 候选 SDF 离”能定价 test assets 的 SDF 集合”有多远？ | $d_{HJ}^2=g'E[R^eR^{e'}]^{-1}g$ | 用来评价 / 比较 misspecified factor models；比单看 GRS 更像”模型距离” |
| GRS test | traded-factor model 的所有 $\alpha_i$ 是否为零？ | $\hat\alpha'\hat\Sigma_\varepsilon^{-1}\hat\alpha$ 加 finite-sample scaling | 检验一个模型是否被拒绝；课件提醒不要用它直接比较模型优劣 |

一句话：

$$
\boxed{
\text{HJ bound 看 SDF 是否够 volatile；HJ distance 看候选 SDF 离可行 SDF 集合有多远。}
}
$$

见 [cards/Hansen_Jagannathan_Distance](cards/Hansen_Jagannathan_Distance) 与 [cards/Hansen_Jagannathan_Bound](cards/Hansen_Jagannathan_Bound)。

(hj-distance-comparison)=

## 9. Factor zoo and multiple testing

课件讨论 factor zoo：文献中有大量 firm characteristics 被发现预测收益或解释横截面。问题是：

- data mining；
- multiple testing；
- publication bias；
- factors 之间高度相关；
- microcaps 和交易成本影响显著性。

:::{admonition} Definition (Factor zoo)
Factor zoo 指大量被提出的 firm-level characteristics 或 factor portfolios，例如 size、value、momentum、profitability、investment、quality、low volatility 等，它们都声称能解释横截面 returns。

:::

多重检验的直觉：

$$
P(\text{at least one false discovery}) =
1-(1-\alpha)^M,
$$

当 $M$ 很大时，即使每个假设的显著性水平是 5%，也会出现很多 false positives。见 [cards/Factor_Zoo_Multiple_Testing](cards/Factor_Zoo_Multiple_Testing)。

## 10. Omitted factor problem

若真实模型是

$$
E[R_i^e]=\beta_{i1}\lambda_1+\beta_{i2}\lambda_2,
$$

但估计时遗漏 $f_2$，则估计的 $\lambda_1$ 会吸收 $f_2$ 的作用。横截面回归的 omitted variable bias：

$$
\hat\lambda_1
\approx
\lambda_1+
\frac{\operatorname{Cov}_{cs}(\beta_1,\beta_2)}
{\operatorname{Var}_{cs}(\beta_1)}
\lambda_2.
$$

:::{admonition} Lemma: Cross-sectional omitted beta bias
$$
\operatorname{plim}\hat\lambda_1 = \lambda_1+ \frac{\operatorname{Cov}_{cs}(\beta_1,\beta_2)} {\operatorname{Var}_{cs}(\beta_1)}\lambda_2.
$$
估计错误模型：
$$
E[R_i^e]=\beta_{i1}\lambda_1^{mis}+u_i.
$$
真实模型：
$$
E[R_i^e]=\beta_{i1}\lambda_1+\beta_{i2}\lambda_2.
$$
OLS 斜率：

$$
\begin{aligned} \lambda_1^{mis} &= \frac{\operatorname{Cov}_{cs}(\beta_1,E[R^e])} {\operatorname{Var}_{cs}(\beta_1)}\\ &= \frac{\operatorname{Cov}_{cs}(\beta_1,\beta_1\lambda_1+\beta_2\lambda_2)} {\operatorname{Var}_{cs}(\beta_1)}\\ &= \lambda_1+ \frac{\operatorname{Cov}_{cs}(\beta_1,\beta_2)} {\operatorname{Var}_{cs}(\beta_1)}\lambda_2. \end{aligned}
$$

一个 factor 的显著性可能只是因为它 proxy 了遗漏的 priced factor。

:::

## Review Summary

- 看到横截面，先写 $E[R_i^e]=\beta_i'\lambda$。
- 看到 SDF，先写 $E[M R_i^e]=0$。
- Traded factor：test $\alpha_i=0$。
- Non-traded factor：two-pass/Fama-MacBeth，注意 Shanken correction。
- SDF representation：指定 $M_{t+1}=\theta'F_{t+1}$，用 Euler moments 估计。
- GMM：moment 是 $M(\theta)R^e$，J-test 检验 pricing errors。
- HJ distance：用 $E[R^eR^{e'}]^{-1}$ 加权 pricing errors，衡量候选 SDF 离 admissible SDF 集合有多远。
