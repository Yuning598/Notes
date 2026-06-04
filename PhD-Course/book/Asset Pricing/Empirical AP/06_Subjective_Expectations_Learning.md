# 06 Subjective Expectations, Learning, and Return Beliefs

Source: EF8083 slides, pp. 242-322  
Links: [03_Consumption_Based_AP_Puzzles](03_Consumption_Based_AP_Puzzles) | [04_Return_Predictability_Econometrics](04_Return_Predictability_Econometrics) | [07_Behavioral_Empirical_AP_Overview](07_Behavioral_Empirical_AP_Overview) | [cards/Bayesian_Learning_Return_Predictability](cards/Bayesian_Learning_Return_Predictability) | [cards/Survey_Expectations](cards/Survey_Expectations) | [cards/Experience_Based_Learning](cards/Experience_Based_Learning) | [cards/Martin_Option_Implied_Lower_Bound](cards/Martin_Option_Implied_Lower_Bound)

## 1. Rational expectations vs rationality

课件区分两件事：

- **Rationality**：投资者优化，给定 beliefs 做最优决策；
- **Rational expectations**：投资者 beliefs 与真实数据生成过程一致。

:::{admonition} Definition (Rational expectations)
Rational expectations 要求主观条件期望等于模型真实条件期望：
$$ \tilde E_t[X_{t+1}]=E_t[X_{t+1}]. $$
Subjective expectations literature 则允许
$$ \tilde E_t[X_{t+1}]\ne E_t[X_{t+1}], $$
并用 survey、experience、market-implied bounds 等数据识别 beliefs。

:::

这部分课件的意义：资产价格可能不仅反映 objective risk，也反映 agents 的 subjective beliefs 和 learning。

## 2. Bayesian learning example

课件给出一个 dividend learning 模型。设 dividends：

$$
D_t=\mu+\varepsilon_t,\qquad
\varepsilon_t\sim N(0,\sigma^2),
$$

投资者不知道 $\mu$，用历史样本学习。

若先验 diffuse，则后验均值是样本均值：

$$
\bar D_t=\frac1t\sum_{s=1}^tD_s.
$$

:::{admonition} Lemma: Bayesian posterior with unknown mean
**WTS：**
$$ \mu\mid H_t\sim N\left(\bar D_t,\frac{\sigma^2}{t}\right). $$

**联立系统：**
$$ D_s\mid\mu\sim N(\mu,\sigma^2),\qquad s=1,\ldots,t. $$

**连续求解：**
样本似然：

$$
\begin{aligned} L(\mu) &\propto \exp\left[-\frac1{2\sigma^2}\sum_{s=1}^t(D_s-\mu)^2\right]. \end{aligned}
$$

分解平方和：

$$
\begin{aligned} \sum_{s=1}^t(D_s-\mu)^2 &= \sum_{s=1}^t(D_s-\bar D_t)^2 +t(\bar D_t-\mu)^2. \end{aligned}
$$

与 $\mu$ 有关的部分：
$$ L(\mu)\propto \exp\left[-\frac{t}{2\sigma^2}(\mu-\bar D_t)^2\right]. $$

**结论：**
$$ \mu\mid H_t\sim N\left(\bar D_t,\frac{\sigma^2}{t}\right). $$

:::

## 3. Learning creates return predictability

课件中的价格公式：

$$
P_t =
\sum_{j=1}^{\infty}\beta^j\tilde E_t[D_{t+j}] =
\bar D_t\frac{\beta}{1-\beta}.
$$

若知道真实 $\mu$，基本面价格：

$$
P_t^* =
\mu\frac{\beta}{1-\beta}.
$$

:::{admonition} Lemma: Bayesian learning 下的 realized return
**WTS：**
$$ R_{t+1} = \frac{1}{1-\beta} \left(1-\frac{\beta t}{t+1}\right) (D_{t+1}-\bar D_t). $$

**联立系统：**
$$ P_t=\frac{\beta}{1-\beta}\bar D_t, \qquad \bar D_{t+1}=\frac{t\bar D_t+D_{t+1}}{t+1}. $$
课件定义净 payoff：
$$ R_{t+1}=P_{t+1}+D_{t+1}-\frac{P_t}{\beta}. $$

**连续求解：**

$$
\begin{aligned} P_{t+1} &=\frac{\beta}{1-\beta}\bar D_{t+1} =\frac{\beta}{1-\beta} \frac{t\bar D_t+D_{t+1}}{t+1}. \end{aligned}
$$

所以

$$
\begin{aligned} R_{t+1} &= \frac{\beta}{1-\beta}\frac{t\bar D_t+D_{t+1}}{t+1} +D_{t+1} -\frac{1}{1-\beta}\bar D_t\\ &= \frac{1}{1-\beta} \left[ \frac{\beta t}{t+1}\bar D_t +\frac{\beta}{t+1}D_{t+1} +(1-\beta)D_{t+1} -\bar D_t \right]\\ &= \frac{1}{1-\beta} \left[ \left(\frac{\beta}{t+1}+1-\beta\right)D_{t+1} -\left(1-\frac{\beta t}{t+1}\right)\bar D_t \right]\\ &= \frac{1}{1-\beta} \left(1-\frac{\beta t}{t+1}\right) (D_{t+1}-\bar D_t). \end{aligned}
$$

**结论：** returns depend on forecast errors relative to learned belief $\bar D_t$。见 [cards/Bayesian_Learning_Return_Predictability](cards/Bayesian_Learning_Return_Predictability)。

:::

进一步，课件给出：

$$
E_t[R_{t+1}] =
\frac{1}{1-\beta}
\left(1-\frac{\beta t}{t+1}\right)(\mu-\bar D_t).
$$

这说明当 investors 的 belief $\bar D_t$ 高于真实 $\mu$ 时，future expected return 低；反之高。这是一种 learning-induced predictability。

## 4. Subjective expected returns from surveys

课件强调调查数据能直接观测 beliefs，而不仅从价格反推。常见发现：

- 投资者的 expected returns 往往与过去 returns 正相关；
- 但理性 present-value 模型中，价格高通常意味着未来 returns 低；
- 因此 subjective expectations 可能是 extrapolative 的。

:::{admonition} Definition (Extrapolative expectations)
投资者根据近期 realized returns 外推未来收益：
$$ \tilde E_t[R_{t+1}] = a+b R_{t-k,t}, \qquad b>0. $$

:::

这与 return predictability 的客观回归形成对照：

$$
E_t[R_{t+1}] =
a+c\,pd_t,
$$

其中高 $pd_t$ 通常对应低 future return。见 [cards/Survey_Expectations](cards/Survey_Expectations)。

## 5. Learning from experience

课件还讲到 experience-based learning：不同年龄或经历的投资者对同一资产有不同 beliefs，因为他们经历过的历史样本不同。

一种表达：

$$
\tilde E_{i,t}[R_{t+1}] =
\sum_{k=1}^{age_i}w_{i,k}R_{t-k},
$$

其中近期或年轻时经历可能被赋予更大权重。

:::{admonition} Lemma: Experience-based belief as weighted average
**WTS：** 投资者 $i$ 的主观均值是历史收益的加权平均：
$$ \tilde \mu_{i,t}=\sum_{k=1}^{age_i}w_{i,k}R_{t-k}. $$

**联立系统：**
$$ \sum_{k=1}^{age_i}w_{i,k}=1,\qquad w_{i,k}\ge 0. $$

**连续求解：**
若近期权重大：
$$ w_{i,k}=\frac{\lambda^{k-1}}{\sum_{j=1}^{age_i}\lambda^{j-1}},\qquad 0<\lambda<1. $$
则

$$
\begin{aligned} \tilde \mu_{i,t} &= \frac{\sum_{k=1}^{age_i}\lambda^{k-1}R_{t-k}} {\sum_{j=1}^{age_i}\lambda^{j-1}}. \end{aligned}
$$

**结论：** 不同年龄 cohort 会因为经历不同而持有不同 beliefs，并可能影响 portfolio choice。见 [cards/Experience_Based_Learning](cards/Experience_Based_Learning)。

:::

## 6. Constant-gain learning

Bayesian learning 中 $t$ 越大，新信息权重越小。但 behavioral learning 常用 constant gain：

$$
\tilde \mu_t=(1-g)\tilde\mu_{t-1}+gD_t,
\qquad 0<g<1.
$$

:::{admonition} Lemma: Constant-gain learning 的无限滞后表示
**WTS：**
$$ \tilde\mu_t = g\sum_{j=0}^{\infty}(1-g)^jD_{t-j}. $$

**连续求解：**

$$
\begin{aligned} \tilde\mu_t &=(1-g)\tilde\mu_{t-1}+gD_t\\ &=(1-g)\left[(1-g)\tilde\mu_{t-2}+gD_{t-1}\right]+gD_t\\ &=(1-g)^2\tilde\mu_{t-2}+gD_t+g(1-g)D_{t-1}\\ &=\cdots\\ &=g\sum_{j=0}^{\infty}(1-g)^jD_{t-j}. \end{aligned}
$$

**结论：** constant gain 让 beliefs 永远对近期数据敏感，适合刻画 extrapolation。

:::

## 7. Option-implied lower bound on expected return

课件介绍用 option prices 得到 expected return lower bound 的思想。核心是 risk-neutral distribution 与 physical expected return 的关系。

Martin-type bound 的直觉：若 option prices 显示 risk-neutral variance 很高，则 expected market return 必须足够高来补偿风险。

:::{admonition} Lemma: Option-implied lower-bound intuition
**WTS：**
在一般定价关系下，risk-neutral variance 可为 expected excess return 提供下界。

**联立系统：**
$$ E[MR]=1,\qquad E[M]=\frac1{R_f}. $$
定义 risk-neutral expectation：
$$ E^Q[X]=R_fE[MX]. $$

**连续求解：**
Risk-neutral second moment：
$$ E^Q[R^2]=R_fE[MR^2]. $$
Risk-neutral variance：
$$ \operatorname{Var}^Q(R) = E^Q[R^2]-\{E^Q[R]\}^2. $$
因为 $E^Q[R]=R_fE[MR]=R_f$，
$$ \operatorname{Var}^Q(R) = R_fE[MR^2]-R_f^2. $$
Option prices pin down the risk-neutral variance. Under appropriate assumptions, this variance implies a lower bound for $E[R]-R_f$.

**结论：** options contain forward-looking information about expected market returns. 见 [cards/Martin_Option_Implied_Lower_Bound](cards/Martin_Option_Implied_Lower_Bound)。

:::

## 8. ETF demand and belief channel

课件后部把 beliefs 与 demand pressure 结合：ETF flows、retail demand、institutional demand 可以通过价格影响 expected returns。经验设计常见形式：

$$
R_{i,t+1} =
\alpha+\beta \text{Flow}_{i,t}+\gamma X_{i,t}+\varepsilon_{i,t+1}.
$$

关键识别问题：

- flows 是 belief shock 还是 liquidity shock？
- flows 是否由过去 returns 引起，即 reverse causality？
- 是否有 instrument 或 event 能隔离 exogenous demand？

## 9. 复习抓手

- 主观预期不等于非理性；它可以与优化并存。
- Bayesian learning 可以在完全理性更新下产生 predictability。
- Survey evidence 常发现 extrapolation，与理性 present-value 模型张力很大。
- Option-implied measures 是从价格中提取 forward-looking beliefs / risk compensation 的工具。

