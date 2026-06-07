---
type: bridge-note
qe_weight: high
courses:
  - Econometrics
  - Asset Pricing
topics:
  - projection
  - beta-pricing
  - factor-models
exam_modes:
  - proof
  - computation
  - interpretation
tags:
  - qe
  - cross-course
  - projection
  - beta
---

# Projection and Beta Pricing

导航：[Cross-Course Hub](../index.md) · [Econometrics](../../Econometrics/index.md) · [Asset Pricing](../../Asset%20Pricing/index.md)

## 1. 一句话主线

linear projection 是共同对象：Econometrics 把它写成最小均方误差和正交条件；Asset Pricing 把同一个 projection slope 解释为 beta，并用 beta exposure 定价横截面收益。

## 2. 共同数学对象

对随机变量 $Y$ 和因子 $F$，linear projection 是

$$
Y=\alpha+\beta^\top F+\varepsilon,
\qquad
E[\varepsilon]=0,\quad E[F\varepsilon]=0.
$$

若 $F$ 已中心化，

$$
\beta=\operatorname{Var}(F)^{-1}\operatorname{Cov}(F,Y).
$$

样本中，投影矩阵为

$$
P_X=X(X^\top X)^{-1}X^\top,
\qquad
M_X=I-P_X.
$$

## 3. 跨课命名

| 共同对象 | Econometrics | Asset Pricing | QE 常见问法 |
| --- | --- | --- | --- |
| projection slope | population linear projection | asset beta | 算 beta、解释 slope |
| orthogonality | $E[Xu]=0$ | pricing error orthogonal to factors | 写 moment condition |
| projection matrix | fitted values and residual maker | first-pass beta estimate | 证明 idempotent/rank |
| cross-sectional projection | second-stage regression | Fama-MacBeth | 估计 risk premia |

## 4. 核心公式

时间序列 beta:

$$
R_{it}^e=\alpha_i+\beta_i^\top f_t+\varepsilon_{it},
\qquad
E[f_t\varepsilon_{it}]=0.
$$

beta pricing 表示：

$$
E[R_i^e]=\beta_i^\top \lambda.
$$

若 SDF 线性依赖因子 $m=a-b^\top f$，则

$$
0=E[mR_i^e]
=aE[R_i^e]-\operatorname{Cov}(R_i^e,f)^\top b,
$$

所以 expected return 只通过因子协方差或 beta 暴露进入。

## 5. QE 题型

### 5.1 从 projection 推 beta

步骤：

1. 写 population projection。
2. 用正交条件 $E[f\varepsilon_i]=0$。
3. 得 $\beta_i=\operatorname{Var}(f)^{-1}\operatorname{Cov}(f,R_i^e)$。

### 5.2 证明 projection matrix 性质

常用性质：

$$
P_X^2=P_X,\qquad P_X^\top=P_X,\qquad M_XX=0.
$$

这些结论对应 beta 估计中的 fitted component 与 residual component 分解。

### 5.3 Fama-MacBeth

步骤：

1. 第一阶段对每个资产做时间序列回归，估 $\hat\beta_i$。
2. 第二阶段做横截面回归 $\bar R_i^e=\hat\beta_i^\top\lambda+\eta_i$。
3. 解释 $\lambda$ 为 factor risk price。

## 6. 最短复习路线

1. [Econometrics: CEF and Linear Projection](../../Econometrics/EF8090/01_CEF_and_Linear_Projection.md)
2. [Econometrics card: Projection Matrix](../../Econometrics/EF8090/cards/Projection_Matrix.md)
3. [Empirical AP: Cross-Section Factor Models](../../Asset%20Pricing/Empirical%20AP/05_Cross_Section_Factor_Models.md)
4. [AP card: Fama-MacBeth and Shanken](../../Asset%20Pricing/Empirical%20AP/cards/Fama_MacBeth_Shanken.md)
