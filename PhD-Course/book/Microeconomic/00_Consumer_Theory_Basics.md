---
orphan: true
---

# 00 Consumer Theory Basics

## 个人决策的基本模型 (Individual Decision-Making)
:::{admonition} Definition (Choice Structure (Choice Data))
A choice structure $(B, C(\cdot))$ consists of:
1. A set $B$ of choice sets $B \subseteq X$.
2. A choice rule $C(\cdot)$ that maps each $B \in B$ to a non-empty set of chosen alternatives $C(B) \subseteq B$.

^def-choice-structure

:::

## 偏好关系 (Preference Relation)
:::{admonition} Definition (Rational Preference)
A preference relation $\succsim$ is rational if it satisfies:
1. **Completeness**: For all $x, y \in X$, $x \succsim y$ or $y \succsim x$.
2. **Transitivity**: For all $x, y, z \in X$, if $x \succsim y$ and $y \succsim z$, then $x \succsim z$.

^def-rational-preference

:::

## 显示偏好理论 (Revealed Preference)
:::{admonition} Definition (Weak Axiom of Revealed Preference (WARP))
Choice data $(B, C)$ satisfies WARP if whenever there exists $B \in B$ with $x, y \in B$ and $x \in C(B)$, then for all $B' \in B$ with $x, y \in B'$, it is not the case that both $y \in C(B')$ and $x \notin C(B')$.

^def-warp

**Proposition:** Fundamental Theorem of Revealed Preference
If choice data $(B, C)$ satisfies WARP and $B$ includes all subsets of $X$ of up to 3 elements, then the revealed preference relation $\succsim^*$ is the unique preference relation that rationalizes the data.

^prop-fundamental-revealed-pref

:::

## 效用函数 (Utility Representation)
:::{admonition} Definition (Utility Function)
A utility function $u: X \to \mathbb{R}$ represents preference relation $\succsim$ if, for all $x, y \in X$:
$$x \succsim y \iff u(x) \geq u(y)$$

^def-utility-function

:::

### 连续性与存在性
:::{admonition} Definition (Continuous Preference)
The preference relation $\succsim$ is continuous if whenever $x_m \to x, y_m \to y$, and $x_m \succsim y_m$ for all $m$, we have $x \succsim y$.

^def-continuous-pref

**Proposition:** Existence of Utility Function
Any continuous, rational preference relation $\succsim$ can be represented by a utility function.

^prop-utility-existence
:::

