---
orphan: true
---

# GMM Asset Pricing

**核心结论**：GMM 通过最小化矩条件 $E[m(\theta)R^e]=0$ 的加权二次型来估计 SDF 参数 $\theta$，并用 $J$-test 检验 overidentification。

$$
\hat\theta=\arg\min_\theta
\bar g_T(\theta)'W_T\bar g_T(\theta).
$$

---

## GMM 框架

**矩条件**：

$$
E[g_t(\theta)]=0,
\qquad
g_t(\theta)=M_t(\theta)R_t^e.
$$

$M_t(\theta)$ 是参数化的 SDF，$R_t^e$ 是 test-asset excess returns。

**样本矩**：

$$
\bar g_T(\theta)=\frac1T\sum_{t=1}^Tg_t(\theta).
$$

**GMM 估计量**：

$$
\hat\theta=\arg\min_\theta
\bar g_T(\theta)'W_T\bar g_T(\theta),
$$

其中 $W_T$ 是 weighting matrix。

---

## Overidentification test

当 test assets 个数 $N$ 大于参数个数 $K$ 时，可以检验 overidentifying restrictions：

$$
J=T\bar g_T(\hat\theta)'\hat S^{-1}\bar g_T(\hat\theta)
\sim\chi^2_{N-K},
$$

其中 $\hat S$ 是矩条件的长期协方差矩阵估计。

$J$-test 拒绝意味着模型不能同时定价所有 test assets。

---

## 最优 weighting matrix

理论上，最优 $W$ 是矩条件协方差矩阵的逆：

$$
W^*=S^{-1},\qquad S=\sum_{j=-\infty}^{\infty}E[g_t(\theta)g_{t-j}(\theta)'].
$$

两步估计：
1. 用 identity matrix $W_T=I$ 得到初始 $\tilde\theta$
2. 用 $\tilde\theta$ 估计 $\hat S$，再最小化 $\bar g_T(\theta)'\hat S^{-1}\bar g_T(\theta)$

---

**来源**：EF8083 slides, pp. 231-241
**导航**：[[../../index|Asset Pricing index]] · [[../00-MOC_EF8083_Empirical_Asset_Pricing|Empirical AP MOC]] · [[../05_Cross_Section_Factor_Models|Cross-section factor models]]
