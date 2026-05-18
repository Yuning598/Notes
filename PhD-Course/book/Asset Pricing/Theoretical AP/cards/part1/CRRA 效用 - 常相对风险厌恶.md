# CRRA 效用 - 常相对风险厌恶

来源：[Asset Pricing/Theoretical AP/01_Single_Period_Models#1.5 Classic Utility Functions Comparison](Asset Pricing/Theoretical AP/01_Single_Period_Models#1.5 Classic Utility Functions Comparison)

返回：[Asset Pricing/Theoretical AP/01_Single_Period_Models](Asset Pricing/Theoretical AP/01_Single_Period_Models)

:::{admonition} Definition (Definition)
CRRA 效用写作

$$
u(w)=\frac{w^{1-\rho}}{1-\rho},\qquad \rho\neq 1,
$$
当 $\rho=1$ 时，退化为

$$
u(w)=\log w.
$$

:::

## 性质

$$
-\frac{wu''(w)}{u'(w)}=\rho,
$$

即相对风险厌恶不随财富变化。

因此

$$
\alpha(w)=-\frac{u''(w)}{u'(w)}=\frac{\rho}{w},
\qquad
\frac{d\alpha(w)}{dw}=-\frac{\rho}{w^2}<0,
$$

所以 CRRA implies DARA.

## 经济含义

- 对“按财富比例缩放”的风险态度不变。
- 常用于跨期消费和增长模型。
- 因为 $\alpha(w)=\rho/w$ 随财富上升而下降，所以它蕴含 DARA（decreasing absolute risk aversion，递减绝对风险厌恶）。
