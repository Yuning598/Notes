---
orphan: true
---

# Separation in Logit

Parent: [04_MLE_Fisher_CRLB_and_ML_Tests](04_MLE_Fisher_CRLB_and_ML_Tests) | [04_MLE_Fisher_CRLB_and_ML_Tests](04_MLE_Fisher_CRLB_and_ML_Tests)

:::{admonition} Definition (Perfect separation)
A binary response sample is perfectly separated if there exists \(b\) such that
\[
X_i'b>0\text{ for all }Y_i=1,
\qquad
X_i'b<0\text{ for all }Y_i=0.
\]

:::

In logit, separation makes likelihood approach its supremum as \(\|b\|\to\infty\). No finite MLE exists.
