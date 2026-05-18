# Arrow-Pratt 风险厌恶系数

来源：[Asset Pricing/Theoretical AP/01_Single_Period_Models#1.2 Coefficients of Risk Aversion](Asset Pricing/Theoretical AP/01_Single_Period_Models#1.2 Coefficients of Risk Aversion)

返回：[Asset Pricing/Theoretical AP/01_Single_Period_Models](Asset Pricing/Theoretical AP/01_Single_Period_Models)

:::{admonition} Definition (Definition)
Arrow-Pratt 风险厌恶测度定义为

$$
\begin{aligned}
\text{ARA:}\quad \alpha(w)&=-\frac{u''(w)}{u'(w)},\\
\text{RRA:}\quad \rho(w)&=w\alpha(w)=-\frac{wu''(w)}{u'(w)},\\
\text{Risk tolerance:}\quad \tau(w)&=\frac{1}{\alpha(w)}=-\frac{u'(w)}{u''(w)}.
\end{aligned}
$$

:::

## 经济含义

- $\alpha(w)$：固定金额小风险的厌恶强度；越大，越不愿承担同样绝对幅度的波动。
- $\rho(w)$：按财富比例缩放的小风险厌恶强度；越大，越不愿承担同样相对幅度的波动。
- $\tau(w)$：风险容忍度；越大，表示越能承受风险、越愿意持有风险资产。

## 为什么这样定义

对小的公平风险 $\tilde w=w+\varepsilon$，$E[\varepsilon]=0$，令确定性等价为 $x=w-\pi$，则

$$
\begin{aligned}
u(w-\pi)
&=E[u(w+\varepsilon)] \\
&\approx u(w)+E[u'(w)\varepsilon]+\frac12u''(w)E[\varepsilon^2] \\
&=u(w)+\frac12u''(w)\operatorname{Var}(\varepsilon) \\
&\approx u(w)-u'(w)\pi.
\end{aligned}
$$

因此

$$
\pi \approx -\frac{u''(w)}{2u'(w)}\operatorname{Var}(\varepsilon),
$$

所以

$$
-\frac{u''(w)}{u'(w)}
$$

刻画了“单位方差风险”对应的局部风险溢价，这就是 **absolute risk aversion**。

若风险按财富比例缩放，$\tilde w=w(1+\varepsilon)$，则

$$
\frac{\pi}{w}\approx \frac12\Big(-w\frac{u''(w)}{u'(w)}\Big)\operatorname{Var}(\varepsilon),
$$

于是把 ARA 乘上 $w$ 得到

$$
\rho(w)=w\alpha(w),
$$

即 **relative risk aversion**：衡量按财富比例变化的风险有多难以接受。

风险容忍度

$$
\tau(w)=\frac{1}{\alpha(w)}
$$

只是把“厌恶程度”改写成“承受风险的能力”；$\tau(w)$ 越大，越愿意持有风险资产。

## 名称来源

- **Kenneth J. Arrow**：提出用效用函数曲率刻画风险厌恶的经典思想。
- **John W. Pratt**：系统给出局部风险厌恶（local risk aversion）的测度；二者共同奠定了

  $$
  \alpha(w)=-\frac{u''(w)}{u'(w)}
  $$

  这一表示法，因此称为 **Arrow-Pratt risk aversion**。

## 直觉

- ARA：固定金额小风险的局部风险溢价强度。
- RRA：固定比例小风险的局部风险溢价强度。
- $\tau(w)$：风险承担能力；越大越敢持有风险。
