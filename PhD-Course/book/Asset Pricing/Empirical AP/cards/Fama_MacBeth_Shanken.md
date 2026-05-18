---
orphan: true
---

# Fama-MacBeth and Shanken Correction

Source: EF8083 slides, pp. 211-230  
Backlinks: [05_Cross_Section_Factor_Models](../05_Cross_Section_Factor_Models)

First pass:
\[
R_{i,t}^e=a_i+\beta_i'f_t+\varepsilon_{i,t}.
\]

Second pass:
\[
\bar R_i^e=\hat\beta_i'\lambda+\alpha_i.
\]

Estimator:
\[
\hat\lambda=(\hat B'\hat B)^{-1}\hat B'\bar R^e.
\]

Shanken issue: \(\hat\beta_i\) is generated from first-pass regressions. Second-pass standard errors that treat \(\hat\beta_i\) as fixed are too optimistic. Shanken correction adjusts for beta estimation error.
