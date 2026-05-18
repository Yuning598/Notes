---
orphan: true
---

# Predictive Regression and Stambaugh Bias

Source: EF8083 slides, pp. 123-158  
Backlinks: [04_Return_Predictability_Econometrics](../04_Return_Predictability_Econometrics)

System:
\[
\begin{aligned}
r_{t+1}&=\alpha+\beta x_t+\varepsilon_{t+1},\\
x_{t+1}&=\theta+\rho x_t+\nu_{t+1}.
\end{aligned}
\]

If \(\operatorname{Cov}(\varepsilon,\nu)\ne0\), then:
\[
E(\hat\beta-\beta)
=
\frac{\operatorname{Cov}(\varepsilon,\nu)}
{\operatorname{Var}(\nu)}
E(\hat\rho-\rho).
\]

Kendall bias:
\[
E(\hat\rho-\rho)\approx-\frac{1+3\rho}{T}.
\]

Thus:
\[
E(\hat\beta-\beta)\approx
-\frac{\operatorname{Cov}(\varepsilon,\nu)}
{\operatorname{Var}(\nu)}
\frac{1+3\rho}{T}.
\]
