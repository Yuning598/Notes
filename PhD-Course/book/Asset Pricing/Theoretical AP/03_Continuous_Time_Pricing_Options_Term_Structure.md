# 03 Continuous-Time Pricing, Options, and Term Structure


## 7. 随机贴现因子与连续时间资产定价

### 7.1 动力学方程 (Dynamics)

#### 推导核对：SDF 动力学的符号约定

:::{admonition} Definition (Continuous-Time SDF Convention)
本篇统一采用

$$
\frac{d\Lambda_t}{\Lambda_t}=-r_tdt-\lambda_t'dW_t,
$$

其中 $\lambda_t$ 是 market price of risk。若某资产

$$
\frac{dS_t}{S_t}=\mu_tdt+\sigma_t'dW_t,
$$

且无股息，则定价条件给出

$$
\mu_t-r_t=\sigma_t'\lambda_t.
$$

:::

**WTS：** 从 $\Lambda_tB_t$ 与 $\Lambda_tS_t$ 为局部鞅推出漂移与风险溢价。

**联立系统：**

$$
\begin{aligned}
\frac{d\Lambda_t}{\Lambda_t}&=a_tdt+b_t'dW_t,\\
\frac{dB_t}{B_t}&=r_tdt,\\
\frac{dS_t}{S_t}&=\mu_tdt+\sigma_t'dW_t.
\end{aligned}
$$

**连续求解：** 由 $\Lambda_tB_t$ 为鞅，

$$
\begin{aligned}
0
&=\text{drift}\left(\frac{d(\Lambda_tB_t)}{\Lambda_tB_t}\right)\\
&=a_t+r_t,
\end{aligned}
$$

所以 $a_t=-r_t$。令 $b_t=-\lambda_t$，即

$$
\begin{aligned}
\frac{d\Lambda_t}{\Lambda_t}=-r_tdt-\lambda_t'dW_t.
\end{aligned}
$$

再由 $\Lambda_tS_t$ 为鞅，

$$
\begin{aligned}
0
&=\text{drift}\left(\frac{d(\Lambda_tS_t)}{\Lambda_tS_t}\right)\\
&=(-r_t)+\mu_t+(-\lambda_t)'\sigma_t,\\
\mu_t-r_t
&=\sigma_t'\lambda_t.
\end{aligned}
$$

**结论：** SDF 扩散项前的负号只是符号约定；在该约定下，正的 $\lambda$ 表示资产暴露 $\sigma$ 越大，要求的 expected excess return 越高。


SDF $\Lambda_t$ 遵循如下形式的随机微分方程 (SDE):
$$\frac{d\Lambda_t}{\Lambda_t} = -r_t dt - \sigma_{\Lambda,t} dW_t$$

这里两个负号都不是“随便设的”，而是由 SDF 的经济含义决定的：

$$
\begin{aligned}
\Lambda_t
\uparrow
&\Longrightarrow \text{未来 payoff 在今天更值钱},\\
\Lambda_t
\downarrow
&\Longrightarrow \text{未来 payoff 在今天更不值钱}.
\end{aligned}
$$

对 drift 项来说，无风险资产满足

$$
\begin{aligned}
\Lambda_t B_t
\text{ is a martingale},
\qquad
\frac{dB_t}{B_t}=r_tdt.
\end{aligned}
$$

因此

$$
\begin{aligned}
E_t\!\left[\frac{d\Lambda_t}{\Lambda_t}\right]
=-r_tdt,
\end{aligned}
$$

所以 drift 必须是负的：无风险资产越往后增长得越快，discount factor 就必须往下掉，才能把 future dollar 折现回 today。

对 diffusion 项来说，负号表示 **bad times $\Rightarrow$ high marginal value $\Rightarrow$ high SDF**。  
若某资产在坏状态里 payoff 高，那么它和 $\Lambda_t$ 正相关，能提供保险，因此 expected return 应该低。写成

$$
\begin{aligned}
\frac{d\Lambda_t}{\Lambda_t}
=-r_tdt-\sigma_{\Lambda,t}dW_t
\end{aligned}
$$

正好使风险溢价满足

$$
\begin{aligned}
\mu_{p,t}-r_t
=\sigma_{\Lambda,t}\sigma_{p,t}.
\end{aligned}
$$

也就是：和 SDF 在坏状态里同向波动越强的资产，保险性越强，风险溢价由这个 covariance 决定。

---

### 7.2 动力学形式的严谨推导 (Derivation of SDF Dynamics)

#### 7.2.1 确定漂移项 (Drift Term)
假设 $\Lambda_t$ 遵循一般的伊藤过程 $\frac{d\Lambda_t}{\Lambda_t} = \mu_\Lambda dt + \sigma_\Lambda dW_t$。考虑无风险资产 $B_t$，其满足 $dB_t = r_t B_t dt$。根据基本定价定理，$\Lambda_t B_t$ 必须是鞅：

$$
\begin{aligned}
d(\Lambda_t B_t) &= \Lambda_t dB_t + B_t d\Lambda_t + d\langle \Lambda, B \rangle_t \\
&= \Lambda_t (r_t B_t dt) + B_t (\Lambda_t \mu_\Lambda dt + \Lambda_t \sigma_\Lambda dW_t) + 0 \\
&= \Lambda_t B_t (r_t + \mu_\Lambda) dt + \Lambda_t B_t \sigma_\Lambda dW_t
\end{aligned}
$$

为了满足无偏漂移条件（鞅性质），要求其 $dt$ 项为 0：

$$
\begin{aligned}
r_t + \mu_\Lambda &= 0 \\
\implies \mu_\Lambda &= -r_t
\end{aligned}
$$

#### 7.2.2 确定扩散项与风险市场价格 (Diffusion Term)
考虑风险资产 $S_t$，其满足 $\frac{dS_t}{S_t} = \mu_t dt + \sigma_t dW_t$。同样地，$\Lambda_t S_t$ 必须是鞅：

$$
\begin{aligned}
d(\Lambda_t S_t) &= \Lambda_t dS_t + S_t d\Lambda_t + d\langle \Lambda, S \rangle_t \\
&= \Lambda_t (S_t \mu_t dt + S_t \sigma_t dW_t) + S_t (\Lambda_t \mu_\Lambda dt + \Lambda_t \sigma_\Lambda dW_t) + (\Lambda_t \sigma_\Lambda dW_t)(S_t \sigma_t dW_t) \\
&= \Lambda_t S_t (\mu_t + \mu_\Lambda + \sigma_\Lambda \sigma_t) dt + \Lambda_t S_t (\sigma_t + \sigma_\Lambda) dW_t
\end{aligned}
$$

由于漂移项必须为 0，且代入 $\mu_\Lambda = -r_t$：

$$
\begin{aligned}
\mu_t - r_t + \sigma_\Lambda \sigma_t &= 0 \\
\implies \sigma_\Lambda &= -\frac{\mu_t - r_t}{\sigma_t} = -\kappa_t
\end{aligned}
$$

其中 $\kappa_t$ 定义为风险的市场价格 (Market Price of Risk)。

---

### 7.3 积分形式的显式解 (Integral Form Solution)

利用对数变换和伊藤引理求解该 SDE：

$$
\begin{aligned}
d(\ln \Lambda_t) &= \frac{1}{\Lambda_t} d\Lambda_t - \frac{1}{2\Lambda_t^2} (d\Lambda_t)^2 \\
&= \frac{1}{\Lambda_t} (\Lambda_t (-r_t dt - \sigma_{\Lambda,t} dW_t)) - \frac{1}{2\Lambda_t^2} (\Lambda_t^2 \sigma_{\Lambda,t}^2 dt) \\
&= -r_t dt - \sigma_{\Lambda,t} dW_t - \frac{1}{2} \sigma_{\Lambda,t}^2 dt \\
&= -\left( r_t + \frac{1}{2} \sigma_{\Lambda,t}^2 \right) dt - \sigma_{\Lambda,t} dW_t
\end{aligned}
$$

对上述方程从 $0$ 到 $T$ 进行积分并取指数：

$$
\begin{aligned}
\int_0^T d(\ln \Lambda_s) &= -\int_0^T \left( r_s + \frac{1}{2} \sigma_{\Lambda,s}^2 \right) ds - \int_0^T \sigma_{\Lambda,s} dW_s \\
\ln \frac{\Lambda_T}{\Lambda_0} &= -\int_0^T \left( r_s + \frac{1}{2} \sigma_{\Lambda,s}^2 \right) ds - \int_0^T \sigma_{\Lambda,s} dW_s \\
\frac{\Lambda_T}{\Lambda_0} &= \exp\left( -\int_0^T \left( r_s + \frac{1}{2} \sigma_{\Lambda,s}^2 \right) ds - \int_0^T \sigma_{\Lambda,s} dW_s \right)
\end{aligned}
$$

### 7.4 Fundamental Asset Pricing Equation

#### 推导核对：含股息的 Fundamental Asset Pricing Equation

:::{admonition} Lemma: Continuous-Time Fundamental Pricing Equation
若资产价格 $P_t$ 支付连续股息率 $\delta_tP_tdt$，且

$$
\frac{dP_t}{P_t}=\mu_tdt+\sigma_t'dW_t,
\qquad
\frac{d\Lambda_t}{\Lambda_t}=-r_tdt-\lambda_t'dW_t,
$$

则

$$
\mu_t+\delta_t-r_t=\sigma_t'\lambda_t.
$$

:::

**WTS：** 用 $d(\Lambda P)+\Lambda\,dD$ 的鞅条件推出总收益风险溢价。

**联立系统：**

$$
\begin{aligned}
dD_t&=\delta_tP_tdt,\\
\frac{dP_t}{P_t}&=\mu_tdt+\sigma_t'dW_t,\\
\frac{d\Lambda_t}{\Lambda_t}&=-r_tdt-\lambda_t'dW_t,\\
\Lambda_tP_t+\int_0^t\Lambda_udD_u&=\text{martingale}.
\end{aligned}
$$

**连续求解：** 局部鞅条件要求漂移为零：

$$
\begin{aligned}
0
&=\text{drift}\left(d(\Lambda_tP_t)+\Lambda_tdD_t\right)/(\Lambda_tP_t)\\
&=\text{drift}\left(\frac{d\Lambda_t}{\Lambda_t}+\frac{dP_t}{P_t}+\frac{d\Lambda_t}{\Lambda_t}\frac{dP_t}{P_t}\right)+\delta_t\\
&=(-r_t)+\mu_t+(-\lambda_t)'\sigma_t+\delta_t.
\end{aligned}
$$

整理得

$$
\begin{aligned}
\mu_t+\delta_t-r_t
&=\sigma_t'\lambda_t.
\end{aligned}
$$

**结论：** 连续时间里被定价的是 total return；有股息时风险溢价应写在 $\mu+\delta-r$ 上，而不只是价格增值率 $\mu-r$。


:::{admonition} Lemma: Fundamental Asset Pricing Equation
对任意 non-dividend payoff $p_t$，有

$$
\begin{aligned}
p_t
&=E_t\!\left(\frac{\Lambda_T}{\Lambda_t}p_T\right),
\qquad
\Lambda_t p_t=E_t(\Lambda_Tp_T),
\end{aligned}
$$

局部形式为

$$
\begin{aligned}
E_t\!\left[\frac{dp_t}{p_t}\right]
+E_t\!\left[\frac{d\Lambda_t}{\Lambda_t}\right]
&=
-E_t\!\left[\frac{d\Lambda_t}{\Lambda_t}\frac{dp_t}{p_t}\right].
\end{aligned}
$$

:::

**局部推导** 由任意 $\Delta>0$ 的定价式

$$
\begin{aligned}
\Lambda_t p_t
&=E_t(\Lambda_{t+\Delta}p_{t+\Delta})
\quad\Longrightarrow\quad
E_t[d(\Lambda_t p_t)]=0.
\end{aligned}
$$

对 $\Lambda_t p_t$ 用 Itô product rule：

$$
\begin{aligned}
0
&=E_t\!\left[
\frac{d(\Lambda_t p_t)}{\Lambda_t p_t}
\right]\\
&=
E_t\!\left[\frac{dp_t}{p_t}\right]
+E_t\!\left[\frac{d\Lambda_t}{\Lambda_t}\right]
+E_t\!\left[
\frac{d\Lambda_t}{\Lambda_t}\frac{dp_t}{p_t}
\right].
\end{aligned}
$$

**符号约定与 risk premium** 先写一般形式

$$
\begin{aligned}
\frac{d\Lambda_t}{\Lambda_t}
&=\mu_{\Lambda,t}dt+\sigma_{\Lambda,t}dW_t,
\qquad
\frac{dB_t}{B_t}=r_tdt.
\end{aligned}
$$

因为 $\Lambda_tB_t$ 是 martingale，

$$
\begin{aligned}
0
&=E_t\!\left[\frac{d(\Lambda_tB_t)}{\Lambda_tB_t}\right]
=\mu_{\Lambda,t}dt+r_tdt
\quad\Longrightarrow\quad
\mu_{\Lambda,t}=-r_t.
\end{aligned}
$$

故可记为

$$
\begin{aligned}
\frac{d\Lambda_t}{\Lambda_t}
&=-r_tdt-\sigma_{\Lambda,t}dW_t,
\qquad
\frac{dp_t}{p_t}
=\mu_{p,t}dt+\sigma_{p,t}dW_t,
\end{aligned}
$$

其中扩散项前的负号是 convention：把 $\sigma_{\Lambda,t}$ 记成正的 risk-price exposure。代入局部定价式：

$$
\begin{aligned}
(\mu_{p,t}-r_t)dt
&=
-E_t\!\left[
(-r_tdt-\sigma_{\Lambda,t}dW_t)
(\mu_{p,t}dt+\sigma_{p,t}dW_t)
\right]\\
&=
\sigma_{\Lambda,t}\sigma_{p,t}dt.
\end{aligned}
$$

因此

$$
\boxed{
\begin{aligned}
\mu_{p,t}-r_t
&=\sigma_{\Lambda,t}\sigma_{p,t}.
\end{aligned}
}
$$

这就是 continuous-time fundamental asset pricing equation：expected excess return 由 payoff shock 与 pricing kernel shock 的 covariance 决定。


**说明：Pricing kernel 与 SDF 的结论**
在本笔记里，pricing kernel 与 stochastic discount factor (SDF) 是同一个对象：

$$
\begin{aligned}
\Lambda_t \equiv M_t.
\end{aligned}
$$

它们都表示“用来给未来随机 payoff 打折的随机因子”。
其核心结论是

$$
\begin{aligned}
\mu_{p,t}-r_t=\sigma_{\Lambda,t}\sigma_{p,t},
\end{aligned}
$$

即风险溢价由 asset return 与 pricing kernel 的协方差决定。


| 概念 | 数学对象 | 定义 / 角色 | 与本文记号的关系 |
| --- | --- | --- | --- |
| Pricing kernel | $\Lambda_t$ | 随机折现因子；把未来 payoff 映射成今天价格 | 与 SDF 同义 |
| SDF (Stochastic Discount Factor) | $M_t$ | 满足 $p_t=E_t\!\left[\frac{M_T}{M_t}p_T\right]$ 的正过程 | 本文取 $M_t\equiv\Lambda_t$ |
| State price density (SPD) | $\xi_t$ | 常见定义为“状态价格密度”；不同教材可能把它定义为 $M_t$ 或 $M_t/B_t$ | 需看 numeraire 约定 |
| Risk-neutral measure | $\mathbb Q$ | 在 $\mathbb Q$ 下贴现价格为鞅 | 由 SDF / SPD 导出 |
| Market price of risk | $\kappa_t$ | 风险溢价强度；由 $\mu_{p,t}-r_t=\sigma_{\Lambda,t}\sigma_{p,t}$ 给出 | 与 $\sigma_{\Lambda,t}$ 对应 |

## 8. 期权 (Options)

### 8.1 Option Strategies

put 和 call 的组合称为 option strategies。最常见的是 **straddle**：同一到期日 $T$、同一执行价 $K$，同时买入一份 call 和一份 put。

先定义 moneyness：

$$
\begin{aligned}
M_t:=\frac{K}{S_t}.
\end{aligned}
$$

到期时：

$$
\begin{aligned}
M_T<1
&\Longleftrightarrow S_T>K
\Longrightarrow \text{call ITM,\ put OTM},\\
M_T>1
&\Longleftrightarrow S_T<K
\Longrightarrow \text{put ITM,\ call OTM}.
\end{aligned}
$$

若 straddle 的初始总成本为

$$
\begin{aligned}
\Pi_0:=C_0(K,T)+P_0(K,T),
\end{aligned}
$$

则到期 payoff 为

$$
\begin{aligned}
\Pi_T^{\text{payoff}}
&=(S_T-K)^++(K-S_T)^+\\
&=|S_T-K|.
\end{aligned}
$$

因此到期 profit 为

$$
\begin{aligned}
\Pi_T^{\text{profit}}
&=|S_T-K|-\Pi_0.
\end{aligned}
$$

分段写成

$$
\begin{aligned}
\Pi_T^{\text{profit}}
&=
\begin{cases}
S_T-K-\Pi_0, & S_T\ge K,\\
K-S_T-\Pi_0, & S_T<K.
\end{cases}
\end{aligned}
$$

break-even 由

$$
\begin{aligned}
\Pi_T^{\text{profit}}=0
\Longleftrightarrow
|S_T-K|=\Pi_0
\end{aligned}
$$

给出，所以两个 break-even price 是

$$
\begin{aligned}
S_T^{\text{BE,lower}}
&=K-\Pi_0,\\
S_T^{\text{BE,upper}}
&=K+\Pi_0.
\end{aligned}
$$

上面这个写法默认把初始 premium 直接当作“到期 profit”的成本基准，没有单独把资金的时间价值滚到 $T$。  
如果把初始成本 $\Pi_0$ 看成在 $t=0$ 支出、并按无风险利率 $r$ 滚到到期，那么到期净利润应写成

$$
\begin{aligned}
\Pi_T^{\text{profit,fv}}
&=|S_T-K|-\Pi_0 e^{rT},
\end{aligned}
$$

于是 break-even 改为

$$
\begin{aligned}
|S_T-K|
&=\Pi_0 e^{rT} \\
\Longleftrightarrow\qquad
S_T^{\text{BE,lower}}
&=K-\Pi_0 e^{rT},\\
S_T^{\text{BE,upper}}
&=K+\Pi_0 e^{rT}.
\end{aligned}
$$

所以：
- 若讨论 **option strategy payoff / terminal profit diagram**，常直接写 $K\pm \Pi_0$；
- 若讨论 **严格的到期净收益**，并把初始资金机会成本计入，则应写 $K\pm \Pi_0 e^{rT}$。

于是

$$
\begin{aligned}
\Pi_T^{\text{profit}}>0
&\Longleftrightarrow
S_T<K-\Pi_0
\ \text{or}\ 
S_T>K+\Pi_0,\\
\Pi_T^{\text{profit}}<0
&\Longleftrightarrow
K-\Pi_0<S_T<K+\Pi_0.
\end{aligned}
$$

所以 long straddle 本质上是对 **volatility** 的下注：价格大涨或大跌都赚钱，价格停在执行价附近则亏掉初始 premium。

### 8.2 Black-Scholes Formula

Black-Scholes formula 是 option pricing 的核心知识点。标准课本常用 **replicating portfolio / PDE** 推导；课件还给出 **SDF (stochastic discount factor)** 直接定价。除此之外，还要会 **risk-neutral expectation** 这条路。三条路线最终都得到同一个 closed-form formula。

这里容易混淆的是：**replicate、SDF、risk-neutral、put-call parity 并不是四个并列的“完整推导体系”**。更准确地说：

$$
\begin{aligned}
\text{完整定价路线}
&=
\begin{cases}
\text{replicating portfolio / PDE},\\
\text{SDF direct pricing},\\
\text{risk-neutral expectation},
\end{cases}\\[6pt]
\text{辅助关系}
&=
\text{put-call parity}.
\end{aligned}
$$

也就是说：
- **replicating portfolio / PDE**：从局部对冲出发，推出 PDE，再解出 closed form；
- **SDF direct pricing**：从 discount factor 出发，直接算

$$
  \begin{aligned}
  C_t=E_t\!\left[\frac{\Lambda_T}{\Lambda_t}(S_T-K)^+\right];
  \end{aligned}
$$

- **risk-neutral expectation**：从测度变换出发，直接算

$$
  \begin{aligned}
  C_t=e^{-r(T-t)}E_t^{\mathbb Q}\!\left[(S_T-K)^+\right].
  \end{aligned}
$$

而 **put-call parity** 本身不是第四条独立“求出 Black-Scholes call price 的完整路线”，它是 call 与 put 价格之间的静态无套利关系：

$$
\begin{aligned}
C_t-P_t=S_t-Ke^{-r(T-t)}.
\end{aligned}
$$

它的作用主要是：
- 已知 call price，可推出 put price；
- 已知 put price，可推出 call price；
- 检查市场价格是否违反静态无套利。

所以知识结构最好记成

$$
\begin{aligned}
\text{先有三条定价主线}
&\Longrightarrow
\text{得到 }C_t,\\
\text{再用 put-call parity}
&\Longrightarrow
\text{在 }C_t\text{ 与 }P_t\text{ 之间转换}.
\end{aligned}
$$

进一步说，三条主线也不是完全彼此独立：

$$
\begin{aligned}
\text{replicating portfolio}
&\Longleftrightarrow \text{PDE form of no-arbitrage},\\
\text{SDF}
&\Longleftrightarrow \text{discounted pricing kernel form of no-arbitrage},\\
\text{risk-neutral expectation}
&\Longleftrightarrow \text{martingale / change-of-measure form of no-arbitrage}.
\end{aligned}
$$

它们本质上是在表达同一个 no-arbitrage principle，只是数学表述不同。

这节要始终记住有三种方法：

$$
\begin{aligned}
\text{方法一}
&:\ \text{构造对冲组合 }(\text{replicating portfolio}) \\
&\Longrightarrow \text{消掉 }dz_t\text{ 项} \\
&\Longrightarrow \text{得到 Black-Scholes PDE} \\
&\Longrightarrow \text{解出 closed-form formula},\\[4pt]
\text{方法二}
&:\ \text{写出 SDF } \Lambda_t \\
&\Longrightarrow C_t=E_t\!\left[\frac{\Lambda_T}{\Lambda_t}(S_T-K)^+\right] \\
&\Longrightarrow \text{求 }(S_T,\Lambda_T)\text{ 的 joint distribution} \\
&\Longrightarrow \text{直接积分得到同一个公式},\\[4pt]
\text{方法三}
&:\ \text{切换到 risk-neutral measure } \mathbb Q \\
&\Longrightarrow C_t=e^{-r(T-t)}E_t^{\mathbb Q}\!\left[(S_T-K)^+\right] \\
&\Longrightarrow \ln S_T \text{ 在 }\mathbb Q\text{ 下正态} \\
&\Longrightarrow \text{直接算出同一个公式}.
\end{aligned}
$$

所以：
- **replicating portfolio / PDE** 是 hedging 视角；
- **SDF direct pricing** 是 asset pricing / discounting 视角；
- **risk-neutral expectation** 是 martingale / change-of-measure 视角；
- 三者本质上都来自 no-arbitrage，只是技术路线不同。

| 核心概念 | 关键词 | 数学对象 | 在 Black-Scholes 里的作用 | 和 no-arbitrage 的关系 |
| --- | --- | --- | --- | --- |
| No-arbitrage | law of one price | 无套利约束 | 整个定价框架的根 | 是最底层原理 |
| Hedging / replicating portfolio | delta hedging | $\Pi_t=C_t-\Delta_t S_t$ | 构造局部无风险组合，推出 PDE | 无套利要求无风险组合只能赚 $r$ |
| SDF | pricing kernel / discount factor | $\Lambda_t$ | 写成 $C_t=E_t\!\left[\frac{\Lambda_T}{\Lambda_t}(S_T-K)^+\right]$ | 无套利等价于存在正的 SDF |
| Risk-neutral measure | martingale measure | $\mathbb Q$ | 写成 $C_t=e^{-r(T-t)}E_t^{\mathbb Q}[(S_T-K)^+]$ | 无套利等价于存在使贴现价格成鞅的 $\mathbb Q$ |
| 三者关系 | same principle, different language | hedging / $\Lambda_t$ / $\mathbb Q$ | 最终都导向同一个 Black-Scholes 公式 | 都是在表达同一个 no-arbitrage principle |
 

#### 8.2.1 Setup

考虑一个到期日为 $T$、执行价为 $K$ 的 European call，其到期 payoff 为

$$
\begin{aligned}
C_T=(S_T-K)^+ = \max(S_T-K,0).
\end{aligned}
$$

标的股票服从 GBM：

$$
\begin{aligned}
\frac{dS_t}{S_t}
=\mu\,dt+\sigma\,dz_t,
\end{aligned}
$$

其中 $z_t$ 是标准 Brownian motion。money market account 支付常数利率 $r$，所以

$$
\begin{aligned}
\frac{dB_t}{B_t}=r\,dt.
\end{aligned}
$$

#### 8.2.2 Method 1: Replicating portfolio / PDE derivation

#### 推导核对：Black-Scholes PDE 的局部对冲证明

:::{admonition} Lemma: Black-Scholes PDE
若

$$
dS_t=\mu S_tdt+\sigma S_tdW_t,
\qquad dB_t=rB_tdt,
$$

欧式衍生品 $C(t,S)$ 的无套利价格满足

$$
C_t+rSC_S+\frac12\sigma^2S^2C_{SS}-rC=0,
\qquad C(T,S)=(S-K)^+.
$$

:::

**WTS：** 构造局部无风险组合，消去 $dW_t$ 项。

**联立系统：** Itô 公式给出

$$
\begin{aligned}
dC
&=C_tdt+C_SdS+\frac12C_{SS}(dS)^2\\
&=\left(C_t+\mu SC_S+\frac12\sigma^2S^2C_{SS}\right)dt+\sigma SC_SdW.
\end{aligned}
$$

取组合

$$
\begin{aligned}
\Pi_t=C(t,S_t)-\Delta_t S_t.
\end{aligned}
$$

**连续求解：** 组合变化为

$$
\begin{aligned}
d\Pi
&=dC-\Delta dS\\
&=\left(C_t+\mu SC_S+\frac12\sigma^2S^2C_{SS}-\Delta\mu S\right)dt
+\sigma S(C_S-\Delta)dW.
\end{aligned}
$$

选择

$$
\begin{aligned}
\Delta=C_S
\end{aligned}
$$

消去风险项，得到

$$
\begin{aligned}
d\Pi
&=\left(C_t+\frac12\sigma^2S^2C_{SS}\right)dt.
\end{aligned}
$$

由于该组合局部无风险，无套利要求

$$
\begin{aligned}
d\Pi
&=r\Pi dt\\
&=r(C-SC_S)dt.
\end{aligned}
$$

因此

$$
\begin{aligned}
C_t+\frac12\sigma^2S^2C_{SS}
&=rC-rSC_S,\\
C_t+rSC_S+\frac12\sigma^2S^2C_{SS}-rC&=0.
\end{aligned}
$$

**结论：** PDE 中没有 $\mu$，因为标的风险已通过 delta hedge 局部消除；定价只依赖 $r$ 与 $\sigma$。


设期权价格为 $C(t,S_t)$。对它应用 Itô 公式：

$$
\begin{aligned}
dC_t
&=\frac{\partial C}{\partial t}\,dt
+\frac{\partial C}{\partial S}\,dS_t
+\frac{1}{2}\frac{\partial^2 C}{\partial S^2}(dS_t)^2 \\
&=\left(
\frac{\partial C}{\partial t}
+\mu S_t\frac{\partial C}{\partial S}
+\frac{1}{2}\sigma^2S_t^2\frac{\partial^2 C}{\partial S^2}
\right)dt
+\sigma S_t\frac{\partial C}{\partial S}\,dz_t.
\end{aligned}
$$

构造一个 portfolio：

$$
\begin{aligned}
\Pi_t
=C_t-\Delta_t S_t.
\end{aligned}
$$

其微分为

$$
\begin{aligned}
d\Pi_t
&=dC_t-\Delta_t\,dS_t \\
&=\left(
\frac{\partial C}{\partial t}
+\mu S_t\frac{\partial C}{\partial S}
+\frac{1}{2}\sigma^2S_t^2\frac{\partial^2 C}{\partial S^2}
\right)dt
+\sigma S_t\frac{\partial C}{\partial S}\,dz_t
-\Delta_t(\mu S_tdt+\sigma S_tdz_t).
\end{aligned}
$$

取

$$
\begin{aligned}
\Delta_t=\frac{\partial C}{\partial S},
\end{aligned}
$$

则随机项完全消掉：

$$
\begin{aligned}
d\Pi_t
=\left(
\frac{\partial C}{\partial t}
+\frac{1}{2}\sigma^2S_t^2\frac{\partial^2 C}{\partial S^2}
\right)dt.
\end{aligned}
$$

此时 portfolio 无风险，因此必须赚无风险利率：

$$
\begin{aligned}
d\Pi_t
=r\Pi_t\,dt
=r\left(C_t-S_t\frac{\partial C}{\partial S}\right)dt.
\end{aligned}
$$

两边比较，得到 Black-Scholes PDE：

$$
\begin{aligned}
\frac{\partial C}{\partial t}
+\frac{1}{2}\sigma^2S_t^2\frac{\partial^2 C}{\partial S^2}
+rS_t\frac{\partial C}{\partial S}
-rC_t
=0,
\end{aligned}
$$

终端条件为

$$
\begin{aligned}
C(T,S)=(S-K)^+.
\end{aligned}
$$

对 European put 同理有

$$
\begin{aligned}
\frac{\partial P}{\partial t}
+\frac{1}{2}\sigma^2S_t^2\frac{\partial^2 P}{\partial S^2}
+rS_t\frac{\partial P}{\partial S}
-rP
=0,
\qquad
P(T,S)=(K-S)^+.
\end{aligned}
$$

所以 replicating portfolio / PDE 路线的关键逻辑是

$$
\begin{aligned}
\text{choose }\Delta_t=\frac{\partial C}{\partial S}
\Longrightarrow
\text{local riskless portfolio}
\Longrightarrow
\text{must earn }r
\Longrightarrow
\text{Black-Scholes PDE}.
\end{aligned}
$$

##### 8.2.2.1 从 PDE 到 closed form

令剩余期限

$$
\begin{aligned}
\tau:=T-t,
\qquad
V(\tau,S):=C(t,S),
\end{aligned}
$$

则

$$
\begin{aligned}
\frac{\partial C}{\partial t}=-\frac{\partial V}{\partial \tau},
\end{aligned}
$$

所以 PDE 变成

$$
\begin{aligned}
\frac{\partial V}{\partial \tau}
&=\frac{1}{2}\sigma^2S^2\frac{\partial^2 V}{\partial S^2}
+rS\frac{\partial V}{\partial S}
-rV,
\qquad
V(0,S)=(S-K)^+.
\end{aligned}
$$

再把价格标准化。令

$$
\begin{aligned}
S&=Ke^x,
\qquad
V(\tau,S)=K v(\tau,x).
\end{aligned}
$$

则

$$
\begin{aligned}
S\frac{\partial V}{\partial S}
&=K\frac{\partial v}{\partial x},\\
S^2\frac{\partial^2 V}{\partial S^2}
&=K\left(\frac{\partial^2 v}{\partial x^2}-\frac{\partial v}{\partial x}\right).
\end{aligned}
$$

代回得

$$
\begin{aligned}
\frac{\partial v}{\partial \tau}
&=\frac{1}{2}\sigma^2\frac{\partial^2 v}{\partial x^2}
+\left(r-\frac{1}{2}\sigma^2\right)\frac{\partial v}{\partial x}
-rv,
\qquad
v(0,x)=(e^x-1)^+.
\end{aligned}
$$

接着消掉一阶项和零阶项。令

$$
\begin{aligned}
v(\tau,x)=e^{\alpha x+\beta \tau}u(\tau,x),
\end{aligned}
$$

并选取

$$
\begin{aligned}
\alpha&=-\frac{r-\frac{1}{2}\sigma^2}{\sigma^2},\\
\beta&=-\frac{1}{2}\sigma^2\alpha^2-r\alpha+r,
\end{aligned}
$$

则

$$
\begin{aligned}
\frac{\partial v}{\partial \tau}
&=e^{\alpha x+\beta\tau}\left(\beta u+\frac{\partial u}{\partial \tau}\right),\\
\frac{\partial v}{\partial x}
&=e^{\alpha x+\beta\tau}\left(\alpha u+\frac{\partial u}{\partial x}\right),\\
\frac{\partial^2 v}{\partial x^2}
&=e^{\alpha x+\beta\tau}\left(\alpha^2u+2\alpha\frac{\partial u}{\partial x}+\frac{\partial^2 u}{\partial x^2}\right).
\end{aligned}
$$

代回

$$
\begin{aligned}
\frac{\partial v}{\partial \tau}
&=\frac{1}{2}\sigma^2\frac{\partial^2 v}{\partial x^2}
+\left(r-\frac{1}{2}\sigma^2\right)\frac{\partial v}{\partial x}
-rv
\end{aligned}
$$

得

$$
\begin{aligned}
\beta u+\frac{\partial u}{\partial \tau}
&=\frac{1}{2}\sigma^2\left(\alpha^2u+2\alpha\frac{\partial u}{\partial x}+\frac{\partial^2 u}{\partial x^2}\right)
+\left(r-\frac{1}{2}\sigma^2\right)\left(\alpha u+\frac{\partial u}{\partial x}\right)
-ru \\
&=\underbrace{\left[\sigma^2\alpha+\left(r-\frac{1}{2}\sigma^2\right)\right]}_{=\,0}\frac{\partial u}{\partial x}
+\underbrace{\left[\frac{1}{2}\sigma^2\alpha^2+\left(r-\frac{1}{2}\sigma^2\right)\alpha-r-\beta\right]}_{=\,0}u
+\frac{1}{2}\sigma^2\frac{\partial^2 u}{\partial x^2}.
\end{aligned}
$$

这里要求前两项等于 $0$，不是因为它们本来必须为 $0$，而是因为我们**主动选择** $\alpha,\beta$ 来把 PDE 化到最简单的标准形式。目标是把

$$
\begin{aligned}
\frac{\partial v}{\partial \tau}
=\frac{1}{2}\sigma^2\frac{\partial^2 v}{\partial x^2}
+\left(r-\frac{1}{2}\sigma^2\right)\frac{\partial v}{\partial x}
-rv
\end{aligned}
$$

变成只剩二阶项的 heat equation。  
因此我们故意令

$$
\begin{aligned}
\sigma^2\alpha+\left(r-\frac{1}{2}\sigma^2\right)&=0,\\
\frac{1}{2}\sigma^2\alpha^2+\left(r-\frac{1}{2}\sigma^2\right)\alpha-r-\beta&=0,
\end{aligned}
$$

这样 $\frac{\partial u}{\partial x}$ 项和 $u$ 项都被消掉，只留下

$$
\begin{aligned}
\frac{\partial u}{\partial \tau}
=\frac{1}{2}\sigma^2\frac{\partial^2 u}{\partial x^2}.
\end{aligned}
$$

也就是说：

$$
\begin{aligned}
\text{选 }\alpha
&\Longrightarrow \text{消掉一阶导数项},\\
\text{选 }\beta
&\Longrightarrow \text{消掉零阶 }u\text{ 项},
\end{aligned}
$$

目的就是把 Black-Scholes PDE 规约成最容易求解的 heat equation。
因此只剩

$$
\begin{aligned}
\frac{\partial u}{\partial \tau}
&=\frac{1}{2}\sigma^2\frac{\partial^2 u}{\partial x^2}.
\end{aligned}
$$

初始条件也相应变成

$$
\begin{aligned}
u(0,x)
&=e^{-\alpha x}v(0,x)
=e^{-\alpha x}(e^x-1)^+.
\end{aligned}
$$

于是 $u$ 的解就是 heat kernel 和初值的卷积：

$$
\begin{aligned}
u(\tau,x)
&=\frac{1}{\sigma\sqrt{2\pi\tau}}
\int_{-\infty}^{\infty}
\exp\!\left(-\frac{(x-y)^2}{2\sigma^2\tau}\right)u(0,y)\,dy.
\end{aligned}
$$

现在把变量一步步写回去：

$$
\begin{aligned}
v(\tau,x)
&=e^{\alpha x+\beta\tau}u(\tau,x),\\
V(\tau,S)
&=Kv(\tau,x),\qquad x=\ln(S/K),\\
C(t,S)
&=V(T-t,S).
\end{aligned}
$$

因此

$$
\begin{aligned}
C(t,S)
&=K e^{\alpha x+\beta\tau}u(\tau,x)\Big|_{\tau=T-t,\ x=\ln(S/K)}.
\end{aligned}
$$

再把卷积中的初值

$$
\begin{aligned}
u(0,y)
&=e^{-\alpha y}(e^y-1)^+
\end{aligned}
$$

代入，并注意

$$
\begin{aligned}
(e^y-1)^+>0
\Longleftrightarrow y>0
\Longleftrightarrow S=Ke^y>K,
\end{aligned}
$$

积分区间自然变成 $y\in(0,\infty)$。把 Gaussian kernel 与指数项合并、配方，再用 [正态分布 pdf/cdf](Asset Pricing/Theoretical AP/cards/part3/正态分布 - pdf cdf mgf#^def-standard-normal-pdf-cdf) 的尾积分公式，就得到两个 cumulative normal 项。也就是说：

$$
\begin{aligned}
\text{PDE}
&\Longrightarrow
\text{heat equation}
\Longrightarrow
\text{Gaussian convolution}
\Longrightarrow
\Phi(d_1),\Phi(d_2).
\end{aligned}
$$

写回原变量以后，就得到

$$
\begin{aligned}
C(t,S_t)
&=S_t\Phi(d_1)-Ke^{-r(T-t)}\Phi(d_2),
\end{aligned}
$$

其中

$$
\begin{aligned}
d_1
&=\frac{\ln(S_t/K)+\left(r+\frac{1}{2}\sigma^2\right)(T-t)}{\sigma\sqrt{T-t}},\\
d_2
&=d_1-\sigma\sqrt{T-t}
=\frac{\ln(S_t/K)+\left(r-\frac{1}{2}\sigma^2\right)(T-t)}{\sigma\sqrt{T-t}}.
\end{aligned}
$$

因此 PDE 路线也是完整闭合的：

$$
\begin{aligned}
\text{hedge}
&\Longrightarrow \text{PDE}
\Longrightarrow \text{heat equation transform}
\Longrightarrow \text{Black-Scholes closed form}.
\end{aligned}
$$

#### 8.2.3 Method 2: SDF direct pricing

##### 8.2.3.1 SDF representation

写 SDF / pricing kernel 为

$$
\begin{aligned}
\frac{d\Lambda_t}{\Lambda_t}
=-r\,dt-\sigma_\Lambda\,dz_t.
\end{aligned}
$$

对无分红资产 $P_t$，fundamental pricing equation 是

$$
\begin{aligned}
E_t\!\left[\frac{dP_t}{P_t}\right]-r\,dt
=-E_t\!\left[\frac{dP_t\,d\Lambda_t}{P_t\Lambda_t}\right].
\end{aligned}
$$

把它应用到股票价格过程：

$$
\begin{aligned}
(\mu-r)\,dt
&=E_t\!\left[\frac{dS_t}{S_t}\right]-r\,dt \\
&=-E_t\!\left[\frac{dS_t}{S_t}\frac{d\Lambda_t}{\Lambda_t}\right] \\
&=-E_t\!\left[(\sigma\,dz_t)(-\sigma_\Lambda\,dz_t)\right] \\
&=\sigma\sigma_\Lambda\,dt,
\end{aligned}
$$

因此

$$
\begin{aligned}
\sigma_\Lambda=\frac{\mu-r}{\sigma}.
\end{aligned}
$$

所以

$$
\begin{aligned}
\frac{d\Lambda_t}{\Lambda_t}
=-r\,dt-\frac{\mu-r}{\sigma}\,dz_t.
\end{aligned}
$$

##### 8.2.3.2 用 SDF 直接给 call 定价

由 SDF 定价公式，

$$
\begin{aligned}
C_0
&=E_0\!\left[\frac{\Lambda_T}{\Lambda_0}(S_T-K)^+\right] \\
&=\int \frac{\Lambda_T}{\Lambda_0}(S_T-K)^+\,dF(\Lambda_T,S_T),
\end{aligned}
$$

其中 $F(\Lambda_T,S_T)$ 是 $(\Lambda_T,S_T)$ 的 joint distribution。因为二者都由同一个 Brownian motion 驱动，所以先找出它们的 joint distribution 即可。

##### 8.2.3.3 Generic GBM 的分布

先看一般过程

$$
\begin{aligned}
\frac{dY_t}{Y_t}=\mu_Y\,dt+\sigma_Y\,dz_t.
\end{aligned}
$$

由 Itô 公式，

$$
\begin{aligned}
d\ln Y_t
&=\frac{dY_t}{Y_t}-\frac{1}{2}\left(\frac{dY_t}{Y_t}\right)^2 \\
&=\left(\mu_Y-\frac{1}{2}\sigma_Y^2\right)dt+\sigma_Y\,dz_t.
\end{aligned}
$$

从 $0$ 积到 $T$，

$$
\begin{aligned}
\ln Y_T-\ln Y_0
&=\left(\mu_Y-\frac{1}{2}\sigma_Y^2\right)T+\sigma_Y(z_T-z_0).
\end{aligned}
$$

写成标准正态 $\varepsilon\sim N(0,1)$，

$$
\begin{aligned}
\ln Y_T
=\ln Y_0+\left(\mu_Y-\frac{1}{2}\sigma_Y^2\right)T+\sigma_Y\sqrt{T}\,\varepsilon.
\end{aligned}
$$

##### 8.2.3.4 应用到 terminal stock price and pricing kernel

对股票，

$$
\begin{aligned}
\ln S_T
=\ln S_0+\left(\mu-\frac{1}{2}\sigma^2\right)T+\sigma\sqrt{T}\,\varepsilon.
\end{aligned}
$$

对 SDF，因为

$$
\begin{aligned}
\frac{d\Lambda_t}{\Lambda_t}
=-r\,dt-\frac{\mu-r}{\sigma}\,dz_t,
\end{aligned}
$$

所以

$$
\begin{aligned}
\ln \Lambda_T
&=\ln \Lambda_0
+\left(-r-\frac{1}{2}\left(\frac{\mu-r}{\sigma}\right)^2\right)T
-\frac{\mu-r}{\sigma}\sqrt{T}\,\varepsilon.
\end{aligned}
$$

这两条式子说明：$S_T$ 与 $\Lambda_T$ 都是标准正态 \(\varepsilon\) 的指数函数，因此它们的联合分布已经完全确定。

##### 8.2.3.5 把期望写成对正态密度的积分

令 $\phi(\varepsilon)$ 表示 standard normal density。由于 $(S_T-K)^+>0$ 当且仅当 $S_T\ge K$，所以

$$
\begin{aligned}
C_0
&=\int \frac{\Lambda_T(\varepsilon)}{\Lambda_0}(S_T(\varepsilon)-K)\phi(\varepsilon)\,d\varepsilon \\
&=\int_{S_T\ge K}\frac{\Lambda_T(\varepsilon)}{\Lambda_0}S_T(\varepsilon)\phi(\varepsilon)\,d\varepsilon
-K\int_{S_T\ge K}\frac{\Lambda_T(\varepsilon)}{\Lambda_0}\phi(\varepsilon)\,d\varepsilon.
\end{aligned}
$$

把 $S_T(\varepsilon)$ 与 $\Lambda_T(\varepsilon)$ 代入：

$$
\begin{aligned}
C_0
&=\int_{S_T\ge K}
e^{-\left(r+\frac{1}{2}\left(\frac{\mu-r}{\sigma}\right)^2\right)T-\frac{\mu-r}{\sigma}\sqrt{T}\,\varepsilon}
S_0e^{\left(\mu-\frac{1}{2}\sigma^2\right)T+\sigma\sqrt{T}\,\varepsilon}
\phi(\varepsilon)\,d\varepsilon \\
&\quad
-K\int_{S_T\ge K}
e^{-\left(r+\frac{1}{2}\left(\frac{\mu-r}{\sigma}\right)^2\right)T-\frac{\mu-r}{\sigma}\sqrt{T}\,\varepsilon}
\phi(\varepsilon)\,d\varepsilon.
\end{aligned}
$$

##### 8.2.3.6 Completing the square

先用 [正态分布](Asset Pricing/Theoretical AP/cards/part3/正态分布 - pdf cdf mgf) 的 [pdf/cdf](Asset Pricing/Theoretical AP/cards/part3/正态分布 - pdf cdf mgf#^def-standard-normal-pdf-cdf) 与 [mgf](Asset Pricing/Theoretical AP/cards/part3/正态分布 - pdf cdf mgf#^def-normal-mgf) 记号。

再代入

$$
\begin{aligned}
\phi(\varepsilon)=\frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}\varepsilon^2},
\end{aligned}
$$

整理指数并 complete the square：

$$
\begin{aligned}
C_0
&=\frac{1}{\sqrt{2\pi}}S_0
\int_{S_T\ge K}
\exp\!\left[
-\frac{1}{2}\left(\varepsilon-\left(\sigma-\frac{\mu-r}{\sigma}\right)\sqrt{T}\right)^2
\right]d\varepsilon \\
&\quad
-\frac{1}{\sqrt{2\pi}}Ke^{-rT}
\int_{S_T\ge K}
\exp\!\left[
-\frac{1}{2}\left(\varepsilon+\frac{\mu-r}{\sigma}\sqrt{T}\right)^2
\right]d\varepsilon.
\end{aligned}
$$

##### 8.2.3.7 积分下限

由 $S_T=K$ 确定积分下限：

$$
\begin{aligned}
\ln K
&=\ln S_T \\
&=\ln S_0+\left(\mu-\frac{1}{2}\sigma^2\right)T+\sigma\sqrt{T}\,\varepsilon,
\end{aligned}
$$

所以

$$
\begin{aligned}
\varepsilon^*
=\frac{\ln K-\ln S_0-\left(\mu-\frac{1}{2}\sigma^2\right)T}{\sigma\sqrt{T}}.
\end{aligned}
$$

于是

$$
\begin{aligned}
C_0
&=\frac{1}{\sqrt{2\pi}}S_0
\int_{\varepsilon^*}^{\infty}
e^{-\frac{1}{2}\left(\varepsilon-\left(\sigma-\frac{\mu-r}{\sigma}\right)\sqrt{T}\right)^2}d\varepsilon
-\frac{1}{\sqrt{2\pi}}Ke^{-rT}
\int_{\varepsilon^*}^{\infty}
e^{-\frac{1}{2}\left(\varepsilon+\frac{\mu-r}{\sigma}\sqrt{T}\right)^2}d\varepsilon.
\end{aligned}
$$

##### 8.2.3.8 写成 cumulative normal

用

$$
\begin{aligned}
\frac{1}{\sqrt{2\pi}}\int_a^\infty e^{-\frac{1}{2}(\varepsilon-\mu)^2}d\varepsilon
=\Phi(\mu-a),
\end{aligned}
$$

得到

$$
\begin{aligned}
C_0
&=S_0\Phi\!\left[
\left(\sigma-\frac{\mu-r}{\sigma}\right)\sqrt{T}
-\frac{\ln K-\ln S_0-\left(\mu-\frac{1}{2}\sigma^2\right)T}{\sigma\sqrt{T}}
\right] \\
&\quad
-Ke^{-rT}\Phi\!\left[
-\frac{\mu-r}{\sigma}\sqrt{T}
-\frac{\ln K-\ln S_0-\left(\mu-\frac{1}{2}\sigma^2\right)T}{\sigma\sqrt{T}}
\right].
\end{aligned}
$$

整理后，$\mu$ 完全消掉：

$$
\begin{aligned}
C_0
&=S_0\Phi(d_1)-Ke^{-rT}\Phi(d_2),
\end{aligned}
$$

其中

$$
\begin{aligned}
d_1
&=\frac{\ln(S_0/K)+\left(r+\frac{1}{2}\sigma^2\right)T}{\sigma\sqrt{T}},\\
d_2
&=d_1-\sigma\sqrt{T}
=\frac{\ln(S_0/K)+\left(r-\frac{1}{2}\sigma^2\right)T}{\sigma\sqrt{T}}.
\end{aligned}
$$

##### 8.2.3.9 Generic time t

若起点不是 $0$ 而是一般时点 $t$，只需把 $S_0$ 改成 $S_t$，把 $T$ 改成 $T-t$：

$$
\begin{aligned}
C_t
&=S_t\Phi(q_1)-Ke^{-r(T-t)}\Phi(q_2),
\end{aligned}
$$

其中

$$
\begin{aligned}
q_1
&=\frac{\ln(S_t/K)+\left(r+\frac{1}{2}\sigma^2\right)(T-t)}{\sigma\sqrt{T-t}},\\
q_2
&=q_1-\sigma\sqrt{T-t}
=\frac{\ln(S_t/K)+\left(r-\frac{1}{2}\sigma^2\right)(T-t)}{\sigma\sqrt{T-t}}.
\end{aligned}
$$

这里默认股票 **不支付红利**。  

#### 8.2.4 Method 3: Risk-neutral pricing derivation

#### 推导核对：从 SDF 到风险中性测度

:::{admonition} Lemma: Risk-Neutral Drift
若

$$
\frac{d\Lambda_t}{\Lambda_t}=-rdt-\lambda dW_t,
$$

则 Girsanov 变换下

$$
dW_t^{\mathbb Q}=dW_t+\lambda dt
$$

使股票动态变成

$$
\frac{dS_t}{S_t}=rdt+\sigma dW_t^{\mathbb Q}.
$$

:::

**WTS：** 把 $P$ 测度下的风险溢价吸收到 Brownian motion 的漂移调整中。

**联立系统：**

$$
\begin{aligned}
\frac{dS_t}{S_t}&=\mu dt+\sigma dW_t,\\
\mu-r&=\sigma\lambda,\\
dW_t^{\mathbb Q}&=dW_t+\lambda dt.
\end{aligned}
$$

**连续求解：** 由 $dW_t=dW_t^{\mathbb Q}-\lambda dt$，

$$
\begin{aligned}
\frac{dS_t}{S_t}
&=\mu dt+\sigma(dW_t^{\mathbb Q}-\lambda dt)\\
&=(\mu-\sigma\lambda)dt+\sigma dW_t^{\mathbb Q}\\
&=(\mu-(\mu-r))dt+\sigma dW_t^{\mathbb Q}\\
&=rdt+\sigma dW_t^{\mathbb Q}.
\end{aligned}
$$

所以欧式 payoff $H(S_T)$ 的价格为

$$
\begin{aligned}
V_t=e^{-r(T-t)}E_t^{\mathbb Q}[H(S_T)].
\end{aligned}
$$

**结论：** 风险中性不是投资者真的风险中性，而是用等价测度把风险溢价转移到概率权重里。


第三条路线是直接转到 risk-neutral measure $\mathbb Q$。  
在 $\mathbb Q$ 下，discounted stock price 是鞅，所以

$$
\begin{aligned}
\frac{dS_t}{S_t}
=r\,dt+\sigma\,dW_t^{\mathbb Q}.
\end{aligned}
$$

因此

$$
\begin{aligned}
d\ln S_t
&=\left(r-\frac{1}{2}\sigma^2\right)dt+\sigma\,dW_t^{\mathbb Q},
\end{aligned}
$$

从 $t$ 积到 $T$，

$$
\begin{aligned}
\ln S_T
&=\ln S_t+\left(r-\frac{1}{2}\sigma^2\right)(T-t)+\sigma\sqrt{T-t}\,\varepsilon^{\mathbb Q},
\end{aligned}
$$

其中 $\varepsilon^{\mathbb Q}\sim N(0,1)$。

于是 call price 直接写成

$$
\begin{aligned}
C_t
&=e^{-r(T-t)}E_t^{\mathbb Q}\!\left[(S_T-K)^+\right] \\
&=e^{-r(T-t)}E_t^{\mathbb Q}\!\left[(S_T-K)\mathbf 1_{\{S_T\ge K\}}\right] \\
&=e^{-r(T-t)}E_t^{\mathbb Q}\!\left[S_T\mathbf 1_{\{S_T\ge K\}}\right]
-Ke^{-r(T-t)}Q_t(S_T\ge K).
\end{aligned}
$$

先看第二项。由上面的对数正态分布，

$$
\begin{aligned}
Q_t(S_T\ge K)
&=Q_t(\ln S_T\ge \ln K) \\
&=\Phi(q_2),
\end{aligned}
$$

其中

$$
\begin{aligned}
q_2
&=\frac{\ln(S_t/K)+\left(r-\frac{1}{2}\sigma^2\right)(T-t)}{\sigma\sqrt{T-t}}.
\end{aligned}
$$

第一项是 lognormal truncated expectation：

$$
\begin{aligned}
e^{-r(T-t)}E_t^{\mathbb Q}\!\left[S_T\mathbf 1_{\{S_T\ge K\}}\right]
&=S_t\Phi(q_1),
\end{aligned}
$$

其中

$$
\begin{aligned}
q_1
&=q_2+\sigma\sqrt{T-t}
=\frac{\ln(S_t/K)+\left(r+\frac{1}{2}\sigma^2\right)(T-t)}{\sigma\sqrt{T-t}}.
\end{aligned}
$$

因此

$$
\begin{aligned}
C_t
&=S_t\Phi(q_1)-Ke^{-r(T-t)}\Phi(q_2).
\end{aligned}
$$

所以 risk-neutral 路线的结构是

$$
\begin{aligned}
\text{change to }\mathbb Q
&\Longrightarrow
\frac{dS_t}{S_t}=r\,dt+\sigma\,dW_t^{\mathbb Q} \\
&\Longrightarrow
C_t=e^{-r(T-t)}E_t^{\mathbb Q}[(S_T-K)^+] \\
&\Longrightarrow
\text{evaluate lognormal expectation}
\Longrightarrow
\text{same Black-Scholes formula}.
\end{aligned}
$$


因此，这一节的三条推导线可以总结成

$$
\begin{aligned}
\text{replicating portfolio}
&\Longrightarrow \text{PDE}
\Longrightarrow \text{closed form},\\
\text{SDF}
&\Longrightarrow \text{joint distribution}
\Longrightarrow \text{expectation integral}
\Longrightarrow \text{same closed form},\\
\text{risk-neutral measure}
&\Longrightarrow \text{discounted expectation under }\mathbb Q
\Longrightarrow \text{same closed form}.
\end{aligned}
$$

#### 8.2.5 Put-call parity

##### 8.2.5.1 At expiration

到期时，call 与 put 的 payoff 满足

$$
\begin{aligned}
C_T-P_T
&=(S_T-K)^+-(K-S_T)^+ \\
&=S_T-K.
\end{aligned}
$$

因为

$$
\begin{aligned}
C_T&=\max(S_T-K,0),\\
P_T&=\max(K-S_T,0),
\end{aligned}
$$

所以分情形立即可得：

$$
\begin{aligned}
S_T\ge K
&\Longrightarrow C_T=S_T-K,\ P_T=0,\ C_T-P_T=S_T-K,\\
S_T<K
&\Longrightarrow C_T=0,\ P_T=K-S_T,\ C_T-P_T=S_T-K.
\end{aligned}
$$

##### 8.2.5.2 Before expiration

到期前，用 SDF 定价有

$$
\begin{aligned}
C_t
&=E_t\!\left[\frac{\Lambda_T}{\Lambda_t}(S_T-K)^+\right],\\
P_t
&=E_t\!\left[\frac{\Lambda_T}{\Lambda_t}(K-S_T)^+\right].
\end{aligned}
$$

两式相减：

$$
\begin{aligned}
C_t-P_t
&=E_t\!\left[
\frac{\Lambda_T}{\Lambda_t}\big((S_T-K)^+-(K-S_T)^+\big)
\right] \\
&=E_t\!\left[\frac{\Lambda_T}{\Lambda_t}(S_T-K)\right].
\end{aligned}
$$

若 $r$ 为常数，则

$$
\begin{aligned}
E_t\!\left[\frac{\Lambda_T}{\Lambda_t}K\right]
&=Ke^{-r(T-t)},
\end{aligned}
$$

所以得到熟悉形式

$$
\begin{aligned}
C_t-P_t
&=S_t-Ke^{-r(T-t)}.
\end{aligned}
$$

##### 8.2.5.3 Black-Scholes PDE under the risk-neutral measure

在 risk-neutral measure 下，所有不分红资产的 expected return 都等于 $r$，所以

$$
\begin{aligned}
\frac{dS_t}{S_t}
&=r\,dt+\sigma\,dW_t^{\mathbb Q}.
\end{aligned}
$$

对期权价格 $C(t,S_t)$ 应用 Itô 公式：

$$
\begin{aligned}
dC_t
&=\frac{\partial C}{\partial t}\,dt
+\frac{\partial C}{\partial S}\,dS_t
+\frac{1}{2}\frac{\partial^2 C}{\partial S^2}(dS_t)^2 \\
&=\left(
\frac{\partial C}{\partial t}
+rS_t\frac{\partial C}{\partial S}
+\frac{1}{2}\sigma^2S_t^2\frac{\partial^2 C}{\partial S^2}
\right)dt
+\sigma S_t\frac{\partial C}{\partial S}\,dW_t^{\mathbb Q}.
\end{aligned}
$$

在 $\mathbb Q$ 下，fundamental asset pricing equation 变成

$$
\begin{aligned}
E_t^{\mathbb Q}\!\left[\frac{dP_t}{P_t}\right]
&=r\,dt
\Longleftrightarrow
E_t^{\mathbb Q}(dP_t)=rP_t\,dt.
\end{aligned}
$$

令 $P_t=C_t$，则

$$
\begin{aligned}
E_t^{\mathbb Q}(dC_t)
&=rC_t\,dt.
\end{aligned}
$$

又因为

$$
\begin{aligned}
E_t^{\mathbb Q}[dW_t^{\mathbb Q}]=0,
\end{aligned}
$$

所以

$$
\begin{aligned}
E_t^{\mathbb Q}(dC_t)
&=\left(
\frac{\partial C}{\partial t}
+rS_t\frac{\partial C}{\partial S}
+\frac{1}{2}\sigma^2S_t^2\frac{\partial^2 C}{\partial S^2}
\right)dt.
\end{aligned}
$$

比较两边，得到

$$
\begin{aligned}
rC_t
&=\frac{\partial C}{\partial t}
+rS_t\frac{\partial C}{\partial S}
+\frac{1}{2}\sigma^2S_t^2\frac{\partial^2 C}{\partial S^2},
\end{aligned}
$$

即

$$
\begin{aligned}
\frac{\partial C}{\partial t}
+rS_t\frac{\partial C}{\partial S}
+\frac{1}{2}\sigma^2S_t^2\frac{\partial^2 C}{\partial S^2}
-rC_t
=0.
\end{aligned}
$$

这表明：在 Black-Scholes 环境中，从

$$
\begin{aligned}
\text{replicating portfolio},\qquad
\text{SDF},\qquad
\text{risk-neutral pricing}
\end{aligned}
$$

三条路线都回到同一个 PDE 与同一个 closed-form formula。

### 8.3 American Options

European option 只能在到期 $T$ 行权；American option 可以在任意 stopping time $\tau\in[t,T]$ 行权。因此 American option 的定价本质上不是单纯的 terminal payoff pricing，而是 **optimal stopping**：

$$
\begin{aligned}
V_t^{A}
&=\sup_{\tau\in[t,T]}E_t^{\mathbb Q}\!\left[e^{-r(\tau-t)}\,\Phi(S_\tau)\right],
\end{aligned}
$$

其中 $\Phi(S)$ 是即时行权价值（intrinsic value）。例如

$$
\begin{aligned}
\Phi_{\text{call}}(S)&=(S-K)^+,\\
\Phi_{\text{put}}(S)&=(K-S)^+.
\end{aligned}
$$

所以 American option 的价值分解为

$$
\begin{aligned}
V_t^{A}
=\max\{\text{continuation value},\ \text{exercise value}\}.
\end{aligned}
$$

#### 8.3.1 Dynamic programming form

在 infinitesimal 形式下，American option 满足

$$
\begin{aligned}
V^A(t,S)
&\ge \Phi(S),
\end{aligned}
$$

并且 continuation region 内满足和 European option 一样的 Black-Scholes PDE：

$$
\begin{aligned}
\frac{\partial V^A}{\partial t}
+rS\frac{\partial V^A}{\partial S}
+\frac{1}{2}\sigma^2S^2\frac{\partial^2 V^A}{\partial S^2}
-rV^A
=0.
\end{aligned}
$$

exercise region 内则直接有

$$
\begin{aligned}
V^A(t,S)=\Phi(S).
\end{aligned}
$$

因此 American option 的定价问题是一个 **free-boundary problem / variational inequality**：

$$
\begin{aligned}
\max\!\left\{
\frac{\partial V^A}{\partial t}
+rS\frac{\partial V^A}{\partial S}
+\frac{1}{2}\sigma^2S^2\frac{\partial^2 V^A}{\partial S^2}
-rV^A,\,
\Phi(S)-V^A
\right\}=0.
\end{aligned}
$$

边界不是事先给定的，而是最优行权边界的一部分，这就是为什么 American option 通常没有像 Black-Scholes European call 那样简洁的 closed form。

##### 8.3.1.1 能不能写出显式解

一般来说，

$$
\begin{aligned}
\text{American option}
\quad\Longrightarrow\quad
\text{通常没有 closed-form explicit solution}.
\end{aligned}
$$

原因不是 payoff 更复杂，而是多了

$$
\begin{aligned}
\sup_{\tau\in[t,T]}
\end{aligned}
$$

这个最优停止（optimal stopping）选择，所以未知对象不只是价格函数 $V^A(t,S)$，还包括最优行权边界 $S^*(t)$。  
换句话说，European option 是 **terminal value problem**，而 American option 是 **free-boundary problem**：

$$
\begin{aligned}
\text{unknowns} =
\big(V^A(t,S),\,S^*(t)\big).
\end{aligned}
$$

因此通常不能像 Black-Scholes European call 那样，直接写成

$$
\begin{aligned}
V^A(t,S)=\text{simple function of }\Phi(d_1),\Phi(d_2).
\end{aligned}
$$

但有几个重要特例：

$$
\begin{aligned}
\text{American call, no dividend}
&= \text{European call},\\
\text{American put, no dividend}
&> \text{European put}\ \text{(一般无 closed form)}.
\end{aligned}
$$

第一条之所以成立，是因为不支付股息时提前行权永远不优，所以

$$
\begin{aligned}
V_t^{A,\text{call}}
=V_t^{E,\text{call}}
=S_t\Phi(d_1)-Ke^{-r(T-t)}\Phi(d_2).
\end{aligned}
$$

而 American put 一般只能写成

$$
\begin{aligned}
V_t^{A,\text{put}}
=V_t^{E,\text{put}}+\text{early exercise premium},
\end{aligned}
$$

但这个 premium 本身又依赖 free boundary，所以仍然通常要靠数值法或近似法求。

因此记忆上最好分成：
- **能写显式解**：European call / put；American call（无股息）；
- **通常不能写显式解**：American put；American call（有股息时也一般没有简洁 closed form）。

#### 8.3.2 Early exercise boundary and smooth pasting

设最优行权边界为 $S^*(t)$。则

$$
\begin{aligned}
S\in \mathcal C
&\Longrightarrow \text{continue},\\
S\in \mathcal E
&\Longrightarrow \text{exercise}.
\end{aligned}
$$

在边界上通常满足

$$
\begin{aligned}
V^A(t,S^*(t))
&=\Phi(S^*(t))
\qquad \text{(value matching)},\\
\frac{\partial V^A}{\partial S}(t,S^*(t))
&=\Phi'(S^*(t))
\qquad \text{(smooth pasting)}.
\end{aligned}
$$

这两个条件和 PDE 一起决定 free boundary。

#### 8.3.3 Key benchmark results

对 **不支付红利的 American call**，

$$
\begin{aligned}
V_t^{A,\text{call}}
=V_t^{E,\text{call}}.
\end{aligned}
$$

原因是提前行权会失去剩余时间价值，而且立即支付执行价 $K$ 没有好处；因此 early exercise 永远不是最优。

对 **不支付红利的 American put**，

$$
\begin{aligned}
V_t^{A,\text{put}}
\ge
V_t^{E,\text{put}},
\end{aligned}
$$

并且当股票价格足够低时，提前行权可能最优。直觉是：put 深度 ITM 时，尽早锁定 $K-S_t$ 并把收到的现金按无风险利率投资，可能优于继续持有。

若标的支付连续股息率 $q$，则在风险中性测度下

$$
\begin{aligned}
\frac{dS_t}{S_t}
=(r-q)\,dt+\sigma\,dW_t^{\mathbb Q},
\end{aligned}
$$

此时 American call 也可能提前行权，因为持有期权拿不到股息。

#### 8.3.4 Practical pricing methods

American option 通常靠数值法定价：
- **binomial / trinomial tree**：每个节点比较 continuation value 和 exercise value；
- **finite difference**：求 variational inequality；
- **LSM (Longstaff-Schwartz)**：适合高维路径依赖问题。

在 binomial tree 里，递推最直观：

$$
\begin{aligned}
V_t^{A}
=\max\left\{
\Phi(S_t),\,
e^{-r\Delta t}E_t^{\mathbb Q}[V_{t+\Delta t}^{A}]
\right\}.
\end{aligned}
$$

所以 American option 比 European option 多出来的核心不是“换一套 payoff”，而是多了一个 **optimal exercise decision**；数学上，这就是从 terminal-value problem 变成 stopping / free-boundary problem。


## 9. 债券定价与利率模型 (Bond Pricing and Interest Rate Models)

在无套利框架下，债券价格 $P(t, T)$ 必须满足折扣价格过程 $\Lambda_t P(t, T)$ 是一个鞅。本 笔记重点比较两种经典的单因子模型：Vasicek 模型与 CIR 模型。

### 9.1 债券基础 (Bond Basics)

下面先假设 **没有违约风险**（default-free）。最简单的 fixed-income instrument 是 **zero-coupon bond**：它在到期日只支付一次，期间没有 coupon。

:::{admonition} Definition (Default-free zero-coupon bond)
一个 default-free zero-coupon bond 承诺在到期日 $T$ 支付 1 单位名义价值（nominal bond）或 1 单位消费品（real bond）。  
记

$$
\begin{aligned}
P_t^{(N)}
\end{aligned}
$$

为时点 $t$、剩余期限为 $N$ 的 zero-coupon bond price。

:::

若面值（face value）标准化为 $1$，则 continuously compounded yield 满足

$$
\begin{aligned}
e^{r_t^{(N)}N}
&=\frac{1}{P_t^{(N)}},
\end{aligned}
$$

因此年化连续复利利率为

$$
\begin{aligned}
r_t^{(N)}
&=\frac{1}{N}\ln\!\left(\frac{1}{P_t^{(N)}}\right).
\end{aligned}
$$

若记对数价格为小写

$$
\begin{aligned}
p_t^{(N)}:=\ln P_t^{(N)},
\end{aligned}
$$

则上式也可写成

$$
\begin{aligned}
r_t^{(N)}
&=-\frac{1}{N}p_t^{(N)}.
\end{aligned}
$$

所以：
- **bond price** $P_t^{(N)}$ 高 $\Longrightarrow$ **yield** $r_t^{(N)}$ 低；
- **bond price** $P_t^{(N)}$ 低 $\Longrightarrow$ **yield** $r_t^{(N)}$ 高。

这也是后面 term structure 里 price / yield 互相转换的基本起点。

#### 9.1.1 Coupon bonds

实践中更常见的是 **coupon bond**。例如，面值 \$100、期限 10 年的 coupon bond 可能每年支付 \$5 coupon，直到第 10 年再支付 \$100 principal。

coupon bond 的定价可以看成一篮子 zero-coupon bonds 的加总。若债券在时点

$$
\begin{aligned}
t_1<t_2<\cdots<t_n
\end{aligned}
$$

支付 cash flows

$$
\begin{aligned}
c_1,c_2,\ldots,c_n,
\end{aligned}
$$

则其价格为

$$
\begin{aligned}
P_t^{\text{coupon}}
&=\sum_{j=1}^n c_j P_t(t_j),
\end{aligned}
$$

其中 $P_t(t_j)$ 表示到期于 $t_j$、面值为 1 的 zero-coupon bond price。

因此 coupon bond 本质上等价于“若干个不同期限 zero-coupon bond 的组合”。  
例如上面的 10 年债券就等价于：

$$
\begin{aligned}
5P_t(1)+5P_t(2)+\cdots+5P_t(9)+105P_t(10).
\end{aligned}
$$

#### 9.1.2 Yields

年化连续复利利率通常就称为 **yield**，所以前面定义的

$$
\begin{aligned}
y_t^{(N)}
:=r_t^{(N)}
=-\frac{1}{N}p_t^{(N)}
=\frac{1}{N}\ln\!\left(\frac{1}{P_t^{(N)}}\right)
\end{aligned}
$$

就是 $N$-period zero-coupon bond 的 yield。

yield 只是 price 的另一种报价方式，因此

$$
\begin{aligned}
P_t^{(N)}
=e^{-Ny_t^{(N)}}.
\end{aligned}
$$

例如，一个两年期 zero-coupon bond 若价格为 \$0.93，则

$$
\begin{aligned}
y_t^{(2)}
&=\frac{1}{2}\ln\!\left(\frac{1}{0.93}\right).
\end{aligned}
$$

#### 9.1.3 Holding period returns

若在时点 $t$ 买入一只 $N$-period zero-coupon bond，并在一个 period 后卖出，那么到 $t+1$ 时它就变成了一只 $(N-1)$-period bond，因此 gross holding period return 为

$$
\begin{aligned}
\operatorname{HPR}_{t+1}^{(N)}
&=\frac{P_{t+1}^{(N-1)}}{P_t^{(N)}}.
\end{aligned}
$$

若取对数，记

$$
\begin{aligned}
hpr_{t+1}^{(N)}
:=\ln \operatorname{HPR}_{t+1}^{(N)},
\end{aligned}
$$

则

$$
\begin{aligned}
hpr_{t+1}^{(N)}
&=p_{t+1}^{(N-1)}-p_t^{(N)}.
\end{aligned}
$$

例如，两年期 zero-coupon bond 若今天价格为 \$0.93，一年后价格变成 \$0.97，则

$$
\begin{aligned}
hpr_1^{(2)}
&=p_1^{(1)}-p_0^{(2)}\\
&=\ln(0.97)-\ln(0.93)\\
&\approx (-3\%)-(-7\%)\\
&=4\%.
\end{aligned}
$$

连续时间里，需要考虑在短时间 $\Delta$ 内，买入 $N$-period bond 后，到 $t+\Delta$ 卖出的是一只 $(N-\Delta)$-period bond，因此

$$
\begin{aligned}
hpr
&=\frac{P_{t+\Delta}^{(N-\Delta)}-P_t^{(N)}}{P_t^{(N)}} \\
&=\frac{P_{t+\Delta}^{(N)}-P_t^{(N)}}{P_t^{(N)}}
+\frac{P_{t+\Delta}^{(N-\Delta)}-P_{t+\Delta}^{(N)}}{P_t^{(N)}}.
\end{aligned}
$$

把两部分分别写成极限：

$$
\begin{aligned}
\frac{dP_t^{(N)}}{P_t^{(N)}}
&:=\lim_{\Delta\to 0}\frac{P_{t+\Delta}^{(N)}-P_t^{(N)}}{P_t^{(N)}},\\
-\frac{1}{P_t^{(N)}}\frac{\partial P_t^{(N)}}{\partial N}
&:=\lim_{\Delta\to 0}\frac{P_{t+\Delta}^{(N-\Delta)}-P_{t+\Delta}^{(N)}}{P_t^{(N)}}.
\end{aligned}
$$

因此 instantaneous holding period return 可写成

$$
\begin{aligned}
hpr
&=\frac{dP_t^{(N)}}{P_t^{(N)}}
-\frac{1}{P_t^{(N)}}\frac{\partial P_t^{(N)}}{\partial N}\,dN.
\end{aligned}
$$

#### 9.1.4 Forward rate

forward rate 是今天约定、从未来某个时点开始借贷一段时间的利率。  
例如从 $t+N$ 借到 $t+N+1$ 的 one-period forward rate，可以由 zero-coupon bonds 合成出来。

买入 1 单位 $N$-period zero-coupon bond，同时卖空 $x$ 单位 $(N+1)$-period zero-coupon bond，则 cash flow 为

$$
\begin{aligned}
\text{at }t &: -P_t^{(N)}+xP_t^{(N+1)},\\
\text{at }t+N &: 1,\\
\text{at }t+N+1 &: -x.
\end{aligned}
$$

要让初始净现金流为 0，需要

$$
\begin{aligned}
x=\frac{P_t^{(N)}}{P_t^{(N+1)}}.
\end{aligned}
$$

于是这相当于：在 $t+N$ 收到 1，并在 $t+N+1$ 偿还

$$
\begin{aligned}
\frac{P_t^{(N)}}{P_t^{(N+1)}}.
\end{aligned}
$$

因此 one-period forward gross rate 为

$$
\begin{aligned}
F_t^{(N\to N+1)}
&=\frac{P_t^{(N)}}{P_t^{(N+1)}},
\end{aligned}
$$

若写成连续复利 forward rate，则

$$
\begin{aligned}
f_t^{(N\to N+1)}
&=p_t^{(N)}-p_t^{(N+1)}.
\end{aligned}
$$

特例是

$$
\begin{aligned}
f_t^{(0\to 1)}
&=p_t^{(0)}-p_t^{(1)}
=-p_t^{(1)}
=y_t^{(1)}.
\end{aligned}
$$

例如，若当前两年期 zero-coupon bond price 为 $0.95$，三年期 zero-coupon bond price 为 $0.91$，则从第 2 年到第 3 年的连续复利 forward rate 为

$$
\begin{aligned}
f_0^{(2\to 3)}
&=p_0^{(2)}-p_0^{(3)}\\
&=\ln(0.95)-\ln(0.91)\\
&\approx (-5\%)-(-9\%)\\
&=4\%.
\end{aligned}
$$

更一般地，bond price 可以写成 forward rates 的和。因为

$$
\begin{aligned}
f_t^{(N-1\to N)}
&=p_t^{(N-1)}-p_t^{(N)},\\
f_t^{(N-2\to N-1)}
&=p_t^{(N-2)}-p_t^{(N-1)},\\
&\ \vdots \\
f_t^{(0\to 1)}
&=p_t^{(0)}-p_t^{(1)},
\end{aligned}
$$

把它们逐项相加，得到 telescoping sum：

$$
\begin{aligned}
p_t^{(N)}
&=-\sum_{j=0}^{N-1}f_t^{(j\to j+1)}.
\end{aligned}
$$

因此

$$
\begin{aligned}
P_t^{(N)}
&=\exp\!\left(-\sum_{j=0}^{N-1}f_t^{(j\to j+1)}\right) \\
&=\left[\prod_{j=0}^{N-1}F_t^{(j\to j+1)}\right]^{-1}.
\end{aligned}
$$

连续时间里，instantaneous forward rate 定义为

$$
\begin{aligned}
f(N,t)
&:=-\frac{1}{P_t^{(N)}}\frac{\partial P_t^{(N)}}{\partial N}
=-\frac{\partial p_t^{(N)}}{\partial N}.
\end{aligned}
$$

于是

$$
\begin{aligned}
p_t^{(N)}
&=-\int_0^N f(n,t)\,dn,\\
P_t^{(N)}
&=\exp\!\left(-\int_0^N f(n,t)\,dn\right).
\end{aligned}
$$

#### 9.1.5 Yield curve

yield curve 就是 zero-coupon bond yield 随 maturity 变化的图：

$$
\begin{aligned}
N\mapsto y_t^{(N)}.
\end{aligned}
$$

常见形状有：
- **rising yield curve**：长期收益率高于短期收益率；
- **inverted yield curve**：短期收益率高于长期收益率；
- **hump-shaped curve**：中间期限更高。

所以：

$$
\begin{aligned}
\text{bond prices}
\Longleftrightarrow
\text{yields}
\Longleftrightarrow
\text{forward rates}
\end{aligned}
$$

本质上是同一条 term structure 的不同表达方式。

#### 9.1.6 Expectation Hypothesis

Expectation Hypothesis (EH) 是理解 yield curve 形状的经典理论。可以写成三个数学上等价的形式。
##### 9.1.6.1 Three equivalent statements

**Statement 1: N-period yield 是预期未来 one-period yield 的平均**

$$
\begin{aligned}
y_t^{(N)}
&=\frac{1}{N}E_t\!\left[y_t^{(1)}+y_{t+1}^{(1)}+\cdots+y_{t+N-1}^{(1)}\right].
\end{aligned}
$$

**Statement 2: forward rate 等于预期未来 spot rate**

$$
\begin{aligned}
f_t^{(N-1\to N)}
&=E_t\!\left[y_{t+N-1}^{(1)}\right].
\end{aligned}
$$

**Statement 3: 不同期限债券的预期 holding period log return 相等**

$$
\begin{aligned}
E_t\!\left[hpr_{t+1}^{(N)}\right]
&=y_t^{(1)},
\end{aligned}
$$

其中

$$
\begin{aligned}
hpr_{t+1}^{(N)}
=p_{t+1}^{(N-1)}-p_t^{(N)}.
\end{aligned}
$$

更一般地，教材里有时会写成

$$
\begin{aligned}
y_t^{(N)}
&=\frac{1}{N}E_t\!\left[\sum_{j=0}^{N-1}y_{t+j}^{(1)}\right]
+\text{term premium},\\
f_t^{(N-1\to N)}
&=E_t\!\left[y_{t+N-1}^{(1)}\right]
+\text{forward premium},\\
E_t[hpr_{t+1}^{(N)}]
&=y_t^{(1)}
+\text{expected excess return}.
\end{aligned}
$$

但原始的 Expectation Hypothesis 就是把这些 premium 设为 0。

##### 9.1.6.2 Intuition

第一种表述的直觉是：从 $t$ 投资到 $t+N$，你有两种方式：
- 直接买一只 $N$-period bond；
- 连续 rolling over $N$ 次 one-period bond。

若投资者风险中性、并且这两种策略都无套利，则两种方式的 expected return 应该一致，于是长债收益率就是未来短债收益率的平均。

第二种表述的直觉是：从 $t+N-1$ 到 $t+N$ 借贷一段钱，也有两种方式：
- 今天就 lock in 一个 forward contract；
- 等到 $t+N-1$ 再按那时的 one-period spot rate 借贷。

若 expected return 一样，则 forward rate 应等于 expected future spot rate。

第三种表述的直觉是：从 $t$ 到 $t+1$ 投资一段时间，也有两种方式：
- 买入一只 $N$-period bond，一期后卖出；
- 直接买 one-period bond 持有到期。

若不同期限债券的一期预期 log return 都被竞争压到一致，就得到

$$
\begin{aligned}
E_t[hpr_{t+1}^{(N)}]=y_t^{(1)}.
\end{aligned}
$$

##### 9.1.6.3 Expectation hypothesis vs risk neutrality

从第三种表述看，EH 和 risk neutrality 非常接近，但并不完全相同。  
EH 说的是：

$$
\begin{aligned}
E_t[\text{log return}]
\end{aligned}
$$

在各期限上相同；而 risk neutrality 更接近于要求

$$
\begin{aligned}
E_t[\text{level return}]
\end{aligned}
$$

在风险调整后一致。

如果 return 近似 lognormal，则

$$
\begin{aligned}
E(R)
=\exp\!\left(E[r]+\frac{1}{2}\sigma_r^2\right),
\end{aligned}
$$

其中 $r=\ln R$。因此

$$
\begin{aligned}
E[\text{level return}]
\neq
\exp(E[\text{log return}])
\end{aligned}
$$

除非方差项很小。  
所以 EH 是 risk neutrality 的一个很接近的近似，但不是严格同一个命题。

##### 9.1.6.4 Equivalence: 2 implies 1

由 statement 2，

$$
\begin{aligned}
f_t^{(N-1\to N)}
=E_t\!\left[y_{t+N-1}^{(1)}\right].
\end{aligned}
$$

把 $N$ 个 one-period forward rates 加起来：

$$
\begin{aligned}
f_t^{(0\to 1)}+f_t^{(1\to 2)}+\cdots+f_t^{(N-1\to N)}
&=E_t\!\left[y_t^{(1)}+y_{t+1}^{(1)}+\cdots+y_{t+N-1}^{(1)}\right].
\end{aligned}
$$

左边用 forward rate 的定义改写：

$$
\begin{aligned}
f_t^{(0\to 1)}+f_t^{(1\to 2)}+\cdots+f_t^{(N-1\to N)}
&=(p_t^{(0)}-p_t^{(1)})+(p_t^{(1)}-p_t^{(2)})+\cdots+(p_t^{(N-1)}-p_t^{(N)}) \\
&=-p_t^{(N)} \\
&=Ny_t^{(N)}.
\end{aligned}
$$

因此

$$
\begin{aligned}
y_t^{(N)}
&=\frac{1}{N}E_t\!\left[y_t^{(1)}+y_{t+1}^{(1)}+\cdots+y_{t+N-1}^{(1)}\right].
\end{aligned}
$$

##### 9.1.6.5 Equivalence: 1 implies 3

由 statement 1，

$$
\begin{aligned}
-p_t^{(N)}
&=E_t\!\left[y_t^{(1)}+y_{t+1}^{(1)}+\cdots+y_{t+N-1}^{(1)}\right].
\end{aligned}
$$

因为 $t$ 和 $N$ 任意，可把同一式写在 $t+1$：

$$
\begin{aligned}
-p_{t+1}^{(N-1)}
&=E_{t+1}\!\left[y_{t+1}^{(1)}+y_{t+2}^{(1)}+\cdots+y_{t+N-1}^{(1)}\right].
\end{aligned}
$$

对上式两边取 $E_t(\cdot)$：

$$
\begin{aligned}
-E_t[p_{t+1}^{(N-1)}]
&=E_t\!\left[y_{t+1}^{(1)}+y_{t+2}^{(1)}+\cdots+y_{t+N-1}^{(1)}\right].
\end{aligned}
$$

再和前一式相减：

$$
\begin{aligned}
E_t[p_{t+1}^{(N-1)}]-p_t^{(N)}
&=E_t[y_t^{(1)}] \\
&=y_t^{(1)}.
\end{aligned}
$$

而左边正是

$$
\begin{aligned}
E_t[hpr_{t+1}^{(N)}],
\end{aligned}
$$

所以

$$
\begin{aligned}
E_t[hpr_{t+1}^{(N)}]
=y_t^{(1)}.
\end{aligned}
$$

所以这三种形式本质上只是同一个假说的不同写法。

---

### 9.2 Continuous-time term structure models

一大类连续时间 term structure models 都建立在 pricing kernel（或 SDF）$\Lambda_t$ 与 short rate $r_t$ 的联合过程之上：

$$
\begin{aligned}
\frac{d\Lambda_t}{\Lambda_t}
&=-r_t\,dt-\sigma_\Lambda(r_t)\,dz_t,\\
dr_t
&=\mu_r(r_t)\,dt+\sigma_r(r_t)\,dz_t.
\end{aligned}
$$

这里把 $r_t$ 视为唯一状态变量（state variable），而

$$
\begin{aligned}
\mu_r(\cdot),\ \sigma_r(\cdot),\ \sigma_\Lambda(\cdot)
\end{aligned}
$$

都是 $r_t$ 的函数。无论具体模型如何，始终有

$$
\begin{aligned}
E_t\!\left[\frac{d\Lambda_t}{\Lambda_t}\right]=-r_t\,dt.
\end{aligned}
$$

term structure models 的区别，本质上就在于这几个函数的具体设定。最经典的两个例子是：

$$
\begin{aligned}
\text{Vasicek:}\qquad
\frac{d\Lambda_t}{\Lambda_t}
&=-r_t\,dt-\sigma_\Lambda\,dz_t,\\
dr_t
&=\phi(\bar r-r_t)\,dt+\sigma_r\,dz_t;
\end{aligned}
$$

$$
\begin{aligned}
\text{CIR:}\qquad
\frac{d\Lambda_t}{\Lambda_t}
&=-r_t\,dt-\sigma_\Lambda\sqrt{r_t}\,dz_t,\\
dr_t
&=\phi(\bar r-r_t)\,dt+\sigma_r\sqrt{r_t}\,dz_t.
\end{aligned}
$$

CIR 的特点是波动率里带有 $\sqrt{r_t}$，所以利率越高时波动越大，同时也更容易保持利率非负。

和 Black-Scholes 里处理 SDF 的方式一样，可以把 discount factor 向前积分：

$$
\begin{aligned}
\frac{\Lambda_T}{\Lambda_0}
=\exp\!\left(
-\int_0^T\left(r_s+\frac{1}{2}\sigma_\Lambda(s)^2\right)ds
-\int_0^T \sigma_\Lambda(s)\,dz_s
\right).
\end{aligned}
$$

因此 zero-coupon bond 的价格为

$$
\begin{aligned}
P_0^{(T)}
&=E_0\!\left[\frac{\Lambda_T}{\Lambda_0}\right] \\
&=E_0\!\left[
\exp\!\left(
-\int_0^T\left(r_s+\frac{1}{2}\sigma_\Lambda(s)^2\right)ds
-\int_0^T \sigma_\Lambda(s)\,dz_s
\right)\right].
\end{aligned}
$$

当 $\sigma_\Lambda=0$ 且 $r_t\equiv r$ 为常数时，上式退化为

$$
\begin{aligned}
P_0^{(T)}=e^{-rT}.
\end{aligned}
$$

### 9.3 Fundamental asset pricing equation for zero-coupon bonds

#### 推导核对：零息债券 PDE 的通用形式

:::{admonition} Lemma: Zero-Coupon Bond Pricing PDE
若短率状态满足

$$
dr_t=\mu_r(r_t,t)dt+\sigma_r(r_t,t)dW_t,
\qquad
\frac{d\Lambda_t}{\Lambda_t}=-r_tdt-\lambda_r(r_t,t)dW_t,
$$

零息债券 $P(t,T)=F(t,r_t;T)$ 满足

$$
F_t+(\mu_r-\sigma_r\lambda_r)F_r+\frac12\sigma_r^2F_{rr}-rF=0,
\qquad F(T,r)=1.
$$

:::

**WTS：** 由 $\Lambda_tF(t,r_t)$ 为鞅推出 PDE。

**联立系统：**

$$
\begin{aligned}
dF&=\left(F_t+\mu_rF_r+\frac12\sigma_r^2F_{rr}\right)dt+\sigma_rF_rdW,\\
d\Lambda/\Lambda&=-rdt-\lambda_rdW.
\end{aligned}
$$

**连续求解：** 鞅条件要求

$$
\begin{aligned}
0
&=\text{drift}\left(\frac{d(\Lambda F)}{\Lambda}\right)\\
&=F\left(-r\right)+\left(F_t+\mu_rF_r+\frac12\sigma_r^2F_{rr}\right)+(-\lambda_r)(\sigma_rF_r)\\
&=F_t+(\mu_r-\sigma_r\lambda_r)F_r+\frac12\sigma_r^2F_{rr}-rF.
\end{aligned}
$$

终端时债券支付 1，因此边界条件为 $F(T,r)=1$。

**结论：** 利率模型的风险中性漂移是 $\mu_r^Q=\mu_r-\sigma_r\lambda_r$；所有 affine bond pricing 的 Riccati 方程都从这个 PDE 出发。


对一般无分红资产，fundamental asset pricing equation 是

$$
\begin{aligned}
E_t\!\left[\frac{dS_t}{S_t}\right]-r_t\,dt
=-E_t\!\left[\frac{dS_t}{S_t}\frac{d\Lambda_t}{\Lambda_t}\right].
\end{aligned}
$$

若把资产换成到期为 $N$ 的 zero-coupon bond $P_t^{(N)}$，则左边要改成 **expected instantaneous holding period return**：

$$
\begin{aligned}
E_t\!\left[\frac{dP_t^{(N)}}{P_t^{(N)}}-\frac{1}{P_t^{(N)}}\frac{\partial P_t^{(N)}}{\partial N}dt\right].
\end{aligned}
$$

因此 bond pricing equation 变成

$$
\begin{aligned}
E_t\!\left[\frac{dP_t^{(N)}}{P_t^{(N)}}\right]
-\frac{1}{P_t^{(N)}}\frac{\partial P_t^{(N)}}{\partial N}dt
-r_t\,dt
=-E_t\!\left[\frac{dP_t^{(N)}}{P_t^{(N)}}\frac{d\Lambda_t}{\Lambda_t}\right].
\end{aligned}
$$

对 $P_t^{(N)}=P(N,r_t)$ 应用 Itô 公式（这里时间 dependence 已经由 $-\partial_N P\,dt$ 吸收）：

$$
\begin{aligned}
dP_t^{(N)}
&=\left(
\frac{\partial P^{(N)}}{\partial r}\mu_r
+\frac{1}{2}\frac{\partial^2 P^{(N)}}{\partial r^2}\sigma_r^2
\right)dt
+\frac{\partial P^{(N)}}{\partial r}\sigma_r\,dz_t.
\end{aligned}
$$

代回 bond pricing equation，并约去 $dt$，得到 zero-coupon bond 的基本微分方程

$$
\begin{aligned}
\frac{1}{P^{(N)}}\left[
\frac{\partial P^{(N)}}{\partial r}\mu_r
+\frac{1}{2}\frac{\partial^2 P^{(N)}}{\partial r^2}\sigma_r^2
-\frac{\partial P^{(N)}}{\partial N}
\right]
-r
=\frac{1}{P^{(N)}}\frac{\partial P^{(N)}}{\partial r}\sigma_r\sigma_\Lambda.
\end{aligned}
$$

等价地，

$$
\begin{aligned}
\frac{\partial P^{(N)}}{\partial N}
&=\left(\mu_r-\sigma_r\sigma_\Lambda\right)\frac{\partial P^{(N)}}{\partial r}
+\frac{1}{2}\sigma_r^2\frac{\partial^2 P^{(N)}}{\partial r^2}
-rP^{(N)}.
\end{aligned}
$$

这就是 term structure 模型的 bond PDE。  
后面的 Vasicek 和 CIR，都是把

$$
\begin{aligned}
\mu_r,\ \sigma_r,\ \sigma_\Lambda
\end{aligned}
$$

替换成各自的具体函数形式，再去求解 $P^{(N)}$。


### 9.4 Vasicek 模型 (恒定波动率模型)

**模型动力学 (Dynamics)**
Vasicek 模型假设瞬时利率 $r_t$ 遵循 Ornstein-Uhlenbeck (OU) 过程：

$$
\begin{cases}
\frac{d\Lambda_t}{\Lambda_t} = -r_t dt - \sigma_\Lambda dz_t \\
dr_t = \phi(\bar{r} - r_t) dt + \sigma_r dz_t
\end{cases}
$$

#### 9.4.1 解析解：期望方法 (via Expectation)

**随机贴现因子 (SDF) 的显式形式**
根据无套利原理，债券价格 $P_t = E_t [ \frac{\Lambda_T}{\Lambda_t} ]$。对 $\ln \Lambda_s$ 应用伊藤引理：

$$
\begin{aligned}
d(\ln \Lambda_s) &= \frac{1}{\Lambda_s} d\Lambda_s - \frac{1}{2\Lambda_s^2} (d\Lambda_s)^2 \\
&= - \left( r_s + \frac{1}{2} \sigma_\Lambda^2 \right) ds - \sigma_\Lambda dz_s
\end{aligned}
$$

在 $[t, T]$ 上积分：
$$\frac{\Lambda_T}{\Lambda_t} = \exp \left( -\int_t^T r_s ds - \sigma_\Lambda \int_t^T dz_s - \frac{1}{2}\sigma_\Lambda^2 N \right) \quad \text{其中 } N = T-t$$

**利率过程 $r_t$ 的显式解推导**
令 $\tilde{r}_t = e^{\phi t}(r_t - \bar{r})$。对其求全微分：

$$
\begin{aligned}
d\tilde{r}_t &= \phi e^{\phi t}(r_t - \bar{r}) dt + e^{\phi t} dr_t \\
&= \phi \tilde{r}_t dt + e^{\phi t} [\phi(\bar{r} - r_t) dt + \sigma_r dz_t] \\
&= \sigma_r e^{\phi t} dz_t
\end{aligned}
$$

对上述等式在 $[t, s]$ 上积分：

$$
\begin{aligned}
\tilde{r}_s - \tilde{r}_t &= \sigma_r \int_t^s e^{\phi u} dz_u \\
e^{\phi s}(r_s - \bar{r}) - e^{\phi t}(r_t - \bar{r}) &= \sigma_r \int_t^s e^{\phi u} dz_u \\
r_s - \bar{r} &= e^{-\phi(s-t)}(r_t - \bar{r}) + \sigma_r \int_t^s e^{-\phi(s-u)} dz_u
\end{aligned}
$$

**路径积分 $\int_t^T r_s ds$ 的计算**

$$
\begin{aligned}
\int_t^T r_s ds &= \int_t^T \left[ \bar{r} + e^{-\phi(s-t)}(r_t - \bar{r}) + \sigma_r \int_t^s e^{-\phi(s-u)} dz_u \right] ds \\
&= \bar{r}N + (r_t - \bar{r}) \left( \frac{1 - e^{-\phi N}}{\phi} \right) + \sigma_r \int_t^T \left( \int_u^T e^{-\phi(s-u)} ds \right) dz_u \quad (\text{Fubini}) \\
&= \bar{r}N + (r_t - \bar{r}) B(N) + \sigma_r \int_t^T B(T-u) dz_u
\end{aligned}
$$

其中我们临时定义 $B(N) = \frac{1-e^{-\phi N}}{\phi}$。

**对数正态期望性质**
令 $X = -\int_t^T r_s ds - \sigma_\Lambda \int_t^T dz_s - \frac{1}{2}\sigma_\Lambda^2 N$ 。由于 $X$ 是 $dz$ 的线性组合，其服从正态分布。则：
$$P_t = E_t[e^X] = \exp \left( E_t[X] + \frac{1}{2} Var_t(X) \right)$$

**均值 $E_t[X]$ 的计算**

$$
\begin{aligned}
E_t[X] &= -E_t \left[ \int_t^T r_s ds \right] - \sigma_\Lambda E_t \left[ \int_t^T dz_u \right] - \frac{1}{2} \sigma_\Lambda^2 N \\
&= - \left[ \bar{r}N + (r_t - \bar{r})B(N) \right] - 0 - \frac{1}{2} \sigma_\Lambda^2 N
\end{aligned}
$$

**方差 $Var_t(X)$**
随机部分为 $-\int_t^T [\sigma_r B(T-u) + \sigma_\Lambda] dz_u$。应用等距性质并令 $v = T-u$：

$$
\begin{aligned}
Var_t(X) &= \int_t^T \left[ \sigma_r \frac{1 - e^{-\phi(T-u)}}{\phi} + \sigma_\Lambda \right]^2 du = \int_0^N \left[ \left(\frac{\sigma_r}{\phi} + \sigma_\Lambda\right) - \frac{\sigma_r}{\phi} e^{-\phi v} \right]^2 dv \\
&= \int_0^N \left[ \left(\frac{\sigma_r}{\phi} + \sigma_\Lambda\right)^2 - 2\left(\frac{\sigma_r}{\phi} + \sigma_\Lambda\right)\frac{\sigma_r}{\phi}e^{-\phi v} + \frac{\sigma_r^2}{\phi^2}e^{-2\phi v} \right] dv \\
&= \left(\frac{\sigma_r}{\phi} + \sigma_\Lambda\right)^2 N - 2\left(\frac{\sigma_r}{\phi} + \sigma_\Lambda\right)\frac{\sigma_r}{\phi^2}(1 - e^{-\phi N}) + \frac{\sigma_r^2}{2\phi^3}(1 - e^{-2\phi N}) \quad (22)
\end{aligned}
$$

**最终合并 (The Assembly)**
代入 $\ln P_t = E_t[X] + \frac{1}{2}Var_t(X)$，并利用 $1-e^{-2\phi N} = \phi B(N)(2-\phi B(N))$：

$$
\begin{aligned}
\ln P_t &= -B(N)r_t + \bar{r}B(N) - \bar{r}N - \frac{1}{2}\sigma_\Lambda^2 N \\
&\quad + \frac{1}{2} \left[ \frac{\sigma_r^2}{\phi^2} + \frac{2\sigma_r\sigma_\Lambda}{\phi} + \sigma_\Lambda^2 \right] N - \left( \frac{\sigma_r^2}{\phi^2} + \frac{\sigma_r\sigma_\Lambda}{\phi} \right) B(N) + \frac{\sigma_r^2}{4\phi^2} (2B(N) - \phi B(N)^2) \\
&= -B(N)r_t + \left[ -\bar{r} + \frac{\sigma_r\sigma_\Lambda}{\phi} + \frac{\sigma_r^2}{2\phi^2} \right] N + \left[ \bar{r} - \frac{\sigma_r\sigma_\Lambda}{\phi} - \frac{\sigma_r^2}{\phi^2} + \frac{\sigma_r^2}{2\phi^2} \right] B(N) - \frac{\sigma_r^2}{4\phi} B(N)^2 \\
&= -B(N)r_t + \left[ \frac{\sigma_r^2}{2\phi^2} + \frac{\sigma_r\sigma_\Lambda}{\phi} - \bar{r} \right] (N - B(N)) - \frac{\sigma_r^2}{4\phi} B(N)^2
\end{aligned}
$$

#### 9.4.2 解析解：PDE 方法 (via PDE)

#### 推导核对：Vasicek 仿射解的 Riccati 方程

:::{admonition} Lemma: Vasicek Affine Bond Price
若

$$
dr_t=\phi(\bar r-r_t)dt+\sigma_r dW_t,
\qquad
\frac{d\Lambda_t}{\Lambda_t}=-r_tdt-\sigma_\Lambda dW_t,
$$

且 $P(t,T)=\exp(A(N)-B(N)r_t)$、$N=T-t$，则

$$
B'(N)=1-\phi B(N),
\qquad
A'(N)=-\bar r\phi B(N)+\frac12\sigma_r^2B(N)^2+\sigma_r\sigma_\Lambda B(N).
$$

:::

**WTS：** 将指数仿射猜测代入零息债券 PDE，按 $r$ 的常数项与一次项配平。

**联立系统：** 在 $N=T-t$ 记号下，

$$
\begin{aligned}
P_N&=(A'-B'r)P,\\
P_r&=-BP,\\
P_{rr}&=B^2P.
\end{aligned}
$$

零息债券 PDE 等价于

$$
\begin{aligned}
P_N
=\phi(\bar r-r)P_r+\frac12\sigma_r^2P_{rr}-rP-\sigma_\Lambda\sigma_rP_r.
\end{aligned}
$$

**连续求解：** 代入各项并除以 $P$：

$$
\begin{aligned}
A'-B'r
&=\phi(\bar r-r)(-B)+\frac12\sigma_r^2B^2-r-\sigma_\Lambda\sigma_r(-B)\\
&=-\phi\bar r B+\phi Br+\frac12\sigma_r^2B^2-r+\sigma_\Lambda\sigma_rB.
\end{aligned}
$$

按 $r$ 的系数配平：

$$
\left\{
\begin{aligned}
-B'&=\phi B-1,\\
A'&=-\phi\bar rB+\frac12\sigma_r^2B^2+\sigma_\Lambda\sigma_rB.
\end{aligned}
\right.
$$

因此

$$
\begin{aligned}
B'&=1-\phi B,
\qquad B(0)=0,\\
B(N)&=\frac{1-e^{-\phi N}}{\phi}.
\end{aligned}
$$

**结论：** Vasicek 的封闭解核心是 $B$ 的线性 ODE；$A$ 只是在 $B$ 已知后积分得到。


假设债券价格具有如下指数仿射形式：
$$P(r, N) = \exp(A(N) - B(N)r)$$
其中 $N = T - t$ 为剩余期限。

**偏导数代入基本 PDE**
基本 PDE 为：
$$\frac{1}{P} \left[ \frac{\partial P}{\partial r} \mu_r + \frac{1}{2} \frac{\partial^2 P}{\partial r^2} \sigma_r^2 - \frac{\partial P}{\partial N} \right] - r = \frac{1}{P} \frac{\partial P}{\partial r} \sigma_r \sigma_\Lambda$$
计算偏导数：
*   $\frac{\partial P}{\partial r} = -B(N) P$
*   $\frac{\partial^2 P}{\partial r^2} = B(N)^2 P$
*   $\frac{\partial P}{\partial N} = (A'(N) - B'(N)r) P$

代入 PDE 并约去 $P$：
$$\left[ -B \phi(\bar{r}-r) + \frac{1}{2} B^2 \sigma_r^2 - (A' - B'r) \right] - r = -B \sigma_r \sigma_\Lambda$$
展开并按照利率 $r$ 的幂次排列：
$$r \underbrace{(B' + \phi B - 1)}_{\text{Term for } r} + \underbrace{\left[ -\phi\bar{r}B + \frac{1}{2}B^2\sigma_r^2 - A' + B\sigma_r\sigma_\Lambda \right]}_{\text{Constant Term}} = 0$$

**求解 $B(N)$ (一阶线性 ODE)**
由于上述恒等式对任意 $r$ 均成立，系数项必须为 0：
$$B'(N) + \phi B(N) = 1, \quad B(0) = 0$$
引入积分因子 $e^{\phi N}$：

$$
\begin{aligned}
e^{\phi N} B'(N) + \phi e^{\phi N} B(N) &= e^{\phi N} \\
\frac{d}{ds} (e^{\phi s} B(s)) &= e^{\phi s} \\
\int_0^N \frac{d}{ds} (e^{\phi s} B(s)) ds &= \int_0^N e^{\phi s} ds \\
e^{\phi N} B(N) - 0 &= \frac{e^{\phi N} - 1}{\phi} \\
B(N) &= \frac{1 - e^{-\phi N}}{\phi}
\end{aligned}
$$

**求解 $A(N)$ (直接积分)**
根据常数项方程：
$$A'(N) = -\phi\bar{r}B(N) + \frac{1}{2}\sigma_r^2 B(N)^2 + \sigma_r\sigma_\Lambda B(N), \quad A(0) = 0$$
两边对 $N$ 进行积分：
$$A(N) = \int_0^N \left[ (-\phi\bar{r} + \sigma_r\sigma_\Lambda) B(s) + \frac{1}{2}\sigma_r^2 B(s)^2 \right] ds$$

**积分 $\int_0^N B(s)\,ds$**
$$\int_0^N \frac{1 - e^{-\phi s}}{\phi} ds = \frac{1}{\phi} \left[ s + \frac{1}{\phi} e^{-\phi s} \right]_0^N = \frac{1}{\phi} \left( N - \frac{1 - e^{-\phi N}}{\phi} \right) = \frac{1}{\phi}(N - B(N))$$

**积分 $\int_0^N B(s)^2\,ds$**
展开 $B(s)^2 = \frac{1}{\phi^2}(1 - 2e^{-\phi s} + e^{-2\phi s})$：

$$
\begin{aligned}
\int_0^N B(s)^2 ds &= \frac{1}{\phi^2} \int_0^N (1 - 2e^{-\phi s} + e^{-2\phi s}) ds \\
&= \frac{1}{\phi^2} \left[ N - \frac{2}{\phi}(1 - e^{-\phi N}) + \frac{1}{2\phi}(1 - e^{-2\phi N}) \right] \\
&= \frac{1}{\phi^2} \left[ N - 2B(N) + \frac{1}{2} B(N)(2 - \phi B(N)) \right] \quad (\text{using } 1-e^{-2\phi N} = \phi B(2-\phi B)) \\
&= \frac{1}{\phi^2} (N - B(N)) - \frac{1}{2\phi} B(N)^2
\end{aligned}
$$

**汇总得到 $A(N)$**

$$
\begin{aligned}
A(N) &= (-\bar{r} + \frac{\sigma_r\sigma_\Lambda}{\phi})(N - B(N)) + \frac{\sigma_r^2}{2} \left[ \frac{1}{\phi^2}(N-B(N)) - \frac{1}{2\phi}B(N)^2 \right] \\
&= -\frac{\sigma_r^2}{4\phi} B(N)^2 + \left[ \frac{\sigma_r^2}{2\phi^2} + \frac{\sigma_r\sigma_\Lambda}{\phi} - \bar{r} \right] (N - B(N))
\end{aligned}
$$

至此，PDE 方法的解析解推导完毕。

#### 9.4.3 Vasicek model: Summarization

Given $P_t^{(N)} = e^{A(N)-B(N)r_t},$
$$p_t^{(N)} = A(N) - B(N)r_t,$$
$$y_t^{(N)} = -\frac{1}{N}p_t^{(N)} = -\frac{A(N)}{N} + \frac{B(N)}{N}r,$$
where
$$B(N) = \frac{1 - e^{-\phi N}}{\phi}$$
$$A(N) = -\frac{\sigma_r^2}{4\phi}B(N)^2 + \left(\frac{\sigma_r^2}{2\phi^2} + \frac{\sigma_r\sigma_\Lambda}{\phi} - \bar{r}\right)(N - B(N)) $$

**极限情况: $\phi \to \infty$**
当 $\phi \to \infty$ 时，意味着均值回归速度无穷快，利率始终保持在 $\bar{r}$：
- $B(N) \to 0$
- $A(N) \to -\bar{r}N$
- $y_t^{(N)} \to \bar{r}$
此时债券价格退化为 $P_t^{(N)} = e^{-\bar{r}N}$，反映了常数利率环境。

### 9.5 CIR 模型 (平方根波动率模型)

#### 推导核对：CIR 中 Riccati 方程的来源

:::{admonition} Lemma: CIR Riccati System
在

$$
dr_t=\phi(\bar r-r_t)dt+\sigma_r\sqrt{r_t}dW_t,
\qquad
\frac{d\Lambda_t}{\Lambda_t}=-r_tdt-\sigma_\Lambda\sqrt{r_t}dW_t
$$

下，若 $P(N,r)=e^{A(N)-B(N)r}$，则

$$
B'=1-(\phi+\sigma_r\sigma_\Lambda)B-\frac12\sigma_r^2B^2,
\qquad
A'=-\phi\bar r B.
$$

:::

**WTS：** 解释为什么 CIR 的 $B$ 方程多出 $B^2$ 项。

**联立系统：**

$$
\begin{aligned}
P_N&=(A'-B'r)P,\\
P_r&=-BP,\\
P_{rr}&=B^2P,\\
\sigma_r(r)&=\sigma_r\sqrt r,\\
\lambda_r(r)&=\sigma_\Lambda\sqrt r.
\end{aligned}
$$

**连续求解：** 零息债券 PDE 为

$$
\begin{aligned}
P_N
&=\phi(\bar r-r)P_r+\frac12\sigma_r^2rP_{rr}-rP-\sigma_\Lambda\sigma_rrP_r.
\end{aligned}
$$

代入仿射猜测并除以 $P$：

$$
\begin{aligned}
A'-B'r
&=\phi(\bar r-r)(-B)+\frac12\sigma_r^2rB^2-r-\sigma_\Lambda\sigma_rr(-B)\\
&=-\phi\bar rB+\phi Br+\frac12\sigma_r^2B^2r-r+\sigma_\Lambda\sigma_rBr.
\end{aligned}
$$

按常数项和 $r$ 项配平：

$$
\left\{
$$

$$
\begin{aligned}
A'&=-\phi\bar rB,\\
-B'&=\phi B+\frac12\sigma_r^2B^2-1+\sigma_\Lambda\sigma_rB.
\end{aligned}
$$

\right.

即

$$
\begin{aligned}
B'&=1-(\phi+\sigma_r\sigma_\Lambda)B-\frac12\sigma_r^2B^2.
\end{aligned}
$$

**结论：** Vasicek 与 CIR 的区别不在仿射猜测，而在扩散项：CIR 的 $(dr)^2=\sigma_r^2r dt$ 使二阶项贡献 $rB^2$，所以 $B$ 满足非线性 Riccati 方程。


:::{admonition} Riccati Equation
在仿射利率模型（如 CIR 模型）中，由于 $\sigma_r^2 \propto r$，在求解 $B(N)$ 时会出现 $B(N)^2$ 项，形成 $B' = aB^2 + bB + c$ 的非线性 ODE。

:::

**模型动力学 (Dynamics)**
CIR 模型假设瞬时利率 $r_t$ 遵循平方根过程，确保利率非负：

$$
\begin{cases}
\frac{d\Lambda_t}{\Lambda_t} = -r_t dt - \sigma_\Lambda \sqrt{r_t} dz_t \\
dr_t = \phi(\bar{r} - r_t) dt + \sigma_r \sqrt{r_t} dz_t
\end{cases}
$$

**核心 PDE 的详细推导 (Fundamental PDE Derivation)**

在无套利框架下，任何零息票债券的价格 $P(r_t, N)$ 经过随机贴现因子 (SDF) $\Lambda_t$ 贴现后的过程 $\Lambda_t P_t$ 必须是一个**鞅**。这意味着其漂移项 (Drift) 必须为 0。

**对 $P(r, N)$ 应用伊藤引理 (Ito's Lemma)**
考虑到 $N = T-t \implies dN = -dt$，价格 $P$ 的全微分漂移项为：

$$
\begin{aligned}
dP_t &= -\frac{\partial P}{\partial N} dt + \frac{\partial P}{\partial r} dr_t + \frac{1}{2} \frac{\partial^2 P}{\partial r^2} (dr_t)^2 + \dots \\
\text{Drift}(dP_t) &= -\frac{\partial P}{\partial N} + \phi(\bar{r}-r_t) \frac{\partial P}{\partial r} + \frac{1}{2} \sigma_r^2 r_t \frac{\partial^2 P}{\partial r^2}
\end{aligned}
$$

**鞅条件与风险溢价**
由 $E_t[d(\Lambda_t P_t)] = 0$ 得：

$$
\begin{aligned}
\text{Drift}(\Lambda_t dP_t + P_t d\Lambda_t + d\Lambda_t dP_t) &= 0 \\
-\frac{\partial P}{\partial N} + \phi(\bar{r}-r) \frac{\partial P}{\partial r} + \frac{1}{2} \sigma_r^2 r \frac{\partial^2 P}{\partial r^2} - rP - \sigma_\Lambda \sigma_r r \frac{\partial P}{\partial r} &= 0
\end{aligned}
$$

整理得到关于 $N$ 的偏微分方程：

$$
\begin{aligned}
\frac{\partial P}{\partial N} &= \phi \bar{r} \frac{\partial P}{\partial r} - (\phi + \sigma_\Lambda \sigma_r) r \frac{\partial P}{\partial r} + \frac{1}{2} \sigma_r^2 r \frac{\partial^2 P}{\partial r^2} - rP
\end{aligned}
$$

**仿射解构造 (Affine Structure Solution)**

假设 $P(r, N) = \exp(A(N) - B(N)r)$，代入 PDE 并分离 $r$ 的幂次：

$$
\begin{aligned}
A' - B'r &= \phi \bar{r} (-B) - (\phi + \sigma_\Lambda \sigma_r) r (-B) + \frac{1}{2} \sigma_r^2 r B^2 - r \\
0 &= r \left[ B' + (\phi + \sigma_\Lambda \sigma_r) B + \frac{1}{2} \sigma_r^2 B^2 - 1 \right] + \left[ -A' - \phi \bar{r} B \right]
\end{aligned}
$$

**整理 Riccati 方程**

先看为什么边界条件是 $B(0)=0$。因为到期时剩余期限为 $N=0$ 的 zero-coupon bond 一定支付 1，所以

$$
\begin{aligned}
P(r,0)=1.
\end{aligned}
$$

而仿射猜测是

$$
\begin{aligned}
P(r,N)=e^{A(N)-B(N)r}.
\end{aligned}
$$

代入 $N=0$ 得

$$
\begin{aligned}
1
&=P(r,0)
=e^{A(0)-B(0)r}.
\end{aligned}
$$

这对任意 $r$ 都要成立，因此必须有

$$
\begin{aligned}
A(0)=0,\qquad B(0)=0.
\end{aligned}
$$

令 $h = \phi + \sigma_\Lambda \sigma_r$，方程变为：

$$
\begin{aligned}
B'(N) &= 1 - h B(N) - \frac{1}{2} \sigma_r^2 B(N)^2, \quad B(0) = 0
\end{aligned}
$$

**线性化变换 (Linearization Transformation)**
为什么选

$$
\begin{aligned}
B(N)=\frac{2w'(N)}{\sigma_r^2w(N)}
\end{aligned}
$$

这个变换？关键是 Riccati 方程里的非线性来自

$$
\begin{aligned}
B'(N)=1-hB(N)-\frac{1}{2}\sigma_r^2B(N)^2.
\end{aligned}
$$

如果先一般地令

$$
\begin{aligned}
B(N)=c\,\frac{w'(N)}{w(N)},
\end{aligned}
$$

那么

$$
\begin{aligned}
B'(N)
&=c\left(\frac{w''}{w}-\frac{(w')^2}{w^2}\right),\\
B(N)^2
&=c^2\frac{(w')^2}{w^2}.
\end{aligned}
$$

于是

$$
\begin{aligned}
B'(N)+\frac{1}{2}\sigma_r^2B(N)^2
=c\frac{w''}{w}
\left(-c+\frac{1}{2}\sigma_r^2c^2\right)\frac{(w')^2}{w^2}.
\end{aligned}
$$

为了把平方项 $\frac{(w')^2}{w^2}$ 消掉，我们要选 $c$ 使

$$
\begin{aligned}
-c+\frac{1}{2}\sigma_r^2c^2=0
\Longrightarrow
c=\frac{2}{\sigma_r^2}.
\end{aligned}
$$

所以最自然的选择就是

$$
\begin{aligned}
B(N)=\frac{2w'(N)}{\sigma_r^2w(N)}.
\end{aligned}
$$

这样 Riccati 方程就会变成关于 $w$ 的二阶线性 ODE。下面就是这个消项过程：

1. **对 $B(N)$ 求导：**
通过商法则计算其导数：

$$
\begin{aligned}
B'(N) &= \frac{d}{dN} \left( \frac{2 w'}{\sigma_r^2 w} \right) = \frac{2}{\sigma_r^2} \frac{w'' w - (w')^2}{w^2} \\
&= \frac{2 w''}{\sigma_r^2 w} - \frac{2 (w')^2}{\sigma_r^2 w^2}
\end{aligned}
$$

2. **观察平方项 $\frac{1}{2}\sigma_r^2 B^2$：**

$$
\begin{aligned}
\frac{1}{2}\sigma_r^2 B^2 &= \frac{1}{2}\sigma_r^2 \left( \frac{2 w'}{\sigma_r^2 w} \right)^2 = \frac{2 (w')^2}{\sigma_r^2 w^2}
\end{aligned}
$$

3. **代入并消去非线性项：**
将上述结果代入 $B' = 1 - h B - \frac{1}{2} \sigma_r^2 B^2$：

$$
\begin{aligned}
\underbrace{\frac{2 w''}{\sigma_r^2 w} - \frac{2 (w')^2}{\sigma_r^2 w^2}}_{B'} &= 1 - h \left( \frac{2 w'}{\sigma_r^2 w} \right) - \underbrace{\frac{2 (w')^2}{\sigma_r^2 w^2}}_{\frac{1}{2}\sigma_r^2 B^2} \\
\frac{2 w''}{\sigma_r^2 w} &= 1 - \frac{2 h w'}{\sigma_r^2 w}
\end{aligned}
$$

可以看到，等号两边的平方项项 $(w')^2$ 被精准消去。

4. **得到线性 ODE：**
整理上式（两边同乘 $\frac{\sigma_r^2 w}{2}$）：

$$
\begin{aligned}
w''(N) + h w'(N) - \frac{\sigma_r^2}{2} w(N) &= 0, \quad w'(0) = 0
\end{aligned}
$$

**求解线性 ODE (ODE Solution Process)**
特征方程为 $k^2 + h k - \frac{\sigma_r^2}{2} = 0$。根据求根公式，两个特征根为：

$$
\begin{aligned}
k_{1,2} &= \frac{-h \pm \sqrt{h^2 + 2\sigma_r^2}}{2}
\end{aligned}
$$

定义参数 $\gamma = \sqrt{h^2 + 2\sigma_r^2}$，则 $k_1 = \frac{\gamma - h}{2}$，$k_2 = -\frac{\gamma + h}{2}$。
通解为：

$$
\begin{aligned}
w(N) &= c_1 e^{k_1 N} + c_2 e^{k_2 N} \\
w'(N) &= c_1 k_1 e^{k_1 N} + c_2 k_2 e^{k_2 N}
\end{aligned}
$$

利用边界条件 $w'(0) = 0$：

$$
\begin{aligned}
c_1 k_1 + c_2 k_2 &= 0 \implies c_2 = -c_1 \frac{k_1}{k_2} \\
c_2 &= -c_1 \frac{(\gamma - h)/2}{-(\gamma + h)/2} = c_1 \frac{\gamma - h}{\gamma + h}
\end{aligned}
$$

定义参数 $\psi = h + \gamma = \phi + \sigma_r \sigma_\Lambda + \gamma$。

**回代求取 $B(N)$ 解析解**
将 $w(N)$ 形式代入 $B(N) = \frac{2 w'(N)}{\sigma_r^2 w(N)}$：

$$
\begin{aligned}
B(N) &= \frac{2 c_1 k_1 (e^{k_1 N} - e^{k_2 N})}{\sigma_r^2 c_1 (e^{k_1 N} + \frac{\gamma-h}{\gamma+h} e^{k_2 N})} \\
&= \frac{2 k_1 (\gamma+h) (e^{\gamma N} - 1)}{\sigma_r^2 [ (\gamma+h) e^{\gamma N} + (\gamma-h) ]} \quad (\text{分子分母同乘 } (\gamma+h)e^{-k_2 N})
\end{aligned}
$$

由于 $2k_1(\gamma+h) = (\gamma-h)(\gamma+h) = \gamma^2 - h^2 = 2\sigma_r^2$，分子分母约去 $\sigma_r^2$：

$$
\begin{aligned}
B(N) &= \frac{2\sigma_r^2 (e^{\gamma N} - 1)}{\sigma_r^2 [ (\gamma+h) e^{\gamma N} + (\gamma-h) ]} \\
&= \frac{2(e^{\gamma N} - 1)}{(\gamma+h)(e^{\gamma N}-1) + 2\gamma} \\
&= \frac{2(e^{\gamma N} - 1)}{\psi(e^{\gamma N} - 1) + 2\gamma}
\end{aligned}
$$

**求解 $A(N)$ 解析解**
根据 $A'(N) = -\phi \bar{r} B(N) = -\phi \bar{r} \frac{2 w'}{\sigma_r^2 w}$，且 $A(0)=0$：

$$
\begin{aligned}
A(N) &= -\frac{2\phi \bar{r}}{\sigma_r^2} \ln \left[ \frac{w(N)}{w(0)} \right] \\
\text{其中 } \frac{w(N)}{w(0)} &= \frac{e^{k_1 N} + \frac{\gamma-h}{\gamma+h} e^{k_2 N}}{1 + \frac{\gamma-h}{\gamma+h}} = \frac{(\gamma+h)e^{k_1 N} + (\gamma-h)e^{k_2 N}}{2\gamma} \\
&= \frac{[(\gamma+h)(e^{\gamma N}-1) + 2\gamma] e^{k_2 N}}{2\gamma} = \frac{\psi(e^{\gamma N}-1) + 2\gamma}{2\gamma e^{(\gamma+h) N / 2}}
\end{aligned}
$$

代入并利用 $\psi = \gamma+h$ 得到最终形式：

$$
\begin{aligned}
A(N) &= \frac{2\phi \bar{r}}{\sigma_r^2} \ln \left[ \frac{2\gamma e^{\psi N/2}}{\psi(e^{\gamma N} - 1) + 2\gamma} \right]
\end{aligned}
$$

**CIR model: Summarization**
The closed-form solutions are:
$$B(N) = \frac{2\left(e^{\gamma N} - 1\right)}{\left(\gamma + \phi + \sigma_r\sigma_\Lambda\right)\left(e^{\gamma N} - 1\right) + 2\gamma},$$
$$A(N) = \frac{\phi\bar{r}}{\sigma_r^2} \left[ 2\ln\left( \frac{2\gamma}{\psi\left(e^{\gamma N} - 1\right) + 2\gamma} \right) + \psi N \right],$$
where

$$
\begin{cases} \gamma = \sqrt{(\phi + \sigma_r\sigma_\Lambda)^2 + 2\sigma_r^2} \\ \psi = \phi + \sigma_r\sigma_\Lambda + \gamma. \end{cases}
$$

## 10. LT96 与 L94 推导
