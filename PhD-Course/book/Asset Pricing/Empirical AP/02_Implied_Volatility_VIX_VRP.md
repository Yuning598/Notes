# 02 Implied Volatility, VIX, Variance Risk Premium

Source: EF8083 slides, pp. 37-72  
Links: [01_Volatility_ARCH_GARCH](01_Volatility_ARCH_GARCH) | [03_Consumption_Based_AP_Puzzles](03_Consumption_Based_AP_Puzzles) | [cards/VIX_Static_Replication](cards/VIX_Static_Replication) | [cards/Variance_Risk_Premium](cards/Variance_Risk_Premium) | [cards/Correlation_Risk_Premium](cards/Correlation_Risk_Premium)

## 1. 从 realized volatility 到 implied volatility

上一主题用历史收益或高频收益估计 volatility。课件接着问：期权市场价格中隐含的 volatility 是什么？

:::{admonition} Definition (Implied volatility)
Implied volatility 是把市场观察到的 option price 代入 Black-Scholes 或其他 option pricing formula 后反解出的 $\sigma$。它不是历史波动率，而是市场在风险中性测度下对未来方差的定价。

:::

Implied volatility 重要，因为它同时包含：

$$
\text{physical expectation of future variance}
+
\text{risk premium for bearing variance risk}.
$$

## 2. VIX 的对象

VIX 不是某个单一期权的 Black-Scholes implied volatility，而是用一篮子 OTM calls and puts 构造出的 30-day model-free implied variance。

:::{admonition} Definition (VIX)
VIX 近似衡量未来 30 天 S&P 500 return variance 在 risk-neutral measure 下的平方根：
$$ \text{VIX}_t^2 \approx \frac{1}{\tau}E_t^Q\left[\int_t^{t+\tau}\sigma_s^2ds\right]. $$

:::

课件强调：VIX 的构造依赖 static replication，而不依赖 Black-Scholes constant volatility 假设。这是 empirical asset pricing 中常用它度量 aggregate variance risk 的原因。

## 3. 从 log contract 到 variance swap

[Derivation Notes](https://www-2.rotman.utoronto.ca/~hull/technicalnotes/TechnicalNote22.pdf)

设股票价格满足连续时间扩散：

$$
\frac{dS_t}{S_t}=(r-q)dt+\sigma_tdZ_t.
$$

由 Itô lemma：

$$
d\log S_t
=
\left(r-q-\frac12\sigma_t^2\right)dt+\sigma_tdZ_t.
$$

:::{admonition} Lemma
Integrated variance 的 log-contract 表示
**WTS：**
$$ \int_t^T\sigma_s^2ds = 2\int_t^T\frac{dS_s}{S_s} -2\log\frac{S_T}{S_t} +2(r-q)(T-t) $$
在 forward measure 或经过贴现与 dividend 调整后，可由动态交易 $dS/S$ 与静态 log payoff 复制。

**联立系统：**
$$ \begin{cases} \frac{dS_s}{S_s}=(r-q)ds+\sigma_sdZ_s,\\ d\log S_s=(r-q-\frac12\sigma_s^2)ds+\sigma_sdZ_s. \end{cases} $$

**连续求解：**
$$ \begin{aligned} \frac{dS_s}{S_s}-d\log S_s &= \left[(r-q)ds+\sigma_sdZ_s\right] -\left[(r-q-\frac12\sigma_s^2)ds+\sigma_sdZ_s\right]\\ &=\frac12\sigma_s^2ds. \end{aligned} $$
所以
$$ \begin{aligned} \sigma_s^2ds &=2\frac{dS_s}{S_s}-2d\log S_s,\\ \int_t^T\sigma_s^2ds &=2\int_t^T\frac{dS_s}{S_s} -2\int_t^Td\log S_s\\ &=2\int_t^T\frac{dS_s}{S_s} -2\log\frac{S_T}{S_t}. \end{aligned} $$
若把 drift 和 forward price adjustment 展开，就得到含 $r-q$ 的形式。

**结论：** realized variance payoff 可以通过动态持有 underlying 与静态持有 log contract 复制。

**Lemma:** Take risk-neutral expectation 的细推导
这一页最容易卡住的点是：为什么对上式取 $E_t^Q[\cdot]$ 后，$dS_s/S_s$ 那一项会变成 forward price 的 drift 项。

**WTS：**
$$ E_t^Q\!\left[\frac{1}{\tau}\int_t^T\sigma_s^2ds\right]
=\frac{2}{\tau}\ln\frac{F_{t,T}}{S_t}
-\frac{2}{\tau}E_t^Q\!\left[\ln\frac{S_T}{S_t}\right]. $$

**联立系统：**
$$ \begin{cases}
\frac{dS_s}{S_s}=(r-q)ds+\sigma_sdZ_s,\\
\bar V_{t,T}:=\frac1\tau\int_t^T\sigma_s^2ds.
\end{cases} $$

**连续求解：**
$$ \begin{aligned}
\bar V_{t,T}
&=\frac{2}{\tau}\int_t^T\frac{dS_s}{S_s}-\frac{2}{\tau}\ln\frac{S_T}{S_t}\\
&=\frac{2}{\tau}\int_t^T\Big[(r-q)ds+\sigma_s dZ_s\Big]-\frac{2}{\tau}\ln\frac{S_T}{S_t}\\
&=\frac{2}{\tau}(r-q)(T-t)+\frac{2}{\tau}\int_t^T\sigma_s dZ_s-\frac{2}{\tau}\ln\frac{S_T}{S_t}.
\end{aligned} $$
现在对两边取 conditional expectation $E_t^Q[\cdot]$：
$$ \begin{aligned}
E_t^Q[\bar V_{t,T}]
&=\frac{2}{\tau}(r-q)(T-t)+\frac{2}{\tau}E_t^Q\!\left[\int_t^T\sigma_s dZ_s\right]-\frac{2}{\tau}E_t^Q\!\left[\ln\frac{S_T}{S_t}\right].
\end{aligned} $$
由于 $E_t^Q[\int_t^T \sigma_s dZ_s]=0$，所以
$$ \begin{aligned}
E_t^Q[\bar V_{t,T}]
&=2(r-q)-\frac{2}{\tau}E_t^Q\!\left[\ln\frac{S_T}{S_t}\right]\\
&=\frac{2}{\tau}\ln\frac{S_t e^{(r-q)\tau}}{S_t}-\frac{2}{\tau}E_t^Q\!\left[\ln\frac{S_T}{S_t}\right]\\
&=\frac{2}{\tau}\ln\frac{F_{t,T}}{S_t}-\frac{2}{\tau}E_t^Q\!\left[\ln\frac{S_T}{S_t}\right].
\end{aligned} $$

**结论：** 取 risk-neutral expectation 只会把确定性的 drift 积分变成 $(r-q)\tau=\ln(F_{t,T}/S_t)$；随机部分的 Itô integral 在条件期望下为 0，真正难的部分只剩下 $\ln(S_T/S_t)$，这正是后面用 options 静态复制的对象。

:::

## 4. Carr-Madan static replication

课件使用 Carr-Madan formula 说明任意 sufficiently smooth payoff 可以由 bond、forward、continuum of options 静态复制。

> [!summary] VIX 证明里“两种方式”的关系
> VIX / variance swap 推导本身只有一条主线：
> $$ \text{realized variance}
> \Longleftrightarrow
> \text{dynamic stock return integral} - \text{log payoff}
> \Longleftrightarrow
> \text{continuum of options}. $$
> 其中第一步靠 Itô lemma，第二步靠 static replication。你看到的两种方式，都是在证明第二步：
>
> 1. **Combine two scenarios**：直接分 $S_T<x$ 和 $S_T>x$ 两种情况，手算 put integral / call integral，证明 log payoff 可以写成 puts + calls。
> 2. **Carr-Madan formula**：先证明一般公式
> $$ \begin{aligned}
> g(S_T)
> &=g(x)+g'(x)(S_T-x)\\
> &\quad+\int_0^xg''(K)(K-S_T)^+dK
> +\int_x^\infty g''(K)(S_T-K)^+dK,
> \end{aligned} $$
> 再把 $g(S_T)=-2\log S_T$ 或 $g(S_T)=\log(S_T/x)$ 代进去。
>
:::{admonition} 结论：
combine two scenarios 是 log payoff 的直接证明；Carr-Madan 是更一般的 theorem。两者得到同一个 VIX option-weight 结构：OTM puts 和 OTM calls 的权重都和 $1/K^2$ 成比例。

**Lemma:** Carr-Madan formula
**WTS：** 对任意二阶可微 payoff $g(S_T)$，在展开点 $x$：
$$ \begin{aligned} g(S_T) = &g(x)+g'(x)(S_T-x)\\ &+\int_0^x g''(K)(K-S_T)^+dK +\int_x^\infty g''(K)(S_T-K)^+dK. \end{aligned} $$

**证明思路：** 分别讨论 $S_T<x$ 和 $S_T>x$。

若 $S_T>x$，put 部分为 0：
$$ \begin{aligned} RHS &=g(x)+g'(x)(S_T-x) +\int_x^{S_T}g''(K)(S_T-K)dK\\ &=g(x)+g'(x)(S_T-x) +S_T\int_x^{S_T}g''(K)dK-\int_x^{S_T}Kg''(K)dK. \end{aligned} $$
分部积分：
$$ \begin{aligned} \int_x^{S_T}Kg''(K)dK &=[Kg'(K)]_x^{S_T}-\int_x^{S_T}g'(K)dK\\ &=S_Tg'(S_T)-xg'(x)-[g(S_T)-g(x)]. \end{aligned} $$
代回：
$$ \begin{aligned} RHS &=g(x)+g'(x)(S_T-x) +S_T[g'(S_T)-g'(x)]\\ &\quad -S_Tg'(S_T)+xg'(x)+g(S_T)-g(x)\\ &=g(S_T). \end{aligned} $$
$S_T<x$ 对称使用 put integral，可得同样结论。

**结论：** convexity $g''(K)$ 决定不同 strikes options 的权重。

:::

把 $g(S_T)=-2\log S_T$ 代入：

$$
g''(K)=\frac{2}{K^2}.
$$

因此 log contract 可以用全部 strikes 的 OTM options 静态复制。VIX 公式中的 option weights $1/K^2$ 就来自这里。见 [cards/VIX_Static_Replication](cards/VIX_Static_Replication)。

## 5. Variance swap

:::{admonition} Definition (Variance swap)
Variance swap 是一份 payoff 与 realized variance 相关的合约：
$$ \text{Payoff}=N(RV_{t,T}-K_{\text{var}}). $$
零成本进入合约时，fair variance strike 满足
$$ K_{\text{var}}=E_t^Q[RV_{t,T}]. $$

:::

所以 VIX squared 本质上是一个年化的 risk-neutral expected variance。

## 6. Variance risk premium

:::{admonition} Definition (Variance risk premium)
课件中常用定义：
$$ VRP_t = IV_t-E_t^P[RV_{t,t+\tau}], $$
其中 $IV_t$ 是 option-implied variance，$E_t^P[RV]$ 是物理测度下的 realized variance forecast。

**Lemma:** VRP 的分解
**WTS：**
$$ IV_t=E_t^P[RV_{t,t+\tau}]+VRP_t. $$

**联立系统：**
$$ \begin{cases} IV_t=E_t^Q[RV_{t,t+\tau}],\\ VRP_t=E_t^Q[RV_{t,t+\tau}]-E_t^P[RV_{t,t+\tau}]. \end{cases} $$

**连续求解：**
$$ \begin{aligned} IV_t &=E_t^Q[RV_{t,t+\tau}]\\ &=E_t^P[RV_{t,t+\tau}] +\left(E_t^Q[RV_{t,t+\tau}]-E_t^P[RV_{t,t+\tau}]\right)\\ &=E_t^P[RV_{t,t+\tau}]+VRP_t. \end{aligned} $$

**结论：** implied variance 高于 expected realized variance 的部分，是投资者要求承担 volatility/variance risk 的补偿。

:::

课件经验含义：VRP 往往为正，即 index option implied variance 常高于之后 realized variance。它可以预测 aggregate stock market returns，也与 crash insurance demand 有关。见 [cards/Variance_Risk_Premium](cards/Variance_Risk_Premium)。

## 7. Variance forecast and predictive regressions

课件将 implied variance 与 realized variance forecast 放进预测回归：

$$
RV_{t,t+\tau}
=
a+bIV_t+\varepsilon_{t+\tau}.
$$

如果 $IV_t$ 是 $E_t^P[RV]$ 的无偏预测，则应有 $a=0,b=1$。但因为 $IV_t$ 同时包含 $VRP_t$，回归中 $b$ 往往偏离 1。

一个更合理的分解：

$$
RV_{t,t+\tau}
=
a+b_1\widehat{RV}_t+b_2VRP_t+\varepsilon_{t+\tau},
$$

其中 $\widehat{RV}_t$ 可由 GARCH、HAR-RV 或 historical realized measures 构造。

## 8. Properties of implied variance

课件把 implied variance 的经验事实压成四条。前三条主要说明 IV/VIX 的预测和风险补偿含义；第四条解释为什么 index 和 individual stocks 的 patterns 不一样。

:::{admonition} Proposition
Property 1: IV 是 forward-looking measure
**Statement：** option-implied variance 是 forward-looking measure，可以预测 future realized variance。

一个典型预测回归可以写成：

$$
RV_{t+1}=\alpha+\beta_1RV_t+\beta_2IV_t+\varepsilon_{t+1},
$$
其中 $RV_t$ 是 month $t$ 的 realized variance，$IV_t$ 是 month $t$ 末由 options 观察到的 implied variance。

**直觉：** options prices aggregate investors' risk-neutral beliefs about future volatility，所以 $IV_t$ 包含 forward-looking information，不只是历史波动率的机械外推。见上一节的 predictive regression。

**Proposition:** Property 2: IV / VIX spikes during crisis
**Statement：** crisis periods 中 IV / VIX 会显著上升。

经济含义是：

$$
\left\{
\begin{aligned}
\text{market uncertainty}\uparrow
&\Rightarrow E_t^Q[RV_{t,t+\tau}]\uparrow,\\
\text{crash insurance demand}\uparrow
&\Rightarrow \text{variance risk premium}\uparrow,\\
\text{IV / VIX}
&\Rightarrow \text{spikes}.
\end{aligned}
\right.
$$

所以 VIX 常被称为 fear gauge：它同时反映 expected future variance 和 investors' willingness to pay for volatility protection。

**Proposition:** Property 3: index IV 平均高于 realized variance
**Statement：** stock index 的 implied variance 平均高于 realized variance。

用 variance risk premium 表示：

$$
\begin{aligned}
IV_t
&=E_t^Q[RV_{t,t+\tau}],\\
E_t^P[RV_{t,t+\tau}]
&\approx \text{expected realized variance},\\
VRP_t
&:=IV_t-E_t^P[RV_{t,t+\tau}]>0.
\end{aligned}
$$

**直觉：** index variance 在 bad states 中 payoff 高，类似 crash insurance。愿意买 protection 的投资者推高 option prices，因此 $Q$-measure 下的 implied variance 通常高于 $P$-measure 下之后实现或预期实现的 variance。见 [cards/Variance_Risk_Premium](cards/Variance_Risk_Premium)。

**Proposition:** Property 4: index 的 implied-realized variance gap 更极端
**Statement：** individual stocks 的 implied variance 与 realized variance 差异，不如 index 那么极端。

Driessen, Maenhout, and Vilkov (2009) 的 risk-based explanation 是：index variance 不只是 individual stock variance 的加权平均，还包含 correlation component：

$$
\sigma_{\text{Index}}^2
=
\underbrace{\sum_{i=1}^N w_i^2\sigma_i^2}_{\text{individual variance component}}
+
\underbrace{\sum_{i=1}^N\sum_{j\ne i}w_iw_j\sigma_i\sigma_j\rho_{ij}}_{\text{correlation component}}.
$$

若 individual stocks 的 variance 在 risk-neutral measure 和 physical measure 下差异不大，则 index 的 variance risk premium 主要来自 correlation component：

$$
\begin{aligned}
VRP_{\text{Index}}
&=
IV_{\text{Index}}-RV_{\text{Index}}\\
&\approx
\text{premium on risk-neutral correlation}.
\end{aligned}
$$

**直觉：** down market 中股票更容易一起跌，realized correlation 上升，diversification benefit 下降。这是 bad state；投资者愿意为 hedge 这种 correlation jump / systematic crash risk 支付 premium。

:::

## 9. Correlation risk premium

课件不仅讲 variance，还讲 covariance/correlation。Index variance 与 individual variances 的关系：

$$
\operatorname{Var}(R_m)
=
\sum_iw_i^2\operatorname{Var}(R_i)
+
2\sum_{i<j}w_iw_j\operatorname{Cov}(R_i,R_j).
$$

因此 index options 与 single-name options 的差异可以提取 correlation risk premium。

:::{admonition} Lemma
从 index variance 到 average correlation
**WTS：** 若所有股票方差相同为 $\sigma^2$、权重相等 $w_i=1/N$、pairwise correlation 相同为 $\rho$，则
$$ \operatorname{Var}(R_m) = \sigma^2\left[\frac1N+\frac{N-1}{N}\rho\right]. $$

**连续求解：**
$$ \begin{aligned} \operatorname{Var}(R_m) &=\sum_{i=1}^N\frac1{N^2}\sigma^2 +2\sum_{i<j}\frac1{N^2}\rho\sigma^2\\ &=\frac{N}{N^2}\sigma^2 +2\cdot\frac{N(N-1)}{2}\cdot\frac1{N^2}\rho\sigma^2\\ &=\frac{\sigma^2}{N}+\frac{N-1}{N}\rho\sigma^2\\ &=\sigma^2\left[\frac1N+\frac{N-1}{N}\rho\right]. \end{aligned} $$

**结论：** index implied variance 相对 single-name implied variance 越高，市场隐含的 average correlation 越高。见 [cards/Correlation_Risk_Premium](cards/Correlation_Risk_Premium)。

:::

## 10. Pricing of volatility risk

Ang, Hodrick, Xing, and Zhang (2006, JF) study the pricing of volatility risk in the stock market. 课件先区分两类 volatility：

1. aggregate volatility：market-level uncertainty，通常用 VIX 或 $\Delta VIX$ proxy；
2. idiosyncratic volatility：firm-specific uncertainty，不能完全由 market portfolio 解释。

核心问题是：

$$
\boxed{
\text{Does exposure to volatility risk earn a risk premium in the cross-section?}
}
$$

### Pricing aggregate volatility risk

若 aggregate volatility 是 priced risk factor，可以用扩展 market model 来估计每只股票对 VIX shock 的暴露：

$$
r_{i,t}
=
\beta_0+\beta_{i,MKT}r_t^{MKT}
+\beta_{i,\Delta VIX}\Delta VIX_t+\varepsilon_{i,t}.
$$

其中：

$$
\left\{
\begin{aligned}
\beta_{i,MKT}
&=\text{stock }i\text{ 对 market return 的 exposure},\\
\beta_{i,\Delta VIX}
&=\text{stock }i\text{ 对 aggregate volatility shock 的 exposure}.
\end{aligned}
\right.
$$

解释 $\beta_{i,\Delta VIX}$ 时要注意符号。VIX 通常在 bad market states 上升，因此若某只股票在 $\Delta VIX>0$ 时表现更差，它对 volatility shock 的 exposure 更负；这种股票在 bad states 不能 hedge 投资者，应该要求更高 expected return。

$$
\begin{aligned}
\beta_{i,\Delta VIX}<0
&\Longrightarrow \text{bad-state payoff low}\\
&\Longrightarrow \text{investors require compensation}\\
&\Longrightarrow E[R_i]\text{ higher}.
\end{aligned}
$$

这把前面 option-implied variance 的逻辑接到 cross-sectional asset pricing：VIX 不只是 forecasting variable，也可以作为 priced aggregate risk factor。

## 11. Demand pressure and volatility risk pricing

课件进一步把 option prices 与 demand pressure 连接起来：某些投资者（保险、机构、hedgers）有购买 crash insurance 或 variance protection 的需求，卖方承担风险需要补偿，所以 option prices 包含 risk premium。

在 empirical work 中可检验：

$$
\text{Option Price Deviation}_{i,t}
=
\alpha+\beta \text{Demand Pressure}_{i,t}+\gamma X_{i,t}+\varepsilon_{i,t}.
$$

若 $\beta>0$，说明需求冲击能推高 option prices，反映 limits to arbitrage 或 market-making constraints。

## 12. 与后续主题的连接

- [03_Consumption_Based_AP_Puzzles](03_Consumption_Based_AP_Puzzles)：SDF 决定风险价格，variance risk premium 是 SDF 对 variance payoff 的定价。
- [04_Return_Predictability_Econometrics](04_Return_Predictability_Econometrics)：VRP 可以作为 predictive variable 进入 return forecasting。
- [05_Cross_Section_Factor_Models](05_Cross_Section_Factor_Models)：volatility risk factor 可加入 factor model，检验是否在横截面中被 priced。
