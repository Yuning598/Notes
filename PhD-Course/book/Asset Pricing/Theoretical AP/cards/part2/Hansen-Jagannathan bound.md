# Hansen-Jagannathan bound

来源：[Asset Pricing/Theoretical AP/01_Single_Period_Models#2.3 Risk Premia and Hansen-Jagannathan Bound](Asset Pricing/Theoretical AP/01_Single_Period_Models#2.3 Risk Premia and Hansen-Jagannathan Bound)

返回：[Asset Pricing/Theoretical AP/01_Single_Period_Models](Asset Pricing/Theoretical AP/01_Single_Period_Models)

:::{admonition} Proposition
Proposition
若存在无风险资产，则任意 SDF 都满足

$$
\frac{\operatorname{std}(\tilde m)}{E[\tilde m]}
\ge
\sup_{\tilde R}\frac{|E[\tilde R]-R_f|}{\operatorname{std}(\tilde R)}.
$$

:::

## 推导核心

$$
\begin{aligned}
E[\tilde R]-R_f
&=-R_f\operatorname{cov}(\tilde m,\tilde R) \\
&\le R_f\,\operatorname{std}(\tilde m)\operatorname{std}(\tilde R)
&& \text{由 Cauchy-Schwarz}.
\end{aligned}
$$

再结合

$$
E[\tilde m]=\frac{1}{R_f}
$$

即得结论。

## 含义

一个资产定价模型若给出的 SDF 波动太小，就无法解释足够大的 Sharpe ratio。  
因此，HJ bound 可以看成对“模型所指定的 SDF”做的一个筛选：如果模型隐含的 $\tilde m$ 过于平滑，模型就会被数据 reject。

## 快速理解

- **资产价格波动大** $\Rightarrow$ 需要 **SDF 波动大**
- **风险溢价大** $\Rightarrow$ 需要 **SDF 对坏状态更敏感**
- **SDF 太平滑** $\Rightarrow$ 很多模型会失败
