# 经典效用函数比较 - CARA, CRRA, Quadratic

来源：[Asset Pricing/Theoretical AP/01_Single_Period_Models#1.5 Classic Utility Functions Comparison](Asset Pricing/Theoretical AP/01_Single_Period_Models#1.5 Classic Utility Functions Comparison)

返回：[Asset Pricing/Theoretical AP/01_Single_Period_Models](Asset Pricing/Theoretical AP/01_Single_Period_Models)

## 三类经典效用函数

- [Asset Pricing/Theoretical AP/cards/part1/CARA 效用 - 常绝对风险厌恶](Asset Pricing/Theoretical AP/cards/part1/CARA 效用 - 常绝对风险厌恶)
- [Asset Pricing/Theoretical AP/cards/part1/CRRA 效用 - 常相对风险厌恶](Asset Pricing/Theoretical AP/cards/part1/CRRA 效用 - 常相对风险厌恶)
- [Asset Pricing/Theoretical AP/cards/part1/二次效用 - Mean-Variance 基础](Asset Pricing/Theoretical AP/cards/part1/二次效用 - Mean-Variance 基础)

## 对比

| 类型 | 形式 | 常数性质 | CE 形式 | 典型用途 |
|---|---|---|---|---|
| CARA | $-e^{-\alpha w}$ | ARA 常数 | $CE=-\frac{1}{\alpha}\ln E[e^{-\alpha \tilde w}]$；若 $\tilde w\sim N(\mu,\sigma^2)$，则 $CE=\mu-\frac{\alpha}{2}\sigma^2$ | 单期组合、CARA-Normal |
| CRRA | $\frac{w^{1-\rho}}{1-\rho}$ | RRA 常数 | $CE=\left(E[\tilde w^{1-\rho}]\right)^{\frac{1}{1-\rho}}$；$\rho=1$ 时 $CE=\exp(E[\ln \tilde w])$ | 跨期消费、增长模型 |
| Quadratic | $-\frac12(w-\zeta)^2$ | 均值—方差友好 | $CE=\zeta-\sqrt{E[(\tilde w-\zeta)^2]}$（取 $CE<\zeta$ 的分支） | 教学推导、mean-variance |

更完整的定义与推导见 [Asset Pricing/Theoretical AP/cards/part1/确定性等价与风险溢价](Asset Pricing/Theoretical AP/cards/part1/确定性等价与风险溢价)。

## 记忆

- CARA：固定金额风险。
- CRRA：按财富比例的风险。
- Quadratic：最容易得到均值—方差形式。
