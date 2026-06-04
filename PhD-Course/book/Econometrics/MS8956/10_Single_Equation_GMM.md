# 10 Single-Equation IV-GMM

**Working Market-Equilibrium Model**

## Supply-Demand Structural Equations
Consider a simple commodity market with demand and supply functions:
- **Demand Equation**: $q_i^d = \alpha_0 + \alpha_1 p_i + u_i \quad (3.1.1a)$
- **Supply Equation**: $q_i^s = \beta_0 + \beta_1 p_i + v_i \quad (3.1.1b)$
- **Equilibrium Condition**: $q_i^d = q_i^s \quad (3.1.1c)$

## Exogeneity and Shock Assumptions
- $E(u_i) = 0, E(v_i) = 0$ (Zero mean errors).
- $Cov(u_i, v_i) = 0$ (Errors are uncorrelated).

## Reduced Two-Equation System
By defining $q_i = q_i^d = q_i^s$, the system simplifies to:

$$
\begin{cases} 
q_i = \alpha_0 + \alpha_1 p_i + u_i & \text{(Demand)} \\ 
q_i = \beta_0 + \beta_1 p_i + v_i & \text{(Supply)} 
\end{cases} \quad (3.1.2)
$$

**Equilibrium Endogeneity Concept**

- **Definition**: A regressor (e.g., $p_i$) is **Endogenous** if it is not predetermined.
- **Statistical Condition**: In the context of OLS, a regressor is endogenous if it does not satisfy the **orthogonality condition** (正交条件)，即 $E(x_i u_i) \neq 0$。

> [!info] Predetermined (预定/先定变量)
> 如果一个解释变量 $x_t$ 与当期的扰动项 $u_t$ 正交，即满足以下条件：
>
$$
E(x_t u_t) = 0 \quad \text{或更严谨地} \quad E(u_t | x_t, x_{t-1}, \dots, x_1) = 0
$$
> 则称该变量是 **Predetermined** 的。这意味着该变量的取值在 $u_t$ 产生之前就已经确定，或者其生成机制与当期随机冲击无关。
> 
> - **严格外生性 (Strict Exogeneity)**: 
>   要求解释变量与**所有时期**的扰动项都正交：
>
$$
E(u_t | \mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_T) = 0, \quad \forall t
$$
> - **先定性 (Predetermination)**: 
>   只要求与**当前及过去**的扰动项无关：
>
$$
E(u_t | x_t, x_{t-1}, \dots, x_1) = 0
$$
>   *注：先定变量允许 $x_{t+1}$ 与 $u_t$ 相关（例如滞后因变量 $y_{t-1}$ 作为解释变量的情况）。*
> - **Inference**: 在 OLS/GMM 推导中，先定性是保证估计量具有一致性（Consistency）的最低要求。


**Equilibrium Endogeneity Derivation**

## Solving the Reduced Form
通过联立方程组 (3.1.2) 解出内生变量 $p_i$ 和 $q_i$。将需求方程减去供给方程：
$$
(\alpha_1 - \beta_1) p_i = (\beta_0 - \alpha_0) + (v_i - u_i)
$$
由此得到 **Reduced Form** (简化式方程)：
$$\begin{aligned}
p_i &= \frac{\beta_0 - \alpha_0}{\alpha_1 - \beta_1} + \frac{v_i - u_i}{\alpha_1 - \beta_1} \quad (3.1.3a) \\
q_i &= \frac{\alpha_1 \beta_0 - \alpha_0 \beta_1}{\alpha_1 - \beta_1} + \frac{\alpha_1 v_i - \beta_1 u_i}{\alpha_1 - \beta_1} \quad (3.1.3b)
\end{aligned}$$

## Covariance Derivation
为了验证内生性，我们计算价格 $p_i$ 与需求扰动项 $u_i$ 的协方差：
$$\begin{aligned}
Cov(p_i, u_i) &= Cov\left( \frac{\beta_0 - \alpha_0}{\alpha_1 - \beta_1} + \frac{v_i - u_i}{\alpha_1 - \beta_1}, u_i \right) \\
&= \frac{1}{\alpha_1 - \beta_1} Cov(v_i - u_i, u_i) \\
&= \frac{1}{\alpha_1 - \beta_1} [Cov(v_i, u_i) - Var(u_i)] \\
&= -\frac{Var(u_i)}{\alpha_1 - \beta_1} \quad (\text{since } Cov(u_i, v_i)=0)
\end{aligned}$$
同理可得：
$$
Cov(p_i, v_i) = \frac{Var(v_i)}{\alpha_1 - \beta_1}
$$
**结论 (Covariance Summary)**:
$$
Cov(p_i, u_i) = -\frac{Var(u_i)}{\alpha_1 - \beta_1}, \quad Cov(p_i, v_i) = \frac{Var(v_i)}{\alpha_1 - \beta_1} \quad (3.1.4)
$$

## Economic Interpretation
根据标准经济学假设：**需求曲线下倾**: $\alpha_1 < 0$；**供给曲线上扬**: $\beta_1 > 0$；**分母符号**: $(\alpha_1 - \beta_1) < 0$ (恒为负)

**符号判定过程**:
-  $Cov(p_i, u_i) > 0$。需求正面冲击 ($u_i \uparrow$) 导致需求曲线右移，使均衡价格上涨。
-  $Cov(p_i, v_i) < 0$。供给正面冲击 ($v_i \uparrow$) 导致供给曲线右移，使均衡价格下跌。

## Equilibrium Mechanism for Endogeneity
"Endogeneity is a result of market equilibrium" 体现了 **同时性 (Simultaneity)** 带来的内生性：

1.  **系统决定性**: 在均衡模型中，$p_i$ 不是一个“外生给定”的变量，而是由需求方程和供给方程**共同产生**的内生结果。
2.  **误差项反馈**: 观察简化式 (3.1.3a)：
    $$
    p_i = \text{Constant} + \frac{v_i - u_i}{\alpha_1 - \beta_1}
    $$
    这清晰地显示了价格 $p_i$ 本身就是 $u_i$ 和 $v_i$ 的线性组合。
3.  **循环相关**: 
    - 需求方程中含有扰动项 $u_i$。
    - 由于价格 $p_i$ 是由均衡产生的，它不可避免地包含了 $u_i$。
    - 因此，$p_i$ 与 $u_i$ 相关（违反正交性），导致 OLS 估计失效。

> [!tip] Conclusion
> 内生性在这里不是外部因素（如测量误差）造成的，而是**经济系统内部相互作用**的必然产物。只要系统是联立决定的，单方程回归就会面临内生性偏差。


**OLS Endogeneity Bias**

## OLS Probability Limit
对 $q_i = \alpha_0 + \alpha_1 p_i + u_i$ 进行单变量 OLS 回归，系数 $\hat{\alpha}_1$ 的渐近极限推导如下：
$$\begin{aligned}
\hat{\alpha}_1 &= \frac{\sum_{i=1}^n (p_i - \bar{p})(q_i - \bar{q})}{\sum_{i=1}^n (p_i - \bar{p})^2} \\
&= \frac{\frac{1}{n} \sum_{i=1}^n (p_i - \bar{p})q_i}{\frac{1}{n} \sum_{i=1}^n (p_i - \bar{p})^2} \\
\xrightarrow{p} \text{plim } \hat{\alpha}_1 &= \frac{E[(p_i - E[p_i])q_i]}{E[(p_i - E[p_i])^2]} \\
&= \frac{Cov(p_i, q_i)}{Var(p_i)} \quad (3.1.5)
\end{aligned}$$
*注：这里利用了 LLN (大数定律)，将样本矩收敛至总体矩。*

## Asymptotic Bias Derivation
利用结构方程 $q_i = \alpha_0 + \alpha_1 p_i + u_i$，我们将 $\text{plim } \hat{\alpha}_1$ 展开并提取偏差项：
$$\begin{aligned}
\text{plim } \hat{\alpha}_1 &= \frac{Cov(p_i, q_i)}{Var(p_i)} \\
&= \frac{Cov(p_i, \alpha_0 + \alpha_1 p_i + u_i)}{Var(p_i)} \\
&= \frac{Cov(p_i, \alpha_0) + Cov(p_i, \alpha_1 p_i) + Cov(p_i, u_i)}{Var(p_i)} \\
&= \frac{0 + \alpha_1 Var(p_i) + Cov(p_i, u_i)}{Var(p_i)} \\
&= \alpha_1 + \frac{Cov(p_i, u_i)}{Var(p_i)}
\end{aligned}$$
**整理得到偏差表达式**:
$$
\text{plim } \hat{\alpha}_1 - \alpha_1 = \frac{Cov(p_i, u_i)}{Var(p_i)} \quad (3.1.7)
$$
*注：同理可推导供给方程的偏差为
$$
\text{plim } \hat{\beta}_1 - \beta_1 =\frac{Cov(p_i, v_i)}{Var(p_i)}\quad (3.1.8)
$$

## OLS Bias Implications
- **非一致性**: 由于 $Cov(p_i, u_i) \neq 0$ 且 $Cov(p_i, v_i) \neq 0$，OLS 对 $\alpha_1$ 和 $\beta_1$ 的估计均不一致。
- 这种现象被称为 **Endogeneity Bias (内生性偏差)**，也常被称为：
  - **Simultaneous Equations Bias (联立方程偏差)**
  - **Simultaneity Bias (同时性偏差)**
  - 核心原因：解释变量与扰动项通过联立系统产生了循环相关。

## Extreme Cases and Identification

:::{admonition} Figure 3.1 (Supply and Demand Curve).
This figure is not available in the source bundle. The surrounding text explains the same identification logic:
supply shifters move the supply curve along a fixed demand curve, and demand shifters move the demand curve along a fixed supply curve.

:::

观察偏差公式 $\text{plim } \hat{\alpha}_1 - \alpha_1 = \frac{Cov(p_i, u_i)}{Var(p_i)}$，可以发现特定条件下的特殊结论：

#### 情况 A：无需求冲击 (No Demand Shifter)
- **条件**: $u_i = 0$ (需求曲线固定)。
- **结果**: $Cov(p_i, u_i) = 0 \implies$ OLS 对 $\alpha_1$ 一致。
- **视觉直觉 (Figure 3.1a)**: 供给冲击 $v_i$ 驱动供给曲线在一条**固定的**需求曲线上上下移动。观测到的所有均衡点 $(p, q)$ 轨迹精确勾勒出需求曲线的形状。

#### 情况 B：无供给冲击 (No Supply Shifter)
- **条件**: $v_i = 0$ (供给曲线固定)。
- **结果**: $Cov(p_i, v_i) = 0 \implies$ OLS 对 $\beta_1$ 一致。
- **视觉直觉 (Figure 3.1b)**: 需求冲击 $u_i$ 驱动需求曲线在一条**固定的**供给曲线上移动。此时观测点的轨迹识别的是供给曲线。

> [!tip] Identification Strategy (识别策略)
> 要识别一个方程（如需求方程），该方程本身必须是**相对稳定**的，而系统中的其他部分（如供给侧）必须发生**移动**。
> - **Shifter**: 这种“移动”在计量中对应的就是 **Instrumental Variables (IV)**。
> - **内生性本质**: 当供需双方同时都在乱动（$u_i, v_i \neq 0$）时，观测点的轨迹既不是需求也不是供给，导致 OLS 估计失效。

**OLS Bias as a Weighted Average**

当需求和供给曲线同时发生位移时（即 $u_i, v_i \neq 0$），OLS 估计量 $\hat{\alpha}_1$ 的 plim 实际上是需求斜率 $\alpha_1$ 和供给斜率 $\beta_1$ 的**加权平均**。

## Moment Decomposition for Weighted Bias
利用简化式 (Reduced Form) 结果：
- $p_i = \text{Const} + \frac{v_i - u_i}{\alpha_1 - \beta_1}$
- $q_i = \text{Const} + \frac{\alpha_1 v_i - \beta_1 u_i}{\alpha_1 - \beta_1}$

**1. 计算 $Var(p_i)$**:
$$\begin{aligned}
Var(p_i) &= Var\left( \frac{v_i - u_i}{\alpha_1 - \beta_1} \right) \\
&= \frac{1}{(\alpha_1 - \beta_1)^2} [Var(v_i) + Var(u_i)] \quad (\because Cov(u_i, v_i)=0)
\end{aligned}$$

**2. 计算 $Cov(p_i, q_i)$**:
$$\begin{aligned}
Cov(p_i, q_i) &= Cov\left( \frac{v_i - u_i}{\alpha_1 - \beta_1}, \frac{\alpha_1 v_i - \beta_1 u_i}{\alpha_1 - \beta_1} \right) \\
&= \frac{1}{(\alpha_1 - \beta_1)^2} Cov(v_i - u_i, \alpha_1 v_i - \beta_1 u_i) \\
&= \frac{1}{(\alpha_1 - \beta_1)^2} [\alpha_1 Var(v_i) + \beta_1 Var(u_i)] \quad (\because \text{cross terms are zero})
\end{aligned}$$

## Weighted-Average Bias Proof
将上述结果代入 OLS 估计量的极限公式 $\text{plim } \hat{\alpha}_1 = \frac{Cov(p_i, q_i)}{Var(p_i)}$：
$$\begin{aligned}
\text{plim } \hat{\alpha}_1 &= \frac{\frac{1}{(\alpha_1 - \beta_1)^2} [\alpha_1 Var(v_i) + \beta_1 Var(u_i)]}{\frac{1}{(\alpha_1 - \beta_1)^2} [Var(v_i) + Var(u_i)]} \\
&= \frac{\alpha_1 Var(v_i) + \beta_1 Var(u_i)}{Var(v_i) + Var(u_i)} \quad (3.1.9)
\end{aligned}$$

## Weighted-Average Bias Implications
- **权重意义**: OLS 估计量是 $\alpha_1$ 和 $\beta_1$ 的加权平均，权重取决于供给和需求冲击的相对方差。
- **极端情况验证**:
  - 若 $Var(u_i) = 0$（无需求冲击），则 $\text{plim } \hat{\alpha}_1 = \alpha_1$。
  - 若 $Var(v_i) = 0$（无供给冲击），则 $\text{plim } \hat{\alpha}_1 = \beta_1$（注意：此时你虽然售跑需求方程，但实际上识别出的是供给斜率！）。
**Observable Shifters and IV Intuition**

如果数据中无法区分价格变动是由需求引起还是由供给引起，识别就会失败。

> [!error] 什么是识别失败 (Identification Failure)?
> 在计量经济学中，**识别 (Identification)** 是指能否从观测到的数据分布中唯一地推断出结构参数。
> - **观测等价 (Observational Equivalence)**: 如果多组不同的参数设置（例如不同的需求斜率 $\alpha_1$）都能产生完全相同的 $(p, q)$ 数据轨迹，则称这些参数是不可识别的。
> - **混合偏差 (Mixture Bias)**: 如 Section 5 所述，此时 OLS 得到的是 $\alpha_1$ 和 $\beta_1$ 的加权平均。这意味着你无法从数据中“提纯”出真正的需求弹性 $\alpha_1$。
> - **后果**: 你无法进行政策评估（例如：如果人为调整价格 $p$，需求量 $q$ 会变动多少？由于识别失败，你手里的参数无法回答这个结构性问题）。

## Supply-Side Shock Decomposition
假设供给冲击 $v_i$ 可以被分解为：一个**可观测因子** $x_i$ 和一个**不可观测因子** $\zeta_i$。
新的供给方程变为：
$$
q_i = \beta_0 + \beta_1 p_i + \beta_2 x_i + \zeta_i, \quad \beta_2 \neq 0 \quad (3.1.2b')
$$

## Coffee-Market Shifter Example
- **$x_i$ (Observable)**: 咖啡产区的温度 (Temperature)。它会影响咖啡供给，但与消费者的偏好（需求端的 $u_i$）无关。
- **$u_i$ (Unobservable)**: 消费者的口味偏好。

## IV Identification Logic
> [!important] The Birth of Instrumental Variables
> 此时，$x_i$ 满足以下两个核心条件：
> 1.  **Relevance (相关性)**: $\beta_2 \neq 0$，即温度确实能“移动”供给曲线，从而带动价格 $p_i$ 变动。
> 2.  **Exogeneity (外生性)**: $Cov(x_i, u_i) = 0$，即温度与需求侧的扰动项无关。
> 
:::{admonition} 结果
: 我们通过观察 $x_i$ 引起的供给侧“晃动”，能够看清 $p_i$ 变动时 $q_i$ 沿着固定需求曲线的移动，从而一致地估出需求参数 $\alpha_0, \alpha_1$。

:::

## IV Identification Derivation

首先明确联立方程组的结构：
- **需求方程 (Demand)**: $q_i = \alpha_0 + \alpha_1 p_i + u_i \quad (3.1.2a)$
- **带 IV 的供给方程 (Supply w/ IV)**: $q_i = \beta_0 + \beta_1 p_i + \beta_2 x_i + \zeta_i, \quad \beta_2 \neq 0 \quad (3.1.2b')$

通过联立上述两式，解出内生变量 $p_i$ 和 $q_i$ 的简化式：

$$\begin{aligned}
p_i &= \frac{\beta_0 - \alpha_0}{\alpha_1 - \beta_1} + \frac{\beta_2}{\alpha_1 - \beta_1} x_i + \frac{\zeta_i - u_i}{\alpha_1 - \beta_1} \quad (3.1.10a) \\
q_i &= \frac{\alpha_1 \beta_0 - \alpha_0 \beta_1}{\alpha_1 - \beta_1} + \frac{\alpha_1 \beta_2}{\alpha_1 - \beta_1} x_i + \frac{\alpha_1 \zeta_i - \beta_1 u_i}{\alpha_1 - \beta_1} \quad (3.1.10b)
\end{aligned}$$

**1. 验证相关性 (Relevance)**:
利用简化式 (3.1.10a) 计算 $x_i$ 与内生变量 $p_i$ 的协方差：
$$\begin{aligned}
Cov(x_i, p_i) &= Cov\left( x_i, \frac{\beta_0 - \alpha_0}{\alpha_1 - \beta_1} + \frac{\beta_2}{\alpha_1 - \beta_1} x_i + \frac{\zeta_i - u_i}{\alpha_1 - \beta_1} \right) \\
&= Cov\left( x_i, \text{Const} \right) + Cov\left( x_i, \frac{\beta_2}{\alpha_1 - \beta_1} x_i \right) + Cov\left( x_i, \frac{\zeta_i - u_i}{\alpha_1 - \beta_1} \right) \\
&= 0 + \frac{\beta_2}{\alpha_1 - \beta_1} Var(x_i) + 0 \quad (\because \text{Exogeneity of } x_i) \\
&= \frac{\beta_2}{\alpha_1 - \beta_1} Var(x_i) \neq 0
\end{aligned}$$
*注：只要 $\beta_2 \neq 0$（工具变量确实影响供给侧），相关性条件就成立。*

**2. 验证识别过程**:
从需求方程 $q_i = \alpha_0 + \alpha_1 p_i + u_i$ 出发，计算与 $x_i$ 的协方差：
$$\begin{aligned}
Cov(x_i, q_i) &= Cov(x_i, \alpha_0 + \alpha_1 p_i + u_i) \\
&= \alpha_1 Cov(x_i, p_i) + Cov(x_i, u_i) \\
&= \alpha_1 Cov(x_i, p_i) \quad (\because Cov(x_i, u_i) = 0 \text{ by exogeneity})
\end{aligned}$$

**3. 恢复结构参数**:
由此我们可以通过**总体矩 (Population Moments)** 直接定义 $\alpha_1$：
$$
\alpha_1 = \frac{Cov(x_i, q_i)}{Cov(x_i, p_i)} \quad (3.1.11)
$$

> [!success] 识别成功
> 不同于 OLS 的混合偏差，通过工具变量 $x_i$，我们成功将需求参数 $\alpha_1$ 从复杂的联立系统中“提取”了出来。这就是 IV 估计量的本质：$\hat{\alpha}_{1, IV} = \frac{\widehat{Cov}(x, q)}{\widehat{Cov}(x, p)}$。

**Instrumental Variables Estimator**

基于 Section 6.4 的总体矩识别结果，我们可以利用**类比原则 (Analogy Principle)** 构造出样本估计量。

## IV Estimator Definition
对于需求参数 $\alpha_1$，一个自然的估计量是：
$$
\hat{\alpha}_{1,IV} = \frac{\text{sample covariance between } x_i \text{ and } q_i}{\text{sample covariance between } x_i \text{ and } p_i} \quad (3.1.12)
$$

## Analogy-Principle IV Derivation

**1. 总体矩条件的来源 (Source of Moment Condition)**:
从结构需求方程 $q_i = \alpha_0 + \alpha_1 p_i + u_i$ 出发，移项得到扰动项：
$$
u_i = q_i - \alpha_0 - \alpha_1 p_i
$$
根据工具变量 $x_i$ 的**外生性 (Exogeneity)** 假设：
$$
Cov(x_i, u_i) = 0 \implies E[(x_i - E[x_i]) u_i] = 0
$$
代入 $u_i$ 的表达式，得到**总体矩条件 (Population Moment Condition)**：
$$
E[(x_i - E[x_i])(q_i - \alpha_0 - \alpha_1 p_i)] = 0
$$

**2. 样本矩条件 (Sample Moment Condition)**:
利用类比原则，将总体期望替换为样本均值：
$$\begin{aligned}
\frac{1}{n} \sum_{i=1}^n (x_i - \bar{x})(q_i - \hat{\alpha}_0 - \hat{\alpha}_1 p_i) &= 0 \\
\frac{1}{n} \sum (x_i - \bar{x})q_i - \hat{\alpha}_1 \frac{1}{n} \sum (x_i - \bar{x})p_i &= 0 \quad (\text{assuming } \bar{u}=0) \\
\hat{\alpha}_{1,IV} &= \frac{\sum (x_i - \bar{x})q_i}{\sum (x_i - \bar{x})p_i}
\end{aligned}$$

## IV and OLS Comparison

:::{admonition} Definition (Comparison: IV vs. OLS)
| 估计量 | 公式 (Sample Moments) | 核心假设 |
| :--- | :--- | :--- |
| **OLS** | $\hat{\alpha}_{1,OLS} = \frac{\sum (p_i - \bar{p})(q_i - \bar{q})}{\sum (p_i - \bar{p})^2}$ | $p_i$ 与 $u_i$ 正交 (Orthogonality) |
| **IV** | $\hat{\alpha}_{1,IV} = \frac{\sum (x_i - \bar{x})(q_i - \bar{q})}{\sum (x_i - \bar{x})(p_i - \bar{p})}$ | $x_i$ 与 $u_i$ 正交 + $x_i$ 与 $p_i$ 相关 |

**直观差别**: OLS 利用变量自身的变动进行投影，而 IV 仅利用被工具变量 $x_i$ 解释的那部分“外生变动”进行投影。

:::

**Two-Stage Least Squares (2SLS)**

:::{admonition} Definition (Two-Stage Least Squares (2SLS/TSLS))
2SLS 是处理内生性最常用的估计方法。其核心思想是：先利用外生工具变量将内生解释变量中的“外生变动”提取出来，再用这部分干净的变动进行回归。

**估计步骤 (Procedure)**:
1.  **第一阶段 (First Stage)**: 将内生变量 $p_i$ 对常数和工具变量 $x_i$ 进行回归，获得拟合值 $\hat{p}_i$：
$$
\hat{p}_i = \hat{\gamma}_0 + \hat{\gamma}_1 x_i
$$
2.  **第二阶段 (Second Stage)**: 将因变量 $q_i$ 对常数和第一阶段得到的拟合值 $\hat{p}_i$ 进行回归：
$$
q_i = \alpha_0 + \alpha_1 \hat{p}_i + \text{error}
$$
得到的 $\hat{\alpha}_{1, 2SLS}$ 即为 2SLS 估计量。

:::

## 2SLS Consistency Proof
我们要证明在第二阶段回归 $q_i = \alpha_0 + \alpha_1 \hat{p}_i + \text{error}^*$ 中，解释变量 $\hat{p}_i$ 与复合误差项 $\text{error}^*$ 是渐近正交的。

**1. 复合误差项定义**:
根据式 (3.1.14)，复合误差项为：
$$
\text{error}^*_i = u_i + \alpha_1 (p_i - \hat{p}_i)
$$
其中 $(p_i - \hat{p}_i)$ 是第一阶段回归的残差。

**2. 核心证明逻辑**:
我们需要验证 $Cov(\hat{p}_i, \text{error}^*_i) = 0$：
$$\begin{aligned}
Cov(\hat{p}_i, \text{error}^*_i) &= Cov(\hat{p}_i, u_i + \alpha_1(p_i - \hat{p}_i)) \\
&= Cov(\hat{p}_i, u_i) + \alpha_1 Cov(\hat{p}_i, p_i - \hat{p}_i)
\end{aligned}$$

- **第一项 $Cov(\hat{p}_i, u_i)$**:
  由于 $\hat{p}_i = \hat{\gamma}_0 + \hat{\gamma}_1 x_i$，且根据外生性假设 $Cov(x_i, u_i) = 0$，可知：
  $$
  Cov(\hat{p}_i, u_i) = \hat{\gamma}_1 Cov(x_i, u_i) = 0
  $$

- **第二项 $Cov(\hat{p}_i, p_i - \hat{p}_i)$**:
  根据 OLS 的正交投影性质（Orthogonal Projection），拟合值 $\hat{p}_i$ 与其残差 $(p_i - \hat{p}_i)$ 在样本和总体中均正交：
  $$
  Cov(\hat{p}_i, p_i - \hat{p}_i) = 0
  $$

**3. 结论 (Step-by-step Consistency)**:
根据 OLS 估计量的样本矩表达式：
$$\begin{aligned}
\hat{\alpha}_{1, 2SLS} &= \frac{\frac{1}{n} \sum (\hat{p}_i - \bar{\hat{p}})(q_i - \bar{q})}{\frac{1}{n} \sum (\hat{p}_i - \bar{\hat{p}})^2} \\
&= \frac{\frac{1}{n} \sum (\hat{p}_i - \bar{\hat{p}})(\alpha_0 + \alpha_1 \hat{p}_i + \text{error}^*_i - \bar{q})}{\frac{1}{n} \sum (\hat{p}_i - \bar{\hat{p}})^2} \\
&= \alpha_1 + \frac{\frac{1}{n} \sum (\hat{p}_i - \bar{\hat{p}})\text{error}^*_i}{\frac{1}{n} \sum (\hat{p}_i - \bar{\hat{p}})^2}
\end{aligned}$$

根据 **大数定律 (LLN)** 和 **Slutsky 定理**:
1. 分子项: $\frac{1}{n} \sum (\hat{p}_i - \bar{\hat{p}})\text{error}^*_i \xrightarrow{p} Cov(\hat{p}_i, \text{error}^*_i)$
2. 分母项: $\frac{1}{n} \sum (\hat{p}_i - \bar{\hat{p}})^2 \xrightarrow{p} Var(\hat{p}_i)$

结合步骤 2 中的证明 $Cov(\hat{p}_i, \text{error}^*_i) = 0$，我们得到：
$$
\hat{\alpha}_{1, 2SLS} \xrightarrow{p} \alpha_1 + \frac{0}{Var(\hat{p}_i)} = \alpha_1
$$
因此，2SLS 估计量是一致的。


## 2SLS Numerical Equivalence Proof

> [!info] Just-Identified Case: $\hat{\alpha_{2SLS}}=\hat{\alpha_{IV}}$
> 在本例中（1个内生变量 $p_i$，1个工具变量 $x_i$），IV 估计量和 2SLS 估计量在数值上完全等价。

**1. 原始形式 (Original Sample Formulas)**:
- **IV 估计量**:
  $$
  \hat{\alpha}_{1, IV} = \frac{\sum (x_i - \bar{x})(q_i - \bar{q})}{\sum (x_i - \bar{x})(p_i - \bar{p})}
  $$
- **2SLS 估计量** (第二阶段回归系数):
  $$
  \hat{\alpha}_{1, 2SLS} = \frac{\sum (\hat{p}_i - \bar{\hat{p}})(q_i - \bar{q})}{\sum (\hat{p}_i - \bar{\hat{p}})^2}
  $$

**2. 核心换算步骤 (Step-by-step Transformation)**:
利用第一阶段回归 $\hat{p}_i = \hat{\gamma}_0 + \hat{\gamma}_1 x_i$，其拟合值的离差形式为：
$$
\hat{p}_i - \bar{\hat{p}} = \hat{\gamma}_1 (x_i - \bar{x})
$$
其中第一阶段的 OLS 系数为：
$$
\hat{\gamma}_1 = \frac{\sum (x_i - \bar{x})(p_i - \bar{p})}{\sum (x_i - \bar{x})^2}
$$

将 $\hat{p}_i - \bar{\hat{p}}$ 代入 2SLS 公式中：
$$\begin{aligned}
\hat{\alpha}_{1, 2SLS} &= \frac{\sum \left[ \hat{\gamma}_1 (x_i - \bar{x}) \right] (q_i - \bar{q})}{\sum \left[ \hat{\gamma}_1 (x_i - \bar{x}) \right]^2} \\
&= \frac{\hat{\gamma}_1 \sum (x_i - \bar{x})(q_i - \bar{q})}{\hat{\gamma}_1^2 \sum (x_i - \bar{x})^2} \\
&= \frac{1}{\hat{\gamma}_1} \cdot \frac{\sum (x_i - \bar{x})(q_i - \bar{q})}{\sum (x_i - \bar{x})^2}
\end{aligned}$$

**3. 代入 $\hat{\gamma}_1$ 得到最终结论**:
$$\begin{aligned}
\hat{\alpha}_{1, 2SLS} &= \left[ \frac{\sum (x_i - \bar{x})^2}{\sum (x_i - \bar{x})(p_i - \bar{p})} \right] \cdot \frac{\sum (x_i - \bar{x})(q_i - \bar{q})}{\sum (x_i - \bar{x})^2} \\
&= \frac{\sum (x_i - \bar{x})(q_i - \bar{q})}{\sum (x_i - \bar{x})(p_i - \bar{p})} \\
&= \hat{\alpha}_{1, IV}
\end{aligned}$$
**结论**: 在恰好识别（Just-Identified）的情况下，$2SLS$ 估计量退化为简单的 $IV$ 估计量。

**Endogeneity Examples**

**Haavelmo Macroeconomic Equilibrium**

这是一个经典的宏观计量模型，展示了国民收入核算体系中的同时性偏误。

## Haavelmo Structural Equations
- **消费函数 (Consumption Function)**: 
  $C_i = \alpha_0 + \alpha_1 Y_i + u_i, \quad 0 < \alpha_1 < 1$
  其中 $\alpha_1$ 是边际消费倾向 (MPC)。
- **GNP 恒等式 (GNP Identity)**: 
  $Y_i = C_i + I_i$
  其中 $C_i$ 是总消费，$Y_i$ 是国民收入 (GNP)，$I_i$ 是总投资。

## Haavelmo Reduced Form
将消费函数代入 GNP 恒等式：
$$\begin{aligned}
Y_i &= (\alpha_0 + \alpha_1 Y_i + u_i) + I_i \\
(1 - \alpha_1) Y_i &= \alpha_0 + I_i + u_i \\
Y_i &= \frac{\alpha_0}{1 - \alpha_1} + \frac{I_i}{1 - \alpha_1} + \frac{u_i}{1 - \alpha_1} \quad (3.2.1)
\end{aligned}$$

## Haavelmo Endogeneity Analysis
假设投资 $I_i$ 是**先定变量 (Predetermined)**，即 $Cov(I_i, u_i) = 0$。

**1. 验证 $Y_i$ 的内生性**:
计算国民收入 $Y_i$ 与消费扰动项 $u_i$ 的协方差：
$$\begin{aligned}
Cov(Y_i, u_i) &= Cov\left( \frac{\alpha_0 + I_i + u_i}{1 - \alpha_1}, u_i \right) \\
&= \frac{1}{1 - \alpha_1} [Cov(I_i, u_i) + Var(u_i)] \\
&= \frac{Var(u_i)}{1 - \alpha_1} > 0 \quad (\because 0 < \alpha_1 < 1)
\end{aligned}$$
**结论**: $Y_i$ 与 $u_i$ 正相关。在消费函数回归中，$Y_i$ 是内生解释变量，OLS 估计将产生正向偏差。

**2. 验证 $I_i$ 作为工具变量的潜力**:
- **Exogeneity**: 假设已给出 $Cov(I_i, u_i) = 0$。
- **Relevance**: 
  $$
  Cov(I_i, Y_i) = \frac{Var(I_i)}{1 - \alpha_1} > 0
  $$
  由于投资变动会引起国民收入的变动，满足相关性条件。

> [!important] Conclusion
> 在该模型中，由于 $Y_i$ 包含当期消费冲击 $u_i$，直接对消费函数进行 OLS 回归是不一致的。投资 $I_i$ 可以作为识别 MPC ($\alpha_1$) 的工具变量。



**Errors-in-Variables Bias**

Friedman (1957) 的**持久收入假说 (Permanent Income Hypothesis)** 是测量误差导致内生性的典型案例。

## Latent True-Regressor Model
理论上，持久消费 $C_i^*$ 与持久收入 $Y_i^*$ 成正比：
$$
C_i^* = k Y_i^*, \quad 0 < k < 1 \quad (3.2.3)
$$

## Measurement-Error Specification
现实中我们只能观测到带有误差的指标：
- **观测消费**: $C_i = C_i^* + c_i \quad (3.2.4a)$
- **观测收入**: $Y_i = Y_i^* + y_i \quad (3.2.4b)$

> [!important] 经典测量误差假设 (Classical Measurement Error, CME)
> 在 CME 模型中，我们假设测量误差 $c_i, y_i$ 满足以下性质：
> 1. **独立性（核心假设）**: $Cov(y_i, Y_i^*) = 0$ 且 $Cov(c_i, C_i^*) = 0$。
>    - **为什么假设无关？**: 这是定义“随机噪音”的基石。如果误差 $y_i$ 与真实值 $Y_i^*$ 相关，说明测量偏差具有系统性规律（例如：收入越高的人越倾向于低报收入），此时误差就变成了“内生变量”的一部分，而非纯粹的噪音。
>    - **识别意义**: 如果不假设无关，观测到的相关性将混杂因果关系与误差规律，导致模型无法识别。
> 2. **互不相关**: $Cov(c_i, y_i) = 0$，即不同变量的录入/统计错误是独立的。
> 3. **均值齐性**: $E(c_i) = 0, E(y_i) = 0$。

## Composite Regression Equation
将观测值代入理论模型：
$$\begin{aligned}
C_i - c_i &= k(Y_i - y_i) \\
C_i &= k Y_i + (c_i - k y_i) \\
C_i &= k Y_i + u_i, \quad \text{where } u_i \equiv c_i - k y_i \quad (3.2.7)
\end{aligned}$$

## Measurement-Error Endogeneity Proof
验证观测收入 $Y_i$ 与复合误差项 $u_i$ 的相关性。基于 CME 假设，所有涉及真实值与误差项的交叉项均为零：

$$\begin{aligned}
Cov(Y_i, u_i) &= Cov(Y_i^* + y_i, c_i - k y_i) \\
&= \underbrace{Cov(Y_i^*, c_i)}_{0} - k \underbrace{Cov(Y_i^*, y_i)}_{0} + \underbrace{Cov(y_i, c_i)}_{0} - k \underbrace{Cov(y_i, y_i)}_{Var(y_i)} \\
&= -k Var(y_i) < 0
\end{aligned}$$

> [!danger] Attenuation Bias (衰减偏差)
> 1. **方向**: 由于 $Cov(Y_i, u_i) < 0$，OLS 估计量 $\hat{k}$ 会产生向下的偏差。
> 2. **量化 (Reliability Ratio)**: 
>    根据 OLS 极限公式：
>
$$
\text{plim } \hat{k} = k + \frac{Cov(Y_i, u_i)}{Var(Y_i)} = k - k \frac{Var(y_i)}{Var(Y_i)} = k \cdot \underbrace{\frac{Var(Y_i^*)}{Var(Y_i^*) + Var(y_i)}}_{\lambda}
$$
>    这里 $\lambda = \frac{Var(Y_i^*)}{Var(Y_i)}$ 被称为 **可靠性比例 (Reliability Ratio)** 或 **信噪比**：
>    - 由于 $\lambda < 1$，OLS 估计量 $\hat{k}$ 总是被“稀释”并向 0 靠拢。
>    - 误差 $Var(y_i)$ 越大，$\lambda$ 越小，估计量的衰减就越严重。

> [!tip] Identification
> 要解决此问题，需要寻找一个与真实收入 $Y_i^*$ 相关但与测量误差 $y_i$ 无关的工具变量 $Z_i$。此时 $Cov(Z_i, u_i) = 0$，IV 估计是一致的。

**Production Function Transmission Bias**

这是一个展示“由于厂商决策”导致内生性的经典案例。

## Production Structural Equation
考虑横截面样本中厂商的 Cobb-Douglas 生产函数：
$$
Q_i = A_i \cdot L_i^{\phi_1} \cdot \exp(v_i), \quad 0 < \phi_1 < 1 \quad (3.2.11)
$$
其中：
- $Q_i$: 产出；$L_i$: 劳动投入。
- $A_i$: **厂商效率 (Efficiency)**。厂商在决策前已知，但计量经济学家不可观测。
- $v_i$: **技术冲击 (Shock)**。厂商在选择 $L_i$ 时也无法预知（随机噪声）。
- 假设 $E[\exp(v_i)] = B$。

## Firm Optimization Decision
在完全竞争市场中，厂商选择 $L_i$ 以最大化**期望利润**：
$$
\max_{L_i} \Pi = p \cdot E[Q_i] - w \cdot L_i = p \cdot A_i L_i^{\phi_1} B - w \cdot L_i
$$
一阶条件 (FOC)：
$$
p \cdot A_i B \phi_1 L_i^{\phi_1-1} = w
$$
解得最优劳动投入：
$$
L_i = \left( \frac{w}{p} \right)^{\frac{1}{\phi_1-1}} (A_i B \phi_1)^{\frac{1}{1-\phi_1}} \quad (3.2.12)
$$

## Transmission Bias Derivation
对生产函数 (3.2.11) 取对数：
$$
\log Q_i = \log A_i + \phi_1 \log L_i + v_i
$$
定义 $u_i = \log A_i - E[\log A_i]$ 为效率的偏差项，则：
$$
\log Q_i = \text{Const} + \phi_1 \log L_i + (u_i + v_i)
$$
此时，扰动项为 $\epsilon_i = u_i + v_i$。

**验证 $\log L_i$ 的内生性**:
由式 (3.2.12) 取对数：
$$
\log L_i = \frac{1}{\phi_1 - 1} \log \frac{w}{p} + \frac{1}{1 - \phi_1} \log A_i + \frac{1}{1 - \phi_1} \log(B \phi_1)
$$
可以清晰看到：
- $\log L_i$ 是 $\log A_i$ 的函数。
- 由于 $u_i$ 包含了 $\log A_i$ 的信息，因此 $Cov(\log L_i, u_i) \neq 0$。

> [!important] Transmission Bias (传输偏误)
> 1. **机制**: 厂商观察到自己的效率 $A_i$ 较高时，会更有动力增加投入 $L_i$。这种从“不可观测效率”到“可观测投入”的反馈过程被称为 **Transmission**。
> 2. **结果**: $\log L_i$ 与扰动项中的 $u_i$ 正相关 ($Cov > 0$)。
> 3. **偏差方向**: OLS 对产出弹性 $\phi_1$ 的估计将产生**正向偏差**（高估劳动力的贡献，因为一部分产出增加其实是由不可观测的高效率 $A_i$ 贡献的）。
> 4. **本质**: 这也是一种特殊的**遗漏变量偏差 (Omitted Variable Bias)**。

**General IV-GMM Formulation**

**Regressors, Instruments, and Exogeneity Classes**

为了建立通用的 GMM 估计框架，我们首先定义模型结构和变量属性。

:::{admonition} Definition (Assumption 3.1 (Linearity))
The equation to be estimated is linear:
$$
y_i = \mathbf{z}_i' \boldsymbol{\delta} + \varepsilon_i \quad (i = 1, 2, \dots, n), \quad (3.3.1)
$$
where $\mathbf{z}_i$ is an $L$-dimensional vector of regressors, $\boldsymbol{\delta}$ is an $L$-dimensional coefficient vector, and $\varepsilon_i$ is an unobservable error term.

:::

## Linearity and Parameter Interpretation
1. **模型结构**: 这是单方程线性模型。不同于 OLS，解释变量 $\mathbf{z}_i$ 可以包含内生变量（即 $E[\mathbf{z}_i \varepsilon_i] \neq \mathbf{0}$）。
2. **参数向量**: $\boldsymbol{\delta}$ 是我们想要一致估计的结构参数，其维数为 $L$。这意味着我们需要至少 $L$ 个不相关的矩条件来识别这些参数。

:::{admonition} Definition (Assumption 3.2 (Ergodic Stationarity))
Let $\mathbf{x}_i$ be a $K$-dimensional vector to be referred to as the vector of instruments, and let $\mathbf{w}_i$ be the unique and nonconstant elements of $(y_i, \mathbf{z}_i, \mathbf{x}_i)$. $\{\mathbf{w}_i\}$ is jointly stationary and ergodic.

:::

## Stationarity, Ergodicity, and Instrument Count
1. **平稳性 (Stationarity)**: 
   - 意味着随机过程的联合分布不随时间/序号 $i$ 改变。
   - **数学表现**: 总体矩（如 $E[\mathbf{x}_i \varepsilon_i]$ 或 $E[\mathbf{x}_i \mathbf{z}_i']$）在所有观测值 $i$ 上都是常数。这保证了我们可以用全样本均值来估计同一个总体参数。
2. **遍历性 (Ergodicity)**: 
   - 遍历性允许我们用**样本均值**替代**总体期望**。
   - **数学基础**: 只要随机过程是平稳且遍历的，**遍历定理 (Ergodic Theorem)** 就成立：
     $$
     \frac{1}{n} \sum_{i=1}^n f(\mathbf{w}_i) \xrightarrow{p} E[f(\mathbf{w}_i)]
     $$
   - 这在横截面数据（i.i.d. 假设）和弱相关的时间序列中通常能得到满足。
3. **工具变量维数**: $\mathbf{x}_i$ 的维数为 $K$。
   - 如果 $K = L$: **恰好识别 (Just-identified)**。
   - 如果 $K > L$: **过度识别 (Over-identified)**，这是 GMM 发挥威力的典型场景。
   - 如果 $K < L$: **识别不足 (Under-identified)**，无法估计所有参数。

:::{admonition} Definition (Assumption 3.3 (Orthogonality Conditions))
All the $K$ variables in $\mathbf{x}_i$ are **predetermined** in the sense that they are all orthogonal to the current error term: $E(x_{ik} \varepsilon_i) = 0$ for all $i$ and $k$ ($k = 1, 2, \dots, K$).
This can be written as:
$$
E[\mathbf{x}_i \cdot (y_i - \mathbf{z}_i' \boldsymbol{\delta})] = \mathbf{0} \quad \text{or} \quad E(\mathbf{g}_i) = \mathbf{0},
$$
where $\mathbf{g}_i \equiv \mathbf{x}_i \cdot \varepsilon_i$.

:::

## Orthogonality Moment Interpretation
1. **矩条件 (Moment Conditions)**: 这是 GMM 估计的灵魂。$E(\mathbf{g}_i) = \mathbf{0}$ 代表了 $K$ 个总体矩条件。GMM 的核心逻辑就是寻找一个参数向量 $\hat{\boldsymbol{\delta}}$，使得这 $K$ 个矩条件的样本对应物尽可能接近于 0。
2. **先定性 (Predetermination)**: 这里的先定性是指工具变量与**当期**扰动项不相关。这涵盖了严格外生变量，也允许包含滞后因变量（在特定条件下）。
## Regressor Classification and Self-Instrumenting

为了理解为什么有些变量可以“作为自身的工具变量”，我们将解释变量向量 $\mathbf{z}_i$ 拆分为两部分：

$$
\mathbf{z}_i = \begin{pmatrix} \mathbf{z}_{i, exo} \\ \mathbf{z}_{i, endo} \end{pmatrix}
$$

其中：
- $\mathbf{z}_{i, exo}$ 是 $L_1$ 维的**外生/先定**解释变量。
- $\mathbf{z}_{i, endo}$ 是 $L_2$ 维的**内生**解释变量（且 $L_1 + L_2 = L$）。

**1. 数学推导：为什么 $\mathbf{z}_{i, exo}$ 也是其自身的工具变量？**
根据 **Assumption 3.3 (Orthogonality)**，所有工具变量 $\mathbf{x}_i$ 必须满足：
$$
E[\mathbf{x}_i \varepsilon_i] = \mathbf{0}
$$

对于 $\mathbf{z}_{i, exo}$ 中的任意一个元素 $z_{il}$，由于其定义为“先定”的，它**天生满足**正交性条件：
$$
E[z_{il} \varepsilon_i] = 0
$$
这意味着 $z_{il}$ 已经具备了作为一个“工具变量”的全部核心资格：
1. **外生性**: $E[z_{il} \varepsilon_i] = 0$。
2. **相关性**: $z_{il}$ 与它自己（作为解释变量）的协方差 $Var(z_{il}) \neq 0$ 是必然满足的（强相关）。

因此，在构建工具变量向量 $\mathbf{x}_i$ 时，我们**必须**把这些“清白”的解释变量包含进去：
$$
\mathbf{x}_i = \begin{pmatrix} \mathbf{z}_{i, exo} \\ \mathbf{x}_{i, excluded} \end{pmatrix}
$$
其中 $\mathbf{x}_{i, excluded}$ 是不在解释方程中出现的**外部工具变量**（维数为 $K - L_1$）。

#### 总结对比
| 变量类型 | 数学特征 | 处理方式 | 包含在 $\mathbf{z}_i$？ | 包含在 $\mathbf{x}_i$？ |
| :--- | :--- | :--- | :---: | :---: |
| **先定解释变量** | $E(z_{il} \varepsilon_i) = 0$ | **自为工具**: 直接放入 $\mathbf{x}_i$ | 是 | 是 |
| **内生解释变量** | $E(z_{il} \varepsilon_i) \neq 0$ | **需被替换**: 必须由 $\mathbf{x}_i$ 中的外部变量识别 | 是 | **否** |
| **外部工具变量** | $E(x_{ik} \varepsilon_i) = 0$ | **辅助识别**: 仅用于提供额外的矩条件 | 否 | 是 |

> [!important] 核心逻辑
> 如果一个变量 $z_{il}$ 既是解释变量又是先定的（外生），那么在矩条件 $E[\mathbf{x}_i (y_i - \mathbf{z}_i' \boldsymbol{\delta})] = \mathbf{0}$ 中，对应的子条件 $E[z_{il} (y_i - \mathbf{z}_i' \boldsymbol{\delta})] = 0$ 实际上就是 OLS 能够一致估计该参数的条件。GMM 的本质是利用所有“清白”的信息（包括外生解释变量本身 and 额外的外部工具变量）来共同约束和估计参数。

:::{admonition} Definition (Example 3.2 (Wage Equation))
The wage equation is:
$$
LW_i = \delta_1 + \delta_2 S_i + \delta_3 EXPR_i + \delta_4 IQ_i + \varepsilon_i,
$$
where $LW_i$ is the log wage, $S_i$ is schooling, $EXPR_i$ is experience, $IQ_i$ is IQ, and $\varepsilon_i$ is unobservable.
- Assume $S_i$ is **predetermined** but $IQ_i$ is **endogenous**.
- Assume $EXPR_i, AGE_i$, and $MED_i$ (mother's education) are **predetermined**.

In this case:
- $\mathbf{z}_i = (1, S_i, EXPR_i, IQ_i)^\top$
- $\mathbf{x}_i = (1, S_i, EXPR_i, AGE_i, MED_i)^\top$
- $\mathbf{w}_i = (LW_i, S_i, EXPR_i, IQ_i, AGE_i, MED_i)^\top$

:::

## Deep Dive into Regressor Classes

1. **变量角色分配**:
   - **先定回归变量 (Predetermined Regressors)**: $\{1, S_i, EXPR_i\}$。这些变量既是解释变量又满足正交条件，因此它们出现在 $\mathbf{z}_i$ 中，也作为自身的工具变量出现在 $\mathbf{x}_i$ 中。
   - **内生回归变量 (Endogenous Regressor)**: $\{IQ_i\}$。由于它可能与未观测到的个人特征（如“野心”或“动力”）相关，因此只出现在 $\mathbf{z}_i$ 中。
   - **外部工具变量 (Excluded Instruments)**: $\{AGE_i, MED_i\}$。这些变量满足正交性条件（先定），且与内生变量 $IQ_i$ 相关，但不直接出现在解释方程 $\mathbf{z}_i$ 中。它们的作用是提供额外的矩条件来识别 $\delta_4$。

2. **识别条件验证 (Identification Check)**:
   - 解释变量个数 $L = 4$。
   - 工具变量个数 $K = 5$。
   - 由于 $K > L$，该模型是**过度识别 (Over-identified)** 的。这意味着我们可以利用 GMM 的加权策略来提高估计效率，并且可以进行**过度识别检验 (J-test)** 来验证工具变量的有效性。

**IV Identification Conditions**

识别问题的核心在于：我们能否从观测到的数据矩中唯一地确定参数向量 $\boldsymbol{\delta}$？

:::{admonition} Definition (Assumption 3.4 (Rank Condition for Identification))
The $K \times L$ matrix $E(\mathbf{x}_i \mathbf{z}_i')$ is of **full column rank** (i.e., its rank equals $L$, the number of its columns). We denote this matrix by $\boldsymbol{\Sigma}_{xz}$.

:::

## Rank Condition Derivation

为了理解该假设，我们回到正交性条件 $E(\mathbf{g}_i) = \mathbf{0}$：

**1. 展开期望表达式**:
根据定义 $\mathbf{g}_i = \mathbf{x}_i (y_i - \mathbf{z}_i' \boldsymbol{\delta})$，正交性条件可写作：
$$
E[\mathbf{x}_i \cdot (y_i - \mathbf{z}_i' \boldsymbol{\delta})] = \mathbf{0} \quad (K \times 1) \quad (3.3.2)
$$

^g-from-orthogonality

**2. 线性化推导**:
利用期望的线性性质，将上式展开：
$$
E(\mathbf{x}_i y_i) - E(\mathbf{x}_i \mathbf{z}_i') \boldsymbol{\delta} = \mathbf{0}
$$
定义总体矩矩阵：
- $\boldsymbol{\sigma}_{xy} \equiv E(\mathbf{x}_i y_i)$ （维数为 $K \times 1$）
- $\boldsymbol{\Sigma}_{xz} \equiv E(\mathbf{x}_i \mathbf{z}_i')$ （维数为 $K \times L$）

得到待解的线性方程组：
$$
\underset{(K \times L)}{\boldsymbol{\Sigma}_{xz}} \underset{(L \times 1)}{\boldsymbol{\delta}} = \underset{(K \times 1)}{\boldsymbol{\sigma}_{xy}} \quad (3.3.4)
$$

**3. 唯一解的条件**:
这是一个由 $K$ 个方程组成的关于 $L$ 个未知数（$\boldsymbol{\delta}$）的方程组：
- 如果 $\boldsymbol{\Sigma}_{xz}$ 的秩等于 $L$（**满列秩**），则该线性映射是单射的，能够保证 $\boldsymbol{\delta}$ 有**唯一解**。
- 如果 $\text{rank}(\boldsymbol{\Sigma}_{xz}) < L$，则存在无穷多组 $\boldsymbol{\delta}$ 满足矩条件，模型不可识别。

## Identification Intuition

> [!tip] 秩条件 = 相关性条件 (Relevance Condition)
> 在单变量 IV 模型中，秩条件退化为 $E(x_i z_i) \neq 0$。
> - **数学含义**: $\boldsymbol{\Sigma}_{xz}$ 满列秩意味着工具变量向量 $\mathbf{x}_i$ 与解释变量向量 $\mathbf{z}_i$ 之间存在足够强的线性相关性。
> - **物理意义**: 工具变量必须能够通过“影响”解释变量，从而在 $y$ 的变动中为每一个 $\delta_l$ 提供足够的信息。如果某个内生变量与所有工具变量都不相关，那么它的系数就无法被“识别”出来。

## Order Condition and Identification Status

:::{admonition} Definition (Order Condition for Identification)
A **necessary condition** for identification is that:

$$
K \text{ (\# of instruments)} \ge L \text{ (\# of regressors)} \tag{3.3.5a}
$$

:::

#### 识别状态概览 (Identification States Summary)

| 识别状态 | 阶条件 (Necessary) | 秩条件 (Sufficient) | 估计特征 |
| :--- | :---: | :---: | :--- |
| **过度识别 (Overidentified)** | $K > L$ | $\text{rank}(\boldsymbol{\Sigma}_{xz}) = L$ | 矩条件多于参数，需加权，支持 J-检验 |
| **恰好识别 (Just Identified)** | $K = L$ | $\text{rank}(\boldsymbol{\Sigma}_{xz}) = L$ | 唯一解，退化为简单 IV / 2SLS |
| **识别不足 (Underidentified)** | $K < L$ | 必然不满足 | 参数不可唯一确定 |

> [!important] 核心逻辑 (Key Logic)
> - **阶条件 (Order Condition)**: $K \ge L$ 是解方程组的**维数前提**（方程数 $\ge$ 未知数）。
> - **秩条件 (Rank Condition)**: $\text{rank}(\boldsymbol{\Sigma}_{xz}) = L$ 是参数识别的**充要条件**（保证相关性与解的唯一性）。

**IV-GMM Asymptotic Normality**

为了推导 GMM 估计量的大样本分布（尤其是正态性），我们需要对随机过程的演变动力学做出更强的假设，以满足中心极限定理 (CLT) 的要求。

:::{admonition} Definition (Assumption 3.5 ($\mathbf{g}_i$ is a MDS with finite second moments))
Let $\mathbf{g}_i \equiv \mathbf{x}_i \cdot \varepsilon_i$. $\{\mathbf{g}_i\}$ is a **martingale difference sequence** (so $E(\mathbf{g}_i) = \mathbf{0}$). The $K \times K$ matrix of cross moments, $E(\mathbf{g}_i \mathbf{g}_i')$, is **nonsingular**. We use $\mathbf{S}$ for $\text{Avar}(\bar{\mathbf{g}})$ (i.e., the variance of the limiting distribution of $\sqrt{n}\bar{\mathbf{g}}$, where $\bar{\mathbf{g}} \equiv \frac{1}{n} \sum_{i=1}^n \mathbf{g}_i$). By Assumption 3.2 and the **ergodic stationary Martingale Differences CLT**, $\mathbf{S} = E(\mathbf{g}_i \mathbf{g}_i')$.

[!question] 困惑卡：为什么定义 $\mathbf{g}_i=\mathbf{x}_i\varepsilon_i$？
**困惑**：$\mathbf{g}_i$ 看起来就是“工具变量与扰动项的乘积”。为什么 GMM 要这样定义？

**解答（直观）**：我们要估计的核心约束是正交性条件 $E(\mathbf{x}_i\varepsilon_i)=\mathbf{0}$。把每个样本点的“正交误差”定义成

$$
\mathbf{g}_i \equiv \mathbf{x}_i\varepsilon_i
$$
后，GMM 就是在让样本平均 $\bar{\mathbf{g}}_n$ 尽量接近 $\mathbf{0}$。这等价于让所有工具变量方向上的样本协方差都尽量为零。

**解答（技术）**：
1. 维度正确：$\mathbf{x}_i\in\mathbb{R}^{K\times 1}$，$\varepsilon_i\in\mathbb{R}$，所以 $\mathbf{g}_i\in\mathbb{R}^{K\times 1}$，正好给出 $K$ 个矩条件。
2. 与识别直接对应：$\mathbf{g}_i$ 的均值条件就是识别方程组来源（见 [正交性展开 (3.3.2)](#^g-from-orthogonality))。
3. 与估计目标一致：GMM 目标函数本质是最小化 $\mathbf{g}_n(\delta)'W\mathbf{g}_n(\delta)$，即最小化“违背正交性”的加权距离（见 [矩函数定义](#^g-moment-function)）。

**一句话**：定义成乘积不是技巧，而是把“工具变量与误差应不相关”这条识别假设，直接转成可计算、可最小化的样本矩条件。

:::

^qa-g-definition

## MDS and Long-Run Variance Interpretation

1. **鞅差序列 (Martingale Difference Sequence, MDS)**:
   - **数学定义**: $E(\mathbf{g}_i | \mathbf{g}_{i-1}, \mathbf{g}_{i-2}, \dots) = \mathbf{0}$。
   - **物理意义**: 这意味着矩条件序列 $\{\mathbf{g}_i\}$ 是不可预测的。虽然它比独立同分布 (i.i.d.) 弱，但它保证了序列不存在自相关（Serial Correlation），从而简化了中心极限定理的应用。
   - **必然结果**: 如果 $\{\mathbf{g}_i\}$ 是 MDS，则必然有 $E(\mathbf{g}_i) = \mathbf{0}$，这与 Assumption 3.3（正交性）是一致的。

2. **$\mathbf{S}$ 矩阵的地位**:
   - $\mathbf{S}$ 是矩条件均值 $\bar{\mathbf{g}}$ 的**渐近方差**。
   - **计算式**: 在平稳遍历 MDS 的假设下，$\mathbf{S} = E(\mathbf{g}_i \mathbf{g}_i') = E(\varepsilon_i^2 \mathbf{x}_i \mathbf{x}_i')$。
   - **重要性**: $\mathbf{S}$ 矩阵刻画了“矩条件的精度”。在过度识别的情况下，**最优权重矩阵 (Optimal Weighting Matrix)** 恰恰就是 $\mathbf{S}^{-1}$。

3. **非奇异性 (Nonsingularity)**:
   - 要求 $\mathbf{S}$ 是满秩的，保证了其逆矩阵 $\mathbf{S}^{-1}$ 存在。这确保了我们能为每一个矩条件分配明确的权重。

:::{admonition} Note
为什么需要这个假设？
只有满足了 Assumption 3.5，我们才能应用**平稳遍历序列中心极限定理**：
$$
\sqrt{n} \bar{\mathbf{g}}_n \xrightarrow{d} N(\mathbf{0}, \mathbf{S})
$$
这是证明 GMM 估计量渐近正态性 $\sqrt{n}(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta}) \xrightarrow{d} N(\dots)$ 的最关键一步。

:::

**GMM Definition and Objective**

**Moment Functions and Sample Moments**

首先明确变量集合与函数映射：
- 令 $\mathbf{w}_i \equiv (y_i, \mathbf{z}_i, \mathbf{x}_i)$ 为第 $i$ 次观测中所有可观测变量构成的向量。
- 定义 **矩函数 (Moment Function)** $\mathbf{g}(\mathbf{w}_i ; \tilde{\boldsymbol{\delta}}): \mathbb{R}^{\text{dim}(\mathbf{w})} \times \mathbb{R}^L \to \mathbb{R}^K$。

对于线性模型 $y_i = \mathbf{z}_i' \boldsymbol{\delta} + \varepsilon_i$，当参数取值为假设值 $\tilde{\boldsymbol{\delta}}$ 时，扰动项的构造函数为：
$$
\varepsilon_i(\tilde{\boldsymbol{\delta}}) = y_i - \mathbf{z}_i' \tilde{\boldsymbol{\delta}}
$$

根据正交性假设 $E(\mathbf{x}_i \varepsilon_i) = \mathbf{0}$，单次观测的矩函数定义为工具变量与构造扰动项的乘积：
$$
\mathbf{g}(\mathbf{w}_i ; \tilde{\boldsymbol{\delta}}) \equiv \mathbf{x}_i \cdot \varepsilon_i(\tilde{\boldsymbol{\delta}}) = \mathbf{x}_i (y_i - \mathbf{z}_i' \tilde{\boldsymbol{\delta}}) \quad (K \times 1)
$$

^g-moment-function

## Sample Moment Construction
根据类比原则，定义总体矩 $E[\mathbf{g}(\mathbf{w}_i ; \boldsymbol{\delta})]$ 的样本对应物：
$$
\mathbf{g}_n(\tilde{\boldsymbol{\delta}}) \equiv \frac{1}{n} \sum_{i=1}^n \mathbf{g}(\mathbf{w}_i ; \tilde{\boldsymbol{\delta}}) \quad (3.4 .1)
$$

利用线性设定 $y_i = \mathbf{z}_i' \boldsymbol{\delta} + \varepsilon_i$，将 $\mathbf{g}_n(\tilde{\boldsymbol{\delta}})$ 展开：
$$\begin{aligned}
\mathbf{g}_n(\tilde{\boldsymbol{\delta}}) &= \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \cdot(y_i - \mathbf{z}_i' \tilde{\boldsymbol{\delta}}) \\
&= \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i y_i - \left(\frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \mathbf{z}_i'\right) \tilde{\boldsymbol{\delta}} \\
&\equiv \mathbf{s}_{xy} - \mathbf{S}_{xz} \tilde{\boldsymbol{\delta}} \quad (3.4.2)
\end{aligned}$$

其中：
- $\mathbf{s}_{xy} \equiv \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i y_i \quad (K \times 1)$
- $\mathbf{S}_{xz} \equiv \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \mathbf{z}_i' \quad (K \times L)$

**Simultaneous-Equation Moments**

由样本矩条件 $\mathbf{g}_n(\tilde{\boldsymbol{\delta}}) = \mathbf{0}$ 导出的联立方程组为：
$$
\mathbf{S}_{xz} \tilde{\boldsymbol{\delta}} = \mathbf{s}_{xy} \quad (3.4.3)
$$

**2.1 恰好识别：矩估计 (Method of Moments: $K = L$)**

若 $K = L$ 且总体矩矩阵 $\boldsymbol{\Sigma}_{xz}$ 是方阵且可逆（满足秩条件），则根据 Assumption 3.2，在大样本下方程组 (3.4.3) 具有唯一解：
$$
\hat{\boldsymbol{\delta}}_{IV} = \mathbf{S}_{xz}^{-1} \mathbf{s}_{xy} = \left(\frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \mathbf{z}_i'\right)^{-1} \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i y_i \quad (3.4.4)
$$
该估计量被称为 **工具变量估计量 (Instrumental Variable Estimator)**。

**矩阵形式表示与维数定义**:
定义样本量为 $n$。构建如下全局数据矩阵：
- **因变量向量**: $\mathbf{y} = \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix} \in \mathbb{R}^{n \times 1}$
- **解释变量矩阵 (Regressors Matrix)**: $\mathbf{Z} = \begin{pmatrix} \mathbf{z}_1' \\ \vdots \\ \mathbf{z}_n' \end{pmatrix} \in \mathbb{R}^{n \times L}$
- **工具变量矩阵 (Instruments Matrix)**: $\mathbf{X} = \begin{pmatrix} \mathbf{x}_1' \\ \vdots \\ \mathbf{x}_n' \end{pmatrix} \in \mathbb{R}^{n \times K}$

其中维数含义如下：
- $n$: 样本观测数 (Sample size)。
- $L$: 待估参数向量 $\boldsymbol{\delta}$ 的维数，即**解释变量个数**。
- $K$: **工具变量个数**（即矩条件的个数）。

在上述定义下，样本矩矩阵可简写为：
$$
\mathbf{S}_{xz} = \frac{1}{n} \mathbf{X}' \mathbf{Z} \quad \text{和} \quad \mathbf{s}_{xy} = \frac{1}{n} \mathbf{X}' \mathbf{y}
$$
当 $K = L$ 且 $\mathbf{X}' \mathbf{Z}$ 非奇异时， IV 估计量可表示为：
$$
\hat{\boldsymbol{\delta}}_{IV} = (\mathbf{X}' \mathbf{Z})^{-1} \mathbf{X}' \mathbf{y}
$$

**与 OLS 的关系**:
若 $\mathbf{x}_i = \mathbf{z}_i$（即所有解释变量均外生且作为自身的工具变量），则 $IV$ 估计量退化为 **OLS 估计量**:
$$
\hat{\boldsymbol{\delta}}_{OLS} = (\mathbf{Z}' \mathbf{Z})^{-1} \mathbf{Z}' \mathbf{y}
$$

**2.2 过度识别 ($K > L$)**

当工具变量个数多于解释变量时，$\mathbf{S}_{xz}$ 不是方阵，无法求逆。方程组通常无解，此时需要寻找一个 $\hat{\boldsymbol{\delta}}$，使得样本矩在加权意义下最接近于 $\mathbf{0}$。

**GMM Estimator Definition**

## GMM Distance Metric
当 $K > L$ 时，无法满足所有 $K$ 个矩方程。我们需要定义两个 $K$ 维向量 $\boldsymbol{\xi}$ 与 $\boldsymbol{\eta}$ 之间的距离。

**二次型定义 (Quadratic Form Definition)**:
任意两个 $K$ 维向量 $\boldsymbol{\xi}$ 与 $\boldsymbol{\eta}$ 之间的距离由以下**二次型 (Quadratic Form)** 定义：
$$
\text{Dist}(\boldsymbol{\xi}, \boldsymbol{\eta}) \equiv (\boldsymbol{\xi} - \boldsymbol{\eta})' \widehat{\mathbf{W}} (\boldsymbol{\xi} - \boldsymbol{\eta})
$$
其中 $\widehat{\mathbf{W}}$ 为权重矩阵。GMM 的目标是最小化样本矩 $\mathbf{g}_n(\tilde{\boldsymbol{\delta}})$ 与 $\mathbf{0}$ 向量之间的距离。

#### 几何意义与等高线 (Geometric Interpretation)
在 $\mathbb{R}^K$ 矩空间中，该距离函数定义了一组以原点为中心的**等高线 (Contour Lines)**：
1. **等高线方程**: $\{\mathbf{g} \in \mathbb{R}^K \mid \mathbf{g}' \widehat{\mathbf{W}} \mathbf{g} = c\}$。
2. **椭球体形状**: 由于 $\widehat{\mathbf{W}}$ 是正定的，这些等高线构成了 $K$ 维**椭球体**。
   - 椭球的主轴方向由 $\widehat{\mathbf{W}}$ 的特征向量 $\mathbf{v}_k$ 决定。
   - 轴长与特征值 $\lambda_k$ 的平方根成反比。
3. **投影本质**: $\hat{\boldsymbol{\delta}}$ 是样本矩轨迹（由 $\boldsymbol{\delta}$ 变动生成的 $L$ 维超平面）与最小椭球体的**切点**。

![Wage equation example](../../attachment/Pasted image 20260503104338.png)

:::{admonition} Definition (Definition 3.1 (GMM Estimator))
Let $\widehat{\mathbf{W}}$ be a $K \times K$ symmetric positive definite matrix, possibly dependent on the sample, such that $\widehat{\mathbf{W}} \xrightarrow{p} \mathbf{W}$ as $n \to \infty$. The **GMM estimator** of $\boldsymbol{\delta}$, denoted by $\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}})$, is defined as:
$$
\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}) \equiv \arg \min _{\tilde{\boldsymbol{\delta}}} J(\tilde{\boldsymbol{\delta}}, \widehat{\mathbf{W}}) \quad (3.4.5)
$$
其中目标函数定义为：
$$
J(\tilde{\boldsymbol{\delta}}, \widehat{\mathbf{W}}) \equiv n \cdot \mathbf{g}_n(\tilde{\boldsymbol{\delta}})' \widehat{\mathbf{W}} \mathbf{g}_n(\tilde{\boldsymbol{\delta}})
$$

:::

**Closed-Form GMM and Sampling Error**

## Quadratic GMM Objective
目标函数 $J(\tilde{\boldsymbol{\delta}}, \widehat{\mathbf{W}})$ 是关于 $\tilde{\boldsymbol{\delta}}$ 的二次型。利用 $\mathbf{g}_n(\tilde{\boldsymbol{\delta}}) = \mathbf{s}_{xy} - \mathbf{S}_{xz} \tilde{\boldsymbol{\delta}}$：
$$
J(\tilde{\boldsymbol{\delta}}, \widehat{\mathbf{W}}) = n \cdot (\mathbf{s}_{xy} - \mathbf{S}_{xz} \tilde{\boldsymbol{\delta}})' \widehat{\mathbf{W}} (\mathbf{s}_{xy} - \mathbf{S}_{xz} \tilde{\boldsymbol{\delta}}) \quad (3.4.6)
$$

## GMM First-Order Condition
对 $J$ 关于 $\tilde{\boldsymbol{\delta}}$ 求偏导并令其为 $\mathbf{0}$：
$$
\frac{\partial J(\tilde{\boldsymbol{\delta}}, \widehat{\mathbf{W}})}{\partial \tilde{\boldsymbol{\delta}}} = -2n \mathbf{S}_{xz}' \widehat{\mathbf{W}} (\mathbf{s}_{xy} - \mathbf{S}_{xz} \tilde{\boldsymbol{\delta}}) = \mathbf{0}
$$
整理得一阶条件 (FOC)：
$$
\underset{(L \times K)}{\mathbf{S}_{xz}'} \underset{(K \times K)}{\widehat{\mathbf{W}}} \underset{(K \times 1)}{\mathbf{s}_{xy}} = \underset{(L \times K)}{\mathbf{S}_{xz}'} \underset{(K \times K)}{\widehat{\mathbf{W}}} \underset{(K \times L)}{\mathbf{S}_{xz}} \underset{(L \times 1)}{\tilde{\boldsymbol{\delta}}} \quad (3.4.7)
$$

## Closed-Form GMM Estimator
根据式 (3.4.7) 的一阶条件，在 Assumption 3.2 和 3.4 成立的前提下（保证矩阵可逆），$\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}})$ 的推导过程如下：

$$\begin{aligned}
\mathbf{S}_{xz}' \widehat{\mathbf{W}} (\mathbf{s}_{xy} - \mathbf{S}_{xz} \hat{\boldsymbol{\delta}}) &= \mathbf{0} \\
\mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{s}_{xy} - \mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz} \hat{\boldsymbol{\delta}} &= \mathbf{0} \\
(\mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz}) \hat{\boldsymbol{\delta}} &= \mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{s}_{xy} \\
\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}) &= (\mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{s}_{xy} \quad (3.4.8)
\end{aligned}$$

:::{admonition} Note
Special Case: $K=L$
若 $K=L$，则 $\mathbf{S}_{xz}$ 为可逆方阵。式 (3.4.8) 退化为：
$$
\hat{\boldsymbol{\delta}} = \mathbf{S}_{xz}^{-1} \widehat{\mathbf{W}}^{-1} (\mathbf{S}_{xz}')^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{s}_{xy} = \mathbf{S}_{xz}^{-1} \mathbf{s}_{xy} \quad (\text{IV 估计量})
$$

:::

## GMM Sampling Error
利用结构方程 $y_i = \mathbf{z}_i' \boldsymbol{\delta} + \varepsilon_i$，构造 $\mathbf{s}_{xy}$ 的分解式：
$$
\mathbf{s}_{xy} = \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i (\mathbf{z}_i' \boldsymbol{\delta} + \varepsilon_i) = \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \mathbf{z}_i' \right) \boldsymbol{\delta} + \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \varepsilon_i = \mathbf{S}_{xz} \boldsymbol{\delta} + \bar{\mathbf{g}}
$$
其中 $\bar{\mathbf{g}} = \frac{1}{n} \sum \mathbf{x}_i \varepsilon_i$ 为样本平均矩。

将该式代入解析解 (3.4.8)：
$$\begin{aligned}
\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}) &= (\mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{W}} (\mathbf{S}_{xz} \boldsymbol{\delta} + \bar{\mathbf{g}}) \\
&= \underbrace{(\mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz}}_{\mathbf{I}_L} \boldsymbol{\delta} + (\mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{W}} \bar{\mathbf{g}}
\end{aligned}$$

整理得**抽样误差表达式**：
$$
\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}) - \boldsymbol{\delta} = (\mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{W}} \bar{\mathbf{g}} \quad (3.4.11)
$$

> [!important] 结构分析
> 该误差项由三部分组成：
> 1. $(\mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz})^{-1}$: 测度信息的精确度。
> 2. $\mathbf{S}_{xz}' \widehat{\mathbf{W}}$: 权重分配与投影方向。
> 3. $\bar{\mathbf{g}}$: 矩条件的随机波动。由于 $E(\bar{\mathbf{g}}) = \mathbf{0}$，结合大数定律（LLN），当 $n \to \infty$ 时，$\bar{\mathbf{g}} \xrightarrow{p} \mathbf{0}$，从而保证了 $\hat{\boldsymbol{\delta}}$ 的一致性。

**GMM Large-Sample Theory**

本章利用大数定律 (LLN) 和中心极限定理 (CLT) 探讨 GMM 估计量的渐近性质。

:::{admonition} Proposition: Proposition 3.1 (a): Consistency
Under Assumptions 3.1-3.4, GMM 估计量具有一致性：
$$
\operatorname{plim}_{n \to \infty} \hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}) = \boldsymbol{\delta}
$$

:::

**Proof of Consistency**
利用解析解表达式 (3.4.8) 以及大数定律 (LLN)：
1. **矩矩阵收敛**: $\mathbf{S}_{xz} \equiv \frac{1}{n} \mathbf{X}' \mathbf{Z} \xrightarrow{p} \boldsymbol{\Sigma}_{xz}$。
2. **权重矩阵收敛**: $\widehat{\mathbf{W}} \xrightarrow{p} \mathbf{W}$。
3. **样本矩均值收敛**: $\mathbf{s}_{xy} = \mathbf{S}_{xz} \boldsymbol{\delta} + \bar{\mathbf{g}} \xrightarrow{p} \boldsymbol{\Sigma}_{xz} \boldsymbol{\delta} + E[\mathbf{g}_i] = \boldsymbol{\Sigma}_{xz} \boldsymbol{\delta}$。

由 Slutsky 定理得：
$$\begin{aligned}
\operatorname{plim} \hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}) &= (\operatorname{plim} \mathbf{S}_{xz}' \operatorname{plim} \widehat{\mathbf{W}} \operatorname{plim} \mathbf{S}_{xz})^{-1} (\operatorname{plim} \mathbf{S}_{xz}' \operatorname{plim} \widehat{\mathbf{W}} \operatorname{plim} \mathbf{s}_{xy}) \\
&= (\boldsymbol{\Sigma}_{xz}' \mathbf{W} \boldsymbol{\Sigma}_{xz})^{-1} \boldsymbol{\Sigma}_{xz}' \mathbf{W} \boldsymbol{\Sigma}_{xz} \boldsymbol{\delta} \\
&= \boldsymbol{\delta}
\end{aligned}$$

:::{admonition} Proposition: Proposition 3.1 (b): Asymptotic Normality
If Assumption 3.3 is strengthened as Assumption 3.5, then:
$$
\sqrt{n}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}) - \boldsymbol{\delta}) \xrightarrow{d} N(\mathbf{0}, \operatorname{Avar}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}})))
$$
其中渐近方差 $\operatorname{Avar}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}))$ 定义为：
$$
\operatorname{Avar}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}})) = (\boldsymbol{\Sigma}_{xz}' \mathbf{W} \boldsymbol{\Sigma}_{xz})^{-1} \boldsymbol{\Sigma}_{xz}' \mathbf{W} \mathbf{S} \mathbf{W} \boldsymbol{\Sigma}_{xz}(\boldsymbol{\Sigma}_{xz}' \mathbf{W} \boldsymbol{\Sigma}_{xz})^{-1} \quad (3.5.1)
$$

:::

**Proof of Asymptotic Normality**
利用抽样误差表达式 (3.4.11)：
$$
\sqrt{n}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}) - \boldsymbol{\delta}) = \underbrace{(\mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{W}}}_{\mathbf{B}_n} (\sqrt{n} \bar{\mathbf{g}})
$$

1. **矩条件正态化 (CLT)**: 根据 Assumption 3.5，$\sqrt{n} \bar{\mathbf{g}} \xrightarrow{d} N(\mathbf{0}, \mathbf{S})$。
2. **系数矩阵收敛**: $\mathbf{B}_n \xrightarrow{p} \mathbf{B} = (\boldsymbol{\Sigma}_{xz}' \mathbf{W} \boldsymbol{\Sigma}_{xz})^{-1} \boldsymbol{\Sigma}_{xz}' \mathbf{W}$。
3. **应用连续映射定理**:
$$\begin{aligned}
\operatorname{Avar} &= \mathbf{B} \mathbf{S} \mathbf{B}' \\
&= [(\boldsymbol{\Sigma}_{xz}' \mathbf{W} \boldsymbol{\Sigma}_{xz})^{-1} \boldsymbol{\Sigma}_{xz}' \mathbf{W}] \mathbf{S} [\mathbf{W} \boldsymbol{\Sigma}_{xz} (\boldsymbol{\Sigma}_{xz}' \mathbf{W} \boldsymbol{\Sigma}_{xz})^{-1}] \\
&= (\boldsymbol{\Sigma}_{xz}' \mathbf{W} \boldsymbol{\Sigma}_{xz})^{-1} \boldsymbol{\Sigma}_{xz}' \mathbf{W} \mathbf{S} \mathbf{W} \boldsymbol{\Sigma}_{xz} (\boldsymbol{\Sigma}_{xz}' \mathbf{W} \boldsymbol{\Sigma}_{xz})^{-1}
\end{aligned}$$

**GMM Wald Testing**
:::{admonition} Proposition: Proposition 3.1 (c): Consistent Estimate of Avar
Suppose there is available a consistent estimator $\widehat{\mathbf{S}}$ of $\mathbf{S}$. Then $\operatorname{Avar}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}))$ is consistently estimated by:
$$
\widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}})) \equiv (\mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{W}} \widehat{\mathbf{S}} \widehat{\mathbf{W}} \mathbf{S}_{xz} (\mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz})^{-1} \quad (3.5.2)
$$

:::

**Proof of Consistent Estimation**
由于 $\mathbf{S}_{xz} \xrightarrow{p} \boldsymbol{\Sigma}_{xz}$，$\widehat{\mathbf{W}} \xrightarrow{p} \mathbf{W}$，且假设 $\widehat{\mathbf{S}} \xrightarrow{p} \mathbf{S}$，根据 Slutsky 定理，样本渐近方差矩阵 $\widehat{\operatorname{Avar}}$ 为对应总体矩阵的一致估计：
$$
\operatorname{plim} \widehat{\operatorname{Avar}} = \operatorname{Avar}
$$
该估计量常用于计算 GMM 的稳健标准误（Robust Standard Errors）。

:::{admonition} Proposition: Proposition 3.2 (Consistent Estimation of Error Variance)
For any consistent estimator $\hat{\boldsymbol{\delta}}$ of $\boldsymbol{\delta}$, define the residual
$$
\hat{\varepsilon}_i \equiv y_i - \mathbf{z}_i' \hat{\boldsymbol{\delta}}
$$
Under Assumptions 3.1 and 3.2, plus the assumption that $E(\mathbf{z}_i \mathbf{z}_i')$ exists and is finite,
$$
\frac{1}{n} \sum_{i=1}^n \hat{\varepsilon}_i^2 \xrightarrow{p} E(\varepsilon_i^2),
$$
provided $E(\varepsilon_i^2)$ exists and is finite.
:::

^proposition-3-2

**Proof of Proposition 3.2**

由线性模型 $y_i = \mathbf{z}_i' \boldsymbol{\delta} + \varepsilon_i$，
$$\begin{aligned}
\hat{\varepsilon}_i
&= y_i - \mathbf{z}_i' \hat{\boldsymbol{\delta}} \\
&= \mathbf{z}_i' \boldsymbol{\delta} + \varepsilon_i - \mathbf{z}_i' \hat{\boldsymbol{\delta}} \\
&= \varepsilon_i - \mathbf{z}_i'(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta}),
\end{aligned}$$
从而
$$\begin{aligned}
\frac{1}{n} \sum_{i=1}^n \hat{\varepsilon}_i^2
&= \frac{1}{n} \sum_{i=1}^n \left[\varepsilon_i - \mathbf{z}_i'(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta})\right]^2 \\
&= \frac{1}{n} \sum_{i=1}^n \varepsilon_i^2
- 2 \left( \frac{1}{n} \sum_{i=1}^n \varepsilon_i \mathbf{z}_i' \right)(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta}) + (\hat{\boldsymbol{\delta}} - \boldsymbol{\delta})'
\left( \frac{1}{n} \sum_{i=1}^n \mathbf{z}_i \mathbf{z}_i' \right)
(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta}).
\end{aligned}$$

由 Assumption 3.2 和 LLN，
$$\frac{1}{n} \sum_{i=1}^n \varepsilon_i^2 \xrightarrow{p} E(\varepsilon_i^2), \qquad
\frac{1}{n} \sum_{i=1}^n \mathbf{z}_i \mathbf{z}_i' \xrightarrow{p} E(\mathbf{z}_i \mathbf{z}_i').$$
又因为对每个分量 $z_{ij}$，由 Cauchy-Schwarz 不等式
$$
E|\varepsilon_i z_{ij}| \le \sqrt{E(\varepsilon_i^2) E(z_{ij}^2)} < \infty,
$$
所以同样有
$$
\frac{1}{n} \sum_{i=1}^n \varepsilon_i \mathbf{z}_i \xrightarrow{p} E(\varepsilon_i \mathbf{z}_i),
$$
因而
$$\frac{1}{n} \sum_{i=1}^n \varepsilon_i \mathbf{z}_i = O_p(1), \qquad
\frac{1}{n} \sum_{i=1}^n \mathbf{z}_i \mathbf{z}_i' = O_p(1).$$
再由 $\hat{\boldsymbol{\delta}} \xrightarrow{p} \boldsymbol{\delta}$，
$$\begin{aligned}
\left( \frac{1}{n} \sum_{i=1}^n \varepsilon_i \mathbf{z}_i' \right)(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta})
&\xrightarrow{p} 0, \\
(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta})'
\left( \frac{1}{n} \sum_{i=1}^n \mathbf{z}_i \mathbf{z}_i' \right)
(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta})
&\xrightarrow{p} 0.
\end{aligned}$$
因此
$$\begin{aligned}
\frac{1}{n} \sum_{i=1}^n \hat{\varepsilon}_i^2
&= \frac{1}{n} \sum_{i=1}^n \varepsilon_i^2 + o_p(1)\xrightarrow{p} E(\varepsilon_i^2).
\end{aligned}$$
证毕。

> 该结果说明：只要参数估计量本身是一致的，用样本残差平方均值替代不可观测的误差方差在大样本下是合法的。这正是后面讨论**条件同方差 (conditional homoskedasticity)** 时构造 $\hat{\sigma}^2$ 和简化最优权重矩阵的基础。

Based on the asymptotic normality (Proposition 3.1), we can perform statistical tests for structural parameters.

:::{admonition} Proposition: Proposition 3.3 (Robust $t$-ratio and Wald Statistics)
Suppose Assumptions 3.1–3.5 hold, and suppose there is available a consistent estimate $\widehat{\mathbf{S}}$ of $\mathbf{S}$. Let
$$
\widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}})) \equiv (\mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{W}} \widehat{\mathbf{S}} \widehat{\mathbf{W}} \mathbf{S}_{xz} (\mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz})^{-1}
$$
(a) Under $H_0: \delta_\ell = \bar{\delta}_\ell$,
$$
t_\ell \equiv \frac{\hat{\delta}_\ell(\widehat{\mathbf{W}}) - \bar{\delta}_\ell}{SE_\ell^*} \xrightarrow{d} N(0, 1), \quad SE_\ell^* \equiv \sqrt{\frac{1}{n} \cdot (\widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}})))_{\ell\ell}}
$$
(b) Under $H_0: \mathbf{R}\boldsymbol{\delta} = \mathbf{r}$, where $\mathbf{R}$ is $\#\mathbf{r} \times L$ and of full row rank,
$$
W \equiv n \cdot (\mathbf{R}\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}) - \mathbf{r})' \{ \mathbf{R} [\widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}))] \mathbf{R}' \}^{-1} (\mathbf{R}\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}) - \mathbf{r}) \xrightarrow{d} \chi^2(\#\mathbf{r})
$$
(c) Under $H_0: \mathbf{a}(\boldsymbol{\delta}) = \mathbf{0}$, where $\mathbf{A}(\boldsymbol{\delta}) \equiv \frac{\partial \mathbf{a}(\boldsymbol{\delta})}{\partial \boldsymbol{\delta}'}$ is $\#\mathbf{a} \times L$ and of full row rank,
$$
W \equiv n \cdot \mathbf{a}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}))' \{ \mathbf{A}(\hat{\boldsymbol{\delta}}) [\widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}}))] \mathbf{A}(\hat{\boldsymbol{\delta}})' \}^{-1} \mathbf{a}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}})) \xrightarrow{d} \chi^2(\#\mathbf{a})
$$

:::

## Delta-Method Derivation for Wald Tests

The statistical properties of non-linear restrictions $\mathbf{a}(\boldsymbol{\delta}) = \mathbf{0}$ are derived via the **Delta Method** (first-order Taylor expansion):

$$\begin{aligned}
\sqrt{n}(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta}) &\xrightarrow{d} N(\mathbf{0}, \operatorname{Avar}(\hat{\boldsymbol{\delta}})) \\
\mathbf{a}(\hat{\boldsymbol{\delta}}) - \mathbf{a}(\boldsymbol{\delta}) &\approx \mathbf{A}(\boldsymbol{\delta}) \cdot (\hat{\boldsymbol{\delta}} - \boldsymbol{\delta}) \quad (\text{linear approximation}) \\
\sqrt{n}(\mathbf{a}(\hat{\boldsymbol{\delta}}) - \mathbf{0}) &\approx \mathbf{A}(\boldsymbol{\delta}) \cdot \sqrt{n}(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta}) \\
&\xrightarrow{d} N(\mathbf{0}, \underbrace{\mathbf{A}(\boldsymbol{\delta}) \operatorname{Avar}(\hat{\boldsymbol{\delta}}) \mathbf{A}(\boldsymbol{\delta})'}_{\mathbf{V}_a}) \\
W &= [\sqrt{n}\mathbf{a}(\hat{\boldsymbol{\delta}})]' \mathbf{V}_a^{-1} [\sqrt{n}\mathbf{a}(\hat{\boldsymbol{\delta}})] \\
&= n \cdot \mathbf{a}(\hat{\boldsymbol{\delta}})' [\mathbf{A}(\boldsymbol{\delta}) \operatorname{Avar}(\hat{\boldsymbol{\delta}}) \mathbf{A}(\boldsymbol{\delta})']^{-1} \mathbf{a}(\hat{\boldsymbol{\delta}}) \\
&\xrightarrow{d} \chi^2(\#\mathbf{a})
\end{aligned}$$


**2. Estimation of $\mathbf{S}$**

By the fact that $\mathbf{S} = E(\mathbf{g}_i \mathbf{g}_i') = E(\varepsilon_i^2 \mathbf{x}_i \mathbf{x}_i')$, the proposed estimator for $\mathbf{S}$ is:
$$
\widehat{\mathbf{S}} \equiv \frac{1}{n} \sum_{i=1}^n \hat{\varepsilon}_i^2 \mathbf{x}_i \mathbf{x}_i' \quad (3.5.10)
$$
where $\hat{\varepsilon}_i = y_i - \mathbf{z}_i' \hat{\boldsymbol{\delta}}$ and $\hat{\boldsymbol{\delta}}$ is any consistent estimator for $\boldsymbol{\delta}$.

> [!assumption] Assumption 3.6 (Finite Fourth Moments)
> $E[(x_{ik} z_{i \ell})^2]$ exists and is finite for all $k (= 1, \dots, K)$ and $\ell (= 1, \dots, L)$.

:::{admonition} Proposition: Proposition 3.4 (Consistent Estimation of $\mathbf{S}$)
Suppose the coefficient estimate $\hat{\boldsymbol{\delta}}$ used for calculating the residual $\hat{\varepsilon}_i$ for $\widehat{\mathbf{S}}$ in (3.5.10) is consistent, and suppose $\mathbf{S} = E(\mathbf{g}_i \mathbf{g}_i')$ exists and is finite. Then, under Assumptions 3.1, 3.2, and 3.6, $\widehat{\mathbf{S}}$ given in (3.5.10) is consistent for $\mathbf{S}$.

:::

**Proof: Consistency of $\widehat{\mathbf{S}}$ (WTS: $\widehat{S}_{kl} \xrightarrow{p} S_{kl}$)**

The $(k, l)$ element of $\widehat{\mathbf{S}}$ is $\widehat{S}_{kl} = \frac{1}{n} \sum_{i=1}^n \hat{\varepsilon}_i^2 x_{ik} x_{il}$. We need to show its convergence:

$$\begin{aligned}
\widehat{S}_{kl} &= \frac{1}{n} \sum_{i=1}^n (y_i - \mathbf{z}_i' \hat{\boldsymbol{\delta}})^2 x_{ik} x_{il} \\
&= \frac{1}{n} \sum_{i=1}^n [\varepsilon_i - \mathbf{z}_i'(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta})]^2 x_{ik} x_{il} \quad (\because y_i - \mathbf{z}_i' \hat{\boldsymbol{\delta}} = \varepsilon_i - \mathbf{z}_i'(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta})) \\
&= \underbrace{\frac{1}{n} \sum_{i=1}^n \varepsilon_i^2 x_{ik} x_{il}}_{(1)} - 2 (\hat{\boldsymbol{\delta}} - \boldsymbol{\delta})' \underbrace{\left( \frac{1}{n} \sum_{i=1}^n \varepsilon_i \mathbf{z}_i x_{ik} x_{il} \right)}_{(2)} + (\hat{\boldsymbol{\delta}} - \boldsymbol{\delta})' \underbrace{\left( \frac{1}{n} \sum_{i=1}^n \mathbf{z}_i \mathbf{z}_i' x_{ik} x_{il} \right)}_{(3)} (\hat{\boldsymbol{\delta}} - \boldsymbol{\delta})
\end{aligned}$$

**Step-by-step plim Proof:**

Applying the **Slutsky's Theorem** and **Law of Large Numbers (LLN)**:

$$\begin{aligned}
\operatorname{plim} \widehat{S}_{kl} &= \operatorname{plim} (1) - 2 \cdot [\operatorname{plim}(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta})]' \cdot \operatorname{plim}(2) + [\operatorname{plim}(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta})]' \cdot \operatorname{plim}(3) \cdot [\operatorname{plim}(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta})] \\
&= E(\varepsilon_i^2 x_{ik} x_{il}) - 2 \cdot \mathbf{0}' \cdot E(\varepsilon_i \mathbf{z}_i x_{ik} x_{il}) + \mathbf{0}' \cdot E(\mathbf{z}_i \mathbf{z}_i' x_{ik} x_{il}) \cdot \mathbf{0} \\
&= S_{kl} - 2 \cdot \mathbf{0}' \cdot (\text{Finite Vector}) + \mathbf{0}' \cdot (\text{Finite Matrix}) \cdot \mathbf{0} \\
&= S_{kl}
\end{aligned}$$

**Key Conditions:**
1.  **Consistency**: $\operatorname{plim} \hat{\boldsymbol{\delta}} = \boldsymbol{\delta} \implies \operatorname{plim}(\hat{\boldsymbol{\delta}} - \boldsymbol{\delta}) = \mathbf{0}$.
2.  **Regularity (Assumption 3.6)**: The expectations $E(\varepsilon_i \mathbf{z}_i x_{ik} x_{il})$ and $E(\mathbf{z}_i \mathbf{z}_i' x_{ik} x_{il})$ are finite (ensured by Cauchy-Schwarz and finite 4th moments), meaning the sample averages are $O_p(1)$.

Thus, $\widehat{S}_{kl}$ converges in probability to the true population moment $S_{kl}$, proving that $\widehat{\mathbf{S}}$ is a consistent estimator of $\mathbf{S}$.

**Efficient GMM Estimator**

In GMM estimation, the choice of the weighting matrix $\mathbf{W}$ affects the efficiency of the estimator. We seek the **optimal** weighting matrix that minimizes the asymptotic variance.

:::{admonition} Proposition: Proposition 3.5 (Optimal Choice of the Weighting Matrix)
A lower bound for the asymptotic variance of the GMM estimators indexed by $\widehat{\mathbf{W}}$ is given by $(\boldsymbol{\Sigma}_{xz}' \mathbf{S}^{-1} \boldsymbol{\Sigma}_{xz})^{-1}$. The lower bound is achieved if $\widehat{\mathbf{W}}$ is such that $\mathbf{W} (\equiv \operatorname{plim} \widehat{\mathbf{W}}) = \mathbf{S}^{-1}$.

:::

**Proof: Optimality of $\mathbf{W} = \mathbf{S}^{-1}$**

We wish to show that for any symmetric positive definite $\mathbf{W}$:
$$
\operatorname{Avar}(\hat{\boldsymbol{\delta}}(\mathbf{W})) \geq \operatorname{Avar}(\hat{\boldsymbol{\delta}}(\mathbf{S}^{-1})) = (\boldsymbol{\Sigma}_{xz}' \mathbf{S}^{-1} \boldsymbol{\Sigma}_{xz})^{-1}
$$

**1. Algebraic Hint:**
For two positive definite symmetric matrices $\mathbf{A}$ and $\mathbf{B}$:
$$
\mathbf{A} - \mathbf{B} \geq 0 \iff \mathbf{B}^{-1} - \mathbf{A}^{-1} \geq 0
$$
Thus, it suffices to prove:
$$
\operatorname{Avar}(\hat{\boldsymbol{\delta}}(\mathbf{S}^{-1}))^{-1} \geq \operatorname{Avar}(\hat{\boldsymbol{\delta}}(\mathbf{W}))^{-1}
$$
$$
\boldsymbol{\Sigma}_{xz}' \mathbf{S}^{-1} \boldsymbol{\Sigma}_{xz} \geq (\boldsymbol{\Sigma}_{xz}' \mathbf{W} \boldsymbol{\Sigma}_{xz}) (\boldsymbol{\Sigma}_{xz}' \mathbf{W} \mathbf{S} \mathbf{W} \boldsymbol{\Sigma}_{xz})^{-1} (\boldsymbol{\Sigma}_{xz}' \mathbf{W} \boldsymbol{\Sigma}_{xz})
$$

**2. Transformation via Projection Matrix:**
Let $\mathbf{S} = \mathbf{C}\mathbf{C}'$, then $\mathbf{S}^{-1} = (\mathbf{C}')^{-1} \mathbf{C}^{-1}$. Define:
- $\mathbf{D} \equiv \mathbf{C}^{-1} \boldsymbol{\Sigma}_{xz}$
- $\mathbf{G} \equiv \mathbf{C}' \mathbf{W} \boldsymbol{\Sigma}_{xz}$

Substituting these into the inequality:
$$\begin{aligned}
\text{Left Hand Side (LHS)} &= \boldsymbol{\Sigma}_{xz}' (\mathbf{C}')^{-1} \mathbf{C}^{-1} \boldsymbol{\Sigma}_{xz} = \mathbf{D}' \mathbf{D} \\
\text{Right Hand Side (RHS)} &= (\boldsymbol{\Sigma}_{xz}' \mathbf{W} \mathbf{C} \cdot \mathbf{C}^{-1} \boldsymbol{\Sigma}_{xz}) (\boldsymbol{\Sigma}_{xz}' \mathbf{W} \mathbf{C} \cdot \mathbf{C}' \mathbf{W} \boldsymbol{\Sigma}_{xz})^{-1} (\boldsymbol{\Sigma}_{xz}' \mathbf{W} \mathbf{C} \cdot \mathbf{C}^{-1} \boldsymbol{\Sigma}_{xz})' \\
&= (\mathbf{G}' \mathbf{D})' (\mathbf{G}' \mathbf{G})^{-1} (\mathbf{G}' \mathbf{D}) \\
&= \mathbf{D}' \mathbf{G} (\mathbf{G}' \mathbf{G})^{-1} \mathbf{G}' \mathbf{D} \\
&= \mathbf{D}' \mathbf{P}_{\mathbf{G}} \mathbf{D}
\end{aligned}$$
where $\mathbf{P}_{\mathbf{G}} = \mathbf{G}(\mathbf{G}'\mathbf{G})^{-1}\mathbf{G}'$ is the symmetric and idempotent **projection matrix** onto the column space of $\mathbf{G}$.

**3. Final Comparison:**
$$\begin{aligned}
\text{LHS} - \text{RHS} &= \mathbf{D}' \mathbf{D} - \mathbf{D}' \mathbf{P}_{\mathbf{G}} \mathbf{D} \\
&= \mathbf{D}' (\mathbf{I} - \mathbf{P}_{\mathbf{G}}) \mathbf{D} \\
&= \mathbf{D}' \mathbf{M}_{\mathbf{G}} \mathbf{D} \geq 0
\end{aligned}$$
Since $\mathbf{M}_{\mathbf{G}} = \mathbf{I} - \mathbf{P}_{\mathbf{G}}$ is a positive semidefinite **residual maker matrix**, the inequality holds.
**Conclusion**: $\mathbf{W} = \mathbf{S}^{-1}$ is the optimal weighting matrix.

## Efficient GMM Weighting Matrix Summary

When the optimal weighting matrix $\widehat{\mathbf{W}} = \widehat{\mathbf{S}}^{-1}$ is employed, the GMM estimator and its properties simplify significantly.

**1. The Efficient GMM Estimator**
The estimator is defined by:
$$
\hat{\boldsymbol{\delta}}(\widehat{\mathbf{S}}^{-1}) = (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{s}_{xy} \tag{3.5.12}
$$

**2. Asymptotic Variance and Consistency**
The theoretical asymptotic variance and its consistent sample estimator are:
$$\begin{aligned}
\widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{S}}^{-1})) &= (\boldsymbol{\Sigma}_{xz}' \mathbf{S}^{-1} \boldsymbol{\Sigma}_{xz})^{-1}\end{aligned} \tag{3.5.13}

$$
$$

\begin{aligned}
\widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{S}}^{-1})) &= (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} 
\end{aligned}\tag{3.5.14}$$

**Derivation of (3.5.14)**:
Starting from the general consistent estimator of the asymptotic variance:
$$\begin{aligned}
\widehat{\operatorname{Avar}} &= (\mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{W}} \widehat{\mathbf{S}} \widehat{\mathbf{W}} \mathbf{S}_{xz} (\mathbf{S}_{xz}' \widehat{\mathbf{W}} \mathbf{S}_{xz})^{-1} \\
\text{Substitute } \widehat{\mathbf{W}} = \widehat{\mathbf{S}}^{-1}: \\
&= (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \widehat{\mathbf{S}} \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz} (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \\

&= (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz}) (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \\
&= (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1}
\end{aligned}$$

**3. Statistical Testing**
The $t$-test for a single coefficient $H_0: \delta_\ell = \bar{\delta}_\ell$ simplifies to:
$$
t_\ell = \frac{\hat{\delta}_\ell(\widehat{\mathbf{S}}^{-1}) - \bar{\delta}_\ell}{SE_\ell^*}, \quad SE_\ell^* = \sqrt{\frac{1}{n} [(\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1}]_{\ell\ell}} \tag{3.5.15}
$$

For the Wald test of $H_0: \mathbf{a}(\boldsymbol{\delta}) = \mathbf{0}$, the statistic becomes:
$$
W = n \cdot \mathbf{a}(\hat{\boldsymbol{\delta}})' \{ \mathbf{A}(\hat{\boldsymbol{\delta}}) (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{A}(\hat{\boldsymbol{\delta}})' \}^{-1} \mathbf{a}(\hat{\boldsymbol{\delta}}) \tag{3.5.16}
$$

**Derivation of (3.5.16)**:
Using the general Wald statistic formula and the simplified variance:
$$\begin{aligned}
W &= n \cdot \mathbf{a}(\hat{\boldsymbol{\delta}})' \{ \mathbf{A}(\hat{\boldsymbol{\delta}}) [\widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}})] \mathbf{A}(\hat{\boldsymbol{\delta}})' \}^{-1} \mathbf{a}(\hat{\boldsymbol{\delta}}) \\
\text{Plug in } \widehat{\operatorname{Avar}} = (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1}: \\
&= n \cdot \mathbf{a}(\hat{\boldsymbol{\delta}})' \{ \mathbf{A}(\hat{\boldsymbol{\delta}}) (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{A}(\hat{\boldsymbol{\delta}})' \}^{-1} \mathbf{a}(\hat{\boldsymbol{\delta}})
\end{aligned}$$


**Two-Step Efficient GMM Procedure**

在实际操作中，由于最优权重矩阵 $\mathbf{S}^{-1}$ 依赖于未知的参数 $\boldsymbol{\delta}$，因此无法直接计算。通常采用以下两步法来实现渐近有效性：


1.  **Step 1**: Choose $\widehat{\mathbf{W}}$ that converges in probability to a symmetric and positive definite matrix, and **minimize $J(\tilde{\boldsymbol{\delta}}, \widehat{\mathbf{W}})$** over $\tilde{\boldsymbol{\delta}}$ to obtain $\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}})$. Use this to calculate the residual $\hat{\varepsilon}_i \equiv y_i - \mathbf{z}_i' \hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}})$ and obtain a consistent estimator $\widehat{\mathbf{S}}$ of $\mathbf{S}$ by (3.5.10).
    - **中文解释**：首先选择一个对称正定的初始权重矩阵 $\widehat{\mathbf{W}}$（通常选 $\mathbf{S}_{xx}^{-1}$），通过**最小化目标函数 $J$** 得到初步的一致估计量。利用该估计量计算残差，进而根据 (3.5.10) 构造出 $\mathbf{S}$ 的一致估计矩阵 $\widehat{\mathbf{S}}$。

    - **推导 (Derivation)**：
      **1. 目标函数 (Objective Function)**：
      给定初始权重 $\widehat{\mathbf{W}}$，最小化样本矩的加权二次型：
      $$
      \min_{\tilde{\boldsymbol{\delta}}} J(\tilde{\boldsymbol{\delta}}, \widehat{\mathbf{W}}) = n \cdot (\mathbf{s}_{xy} - \mathbf{S}_{xz} \tilde{\boldsymbol{\delta}})' \widehat{\mathbf{W}} (\mathbf{s}_{xy} - \mathbf{S}_{xz} \tilde{\boldsymbol{\delta}})
      $$
      **2. 一阶条件 (FOC)**：
      对 $\tilde{\boldsymbol{\delta}}$ 求导并令其为 $\mathbf{0}$：
      $$
      \frac{\partial J}{\partial \tilde{\boldsymbol{\delta}}} = -2n \mathbf{S}_{xz}' \widehat{\mathbf{W}} (\mathbf{s}_{xy} - \mathbf{S}_{xz} \hat{\boldsymbol{\delta}}_1) = \mathbf{0}
      $$
      **3. 解析解 (Analytic Solution)**：
      若选择 $\widehat{\mathbf{W}} = \mathbf{S}_{xx}^{-1} = (\frac{1}{n} \mathbf{X}' \mathbf{X})^{-1}$，解上述方程组：
      $$\begin{aligned}
      \mathbf{S}_{xz}' \mathbf{S}_{xx}^{-1} \mathbf{S}_{xz} \hat{\boldsymbol{\delta}}_1 &= \mathbf{S}_{xz}' \mathbf{S}_{xx}^{-1} \mathbf{s}_{xy} \\
      \hat{\boldsymbol{\delta}}_1 &= (\mathbf{S}_{xz}' \mathbf{S}_{xx}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \mathbf{S}_{xx}^{-1} \mathbf{s}_{xy} \\
      &= \hat{\boldsymbol{\delta}}_{2SLS}
      \end{aligned}$$

2.  **Step 2**: **Minimize $J(\tilde{\boldsymbol{\delta}}, \widehat{\mathbf{S}}^{-1})$** over $\tilde{\boldsymbol{\delta}}$. The estimator is the efficient GMM estimator.
    - **中文解释**：将第一步得到的 $\widehat{\mathbf{S}}^{-1}$ 作为权重矩阵代入目标函数，再次进行**最小化 (Minimize)**。此时得到的 $\hat{\boldsymbol{\delta}}$ 即为有效 GMM 估计量。
    - **推导 (Derivation)**：
      **1. 目标函数 (Objective Function)**：
      使用最优权重矩阵 $\widehat{\mathbf{S}}^{-1}$：
      $$
      \min_{\tilde{\boldsymbol{\delta}}} J(\tilde{\boldsymbol{\delta}}, \widehat{\mathbf{S}}^{-1}) = n \cdot (\mathbf{s}_{xy} - \mathbf{S}_{xz} \tilde{\boldsymbol{\delta}})' \widehat{\mathbf{S}}^{-1} (\mathbf{s}_{xy} - \mathbf{S}_{xz} \tilde{\boldsymbol{\delta}})
      $$
      **2. 一阶条件 (FOC)**：
      $$
      \frac{\partial J}{\partial \tilde{\boldsymbol{\delta}}} = -2n \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} (\mathbf{s}_{xy} - \mathbf{S}_{xz} \hat{\boldsymbol{\delta}}_{GMM}) = \mathbf{0}
      $$
      **3. 解析解 (Analytic Solution)**：
      $$
      \hat{\boldsymbol{\delta}}_{GMM} = (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{s}_{xy}
      $$
      其对应的样本渐近方差估计量简化为：
      $$
      \widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}}_{GMM}) = (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1}
      $$

## Initial Weighting Matrix Choice

> [!question] 
> What are the typical choices of $\widehat{\mathbf{W}}$ in Step 1 (how about $\mathbf{S}_{xx}^{-1}$)?

$\mathbf{S}_{xx}^{-1} = (\frac{1}{n} \mathbf{X}' \mathbf{X})^{-1}$ 是 Step 1 的典型选择，原因如下：
- **与 2SLS 的联系**：如果我们在第一步选择 $\widehat{\mathbf{W}} = \mathbf{S}_{xx}^{-1}$，则第一步的 GMM 估计量在数值上等价于 **2SLS** 估计量。
- **同方差下的有效性**：在**条件同方差**（Conditional Homoskedasticity）假设下，$\mathbf{S} = \sigma^2 E(\mathbf{x}_i \mathbf{x}_i')$。由于 GMM 估计量对权重矩阵的常数倍缩放具有不变性，此时 $\mathbf{S}_{xx}^{-1}$ 已经是最优权重矩阵。因此，在同方差下，2SLS 就是有效 GMM。
- **稳健性**：它能提供稳定的一致估计量 $\hat{\boldsymbol{\delta}}_1$，为第二步构造异方差稳健的 $\widehat{\mathbf{S}}$ 提供基础。

**Asymptotic Power and Optimality**

To test $H_0: \delta_\ell = \bar{\delta}_\ell$, the $t$-ratio is written as
$$
t_\ell \equiv \frac{\sqrt{n}(\hat{\delta}_\ell(\widehat{\mathbf{W}}) - \bar{\delta}_\ell)}{\sqrt{(\widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}})))_{\ell\ell}}}
$$

Consider a sequence of local alternatives subject to **Pitman drift**:
$$
H_a: \delta_\ell^{(n)} = \bar{\delta}_\ell + \frac{\gamma}{\sqrt{n}}
$$
for some $\gamma \neq 0$.

Under $H_a$, we write
$$
t_\ell = \frac{\sqrt{n}(\hat{\delta}_\ell(\widehat{\mathbf{W}}) - \delta_\ell^{(n)})}{\sqrt{(\widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}})))_{\ell\ell}}} + \frac{\gamma}{\sqrt{(\widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}})))_{\ell\ell}}} \xrightarrow{d} N(\mu, 1)
$$
where
$$
\mu \equiv \frac{\gamma}{\sqrt{(\operatorname{Avar}(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{W}})))_{\ell\ell}}}
$$

> [!tip] Intuition for Optimality
> The power of the $t$-test depends on the non-centrality parameter $\mu$. For a fixed $\gamma$, maximizing the power is equivalent to maximizing $|\mu|$, which in turn requires **minimizing the asymptotic variance** $(\operatorname{Avar}(\hat{\boldsymbol{\delta}}))_{\ell\ell}$. This provides the statistical justification for seeking the **Efficient GMM Estimator**: it not only provides the most precise point estimates but also the most powerful hypothesis tests.

**Overidentification and J Tests**

If the model is **exactly identified** ($K = L$), the `number of moment conditions` equals the `number of parameters`. In this case, it is possible to choose $\hat{\boldsymbol{\delta}}$ such that the sample moments are exactly zero:
$$
\mathbf{g}_n(\hat{\boldsymbol{\delta}}) = \mathbf{s}_{xy} - \mathbf{S}_{xz} \hat{\boldsymbol{\delta}} = \mathbf{0}
$$

> [!info] 数学直觉：类比原则 (Analogy Principle)
:::{admonition} 1. 模型设定 (Model Setting)
:
$$
y_i = \mathbf{z}_i' \boldsymbol{\delta} + \varepsilon_i
$$
- $\mathbf{z}_i$ ($L \times 1$): 解释变量 (Regressors)，可能内生。
- $\mathbf{x}_i$ ($K \times 1$): 工具变量 (Instruments)，必须满足正交性。

**2. 总体要求 (Truth)**: 
$$
E[\mathbf{x}_i \varepsilon_i] = E[\mathbf{x}_i (y_i - \mathbf{z}_i' \boldsymbol{\delta})] = \mathbf{0} \quad \text{(K 个矩条件)}
$$

**3. 样本类比 (Sample)**: 
$$
\mathbf{g}_n(\hat{\boldsymbol{\delta}}) = \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i (y_i - \mathbf{z}_i' \hat{\boldsymbol{\delta}}) = \mathbf{0}
$$

**4. 为何能为 0 ($K=L$)**: 
- 未知数 ($\boldsymbol{\delta}$ 维度 $L$) $=$ 方程数 ($K$)。
- 定解方程组 $\mathbf{S}_{xz} \hat{\boldsymbol{\delta}} = \mathbf{s}_{xy}$ 存在唯一解 $\hat{\boldsymbol{\delta}} = \mathbf{S}_{xz}^{-1} \mathbf{s}_{xy}$，使样本矩**精确为零**。

:::

Consequently, the minimized distance $J(\hat{\boldsymbol{\delta}}, \widehat{\mathbf{W}}) = n \cdot \mathbf{g}_n(\hat{\boldsymbol{\delta}})' \widehat{\mathbf{W}} \mathbf{g}_n(\hat{\boldsymbol{\delta}})$ is zero.

If the model is **overidentified** ($K > L$), we have more moment conditions than parameters. We can then test the validity of these overidentifying restrictions.

:::{admonition} Proposition: Proposition 3.6 (Hansen's J-test / Sargan-Hansen test (Hansen, 1982))
Suppose there is available a consistent estimator, $\widehat{\mathbf{S}}$, of $\mathbf{S} (= E(\mathbf{g}_i \mathbf{g}_i'))$. Under Assumptions 3.1–3.5, if the weighting matrix is chosen optimally such that $\operatorname{plim} \widehat{\mathbf{W}} = \mathbf{S}^{-1}$, the minimized distance is asymptotically chi-squared:
$$
J(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{S}}^{-1}), \widehat{\mathbf{S}}^{-1}) = n \cdot \mathbf{g}_n(\hat{\boldsymbol{\delta}})' \widehat{\mathbf{S}}^{-1} \mathbf{g}_n(\hat{\boldsymbol{\delta}}) \xrightarrow{d} \chi^2(K - L)
$$

:::

## Overidentification Test Derivation
We aim to show the asymptotic distribution of the minimized $J$-statistic.

**1. Expression for the Sample Moments at the Optimum**
Recall the GMM estimator with optimal weighting: $\hat{\boldsymbol{\delta}} = (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{s}_{xy}$.
Substituting $\mathbf{s}_{xy} = \mathbf{S}_{xz} \boldsymbol{\delta} + \mathbf{g}_n(\boldsymbol{\delta})$ into the sample moment formula $\mathbf{g}_n(\hat{\boldsymbol{\delta}}) = \mathbf{s}_{xy} - \mathbf{S}_{xz} \hat{\boldsymbol{\delta}}$:
$$\begin{aligned}
\mathbf{g}_n(\hat{\boldsymbol{\delta}}) &= \mathbf{s}_{xy} - \mathbf{S}_{xz} \left[ (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{s}_{xy} \right] \\
&= \left[ \mathbf{I}_K - \mathbf{S}_{xz} (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \right] \mathbf{s}_{xy} \\
&= \left[ \mathbf{I}_K - \mathbf{S}_{xz} (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \right] (\mathbf{S}_{xz} \boldsymbol{\delta} + \mathbf{g}_n(\boldsymbol{\delta})) \\
&= \mathbf{S}_{xz} \boldsymbol{\delta} - \mathbf{S}_{xz} (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz}) \boldsymbol{\delta} + \left[ \mathbf{I}_K - \mathbf{S}_{xz} (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \right] \mathbf{g}_n(\boldsymbol{\delta}) \\
&= \mathbf{S}_{xz} \boldsymbol{\delta} - \mathbf{S}_{xz} \boldsymbol{\delta} + \left[ \mathbf{I}_K - \mathbf{S}_{xz} (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \right] \mathbf{g}_n(\boldsymbol{\delta}) \\
&= \left[ \mathbf{I}_K - \mathbf{S}_{xz} (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \right] \mathbf{g}_n(\boldsymbol{\delta})
\end{aligned}$$

**2. Transformation into Standard Normal Space (标准化与白化)**
Define $\mathbf{z}_n \equiv \widehat{\mathbf{S}}^{-1/2} \sqrt{n} \mathbf{g}_n(\boldsymbol{\delta})$. The convergence to $N(\mathbf{0}, \mathbf{I}_K)$ involves two steps:

1.  **CLT (中心极限定理)**: 根据 Assumption 3.5，矩条件的样本均值收敛于其总体方差 $\mathbf{S} = E[\mathbf{g}_i \mathbf{g}_i']$:
    $$
    \sqrt{n} \mathbf{g}_n(\boldsymbol{\delta}) \xrightarrow{d} N(\mathbf{0}, \mathbf{S})
    $$
2.  **Standardization (标准化)**: 利用 $\widehat{\mathbf{S}} \xrightarrow{p} \mathbf{S}$ 和 Slutsky 定理，左乘 $\widehat{\mathbf{S}}^{-1/2}$ 将协方差矩阵“单位化”:
    $$\begin{aligned}
    \mathbf{z}_n = \widehat{\mathbf{S}}^{-1/2} \sqrt{n} \mathbf{g}_n(\boldsymbol{\delta}) &\xrightarrow{d} \mathbf{S}^{-1/2} \cdot N(\mathbf{0}, \mathbf{S}) \\
    &\sim N(\mathbf{0}, \mathbf{S}^{-1/2} \mathbf{S} \mathbf{S}^{-1/2}) = N(\mathbf{0}, \mathbf{I}_K)
    \end{aligned}$$

Multiplying the expression for $\sqrt{n} \mathbf{g}_n(\hat{\boldsymbol{\delta}})$ by $\widehat{\mathbf{S}}^{-1/2}$:
$$\begin{aligned}
\widehat{\mathbf{S}}^{-1/2} \sqrt{n} \mathbf{g}_n(\hat{\boldsymbol{\delta}}) &= \widehat{\mathbf{S}}^{-1/2} \left[ \mathbf{I}_K - \mathbf{S}_{xz} (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \right] \sqrt{n} \mathbf{g}_n(\boldsymbol{\delta}) \\
&= \left[ \mathbf{I}_K - \widehat{\mathbf{S}}^{-1/2} \mathbf{S}_{xz} (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1/2} \right] \widehat{\mathbf{S}}^{-1/2} \sqrt{n} \mathbf{g}_n(\boldsymbol{\delta}) \\
&= \left[ \mathbf{I}_K - \mathbf{P}_{\mathbf{A}} \right] \mathbf{z}_n
\end{aligned}$$
where $\mathbf{A} \equiv \widehat{\mathbf{S}}^{-1/2} \mathbf{S}_{xz}$ and $\mathbf{P}_{\mathbf{A}} = \mathbf{A}(\mathbf{A}'\mathbf{A})^{-1}\mathbf{A}'$ is the symmetric and idempotent projection matrix onto the space spanned by the columns of $\mathbf{A}$.

**3. Quadratic Form and Distribution**
The $J$-statistic is:
$$\begin{aligned}
J &= n \cdot \mathbf{g}_n(\hat{\boldsymbol{\delta}})' \widehat{\mathbf{S}}^{-1} \mathbf{g}_n(\hat{\boldsymbol{\delta}}) \\
&= \left( \widehat{\mathbf{S}}^{-1/2} \sqrt{n} \mathbf{g}_n(\hat{\boldsymbol{\delta}}) \right)' \left( \widehat{\mathbf{S}}^{-1/2} \sqrt{n} \mathbf{g}_n(\hat{\boldsymbol{\delta}}) \right) \\
&= \mathbf{z}_n' (\mathbf{I}_K - \mathbf{P}_{\mathbf{A}})' (\mathbf{I}_K - \mathbf{P}_{\mathbf{A}}) \mathbf{z}_n \\
&= \mathbf{z}_n' (\mathbf{I}_K - \mathbf{P}_{\mathbf{A}}) \mathbf{z}_n \quad (\because \mathbf{I} - \mathbf{P} \text{ is idempotent}) \\
&\xrightarrow{d} \chi^2(\text{rank}(\mathbf{I}_K - \mathbf{P}_{\mathbf{A}})) \\
&= \chi^2(K - L)
\end{aligned}$$

## J-Test Projection Derivation
**1. 核心定义与算子分解**
首先，理解核心分解式的来源。从模型设定 $y_i = \mathbf{z}_i' \boldsymbol{\delta} + \varepsilon_i$ 出发：
- 两边同时左乘工具变量 $\mathbf{x}_i$：
$$
\mathbf{x}_i y_i = \mathbf{x}_i \mathbf{z}_i' \boldsymbol{\delta} + \mathbf{x}_i \varepsilon_i
$$
- 对所有样本求均值（即求样本矩）：
$$
\frac{1}{n} \sum_{i=1}^n \mathbf{x}_i y_i = \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \mathbf{z}_i' \right) \boldsymbol{\delta} + \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \varepsilon_i
$$
- 代入符号定义，得到**基本分解式**：
$$
\mathbf{s}_{xy} = \mathbf{S}_{xz} \boldsymbol{\delta} + \bar{\mathbf{g}} \quad \text{其中 } \bar{\mathbf{g}} \equiv \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \varepsilon_i
$$
> [!info] 什么是 $\bar{\mathbf{g}}$？
> - **定义**：$\bar{\mathbf{g}}$ 是在**真实的**参数 $\boldsymbol{\delta}$ 下计算得到的样本平均矩（Sample average of orthogonality conditions）。
> - **直觉**：由于总体要求 $E[\mathbf{x}_i \varepsilon_i] = \mathbf{0}$，根据大数定律，当 $n \to \infty$ 时，$\bar{\mathbf{g}} \xrightarrow{p} \mathbf{0}$。
> - **作用**：在有限样本中，$\bar{\mathbf{g}}$ 代表了工具变量正交性的“随机抽样波动”。GMM 的本质就是通过投影矩阵 $\hat{\mathbf{B}}$ 将这种波动从 $\mathbf{g}_n(\hat{\boldsymbol{\delta}})$ 中剥离出来。


:::{admonition} Definition (样本矩定义 (Sample Moment Definition))
对于任意参数候选值 $\tilde{\boldsymbol{\delta}}$，样本矩定义为工具变量与构造扰动项的样本平均：
$$
\mathbf{g}_n(\tilde{\boldsymbol{\delta}}) = \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i (y_i - \mathbf{z}_i' \tilde{\boldsymbol{\delta}}) = \mathbf{s}_{xy} - \mathbf{S}_{xz} \tilde{\boldsymbol{\delta}}
$$
- **$\mathbf{g}_n(\boldsymbol{\delta})$**：在**真实参数**下，样本矩 $\mathbf{g}_n(\boldsymbol{\delta}) = \bar{\mathbf{g}}$。
- **$\mathbf{g}_n(\hat{\boldsymbol{\delta}})$**：在**估计参数**下，样本矩是残差的投影，即我们要分析的统计量核心。

:::

其构造逻辑源于将估计量 $\hat{\boldsymbol{\delta}}$ 代回上述样本矩定义式中：
$$\begin{aligned}
\mathbf{g}_n(\hat{\boldsymbol{\delta}}) &= \mathbf{s}_{xy} - \mathbf{S}_{xz} \hat{\boldsymbol{\delta}} \\
&= \mathbf{s}_{xy} - \mathbf{S}_{xz} \left[ (\mathbf{S}_{xz}^T \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}^T \widehat{\mathbf{S}}^{-1} \mathbf{s}_{xy} \right] \\
&= \underbrace{\left[ \mathbf{I}_K - \mathbf{S}_{xz} (\mathbf{S}_{xz}^T \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}^T \widehat{\mathbf{S}}^{-1} \right]}_{\hat{\mathbf{B}}} \mathbf{s}_{xy}
\end{aligned}$$
利用分解 $\mathbf{s}_{xy} = \mathbf{S}_{xz} \boldsymbol{\delta} + \bar{\mathbf{g}}$，代入后得到：
$$
\sqrt{n} \mathbf{g}_n(\hat{\boldsymbol{\delta}}) = \hat{\mathbf{B}} (\mathbf{S}_{xz} \sqrt{n} \boldsymbol{\delta} + \sqrt{n} \bar{\mathbf{g}})
$$

**关键证明：为什么 $\hat{\mathbf{B}} \mathbf{S}_{xz} = \mathbf{0}$？**
根据 $\hat{\mathbf{B}}$ 的定义，直接进行矩阵乘法：
$$\begin{aligned}
\hat{\mathbf{B}} \mathbf{S}_{xz} &= \left[ \mathbf{I}_K - \mathbf{S}_{xz} (\mathbf{S}_{xz}^T \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}^T \widehat{\mathbf{S}}^{-1} \right] \mathbf{S}_{xz} \\
&= \mathbf{S}_{xz} - \mathbf{S}_{xz} \underbrace{(\mathbf{S}_{xz}^T \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} (\mathbf{S}_{xz}^T \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})}_{\mathbf{I}_L} \\
&= \mathbf{S}_{xz} - \mathbf{S}_{xz} \cdot \mathbf{I}_L \\
&= \mathbf{0}
\end{aligned}$$
由于 $\hat{\mathbf{B}}$ 成功“消除”了包含结构参数 $\boldsymbol{\delta}$ 的项，最小化后的样本矩仅取决于随机波动的投影：
$$
\sqrt{n} \mathbf{g}_n(\hat{\boldsymbol{\delta}}) = \mathbf{0} \cdot \sqrt{n} \boldsymbol{\delta} + \hat{\mathbf{B}} \sqrt{n} \bar{\mathbf{g}} = \hat{\mathbf{B}} \sqrt{n} \bar{\mathbf{g}}
$$

此时 $J$ 统计量可表述为：
$$
J = (\sqrt{n} \mathbf{g}_n(\hat{\boldsymbol{\delta}}))^T \widehat{\mathbf{S}}^{-1} (\sqrt{n} \mathbf{g}_n(\hat{\boldsymbol{\delta}})) = (\sqrt{n} \bar{\mathbf{g}})^T \hat{\mathbf{B}}^T \widehat{\mathbf{S}}^{-1} \hat{\mathbf{B}} \sqrt{n} \bar{\mathbf{g}}
$$

**2. 引入权重矩阵分解**
对一致估计矩阵 $\widehat{\mathbf{S}}^{-1}$ 进行分解，定义 $C$ 矩阵：
$$
\widehat{\mathbf{S}}^{-1} = \mathbf{C}^T \mathbf{C}, \quad \mathbf{C} \in \mathbb{R}^{K \times K}
$$
定义变换后的设计矩阵 $\mathbf{A}$：
$$
\mathbf{A} = \mathbf{C} \mathbf{S}_{xz} \in \mathbb{R}^{K \times L}
$$
此时，原有的中间项可表示为：
$$
\mathbf{S}_{xz}^T \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz} = \mathbf{S}_{xz}^T \mathbf{C}^T \mathbf{C} \mathbf{S}_{xz} = \mathbf{A}^T \mathbf{A}
$$

**3. 连续推导过程 (Continuous Derivation)**
将上述定义代入 $J$ 统计量中：
$$\begin{aligned}
J &= (\sqrt{n} \bar{\mathbf{g}})^T \hat{\mathbf{B}}^T \widehat{\mathbf{S}}^{-1} \hat{\mathbf{B}} \sqrt{n} \bar{\mathbf{g}} \\
&= (\mathbf{C} \sqrt{n} \bar{\mathbf{g}})^T (\mathbf{C}^T)^{-1} \hat{\mathbf{B}}^T (\mathbf{C}^T \mathbf{C}) \hat{\mathbf{B}} \mathbf{C}^{-1} (\mathbf{C} \sqrt{n} \bar{\mathbf{g}})
\end{aligned}$$

中间项 $(\mathbf{C}^T)^{-1} \hat{\mathbf{B}}^T \mathbf{C}^T \mathbf{C} \hat{\mathbf{B}} \mathbf{C}^{-1}$ 的展开与化简：
$$\begin{aligned}
& (\mathbf{C}^T)^{-1} \left[ \mathbf{I}_K - \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz} (\mathbf{A}^T \mathbf{A})^{-1} \mathbf{S}_{xz}^T \right] \mathbf{C}^T \cdot \mathbf{C} \left[ \mathbf{I}_K - \mathbf{S}_{xz} (\mathbf{A}^T \mathbf{A})^{-1} \mathbf{S}_{xz}^T \widehat{\mathbf{S}}^{-1} \right] \mathbf{C}^{-1} \\
&= \left[ \mathbf{I}_K - \mathbf{C} \mathbf{S}_{xz} (\mathbf{A}^T \mathbf{A})^{-1} \mathbf{S}_{xz}^T \mathbf{C}^T \right] \cdot \left[ \mathbf{I}_K - \mathbf{C} \mathbf{S}_{xz} (\mathbf{A}^T \mathbf{A})^{-1} \mathbf{S}_{xz}^T \mathbf{C}^T \right] \\
&= \left[ \mathbf{I}_K - \mathbf{A} (\mathbf{A}^T \mathbf{A})^{-1} \mathbf{A}^T \right] \cdot \left[ \mathbf{I}_K - \mathbf{A} (\mathbf{A}^T \mathbf{A})^{-1} \mathbf{A}^T \right] \\
&= \mathbf{I}_K - \mathbf{A} (\mathbf{A}^T \mathbf{A})^{-1} \mathbf{A}^T \\
&= \mathbf{I}_K - \mathbf{P}_{\mathbf{A}}
\end{aligned}$$

**4. 结论与分布证明 (Distribution Proof)**
定义标准正态向量 $\mathbf{z}_n = \mathbf{C} \sqrt{n} \bar{\mathbf{g}} \xrightarrow{d} N(\mathbf{0}, \mathbf{I}_K)$。

:::{admonition} Proposition: $\mathbf{z}_n$ 是标准正态
1. **CLT**: $\sqrt{n} \bar{\mathbf{g}} \xrightarrow{d} N(\mathbf{0}, \mathbf{S})$。
2. **方差变换**: $Var(\mathbf{z}_n) = \mathbf{C} \mathbf{S} \mathbf{C}^T$。
3. **对消证明**: 由于 $\mathbf{S}^{-1} = \mathbf{C}^T \mathbf{C}$，则 $\mathbf{S} = \mathbf{C}^{-1} (\mathbf{C}^T)^{-1}$。
代入得：$Var(\mathbf{z}_n) = \mathbf{C} [\mathbf{C}^{-1} (\mathbf{C}^T)^{-1}] \mathbf{C}^T = \mathbf{I}_K$。
4. **Whitening**: 
线性变换 $\mathbf{C}$ 实现了**白化 (Whitening)**：它将原本相互相关且方差不一的波动 $\bar{\mathbf{g}}$，转化为了互不相关且方差恒为 1 的“白噪声”向量 $\mathbf{z}_n$。数学上要求白化矩阵满足 $\mathbf{C}^T \mathbf{C} = \mathbf{S}^{-1}$。

:::

## J-Test Consistency and Failure Modes
:::{admonition} Proposition: 当 $E[\mathbf{g}_i] = \boldsymbol{\mu} \neq \mathbf{0}$ 时
1. **样本矩分解**:
$$\begin{aligned}
\sqrt{n} \mathbf{g}_n(\hat{\boldsymbol{\delta}}) &= \hat{\mathbf{B}} \sqrt{n} \bar{\mathbf{g}} \\
&= \hat{\mathbf{B}} \sqrt{n} (\bar{\mathbf{g}} - \boldsymbol{\mu} + \boldsymbol{\mu}) \\
&= \underbrace{\hat{\mathbf{B}} \sqrt{n} (\bar{\mathbf{g}} - \boldsymbol{\mu})}_{\xrightarrow{d} N} + \sqrt{n} \underbrace{\hat{\mathbf{B}} \boldsymbol{\mu}}_{\text{Power Source}}
\end{aligned}$$

2. **失效条件 (Consistency Failure)**:
若 $\boldsymbol{\mu} \in \text{span}(\mathbf{S}_{xz})$，根据 $\hat{\mathbf{B}}$ 的投影性质 $\hat{\mathbf{B}} \mathbf{S}_{xz} = \mathbf{0}$：
$$
\hat{\mathbf{B}} \boldsymbol{\mu} = \mathbf{0} \implies J \not\to \infty
$$
结果：检验无法拒绝错误的 $H_0$，对该方向的内生性**不一致 (Inconsistent)**。



:::

## Subset Tests of Orthogonality Conditions
Suppose we can divide the $K$ instruments into two groups: the vector $\mathbf{x}_{i1}$ of $K_1$ variables that are known to satisfy the orthogonality conditions, and the vector $\mathbf{x}_{i2}$ of the remaining $K - K_1$ variables that are suspect.

$$
\mathbf{x}_i = \begin{bmatrix} \mathbf{x}_{i1} \\ \mathbf{x}_{i2} \end{bmatrix} \begin{matrix} \} & K_1 \text{ rows,} \\ \} & K - K_1 \text{ rows} \end{matrix} \tag{3.6.3}
$$

The part of the model we wish to test is
$$
E(\mathbf{x}_{i2} \cdot \varepsilon_i) = \mathbf{0} \tag{3.6.4}
$$

**How to test?** Compare the $J$ statistics with/without the suspect ($\mathbf{x}_{i2}$).

当部分工具变量的可信度存疑时，可以进行子集检验。

**1. 工具变量与矩条件分区 (Partitioning)**
将 $K$ 个工具变量和对应的样本矩分为两组：
$$
\underset{(K \times 1)}{\mathbf{g}_n(\tilde{\boldsymbol{\delta}})} \equiv \begin{bmatrix} \underset{(K_1 \times 1)}{\mathbf{g}_{1n}(\tilde{\boldsymbol{\delta}})} \\ \underset{((K-K_1) \times 1)}{\mathbf{g}_{2n}(\tilde{\boldsymbol{\delta}})} \end{bmatrix} , \quad \underset{(K \times K)}{\mathbf{S}} \equiv \begin{bmatrix} \mathbf{S}_{11} & \mathbf{S}_{12} \\ \mathbf{S}_{21} & \mathbf{S}_{22} \end{bmatrix} \tag{3.6.5}
$$
其中：
$$
\mathbf{S}_{11} = E(\varepsilon_i^2 \mathbf{x}_{i1} \mathbf{x}_{i1}'), \mathbf{S}_{12} = E(\varepsilon_i^2 \mathbf{x}_{i1} \mathbf{x}_{i2}'), \mathbf{S}_{21} = E(\varepsilon_i^2 \mathbf{x}_{i2} \mathbf{x}_{i1}'), \mathbf{S}_{22} = E(\varepsilon_i^2 \mathbf{x}_{i2} \mathbf{x}_{i2}')
$$
特别地，$\mathbf{g}_{1n}(\tilde{\boldsymbol{\delta}})$ 可以写为：
$$
\mathbf{g}_{1n}(\tilde{\boldsymbol{\delta}}) = \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{i1} \cdot (y_i - \mathbf{z}_i' \tilde{\boldsymbol{\delta}}) \equiv \mathbf{s}_{x_1 y} - \mathbf{S}_{x_1 z} \tilde{\boldsymbol{\delta}}
$$
其中：
$$
\mathbf{s}_{x_1 y} \equiv \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{i1} y_i, \quad \mathbf{S}_{x_1 z} \equiv \frac{1}{n} \sum_{i=1}^n \mathbf{x}_{i1} \mathbf{z}_i' \tag{3.6.6}
$$

**2. 定义两个 $J$ 统计量**
- **全集 $J$ 统计量 (Full set)**：使用所有 $K$ 个工具变量得到的最小化距离。
  $$\begin{aligned}
  \hat{\boldsymbol{\delta}} &= (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{s}_{xy} \\
  J &= n \cdot \mathbf{g}_n(\hat{\boldsymbol{\delta}})' \widehat{\mathbf{S}}^{-1} \mathbf{g}_n(\hat{\boldsymbol{\delta}}) 
  \end{aligned}\tag{3.6.8}$$
- **子集 $J_1$ 统计量 (Subset)**：仅使用 $K_1$ 个“安全”工具变量得到的最小化距离。
  $$\begin{aligned}
  \bar{\boldsymbol{\delta}} &= [\mathbf{S}_{x_1z}' (\widehat{\mathbf{S}}_{11})^{-1} \mathbf{S}_{x_1z}]^{-1} \mathbf{S}_{x_1z}' (\widehat{\mathbf{S}}_{11})^{-1} \mathbf{s}_{x_1y} \\
  J_1 &= n \cdot \mathbf{g}_{1n}(\bar{\boldsymbol{\delta}})' (\widehat{\mathbf{S}}_{11})^{-1} \mathbf{g}_{1n}(\bar{\boldsymbol{\delta}}) 
  \end{aligned}\tag{3.6.10}$$

**3. C-检验统计量 (The C-test / Difference-in-Sargan)**

:::{admonition} Proposition: Proposition 3.7 (Testing a subset of orthogonality conditions)
Suppose Assumptions 3.1–3.5 hold. Let $\mathbf{x}_{i1}$ be a subvector of $\mathbf{x}_i$, and strengthen Assumption 3.4 by requiring that the rank condition for identification is satisfied for $\mathbf{x}_{i1}$ (so $E(\mathbf{x}_{i1} \mathbf{z}_i')$ is of full column rank). Then, for any consistent estimators $\widehat{\mathbf{S}}$ of $\mathbf{S}$ and $\widehat{\mathbf{S}}_{11}$ of $\mathbf{S}_{11}$,
$$
C \equiv J - J_1 \xrightarrow{d} \chi^2(K - K_1)
$$
where $K = \#\mathbf{x}_i$ (dimension of $\mathbf{x}_i$), $K_1 = \#\mathbf{x}_{i1}$ (dimension of $\mathbf{x}_{i1}$), and $J$ and $J_1$ are defined in (3.6.8) and (3.6.10).

:::

- **直觉 (Intuition)**：$C$ 统计量衡量了加入存疑变量后，模型拟合变差（距离增大）的程度。如果存疑变量确实满足正交性，$J$ 不应比 $J_1$ 大太多。

## Interpreting Proposition 3.7
在实际应用中，检验统计量 $C$ 的表现受到 $\mathbf{S}$ 和 $\mathbf{S}_{11}$ 估计量选择的影响。

**1. 有限样本下的非负性问题**
在有限样本中，如果分别独立地估计 $\widehat{\mathbf{S}}$ 和 $\widehat{\mathbf{S}}_{11}$，计算出的 $C = J - J_1$ **可能为负值**。这是因为子集 GMM 使用的权重矩阵可能比全集 GMM 中对应的子块“更优”（在当前的样本实现下），导致 $J_1$ 反而大于 $J$。

**2. 推荐的操作步骤 (Two-step Procedure)**
为了避免 $C$ 为负并保证检验的一致性，建议采用以下步骤：
1. **第一步**：使用**全量工具变量** $\mathbf{x}_i$ 进行有效二步 GMM 估计。
   - 从第一阶段获得一致的权重矩阵 $\widehat{\mathbf{S}}$。
   - 在第二阶段获得全集估计量 $\hat{\boldsymbol{\delta}}$ 和对应的 $J$ 统计量。
2. **第二步**：从第一步得到的全集矩阵 $\widehat{\mathbf{S}}$ 中**直接提取**左上角的子矩阵 $\widehat{\mathbf{S}}_{11}$。
   - 利用这个提取出的 $\widehat{\mathbf{S}}_{11}$ 按照 (3.6.9) 计算子集估计量 $\bar{\boldsymbol{\delta}}$。
   - 按照 (3.6.10) 计算子集 $J_1$ 统计量。
3. **计算差值**：最后计算 $C = J - J_1$。由于 $J_1$ 使用的是全集权重矩阵的子块而非其自身的“最优”权重，数学上可以保证此时 $J \ge J_1$，从而确保 $C \ge 0$。

**数学推导：为什么推荐步骤能保证 $J \ge J_1$？**

:::{admonition} Proposition: Partitioned Matrix Inverse Formula (分块矩阵求逆公式)
考虑分块矩阵 $\mathbf{S} = \begin{bmatrix} \mathbf{S}_{11} & \mathbf{S}_{12} \\ \mathbf{S}_{21} & \mathbf{S}_{22} \end{bmatrix}$，若 $\mathbf{S}$ 和 $\mathbf{S}_{22}$ 均非奇异，则其逆矩阵 $\mathbf{W} = \mathbf{S}^{-1}$ 的左上角分块满足：
$$
\mathbf{W}_{11} = (\mathbf{S}_{11} - \mathbf{S}_{12} \mathbf{S}_{22}^{-1} \mathbf{S}_{21})^{-1}
$$
其中 $\mathbf{S}_{11} - \mathbf{S}_{12} \mathbf{S}_{22}^{-1} \mathbf{S}_{21}$ 被称为 $\mathbf{S}_{22}$ 在 $\mathbf{S}$ 中的 **Schur 补 (Schur Complement)**。

:::

我们通过比较全集和子集的最优值函数来证明。

**1. 权重矩阵的性质 (Properties of the Weighting Matrix)**
令全集权重矩阵为 $\mathbf{W} = \mathbf{S}^{-1}$。对其进行分区：
$$
\mathbf{S} = \begin{bmatrix} \mathbf{S}_{11} & \mathbf{S}_{12} \\ \mathbf{S}_{21} & \mathbf{S}_{22} \end{bmatrix}, \quad \mathbf{W} = \begin{bmatrix} \mathbf{W}_{11} & \mathbf{W}_{12} \\ \mathbf{W}_{21} & \mathbf{W}_{22} \end{bmatrix}
$$
根据上述分块矩阵求逆公式，左上角块 $\mathbf{W}_{11}$ 为：
$$
\mathbf{W}_{11} = (\mathbf{S}_{11} - \mathbf{S}_{12} \mathbf{S}_{22}^{-1} \mathbf{S}_{21})^{-1}
$$
由于 $\mathbf{S}$ 是正定的，其 Schur 补 $\mathbf{S}_{12} \mathbf{S}_{22}^{-1} \mathbf{S}_{21}$ 是半正定的，因此：
$$
\mathbf{S}_{11} - \mathbf{S}_{12} \mathbf{S}_{22}^{-1} \mathbf{S}_{21} \le \mathbf{S}_{11} \implies \mathbf{W}_{11} \ge \mathbf{S}_{11}^{-1} \quad (\text{按半正定秩次定义})
$$

> [!tip] 二次型完备化 (Completing the Quadratic Form)
> 这是一个将标量代数中“配平方法” ($ax^2 + 2bxy + cy^2$) 推广到矩阵代数的技巧。对于二次型 $\mathbf{g}' \mathbf{W} \mathbf{g}$，我们通过构造一个全平方式项（包含 $\mathbf{g}_{2n}$）和一个剩余项（仅含 $\mathbf{g}_{1n}$）来分解目标函数：
>
$$
J = n \cdot \underbrace{(\mathbf{g}_{2n} + \mathbf{W}_{22}^{-1} \mathbf{W}_{21} \mathbf{g}_{1n})' \mathbf{W}_{22} (\mathbf{g}_{2n} + \mathbf{W}_{22}^{-1} \mathbf{W}_{21} \mathbf{g}_{1n})}_{\text{非负项 (Quadratic term)}} + n \cdot \mathbf{g}_{1n}' \underbrace{(\mathbf{W}_{11} - \mathbf{W}_{12} \mathbf{W}_{22}^{-1} \mathbf{W}_{21})}_{\text{Schur Complement} = \mathbf{S}_{11}^{-1}} \mathbf{g}_{1n}
$$
> 这种分解清晰地显示了：全集 $J$ 统计量等于子集 $J_1$ 加上一个由存疑变量引起的**非负额外偏差**。

**2. 目标函数的比较 (Comparison of Objective Functions)**

我们对全集目标函数 $J(\tilde{\boldsymbol{\delta}}) = n \cdot \mathbf{g}_n' \mathbf{W} \mathbf{g}_n$ 进行分块展开并进行连续推导：

**Step A: 分块展开 (Partitioned Expansion)**
利用 $\mathbf{g}_n = [\mathbf{g}_{1n}', \mathbf{g}_{2n}']'$ 和权重矩阵 $\mathbf{W}$ 的分块定义：
$$\begin{aligned}
J(\tilde{\boldsymbol{\delta}}) &= n \begin{bmatrix} \mathbf{g}_{1n} \\ \mathbf{g}_{2n} \end{bmatrix}' \begin{bmatrix} \mathbf{W}_{11} & \mathbf{W}_{12} \\ \mathbf{W}_{21} & \mathbf{W}_{22} \end{bmatrix} \begin{bmatrix} \mathbf{g}_{1n} \\ \mathbf{g}_{2n} \end{bmatrix} \\
&= n \cdot \left( \mathbf{g}_{1n}' \mathbf{W}_{11} \mathbf{g}_{1n} + \mathbf{g}_{1n}' \mathbf{W}_{12} \mathbf{g}_{2n} + \mathbf{g}_{2n}' \mathbf{W}_{21} \mathbf{g}_{1n} + \mathbf{g}_{2n}' \mathbf{W}_{22} \mathbf{g}_{2n} \right)
\end{aligned}$$

**Step B: 针对 $\mathbf{g}_{2n}$ 进行配方 (Completing the Square for $\mathbf{g}_{2n}$)**
为了构造一个以 $\mathbf{W}_{22}$ 为核的全平方式，我们需要将其提取出来。由于 $\mathbf{W}_{21} = \mathbf{W}_{12}'$，我们可以将交叉项合并：
$$\begin{aligned}
J(\tilde{\boldsymbol{\delta}}) &= n \cdot \left[ \mathbf{g}_{2n}' \mathbf{W}_{22} \mathbf{g}_{2n} + \mathbf{g}_{2n}' \mathbf{W}_{21} \mathbf{g}_{1n} + \mathbf{g}_{1n}' \mathbf{W}_{12} \mathbf{g}_{2n} + \mathbf{g}_{1n}' \mathbf{W}_{11} \mathbf{g}_{1n} \right] \\
&= n \cdot \left[ (\mathbf{g}_{2n} + \mathbf{W}_{22}^{-1} \mathbf{W}_{21} \mathbf{g}_{1n})' \mathbf{W}_{22} (\mathbf{g}_{2n} + \mathbf{W}_{22}^{-1} \mathbf{W}_{21} \mathbf{g}_{1n}) \right] \\
& \quad + n \cdot \mathbf{g}_{1n}' \underbrace{(\mathbf{W}_{11} - \mathbf{W}_{12} \mathbf{W}_{22}^{-1} \mathbf{W}_{21})}_{\text{Schur Complement}} \mathbf{g}_{1n}
\end{aligned}$$

**Step C: 利用分块矩阵求逆恒等式 (Applying Matrix Identity)**
根据分块矩阵求逆公式，我们已知：
$$
\mathbf{W}_{11} - \mathbf{W}_{12} \mathbf{W}_{22}^{-1} \mathbf{W}_{21} = \mathbf{S}_{11}^{-1}
$$
代入上式，得到最终的分解形式：
$$
J(\tilde{\boldsymbol{\delta}}) = n \cdot \mathbf{g}_{1n}' \mathbf{S}_{11}^{-1} \mathbf{g}_{1n} + n \cdot (\mathbf{g}_{2n} + \mathbf{W}_{22}^{-1} \mathbf{W}_{21} \mathbf{g}_{1n})' \mathbf{W}_{22} (\mathbf{g}_{2n} + \mathbf{W}_{22}^{-1} \mathbf{W}_{21} \mathbf{g}_{1n}) \tag{3.6.12}
$$

**Step D: 结论 (Conclusion)**
由于 $\mathbf{W}_{22}$ 是正定的，右侧第二项（全平方式）对于任何 $\tilde{\boldsymbol{\delta}}$ 均 $\ge 0$。因此：
$$
J(\tilde{\boldsymbol{\delta}}) \ge n \cdot \mathbf{g}_{1n}(\tilde{\boldsymbol{\delta}})' \mathbf{S}_{11}^{-1} \mathbf{g}_{1n}(\tilde{\boldsymbol{\delta}}) \tag{3.6.13}
$$
这表明在相同的 $\tilde{\boldsymbol{\delta}}$ 下，全集矩条件的拟合误差（由 $\mathbf{W}$ 加权）绝不会小于子集矩条件的拟合误差（由 $\mathbf{S}_{11}^{-1}$ 加权）。

**3. 最小化过程 (Minimization)**
令 $\hat{\boldsymbol{\delta}}$ 为全集的最小化解，$\bar{\boldsymbol{\delta}}$ 为子集的最小化解。则有：
$$\begin{aligned}
J \equiv J(\hat{\boldsymbol{\delta}}) &\ge n \cdot \mathbf{g}_{1n}(\hat{\boldsymbol{\delta}})' \mathbf{S}_{11}^{-1} \mathbf{g}_{1n}(\hat{\boldsymbol{\delta}}) \quad (\text{由式 3.6.13}) \\
&\ge \min_{\tilde{\boldsymbol{\delta}}} n \cdot \mathbf{g}_{1n}(\tilde{\boldsymbol{\delta}})' \mathbf{S}_{11}^{-1} \mathbf{g}_{1n}(\tilde{\boldsymbol{\delta}}) \quad (\text{由最小化定义}) \\
&= J_1
\end{aligned}$$
由此得证 $J \ge J_1$，即 $C \ge 0$。通过这种推荐的二步法（使用同一 $\widehat{\mathbf{S}}$ 矩阵），我们成功保证了统计量在有限样本下的数值稳定性。

**Likelihood-Ratio Principle for GMM**

除了用于检验 $\mathbf{a}(\boldsymbol{\delta}) = \mathbf{0}$ 的 Wald 原理外，**似然比 (Likelihood Ratio, LR) 原理** 通过考察在施加和不施加原假设约束下目标函数值的差异来进行检验。

## Restricted Efficient GMM

在有效 GMM 估计中，对于给定的 $\mathbf{S}$ 的一致估计 $\widehat{\mathbf{S}}$，目标函数为 $J(\tilde{\boldsymbol{\delta}}, \widehat{\mathbf{S}}^{-1})$。受约束的估计量 $\bar{\boldsymbol{\delta}}$ 定义为：
$$
\bar{\boldsymbol{\delta}}(\widehat{\mathbf{S}}^{-1}) \equiv \arg \min_{\tilde{\boldsymbol{\delta}}} J(\tilde{\boldsymbol{\delta}}, \widehat{\mathbf{S}}^{-1}) \quad \text{subject to } H_0 \tag{3.7.1}
$$

## LR Statistic Definition

LR 原理建议使用受约束和未受约束的目标函数最小值之差作为统计量：
$$
LR \equiv J(\bar{\boldsymbol{\delta}}(\widehat{\mathbf{S}}^{-1}), \widehat{\mathbf{S}}^{-1}) - J(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{S}}^{-1}), \widehat{\mathbf{S}}^{-1}) \tag{3.7.2}
$$
该统计量在大样本下服从卡方分布：$LR \xrightarrow{d} \chi^2(\#\text{restrictions})$。

> [!important] 核心要求
> 为了保证 $LR \ge 0$ 以及渐近分布的正确性，计算 $J(\bar{\boldsymbol{\delta}})$ 和 $J(\hat{\boldsymbol{\delta}})$ 时**必须使用同一个权重矩阵** $\widehat{\mathbf{S}}^{-1}$。

## Connection to Classical Likelihood Ratio

> [!info] 数学直觉
> 在经典最大似然估计 (MLE) 中，似然比检验基于以下形式：
>
$$
-2 \log \left( \frac{L(\text{data}; H_0)}{L(\text{data}; H_a)} \right) = 2 \log L(\text{data}; H_a) - 2 \log L(\text{data}; H_0)
$$
> 在 GMM 框架下，$J$ 统计量扮演了 $-2 \log L$ 的角色。因此，$LR = J(\text{restricted}) - J(\text{unrestricted})$ 实际上是对约束造成的拟合损失的度量。

## Wald and LR Comparison

:::{admonition} Proposition: Proposition 3.8 (Test statistic by the LR principle)
Suppose Assumptions 3.1–3.5 hold and suppose there is available a consistent estimator, $\widehat{\mathbf{S}}$, of $\mathbf{S} (= E(\mathbf{g}_i \mathbf{g}_i'))$. Consider the null hypothesis of $\#\mathbf{a}$ restrictions $H_0: \mathbf{a}(\boldsymbol{\delta}) = \mathbf{0}$ such that $\mathbf{A}(\boldsymbol{\delta})$, the $\#\mathbf{a} \times L$ matrix of first derivatives, is continuous and of full row rank. Define two statistics, $W$ and $LR$, by (3.5.16) and (3.7.2), respectively. Then, under the null, the following holds:

1. **渐近等价性 (Asymptotic Equivalence)**: 这两个统计量具有相同的渐近分布，即均服从 $\chi^2(\#\mathbf{a})$。
2. **数值收敛性 (Numerical Convergence)**: 在更强的意义上，它们的数值差异在大样本下依概率收敛于零：$LR - W \xrightarrow{p} 0$。
3. **线性约束下的等价性 (Linear Equality)**: 特别地，如果约束是线性的（即 $H_0: \mathbf{R}\boldsymbol{\delta} = \mathbf{r}$），则这两个统计量在**数值上完全相等**。

:::

#### Proof of Proposition 3.8
我们首先定义信息矩阵 $\mathbf{M} \equiv \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz}$。
*注：根据式 (3.5.14)，$\mathbf{M}^{-1}$ 即为有效 GMM 估计量 $\hat{\boldsymbol{\delta}}$ 的样本渐近方差估计量 $\widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}})$。*

并利用目标函数在 $\hat{\boldsymbol{\delta}}$ 附近的二阶展开进行推导。

**1. 目标函数的二阶展开 (Quadratic Approximation)**
对于任意 $\boldsymbol{\delta}$，样本矩 $\mathbf{g}_n(\boldsymbol{\delta}) = \mathbf{s}_{xy} - \mathbf{S}_{xz} \boldsymbol{\delta}$ 是线性的。将其在未受约束估计量 $\hat{\boldsymbol{\delta}}$ 处展开：
$$
\mathbf{g}_n(\boldsymbol{\delta}) = \mathbf{g}_n(\hat{\boldsymbol{\delta}}) - \mathbf{S}_{xz} (\boldsymbol{\delta} - \hat{\boldsymbol{\delta}})
$$
代入目标函数 $J(\boldsymbol{\delta}) = n \cdot \mathbf{g}_n(\boldsymbol{\delta})' \widehat{\mathbf{S}}^{-1} \mathbf{g}_n(\boldsymbol{\delta})$：
$$\begin{aligned}
J(\boldsymbol{\delta}) &= n \cdot [\mathbf{g}_n(\hat{\boldsymbol{\delta}}) - \mathbf{S}_{xz}(\boldsymbol{\delta} - \hat{\boldsymbol{\delta}})]' \widehat{\mathbf{S}}^{-1} [\mathbf{g}_n(\hat{\boldsymbol{\delta}}) - \mathbf{S}_{xz}(\boldsymbol{\delta} - \hat{\boldsymbol{\delta}})] \\
&= J(\hat{\boldsymbol{\delta}}) - 2n (\boldsymbol{\delta} - \hat{\boldsymbol{\delta}})' \mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{g}_n(\hat{\boldsymbol{\delta}}) + n (\boldsymbol{\delta} - \hat{\boldsymbol{\delta}})' (\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{S}_{xz}) (\boldsymbol{\delta} - \hat{\boldsymbol{\delta}})
\end{aligned}$$
由于 $\hat{\boldsymbol{\delta}}$ 是未受约束的最优解，满足一阶条件 $\mathbf{S}_{xz}' \widehat{\mathbf{S}}^{-1} \mathbf{g}_n(\hat{\boldsymbol{\delta}}) = \mathbf{0}$，因此：
$$
J(\boldsymbol{\delta}) = J(\hat{\boldsymbol{\delta}}) + n (\boldsymbol{\delta} - \hat{\boldsymbol{\delta}})' \mathbf{M} (\boldsymbol{\delta} - \hat{\boldsymbol{\delta}})
$$

**2. 受约束估计量的显式解 (Constrained Solution)**
受约束估计量 $\bar{\boldsymbol{\delta}}$ 是在 $H_0: \mathbf{a}(\boldsymbol{\delta}) = \mathbf{0}$ 下最小化 $J(\boldsymbol{\delta})$。在大样本下，我们将约束线性化：$\mathbf{a}(\hat{\boldsymbol{\delta}}) + \mathbf{A}(\hat{\boldsymbol{\delta}}) (\boldsymbol{\delta} - \hat{\boldsymbol{\delta}}) \approx \mathbf{0}$。
构造拉格朗日函数：
$$
\mathcal{L}(\boldsymbol{\delta}, \boldsymbol{\lambda}) = n (\boldsymbol{\delta} - \hat{\boldsymbol{\delta}})' \mathbf{M} (\boldsymbol{\delta} - \hat{\boldsymbol{\delta}}) + 2 \boldsymbol{\lambda}' [\mathbf{a}(\hat{\boldsymbol{\delta}}) + \mathbf{A}(\hat{\boldsymbol{\delta}}) (\boldsymbol{\delta} - \hat{\boldsymbol{\delta}})]
$$
**Step A: 求偏导并令其为零 (FOCs)**
对 $\boldsymbol{\delta}$ 求导：
$$
\frac{\partial \mathcal{L}}{\partial \boldsymbol{\delta}} = 2n \mathbf{M} (\boldsymbol{\delta} - \hat{\boldsymbol{\delta}}) + 2 \mathbf{A}' \boldsymbol{\lambda} = \mathbf{0} \quad \implies n \mathbf{M} (\boldsymbol{\delta} - \hat{\boldsymbol{\delta}}) = - \mathbf{A}' \boldsymbol{\lambda} \tag{1}
$$
对 $\boldsymbol{\lambda}$ 求导（即约束条件）：
$$
\frac{\partial \mathcal{L}}{\partial \boldsymbol{\lambda}} = 2[\mathbf{a}(\hat{\boldsymbol{\delta}}) + \mathbf{A} (\boldsymbol{\delta} - \hat{\boldsymbol{\delta}})] = \mathbf{0} \quad \implies \mathbf{A} (\boldsymbol{\delta} - \hat{\boldsymbol{\delta}}) = - \mathbf{a}(\hat{\boldsymbol{\delta}}) \tag{2}
$$

**Step B: 联立求解 (Solving for the Multiplier)**
从式 (1) 解出 $(\boldsymbol{\delta} - \hat{\boldsymbol{\delta}})$：
$$
\boldsymbol{\delta} - \hat{\boldsymbol{\delta}} = - \frac{1}{n} \mathbf{M}^{-1} \mathbf{A}' \boldsymbol{\lambda} \tag{3}
$$
将式 (3) 代入式 (2)：
$$\begin{aligned}
\mathbf{A} \left( - \frac{1}{n} \mathbf{M}^{-1} \mathbf{A}' \boldsymbol{\lambda} \right) &= - \mathbf{a}(\hat{\boldsymbol{\delta}}) \\
\frac{1}{n} (\mathbf{A} \mathbf{M}^{-1} \mathbf{A}') \boldsymbol{\lambda} &= \mathbf{a}(\hat{\boldsymbol{\delta}}) \\
\boldsymbol{\lambda} &= n (\mathbf{A} \mathbf{M}^{-1} \mathbf{A}')^{-1} \mathbf{a}(\hat{\boldsymbol{\delta}})
\end{aligned}$$

**Step C: 得到显式解 (Final Solution)**
将 $\boldsymbol{\lambda}$ 代回式 (3)：
$$\begin{aligned}
\bar{\boldsymbol{\delta}} - \hat{\boldsymbol{\delta}} &= - \frac{1}{n} \mathbf{M}^{-1} \mathbf{A}' \left[ n (\mathbf{A} \mathbf{M}^{-1} \mathbf{A}')^{-1} \mathbf{a}(\hat{\boldsymbol{\delta}}) \right] \\
&= - \mathbf{M}^{-1} \mathbf{A}' (\mathbf{A} \mathbf{M}^{-1} \mathbf{A}')^{-1} \mathbf{a}(\hat{\boldsymbol{\delta}})
\end{aligned}$$

**3. LR 与 Wald 的等价性推导 (Deriving Equivalence)**
$$\begin{aligned}
LR &\equiv J(\bar{\boldsymbol{\delta}}) - J(\hat{\boldsymbol{\delta}}) \\
&= n (\bar{\boldsymbol{\delta}} - \hat{\boldsymbol{\delta}})' \mathbf{M} (\bar{\boldsymbol{\delta}} - \hat{\boldsymbol{\delta}}) \\
&= n [-\mathbf{a}(\hat{\boldsymbol{\delta}})' (\mathbf{A} \mathbf{M}^{-1} \mathbf{A}')^{-1} \mathbf{A} \mathbf{M}^{-1}] \mathbf{M} [-\mathbf{M}^{-1} \mathbf{A}' (\mathbf{A} \mathbf{M}^{-1} \mathbf{A}')^{-1} \mathbf{a}(\hat{\boldsymbol{\delta}})] \\
&= n \cdot \mathbf{a}(\hat{\boldsymbol{\delta}})' (\mathbf{A} \mathbf{M}^{-1} \mathbf{A}')^{-1} \mathbf{A} (\mathbf{M}^{-1} \mathbf{M} \mathbf{M}^{-1}) \mathbf{A}' (\mathbf{A} \mathbf{M}^{-1} \mathbf{A}')^{-1} \mathbf{a}(\hat{\boldsymbol{\delta}}) \\
&= n \cdot \mathbf{a}(\hat{\boldsymbol{\delta}})' (\mathbf{A} \mathbf{M}^{-1} \mathbf{A}')^{-1} (\mathbf{A} \mathbf{M}^{-1} \mathbf{A}') (\mathbf{A} \mathbf{M}^{-1} \mathbf{A}')^{-1} \mathbf{a}(\hat{\boldsymbol{\delta}}) \\
&= n \cdot \mathbf{a}(\hat{\boldsymbol{\delta}})' (\mathbf{A} \mathbf{M}^{-1} \mathbf{A}')^{-1} \mathbf{a}(\hat{\boldsymbol{\delta}}) \\
&= W
\end{aligned}$$

> [!info] 为什么这是 Wald 统计量？
> 这一结论源于 **Delta Method**。在有效 GMM 下，$\hat{\boldsymbol{\delta}}$ 的渐近方差估计量为 $\mathbf{M}^{-1}$。根据 Delta Method，约束函数 $\mathbf{a}(\hat{\boldsymbol{\delta}})$ 的渐近方差为 $\mathbf{A} \mathbf{M}^{-1} \mathbf{A}'$。Wald 统计量 $W$ 的本质是将 $\mathbf{a}(\hat{\boldsymbol{\delta}})$ 二次型化：
>
$$
W = [\sqrt{n}\mathbf{a}(\hat{\boldsymbol{\delta}})]' [\mathbf{A} \mathbf{M}^{-1} \mathbf{A}']^{-1} [\sqrt{n}\mathbf{a}(\hat{\boldsymbol{\delta}})]
$$
> 从而衡量了未受约束估计量对约束条件的偏离程度。

:::{admonition} Definition (Wald Statistic (Wald 统计量定义))
给定零假设 $H_0: \mathbf{a}(\boldsymbol{\delta}) = \mathbf{0}$，Wald 统计量定义为：
$$
W \equiv n \cdot \mathbf{a}(\hat{\boldsymbol{\delta}})' \{ \mathbf{A}(\hat{\boldsymbol{\delta}}) [\widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}})] \mathbf{A}(\hat{\boldsymbol{\delta}})' \}^{-1} \mathbf{a}(\hat{\boldsymbol{\delta}})
$$
其中 $\mathbf{A}(\boldsymbol{\delta}) \equiv \frac{\partial \mathbf{a}(\boldsymbol{\delta})}{\partial \boldsymbol{\delta}'}$ 是约束函数的雅可比矩阵 (Jacobian)。
- **直觉**：该统计量衡量了未受约束估计量 $\hat{\boldsymbol{\delta}}$ 违反约束条件的程度，其权重是约束函数渐近方差的逆。

:::

**结论验证**:
- **Point 1 & 2**: 以上推导展示了 $LR = W + o_p(1)$，故两者渐近等价且数值差异趋于零。
- **Point 3**: 当约束 $\mathbf{a}(\boldsymbol{\delta}) = \mathbf{R}\boldsymbol{\delta} - \mathbf{r}$ 是线性时，Taylor 展开和二次型逼近均是**精确的**，故 $LR = W$ 数值相等。

## Regression LR Statistic

在标准的线性回归模型中，所有解释变量均被视为外生工具变量（即 $\mathbf{x}_i = \mathbf{z}_i$）。

- **性质**: 此时有效 GMM 估计量即为 OLS 估计量。
- **目标函数值**: 由于模型是恰好识别的（Just-identified），未受约束的目标函数最小值恒为 0：
  $$
  J(\hat{\boldsymbol{\delta}}(\widehat{\mathbf{S}}^{-1}), \widehat{\mathbf{S}}^{-1}) = 0
  $$
- **LR 统计量简化**: 似然比统计量简化为受约束目标函数的值：
  $$
  LR = J(\bar{\boldsymbol{\delta}}(\widehat{\mathbf{S}}^{-1}), \widehat{\mathbf{S}}^{-1}) - 0 \tag{3.7.5}
  $$
  其中 $\bar{\boldsymbol{\delta}}(\widehat{\mathbf{S}}^{-1})$ 是受约束的有效 GMM 估计量。

> [!important] 结论
> 根据 Proposition 3.8，该统计量渐近服从卡方分布。如果原假设 $H_0$ 是线性的，则该统计量在数值上与 Wald 统计量完全相等。

**Conditional Homoskedasticity in IV-GMM**

本节探讨当模型满足条件同方差假设时，GMM 估计量及其性质如何简化。

> [!assumption] Assumption 3.7 (Conditional Homoskedasticity)
> 扰动项的条件方差为常数：
>
$$
E(\varepsilon_i^2 | \mathbf{x}_i) = \sigma^2 \tag{3.8.0}
$$

**1. $\mathbf{S}$ 矩阵的简化推导 (Derivation of $\mathbf{S}$)**

在条件同方差下，矩条件的交叉矩矩阵 $\mathbf{S}$ 可以从四阶矩简化为二阶矩的乘积。利用 **迭代期望定律 (Law of Iterated Expectations, LIE)** 进行推导：

$$\begin{aligned}
\mathbf{g}_i &= \mathbf{x}_i \cdot \varepsilon_i \\
E(\mathbf{g}_i) &= \mathbf{0} \\
\mathbf{S} \equiv E[\mathbf{g}_i \mathbf{g}_i'] &= E(\varepsilon_i^2 \mathbf{x}_i \mathbf{x}_i') \\
&= E[E(\varepsilon_i^2 \mathbf{x}_i \mathbf{x}_i' | \mathbf{x}_i)] \quad (\text{LIE}) \\
&= E[\mathbf{x}_i \mathbf{x}_i' E(\varepsilon_i^2 | \mathbf{x}_i)] \quad (\because \mathbf{x}_i \mathbf{x}_i' \text{ is constant given } \mathbf{x}_i) \\
&= E[\mathbf{x}_i \mathbf{x}_i' \cdot \sigma^2] \quad (\text{By Assumption 3.7}) \\
&= \sigma^2 E(\mathbf{x}_i \mathbf{x}_i') \\
&= \sigma^2 \boldsymbol{\Sigma}_{xx} 
\end{aligned}\tag{3.8.1}$$

其中 $\boldsymbol{\Sigma}_{xx} \equiv E(\mathbf{x}_i \mathbf{x}_i')$。

**2. $\mathbf{S}$ 矩阵的一致估计量**

利用上述结构，我们可以构造 $\mathbf{S}$ 的估计量：
$$
\widehat{\mathbf{S}} = \hat{\sigma}^2 \left( \frac{1}{n} \sum_{i=1}^n \mathbf{x}_i \mathbf{x}_i' \right) = \hat{\sigma}^2 \mathbf{S}_{xx} \tag{3.8.2}
$$
其中 $\hat{\sigma}^2$ 是 $\sigma^2$ 的任一一致估计量（如样本残差平方和均值）。

> [!tip] 统计性质
> 根据平稳遍历性，$\mathbf{S}_{xx} \xrightarrow{a.s.} \boldsymbol{\Sigma}_{xx}$。
> - **优势**：在这种设定下，我们不再需要“存在有限四阶矩”的强假设（Assumption 3.6），因为 $\mathbf{S}$ 的估计仅依赖于变量的二阶矩。
> - **2SLS 的地位**：在此假设下，最优权重矩阵为 $\mathbf{W} = (\sigma^2 \boldsymbol{\Sigma}_{xx})^{-1} \propto \boldsymbol{\Sigma}_{xx}^{-1}$。这正是 2SLS 所采用的权重，说明在条件同方差下，**2SLS 即为有效 GMM**。

## Efficient GMM Reduces to 2SLS

在条件同方差下，当我们设定 $\widehat{\mathbf{S}} = \hat{\sigma}^2 \mathbf{S}_{xx}$ 时，有效 GMM 估计量在数值上等价于 2SLS。

**1. 估计量简化推导**:
$$\begin{aligned}
\hat{\boldsymbol{\delta}}(\widehat{\mathbf{S}}^{-1}) &= [\mathbf{S}_{xz}' (\hat{\sigma}^2 \mathbf{S}_{xx})^{-1} \mathbf{S}_{xz}]^{-1} \mathbf{S}_{xz}' (\hat{\sigma}^2 \mathbf{S}_{xx})^{-1} \mathbf{s}_{xy} \\
&= [\mathbf{S}_{xz}' \frac{1}{\hat{\sigma}^2} \mathbf{S}_{xx}^{-1} \mathbf{S}_{xz}]^{-1} \mathbf{S}_{xz}' \frac{1}{\hat{\sigma}^2} \mathbf{S}_{xx}^{-1} \mathbf{s}_{xy} \\
&= \hat{\sigma}^2 (\mathbf{S}_{xz}' \mathbf{S}_{xx}^{-1} \mathbf{S}_{xz})^{-1} \frac{1}{\hat{\sigma}^2} \mathbf{S}_{xz}' \mathbf{S}_{xx}^{-1} \mathbf{s}_{xy} \\
&= (\mathbf{S}_{xz}' \mathbf{S}_{xx}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{S}_{xz}' \mathbf{S}_{xx}^{-1} \mathbf{s}_{xy} \\
&= \hat{\boldsymbol{\delta}}(\mathbf{S}_{xx}^{-1}) \equiv \hat{\boldsymbol{\delta}}_{2SLS}
\end{aligned}\tag{3.8.3}$$
*注：可以看到 $\hat{\sigma}^2$ 作为一个常数倍数在分子分母中对消了，因此 2SLS 估计量不依赖于对误差方差 $\sigma^2$ 的估计。*

**2. 矩阵投影视角 (Projection Interpretation)**:
利用全局矩阵形式 $\mathbf{S}_{xz} = \frac{1}{n} \mathbf{X}' \mathbf{Z}$ 和 $\mathbf{S}_{xx} = \frac{1}{n} \mathbf{X}' \mathbf{X}$，核心项可展开为：
$$\begin{aligned}
\mathbf{S}_{xz}' \mathbf{S}_{xx}^{-1} \mathbf{S}_{xz} &= (\frac{1}{n} \mathbf{Z}' \mathbf{X}) (\frac{1}{n} \mathbf{X}' \mathbf{X})^{-1} (\frac{1}{n} \mathbf{X}' \mathbf{Z}) \\
&= \frac{1}{n} \mathbf{Z}' \mathbf{X} (\mathbf{X}' \mathbf{X})^{-1} \mathbf{X}' \mathbf{Z} \\
&= \frac{1}{n} \mathbf{Z}' \mathbf{P}(\mathbf{X}) \mathbf{Z}
\end{aligned}$$
其中 $\mathbf{P}(\mathbf{X}) = \mathbf{X}(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'$ 是正交投影矩阵。这揭示了 2SLS 的本质：
1. **第一阶段**：将内生解释变量 $\mathbf{Z}$ 投影到工具变量空间 $\mathbf{X}$ 上，得到 $\hat{\mathbf{Z}} = \mathbf{P}(\mathbf{X}) \mathbf{Z}$。
2. **第二阶段**：使用拟合值进行回归：$\hat{\boldsymbol{\delta}}_{2SLS} = (\hat{\mathbf{Z}}' \hat{\mathbf{Z}})^{-1} \hat{\mathbf{Z}}' \mathbf{y}$。

**3. 渐近方差简化**:
在条件同方差下，2SLS 的渐近方差及其一致估计量为：
$$
\begin{aligned}
\operatorname{Avar}(\hat{\boldsymbol{\delta}}_{2SLS}) &= \sigma^2 \cdot (\boldsymbol{\Sigma}_{xz}' \boldsymbol{\Sigma}_{xx}^{-1} \boldsymbol{\Sigma}_{xz})^{-1}
\end{aligned} \tag{3.8.4}
$$

$$
\begin{aligned}
\widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}}_{2SLS}) &= \hat{\sigma}^2 \cdot (\mathbf{S}_{xz}' \mathbf{S}_{xx}^{-1} \mathbf{S}_{xz})^{-1}
\end{aligned} \tag{3.8.5}
$$

其中方差估计量 $\hat{\sigma}^2$ 通常基于 2SLS 残差计算：

$$
\hat{\sigma}^2 \equiv \frac{1}{n} \sum_{i=1}^n (y_i - \mathbf{z}_i' \hat{\boldsymbol{\delta}}_{2SLS})^2 \tag{3.8.6}
$$

**4. 统计检验量的简化**:
在该假设下，$t$ 检验和 Wald 检验也随之简化：

- **$t$-ratio**:
  $$
  t_\ell = \frac{\hat{\delta}_{2SLS, \ell} - \bar{\delta}_\ell}{SE_\ell}, \quad SE_\ell = \sqrt{\frac{\hat{\sigma}^2}{n} \cdot [(\mathbf{S}_{xz}' \mathbf{S}_{xx}^{-1} \mathbf{S}_{xz})^{-1}]_{\ell \ell}} \tag{3.8.7}
  $$
- **Wald statistic**:
  $$
  W = n \cdot \frac{\mathbf{a}(\hat{\boldsymbol{\delta}}_{2SLS})' [\mathbf{A}(\hat{\boldsymbol{\delta}}_{2SLS})(\mathbf{S}_{xz}' \mathbf{S}_{xx}^{-1} \mathbf{S}_{xz})^{-1} \mathbf{A}(\hat{\boldsymbol{\delta}}_{2SLS})']^{-1} \mathbf{a}(\hat{\boldsymbol{\delta}}_{2SLS})}{\hat{\sigma}^2} \tag{3.8.8}
  $$

## J Statistic Reduces to Sargan Statistic

在条件同方差下，用于检验过度识别约束的 $J$ 统计量退化为著名的 **Sargan 统计量** (Sargan, 1958)。

**1. 统计量定义**:
此时目标函数 (3.4.6) 变为：
$$
J(\tilde{\boldsymbol{\delta}}, (\hat{\sigma}^2 \mathbf{S}_{xx})^{-1}) = n \cdot \frac{(\mathbf{s}_{xy} - \mathbf{S}_{xz} \tilde{\boldsymbol{\delta}})' \mathbf{S}_{xx}^{-1} (\mathbf{s}_{xy} - \mathbf{S}_{xz} \tilde{\boldsymbol{\delta}})}{\hat{\sigma}^2} \tag{3.8.9}
$$
在 2SLS 估计量处取最小值，即得到 Sargan 统计量：
$$
\text{Sargan's statistic} = n \cdot \frac{(\mathbf{s}_{xy} - \mathbf{S}_{xz} \hat{\boldsymbol{\delta}}_{2SLS})' \mathbf{S}_{xx}^{-1} (\mathbf{s}_{xy} - \mathbf{S}_{xz} \hat{\boldsymbol{\delta}}_{2SLS})}{\hat{\sigma}^2} \tag{3.8.10}
$$

**2. 矩阵形式推导 (Derivation of Matrix Form)**:

- **通用形式 (General Form)**:
  利用残差向量 $\hat{\boldsymbol{\varepsilon}} = \mathbf{y} - \mathbf{Z} \hat{\boldsymbol{\delta}}$，样本矩项可表示为 $\mathbf{s}_{xy} - \mathbf{S}_{xz} \hat{\boldsymbol{\delta}} = \frac{1}{n} \mathbf{X}' \hat{\boldsymbol{\varepsilon}}$。
  代入目标函数 $J = n \cdot \mathbf{g}_n' \widehat{\mathbf{S}}^{-1} \mathbf{g}_n$，其中 $\widehat{\mathbf{S}}^{-1} = (\hat{\sigma}^2 \frac{1}{n} \mathbf{X}' \mathbf{X})^{-1}$：
  $$\begin{aligned}
  J &= n \cdot (\frac{1}{n} \mathbf{X}' \hat{\boldsymbol{\varepsilon}})' \left[ \hat{\sigma}^2 \frac{1}{n} \mathbf{X}' \mathbf{X} \right]^{-1} (\frac{1}{n} \mathbf{X}' \hat{\boldsymbol{\varepsilon}}) \\
  &= n \cdot \frac{1}{n} \hat{\boldsymbol{\varepsilon}}' \mathbf{X} \cdot \frac{1}{\hat{\sigma}^2} ( \mathbf{X}' \mathbf{X} )^{-1} n \cdot \frac{1}{n} \mathbf{X}' \hat{\boldsymbol{\varepsilon}} \\
  &= \frac{\hat{\boldsymbol{\varepsilon}}' \mathbf{X} (\mathbf{X}' \mathbf{X})^{-1} \mathbf{X}' \hat{\boldsymbol{\varepsilon}}}{\hat{\sigma}^2} = \frac{\hat{\boldsymbol{\varepsilon}}' \mathbf{P}(\mathbf{X}) \hat{\boldsymbol{\varepsilon}}}{\hat{\sigma}^2}
  \end{aligned}$$

- **2SLS 情况 (过度识别 $K > L$)**:
  在 2SLS 中，估计量 $\hat{\boldsymbol{\delta}}_{2SLS}$ 满足一阶条件：$\mathbf{Z}' \mathbf{P}(\mathbf{X}) \hat{\boldsymbol{\varepsilon}} = \mathbf{0}$。
  这表明残差 $\hat{\boldsymbol{\varepsilon}}$ 与解释变量的投影值 $\hat{\mathbf{Z}}$ 正交，但**不一定**与所有工具变量 $\mathbf{X}$ 正交。
  因此，分子项 $\hat{\boldsymbol{\varepsilon}}' \mathbf{P}(\mathbf{X}) \hat{\boldsymbol{\varepsilon}}$（即残差在 $\mathbf{X}$ 空间上的投影平方和）通常不为零。其大小反映了工具变量与扰动项正交假设的偏离程度。

- **OLS 情况 (恰好识别 $K = L, \mathbf{X} = \mathbf{Z}$)**:
  在 OLS 中，解释变量本身就是工具变量。我们展开其推导过程：
  1. **正交性性质**: OLS 估计量定义为 $\hat{\boldsymbol{\delta}}_{OLS} = (\mathbf{Z}' \mathbf{Z})^{-1} \mathbf{Z}' \mathbf{y}$，其残差 $\hat{\boldsymbol{\varepsilon}}_{OLS}$ 满足：
     $$
     \mathbf{Z}' \hat{\boldsymbol{\varepsilon}}_{OLS} = \mathbf{Z}' (\mathbf{y} - \mathbf{Z} \hat{\boldsymbol{\delta}}_{OLS}) = \mathbf{Z}' \mathbf{y} - \mathbf{Z}' \mathbf{Z} (\mathbf{Z}' \mathbf{Z})^{-1} \mathbf{Z}' \mathbf{y} = \mathbf{0}
     $$
  2. **代入 Sargan 统计量**:
     $$\begin{aligned}
     \text{Sargan}_{OLS} &= \frac{\hat{\boldsymbol{\varepsilon}}_{OLS}' \mathbf{P}(\mathbf{Z}) \hat{\boldsymbol{\varepsilon}}_{OLS}}{\hat{\sigma}^2} \\
     &= \frac{\hat{\boldsymbol{\varepsilon}}_{OLS}' \mathbf{Z} (\mathbf{Z}' \mathbf{Z})^{-1} \mathbf{Z}' \hat{\boldsymbol{\varepsilon}}_{OLS}}{\hat{\sigma}^2} \\
     &= \frac{(\mathbf{Z}' \hat{\boldsymbol{\varepsilon}}_{OLS})' (\mathbf{Z}' \mathbf{Z})^{-1} (\mathbf{Z}' \hat{\boldsymbol{\varepsilon}}_{OLS})}{\hat{\sigma}^2} \\
     &= \frac{\mathbf{0}' (\mathbf{Z}' \mathbf{Z})^{-1} \mathbf{0}}{\hat{\sigma}^2} = 0
     \end{aligned}$$
  **结论**：在恰好识别的情况下，Sargan 统计量恒为 0。从分布角度看，$\chi^2(K-L) = \chi^2(0)$ 是一个在 0 点坍缩的分布，这与代数推导完全一致。

**3. 统计直觉**:
- **意义**：Sargan 统计量本质上是 2SLS 残差在工具变量空间 $\mathbf{X}$ 上的投影平方和，除以误差方差。
- **分布**：在原假设（所有工具变量均外生）下，该统计量渐近服从卡方分布：
  $$
  \text{Sargan's statistic} \xrightarrow{d} \chi^2(K - L)
  $$

## 2SLS Asymptotic Summary

:::{admonition} Proposition: Proposition 3.9 (Asymptotic properties of 2SLS)
(a) 在 Assumption 3.1–3.4 下，2SLS 估计量 (3.8.3) 是一致的。若增加 Assumption 3.5，则该估计量具有渐近正态性，其渐近方差由 (3.5.1) 给出，且权重矩阵 $\mathbf{W} = (\sigma^2 \boldsymbol{\Sigma}_{xx})^{-1}$。若进一步满足 Assumption 3.7 (条件同方差)，则该估计量为**有效 GMM 估计量**。

此外，若 $E(\mathbf{z}_i \mathbf{z}_i')$ 存在且有限，则：

(b) 渐近方差由 (3.8.5) 一致地估计。

(c) $t_\ell$ 统计量 (3.8.7) $\xrightarrow{d} N(0, 1)$，$W$ 统计量 (3.8.8) $\xrightarrow{d} \chi^2(\#\mathbf{r})$。

(d) Sargan 统计量 (3.8.10) $\xrightarrow{d} \chi^2(K - L)$。

:::

#### Alternative Derivations of 2SLS

在条件同方差 Assumption 3.7 成立时，利用矩阵表示法，2SLS 的渐近性质与统计量可进一步总结如下：

- **渐近方差估计量 (Asymptotic Variance Estimator)**:
  $$
  \widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}}_{\text{2SLS}}) = n \cdot \hat{\sigma}^2 \cdot [\mathbf{Z}' \mathbf{X} (\mathbf{X}' \mathbf{X})^{-1} \mathbf{X}' \mathbf{Z}]^{-1} = n \cdot \hat{\sigma}^2 \cdot (\mathbf{Z}' \mathbf{P} \mathbf{Z})^{-1} \tag{Eq 3.8.5'}
  $$
  *解读：$\mathbf{P} = \mathbf{X}(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'$ 为投影矩阵。公式表明 2SLS 的方差取决于误差方差 $\hat{\sigma}^2$ 和解释变量在工具变量空间上的投影强度 $\mathbf{Z}' \mathbf{P} \mathbf{Z}$。投影越强（工具变量相关性越好），方差越小。*

- **误差方差估计 (Error Variance Estimate)**:
  $$
  \hat{\sigma}^2 \equiv \frac{\hat{\boldsymbol{\varepsilon}}' \hat{\boldsymbol{\varepsilon}}}{n} \quad \text{其中 } \hat{\boldsymbol{\varepsilon}} \equiv \mathbf{y} - \mathbf{Z} \hat{\boldsymbol{\delta}}_{\text{2SLS}} \tag{Eq 3.8.6'}
  $$

- **t-统计量 (t-ratio)**:
  $$
  t_\ell = \frac{\hat{\delta}_{\text{2SLS}, \ell} - \bar{\delta}_\ell}{\sqrt{\hat{\sigma}^2 \cdot ([\mathbf{Z}' \mathbf{X} (\mathbf{X}' \mathbf{X})^{-1} \mathbf{X}' \mathbf{Z}]^{-1})_{\ell \ell}}} \tag{Eq 3.8.7'}
  $$

- **Wald 统计量 (Wald Statistic)**:
  $$
  W = \frac{\mathbf{a}(\hat{\boldsymbol{\delta}}_{\text{2SLS}})' [\mathbf{A}(\hat{\boldsymbol{\delta}}_{\text{2SLS}}) (\mathbf{Z}' \mathbf{X} (\mathbf{X}' \mathbf{X})^{-1} \mathbf{X}' \mathbf{Z})^{-1} \mathbf{A}(\hat{\boldsymbol{\delta}}_{\text{2SLS}})^T]^{-1} \mathbf{a}(\hat{\boldsymbol{\delta}}_{\text{2SLS}})}{\hat{\sigma}^2} \tag{Eq 3.8.8'}
  $$

- **GMM 目标函数 (GMM Objective Function)**:
  $$
  J(\tilde{\boldsymbol{\delta}}, (\hat{\sigma}^2 \cdot \mathbf{S}_{xx})^{-1}) = \frac{(\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})' \mathbf{P} (\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})}{\hat{\sigma}^2} \tag{Eq 3.8.9'}
  $$

- **Sargan 统计量 (Sargan's Statistic)**:
  $$
  \text{Sargan's statistic} = \frac{\hat{\boldsymbol{\varepsilon}}' \mathbf{P} \hat{\boldsymbol{\varepsilon}}}{\hat{\sigma}^2} \tag{Eq 3.8.10'}
  $$
  *解读：Sargan 统计量衡量了残差在工具变量空间上的投影。在原假设（工具变量外生）下，残差不应包含可由工具变量解释的系统性信息，因此该统计量应服从 $\chi^2(K-L)$ 分布。*

##### 具体推导步骤 (Detailed Derivation Steps)

**1. 投影矩阵 $\mathbf{P}$ 的引入**
在条件同方差下，最优权重矩阵 $\widehat{\mathbf{W}} = \mathbf{S}_{xx}^{-1} = (n^{-1} \mathbf{X}' \mathbf{X})^{-1}$。将样本矩矩阵 $\mathbf{S}_{xz} = n^{-1} \mathbf{X}' \mathbf{Z}$ 代入有效 GMM 的核心乘积项：
$$\begin{aligned}
\mathbf{S}_{xz}' \mathbf{S}_{xx}^{-1} \mathbf{S}_{xz} &= (n^{-1} \mathbf{Z}' \mathbf{X}) (n^{-1} \mathbf{X}' \mathbf{X})^{-1} (n^{-1} \mathbf{X}' \mathbf{Z}) \\
&= n^{-1} \mathbf{Z}' \underbrace{\mathbf{X} (\mathbf{X}' \mathbf{X})^{-1} \mathbf{X}'}_{\mathbf{P}} \mathbf{Z} \\
&= n^{-1} (\mathbf{Z}' \mathbf{P} \mathbf{Z})
\end{aligned}$$
由此，2SLS 的渐近方差估计量 (3.8.5) 可表示为：
$$
\widehat{\operatorname{Avar}}(\hat{\boldsymbol{\delta}}_{\text{2SLS}}) = \hat{\sigma}^2 (n^{-1} \mathbf{Z}' \mathbf{P} \mathbf{Z})^{-1} = n \cdot \hat{\sigma}^2 (\mathbf{Z}' \mathbf{P} \mathbf{Z})^{-1}
$$

**2. GMM 目标函数向 Sargan 统计量的转化**
有效 GMM 的二次型目标函数定义为 $J(\tilde{\boldsymbol{\delta}}) = n \cdot \mathbf{g}_n(\tilde{\boldsymbol{\delta}})' \widehat{\mathbf{S}}^{-1} \mathbf{g}_n(\tilde{\boldsymbol{\delta}})$。在条件同方差假设下，代入 $\widehat{\mathbf{S}} = \hat{\sigma}^2 \mathbf{S}_{xx}$ 和 $\mathbf{g}_n(\tilde{\boldsymbol{\delta}}) = n^{-1} \mathbf{X}' (\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})$：
$$\begin{aligned}
J(\tilde{\boldsymbol{\delta}}) &= n \cdot [n^{-1} \mathbf{X}' (\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})]' [\hat{\sigma}^2 n^{-1} \mathbf{X}' \mathbf{X}]^{-1} [n^{-1} \mathbf{X}' (\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})] \\
&= n \cdot n^{-1} (\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})' \mathbf{X} \cdot \frac{n}{\hat{\sigma}^2} (\mathbf{X}' \mathbf{X})^{-1} \cdot n^{-1} \mathbf{X}' (\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}}) \\
&= \frac{(\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})' \mathbf{X} (\mathbf{X}' \mathbf{X})^{-1} \mathbf{X}' (\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})}{\hat{\sigma}^2} \\
&= \frac{(\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})' \mathbf{P} (\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})}{\hat{\sigma}^2}
\end{aligned} \tag{Eq 3.8.12}$$
当 $\tilde{\boldsymbol{\delta}} = \hat{\boldsymbol{\delta}}_{\text{2SLS}}$ 时，代入残差 $\hat{\boldsymbol{\varepsilon}} = \mathbf{y} - \mathbf{Z} \hat{\boldsymbol{\delta}}_{\text{2SLS}}$，即得到 Sargan 统计量：
$$
\text{Sargan's statistic} = \frac{\hat{\boldsymbol{\varepsilon}}' \mathbf{P} \hat{\boldsymbol{\varepsilon}}}{\hat{\sigma}^2}
$$

#### 2SLS as an IV Estimator (将 2SLS 视为特定 IV 估计量)

2SLS 估计量可以被解释为一个特殊的工具变量 (IV) 估计量。在这个视角下，我们不直接使用原始工具变量 $\mathbf{x}_i$，而是使用解释变量 $\mathbf{z}_i$ 在工具变量空间 $\mathbf{x}_i$ 上的**投影值**（即第一阶段的拟合值）作为新的工具变量。

- **IV 估计量的一般形式**:
  设 $\hat{\mathbf{z}}_i$ 是为 $L$ 个回归变量 $\mathbf{z}_i$ 生成的 $L$ 个工具变量向量。其对应的 IV 估计量为：
  $$
  \hat{\boldsymbol{\delta}}_{IV} = \left( \frac{1}{n} \sum_{i=1}^n \hat{\mathbf{z}}_i \mathbf{z}_i' \right)^{-1} \frac{1}{n} \sum_{i=1}^n \hat{\mathbf{z}}_i y_i = (\hat{\mathbf{Z}}' \mathbf{Z})^{-1} \hat{\mathbf{Z}}' \mathbf{y} \tag{3.8.12}
  $$

- **2SLS 的特定工具变量矩阵**:
  在 2SLS 中，第 $\ell$ 个工具变量是 $z_{i \ell}$ 对 $\mathbf{x}_i$ 回归后的拟合值。全局矩阵形式为：
  $$
  \hat{\mathbf{Z}} = (\mathbf{X}(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}' \mathbf{z}_1, \dots, \mathbf{X}(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}' \mathbf{z}_L) = \mathbf{X}(\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}' \mathbf{Z} = \mathbf{P}\mathbf{Z} \tag{3.8.13}
  $$

- **代入推导 (Substitution)**:
  将 $\hat{\mathbf{Z}} = \mathbf{P}\mathbf{Z}$ 代入 IV 公式 (3.8.12) 中：
  $$\begin{aligned}
  \hat{\boldsymbol{\delta}}_{2SLS} &= ((\mathbf{P}\mathbf{Z})' \mathbf{Z})^{-1} (\mathbf{P}\mathbf{Z})' \mathbf{y} \\
  &= (\mathbf{Z}' \mathbf{P}' \mathbf{Z})^{-1} \mathbf{Z}' \mathbf{P}' \mathbf{y} \\
  &= (\mathbf{Z}' \mathbf{P} \mathbf{Z})^{-1} \mathbf{Z}' \mathbf{P} \mathbf{y} \quad (\because \mathbf{P} \text{ is symmetric and idempotent})
  \end{aligned}$$
  上式正是 2SLS 的标准矩阵表达式。这证明了 2SLS 本质上就是以 $\hat{\mathbf{Z}} = \mathbf{P}\mathbf{Z}$ 作为工具变量的 IV 估计。

#### 2SLS as Two Regressions (作为两阶段回归的 2SLS)

2SLS 的名称来源于其可以通过两次连续的 OLS 回归来实现：

1.  **第一阶段 (First Stage)**: 将所有 $L$ 个解释变量对所有工具变量 $\mathbf{x}_i$ 进行回归，获得拟合值 $\hat{\mathbf{z}}_i$。
    - *注：对于已经是先定（外生）的解释变量，其第一阶段回归的拟合值就是其自身，实际操作中无需重复回归。*
2.  **第二阶段 (Second Stage)**: 将因变量 $y_i$ 对第一阶段得到的拟合值 $\hat{\mathbf{z}}_i$ 进行 OLS 回归。

**系数的一致性证明**:
第二阶段 OLS 得到的系数估计量为：
$$\begin{aligned}
\hat{\boldsymbol{\delta}}_{\text{2nd-stage OLS}} &= (\hat{\mathbf{Z}}' \hat{\mathbf{Z}})^{-1} \hat{\mathbf{Z}}' \mathbf{y} \\
&= ((\mathbf{P}\mathbf{Z})' (\mathbf{P}\mathbf{Z}))^{-1} (\mathbf{P}\mathbf{Z})' \mathbf{y} \\
&= (\mathbf{Z}' \mathbf{P}' \mathbf{P} \mathbf{Z})^{-1} \mathbf{Z}' \mathbf{P} \mathbf{y} \\
&= (\mathbf{Z}' \mathbf{P} \mathbf{Z})^{-1} \mathbf{Z}' \mathbf{P} \mathbf{y} \quad (\because \mathbf{P} \text{ is symmetric and idempotent})
\end{aligned} \tag{Eq 3.8.16}$$
该结果与 2SLS/IV 估计量完全一致。

##### ⚠️ 核心陷阱：标准误的推断 (Pitfall: Statistical Inference)

虽然系数可以通过两步 OLS 获得，但**直接使用第二阶段 OLS 软件包输出的标准误是错误的**。

**原因分析 (The Residual Problem)**:
- **软件计算的残差**: 第二阶段 OLS 使用的是拟合值 $\hat{\mathbf{Z}}$，其计算的残差为 $\hat{\boldsymbol{\varepsilon}}_{\text{wrong}} = \mathbf{y} - \hat{\mathbf{Z}} \hat{\boldsymbol{\delta}}$。
- **真实的结构残差**: 2SLS 理论要求的残差应基于原始解释变量 $\mathbf{Z}$，即 $\hat{\boldsymbol{\varepsilon}}_{\text{correct}} = \mathbf{y} - \mathbf{Z} \hat{\boldsymbol{\delta}}$。

**数学推导 (Residual Difference)**:
$$\begin{aligned}
\mathbf{y} - \hat{\mathbf{Z}} \hat{\boldsymbol{\delta}} &= \mathbf{y} - \mathbf{P} \mathbf{Z} \hat{\boldsymbol{\delta}} \\
&= \mathbf{y} - \mathbf{Z} \hat{\boldsymbol{\delta}} + (\mathbf{Z} - \mathbf{P} \mathbf{Z}) \hat{\boldsymbol{\delta}} \\
&= \hat{\boldsymbol{\varepsilon}}_{\text{correct}} + (\mathbf{I} - \mathbf{P}) \mathbf{Z} \hat{\boldsymbol{\delta}}
\end{aligned} \tag{Eq 3.8.17}$$
由于两者不相等，第二阶段 OLS 估计的方差 $\hat{\sigma}^2_{\text{OLS}} = \frac{\hat{\boldsymbol{\varepsilon}}_{\text{wrong}}' \hat{\boldsymbol{\varepsilon}}_{\text{wrong}}}{n-L}$ 是 $\sigma^2$ 的非一致估计量。

> [!danger] 结论
> 进行统计推断（计算 $t$ 统计量、Wald 检验等）时，必须使用**原始变量 $\mathbf{Z}$** 来重新计算残差和方差估计量：
>
$$
\hat{\sigma}^2 = \frac{1}{n} \sum_{i=1}^n (y_i - \mathbf{z}_i' \hat{\boldsymbol{\delta}}_{2SLS})^2 \tag{Eq 3.8.18}
$$
只有这样得到的标准误才是渐近有效的。

#### When Regressors Are Predetermined (当解释变量均为先定变量)

当所有解释变量都是先定变量（即 $z_i \subset x_i$，解释变量集合是工具变量集合的子集），且误差项满足条件同方差时，有效 GMM 的距离函数 $J$ 与残差平方和 (SSR) 之间存在紧密联系。

##### 数学推导 (Mathematical Derivation)

从条件同方差下的 $J$ 统计量定义 (Eq 3.8.9') 出发：
$$\begin{aligned}
J(\tilde{\boldsymbol{\delta}}, (\hat{\sigma}^2 \cdot \mathbf{S}_{xx})^{-1}) &= \frac{(\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})' \mathbf{P} (\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})}{\hat{\sigma}^2} \\
&= \frac{\mathbf{y}' \mathbf{P} \mathbf{y} - 2\mathbf{y}' \mathbf{P} \mathbf{Z} \tilde{\boldsymbol{\delta}} + \tilde{\boldsymbol{\delta}}' \mathbf{Z}' \mathbf{P} \mathbf{Z} \tilde{\boldsymbol{\delta}}}{\hat{\sigma}^2} \\
&= \frac{\mathbf{y}' \mathbf{P} \mathbf{y} - 2\mathbf{y}' \mathbf{Z} \tilde{\boldsymbol{\delta}} + \tilde{\boldsymbol{\delta}}' \mathbf{Z}' \mathbf{Z} \tilde{\boldsymbol{\delta}}}{\hat{\sigma}^2} \quad (\because \mathbf{P}\mathbf{Z} = \mathbf{Z} \text{ when } z_i \subset x_i) \\
&= \frac{(\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})' (\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})}{\hat{\sigma}^2} - \frac{\mathbf{y}' \mathbf{y} - \mathbf{y}' \mathbf{P} \mathbf{y}}{\hat{\sigma}^2} \\
&= \frac{(\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})' (\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})}{\hat{\sigma}^2} - \frac{(\mathbf{y} - \hat{\mathbf{y}})' (\mathbf{y} - \hat{\mathbf{y}})}{\hat{\sigma}^2}
\end{aligned} \tag{3.8.14}$$
其中 $\hat{\mathbf{y}} \equiv \mathbf{P}\mathbf{y}$ 是 $\mathbf{y}$ 在工具变量空间 $\mathbf{x}$ 上的投影。

> [!tip] 推导要点
> 上式中，第二项 $\frac{(\mathbf{y} - \hat{\mathbf{y}})' (\mathbf{y} - \hat{\mathbf{y}})}{\hat{\sigma}^2}$ 与参数 $\tilde{\boldsymbol{\delta}}$ 无关。因此，最小化 $J$ 统计量等价于最小化第一项，即最小化残差平方和 $(\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})' (\mathbf{y} - \mathbf{Z} \tilde{\boldsymbol{\delta}})$。

##### 结论与性质 (Conclusions & Properties)

1.  **有效 GMM 即为 OLS**: 当解释变量外生时，有效 GMM 估计量退化为普通的 OLS 估计量。
2.  **受约束估计量**: 在原假设约束下的受约束有效 GMM 估计量即为受约束 OLS (Restricted OLS) 估计量。
3.  **检验统计量的计算**:
  - **Wald 统计量**或 **LR 统计量**可以通过施加约束前后的残差平方和之差来计算。
  - 计算公式：
$$
LR = \frac{SSR_{restricted} - SSR_{unrestricted}}{\hat{\sigma}^2}
$$
  - 该公式展示了 GMM 框架下的似然比原理与经典线性回归中 $F$ 检验（在大样本下）的一致性。

#### Testing a Subset of Orthogonality Conditions: Revisited

在条件同方差 (Assumption 3.7) 成立时，Proposition 3.7 中定义的子集检验统计量 $C$ 可以得到极大的简化。

##### C-统计量的 Sargan 差值形式

令 $\mathbf{X}$ 为全量工具变量矩阵，$\mathbf{X}_1$ 为其包含 $K_1$ 个“安全”变量的子矩阵。对应的两个有效 GMM 估计量（即 2SLS 估计量）为：
- **全集估计量**: $\hat{\boldsymbol{\delta}} = (\mathbf{Z}' \mathbf{P} \mathbf{Z})^{-1} \mathbf{Z}' \mathbf{P} \mathbf{y} \quad \text{其中 } \mathbf{P} = \mathbf{X}(\mathbf{X}' \mathbf{X})^{-1} \mathbf{X}' \tag{Eq 3.8.21}$
- **子集估计量**: $\bar{\boldsymbol{\delta}} = (\mathbf{Z}' \mathbf{P}_1 \mathbf{Z})^{-1} \mathbf{Z}' \mathbf{P}_1 \mathbf{y} \quad \text{其中 } \mathbf{P}_1 = \mathbf{X}_1(\mathbf{X}_1' \mathbf{X}_1)^{-1} \mathbf{X}_1' \tag{Eq 3.8.22}$

在此框架下，$C$ 统计量简化为两个 Sargan 统计量的差值：
$$
C = \frac{\hat{\boldsymbol{\varepsilon}}' \mathbf{P} \hat{\boldsymbol{\varepsilon}} - \bar{\boldsymbol{\varepsilon}}' \mathbf{P}_1 \bar{\boldsymbol{\varepsilon}}}{\hat{\sigma}^2} \xrightarrow{d} \chi^2(K - K_1) \tag{Eq 3.8.23}
$$
其中 $\hat{\boldsymbol{\varepsilon}} \equiv \mathbf{y} - \mathbf{Z}\hat{\boldsymbol{\delta}}$，$\bar{\boldsymbol{\varepsilon}} \equiv \mathbf{y} - \mathbf{Z}\bar{\boldsymbol{\delta}}$，且 $\hat{\sigma}^2 \equiv \hat{\boldsymbol{\varepsilon}}' \hat{\boldsymbol{\varepsilon}} / n$。

##### Hausman 检验统计量 (Hausman and Taylor, 1980)

另一种常用的检验思路是比较全集估计量 $\hat{\boldsymbol{\delta}}$（在 $H_0$ 下有效）和子集估计量 $\bar{\boldsymbol{\delta}}$（在 $H_0$ 下仍保持一致，但非有效）之间的差异。

**核心性质**:
根据 Hausman (1978)，在原假设下：
1. **方差排序**: $\operatorname{Avar}(\bar{\boldsymbol{\delta}}) \ge \operatorname{Avar}(\hat{\boldsymbol{\delta}})$。
2. **差值的方差**: 估计量差值的渐近方差等于其各自渐近方差之差：
   $$
   \operatorname{Avar}(\bar{\boldsymbol{\delta}} - \hat{\boldsymbol{\delta}}) = \operatorname{Avar}(\bar{\boldsymbol{\delta}}) - \operatorname{Avar}(\hat{\boldsymbol{\delta}})
   $$
   在同方差下，该方差可一致估计为：$\hat{\sigma}^2 \cdot n \cdot [(\mathbf{Z}' \mathbf{P}_1 \mathbf{Z})^{-1} - (\mathbf{Z}' \mathbf{P} \mathbf{Z})^{-1}]$。

**Hausman 统计量定义**:
$$
H \equiv \frac{(\bar{\boldsymbol{\delta}} - \hat{\boldsymbol{\delta}})' [(\mathbf{Z}' \mathbf{P}_1 \mathbf{Z})^{-1} - (\mathbf{Z}' \mathbf{P} \mathbf{Z})^{-1}]^{-} (\bar{\boldsymbol{\delta}} - \hat{\boldsymbol{\delta}})}{\hat{\sigma}^2} \tag{3.8.22}
$$
其中 $\{\cdot\}^{-}$ 表示广义逆（Generalized Inverse）。

##### Hausman 统计量的详细数学推导

Hausman 检验的核心在于利用“有效估计量”与“估计量之差”在原假设下的正交性。

**1. Hausman 引理 (Hausman Lemma, 1978)**
假设有两个估计量 $\hat{\theta}_E$（在 $H_0$ 下渐近有效）和 $\hat{\theta}_C$（在 $H_0$ 下一致但非有效）。
在 $H_0$ 成立时，必有：
$$
\operatorname{Cov}(\hat{\theta}_C - \hat{\theta}_E, \hat{\theta}_E) = \mathbf{0}
$$

**证明思路**:
如果该协方差不为零，我们可以构造一个新的线性组合 $\hat{\theta}^* = \hat{\theta}_E + \mathbf{k}(\hat{\theta}_C - \hat{\theta}_E)$。通过调整权重 $\mathbf{k}$，可以使得 $\hat{\theta}^*$ 的方差小于 $\hat{\theta}_E$（在 $H_0$ 下有效）。这与 $\hat{\theta}_E$ 是有效估计量（方差已达下界）的假设矛盾。因此，协方差必须为零。

**2. 差值方差公式的推导**
利用上述正交性，我们计算差值 $\bar{\boldsymbol{\delta}} - \hat{\boldsymbol{\delta}}$ 的方差：
$$\begin{aligned}
\operatorname{Var}(\bar{\boldsymbol{\delta}}) &= \operatorname{Var}(\bar{\boldsymbol{\delta}} - \hat{\boldsymbol{\delta}} + \hat{\boldsymbol{\delta}}) \\
&= \operatorname{Var}(\bar{\boldsymbol{\delta}} - \hat{\boldsymbol{\delta}}) + \operatorname{Var}(\hat{\boldsymbol{\delta}}) + 2\operatorname{Cov}(\bar{\boldsymbol{\delta}} - \hat{\boldsymbol{\delta}}, \hat{\boldsymbol{\delta}}) \\
&= \operatorname{Var}(\bar{\boldsymbol{\delta}} - \hat{\boldsymbol{\delta}}) + \operatorname{Var}(\hat{\boldsymbol{\delta}}) + \mathbf{0} \quad (\text{By Eq 3.8.25})
\end{aligned}$$
移项得：
$$
\operatorname{Var}(\bar{\boldsymbol{\delta}} - \hat{\boldsymbol{\delta}}) = \operatorname{Var}(\bar{\boldsymbol{\delta}}) - \operatorname{Var}(\hat{\boldsymbol{\delta}})
$$

**3. 代入 2SLS 矩阵表达式**
在条件同方差下，将有效估计量（全集 $\mathbf{X}$）和非有效估计量（子集 $\mathbf{X}_1$）的方差表达式代入：
- $\operatorname{Avar}(\hat{\boldsymbol{\delta}}) = \sigma^2 \cdot n \cdot (\mathbf{Z}' \mathbf{P} \mathbf{Z})^{-1}$
- $\operatorname{Avar}(\bar{\boldsymbol{\delta}}) = \sigma^2 \cdot n \cdot (\mathbf{Z}' \mathbf{P}_1 \mathbf{Z})^{-1}$

得到差值的渐近方差估计：
$$
\widehat{\operatorname{Avar}}(\bar{\boldsymbol{\delta}} - \hat{\boldsymbol{\delta}}) = \hat{\sigma}^2 \cdot n \cdot [(\mathbf{Z}' \mathbf{P}_1 \mathbf{Z})^{-1} - (\mathbf{Z}' \mathbf{P} \mathbf{Z})^{-1}]
$$

**4. 统计量分布性质 (Distribution Properties)**
- $H$ 统计量在大样本下服从卡方分布。
- **自由度**: $df = \min(K - K_1, L - s)$，其中 $s = \# z_i \cap x_{i1}$（即既是解释变量又是安全工具变量的个数）。
- **注意**: $C$ 统计量和 $H$ 统计量在一般情况下是不等的，它们从不同的测度（矩条件的拟合度 vs. 参数估计值的变动）来审视工具变量的有效性。

##### Hausman vs. Wald: 核心逻辑对比

虽然两者在数学形式上都表现为 $\text{Vector}' \times [\text{Variance Matrix}]^{-1} \times \text{Vector}$ 的“三明治”结构，但其物理意义完全不同：

| 特性            | Wald 统计量 ($W$)                                                                    | Hausman 统计量 ($H$)                                                                           |
| :------------ | :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------ |
| **测试目标**      | **估计量内部的约束**                                                                      | **两个估计量之间的一致性**                                                                             |
| **原假设 $H_0$** | 参数满足特定数值限制 (如 $\mathbf{R}\boldsymbol{\delta} = \mathbf{r}$)                       | 模型设定无误，两个估计量均一致且其中一个有效                                                                      |
| **随机变量**      | 仅涉及一个随机向量 $\hat{\boldsymbol{\delta}}$                                             | 涉及两个随机向量的差值 $(\bar{\boldsymbol{\delta}} - \hat{\boldsymbol{\delta}})$                       |
| **meat**      | 线性约束映射后的方差 $\mathbf{R} \operatorname{Var}(\hat{\boldsymbol{\delta}}) \mathbf{R}'$ | 两个随机变量**差值的方差** $\operatorname{Var}(\bar{\boldsymbol{\delta}} - \hat{\boldsymbol{\delta}})$ |

**The Intuition:**

1.  **Wald 是“点到面的距离”**:
    Wald 统计量是在**同一个模型**下，看你的估计点 $\hat{\boldsymbol{\delta}}$ 距离“约束平面” $\mathbf{R}\boldsymbol{\delta} = \mathbf{r}$ 有多远。
    $$
    W = n \cdot (\text{偏离度})' \cdot [\text{该估计量的精度}]^{-1} \cdot (\text{偏离度}) \tag{Eq 3.8.29}
    $$

2.  **Hausman 是“点到点的距离”**:
    Hausman 统计量是看**两个不同模型**给出的两组估计值 $\hat{\boldsymbol{\delta}}$ 和 $\bar{\boldsymbol{\delta}}$ 离得有多远。
    - 在 $H_0$ 下，两个点应该收敛到同一个真相（$\text{plim}$ 相同），所以差值应该为 0。
    - 三明治中间的方差阵利用了“有效性”带来的简化：由于有效估计量与差值不相关，差值的方差直接等于两个方差相减，这使得 Hausman 统计量能够精准锁定由于**内生性或模型设定错误**导致的系统性位移。

> [!important] 核心区别总结
:::{admonition} Wald 检验
通常用于参数显著性测试（例如：教育的回报率是否为 0？）；
**Hausman 检验**通常用于模型稳健性或规范性测试（例如：OLS 是否因为内生性而失效？此时比较 OLS 和 2SLS）。


:::

**Returns to Schooling IV Application**
