---
orphan: true
---

# GARCH Infinite ARCH and Half-Life

Source: EF8083 slides, pp. 15-22  
Backlinks: [01_Volatility_ARCH_GARCH](../01_Volatility_ARCH_GARCH)

GARCH(1,1):
\[
\sigma_t^2=\alpha_0+\alpha_1u_{t-1}^2+\beta_1\sigma_{t-1}^2.
\]

:::{admonition} Lemma: Infinite ARCH representation
\[
\sigma_t^2 =
\frac{\alpha_0}{1-\beta_1}
+\alpha_1\sum_{j=1}^{\infty}\beta_1^{j-1}u_{t-j}^2.
\]

:::

Unconditional variance:
\[
\bar\sigma^2=\frac{\alpha_0}{1-\alpha_1-\beta_1}.
\]

Forecast:
\[
E_t[\sigma_{t+h}^2] =
\bar\sigma^2+(\alpha_1+\beta_1)^{h-1}(E_t[\sigma_{t+1}^2]-\bar\sigma^2).
\]

Half-life:
\[
h_{1/2} =
\frac{\log(1/2)}{\log(\alpha_1+\beta_1)}.
\]
