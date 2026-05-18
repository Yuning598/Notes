---
orphan: true
---

# Overview

Source-first notes for **EF8090 Advanced Econometrics I**. 这些笔记严格以 `EF8090_slides.pdf` 为主线，并把 `ps1.pdf`--`ps6.pdf` 的核心习题嵌入相应主题。Hayashi 只作为背景索引，不替代课件结构。

## 0. 课程主线

EF8090 的课程结构可以分成三条线：

1. **Linear model and asymptotic theory**：CEF、linear projection、OLS、有限样本、渐近、假设检验。见 [01_CEF_and_Linear_Projection](01_CEF_and_Linear_Projection) 到 [06_Hypothesis_Testing](06_Hypothesis_Testing)。
2. **Likelihood-based inference**：MLE、Fisher information、Cramer-Rao bound、ML 的 Wald / LR / LM 检验。见 [07_MLE_Fisher_CRLB](07_MLE_Fisher_CRLB) 与 [08_MLE_Asymptotics_and_ML_Tests](08_MLE_Asymptotics_and_ML_Tests)。
3. **Causal inference and program evaluation**：IV/2SLS、LATE、Roy/MTE、matching、DiD、RD、nonparametrics。见 [09_IV_2SLS_Weak_Instruments](09_IV_2SLS_Weak_Instruments) 到 [13_RD_Nonparametric_Kernel](13_RD_Nonparametric_Kernel)。

```{mermaid}
graph TD
A[CEF / Projection] --> B[OLS Algebra]
B --> C[Finite Sample / GLS]
C --> D[Asymptotic Tools]
D --> E[OLS Asymptotics]
E --> F[Hypothesis Testing]
F --> G[MLE / CRLB]
G --> H[ML Tests]
E --> I[IV / 2SLS]
I --> J[Potential Outcomes]
J --> K[LATE / Roy / MTE]
J --> L[DiD / FE / Event Study]
L --> M[RD / Kernel]
```

## 1. 主题笔记

- [01_CEF_and_Linear_Projection](01_CEF_and_Linear_Projection)
- [02_OLS_Algebra_FWL_OVB](02_OLS_Algebra_FWL_OVB)
- [03_OLS_Finite_Sample_Gauss_Markov_GLS](03_OLS_Finite_Sample_Gauss_Markov_GLS)
- [04_Asymptotic_Tools](04_Asymptotic_Tools)
- [05_OLS_Asymptotics_and_Robust_Inference](05_OLS_Asymptotics_and_Robust_Inference)
- [06_Hypothesis_Testing](06_Hypothesis_Testing)
- [07_MLE_Fisher_CRLB](07_MLE_Fisher_CRLB)
- [08_MLE_Asymptotics_and_ML_Tests](08_MLE_Asymptotics_and_ML_Tests)
- [09_IV_2SLS_Weak_Instruments](09_IV_2SLS_Weak_Instruments)
- [10_Potential_Outcomes_ATE_Matching](10_Potential_Outcomes_ATE_Matching)
- [11_LATE_Roy_MTE](11_LATE_Roy_MTE)
- [12_DiD_Fixed_Effects_Event_Study](12_DiD_Fixed_Effects_Event_Study)
- [13_RD_Nonparametric_Kernel](13_RD_Nonparametric_Kernel)

## 2. 高频小卡片

### CEF / Projection / OLS
- [cards/Law_of_Iterated_Expectations](cards/Law_of_Iterated_Expectations)
- [cards/Conditional_Expectation_Orthogonality](cards/Conditional_Expectation_Orthogonality)
- [cards/Variance_Decomposition](cards/Variance_Decomposition)
- [cards/Projection_vs_CEF](cards/Projection_vs_CEF)
- [cards/Projection_Matrix](cards/Projection_Matrix)
- [cards/FWL_Theorem](cards/FWL_Theorem)
- [cards/Omitted_Variable_Bias](cards/Omitted_Variable_Bias)
- [cards/Fixed_Effects_Demeaning](cards/Fixed_Effects_Demeaning)

### Finite sample / asymptotics / tests
- [cards/Gauss_Markov](cards/Gauss_Markov)
- [cards/GLS_Whitening](cards/GLS_Whitening)
- [cards/Heteroskedastic_Robust_Variance](cards/Heteroskedastic_Robust_Variance)
- [cards/Chebyshev_WLLN](cards/Chebyshev_WLLN)
- [cards/CLT_and_Cramer_Wold](cards/CLT_and_Cramer_Wold)
- [cards/Continuous_Mapping_Slutsky](cards/Continuous_Mapping_Slutsky)
- [cards/Delta_Method](cards/Delta_Method)
- [cards/Stochastic_Order_Op_op](cards/Stochastic_Order_Op_op)
- [cards/Wald_Test_Matrix_R](cards/Wald_Test_Matrix_R)

### MLE
- [cards/Fisher_Information_CRLB](cards/Fisher_Information_CRLB)
- [cards/MLE_Consistency](cards/MLE_Consistency)
- [cards/ML_Wald_LR_LM](cards/ML_Wald_LR_LM)
- [cards/Boundary_MLE_Uniform](cards/Boundary_MLE_Uniform)
- [cards/Separation_in_Logit](cards/Separation_in_Logit)

### IV and causal inference
- [cards/IV_Identification](cards/IV_Identification)
- [cards/TwoSLS_as_Projection](cards/TwoSLS_as_Projection)
- [cards/Hausman_and_Sargan](cards/Hausman_and_Sargan)
- [cards/Weak_Instruments](cards/Weak_Instruments)
- [cards/Potential_Outcomes_ATE_ATT_CATE](cards/Potential_Outcomes_ATE_ATT_CATE)
- [cards/Propensity_Score_Balancing](cards/Propensity_Score_Balancing)
- [cards/Doubly_Robust_AIPW](cards/Doubly_Robust_AIPW)
- [cards/LATE_Compliers](cards/LATE_Compliers)
- [cards/MTE_Weights](cards/MTE_Weights)
- [cards/Roy_Model_Selection](cards/Roy_Model_Selection)
- [cards/DID_Common_Trends](cards/DID_Common_Trends)
- [cards/TWFE_Event_Study](cards/TWFE_Event_Study)
- [cards/RD_Wald_Estimand](cards/RD_Wald_Estimand)
- [cards/Kernel_Bandwidth_Bias_Variance](cards/Kernel_Bandwidth_Bias_Variance)

## 3. 习题对照索引

| Problem set | 对应主题 |
|---|---|
| PS1 | CEF、conditional variance、linear projection、FWL、fixed effects、finite-sample OLS |
| PS2 | convergence、Delta method、Wald test、CI-test duality、stochastic order、residual variance |
| PS3 | MLE、Fisher information、Poisson/Binomial tests、boundary MLE、binary response |
| PS4 | measurement error、heterogeneous treatment effect、IV relevance/exogeneity、LATE shares |
| PS5 | probability integral transform、Roy/MTE、propensity score、FWL form of 2SLS |
| PS6 | fixed effects residualization、DiD decomposition、fuzzy RD as local IV |

## 4. 记号约定

- 课件中因 PDF 解析造成的乱码希腊字母，统一写作常见 econometrics 记号：

  $$
y=x'\beta+e,\qquad Q=E[xx'],\qquad \Omega=E[e^2xx'].
$$

- 所有推导尽量采用：**WTS**（Want To Show）→ **联立系统** → **连续求解** → **结论**。
- callout 只使用 `[!definition]` 与 `[!lemma]`，便于 Obsidian 统一检索。
