# 01 CEF and Linear Projection

Source: EF8090 slides, PDF pp. 7-19; PS1 Q1, Q3-Q5, Q7.  
Links: [02_OLS_Algebra_Finite_Sample_GLS](02_OLS_Algebra_Finite_Sample_GLS) | [cards/Law_of_Iterated_Expectations](cards/Law_of_Iterated_Expectations) | [cards/Projection_vs_CEF](cards/Projection_vs_CEF) | [cards/Variance_Decomposition](cards/Variance_Decomposition)

## 1. Conditional expectation function

EF8090 第一部分的核心对象是 **conditional expectation function**。OLS、IV、propensity score 和 matching 都是在不同信息集上做 projection。

:::{admonition} Definition (Conditional Expectation Function)
令 $(Y,X)$ 有联合分布，且 $E|Y|<\infty$。CEF 定义为

$$
m(x)=E[Y\mid X=x].
$$

若条件密度存在，则

$$
E[Y\mid X=x]
=\int y f_{Y\mid X}(y\mid x)\,dy.
$$
:::

:::{admonition} Lemma (Law of iterated expectations)
若 $E|Y|<\infty$，则

$$
E[E[Y\mid X]]=E[Y].
$$
:::

#### Proof of Lemma (Law of iterated expectations)

连续情形下，

$$
\left\{
\begin{aligned}
f_{Y,X}(y,x)&=f_{Y\mid X}(y\mid x)f_X(x),\\
E[Y\mid X=x]&=\int y f_{Y\mid X}(y\mid x)\,dy.
\end{aligned}
\right.
$$

因此

$$
\begin{aligned}
E[E[Y\mid X]]
&=\int E[Y\mid X=x] f_X(x)\,dx\\
&=\int \left[\int y f_{Y\mid X}(y\mid x)\,dy\right] f_X(x)\,dx\\
&=\int\int y f_{Y\mid X}(y\mid x) f_X(x)\,dy\,dx\\
&=\int\int y f_{Y,X}(y,x)\,dy\,dx\\
&=\int y\left[\int f_{Y,X}(y,x)\,dx\right]dy\\
&=\int y f_Y(y)\,dy\\
&=E[Y].
\end{aligned}
$$

更一般地，

$$
E[E(Y\mid X_1,X_2)\mid X_1]=E(Y\mid X_1).
$$

:::{admonition} Lemma (Conditioning theorem)
若 $g(X)$ 是 $X$ 的函数，且 $E|g(X)Y|<\infty$，则

$$
E[g(X)Y\mid X]=g(X)E[Y\mid X].
$$
:::

#### Proof of Lemma (Conditioning theorem)

条件在 $X$ 上时，$g(X)$ 已知。对任意 $X$ 的可测集合 $A$，

$$
\begin{aligned}
E[1_A g(X)Y]
&=E\{E[1_A g(X)Y\mid X]\}\\
&=E\{1_A g(X)E[Y\mid X]\}.
\end{aligned}
$$

由 conditional expectation 的定义可得

$$
E[g(X)Y\mid X]=g(X)E[Y\mid X].
$$

## 2. CEF error orthogonality

:::{admonition} Definition (CEF error)
令

$$
e=Y-m(X)=Y-E[Y\mid X].
$$

则 $e$ 是 CEF error。
:::

:::{admonition} Lemma (CEF error orthogonality)
对任何满足可积条件的 $h(X)$，

$$
E[h(X)e]=0.
$$
:::

#### Proof of Lemma (CEF error orthogonality)

先证明 conditional mean zero：

$$
\begin{aligned}
E[e\mid X]
&=E[Y-E[Y\mid X]\mid X]\\
&=E[Y\mid X]-E[E[Y\mid X]\mid X]\\
&=E[Y\mid X]-E[Y\mid X]\\
&=0.
\end{aligned}
$$

再用 conditioning theorem：

$$
\begin{aligned}
E[h(X)e]
&=E\{E[h(X)e\mid X]\}\\
&=E\{h(X)E[e\mid X]\}\\
&=E[h(X)\cdot 0]\\
&=0.
\end{aligned}
$$

因此 CEF error 不仅均值为零，而且与所有 $X$ 的可积函数正交。课件称 $E[e\mid X]=0$ 为 mean independence，不是 full independence。

## 3. Conditional variance and total variance

:::{admonition} Definition (Conditional variance)
CEF residual 的条件方差为

$$
\sigma^2(X)
=\operatorname{Var}(Y\mid X)
=E[(Y-E[Y\mid X])^2\mid X]
=E[e^2\mid X].
$$

若 $\sigma^2(X)$ 不依赖 $X$，称为 homoskedastic；否则为 heteroskedastic。
:::

:::{admonition} Lemma (Conditional variance formula)
若 $E[Y^2]<\infty$，则

$$
\operatorname{Var}(Y\mid X)
=E[Y^2\mid X]-E[Y\mid X]^2.
$$
:::

#### Proof of Lemma (Conditional variance formula)

令 $m(X)=E[Y\mid X]$。则

$$
\begin{aligned}
\operatorname{Var}(Y\mid X)
&=E[(Y-m(X))^2\mid X]\\
&=E[Y^2-2Ym(X)+m(X)^2\mid X]\\
&=E[Y^2\mid X]-2m(X)E[Y\mid X]+m(X)^2\\
&=E[Y^2\mid X]-2m(X)^2+m(X)^2\\
&=E[Y^2\mid X]-m(X)^2\\
&=E[Y^2\mid X]-E[Y\mid X]^2.
\end{aligned}
$$

:::{admonition} Lemma (Law of total variance)
若 $E[Y^2]<\infty$，则

$$
\operatorname{Var}(Y)
=E[\operatorname{Var}(Y\mid X)]
+\operatorname{Var}(E[Y\mid X]).
$$
:::

#### Proof of Lemma (Law of total variance)

令 $m(X)=E[Y\mid X]$、$e=Y-m(X)$。由 LIE，

$$
E[Y]=E[m(X)].
$$

于是

$$
\begin{aligned}
\operatorname{Var}(Y)
&=E[(Y-E[Y])^2]\\
&=E[(e+m(X)-E[m(X)])^2]\\
&=E[e^2]
  +2E[e(m(X)-E[m(X)])]
  +E[(m(X)-E[m(X)])^2]\\
&=E\{E[e^2\mid X]\}
  +2E\{(m(X)-E[m(X)])E[e\mid X]\}
  +\operatorname{Var}(m(X))\\
&=E[\operatorname{Var}(Y\mid X)]
  +2E\{(m(X)-E[m(X)])\cdot 0\}
  +\operatorname{Var}(E[Y\mid X])\\
&=E[\operatorname{Var}(Y\mid X)]
  +\operatorname{Var}(E[Y\mid X]).
\end{aligned}
$$

## 4. CEF as best predictor

:::{admonition} Lemma (CEF minimizes mean squared prediction error)
对任意可测函数 $g(X)$，

$$
E[(Y-g(X))^2]\ge E[(Y-m(X))^2].
$$

等号成立当且仅当 $g(X)=m(X)$ a.s.
:::

#### Proof of Lemma (CEF minimizes mean squared prediction error)

令 $e=Y-m(X)$，则 $E[e\mid X]=0$。对任意 $g(X)$，

$$
\begin{aligned}
E[(Y-g(X))^2]
&=E[(e+m(X)-g(X))^2]\\
&=E[e^2]
  +2E[e(m(X)-g(X))]
  +E[(m(X)-g(X))^2]\\
&=E[e^2]
  +2E\{(m(X)-g(X))E[e\mid X]\}
  +E[(m(X)-g(X))^2]\\
&=E[e^2]+E[(m(X)-g(X))^2]\\
&\ge E[e^2]\\
&=E[(Y-m(X))^2].
\end{aligned}
$$

其中

$$
E[(m(X)-g(X))^2]=0
\Longleftrightarrow
g(X)=m(X)\quad a.s.
$$

PS1 Q3 的密度版本是同一个命题：先写 $m^*(x)=\int y f(y\mid x)\,dy$，再对每个 $x$ 点态最小化 $\int (y-m(x))^2 f(y\mid x)\,dy$。

## 5. Best linear predictor and projection coefficient

课件从 CEF 转向 **linear projection**：即使 $m(X)$ 不是线性的，也可以在所有线性函数中找 MSE 最小的 $X'\beta$。

:::{admonition} Definition (Linear projection coefficient)
在 $E[Y^2]<\infty$、$E\|X\|^2<\infty$、$E[XX']$ 正定下，定义

$$
\beta^*=\arg\min_b E[(Y-X'b)^2].
$$
:::

:::{admonition} Lemma (Best linear predictor formula)
令 $Q=E[XX']$、$q=E[XY]$。若 $Q$ 正定，则

$$
\beta^*=Q^{-1}q=(E[XX'])^{-1}E[XY].
$$
:::

#### Proof of Lemma (Best linear predictor formula)

目标函数为

$$
\begin{aligned}
d(b)
&=E[(Y-X'b)^2]\\
&=E[Y^2-2Y X'b+b'XX'b]\\
&=E[Y^2]-2b'E[XY]+b'E[XX']b\\
&=E[Y^2]-2b'q+b'Qb.
\end{aligned}
$$

一阶条件：

$$
\begin{aligned}
0
&=\left.\frac{\partial d(b)}{\partial b}\right|_{b=\beta^*}\\
&=-2q+2Q\beta^*.
\end{aligned}
$$

因为 $Q$ 正定，所以解唯一：

$$
\begin{aligned}
Q\beta^*&=q,\\
\beta^*&=Q^{-1}q\\
&=(E[XX'])^{-1}E[XY].
\end{aligned}
$$

投影误差 $v=Y-X'\beta^*$ 满足

$$
\begin{aligned}
E[Xv]
&=E[X(Y-X'\beta^*)]\\
&=E[XY]-E[XX']\beta^*\\
&=q-QQ^{-1}q\\
&=0.
\end{aligned}
$$

一般而言，$E[Xv]=0$ 不推出 $E[v\mid X]=0$。

:::{admonition} Lemma (Linear projection is best linear approximation to CEF)
若 $m(X)=E[Y\mid X]$，则最小化 $E[(Y-X'b)^2]$ 等价于最小化 $E[(m(X)-X'b)^2]$。
:::

#### Proof of Lemma (Linear projection is best linear approximation to CEF)

将 $Y=m(X)+e$ 代入：

$$
\begin{aligned}
E[(Y-X'b)^2]
&=E[(m(X)-X'b+e)^2]\\
&=E[(m(X)-X'b)^2]
  +2E[e(m(X)-X'b)]
  +E[e^2]\\
&=E[(m(X)-X'b)^2]
  +2E\{(m(X)-X'b)E[e\mid X]\}
  +E[e^2]\\
&=E[(m(X)-X'b)^2]+E[e^2].
\end{aligned}
$$

由于 $E[e^2]$ 与 $b$ 无关，

$$
\arg\min_b E[(Y-X'b)^2]
=\arg\min_b E[(m(X)-X'b)^2].
$$

## 6. Binary regressor and linear probability model

PS1 Q5 的重点是区分 **best linear predictor interpretation** 和 **causal interpretation**。若

$$
Y=\beta_0+\beta_1X+U,
\qquad
X\in\{0,1\},
$$

且带截距的线性投影被解释为 BLP，则

$$
\left\{
\begin{aligned}
\beta_0&=E[Y\mid X=0],\\
\beta_1&=E[Y\mid X=1]-E[Y\mid X=0].
\end{aligned}
\right.
$$

因此 $E[U\mid X]=0$，也有 $E[XU]=0$。若把该式解释为因果模型，则 $\beta_1$ 是否等于因果效应，取决于是否满足选择独立性或外生性。

:::{admonition} Lemma (Linear probability model is heteroskedastic)
若 $Y\in\{0,1\}$ 且 $E[Y\mid X]=X'\beta=p(X)$，则

$$
\operatorname{Var}(U\mid X)=p(X)(1-p(X)).
$$
:::

#### Proof of Lemma (Linear probability model is heteroskedastic)

令 $U=Y-p(X)$。因为 $Y\in\{0,1\}$，所以 $Y^2=Y$。并且

$$
E[U\mid X]=E[Y\mid X]-p(X)=0.
$$

因此

$$
\begin{aligned}
\operatorname{Var}(U\mid X)
&=E[U^2\mid X]-E[U\mid X]^2\\
&=E[U^2\mid X]\\
&=E[(Y-p(X))^2\mid X]\\
&=E[Y^2-2Yp(X)+p(X)^2\mid X]\\
&=E[Y^2\mid X]-2p(X)E[Y\mid X]+p(X)^2\\
&=p(X)-2p(X)^2+p(X)^2\\
&=p(X)(1-p(X)).
\end{aligned}
$$

除非 $p(X)$ 是常数，否则 LPM 的误差方差依赖 $X$，因此 homoskedasticity 通常不合理。

## 7. 和后续主题的连接

- OLS 是 $E[X(Y-X'\beta)]=0$ 的样本版本，见 [02_OLS_Algebra_Finite_Sample_GLS](02_OLS_Algebra_Finite_Sample_GLS)。
- Heteroskedasticity 不破坏 OLS consistency，但会破坏错误的标准误，见 [03_Asymptotics_OLS_Inference_Hypothesis_Testing](03_Asymptotics_OLS_Inference_Hypothesis_Testing)。
- Propensity score 的 balancing 证明本质上也是 conditioning theorem，见 [06_Potential_Outcomes_LATE_Roy_MTE](06_Potential_Outcomes_LATE_Roy_MTE)。
