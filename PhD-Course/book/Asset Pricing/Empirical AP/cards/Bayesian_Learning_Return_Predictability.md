---
orphan: true
---

# Bayesian Learning and Return Predictability

Source: EF8083 slides, pp. 242-270  
Backlinks: [06_Subjective_Expectations_Learning](../06_Subjective_Expectations_Learning)

Dividend process:
\[
D_t=\mu+\varepsilon_t,\qquad \varepsilon_t\sim N(0,\sigma^2).
\]

Posterior mean:
\[
\bar D_t=\frac1t\sum_{s=1}^tD_s.
\]

Price under subjective beliefs:
\[
P_t=\frac{\beta}{1-\beta}\bar D_t.
\]

Return:
\[
R_{t+1}
=
\frac{1}{1-\beta}
\left(1-\frac{\beta t}{t+1}\right)(D_{t+1}-\bar D_t).
\]

Expected return:
\[
E_tR_{t+1}
=
\frac{1}{1-\beta}
\left(1-\frac{\beta t}{t+1}\right)(\mu-\bar D_t).
\]

Belief errors generate predictability even when agents update rationally.
