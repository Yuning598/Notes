---
orphan: true
---

# Ex-dividend cash flow - before vs after

Short summary: before ex-date the investor realizes mainly capital gains and no dividend; after ex-date the investor receives dividend cash flow but the stock price drops on the ex-date, so the total cash flow must include both price change and dividend tax.

:::{admonition} Note
**Investor cash flow around ex-dividend date**

设投资者买入价格为 $p_0$，卖出价格为 $p$ 或 $p_{ex}$，dividend 为 $D$，dividend tax rate 为 $t_d$，capital gains tax rate 为 $t_g$。

- **Before ex-date**: 卖出时不再拿 dividend，cash flow 主要来自 capital gain realization
- **After ex-date**: 持有到除息后会收到 dividend，但股票价格会在除息时跳降

如果 hover 只显示路径，优先用下面的块引用链接，而不是普通 note link.

:::

(card-ex-dividend-cashflow-summary)=
(^card-ex-dividend-cashflow-summary)=
^card-ex-dividend-cashflow-summary

$$
\begin{aligned}
CF^{before} &= p-(p-p_0)t_g, \\
CF^{after} &= p_{ex}-(p_{ex}-p_0)t_g + D(1-t_d).
\end{aligned}
$$

:::{admonition} Note
**Difference**

$$
\begin{aligned}
CF^{after}-CF^{before}
&= (p_{ex}-p) - t_g(p_{ex}-p) + D(1-t_d) \\
&= - (p-p_{ex})(1-t_g) + D(1-t_d).
\end{aligned}
$$

当两种策略无差异时，上式等于 $0$，于是得到

$$
\begin{aligned}
p-p_{ex}=\frac{1-t_d}{1-t_g}D.
\end{aligned}
$$

**Note:** **Intuition**

- 若 $p-p_{ex}<D$，说明 price drop 小于现金分红，除息前后交易可能产生套利空间
- 若 $p-p_{ex}=D$，说明价格调整正好抵消 dividend 的现金流
- 若 $p-p_{ex}>D$，说明税负结构使得 price drop 大于 dividend

:::

(card-ex-dividend-cashflow)=
(^card-ex-dividend-cashflow)=
^card-ex-dividend-cashflow

Related section: <a href="../01_Empirical_Corporate_Finance.html#sec-dividend-ex-date-tax-pricing">Do Stock Prices Reflect Personal Taxes?</a>
