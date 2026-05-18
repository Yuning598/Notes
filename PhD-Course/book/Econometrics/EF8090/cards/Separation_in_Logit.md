---
orphan: true
---

# Separation in Logit

Parent: [07_MLE_Fisher_CRLB](07_MLE_Fisher_CRLB) | [08_MLE_Asymptotics_and_ML_Tests](08_MLE_Asymptotics_and_ML_Tests)

:::{admonition} Definition (Perfect separation)
A binary response sample is perfectly separated if there exists \(b\) such that
\[
X_i'b>0\text{ for all }Y_i=1,
\qquad
X_i'b<0\text{ for all }Y_i=0.
\]

:::

In logit, separation makes likelihood approach its supremum as \(\|b\|\to\infty\). No finite MLE exists.
