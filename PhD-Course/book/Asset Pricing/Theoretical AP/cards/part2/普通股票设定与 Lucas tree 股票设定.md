# 普通股票设定与 Lucas tree 股票设定

来源：[Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing#6.2 Lucas Tree Equilibrium](Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing#6.2 Lucas Tree Equilibrium)

返回：[Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing](Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing)

:::{admonition} Definition (两种 stock 设定)
Asset pricing 里 “stock” 有两种常见用法：

$$
\begin{aligned}
\text{general risky stock}
&:\quad
\frac{dS_t}{S_t}=\mu_tdt+\sigma_tdB_t,
\qquad
\text{dividend flow}=D_tdt, \\
\text{Lucas tree stock}
&:\quad
S_t=\text{claim on aggregate endowment},
\qquad
\text{dividend flow}=\delta_tdt.
\end{aligned}
$$

:::

## 核心区别

一般 risky stock 是外生给定的风险资产，价格动态或 dividend process 可以单独设定：

$$
\begin{aligned}
\frac{dS_t}{S_t}
&=\mu_tdt+\sigma_tdB_t,
\qquad
\text{dividend flow}=D_tdt.
\end{aligned}
$$

Lucas tree stock 是 aggregate endowment 的索取权，因此 dividend 不是任意现金流，而是总禀赋：

$$
\begin{aligned}
\text{stock payoff flow}
&=
\text{aggregate endowment flow} =
\delta_tdt.
\end{aligned}
$$

## 定价公式

两者都可以用 SPD 定价：

$$
\begin{aligned}
S_t
&=
\frac{1}{\xi_t}
E_t\!\left[\int_t^\infty \xi_sD_s\,ds\right]
\qquad
\text{(general dividend claim)}, \\
S_t
&=
\frac{1}{\xi_t}
E_t\!\left[\int_t^\infty \xi_s\delta_s\,ds\right]
\qquad
\text{(Lucas tree)}.
\end{aligned}
$$

## 识别规则

看到题目写 “aggregate Lucas tree” 或 “dividend is aggregate endowment $\delta_t$”，就用 Lucas tree 设定；否则普通 stock 不必等于 aggregate endowment claim。

## 相关卡片

- [Asset Pricing/Theoretical AP/cards/part2/Lucas tree model 与代表性消费者均衡](Asset Pricing/Theoretical AP/cards/part2/Lucas tree model 与代表性消费者均衡)
- [Asset Pricing/Theoretical AP/cards/part2/Endowment economy](Asset Pricing/Theoretical AP/cards/part2/Endowment economy)
- [Asset Pricing/Theoretical AP/cards/part2/Endowment process](Asset Pricing/Theoretical AP/cards/part2/Endowment process)
- [Asset Pricing/Theoretical AP/cards/part2/状态价格密度、EMM 与鞅定价](Asset Pricing/Theoretical AP/cards/part2/状态价格密度、EMM 与鞅定价)
