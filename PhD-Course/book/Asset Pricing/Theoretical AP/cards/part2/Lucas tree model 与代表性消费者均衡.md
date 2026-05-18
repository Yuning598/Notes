# Lucas tree model 与代表性消费者均衡

来源：[Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing#6.2 Lucas Tree Equilibrium](Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing#6.2 Lucas Tree Equilibrium)

返回：[Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing](Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing)

:::{admonition} Definition (Lucas Tree Model)
Lucas tree model 是一个代表性消费者的 endowment economy：经济里只有一棵“禀赋树” $\delta_t$，股票是这棵树的索取权，分红就是 aggregate endowment，均衡消费等于总禀赋。

直观图可以写成：
- Aggregate endowment / dividend $\delta_t$ -> stock claim -> asset price $s_t$
- Aggregate endowment / dividend $\delta_t$ -> representative consumer consumption $c_t$
- Representative consumer consumption $c_t$ -> SPD / SDF -> asset price $s_t$

**Definition (Lucas Tree Equilibrium Consumption):**
Lucas tree economy 中，股票是对 aggregate endowment 的索取权；代表性消费者持有整棵树，因此均衡消费满足

$$
c_t=e_t.
$$
这里的 [Asset Pricing/Theoretical AP/cards/part2/Endowment economy](Asset Pricing/Theoretical AP/cards/part2/Endowment economy) 指的是“给定 aggregate endowment，再由均衡分配消费”的一般均衡框架；[Asset Pricing/Theoretical AP/cards/part2/Endowment process](Asset Pricing/Theoretical AP/cards/part2/Endowment process) 则描述禀赋本身如何随时间演化。

**Proposition:** Lucas Tree SDF
若偏好为 CRRA，则均衡 SDF 与边际效用成比例：

$$
\pi_t=e^{-\delta t}e_t^{-\gamma}.
$$

**Proposition:** Lucas Tree Limitation
简单 Lucas tree 模型能把风险溢价联系到消费风险，但难以同时匹配股权溢价、无风险利率与股票回报波动率。

:::

## 含义

它是消费型资产定价的基准一般均衡模型：结构很干净，但经验解释力有限。

## 相关卡片

- [Asset Pricing/Theoretical AP/cards/part2/Endowment economy](Asset Pricing/Theoretical AP/cards/part2/Endowment economy)
- [Asset Pricing/Theoretical AP/cards/part2/Endowment process](Asset Pricing/Theoretical AP/cards/part2/Endowment process)
