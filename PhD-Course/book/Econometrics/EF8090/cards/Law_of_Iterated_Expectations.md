---
orphan: true
---

# Law of Iterated Expectations

导航：[Econometrics index](../../index.md)

Parent: [01_CEF_and_Linear_Projection](../01_CEF_and_Linear_Projection.md)

:::{admonition} Lemma: LIE
$E[E(Y\mid X)]=E[Y]$.

**Proof sketch:**
$$
\begin{aligned}
E[E(Y\mid X)]
&=\int\left\{\int y f_{Y\mid X}(y\mid x)dy\right\}f_X(x)dx\\
&=\int\int y f_{Y,X}(y,x)dydx\\
&=E[Y].
\end{aligned}
$$

:::

Use it whenever a conditional object must be converted to an unconditional moment: OLS orthogonality, IPW, MTE weights, and variance decomposition all use this move.
