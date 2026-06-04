---
orphan: true
---

# Out-of-Sample R2

Source: EF8083 slides, pp. 159-194  
Backlinks: [04_Return_Predictability_Econometrics](../04_Return_Predictability_Econometrics)

Out-of-sample \(R^2\):
\[
R^2_{OS} =
1-\frac{\sum_t(r_{t+1}-\hat r_{t+1})^2}
{\sum_t(r_{t+1}-\bar r_{t+1})^2}.
\]

Interpretation:

- \(R^2_{OS}>0\): predictive model beats historical mean benchmark.
- \(R^2_{OS}<0\): predictive model performs worse than benchmark.

Important: OOS tests are stricter than in-sample tests because parameters are estimated recursively or rolling through time.
