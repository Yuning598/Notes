---
orphan: true
---

# Wald Test with R Matrix

Parent: [03_Asymptotics_OLS_Inference_Hypothesis_Testing](03_Asymptotics_OLS_Inference_Hypothesis_Testing)

:::{admonition} Definition (Linear Wald test)
For \(H_0:R\beta=r\),
\[
W=(R\hat\beta-r)'[R\widehat{\operatorname{Var}}(\hat\beta)R']^{-1}(R\hat\beta-r).
\]
If \(\widehat{\operatorname{Var}}(\hat\beta)\) is finite-sample variance, no \(n\) appears; if \(\hat V\) estimates asymptotic variance of \(\sqrt n(\hat\beta-\beta)\), use
\[
W=n(R\hat\beta-r)'(R\hat V R')^{-1}(R\hat\beta-r).
\]

:::

Under \(H_0\), \(W\to_d\chi^2_q\), where \(q\) is the number of restrictions.
