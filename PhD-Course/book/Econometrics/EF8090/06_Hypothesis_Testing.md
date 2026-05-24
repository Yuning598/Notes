# 06 Hypothesis Testing

Source: EF8090 slides, PDF pp. 115-132; PS2 Q4-Q5.  
Links: [05_OLS_Asymptotics_and_Robust_Inference](05_OLS_Asymptotics_and_Robust_Inference) | [07_MLE_Fisher_CRLB](07_MLE_Fisher_CRLB) | [cards/Wald_Test_Matrix_R](cards/Wald_Test_Matrix_R) | [cards/ML_Wald_LR_LM](cards/ML_Wald_LR_LM)

## 1. Testing framework

课件把假设检验写成：

$$
H_0:\theta=\theta_0
\qquad\text{vs}\qquad
H_1:\theta\ne\theta_0.
$$

决策由 test statistic $T_n$ 和 critical value $c$ 决定：

$$
\text{reject }H_0\text{ if }T_n>c.
$$

:::{admonition} Definition (Type I error, Type II error, power)
$$ \text{Type I error}=P(\text{reject }H_0\mid H_0\text{ true}), $$
$$ \text{Type II error}=P(\text{accept }H_0\mid H_1\text{ true}), $$
$$ \text{Power}=P(\text{reject }H_0\mid H_1\text{ true}). $$
显著性水平 $\alpha$ 通常控制 Type I error。

:::

## 2. t-test

若 scalar parameter $\theta=r(\beta)$，并且

$$
\frac{\hat\theta-\theta}{\widehat{se}(\hat\theta)}\xrightarrow{d}N(0,1),
$$

则双侧 t-test 拒绝规则是

$$
|t_n(\theta_0)|>z_{1-\alpha/2}.
$$

:::{admonition} Definition (p-value)
双侧正态近似下，
$$ p=2\{1-\Phi(|t_n|)\}. $$
若 $p<\alpha$，拒绝 $H_0$。

:::

## 3. Wald test for multiple restrictions

设 $\sqrt n(\hat\beta-\beta)\to_dN(0,V)$，要检验

$$
H_0:r(\beta)=0,
$$

其中 $r(\beta)\in\mathbb R^q$。

:::{admonition} Lemma (Wald statistic)
:::

#### Proof of Lemma (Wald statistic)

$$ W_n=n r(\hat\beta)'[R(\hat\beta)\hat V R(\hat\beta)']^{-1}r(\hat\beta) \xrightarrow{d}\chi_q^2. $$

$$ R(\beta)=\frac{\partial r(\beta)}{\partial\beta'}, \qquad \sqrt n(r(\hat\beta)-r(\beta))\to_dN(0,RVR'). $$

**连续求解：** Under $H_0$, $r(\beta)=0$, so
$$ \begin{aligned} \sqrt n r(\hat\beta) &=\sqrt n(r(\hat\beta)-r(\beta))\\ &\xrightarrow{d}N(0,RVR'). \end{aligned} $$
Standardizing a $q$-dimensional normal vector gives
$$ n r(\hat\beta)'[R\hat V R']^{-1}r(\hat\beta)\to_d\chi_q^2. $$

**结论：** Wald test 用估计值离 null restriction 的距离衡量证据强弱。

## 4. PS2 Q4: Wald test with matrix restrictions

给定

$$
\sqrt n(\hat\beta-\beta)\to_dN(0,\Sigma),
\qquad
\beta=(\beta_1,\beta_2,\beta_3)'.
$$

检验

$$
H_0:\beta_1=\frac12\beta_2,
\qquad
\beta_3=0.
$$

写成

$$
R\beta=0,
\qquad
R=\begin{pmatrix}
1&-1/2&0\\
0&0&1
\end{pmatrix}.
$$

:::{admonition} Lemma (Wald test for PS2 Q4)
:::

#### Proof of Lemma (Wald test for PS2 Q4)

$$ W_n=n(R\hat\beta)'(R\hat\Sigma R')^{-1}(R\hat\beta)\to_d\chi_2^2. $$

$$ R\hat\beta=\begin{pmatrix}\hat\beta_1-\frac12\hat\beta_2\\ \hat\beta_3\end{pmatrix}. $$

$$ \sqrt n R(\hat\beta-\beta)\to_dN(0,R\Sigma R'). $$
Under $H_0$, $R\beta=0$, so
$$ \sqrt n R\hat\beta\to_dN(0,R\Sigma R'). $$
Quadratic form yields $\chi_2^2$.

**结论：** Reject $H_0$ at level $\alpha$ if
$$ W_n>\chi^2_{2,1-\alpha}. $$

## 5. Confidence interval and test duality

PS2 Q5: parameter of interest $\theta=R'\beta$，where $R$ is $k\times1$。若 $\hat V_{\hat\beta}$ estimates $\operatorname{Var}(\hat\beta\mid X)$，则

$$
\widehat{se}(\hat\theta)=\sqrt{R'\hat V_{\hat\beta}R}.
$$

95% asymptotic CI:

$$
\hat C=\left[R'\hat\beta-1.96\sqrt{R'\hat V_{\hat\beta}R},\; R'\hat\beta+1.96\sqrt{R'\hat V_{\hat\beta}R}\right].
$$

:::{admonition} Lemma (CI-test equivalence)
CI-test equivalence
**WTS：** Rule “reject $H_0:\theta=\theta_0$ iff $\theta_0\notin\hat C$” is asymptotic 5%.

**连续求解：**
$$ \begin{aligned} \theta_0\notin\hat C &\iff |R'\hat\beta-\theta_0|>1.96\sqrt{R'\hat V_{\hat\beta}R}\\ &\iff \left|\frac{R'\hat\beta-\theta_0}{\sqrt{R'\hat V_{\hat\beta}R}}\right|>1.96. \end{aligned} $$
Under $H_0$, the statistic converges to $N(0,1)$, so rejection probability tends to 5%.

**结论：** Wald CI 和 two-sided Wald/t test 是同一个检验的两种表达。

:::

## 6. Consistency of tests

课件最后强调 power。一个检验 consistent，意味着 fixed alternative 下 rejection probability 趋于 1。

:::{admonition} Lemma (Wald test consistency under fixed alternatives)
Wald test consistency under fixed alternatives
**WTS：** 若 $r(\beta)\ne0$，则
$$ P(W_n>\chi^2_{q,1-\alpha})\to1. $$

**连续求解：** 当 $r(\beta)\ne0$，
$$ r(\hat\beta)\to_p r(\beta)\ne0, \qquad \hat V\to_p V. $$
Hence
$$ \begin{aligned} W_n &=n r(\hat\beta)'[R\hat V R']^{-1}r(\hat\beta)\\ &=n\{r(\beta)'[RVR']^{-1}r(\beta)+o_p(1)\}\\ &\to_p\infty. \end{aligned} $$

**结论：** fixed alternative 下 Wald statistic diverges，因此 power tends to one。

:::

