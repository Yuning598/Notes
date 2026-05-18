---
orphan: true
---

# Beta-SDF Equivalence

Source: EF8083 slides, pp. 195-210; EF8077/Theoretical AP factor-model proof  
Backlinks: [Empirical AP: Linear SDF implies beta pricing](../05_Cross_Section_Factor_Models.md) | [EF8077: Factor Models Are Equivalent to SDFs](../../Theoretical AP/01_Single_Period_Models.md) | [QE-PS: Factor model review](../../../ProblemSet/ProblemSet.md)

:::{admonition} Proposition
Beta-SDF Equivalence
Linear / affine SDF 与 beta pricing 是同一个横截面限制的两种写法。

$$
\left\{
\begin{aligned}
\text{SDF pricing:}\quad
E[MR_i^e]&=0,\\
\text{linear SDF:}\quad
M&=a-b'f,\\
\text{beta definition:}\quad
\beta_i&=\operatorname{Cov}(R_i^e,f)\operatorname{Var}(f)^{-1}.
\end{aligned}
\right.
$$

:::

^prop-beta-sdf-equivalence

**推导**

$$
\begin{aligned}
0
&=E[(a-b'f)R_i^e]\\
&=aE[R_i^e]-b'E[fR_i^e]\\
&=aE[R_i^e]
-b'\left(E[f]E[R_i^e]+\operatorname{Cov}(f,R_i^e)\right),\\
\left(a-b'E[f]\right)E[R_i^e]
&=b'\operatorname{Cov}(f,R_i^e),\\
E[R_i^e]
&=\operatorname{Cov}(R_i^e,f)\frac{b}{a-b'E[f]}\\
&=\beta_i'\underbrace{\operatorname{Var}(f)\frac{b}{a-b'E[f]}}_{\lambda}.
\end{aligned}
$$

**和 EF8077 的关系**

$$
\begin{aligned}
\text{EF8077:}\quad
\tilde m=a+b'\tilde F
&\Longleftrightarrow
E[\tilde R]=R_z+\lambda'\beta,\\
\text{EF8083:}\quad
M=a-b'f
&\Longleftrightarrow
E[R_i^e]=\beta_i'\lambda.
\end{aligned}
$$

Single-factor model 只是 $K=1$；若 factor 是 traded excess return，则 $\lambda=E[f]$，与 [QE-PS factor review](../../../ProblemSet/ProblemSet.md) 的公式一致。
