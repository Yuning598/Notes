---
orphan: true
---

# Beta-pricing model 从单资产到向量形式

来源：[ProblemSet 6.1](../ProblemSet#6.1 Beta Pricing Implies $\widetilde R_*$ Is on the Mean-Variance Frontier)

**单资产形式** 对任意 risky asset $i$，若 pricing portfolio 为 $\widetilde R_*$，beta-pricing model 写作

$$
\begin{aligned}
E[\widetilde R_i]-R_f
&=
\beta_{i,*}\big(E[\widetilde R_*]-R_f\big),\\
\beta_{i,*}
&=
\frac{\operatorname{cov}(\widetilde R_i,\widetilde R_*)}
{\operatorname{var}(\widetilde R_*)}.
\end{aligned}
$$

合并得

$$
\begin{aligned}
E[\widetilde R_i]-R_f
&=
\frac{E[\widetilde R_*]-R_f}
{\operatorname{var}(\widetilde R_*)}
\operatorname{cov}(\widetilde R_i,\widetilde R_*).
\end{aligned}
$$

**Stacked vector form** 把 $i=1,\ldots,n$ 的式子堆叠。令

$$
\begin{aligned}
\widetilde R^{vec}
&=
(\widetilde R_1,\ldots,\widetilde R_n)',\\
\mu
&=
E[\widetilde R^{vec}],\\
1
&=
(1,\ldots,1)'.
\end{aligned}
$$

则

$$
\begin{aligned}
\mu-R_f1
&=
\frac{E[\widetilde R_*]-R_f}
{\operatorname{var}(\widetilde R_*)}
\operatorname{cov}(\widetilde R^{vec},\widetilde R_*).
\end{aligned}
$$

如果

$$
\begin{aligned}
\widetilde R_*
&=
R_f+\pi'(\widetilde R^{vec}-R_f1),
\end{aligned}
$$

则常数项不影响 covariance：

$$
\begin{aligned}
\operatorname{cov}(\widetilde R^{vec},\widetilde R_*)
&=
\operatorname{cov}(\widetilde R^{vec},\pi'\widetilde R^{vec})
=\Sigma\pi,
\qquad
\Sigma=\operatorname{var}(\widetilde R^{vec}).
\end{aligned}
$$

所以 stacked beta-pricing equation 是

$$
\boxed{
\begin{aligned}
\mu-R_f1
&=
\frac{E[\widetilde R_*]-R_f}
{\operatorname{var}(\widetilde R_*)}
\Sigma\pi.
\end{aligned}
}
$$

^card-beta-pricing-stacked
