:::{admonition} Definition (GMV 与 Mean-Variance Frontier 的区别)

**GMV（Global Minimum Variance）**：

$$
\begin{aligned}
\min_\pi \frac12\pi'\Sigma\pi
\quad \text{s.t.}\quad
\iota'\pi=1.
\end{aligned}
$$
这里不指定目标收益，只是在所有 fully invested portfolios 里找**方差最小**者。

**Mean-Variance Frontier**：

$$
\begin{aligned}
\min_\pi \frac12\pi'\Sigma\pi
\quad \text{s.t.}\quad
\mu'\pi=\mu_{target},
\qquad
\iota'\pi=1.
\end{aligned}
$$
这里先固定一个目标收益 $\mu_{target}$，再在所有达到该收益的组合里找**方差最小**者。

因而：

$$
\begin{aligned}
\text{GMV}
&\subset
\text{Mean-Variance Frontier},
\end{aligned}
$$
且 GMV 是 frontier 上方差最低的点。

为什么需要 $\mu_{target}$：

$$
\begin{aligned}
\iota'\pi=1
&\Longrightarrow \text{只限制总权重} \\
&\not\Longrightarrow \text{控制收益水平}. 
\end{aligned}
$$
若没有 $\mu'\pi=\mu_{target}$，最优解只会退化为一个“最稳”的单点；加入 $\mu_{target}$ 后，改变目标收益就会得到不同的最小方差组合，从而扫出整条 frontier。
:::

