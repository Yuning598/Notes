---
orphan: true
---

# Propensity Score Balancing

Parent: [06_Potential_Outcomes_LATE_Roy_MTE](06_Potential_Outcomes_LATE_Roy_MTE)

:::{admonition} Lemma
Balancing score
Let \(p(X)=P(D=1\mid X)\). Then
\[
D\perp X\mid p(X).
\]

:::

Proof idea:
\[
P(D=1\mid X=x,p(X)=p)=p(x)=p=P(D=1\mid p(X)=p).
\]

With unconfoundedness given \(X\), conditioning on \(p(X)\) is enough for identification.
