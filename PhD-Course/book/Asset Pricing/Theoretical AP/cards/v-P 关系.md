---
orphan: true
---

# v 与 P 的关系

在 Kyle 连续时间模型中，做市商对资产价值 $\tilde v$ 的 **条件期望** 给出价格

$$
P_t = \mathbb{E}\bigl[\tilde v\mid \mathcal{F}_t^{Y}\bigr] = \bar v + \lambda Y_t,
$$

其中

- $\bar v$ 为 $\tilde v$ 的先验均值，
- $Y_t = X_t + Z_t$ 为累计的净订单流，
- $\lambda$ 为信息吸收系数（每单位净订单流对价格的冲击强度）。

**关键等价式**

$$
\frac{\tilde v - P_t}{\lambda} = \frac{\tilde v - \bar v}{\lambda} - Y_t,
$$

该式说明真实价值与当前报价的差距（左侧）等价于 **先验偏差** 减去 **已观测订单流**（右侧），这正是知情者能够利用的超额信息。

---

**应用**：知情者的最优交易速度 $\theta_t$ 正比于上述剩余误差，并按剩余时间 $1-t$ 归一化。

$$
\theta_t = \frac{\frac{\tilde v - \bar v}{\lambda} - Y_t}{1-t}
       = \frac{\tilde v - P_t}{(1-t)\lambda}.
$$

---

**参考**：该推导在章节 [11.2 均衡猜测](11.2 均衡猜测) 中给出，可配合卡片 [Asset Pricing/Theoretical AP/cards/Back 1992 - 净订单流 SDE](Asset Pricing/Theoretical AP/cards/Back 1992 - 净订单流 SDE) 与 [Asset Pricing/Theoretical AP/cards/Kalman-Bucy - 一般公式](Asset Pricing/Theoretical AP/cards/Kalman-Bucy - 一般公式) 进一步阅读。
