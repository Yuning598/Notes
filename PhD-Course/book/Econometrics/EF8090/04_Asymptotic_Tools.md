# 04 Asymptotic Tools

Source: EF8090 slides, PDF pp. 55-85; PS2 Q1-Q3, Q7.  
Links: [03_OLS_Finite_Sample_Gauss_Markov_GLS](03_OLS_Finite_Sample_Gauss_Markov_GLS) | [05_OLS_Asymptotics_and_Robust_Inference](05_OLS_Asymptotics_and_Robust_Inference) | [cards/Chebyshev_WLLN](cards/Chebyshev_WLLN) | [cards/CLT_and_Cramer_Wold](cards/CLT_and_Cramer_Wold) | [cards/Delta_Method](cards/Delta_Method) | [cards/Stochastic_Order_Op_op](cards/Stochastic_Order_Op_op)

## 1. Why asymptotics

课件的动机很直接：有限样本正态分布依赖 strong distributional assumptions。若只假设 iid、矩存在和 exogeneity，通常依赖 large-sample approximation。三大工具是：

$$
\text{WLLN},\qquad \text{CLT},\qquad \text{CMT / Slutsky / Delta method}.
$$

:::{admonition} Definition (Convergence in probability)
随机变量 $Z_n$ 依概率收敛到 $Z$，记作 $Z_n\xrightarrow{p}Z$，若对任意 $\varepsilon>0$，
$$ \lim_{n\to\infty}P(|Z_n-Z|\le \varepsilon)=1. $$

**Definition (Convergence in distribution):**
$Z_n\xrightarrow{d}Z$ 若在 $F_Z$ 连续点 $z$ 上，
$$ F_{Z_n}(z)\to F_Z(z). $$

:::

依概率收敛通常用于 consistency；依分布收敛用于 limiting distribution 和 inference。

## 2. WLLN via Chebyshev

:::{admonition} Lemma
Weak Law of Large Numbers under finite variance
**WTS：** 若 $Y_i$ iid, $E[Y_i]=\mu$, $\operatorname{Var}(Y_i)=\sigma^2<\infty$，则
$$ \bar Y_n\xrightarrow{p}\mu. $$

**联立系统：**
$$ \bar Y_n=\frac1n\sum_{i=1}^nY_i, \qquad E\bar Y_n=\mu, \qquad \operatorname{Var}(\bar Y_n)=\frac{\sigma^2}{n}. $$

**连续求解：** Chebyshev inequality gives
$$ \begin{aligned} P(|\bar Y_n-\mu|>\varepsilon) &\le \frac{\operatorname{Var}(\bar Y_n)}{\varepsilon^2}\\ &=\frac{\sigma^2}{n\varepsilon^2}\\ &\to 0. \end{aligned} $$

**结论：** sample mean converges in probability to population mean。

:::

向量版本直接对每个元素应用 WLLN；矩阵版本同理逐元素应用。

## 3. CLT and Cramer-Wold

:::{admonition} Lemma
Lindeberg-Levy CLT
**WTS：** 若 $Y_i$ iid, $E[Y_i]=\mu$, $\operatorname{Var}(Y_i)=\sigma^2<\infty$，则
$$ \sqrt n(\bar Y_n-\mu)\xrightarrow{d}N(0,\sigma^2). $$

**联立系统：**
$$ \sqrt n(\bar Y_n-\mu)=\frac1{\sqrt n}\sum_{i=1}^n(Y_i-\mu). $$

**连续求解：** 该标准化和的 moment generating function 收敛到正态分布的 mgf；课件把完整证明放在 CLT 部分。

**结论：** sample average 的误差是 $O_p(n^{-1/2})$。

**Lemma:** Cramer-Wold device
**WTS：** 对随机向量 $Z_n\in\mathbb R^k$，若对每个 fixed $a\in\mathbb R^k$，
$$ a'Z_n\xrightarrow{d}a'Z, $$
则
$$ Z_n\xrightarrow{d}Z. $$

**结论：** 多元 CLT 可以通过任意线性组合的一元 CLT 来证明。

:::

## 4. Continuous mapping and Slutsky

:::{admonition} Lemma
Continuous Mapping Theorem
**WTS：** 若 $Z_n\xrightarrow{p}Z$，且 $g$ 连续，则
$$ g(Z_n)\xrightarrow{p}g(Z). $$

**结论：** sample moments 的连续函数也 consistent。例如 $\hat Q^{-1}\to_p Q^{-1}$ 需要 $Q$ nonsingular。

**Lemma:** Slutsky theorem
**WTS：** 若 $X_n\xrightarrow{d}X$ 且 $Y_n\xrightarrow{p}c$，则
$$ X_n+Y_n\xrightarrow{d}X+c, \qquad X_nY_n\xrightarrow{d}Xc. $$

**结论：** estimated standard error 可以替代 true standard error。

:::

## 5. Delta method

:::{admonition} Lemma
Delta method
**WTS：** 若
$$ \sqrt n(\hat\theta-\theta_0)\xrightarrow{d}N(0,V), $$
且 $g$ 在 $\theta_0$ 可微，则
$$ \sqrt n(g(\hat\theta)-g(\theta_0))\xrightarrow{d}N(0,G V G'), $$
其中 $G=\nabla g(\theta_0)'$。

**联立系统：** Taylor expansion:
$$ g(\hat\theta)=g(\theta_0)+G(\hat\theta-\theta_0)+r_n, \qquad r_n=o_p(\|\hat\theta-\theta_0\|). $$

**连续求解：**
$$ \begin{aligned} \sqrt n(g(\hat\theta)-g(\theta_0)) &=G\sqrt n(\hat\theta-\theta_0)+\sqrt n r_n\\ &=G\sqrt n(\hat\theta-\theta_0)+o_p(1)\\ &\xrightarrow{d}N(0,GVG'). \end{aligned} $$

**结论：** smooth transformation 的 asymptotic variance 用梯度做 sandwich。

:::

PS2 Q2：若 $m_k=(E[Y^k])^{1/k}$，估计量

$$
\hat m_k=\left(\frac1n\sum_iY_i^k\right)^{1/k}.
$$

令 $\mu_k=E[Y^k]$，若 $\operatorname{Var}(Y^k)<\infty$，则

$$
\sqrt n(\hat m_k-m_k)\xrightarrow{d}N\left(0,\left[\frac1k\mu_k^{1/k-1}\right]^2\operatorname{Var}(Y^k)\right).
$$

PS2 Q3：若 $\sqrt n(\hat\mu-\mu)\to_d N(0,v^2)$，且 $\hat\beta=\hat\mu^2$，则当 $\mu\ne0$：

$$
\sqrt n(\hat\beta-eta)\to_d N(0,4\mu^2v^2).
$$

当 $\mu=0$，first-order Delta method 退化，因为 derivative $2\mu=0$。此时

$$
n\hat\beta=n\hat\mu^2=(\sqrt n\hat\mu)^2\xrightarrow{d}v^2\chi_1^2.
$$

## 6. Stochastic order symbols

:::{admonition} Definition (Stochastic order)
$$ Z_n=o_p(1)\iff Z_n\xrightarrow{p}0, \qquad Z_n=O_p(1)\iff Z_n\text{ is bounded in probability}. $$
更一般地，
$$ Z_n=o_p(a_n)\iff Z_n/a_n=o_p(1), \qquad Z_n=O_p(a_n)\iff Z_n/a_n=O_p(1). $$

**Lemma:** Algebra of $o_p$ and $O_p$
**WTS：**
$$ o_p(1)+o_p(1)=o_p(1), \quad O_p(1)+o_p(1)=O_p(1), \quad O_p(1)o_p(1)=o_p(1). $$

**连续求解：** For the product, if $X_n=O_p(1)$ and $Y_n=o_p(1)$, then for any $\varepsilon>0$, choose $M$ so that $P(|X_n|>M)<\varepsilon/2$. Then
$$ \begin{aligned} P(|X_nY_n|>\delta) &\le P(|X_n|>M)+P(|Y_n|>\delta/M)\\ &<\varepsilon/2+o(1). \end{aligned} $$

**结论：** bounded-in-probability 乘以 vanishing-in-probability 仍然 vanishes。

:::

## 7. PS2 Q1 true/false guide

- $a$ True: convergence in probability is stable under addition.
- $b$ False: let $X_n=n$ with probability $1/n$, and $0$ otherwise. Then $X_n\to_p0$, $X_n\ge0$, but $E[X_n]=1$.
- $c$ False: $X_n\sim N(0,1/n)$ has continuous cdf, but $X_n\to_d0$, whose cdf jumps at zero.
- $d$ False: even if moments match, convergence in probability to a particular random variable need not hold. For example let $X_n$ be independent copies with the same distribution as $X$; all moments match, but $X_n\not\to_p X$ unless degenerate.

