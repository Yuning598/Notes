---
orphan: true
---

# 00 Consumer Theory Review

## 核心定理汇总 (Core Theorems)

### 1. 存在性与理性
- [Utility Representation Theorem](Microeconomic/01_Static_Choice_Consumer_Demand_and_Integrability#^prop-utility-existence): 连续且理性的偏好可被效用函数表示。
- [Fundamental Theorem of Revealed Preference](Microeconomic/01_Static_Choice_Consumer_Demand_and_Integrability#^prop-fundamental-revealed-pref): WARP 保证了偏好的唯一恢复。

### 2. 需求函数性质
- **马歇尔需求 $x(p, w)$**:
    - [Roy's Identity](Microeconomic/4-Comparative Statics & Demand Properties#^prop-roy-identity): $x_i(p, w) = -\frac{\partial v / \partial p_i}{\partial v / \partial w}$.
    - 性质：零阶齐次性 (HOD 0), Walras' Law.
- **希克斯需求 $h(p, u)$**:
    - [Shephard's Lemma](Microeconomic/4-Comparative Statics & Demand Properties#^prop-shephard-lemma): $h_i(p, u) = \frac{\partial e}{\partial p_i}$.
    - [Law of Demand](Microeconomic/4-Comparative Statics & Demand Properties#^prop-hicks-law-of-demand): $h(p, u)$ 总是在价格上不增。

### 3. 斯卢茨基矩阵 (Slutsky Matrix)
:::{admonition} Proposition
Slutsky Matrix Properties
The Slutsky matrix $\{s_{ij}\}$ is symmetric and negative semidefinite, where:

$$
s_{ij} = \frac{\partial x_i(p, w)}{\partial p_j} + \frac{\partial x_i(p, w)}{\partial w} x_j(p, w)
\tag{5.1}
$$

^prop-slutsky-matrix-props

:::

## 对偶性总结 (Duality Summary)
| UMP | EMP |
| :--- | :--- |
| $\max u(x)$ s.t. $p \cdot x \leq w$ | $\min p \cdot x$ s.t. $u(x) \geq u$ |
| Marshallian $x(p, w)$ | Hicksian $h(p, u)$ |
| Indirect Utility $v(p, w)$ | Expenditure $e(p, u)$ |

- **Link**: [Duality Identities](Microeconomic/01_Static_Choice_Consumer_Demand_and_Integrability#^prop-duality-identities)
