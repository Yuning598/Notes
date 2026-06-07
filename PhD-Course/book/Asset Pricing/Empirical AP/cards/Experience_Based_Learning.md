---
orphan: true
---

# Experience-Based Learning

导航：[Asset Pricing index](../../index.md) · [Empirical AP MOC](../00-MOC_EF8083_Empirical_Asset_Pricing.md) · 来源：[06_Subjective_Expectations_Learning](../06_Subjective_Expectations_Learning)

Investor $i$'s subjective mean:
$$
\tilde \mu_{i,t}=\sum_{k=1}^{age_i}w_{i,k}R_{t-k}.
$$

Weights:
$$
w_{i,k}\ge 0,\qquad \sum_kw_{i,k}=1.
$$

Recency-weighted example:
$$
w_{i,k}=\frac{\lambda^{k-1}}{\sum_{j=1}^{age_i}\lambda^{j-1}},
\qquad 0<\lambda<1.
$$

Implication: cohorts with different lifetime experiences hold different beliefs and make different portfolio choices.
