---
orphan: true
---

# MM tax shield proofs and APV decomposition

这张卡保存 <a href="../01_Empirical_Corporate_Finance.html#sec-tax-shield-capital-structure">Taxes and Levered Value</a> 中的详细设定、corporate tax proof、personal tax proof 和 APV decomposition。

(card-mm-tax-shield-proofs-apv)=
(^card-mm-tax-shield-proofs-apv)=
^card-mm-tax-shield-proofs-apv

## Basic setting

$$
\begin{aligned}
\text{Firm value}
&\Longrightarrow
\begin{cases}
V_U & : \text{100\% equity financed firm} \\
V_L=E+D & : \text{leveraged firm}
\end{cases} \\
\\
V_L
&\Longrightarrow
\begin{cases}
E & : \text{equity (stock)} \\
D & : \text{debt (bonds)}
\end{cases} \\
\\
\text{For simplicity}
&:\ \text{NOPLAT}=FCF,\qquad \text{Depreciation}=CAPEX+\Delta WCR
\end{aligned}
$$

- NOPLAT = Net Operating Profit Less Adjusted Taxes，税后经营利润。
- FCF = Free Cash Flow，自由现金流，指可分配给资本提供者的现金流。
- 这里用的是一个简化设定：把 NOPLAT 直接对应到 FCF，便于后面推 APV。

## MM proposition with corporate taxes

在公司税（corporate taxes）下，debt 的价值来自 interest tax shield。

$$
\begin{aligned}
V_U
&=\underbrace{0.5\,EBIT_t(1-T_C)}_{\text{50\% equity in firm U}}\\
V_L
&=\underbrace{0.5\,(EBIT_t-r_DD)(1-T_C)}_{\text{after-tax equity payoff in L}}
 +\underbrace{0.5\,r_DD}_{\text{50\% debt payoff in L}}\\
&=\underbrace{0.5\,EBIT_t(1-T_C)}_{\text{same operating part}}
 +\underbrace{0.5\,T_Cr_DD}_{\text{interest tax shield}}\\
V_L-V_U
&=0.5\,T_Cr_DD\\
PV(V_L-V_U)
&=\sum_{t=1}^{\infty}\frac{0.5\,T_Cr_DD}{(1+r_D)^t}
=0.5\,T_Cr_DD\sum_{t=1}^{\infty}\frac{1}{(1+r_D)^t}\\
&=0.5\,T_Cr_DD\cdot\frac{1}{r_D}
=0.5\,T_CD\\
\underbrace{PV(V_L-V_U)}_{\text{50\% position}}
&=0.5\,T_CD\\
\underbrace{V_L-V_U}_{\text{full firm}}
&=T_CD\\
V_L
&=V_U+T_CD
\end{aligned}
$$

通用等比数列推导见 [Geometric series sum - a1 q](Geometric series sum - a1 q)，这里的 perpetuity 特例见 [Geometric series sum - perpetuity special case](Geometric series sum - perpetuity special case)。

## MM proposition with personal taxes

若再加入个人税（personal taxes），debt advantage 会被削弱。

$$
\begin{aligned}
V_U^{p}
&=\underbrace{0.5\,EBIT_t(1-T_C)(1-t_{pe})}_{\text{50\% equity in firm U after personal tax}}\\
V_L^{p}
&=\underbrace{0.5\,(EBIT_t-r_DD)(1-T_C)(1-t_{pe})}_{\text{50\% equity in firm L after personal tax}}
 +\underbrace{0.5\,r_DD(1-t_{pd})}_{\text{50\% debt payoff after personal tax}}\\
&=0.5\,EBIT_t(1-T_C)(1-t_{pe})
 +0.5\,r_DD\Big[(1-t_{pd})-(1-T_C)(1-t_{pe})\Big]\\
V_L^{p}-V_U^{p}
&=0.5\,r_DD\Big[(1-t_{pd})-(1-T_C)(1-t_{pe})\Big]\\
PV(V_L-V_U)
&=\sum_{t=1}^{\infty}\frac{0.5\,r_DD\Big[(1-t_{pd})-(1-T_C)(1-t_{pe})\Big]}{(1+r_D)^t}\\
&=0.5\,D\Big[(1-t_{pd})-(1-T_C)(1-t_{pe})\Big]\\
V_L-V_U
&=D\Big[(1-t_{pd})-(1-T_C)(1-t_{pe})\Big] & \text{full firm, before normalization}\\
&=(1-t_{pd})D\left[1-\frac{(1-t_{pe})(1-T_C)}{1-t_{pd}}\right] & \text{factor out }(1-t_{pd})\\
&\approx D\left[1-\frac{(1-t_{pe})(1-T_C)}{1-t_{pd}}\right] & \text{standard MM expression}
\end{aligned}
$$

如果个人税率对 debt income 更高，则净优势会下降；在极端情况下，这个优势甚至可能被完全抵消。

## General APV decomposition

$$
\begin{aligned}
X_t&\equiv EBIT_t & \text{earnings before interest and taxes}\\
CF_t^U&=X_t(1-T_C) & \text{unlevered cash flow after corporate tax}\\
CF_t^{L}
&=(X_t-r_DD_{t-1})(1-T_C)+r_DD_{t-1}\\
&=\underbrace{X_t(1-T_C)}_{CF_t^U}
 +\underbrace{T_Cr_DD_{t-1}}_{TS_t}\\
&=CF_t^U+TS_t
\end{aligned}
$$

$$
\begin{aligned}
V_L
&=V_U+PV(TS) & \text{levered value = unlevered value + tax shield}\\
&=V_U+\sum_{t=1}^{\infty}\frac{T_Cr_DD}{(1+r_D)^t} & \text{perpetual debt with constant }D\\
&=V_U+T_CD & \text{geometric series / perpetuity}
\end{aligned}
$$

等价地，levered firm 的可分配现金流可以写成 unlevered cash flow plus tax shield. 这就是 [APV](APV - Adjusted Present Value) 的核心。
