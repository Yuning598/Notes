---
orphan: true
---

# Fama-MacBeth and Shanken Correction

**核心问题**：Fama-MacBeth two-pass regression 中，第二步把第一步估计的 $\hat\beta_i$ 当作真实值使用，标准误会低估（过于乐观）。Shanken correction 修正了 beta estimation error 的影响。

---

## Two-pass 回归

**第一步（时间序列）**：对每个资产 $i$ 估计因子 loading：

$$
R_{i,t}^e=a_i+\beta_i'f_t+\varepsilon_{i,t}.
$$

得到 $\hat\beta_i$。

**第二步（横截面）**：用平均 excess return 对 $\hat\beta_i$ 回归：

$$
\bar R_i^e=\hat\beta_i'\lambda+\alpha_i.
$$

估计量：

$$
\hat\lambda=(\hat B'\hat B)^{-1}\hat B'\bar R^e,
$$

其中 $\hat B$ 是所有资产的 $\hat\beta_i$ 堆叠成的矩阵。

---

## Shanken correction

**问题**：$\hat\beta_i$ 是第一步的估计值，不是真实值。第二步把它当作 regressor 时，其 estimation error 会传导到 $\hat\lambda$ 的标准误。

**未修正的标准误**（把 $\hat\beta_i$ 当作固定值）：

$$
\text{Var}(\hat\lambda) = (\hat B'\hat B)^{-1}\hat B'\Sigma_{\bar R}\hat B(\hat B'\hat B)^{-1},
$$

其中 $\Sigma_{\bar R}$ 是 $\bar R^e$ 的协方差矩阵。

**Shanken 修正后的标准误**：

$$
\text{Var}(\hat\lambda) = (1+\hat\lambda'\Sigma_f^{-1}\hat\lambda)(\hat B'\hat B)^{-1}\hat B'\Sigma_{\bar R}\hat B(\hat B'\hat B)^{-1},
$$

其中 $\Sigma_f$ 是因子 $f$ 的协方差矩阵。

修正因子 $(1+\hat\lambda'\Sigma_f^{-1}\hat\lambda)>1$ 反映了 beta estimation error 导致的额外不确定性。

---

**来源**：EF8083 slides, pp. 211-230
**导航**：[[../../index|Asset Pricing index]] · [[../00-MOC_EF8083_Empirical_Asset_Pricing|Empirical AP MOC]] · [[../05_Cross_Section_Factor_Models|Cross-section factor models]]
