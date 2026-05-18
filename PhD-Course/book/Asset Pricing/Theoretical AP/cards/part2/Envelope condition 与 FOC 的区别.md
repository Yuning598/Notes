# Envelope condition 与 FOC 的区别

来源：[Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing#5.1.3 Heuristic Derivation of the HJB Equation](Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing#5.1.3 Heuristic Derivation of the HJB Equation)

返回：[Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing](Asset Pricing/Theoretical AP/02_Dynamic_Asset_Pricing)

关联卡片：[Asset Pricing/Theoretical AP/cards/part2/价值函数](Asset Pricing/Theoretical AP/cards/part2/价值函数) · [Asset Pricing/Theoretical AP/cards/part2/Bellman equation](Asset Pricing/Theoretical AP/cards/part2/Bellman equation) · [Asset Pricing/Theoretical AP/cards/part2/HJB 方程与动态规划](Asset Pricing/Theoretical AP/cards/part2/HJB 方程与动态规划)

:::{admonition} Definition (Envelope Condition)
envelope condition 讨论的是：**最优值函数** 对状态变量的边际变化。

:::

在这里，状态变量是财富 $W_t$，所以最优值函数满足

$$
\begin{aligned}
V_W(W_t)=u'(C_t^*)=\frac{1}{C_t^*}.
\end{aligned}
$$

这说明：财富多一单位时，最优值增加多少。

:::{admonition} Definition (FOC)
FOC 讨论的是：**最优控制变量** 的一阶必要条件。

:::

在同一个问题里，控制变量是 $C_t$ 和 $\phi_t$，所以 FOC 是

$$
\begin{aligned}
\frac{\partial}{\partial C_t}:\quad \frac{1}{C_t^*}=V_W,
\qquad
\frac{\partial}{\partial \phi_t}:\quad
W_t(\mu-r)V_W+V_{WW}W_t^2\phi_t^*\sigma^2=0.
\end{aligned}
$$

## 区别

$$
\begin{aligned}
\text{FOC}
&:\ \text{对 choice variable 求导，找最优控制} \\
\text{Envelope condition}
&:\ \text{对 state variable 求导，找最优值函数的边际变化}.
\end{aligned}
$$

更直观地说：
- FOC 回答“最优的 $C_t$、$\phi_t$ 是多少”；
- envelope condition 回答“当前财富再多一单位，最优值会增加多少”。

在这个例子里，二者会连到同一个式子 $V_W=1/C_t^*$，但逻辑顺序不同：先用 FOC 找最优控制，再用 envelope condition 解释最优值对状态变量的边际变化。
