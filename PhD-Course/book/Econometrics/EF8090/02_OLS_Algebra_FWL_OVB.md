# 02 OLS Algebra, FWL, and Omitted Variable Bias

Source: EF8090 slides, PDF pp. 20-40; PS1 Q6, Q8.  
Links: [01_CEF_and_Linear_Projection](01_CEF_and_Linear_Projection) | [03_OLS_Finite_Sample_Gauss_Markov_GLS](03_OLS_Finite_Sample_Gauss_Markov_GLS) | [cards/Projection_Matrix](cards/Projection_Matrix) | [cards/FWL_Theorem](cards/FWL_Theorem) | [cards/Omitted_Variable_Bias](cards/Omitted_Variable_Bias) | [cards/Fixed_Effects_Demeaning](cards/Fixed_Effects_Demeaning)

## 1. OLS as method of moments and least squares

课件先从 projection coefficient 出发：

$$
\beta=E[XX']^{-1}E[XY].
$$

将 population moments 替换为 sample moments 得到

$$
\hat\beta
=\left(\sum_{i=1}^n X_iX_i'\right)^{-1}\left(\sum_{i=1}^n X_iY_i\right)
=(X'X)^{-1}X'Y.
$$

:::{admonition} Definition (Ordinary Least Squares estimator)
给定 $Y\in\mathbb R^n$、$X\in\mathbb R^{n\times k}$ 且 $X'X$ 可逆，OLS 估计量为
$$ \hat\beta=(X'X)^{-1}X'Y. $$
它等价于最小化 residual sum of squares：
$$ \hat\beta=\arg\min_b (Y-Xb)'(Y-Xb). $$

**Lemma:** OLS normal equations
**WTS：**
$$ X'(Y-X\hat\beta)=0. $$

**联立系统：**
$$ S(b)=(Y-Xb)'(Y-Xb). $$

**连续求解：**
$$ \begin{aligned} S(b) &=Y'Y-2b'X'Y+b'X'Xb,\\ \frac{\partial S(b)}{\partial b} &=-2X'Y+2X'Xb. \end{aligned} $$
At optimum,
$$ \begin{aligned} 0&=-2X'Y+2X'X\hat\beta,\\ X'X\hat\beta&=X'Y,\\ \hat\beta&=(X'X)^{-1}X'Y. \end{aligned} $$
Therefore
$$ \begin{aligned} X'(Y-X\hat\beta) &=X'Y-X'X(X'X)^{-1}X'Y\\ &=0. \end{aligned} $$

**结论：** OLS residual 与每一列 regressors 样本正交。

:::

## 2. Projection matrix and residual maker

:::{admonition} Definition (Projection and annihilator matrices)
$$ P_X=X(X'X)^{-1}X', \qquad M_X=I-P_X. $$
Fitted values and residuals are
$$ \hat Y=P_XY, \qquad \hat e=M_XY. $$

**Lemma:** Algebra of $P_X$ and $M_X$
**WTS：**
$$ P_X'=P_X, \quad P_X^2=P_X, \quad M_X'=M_X, \quad M_X^2=M_X, \quad P_XX=X, \quad M_XX=0. $$

**联立系统：**
$$ P_X=X(X'X)^{-1}X', \qquad M_X=I-P_X. $$

**连续求解：**
$$ \begin{aligned} P_X^2 &=X(X'X)^{-1}X'X(X'X)^{-1}X'\\ &=X(X'X)^{-1}X'\\ &=P_X,\\ M_X^2 &=(I-P_X)^2\\ &=I-2P_X+P_X^2\\ &=I-P_X\\ &=M_X,\\ P_XX &=X(X'X)^{-1}X'X\\ &=X,\\ M_XX &=(I-P_X)X\\ &=X-X\\ &=0. \end{aligned} $$

**结论：** $P_X$ 把向量投影到 $\operatorname{span}(X)$，$M_X$ 消去 $\operatorname{span}(X)$ 的成分。

:::

课件还给出 orthogonal decomposition：

$$
P_XM_X=0,
\qquad
\hat Y'\hat e=Y'P_XM_XY=0,
\qquad
Y'Y=\hat Y'\hat Y+\hat e'\hat e.
$$

若模型含截距，则可写成常见 ANOVA：

$$
TSS=ESS+SSR.
$$

## 3. Frisch-Waugh-Lovell theorem

设分块模型

$$
Y=X_1\beta_1+X_2\beta_2+u,
\qquad
X=[X_1,X_2].
$$

令

$$
P_1=X_1(X_1'X_1)^{-1}X_1',
\qquad
M_1=I-P_1.
$$

:::{admonition} Lemma
FWL theorem
**WTS：** 全模型中 $X_2$ 的 OLS 系数等于 residualized regression：
$$ \hat\beta_2=(X_2'M_1X_2)^{-1}X_2'M_1Y. $$

**联立系统：** OLS normal equations are
$$ \begin{cases} X_1'Y=X_1'X_1\hat\beta_1+X_1'X_2\hat\beta_2,\\ X_2'Y=X_2'X_1\hat\beta_1+X_2'X_2\hat\beta_2. \end{cases} $$

**连续求解：** From the first equation,
$$ \begin{aligned} \hat\beta_1 &=(X_1'X_1)^{-1}X_1'Y-(X_1'X_1)^{-1}X_1'X_2\hat\beta_2. \end{aligned} $$
Substitute into the second equation:
$$ \begin{aligned} X_2'Y &=X_2'X_1(X_1'X_1)^{-1}X_1'Y\\ &\quad -X_2'X_1(X_1'X_1)^{-1}X_1'X_2\hat\beta_2 +X_2'X_2\hat\beta_2,\\ X_2'[I-P_1]Y &=X_2'[I-P_1]X_2\hat\beta_2,\\ X_2'M_1Y &=X_2'M_1X_2\hat\beta_2,\\ \hat\beta_2 &=(X_2'M_1X_2)^{-1}X_2'M_1Y. \end{aligned} $$

**结论：** 控制 $X_1$ 后估计 $X_2$ 的作用，等于先从 $Y$ 和 $X_2$ 中剔除 $X_1$ 的线性预测，再对残差做 OLS。

:::

PS1 Q8 还要求证明三个估计量等价：

$$
\hat\beta_2\text{ from }Y\sim X_1,X_2,
\quad
\tilde\beta_2\text{ from }M_1Y\sim M_1X_2,
\quad
\bar\beta_2\text{ from }Y\sim M_1X_2.
$$

原因是 $(M_1X_2)'Y=X_2'M_1Y=(M_1X_2)'M_1Y$。若 $X_1'X_2=0$，则 $M_1X_2=X_2$，因此可以直接回归 $Y$ on $X_2$。

## 4. Omitted variable bias via FWL

课件用 FWL 推出 omitted variable bias。设真实模型为

$$
Y=\beta_0+\beta_1X_1+\beta_2X_2+U,
\qquad
E[U\mid X_1,X_2]=0.
$$

如果遗漏 $X_2$，回归

$$
Y=\beta_0^*+\beta_1^*X_1+U^*,
$$

则在 scalar $X_1$ 情形有：

:::{admonition} Lemma
Scalar omitted variable bias
**WTS：**
$$ \beta_1^*=\beta_1+\frac{\operatorname{Cov}(X_1,X_2)}{\operatorname{Var}(X_1)}\beta_2. $$

**联立系统：**
$$ \beta_1^*=\operatorname{Var}(X_1)^{-1}\operatorname{Cov}(X_1,Y), \qquad Y=\beta_0+\beta_1X_1+\beta_2X_2+U. $$

**连续求解：**
$$ \begin{aligned} \operatorname{Cov}(X_1,Y) &=\operatorname{Cov}(X_1,\beta_0+\beta_1X_1+\beta_2X_2+U)\\ &=\beta_1\operatorname{Var}(X_1)+\beta_2\operatorname{Cov}(X_1,X_2)+\operatorname{Cov}(X_1,U)\\ &=\beta_1\operatorname{Var}(X_1)+\beta_2\operatorname{Cov}(X_1,X_2),\\ \beta_1^* &=\frac{\operatorname{Cov}(X_1,Y)}{\operatorname{Var}(X_1)}\\ &=\beta_1+\frac{\operatorname{Cov}(X_1,X_2)}{\operatorname{Var}(X_1)}\beta_2. \end{aligned} $$

**结论：** bias 的符号由 $\beta_2$ 和 omitted variable 与 included regressor 的 covariance 共同决定。

:::

## 5. Fixed effects as FWL residualization

PS1 Q8(c) 与 PS6 Q1 都在用同一个 FWL 逻辑。个体固定效应模型：

$$
y_{it}=\alpha_i+x_{it}'\beta+\varepsilon_{it}.
$$

把所有 individual dummies 记为 $D$，则全模型为

$$
Y=D\alpha+X\beta+\varepsilon.
$$

FWL 给出：

$$
\hat\beta=(X'M_DX)^{-1}X'M_DY.
$$

其中 $M_D$ 对每个个体组内去均值：

$$
(M_DY)_{it}=y_{it}-\bar y_i,
\qquad
(M_DX)_{it}=x_{it}-\bar x_i.
$$

因此 fixed effects OLS 等价于回归 demeaned outcome on demeaned covariates。

:::{admonition} Lemma
Group demeaning solves dummy saturation
**WTS：** 若 $F_i\in\{1,\ldots,K\}$，回归 $Y$ on $X$ and group dummies 的 $X$ 系数等于回归 $\dot Y_i$ on $\dot X_i$，其中
$$ \dot Y_i=Y_i-\bar Y_{F_i}, \qquad \dot X_i=X_i-\bar X_{F_i}. $$

**联立系统：** 令 $D$ 为 group dummy matrix，$M_D=I-D(D'D)^{-1}D'$。

**连续求解：**
$$ \begin{aligned} \hat\beta &=(X'M_DX)^{-1}X'M_DY\\ &=\left(\sum_i \dot X_i\dot X_i'\right)^{-1}\left(\sum_i \dot X_i\dot Y_i\right). \end{aligned} $$

**结论：** dummy controls 本质上就是把变量投影到 dummy span 的正交补上。

:::

## 6. Perfect collinearity

PS1 Q6 说明：若 $X_3=\alpha_1X_1+\alpha_2X_2$，则 $E[XX']$ 不可逆，$\beta$ 不唯一。不要用 generalized inverse；直接把线性函数写成

$$
X'\beta
=X_1(\beta_1+\alpha_1\beta_3)+X_2(\beta_2+\alpha_2\beta_3).
$$

只有组合系数

$$
\gamma_1=\beta_1+\alpha_1\beta_3,
\qquad
\gamma_2=\beta_2+\alpha_2\beta_3
$$

可识别。最佳线性预测应写成 $Y$ on $(X_1,X_2)$ 的投影，而不是试图估计唯一的 $(\beta_1,\beta_2,\beta_3)$。

