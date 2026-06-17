---
orphan: true
---

# 二次效用 - Quadratic Utility

导航：[Asset Pricing index](../../index.md) · 来源：[01_Single_Period_Models](../01_Single_Period_Models.md)


## 定义

二次效用常写作

$$
u(w)=-\frac{1}{2}(w-\zeta)^2,
$$

通常要求 $w<\zeta$，以保证边际效用为正。

## 核心性质

它会导出 **mean-variance preferences**：最大化

$$
E[u(\tilde w)]
$$

等价于在均值和方差之间做权衡。

## 经济含义

- 这是均值—方差分析最直接的微观基础之一。
- 好处是形式简单，便于推导。
- 但它蕴含 IARA（绝对风险厌恶随财富上升），通常被认为不够现实。

## 推导：二次效用到 Mean-Variance

若 $u(w)=-\frac12(w-\zeta)^2$，则

$$
\begin{aligned}
E[u(\tilde w)]
&= -\frac12E[(\tilde w-\zeta)^2] \\
&= -\frac12\Big(E[\tilde w^2]-2\zeta E[\tilde w]+\zeta^2\Big) \\
&= -\frac12\Big(\operatorname{Var}(\tilde w)+E[\tilde w]^2-2\zeta E[\tilde w]+\zeta^2\Big) \\
&= -\frac12\operatorname{Var}(\tilde w)-\frac12\big(E[\tilde w]-\zeta\big)^2.
\end{aligned}
$$

故

$$
\max E[u(\tilde w)]
\Longleftrightarrow
\max \Big\{E[\tilde w]-\frac{1}{2}(E[\tilde w]-\zeta)^2-\frac12\operatorname{Var}(\tilde w)\Big\},
$$

因此只要期望收益与方差的组合相同，效用排序就等价于 mean-variance preferences。

## 使用提醒

二次效用常用于说明均值—方差思想，但在很多资产定价模型里，研究者更偏好 [CARA 效用 - 常绝对风险厌恶](CARA%20%E6%95%88%E7%94%A8%20-%20%E5%B8%B8%E7%BB%9D%E5%AF%B9%E9%A3%8E%E9%99%A9%E5%8E%8C%E6%81%B6.md) 或 [CRRA 效用 - 常相对风险厌恶](CRRA%20%E6%95%88%E7%94%A8%20-%20%E5%B8%B8%E7%9B%B8%E5%AF%B9%E9%A3%8E%E9%99%A9%E5%8E%8C%E6%81%B6.md)。
