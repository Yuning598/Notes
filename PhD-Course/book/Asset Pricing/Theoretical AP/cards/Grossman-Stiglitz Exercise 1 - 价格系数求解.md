---
orphan: true
---

# Grossman-Stiglitz Exercise 1 - 价格系数求解

来源：[Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#10.2.7 Exercise](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#10.2.7 Exercise)

返回：[Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning)

## 目标

在线性价格猜测

$$
p=\alpha \bar v+\beta s-\gamma X
$$

下，求均衡价格系数 $\alpha,\beta,\gamma$，并说明当 $\rho_x=\infty$ 时价格为何 fully revealing。

## 第一步：写出两类投资者的需求

由 [Asset Pricing/Theoretical AP/cards/CARA-Normal framework - 均值方差等价与最优需求](Asset Pricing/Theoretical AP/cards/CARA-Normal framework - 均值方差等价与最优需求)，

$$
X_i=\frac{E_i[v]-p}{\lambda_i\operatorname{Var}_i(v)}.
$$

因此

$$
\begin{aligned}
X_I
&=\frac{E[v\mid s]-p}{\lambda_I\operatorname{Var}(v\mid s)}
=\frac{\rho_s s+\rho_v\bar v-(\rho_s+\rho_v)p}{\lambda_I},\\
X_U
&=\frac{E[v\mid p]-p}{\lambda_U\operatorname{Var}(v\mid p)}
=\frac{\rho_\theta \theta+\rho_v\bar v-(\rho_\theta+\rho_v)p}{\lambda_U},
\end{aligned}
$$

其中

$$
\theta\equiv \frac{p-\alpha\bar v}{\beta}=s-\frac{\gamma}{\beta}X.
$$

## 第二步：代入市场清算

均衡要求

$$
X_I+X_U=X.
$$

把上式代入，并再代入线性价格猜测 $p=\alpha\bar v+\beta s-\gamma X$，同时注意

$$
p-\alpha\bar v=\beta s-\gamma X,
$$

可得

$$
\begin{aligned}
0
&=\frac{1}{\lambda_I}\Big(\rho_s s+\rho_v\bar v-(\rho_s+\rho_v)(\alpha\bar v+\beta s-\gamma X)\Big)\\
&\quad+\frac{1}{\lambda_U}\Big(\rho_\theta(\beta s-\gamma X)/\beta+\rho_v\bar v-(\rho_\theta+\rho_v)(\alpha\bar v+\beta s-\gamma X)\Big)-X.
\end{aligned}
$$

把 $s,\bar v,X$ 的系数分别收集：

$$
\begin{aligned}
0
&=\left[\frac{\rho_s-(\rho_s+\rho_v)\beta}{\lambda_I}+\frac{\rho_\theta-(\rho_\theta+\rho_v)\beta}{\lambda_U}\right]s\\
&\quad+\left[\frac{\rho_v-(\rho_s+\rho_v)\alpha}{\lambda_I}+\frac{\rho_v-(\rho_\theta+\rho_v)\alpha}{\lambda_U}\right]\bar v\\
&\quad+\left[\frac{(\rho_s+\rho_v)\gamma}{\lambda_I}+\frac{\gamma\big((\rho_\theta+\rho_v)-\rho_\theta/\beta\big)}{\lambda_U}-1\right]X.
\end{aligned}
$$

由于该恒等式对所有 $(s,\bar v,X)$ 都成立，所以三组系数都必须等于 0。

**第三步：先解 $\beta$ 和 $\alpha$**

记

$$
D\equiv \lambda_I(\rho_\theta+\rho_v)+\lambda_U(\rho_s+\rho_v).
$$

**1. 由 $s$ 的系数等于 0**

$$
\frac{\rho_s-(\rho_s+\rho_v)\beta}{\lambda_I}+\frac{\rho_\theta-(\rho_\theta+\rho_v)\beta}{\lambda_U}=0.
$$

两边乘以 $\lambda_I\lambda_U$：

$$
\lambda_U\rho_s-\lambda_U(\rho_s+\rho_v)\beta+\lambda_I\rho_\theta-\lambda_I(\rho_\theta+\rho_v)\beta=0.
$$

整理得

$$
\beta\big[\lambda_I(\rho_\theta+\rho_v)+\lambda_U(\rho_s+\rho_v)\big]=\lambda_I\rho_\theta+\lambda_U\rho_s,
$$

即

$$
\beta D=\lambda_I\rho_\theta+\lambda_U\rho_s,
\qquad
\beta=\frac{\lambda_I\rho_\theta+\lambda_U\rho_s}{D}.
$$

**2. 由 $\bar v$ 的系数等于 0**

$$
\frac{\rho_v-(\rho_s+\rho_v)\alpha}{\lambda_I}+\frac{\rho_v-(\rho_\theta+\rho_v)\alpha}{\lambda_U}=0.
$$

同样乘以 $\lambda_I\lambda_U$：

$$
\lambda_U\rho_v-\lambda_U(\rho_s+\rho_v)\alpha+\lambda_I\rho_v-\lambda_I(\rho_\theta+\rho_v)\alpha=0.
$$

因此

$$
\alpha\big[\lambda_I(\rho_\theta+\rho_v)+\lambda_U(\rho_s+\rho_v)\big]=\rho_v(\lambda_I+\lambda_U),
$$

即

$$
\alpha D=\rho_v(\lambda_I+\lambda_U),
\qquad
\alpha=\frac{\rho_v(\lambda_I+\lambda_U)}{D}.
$$

**第四步：再解 $\gamma$**

由 $X$ 的系数等于 0：

$$
\frac{(\rho_s+\rho_v)\gamma}{\lambda_I}+\frac{\gamma\big((\rho_\theta+\rho_v)-\rho_\theta/\beta\big)}{\lambda_U}-1=0.
$$

两边乘以 $\lambda_I\lambda_U\beta$，得

$$
\gamma\beta\lambda_U(\rho_s+\rho_v)+\gamma\lambda_I\big(\beta(\rho_\theta+\rho_v)-\rho_\theta\big)-\beta\lambda_I\lambda_U=0.
$$

整理为

$$
\gamma\Big(\beta[\lambda_I(\rho_\theta+\rho_v)+\lambda_U(\rho_s+\rho_v)]-\lambda_I\rho_\theta\Big)=\beta\lambda_I\lambda_U.
$$

也就是

$$
\gamma(\beta D-\lambda_I\rho_\theta)=\beta\lambda_I\lambda_U.
$$

再利用上一步

$$
\beta D=\lambda_I\rho_\theta+\lambda_U\rho_s,
$$

可得

$$
\gamma\lambda_U\rho_s=\beta\lambda_I\lambda_U,
$$

故

$$
\gamma=\frac{\lambda_I}{\rho_s}\beta.
$$

**第五步：解出 $\rho_\theta$**

由

$$
\theta=s-\frac{\gamma}{\beta}X,
$$

以及 $s\mid v\sim N(v,1/\rho_s)$、$X\sim N(0,1/\rho_x)$ 且独立，

$$
\frac{1}{\rho_\theta}=\frac{1}{\rho_s}+\left(\frac{\gamma}{\beta}\right)^2\frac{1}{\rho_x}.
$$

代入

$$
\frac{\gamma}{\beta}=\frac{\lambda_I}{\rho_s},
$$

得

$$
\frac{1}{\rho_\theta}=\frac{1}{\rho_s}+\left(\frac{\lambda_I}{\rho_s}\right)^2\frac{1}{\rho_x},
$$

即

$$
\rho_\theta=\frac{\rho_s^2\rho_x}{\lambda_I^2+\rho_s\rho_x}.
$$

## 最终答案

因此均衡价格系数为

$$
\alpha=\frac{\rho_v(\lambda_I+\lambda_U)}{D},
\qquad
\beta=\frac{\lambda_I\rho_\theta+\lambda_U\rho_s}{D},
\qquad
\gamma=\frac{\lambda_I}{\rho_s}\beta,
$$

其中

$$
D\equiv \lambda_I(\rho_\theta+\rho_v)+\lambda_U(\rho_s+\rho_v),
\qquad
\rho_\theta=\frac{\rho_s^2\rho_x}{\lambda_I^2+\rho_s\rho_x}.
$$

**当 $\rho_x=\infty$ 时为何 fully revealing**

若 $\rho_x=\infty$，则 $1/\rho_x=0$，所以

$$
\frac{1}{\rho_\theta}=\frac{1}{\rho_s},
\qquad
\rho_\theta=\rho_s.
$$

又因为

$$
\theta=s-\frac{\gamma}{\beta}X,
$$

当 $\rho_x=\infty$ 时，$X$ 没有噪声，模型里等价于价格观测中的供给噪声项消失，因此

$$
\theta=s.
$$

也就是说，无知情者虽然没有直接观察到 $s$，却能从价格中恢复出与 $s$ 完全相同的信息。

把 $\rho_\theta=\rho_s$ 代回系数公式，

$$
D=(\lambda_I+\lambda_U)(\rho_s+\rho_v),
$$

所以

$$
\beta=\frac{\rho_s}{\rho_s+\rho_v},
\qquad
\alpha=\frac{\rho_v}{\rho_s+\rho_v},
\qquad
\gamma=\frac{\lambda_I}{\rho_s+\rho_v}.
$$

于是价格写成

$$
p=\frac{\rho_v}{\rho_s+\rho_v}\bar v+\frac{\rho_s}{\rho_s+\rho_v}s-\frac{\lambda_I}{\rho_s+\rho_v}X.
$$

若把供给项移到左边，

$$
p+\gamma X=\frac{\rho_v}{\rho_s+\rho_v}\bar v+\frac{\rho_s}{\rho_s+\rho_v}s.
$$

右边只依赖于常数 $\bar v$ 和私人信号 $s$，因此价格对 $s$ 是 fully revealing 的。
