# 11 System GMM, 3SLS, and SUR

**Multiple-Equation Moment Model**

:::{admonition} Definition ([Assumption 4.1](#^assumption-4-1) (Linearity))
有 $M$ 个线性方程

$$
y_{im} = z'_{im}\delta_m + \epsilon_{im} \quad (m = 1, 2, \dots, M; i = 1, 2, \dots, n) \tag{4.1.1}
$$
:::

^equation-4-1-1
>这里，$i = 1, 2, \dots, n$ 表示样本中的第 $i$ 个观测值。
>其中 $n$ 是样本量，$z_{im}$ 是 $L_m$ 维回归量向量，$\delta_m$ 是可形变系数向量，$\epsilon_{im}$ 是第 $m$ 个方程中不可观测的误差项。
>$$
>\begin{cases}
>y_{i1} = \sum_{k=1}^{L_1} z_{i1k} \delta_{1k} + \epsilon_{i1} \\
>y_{i2} = \sum_{k=1}^{L_2} z_{i2k} \delta_{2k} + \epsilon_{i2} \\
>\quad \vdots \\
>y_{iM} = \sum_{k=1}^{L_M} z_{iMk} \delta_{Mk} + \epsilon_{iM}
>\end{cases}
>$$
> 注释
> - 对误差项 ($\epsilon_{i1}, \dots, \epsilon_{iM}$) 之间的方程间（或同期）相关性没有假设。
> - 对不同方程的系数没有先验限制。
^assumption-4-1

:::{admonition} Definition (Assumption 4.2 (Ergodic Stationarity))
令 $w_i$ 是 $(y_{i1}, \dots, y_{iM}, z_{i1}, \dots, z_{iM}, x_{i1}, \dots, x_{iM})$ 独有的非恒定元素。 $\{w_i\}$ 是联合平稳且遍历的。

注释：这个假设比简单地假设系统每个方程都满足遍历平稳性要强。
:::

^assumption-4-2

:::{admonition} Definition (Assumption 4.3 (orthogonality conditions))
对于每个方程 $m$， $x_{im}$ 中的 $K_m$ 个变量是预定的。也就是说，以下 orthogonality conditions 得到满足：
$$
E(x_{im} \cdot \epsilon_{im}) = 0 \quad (m = 1, 2, \dots, M).
$$
如果我们定义
$$
\begin{pmatrix} \sum_{m=1}^M K_m \times 1 \end{pmatrix} g_i \equiv  \begin{bmatrix} x_{i1} \cdot \epsilon_{i1} \\ \vdots \\ x_{iM} \cdot \epsilon_{iM} \end{bmatrix}, \tag{4.1.4}
$$
^equation-4-1-4
那么所有 these orthogonality conditions 可以紧凑地写为 $E(g_i) = 0$。
:::

^assumption-4-3

:::{admonition} Definition (Assumption 4.4 (rank condition for identification))
对于每个 $m$ ($= 1,2,\dots,M$)， $E(x_{im}z'_{im})$ ($K_m \times L_m$) 具有 full column rank。在这个模型中，
:::

- $z_{im}$ 代表回归量，其维度为 $L_m \times 1$。
- $x_{im}$ 代表工具变量 (IV)，其维度为 $K_m \times 1$。
^assumption-4-4

:::{admonition} Definition (Assumption 4.5 ($g_i$ is a martingale difference sequence with finite second moments))
$\{g_i\}$是一个 joint martingale difference sequence，并且 $E(g_i g'_i)$ 是 nonsingular (positive-semidefinite)。
:::

^assumption-4-5

:::{admonition} Definition (Assumption 4.6 (finite fourth moments))
$E[(x_{imk} \cdot z_{ihj})^2]$ 存在且有限，对于所有 $k (= 1,2,\dots,K_m)$，$j (= 1,2,\dots,L_h)$，$m,h$ $(= 1,2,\dots,M)$，其中 $x_{imk}$ 是 $x_{im}$ 的第 $k$ 个元素，$z_{ihj}$ 是 $z_{ih}$ 的第 $j$ 个元素。
一致估计 $S$ 的多方程版本公式为：

$$
\widehat{S} = \begin{bmatrix}
\frac{1}{n} \sum_{i=1}^n \hat{\epsilon}_{i1}\hat{\epsilon}_{i1}x_{i1}x'_{i1} & \dots & \frac{1}{n} \sum_{i=1}^n \hat{\epsilon}_{i1}\hat{\epsilon}_{iM}x_{i1}x'_{iM} \\
\vdots & \ddots & \vdots \\
\frac{1}{n} \sum_{i=1}^n \hat{\epsilon}_{iM}\hat{\epsilon}_{i1}x_{iM}x'_{i1} & \dots & \frac{1}{n} \sum_{i=1}^n \hat{\epsilon}_{iM}\hat{\epsilon}_{iM}x_{iM}x'_{iM}
\end{bmatrix} \tag{4.3.2}
$$
^equation-4-3-2
其中，$\hat{\epsilon}_{im}$ 是 $\epsilon_{im}$ 的一致估计。块收敛关系：$\frac{1}{n} \sum_{i=1}^n \hat{\epsilon}_{i1} \hat{\epsilon}_{i2} x_{i1} x'_{i2} \xrightarrow{p} E(\epsilon_{i1} \epsilon_{i2} x_{i1} x'_{i2})$。
:::

^assumption-4-6



## System Identification

**识别 (Identification)**: 能否从数据中唯一确定模型参数。在 GMM 中，即从样本矩条件唯一估计 $\delta$。

-   多方程版本 (3.3.1) 的矩函数 $g(w_i;\delta)$：
    $$
    g(w_i;\delta) \equiv \begin{bmatrix} x_{i1} \cdot (y_{i1} - z'_{i1}\delta_1) \\ \vdots \\ x_{iM} \cdot (y_{iM} - z'_{iM}\delta_M) \end{bmatrix}, \tag{4.1.5}
    $$
    ^equation-4-1-5
    其中 $g(w_i;\delta)$ 是一个 $(\sum_{m=1}^M K_m \times 1)$ 维向量，代表工具变量 $x_{im}$ 与对应残差的乘积，其总体期望应为零 (GMM 基本矩条件)。

-   $\delta$ 是堆叠系数向量：
    $$
    \delta_{\left( \sum_{m=1}^M L_m \times 1 \right)} = \begin{bmatrix} \delta_1 \\ \vdots \\ \delta_M \end{bmatrix} \tag{4.1.6}
    $$
    ^equation-4-1-6
    其中 $\delta_m$ 是第 $m$ 个方程的 $L_m \times 1$ 维系数向量。

-   **正交性条件 (Orthogonality Conditions)**: $E(g(w_i;\delta)) = 0$。GMM 核心，表示工具变量与模型残差不相关。
-   **识别 (Identification)**: 若 $\tilde{\delta} = \delta$ 是方程组的唯一解，则系数可识别。从总体矩条件 $E[g(w_i;\tilde{\delta})] = 0$ 唯一解出 $\tilde{\delta}$。
    展开得到线性方程组：
    $$
    E[g(w_i;\tilde{\delta})] = 0 \quad \Rightarrow \quad \Sigma_{xy} - \Sigma_{xz}\tilde{\delta} = 0 \tag{4.1.7}
    $$
    ^equation-4-1-7
    此式将原始矩条件转化为关于 $\tilde{\delta}$ 的线性系统。
    $\Sigma_{xy}$ 和 $\Sigma_{xz}$ 结构：

    $$
    \begin{bmatrix} E(x_{i1} y_{i1}) \\ E(x_{i2} y_{i2}) \\ \vdots \end{bmatrix} - \begin{bmatrix} E(x_{i1} z'_{i1}) & 0 & \dots \\ 0 & E(x_{i2} z'_{i2}) & \dots \\ \vdots & \vdots & \ddots \end{bmatrix} \begin{bmatrix} \delta_1 \\ \delta_2 \\ \vdots \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ \vdots \end{bmatrix}
    $$

    其中，$E(x_{im} z'_{im})$ 是一个 $K_m \times L_m$ 矩阵。$\Sigma_{xy}$ 是 $K \times 1$ 向量 ($K = \sum K_m$)。 $\Sigma_{xz}$ 是 $K \times L$ 矩阵 ($L = \sum L_m$)。

-   确定 $\tilde{\delta}$ 的方程组紧凑矩阵形式：
    $$
    \underset{(K_{sys} \times L_{sys})}{\Sigma_{xz}} \underset{(L_{sys} \times 1)}{\tilde{\delta}} = \underset{(K_{sys} \times 1)}{\sigma_{xy}}, \tag{4.1.10}
    $$
    其中：
    $$
    \sigma_{xy} \equiv \begin{bmatrix} E(x_{i1} \cdot y_{i1}) \\ \vdots \\ E(x_{iM} \cdot y_{iM}) \end{bmatrix}, \quad \Sigma_{xz} \equiv \begin{bmatrix} E(x_{i1}z'_{i1}) & & \\ & \ddots & \\ & & E(x_{iM}z'_{iM}) \end{bmatrix} \tag{4.1.9}
    $$
    这里，$K_{sys} = \sum_{m=1}^M K_m$，$L_{sys} = \sum_{m=1}^M L_m$。$x_{im}$ 是 Instrumental Variables (IV)，其维度为 $K_m \times 1$；$z_{im}$ 是 regressors，其维度为 $L_m \times 1$。

使用符号 $S$ 来表示 $Avar(\bar{g})$ (g的渐近方差)。根据平稳且遍历的**中心极限定理 (CLT)**，有 $\sqrt{n} \bar{g} \xrightarrow{d} N(0, S)$。其中 $S$ 的定义为：
$$
S = E(g_i g'_i)
$$
$$
S = \underbrace{E(g_i g'_i)}_{(\sum_{m=1}^M K_m \times \sum_{m=1}^M K_m)} = \begin{bmatrix} E(\epsilon_{i1}\epsilon_{i1}x_{i1}x'_{i1}) & \dots & E(\epsilon_{i1}\epsilon_{iM}x_{i1}x'_{iM}) \\ \vdots & \ddots & \vdots \\ E(\epsilon_{iM}\epsilon_{i1}x_{iM}x'_{i1}) & \dots & E(\epsilon_{iM}\epsilon_{iM}x_{iM}x'_{iM}) \end{bmatrix} \tag{4.1.11}
$$
^equation-4-1-11

考虑 $g_i$ 是由工具变量和残差构成的向量 $g_i = (x_{i1}\epsilon_{i1}, x_{i2}\epsilon_{i2}, \dots, x_{iM}\epsilon_{iM})'$。对于简化情况 $g_i = \begin{pmatrix} x_{i1}\epsilon_{i1} \\ x_{i2}\epsilon_{i2} \end{pmatrix}$，其块矩阵形式为：
$$
g_i g'_i = \begin{pmatrix} \epsilon_{i1}^2 x_{i1}x'_{i1} & \epsilon_{i1}\epsilon_{i2}x_{i1}x'_{i2} \\ \epsilon_{i2}\epsilon_{i1}x_{i2}x'_{i1} & \epsilon_{i2}^2 x_{i2}x'_{i2} \end{pmatrix}
$$
**System GMM Moments and Objective**

Let $\tilde{\delta}$ be a hypothetical value of the true parameter $\delta$ and define the sample analogue of $g(w_i;\delta)$ by
$$
g_n(\tilde{\delta}) \equiv \frac{1}{n} \sum_{i=1}^n g(w_i;\tilde{\delta}) = \frac{1}{n} \sum_{i=1}^n \begin{bmatrix} x_{i1} \cdot (y_{i1} - z'_{i1}\tilde{\delta}_1) \\ \vdots \\ x_{iM} \cdot (y_{iM} - z'_{iM}\tilde{\delta}_M) \end{bmatrix}
$$
$$
= \begin{bmatrix} \frac{1}{n}\sum_{i=1}^n x_{i1} \cdot y_{i1} \\ \vdots \\ \frac{1}{n}\sum_{i=1}^n x_{iM} \cdot y_{iM} \end{bmatrix} - \begin{bmatrix} \frac{1}{n}\sum_{i=1}^n x_{i1}z'_{i1} & & \\ & \ddots & \\ & & \frac{1}{n}\sum_{i=1}^n x_{iM}z'_{iM} \end{bmatrix} \begin{bmatrix} \tilde{\delta}_1 \\ \vdots \\ \tilde{\delta}_M \end{bmatrix}
$$
$$
\equiv \underset{(K_{sys} \times 1)}{s_{xy}} - \underset{(K_{sys} \times L_{sys})}{S_{xz}} \underset{(L_{sys} \times 1)}{\tilde{\delta}}, \tag{4.2.1}
$$
^equation-4-2-1

其中，$s_{xy}$ 和 $S_{xz}$ 是样本矩的对应量：


$$
s_{xy} \equiv \begin{bmatrix} \frac{1}{n}\sum_{i=1}^n x_{i1} \cdot y_{i1} \\ \vdots \\ \frac{1}{n}\sum_{i=1}^n x_{iM} \cdot y_{iM} \end{bmatrix}, \quad S_{xz} \equiv \begin{bmatrix} \frac{1}{n}\sum_{i=1}^n x_{i1}z'_{i1} & & \\ & \ddots & \\ & & \frac{1}{n}\sum_{i=1}^n x_{iM}z'_{iM} \end{bmatrix} \tag{4.2.2}
$$

GMM 目标函数 (Objective function) 为：
$$
J_n(\tilde{\delta},\hat{W}) = n \cdot g_n(\tilde{\delta})' \hat{W} g_n(\tilde{\delta})
$$

:::{admonition} Note
Multiple-equation GMM estimator
Reproducing (3.4.8) and (3.4.11), we obtain
Multiple-equation GMM estimator:
$$
\underset{(L_{sys} \times 1)}{\hat{\delta}(\hat{W})} = (S'_{xz}\hat{W}S_{xz})^{-1}S'_{xz}\hat{W}s_{xy} \tag{4.2.3}
$$
its sampling error:
$$
\hat{\delta}(\hat{W}) - \delta = (S'_{xz}\hat{W}S_{xz})^{-1}S'_{xz}\hat{W}\bar{g} \tag{4.2.4}
$$

:::

有必要重写多方程 GMM 公式 (4.2.3)。如果 $\hat{W}_{mh}$ ($K_m \times K_h$) 是 $\hat{W}$ 的 $(m,h)$ 块 ($M, H = 1,2,...,M$)，那么 (4.2.3) 可以完整地写为：

$$\begin{aligned}
\hat{\delta}(\hat{W}) = &\begin{bmatrix}
\left( \frac{1}{n}\sum_{i=1}^n z_{i1}x'_{i1} \right) \hat{W}_{11} \left( \frac{1}{n}\sum_{i=1}^n x_{i1}z'_{i1} \right) & \dots & \left( \frac{1}{n}\sum_{i=1}^n z_{i1}x'_{i1} \right) \hat{W}_{1M} \left( \frac{1}{n}\sum_{i=1}^n x_{iM}z'_{iM} \right) \\
\vdots & \ddots & \vdots \\
\left( \frac{1}{n}\sum_{i=1}^n z_{iM}x'_{iM} \right) \hat{W}_{M1} \left( \frac{1}{n}\sum_{i=1}^n x_{i1}z'_{i1} \right) & \dots & \left( \frac{1}{n}\sum_{i=1}^n z_{iM}x'_{iM} \right) \hat{W}_{MM} \left( \frac{1}{n}\sum_{i=1}^n x_{iM}z'_{iM} \right)
\end{bmatrix}^{-1} \\
&\begin{bmatrix}
\left( \frac{1}{n}\sum_{i=1}^n z_{i1}x'_{i1} \right) \hat{W}_{11} \left( \frac{1}{n}\sum_{i=1}^n x_{i1}y_{i1} \right) + \dots + \left( \frac{1}{n}\sum_{i=1}^n z_{i1}x'_{i1} \right) \hat{W}_{1M} \left( \frac{1}{n}\sum_{i=1}^n x_{iM}y_{iM} \right) \\
\vdots \\
\left( \frac{1}{n}\sum_{i=1}^n z_{iM}x'_{iM} \right) \hat{W}_{M1} \left( \frac{1}{n}\sum_{i=1}^n x_{i1}y_{i1} \right) + \dots + \left( \frac{1}{n}\sum_{i=1}^n z_{iM}x'_{iM} \right) \hat{W}_{MM} \left( \frac{1}{n}\sum_{i=1}^n x_{iM}y_{iM} \right)
\end{bmatrix}
\end{aligned}
\tag{4.2.6}$$

手写笔记显示：
- $S_{xz}'\hat{W}S_{xz}$ 可以表示为 $\begin{pmatrix} S_{z1x}' & \dots \\ \vdots & S_{zMx}' \end{pmatrix} \begin{pmatrix} \hat{W}_{11} & \hat{W}_{12} \\ \hat{W}_{21} & \hat{W}_{22} \end{pmatrix} \begin{pmatrix} S_{x1z1} & \dots \\ \vdots & S_{xMzM} \end{pmatrix}$
- $S_{xz}'\hat{W}s_{xy}$ 可以表示为 $\begin{pmatrix} S_{z1x}' & \dots \\ \vdots & S_{zMx}' \end{pmatrix} \begin{pmatrix} \hat{W}_{11} & \hat{W}_{12} \\ \hat{W}_{21} & \hat{W}_{22} \end{pmatrix} \begin{pmatrix} S_{x1y1} \\ S_{x2y2} \end{pmatrix}$


**System GMM Large-Sample Theory**

单方程 GMM 的大样本理论可直接推广至多方程模型。回顾 [[[#^assumption-4-1|Assumption 4.1](#^assumption-4-1)]]、[Assumption 4.2](#^assumption-4-2)、[Assumption 4.6](#^assumption-4-6) 和 [Proposition 3.2](Econometrics/MS8956/10_Single_Equation_GMM#^proposition-3-2)。

- **Hypothesis testing (假设检验)**: 
	- 可检验跨方程限制 (**cross-equation restrictions**)，如系数在不同方程间是否相等。 (见 [Econometrics/MS8956/cards/Example 4.2 (wage equation for two years)](Econometrics/MS8956/cards/Example 4.2 (wage equation for two years)))

:::{admonition} Proposition
Proposition 4.1 (consistent estimation of contemporaneous error cross-equation moments)
令 $\hat{\delta}_m$ 为 $\delta_m$ 的一致估计量，且令 $\hat{\epsilon}_{im} \equiv y_{im} - z'_{im}\hat{\delta}_m$ 为 $m = 1, 2, \dots, M$ 的隐含残差。
在 [[[#^assumption-4-1|Assumption 4.1](#^assumption-4-1)]] 和 [Assumption 4.2](#^assumption-4-2) 基础上，加上对于所有 $m,h (= 1, 2, \dots, M)$，$E(z_{im}z'_{ih})$ 存在且有限的假设：
$$
\hat{\sigma}_{mh} \xrightarrow{p} \sigma_{mh} \tag{4.3.1}
$$
其中
$$
\hat{\sigma}_{mh} \equiv \frac{1}{n} \sum_{i=1}^n \hat{\epsilon}_{im}\hat{\epsilon}_{ih} \quad \text{and} \quad \sigma_{mh} \equiv E(\epsilon_{im}\epsilon_{ih})
$$
前提是 $E(\epsilon_{im}\epsilon_{ih})$ 存在且有限。
:::

^prop-4-1

:::{admonition} Proposition
Proposition 4.2 (consistent estimation of $S$, the asymptotic variance of $\bar{g}$)
令 $\hat{\delta}_m$ 为 $\delta_m$ 的一致估计量，且令 $\hat{\epsilon}_{im} \equiv y_{im} - z'_{im}\hat{\delta}_m$ 为 $m = 1, 2, \dots, M$ 的隐含残差。
在 [[[#^assumption-4-1|Assumption 4.1](#^assumption-4-1)]]、[Assumption 4.2](#^assumption-4-2) 和 [Assumption 4.6](#^assumption-4-6) 下，(4.3.2) 中给出的 $\hat{S}$ 是 $S$ 的一致估计量。
:::

^prop-4-2

- **Efficient GMM estimator (高效 GMM 估计量)**:
	- 使用 $\hat{S}^{-1}$ 作为权重矩阵的多方程 GMM 估计量 $\hat{\delta}(\hat{S}^{-1})$ 是具有最小渐近方差的高效多方程 GMM 估计量。
	- 其渐近方差及其一致估计量为：
$$
\text{Avar}(\hat{\delta}(\hat{S}^{-1})) = (\Sigma_{xz}' S^{-1} \Sigma_{xz})^{-1} \tag{4.3.3}
$$
^equation-4-3-3

$$
\widehat{\text{Avar}}(\hat{\delta}(\hat{S}^{-1})) = (S_{xz}' \hat{S}^{-1} S_{xz})^{-1} \tag{4.3.4}
$$
^equation-4-3-4

- **Test of overidentifying restrictions (过度识别检验)**:
	- **矩条件总数**: $\sum_m K_m$
	- **待估系数总数**: $\sum_m L_m$
	- **J-statistic**: 自由度 $df = \sum_m K_m - \sum_m L_m$
	- **C-statistic**: 自由度为来自不同方程的可疑工具变量 (suspect instruments) 的总数。

**Single-Equation vs System Estimation**

多方程 GMM 的另一种替代方案是对每个方程分别应用单方程 GMM，然后将估算出的系数进行堆叠（stack）。

## Equation-by-Equation Equivalence

假设系统由 $M$ 个方程组成，每个方程的样本矩条件为 $g_{nm}(\delta_m) = s_{xmy_m} - S_{xmz_m}\delta_m$。系统整体的样本矩向量 $g_n(\delta)$ 和系统权重矩阵 $\widehat{W}$ 可以写为块对角形式：
$$
S_{xz} = \begin{bmatrix} S_{x1z1} & & \\ & \ddots & \\ & & S_{xMzM} \end{bmatrix}, \quad s_{xy} = \begin{bmatrix} s_{x1y1} \\ \vdots \\ s_{xMyM} \end{bmatrix}, \quad \widehat{W} = \begin{bmatrix} \widehat{W}_{11} & & \\ & \ddots & \\ & & \widehat{W}_{MM} \end{bmatrix}
$$

根据 GMM 估计量公式 $\hat{\delta}(\hat{W}) = (S'_{xz}\hat{W}S_{xz})^{-1}S'_{xz}\hat{W}s_{xy}$，我们分步计算：

1. **计算 $S'_{xz}\hat{W}S_{xz}$**：
   由于 $S_{xz}$ 和 $\widehat{W}$ 均为块对角矩阵，其乘积仍为块对角矩阵：
   $$
   S'_{xz}\hat{W}S_{xz} = \begin{bmatrix} S'_{x1z1}\widehat{W}_{11}S_{x1z1} & & \\ & \ddots & \\ & & S'_{xMzM}\widehat{W}_{MM}S_{xMzM} \end{bmatrix}
   $$
   其逆矩阵为：
   $$
   (S'_{xz}\hat{W}S_{xz})^{-1} = \begin{bmatrix} (S'_{x1z1}\widehat{W}_{11}S_{x1z1})^{-1} & & \\ & \ddots & \\ & & (S'_{xMzM}\widehat{W}_{MM}S_{xMzM})^{-1} \end{bmatrix}
   $$

2. **计算 $S'_{xz}\hat{W}s_{xy}$**：
   $$
   S'_{xz}\hat{W}s_{xy} = \begin{bmatrix} S'_{x1z1}\widehat{W}_{11}s_{x1y1} \\ \vdots \\ S'_{xMzM}\widehat{W}_{MM}s_{xMyM} \end{bmatrix}
   $$

3. **最终堆叠系数 $\hat{\delta}$**：
   $$
   \hat{\delta}(\hat{W}) = \begin{bmatrix} (S'_{x1z1}\widehat{W}_{11}S_{x1z1})^{-1} S'_{x1z1}\widehat{W}_{11}s_{x1y1} \\ \vdots \\ (S'_{xMzM}\widehat{W}_{MM}S_{xMzM})^{-1} S'_{xMzM}\widehat{W}_{MM}s_{xMyM} \end{bmatrix} = \begin{bmatrix} \hat{\delta}_1(\widehat{W}_{11}) \\ \vdots \\ \hat{\delta}_M(\widehat{W}_{MM}) \end{bmatrix}
   $$

**结论**：当权重矩阵 $\widehat{W}$ 是块对角矩阵时，多方程 GMM 估计量在数值上等于对每个方程独立进行单方程 GMM 估计后的简单堆叠。

## Efficiency Equivalence

考虑逐个方程进行有效估计的情况。令每个方程 $m$ 采用其最优权重矩阵 $\widehat{W}_{mm} \xrightarrow{p} S_{mm}^{-1} = (E(\epsilon_{im}^2 x_{im} x'_{im}))^{-1}$。
此时，逐个方程估计量的堆叠 $\hat{\delta}(\widehat{W})$ 对应的系统权重矩阵为块对角矩阵：
$$
\operatorname{plim}_{n \to \infty} \widehat{W} = \begin{bmatrix} (E(\epsilon_{i1}^2 x_{i1} x'_{i1}))^{-1} & & \\ & \ddots & \\ & & (E(\epsilon_{iM}^2 x_{iM} x'_{iM}))^{-1} \end{bmatrix} \tag{4.4.2}
$$

**等效条件 (Uncorrelated Equations)**：
如果在实际推导中，忽略不同方程工具变量 $x_{im}$ 与 $x_{ih}$ 之间的依赖性（即忽略跨方程矩条件的关联）：
$$
E(\epsilon_{im}\epsilon_{ih}x_{im}x'_{ih}) = \mathbf{0} \quad \text{for all } m \neq h (= 1, 2, \dots, M) \tag{4.4.3}
$$
^equation-4-4-3

这意味着渐近方差矩阵 $S$ 具有块对角结构：
$$S = \begin{bmatrix} 
S_{11} & \mathbf{0} & \dots \\
\mathbf{0} & S_{22} & \dots \\
\vdots & \vdots & \ddots 
\end{bmatrix}, \quad \text{其中 } S_{mm} = E(\epsilon_{im}^2 x_{im} x'_{im})$$

此时，逆矩阵 $\hat{S}^{-1}$ 同样退化为块对角阵，代入系统估计量公式：
$$
\hat{\delta}(\hat{S}^{-1}) = \begin{bmatrix} (S'_{x1z1}S_{11}^{-1}S_{x1z1})^{-1} S'_{x1z1}S_{11}^{-1}s_{x1y1} \\ \vdots \\ (S'_{xMzM}S_{MM}^{-1}S_{xMzM})^{-1} S'_{xMzM}S_{MM}^{-1}s_{xMyM} \end{bmatrix} = \begin{bmatrix} \hat{\delta}_{1, \text{efficient}} \\ \vdots \\ \hat{\delta}_{M, \text{efficient}} \end{bmatrix}
$$

**详细证明过程 (Proof of Convergence)**：
回顾 GMM 估计量的抽样误差公式：
$$
\sqrt{n}(\hat{\delta}(\hat{W}) - \delta) = (S'_{xz}\hat{W}S_{xz})^{-1}S'_{xz}\hat{W}(\sqrt{n}\bar{g})
$$
在式 (4.4.3) 的假设下，$S$ 为块对角阵，其逆矩阵 $S^{-1} = \operatorname{diag}(S_{11}^{-1}, \dots, S_{MM}^{-1})$。
令 $\widehat{W}$ 为式 (4.4.2) 中定义的块对角权重矩阵，其每一块 $\widehat{W}_{mm} \xrightarrow{p} S_{mm}^{-1}$。
由于 $S_{xz}$ 也是块对角的，我们有：
$$\begin{aligned}
\sqrt{n}(\hat{\delta}(\widehat{W}) - \delta) &= \begin{bmatrix} (S'_{x1z1}\widehat{W}_{11}S_{x1z1})^{-1} & & \\ & \ddots & \end{bmatrix} \begin{bmatrix} S'_{x1z1}\widehat{W}_{11} & & \\ & \ddots & \end{bmatrix} \begin{bmatrix} \sqrt{n}\bar{g}_1 \\ \vdots \end{bmatrix} \\
&= \begin{bmatrix} (S'_{x1z1}\widehat{W}_{11}S_{x1z1})^{-1} S'_{x1z1}\widehat{W}_{11} (\sqrt{n}\bar{g}_1) \\ \vdots \end{bmatrix}
\end{aligned}$$
同理，对于全系统有效估计量 $\hat{\delta}(\hat{S}^{-1})$：
$$
\sqrt{n}(\hat{\delta}(\hat{S}^{-1}) - \delta) = \begin{bmatrix} (S'_{x1z1}S_{11}^{-1}S_{x1z1})^{-1} S'_{x1z1}S_{11}^{-1} (\sqrt{n}\bar{g}_1) \\ \vdots \end{bmatrix}
$$
由于 $\widehat{W}_{mm} \xrightarrow{p} S_{mm}^{-1}$ 且 $S_{xz}$ 的每一块 $S_{xmzm} \xrightarrow{p} \Sigma_{xmzm}$，两个表达式的每一块在极限下数值相等：
$$
\sqrt{n}(\hat{\delta}_m(\widehat{W}_{mm}) - \delta_m) - \sqrt{n}(\hat{\delta}_{m, \text{sys}} - \delta_m) \xrightarrow{p} \mathbf{0}
$$
累加所有块，即证得 $\sqrt{n}\hat{\delta}(\widehat{W}) - \sqrt{n}\hat{\delta}(\hat{S}^{-1}) \xrightarrow{p} \mathbf{0}$。

**结论**：忽略跨方程依赖性会导致 $S$ 矩阵非对角块清零，从而使系统有效估计在数学上等同于各方程独立进行的有效单方程估计。这证明了系统估计的效率增益完全源于对 $S$ 矩阵中非对角块（即跨方程依赖性）的利用。

## Efficiency Gain from Cross-Equation Dependence

当跨方程矩条件相关（$S$ 非块对角）时，比较以下两个估计量的渐近方差：

1.  **逐个方程有效估计的堆叠 ($\hat{\delta}_{diag}$)**:
    权重矩阵为 $\widehat{W}_{diag} = \operatorname{diag}(S_{11}^{-1}, \dots, S_{MM}^{-1})$。
2.  **全系统有效估计 ($\hat{\delta}_{sys}$)**:
    权重矩阵为 $\widehat{W}_{sys} = S^{-1}$（稠密矩阵）。

#### 渐近方差的数学表达式

令 $B = S_{xz}$ 为块对角矩阵。

对于 $\hat{\delta}_{diag}$，由于其权重矩阵不是全系统的 $S^{-1}$，其渐近方差由三明治公式给出：
$$
\text{Avar}(\hat{\delta}_{diag}) = (B'\widehat{W}_{diag}B)^{-1} (B'\widehat{W}_{diag} S \widehat{W}_{diag} B) (B'\widehat{W}_{diag}B)^{-1}
$$

对于 $\hat{\delta}_{sys}$，其渐近方差为：
$$
\text{Avar}(\hat{\delta}_{sys}) = (B' S^{-1} B)^{-1}
$$

#### 效率比较证明

根据 GMM 效率的最优性定理，对于任何对称正定权重矩阵 $W$，估计量 $\hat{\delta}(W)$ 的渐近方差满足：
$$
(B'WB)^{-1} B'WSWB (B'WB)^{-1} \ge (B'S^{-1}B)^{-1}
$$

**详细推导过程**：
定义线性算子 $M = (B'WB)^{-1} B'W$。则 $\text{Avar}(\hat{\delta}_{W}) = MSM'$。
我们考察 $MSM' - (B'S^{-1}B)^{-1}$ 的差值：
$$\begin{aligned}
& MSM' - (B'S^{-1}B)^{-1} \\
&= \left[ (B'WB)^{-1}B'W - (B'S^{-1}B)^{-1}B'S^{-1} \right] S \left[ (B'WB)^{-1}B'W - (B'S^{-1}B)^{-1}B'S^{-1} \right]'
\end{aligned}$$
由于 $S$ 是正定的（[Assumption 4.5](#^assumption-4-5)），上述二次型必然是半正定的：
$$
\Delta \text{Avar} = \mathbf{A} S \mathbf{A}' \ge 0, \quad \text{其中 } \mathbf{A} = (B'WB)^{-1}B'W - (B'S^{-1}B)^{-1}B'S^{-1}
$$

#### 效率增益的具体来源

当 $S$ 存在非对角块 $S_{mh} \neq 0$ 时，$\text{Avar}(\hat{\delta}_{diag})$ 无法抵消 $S$ 中的非对角元素，而 $\text{Avar}(\hat{\delta}_{sys})$ 通过 $S^{-1}$ 利用了全系统的逆协方差加权。

**等价条件 (Equality Condition)**：
$\text{Avar}(\hat{\delta}_{diag}) = \text{Avar}(\hat{\delta}_{sys})$ 当且仅当 $\mathbf{A} = \mathbf{0}$，即：
1. $S$ 是块对角的（跨方程不相关）。
2. 所有方程都是恰好识别的（此时 $B$ 可逆）。

## Numerical Equivalence and Identification

- **恰好识别 (Just Identified)**：
  如果每个方程都是恰好识别的（$K_m = L_m$），那么 $\widehat{W}$ 的选择在数值上无关紧要，$\hat{\delta} = S_{xz}^{-1} s_{xy}$。
- **过度识别 (Overidentified)**：
  如果系统中至少有一个方程是过度识别的，那么 $\widehat{W}$ 的选择会直接影响数值结果。

:::{admonition} Proposition
Proposition 4.3 (equivalence between single-equation and multiple-equation GMM)
对上述讨论总结如下：
- (a) 若所有方程都是**恰好识别**的，则逐个方程 GMM 与多方程 GMM 在数值上相同，且等于 IV 估计量。
- (b) 若至少有一个方程是**过度识别**的，但各方程在式 [(4.4.3)](#^equation-4-4-3) 的意义上是“不相关”的，则有效逐个方程 GMM 与有效多方程 GMM 在渐近意义上是等价的，即其差值的 $\sqrt{n}$ 倍依概率收敛于零。
:::

^prop-4-3

## Risks of Joint Estimation

- 除了 (a) 和 (b) 两种情况外，联合估计在渐近意义上更有效。
- 即使只对某一个方程感兴趣，通过与其他方程结合也能获得渐近效率增益。
- 然而，系数估计的小样本性质在不进行联合估计时可能更好。
- **模型误设 (Model Mis-specification)**: 如果模型误设，无论是单方程还是多方程 GMM 都是不一致的。随着系统中方程数量的增加，误设的可能性也会增加。

:::{admonition} Note
Example: Bias Propagation in Joint Estimation
假设 [Assumption 4.3](#^assumption-4-3) 对第 $M$ 个方程不成立，即 $\mathbb{E}(\mathbf{x}_{iM} \cdot \varepsilon_{iM}) \neq 0$。则 GMM 估计量 $\hat{\delta}(\widehat{W})$ 的渐近偏误为：
$$
\text{plim}_{n \to \infty} \hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}) - \boldsymbol{\delta} = (\boldsymbol{\Sigma}_{xz}' \mathbf{W} \boldsymbol{\Sigma}_{xz})^{-1} \boldsymbol{\Sigma}_{xz}' \mathbf{W} \begin{bmatrix} \mathbf{0} \\ \vdots \\ \mathbf{0} \\ \mathbb{E}(\mathbf{x}_{iM} \cdot \varepsilon_{iM}) \end{bmatrix} \tag{4.4.4}
$$
^equation-4-4-4

除非 $\widehat{\mathbf{W}}$ 是块对角阵，否则所有方程 $i = 1, \dots, M$ 的估计量 $\boldsymbol{\delta}_i$ 都是渐近有偏的。

**偏误传播推导 (Bias Propagation Derivation)**:
考虑 $M=2$ 的简化系统，假设只有第二个方程存在误设 ($\mathbb{E}(\mathbf{x}_{i2} \cdot \varepsilon_{i2}) \neq 0$)：

$$
\begin{aligned}
\begin{pmatrix} \hat{\delta}_1 \\ \hat{\delta}_2 \end{pmatrix} - \begin{pmatrix} \delta_1 \\ \delta_2 \end{pmatrix} &= \underbrace{(\boldsymbol{\Sigma}_{xz}' \mathbf{W} \boldsymbol{\Sigma}_{xz})^{-1} \boldsymbol{\Sigma}_{xz}' \mathbf{W}}_{A \equiv \begin{pmatrix} A_{11} & A_{12} \\ A_{21} & A_{22} \end{pmatrix}} \begin{bmatrix} 0 \\ \mathbb{E}(\mathbf{x}_{i2} \cdot \varepsilon_{i2}) \end{bmatrix} \\
&= \begin{bmatrix} A_{12} \mathbb{E}(\mathbf{x}_{i2} \cdot \varepsilon_{i2}) \\ A_{22} \mathbb{E}(\mathbf{x}_{i2} \cdot \varepsilon_{i2}) \end{bmatrix}
\end{aligned}
$$
若联合估计使用的权重矩阵 $\mathbf{W}$ 包含非对角块（即考虑跨方程依赖），则 $A_{12}$ 通常不为零。即使第一个方程本身正确设定，第二个方程的偏误也会通过 $A_{12}$ 传播给 $\hat{\delta}_1$。

:::

**Conditional Homoskedasticity in System GMM**

:::{admonition} Definition (Assumption 4.7 (conditional homoskedasticity))
对于所有 $m, h = 1, 2, \dots, M$：
$$
\mathbb{E}(\varepsilon_{im} \varepsilon_{ih} \mid \mathbf{x}_{im}, \mathbf{x}_{ih}) = \sigma_{mh}
$$
:::

^assumption-4-7

此条件意味着 [式 (4.1.11)](#^equation-4-1-11) 中的 $S$ 可以写作：

$$
S = \begin{bmatrix} 
\sigma_{11}\mathbb{E}(\mathbf{x}_{i1}\mathbf{x}'_{i1}) & \dots & \sigma_{1M}\mathbb{E}(\mathbf{x}_{i1}\mathbf{x}'_{iM}) \\ 
\vdots & \ddots & \vdots \\ 
\sigma_{M1}\mathbb{E}(\mathbf{x}_{iM}\mathbf{x}'_{i1}) & \dots & \sigma_{MM}\mathbb{E}(\mathbf{x}_{iM}\mathbf{x}'_{iM}) 
\end{bmatrix} \tag{4.5.2}
$$

^equation-4-5-2

由于根据 [Assumption 4.5](#^assumption-4-5)，$S$ 是有限的，因此该分解意味着对于所有 $m, h (= 1, 2, \dots, M)$，$\mathbb{E}(\mathbf{x}_{im}\mathbf{x}'_{ih})$ 存在且有限。

**FIVE, 3SLS, and SUR**

## Full-Information Instrumental Variables Efficient (FIVE)

根据条件同方差假设 [Assumption 4.7](#^assumption-4-7) 和 [式 (4.5.2)](#^equation-4-5-2)，$S$ 的一致估计量为：

$$
\widehat{S} = \begin{bmatrix}
\hat{\sigma}_{11} \cdot \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{i1}\mathbf{x}'_{i1} \right) & \dots & \hat{\sigma}_{1M} \cdot \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{i1}\mathbf{x}'_{iM} \right) \\
\vdots & \ddots & \vdots \\
\hat{\sigma}_{M1} \cdot \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{iM}\mathbf{x}'_{i1} \right) & \dots & \hat{\sigma}_{MM} \cdot \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{iM}\mathbf{x}'_{iM} \right)
\end{bmatrix} \tag{4.5.3}
$$

^equation-4-5-3

其中，$\hat{\sigma}_{mh}$ 是基于一致估计量 $\hat{\delta}_m$（通常使用单方程 2SLS）得到的残差协方差估计：

$$
\hat{\sigma}_{mh} \equiv \frac{1}{n} \sum_{i=1}^n \hat{\epsilon}_{im} \hat{\epsilon}_{ih}, \quad \hat{\epsilon}_{im} \equiv y_{im} - \mathbf{z}'_{im}\hat{\delta}_m \quad (m, h = 1, 2, \dots, M) \tag{4.5.4}
$$

^equation-4-5-4

**FIVE 估计量** 定义为使用上述 $\widehat{S}$ 作为权重矩阵的多方程 GMM 估计量：

$$
\hat{\delta}_{\text{FIVE}} \equiv \hat{\delta}(\widehat{S}^{-1})
$$

^equation-4-5-5

:::{admonition} Note
Understanding FIVE
- **Full-Information (全信息)**: 与逐方程估计 (Single-equation estimation) 不同，FIVE 是一种**全系统 (System-wide)** 估计方法。它同时利用了系统中**所有方程**的信息，特别是通过 $\sigma_{mh}$ 捕捉了不同方程误差项之间的**同期相关性 (Contemporaneous Correlation)**。
- **Efficient (有效性)**: 在条件同方差假设下，通过使用基于全系统信息的最优权重矩阵 $\widehat{S}^{-1}$，FIVE 在所有基于工具变量的线性系统估计量中实现了**最小的渐近方差**。

**Proposition:** Proposition 4.4 (large-sample properties of FIVE)
假设 [[[#^assumption-4-1|Assumption 4.1](#^assumption-4-1)]]- [4.5](#^assumption-4-5) 和 [Assumption 4.7](#^assumption-4-7) 成立。进一步假设对于所有 $m, h (= 1, 2, \dots, M)$，$\mathbb{E}(\mathbf{z}_{im}\mathbf{z}'_{ih})$ 存在且有限。令 $S$ 和 $\widehat{S}$ 分别如 [(4.5.2)](#^equation-4-5-2) 和 [(4.5.3)](#^equation-4-5-3) 所示。则：
- (a) $\widehat{S} \xrightarrow{p} S$;
- (b) $\hat{\delta}_{\text{FIVE}}$ 是一致的、渐近正态的且有效的，其渐近方差 $\text{Avar}(\hat{\delta}_{\text{FIVE}})$ 由 [(4.3.3)](#^equation-4-3-3) 给出；
- (c) [(4.3.4)](#^equation-4-3-4) 中给出的估计渐近方差是 $\text{Avar}(\hat{\delta}_{\text{FIVE}})$ 的一致估计量；
- (d) **Sargan's statistic (J-statistic)**:
$$
J(\hat{\delta}_{\text{FIVE}}, \widehat{S}^{-1}) \equiv n \cdot g_n(\hat{\delta}_{\text{FIVE}})' \widehat{S}^{-1} g_n(\hat{\delta}_{\text{FIVE}}) \xrightarrow{d} \chi^2 \left( \sum_m (K_m - L_m) \right)
$$
其中 $g_n(\cdot)$ 由 [(4.2.1)](#^equation-4-2-1) 给出。
:::

^prop-4-4

## Three Stage Least Squares (3SLS)

当所有方程使用相同的工具变量集时，FIVE 公式可简化为 **3SLS** 估计量。

令误差项向量为：
$$
\underset{(M \times 1)}{\boldsymbol{\epsilon}_i} \equiv \begin{bmatrix} \epsilon_{i1} \\ \vdots \\ \epsilon_{iM} \end{bmatrix} \tag{4.5.5}
$$
其跨方程二阶矩矩阵（同期协方差矩阵）为：
$$
\underset{(M \times M)}{\boldsymbol{\Sigma}} \equiv \begin{bmatrix} \sigma_{11} & \dots & \sigma_{1M} \\ \vdots & \ddots & \vdots \\ \sigma_{M1} & \dots & \sigma_{MM} \end{bmatrix} = \mathbb{E}(\boldsymbol{\epsilon}_i \boldsymbol{\epsilon}'_i) \tag{4.5.6}
$$

使用单方程 2SLS 估计量 $\hat{\delta}_m$ 得到的残差 $\hat{\epsilon}_{im}$ 来估计 $\boldsymbol{\Sigma}$：
$$
\widehat{\boldsymbol{\Sigma}} \equiv \begin{bmatrix} \hat{\sigma}_{11} & \dots & \hat{\sigma}_{1M} \\ \vdots & \ddots & \vdots \\ \hat{\sigma}_{M1} & \dots & \hat{\sigma}_{MM} \end{bmatrix} = \frac{1}{n} \sum_{i=1}^n \hat{\boldsymbol{\epsilon}}_i \hat{\boldsymbol{\epsilon}}'_i \tag{4.5.7}
$$
^equation-4-5-7

#### Kronecker Product Representation

假设 $\mathbf{x}_i (= \mathbf{x}_{i1} = \mathbf{x}_{i2} = \dots = \mathbf{x}_{iM})$ 是维度为 $K$ 的共同工具变量集。
矩条件向量 $g_i$ 可以表示为误差向量与工具变量向量的张量积：
$$
\underset{(MK \times 1)}{g_i} = \begin{pmatrix} x_i \epsilon_{i1} \\ x_i \epsilon_{i2} \\ \vdots \\ x_i \epsilon_{iM} \end{pmatrix} = \boldsymbol{\epsilon}_i \otimes \mathbf{x}_i \tag{4.5.8}
$$

:::{admonition} Note
Kronecker Product Intuition
Kronecker 积具有如下性质：
- 标量乘法：$1 \otimes 2 = 1 \times 2 = 2$
- 向量积：$\begin{pmatrix} a \\ b \end{pmatrix} \otimes \begin{pmatrix} c \\ d \end{pmatrix} = \begin{pmatrix} ac \\ ad \\ bc \\ bd \end{pmatrix}$
- 矩阵乘向量：$\begin{pmatrix} a \\ b \end{pmatrix} \otimes M = \begin{pmatrix} aM \\ bM \end{pmatrix}$
- 矩阵积：$A \otimes B = \begin{bmatrix} a_{11}B & \dots & a_{1M}B \\ \vdots & \ddots & \vdots \\ a_{M1}B & \dots & a_{MM}B \end{bmatrix}$

:::

渐近方差 $S$ 及其一致估计量 $\widehat{S}$ 的紧凑形式为：
$$
\underset{(MK \times MK)}{S} = \underset{(M \times M)}{\boldsymbol{\Sigma}} \otimes \underset{(K \times K)}{\mathbb{E}(\mathbf{x}_i \mathbf{x}'_i)} \tag{4.5.9}
$$
$$
\widehat{S} = \widehat{\boldsymbol{\Sigma}} \otimes \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \mathbf{x}'_i \right) \tag{4.5.10}
$$
^equation-4-5-10

根据性质 $(A \otimes B)^{-1} = A^{-1} \otimes B^{-1}$，有效权重矩阵 $\widehat{W} = \widehat{S}^{-1}$ 为：
$$
\widehat{W} = \widehat{S}^{-1} = \widehat{\boldsymbol{\Sigma}}^{-1} \otimes \left( \frac{\mathbf{X}'\mathbf{X}}{n} \right)^{-1}
$$
由此得到 $\widehat{W}$ 的 $(m, h)$ 分块（block）：
$$
\widehat{W}_{mh} \left( \equiv (m,h) \text{ block of } \widehat{W} \right) = \hat{\sigma}^{mh} \cdot \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \mathbf{x}'_i \right)^{-1} \tag{4.5.11}
$$
^equation-4-5-11

其中 $\hat{\sigma}^{mh}$ 是 $\widehat{\boldsymbol{\Sigma}}^{-1}$ 的第 $(m, h)$ 个元素。

其完整分块矩阵形式（以 $M=2$ 为例）如下：
$$
\widehat{W} = \begin{pmatrix}
\hat{\sigma}^{11} \left( \frac{\mathbf{X}'\mathbf{X}}{n} \right)^{-1} & \hat{\sigma}^{12} \left( \frac{\mathbf{X}'\mathbf{X}}{n} \right)^{-1} \\ 
\hat{\sigma}^{21} \left( \frac{\mathbf{X}'\mathbf{X}}{n} \right)^{-1} & \hat{\sigma}^{22} \left( \frac{\mathbf{X}'\mathbf{X}}{n} \right)^{-1} 
\end{pmatrix}
$$

#### The 3SLS Estimator

:::{admonition} Note
Projection Matrix Intuition
在 3SLS 中，权重矩阵的每一块都包含共同工具变量的投影信息。设 $\mathbf{X}$ 为 $n \times K$ 的工具变量矩阵，$\mathbf{Z}_m$ 为第 $m$ 个方程的回归量矩阵。
3SLS 估计量公式 $\hat{\delta} = (\mathbf{S}_{XZ}' \widehat{\mathbf{W}} \mathbf{S}_{XZ})^{-1} (\mathbf{S}_{XZ}' \widehat{\mathbf{W}} \mathbf{s}_{XY})$ 中的各块详细推导如下：

1. **左侧矩阵块 (Denominator blocks)**:

$$
\begin{aligned}
\mathbf{S}'_{XZ, m} \widehat{\mathbf{W}}_{mh} \mathbf{S}_{XZ, h} &= \left( \frac{\mathbf{Z}'_m \mathbf{X}}{n} \right) \left[ \hat{\sigma}^{mh} \left( \frac{\mathbf{X}'\mathbf{X}}{n} \right)^{-1} \right] \left( \frac{\mathbf{X}' \mathbf{Z}_h}{n} \right) \\
&= \frac{1}{n} \hat{\sigma}^{mh} \left[ \mathbf{Z}'_m \mathbf{X} (\mathbf{X}'\mathbf{X})^{-1} \mathbf{X}' \mathbf{Z}_h \right] \\
&= \frac{1}{n} \hat{\sigma}^{mh} (\mathbf{Z}'_m \mathbf{P}_X \mathbf{Z}_h)
\end{aligned}
$$

2. **右侧向量块 (Numerator blocks)**:

$$
\begin{aligned}
\mathbf{S}'_{XZ, m} \widehat{\mathbf{W}}_{mh} \mathbf{s}_{XY, h} &= \left( \frac{\mathbf{Z}'_m \mathbf{X}}{n} \right) \left[ \hat{\sigma}^{mh} \left( \frac{\mathbf{X}'\mathbf{X}}{n} \right)^{-1} \right] \left( \frac{\mathbf{X}' \mathbf{y}_h}{n} \right) \\
&= \frac{1}{n} \hat{\sigma}^{mh} \left[ \mathbf{Z}'_m \mathbf{X} (\mathbf{X}'\mathbf{X})^{-1} \mathbf{X}' \mathbf{y}_h \right] \\
&= \frac{1}{n} \hat{\sigma}^{mh} (\mathbf{Z}'_m \mathbf{P}_X \mathbf{y}_h)
\end{aligned}
$$
其中 $\underset{(n \times n)}{\mathbf{P}_X} = \mathbf{X}(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'$ 是工具变量空间的投影矩阵。

对于 $M=2$ 的系统，估计量可以写为极其直观的矩阵形式：
$$
\begin{pmatrix} \hat{\delta}_1 \\ \hat{\delta}_2 \end{pmatrix} = \begin{pmatrix} \hat{\sigma}^{11} \mathbf{Z}'_1 \mathbf{P}_X \mathbf{Z}_1 & \hat{\sigma}^{12} \mathbf{Z}'_1 \mathbf{P}_X \mathbf{Z}_2 \\ \hat{\sigma}^{21} \mathbf{Z}'_2 \mathbf{P}_X \mathbf{Z}_1 & \hat{\sigma}^{22} \mathbf{Z}'_2 \mathbf{P}_X \mathbf{Z}_2 \end{pmatrix}^{-1} \begin{pmatrix} \hat{\sigma}^{11} \mathbf{Z}'_1 \mathbf{P}_X \mathbf{y}_1 + \hat{\sigma}^{12} \mathbf{Z}'_1 \mathbf{P}_X \mathbf{y}_2 \\ \hat{\sigma}^{21} \mathbf{Z}'_2 \mathbf{P}_X \mathbf{y}_1 + \hat{\sigma}^{22} \mathbf{Z}'_2 \mathbf{P}_X \mathbf{y}_2 \end{pmatrix}
$$
这表明 3SLS 实际上是在跨方程加权的同时，利用投影矩阵 $\mathbf{P}_X$ 对所有回归量进行了预投影处理，从而在全系统层面捕捉了同期相关性。

**Proposition:** Proposition 4.4 (Large-sample properties of 3SLS as a case of FIVE)
假设 [[[#^assumption-4-1|Assumption 4.1](#^assumption-4-1)]]- [4.5](#^assumption-4-5) 和 [Assumption 4.7](#^assumption-4-7) 成立。进一步假设对于所有 $m, h (= 1, 2, \dots, M)$，$\mathbb{E}(\mathbf{z}_{im}\mathbf{z}'_{ih})$ 存在且有限。令 $S$ 和 $\widehat{S}$ 分别如 [(4.5.9)](#^equation-4-5-9) 和 [(4.5.10)](#^equation-4-5-10) 所示。则：
- (a) $\widehat{S} \xrightarrow{p} S$;
- (b) $\hat{\delta}_{\text{3SLS}}$ 是一致的、渐近正态的且有效的，其渐近方差 $\text{Avar}(\hat{\delta}_{\text{3SLS}})$ 由 [(4.5.15)](#^equation-4-5-15) 给出；
- (c) 估计的渐近方差是 $\text{Avar}(\hat{\delta}_{\text{3SLS}})$ 的一致估计量；
- (d) **Sargan's statistic (J-statistic)**:
$$
J(\hat{\delta}_{\text{3SLS}}, \widehat{S}^{-1}) \equiv n \cdot g_n(\hat{\delta}_{\text{3SLS}})' \widehat{S}^{-1} g_n(\hat{\delta}_{\text{3SLS}}) \xrightarrow{d} \chi^2 \left( MK - \sum_m L_m \right)
$$
其中 $g_n(\cdot)$ 由 [(4.2.1)](#^equation-4-2-1) 给出。
^prop-4-4-3sls

:::

高效多方程 GMM 估计量 $\hat{\delta}_{\text{3SLS}}$ 为：
$$\hat{\delta}_{\text{3SLS}} = \begin{bmatrix} 
\hat{\sigma}^{11}\widehat{\mathbf{A}}_{11} & \dots & \hat{\sigma}^{1M}\widehat{\mathbf{A}}_{1M} \\
\vdots & \ddots & \vdots \\
\hat{\sigma}^{M1}\widehat{\mathbf{A}}_{M1} & \dots & \hat{\sigma}^{MM}\widehat{\mathbf{A}}_{MM}
\end{bmatrix}^{-1} \begin{bmatrix}
\hat{\sigma}^{11}\hat{\mathbf{c}}_{11} + \dots + \hat{\sigma}^{1M}\hat{\mathbf{c}}_{1M} \\
\vdots \\
\hat{\sigma}^{M1}\hat{\mathbf{c}}_{M1} + \dots + \hat{\sigma}^{MM}\hat{\mathbf{c}}_{MM}
\end{bmatrix} \tag{4.5.12}$$
^equation-4-5-12

其中：
$$
\widehat{\mathbf{A}}_{mh} \equiv \left( \frac{1}{n} \mathbf{Z}'_m \mathbf{X} \right) \left( \frac{\mathbf{X}'\mathbf{X}}{n} \right)^{-1} \left( \frac{1}{n} \mathbf{X}' \mathbf{Z}_h \right) = \frac{1}{n^2} (\mathbf{Z}'_m \mathbf{P}_X \mathbf{Z}_h) \tag{4.5.13}
$$
$$
\hat{\mathbf{c}}_{mh} \equiv \left( \frac{1}{n} \mathbf{Z}'_m \mathbf{X} \right) \left( \frac{\mathbf{X}'\mathbf{X}}{n} \right)^{-1} \left( \frac{1}{n} \mathbf{X}' \mathbf{y}_h \right) = \frac{1}{n^2} (\mathbf{Z}'_m \mathbf{P}_X \mathbf{y}_h) \tag{4.5.14}
$$

:::{admonition} Note
$M=2$ System Representation
对于两方程系统，手写笔记展示了各分量与单方程估计量的关系：

$$
\begin{cases}
\hat{\delta}_1 = \widehat{\mathbf{A}}_{11}^{-1} \hat{\mathbf{c}}_{11} = (\mathbf{Z}'_1 \mathbf{P}_X \mathbf{Z}_1)^{-1} (\mathbf{Z}'_1 \mathbf{P}_X \mathbf{y}_1) \\
\hat{\delta}_2 = \widehat{\mathbf{A}}_{22}^{-1} \hat{\mathbf{c}}_{22} = (\mathbf{Z}'_2 \mathbf{P}_X \mathbf{Z}_2)^{-1} (\mathbf{Z}'_2 \mathbf{P}_X \mathbf{y}_2)
\end{cases}
$$
完整的 3SLS 估计量通过跨方程权重 $\hat{\sigma}^{mh}$ 耦合：
$$
\begin{pmatrix} \hat{\delta}_1 \\ \hat{\delta}_2 \end{pmatrix} = \begin{pmatrix} \hat{\sigma}^{11} \widehat{\mathbf{A}}_{11} & \hat{\sigma}^{12} \widehat{\mathbf{A}}_{12} \\ \hat{\sigma}^{21} \widehat{\mathbf{A}}_{21} & \hat{\sigma}^{22} \widehat{\mathbf{A}}_{22} \end{pmatrix}^{-1} \begin{pmatrix} \hat{\sigma}^{11} \hat{\mathbf{c}}_{11} + \hat{\sigma}^{12} \hat{\mathbf{c}}_{12} \\ \hat{\sigma}^{21} \hat{\mathbf{c}}_{21} + \hat{\sigma}^{22} \hat{\mathbf{c}}_{22} \end{pmatrix}
$$


:::

#### Large-Sample Properties

$\hat{\delta}_{\text{3SLS}}$ 的渐近方差 $\text{Avar}(\hat{\delta}_{\text{3SLS}})$ 表达式为：
$$\text{Avar}(\hat{\delta}_{\text{3SLS}}) = \begin{bmatrix} 
\sigma^{11}\mathbf{A}_{11} & \dots & \sigma^{1M}\mathbf{A}_{1M} \\
\vdots & \ddots & \vdots \\
\sigma^{M1}\mathbf{A}_{M1} & \dots & \sigma^{MM}\mathbf{A}_{MM}
\end{bmatrix}^{-1} \tag{4.5.15}$$
^equation-4-5-15

其中
$$
\mathbf{A}_{mh} \equiv E(\mathbf{z}_{im}\mathbf{x}'_i) [E(\mathbf{x}_i\mathbf{x}'_i)]^{-1} E(\mathbf{x}_i\mathbf{z}'_{ih}) \tag{4.5.16}
$$
^equation-4-5-16

且 $\sigma^{mh}$ 是 $\boldsymbol{\Sigma}^{-1}$ 的第 $(m, h)$ 个元素。

其一致估计量（Consistent Estimator）为：
$$\widehat{\text{Avar}}(\hat{\delta}_{\text{3SLS}}) = \begin{bmatrix} 
\hat{\sigma}^{11}\widehat{\mathbf{A}}_{11} & \dots & \hat{\sigma}^{1M}\widehat{\mathbf{A}}_{1M} \\
\vdots & \ddots & \vdots \\
\hat{\sigma}^{M1}\widehat{\mathbf{A}}_{M1} & \dots & \hat{\sigma}^{MM}\widehat{\mathbf{A}}_{MM}
\end{bmatrix}^{-1} \tag{4.5.17}$$
^equation-4-5-17

:::{admonition} Proposition
Proposition 4.5 (large-sample properties of 3SLS)
假设 [[[#^assumption-4-1|Assumption 4.1](#^assumption-4-1)]]- [4.5](#^assumption-4-5) 和 [Assumption 4.7](#^assumption-4-7) 成立，且 $\mathbf{x}_{im} = \mathbf{x}_i$。进一步假设 $\mathbb{E}(\mathbf{z}_{im}\mathbf{x}'_{ih})$ 存在且有限。令 $\widehat{\boldsymbol{\Sigma}}$ 为使用 2SLS 残差计算的矩阵。则：
- (a) $\hat{\delta}_{\text{3SLS}}$ 是一致的、渐近正态的且有效的，渐近方差由 [(4.5.15)](#^equation-4.5.15) 给出。
- (b) 估计的渐近方差是其一致估计量。
- (c) **Sargan's statistic**:
$$
J(\hat{\delta}_{\text{3SLS}}, \widehat{S}^{-1}) \equiv n \cdot g_n(\hat{\delta}_{\text{3SLS}})' \widehat{S}^{-1} g_n(\hat{\delta}_{\text{3SLS}}) \xrightarrow{d} \chi^2 \left( MK - \sum_m L_m \right)
$$
其中 $\widehat{S} = \widehat{\boldsymbol{\Sigma}} \otimes (\frac{1}{n} \sum \mathbf{x}_i \mathbf{x}'_i)$，$K$ 为共同工具变量数量。
:::

^prop-4-5

## Seemingly Unrelated Regressions (SUR)

当所有回归量（regressors）本身就是预定变量（predetermined）且满足跨方程正交性时，3SLS 公式可进一步简化。

如果工具变量集是所有回归量的并集：
$$
\mathbf{x}_i = \text{union of } (\mathbf{z}_{i1}, \dots, \mathbf{z}_{iM}) \tag{4.5.18}
$$
^equation-4-5-18

这等价于所有回归量满足“跨方程”正交性条件：
$$
E(\mathbf{z}_{im} \cdot \epsilon_{ih}) = \mathbf{0} \quad (m, h = 1, 2, \dots, M) \tag{4.5.18'}
$$
^equation-4-5-18-prime

在这种简化情况下的估计量称为 **SUR 估计量**，记作 $\hat{\delta}_{\text{SUR}}$。由于回归量本身就在工具变量集中，不再需要投影处理（no projection），相关分量重新计算为：
$$
\widehat{\mathbf{A}}_{mh} = \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} \mathbf{z}'_{ih} = \frac{\mathbf{Z}'_m \mathbf{Z}_h}{n} \tag{4.5.13'}
$$
^equation-4-5-13-prime

$$
\hat{\mathbf{c}}_{mh} = \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} \cdot y_{ih} = \frac{\mathbf{Z}'_m \mathbf{y}_h}{n} \tag{4.5.14'}
$$
^equation-4-5-14-prime

$$
\mathbf{A}_{mh} = E(\mathbf{z}_{im} \mathbf{z}'_{ih}) \tag{4.5.16'}
$$
^equation-4-5-16-prime

:::{admonition} Note
SUR System Representation ($M=2$)
对于 $M=2$ 系统，SUR 估计量可以紧凑地写为：
$$
\begin{pmatrix} \hat{\delta}_{1, \text{SUR}} \\ \hat{\delta}_{2, \text{SUR}} \end{pmatrix} = \begin{pmatrix} \hat{\sigma}^{11} \mathbf{Z}'_1 \mathbf{Z}_1 & \hat{\sigma}^{12} \mathbf{Z}'_1 \mathbf{Z}_2 \\ \hat{\sigma}^{21} \mathbf{Z}'_2 \mathbf{Z}_1 & \hat{\sigma}^{22} \mathbf{Z}'_2 \mathbf{Z}_2 \end{pmatrix}^{-1} \begin{pmatrix} \hat{\sigma}^{11} \mathbf{Z}'_1 \mathbf{y}_1 + \hat{\sigma}^{12} \mathbf{Z}'_1 \mathbf{y}_2 \\ \hat{\sigma}^{21} \mathbf{Z}'_2 \mathbf{y}_1 + \hat{\sigma}^{22} \mathbf{Z}'_2 \mathbf{y}_2 \end{pmatrix}
$$
若各方程间误差项不相关（$\hat{\sigma}^{12} = \hat{\sigma}^{21} = 0$），则 SUR 估计量退化为对每个方程分别进行的 **OLS 估计**：
$$
\hat{\delta}_{1, \text{SUR}} = (\mathbf{Z}'_1 \mathbf{Z}_1)^{-1} \mathbf{Z}'_1 \mathbf{y}_1, \quad \hat{\delta}_{2, \text{SUR}} = (\mathbf{Z}'_2 \mathbf{Z}_2)^{-1} \mathbf{Z}'_2 \mathbf{y}_2
$$

**Proposition:** Proposition 4.6 (large-sample properties of SUR)
假设 [[[#^assumption-4-1|Assumption 4.1](#^assumption-4-1)]]–[4.5](#^assumption-4-5) 和 [Assumption 4.7](#^assumption-4-7) 成立，且 $\mathbf{x}_i = \text{union of } (\mathbf{z}_{i1}, \dots, \mathbf{z}_{iM})$。令 $\widehat{\boldsymbol{\Sigma}}$ 为使用 **OLS 残差**按 [(4.5.7)](#^equation-4-5-7) 计算的 $M \times M$ 误差跨方程矩估计矩阵。则：
- (a) 由 [(4.5.12)](#^equation-4-5-12) 给出且其中 $\widehat{\mathbf{A}}_{mh}$ 和 $\hat{\mathbf{c}}_{mh}$ 分别由 [(4.5.13')](#^equation-4-5-13-prime) 和 [(4.5.14')](#^equation-4-5-14-prime) 定义的 $\hat{\delta}_{\text{SUR}}$ 是一致的、渐近正态的且有效的。其渐近方差 $\text{Avar}(\hat{\delta}_{\text{SUR}})$ 由 [(4.5.15)](#^equation-4-5-15) 给出，其中 $\mathbf{A}_{mh}$ 由 [(4.5.16')](#^equation-4-5-16-prime) 定义。
- (b) 由 [(4.5.17)](#^equation-4-5-17) 给出且其中 $\widehat{\mathbf{A}}_{mh}$ 由 [(4.5.13')](#^equation-4-5-13-prime) 定义的估计渐近方差是 $\text{Avar}(\hat{\delta}_{\text{SUR}})$ 的一致估计量。
- (c) **Sargan's statistic**:
$$
J(\hat{\delta}_{\text{SUR}}, \widehat{\mathbf{S}}^{-1}) \equiv n \cdot \mathbf{g}_n(\hat{\delta}_{\text{SUR}})' \widehat{\mathbf{S}}^{-1} \mathbf{g}_n(\hat{\delta}_{\text{SUR}}) \xrightarrow{d} \chi^2 \left( MK - \sum_m L_m \right)
$$
其中 $\widehat{\mathbf{S}} = \widehat{\boldsymbol{\Sigma}} \otimes \left( \frac{1}{n} \sum_i \mathbf{x}_i \mathbf{x}'_i \right)$，$K$ 是共同工具变量的数量，$g_n(\cdot)$ 由 [(4.2.1)](#^equation-4-2-1) 给出。
^prop-4-6

:::

## SUR versus OLS

当回归量是预定变量（predetermined）时，系统既可以使用 SUR 估计，也可以对每个方程分别进行 OLS 估计。它们之间的逻辑关系如下：

#### 估计量演化逻辑 (Flowchart Intuition)

- **单方程路径**: `高效单方程 GMM` $\xrightarrow{\text{条件同方差}}$ `单方程 2SLS` $\xrightarrow{\mathbf{x}_i = \mathbf{z}_i}$ `单方程 OLS`
- **全系统路径**: `高效多方程 GMM` $\xrightarrow{\text{条件同方差}}$ `FIVE` $\xrightarrow{\text{共同 IV}}$ `3SLS` $\xrightarrow{\mathbf{x}_i = \text{union}(\mathbf{z}_{im})}$ `SUR`

#### 情况 (a)：数值等价性 (Numerical Equivalence) —— 多元回归

如果所有方程的回归量完全相同，即 $\mathbf{z}_{i1} = \dots = \mathbf{z}_{iM} = \mathbf{x}_i$，此时的 SUR 称为**多元回归 (Multivariate Regression)**。在这种情况下，**SUR 估计量在数值上等于逐方程 OLS 估计量**。

**数学推导 (Derivation)**:
设 $\widehat{\mathbf{A}} = \frac{\mathbf{X}'\mathbf{X}}{n}$ 为共同的回归量样本矩矩阵，$\hat{\mathbf{c}}_m = \frac{\mathbf{X}'\mathbf{y}_m}{n}$ 为第 $m$ 个方程的回归量与因变量的样本矩向量。对于 $M=2$ 系统，SUR 估计量为：

$$
\begin{aligned}
\hat{\delta}_{\text{SUR}} &= \begin{bmatrix} \hat{\sigma}^{11}\widehat{\mathbf{A}} & \hat{\sigma}^{12}\widehat{\mathbf{A}} \\ \hat{\sigma}^{21}\widehat{\mathbf{A}} & \hat{\sigma}^{22}\widehat{\mathbf{A}} \end{bmatrix}^{-1} \begin{bmatrix} \hat{\sigma}^{11}\hat{\mathbf{c}}_1 + \hat{\sigma}^{12}\hat{\mathbf{c}}_2 \\ \hat{\sigma}^{21}\hat{\mathbf{c}}_1 + \hat{\sigma}^{22}\hat{\mathbf{c}}_2 \end{bmatrix} \\
&= \left[ \widehat{\boldsymbol{\Sigma}}^{-1} \otimes \widehat{\mathbf{A}} \right]^{-1} \left( \widehat{\boldsymbol{\Sigma}}^{-1} \otimes \mathbf{I} \right) \begin{bmatrix} \hat{\mathbf{c}}_1 \\ \hat{\mathbf{c}}_2 \end{bmatrix} \\

&= \left( \widehat{\boldsymbol{\Sigma}} \otimes \widehat{\mathbf{A}}^{-1} \right) \left( \widehat{\boldsymbol{\Sigma}}^{-1} \otimes \mathbf{I} \right) \begin{bmatrix} \hat{\mathbf{c}}_1 \\ \hat{\mathbf{c}}_2 \end{bmatrix} \quad (\text{利用 } (A \otimes B)^{-1} = A^{-1} \otimes B^{-1}) \\
&= \left( \widehat{\boldsymbol{\Sigma}}\widehat{\boldsymbol{\Sigma}}^{-1} \otimes \widehat{\mathbf{A}}^{-1}\mathbf{I} \right) \begin{bmatrix} \hat{\mathbf{c}}_1 \\ \hat{\mathbf{c}}_2 \end{bmatrix} \quad (\text{利用 } (A \otimes B)(C \otimes D) = AC \otimes BD) \\
&= \left( \mathbf{I} \otimes \widehat{\mathbf{A}}^{-1} \right) \begin{bmatrix} \hat{\mathbf{c}}_1 \\ \hat{\mathbf{c}}_2 \end{bmatrix} = \begin{bmatrix} \widehat{\mathbf{A}}^{-1} \hat{\mathbf{c}}_1 \\ \widehat{\mathbf{A}}^{-1} \hat{\mathbf{c}}_2 \end{bmatrix} = \begin{bmatrix} (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{y}_1 \\ (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{y}_2 \end{bmatrix} = \hat{\delta}_{\text{OLS}}
\end{aligned}
$$

此时多元回归的渐近方差及其估计量为：
$$
\text{Avar}(\hat{\delta}) = \boldsymbol{\Sigma} \otimes [E(\mathbf{x}_i \mathbf{x}'_i)]^{-1} \tag{4.5.22}
$$
^equation-4-5-22

$$
\widehat{\text{Avar}}(\hat{\delta}) = \widehat{\boldsymbol{\Sigma}} \otimes \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \mathbf{x}'_i \right)^{-1} \tag{4.5.23}
$$
^equation-4-5-23

#### 情况 (b)：效率增益 (Efficiency Gain)

如果各方程的回归量不同，且跨方程误差项相关（$\sigma_{mh} \neq 0$ for $m \neq h$），则 **SUR 估计量比逐方程 OLS 更有效**。

考虑全系统矩条件 $\mathbb{E}(\mathbf{g}_i) = \mathbf{0}$，其中 $\mathbf{g}_i = \boldsymbol{\epsilon}_i \otimes \mathbf{x}_i$。令 $\mathbf{B} = \boldsymbol{\Sigma}_{XZ}$ 为系统回归量矩阵。

1. **全系统有效估计量 (SUR)** 使用最优权重矩阵 $\mathbf{W}^* = \mathbf{S}^{-1}$：
$$
\text{Avar}(\hat{\delta}_{\text{SUR}}) = (\mathbf{B}' \mathbf{S}^{-1} \mathbf{B})^{-1}
$$
2. **逐方程 OLS 估计量** 对应子优化的块对角权重矩阵 $\mathbf{W}_{OLS} = \text{diag}(\sigma_{11}^{-1} \mathbf{I}, \dots, \sigma_{MM}^{-1} \mathbf{I})$：
$$
\text{Avar}(\hat{\delta}_{\text{OLS}}) = (\mathbf{B}' \mathbf{W}_{OLS} \mathbf{B})^{-1} (\mathbf{B}' \mathbf{W}_{OLS} \mathbf{S} \mathbf{W}_{OLS} \mathbf{B}) (\mathbf{B}' \mathbf{W}_{OLS} \mathbf{B})^{-1}
$$
3. **效率比较 (Variance Difference)**:
	根据 GMM 最优性，对于任何对称正定矩阵 $\mathbf{W}$：

$$
\begin{aligned}
&\text{Avar}(\hat{\delta}_{\text{OLS}}) - \text{Avar}(\hat{\delta}_{\text{SUR}}) \\
&= (\mathbf{B}' \mathbf{W} \mathbf{B})^{-1} \mathbf{B}' \mathbf{W} \mathbf{S} \mathbf{W} \mathbf{B} (\mathbf{B}' \mathbf{W} \mathbf{B})^{-1} - (\mathbf{B}' \mathbf{S}^{-1} \mathbf{B})^{-1} \\
&= \mathbf{A} \mathbf{S} \mathbf{A}' \ge \mathbf{0}
\end{aligned}
$$

	其中矩阵因子 $\mathbf{A} = (\mathbf{B}' \mathbf{W} \mathbf{B})^{-1} \mathbf{B}' \mathbf{W} - (\mathbf{B}' \mathbf{S}^{-1} \mathbf{B})^{-1} \mathbf{B}' \mathbf{S}^{-1}$。

4. **等号成立条件 ($\mathbf{A} = \mathbf{0}$)**:
 - $\mathbf{S}$ 为块对角（$\sigma_{mh} = 0$ for $m \neq h$）；
- 或 $\mathbf{B}$ 为可逆方阵（恰好识别且回归量相同）。

**结论**：只要存在跨方程误差相关且回归量不一，SUR 就能利用 $\mathbf{S}^{-1}$ 中的全系统信息实现效率提升。

## Shared-Coefficient System

在某些应用中，所有方程可能共享同一个系数向量 $\delta$。

:::{admonition} Definition ([Assumption 4.1](#^assumption-4-1)' (Linearity with Common Coefficients))
有 $M$ 个线性方程，共享同一个 $L$ 维系数向量 $\delta$：
$$
y_{im} = \mathbf{z}'_{im}\delta + \epsilon_{im} \quad (m = 1, 2, \dots, M; i = 1, 2, \dots, n) \tag{4.1.6}
$$
^equation-4-1-6

其中 $\mathbf{z}_{im}$ 是 $L$ 维回归量向量，$\epsilon_{im}$ 是第 $m$ 个方程的误差项。
^assumption-4-1-prime

:::

在这种情况下，矩函数 $g(\mathbf{w}_i; \tilde{\delta})$ 变为：
$$
g(\mathbf{w}_i; \tilde{\delta}) \equiv \begin{bmatrix} \mathbf{x}_{i1} \cdot (y_{i1} - \mathbf{z}'_{i1}\tilde{\delta}) \\ \vdots \\ \mathbf{x}_{iM} \cdot (y_{iM} - \mathbf{z}'_{iM}\tilde{\delta}) \end{bmatrix} \tag{4.6.2}
$$
^equation-4-6-2

其总体期望 $E[g(\mathbf{w}_i; \tilde{\delta})]$ 推导如下：

$$
\begin{aligned}
E[g(\mathbf{w}_i; \tilde{\delta})] &= \begin{bmatrix} E(\mathbf{x}_{i1} \cdot y_{i1}) \\ \vdots \\ E(\mathbf{x}_{iM} \cdot y_{iM}) \end{bmatrix} - \begin{bmatrix} E(\mathbf{x}_{i1} \mathbf{z}'_{i1})\tilde{\delta} \\ \vdots \\ E(\mathbf{x}_{iM} \mathbf{z}'_{iM})\tilde{\delta} \end{bmatrix} \\
&= \underset{(\sum K_m \times 1)}{\boldsymbol{\sigma}_{xy}} - \underset{(\sum K_m \times L)}{\boldsymbol{\Sigma}_{xz}} \underset{(L \times 1)}{\tilde{\delta}} 
\end{aligned}\tag{4.6.3}
$$

^equation-4-6-3

其中矩阵定义为：
$$
\boldsymbol{\sigma}_{xy} \equiv \begin{bmatrix} E(\mathbf{x}_{i1} \cdot y_{i1}) \\ \vdots \\ E(\mathbf{x}_{iM} \cdot y_{iM}) \end{bmatrix}, \quad \boldsymbol{\Sigma}_{xz} \equiv \begin{bmatrix} E(\mathbf{x}_{i1}\mathbf{z}'_{i1}) \\ \vdots \\ E(\mathbf{x}_{iM}\mathbf{z}'_{iM}) \end{bmatrix} \tag{4.6.4}
$$
^equation-4-6-4

:::{admonition} Definition (Assumption 4.4' (Identification with Common Coefficients))
在 (4.6.4) 中定义的 $\sum_{m=1}^M K_m \times L$ 矩阵 $\boldsymbol{\Sigma}_{xz}$ 具有**满列秩 (full column rank)**。
^assumption-4-4-prime

:::

## Shared-Coefficient GMM Estimator

It can be verified that $g_n(\tilde{\delta})$ can be written as $s_{xy} - S_{xz}\tilde{\delta}$ with

$$
\mathbf{s}_{xy} \equiv \begin{bmatrix} \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{i1} \cdot y_{i1} \\ \vdots \\ \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{iM} \cdot y_{iM} \end{bmatrix}, \quad \mathbf{S}_{xz} \equiv \begin{bmatrix} \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{i1} \mathbf{z}'_{i1} \\ \vdots \\ \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{iM} \mathbf{z}'_{iM} \end{bmatrix}
\tag{4.6.5}
$$

^equation-4-6-5

With a $\sum_{m} K_m \times \sum_{m} K_m$ weighting matrix $\mathbf{\hat{W}}$, the GMM estimator is

$$
\mathbf{\hat{\delta}}(\mathbf{\hat{W}}) = (\mathbf{S}_{xz}'\mathbf{\hat{W}}\mathbf{S}_{xz})^{-1}(\mathbf{S}_{xz}'\mathbf{\hat{W}}\mathbf{s}_{xy})
$$

$$
\begin{aligned}
\mathbf{\hat{\delta}}(\mathbf{\hat{W}}) &= \left( \left[ \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{i1} \mathbf{x}'_{i1} \quad \dots \quad \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{iM} \mathbf{x}'_{iM} \right] \begin{bmatrix} \mathbf{\hat{W}}_{11} & \dots & \mathbf{\hat{W}}_{1M} \\ \vdots & \ddots & \vdots \\ \mathbf{\hat{W}}_{M1} & \dots & \mathbf{\hat{W}}_{MM} \end{bmatrix} \left[ \begin{array}{c} \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{i1} \mathbf{z}'_{i1} \\ \vdots \\ \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{iM} \mathbf{z}'_{iM} \end{array} \right] \right)^{-1} \\
&\quad \cdot \left( \left[ \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{i1} \mathbf{x}'_{i1} \quad \dots \quad \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{iM} \mathbf{x}'_{iM} \right] \begin{bmatrix} \mathbf{\hat{W}}_{11} & \dots & \mathbf{\hat{W}}_{1M} \\ \vdots & \ddots & \vdots \\ \mathbf{\hat{W}}_{M1} & \dots & \mathbf{\hat{W}}_{MM} \end{bmatrix} \left[ \begin{array}{c} \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{i1} \cdot y_{i1} \\ \vdots \\ \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{iM} \cdot y_{iM} \end{array} \right] \right) \\
&= \left[ \sum_{m=1}^M \sum_{h=1}^M \left( \left( \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} \mathbf{x}'_{im} \right) \mathbf{\hat{W}}_{mh} \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{ih} \mathbf{z}'_{ih} \right) \right) \right]^{-1} \\
&\quad \cdot \left[ \sum_{m=1}^M \sum_{h=1}^M \left( \left( \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} \mathbf{x}'_{im} \right) \mathbf{\hat{W}}_{mh} \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{ih} \cdot y_{ih} \right) \right) \right]
\end{aligned}\tag{4.6.6}
$$

^equation-4-6-6

## Imposing Conditional Homoskedasticity

Under conditional homoskedasticity and common instruments $\mathbf{x}_i$ across all equations, the consistent estimator $\widehat{\mathbf{S}}$ has a Kronecker product structure:
$$
\widehat{\mathbf{S}} = \widehat{\boldsymbol{\Sigma}} \otimes \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \mathbf{x}_i' \right)
$$
The efficient GMM weighting matrix $\widehat{\mathbf{W}} = \widehat{\mathbf{S}}^{-1}$ then has blocks:
$$
\widehat{\mathbf{W}}_{mh} = \hat{\sigma}^{mh} \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \mathbf{x}_i' \right)^{-1}
$$
where $\hat{\sigma}^{mh}$ is the $(m, h)$ element of $\widehat{\boldsymbol{\Sigma}}^{-1}$. Substituting this into the general formula (4.6.6) yields the **3SLS estimator with common coefficients**:

$$
\hat{\delta}_{3SLS} = \left[ \sum_{m=1}^M \sum_{h=1}^M \left\{ \hat{\sigma}^{mh} \cdot \left( \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} \mathbf{x}_i' \right) \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \mathbf{x}_i' \right)^{-1} \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \mathbf{z}_{ih}' \right) \right\} \right]^{-1} 
$$

$$
\cdot \left[ \sum_{m=1}^M \sum_{h=1}^M \left\{ \hat{\sigma}^{mh} \cdot \left( \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} \mathbf{x}_i' \right) \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \mathbf{x}_i' \right)^{-1} \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \cdot y_{ih} \right) \right\} \right] \tag{4.6.7}
$$

^equation-4-6-7

**Projection Matrix Derivation (Handwritten Notes)**:
Using the projection matrix $\mathbf{P}_X = \mathbf{X}(\mathbf{X}' \mathbf{X})^{-1} \mathbf{X}'$, we can define:
- $\widehat{A}_{mh} \equiv \mathbf{z}_m' P(x) \mathbf{z}_h$
- $\widehat{C}_{mh} \equiv \mathbf{z}_m' P(x) \mathbf{y}_h$
- The estimator is then compactly:
  $$
  \hat{\delta} = \left( \sum_{m=1}^M \sum_{h=1}^M \hat{\sigma}^{mh} \widehat{A}_{mh} \right)^{-1} \left( \sum_{m=1}^M \sum_{h=1}^M \hat{\sigma}^{mh} \widehat{C}_{mh} \right)
  $$

#### Random-Effects Estimator
If, in addition, the SUR condition [(4.5.18)](#^equation-4-5-18) is assumed ($\mathbf{X}$ is the union of all regressors), then the efficient GMM estimator becomes the **random-effects estimator**:
$$
\hat{\delta}_{RE} = \left[ \sum_{m=1}^M \sum_{h=1}^M \hat{\sigma}^{mh} \left( \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} \mathbf{z}_{ih}' \right) \right]^{-1} \sum_{m=1}^M \sum_{h=1}^M \hat{\sigma}^{mh} \left( \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} \cdot y_{ih} \right) \tag{4.6.8}
$$
^equation-4-6-8

Its asymptotic variance is:
$$
\text{Avar}(\hat{\delta}_{RE}) = \left[ \sum_{m=1}^M \sum_{h=1}^M \sigma^{mh} E(\mathbf{z}_{im} \mathbf{z}_{ih}' ) \right]^{-1} \tag{4.6.9}
$$
^equation-4-6-9
It is consistently estimated by:
$$
\widehat{\text{Avar}}(\hat{\delta}_{RE}) = \left[ \sum_{m=1}^M \sum_{h=1}^M \hat{\sigma}^{mh} \left( \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} \mathbf{z}_{ih}' \right) \right]^{-1} \tag{4.6.10}
$$
^equation-4-6-10

:::{admonition} Proposition
Proposition 4.7 (large-sample properties of the random-effects estimator)
Suppose Assumptions 4.1', 4.2, 4.3, 4.4', 4.5, and 4.7 hold with $\mathbf{x}_i = \text{union of } (\mathbf{z}_{i1}, \dots, \mathbf{z}_{iM})$. Let $\boldsymbol{\Sigma}$ be the $M \times M$ matrix whose $(m, h)$ element is $E(\epsilon_{im} \epsilon_{ih})$, and let $\widehat{\boldsymbol{\Sigma}}$ be a consistent estimate of $\boldsymbol{\Sigma}$. Then:
- (a) $\hat{\delta}_{RE}$, given by (4.6.8) is consistent, asymptotically normal, and efficient, with $\text{Avar}(\hat{\delta}_{RE})$ given by (4.6.9).
- (b) The estimated asymptotic variance (4.6.10) is consistent for $\text{Avar}(\hat{\delta}_{RE})$.
- (c) **Sargan's statistic**:
$$
J(\hat{\delta}_{RE}, \widehat{\mathbf{S}}^{-1}) \equiv n \cdot \mathbf{g}_n(\hat{\delta}_{RE})' \widehat{\mathbf{S}}^{-1} \mathbf{g}_n(\hat{\delta}_{RE}) \xrightarrow{d} \chi^2(MK - L)
$$
where $\widehat{\mathbf{S}} = \widehat{\boldsymbol{\Sigma}} \otimes (\frac{1}{n} \sum \mathbf{x}_i \mathbf{x}_i')$, $K$ is the number of common instruments, and $\mathbf{g}_n(\tilde{\delta}) = \mathbf{s}_{xy} - \mathbf{S}_{xz}\tilde{\delta}$ with $\mathbf{s}_{xy}$ and $\mathbf{S}_{xz}$ given by (4.6.5).
:::

^prop-4-7

#### Intuition: Panel Data RE
在面板数据（Panel Data）语境下，若各时期方程的回归量相同且误差项满足经典的成分结构（$\epsilon_{it} = \alpha_i + u_{it}$），则 $\boldsymbol{\Sigma}$ 的结构由 $\sigma_\alpha^2$ 和 $\sigma_u^2$ 唯一决定。此时，上述公式退化为传统的 FGLS 形式的 Random Effects 估计量。基础 GMM 框架证明了其在条件同方差假设下的有效性。

## Pooled OLS

在 GMM 第一步估计中，为获得 $\delta$ 的初始一致估计，可将权重矩阵 $\widehat{\mathbf{W}}$ 设定为：
$$
\widehat{\mathbf{W}} = \mathbf{I}_M \otimes \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \mathbf{x}_i' \right)^{-1}
$$

由此导出的估计量为 **Pooled OLS 估计量**：

$$
\begin{aligned}
\hat{\delta}_{\text{pooled OLS}} &= \left[ \sum_{m=1}^M \left( \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} \mathbf{z}_{im}' \right) \right]^{-1} \sum_{m=1}^M \left( \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} \cdot y_{im} \right) \\
&= \left( \sum_{i=1}^n \sum_{m=1}^M \mathbf{z}_{im} \mathbf{z}_{im}' \right)^{-1} \sum_{i=1}^n \sum_{m=1}^M \mathbf{z}_{im} \cdot y_{im}
\end{aligned} \tag{4.6.11}
$$

^equation-4-6-11

对于 $M=2$ 的简化情形，估计量表现为跨方程的简单堆叠：
$$
\hat{\delta}_{\text{pooled OLS}} = (\mathbf{Z}_1' \mathbf{Z}_1 + \mathbf{Z}_2' \mathbf{Z}_2)^{-1} (\mathbf{Z}_1' \mathbf{y}_1 + \mathbf{Z}_2' \mathbf{y}_2)
$$

该估计量利用的正交性条件为：
$$
E(\mathbf{z}_{i1} \cdot \epsilon_{i1} + \dots + \mathbf{z}_{iM} \cdot \epsilon_{iM}) = \mathbf{0} \tag{4.6.12}
$$
^equation-4-6-12

其渐近方差 $\text{Avar}(\hat{\delta}_{\text{pooled OLS}})$ 具有三明治结构：
$$
\text{Avar}(\hat{\delta}_{\text{pooled OLS}}) = \left[ \sum_{m=1}^M E(\mathbf{z}_{im} \mathbf{z}_{im}' ) \right]^{-1} \sum_{m=1}^M \sum_{h=1}^M \sigma_{mh} E(\mathbf{z}_{im} \mathbf{z}_{ih}' ) \left[ \sum_{m=1}^M E(\mathbf{z}_{im} \mathbf{z}_{im}' ) \right]^{-1} \tag{4.6.13}
$$
^equation-4-6-13

其一致估计量为：

$$
\begin{aligned}
\widehat{\text{Avar}}(\hat{\delta}_{\text{pooled OLS}}) &= \left( \sum_{m=1}^M \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} \mathbf{z}_{im}' \right)^{-1} \\
&\quad \cdot \left( \sum_{m=1}^M \sum_{h=1}^M \hat{\sigma}_{mh} \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} \mathbf{z}_{ih}' \right) \left( \sum_{m=1}^M \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} \mathbf{z}_{im}' \right)^{-1}
\end{aligned} \tag{4.6.14}
$$

^equation-4-6-14

## Kronecker Simplification of Pooled OLS

通过引入紧凑的矩阵符号，可以显著简化随机效应估计量和 Pooled OLS 的表达式。定义如下矩阵：

$$
\underset{(M \times 1)}{\mathbf{y}_i} = \begin{bmatrix} y_{i1} \\ \vdots \\ y_{iM} \end{bmatrix}, \quad \underset{(M \times L)}{\mathbf{Z}_i} = \begin{bmatrix} \mathbf{z}_{i1}' \\ \vdots \\ \mathbf{z}_{iM}' \end{bmatrix}, \quad \underset{(M \times 1)}{\boldsymbol{\epsilon}_i} = \begin{bmatrix} \epsilon_{i1} \\ \vdots \\ \epsilon_{iM} \end{bmatrix} \tag{4.6.15}
$$

^equation-4-6-15

此时，[[[#^assumption-4-1|Assumption 4.1](#^assumption-4-1-prime)']] 中的多方程系统可紧凑地写为：
$$
\mathbf{y}_i = \mathbf{Z}_i \boldsymbol{\delta} + \boldsymbol{\epsilon}_i \quad (i = 1, 2, \dots, n) \tag{4.6.1'}
$$
^equation-4-6-1-prime

利用以下代数恒等式（对于任何 $M \times M$ 矩阵 $\mathbf{C} = (c_{mh})$）：
$$
\sum_{m=1}^M \mathbf{z}_{im} \mathbf{z}_{im}' = \mathbf{Z}_i' \mathbf{Z}_i, \quad \sum_{m=1}^M \mathbf{z}_{im} y_{im} = \mathbf{Z}_i' \mathbf{y}_i \tag{4.6.16a}
$$
^equation-4-6-16a

$$
\sum_{m=1}^M \sum_{h=1}^M c_{mh} \mathbf{z}_{im} y_{ih} = \mathbf{Z}_i' \mathbf{C} \mathbf{y}_i, \quad \sum_{m=1}^M \sum_{h=1}^M c_{mh} \mathbf{z}_{im} \mathbf{z}_{ih}' = \mathbf{Z}_i' \mathbf{C} \mathbf{Z}_i \tag{4.6.16b}
$$
^equation-4-6-16b

#### Compact Random-Effects Formulas
通过变换求和顺序并令 $\mathbf{C} = \widehat{\boldsymbol{\Sigma}}^{-1}$，可得：
$$
\sum_{m=1}^M \sum_{h=1}^M \hat{\sigma}^{mh} \left( \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} y_{ih} \right) = \frac{1}{n} \sum_{i=1}^n \mathbf{Z}_i' \widehat{\boldsymbol{\Sigma}}^{-1} \mathbf{y}_i \tag{4.6.17}
$$
^equation-4-6-17

$$
\sum_{m=1}^M \sum_{h=1}^M \hat{\sigma}^{mh} \frac{1}{n} \sum_{i=1}^n \mathbf{z}_{im} \mathbf{z}_{ih}' = \frac{1}{n} \sum_{i=1}^n \mathbf{Z}_i' \widehat{\boldsymbol{\Sigma}}^{-1} \mathbf{Z}_i \tag{4.6.18}
$$
^equation-4-6-18

最终美化后的 **Random-Effects** 公式及其渐近性质为：
$$
\hat{\delta}_{RE} = \left( \frac{1}{n} \sum_{i=1}^n \mathbf{Z}_i' \widehat{\boldsymbol{\Sigma}}^{-1} \mathbf{Z}_i \right)^{-1} \frac{1}{n} \sum_{i=1}^n \mathbf{Z}_i' \widehat{\boldsymbol{\Sigma}}^{-1} \mathbf{y}_i \tag{4.6.8'}
$$
^equation-4-6-8-prime

$$
\text{Avar}(\hat{\delta}_{RE}) = \left( E(\mathbf{Z}_i' \boldsymbol{\Sigma}^{-1} \mathbf{Z}_i) \right)^{-1} \tag{4.6.9'}
$$
^equation-4-6-9-prime

$$
\widehat{\text{Avar}}(\hat{\delta}_{RE}) = \left( \frac{1}{n} \sum_{i=1}^n \mathbf{Z}_i' \widehat{\boldsymbol{\Sigma}}^{-1} \mathbf{Z}_i \right)^{-1} \tag{4.6.10'}
$$
^equation-4-6-10-prime

#### Compact Pooled OLS Formulas
**Pooled OLS** 公式同样可以简化：
$$
\hat{\delta}_{\text{pooled OLS}} = \left( \frac{1}{n} \sum_{i=1}^n \mathbf{Z}_i' \mathbf{Z}_i \right)^{-1} \frac{1}{n} \sum_{i=1}^n \mathbf{Z}_i' \mathbf{y}_i \tag{4.6.11'}
$$
^equation-4-6-11-prime

$$
\text{Avar}(\hat{\delta}_{\text{pooled OLS}}) = [E(\mathbf{Z}_i' \mathbf{Z}_i)]^{-1} E(\mathbf{Z}_i' \boldsymbol{\Sigma} \mathbf{Z}_i) [E(\mathbf{Z}_i' \mathbf{Z}_i)]^{-1} \tag{4.6.13'}
$$
^equation-4-6-13-prime

$$
\widehat{\text{Avar}}(\hat{\delta}_{\text{pooled OLS}}) = \left( \frac{1}{n} \sum_{i=1}^n \mathbf{Z}_i' \mathbf{Z}_i \right)^{-1} \left( \frac{1}{n} \sum_{i=1}^n \mathbf{Z}_i' \widehat{\boldsymbol{\Sigma}} \mathbf{Z}_i \right) \left( \frac{1}{n} \sum_{i=1}^n \mathbf{Z}_i' \mathbf{Z}_i \right)^{-1} \tag{4.6.14'}
$$
^equation-4-6-14-prime

**Interrelated Factor Demand System**

## The Translog Cost Function

:::{admonition} Definition (The Translog Cost Function)
**Translog 成本函数** 是 Section 1.7 中介绍的 Cobb-Douglas (log-linear) 成本函数的推广形式。
三个投入的对数线性成本函数 (1.7.4) 可以推广为 Translog 成本函数：

$$
\begin{aligned}
\log(C) &= \alpha_0 + \sum_{j=1}^3 \alpha_j \log(p_j) + \underbrace{\frac{1}{2} \sum_{j=1}^3 \sum_{k=1}^3 \gamma_{jk} \log(p_j) \log(p_k)}_{\text{different input interaction}} \\
&\quad + \underbrace{\alpha_Q \log(Q) + \frac{1}{2} \gamma_{QQ}(\log(Q))^2}_{\text{Scale effects / 规模效应}} + \underbrace{\sum_{j=1}^3 \gamma_{jQ} \log(p_j) \log(Q)}_{\text{input and output interaction}} + \epsilon
\end{aligned} \tag{4.7.1}
$$
:::

^definition-translog-cost-function

在不失一般性的情况下，假设二次型系数的 $3 \times 3$ 矩阵 $(\gamma_{jk})$ 是对称的：
$$
\gamma_{jk} = \gamma_{kj} \quad (j, k = 1, 2, 3)
$$

#### Symmetry and Homogeneity Constraints (对称性与齐次性约束)

:::{admonition} Proposition
Symmetry and Homogeneity Constraints
为使 Translog 成本函数关于要素价格满足一次齐次性 (homogeneity of degree one)，即 $C(\lambda p, Q) = \lambda C(p, Q)$，其参数必须满足以下约束：
1. **Symmetry (对称性)**: $\gamma_{jk} = \gamma_{kj}$ 对于所有 $j, k$。
2. **Homogeneity (齐次性)**:
- $\sum_{j=1}^3 \alpha_j = 1$
- $\sum_{j=1}^3 \gamma_{jk} = 0$ 对于 $k = 1, 2, 3$
- $\sum_{j=1}^3 \gamma_{jQ} = 0$
:::

^prop-translog-constraints

这些约束保证了由 (4.7.7) 定义的要素份额满足 $\sum_{j=1}^3 s_j = 1$。

#### Returns to Scale (规模报酬)

:::{admonition} Definition (Returns to Scale (RTS) in Translog)
定义**成本弹性 (Cost Elasticity)** $\epsilon_{CQ} \equiv \frac{\partial \log C}{\partial \log Q}$。规模报酬 (Returns to Scale, RTS) 被定义为弹性之倒数：

$$
\text{RTS} = \frac{1}{\epsilon_{CQ}} = \frac{1}{\partial \log(C) / \partial \log(Q)} = \frac{1}{\alpha_Q + \gamma_{QQ} \log(Q) + \sum_{j=1}^3 \gamma_{jQ} \log(p_j)} \tag{4.7.3}
$$
:::

^definition-returns-to-scale

#### Factor Shares (要素份额)

:::{admonition} Lemma
Shephard's Lemma
成本函数参数与要素需求之间的联系由 **Shephard's Lemma** 给出：
$$
\frac{\partial C(p, Q)}{\partial p_j} = x_j \quad (j = 1, 2, 3)
$$
:::

^lemma-shephard

:::{admonition} Definition (Factor Shares)
其中 $x_j$ 是给定要素价格和产出下的成本最小化要素需求。由对数偏导数定义要素份额 $s_j \equiv \frac{p_j x_j}{C}$：

$$
\frac{\partial \log(C)}{\partial \log(p_j)} = \frac{p_j}{C} \frac{\partial C}{\partial p_j} = \frac{p_j x_j}{C} \equiv s_j \tag{4.7.5}
$$

^equation-4-7-5

对于 Translog 成本函数 [(4.7.1)](#^definition-translog-cost-function)，该偏导数的推导过程如下：根据对称性假设 $\gamma_{jk} = \gamma_{kj}$，对数偏导数展开为：

$$
\begin{aligned}
\frac{\partial \log(C)}{\partial \log(p_j)} &= \alpha_j + \frac{1}{2} \sum_{k=1}^3 \gamma_{jk} \log(p_k) + \frac{1}{2} \sum_{i=1}^3 \gamma_{ij} \log(p_i) + \gamma_{jQ} \log(Q) \\
&= \alpha_j + \frac{1}{2} \sum_{k=1}^3 \gamma_{jk} \log(p_k) + \frac{1}{2} \sum_{k=1}^3 \gamma_{jk} \log(p_k) + \gamma_{jQ} \log(Q) \\
&= \alpha_j + \sum_{k=1}^3 \gamma_{jk} \log(p_k) + \gamma_{jQ} \log(Q)
\end{aligned}
\tag{4.7.6}
$$

^equation-4-7-6

结合 (4.7.5) 和 (4.7.6)，得到要素份额方程组：

$$
s_j = \alpha_j + \sum_{k=1}^3 \gamma_{jk} \log(p_k) + \gamma_{jQ} \log(Q) \quad (j = 1, 2, 3) \tag{4.7.7}
$$

^equation-4-7-7

:::

^definition-factor-shares

#### Substitution Elasticities (替代弹性)

:::{admonition} Definition (Substitution Elasticity (Uzawa, 1962))
要素 $j$ 和 $k$ 之间的 **替代弹性 (substitution elasticity)** $\eta_{jk}$ 与成本函数 $C$ 的关系如下：

$$
\eta_{jk} = \frac{C \cdot \frac{\partial^2 C}{\partial p_j \partial p_k}}{\frac{\partial C}{\partial p_j} \cdot \frac{\partial C}{\partial p_k}} \tag{4.7.8}
$$

:::

^definition-substitution-elasticity

对于 Translog 成本函数，结合 Shephard's Lemma 和对数偏导数定义，展开具体推导如下：

已知 $s_j = \frac{p_j}{C} \frac{\partial C}{\partial p_j}$，由此可得一阶偏导数：

$$
\frac{\partial C}{\partial p_j} = \frac{C s_j}{p_j}
$$

针对 $j \neq k$ 的情况，对 $p_k$ 求二阶偏导：

$$
\begin{aligned}
\frac{\partial^2 C}{\partial p_j \partial p_k} &= \frac{\partial}{\partial p_k} \left( \frac{C s_j}{p_j} \right) = \frac{1}{p_j} \left( s_j \frac{\partial C}{\partial p_k} + C \frac{\partial s_j}{\partial p_k} \right)
\end{aligned}
$$

将 $\frac{\partial C}{\partial p_k} = \frac{C s_k}{p_k}$ 以及根据要素份额方程求导所得 $\frac{\partial s_j}{\partial p_k} = \frac{\gamma_{jk}}{p_k}$ 代入：

$$
\begin{aligned}
\frac{\partial^2 C}{\partial p_j \partial p_k} &= \frac{1}{p_j} \left( s_j \frac{C s_k}{p_k} + C \frac{\gamma_{jk}}{p_k} \right) = \frac{C}{p_j p_k} (s_j s_k + \gamma_{jk})
\end{aligned}
$$

根据 Uzawa (1962) 替代弹性定义 [(4.7.8)](#^definition-substitution-elasticity)，代入一阶与二阶偏导可得 $j \neq k$ 时的替代弹性：

$$
\begin{aligned}
\eta_{jk} &= \frac{C \cdot \frac{C}{p_j p_k}(s_j s_k + \gamma_{jk})}{\frac{C s_j}{p_j} \cdot \frac{C s_k}{p_k}} = \frac{s_j s_k + \gamma_{jk}}{s_j s_k}
\end{aligned}
$$

同理，针对 $j = k$ 的情况：

$$
\begin{aligned}
\frac{\partial^2 C}{\partial p_j^2} &= \frac{\partial}{\partial p_j} \left( \frac{C s_j}{p_j} \right) = \frac{p_j \left( s_j \frac{\partial C}{\partial p_j} + C \frac{\partial s_j}{\partial p_j} \right) - C s_j}{p_j^2} \\
&= \frac{p_j \left( s_j \frac{C s_j}{p_j} + C \frac{\gamma_{jj}}{p_j} \right) - C s_j}{p_j^2} = \frac{C}{p_j^2} (s_j^2 + \gamma_{jj} - s_j)
\end{aligned}
$$

代入替代弹性定义即可得到 $j = k$ 时的结果：

$$
\begin{aligned}
\eta_{jj} &= \frac{C \cdot \frac{C}{p_j^2}(s_j^2 + \gamma_{jj} - s_j)}{\left( \frac{C s_j}{p_j} \right)^2} = \frac{s_j^2 + \gamma_{jj} - s_j}{s_j^2}
\end{aligned}
$$

综上可得 Translog 成本函数的替代弹性系统：

$$
\eta_{jk} = \begin{cases} 
\frac{\gamma_{jk} + s_j s_k}{s_j s_k} & \text{for } j \neq k \\ 
\frac{\gamma_{jj} + s_j^2 - s_j}{s_j^2} & \text{for } j = k
\end{cases} \tag{4.7.9} 
$$

^equation-4-7-9

其中 $s_j$ 是要素 $j$ 的成本份额。

#### Properties of Cost Functions (成本函数的性质)

:::{admonition} Proposition
Properties of Cost Functions
根据微观经济学理论，成本函数 $C(p, Q)$ 具有以下性质：
1. **Homogeneity (一次齐次性)**: 关于要素价格 $p$ 是一次齐次的 (homogeneous of degree one)。
2. **Monotonicity (单调性)**: 关于要素价格 $p$ 是非减的 (non-decreasing)，即对于所有 $j$，有 $\frac{\partial C}{\partial p_j} \ge 0$。
3. **Concavity (凹性)**: 关于要素价格 $p$ 是凹的 (concave)，要求其 Hessian 矩阵是负半定 (negative semidefinite) 的。

根据 Uzawa (1962) 的公式 (4.7.8)，当且仅当替代弹性矩阵 $(\eta_{jk})$ 是负半定的时候，凹性条件得到满足。
:::

^prop-cost-function-properties

#### Properties of Translog Cost Functions

对于 Translog 成本函数，上述性质体现为以下具体形式：

1.  **Homogeneity (齐次性)**: [齐次性约束](#^prop-translog-constraints) 可以明确写为：

    $$
    \begin{cases}
    \alpha_1 + \alpha_2 + \alpha_3 = 1 \\
    \gamma_{11} + \gamma_{12} + \gamma_{13} = 0 \\
    \gamma_{21} + \gamma_{22} + \gamma_{23} = 0 \\
    \gamma_{31} + \gamma_{32} + \gamma_{33} = 0 \\
    \gamma_{1Q} + \gamma_{2Q} + \gamma_{3Q} = 0
    \end{cases} \tag{4.7.10}
    $$

    ^equation-4-7-10

2.  **Monotonicity (单调性)**: 要求要素份额方程 (4.7.7) 的右侧对于任意要素价格和产出组合均为非负。
3.  **Concavity (凹性)**: 一个充分必要条件是 $3 \times 3$ 的系数矩阵 $(\gamma_{jk})$ 是负半定的。

## The System of Share Equations and Restrictions

:::{admonition} Note
The System of Share Equations
将附加误差项 $\varepsilon_j$ 加入后，要素份额方程组 (4.7.7) 的完整形式为：

$$
\begin{cases}
s_1 = \alpha_1 + \gamma_{11} \log(p_1) + \gamma_{12} \log(p_2) + \gamma_{13} \log(p_3) + \gamma_{1Q} \log(Q) + \varepsilon_1 \\
s_2 = \alpha_2 + \gamma_{21} \log(p_1) + \gamma_{22} \log(p_2) + \gamma_{23} \log(p_3) + \gamma_{2Q} \log(Q) + \varepsilon_2 \\
s_3 = \alpha_3 + \gamma_{31} \log(p_1) + \gamma_{32} \log(p_2) + \gamma_{33} \log(p_3) + \gamma_{3Q} \log(Q) + \varepsilon_3
\end{cases}
$$

**Proposition:** The Nature of Restrictions
将参数约束进行更精细的分解，可将其分为以下三组：

1. **Adding-up Restrictions (加总约束)**:

$$
\begin{cases}
\alpha_1 + \alpha_2 + \alpha_3 = 1 \\
\gamma_{11} + \gamma_{21} + \gamma_{31} = 0 \\
\gamma_{12} + \gamma_{22} + \gamma_{32} = 0 \\
\gamma_{13} + \gamma_{23} + \gamma_{33} = 0 \\
\gamma_{1Q} + \gamma_{2Q} + \gamma_{3Q} = 0
\end{cases} \tag{4.7.12}
$$

^equation-4-7-12

2. **Homogeneity (齐次性)**:

$$
\begin{cases}
\gamma_{11} + \gamma_{12} + \gamma_{13} = 0 \\
\gamma_{21} + \gamma_{22} + \gamma_{23} = 0 \\
\gamma_{31} + \gamma_{32} + \gamma_{33} = 0
\end{cases} \tag{4.7.13}
$$

^equation-4-7-13

3. **Symmetry (对称性)**:

$$
\begin{cases}
\gamma_{12} = \gamma_{21} \\
\gamma_{13} = \gamma_{31} \\
\gamma_{23} = \gamma_{32}
\end{cases} \tag{4.7.14}
$$

^equation-4-7-14

:::

^prop-nature-restrictions

## Multivariate Regression Subject to Cross-Equation Restrictions

:::{admonition} Note
Imposing Homogeneity and Adding-up Restrictions
首先，利用 **Homogeneity (齐次性)** 约束 [(4.7.13)](#^equation-4-7-13)，我们可以从系统中消去三个参数（例如 $\gamma_{13}, \gamma_{23}, \gamma_{33}$）。由于 $\gamma_{j3} = - (\gamma_{j1} + \gamma_{j2})$，代入原方程并提取公因式 $\log(p_1) - \log(p_3) = \log(p_1/p_3)$，替换后得到新的方程组：

$$
\begin{cases}
s_1 = \alpha_1 + \gamma_{11} \log(p_1/p_3) + \gamma_{12} \log(p_2/p_3) + \gamma_{1Q} \log(Q) + \varepsilon_1 \\
s_2 = \alpha_2 + \gamma_{21} \log(p_1/p_3) + \gamma_{22} \log(p_2/p_3) + \gamma_{2Q} \log(Q) + \varepsilon_2 \\
s_3 = \alpha_3 + \gamma_{31} \log(p_1/p_3) + \gamma_{32} \log(p_2/p_3) + \gamma_{3Q} \log(Q) + \varepsilon_3
\end{cases} \tag{4.7.15}
$$

^equation-4-7-15

该系统的一个特殊性质是所有观测值的因变量之和为单位 1 ($\sum s_j = 1$)。这意味着所有误差项之和必然为零 ($\sum \varepsilon_j = 0$)。
为了引入 **Adding-up Restrictions (加总约束)** [(4.7.12)](#^equation-4-7-12) 并避免协方差矩阵奇异性，通常丢弃第三个方程。结合 **Symmetry (对称性)** 约束 ($\gamma_{12} = \gamma_{21}$)，精简后的受限系统变为：

$$
\begin{cases}
s_1 = \alpha_1 + \gamma_{11} \log(p_1/p_3) + \gamma_{12} \log(p_2/p_3) + \gamma_{1Q} \log(Q) + \varepsilon_1 \\
s_2 = \alpha_2 + \gamma_{12} \log(p_1/p_3) + \gamma_{22} \log(p_2/p_3) + \gamma_{2Q} \log(Q) + \varepsilon_2
\end{cases} \tag{4.7.16}
$$

^equation-4-7-16

由于回归量 (regressors) 是预定的且在两个方程中相同，此多元回归直接服从对称性跨方程约束 ($\gamma_{12} = \gamma_{21}$) 进行系统估计。
使用“公共系数 (common coefficient)”格式，系统 [(4.7.16)](#^equation-4-7-16) 可写为 $\boldsymbol{y}_i = \boldsymbol{Z}_i \boldsymbol{\delta} + \boldsymbol{\varepsilon}_i$，从而将受限估计转换为无约束估计。具体形式如下：

$$
\boldsymbol{y}_i = \begin{bmatrix} s_1 \\ s_2 \end{bmatrix}
$$

$$
\boldsymbol{Z}_i = \begin{bmatrix} 1 & 0 & \log(p_1/p_3) & \log(p_2/p_3) & 0 & \log(Q) & 0 \\ 0 & 1 & 0 & \log(p_1/p_3) & \log(p_2/p_3) & 0 & \log(Q) \end{bmatrix}
$$

$$
\boldsymbol{\delta}' = \begin{bmatrix} \alpha_1 & \alpha_2 & \gamma_{11} & \gamma_{12} & \gamma_{22} & \gamma_{1Q} & \gamma_{2Q} \end{bmatrix} \tag{4.7.17}
$$

^equation-4-7-17

在此框架下，服从对称性约束的多元回归等价于随机效应估计 (random-effects estimations)。其余的要素份额方程参数 $\alpha_3, \gamma_{13}, \gamma_{21}, \gamma_{23}, \gamma_{31}, \gamma_{32}, \gamma_{33}, \gamma_{3Q}$ 可利用加总约束 [(4.7.12)](#^equation-4-7-12)、齐次性约束 [(4.7.13)](#^equation-4-7-13) 和对称性约束 [(4.7.14)](#^equation-4-7-14) 计算得出。

:::

## System Estimation Results

:::{admonition} Note
Data and Summary Statistics
Christensen 和 Greene (1976) 将 Nerlove 的数据更新至 1970 年，包含 99 家公司，并使用了能够构建更好工资率和燃料价格指标的数据源。该数据集包含了要素份额信息，因此可以估计要素份额方程。部分变量的均值和标准差如下表所示：

| Variables | Output in kilowatt hours | Labor share | Capital share | Fuel share |
| :--- | :--- | :--- | :--- | :--- |
| **Mean** | 9.0 | 0.141 | 0.227 | 0.631 |
| **Std. deviation** | 10.3 | 0.059 | 0.062 | 0.095 |

*Table 4.3: Simple Statistics (Sample Size = 99)*

**Note:** Random-Effects Estimates
我们使用逐方程 OLS (equation-by-equation OLS) 的残差来计算 $\widehat{\boldsymbol{\Sigma}}^*$。
随机效应估计结果详见下表 (要素投入索引 $j$ 分别为：1-Labor, 2-Capital, 3-Fuel)。注意：底部的 $\widehat{\boldsymbol{\Sigma}}$ 矩阵是由 SUR (Seemingly Unrelated Regressions) 导出的，而非混合 OLS (pooled OLS)。

| Parameter | Point estimate | Standard error | $t$-value |
| :---: | :---: | :---: | :---: |
| $\alpha_1$ | $-0.132$ | $0.106$ | $-1.25$ |
| $\alpha_2$ | $0.318$ | $0.085$ | $3.75$ |
| $\alpha_3$ | $0.813$ | $0.094$ | $8.69$ |
| $\gamma_{11}$ | $0.084$ | $0.020$ | $4.19$ |
| $\gamma_{12}$ | $-0.023$ | $0.016$ | $-1.46$ |
| $\gamma_{13}$ | $-0.060$ | $0.015$ | $-3.92$ |
| $\gamma_{22}$ | $0.122$ | $0.020$ | $6.19$ |
| $\gamma_{23}$ | $-0.099$ | $0.017$ | $-5.75$ |
| $\gamma_{33}$ | $0.159$ | $0.023$ | $6.90$ |
| $\gamma_{1Q}$ | $-0.0211$ | $0.0025$ | $-8.55$ |
| $\gamma_{2Q}$ | $-0.0086$ | $0.0030$ | $-2.87$ |
| $\gamma_{3Q}$ | $0.0297$ | $0.0037$ | $7.98$ |

*Table 4.4: Random-Effects Estimates*

$$
\widehat{\boldsymbol{\Sigma}} \text{ by pooled OLS} = \begin{bmatrix} 0.00173 & -0.000171 & -0.00156 \\ -0.000171 & 0.00253 & -0.00236 \\ -0.00156 & -0.00236 & 0.00391 \end{bmatrix}
$$

**Note:** Substitution Elasticities and Properties Check
检查系数矩阵 $(\widehat{\gamma}_{jk})$ 发现，其并非负半定 (negative semidefinite)。然而，基于公式 [(4.7.9)](#^equation-4-7-9) 计算的相应替代弹性可能是负半定的。
由于该公式是在无最优化误差的假设下推导出来的，因此应当使用**拟合的成本份额 (fitted cost shares)** 而非实际成本份额代入公式中的 $s_j$ 和 $s_k$。

计算后跨公司的平均替代弹性如下表所示：

| Labor-Capital | Capital-Fuel | Labor-Fuel |
| :---: | :---: | :---: |
| $0.17$ | $0.27$ | $0.29$ |

*Table 4.5: Substitution Elasticities*

- **Substitutability (替代性)**: 这三种要素投入之间是替代品（因为替代弹性为正），但替代程度远低于对数线性 (log-linear) 技术假设的程度。
- **Concavity (凹性)**: 即使在相关范围内也未能满足凹性：在样本的 99 家公司中，有 20 家公司的弹性矩阵并非负半定。
- **Monotonicity (单调性)**: 在相关范围内得到满足：样本中所有公司的所有投入的拟合成本份额均为非负。

:::

---

**Additional System GMM Examples**

- [Econometrics/MS8956/cards/Example 4.1 (wage equation)](Econometrics/MS8956/cards/Example 4.1 (wage equation))
- [Econometrics/MS8956/cards/Example 4.2 (wage equation for two years)](Econometrics/MS8956/cards/Example 4.2 (wage equation for two years))
