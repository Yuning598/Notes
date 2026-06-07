---
orphan: true
---

# Conditional Expectation Orthogonality

导航：[Econometrics index](../../index.md)

Parent: [01_CEF_and_Linear_Projection](../01_CEF_and_Linear_Projection.md)

:::{admonition} Lemma: CEF error orthogonality
Let $e=Y-E[Y\mid X]$. For any integrable $h(X)$,
$$
E[h(X)e]=0.
$$
Proof:
$$
\begin{aligned}
E[h(X)e]
&=E(E[h(X)e\mid X])\\
&=E(h(X)E[e\mid X])\\
&=0.
\end{aligned}
$$

:::

This is stronger than $E[e]=0$, but weaker than full independence of $e$ and $X$。
