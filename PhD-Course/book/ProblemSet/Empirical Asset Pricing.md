# Empirical Asset Pricing

## 1. Consumption SDF, Puzzles, and an Extra Factor

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
