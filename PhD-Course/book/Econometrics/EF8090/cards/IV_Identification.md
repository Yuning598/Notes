---
orphan: true
---

# IV Identification

Parent: [09_IV_2SLS_Weak_Instruments](09_IV_2SLS_Weak_Instruments)

:::{admonition} Definition (IV conditions)
For \(Y=X'\beta+u\), instruments \(Z\) require
\[
E[Zu]=0,
\qquad
\operatorname{rank}E[ZX']=k.
\]

**Lemma:** Identification
\[
E[ZY]=E[ZX']\beta
\quad\Rightarrow\quad
\beta=(E[ZX'])^{-1}E[ZY]
\]
in the just-identified case.

:::

Validity is untestable without extra instruments; relevance is partly testable through first stage.
