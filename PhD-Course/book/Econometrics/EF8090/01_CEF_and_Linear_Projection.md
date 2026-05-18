# 01 CEF and Linear Projection

Source: EF8090 slides, PDF pp. 7-19; PS1 Q1, Q3-Q5, Q7.  
Links: [00-MOC_EF8090_Econometrics](00-MOC_EF8090_Econometrics) | [02_OLS_Algebra_FWL_OVB](02_OLS_Algebra_FWL_OVB) | [cards/Law_of_Iterated_Expectations](cards/Law_of_Iterated_Expectations) | [cards/Projection_vs_CEF](cards/Projection_vs_CEF) | [cards/Variance_Decomposition](cards/Variance_Decomposition)

## 1. 从 conditional expectation 开始

EF8090 第一部分的核心对象不是 OLS，而是 **conditional expectation function**。回归模型只是对 CEF 施加线性、非线性或非参数形式限制后的结果。

:::{admonition} Definition (Conditional Expectation Function)
令 $(Y,X)$ 有联合分布，且 $E|Y|<\infty$。CEF 定义为
$$ m(x)=E[Y\mid X=x]. $$
在连续情形，若条件密度存在，则
$$ E[Y\mid X=x]=\int y f_{Y\mid X}(y\mid x)dy. $$

:::

课件随后强调三件事：Law of Iterated Expectation、conditioning theorem、CEF error 的 orthogonality。它们构成后面 OLS、IV、propensity score 和 matching 的共同语言。

:::{admonition} Lemma
Law of Iterated Expectations
**WTS：**
$$ E[E(Y\mid X)]=E[Y]. $$

**联立系统：**
$$ f_{Y,X}(y,x)=f_{Y\mid X}(y\mid x)f_X(x), \qquad E(Y\mid X=x)=\int y f_{Y\mid X}(y\mid x)dy. $$

**连续求解：**
$$ \begin{aligned} E[E(Y\mid X)] &=\int \left\{\int y f_{Y\mid X}(y\mid x)dy\right\} f_X(x)dx \\ &=\int\int y f_{Y\mid X}(y\mid x)f_X(x)dydx \\ &=\int\int y f_{Y,X}(y,x)dydx \\ &=\int y f_Y(y)dy \\ &=E[Y]. \end{aligned} $$

**结论：** 先对 $Y$ 做条件平均，再对 $X$ 做无条件平均，等于直接对 $Y$ 做无条件平均。

:::

更一般地，课件写出

$$
E[E(Y\mid X_1,X_2)\mid X_1]=E(Y\mid X_1).
$$

这在 panel / DiD / propensity score 里非常常见：增加信息集再投影回较小信息集，不会改变较小信息集上的最优预测。

:::{admonition} Lemma
Conditioning theorem
**WTS：** 若 $g(X)$ 是 $X$ 的函数，则
$$ E[g(X)Y\mid X]=g(X)E[Y\mid X]. $$

**联立系统：**
$$ g(X)\in\sigma(X),\qquad E|g(X)Y|<\infty. $$

**连续求解：**
$$ \begin{aligned} E[g(X)Y] &=E\{E[g(X)Y\mid X]\} \\ &=E\{g(X)E[Y\mid X]\}. \end{aligned} $$

**结论：** 条件在 $X$ 上时，任何 $X$ 的函数都可以从条件期望里拿出来。

:::

## 2. CEF error 的 orthogonality

:::{admonition} Definition (CEF error)
令
$$ e=Y-m(X)=Y-E[Y\mid X]. $$
则 $e$ 是 CEF error。

**Lemma:** CEF error 与任意 $X$ 的函数正交
**WTS：** 对任何满足可积条件的 $h(X)$，
$$ E[h(X)e]=0. $$

**联立系统：**
$$ e=Y-E[Y\mid X], \qquad E[e\mid X]=0. $$

**连续求解：**
$$ \begin{aligned} E[h(X)e] &=E\{E[h(X)e\mid X]\} \\ &=E\{h(X)E[e\mid X]\} \\ &=E[h(X)\cdot 0] \\ &=0. \end{aligned} $$

**结论：** CEF error 不仅均值为零，而且与所有 $X$ 的可积函数正交。课件称 $E[e\mid X]=0$ 为 mean independence，而不是 full independence。

:::

## 3. Conditional variance and total variance

:::{admonition} Definition (Conditional variance)
$$ \sigma^2(X)=\operatorname{Var}(Y\mid X)=E[(Y-E[Y\mid X])^2\mid X]=E[e^2\mid X]. $$
若 $\sigma^2(X)$ 不依赖 $X$，称为 homoskedastic；否则为 heteroskedastic。

:::

PS1 Q1 要求证明 conditional variance 的两个基本恒等式。

:::{admonition} Lemma
Conditional variance formula
**WTS：**
$$ \operatorname{Var}(Y\mid X)=E[Y^2\mid X]-E[Y\mid X]^2. $$

**联立系统：**
$$ m(X)=E[Y\mid X], \qquad \operatorname{Var}(Y\mid X)=E[(Y-m(X))^2\mid X]. $$

**连续求解：**
$$ \begin{aligned} \operatorname{Var}(Y\mid X) &=E[(Y-m(X))^2\mid X] \\ &=E[Y^2-2Y m(X)+m(X)^2\mid X] \\ &=E[Y^2\mid X]-2m(X)E[Y\mid X]+m(X)^2 \\ &=E[Y^2\mid X]-2m(X)^2+m(X)^2 \\ &=E[Y^2\mid X]-m(X)^2. \end{aligned} $$

**结论：** 条件方差等于条件二阶矩减去条件均值平方。

**Lemma:** Law of total variance
**WTS：**
$$ \operatorname{Var}(Y)=E[\operatorname{Var}(Y\mid X)]+\operatorname{Var}(E[Y\mid X]). $$

**联立系统：**
$$ m(X)=E[Y\mid X], \qquad e=Y-m(X), \qquad E[e\mid X]=0. $$

**连续求解：**
$$ \begin{aligned} \operatorname{Var}(Y) &=E[(Y-EY)^2] \\ &=E[(e+m(X)-EY)^2] \\ &=E[e^2]+2E[e(m(X)-EY)]+E[(m(X)-EY)^2] \\ &=E\{E[e^2\mid X]\}+2E\{(m(X)-EY)E[e\mid X]\}+\operatorname{Var}(m(X)) \\ &=E[\operatorname{Var}(Y\mid X)]+\operatorname{Var}(E[Y\mid X]). \end{aligned} $$

**结论：** 总不确定性 = 条件内不确定性的平均 + 条件均值本身的横截面变化。

:::

## 4. CEF is the best predictor

课件证明了 CEF 是 MSE 意义下的最优预测函数。

:::{admonition} Lemma
CEF minimizes mean squared prediction error
**WTS：** 对任意可测函数 $g(X)$，
$$ E[(Y-g(X))^2]\ge E[(Y-m(X))^2]. $$

**联立系统：**
$$ Y=m(X)+e, \qquad E[e\mid X]=0. $$

**连续求解：**
$$ \begin{aligned} E[(Y-g(X))^2] &=E[(e+m(X)-g(X))^2] \\ &=E[e^2]+2E[e(m(X)-g(X))]+E[(m(X)-g(X))^2] \\ &=E[e^2]+2E\{(m(X)-g(X))E[e\mid X]\}+E[(m(X)-g(X))^2] \\ &=E[e^2]+E[(m(X)-g(X))^2] \\ &\ge E[e^2] \\ &=E[(Y-m(X))^2]. \end{aligned} $$

**结论：** CEF 是所有 $X$ 的函数中 MSE 最小的 predictor。

:::

PS1 Q3 的密度版本就是同一命题：先写 $m^*(x)=\int y f(y\mid x)dy$，再对每个 $x$ 点态最小化 $\int(y-m(x))^2f(y\mid x)dy$。

## 5. Best linear predictor and projection coefficient

课件从 CEF 转向 linear projection：即使 $m(X)$ 不是线性的，也可以在所有线性函数中找 MSE 最小的 $X'\beta$。

:::{admonition} Definition (Linear projection coefficient)
在 $E[Y^2]<\infty$、$E\|X\|^2<\infty$、$E[XX']$ 正定下，定义
$$ \beta^*=\arg\min_b E[(Y-X'b)^2]. $$

**Lemma:** Best linear predictor formula
**WTS：**
$$ \beta^*=(E[XX'])^{-1}E[XY]. $$

**联立系统：**
$$ Q=E[XX'], \qquad q=E[XY], \qquad d(b)=E[(Y-X'b)^2]. $$

**连续求解：**
$$ \begin{aligned} d(b) &=E[Y^2-2Y X'b+b'XX'b] \\ &=E[Y^2]-2b'E[XY]+b'E[XX']b \\ &=E[Y^2]-2b'q+b'Qb. \end{aligned} $$
FOC gives
$$ \begin{aligned} 0 &=\frac{\partial d(b)}{\partial b}\bigg|_{b=\beta^*} \\ &=-2q+2Q\beta^*, \end{aligned} $$
hence
$$ \begin{aligned} Q\beta^*&=q,\\ \beta^*&=Q^{-1}q=(E[XX'])^{-1}E[XY]. \end{aligned} $$

**结论：** 线性投影系数只依赖二阶矩。其投影误差 $v=Y-X'\beta^*$ 满足 $E[Xv]=0$，但一般不满足 $E[v\mid X]=0$。

:::

PS1 Q4 要求证明 $X'\beta$ 是 CEF 的 best linear approximation。关键是把 $Y=m(X)+e$ 代入：

$$
\begin{aligned}
E[(Y-X'b)^2]
&=E[(m(X)-X'b+e)^2]\\
&=E[(m(X)-X'b)^2]+E[e^2],
\end{aligned}
$$

因为交叉项为零。所以最小化 $Y$ 的 MSE 与最小化 $m(X)$ 的线性近似误差等价。

## 6. Binary regressor and linear probability model

PS1 Q5 的重点是区分 **best linear predictor interpretation** 和 **causal interpretation**。若

$$
Y=\beta_0+\beta_1X+U,
\qquad X\in\{0,1\},
$$

且带截距的线性投影被解释为 BLP，则

$$
\beta_0=E[Y\mid X=0],
\qquad
\beta_1=E[Y\mid X=1]-E[Y\mid X=0].
$$

因此 $E[U\mid X]=0$，也有 $E[XU]=0$。但若把该式解释为因果模型，则 $\beta_1$ 是否等于条件均值差，取决于是否满足选择独立性或外生性。

:::{admonition} Lemma
Linear probability model is heteroskedastic
**WTS：** 若 $Y\in\{0,1\}$ 且 $E[Y\mid X]=X'\beta=p(X)$，则
$$ \operatorname{Var}(U\mid X)=p(X)(1-p(X)). $$

**联立系统：**
$$ U=Y-p(X), \qquad Y^2=Y. $$

**连续求解：**
$$ \begin{aligned} \operatorname{Var}(U\mid X) &=E[U^2\mid X] \\ &=E[(Y-p(X))^2\mid X] \\ &=E[Y^2\mid X]-2p(X)E[Y\mid X]+p(X)^2 \\ &=p(X)-2p(X)^2+p(X)^2 \\ &=p(X)(1-p(X)). \end{aligned} $$

**结论：** 除非 $p(X)$ 是常数，否则 LPM 的误差方差依赖 $X$，因此 homoskedasticity 通常不合理。

:::

## 7. 和后续主题的连接

- OLS 是 $E[X(Y-X'\beta)]=0$ 的样本版本，见 [02_OLS_Algebra_FWL_OVB](02_OLS_Algebra_FWL_OVB)。
- Heteroskedasticity 不破坏 OLS consistency，但会破坏错误的标准误，见 [05_OLS_Asymptotics_and_Robust_Inference](05_OLS_Asymptotics_and_Robust_Inference)。
- Propensity score 的 balancing 证明本质上也是 conditioning theorem，见 [10_Potential_Outcomes_ATE_Matching](10_Potential_Outcomes_ATE_Matching)。

