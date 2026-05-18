---
orphan: true
---

# 矩阵秩（rank）

返回：[ProblemSet/ProblemSet](../ProblemSet/ProblemSet)

:::{admonition} Definition (Rank)
矩阵的秩（rank）是其列空间（column space）的维数，也等于行空间（row space）的维数。

:::

## 怎么算

### 1. 看线性无关列

找出矩阵中最多有多少列彼此线性无关。这个数量就是 rank。

### 2. 看非零子式（minor）

若存在一个 $r\times r$ 的子矩阵，其行列式不为 0，则 rank 至少为 $r$；若所有 $(r+1)\times(r+1)$ 子式都为 0，则 rank 至多为 $r$。

### 3. 做行变换

把矩阵化成阶梯形（row echelon form），非零行的个数就是 rank。

## 二维/三维里最常用的判断

- 两列是否成比例
- 是否存在非零 $2\times 2$ minor

若

$$
\begin{aligned}
\det\!\begin{pmatrix}a&b\\ c&d\end{pmatrix}\neq 0,
\end{aligned}
$$

则这两列线性无关，rank 至少为 2。

## 本题中的计算

在 ProblemSet 里，payoff matrix 为

$$
\begin{aligned}
D=\begin{pmatrix}
1 & 1.2\\
1 & 1.0\\
1 & 0.8
\end{pmatrix}.
\end{aligned}
$$

两列分别是

$$
\begin{aligned}
\begin{pmatrix}1\\1\\1\end{pmatrix},\qquad
\begin{pmatrix}1.2\\1.0\\0.8\end{pmatrix}.
\end{aligned}
$$

它们不成比例，例如

$$
\begin{aligned}
\frac{1.2}{1}\neq \frac{1.0}{1}\neq \frac{0.8}{1},
\end{aligned}
$$

所以 rank 至少为 2。由于矩阵只有两列，因此

$$
\begin{aligned}
\operatorname{rank}(D)=2.
\end{aligned}
$$
