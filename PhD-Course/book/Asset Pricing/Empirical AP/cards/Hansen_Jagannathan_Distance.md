---
orphan: true
---

# Hansen-Jagannathan Distance

Source: EF8083 slides, pp. 213-224; Hansen and Jagannathan (1997)  
Backlinks: [Cross-section factor models: HJ distance](../05_Cross_Section_Factor_Models.md)

HJ distance measures how far a candidate SDF is from the set of SDFs that price the test assets.

Let $m(\theta)$ be a candidate SDF and $R^e$ be the vector of test-asset excess returns:

$$
\left\{
\begin{aligned}
g(\theta)&=E[m(\theta)R^e],\\
G&=E[R^eR^{e'}].
\end{aligned}
\right.
$$

Then

$$
\boxed{
d_{HJ}(\theta)^2=g(\theta)'G^{-1}g(\theta)
}
$$

Equivalently,

$$
d_{HJ}(\theta) =
\min_{m^*:E[m^*R^e]=0}
\sqrt{E[(m(\theta)-m^*)^2]}.
$$

In GMM form, HJ distance corresponds to the weighting matrix

$$
W_{HJ} =
\left(\frac1T\sum_{t=1}^T R_t^eR_t^{e'}\right)^{-1}.
$$

**对比 HJ bound.**

$$
\begin{aligned}
\text{HJ bound:}\quad
&\frac{\sigma(M)}{E[M]}\ge \max_R\frac{\lvert E[R^e]\rvert}{\sigma(R^e)}
&&\text{asks whether an SDF is volatile enough},\\
\text{HJ distance:}\quad
&d_{HJ}^2=g'G^{-1}g
&&\text{asks how far a candidate SDF is from pricing test assets}.
\end{aligned}
$$

HJ bound is a lower bound on admissible SDF volatility; HJ distance is a model misspecification metric.
