---
orphan: true
---

# Hansen-Jagannathan Bound

Source: EF8083 slides, pp. 94-103  
Backlinks: [03_Consumption_Based_AP_Puzzles](../03_Consumption_Based_AP_Puzzles) | [Hansen_Jagannathan_Distance](Hansen_Jagannathan_Distance)

For any excess return \(R^e\):
\[
E[MR^e]=0.
\]

Then
\[
E[M]E[R^e]=-\operatorname{Cov}(M,R^e).
\]

By Cauchy-Schwarz:
\[
|E[M]E[R^e]|
\le \sigma(M)\sigma(R^e).
\]

Therefore:
\[
\frac{\sigma(M)}{E[M]}
\ge
\frac{|E[R^e]|}{\sigma(R^e)}.
\]

Interpretation: high Sharpe ratio assets require a sufficiently volatile SDF.

Do not confuse this with [Hansen_Jagannathan_Distance](Hansen_Jagannathan_Distance):

$$
\begin{aligned}
\text{HJ bound} &:\quad \text{minimum volatility requirement for any admissible SDF},\\
\text{HJ distance} &:\quad \text{distance from a candidate SDF to the admissible SDF set}.
\end{aligned}
$$
