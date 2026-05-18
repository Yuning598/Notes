---
orphan: true
---

# Leverage Effect and EGARCH

Source: EF8083 slides, pp. 23-36  
Backlinks: [01_Volatility_ARCH_GARCH](../01_Volatility_ARCH_GARCH)

Leverage effect: negative returns predict higher future volatility than positive returns of the same magnitude.

A common asymmetric specification:
\[
\log\sigma_t^2
=
\omega+\beta\log\sigma_{t-1}^2
+\alpha\left|\frac{u_{t-1}}{\sigma_{t-1}}\right|
+\gamma\frac{u_{t-1}}{\sigma_{t-1}}.
\]

If \(\gamma<0\), negative \(u_{t-1}\) raises future volatility more than positive \(u_{t-1}\).
