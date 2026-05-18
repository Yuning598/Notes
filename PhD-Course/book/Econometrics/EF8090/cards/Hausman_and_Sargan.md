---
orphan: true
---

# Hausman and Sargan Tests

Parent: [09_IV_2SLS_Weak_Instruments](09_IV_2SLS_Weak_Instruments)

:::{admonition} Definition (Hausman exogeneity test)
Compares OLS and 2SLS. Under exogeneity both are consistent; under endogeneity only 2SLS is consistent.

**Definition (Overidentification / Sargan-Hansen J test):**
\[
J=n\hat g(\hat\beta)'\hat W\hat g(\hat\beta),
\qquad
\hat g(\hat\beta)=n^{-1}\sum_iZ_i\hat u_i.
\]
Under valid overidentifying restrictions, \(J\to_d\chi^2_{L-K}\)。

:::

A non-rejection is not proof of validity; it only says the instruments do not contradict each other strongly.
