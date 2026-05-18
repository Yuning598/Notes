---
orphan: true
---

# Back 模型 - 相关扩展

来源：[Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.8 相关扩展模型（对应课件 11.2）](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#11.8 相关扩展模型（对应课件 11.2）)

## 核心内容

说明：下面的公式是把几篇扩展相对于 Back (1992) 的关键变化写成统一骨架，便于直观看机制，不是原文完整设定。

### Insider Trading and Options (Back, RFS, 1993)

衍生品的非线性 payoff 使做市商从订单流中学习私人信息的方式不再像 Back (1992) 那样线性，因此学习问题更复杂。最小化地写，若

$$
\hat v_t:=E[\tilde v\mid \mathcal F_t^Y],
\qquad
\Sigma_t:=\operatorname{Var}(\tilde v\mid \mathcal F_t^Y),
$$

则股票价格是

$$
p_t=\hat v_t,
$$

而衍生品价格变成

$$
q_t=E[g(\tilde v)\mid \mathcal F_t^Y]=\int g(v)\phi(v;\hat v_t,\Sigma_t)dv=:G(\hat v_t,\Sigma_t).
$$

因此期权类价格同时依赖后验均值与后验方差，而不再只是线性地依赖 $\hat v_t$。

### Multiple Insiders (Back, Cao and Willard, JF, 2000)

若所有 informed traders 拥有完全相同的私人信息，则连续时间竞争会过于激烈，从而不存在均衡。若不同 insider 的私人信息并不完全相同，而是具有相关性，则可以存在均衡。最小化地写，若

$$
dY_t=\left(\sum_{i=1}^N\theta_t^i\right)dt+\sigma_z dB_t,
\qquad
dp_t=\lambda_t dY_t,
$$

则对称线性猜测给出

$$
\theta_t^i=\frac{\tilde v-p_t}{\lambda_t(N+1)},
\qquad
\sum_{i=1}^N\theta_t^i=\frac{N}{N+1}\frac{\tilde v-p_t}{\lambda_t}.
$$

共同信息会把交易前置化；若改成相关但不完全相同的信号 $s_i=\tilde v+\varepsilon_i$，则每个人只对自己的残差信息激进交易，均衡才可能恢复。

### Uncertainty of Informed Trading (Back, Crotty and Li, RFS, 2018)

原始 Kyle 模型默认“知情者”总是有私人信息。若引入激活变量 $I\in\{0,1\}$，并写成

$$
\tilde v=\bar v+I\eta,
\qquad
P(I=1)=\pi,
$$

则

$$
F_{\tilde v}=(1-\pi)\delta_{\bar v}+\pi F_{\eta}(\cdot-\bar v),
$$

从而在 $\tilde v=\bar v$ 处出现原子点。做市商价格为

$$
p_t=(1-\pi_t)\bar v+\pi_t m_t^{(1)},
$$

所以即便真实状态是 $I=0$，只要市场仍给激活状态正概率 $\pi_t>0$，潜在 informed trader 仍可围绕 $\bar v-p_t$ 的楔子进行交易。

### Corporate Activism and Liquidity (Back, Collin-Dufresne, Fos, Li, and Ljungqvist, Econometrica, 2018)

corporate activist 对其 costly effort 是否能改善公司价值拥有私人信息。若用最小化骨架写成控制权获取问题，设 activism 成功的每股价值增量为 $\Delta(a)$，则

$$
\Pi(x;a)=x\Delta(a)-\frac{\lambda}{2}x^2-C\mathbf 1_{\{x\ge \bar x\}}.
$$

内点最优持仓满足

$$
x^u(a)=\frac{\Delta(a)}{\lambda},
$$

而 activism 可行至少要求

$$
\Delta(a)\ge \lambda\bar x.
$$

于是 $\lambda$ 越高，争取控制权越难，流动性与治理效率就被直接连在一起。

### Exercise 3: 对数正态终值的扩展

设

$$
\log \tilde v\sim N(\mu,\sigma_v^2),
\qquad
\lambda=\frac{\sigma_v}{\sigma_z}.
$$

则

$$
\begin{aligned}
P_0
&=
E[\tilde v] \\
&=
E[e^{\log \tilde v}] \\
&=
\exp\left(\mu+\frac{1}{2}\sigma_v^2\right).
\end{aligned}
$$

课件要求验证以下候选策略构成均衡：

$$
\begin{aligned}
P_0&=e^{\mu+\sigma_v^2/2}, \\
dP_t&=\lambda P_t\,dY_t, \\
\theta_t&=\frac{(\log \tilde v-\mu)/\lambda-Y_t}{1-t}.
\end{aligned}
$$

并进一步证明：

$$
W_t:=\frac{Y_t}{\sigma_z}
$$

在条件于 $\tilde v$ 时是以 terminal value $(\log \tilde v-\mu)/\sigma_v$ 为终点的 Brownian bridge；同时对

$$
J(t,p,v)=\frac{p-v+v(\log v-\log p)}{\lambda}+\frac{1}{2}\sigma_v\sigma_z(1-t)v
$$

验证 verification theorem。
