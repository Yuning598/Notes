---
orphan: true
---

# 经典效用函数比较 - CARA, CRRA, Quadratic

导航：[Asset Pricing index](../../../index.md) · 来源：[01_Single_Period_Models](../../01_Single_Period_Models.md)


## 三类经典效用函数

- [CARA 效用 - 常绝对风险厌恶](../CARA%20%E6%95%88%E7%94%A8%20-%20%E5%B8%B8%E7%BB%9D%E5%AF%B9%E9%A3%8E%E9%99%A9%E5%8E%8C%E6%81%B6.md)
- [CRRA 效用 - 常相对风险厌恶](../CRRA%20%E6%95%88%E7%94%A8%20-%20%E5%B8%B8%E7%9B%B8%E5%AF%B9%E9%A3%8E%E9%99%A9%E5%8E%8C%E6%81%B6.md)
- [二次效用 - Mean-Variance 基础](../%E4%BA%8C%E6%AC%A1%E6%95%88%E7%94%A8%20-%20Mean-Variance%20%E5%9F%BA%E7%A1%80.md)

## 对比

| 类型 | 形式 | 常数性质 | CE 形式 | 典型用途 |
|---|---|---|---|---|
| CARA | $-e^{-\alpha w}$ | ARA 常数 | $CE=-\frac{1}{\alpha}\ln E[e^{-\alpha \tilde w}]$；若 $\tilde w\sim N(\mu,\sigma^2)$，则 $CE=\mu-\frac{\alpha}{2}\sigma^2$ | 单期组合、CARA-Normal |
| CRRA | $\frac{w^{1-\rho}}{1-\rho}$ | RRA 常数 | $CE=\left(E[\tilde w^{1-\rho}]\right)^{\frac{1}{1-\rho}}$；$\rho=1$ 时 $CE=\exp(E[\ln \tilde w])$ | 跨期消费、增长模型 |
| Quadratic | $-\frac12(w-\zeta)^2$ | 均值—方差友好 | $CE=\zeta-\sqrt{E[(\tilde w-\zeta)^2]}$（取 $CE<\zeta$ 的分支） | 教学推导、mean-variance |

更完整的定义与推导见 [确定性等价与风险溢价](%E7%A1%AE%E5%AE%9A%E6%80%A7%E7%AD%89%E4%BB%B7%E4%B8%8E%E9%A3%8E%E9%99%A9%E6%BA%A2%E4%BB%B7.md)。

## 记忆

- CARA：固定金额风险。
- CRRA：按财富比例的风险。
- Quadratic：最容易得到均值—方差形式。
