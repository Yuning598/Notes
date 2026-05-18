---
orphan: true
---

# Grossman-Stiglitz - 信息价值与支付意愿

来源：[Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#补充：她最多愿意为信息支付多少？](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#补充：她最多愿意为信息支付多少？)

相关基础：[Asset Pricing/Theoretical AP/cards/part1/确定性等价与风险溢价](Asset Pricing/Theoretical AP/cards/part1/确定性等价与风险溢价)

## 核心推导

对任意信息集 $\mathcal I$，记

$$
\mu_{\mathcal I}:=E[v\mid \mathcal I],
\qquad
\Sigma_{\mathcal I}:=\operatorname{Var}(v\mid \mathcal I).
$$

则 CARA-Normal 下的 certainty equivalent 为

$$
\begin{aligned}
CE(\mathcal I)
&:=
\max_X\left\{m+X(\mu_{\mathcal I}-p)-\frac{\lambda}{2}X^2\Sigma_{\mathcal I}\right\} \\
&=
m+\frac{(\mu_{\mathcal I}-p)^2}{2\lambda\Sigma_{\mathcal I}},
\qquad
X^*(\mathcal I)=\frac{\mu_{\mathcal I}-p}{\lambda\Sigma_{\mathcal I}}.
\end{aligned}
$$

>这里要区分两个对象：
>- 随机财富本身：$W=m+X(v-p)$；这是一个由终值 $v$ 决定的随机变量，本身没有“减去方差项”。
>- certainty equivalent（确定性等价）：是使投资者对“拿到一个确定金额”和“持有随机财富 $W$”无差异的确定数值。
>
>CE 的一般定义是
>$$
>U(CE)=E[U(W)],
>\qquad
>CE=U^{-1}(E[U(W)]).
>$$
>在 CARA 效用 $U(W)=-e^{-\lambda W}$ 下，
>$$
>CE=-\frac{1}{\lambda}\ln E[e^{-\lambda W}].
>$$
>若进一步 $W\sim N(\mu,\sigma^2)$，则
>$$
>CE=\mu-\frac{\lambda}{2}\sigma^2
>=E[W]-\frac{\lambda}{2}\operatorname{Var}(W).
>$$
>因此在 CARA 效用且财富正态时，最大化期望效用等价于最大化
>$$
>E[W]-\frac{\lambda}{2}\operatorname{Var}(W),
>$$
>也就是在期望财富中扣掉一个风险惩罚项 $-\frac{\lambda}{2}\operatorname{Var}(W)$。这个方差项不是财富定义的一部分，而是风险厌恶下对随机财富的折价。


若支付信息成本 $c$ 观察私人信号 $s$，则

$$
CE_I(s)=m-c+\frac{(E[v\mid s]-p)^2}{2\lambda\operatorname{Var}(v\mid s)}.
$$

若不支付、只从价格中学习，则

$$
CE_U(p)=m+\frac{(E[v\mid p]-p)^2}{2\lambda\operatorname{Var}(v\mid p)}.
$$

因此她对信息的最高支付意愿为

$$
\begin{aligned}
c^*
&:=
E\big[CE_I(s)-CE_U(p)\big] \\
&=
\frac{1}{2\lambda}E\left[
\frac{(E[v\mid s]-p)^2}{\operatorname{Var}(v\mid s)}
-
\frac{(E[v\mid p]-p)^2}{\operatorname{Var}(v\mid p)}
\right].
\end{aligned}
$$

再代入后验矩

$$
\operatorname{Var}(v\mid s)=\frac{1}{\rho_s+\rho_v},
\qquad
\operatorname{Var}(v\mid p)=\frac{1}{\rho_\theta+\rho_v},
$$

$$
E[v\mid s]=\frac{\rho_s s+\rho_v\bar v}{\rho_s+\rho_v},
\qquad
E[v\mid p]=\frac{\rho_\theta\theta+\rho_v\bar v}{\rho_\theta+\rho_v},
$$

得到

$$
\begin{aligned}
c^*
&=
\frac{1}{2\lambda}E\Bigg[
\frac{\big(\rho_s s+\rho_v\bar v-(\rho_s+\rho_v)p\big)^2}{\rho_s+\rho_v} \\
&\qquad\qquad
-
\frac{\big(\rho_\theta\theta+\rho_v\bar v-(\rho_\theta+\rho_v)p\big)^2}{\rho_\theta+\rho_v}
\Bigg].
\end{aligned}
$$

完全揭示极限下，若 $\rho_x=\infty$，则

$$
\theta=s,
\qquad
\rho_\theta=\rho_s,
$$

从而

$$
E[v\mid p]=E[v\mid s],
\qquad
\operatorname{Var}(v\mid p)=\operatorname{Var}(v\mid s),
\qquad
c^*=0.
$$

于是内部均衡的无差异条件写成

$$
c=c^*.
$$
