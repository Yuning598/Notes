# Empirical Asset Pricing Problem Set

## Part 1: 波动率建模（Volatility Modeling）

### 1. ARCH(1) 基础计算

#ARCH（1） #unconditional_variance #stationarity

**Question** 考虑 ARCH(1) 模型：

$$
\begin{aligned}
u_t &= v_t\sigma_t,\qquad v_t \overset{i.i.d.}{\sim}(0,1), \\
\sigma_t^2 &= \alpha_0 + \alpha_1 u_{t-1}^2.
\end{aligned}
$$

**1.1** 推导 ARCH(1) 的无条件方差 $E[u_t^2]$。

::::{solution}


**1.1 推导**

$$
\begin{aligned}
E[\sigma_t^2]
&= E[\alpha_0 + \alpha_1 u_{t-1}^2] \\
&= \alpha_0 + \alpha_1 E[u_{t-1}^2] \\
&= \alpha_0 + \alpha_1 E[v_{t-1}^2 \sigma_{t-1}^2] \\
&= \alpha_0 + \alpha_1 E[v_{t-1}^2] E[\sigma_{t-1}^2] \\
&= \alpha_0 + \alpha_1 E[\sigma_{t-1}^2].
\end{aligned}
$$

利用平稳性 $E[\sigma_t^2] = E[\sigma_{t-1}^2] = \bar\sigma^2$：

$$
\begin{aligned}
\bar\sigma^2 &= \alpha_0 + \alpha_1 \bar\sigma^2 \\
(1 - \alpha_1)\bar\sigma^2 &= \alpha_0 \\
\bar\sigma^2 &= \frac{\alpha_0}{1 - \alpha_1}.
\end{aligned}
$$

又因 $E[u_t^2] = E[E[u_t^2|\mathcal{F}_{t-1}]] = E[\sigma_t^2]$，所以：

$$
E[u_t^2] = \frac{\alpha_0}{1 - \alpha_1}.
$$

::::

**1.2** 给定参数估计值 $\hat\alpha_0 = 0.00002$，$\hat\alpha_1 = 0.12$，计算：
- (a) 无条件方差 $E[u_t^2]$
- (b) 无条件波动率（标准差）$\sqrt{E[u_t^2]}$
- (c) 年化波动率（假设日收益率，252 个交易日）

::::{solution}

**1.2 数值计算**

(a) 无条件方差：

$$
E[u_t^2] = \frac{0.00002}{1 - 0.12} = \frac{0.00002}{0.88} \approx 0.0000227.
$$

(b) 无条件波动率（日）：

$$
\sqrt{E[u_t^2]} = \sqrt{0.0000227} \approx 0.00476 = 0.476\%.
$$

(c) 年化波动率：

$$
\text{Annual vol} = 0.00476 \times \sqrt{252} \approx 0.00476 \times 15.87 \approx 0.0755 = 7.55\%.
$$

::::

**1.3** 解释为什么平稳性要求 $\alpha_1 < 1$。如果 $\alpha_1 = 1$，模型会出现什么问题？

::::{solution}

**1.3 平稳性要求**

如果 $\alpha_1 = 1$，从推导可知：

$$
\bar\sigma^2 = \frac{\alpha_0}{1 - \alpha_1} = \frac{\alpha_0}{0} = \infty.
$$

无条件方差发散，过程不平稳。经济含义：
- 波动率冲击永久持续（no mean reversion）
- 方差随时间累积，无界增长
- 模型失去长期预测能力

实证上，$\alpha_1 < 1$ 但通常较接近 1（如 0.08-0.15），意味着波动率有 clustering 但最终会回归。

::::

### 2. GARCH(1,1) 参数估计与预测

#GARCH（1） #unconditional_variance #persistence #half-life #forecasting

**Question** 某股票日收益率的 GARCH(1,1) 估计结果为：

$$
\sigma_t^2 = 0.000015 + 0.08 u_{t-1}^2 + 0.90 \sigma_{t-1}^2.
$$

在 $t$ 时刻，观测到 $u_t^2 = 0.0004$，$\sigma_t^2 = 0.0001$。

**2.1** 计算无条件方差 $\bar\sigma^2$ 和无条件波动率（标准差）。

::::{solution}


**2.1 无条件方差**

$$
\begin{aligned}
\bar\sigma^2
&= \frac{\alpha_0}{1 - \alpha_1 - \beta_1} \\
&= \frac{0.000015}{1 - 0.08 - 0.90} \\
&= \frac{0.000015}{0.02} \\
&= 0.00075.
\end{aligned}
$$

无条件波动率：

$$
\bar\sigma = \sqrt{0.00075} \approx 0.0274 = 2.74\%.
$$

::::

**2.2** 计算持续性参数 $\phi = \alpha_1 + \beta_1$，并解释其经济含义。

::::{solution}

**2.2 持续性参数**

$$
\phi = \alpha_1 + \beta_1 = 0.08 + 0.90 = 0.98.
$$

经济含义：
- $\phi = 0.98$ 非常接近 1，波动率高度持续
- 波动率冲击衰减缓慢，需要很长时间才能回归均值
- 高持续性意味着"今天高波动 → 明天也可能高波动"

::::

**2.3** 计算波动率冲击的半衰期（half-life）。

::::{solution}

**2.3 半衰期**

半衰期定义为冲击衰减至一半所需的期数：

$$
\phi^{h_{1/2}} = \frac{1}{2}
\quad\Longrightarrow\quad
h_{1/2} = \frac{\log(1/2)}{\log(\phi)} = \frac{-0.693}{\log(0.98)}.
$$

计算：

$$
\log(0.98) \approx -0.0202
\quad\Longrightarrow\quad
h_{1/2} = \frac{-0.693}{-0.0202} \approx 34.3 \text{ 天}.
$$

波动率冲击需要约 34 个交易日才能衰减一半。

::::

**2.4** 预测未来 1 天、5 天和 20 天的条件方差 $E_t[\sigma_{t+h}^2]$。

::::{solution}

**2.4 条件方差预测**

首先计算 $E_t[\sigma_{t+1}^2]$：

$$
\begin{aligned}
E_t[\sigma_{t+1}^2]
&= \alpha_0 + \alpha_1 u_t^2 + \beta_1 \sigma_t^2 \\
&= 0.000015 + 0.08 \times 0.0004 + 0.90 \times 0.0001 \\
&= 0.000015 + 0.000032 + 0.00009 \\
&= 0.000137.
\end{aligned}
$$

使用预测公式：

$$
E_t[\sigma_{t+h}^2] = \bar\sigma^2 + \phi^{h-1}(E_t[\sigma_{t+1}^2] - \bar\sigma^2).
$$

- **1 天后**（$h=1$）：
  $$E_t[\sigma_{t+1}^2] = 0.000137.$$

- **5 天后**（$h=5$）：
  $$
  \begin{aligned}
  E_t[\sigma_{t+5}^2]
  &= 0.00075 + 0.98^4 \times (0.000137 - 0.00075) \\
  &= 0.00075 + 0.9224 \times (-0.000613) \\
  &= 0.00075 - 0.000565 \\
  &\approx 0.000185.
  \end{aligned}
  $$

- **20 天后**（$h=20$）：
  $$
  \begin{aligned}
  E_t[\sigma_{t+20}^2]
  &= 0.00075 + 0.98^{19} \times (0.000137 - 0.00075) \\
  &= 0.00075 + 0.6812 \times (-0.000613) \\
  &\approx 0.000332.
  \end{aligned}
  $$

注意到条件方差逐渐向无条件方差 $\bar\sigma^2 = 0.00075$ 回归，但由于高持续性，回归速度较慢。

::::

**2.5** 将 GARCH(1,1) 表示为 infinite ARCH 形式。

::::{solution}

**2.5 Infinite ARCH 表示**

递归代入 $\sigma_{t-1}^2$：

$$
\begin{aligned}
\sigma_t^2
&= \alpha_0 + \alpha_1 u_{t-1}^2 + \beta_1 \sigma_{t-1}^2 \\
&= \alpha_0 + \alpha_1 u_{t-1}^2 + \beta_1(\alpha_0 + \alpha_1 u_{t-2}^2 + \beta_1 \sigma_{t-2}^2) \\
&= \alpha_0(1 + \beta_1) + \alpha_1 u_{t-1}^2 + \alpha_1 \beta_1 u_{t-2}^2 + \beta_1^2 \sigma_{t-2}^2 \\
&= \alpha_0(1 + \beta_1 + \beta_1^2 + \cdots) + \alpha_1(u_{t-1}^2 + \beta_1 u_{t-2}^2 + \beta_1^2 u_{t-3}^2 + \cdots) \\
&= \frac{\alpha_0}{1 - \beta_1} + \alpha_1 \sum_{j=1}^{\infty} \beta_1^{j-1} u_{t-j}^2.
\end{aligned}
$$

GARCH(1,1) 是带几何衰减权重的 ARCH($\infty$)，权重为 $\alpha_1 \beta_1^{j-1}$。

::::


---

## Part 2: SDF 与 Asset Pricing Puzzles

### 3. Consumption SDF, Puzzles, and an Extra Factor

**Question** Consider a representative-agent consumption-based asset pricing model. For any asset $i$, the stochastic discount factor (SDF) satisfies
$$
E_t[M_{t+1}R_{i,t+1}]=1.
$$
Suppose first that preferences are power utility, so that

$$
M_{t+1}
=\beta\left(\frac{C_{t+1}}{C_t}\right)^{-\gamma}.
$$
Let
$$
\Delta c_{t+1}=\log C_{t+1}-\log C_t,\qquad
m_{t+1}=\log M_{t+1},\qquad
r_{i,t+1}=\log R_{i,t+1},\qquad
\delta=-\log\beta.
$$

Assume the relevant log variables are conditionally jointly normal.

**1.1 SDF 给定时，推导 risk premium expression。**

Derive the covariance representation of expected returns from the SDF Euler equation. Then specialize it to the power-utility SDF and derive

$$
\log E_t[R_{i,t+1}]-r_{f,t}
=
\gamma\operatorname{Cov}_t(\Delta c_{t+1},r_{i,t+1}).
$$

::::{solution}

先从一般 SDF 定价式出发：

$$
\left\{
\begin{aligned}
E_t[M_{t+1}R_{i,t+1}]&=1,\\
R_{f,t}&=\frac{1}{E_t[M_{t+1}]}.
\end{aligned}
\right.
$$
连续展开 covariance：
$$
\begin{aligned}
1
&=E_t[M_{t+1}R_{i,t+1}]\\
&=E_t[M_{t+1}]E_t[R_{i,t+1}]
+\operatorname{Cov}_t(M_{t+1},R_{i,t+1})\\
&=\frac{1}{R_{f,t}}E_t[R_{i,t+1}]
+\operatorname{Cov}_t(M_{t+1},R_{i,t+1})\\
\Longleftrightarrow\quad
R_{f,t}
&=E_t[R_{i,t+1}]
+R_{f,t}\operatorname{Cov}_t(M_{t+1},R_{i,t+1})\\
\Longleftrightarrow\quad
E_t[R_{i,t+1}]-R_{f,t}
&=
-R_{f,t}\operatorname{Cov}_t(M_{t+1},R_{i,t+1}).
\end{aligned}
$$
所以 risk premium 由 asset return 与 SDF 的 covariance 决定：
$$
\begin{aligned}
\text{high expected return}
&\Longleftrightarrow
\operatorname{Cov}_t(M_{t+1},R_{i,t+1})<0.
\end{aligned}
$$
再用 lognormal approximation。由
$$
\begin{aligned}
E_t[e^{m_{t+1}+r_{i,t+1}}]&=1,\\
E_t[e^{m_{t+1}+r_{f,t}}]&=1,
\end{aligned}
$$
且若 $x$ conditionally normal，则
$$
\log E_t[e^x]=E_t[x]+\frac12\operatorname{Var}_t(x).
$$
风险资产：
$$
\begin{aligned}
0
&=\log E_t[e^{m_{t+1}+r_{i,t+1}}]\\
&=E_t[m_{t+1}]
+E_t[r_{i,t+1}]
+\frac12\operatorname{Var}_t(m_{t+1})
+\frac12\operatorname{Var}_t(r_{i,t+1})
+\operatorname{Cov}_t(m_{t+1},r_{i,t+1}).
\end{aligned}
$$
无风险资产：
$$
\begin{aligned}
0
&=\log E_t[e^{m_{t+1}+r_{f,t}}]\\
&=E_t[m_{t+1}]
+r_{f,t}
+\frac12\operatorname{Var}_t(m_{t+1}).
\end{aligned}
$$
两式相减：
$$
\begin{aligned}
E_t[r_{i,t+1}]
+\frac12\operatorname{Var}_t(r_{i,t+1})
-r_{f,t}
&=
-\operatorname{Cov}_t(m_{t+1},r_{i,t+1})\\
\Longleftrightarrow\quad
\log E_t[R_{i,t+1}]-r_{f,t}
&=
-\operatorname{Cov}_t(m_{t+1},r_{i,t+1}).
\end{aligned}
$$
Power utility gives
$$
\begin{aligned}
m_{t+1}
&=\log\beta-\gamma\Delta c_{t+1}\\
&=-\delta-\gamma\Delta c_{t+1}.
\end{aligned}
$$
因此
$$
\begin{aligned}
\log E_t[R_{i,t+1}]-r_{f,t}
&=-\operatorname{Cov}_t(-\delta-\gamma\Delta c_{t+1},r_{i,t+1})\\
&=\gamma\operatorname{Cov}_t(\Delta c_{t+1},r_{i,t+1}).
\end{aligned}
$$
同一个 SDF 还给出 risk-free rate：
$$
\begin{aligned}
0
&=E_t[m_{t+1}]+r_{f,t}
+\frac12\operatorname{Var}_t(m_{t+1})\\
&=-\delta-\gamma E_t[\Delta c_{t+1}]
+r_{f,t}
+\frac12\gamma^2\operatorname{Var}_t(\Delta c_{t+1})\\
\Longleftrightarrow\quad
r_{f,t}
&=
\delta+\gamma E_t[\Delta c_{t+1}]
-\frac12\gamma^2\operatorname{Var}_t(\Delta c_{t+1}).
\end{aligned}
$$

::::

**1.2 用这个式子解释 equity premium puzzle 和 risk-free rate puzzle。**

::::{solution}

由 risk premium formula：

$$
\begin{aligned}
\log E_t[R_{i,t+1}]-r_{f,t}
&=
\gamma\operatorname{Cov}_t(\Delta c_{t+1},r_{i,t+1}).
\end{aligned}
$$
如果股票是 market equity，则 observed equity premium 很大，但 data 中 consumption growth 的波动很小，且与 stock return 的 covariance 很小：
$$
\begin{aligned}
\underbrace{\log E[R_m]-r_f}_{\text{large in data}}
&=
\gamma
\underbrace{\operatorname{Cov}(\Delta c,r_m)}_{\text{small in data}}.
\end{aligned}
$$
所以要匹配大的 equity premium，只能让
$$
\begin{aligned}
\gamma
&=
\frac{\log E[R_m]-r_f}{\operatorname{Cov}(\Delta c,r_m)}
\end{aligned}
$$
变得非常大。这就是 equity premium puzzle：standard consumption SDF 太平滑，或者说 consumption risk 太小，无法用合理的 risk aversion 解释高 Sharpe ratio。HJ bound 的同一说法是：
$$
\begin{aligned}
\frac{\sigma(M)}{E[M]}
&\ge
\frac{|E[R^e]|}{\sigma(R^e)}.
\end{aligned}
$$
Observed Sharpe ratio 高，要求 SDF 足够 volatile；但
$$
\begin{aligned}
m_{t+1}
&=-\delta-\gamma\Delta c_{t+1}
\end{aligned}
$$

在 consumption growth 很平滑时不够 volatile，除非 $\gamma$ 很大。

Risk-free rate puzzle 来自同一个 $\gamma$ 同时进入 $r_f$：

$$
\begin{aligned}
r_{f,t}
&=
\delta+\gamma E_t[\Delta c_{t+1}]
-\frac12\gamma^2\operatorname{Var}_t(\Delta c_{t+1}).
\end{aligned}
$$

因此模型想用高 $\gamma$ 解释 equity premium 时，会同时强烈改变 risk-free rate。经验上 real risk-free rate 很低且平滑；但 standard power-utility model 要么用合理 $\gamma$ 得不到 equity premium，要么用极高 $\gamma$ 后需要很不自然的 $\beta$ / $\delta$ 或 precautionary saving 项来匹配低 $r_f$。

核心矛盾可以压缩为：

$$
\begin{aligned}
\text{High equity premium}
&\Longrightarrow
\text{need volatile SDF},\\
\text{Power-utility SDF}
&\Longrightarrow
\sigma(m)=\gamma\sigma(\Delta c),\\
\sigma(\Delta c)\text{ small}
&\Longrightarrow
\gamma\text{ must be too large},\\
\gamma\text{ too large}
&\Longrightarrow
r_f\text{ becomes hard to match}.
\end{aligned}
$$

::::

**1.3 在 SDF 中加入一个因子。它如何帮助解决这两个 puzzle？**

Suppose the log SDF is augmented by an extra priced factor $x_{t+1}$:

$$
m_{t+1}
=
-\delta-\gamma\Delta c_{t+1}-\eta x_{t+1}.
$$

Derive the new risk premium and risk-free rate expressions. Explain how this extra factor can help with the two puzzles.

::::{solution}

继续使用 lognormal pricing formula：

$$
\begin{aligned}
\log E_t[R_{i,t+1}]-r_{f,t}
&=
-\operatorname{Cov}_t(m_{t+1},r_{i,t+1}).
\end{aligned}
$$
代入 augmented SDF：
$$
\begin{aligned}
\log E_t[R_{i,t+1}]-r_{f,t}
&=
-\operatorname{Cov}_t(
-\delta-\gamma\Delta c_{t+1}-\eta x_{t+1},
r_{i,t+1})\\
&=
\gamma\operatorname{Cov}_t(\Delta c_{t+1},r_{i,t+1})
+\eta\operatorname{Cov}_t(x_{t+1},r_{i,t+1}).
\end{aligned}
$$
因此新因子给 risk premium 增加一项：
$$
\begin{aligned}
\text{risk premium}
&=
\underbrace{\gamma\operatorname{Cov}_t(\Delta c_{t+1},r_{i,t+1})}_{\text{consumption risk}}
+
\underbrace{\eta\operatorname{Cov}_t(x_{t+1},r_{i,t+1})}_{\text{extra priced factor risk}}.
\end{aligned}
$$
Risk-free rate 由
$$
\begin{aligned}
0
&=E_t[m_{t+1}]+r_{f,t}
+\frac12\operatorname{Var}_t(m_{t+1})
\end{aligned}
$$
给出：
$$
\begin{aligned}
r_{f,t}
&=
-E_t[m_{t+1}]
-\frac12\operatorname{Var}_t(m_{t+1})\\
&=
\delta+\gamma E_t[\Delta c_{t+1}]+\eta E_t[x_{t+1}]
-\frac12\operatorname{Var}_t(\gamma\Delta c_{t+1}+\eta x_{t+1})\\
&=
\delta+\gamma E_t[\Delta c_{t+1}]+\eta E_t[x_{t+1}]\\
&\quad
-\frac12\gamma^2\operatorname{Var}_t(\Delta c_{t+1})
-\frac12\eta^2\operatorname{Var}_t(x_{t+1})
-\gamma\eta\operatorname{Cov}_t(\Delta c_{t+1},x_{t+1}).
\end{aligned}
$$
这个因子能帮助解决 puzzle 的条件是：$x_{t+1}$ 是 priced bad-state factor。也就是它让 SDF 在坏状态更高，并且股票在这些状态回报低。形式上：
$$
\begin{aligned}
\eta\operatorname{Cov}(x,r_m)>0
&\Longrightarrow
\text{extra factor raises equity premium},\\
\operatorname{Var}(\gamma\Delta c+\eta x)\uparrow
&\Longrightarrow
\text{SDF volatility rises and HJ bound easier to satisfy}.
\end{aligned}
$$

因此不用把所有 risk premium 都压在 $\gamma\operatorname{Cov}(\Delta c,r_m)$ 上。即使 consumption growth 本身很平滑，只要 $x$ 与 market return 的 covariance 足够强，模型也可以产生大的 equity premium。

同时，$x$ 进入 risk-free rate 的 variance / precautionary saving 项：

$$
\begin{aligned}
-\frac12\eta^2\operatorname{Var}(x)
-\gamma\eta\operatorname{Cov}(\Delta c,x)
\end{aligned}
$$
可以压低 $r_f$，从而缓解 risk-free rate puzzle。经验资产定价里，$x$ 可以理解为 omitted priced factor，例如 long-run consumption risk、habit / surplus consumption、volatility risk、intermediary constraint 或其他 aggregate bad-state variable。加入它的本质不是“多一个回归变量”，而是让 SDF 更接近能定价资产的 admissible SDF：
$$
\begin{aligned}
\text{consumption-only SDF too smooth}
&\Longrightarrow
\text{large pricing errors / HJ bound tension},\\
\text{augmented SDF}
&\Longrightarrow
\text{more SDF volatility + extra covariance with returns}.
\end{aligned}
$$

::::

## 2. Beta Representation and Linear SDF Equivalence

**Question** Let $R_i^e$ be excess returns for test assets $i=1,\ldots,N$. Let $f$ be a $K\times 1$ vector of factors with nonsingular covariance matrix
$$
\Sigma_f=\operatorname{Var}(f).
$$
Define factor beta by

$$
\beta_i
=
\operatorname{Cov}(R_i^e,f)\Sigma_f^{-1}.
$$
Prove the equivalence between beta representation and linear SDF:
$$
\begin{aligned}
\text{Beta representation:}\quad
E[R_i^e]&=\beta_i\lambda,\\
\text{Linear SDF:}\quad
M&=a-b'f,\qquad E[MR_i^e]=0.
\end{aligned}
$$

You should prove both sufficiency and necessity.

::::{solution}

先统一维度。这里把 $\beta_i$ 写成 $1\times K$ row vector，$\lambda$ 是 $K\times 1$ vector，所以 $E[R_i^e]=\beta_i\lambda$ 是 scalar。

**2.1 Sufficiency: linear SDF implies beta representation**

假设存在 linear SDF：

$$
\begin{aligned}
M&=a-b'f,\\
E[MR_i^e]&=0,\qquad i=1,\ldots,N.
\end{aligned}
$$
从 Euler moment 出发：
$$
\begin{aligned}
0
&=E[(a-b'f)R_i^e]\\
&=aE[R_i^e]-b'E[fR_i^e]\\
&=aE[R_i^e]
-b'\left(E[f]E[R_i^e]+\operatorname{Cov}(f,R_i^e)\right)\\
&=\left(a-b'E[f]\right)E[R_i^e]
-b'\operatorname{Cov}(f,R_i^e).
\end{aligned}
$$
因此
$$
\begin{aligned}
\left(a-b'E[f]\right)E[R_i^e]
&=
b'\operatorname{Cov}(f,R_i^e)\\
&=
\operatorname{Cov}(R_i^e,f)b.
\end{aligned}
$$
若 $a-b'E[f]\neq0$，则
$$
\begin{aligned}
E[R_i^e]
&=
\operatorname{Cov}(R_i^e,f)
\frac{b}{a-b'E[f]}\\
&=
\operatorname{Cov}(R_i^e,f)\Sigma_f^{-1}
\left(\Sigma_f\frac{b}{a-b'E[f]}\right)\\
&=
\beta_i
\underbrace{\Sigma_f\frac{b}{a-b'E[f]}}_{\lambda}.
\end{aligned}
$$
所以
$$
\begin{aligned}
E[R_i^e]
&=\beta_i\lambda.
\end{aligned}
$$
这证明了：
$$
\begin{aligned}
\exists M=a-b'f\ \text{prices all }R_i^e
&\Longrightarrow
\exists\lambda\ \text{such that }E[R_i^e]=\beta_i\lambda.
\end{aligned}
$$

**2.2 Necessity: beta representation implies a linear SDF**

反过来，假设 beta representation 成立：

$$
\begin{aligned}
E[R_i^e]
&=\beta_i\lambda\\
&=\operatorname{Cov}(R_i^e,f)\Sigma_f^{-1}\lambda,
\qquad i=1,\ldots,N.
\end{aligned}
$$
要构造一个 linear SDF $M=a-b'f$，使得
$$
\begin{aligned}
E[MR_i^e]&=0.
\end{aligned}
$$
令 $c\neq0$ 为任意常数，并设
$$
\begin{aligned}
b&=c\Sigma_f^{-1}\lambda,\\
a&=c+b'E[f].
\end{aligned}
$$
则
$$
\begin{aligned}
a-b'E[f]
&=c.
\end{aligned}
$$
现在验证 pricing equation：
$$
\begin{aligned}
E[MR_i^e]
&=E[(a-b'f)R_i^e]\\
&=\left(a-b'E[f]\right)E[R_i^e]
-b'\operatorname{Cov}(f,R_i^e)\\
&=cE[R_i^e]
-\left(c\Sigma_f^{-1}\lambda\right)'\operatorname{Cov}(f,R_i^e)\\
&=cE[R_i^e]
-c\lambda'\Sigma_f^{-1}\operatorname{Cov}(f,R_i^e)\\
&=cE[R_i^e]
-c\operatorname{Cov}(R_i^e,f)\Sigma_f^{-1}\lambda\\
&=cE[R_i^e]-cE[R_i^e]\\
&=0.
\end{aligned}
$$
所以
$$
\begin{aligned}
E[R_i^e]=\beta_i\lambda\ \text{for all }i
&\Longrightarrow
\exists M=a-b'f\ \text{such that }E[MR_i^e]=0\ \text{for all }i.
\end{aligned}
$$

两边合并：

$$
\begin{aligned}
\text{Linear SDF }M=a-b'f
\Longleftrightarrow
\text{beta representation }E[R_i^e]=\beta_i\lambda.
\end{aligned}
$$
其中
$$
\begin{aligned}
\beta_i
&=\operatorname{Cov}(R_i^e,f)\Sigma_f^{-1},\\
\lambda
&=\Sigma_f\frac{b}{a-b'E[f]}.
\end{aligned}
$$
经济含义：
$$
\begin{aligned}
\text{SDF representation}
&\Longleftrightarrow
\text{which states are valuable},\\
\text{beta representation}
&\Longleftrightarrow
\text{how each asset loads on those priced factor states}.
\end{aligned}
$$

所以 beta pricing 不是独立于 SDF 的新假设；它是 linear SDF 定价限制在 excess returns 上的横截面写法。

::::

---

### 3. VIX 与 Variance Risk Premium 计算

#VIX #static_replication #variance #risk_premium

**Question** 考虑 VIX 的构造和 variance risk premium (VRP)。

**3.1** 解释 Carr-Madan 公式如何将 log payoff 表示为 OTM puts 和 calls 的组合。

::::{solution}


**3.1 Carr-Madan 公式**

对 log payoff $g(S) = -2\log S$，二阶导数 $g''(K) = 2/K^2$。

Carr-Madan 分解给出：

$$
-2\log\frac{S_T}{S_0} = \int_0^{S_0} \frac{2}{K^2}(K - S_T)^+ dK + \int_{S_0}^{\infty} \frac{2}{K^2}(S_T - K)^+ dK.
$$

log contract 可用 OTM puts 和 calls 的连续谱复制，权重 $2/K^2$ 来自 log function 的凸性。

::::

**3.2** VIX 指数当前为 20（年化百分比）。计算隐含方差 $IV_t$（假设 30 天到期）。

::::{solution}

**3.2 隐含方差**

VIX = 20% 年化。30 天的隐含方差：

$$
IV_t = \left(\frac{0.20^2}{252}\right) \times 30 = \frac{0.04}{252} \times 30 \approx 0.00476.
$$

::::

**3.3** 假设预测未来 30 天的 realized variance 期望为 $E_t^P[RV] = 0.0003$（日频方差）。计算 variance risk premium (VRP)。

::::{solution}

**3.3 VRP 计算**

$$
VRP_t = IV_t - E_t^P[RV] \times 30 = 0.00476 - 0.0003 \times 30 = 0.00476 - 0.009 = -0.00424.
$$

（注：通常实证中 $VRP_t > 0$，此例为负是因为预测 RV 过高）

::::

**3.4** 解释 $VRP_t > 0$ 的经济含义。

::::{solution}

**3.4 经济含义**

$VRP_t > 0$ 意味着：
- 投资者为对冲波动率上升支付溢价
- 风险中性测度下期望方差高于物理测度
- 卖出 variance insurance 平均获得正收益
- 金融危机时 VRP 上升

::::



---

### 4. Hansen-Jagannathan Bound 应用

#HJ_bound #SDF #volatility #Sharpe_ratio

**Question**

**4.1** 从 $E[MR^e] = 0$ 推导 HJ bound：$\frac{\sigma(M)}{E[M]} \ge \frac{|E[R^e]|}{\sigma(R^e)}$。

::::{solution}


**4.1 推导**

$$
\begin{aligned}
0 = E[MR^e] &= E[M]E[R^e] + \operatorname{Cov}(M, R^e) \\
\Longrightarrow |E[M]E[R^e]| &= |\operatorname{Cov}(M, R^e)| \le \sigma(M)\sigma(R^e) \\
\Longrightarrow \frac{|E[R^e]|}{\sigma(R^e)} &\le \frac{\sigma(M)}{E[M]}.
\end{aligned}
$$

::::

**4.2** 市场 Sharpe ratio = 0.40，无风险利率 = 2%。计算 SDF 的最小 coefficient of variation。

::::{solution}

**4.2 最小 CV**

$$
\frac{\sigma(M)}{E[M]} \ge 0.40.
$$

::::

**4.3** Consumption-based SDF：$M_{t+1} = \beta(C_{t+1}/C_t)^{-\gamma}$，$\beta = 0.98$，$E[\Delta c] = 2\%$，$\sigma(\Delta c) = 1\%$。

使用 log-normal approximation，计算该 SDF 的 CV 作为 $\gamma$ 的函数。

::::{solution}

**4.3 Consumption SDF 的 CV**

Log SDF：$m = \log\beta - \gamma\Delta c$，所以 $\sigma(m) = \gamma\sigma(\Delta c) = 0.01\gamma$。

对 log-normal $M = e^m$：

$$
\frac{\sigma(M)}{E[M]} \approx \sigma(m) = 0.01\gamma.
$$

::::

**4.4** 为满足 HJ bound，$\gamma$ 需要多大？这说明了什么问题？

::::{solution}

**4.4 所需 $\gamma$**

$$
0.01\gamma \ge 0.40 \quad\Longrightarrow\quad \gamma \ge 40.
$$

需要 $\gamma \ge 40$，远高于合理范围（1-10），这就是 **equity premium puzzle**：consumption 太平滑，无法用合理风险厌恶解释高 Sharpe ratio。

::::



---

### 5. Predictive Regression 与 Stambaugh Bias

#Predictive_regression #Stambaugh_bias #persistent #regressor

**Question** 考虑预测回归系统：

$$
\begin{aligned}
r_{t+1} &= \alpha + \beta x_t + \varepsilon_{t+1}, \\
x_{t+1} &= \theta + \rho x_t + \nu_{t+1}.
\end{aligned}
$$

其中 $x_t$ 是预测变量（如 dividend-price ratio），$\operatorname{Cov}(\varepsilon, \nu) \ne 0$。

**5.1** 解释为什么 OLS 估计量 $\hat\beta$ 会有偏。

::::{solution}


**5.1 Bias 来源**

两个因素导致 bias：

1. **Persistent regressor**：$\rho$ 接近 1 时，$\hat\rho$ 有 downward Kendall bias
2. **Correlated innovations**：$\operatorname{Cov}(\varepsilon, \nu) \ne 0$ 导致 $x_t$ 与 $\varepsilon_{t+1}$ 相关

OLS 假设 regressor 严格外生，但 $x_t$ 的 innovation $\nu_t$ 与 $\varepsilon_t$ 同期相关，打破外生性。

::::

**5.2** 推导 Stambaugh bias 公式：

$$
E(\hat\beta - \beta) \approx -\frac{\operatorname{Cov}(\varepsilon, \nu)}{\operatorname{Var}(\nu)} \frac{1 + 3\rho}{T}.
$$

::::{solution}

**5.2 Stambaugh Bias 推导**

从 OLS 估计量的 bias 分解：

$$
E(\hat\beta - \beta) = \frac{\operatorname{Cov}(\varepsilon, \nu)}{\operatorname{Var}(\nu)} E(\hat\rho - \rho).
$$

Kendall bias 给出：

$$
E(\hat\rho - \rho) \approx -\frac{1 + 3\rho}{T}.
$$

结合：

$$
E(\hat\beta - \beta) \approx -\frac{\operatorname{Cov}(\varepsilon, \nu)}{\operatorname{Var}(\nu)} \frac{1 + 3\rho}{T}.
$$

::::

**5.3** 假设：
- $\rho = 0.95$（高度持续）
- $\operatorname{Cov}(\varepsilon, \nu) = -0.0001$（return 高时 $x$ 下降）
- $\operatorname{Var}(\nu) = 0.0005$
- 样本量 $T = 100$

计算 bias $E(\hat\beta - \beta)$。

::::{solution}

**5.3 Bias 计算**

$$
\begin{aligned}
E(\hat\beta - \beta)
&\approx -\frac{-0.0001}{0.0005} \times \frac{1 + 3 \times 0.95}{100} \\
&= 0.2 \times \frac{1 + 2.85}{100} \\
&= 0.2 \times \frac{3.85}{100} \\
&= 0.2 \times 0.0385 \\
&= 0.0077.
\end{aligned}
$$

$\hat\beta$ 向上偏约 0.0077。

::::

**5.4** 如果忽略 Stambaugh bias，在零假设 $\beta = 0$ 下进行 t-test，会出现什么问题？

::::{solution}

**5.4 T-test 问题**

如果 $\beta = 0$（真实无 predictability），但：

$$
E[\hat\beta] \approx 0.0077 > 0.
$$

标准 t-test 会：
- **高估 predictability**：即使真实 $\beta = 0$，样本中容易得到显著正的 $\hat\beta$
- **Type I error rate过高**：拒绝零假设的概率超过名义水平（如 5%）
- **需要 bias correction**：bootstrap 或 Bonferroni Q-test

经济直觉：
- $\operatorname{Cov}(\varepsilon, \nu) < 0$：return 高时 price 上涨，$x_t$ (如 D/P) 下降
- Bias 为正：$\hat\beta$ 高估了 $x_t$ 对未来 return 的预测力
- 高持续性 $\rho$ 放大 bias

::::



---

### 6. Fama-MacBeth 两步回归

#Fama-MacBeth #two-pass_regression #Shanken_correction

**Question** 考虑用单因子模型（如 CAPM）定价 $N = 25$ 个资产组合。

**第一步（时间序列回归）**：对每个资产 $i$，估计 beta：

$$
R_{i,t}^e = a_i + \beta_i f_t + \varepsilon_{i,t}.
$$

得到 $\hat\beta_i$。

**第二步（横截面回归）**：用平均收益对 beta 回归：

$$
\bar R_i^e = \hat\beta_i \lambda + \alpha_i.
$$

**6.1** 假设第一步得到的 beta 估计为：

$$
\hat\beta = (0.8, 0.9, 1.0, 1.1, 1.2)^\top.
$$

平均 excess returns 为：

$$
\bar R^e = (0.04, 0.05, 0.06, 0.07, 0.08)^\top.
$$

计算第二步的 OLS 估计量 $\hat\lambda$。

::::{solution}


**6.1 计算 $\hat\lambda$**

第二步 OLS：

$$
\hat\lambda = \frac{\sum_i \hat\beta_i \bar R_i^e}{\sum_i \hat\beta_i^2}.
$$

分子：

$$
\sum_i \hat\beta_i \bar R_i^e = 0.8 \times 0.04 + 0.9 \times 0.05 + 1.0 \times 0.06 + 1.1 \times 0.07 + 1.2 \times 0.08 = 0.324.
$$

分母：

$$
\sum_i \hat\beta_i^2 = 0.8^2 + 0.9^2 + 1.0^2 + 1.1^2 + 1.2^2 = 5.1.
$$

因此：

$$
\hat\lambda = \frac{0.324}{5.1} \approx 0.0635 = 6.35\%.
$$

::::

**6.2** 解释为什么标准的第二步 OLS 标准误会低估真实不确定性。

::::{solution}

**6.2 标准误低估的原因**

第二步把 $\hat\beta_i$ 当作**真实值**，但实际上 $\hat\beta_i$ 是第一步的估计量，包含 estimation error。

忽略 beta estimation error 导致：
- 标准误过小
- t-statistics 过大
- 显著性水平虚高（over-rejection）

Shanken (1992) 证明正确的标准误应该考虑两步的联合不确定性。

::::

**6.3** Shanken correction 将标准误乘以因子：

$$
\sqrt{1 + \frac{\hat\lambda^2}{\sigma_f^2}}.
$$

假设因子方差 $\sigma_f^2 = 0.01$，计算 correction factor。

::::{solution}

**6.3 Shanken Correction**

Correction factor：

$$
\sqrt{1 + \frac{\hat\lambda^2}{\sigma_f^2}} = \sqrt{1 + \frac{0.0635^2}{0.01}} = \sqrt{1 + \frac{0.00403}{0.01}} = \sqrt{1 + 0.403} = \sqrt{1.403} \approx 1.184.
$$

修正后的标准误是原标准误的 1.184 倍，约增加 18.4%。

::::

**6.4** 讨论 Fama-MacBeth 方法相对于 GMM 的优缺点。

::::{solution}

**6.4 Fama-MacBeth vs GMM**

**Fama-MacBeth 优点**：
- 直观易懂：两步分别估计 beta 和 risk premium
- 计算简单：不需要迭代优化
- 便于展示：可以画 security market line 图

**Fama-MacBeth 缺点**：
- 标准误需要 Shanken correction
- 效率较低（two-step 不如 joint estimation）
- 难以处理条件信息

**GMM 优点**：
- 统一框架：joint estimation 更有效
- 正确的标准误（考虑所有参数联合不确定性）
- Overidentification test (J-test)
- 可以加入 conditioning information

**GMM 缺点**：
- 需要选择 weighting matrix
- 计算复杂（迭代优化）
- 结果对 weighting matrix 敏感

实践中：Fama-MacBeth 常用于展示；GMM 用于正式检验。

::::



---

### 7. Factor Zoo 与 Multiple Testing

#Multiple_testing #false_discovery #factor_zoo

**Question**

**7.1** 假设研究者测试 $M = 100$ 个独立的因子，每个在显著性水平 $\alpha = 0.05$ 下检验。计算至少出现一个假发现（Type I error）的概率。

::::{solution}


**7.1 至少一个假发现的概率**

假设 $M$ 个独立零假设，每个在水平 $\alpha$ 下检验。

至少一个假发现的概率（familywise error rate）：

$$
P(\text{至少一个假发现}) = 1 - (1 - \alpha)^M.
$$

代入 $M = 100$，$\alpha = 0.05$：

$$
P = 1 - (1 - 0.05)^{100} = 1 - 0.95^{100} \approx 1 - 0.0059 \approx 0.9941 = 99.41\%.
$$

几乎必然出现至少一个假发现！

::::

**7.2** 解释为什么 factor zoo 中许多"anomalies"可能是假发现。

::::{solution}

**7.2 Factor Zoo 的问题**

学术界已发现数百个 anomaly 因子（value, momentum, profitability, investment, ...）。

问题：
1. **Data mining**：研究者尝试无数变量，直到找到"显著"的
2. **Publication bias**：显著结果更容易发表，零结果被抽屉
3. **非独立检验**：许多因子高度相关，实际有效检验数 << 名义检验数
4. **In-sample overfitting**：在同一样本反复测试

结果：许多"发现"在样本外失效。

::::

**7.3** 列举至少 3 种应对 factor zoo 问题的方法。

::::{solution}

**7.3 应对方法**

1. **提高检验标准**：
   - 使用更高 t-stat 阈值（如 $|t| > 3$ 而非 1.96）
   - Bonferroni correction 或 FDR (false discovery rate) 控制

2. **Out-of-sample 检验**：
   - 新时间段验证
   - 不同市场验证（国际市场）
   - 真实因子应该样本外依然有效

3. **控制已知因子**：
   - 新因子应在控制 Fama-French 等已知因子后依然显著
   - 避免"换个名字"的重复发现

4. **经济机制检验**：
   - 检查因子是否有合理的风险或行为解释
   - 考虑交易成本：许多异象扣除成本后消失

5. **稳健性检验**：
   - 跨子样本、跨构造方式
   - Bootstrap 或模拟检验

::::

**7.4** Bonferroni correction 将单个检验的显著性水平调整为 $\alpha/M$。如果 $M = 100$，$\alpha = 0.05$，计算调整后的临界 t-value（假设双侧检验）。

::::{solution}

**7.4 Bonferroni Correction**

调整后显著性水平：

$$
\alpha^* = \frac{\alpha}{M} = \frac{0.05}{100} = 0.0005.
$$

双侧检验，每侧 $\alpha^*/2 = 0.00025$。

查标准正态表，$P(|Z| > z^*) = 0.0005$，即 $P(Z > z^*) = 0.00025$：

$$
z^* \approx 3.48.
$$

调整后临界 t-value 约为 **3.48**（vs 标准的 1.96）。

门槛大幅提高，减少假发现，但也降低检验功效（power）。

::::



---

### 8. Limits to Arbitrage

#Limits_to_arbitrage #implementation_costs #risk

**Question**

**8.1** 假设发现一个 mispricing：某资产当前价格低估 5%，预期 6 个月后回归。解释为什么套利者可能无法完全消除这个 mispricing。

::::{solution}


**8.1 为什么套利受限**

即使发现明确的 mispricing，套利者面临：

1. **Noise trader risk**：mispricing 短期可能恶化（"市场可以保持非理性的时间长于你保持清偿的时间"）

2. **实施成本**：
   - Short-selling 成本（borrow fee, margin requirement）
   - 交易成本（bid-ask spread, market impact）
   - Holding costs（资金成本）

3. **不完美 hedging**：
   - 很难构造真正无风险的 long-short 组合
   - Fundamental risk 依然存在

4. **代理问题**：
   - 基金经理面临 redemption pressure
   - 短期业绩压力 → 无法持有到 mispricing 消失

::::

**8.2** 列举并解释至少 4 种 limits to arbitrage 的来源。

::::{solution}

**8.2 Limits to Arbitrage 的来源**

1. **Fundamental risk**：
   - 套利标的本身有风险
   - Hedging 不完美（找不到完美替代品）
   - 例：孪生股票（Royal Dutch/Shell）价差套利

2. **Noise trader risk**：
   - Mispricing 短期恶化风险
   - 被迫在最坏时刻平仓
   - 例：LTCM 1998 年危机

3. **Implementation costs**：
   - **Short-selling constraints**：
     - High borrow fee（借券费率）
     - Limited supply（可借券源有限）
     - Margin requirements（保证金要求）
   - **Transaction costs**：
     - Bid-ask spread
     - Market impact（大单冲击）
     - Taxes
   - **Holding costs**：
     - Funding cost（融资成本）
     - Opportunity cost

4. **Synchronization risk**：
   - 不确定何时 mispricing 消失
   - 持有期间的资金成本和机会成本

5. **Agency problems**：
   - 基金经理与投资者利益不一致
   - Redemption pressure（赎回压力）
   - 短期业绩考核 → 提前平仓
   - Example：对冲基金在 2008 年被迫平仓

6. **Model risk**：
   - "Mispricing" 可能是模型错误
   - 风险调整不充分

::::

**8.3** 考虑套利策略的期望收益：

$$
E[R] = p \cdot m - (1 - p) \cdot L,
$$

其中 $p$ 是成功概率，$m$ 是收益，$L$ 是损失。

假设 $p = 0.7$，$m = 0.10$（10% gain），$L = 0.30$（30% loss），可用资本 $K = 0.20$。

(a) 计算期望收益 $E[R]$
(b) 解释为什么即使 $E[R] > 0$，套利者可能不参与

::::{solution}

**8.3 套利策略分析**

(a) 期望收益：

$$
E[R] = 0.7 \times 0.10 - 0.3 \times 0.30 = 0.07 - 0.09 = -0.02 = -2\%.
$$

期望收益为负，不应参与。

（注：如果改为 $L = 0.15$，则 $E[R] = 0.07 - 0.045 = 0.025 > 0$）

(b) 即使 $E[R] > 0$，问题在于：

$$
L = 0.30 > K = 0.20.
$$

**最坏情况损失超过可用资本**！即使期望收益为正，套利者也会：
- 面临破产风险
- 无法承受最大损失
- Margin call 导致被迫平仓

这就是 limits to arbitrage 的核心：**套利需要资本，且资本有限**。

::::

**8.4** 讨论 limits to arbitrage 如何导致 behavioral biases 的影响被放大。

::::{solution}

**8.4 Behavioral Biases 的放大**

Limits to arbitrage 导致：

1. **Anomalies 持续存在**：
   - 理性套利者无法完全消除 mispricing
   - Behavioral biases（如 overconfidence, herding）的影响被放大

2. **价格偏离基本面**：
   - Noise traders 推动价格偏离
   - 套利力量不足以拉回
   - 例：互联网泡沫（1999-2000）

3. **反馈效应**：
   - 套利受限 → 价格偏离更大
   - 价格偏离更大 → 套利风险更高
   - 套利风险更高 → 套利资本撤出
   - **恶性循环**

4. **市场分割**：
   - Sophisticated investors vs noise traders
   - 两类投资者的相对力量决定价格
   - 危机时理性资本短缺 → behavioral forces 主导

经济含义：
- 市场有效性依赖于充足的套利资本
- 金融危机时套利资本枯竭 → 市场最不有效
- Behavioral finance 不仅需要 biases，还需要 limits to arbitrage

::::



---

### 9. Campbell-Shiller 分解与 Excess Volatility

#Campbell-Shiller_decomposition #variance_decomposition

**Question** 考虑 log price-dividend ratio $pd_t = p_t - d_t$。

**9.1** 从线性化的 return 公式出发：

$$
r_{t+1} \approx \kappa + \rho pd_{t+1} + \Delta d_{t+1} - pd_t,
$$

推导 Campbell-Shiller present-value identity：

$$
pd_t = \frac{\kappa}{1-\rho} + \sum_{j=1}^{\infty}\rho^{j-1}E_t[\Delta d_{t+j}] - \sum_{j=1}^{\infty}\rho^{j-1}E_t[r_{t+j}].
$$

::::{solution}


**9.1 推导**

从线性化 return 出发：

$$
r_{t+1} \approx \kappa + \rho pd_{t+1} + \Delta d_{t+1} - pd_t.
$$

改写：

$$
pd_t \approx \kappa + \rho pd_{t+1} + \Delta d_{t+1} - r_{t+1}.
$$

对 $t$ 条件取期望：

$$
pd_t = \kappa + \rho E_t[pd_{t+1}] + E_t[\Delta d_{t+1}] - E_t[r_{t+1}].
$$

继续向前迭代：

$$
\begin{aligned}
pd_t
&= \kappa + E_t[\Delta d_{t+1}] - E_t[r_{t+1}] \\
&\quad + \rho(\kappa + E_t[\Delta d_{t+2}] - E_t[r_{t+2}] + \rho E_t[pd_{t+2}]) \\
&= \kappa(1 + \rho) + E_t[\Delta d_{t+1}] + \rho E_t[\Delta d_{t+2}] \\
&\quad - E_t[r_{t+1}] - \rho E_t[r_{t+2}] + \rho^2 E_t[pd_{t+2}].
\end{aligned}
$$

继续迭代并施加 transversality condition：

$$
\lim_{J\to\infty}\rho^J E_t[pd_{t+J}] = 0.
$$

得到：

$$
\begin{aligned}
pd_t
&= \kappa\sum_{j=0}^{\infty}\rho^j + \sum_{j=1}^{\infty}\rho^{j-1}E_t[\Delta d_{t+j}] - \sum_{j=1}^{\infty}\rho^{j-1}E_t[r_{t+j}] \\
&= \frac{\kappa}{1-\rho} + \sum_{j=1}^{\infty}\rho^{j-1}E_t[\Delta d_{t+j}] - \sum_{j=1}^{\infty}\rho^{j-1}E_t[r_{t+j}].
\end{aligned}
$$

::::

**9.2** 假设 $\rho = 0.96$，$\kappa/(1-\rho) = 3.5$。在 $t$ 时刻：
- $E_t[\Delta d_{t+j}] = 0.02$ for all $j$ (constant dividend growth)
- $E_t[r_{t+j}] = 0.08$ for all $j$ (constant required return)

计算理论 price-dividend ratio $pd_t$。

::::{solution}

**9.2 数值计算**

常数项：

$$
\frac{\kappa}{1-\rho} = 3.5.
$$

Cash-flow term（constant growth）：

$$
\sum_{j=1}^{\infty}\rho^{j-1} \times 0.02 = 0.02 \sum_{j=1}^{\infty}\rho^{j-1} = 0.02 \times \frac{1}{1-\rho} = \frac{0.02}{1-0.96} = \frac{0.02}{0.04} = 0.5.
$$

Discount-rate term（constant required return）：

$$
\sum_{j=1}^{\infty}\rho^{j-1} \times 0.08 = 0.08 \times \frac{1}{1-\rho} = \frac{0.08}{0.04} = 2.0.
$$

因此：

$$
pd_t = 3.5 + 0.5 - 2.0 = 2.0.
$$

::::

**9.3** 如果观测到的 $pd_t = 3.2$（低于理论值），这意味着什么？

::::{solution}

**9.3 实际低于理论值**

观测 $pd_t = 3.2 > 2.0$（实际上这里应该是 $pd_t < 2.0$ 才是"低于"，假设题目想说 $pd_t = 1.5$）。

如果 $pd_t$ 低于理论值，可能原因：

1. **预期 dividend growth 下降**：
   $$\sum E_t[\Delta d_{t+j}] < 0.5$$

2. **预期 required return 上升**：
   $$\sum E_t[r_{t+j}] > 2.0$$

3. **Time-varying risk premium**：
   投资者要求更高补偿

4. **Investor sentiment**：
   悲观情绪压低估值

::::

**9.4** 将 $pd_t$ 的方差分解为 cash-flow news 和 discount-rate news 的贡献。解释 "excess volatility puzzle"。

::::{solution}

**9.4 方差分解与 Excess Volatility**

重写 Campbell-Shiller 恒等式为 news 形式：

$$
pd_t - E_{t-1}[pd_t] = \underbrace{\sum_{j=1}^{\infty}\rho^{j-1}(E_t - E_{t-1})[\Delta d_{t+j}]}_{\text{CF news}} - \underbrace{\sum_{j=1}^{\infty}\rho^{j-1}(E_t - E_{t-1})[r_{t+j}]}_{\text{DR news}}.
$$

方差分解：

$$
\operatorname{Var}(pd_t) = \operatorname{Var}(\text{CF news}) + \operatorname{Var}(\text{DR news}) - 2\operatorname{Cov}(\text{CF news}, \text{DR news}).
$$

**Excess Volatility Puzzle**：

实证发现：
- $pd_t$ 的波动**主要来自 discount-rate news**（而非 cash-flow news）
- Dividend 相对平滑，但 $pd_t$ 波动很大
- 意味着 required return 的预期变化很大

这与 rational expectations 难以调和：
- 如果 fundamentals (dividends) 平滑，为什么价格如此波动？
- 要么 risk premium 高度时变
- 要么存在 irrational exuberance / sentiment shocks

Shiller (1981) 的经典发现：股价波动远超 dividends 的现值波动所能解释。

::::



---

### 10. GMM Estimation 与 J-Test

#GMM_estimation #overidentification_test #optimal_weighting

**Question** 考虑用单因子模型定价 $N = 3$ 个资产组合。

因子 $f_t$，资产 excess returns $R_{i,t}^e$。矩条件：

$$
E[g_t(\theta)] = 0,\qquad g_t(\theta) = M_t(\theta) R_t^e,
$$

其中 SDF $M_t(\theta) = 1 - \lambda f_t$，$\theta = \lambda$。

**10.1** 写出 GMM 目标函数。解释 weighting matrix $W$ 的作用。

::::{solution}


**10.1 GMM 目标函数**

GMM 估计量定义为：

$$
\hat\theta = \arg\min_\theta \bar g_T(\theta)' W_T \bar g_T(\theta),
$$

其中：
- $\bar g_T(\theta) = \frac{1}{T}\sum_{t=1}^T g_t(\theta)$ 是样本矩
- $W_T$ 是 weighting matrix

**Weighting matrix 的作用**：

1. **度量偏离的"严重程度"**：
   - 不同矩条件可能有不同尺度
   - $W$ 决定如何权衡各个矩条件的偏离

2. **效率**：
   - 最优 $W = S^{-1}$（矩条件协方差的逆）
   - 使估计量达到 asymptotic efficiency

3. **常见选择**：
   - Identity: $W = I$（简单但低效）
   - Two-step: 先用 $W = I$ 估计 $\tilde\theta$，再用 $\hat S(\tilde\theta)^{-1}$
   - Iterated GMM: 反复更新直至收敛

::::

**10.2** 假设样本矩为：

$$
\bar g_T(\lambda) = \begin{pmatrix} 0.02 - 0.5\lambda \\ 0.04 - 0.8\lambda \\ 0.03 - 0.6\lambda \end{pmatrix}.
$$

使用 identity weighting matrix $W = I$，计算 GMM 估计量 $\hat\lambda$。

::::{solution}

**10.2 GMM 估计**

目标函数（$W = I$）：

$$
Q(\lambda) = \bar g_T(\lambda)' \bar g_T(\lambda) = \sum_{i=1}^3 \bar g_{i,T}(\lambda)^2.
$$

展开：

$$
\begin{aligned}
Q(\lambda)
&= (0.02 - 0.5\lambda)^2 + (0.04 - 0.8\lambda)^2 + (0.03 - 0.6\lambda)^2 \\
&= (0.02)^2 - 2 \times 0.02 \times 0.5\lambda + (0.5\lambda)^2 \\
&\quad + (0.04)^2 - 2 \times 0.04 \times 0.8\lambda + (0.8\lambda)^2 \\
&\quad + (0.03)^2 - 2 \times 0.03 \times 0.6\lambda + (0.6\lambda)^2 \\
&= 0.0004 - 0.02\lambda + 0.25\lambda^2 \\
&\quad + 0.0016 - 0.064\lambda + 0.64\lambda^2 \\
&\quad + 0.0009 - 0.036\lambda + 0.36\lambda^2 \\
&= 0.0029 - 0.12\lambda + 1.25\lambda^2.
\end{aligned}
$$

一阶条件：

$$
\frac{\partial Q}{\partial \lambda} = -0.12 + 2.5\lambda = 0
\quad\Longrightarrow\quad
\hat\lambda = \frac{0.12}{2.5} = 0.048.
$$

::::

**10.3** 假设估计得到 $\hat\lambda = 0.05$。计算样本矩 $\bar g_T(\hat\lambda)$。

::::{solution}

**10.3 样本矩计算**

代入 $\hat\lambda = 0.05$：

$$
\bar g_T(0.05) = \begin{pmatrix} 0.02 - 0.5 \times 0.05 \\ 0.04 - 0.8 \times 0.05 \\ 0.03 - 0.6 \times 0.05 \end{pmatrix} = \begin{pmatrix} 0.02 - 0.025 \\ 0.04 - 0.04 \\ 0.03 - 0.03 \end{pmatrix} = \begin{pmatrix} -0.005 \\ 0 \\ 0 \end{pmatrix}.
$$

三个矩条件中，后两个恰好为 0，第一个略有偏离。

::::

**10.4** 给定协方差矩阵估计：

$$
\hat S = \begin{pmatrix} 0.01 & 0.002 & 0.003 \\ 0.002 & 0.015 & 0.001 \\ 0.003 & 0.001 & 0.012 \end{pmatrix}.
$$

计算 J-statistic 并进行 overidentification test（样本量 $T = 100$，显著性水平 5%）。

::::{solution}

**10.4 J-test**

J-statistic 定义为：

$$
J = T \bar g_T(\hat\theta)' \hat S^{-1} \bar g_T(\hat\theta).
$$

先计算 $\hat S^{-1}$（使用数值方法或公式）。简化起见，假设已计算得：

$$
\hat S^{-1} \approx \begin{pmatrix} 110 & -10 & -20 \\ -10 & 70 & 5 \\ -20 & 5 & 90 \end{pmatrix}.
$$

计算：

$$
\begin{aligned}
\hat S^{-1} \bar g_T
&\approx \begin{pmatrix} 110 & -10 & -20 \\ -10 & 70 & 5 \\ -20 & 5 & 90 \end{pmatrix} \begin{pmatrix} -0.005 \\ 0 \\ 0 \end{pmatrix} \\
&= \begin{pmatrix} -0.55 \\ 0.05 \\ 0.10 \end{pmatrix}.
\end{aligned}
$$

$$
\begin{aligned}
\bar g_T' \hat S^{-1} \bar g_T
&= (-0.005, 0, 0) \begin{pmatrix} -0.55 \\ 0.05 \\ 0.10 \end{pmatrix} \\
&= (-0.005) \times (-0.55) \\
&= 0.00275.
\end{aligned}
$$

$$
J = 100 \times 0.00275 = 0.275.
$$

**Overidentification test**：

自由度：$df = N - K = 3 - 1 = 2$（3 个矩条件，1 个参数）。

在 5% 显著性水平下，$\chi^2_2$ 的临界值约为 5.99。

$$
J = 0.275 < 5.99.
$$

**结论**：不拒绝零假设，模型通过 overidentification test。矩条件与数据基本一致。

**经济含义**：
- J-test 检验模型是否能同时定价所有 test assets
- 拒绝意味着存在 pricing errors，模型 misspecified
- 不拒绝不代表模型正确，只是数据不足以拒绝

::::



---

### 11. EGARCH and Leverage Effect

#EGARCH #leverage-effect #asymmetric-volatility

**Question** 考虑 EGARCH(1,1) 模型，用于捕捉非对称波动率效应。

Nelson (1991) 的 EGARCH 规范：

$$
\log \sigma_t^2 = \omega + \beta \log \sigma_{t-1}^2 + \alpha \left|\frac{u_{t-1}}{\sigma_{t-1}}\right| + \gamma \frac{u_{t-1}}{\sigma_{t-1}}.
$$

**11.1** 解释 EGARCH 如何捕捉 leverage effect（负收益增加未来波动率）。

::::{solution}


**11.1 Leverage Effect**

标准化残差 $z_{t-1} = u_{t-1}/\sigma_{t-1}$ 对 log 波动率的影响：

$$
\frac{\partial \log \sigma_t^2}{\partial z_{t-1}} = \alpha \cdot \text{sign}(z_{t-1}) + \gamma.
$$

**Positive shock** ($z_{t-1} > 0$)：

$$
\text{Impact} = \alpha + \gamma.
$$

**Negative shock** ($z_{t-1} < 0$)：

$$
\text{Impact} = -\alpha + \gamma.
$$

如果 $\gamma < 0$ 且 $|\gamma| > \alpha$，则：
- Negative shock: $|-\alpha + \gamma| = \alpha + |\gamma| >$ Positive shock impact

这就是 **leverage effect**：负收益对未来波动率的影响大于正收益。

::::

**11.2** 参数 $\gamma < 0$ 的经济含义是什么？

::::{solution}

**11.2 $\gamma < 0$ 的含义**

$\gamma$ 捕捉**非对称性**：

- $\gamma = 0$：对称（正负冲击影响相同）
- $\gamma < 0$：负冲击增加波动率更多（leverage effect）
- $\gamma > 0$：正冲击增加波动率更多（罕见）

实证中通常 $\gamma < 0$，反映：
1. **Financial leverage**: 股价下跌 → debt/equity 上升 → equity 更 risky
2. **Volatility feedback**: 预期波动率上升 → required return 上升 → 当前价格下跌
3. **Time-varying risk premium**: Bad news 时期，投资者要求更高 risk compensation

::::

**11.3** 与 GARCH(1,1) 相比，EGARCH 的优势是什么？

::::{solution}

**11.3 EGARCH 的优势**

vs GARCH(1,1)：

1. **非对称性**：GARCH 对正负冲击对称；EGARCH 允许非对称

2. **非负性**：
   - GARCH: 需要参数约束 $\alpha_i \ge 0, \beta_i \ge 0$ 保证 $\sigma_t^2 > 0$
   - EGARCH: $\log \sigma_t^2$ 可以取任意实数，自动保证 $\sigma_t^2 > 0$

3. **解释变量**：
   - GARCH: $u_{t-1}^2$ (level)
   - EGARCH: $u_{t-1}/\sigma_{t-1}$ (standardized) → 更稳定

**缺点**：
- 非线性形式，估计更复杂
- 无 closed-form 的 unconditional variance

::::

**11.4** 假设估计得到：$\omega = -0.5$, $\beta = 0.95$, $\alpha = 0.1$, $\gamma = -0.05$。

计算：当 $u_{t-1}/\sigma_{t-1} = 2$ (positive shock) 和 $u_{t-1}/\sigma_{t-1} = -2$ (negative shock) 时，下期 log 波动率的变化。

::::{solution}

**11.4 数值计算**

**Positive shock** ($z_{t-1} = 2$)：

$$
\begin{aligned}
\log \sigma_t^2 - \log \sigma_{t-1}^2
&= \omega + (\beta - 1) \log \sigma_{t-1}^2 + \alpha |2| + \gamma \cdot 2\\
\text{Change in log vol}
&= \alpha |2| + \gamma \cdot 2\\
&= 0.1 \times 2 + (-0.05) \times 2\\
&= 0.2 - 0.1 = 0.1.
\end{aligned}
$$

**Negative shock** ($z_{t-1} = -2$)：

$$
\begin{aligned}
\text{Change in log vol}
&= \alpha |-2| + \gamma \cdot (-2)\\
&= 0.1 \times 2 + (-0.05) \times (-2)\\
&= 0.2 + 0.1 = 0.3.
\end{aligned}
$$

**结论**：Negative shock 导致 log 波动率增加 0.3，而 positive shock 只增加 0.1。

非对称比率：$0.3 / 0.1 = 3$，negative shock 的影响是 positive shock 的 3 倍。

::::


---

### 12. Out-of-Sample $R^2$ 和 Forecast Evaluation

#out-of-sample-R2 #forecast-evaluation #predictability

**Question** 评估收益预测模型的样本外表现。

**In-sample 回归**（$t = 1, \ldots, T$）：

$$
r_{t+1} = \alpha + \beta x_t + \varepsilon_{t+1}.
$$

**Out-of-sample forecast**（$t = T+1, \ldots, T+P$）：

$$
\hat r_{t+1} = \hat\alpha + \hat\beta x_t.
$$

**12.1** 定义 out-of-sample $R^2$：

$$
R_{OOS}^2 = 1 - \frac{\sum_{t=T}^{T+P-1}(r_{t+1} - \hat r_{t+1})^2}{\sum_{t=T}^{T+P-1}(r_{t+1} - \bar r)^2}.
$$

解释其含义。

::::{solution}


**12.1 $R_{OOS}^2$ 定义**

$$
R_{OOS}^2 = 1 - \frac{MSE_{\text{model}}}{MSE_{\text{benchmark}}},
$$

其中：
- 分子：模型预测的均方误差
- 分母：历史均值预测的均方误差（benchmark）

**含义**：
- $R_{OOS}^2 > 0$：模型优于历史均值
- $R_{OOS}^2 = 0$：模型等同于历史均值
- $R_{OOS}^2 < 0$：模型劣于历史均值（overfitting）

**与 in-sample $R^2$ 区别**：
- In-sample: 用同样数据估计和评估
- Out-of-sample: 用不同数据评估（更严格的测试）

::::

**12.2** 为什么 in-sample $R^2$ 会高估真实预测能力（overfitting）？

::::{solution}

**12.2 Overfitting 问题**

In-sample $R^2$ 总是非负且随预测变量增加而增加：

$$
R_{IS}^2 = 1 - \frac{\sum (r_{t+1} - \hat r_{t+1})^2}{\sum (r_{t+1} - \bar r)^2} \ge 0.
$$

**Overfitting 来源**：

1. **Data mining**: 预测变量在样本内"偶然"相关
2. **Parameter uncertainty**: 估计误差导致样本外表现差
3. **Model complexity**: 过多参数捕捉 noise 而非 signal

**经典结果**（Welch & Goyal 2008）：
- 许多变量 in-sample 显著预测收益
- 但 out-of-sample $R^2 < 0$（劣于历史均值）
- **Return predictability 可能是虚假的**

::::

**12.3** 假设数据：

| $t$ | $r_{t+1}$ | $\hat r_{t+1}$ (model) | $\bar r$ (historical mean) |
|-----|----------|----------------------|--------------------------|
| $T$ | 0.05 | 0.04 | 0.03 |
| $T+1$ | 0.02 | 0.03 | 0.03 |
| $T+2$ | -0.01 | 0.01 | 0.03 |

计算 $R_{OOS}^2$。

::::{solution}

**12.3 数值计算**

**Model MSE**:

$$
\begin{aligned}
MSE_{\text{model}}
&= \frac{1}{3}[(0.05 - 0.04)^2 + (0.02 - 0.03)^2 + (-0.01 - 0.01)^2]\\
&= \frac{1}{3}[0.0001 + 0.0001 + 0.0004]\\
&= \frac{0.0006}{3} = 0.0002.
\end{aligned}
$$

**Benchmark MSE** (historical mean):

$$
\begin{aligned}
MSE_{\text{benchmark}}
&= \frac{1}{3}[(0.05 - 0.03)^2 + (0.02 - 0.03)^2 + (-0.01 - 0.03)^2]\\
&= \frac{1}{3}[0.0004 + 0.0001 + 0.0016]\\
&= \frac{0.0021}{3} = 0.0007.
\end{aligned}
$$

**$R_{OOS}^2$**:

$$
R_{OOS}^2 = 1 - \frac{0.0002}{0.0007} = 1 - 0.286 = 0.714 = 71.4\%.
$$

模型预测误差比 benchmark 小 71.4%。

::::

**12.4** Campbell & Thompson (2008) 提出的 **forecast restrictions**：解释为什么限制 $\hat\beta$ 的符号和 $\hat r_{t+1}$ 的范围可以提高样本外表现。

::::{solution}

**12.4 Forecast Restrictions**

Campbell & Thompson (2008) 建议：

**(a) Sign restriction**: 强制 $\hat\beta$ 符号与理论一致

例如：dividend yield 预测 return，理论上 $\beta > 0$。

如果估计得到 $\hat\beta < 0$，设为 $\hat\beta = 0$（用 benchmark）。

**(b) Bound restriction**: 限制预测值在合理范围

例如：$\hat r_{t+1} \in [r_{\min}, r_{\max}]$。

如果 $\hat r_{t+1} < 0$（负预期收益），设为 $0$ 或历史均值。

**为什么有效**：

1. **Reduce overfitting**: 防止极端预测（通常来自估计误差）
2. **Incorporate economic priors**: 利用理论约束，stabilize estimates
3. **Shrinkage effect**: 类似 Bayesian shrinkage toward prior

**实证结果**：
- 许多变量加入 restrictions 后，$R_{OOS}^2$ 从负变正
- 理论约束比纯数据驱动更 robust

::::


---

### 13. 考场重点：VIX Option Expansion 与 Conditional Variance

#VIX #option_expansion #log_contract #conditional_variance

**Question** 设无股利指数价格 $S_t$ 在 risk-neutral measure 下满足

$$
\begin{aligned}
\frac{dS_u}{S_u}
&=rdu+\sigma_u dW_u^{\mathbb Q},
\qquad u\in[t,T],
\end{aligned}
$$

令 $\tau=T-t$，forward price 为 $F_t=S_te^{r\tau}$。用 VIX 推导中的 option expansion 计算 risk-neutral conditional variance。参考 [VIX static replication](../Asset%20Pricing/Empirical%20AP/cards/VIX_Static_Replication.md)。

**（a）** 先用 Itô lemma 把 realized variance 写成 dynamic trading term 加 log contract。

::::{solution}

对 $\log S_u$ 用 Itô lemma：

$$
\begin{aligned}
d\log S_u
&=
\frac{1}{S_u}dS_u
-\frac12\frac{1}{S_u^2}(dS_u)^2\\
&=
\left(r-\frac12\sigma_u^2\right)du+\sigma_udW_u^{\mathbb Q}.
\end{aligned}
$$

因此

$$
\begin{aligned}
\frac{dS_u}{S_u}-d\log S_u
&=
\frac12\sigma_u^2du\\
\Longrightarrow
\int_t^T\sigma_u^2du
&=
2\int_t^T\frac{dS_u}{S_u}
-2\log\frac{S_T}{S_t}.
\end{aligned}
$$

取 $\mathbb Q$ 条件期望并用 $E_t^{\mathbb Q}[S_T]=F_t$：

$$
\begin{aligned}
E_t^{\mathbb Q}\left[\int_t^T\sigma_u^2du\right]
&=
2r\tau
-2E_t^{\mathbb Q}\left[\log\frac{S_T}{S_t}\right]\\
&=
E_t^{\mathbb Q}\left[-2\log\frac{S_T}{F_t}\right].
\end{aligned}
$$

所以 conditional variance 的核心对象是 log payoff：

$$
\begin{aligned}
K_{\mathrm{var},t}
&:=
\frac{1}{\tau}
E_t^{\mathbb Q}\left[\int_t^T\sigma_u^2du\right]
=
\frac{1}{\tau}
E_t^{\mathbb Q}\left[-2\log\frac{S_T}{F_t}\right].
\end{aligned}
$$

::::

**（b）** 用 option expansion 复制 $-2\log(S_T/F_t)$。

::::{solution}

Carr-Madan expansion 对任意二阶可微 payoff $g(S_T)$ 给出

$$
\begin{aligned}
g(S_T)
&=
g(F_t)+g'(F_t)(S_T-F_t)\\
&\quad
+\int_0^{F_t}g''(K)(K-S_T)^+dK
+\int_{F_t}^{\infty}g''(K)(S_T-K)^+dK.
\end{aligned}
$$

取

$$
\begin{aligned}
g(S)
&=-2\log\frac{S}{F_t},\\
g(F_t)&=0,\\
g'(S)&=-\frac{2}{S},\\
g''(K)&=\frac{2}{K^2}.
\end{aligned}
$$

代回得

$$
\begin{aligned}
-2\log\frac{S_T}{F_t}
&=
-\frac{2}{F_t}(S_T-F_t)\\
&\quad
+\int_0^{F_t}\frac{2}{K^2}(K-S_T)^+dK
+\int_{F_t}^{\infty}\frac{2}{K^2}(S_T-K)^+dK.
\end{aligned}
$$

在 $\mathbb Q$ 下 $E_t^{\mathbb Q}[S_T-F_t]=0$，所以线性 forward payoff 的条件期望为 $0$：

$$
\begin{aligned}
E_t^{\mathbb Q}\left[-2\log\frac{S_T}{F_t}\right]
&=
2\int_0^{F_t}\frac{E_t^{\mathbb Q}[(K-S_T)^+]}{K^2}dK
+2\int_{F_t}^{\infty}\frac{E_t^{\mathbb Q}[(S_T-K)^+]}{K^2}dK.
\end{aligned}
$$

用期权价格

$$
\begin{aligned}
P_t(K)&=e^{-r\tau}E_t^{\mathbb Q}[(K-S_T)^+],\\
C_t(K)&=e^{-r\tau}E_t^{\mathbb Q}[(S_T-K)^+],
\end{aligned}
$$

得到 model-free variance swap strike：

$$
\begin{aligned}
K_{\mathrm{var},t}
&=
\frac{2e^{r\tau}}{\tau}
\left[
\int_0^{F_t}\frac{P_t(K)}{K^2}dK
+\int_{F_t}^{\infty}\frac{C_t(K)}{K^2}dK
\right].
\end{aligned}
$$

这个式子的记忆点是：OTM puts 和 OTM calls 的权重都是 $1/K^2$，pivot 是 forward $F_t$。

::::

**（c）** 写出 VIX 与 variance risk premium 的关系。

::::{solution}

VIX squared 是 30-day model-free implied variance 的年化版本：

$$
\begin{aligned}
\mathrm{VIX}_t^2
&\approx
\frac{1}{\tau}
E_t^{\mathbb Q}\left[\int_t^{t+\tau}\sigma_u^2du\right].
\end{aligned}
$$

Variance risk premium 比较 risk-neutral expected variance 和 physical expected realized variance：

$$
\begin{aligned}
VRP_t
&=
E_t^{\mathbb Q}\left[\frac{1}{\tau}\int_t^{t+\tau}\sigma_u^2du\right]
-
E_t^{\mathbb P}\left[\frac{1}{\tau}\int_t^{t+\tau}\sigma_u^2du\right]\\
&\approx
\mathrm{VIX}_t^2
-
E_t^{\mathbb P}[RV_{t,t+\tau}].
\end{aligned}
$$

若 $VRP_t>0$，说明 variance insurance 昂贵：投资者愿意为 bad-state volatility protection 支付溢价，卖方平均获得正补偿。

::::

---

### 14. 考场重点：Fama-MacBeth 两步回归默写版

#Fama-MacBeth #two_pass_regression #risk_premium #Shanken

**Question** 有 $N$ 个 test assets 和 $K$ 个 factors $f_t$。写出 Fama-MacBeth procedure，并说明标准误和 Shanken correction 的来源。参考 [Fama-MacBeth Shanken](../Asset%20Pricing/Empirical%20AP/cards/Fama_MacBeth_Shanken.md)。

**（a）** 写出两步回归和 risk premium 估计量。

::::{solution}

第一步，对每个资产做 time-series regression：

$$
\begin{aligned}
R_{i,t}^e
&=
a_i+\beta_i'f_t+\varepsilon_{i,t},
\qquad i=1,\ldots,N.
\end{aligned}
$$

得到 $\hat\beta_i$。第二步，对每个时期做 cross-sectional regression：

$$
\begin{aligned}
R_{i,t}^e
&=
\lambda_{0,t}+\hat\beta_i'\lambda_t+\alpha_{i,t},
\qquad i=1,\ldots,N.
\end{aligned}
$$

估计 factor risk premium：

$$
\begin{aligned}
\hat\lambda
&=
\frac{1}{T}\sum_{t=1}^T\hat\lambda_t,\\
\widehat{\operatorname{Var}}(\hat\lambda)
&=
\frac{1}{T(T-1)}
\sum_{t=1}^T
(\hat\lambda_t-\hat\lambda)(\hat\lambda_t-\hat\lambda)'.
\end{aligned}
$$

若模型含 traded factors，理论上 $\lambda$ 应接近 factor mean：

$$
\begin{aligned}
\lambda
&\approx E[f_t].
\end{aligned}
$$

::::

**（b）** 说明 beta pricing、alpha test 和 economic interpretation。

::::{solution}

Beta pricing restriction 是

$$
\begin{aligned}
E[R_i^e]
&=
\beta_i'\lambda,
\qquad i=1,\ldots,N.
\end{aligned}
$$

横截面回归中的 pricing error 为

$$
\begin{aligned}
\alpha_i
&=
E[R_i^e]-\beta_i'\lambda.
\end{aligned}
$$

若模型正确，则

$$
\begin{aligned}
H_0:\alpha_1=\cdots=\alpha_N=0.
\end{aligned}
$$

经济含义：

$$
\begin{aligned}
\text{expected excess return}
&=
\text{factor exposure}\times \text{factor price of risk}\\
&=
\beta_i'\lambda.
\end{aligned}
$$

因此 Fama-MacBeth 的第二步不是普通预测回归，而是在检验横截面 expected returns 是否能由 factor loadings 解释。

::::

**（c）** 为什么需要 Shanken correction？

::::{solution}

第二步把 $\hat\beta_i$ 当成已知，但 $\hat\beta_i$ 来自第一步估计，存在 estimation error：

$$
\begin{aligned}
\hat\beta_i
&=
\beta_i+\text{first-stage estimation error}.
\end{aligned}
$$

若忽略这一点，第二步 standard error 会偏小，t-stat 会偏大。单因子情形下常见的 Shanken correction factor 是

$$
\begin{aligned}
\operatorname{se}_{\mathrm{Shanken}}
&=
\operatorname{se}_{\mathrm{FM}}
\sqrt{1+\frac{\hat\lambda^2}{\hat\sigma_f^2}}.
\end{aligned}
$$

多因子情形可记成

$$
\begin{aligned}
\text{correction}
&\Longleftrightarrow
1+\hat\lambda'\widehat\Sigma_f^{-1}\hat\lambda.
\end{aligned}
$$

直觉是：factor risk premium 越大、factor variance 越小，beta estimation error 对第二步 pricing test 的影响越强。

::::

**（d）** 和 GMM 的关系。

::::{solution}

Fama-MacBeth 和 GMM 都在检验 SDF moments：

$$
\begin{aligned}
E[M_t(\theta)R_{i,t}^e]
&=0,
\qquad i=1,\ldots,N.
\end{aligned}
$$

若线性 SDF 写成

$$
\begin{aligned}
M_t
&=
1-b'f_t,
\end{aligned}
$$

则 beta representation 和 SDF representation 等价：

$$
\begin{aligned}
E[R_i^e]=\beta_i'\lambda
\quad
\Longleftrightarrow
\quad
E[M_tR_{i,t}^e]=0.
\end{aligned}
$$

Fama-MacBeth 优点是直观、容易展示 security market line；GMM 优点是 joint estimation、标准误统一、可做 overidentification test。考试答题时先写 Fama-MacBeth 两步，再补一句它是 linear SDF moment restriction 的横截面写法。

::::
