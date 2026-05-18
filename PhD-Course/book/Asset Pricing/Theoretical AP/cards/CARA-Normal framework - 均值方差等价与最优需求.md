---
orphan: true
---

# CARA-Normal framework - 均值方差等价与最优需求

来源：[Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#10.2.4 CARA-Normal 下的最优需求](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#10.2.4 CARA-Normal 下的最优需求)

返回：[Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning)

## 它是什么

[CARA](CARA 效用 - Constant Absolute Risk Aversion) 指效用函数满足

$$
U(W)=-e^{-\lambda W},\qquad \lambda>0.
$$

而 Normal 指在给定信息集 $\mathcal I$ 后，相关随机财富或 payoff 的条件分布仍是正态。最常见写法是

$$
W\mid \mathcal I\sim N\big(\mu_{\mathcal I},\Sigma_{\mathcal I}\big).
$$

因此 [CARA-Normal](Asset Pricing/Theoretical AP/cards/CARA-Normal framework - 均值方差等价与最优需求) 不是两个独立假设随便并列，而是

$$
\text{CARA utility}+\text{conditional normality}
\Longrightarrow
\text{expected utility 可改写成 certainty equivalent}.
$$

在 Grossman-Stiglitz 里，给定任何信息集（如私人信号 $s$ 或价格 $p$）后，$v\mid \mathcal I$ 都是正态，因此

$$
W=m+X(v-p)\mid \mathcal I\sim N\big(m+X(E[v\mid \mathcal I]-p),\;X^2\operatorname{Var}(v\mid \mathcal I)\big).
$$

于是问题才能压缩成“条件均值 $E[v\mid \mathcal I]$ + 条件方差 $\operatorname{Var}(v\mid \mathcal I)$”两个对象。

## 核心结论

若终端财富

$$
W\sim N(\mu,\sigma^2),
$$

且投资者具有 CARA 效用

$$
U(W)=-e^{-\lambda W},
$$

则最大化期望效用等价于最大化 certainty equivalent：

$$
CE=\mu-\frac{\lambda}{2}\sigma^2.
$$

## 这个公式怎么来

若

$$
W\sim N(\mu,\sigma^2),
$$

则可写成

$$
W=\mu+\sigma Z,
\qquad
Z\sim N(0,1).
$$

代入 CARA utility：

$$
\begin{aligned}
E[U(W)]
&=E[-e^{-\lambda W}] \\
&=-E\left[e^{-\lambda(\mu+\sigma Z)}\right] \\
&=-e^{-\lambda\mu}E\left[e^{-\lambda\sigma Z}\right].
\end{aligned}
$$

对标准正态变量 $Z$，其 mgf 满足

$$
\begin{aligned}
E[e^{tZ}]=e^{\frac{t^2}{2}}.
\end{aligned}
$$

令 $t=-\lambda\sigma$，得到

$$
\begin{aligned}
E\left[e^{-\lambda\sigma Z}\right]
&=e^{\frac{(-\lambda\sigma)^2}{2}} \\
&=e^{\frac{\lambda^2\sigma^2}{2}}.
\end{aligned}
$$

所以

$$
\begin{aligned}
E[U(W)]
&=-e^{-\lambda\mu}e^{\frac{\lambda^2\sigma^2}{2}} \\
&=-e^{-\lambda\left(\mu-\frac{\lambda}{2}\sigma^2\right)}.
\end{aligned}
$$

而 certainty equivalent $CE$ 的定义是

$$
\begin{aligned}
U(CE)=E[U(W)].
\end{aligned}
$$

由于

$$
\begin{aligned}
U(CE)
&=-e^{-\lambda CE},
\end{aligned}
$$

于是

$$
\begin{aligned}
-e^{-\lambda CE}
&=-e^{-\lambda\left(\mu-\frac{\lambda}{2}\sigma^2\right)} \\
\Longrightarrow\quad
CE
&=\mu-\frac{\lambda}{2}\sigma^2.
\end{aligned}
$$

所以

$$
\begin{aligned}
\max E[U(W)]
&\Longleftrightarrow \max CE \\
&\Longleftrightarrow \max\left\{\mu-\frac{\lambda}{2}\sigma^2\right\} \\
&=\max\left\{E[W]-\frac{\lambda}{2}\operatorname{Var}(W)\right\}.
\end{aligned}
$$

这里最后一步只是把正态分布参数记号换回

$$
\mu=E[W],
\qquad
\sigma^2=\operatorname{Var}(W).
$$

也就是说，在 **CARA + 正态** 的组合下，期望效用问题可以化成均值—方差问题：

$$
\max E[U(W)]
\Longleftrightarrow
\max \left\{E[W]-\frac{\lambda}{2}\operatorname{Var}(W)\right\}.
$$

## 在资产需求里的应用

若

$$
W=m+X(v-p),
$$

则在给定信息集 $\mathcal I$ 下：

$$
\begin{aligned}
E[W\mid \mathcal I]
&=E[m+X(v-p)\mid \mathcal I] \\
&=m+X\,E[v-p\mid \mathcal I] \\
&=m+X(E[v\mid \mathcal I]-p),
\end{aligned}
$$

$$
\begin{aligned}
\operatorname{Var}(W\mid \mathcal I)
&=\operatorname{Var}(m+X(v-p)\mid \mathcal I) \\
&=X^2\operatorname{Var}(v-p\mid \mathcal I) \\
&=X^2\operatorname{Var}(v\mid \mathcal I).
\end{aligned}
$$

把它们代入均值—方差目标函数：

$$
\begin{aligned}
\max_X E[U(W)\mid \mathcal I]
&\Longleftrightarrow
\max_X\left\{E[W\mid \mathcal I]-\frac{\lambda}{2}\operatorname{Var}(W\mid \mathcal I)\right\} \\
&=
\max_X\left\{m+X(E[v\mid \mathcal I]-p)-\frac{\lambda}{2}X^2\operatorname{Var}(v\mid \mathcal I)\right\}.
\end{aligned}
$$

对 $X$ 求一阶条件：

$$
\begin{aligned}
0
&=\frac{\partial}{\partial X}\left[m+X(E[v\mid \mathcal I]-p)-\frac{\lambda}{2}X^2\operatorname{Var}(v\mid \mathcal I)\right] \\
&=E[v\mid \mathcal I]-p-\lambda X\operatorname{Var}(v\mid \mathcal I).
\end{aligned}
$$

移项可得

$$
\lambda X\operatorname{Var}(v\mid \mathcal I)=E[v\mid \mathcal I]-p,
$$

因此最优持仓满足

$$
X^*(\mathcal I)=\frac{E[v\mid \mathcal I]-p}{\lambda\operatorname{Var}(v\mid \mathcal I)}.
$$

## 直觉

- **分子** $E[v\mid \mathcal I]-p$：你眼中的“预期超额收益”。
- **分母** $\lambda\operatorname{Var}(v\mid \mathcal I)$：风险厌恶 × 主观风险。
- 所以：**看涨越多，持仓越大；越怕风险或越不确定，持仓越小。**

## 为什么这个框架常用

因为它把原本难处理的期望效用最大化，化简成只跟踪 **条件均值** 和 **条件方差** 的问题；这正好和正态贝叶斯更新、线性均衡价格、信息提取问题配套。
