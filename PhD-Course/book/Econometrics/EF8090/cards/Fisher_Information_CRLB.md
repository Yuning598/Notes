---
orphan: true
---

# Fisher Information and CRLB

Parent: [04_MLE_Fisher_CRLB_and_ML_Tests](04_MLE_Fisher_CRLB_and_ML_Tests)

:::{admonition} Definition (Fisher information)
\[
I_1(\theta)=E\left[\left(\frac{\partial\log f(Y;\theta)}{\partial\theta}\right)^2\right]
=-E\left[\frac{\partial^2\log f(Y;\theta)}{\partial\theta^2}\right].
\]

**Lemma:** Cramer-Rao bound
If \(\hat\theta\) is unbiased,
\[
\operatorname{Var}(\hat\theta)\ge I(\theta)^{-1}.
\]

:::

MLE is asymptotically efficient when regularity conditions hold.
