---
orphan: true
---

# Boundary MLE: Uniform(theta, 2theta)

Parent: [07_MLE_Fisher_CRLB](07_MLE_Fisher_CRLB)

:::{admonition} Lemma
Uniform boundary estimator
If \(X_i\sim U(\theta,2\theta)\), then
\[
\ell(\theta)=\theta^{-n}\mathbf 1\left\{\frac{X_{(n)}}2\le\theta\le X_{(1)}\right\},
\]
hence
\[
\hat\theta=\frac12X_{(n)}.
\]

:::

This MLE is nonregular: its limiting distribution is exponential under \(n\)-rate, not normal under \(\sqrt n\)-rate.
