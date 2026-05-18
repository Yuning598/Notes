---
orphan: true
---

# VIX Static Replication

Source: EF8083 slides, pp. 37-54  
Backlinks: [02_Implied_Volatility_VIX_VRP](../02_Implied_Volatility_VIX_VRP)

Carr-Madan formula:
\[
\begin{aligned}
g(S_T)=
&g(x)+g'(x)(S_T-x)\\
&+\int_0^x g''(K)(K-S_T)^+dK
+\int_x^\infty g''(K)(S_T-K)^+dK.
\end{aligned}
\]

For log payoff \(g(S)=-2\log S\):
\[
g''(K)=\frac{2}{K^2}.
\]

Thus the log contract can be replicated by a continuum of OTM puts and calls with weights proportional to \(1/K^2\). This is the mathematical root of model-free implied variance and VIX construction.
