---
orphan: true
---

# MLE Consistency

Parent: [04_MLE_Fisher_CRLB_and_ML_Tests](04_MLE_Fisher_CRLB_and_ML_Tests)

:::{admonition} Lemma: Extremum consistency
If
\[
\sup_{\theta\in\Theta}|L_n(\theta)-L(\theta)|\to_p0
\]
and \(L(\theta)\) is uniquely maximized at \(\theta_0\), then any approximate maximizer \(\hat\theta\) satisfies
\[
\hat\theta\to_p\theta_0.
\]

:::

The two ingredients are uniform convergence and identification.
