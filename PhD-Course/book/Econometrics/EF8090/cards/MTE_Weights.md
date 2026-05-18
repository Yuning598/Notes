---
orphan: true
---

# MTE Weights

Parent: [11_LATE_Roy_MTE](11_LATE_Roy_MTE)

:::{admonition} Definition (MTE)
In \(D=1[U_D\le p(Z)]\),
\[
MTE(u)=E[Y_1-Y_0\mid U_D=u].
\]

**Lemma:** Weighted averages
\[
ATE=\int_0^1MTE(u)du.
\]
If \(p(z)>p(z')\),
\[
LATE(z,z')=\frac{\int_{p(z')}^{p(z)}MTE(u)du}{p(z)-p(z')}.
\]

:::

Different estimands are different weights over the same marginal treatment effect curve.
