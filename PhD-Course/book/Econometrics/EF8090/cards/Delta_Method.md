---
orphan: true
---

# Delta Method

Parent: [04_Asymptotic_Tools](04_Asymptotic_Tools) | [05_OLS_Asymptotics_and_Robust_Inference](05_OLS_Asymptotics_and_Robust_Inference)

:::{admonition} Lemma
Delta method
If \(\sqrt n(\hat\theta-\theta_0)\to_dN(0,V)\) and \(g\) is differentiable at \(\theta_0\), then
\[
\sqrt n(g(\hat\theta)-g(\theta_0))\to_dN(0,GVG'),
\qquad G=\nabla g(\theta_0)'.
\]

:::

If the first derivative is zero, first-order Delta method degenerates; use higher-order expansion, e.g. \(n\hat\mu^2\to v^2\chi_1^2\) when \(\mu=0\)。
