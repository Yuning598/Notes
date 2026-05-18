---
orphan: true
---

# Potential Outcomes: ATE, ATT, CATE

Parent: [10_Potential_Outcomes_ATE_Matching](10_Potential_Outcomes_ATE_Matching)

:::{admonition} Definition (Core estimands)
\[
ATE=E[Y(1)-Y(0)],
\qquad
ATT=E[Y(1)-Y(0)\mid D=1],
\]
\[
CATE(x)=E[Y(1)-Y(0)\mid X=x].
\]

:::

Observed outcome is \(Y=DY(1)+(1-D)Y(0)\). The missing counterfactual is the fundamental problem of causal inference.
