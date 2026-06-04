# binding（绑定）

来源：[Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing#5.5 Optimal Stopping](Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing#5.5 Optimal Stopping)

返回：[Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing](Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing)

关联卡片：[Asset Pricing/Theoretical AP/cards/part2/最优停止与 smooth pasting](Asset Pricing/Theoretical AP/cards/part2/最优停止与 smooth pasting)

:::{admonition} Definition (Binding)
“binding / 绑定” 指的是：在若干候选条件里，**真正以等号成立、决定最优值的那一条**。

:::

^def-binding

在最优停止里，常写

$$
\begin{aligned}
0 =
\max\big\{
\underbrace{-\beta V+\mathcal D_XV+g}_{\text{继续}},
\underbrace{h-V}_{\text{停止}}
\big\}.
\end{aligned}
$$

- 若继续更优，则

  $$
  \begin{aligned}
  -\beta V+\mathcal D_XV+g=0,
  \qquad
  h-V<0,
  \end{aligned}
  $$

  这时说“继续项 binding”。

- 若停止更优，则

  $$
  \begin{aligned}
  h-V=0,
  \qquad
  -\beta V+\mathcal D_XV+g<0,
  \end{aligned}
  $$

  这时说“停止项 binding”。

- 在边界上，二者可能同时达到临界值。

直觉上，binding 就是：**哪一条约束 / 候选值真的卡住了最优解**。
