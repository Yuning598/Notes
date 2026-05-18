---
orphan: true
---

# 2SLS as Projection

Parent: [09_IV_2SLS_Weak_Instruments](09_IV_2SLS_Weak_Instruments)

:::{admonition} Definition (2SLS)
\[
P_Z=Z(Z'Z)^{-1}Z',
\qquad
\hat\beta_{2SLS}=(X'P_ZX)^{-1}X'P_ZY.
\]

:::

The first stage replaces \(X\) by its projection \(P_ZX\). The second stage estimates the relationship between \(Y\) and the instrument-induced component of \(X\)。
