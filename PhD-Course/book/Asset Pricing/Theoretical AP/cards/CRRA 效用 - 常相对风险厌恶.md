---
orphan: true
---

# CRRA 效用 - Constant Relative Risk Aversion

导航：[Asset Pricing index](../../index.md) · 来源：[01_Single_Period_Models](../01_Single_Period_Models.md)


## 定义

CRRA（常相对风险厌恶）效用写作

$$
u(w)=\frac{w^{1-\rho}}{1-\rho},\qquad \rho\neq 1,
$$

若 $\rho=1$，退化为

$$
u(w)=\log w.
$$

## 风险厌恶特征

相对风险厌恶系数为

$$
R(w)=-\frac{w u''(w)}{u'(w)}=\rho,
$$

即 **不随财富变化**。

## 经济含义

- 投资者在面对“按财富比例缩放”的风险时，态度保持不变。
- 常用于跨期消费、长期投资和增长模型。
- CRRA 蕴含 DARA：财富越高，绝对风险厌恶越低。
  $$
  \alpha(w)=-\frac{u''(w)}{u'(w)}=\frac{\rho}{w},
  \qquad
  \frac{d\alpha(w)}{dw}=-\frac{\rho}{w^2}<0,
  $$
  所以 CRRA implies DARA.

## 特例

当 $\rho=1$ 时，就是对数效用，可联系 [04_Information_Beliefs_and_Learning](../04_Information_Beliefs_and_Learning.md)。
