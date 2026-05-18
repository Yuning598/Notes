---
orphan: true
---

# One-period Kyle 模型复习

#考点/Kyle模型 #考点/内幕交易 #考点/噪声交易 #考点/市场深度 #考点/信息不对称

## 基本设定

one-period Kyle 的核心是：market maker 只观察总订单流 $y$，不能区分 insider order 和 noise order。

$$
\begin{aligned}
v&\sim N(0,\sigma_v^2),\\
u&\sim N(0,\sigma_u^2),\qquad v\perp u,\\
x&=\beta v,\\
y&=x+u=\beta v+u,\\
p&=E[v\mid y]=\lambda y.
\end{aligned}
$$

- $v$：资产终值 fundamental value。
- $x$：insider 的订单。
- $u$：noise trader 的订单。
- $y$：market maker 观察到的 total order flow。
- $\lambda$：price impact / illiquidity。
- $\beta$：insider trading intensity。

## Insider 最优反应

风险中性 insider 最大化期望利润：

$$
\begin{aligned}
\max_x E[x(v-p)\mid v]
&=\max_x x\big(v-\lambda x\big) \\
0
&=v-2\lambda x \\
x^*(v)
&=\frac{v}{2\lambda}
=\beta v,
\qquad
\beta=\frac{1}{2\lambda}.
\end{aligned}
$$

需求有限不是因为风险厌恶，而是因为 insider 内生地考虑自己的 price impact：买得越多，价格越被自己推高。

## Market Maker 定价

竞争性、风险中性的 market maker 满足 zero-profit condition：

$$
\begin{aligned}
p
&=E[v\mid y] \\
&=\frac{\operatorname{Cov}(v,y)}{\operatorname{Var}(y)}y \\
&=\frac{\operatorname{Cov}(v,\beta v+u)}
{\operatorname{Var}(\beta v+u)}y \\
&=\frac{\beta\sigma_v^2}{\beta^2\sigma_v^2+\sigma_u^2}y.
\end{aligned}
$$

所以

$$
\begin{aligned}
\lambda
&=\frac{\beta\sigma_v^2}{\beta^2\sigma_v^2+\sigma_u^2}.
\end{aligned}
$$

## 线性均衡

把 insider optimality 和 market efficiency 联立：

$$
\begin{aligned}
\beta&=\frac{1}{2\lambda},\\
\lambda&=\frac{\beta\sigma_v^2}{\beta^2\sigma_v^2+\sigma_u^2}.
\end{aligned}
$$

解得 standard one-period Kyle equilibrium：

$$
\begin{aligned}
\boxed{\lambda=\frac{\sigma_v}{2\sigma_u}},
\qquad
\boxed{\beta=\frac{\sigma_u}{\sigma_v}}.
\end{aligned}
$$

因此均衡为

$$
\begin{aligned}
x&=\frac{\sigma_u}{\sigma_v}v,\\
y&=\frac{\sigma_u}{\sigma_v}v+u,\\
p&=\frac{\sigma_v}{2\sigma_u}y.
\end{aligned}
$$

## 直觉

$$
\begin{aligned}
\sigma_u\uparrow
&\Longrightarrow
\text{noise order 更大，insider 更容易隐藏} \\
&\Longrightarrow
\beta\uparrow,\qquad \lambda\downarrow;\\
\sigma_v\uparrow
&\Longrightarrow
\text{private information 更有价值，adverse selection 更强} \\
&\Longrightarrow
\beta\downarrow,\qquad \lambda\uparrow.
\end{aligned}
$$

market depth 常写成 $1/\lambda$；$\lambda$ 越大，同样的 order flow 导致价格变化越大，市场越不 liquid。
