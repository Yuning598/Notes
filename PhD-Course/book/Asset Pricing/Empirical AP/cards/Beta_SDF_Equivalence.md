---
orphan: true
---

# Beta-SDF Equivalence

**核心结论**：线性 SDF $M=a-b'f$ 与 beta pricing $E[R_i^e]=\beta_i'\lambda$ 是同一个横截面限制的两种等价表示。

$$
\text{Linear SDF: } M=a-b'f
\quad\Longleftrightarrow\quad
\text{Beta pricing: } E[R_i^e]=\beta_i'\lambda.
$$

---

## 推导

假设 SDF 为线性形式：

$$
M=a-b'f,
$$

其中 $f$ 是因子向量。

从 excess return pricing $E[MR_i^e]=0$：

$$
\begin{aligned}
0
&=E[(a-b'f)R_i^e] \\
&=aE[R_i^e]-b'E[fR_i^e] \\
&=aE[R_i^e]
-b'\left(E[f]E[R_i^e]+\operatorname{Cov}(f,R_i^e)\right).
\end{aligned}
$$

整理：

$$
\begin{aligned}
\left(a-b'E[f]\right)E[R_i^e]
&=b'\operatorname{Cov}(f,R_i^e) \\
E[R_i^e]
&=\frac{b'}{a-b'E[f]}\operatorname{Cov}(f,R_i^e) \\
&=\operatorname{Cov}(R_i^e,f)\operatorname{Var}(f)^{-1} \cdot \underbrace{\operatorname{Var}(f)\frac{b}{a-b'E[f]}}_{\lambda} \\
&=\beta_i'\lambda,
\end{aligned}
$$

其中 $\beta_i=\operatorname{Cov}(R_i^e,f)\operatorname{Var}(f)^{-1}$。

---

## 与 EF8077 (Theoretical AP) 的对应

$$
\begin{aligned}
\text{EF8077:}\quad
\tilde m=a+b'\tilde F
&\Longleftrightarrow
E[\tilde R]=R_z+\lambda'\beta, \\
\text{EF8083:}\quad
M=a-b'f
&\Longleftrightarrow
E[R_i^e]=\beta_i'\lambda.
\end{aligned}
$$

单因子模型是 $K=1$ 的特例。若 factor 是 traded excess return，则 $\lambda=E[f]$，与 [[../../../ProblemSet/Theoretical Asset Pricing#qe-ps-factor-model-review|QE-PS factor review]] 的公式一致。

---

**来源**：EF8083 slides, pp. 195-210; EF8077/Theoretical AP factor-model proof
**导航**：[[../../index|Asset Pricing index]] · [[../00-MOC_EF8083_Empirical_Asset_Pricing|Empirical AP MOC]] · [[../05_Cross_Section_Factor_Models|Cross-section factor models]]
