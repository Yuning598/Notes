# 05 IV Identification, 2SLS, and Weak Instruments

Links: [04_MLE_Fisher_CRLB_and_ML_Tests](04_MLE_Fisher_CRLB_and_ML_Tests) | [06_Potential_Outcomes_LATE_Roy_MTE](06_Potential_Outcomes_LATE_Roy_MTE) | [cards/IV_Identification](cards/IV_Identification) | [cards/TwoSLS_as_Projection](cards/TwoSLS_as_Projection) | [cards/Weak_Instruments](cards/Weak_Instruments)

**IV Identification and 2SLS**

## Motivation for IV

动机：ability bias。目标模型是

$$
Y_i=\alpha+\beta S_i+v_i,
$$

但 $v_i=A_i'\gamma+\varepsilon_i$，能力 $A_i$ 不可观测且与 schooling $S_i$ 相关，所以

$$
E[S_iv_i]\ne0.
$$

OLS 不一致。IV 的思路是找 $Z_i$：与 $S_i$ 相关，但与 $v_i$ 正交。

:::{admonition} Definition (Instrument relevance and validity)
对结构方程 $Y=X'\beta+u$，工具变量 $Z$ 需要：
$$
\text{Relevance: }\operatorname{rank}E[ZX']=k,
$$
$$
\text{Validity/exclusion: }E[Zu]=0.
$$

:::

## Just-Identified IV Estimator

如果 $Z$ 与 $X$ 维度相同且 $E[ZX']$ 可逆：

:::{admonition} Lemma (IV identification)
:::

#### Proof of Lemma (IV identification)

$$
\beta=E[ZX']^{-1}E[ZY].
$$

$$
Y=X'\beta+u, \qquad E[Zu]=0.
$$

$$
\begin{aligned}
E[ZY] &=E[Z(X'\beta+u)]\\
&=E[ZX']\beta+E[Zu]\\
&=E[ZX']\beta.
\end{aligned}
$$
If $E[ZX']$ is invertible,
$$
\beta=E[ZX']^{-1}E[ZY].
$$

**结论：** IV 用 $Z$ 提供的外生 variation 来识别 $X$ 的 causal effect。

Sample analog:

$$
\hat\beta_{IV}=(Z'X)^{-1}Z'Y.
$$

## Two-Stage Least Squares

当 instruments 多于 endogenous regressors 时，用 2SLS。

:::{admonition} Definition (2SLS estimator)
Let $P_Z=Z(Z'Z)^{-1}Z'$。Then
$$
\hat\beta_{2SLS}=(X'P_ZX)^{-1}X'P_ZY.
$$
第一阶段把 $X$ 投影到 instruments span：$\hat X=P_ZX$。第二阶段回归 $Y$ on $\hat X$。
:::

:::{admonition} Lemma (2SLS normal equations)
$$
X'P_Z(Y-X\hat\beta)=0.
$$
:::

#### Proof of Lemma (2SLS normal equations)

$$
\begin{aligned}
\hat\beta_{2SLS} &=(X'P_ZX)^{-1}X'P_ZY,\\
X'P_ZX\hat\beta_{2SLS} &=X'P_ZY,\\
X'P_Z(Y-X\hat\beta_{2SLS})&=0.
\end{aligned}
$$

2SLS residual 与 fitted endogenous component 正交，而不是与 raw endogenous regressors 正交。

## Binary-Instrument Wald Estimator

Binary instrument case:

$$
Z\in\{0,1\},
\qquad
D\text{ is treatment/endogenous regressor}.
$$

:::{admonition} Definition (Wald estimator)
$$
\hat\beta_W=\frac{\bar Y_{Z=1}-\bar Y_{Z=0}}{\bar D_{Z=1}-\bar D_{Z=0}}.
$$
分子是 reduced form，分母是 first stage。

:::

在 constant treatment effect 下，Wald identifies $\beta$。在 heterogeneous effect 下，它会变成 LATE，见 [06_Potential_Outcomes_LATE_Roy_MTE](06_Potential_Outcomes_LATE_Roy_MTE)。

## 2SLS Asymptotic Variance

Homoskedasticity 下，2SLS variance 可写成：

$$
\operatorname{Avar}(\hat\beta_{2SLS})
=\sigma^2\left(Q_{XZ}Q_{ZZ}^{-1}Q_{ZX}\right)^{-1}.
$$

一般 heteroskedastic case 需要 sandwich：

$$
V=(Q_{XZ}Q_{ZZ}^{-1}Q_{ZX})^{-1}
Q_{XZ}Q_{ZZ}^{-1}\Omega Q_{ZZ}^{-1}Q_{ZX}
(Q_{XZ}Q_{ZZ}^{-1}Q_{ZX})^{-1},
$$

where $\Omega=E[Z_iZ_i'u_i^2]$。

## Hausman and Overidentification Tests

:::{admonition} Definition (Hausman test for exogeneity)
Null: endogenous regressors are actually exogenous, so OLS and 2SLS differ only by sampling error。Statistic:
$$
H=(\hat\beta_{OLS}-\hat\beta_{2SLS})' [\widehat{\operatorname{Var}}(\hat\beta_{2SLS})-\widehat{\operatorname{Var}}(\hat\beta_{OLS})]^{-1} (\hat\beta_{OLS}-\hat\beta_{2SLS}).
$$

**Definition (Overidentification test):**
若 instruments 数量超过 endogenous regressors，可检验 sample moments 是否过大：
$$
J=n\hat g(\hat\beta)'\hat W\hat g(\hat\beta), \qquad \hat g(\hat\beta)=\frac1n\sum_iZ_i(Y_i-X_i'\hat\beta).
$$
Under validity and correct specification, $J\to_d\chi^2_{\#Z-\#X}$。

:::

注意：overidentification test 只能检验 instruments 之间是否互相一致，不能证明每个 instrument 都 valid。

## Weak-Instrument Diagnostics

Weak instruments imply weak first-stage relevance and can make 2SLS drift toward OLS, invalidate standard normal/chi-square approximations, and spoil confidence-interval coverage。经验上常看 first-stage F-statistic，但真实诊断依赖 design and estimator。

:::{admonition} Lemma (First-stage weakness inflates IV variance)
First-stage weakness inflates IV variance
scalar just-identified IV 的 variance 随 $\operatorname{Cov}(Z,X)$ 变小而爆炸。
:::

#### Proof of Lemma (First-stage weakness inflates IV variance)

$$
\hat\beta_{IV}-\beta\approx \frac{n^{-1}\sum_iZ_iu_i}{E[ZX]}.
$$

$$
\operatorname{Avar}(\hat\beta_{IV}) \approx \frac{E[Z^2u^2]}{(E[ZX])^2}.
$$

relevance 接近零时，分母接近零，估计量 extremely noisy。

## Residualized 2SLS through FWL

Consider outcome $Y$, endogenous scalar $D$, controls $X$, excluded instruments $Z$，with $X$ containing constant。Let $M_X=I-P_X$。The coefficient on $D$ in 2SLS with controls is

$$
\hat\beta=(D'M_XP_Z^\perp M_XD)^{-1}D'M_XP_Z^\perp M_XY,
$$

where $P_Z^\perp$ denotes projection on the residualized instruments $M_XZ$:

$$
P_{M_XZ}=M_XZ[(M_XZ)'(M_XZ)]^{-1}(M_XZ)'.
$$

:::{admonition} Lemma (2SLS coefficient equals simple IV with residualized fitted first stage)
2SLS coefficient equals simple IV with residualized fitted first stage
If $\hat D=M_XP_{[X,Z]}D=P_{M_XZ}M_XD$, then
$$
\hat\beta=\frac{\sum_i(Y_i-\bar Y)(\hat D_i-\bar{\hat D})}{\sum_i(D_i-\bar D)(\hat D_i-\bar{\hat D})}.
$$
:::

#### Proof of Lemma (2SLS coefficient equals simple IV with residualized fitted first stage)

FWL partials out $X$ from $Y,D,Z$。Because $X$ contains a constant, $M_XY$ and $M_XD$ are demeaned relative to controls。

$$
\begin{aligned}
\hat\beta_{2SLS} &=\frac{(M_XD)'P_{M_XZ}(M_XY)}{(M_XD)'P_{M_XZ}(M_XD)}\\
&=\frac{(P_{M_XZ}M_XD)'M_XY}{(P_{M_XZ}M_XD)'M_XD}\\
&=\frac{\hat D'M_XY}{\hat D'M_XD}.
\end{aligned}
$$
Since $\hat D\perp X$, this equals the simple IV covariance ratio in the problem statement。

控制变量版本的 2SLS 可以理解为：先 residualize controls，再用 residualized instrument 的 fitted component 做 IV。

If $Z$ is scalar and $\hat Z=M_XZ$, then

$$
\hat\beta=\frac{\hat Z'M_XY}{\hat Z'M_XD},
$$

which is PS5 Q4(b)。

## Measurement Error and Frisch Bounds

PS4 Q3 studies $\hat X=X+V$ with $E[V]=E[XV]=E[UV]=0$。Then

$$
\operatorname{Var}(\hat X)=\operatorname{Var}(X)+\operatorname{Var}(V),
$$

$$
\operatorname{Cov}(\hat X,Y)=\beta_1\operatorname{Var}(X).
$$

If $\beta_1\ge0$,

$$
\frac{\operatorname{Cov}(\hat X,Y)}{\operatorname{Var}(\hat X)}\le \beta_1\le \frac{\operatorname{Var}(Y)}{\operatorname{Cov}(\hat X,Y)}.
$$

Left bound is the attenuated regression of $Y$ on mismeasured $\hat X$。Right bound comes from $\operatorname{Var}(U)\ge0$。
