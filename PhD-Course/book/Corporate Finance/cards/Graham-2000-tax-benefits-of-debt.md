---
orphan: true
---

# Graham (2000) - Tax Benefits of Debt

这张卡对应 <a href="../01_Empirical_Corporate_Finance.html#sec-graham-2000-tax-benefits-of-debt">Supporting evidence: Graham (2000)</a>. 这里把 empirical paper 里的细节集中起来，主笔记只保留结构和结论。

(card-graham-2000-tax-benefits-of-debt)=
(^card-graham-2000-tax-benefits-of-debt)=
^card-graham-2000-tax-benefits-of-debt

## Core question

Graham 的问题很直接：多一美元利息扣除，值多少钱？

## Core valuation formula

$$
\begin{aligned}
V_L
&= V_U + \underbrace{D\left[1-\frac{(1-t_{pe})(1-T_c)}{1-t_{pd}}\right]}_{\text{debt 的边际税收收益}}
\end{aligned}
$$

- 如果 debt income 的个人税更高，或者 equity 的税负更轻，debt 的税收优势就会被削弱。

## Tax-rate estimation

- $T_c$ 的估计可以写成

$$
\begin{aligned}
\widehat{T}_c
&\approx \widehat{\text{Tax}}(Y)-\widehat{\text{Tax}}(Y-1)
\end{aligned}
$$

  其中 $Y$ 是 forecast 的 taxable income；直觉上就是“多一美元利息扣除，少交多少 corporate tax”。

- $t_{pe}$ 可以写成

$$
\begin{aligned}
t_{pe}
&= \lambda t_d^{\text{div}} + (1-\lambda)t_{cg}
\end{aligned}
$$

  其中 $t_d^{\text{div}}$ 是 dividend tax rate，$t_{cg}$ 是 capital gains tax rate，$\lambda$ 反映 equity income 中 dividend 与 capital gain 的权重。

- $t_{pd}$ 可以近似写成

$$
\begin{aligned}
t_{pd}
&= t_{int}
\end{aligned}
$$

  其中 $t_{int}$ 是利息收入对应的个人税率。

- kink 可以写成边际税盾开始下降的 debt level：

$$
\begin{aligned}
\text{kink}
&= \arg\max_D \ \Delta \widehat{TS}(D) \\
  \Delta \widehat{TS}(D)
  &= \widehat{TS}(D)-\widehat{TS}(D-1)
\end{aligned}
$$

  直觉上，当更多借款带来的利息扣除不再能充分抵消 taxable income 时，追加 debt 的税盾价值会变弱。这个 `kink` 就是 the debt level at which the estimated marginal tax shield is maximized.
  在实证里，这个 kink 会被进一步拿去做 regression：看 profitability、tax-paying capacity 和 distress proxies 是否系统性地解释 firm 在 kink function 上的位置。

## Summary statistics

- 经验图里最直观的结论是：gross tax benefit 明显高于 net tax benefit，二者之间的差额就是 money left on the table。

![[attachment/Pasted image 20260418204311.png]]

- gross tax benefits of debt 可能看起来很大，比如占 firm value 的 10%。
- 但 net tax benefits 往往小得多，接近 5% 左右。
- 差额来自 offsetting costs：个人税、破产/困境成本、以及经理人没有继续加杠杆时留下的替代融资空间。
- 所谓 money left on the table，就是如果再多借一点，原本还能拿到的税盾没拿到；这说明真实的 debt capacity 还存在未用完的空间。
- 因而 gross benefit 不能直接当成实际发行债务的净收益，必须扣掉这些抵消项。

## Empirical results

Graham 的结论不是“debt tax shield 不重要”，而是“看起来很大的 gross benefit，落到 net marginal benefit 以后会小很多”。所以 leverage 的税动机需要连同 personal taxes、distress cost 和 unused debt capacity 一起读。

![[attachment/Pasted image 20260418205222.png]]

这张表对应 kink-based regression 设定。可以读到的主线是：

- profitability / tax-paying capacity 更强的 firm，kink 往往更高，说明它们能更充分地吃到税盾。
- NOL carryforward、cyclical exposure、distress proxies 往往把 kink 往下压，说明税盾边际价值更容易受限。
- industry and financing characteristics 不是噪声，它们会系统性地改变 firm 在 benefit function 上的位置。

## Table interpretation

- `kink` 的定义是：使 tax rate function 开始向下弯折所需要的 interest amount，相对于实际 interest expense 的比率。
- `kink` 越高，说明 firm 越保守，实际 debt use 越少。
- large、liquid、profitable firms 往往有更少 debt，对应 pecking order 逻辑。
- growth firms 和 low collateral firms 往往有更少 debt，对应 static trade-off 逻辑。
- high Z-score firms 往往有更少 debt，对应 financing distress 风险较低、因而更保守的 debt use。
- high dividend payers 往往有更少 debt，对应 pecking order / financing need 较低的逻辑。
