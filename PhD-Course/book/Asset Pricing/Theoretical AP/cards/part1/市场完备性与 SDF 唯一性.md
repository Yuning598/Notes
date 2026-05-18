# 市场完备性与 SDF 唯一性

来源：[Asset Pricing/Theoretical AP/01_Single_Period_Models#2.2.4 Market Completeness and Uniqueness of the SDF](Asset Pricing/Theoretical AP/01_Single_Period_Models#2.2.4 Market Completeness and Uniqueness of the SDF)

返回：[Asset Pricing/Theoretical AP/01_Single_Period_Models](Asset Pricing/Theoretical AP/01_Single_Period_Models)

:::{admonition} Definition (Market Completeness)
在有限状态模型中，若资产 payoff 的线性张成空间

$$
\begin{aligned}
\mathcal S=\operatorname{span}\{\tilde x_1,\dots,\tilde x_n\}
\end{aligned}
$$
满足 $\mathcal S=\mathbb R^k$，则市场完备。

**Proposition:** Uniqueness of the SDF
若市场完备且 Law of One Price 成立，则 SDF 唯一。

**Proposition:** Uniqueness of the Risk-Neutral Probability
若无风险资产 $R_f$ 存在，则风险中性概率 $Q$ 也唯一。

:::

## 直观理解

市场完备 = payoff 的 span space 已经张满整个状态空间；每个 state-by-state payoff 都能被复制。

## Span-space 证明摘要

若每个 Arrow payoff $1_{\{\omega_j\}}$ 都可复制，则其价格 $q_j$ 唯一，且

$$
\begin{aligned}
q_j=E[\tilde m1_{\{\omega_j\}}]=\tilde m(\omega_j)\Pr(\omega_j),
\end{aligned}
$$

所以

$$
\begin{aligned}
\tilde m(\omega_j)=\frac{q_j}{\Pr(\omega_j)}.
\end{aligned}
$$

因此 SDF 唯一（a.s.）。

若市场不完备，则可复制 payoff 只张成真子空间 $\mathcal S\subsetneq\mathbb R^k$。取 $z\in\mathcal S^\perp\setminus\{0\}$，令

$$
\begin{aligned}
\tilde m_\varepsilon=\tilde m+\varepsilon z,
\end{aligned}
$$

这里 $\varepsilon z$ 是一个扰动项，不是 0；只要 $\varepsilon$ 取足够小，就可以保持 $\tilde m_\varepsilon>0$（若原来 $\tilde m>0$）。

由于 $z\in\mathcal S^\perp$，对所有可复制 payoff $x\in\mathcal S$ 都有

$$
\begin{aligned}
E[zx]=0.
\end{aligned}
$$

 则对所有可复制 payoff $x\in\mathcal S$，

$$
\begin{aligned}
E[\tilde m_\varepsilon x]
=E[\tilde m x]+\varepsilon E[zx]
=E[\tilde m x],
\end{aligned}
$$

因此不同 SDF 可在可复制资产上给出相同价格，但在不可复制 payoff 上不同，所以 SDF 不唯一。
