---
orphan: true
---

# Kyle Exercise 2 - 两期利润比较与解释

来源：[Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#^exercise-kyle-two-period](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#^exercise-kyle-two-period)

返回：[Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning)

## 目标

Solve a two-period Kyle model, in which trader can trade two times before the information is released. Assume that the liquidity trades are iid normal $N(0,\sigma^2/2)$ for both trading periods. Given the informed trader’s information $v$, what is the expected trading profit for the informed in the one-period and two-period models? What are the informed trading profit when $v=v_0$? It seems that the informed trader can make a trading profit even when his information is the same as the public. How do you interpret this?

## 一期模型

记

$$
d:=v-v_0.
$$

线性均衡猜测为

$$
\begin{aligned}
x&=\beta(v-p_0), \\
p&=p_0+\lambda X, \\
X&=x+u,\qquad u\sim N(0,\sigma^2), \\
\Pi^{(1)}&=(v-p)x.
\end{aligned}
$$

知情者最大化

$$
\max_x E[(v-p)x],
\qquad
p=p_0+\lambda X.
$$

代入约束得

$$
\begin{aligned}
E[(v-p)x]
&=
E[(v-p_0-\lambda X)x],
\end{aligned}
$$

于是

$$
\begin{aligned}
\frac{\partial}{\partial x}E[(v-p_0-\lambda X)x]
&=
E[v-p_0-\lambda X]-\lambda x \\
&=
E[v]-p_0-2\lambda x \\
&=
v_0-p_0-2\lambda x.
\end{aligned}
$$

代入 $x=\beta(v-p_0)$ 并要求对所有 $v$ 成立，

$$
\begin{aligned}
0
&=
v_0-p_0-2\lambda\beta(v-p_0)
\quad\forall v \\
&\Longleftrightarrow
\begin{cases}
p_0=v_0,\\[4pt]
\beta=\dfrac{1}{2\lambda}.
\end{cases}
\end{aligned}
$$

做市商零利润定价为

$$
p=E[v\mid X] =
v_0+\frac{\operatorname{Cov}(v,X)}{\operatorname{Var}(X)}X.
$$

这里直接套用 [Asset Pricing/Theoretical AP/cards/正态条件期望 - 线性形式](Asset Pricing/Theoretical AP/cards/正态条件期望 - 线性形式)。
由 $X=\beta(v-v_0)+u$ 且 $u\perp v$，

$$
\begin{aligned}
\operatorname{Cov}(v,X)
&=
\beta\Sigma_0, \\
\operatorname{Var}(X)
&=
\beta^2\Sigma_0+\sigma^2,
\end{aligned}
$$

因此

$$
\lambda =
\frac{\beta\Sigma_0}{\beta^2\Sigma_0+\sigma^2}.
$$

与 $\beta=\frac{1}{2\lambda}$ 联立，

$$
\begin{aligned}
\lambda
&=
\frac{\Sigma_0/(2\lambda)}{\Sigma_0/(4\lambda^2)+\sigma^2} \\
\lambda^2
&=
\frac{\Sigma_0}{4\sigma^2} \\
\lambda
&=
\frac{\sqrt{\Sigma_0}}{2\sigma},
\qquad
\beta =
\frac{\sigma}{\sqrt{\Sigma_0}}.
\end{aligned}
$$

条件利润为

$$
\begin{aligned}
E[\Pi^{(1)}\mid v]
&=
E[(v-p)x\mid v] \\
&=
E[(v-v_0-\lambda(x+u))x\mid v] \\
&=
(v-v_0)x-\lambda x^2-\lambda xE[u\mid v] \\
&=
(v-v_0)x-\lambda x^2 \\
&=
x[(v-v_0)-\lambda x] \\
&=
\beta(v-v_0)^2(1-\lambda\beta) \\
&=
\frac{\sigma}{\sqrt{\Sigma_0}}(v-v_0)^2\left(1-\frac12\right) \\
&=
\frac{\sigma}{2\sqrt{\Sigma_0}}d^2.
\end{aligned}
$$

无条件利润为

$$
\begin{aligned}
E[\Pi^{(1)}]
&=
E[E[\Pi^{(1)}\mid v]] \\
&=
\frac{\sigma}{2\sqrt{\Sigma_0}}E[d^2] \\
&=
\frac{\sigma}{2\sqrt{\Sigma_0}}\Sigma_0 \\
&=
\frac{\sigma\sqrt{\Sigma_0}}{2}.
\end{aligned}
$$

特别地，

$$
v=v_0
\Longrightarrow
E[\Pi^{(1)}\mid v=v_0]=0.
$$

## 两期模型

猜测线性均衡

$$
\begin{aligned}
x_1&=\beta_1(v-v_0), \qquad p_1=v_0+\lambda_1 y_1,\qquad y_1=x_1+u_1,\\
x_2&=\beta_2(v-p_1), \qquad p_2=p_1+\lambda_2 y_2,\qquad y_2=x_2+u_2,
\end{aligned}
$$

其中

$$
u_1,u_2\overset{iid}{\sim}N(0,\sigma^2/2).
$$

### 第二期先解

给定 $p_1$ 后，第二期就是一个剩余方差为

$$
\Sigma_1:=\operatorname{Var}(v\mid y_1)
$$

且噪声方差为 $\sigma^2/2$ 的单期 Kyle。直接替换一期结果

$$
\begin{aligned}
\beta_2
&=
\frac{\sqrt{\sigma^2/2}}{\sqrt{\Sigma_1}} =
\frac{\sigma}{\sqrt{2\Sigma_1}}, \\
\lambda_2
&=
\frac{\sqrt{\Sigma_1}}{2\sqrt{\sigma^2/2}} =
\frac{\sqrt{\Sigma_1}}{\sqrt{2}\sigma}.
\end{aligned}
$$

于是

$$
\begin{aligned}
E[\Pi_2\mid v,p_1]
&=
E[(v-p_2)x_2\mid v,p_1] \\
&=
(v-p_1-\lambda_2 x_2)x_2 \\
&=
\frac{\beta_2}{2}(v-p_1)^2 \\
&=
\frac{\sigma}{2\sqrt{2\Sigma_1}}(v-p_1)^2.
\end{aligned}
$$

### 第一期问题

设

$$
d:=v-v_0.
$$

则第一期期望利润与延续价值为

$$
\begin{aligned}
E[(v-p_1)x_1\mid v]
&=
E[(v-v_0-\lambda_1y_1)x_1\mid v] \\
&=
(d-\lambda_1x_1)x_1,
\end{aligned}
$$

以及

$$
\begin{aligned}
E[\Pi_2\mid v]
&=
E[E[\Pi_2\mid v,p_1]\mid v] \\
&=
\frac{\sigma}{2\sqrt{2\Sigma_1}}E[(v-p_1)^2\mid v].
\end{aligned}
$$

因此第 1 期优化为

$$
\max_{x_1}\left\{
(d-\lambda_1x_1)x_1
+
\frac{\sigma}{2\sqrt{2\Sigma_1}}E[(v-p_1)^2\mid v]
\right\}.
$$

由

$$
p_1=v_0+\lambda_1(x_1+u_1)
\Longleftrightarrow
v-p_1=d-\lambda_1x_1-\lambda_1u_1,
$$

可得

$$
\begin{aligned}
E[(v-p_1)^2\mid v]
&=
E[(d-\lambda_1x_1-\lambda_1u_1)^2\mid v] \\
&=
(d-\lambda_1x_1)^2+\lambda_1^2\frac{\sigma^2}{2}.
\end{aligned}
$$

所以

$$
\max_{x_1}\left\{
(d-\lambda_1x_1)x_1
+
\frac{\sigma}{2\sqrt{2\Sigma_1}}
\left[
(d-\lambda_1x_1)^2+\lambda_1^2\frac{\sigma^2}{2}
\right]
\right\}.
$$

一阶条件为

$$
\begin{aligned}
0
&=
d-2\lambda_1x_1-\frac{\sigma\lambda_1}{\sqrt{2\Sigma_1}}(d-\lambda_1x_1).
\end{aligned}
$$

代入 $x_1=\beta_1d$ 并除以 $d$，

$$
0 =
1-2\lambda_1\beta_1-\frac{\sigma\lambda_1}{\sqrt{2\Sigma_1}}(1-\lambda_1\beta_1).
$$

### 第一轮交易后的后验方差

令

$$
\tilde y_1:=y_1+\beta_1v_0=\beta_1v+u_1,
\qquad
u_1\sim N(0,\sigma^2/2).
$$

由 [Asset Pricing/Theoretical AP/cards/正态条件方差](Asset Pricing/Theoretical AP/cards/正态条件方差)，

$$
\begin{aligned}
\Sigma_1
&=
\operatorname{Var}(v\mid y_1) \\
&=
\operatorname{Var}(v\mid \tilde y_1) \\
&=
\left(\frac{1}{\Sigma_0}+\frac{\beta_1^2}{\sigma^2/2}\right)^{-1} \\
&=
\frac{\Sigma_0(\sigma^2/2)}{\sigma^2/2+\beta_1^2\Sigma_0} \\
&=
\Sigma_0\left(1-\frac{\beta_1^2\Sigma_0}{\beta_1^2\Sigma_0+\sigma^2/2}\right) \\
&=
\Sigma_0(1-\lambda_1\beta_1).
\end{aligned}
$$

引入无量纲量

$$
\begin{aligned}
y
&:=
\frac{\beta_1^2\Sigma_0}{\sigma^2/2} =
\frac{2\beta_1^2\Sigma_0}{\sigma^2},
\end{aligned}
$$

则

$$
\begin{aligned}
\beta_1
&=
\frac{\sigma}{\sqrt{2\Sigma_0}}\sqrt{y}, \\
\lambda_1
&=
\frac{\beta_1\Sigma_0}{\beta_1^2\Sigma_0+\sigma^2/2} =
\frac{\sqrt{2\Sigma_0}}{\sigma}\frac{\sqrt{y}}{1+y}, \\
\frac{\Sigma_1}{\Sigma_0}
&=
1-\lambda_1\beta_1 =
\frac{1}{1+y}.
\end{aligned}
$$

代回 FOC，

$$
\sqrt{y}+y\sqrt{1+y}-\sqrt{1+y}=0
\Longleftrightarrow
y^3-y^2-2y+1=0.
$$

取 $(0,1)$ 内唯一实根

$$
y\approx 0.4450418679.
$$

因此

$$
\begin{aligned}
\beta_1
&=
\frac{\sigma}{\sqrt{2\Sigma_0}}\sqrt{y}, \\
\lambda_1
&=
\frac{\sqrt{2\Sigma_0}}{\sigma}\frac{\sqrt{y}}{1+y}, \\
\Sigma_1
&=
\frac{\Sigma_0}{1+y}, \\
\beta_2
&=
\frac{\sigma\sqrt{1+y}}{\sqrt{2\Sigma_0}}, \\
\lambda_2
&=
\frac{\sqrt{2\Sigma_0}}{2\sigma\sqrt{1+y}}.
\end{aligned}
$$

## 结论与解释

两期总利润分解为

$$
\Pi^{(2)}=\Pi_1+\Pi_2.
$$

其中

$$
\begin{aligned}
E[\Pi_1\mid v]
&=
(d-\lambda_1x_1)x_1 \\
&=
(1-\lambda_1\beta_1)\beta_1d^2 \\
&=
\frac{\sigma\sqrt{y}}{\sqrt{2\Sigma_0}(1+y)}d^2,
\end{aligned}
$$

以及

$$
\begin{aligned}
E[\Pi_2\mid v]
&=
\frac{\sigma}{2\sqrt{2\Sigma_1}}E[(v-p_1)^2\mid v] \\
&=
\frac{\sigma}{2\sqrt{2\Sigma_1}}
\left[
\frac{d^2}{(1+y)^2}+\lambda_1^2\frac{\sigma^2}{2}
\right] \\
&=
\frac{\sigma}{2\sqrt{2\Sigma_0}}
\frac{d^2+\Sigma_0 y}{(1+y)^{3/2}}.
\end{aligned}
$$

故

$$
\begin{aligned}
E[\Pi^{(2)}\mid v]
&=
\frac{\sigma\sqrt{y}}{\sqrt{2\Sigma_0}(1+y)}d^2
+
\frac{\sigma}{2\sqrt{2\Sigma_0}}
\frac{d^2+\Sigma_0 y}{(1+y)^{3/2}}.
\end{aligned}
$$

再对 $v$ 取期望，

$$
\begin{aligned}
E[\Pi^{(2)}]
&=
\frac{\sqrt{2}\sigma\sqrt{\Sigma_0}}{4}
\left(
\frac{2\sqrt{y}}{1+y}+\frac{1}{\sqrt{1+y}}
\right) \\
&\approx
0.6206\,\sigma\sqrt{\Sigma_0}
>
0.5\,\sigma\sqrt{\Sigma_0} =
E[\Pi^{(1)}].
\end{aligned}
$$

当 $v=v_0$ 时，

$$
\begin{aligned}
E[\Pi^{(1)}\mid v=v_0]
&=
0, \\
E[\Pi^{(2)}\mid v=v_0]
&=
\frac{\sigma\sqrt{\Sigma_0}}{2\sqrt{2}}\frac{y}{(1+y)^{3/2}} \\
&\approx
0.0906\,\sigma\sqrt{\Sigma_0}
>
0.
\end{aligned}
$$

这并不表示知情者和公众“信息相同”。$v=v_0$ 只表示 realized value 恰好等于公开先验均值；知情者知道真实值就是 $v_0$，而公众只知道其均值是 $v_0$、仍面临方差 $\Sigma_0$ 的不确定性。两期交易允许知情者先通过第一期订单流改变价格学习，再在第二期利用剩余误价继续交易，因此即使 $v=v_0$，条件利润仍可为正。
