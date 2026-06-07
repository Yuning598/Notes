---
orphan: true
---

# Predictive Regression and Stambaugh Bias

**核心问题**：在 predictive regression 中，如果预测变量 $x_t$ 高度持续（$\rho$ 接近 1）且与被预测变量的残差相关，OLS 估计量 $\hat\beta$ 会有显著偏误（Stambaugh bias）。

$$
E(\hat\beta-\beta) \approx
-\frac{\operatorname{Cov}(\varepsilon,\nu)}
{\operatorname{Var}(\nu)}
\frac{1+3\rho}{T}.
$$

---

## Predictive regression 系统

**预测方程**：

$$
r_{t+1}=\alpha+\beta x_t+\varepsilon_{t+1}.
$$

$r_{t+1}$ 是被预测的 return，$x_t$ 是预测变量（如 dividend-price ratio）。

**预测变量的动态**：

$$
x_{t+1}=\theta+\rho x_t+\nu_{t+1}.
$$

$x_t$ 通常高度持续（$\rho$ 接近 1），如 valuation ratios。

---

## Stambaugh bias 的来源

当 $\operatorname{Cov}(\varepsilon_{t+1},\nu_{t+1})\ne0$ 时，OLS 估计量 $\hat\beta$ 有偏：

$$
E(\hat\beta-\beta) =
\frac{\operatorname{Cov}(\varepsilon,\nu)}
{\operatorname{Var}(\nu)}
E(\hat\rho-\rho).
$$

**Kendall bias**：当 $\rho$ 接近 1 时，$\hat\rho$ 向下偏（downward bias）：

$$
E(\hat\rho-\rho)\approx-\frac{1+3\rho}{T}.
$$

结合两者：

$$
E(\hat\beta-\beta)\approx
-\frac{\operatorname{Cov}(\varepsilon,\nu)}
{\operatorname{Var}(\nu)}
\frac{1+3\rho}{T}.
$$

---

## 经济含义

**典型情形**：
- $x_t$ 是 dividend-price ratio，$\rho \approx 0.95$
- $\operatorname{Cov}(\varepsilon,\nu)<0$：return 高时 $x_t$ 下降（价格上涨）

此时 $E(\hat\beta-\beta)>0$：$\hat\beta$ 向上偏，**高估** 了 predictability。

**实证后果**：
- 即使真实 $\beta=0$（无 predictability），样本中也容易得到显著正的 $\hat\beta$
- 需要 bootstrap 或 bias-corrected inference

---

## 应对方法

1. **Bootstrap inference**：模拟数据生成过程，构造 bias-corrected CI
2. **Bonferroni Q 检验**（Campbell & Yogo）：联合检验 $\beta=0$ 和 $\rho<1$
3. **使用 IV 方法**：工具变量回归减少 bias
4. **长期回归**：用多期累积 return，虽然牺牲样本量但减少 bias

---

**来源**：EF8083 slides, pp. 123-158
**导航**：[[../../index|Asset Pricing index]] · [[../00-MOC_EF8083_Empirical_Asset_Pricing|Empirical AP MOC]] · [[../04_Return_Predictability_Econometrics|04_Return_Predictability_Econometrics]]
