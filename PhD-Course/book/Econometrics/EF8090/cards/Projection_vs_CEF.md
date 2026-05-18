---
orphan: true
---

# Projection vs CEF

Parent: [01_CEF_and_Linear_Projection](01_CEF_and_Linear_Projection)

:::{admonition} Definition (CEF vs linear projection)
CEF:
\[
m(X)=E[Y\mid X],\qquad E[Y-m(X)\mid X]=0.
\]
Linear projection:
\[
\beta^*=(E[XX'])^{-1}E[XY],\qquad E[X(Y-X'\beta^*)]=0.
\]

:::

CEF is the best predictor among all functions of \(X\). Linear projection is the best predictor among linear functions only. If CEF is not linear, projection error need not satisfy conditional mean zero.
