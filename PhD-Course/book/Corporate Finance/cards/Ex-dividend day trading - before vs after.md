---
orphan: true
---

# Ex-dividend day trading - before vs after

Short summary: around the ex-date, investors can switch from holding through dividend receipt to selling before the date and buying back after, so the tax exposure shifts from dividend tax to capital-gain-like realization.

:::{admonition} Note
**Core distinction**

- **Before ex-dividend date**: sell before the stock goes ex-dividend, so the investor avoids receiving the dividend and shifts the payoff toward capital gain realization.
- **After ex-dividend date**: buy after the stock has gone ex-dividend, so the investor no longer receives the upcoming dividend; the price is lower by roughly the dividend-adjusted ex-drop.

因此，ex-dividend day trading 的本质不是“长期持有 dividend stock”，而是“围绕除息日短期切换仓位”.

**Note:** Tax implication

$$
\begin{aligned}
R^{hold} &= (1-t_d)D, \\
R^{trade} &= (1-t_g)D, \\
R^{hold}-R^{trade} &= (t_g-t_d)D.
\end{aligned}
$$
若交易成本足够低，投资者会把原本的 dividend tax exposure 转成更接近 capital gain 的 realization path.

**Note:** Why it weakens clientele segmentation
短期围绕 ex-date 调仓，使 after-tax preference 不再一一对应稳定的 shareholder composition；于是 tax clientele 的长期分层会被交易行为部分冲淡。

:::

(card-ex-dividend-before-after)=
(^card-ex-dividend-before-after)=
^card-ex-dividend-before-after

Related section: <a href="../01_Empirical_Corporate_Finance.html#sec-dividend-ex-date-arbitrage">Ex-dividend Arbitrage Trading Hypothesis</a>
