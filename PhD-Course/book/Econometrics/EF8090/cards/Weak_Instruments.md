---
orphan: true
---

# Weak Instruments

Parent: [09_IV_2SLS_Weak_Instruments](09_IV_2SLS_Weak_Instruments)

:::{admonition} Definition (Weak instruments)
Instruments are weak when their correlation with endogenous regressors is close to zero in the relevant first stage.

**Lemma:** Scalar IV variance explosion
\[
\hat\beta_{IV}-\beta\approx\frac{n^{-1}\sum_iZ_iu_i}{E[ZX]},
\qquad
\operatorname{Avar}(\hat\beta_{IV})\approx\frac{E[Z^2u^2]}{(E[ZX])^2}.
\]

:::

Weak instruments make normal approximations unreliable and pull 2SLS toward OLS in finite samples.
