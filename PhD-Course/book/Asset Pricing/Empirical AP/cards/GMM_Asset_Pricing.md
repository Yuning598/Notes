---
orphan: true
---

# GMM Asset Pricing

Source: EF8083 slides, pp. 231-241  
Backlinks: [05_Cross_Section_Factor_Models](../05_Cross_Section_Factor_Models)

Moment condition:
\[
E[g_t(\theta)]=0,
\qquad
g_t(\theta)=M_t(\theta)R_t^e.
\]

Sample moment:
\[
\bar g_T(\theta)=\frac1T\sum_{t=1}^Tg_t(\theta).
\]

GMM estimator:
\[
\hat\theta=\arg\min_\theta
\bar g_T(\theta)'W_T\bar g_T(\theta).
\]

Overidentification test:
\[
J=T\bar g_T(\hat\theta)'\hat S^{-1}\bar g_T(\hat\theta)
\sim\chi^2_{N-K}.
\]
