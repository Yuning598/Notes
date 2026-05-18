---
orphan: true
---

# RD Wald Estimand

Parent: [13_RD_Nonparametric_Kernel](13_RD_Nonparametric_Kernel)

:::{admonition} Definition (Sharp RD)
\[
\tau_{SRD}=\lim_{r\downarrow c}E[Y\mid R=r]-\lim_{r\uparrow c}E[Y\mid R=r].
\]

**Definition (Fuzzy RD):**
\[
\tau_{FRD}=\frac{\lim_{r\downarrow c}E[Y\mid R=r]-\lim_{r\uparrow c}E[Y\mid R=r]}{\lim_{r\downarrow c}E[D\mid R=r]-\lim_{r\uparrow c}E[D\mid R=r]}.
\]

:::

Fuzzy RD is a local IV/Wald estimand at the cutoff.
