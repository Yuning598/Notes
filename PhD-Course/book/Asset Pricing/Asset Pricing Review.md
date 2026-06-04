---
orphan: true
---

# Overview

## 0. 总览
### 0.1 总逻辑图

$$
\left\{
\begin{aligned}
\text{Individual optimization}
&\Longrightarrow
u'(c)\text{ or }V_w
\Longrightarrow m,\xi,\Lambda
&&\text{(SDF / SPD)},\\
\text{No arbitrage}
&\Longrightarrow
P=E[mX]
\Longleftrightarrow
\frac{P_t}{B_t}\text{ is }Q\text{-martingale}
&&\text{(pricing)},\\
\text{Mean-variance}
&\Longrightarrow
m=a+b'R
\Longleftrightarrow
\text{factor pricing / CAPM / MV efficiency}
&&\text{(linear SDF)},\\
\text{Complete markets}
&\Longrightarrow
\text{unique SDF / unique EMM}
\Longrightarrow
\text{replication}
&&\text{(derivatives)},\\
\text{Information frictions}
&\Longrightarrow
E[v\mid y],\ \text{filtering},\ \text{belief heterogeneity}
\Longrightarrow
\text{price discovery and liquidity}.
\end{aligned}
\right.
$$

### 0.2 解题入口索引：先定位题型

$$
\left\{
\begin{aligned}
\text{Optimization}
&\Longrightarrow
\text{objective}
\Longrightarrow
\text{FOC}
\Longrightarrow
\text{pricing kernel / policy},\\
\text{Change of measure}
&\Longrightarrow
\text{density process}
\Longrightarrow
P\text{-drift}
\mapsto
Q\text{-drift},\\
\text{Differential equations}
&\Longrightarrow
\text{SDE}
\Longrightarrow
\text{PDE / ODE}
\Longrightarrow
\text{boundary conditions},\\
\text{No arbitrage}
&\Longrightarrow
\text{SDF / SPD / EMM}
\Longrightarrow
\text{martingale pricing},\\
\text{Information}
&\Longrightarrow
\text{Bayesian updating / filtering}
\Longrightarrow
\text{price discovery},\\
\text{Equilibrium}
&\Longrightarrow
\text{market clearing}
\Longrightarrow
\text{prices and allocations}.
\end{aligned}
\right.
$$

#### 0.2.1 Optimization + FOC 类题

$$
\left\{
\begin{aligned}
\text{Choose control}
&:\quad c,\theta,\pi,w,x,\\
\text{Write objective}
&:\quad \max E[U],\quad
\max E[u(c)],\quad
\max\{E[R]-\frac{\gamma}{2}\operatorname{Var}(R)\},\\
\text{Take FOC}
&:\quad
\frac{\partial \mathcal L}{\partial control}=0,\\
\text{Solve policy}
&:\quad
control^*=f(\text{prices, beliefs, state variables}).
\end{aligned}
\right.
$$

$$
\begin{aligned}
\text{Consumption FOC}
&\Longrightarrow
m_{t+1}
=\delta\frac{u'(c_{t+1})}{u'(c_t)},\\
\text{Mean-variance FOC}
&\Longrightarrow
w^*
\propto
\Sigma^{-1}(\mu-R_f1),\\
\text{HJB FOC}
&\Longrightarrow
u'(c^*)=V_w,
\qquad
\pi^*=-\frac{V_w}{V_{ww}}\Sigma^{-1}(\mu-r1),\\
\text{Kyle insider FOC}
&\Longrightarrow
x=\frac{v-p_0}{2\lambda}.
\end{aligned}
$$

1. Consumption-saving：

$$
\begin{aligned}
\max_{\{c_t\}}
E\left[\sum_t\delta^tu(c_t)\right]
&\Longrightarrow
u'(c_t) =
\delta R_f E_t[u'(c_{t+1})]\\
&\Longrightarrow
1 =
E_t\left[
\delta\frac{u'(c_{t+1})}{u'(c_t)}R_f
\right].
\end{aligned}
$$

2. Portfolio choice：

$$
\begin{aligned}
\max_{\theta}
E_t[u(W_{t+1})],
\qquad
W_{t+1}=W_t+\theta'(X_{t+1}-P_tR_f)
&\Longrightarrow
E_t[u'(W_{t+1})(X_{t+1}-P_tR_f)]=0\\
&\Longrightarrow
P_t =
E_t\left[
\frac{u'(W_{t+1})}{R_fE_t[u'(W_{t+1})]}
X_{t+1}
\right].
\end{aligned}
$$

3. Mean-variance：

$$
\begin{aligned}
\max_w\left\{
w'(\mu-R_f1)-\frac{\gamma}{2}w'\Sigma w
\right\}
&\Longrightarrow
\mu-R_f1-\gamma\Sigma w=0\\
&\Longrightarrow
w^*=\frac{1}{\gamma}\Sigma^{-1}(\mu-R_f1).
\end{aligned}
$$

4. Dynamic control / HJB：

$$
\begin{aligned}
0&=\max_{\pi,c}
\left\{
u(c)-\rho V+V_t+V_w[rw+\pi'(\mu-r1)-c]
+\frac12V_{ww}\pi'\Sigma\pi
\right\}\\
&\Longrightarrow
u'(c^*)=V_w,
\qquad
\pi^*=-\frac{V_w}{V_{ww}}\Sigma^{-1}(\mu-r1).
\end{aligned}
$$

5. Insider trading：

$$
\begin{aligned}
\max_x\ (v-p(x))x,
\qquad
p(x)=p_0+\lambda x
&\Longrightarrow
v-p_0-2\lambda x=0\\
&\Longrightarrow
x^*=\frac{v-p_0}{2\lambda}.
\end{aligned}
$$

$$
\boxed{
\text{objective}
\Longrightarrow
\text{budget / law of motion}
\Longrightarrow
\text{FOC}
\Longrightarrow
\text{policy}
\Longrightarrow
\text{price implication}.
}
$$

#### 0.2.2 Pricing kernel / no-arbitrage 类题

$$
\begin{aligned}
P_t
&=E_t[m_{t+1}X_{t+1}]
=E_t\left[\frac{\xi_{t+1}}{\xi_t}X_{t+1}\right]
=B_tE_t^Q\left[\frac{X_{t+1}}{B_{t+1}}\right].
\end{aligned}
$$

| 题目关键词                    | 你要写的对象   | 公式                        |
| ------------------------ | -------- | ------------------------- |
| SDF                      | $m$      | $P=E[mX]$                 |
| state price              | $q_s$    | $P=\sum_s q_sX_s$         |
| SPD                      | $\xi_t$  | $S_t=E_t[\xi_TX_T/\xi_t]$ |
| EMM                      | $Q$      | $S_t/B_t=E_t^Q[S_T/B_T]$  |
| risk-neutral probability | $\psi_s$ | $P=R_f^{-1}E^Q[X]$        |

$$
\boxed{
\text{payoff}
\Longrightarrow
\text{choose discount object}
\Longrightarrow
\text{write pricing equation}
\Longrightarrow
\text{normalize if needed}.
}
$$

#### 0.2.3 Change of measure 类题

$$
\left\{
\begin{aligned}
dS_t&=(\mu-q)S_tdt+\sigma S_tdW_t^P,\\
\theta&=\frac{\mu-r}{\sigma},\\
dW_t^Q&=dW_t^P+\theta dt.
\end{aligned}
\right.
$$

代回：

$$
\begin{aligned}
dS_t
&=(\mu-q)S_tdt+\sigma S_t
\left(dW_t^Q-\theta dt\right)\\
&=(\mu-q-\sigma\theta)S_tdt+\sigma S_tdW_t^Q=(r-q)S_tdt+\sigma S_tdW_t^Q.
\end{aligned}
$$

density process：

$$
\begin{aligned}
\Lambda_t
&=\frac{dQ}{dP}\bigg|_{\mathcal F_t} =
\exp\left(
-\int_0^t\theta_s\,dW_s^P
-\frac12\int_0^t\theta_s^2ds
\right),\\
E_t^Q[Y]
&=
E_t^P\left[
\frac{\Lambda_T}{\Lambda_t}Y
\right].
\end{aligned}
$$

$$
\boxed{
P\text{-SDE}
\Longrightarrow
\theta=\text{market price of risk}
\Longrightarrow
dW^Q=dW^P+\theta dt
\Longrightarrow
Q\text{-SDE}
\Longrightarrow
Q\text{-pricing}.
}
$$

#### 0.2.4 PDE / ODE / SDE 求解类题

- SDE：描述 state variable 怎么动。
- PDE：价格或 value function 同时依赖时间和状态。
- ODE：时间齐次、无限期、或者猜 affine / power form 后只剩一个变量。
- Boundary conditions：终端条件、value matching、smooth pasting、absorbing boundary。

$$
\left\{
\begin{aligned}
dX_t&=\mu_X(t,X_t)dt+\sigma_X(t,X_t)dW_t^Q,\\
V(t,x)&=E_t^Q\left[e^{-\int_t^T r_sds}g(X_T)\right],\\
0&=V_t+\mathcal L^QV-rV,
\qquad
V(T,x)=g(x).
\end{aligned}
\right.
$$

$$
\begin{aligned}
\mathcal L^QV
&=
\mu_XV_x+\frac12\sigma_X^2V_{xx}.
\end{aligned}
$$

$$
\begin{aligned}
\text{European option}
&:\quad
V_t+(r-q)SV_S+\frac12\sigma^2S^2V_{SS}-rV=0,\\
\text{American option}
&:\quad
\max\{V_t+\mathcal L^QV-rV,\ h-V\}=0,\\
\text{Zero-coupon bond}
&:\quad
P_t+\mu_rP_r+\frac12\sigma_r^2P_{rr}-rP=0,\\
\text{Optimal stopping}
&:\quad
\frac12\sigma^2x^2V''+\mu xV'-\beta V=0.
\end{aligned}
$$

$$
\boxed{
\text{state SDE}
\Longrightarrow
\text{generator}
\Longrightarrow
\text{PDE / ODE}
\Longrightarrow
\text{boundary conditions}
\Longrightarrow
\text{solve or characterize}.
}
$$

##### （1）常见随机过程

$$
\left\{
\begin{aligned}
\text{Stock price}
&:\quad
dS_t=\mu_tS_tdt+\sigma_tS_tdW_t,\\
\text{Money market account}
&:\quad
dB_t=r_tB_tdt,\\
\text{Discount factor}
&:\quad
\frac{B_t}{B_T}
=\exp\left(-\int_t^T r_sds\right).
\end{aligned}
\right.
$$

$$
\begin{aligned}
\left\{
\begin{aligned}
r_t=r
&\implies
B_t=B_0e^{rt},
\qquad
S_t=S_0\exp\left[\left(\mu-\frac12\sigma^2\right)t+\sigma W_t\right],\\
r_t\text{ stochastic}
&\implies
B_t=B_0\exp\left(\int_0^t r_sds\right),
\qquad
S_t=S_0\exp\left[
\int_0^t\left(\mu_s-\frac12\sigma_s^2\right)ds+\int_0^t\sigma_sdW_s
\right].
\end{aligned}
\right.
\end{aligned}
$$

Mean-reverting / OU：

$$
\left\{
\begin{aligned}
dX_t&=\kappa(\theta-X_t)dt+\sigma dW_t,\\
dX_t&=(a-bX_t)dt+\sigma dW_t,
\qquad b=\kappa,\quad a=\kappa\theta,\\
\kappa&>0.
\end{aligned}
\right.
$$

显式解：

$$
\begin{aligned}
d(e^{\kappa t}X_t)
&=
\kappa\theta e^{\kappa t}dt
+\sigma e^{\kappa t}dW_t\\
\Longrightarrow\quad
X_t
&=
\theta+(X_0-\theta)e^{-\kappa t}
+\sigma\int_0^t e^{-\kappa(t-s)}dW_s.
\end{aligned}
$$

条件分布：

$$
\boxed{
X_T\mid \mathcal F_t
\sim
N\left(
\theta+(X_t-\theta)e^{-\kappa(T-t)},
\frac{\sigma^2}{2\kappa}\left(1-e^{-2\kappa(T-t)}\right)
\right).
}
$$

老师常用简化：

$$
\begin{aligned}
\kappa=1,\quad \theta=0
\quad
(\text{equiv. }a=0,\ b=1)
\quad\Longrightarrow\quad
dX_t=-X_tdt+\sigma dW_t,
\end{aligned}
$$

所以

$$
\begin{aligned}
X_T
&=
X_te^{-(T-t)}
+\sigma\int_t^T e^{-(T-s)}dW_s,\\
E_t[X_T]&=X_te^{-(T-t)},\\
\operatorname{Var}_t(X_T)
&=
\frac{\sigma^2}{2}
\left(1-e^{-2(T-t)}\right).
\end{aligned}
$$

Vasicek short rate：

$$
\left\{
\begin{aligned}
dr_t&=\kappa(\theta-r_t)dt+\sigma dW_t^Q,\\
P(t,T)&=E_t^Q\left[e^{-\int_t^T r_sds}\right]
=A(t,T)e^{-B(t,T)r_t}.
\end{aligned}
\right.
$$

Coefficient ODE：

$$
\left\{
\begin{aligned}
B_t(t,T)&=\kappa B(t,T)-1,
\qquad B(T,T)=0,\\
\frac{A_t(t,T)}{A(t,T)}
&=
\kappa\theta B(t,T)-\frac12\sigma^2B(t,T)^2,
\qquad A(T,T)=1.
\end{aligned}
\right.
$$

其中

$$
\boxed{
B(t,T)=\frac{1-e^{-\kappa(T-t)}}{\kappa}.
}
$$

#### 0.2.5 Projection / linear algebra 类题

$$
\left\{
\begin{aligned}
\min_w\quad &w'\Sigma w,\\
\text{s.t.}\quad &w'\mu=\mu_p,\qquad 1'w=1
\end{aligned}
\right.
\Longrightarrow
w=\frac12\Sigma^{-1}(\lambda\mu+\gamma1).
$$

线性定价：

$$
\begin{aligned}
m=a-b'f
&\Longrightarrow
1=E[mR_i]\\
&\Longrightarrow
E[R_i]-R_f
=\frac{b'}{E[m]}\operatorname{Cov}(f,R_i)\\
&\Longrightarrow
E[R_i]-R_f=\beta_i'\lambda_f.
\end{aligned}
$$

$$
\boxed{
\text{quadratic objective / linear SDF}
\Longrightarrow
\text{linear FOC}
\Longrightarrow
\Sigma^{-1}\text{ projection}
\Longrightarrow
\beta\text{ pricing}.
}
$$

#### 0.2.6 Bayesian updating / information 类题
静态更新：

$$
\left\{
\begin{aligned}
v&\sim N(m_0,\rho_0^{-1}),\\
s_i&=v+\varepsilon_i,\qquad \varepsilon_i\sim N(0,\rho_i^{-1})
\end{aligned}
\right.
\Longrightarrow
\left\{
\begin{aligned}
\rho^{post}
&=\rho_0+\sum_i\rho_i,\\
E[v\mid s_1,\dots,s_n]
&=
\frac{\rho_0m_0+\sum_i\rho_is_i}
{\rho_0+\sum_i\rho_i}.
\end{aligned}
\right.
$$

Kyle pricing：

$$
\begin{aligned}
y&=x+u,\\
p&=E[v\mid y]
=E[v]+\frac{\operatorname{Cov}(v,y)}{\operatorname{Var}(y)}(y-E[y]).
\end{aligned}
$$

$$
\boxed{
\text{prior}
\Longrightarrow
\text{signal / order flow}
\Longrightarrow
\text{conditional expectation}
\Longrightarrow
\text{price}
\Longrightarrow
\text{trading strategy equilibrium}.
}
$$

#### 0.2.7 Equilibrium / market clearing 类题

$$
\left\{
\begin{aligned}
\text{Individual FOC}
&:\quad
\delta_i^t u_i'(c_{i,t})=\lambda_i\xi_t,\\
\text{Feasibility}
&:\quad
\sum_i c_{i,t}=e_t,\\
\text{Market clearing}
&:\quad
\sum_i\theta_{i,t}=\bar\theta.
\end{aligned}
\right.
$$

$$
\boxed{
\text{agents' problems}
\Longrightarrow
\text{FOCs}
\Longrightarrow
\text{aggregate constraints}
\Longrightarrow
\text{solve allocations}
\Longrightarrow
\text{recover prices / SPD}.
}
$$

#### 0.2.8 容易遗漏但常考的操作
1. Normalization：SDF、state price、risk-neutral probability 之间经常只差一个归一化常数。

$$
\begin{aligned}
q_s&=\pi_sm_s,\qquad
\psi_s=\frac{q_s}{\sum_jq_j},\qquad
R_f=\frac{1}{E[m]}.
\end{aligned}
$$

2. Discounting：risk-neutral pricing 不是只换概率，还要用 money market account 折现。

$$
\begin{aligned}
S_t
&=B_tE_t^Q\left[\frac{X_T}{B_T}\right].
\end{aligned}
$$

3. Terminal / boundary conditions：微分方程本身不够，必须配边界条件。

$$
\left\{
\begin{aligned}
V(T,S)&=g(S),\\
V(t,S^*)&=h(S^*),\\
V_S(t,S^*)&=h'(S^*).
\end{aligned}
\right.
$$

4. Conditioning：信息题的价格通常不是无条件期望，而是条件期望。

$$
\begin{aligned}
p
&=E[v\mid \mathcal I]
=E[v]+\operatorname{Cov}(v,\mathcal I)\operatorname{Var}(\mathcal I)^{-1}
(\mathcal I-E[\mathcal I]).
\end{aligned}
$$

5. Existence / uniqueness：complete markets 对应 unique SDF / unique EMM；incomplete markets 对应 many SDFs / many EMMs。

$$
\begin{aligned}
\text{complete markets}
&\Longleftrightarrow
\text{unique }m
\Longleftrightarrow
\text{unique }Q,\\
\text{incomplete markets}
&\Longleftrightarrow
\text{many }m
\Longleftrightarrow
\text{many }Q.
\end{aligned}
$$

### 0.3 总公式链

$$
\begin{aligned}
\max E\sum_t\delta^tu(c_t)
&\Longrightarrow
m_{t+1}=\delta\frac{u'(c_{t+1})}{u'(c_t)}\\
&\Longrightarrow
P_t=E_t[m_{t+1}X_{t+1}]
\Longleftrightarrow
1=E_t[m_{t+1}R_{t+1}]\\
&\Longrightarrow
E[R_i]-R_f=-R_f\operatorname{Cov}(m,R_i)\\
&\Longrightarrow
\text{linear }m
\Longleftrightarrow
\text{CAPM / factor pricing / MV efficiency}\\
&\Longrightarrow
\xi_t=\frac{\Lambda_t}{B_t},
\qquad
S_t=E_t^P\left[\frac{\xi_T}{\xi_t}X_T\right]
=B_tE_t^Q\left[\frac{X_T}{B_T}\right]\\
&\Longrightarrow
\text{discounted prices are }Q\text{-martingales}\\
&\Longrightarrow
\text{options, bonds, and all derivatives are priced by the same equation}\\
&\Longrightarrow
\text{with information frictions, replace unconditional payoff by }E[v\mid\text{market information}].
\end{aligned}
$$

## 1. SDF 是核心对象
### 1.1 题型
#### 1.1.1 从个人优化到 SDF
**题目入口**：看到 representative agent、consumption-saving、portfolio choice，先写预算约束和 Euler equation；目标是把最优消费转成 pricing kernel。

最小系统和任意资产 $i$ 的 Euler equation：

$$
\begin{aligned}
\left\{
\begin{aligned}
\max_{\{c_t,\theta_t\}}
&\quad E_0\left[\sum_{t=0}^T \delta^t u(c_t)\right],
&&\text{(preferences)},\\
c_t+\sum_i \theta_{i,t}p_{i,t}
&=e_t+\sum_i \theta_{i,t-1}x_{i,t},
&&\text{(budget constraint)},\\
R_{i,t+1}
&=\frac{x_{i,t+1}}{p_{i,t}},
&&\text{(gross return)}.
\end{aligned}
\right.
&\implies
0=E_t\left[
\delta u'(c_{t+1})x_{i,t+1}
-u'(c_t)p_{i,t}
\right]\\
\Longleftrightarrow\quad
p_{i,t}
&=E_t\left[
\delta\frac{u'(c_{t+1})}{u'(c_t)}x_{i,t+1}
\right]\\
\Longleftrightarrow\quad
p_{i,t}
&=E_t[m_{t+1}x_{i,t+1}],
\qquad
m_{t+1}:=\delta\frac{u'(c_{t+1})}{u'(c_t)}.
\end{aligned}
$$

如果题目给的是 return 而不是 payoff，用 $x_{i,t+1}=p_{i,t}R_{i,t+1}$：

$$
\begin{aligned}
p_{i,t}
&=E_t[m_{t+1}p_{i,t}R_{i,t+1}]\\
\Longleftrightarrow\quad
1
&=E_t[m_{t+1}R_{i,t+1}].
\end{aligned}
$$

结论：

$$
\boxed{
\text{optimal consumption}
\Longrightarrow
\text{marginal utility ratio}
\Longrightarrow
\text{SDF}
\Longrightarrow
1=E_t[mR].
}
$$

#### 1.1.2 从 SDF 到 state price、risk-neutral probability
**题目入口**：看到 finite states、Arrow security、risk-neutral probability，先从 $P=E[mX]$ 展开成状态求和，再归一化 state price。

有限状态下，设 physical probability 为 $\pi_s$，state payoff 为 $X_s$：

$$
\begin{aligned}
P
&=E[mX]=\sum_s \pi_s m_sX_s=\sum_s q_sX_s,
\qquad q_s:=\pi_sm_s,\\
P_f
&=\sum_s q_s=E[m],\\
R_f
&=\frac{1}{P_f}=\frac{1}{E[m]},\\
\psi_s
&:=\frac{q_s}{\sum_jq_j}=\frac{\pi_sm_s}{E[m]}=R_fq_s,\\
\sum_s\psi_s&=1,\\
P
&=\sum_s q_sX_s=\frac{1}{R_f}\sum_s\psi_sX_s=\frac{1}{R_f}E^Q[X].
\end{aligned}
$$

结论：

$$
\boxed{
P=E[mX]
\Longleftrightarrow
P=\sum_s q_sX_s
\Longleftrightarrow
P=\frac{1}{R_f}E^Q[X].
}
$$

#### 1.1.3 从 SDF 到 risk premium
**题目入口**：看到 expected return、risk premium、bad times，先从 $1=E[mR_i]$ 展开 covariance。

由 $1=E[mR_i]$：

$$
\begin{aligned}
1
&=E[mR_i]=E[m]E[R_i]+\operatorname{Cov}(m,R_i),
\qquad
R_f=\frac{1}{E[m]},\\
E[R_i]-R_f
&=-\frac{\operatorname{Cov}(m,R_i)}{E[m]}=-R_f\operatorname{Cov}(m,R_i).
\end{aligned}
$$

因此：

$$
\boxed{
\text{asset has high premium}
\Longleftrightarrow
\operatorname{Cov}(m,R_i)<0.
}
$$

经济含义：

$$
\begin{aligned}
\operatorname{Cov}(m,R_i)<0
&\Longleftrightarrow
R_i\text{ 在 bad times }(m\text{ high})\text{ 表现差}\\
&\Longleftrightarrow
\text{asset carries systematic risk}\\
&\Longleftrightarrow
\text{investors require positive risk premium}.
\end{aligned}
$$

### 1.2 解法
#### 1.2.1 静态 SDF：所有价格的共同语言

$$
\begin{aligned}
P
&=E[mX],\\
1
&=E[mR],\\
E[R_i]-R_f
&=-R_f\operatorname{Cov}(m,R_i).
\end{aligned}
$$

| 对象                                | 含义                 |
| --------------------------------- | ------------------ |
| state price $q_s$                 | 状态 $s$ 的 Arrow price |
| SDF $m_s$                         | 每单位 payoff 的随机折现权重 |
| risk-neutral probability $\psi_s$ | 把状态价格归一化后的概率       |

$$
\begin{aligned}
q_s&=\pi_s m_s,\\
\psi_s&=R_f q_s=\frac{\pi_s m_s}{E[m]},\\
P&=\sum_s q_sX_s
=E[mX]
=\frac{1}{R_f}E^Q[X].
\end{aligned}
$$

#### 1.2.2 边际效用 SDF：价格来自最优消费

$$
\begin{aligned}
P_t
&=E_t\left[
\delta\frac{u'(c_{t+1})}{u'(c_t)}X_{t+1}
\right],\\
m_{t+1}
&=\delta\frac{u'(c_{t+1})}{u'(c_t)}.
\end{aligned}
$$

$$
\begin{aligned}
\text{preferences}
\Longrightarrow
\text{marginal rate of substitution}
\Longrightarrow
\text{SDF}
\Longrightarrow
\text{risk premia}.
\end{aligned}
$$

#### 1.2.3 偏好设定与 SDF

$$
\left\{
\begin{aligned}
\text{time-separable expected utility}
&:\quad
m_{t+1}=\delta\frac{u'(c_{t+1})}{u'(c_t)},\\
\text{CRRA}
&:\quad
u(c)=\frac{c^{1-\gamma}}{1-\gamma}
\implies
m_{t+1}
=\delta\left(\frac{c_{t+1}}{c_t}\right)^{-\gamma},
\qquad
\text{IES}=\frac{1}{\gamma},\\
\text{log utility}
&:\quad
u(c)=\log c
\implies
m_{t+1}=\delta\frac{c_t}{c_{t+1}},
\qquad
\gamma=1,\\
\text{CARA}
&:\quad
u(c)=-\frac{1}{\alpha}e^{-\alpha c}
\implies
m_{t+1}
=\delta e^{-\alpha(c_{t+1}-c_t)},\\
\text{mean-variance / quadratic}
&:\quad
\max_w\left\{w'(\mu-R_f1)-\frac{\gamma}{2}w'\Sigma w\right\}
\implies
w^*=\frac1\gamma\Sigma^{-1}(\mu-R_f1),\\
\text{habit}
&:\quad
u(c_t-H_t)
\implies
m_{t+1}
=\delta\frac{u'(c_{t+1}-H_{t+1})}{u'(c_t-H_t)}.
\end{aligned}
\right.
$$

Epstein-Zin preference 把 risk aversion 和 intertemporal substitution 分开：

$$
\begin{aligned}
V_t
&=
\left[
(1-\delta)c_t^{1-\frac1\psi}
+\delta
\left(E_t[V_{t+1}^{1-\gamma}]\right)^{
\frac{1-\frac1\psi}{1-\gamma}}
\right]^{\frac{1}{1-\frac1\psi}},\\
\theta
&:=\frac{1-\gamma}{1-\frac1\psi}\\
\implies\quad
m_{t+1}^{EZ}
&=
\left[
\delta
\left(\frac{c_{t+1}}{c_t}\right)^{-\frac1\psi}
\right]^{\theta}
R_{w,t+1}^{\theta-1}.
\end{aligned}
$$

$$
\boxed{
\gamma\text{ controls risk aversion},
\qquad
\psi\text{ controls IES},
\qquad
\gamma=\frac1\psi
\implies
m_{t+1}^{EZ}
=\delta\left(\frac{c_{t+1}}{c_t}\right)^{-\gamma}.
}
$$

#### 1.2.4 CCAPM lognormal 速查
看到 consumption growth、CRRA、lognormal return，先把 SDF 写成 consumption growth 的函数，再用 lognormal moment generating function 展开 Euler equation。

设

$$
\left\{
\begin{aligned}
g_{t+1}
&:=\Delta\log c_{t+1}
=\log\frac{c_{t+1}}{c_t},\\
u(c)
&=\frac{c^{1-\gamma}}{1-\gamma},\\
m_{t+1}
&=\delta\left(\frac{c_{t+1}}{c_t}\right)^{-\gamma}
=\delta e^{-\gamma g_{t+1}}.
\end{aligned}
\right.
$$

若 $g_{t+1}\mid\mathcal F_t\sim N(\mu_g,\sigma_g^2)$，则 risk-free rate 来自

$$
\begin{aligned}
R_{f,t}^{-1}
&=E_t[m_{t+1}]
=\delta E_t[e^{-\gamma g_{t+1}}]\\
&=\delta
\exp\left(
-\gamma\mu_g+\frac12\gamma^2\sigma_g^2
\right),
\end{aligned}
$$

所以

$$
\boxed{
\log R_{f,t} =
-\log\delta
+\gamma\mu_g
-\frac12\gamma^2\sigma_g^2.
}
$$

若 asset $i$ 的 log return 为 $r_{i,t+1}:=\log R_{i,t+1}$，且 $(r_{i,t+1},g_{t+1})$ joint normal，则 Euler equation 给出 log risk premium：

$$
\begin{aligned}
1
&=E_t[m_{t+1}R_{i,t+1}]
=E_t\left[
\exp\left(\log\delta-\gamma g_{t+1}+r_{i,t+1}\right)
\right]\\
\Longleftrightarrow\quad
0
&=
\log\delta-\gamma\mu_g+\mu_i
+\frac12\operatorname{Var}_t(r_{i,t+1}-\gamma g_{t+1})\\
&=
\log\delta-\gamma\mu_g+\mu_i
+\frac12\sigma_i^2
+\frac12\gamma^2\sigma_g^2
-\gamma\operatorname{Cov}_t(r_{i,t+1},g_{t+1}).
\end{aligned}
$$

代入 $\log R_{f,t}$：

$$
\boxed{
\mu_i-\log R_{f,t}
+\frac12\sigma_i^2 =
\gamma\operatorname{Cov}_t(r_{i,t+1},g_{t+1}).
}
$$

考试判断：

$$
\begin{aligned}
\operatorname{Cov}_t(r_{i,t+1},g_{t+1})>0
&\Longrightarrow
\text{asset pays high when consumption is high}\\
&\Longrightarrow
\text{bad hedge against bad times}\\
&\Longrightarrow
\text{positive risk premium}.
\end{aligned}
$$

### 1.3 证明
#### 1.3.1 Jensen / risk aversion / risk premium
凹效用 $\Longleftrightarrow$ 风险厌恶，且 certainty equivalent 不超过期望财富。

$$
\begin{aligned}
u''(w)\le0
&\Longrightarrow
u(E[\tilde w])\ge E[u(\tilde w)]
&&\text{(Jensen)},\\
u(x)&=E[u(\tilde w)],
\qquad
w=E[\tilde w]\\
&\Longrightarrow
u(w)\ge u(x)\\
&\Longrightarrow
w\ge x
&&\text{if }u'\!>0,\\
\pi&:=w-x\ge0.
\end{aligned}
$$

#### 1.3.2 Marginal utility SDF
投资者最优消费的一阶条件给出 SDF。

$$
\begin{aligned}
\max_{\theta_i}\ E_t[u(c_t)+\delta u(c_{t+1})]
&\Longrightarrow
0=
E_t\left[
\delta u'(c_{t+1})x_{i,t+1}
-u'(c_t)p_{i,t}
\right]\\
&\Longleftrightarrow
p_{i,t} =
E_t\left[
\delta\frac{u'(c_{t+1})}{u'(c_t)}x_{i,t+1}
\right]\\
&\Longleftrightarrow
p_{i,t}=E_t[m_{t+1}x_{i,t+1}],
\qquad
m_{t+1}:=\delta\frac{u'(c_{t+1})}{u'(c_t)}.
\end{aligned}
$$

#### 1.3.3 SDF、state price、risk-neutral probability
$P=E[mX]$、state price pricing、risk-neutral pricing 是同一件事。

$$
\begin{aligned}
P
&=E[mX]=\sum_s\pi_sm_sX_s=\sum_sq_sX_s,
\qquad q_s:=\pi_sm_s,\\
P_f
&=\sum_sq_s=E[m],
\qquad
R_f=\frac{1}{E[m]},\\
\psi_s
&:=\frac{q_s}{\sum_jq_j}=R_fq_s,\\
P
&=\sum_sq_sX_s=\frac{1}{R_f}\sum_s\psi_sX_s=\frac{1}{R_f}E^Q[X].
\end{aligned}
$$

#### 1.3.4 Risk premium covariance formula
风险溢价由资产收益与 SDF 的协方差决定。

$$
\begin{aligned}
1
&=E[mR_i]=E[m]E[R_i]+\operatorname{Cov}(m,R_i),
\qquad
R_f=\frac{1}{E[m]}\\
\Longrightarrow\quad
E[R_i]-R_f
&=-\frac{\operatorname{Cov}(m,R_i)}{E[m]}=-R_f\operatorname{Cov}(m,R_i).
\end{aligned}
$$

#### 1.3.5 Hansen-Jagannathan bound
Sharpe ratio 被 SDF volatility 约束。

$$
\begin{aligned}
E[R_i]-R_f
&=-R_f\operatorname{Cov}(m,R_i)\\
&=-R_f\rho_{m,R_i}\sigma(m)\sigma(R_i),\\
\left|
\frac{E[R_i]-R_f}{\sigma(R_i)}
\right|
&\le
R_f\sigma(m)\\
&=
\frac{\sigma(m)}{E[m]}.
\end{aligned}
$$

$$
\boxed{
\max_i
\left|
\frac{E[R_i]-R_f}{\sigma(R_i)}
\right|
\le
\frac{\sigma(m)}{E[m]}.
}
$$

## 2. 无套利把 SDF 变成 martingale
### 2.1 题型
#### 2.1.1 从 one-period SDF 到 dynamic SPD / EMM
**题目入口**：看到 dynamic pricing、continuous time、martingale measure，先把 one-period SDF 串成 $m_{t,T}$，再写成 SPD $\xi_T/\xi_t$。

动态模型中，把 one-period SDF 串起来：

$$
\begin{aligned}
m_{t,T}
&:=\prod_{s=t+1}^T m_s,\\
S_t
&=E_t[m_{t,T}X_T]
=E_t^P\left[\frac{\xi_T}{\xi_t}X_T\right],\\
\xi_t
&=\frac{\Lambda_t}{B_t},
\qquad
\Lambda_t:=E_t^P\left[\frac{dQ}{dP}\right],\\
B_t
&=\exp\left(\int_0^t r_sds\right),\\
S_t
&=E_t^P\left[\frac{\xi_T}{\xi_t}X_T\right]
=E_t^P\left[\frac{\Lambda_T/B_T}{\Lambda_t/B_t}X_T\right]
=B_tE_t^P\left[\frac{\Lambda_T}{\Lambda_t}\frac{X_T}{B_T}\right]
=B_tE_t^Q\left[\frac{X_T}{B_T}\right].
\end{aligned}
$$

若 $X_T=S_T$，则 discounted price 是 $Q$-martingale：

$$
\begin{aligned}
\frac{S_t}{B_t}
&=E_t^Q\left[\frac{S_T}{B_T}\right],
\end{aligned}
$$

结论：

$$
\boxed{
\text{SDF}
\Longrightarrow
\text{SPD }\xi_t
\Longrightarrow
\text{EMM }Q
\Longrightarrow
\frac{S_t}{B_t}\text{ is a }Q\text{-martingale}.
}
$$

### 2.2 解法
#### 2.2.1 从 one-period 到 dynamic pricing
one-period SDF 是一个随机变量：

$$
\begin{aligned}
P_t
&=E_t[m_{t,t+1}X_{t+1}],\\
1
&=E_t[m_{t,t+1}R_{t+1}].
\end{aligned}
$$

$$
\begin{aligned}
S_t
&=E_t\left[\frac{\xi_T}{\xi_t}X_T\right]
=B_tE_t^Q\left[\frac{X_T}{B_T}\right].
\end{aligned}
$$

| 符号 | 角色 |
|---|---|
| $m$ | one-period SDF |
| $\xi_t$ | continuous-time state price density / pricing kernel |
| $\Lambda_t$ | Radon-Nikodym density / change of measure |
| $Q$ | equivalent martingale measure |

SDF 和 SPD 的关系：

$$
\left\{
\begin{aligned}
m_{t,T}
&=\text{从 }t\text{ 到 }T\text{ 的 stochastic discount factor},\\
\xi_t
&=\text{time-}t\text{ state price density / pricing kernel process},\\
m_{t,T}
&=\frac{\xi_T}{\xi_t},
&&\text{(SDF is the ratio of SPD across time)},\\
S_t
&=E_t[m_{t,T}X_T]
=E_t\left[\frac{\xi_T}{\xi_t}X_T\right].
\end{aligned}
\right.
$$

所以：SDF 是“两个时点之间”的随机折现因子；SPD 是“每个时点上”的状态价格密度过程。给定 SPD $\xi_t$，任意 $t$ 到 $T$ 的 SDF 都由比值 $\xi_T/\xi_t$ 给出。

无套利的三种等价语言：

$$
\begin{aligned}
\text{No arbitrage}
&\Longleftrightarrow
\exists\ \xi_t>0 \text{ such that prices can be written by SPD}\\
&\Longleftrightarrow
\exists\ Q\sim P \text{ such that discounted prices are martingales}\\
&\Longleftrightarrow
\text{linear pricing rule has no free lunch}.
\end{aligned}
$$

更具体地，分两种情况：

1. **没有中间 dividend**

   $$
   \begin{aligned}
   S_t
   &=E_t\left[\frac{\xi_T}{\xi_t}S_T\right]\\
   \Longleftrightarrow\quad
   \xi_tS_t
   &=E_t[\xi_TS_T]\\
   \Longleftrightarrow\quad
   \xi_tS_t
   &\text{ is a }P\text{-martingale}.
   \end{aligned}
   $$

2. **有中间 dividend flow $D_t$**

   $$
   \begin{aligned}
   S_t
   &=E_t\left[
   \int_t^T\frac{\xi_s}{\xi_t}D_s\,ds
   +\frac{\xi_T}{\xi_t}S_T
   \right]\\
   \Longleftrightarrow\quad
   \xi_tS_t
   &=E_t\left[
   \int_t^T\xi_sD_s\,ds+\xi_TS_T
   \right]\\
   \Longleftrightarrow\quad
   \xi_tS_t+\int_0^t\xi_sD_s\,ds
   &\text{ is a }P\text{-martingale}.
   \end{aligned}
   $$

这就是“无套利把 SDF 变成 martingale”的精确含义：不是 $S_t$ 自己一定是 martingale，而是 **用 state price density 调整后的 cum-dividend value** 是 martingale。

#### 2.2.2 SPD 与 EMM 的连接
令 money market account 为

$$
\begin{aligned}
B_t&=\exp\left(\int_0^t r_sds\right).
\end{aligned}
$$

若 $\xi_t$ 是 SPD，则可以分解为：

$$
\begin{aligned}
\xi_t
&=\frac{\Lambda_t}{B_t},
\qquad
\Lambda_t:=\xi_tB_t.
\end{aligned}
$$

其中 $\Lambda_t$ 是从 $P$ 到 $Q$ 的 density process：

$$
\begin{aligned}
\Lambda_t
&=E_t\left[\frac{dQ}{dP}\right].
\end{aligned}
$$

更完整地说，若 $Q\sim P$，则存在 Radon-Nikodym derivative：

$$
\begin{aligned}
Z_T
&:=\frac{dQ}{dP}>0,
\qquad
E^P[Z_T]=1.
\end{aligned}
$$

density process 是这个终值 likelihood ratio 的条件期望过程：

$$
\begin{aligned}
\Lambda_t
&:=E_t^P[Z_T]
=E_t^P\left[\frac{dQ}{dP}\right].
\end{aligned}
$$

因此 $\Lambda_t$ 是 $P$-martingale：

$$
\begin{aligned}
E_s^P[\Lambda_t]
&=E_s^P\!\left[E_t^P[Z_T]\right]
=E_s^P[Z_T]
=\Lambda_s,
\qquad s\le t.
\end{aligned}
$$

它能做测度变化，是因为条件 Bayes formula：

$$
\begin{aligned}
E_t^Q[Y]
&=
\frac{E_t^P[Z_TY]}{E_t^P[Z_T]}\\
&=
\frac{1}{\Lambda_t}E_t^P[Z_TY]\\
&=
E_t^P\left[\frac{\Lambda_T}{\Lambda_t}Y\right],
\qquad
\Lambda_T=Z_T.
\end{aligned}
$$

所以在 $P$ 下乘上 $\Lambda_T/\Lambda_t$，等价于换到 $Q$ 下取条件期望。

把 SPD 定价式改写：

$$
\begin{aligned}
S_t
&=E_t^P\left[\frac{\xi_T}{\xi_t}X_T\right]
=E_t^P\left[\frac{\Lambda_T/B_T}{\Lambda_t/B_t}X_T\right]
=B_tE_t^P\left[\frac{\Lambda_T}{\Lambda_t}\frac{X_T}{B_T}\right]
=B_tE_t^Q\left[\frac{X_T}{B_T}\right].
\end{aligned}
$$

注意：测度变换由 $\Lambda_T/\Lambda_t$ 完成，不是由 $X_T/B_T$ 完成。这里 $\dfrac{X_T}{B_T}$ 只是把 payoff 换成 money-market account 作为 numeraire 后的 discounted payoff：

$$
\begin{aligned}
\underbrace{\frac{\Lambda_T}{\Lambda_t}}_{\text{change of measure}}
\cdot
\underbrace{\frac{X_T}{B_T}}_{\text{discounted payoff}}
&\Longrightarrow
E_t^Q\left[\frac{X_T}{B_T}\right].
\end{aligned}
$$

所以：

$$
\boxed{
\text{SPD pricing under }P
\quad\Longleftrightarrow\quad
\text{risk-neutral pricing under }Q.
}
$$

如果 $X_T=S_T$，则：

$$
\begin{aligned}
\frac{S_t}{B_t}
&=E_t^Q\left[\frac{S_T}{B_T}\right],
\end{aligned}
$$

也就是说 discounted price 是 $Q$-martingale。

##### （1）做题规则：SDF/SPD vs. risk-neutral pricing
1. **用 SDF / SPD 定价**

   $$
   \begin{aligned}
   S_t
   &=E_t^P[m_{t,T}X_T]
   =E_t^P\left[\frac{\xi_T}{\xi_t}X_T\right].
   \end{aligned}
   $$

   这里折现已经包含在 $m_{t,T}$ 或 $\xi_T/\xi_t$ 里面；不要再额外乘一个 $e^{-r(T-t)}$，除非你先把 SDF 拆成 $\Lambda/B$。

2. **用 risk-neutral pricing**

   $$
   \begin{aligned}
   S_t
   &=B_tE_t^Q\left[\frac{X_T}{B_T}\right].
   \end{aligned}
   $$

   如果 $r$ 是常数：

   $$
   \begin{aligned}
   S_t
   &=e^{-r(T-t)}E_t^Q[X_T].
   \end{aligned}
   $$

   这里必须显式折现，因为 $Q$ 只改变概率分布，不自动把未来 payoff 变成今天价格。

3. **从 physical measure 写成 risk-neutral measure**

   标准步骤：

   $$
   \left\{
   \begin{aligned}
   \text{Step 1: }&\text{写出 }P\text{ 下 dynamics},\\
   \text{Step 2: }&\text{找 market price of risk }\theta_t,\\
   \text{Step 3: }&dW_t^Q=dW_t^P+\theta_tdt,\\
   \text{Step 4: }&\text{把 }dW_t^P=dW_t^Q-\theta_tdt\text{ 代回},\\
   \text{Step 5: }&\text{检查 discounted price 在 }Q\text{ 下是 martingale}.
   \end{aligned}
   \right.
   $$

   这里 $\theta_t$ 的精确定义是 **market price of risk**。在一维模型里：

   $$
   \begin{aligned}
   \theta_t
   &=
   \frac{\mu_t-r_t}{\sigma_t},
   \end{aligned}
   $$

   它等于 instantaneous Sharpe ratio。多维模型里不是一个简单标量 Sharpe ratio，而是解下面的 risk premium equation：

   $$
   \begin{aligned}
   \mu_t-r_t1
   &=
   \sigma_t\theta_t.
   \end{aligned}
   $$

   所以测度转换的本质是：

   $$
   \boxed{
   \text{risk premium }(\mu-r)
   =
   \text{exposure }\sigma
   \times
   \text{price of risk }\theta.
   }
   $$

   然后用 $\theta$ 去平移 Brownian drift，使 risky asset 在 $Q$ 下只赚 risk-free rate。

例题：股票在 physical measure $P$ 下满足

$$
\begin{aligned}
dS_t
&=\mu S_tdt+\sigma S_tdW_t^P,
\qquad
dB_t=rB_tdt.
\end{aligned}
$$

要求写成 risk-neutral measure $Q$。因为风险资产 excess return 为 $\mu-r$，market price of risk 为

$$
\begin{aligned}
\theta
&=\frac{\mu-r}{\sigma}.
\end{aligned}
$$

定义

$$
\begin{aligned}
dW_t^Q
&=dW_t^P+\theta dt
=dW_t^P+\frac{\mu-r}{\sigma}dt.
\end{aligned}
$$

于是

$$
\begin{aligned}
dW_t^P
&=dW_t^Q-\frac{\mu-r}{\sigma}dt.
\end{aligned}
$$

代回股票 dynamics：

$$
\begin{aligned}
dS_t
&=\mu S_tdt+\sigma S_t
\left(dW_t^Q-\frac{\mu-r}{\sigma}dt\right)\\
&=\mu S_tdt+\sigma S_tdW_t^Q-(\mu-r)S_tdt=rS_tdt+\sigma S_tdW_t^Q.
\end{aligned}
$$

因此 $Q$ 下：

$$
\boxed{
dS_t=rS_tdt+\sigma S_tdW_t^Q,
\qquad
S_t=e^{-r(T-t)}E_t^Q[S_T].
}
$$

若 payoff 是 option $X_T=(S_T-K)^+$，则：

$$
\boxed{
C_t=e^{-r(T-t)}E_t^Q[(S_T-K)^+].
}
$$

一般多资产版本：

$$
\left\{
\begin{aligned}
dS_t
&=\operatorname{diag}(S_t)\big(\mu_tdt+\sigma_tdW_t^P\big),\\
dB_t&=r_tB_tdt,\\
\mu_t-r_t1&=\sigma_t\theta_t.
\end{aligned}
\right.
$$

定义

$$
\begin{aligned}
dW_t^Q
&=dW_t^P+\theta_tdt.
\end{aligned}
$$

代回：

$$
\begin{aligned}
dS_t
&=\operatorname{diag}(S_t)
\left[
\mu_tdt+\sigma_t(dW_t^Q-\theta_tdt)
\right]\\
&=\operatorname{diag}(S_t)
\left[
(\mu_t-\sigma_t\theta_t)dt+\sigma_tdW_t^Q
\right]\\
&=\operatorname{diag}(S_t)
\left[
r_t1\,dt+\sigma_tdW_t^Q
\right].
\end{aligned}
$$

所以风险中性测度的判别标准是：

$$
\boxed{
\text{under }Q,\quad
\text{all traded assets have drift }r_t
\text{ after dividend adjustment}.
}
$$

做题时不要说“把 $\theta$ 设成 Sharpe ratio 然后偏移”就结束；完整流程是：

1. 写出 $P$ 下 drift 和 diffusion。
2. 用 $\mu-r1=\sigma\theta$ 解 market price of risk。
3. 定义 $dW^Q=dW^P+\theta dt$。
4. 代回 dynamics，把 drift 改成 $r$。
5. 用 $Q$ 下 dynamics 计算 discounted expectation。

#### 2.2.3 为什么这来自无套利
套利的本质是：存在一个 payoff 非负且有正概率严格为正，但今天成本非正。若这样的 payoff 存在，就不可能有严格正的 pricing kernel $\xi$，因为：

$$
\begin{aligned}
X_T\ge0,\quad P(X_T>0)>0,\quad \xi_T>0
&\Longrightarrow
E[\xi_TX_T]>0.
\end{aligned}
$$

但套利要求它的价格 $\le0$，与

$$
\begin{aligned}
P_0=E[\xi_TX_T]
\end{aligned}
$$

矛盾。因此：

$$
\begin{aligned}
\text{no arbitrage}
&\Longrightarrow
\text{strictly positive pricing kernel / SPD}\\
&\Longrightarrow
\text{SPD-adjusted values are martingales}\\
&\Longrightarrow
\text{discounted prices are }Q\text{-martingales}.
\end{aligned}
$$

反过来，如果存在 $Q\sim P$ 使 discounted gains 都是 martingales，那么任何 zero-cost self-financing strategy 的 discounted wealth 也是 martingale，不能从 $0$ 开始变成非负且有正概率严格为正的终值。这排除了套利。

#### 2.2.4 该记住的对应关系
| 语言 | 公式 | 直觉 |
|---|---|---|
| SDF | $P_t=E_t[m_{t,T}X_T]$ | 用随机折现权重给 payoff 定价 |
| SPD | $S_t=E_t[(\xi_T/\xi_t)X_T]$ | 把 SDF 做成跨时点过程 |
| SPD martingale | $\xi_tS_t+\int_0^t\xi_sD_sds$ is $P$-martingale | 价格加 dividend 后，按状态价格调整为公平游戏 |
| EMM | $S_t/B_t=E_t^Q[S_T/B_T]$ | 换到 $Q$ 下，discounted price 是公平游戏 |
| Risk-neutral pricing | $S_t=B_tE_t^Q[X_T/B_T]$ | 用市场利率折现，再用 $Q$ 下期望定价 |

#### 2.2.5 Complete market 的意义

$$
\begin{aligned}
\text{complete market}
&\Longleftrightarrow
\text{every payoff can be replicated}\\
&\Longleftrightarrow
\text{unique SDF / unique EMM}\\
&\Longrightarrow
\text{derivative price is pinned down uniquely}.
\end{aligned}
$$

这条线连接：

- finite states 下的 market completeness。
- dynamic trading 下的 replication。
- Black-Scholes 用 stock + bond 复制 option。
#### 2.2.6 Complete market rank condition
有限状态下，完备市场不是一句“payoff 都能复制”，而是 payoff matrix 的秩条件。

设有 $S$ 个 states、$N$ 个 traded assets。令 payoff matrix 为

$$
\begin{aligned}
X
&=
\begin{pmatrix}
x_{11}&\cdots&x_{1N}\\
\vdots&\ddots&\vdots\\
x_{S1}&\cdots&x_{SN}
\end{pmatrix},
\qquad
p=
\begin{pmatrix}
p_1\\
\vdots\\
p_N
\end{pmatrix}.
\end{aligned}
$$

其中第 $s$ 行是 state $s$ 下各资产 payoff，第 $j$ 列是资产 $j$ 的 state payoff。任意 contingent claim $z\in\mathbb R^S$ 可复制，当且仅当存在 portfolio $\theta\in\mathbb R^N$：

$$
\begin{aligned}
X\theta&=z.
\end{aligned}
$$

因此

$$
\boxed{
\text{complete market}
\Longleftrightarrow
\operatorname{rank}(X)=S.
}
$$

State price vector $q\in\mathbb R^S$ 满足

$$
\begin{aligned}
X'q&=p.
\end{aligned}
$$

无套利、完备性和 state price 的关系：

$$
\left\{
\begin{aligned}
\text{no arbitrage}
&\Longleftrightarrow
\exists q\gg0\ \text{such that }X'q=p,\\
\text{complete market}
&\Longleftrightarrow
\operatorname{rank}(X)=S
\Longleftrightarrow
q\text{ is unique},\\
\text{incomplete market}
&\Longleftrightarrow
\operatorname{rank}(X)<S
\Longleftrightarrow
q\text{ is not unique if no arbitrage holds}.
\end{aligned}
\right.
$$

做题模板：

$$
\boxed{
\text{write }X
\Longrightarrow
\operatorname{rank}(X)
\Longrightarrow
\text{replicability}
\Longrightarrow
\text{uniqueness of }q,m,Q.
}
$$

### 2.3 证明
#### 2.3.1 No-arbitrage, SPD, EMM
SPD 定价和 risk-neutral pricing 等价。

$$
\begin{aligned}
S_t
&=E_t^P\left[\frac{\xi_T}{\xi_t}X_T\right],
\qquad
\xi_t=\frac{\Lambda_t}{B_t},\\
S_t
&=E_t^P\left[\frac{\Lambda_T/B_T}{\Lambda_t/B_t}X_T\right]
=B_tE_t^P\left[\frac{\Lambda_T}{\Lambda_t}\frac{X_T}{B_T}\right]
=B_tE_t^Q\left[\frac{X_T}{B_T}\right].
\end{aligned}
$$

其中测度变化来自

$$
\begin{aligned}
E_t^Q[Y]
&=
E_t^P\left[\frac{\Lambda_T}{\Lambda_t}Y\right].
\end{aligned}
$$

#### 2.3.2 Girsanov drift shift
从 $P$ 到 $Q$ 后，股票 drift 变为 $r-q$。

$$
\left\{
\begin{aligned}
dS_t&=(\mu-q)S_tdt+\sigma S_tdW_t^P,\\
\theta&=\frac{\mu-r}{\sigma},\\
dW_t^Q&=dW_t^P+\theta dt.
\end{aligned}
\right.
$$

代回：

$$
\begin{aligned}
dS_t
&=(\mu-q)S_tdt+\sigma S_t
\left(dW_t^Q-\frac{\mu-r}{\sigma}dt\right)\\
&=(r-q)S_tdt+\sigma S_tdW_t^Q.
\end{aligned}
$$

#### 2.3.3 Stochastic process templates
$S_t$ 与 $B_t$ 都是 stochastic process。

$$
\left\{
\begin{aligned}
dS_t&=\mu_tS_tdt+\sigma_tS_tdW_t,\\
dB_t&=r_tB_tdt.
\end{aligned}
\right.
$$

若 $r_t$ 随机：

$$
\begin{aligned}
B_T
&=
B_t\exp\left(\int_t^T r_sds\right),\\
\frac{B_t}{B_T}
&=
\exp\left(-\int_t^T r_sds\right).
\end{aligned}
$$

GBM 显式解：

$$
\begin{aligned}
d\log S_t
&=
\frac{1}{S_t}dS_t-\frac12\frac{1}{S_t^2}(dS_t)^2\\
&=
\left(\mu-\frac12\sigma^2\right)dt+\sigma dW_t\\
\Longrightarrow\quad
S_T
&=
S_t\exp\left[
\left(\mu-\frac12\sigma^2\right)(T-t)
+\sigma(W_T-W_t)
\right].
\end{aligned}
$$

OU / mean-reverting process：

$$
\left\{
\begin{aligned}
dX_t&=\kappa(\theta-X_t)dt+\sigma dW_t,\\
dX_t&=(a-bX_t)dt+\sigma dW_t,
\qquad b=\kappa,\quad a=\kappa\theta,\\
X_T
&=
\theta+(X_t-\theta)e^{-\kappa(T-t)}
+\sigma\int_t^T e^{-\kappa(T-s)}dW_s.
\end{aligned}
\right.
$$

条件矩：

$$
\boxed{
\begin{aligned}
E_t[X_T]
&=
\theta+(X_t-\theta)e^{-\kappa(T-t)},\\
\operatorname{Var}_t(X_T)
&=
\frac{\sigma^2}{2\kappa}
\left(1-e^{-2\kappa(T-t)}\right).
\end{aligned}
}
$$

简化型：

$$
\boxed{
\kappa=1,\quad \theta=0
\quad
(\text{equiv. }a=0,\ b=1)
\quad\Longrightarrow\quad
dX_t=-X_tdt+\sigma dW_t.
}
$$

## 3. Mean-Variance, CAPM, Factor Models 是线性 SDF
### 3.1 题型
#### 3.1.1 从线性 SDF 到 CAPM / factor models / MV efficiency
**题目入口**：看到 CAPM、factor model、beta pricing、mean-variance efficiency，先判断是否能写成 linear SDF。

若 SDF 对某个 return 线性，由 $1=E[mR_i]$：

$$
\begin{aligned}
m
&=a-bR_m,\\
1
&=E[mR_i]=E[m]E[R_i]-b\operatorname{Cov}(R_i,R_m),\\
1
&=E[mR_m]=E[m]E[R_m]-b\operatorname{Var}(R_m).
\end{aligned}
$$

两式相减并用 $R_f=1/E[m]$：

$$
\begin{aligned}
E[R_i]-R_f
&=\frac{b}{E[m]}\operatorname{Cov}(R_i,R_m),\\
E[R_m]-R_f
&=\frac{b}{E[m]}\operatorname{Var}(R_m),\\
\Longrightarrow\quad
E[R_i]-R_f
&=\frac{\operatorname{Cov}(R_i,R_m)}
{\operatorname{Var}(R_m)}
\big(E[R_m]-R_f\big)=\beta_i\big(E[R_m]-R_f\big).
\end{aligned}
$$

所以：

$$
\boxed{
m=a-bR_m
\Longrightarrow
\text{CAPM}
\Longleftrightarrow
R_m\text{ is mean-variance efficient}.
}
$$

多因子版本：

$$
\begin{aligned}
m
&=a-b'f,\\
1
&=E[mR_i]\\
\Longrightarrow\quad
E[R_i]-R_f
&=\beta_i'\lambda_f.
\end{aligned}
$$

结论：

$$
\boxed{
\text{linear SDF}
\Longleftrightarrow
\text{beta pricing}
\Longleftrightarrow
\text{factor model}
\Longleftrightarrow
\text{MV efficiency}.
}
$$

#### 3.1.2 Two-fund spanning / separation
**题目入口**：看到 two-fund spanning、two-fund separation、mutual fund theorem、efficient frontier spanning，先判断是否有 risk-free asset。

$$
\boxed{
\begin{aligned}
\text{with }R_f
&\implies
\operatorname{span}\{R_f,R_T\}\text{ spans all efficient portfolios},\\
\text{without }R_f
&\implies
\operatorname{span}\{R(\mu_a),R(\mu_b)\}\text{ spans risky frontier},\quad \mu_a\ne\mu_b.
\end{aligned}
}
$$

### 3.2 解法
#### 3.2.1 Mean-variance frontier
MVF 的对象是 portfolio return 的均值和方差：

$$
\left\{
\begin{aligned}
R_p&=w'R,\\
E[R_p]&=w'\mu,\\
\operatorname{Var}(R_p)&=w'\Sigma w,\\
1'w&=1.
\end{aligned}
\right.
$$

给定目标均值 $\mu_p$，frontier 来自：

$$
\begin{aligned}
\min_w\quad &w'\Sigma w\\
\text{s.t.}\quad
&w'\mu=\mu_p,\qquad 1'w=1.
\end{aligned}
$$

Lagrangian 与 FOC：

$$
\begin{aligned}
\mathcal L
&=w'\Sigma w-\lambda(w'\mu-\mu_p)-\gamma(1'w-1),\\
0
&=\frac{\partial\mathcal L}{\partial w}
=2\Sigma w-\lambda\mu-\gamma1\\
\Longleftrightarrow\quad
w
&=\frac12\Sigma^{-1}(\lambda\mu+\gamma1).
\end{aligned}
$$

令

$$
\begin{aligned}
A&:=1'\Sigma^{-1}1,\qquad
B:=1'\Sigma^{-1}\mu,\qquad
C:=\mu'\Sigma^{-1}\mu,\qquad
D:=AC-B^2.
\end{aligned}
$$

由两个约束解 $\lambda,\gamma$：

$$
\begin{aligned}
\begin{pmatrix}
\mu_p\\
1
\end{pmatrix}
&=
\frac12
\begin{pmatrix}
C & B\\
B & A
\end{pmatrix}
\begin{pmatrix}
\lambda\\
\gamma
\end{pmatrix},\\
\Longrightarrow\quad
w(\mu_p)
&=
\Sigma^{-1}
\left[
\frac{A\mu_p-B}{D}\mu
+\frac{C-B\mu_p}{D}1
\right].
\end{aligned}
$$

因此 frontier 方程为：

$$
\begin{aligned}
\sigma_p^2
&=w(\mu_p)'\Sigma w(\mu_p)\\
&=\frac{A\mu_p^2-2B\mu_p+C}{D}.
\end{aligned}
$$

Mean-variance 要分两种情况记：

1. **只有 risky assets，没有 risk-free asset**

   资金必须完全投在 risky assets 上：

   $$
   \begin{aligned}
   1'w&=1.
   \end{aligned}
   $$

   因此 frontier 是带两个约束的二次规划：

   $$
   \begin{aligned}
   \min_w\quad &w'\Sigma w\\
   \text{s.t.}\quad
   &w'\mu=\mu_p,\qquad 1'w=1,
   \end{aligned}
   $$

   最终得到一条 hyperbola：

   $$
   \begin{aligned}
   \sigma_p^2
   &=
   \frac{A\mu_p^2-2B\mu_p+C}{D}.
   \end{aligned}
   $$

2. **有 risk-free asset**

   risky portfolio 不再必须满足 $1'w=1$；剩余财富自动放入 risk-free asset。核心变成最大化 Sharpe ratio：

   $$
   \begin{aligned}
   \max_w\quad
   \frac{w'(\mu-R_f1)}{\sqrt{w'\Sigma w}}
   &\Longleftrightarrow
   \max_w\quad
   \frac{w'\mu^e}{\sqrt{w'\Sigma w}},
   \qquad
   \mu^e:=\mu-R_f1.
   \end{aligned}
   $$

   FOC 给出 tangency portfolio 的方向：

   $$
   \begin{aligned}
   w_T
   &\propto
   \Sigma^{-1}\mu^e
   =
   \Sigma^{-1}(\mu-R_f1).
   \end{aligned}
   $$

   normalized version：

   $$
   \begin{aligned}
   w_T
   &=
   \frac{\Sigma^{-1}(\mu-R_f1)}
   {1'\Sigma^{-1}(\mu-R_f1)}.
   \end{aligned}
   $$

   任意 efficient portfolio 都是 risk-free asset 和 tangency portfolio 的组合：

   $$
   \begin{aligned}
   R_p
   &=(1-\omega)R_f+\omega R_T,\\
   E[R_p]-R_f
   &=\omega(E[R_T]-R_f),\\
   \sigma_p
   &=|\omega|\sigma_T,\\
   \Longrightarrow\quad
   E[R_p]-R_f
   &=
   \frac{E[R_T]-R_f}{\sigma_T}\sigma_p.
   \end{aligned}
   $$

#### 3.2.2 Two-fund spanning / separation
有 risk-free asset 时，所有 efficient portfolios 都由 risk-free asset 和 tangency portfolio span：

$$
\begin{aligned}
\left\{
\begin{aligned}
w_T
&=
\frac{\Sigma^{-1}(\mu-R_f1)}
{1'\Sigma^{-1}(\mu-R_f1)},\\
R_p
&=(1-\omega)R_f+\omega R_T
\end{aligned}
\right.
&\implies
R_p\in\operatorname{span}\{R_f,R_T\},\\
E[R_p]-R_f
&=
\frac{E[R_T]-R_f}{\sigma_T}\sigma_p.
\end{aligned}
$$

没有 risk-free asset 时，任意两只不同的 efficient risky funds 可以 span 整条 risky frontier：

$$
\begin{aligned}
w(\mu_p)
&=
\Sigma^{-1}\left[
\frac{A\mu_p-B}{D}\mu
+\frac{C-B\mu_p}{D}1
\right],\\
w(\mu_p)
&=a(\mu_p)w(\mu_a)+[1-a(\mu_p)]w(\mu_b),
\qquad
a(\mu_p)=\frac{\mu_p-\mu_b}{\mu_a-\mu_b},\quad \mu_a\ne\mu_b.
\end{aligned}
$$

#### 3.2.3 CAPM / factor model / SDF 的等价关系
这些命题不要分开背，它们是一组等价语言：

$$
\left\{
\begin{aligned}
\text{CAPM}
&:\quad E[R_i]-R_f=\beta_i(E[R_m]-R_f),\\
\text{linear SDF}
&:\quad m=a-bR_m,\\
\text{MV efficiency}
&:\quad R_m\text{ lies on efficient frontier},\\
\text{factor model}
&:\quad E[R_i]-R_f=\beta_i'\lambda_f.
\end{aligned}
\right.
$$

复习时按这个顺序：

$$
\begin{aligned}
\text{linear SDF}
&\Longrightarrow
\text{beta pricing}\\
&\Longrightarrow
\text{CAPM / factor pricing}\\
&\Longleftrightarrow
\text{mean-variance efficiency}.
\end{aligned}
$$

#### 3.2.4 CML / SML / alpha test 对照
CAPM 和 factor pricing 题最容易混淆的是：CML 只描述 efficient portfolios，SML / beta pricing 描述所有被模型定价的 assets。

| 对象 | 横轴 | 纵轴 | 适用资产 | 公式 |
|---|---|---|---|---|
| CML | total risk $\sigma_p$ | $E[R_p]$ | efficient portfolios | $E[R_p]-R_f=\frac{E[R_T]-R_f}{\sigma_T}\sigma_p$ |
| SML | beta $\beta_i$ | $E[R_i]$ | any priced asset | $E[R_i]-R_f=\beta_i(E[R_m]-R_f)$ |
| factor pricing | factor beta $\beta_i$ | $E[R_i]$ | any priced asset | $E[R_i]-R_f=\beta_i'\lambda_f$ |
| alpha test | fitted beta | abnormal return | test portfolios / assets | $\alpha_i=E[R_i]-R_f-\beta_i'\lambda_f$ |

核心区分：

$$
\left\{
\begin{aligned}
\text{CML}
&:\quad
\text{uses total volatility, only efficient portfolios lie on it},\\
\text{SML}
&:\quad
\text{uses beta, every correctly priced asset lies on it},\\
\text{positive alpha}
&:\quad
\alpha_i>0
\Longleftrightarrow
\text{asset return is too high relative to factor exposure},\\
\text{negative alpha}
&:\quad
\alpha_i<0
\Longleftrightarrow
\text{asset return is too low relative to factor exposure}.
\end{aligned}
\right.
$$

Time-series factor test：

$$
\begin{aligned}
R_{i,t}^e
&:=R_{i,t}-R_{f,t},\\
R_{i,t}^e
&=\alpha_i+\beta_i'f_t+\varepsilon_{i,t},\\
E[\varepsilon_{i,t}\mid f_t]&=0.
\end{aligned}
$$

若 factors 是 traded excess returns 且模型正确，则

$$
\boxed{
\alpha_i=0
\qquad
\text{for all test assets }i.
}
$$

Cross-sectional beta pricing：

$$
\begin{aligned}
E[R_i^e]
&=\beta_i'\lambda_f+\alpha_i,\\
\beta_i
&=\operatorname{Cov}(R_i^e,f)\operatorname{Var}(f)^{-1}.
\end{aligned}
$$

检验逻辑：

$$
\boxed{
\text{factor model works}
\Longleftrightarrow
\text{factor betas explain average excess returns}
\Longleftrightarrow
\alpha_i=0.
}
$$

### 3.3 证明
#### 3.3.1 Mean-variance frontier
MVF 是二次规划，frontier 是 hyperbola。

$$
\begin{aligned}
\left\{
\begin{aligned}
\min_w\quad &w'\Sigma w,\\
\text{s.t.}\quad
&w'\mu=\mu_p,\qquad 1'w=1.
\end{aligned}
\right.
&\implies
\mathcal L
=w'\Sigma w-\lambda(w'\mu-\mu_p)-\gamma(1'w-1),\\
0&=2\Sigma w-\lambda\mu-\gamma1,\\
w&=\frac12\Sigma^{-1}(\lambda\mu+\gamma1).
\end{aligned}
$$

令

$$
\begin{aligned}
A&=1'\Sigma^{-1}1,\qquad
B=1'\Sigma^{-1}\mu,\qquad
C=\mu'\Sigma^{-1}\mu,\qquad
D=AC-B^2.
\end{aligned}
$$

则

$$
\boxed{
\sigma_p^2 =
\frac{A\mu_p^2-2B\mu_p+C}{D}.
}
$$

#### 3.3.2 Tangency portfolio
有 risk-free asset 时，efficient risky portfolio 是 tangency portfolio。

$$
\begin{aligned}
\max_w\quad
\frac{w'(\mu-R_f1)}
{\sqrt{w'\Sigma w}}
&\Longrightarrow
w_T\propto\Sigma^{-1}(\mu-R_f1),\\
w_T
&=
\frac{\Sigma^{-1}(\mu-R_f1)}
{1'\Sigma^{-1}(\mu-R_f1)}.
\end{aligned}
$$

CML：

$$
\begin{aligned}
R_p&=(1-\omega)R_f+\omega R_T,\\
E[R_p]-R_f&=\omega(E[R_T]-R_f),\\
\sigma_p&=|\omega|\sigma_T,\\
\Longrightarrow\quad
E[R_p]-R_f
&=
\frac{E[R_T]-R_f}{\sigma_T}\sigma_p.
\end{aligned}
$$

#### 3.3.3 Two-fund spanning proof
无 risk-free asset 时，frontier weight 对目标均值 $\mu_p$ 是 affine function，所以两只不同 frontier funds 可以生成任意 frontier portfolio。

$$
\begin{aligned}
\mu_p&=a\mu_a+(1-a)\mu_b
\implies
a=\frac{\mu_p-\mu_b}{\mu_a-\mu_b},\\
a w(\mu_a)+[1-a]w(\mu_b)
&=
\Sigma^{-1}\left[
\frac{A\mu_p-B}{D}\mu
+\frac{C-B\mu_p}{D}1
\right]
=w(\mu_p).
\end{aligned}
$$

有 risk-free asset 时，risky allocation 只有一个 Sharpe-maximizing 方向：

$$
\begin{aligned}
\max_w\frac{w'(\mu-R_f1)}{\sqrt{w'\Sigma w}}
&\implies
w\propto\Sigma^{-1}(\mu-R_f1)
\implies
w=\omega w_T,\\
R_p&=(1-\omega)R_f+\omega R_T.
\end{aligned}
$$

#### 3.3.4 Linear SDF implies CAPM
$m=a-bR_m$ 推出 CAPM。

$$
\begin{aligned}
1&=E[mR_i]
=E[m]E[R_i]-b\operatorname{Cov}(R_i,R_m),\\
1&=E[mR_m]
=E[m]E[R_m]-b\operatorname{Var}(R_m).
\end{aligned}
$$

因此

$$
\begin{aligned}
E[R_i]-R_f
&=\frac{b}{E[m]}\operatorname{Cov}(R_i,R_m),\\
E[R_m]-R_f
&=\frac{b}{E[m]}\operatorname{Var}(R_m),\\
\Longrightarrow\quad
E[R_i]-R_f
&=\frac{\operatorname{Cov}(R_i,R_m)}
{\operatorname{Var}(R_m)}
(E[R_m]-R_f)=\beta_i(E[R_m]-R_f).
\end{aligned}
$$

#### 3.3.5 Factor model pricing
线性 factor SDF 给出 beta pricing。

$$
\begin{aligned}
m&=a-b'f,\\
1&=E[mR_i]
=E[m]E[R_i]-b'\operatorname{Cov}(f,R_i),\\
E[R_i]-R_f
&=\frac{b'}{E[m]}\operatorname{Cov}(f,R_i).
\end{aligned}
$$

若

$$
\begin{aligned}
\beta_i
&=\operatorname{Cov}(R_i,f)\operatorname{Var}(f)^{-1},
\end{aligned}
$$

则可写成

$$
\boxed{
E[R_i]-R_f=\beta_i'\lambda_f.
}
$$

## 4. 动态最优选择的两种方法
### 4.1 题型
#### 4.1.1 从 portfolio choice 到 HJB
**题目入口**：看到 continuous-time portfolio choice、consumption-investment、Merton problem，先写 state dynamics，再写 HJB 和 FOC。

连续时间投资消费问题：

$$
\begin{aligned}
\left\{
\begin{aligned}
dW_t
&=
\big[rW_t+\pi_t'(\mu-r1)-c_t\big]dt
+\pi_t'\sigma dB_t,\\
V(t,w)
&=
\max_{\{\pi_s,c_s\}}
E_t\left[
\int_t^T e^{-\rho(s-t)}u(c_s)ds
+e^{-\rho(T-t)}U(W_T)
\right].
\end{aligned}
\right.
&\implies
0=
\max_{c,\pi}
\left\{
u(c)
+V_t
+V_w[rw+\pi'(\mu-r1)-c]
+\frac12V_{ww}\pi'\Sigma\pi
-\rho V
\right\}\\
&\implies
\left\{
\begin{aligned}
u'(c)
&=V_w,\\
0
&=V_w(\mu-r1)+V_{ww}\Sigma\pi,\\
\pi^*
&=
-\frac{V_w}{V_{ww}}\Sigma^{-1}(\mu-r1).
\end{aligned}
\right.
\end{aligned}
$$

这和静态 mean-variance demand 对应：

$$
\begin{aligned}
\pi^*
&=
\underbrace{-\frac{V_w}{wV_{ww}}}_{\text{risk tolerance / wealth}}
w\Sigma^{-1}(\mu-r1).
\end{aligned}
$$

结论：

$$
\boxed{
\text{dynamic optimization}
\Longrightarrow
V_w\text{ is marginal utility of wealth}
\Longrightarrow
\text{portfolio demand depends on risk tolerance}.
}
$$

### 4.2 解法
#### 4.2.1 Martingale method
martingale method 把动态问题变成静态预算问题：

$$
\begin{aligned}
\max_{\{c_t\}}\quad
&E\left[\int_0^T e^{-\rho t}u(c_t)dt+e^{-\rho T}U(W_T)\right]\\
\text{s.t.}\quad
&E\left[\int_0^T \xi_tc_tdt+\xi_TW_T\right]\le W_0\\
\implies\quad
e^{-\rho t}u'(c_t)
&=\lambda\xi_t.
\end{aligned}
$$

适合：complete markets、消费/终值 payoff 可直接用 SPD 定价。

#### 4.2.2 SDF pricing vs martingale method

$$
\left\{
\begin{aligned}
\text{SDF / SPD pricing}
&:\quad
X_T\mapsto P_t=E_t\left[\frac{\xi_T}{\xi_t}X_T\right],
\qquad
\text{price a given payoff},\\
\text{risk-neutral martingale pricing}
&:\quad
\frac{S_t}{B_t}=E_t^Q\left[\frac{S_T}{B_T}\right],
\qquad
\text{change measure then price},\\
\text{martingale method}
&:\quad
\max_{\{c_t,W_T\}}E[U]
\quad\text{s.t.}\quad
E\left[\int_0^T\xi_tc_tdt+\xi_TW_T\right]\le W_0\\
&\implies
u'(c_t)=\lambda e^{\rho t}\xi_t,
\qquad
\text{solve an optimal choice problem}.
\end{aligned}
\right.
$$

#### 4.2.3 Dynamic programming / HJB
HJB 保留状态变量，用局部最优化：

$$
\begin{aligned}
\left\{
\begin{aligned}
dW_t
&=
\big[rW_t+\pi_t'(\mu-r1)-c_t\big]dt
+\pi_t'\sigma dB_t,\\
V(t,w)
&=
\max_{\{\pi_s,c_s\}}
E_t\left[\int_t^T e^{-\rho(s-t)}u(c_s)ds
+e^{-\rho(T-t)}U(W_T)\right].
\end{aligned}
\right.
&\implies
0=\max_{\pi,c}
\left\{
u(c)-\rho V
+V_t
+V_w\big[rw+\pi'(\mu-r1)-c\big]
+\frac12V_{ww}\pi'\Sigma\pi
\right\}\\
&\implies
\left\{
\begin{aligned}
u'(c^*)&=V_w,\\
\pi^*
&=-\frac{V_w}{V_{ww}}\Sigma^{-1}(\mu-r1).
\end{aligned}
\right.
\end{aligned}
$$

所以动态 portfolio demand 是静态 mean-variance demand 的动态版本：

$$
\begin{aligned}
\pi^*
&=
\underbrace{\left(-\frac{V_w}{V_{ww}}\right)}_{\text{risk tolerance in wealth}}
\Sigma^{-1}(\mu-r1).
\end{aligned}
$$

适合：状态变量多、约束、labor income、optimal stopping、incomplete market。

#### 4.2.4 两种方法的关系

$$
\begin{aligned}
\text{martingale method}
&:\quad \text{global budget + FOC},\\
\text{HJB}
&:\quad \text{local Bellman equation + verification},\\
\text{same complete-market solution}
&:\quad u'(c_t)\propto \xi_t.
\end{aligned}
$$

#### 4.2.5 考试题：HJB、欧式期权、美式期权与最优卖出时机
##### （1）题干
设 physical measure $P$ 下，标的资产价格满足

$$
\begin{aligned}
dS_t
&=(\mu-q)S_tdt+\sigma S_tdW_t^P,
\qquad
r>0,\quad q\ge0,\quad \sigma>0.
\end{aligned}
$$

无风险资产满足 $dB_t=rB_tdt$。这里 $\mu$ 表示股票的 total expected return，$q$ 是连续分红率，因此 ex-dividend price 的 physical drift 是 $\mu-q$。若无分红，则 $q=0$。考虑到期日为 $T$、执行价为 $K$ 的欧式期权和美式期权。

##### （2）题目
1. 将股票 dynamics 从 physical measure $P$ 改写成 risk-neutral measure $Q$ 下的 dynamics。
2. 写出欧式期权价格的 risk-neutral pricing formula，并推导其 Black-Scholes PDE。
3. 写出美式期权的 optimal stopping 表达式，并说明它和欧式期权的本质区别。
4. 写出美式期权满足的 variational inequality，并解释 continuation region、exercise region、value matching 和 smooth pasting。
5. 对不支付红利股票，说明 American call 为什么不应提前行权；American put 为什么可能提前行权。
6. 考虑一个“最优卖出资产”的 American-style stopping problem：投资者持有一单位资产 $X_t$，若卖出需支付固定交易成本 $K>0$，卖出净收益为 $X_\tau-K$。若

   $$
   \begin{aligned}
   dX_t&=\mu X_tdt+\sigma X_tdW_t,
   \qquad \mu<\beta,
   \end{aligned}
   $$

   求最优卖出阈值 $x^*$，并解释什么时候卖出合适。

##### （3）解析
**1. 从 physical measure 改成 risk-neutral measure**

先列出系统：

$$
\left\{
\begin{aligned}
dS_t&=\mu S_tdt+\sigma S_tdW_t^P,
&&\text{(physical total-return notation, no dividend)},\\
dS_t&=(\mu-q)S_tdt+\sigma S_tdW_t^P,
&&\text{(ex-dividend price with dividend yield }q\text{)},\\
dB_t&=rB_tdt,
&&\text{(money market account)},\\
\theta&=\frac{\mu-r}{\sigma},
&&\text{(market price of risk)},\\
dW_t^Q&=dW_t^P+\theta dt.
&&\text{(Brownian drift shift)}
\end{aligned}
\right.
$$

因此

$$
\begin{aligned}
dW_t^P
&=dW_t^Q-\theta dt
=dW_t^Q-\frac{\mu-r}{\sigma}dt.
\end{aligned}
$$

代回股票 dynamics：

$$
\begin{aligned}
dS_t
&=(\mu-q)S_tdt+\sigma S_t
\left(dW_t^Q-\frac{\mu-r}{\sigma}dt\right)\\
&=(\mu-q)S_tdt+\sigma S_tdW_t^Q-(\mu-r)S_tdt=(r-q)S_tdt+\sigma S_tdW_t^Q.
\end{aligned}
$$

所以 ex-dividend stock price 在 $Q$ 下 drift 为 $r-q$：

$$
\boxed{
dS_t=(r-q)S_tdt+\sigma S_tdW_t^Q.
}
$$

这里的逻辑是：

$$
\begin{aligned}
\text{change of measure}
&\Longleftrightarrow
dW^Q=dW^P+\theta dt,\\
\text{risk-neutral drift}
&\Longleftrightarrow
\text{total expected return }=r,\\
\text{ex-dividend price drift}
&=r-q.
\end{aligned}
$$

**2. 欧式期权：terminal payoff pricing**

欧式期权只能在 $T$ 行权，故价格是 fixed terminal payoff 的定价：

$$
\begin{aligned}
V^E(t,S)
&=
E_t^Q\left[
e^{-r(T-t)}g(S_T)
\right],
\end{aligned}
$$

其中 call 和 put 的 payoff 分别为

$$
\left\{
\begin{aligned}
g_C(S_T)&=(S_T-K)^+,\\
g_P(S_T)&=(K-S_T)^+.
\end{aligned}
\right.
$$

由 Feynman-Kac / no-arbitrage PDE：

$$
\begin{aligned}
0
&=
V_t^E
+(r-q)SV_S^E
+\frac12\sigma^2S^2V_{SS}^E
-rV^E,\\
V^E(T,S)&=g(S).
\end{aligned}
$$

欧式期权没有 stopping choice，只有 terminal condition。

**3. 美式期权：optimal stopping problem**

美式期权允许持有人选择任意 stopping time $\tau\in[t,T]$ 行权：

$$
\begin{aligned}
V^A(t,S)
&=
\sup_{\tau\in[t,T]}
E_t^Q\left[
e^{-r(\tau-t)}h(S_\tau)
\right].
\end{aligned}
$$

其中

$$
\left\{
\begin{aligned}
h_C(S)&=(S-K)^+,\\
h_P(S)&=(K-S)^+.
\end{aligned}
\right.
$$

因此：

$$
\boxed{
\text{European option}
=\text{terminal value problem},
\qquad
\text{American option}
=\text{optimal stopping / free-boundary problem}.
}
$$

**4. 美式期权的 HJB / variational inequality**

在每个点 $(t,S)$，持有人比较：

$$
\left\{
\begin{aligned}
\text{continue}
&:\quad
V_t+(r-q)SV_S+\frac12\sigma^2S^2V_{SS}-rV=0,\\
\text{exercise}
&:\quad
V=h(S).
\end{aligned}
\right.
$$

合并成 variational inequality：

$$
\boxed{
\max\left\{
V_t+(r-q)SV_S+\frac12\sigma^2S^2V_{SS}-rV,\;
h(S)-V
\right\}=0.
}
$$

分区理解：

1. **Continuation region**

   $$
   \begin{aligned}
   V(t,S)>h(S)
   &\Longrightarrow
   V_t+(r-q)SV_S+\frac12\sigma^2S^2V_{SS}-rV=0.
   \end{aligned}
   $$

2. **Exercise region**

   $$
   \begin{aligned}
   V(t,S)=h(S)
   &\Longrightarrow
   \text{immediate exercise is optimal}.
   \end{aligned}
   $$

3. **Free boundary：value matching 和 smooth pasting**

   若边界为 $S^*(t)$，通常满足

   $$
   \begin{aligned}
   V(t,S^*(t))&=h(S^*(t)),
   &&\text{(value matching)},\\
   V_S(t,S^*(t))&=h'(S^*(t)),
   &&\text{(smooth pasting)}.
   \end{aligned}
   $$

   value matching 的含义是：在最优行权边界上，继续持有和立刻行权必须给出同一个价值；否则边界不是最优边界。

   $$
   \begin{aligned}
   V(t,S^*)>h(S^*)
   &\Longrightarrow
   \text{应该继续，不该行权},\\
   V(t,S^*)<h(S^*)
   &\Longrightarrow
   \text{应该更早行权}.
   \end{aligned}
   $$

   smooth pasting 的含义是：边界由最优化内生决定，价值函数和 payoff 不仅 level 接上，斜率也要接上；否则在边界附近可以微调行权点来提高价值。

   对 American put，$h(S)=K-S$，所以

   $$
   \begin{aligned}
   P^A(t,S^*(t))&=K-S^*(t),\\
   P_S^A(t,S^*(t))&=-1.
   \end{aligned}
   $$

   对 American call，$h(S)=S-K$，所以

   $$
   \begin{aligned}
   C^A(t,S^*(t))&=S^*(t)-K,\\
   C_S^A(t,S^*(t))&=1.
   \end{aligned}
   $$

**5. 什么时候提前行权**

1. **American call, no dividend**

   当 $q=0$ 时，提前行权不优。因为继续持有 call 至少保留上行选择权，同时还推迟支付 $K$：

   $$
   \begin{aligned}
   C^E(t,S)
   &=E_t^Q[e^{-r(T-t)}(S_T-K)^+]\\
   &\ge E_t^Q[e^{-r(T-t)}(S_T-K)]\\
   &=S_t-Ke^{-r(T-t)}\\
   &\ge S_t-K.
   \end{aligned}
   $$

   所以

   $$
   \boxed{
   C^A(t,S)=C^E(t,S),
   \qquad
   \text{no-dividend American call 不提前行权}.
   }
   $$

2. **American call with dividend**

   若 $q>0$，提前行权可能有价值，因为行权后持有股票可以获得 dividend，而继续持有 call 拿不到 dividend。比较逻辑：

   $$
   \begin{aligned}
   \text{exercise benefit}
   &=
   \text{dividend captured},\\
   \text{exercise cost}
   &=
   \text{lost option value}
   +\text{early payment of }K.
   \end{aligned}
   $$

3. **American put, even no dividend**

   put 提前行权可能最优，因为行权后可以立刻收到 $K$，获得执行价的时间价值：

   $$
   \begin{aligned}
   \text{exercise now}
   &:\quad K-S_t,\\
   \text{continue}
   &:\quad \text{keep downside insurance}.
   \end{aligned}
   $$

   当 $S_t$ 足够低时，继续等待的额外下行价值变小，而立刻拿到 $K$ 的时间价值变大，因此提前行权可能最优。

**6. 最优卖出资产：什么时候卖出合适**

这是一个 American-style stopping problem。价值函数：

$$
\begin{aligned}
V(x)
&=
\sup_{\tau\ge0}
E_x\left[
e^{-\beta\tau}(X_\tau-K)
\right].
\end{aligned}
$$

HJB / variational inequality：

$$
\boxed{
\max\left\{
\frac12\sigma^2x^2V''(x)+\mu xV'(x)-\beta V(x),\;
x-K-V(x)
\right\}=0.
}
$$

若最优策略是达到阈值 $x^*$ 时卖出，则：

1. **Continuation region：$x<x^*$**

   $$
   \begin{aligned}
   \frac12\sigma^2x^2V''(x)+\mu xV'(x)-\beta V(x)=0.
   \end{aligned}
   $$

   猜解 $V(x)=Ax^\gamma$，得到 characteristic equation：

   $$
   \begin{aligned}
   \frac12\sigma^2\gamma(\gamma-1)+\mu\gamma-\beta=0.
   \end{aligned}
   $$

   取正根 $\gamma>1$：

   $$
   \begin{aligned}
   \gamma
   &=
   \frac{
   -(\mu-\frac12\sigma^2)
   +\sqrt{(\mu-\frac12\sigma^2)^2+2\beta\sigma^2}
   }{\sigma^2}.
   \end{aligned}
   $$

2. **Stopping region：$x\ge x^*$**

   $$
   \begin{aligned}
   V(x)&=x-K.
   \end{aligned}
   $$

3. **Boundary conditions**

   $$
   \left\{
   \begin{aligned}
   A(x^*)^\gamma&=x^*-K,
   &&\text{(value matching)},\\
   A\gamma(x^*)^{\gamma-1}&=1,
   &&\text{(smooth pasting)}.
   \end{aligned}
   \right.
   $$

   两式相除：

   $$
   \begin{aligned}
   \frac{A\gamma(x^*)^{\gamma-1}}
   {A(x^*)^\gamma}
   &=
   \frac{1}{x^*-K}\\
   \Longleftrightarrow\quad
   \frac{\gamma}{x^*}
   &=
   \frac{1}{x^*-K}\\
   \Longleftrightarrow\quad
   \gamma(x^*-K)&=x^*\\
   \Longleftrightarrow\quad
   \boxed{
   x^*=\frac{\gamma}{\gamma-1}K.
   }
   \end{aligned}
   $$

因此最优卖出规则为：

$$
\boxed{
\tau^* =
\inf\{t\ge0:X_t\ge x^*\},
\qquad
x^*=\frac{\gamma}{\gamma-1}K.
}
$$

经济含义：

$$
\begin{aligned}
x<x^*
&\Longrightarrow
\text{继续等待，上行 option value 大于立刻卖出价值},\\
x\ge x^*
&\Longrightarrow
\text{立刻卖出，锁定 }X_t-K.
\end{aligned}
$$

#### 4.2.6 Merton problem 闭式解模板
看到 infinite-horizon Merton problem、CRRA、constant investment opportunity set，直接猜 homothetic value function，把 dollar portfolio 写成 wealth share。

设

$$
\left\{
\begin{aligned}
dW_t
&=
\left[rW_t+\pi_t'(\mu-r1)-c_t\right]dt
+\pi_t'\sigma dB_t,\\
u(c)
&=\frac{c^{1-\gamma}}{1-\gamma},\\
\Sigma&:=\sigma\sigma',\qquad
\mu^e:=\mu-r1.
\end{aligned}
\right.
$$

HJB：

$$
\begin{aligned}
0
&=
\max_{c,\pi}
\left\{
\frac{c^{1-\gamma}}{1-\gamma}
-\rho V
+V_w(rw+\pi'\mu^e-c)
+\frac12V_{ww}\pi'\Sigma\pi
\right\}.
\end{aligned}
$$

CRRA 下猜

$$
\begin{aligned}
V(w)
&=A\frac{w^{1-\gamma}}{1-\gamma},\\
V_w&=Aw^{-\gamma},\\
V_{ww}&=-\gamma Aw^{-\gamma-1}.
\end{aligned}
$$

FOC 给出

$$
\left\{
\begin{aligned}
c^{-\gamma}&=V_w=Aw^{-\gamma},\\
V_w\mu^e+V_{ww}\Sigma\pi&=0.
\end{aligned}
\right.
$$

因此

$$
\boxed{
\begin{aligned}
\frac{c^*}{w}
&=A^{-1/\gamma}
=:\kappa,\\
\frac{\pi^*}{w}
&=
\frac{1}{\gamma}\Sigma^{-1}\mu^e
=\frac{1}{\gamma}\Sigma^{-1}(\mu-r1).
\end{aligned}
}
$$

消费率由 HJB 常数项 pin down。令

$$
\begin{aligned}
\phi&:=\mu^{e\prime}\Sigma^{-1}\mu^e,
\qquad
c=\kappa w,\qquad
\pi=w\omega.
\end{aligned}
$$

最优 risky share 是 $\omega^*=\frac1\gamma\Sigma^{-1}\mu^e$，且

$$
\begin{aligned}
\omega^{*\prime}\mu^e
-\frac{\gamma}{2}\omega^{*\prime}\Sigma\omega^*
&=
\frac{1}{2\gamma}\phi.
\end{aligned}
$$

代回 HJB：

$$
\begin{aligned}
0
&=
\frac{\kappa^{1-\gamma}}{(1-\gamma)A}
-\frac{\rho}{1-\gamma}
+r
+\frac{1}{2\gamma}\phi
-\kappa\\
&=
\frac{\kappa}{1-\gamma}
-\frac{\rho}{1-\gamma}
+r
+\frac{1}{2\gamma}\phi
-\kappa\\
&=
\frac{\gamma\kappa-\rho}{1-\gamma}
+r+\frac{1}{2\gamma}\phi.
\end{aligned}
$$

所以

$$
\boxed{
\kappa =
\frac{
\rho-(1-\gamma)\left(r+\frac{1}{2\gamma}\mu^{e\prime}\Sigma^{-1}\mu^e\right)
}{\gamma}.
}
$$

考试速记：

$$
\boxed{
\begin{aligned}
\text{myopic risky share}
&:\quad
\omega^*=\frac1\gamma\Sigma^{-1}(\mu-r1),\\
\text{dollar investment}
&:\quad
\pi^*=W_t\omega^*,\\
\text{consumption}
&:\quad
c_t^*=\kappa W_t.
\end{aligned}
}
$$

可行性通常要求 $\kappa>0$，并配合 transversality condition 排除爆炸解。
### 4.3 证明
#### 4.3.1 HJB derivation
动态规划给出 HJB 和最优控制。

$$
\begin{aligned}
\left\{
\begin{aligned}
dW_t
&=
\big[rW_t+\pi_t'(\mu-r1)-c_t\big]dt
+\pi_t'\sigma dB_t,\\
V(t,w)
&=
\max_{\pi,c}
E_t\left[\int_t^T e^{-\rho(s-t)}u(c_s)ds+e^{-\rho(T-t)}U(W_T)\right].
\end{aligned}
\right.
&\implies
0=\max_{\pi,c}
\left\{
u(c)-\rho V+V_t
+V_w[rw+\pi'(\mu-r1)-c]
+\frac12V_{ww}\pi'\Sigma\pi
\right\}\\
&\implies
\left\{
\begin{aligned}
u'(c^*)&=V_w,\\
\pi^*
&=
-\frac{V_w}{V_{ww}}\Sigma^{-1}(\mu-r1).
\end{aligned}
\right.
\end{aligned}
$$

#### 4.3.2 Optimal selling threshold
卖出阈值 $x^*=\frac{\gamma}{\gamma-1}K$。

$$
\begin{aligned}
V(x)
&=
\sup_{\tau\ge0}E_x[e^{-\beta\tau}(X_\tau-K)],\\
dX_t&=\mu X_tdt+\sigma X_tdW_t.
\end{aligned}
$$

Continuation region：

$$
\begin{aligned}
\frac12\sigma^2x^2V''+\mu xV'-\beta V=0.
\end{aligned}
$$

猜 $V(x)=Ax^\gamma$：

$$
\begin{aligned}
\frac12\sigma^2\gamma(\gamma-1)+\mu\gamma-\beta=0.
\end{aligned}
$$

边界条件：

$$
\left\{
\begin{aligned}
A(x^*)^\gamma&=x^*-K,\\
A\gamma(x^*)^{\gamma-1}&=1.
\end{aligned}
\right.
$$

两式相除：

$$
\begin{aligned}
\frac{\gamma}{x^*}
&=\frac{1}{x^*-K}\\
\Longleftrightarrow\quad
x^*&=\frac{\gamma}{\gamma-1}K.
\end{aligned}
$$

## 5. 衍生品与债券都是定价方程的应用
### 5.1 题型
#### 5.1.1 从 fundamental pricing equation 到 options
**题目入口**：看到 option、derivative payoff、replication，先写 fundamental pricing equation；再根据题目选择 risk-neutral expectation 或 PDE。

任何 derivative payoff $X_T=g(S_T)$：

$$
\begin{aligned}
V_t
&=E_t\left[\frac{\xi_T}{\xi_t}g(S_T)\right]
=B_tE_t^Q\left[\frac{g(S_T)}{B_T}\right]
=e^{-r(T-t)}E_t^Q[g(S_T)]
&&\text{if }r\text{ is constant}.
\end{aligned}
$$

Black-Scholes 中：

$$
\left\{
\begin{aligned}
dS_t&=rS_tdt+\sigma S_tdW_t^Q,\\
C_t&=e^{-r(T-t)}E_t^Q[(S_T-K)^+].
\end{aligned}
\right.
$$

复制组合给 PDE：

$$
\begin{aligned}
0
&=C_t+rSC_S+\frac12\sigma^2S^2C_{SS}-rC.
\end{aligned}
$$

因此：

$$
\boxed{
\text{replication PDE}
\Longleftrightarrow
\text{risk-neutral expectation}
\Longleftrightarrow
\text{SDF pricing}.
}
$$

#### 5.1.2 从 fundamental pricing equation 到 bonds
**题目入口**：看到 zero-coupon bond、yield、term structure，先把 bond 当成 payoff 为 $1$ 的资产。

zero-coupon bond 的 payoff 是 $1$：

$$
\begin{aligned}
P(t,T)
&=E_t\left[\frac{\xi_T}{\xi_t}\right]=E_t^Q\left[e^{-\int_t^T r_sds}\right],\\
y(t,T)
&=-\frac{1}{T-t}\log P(t,T),\\
dr_t
&=\kappa(\theta-r_t)dt+\sigma dW_t^Q\\
\Longrightarrow\quad
P(t,T)
&=E_t^Q\left[
\exp\left(-\int_t^T r_sds\right)
\right].
\end{aligned}
$$

结论：

$$
\boxed{
\text{term structure}
\Longleftrightarrow
\text{choose }r_t\text{ dynamics under }Q
\Longleftrightarrow
\text{price }1\text{ payoff by SDF}.
}
$$

### 5.2 解法
#### 5.2.1 Options
Black-Scholes 可以用三种语言推导：

| 方法 | 核心 |
|---|---|
| replication / PDE | 用 $\Delta$ hedge 消除 Brownian risk |
| SDF direct pricing | $C_t=E_t[(\xi_T/\xi_t)(S_T-K)^+]$ |
| risk-neutral pricing | $C_t=e^{-r(T-t)}E_t^Q[(S_T-K)^+]$ |

它们本质相同：

$$
\begin{aligned}
\text{complete market}
\Longrightarrow
\text{unique hedge}
\Longrightarrow
\text{unique }Q
\Longrightarrow
\text{same option price}.
\end{aligned}
$$

#### 5.2.2 Bonds and term structure
zero-coupon bond price 是特殊 payoff $1$ 的价格：

$$
\begin{aligned}
P(t,T)
&=E_t\left[\frac{\xi_T}{\xi_t}\right]
=E_t^Q\left[e^{-\int_t^T r_sds}\right].
\end{aligned}
$$

term structure model 只是给 $r_t$ 一个动态，然后算这个 conditional expectation。
#### 5.2.3 Yield / forward / duration / Greeks 速查
Bond 题先把 price 转成 yield / forward，再决定是定义题、久期题还是 short-rate pricing 题。

| 对象 | 定义 | 作用 |
|---|---|---|
| zero-coupon price | $P(t,T)$ | payoff $1$ at $T$ 的今天价格 |
| continuously compounded yield | $y(t,T)=-\frac{1}{T-t}\log P(t,T)$ | 把 bond price 写成平均利率 |
| instantaneous forward rate | $f(t,T)=-\partial_T\log P(t,T)$ | $T$ 附近的边际远期利率 |
| duration | $D=-\frac{\partial\log P}{\partial y}$ | price 对 yield 的一阶敏感度 |
| convexity | $\mathcal C=\frac{1}{P}\frac{\partial^2P}{\partial y^2}$ | price 对 yield 的二阶敏感度 |

三条常用关系：

$$
\boxed{
\begin{aligned}
P(t,T)
&=\exp\left(-(T-t)y(t,T)\right),\\
P(t,T)
&=\exp\left(-\int_t^T f(t,u)\,du\right),\\
y(t,T)
&=\frac{1}{T-t}\int_t^T f(t,u)\,du.
\end{aligned}
}
$$

价格变动近似：

$$
\begin{aligned}
\frac{\Delta P}{P}
&\approx
-D\,\Delta y
+\frac12\mathcal C(\Delta y)^2.
\end{aligned}
$$

zero-coupon bond 若用 continuously compounded yield 表示，

$$
\begin{aligned}
P(t,T)&=e^{-y(T-t)},\\
D&=T-t,\\
\mathcal C&=(T-t)^2.
\end{aligned}
$$

Option Greeks 题先从 $V(t,S;\sigma,r,q)$ 的偏导数读 hedge 和风险暴露：

| Greek | 定义 | 含义 |
|---|---|---|
| Delta | $\Delta=V_S$ | underlying price 一阶暴露；delta hedge 用它 |
| Gamma | $\Gamma=V_{SS}$ | convexity / delta sensitivity |
| Theta | $\Theta=V_t$ | time decay |
| Vega | $\mathcal V=V_\sigma$ | volatility sensitivity |
| Rho | $\rho_r=V_r$ | interest-rate sensitivity |

Black-Scholes with dividend yield 下，call 的常用 Greeks：

$$
\left\{
\begin{aligned}
\Delta_C
&=e^{-q\tau}\Phi(d_1),\\
\Gamma_C
&=\frac{e^{-q\tau}\phi(d_1)}
{S\sigma\sqrt{\tau}},\\
\mathcal V_C
&=S e^{-q\tau}\phi(d_1)\sqrt{\tau}.
\end{aligned}
\right.
$$

put 的 delta：

$$
\begin{aligned}
\Delta_P
&=e^{-q\tau}\left(\Phi(d_1)-1\right).
\end{aligned}
$$

PDE 的经济含义：

$$
\boxed{
\underbrace{V_t}_{\text{time decay}}
+\underbrace{(r-q)SV_S}_{\text{risk-neutral carry}}
+\underbrace{\frac12\sigma^2S^2V_{SS}}_{\text{convexity value}}
-\underbrace{rV}_{\text{financing cost}}
=0.
}
$$

### 5.3 证明
#### 5.3.1 Vasicek affine bond pricing

$$
\left\{
\begin{aligned}
dr_t&=\kappa(\theta-r_t)dt+\sigma dW_t^Q,\\
P(t,T)&=A(t,T)e^{-B(t,T)r_t},\\
P(T,T)&=1.
\end{aligned}
\right.
$$

Bond PDE：

$$
\begin{aligned}
0
&=
P_t+\kappa(\theta-r)P_r+\frac12\sigma^2P_{rr}-rP.
\end{aligned}
$$

Derivatives：

$$
\begin{aligned}
P_t&=\left(\frac{A_t}{A}-B_tr\right)P,\\
P_r&=-BP,\\
P_{rr}&=B^2P.
\end{aligned}
$$

代回并按 $r$ 分组：

$$
\begin{aligned}
0
&=
\frac{A_t}{A}-B_tr-\kappa\theta B+\kappa rB
+\frac12\sigma^2B^2-r\\
&=
\left(\frac{A_t}{A}-\kappa\theta B+\frac12\sigma^2B^2\right)
+r(-B_t+\kappa B-1).
\end{aligned}
$$

系数为零：

$$
\left\{
\begin{aligned}
B_t&=\kappa B-1,
\qquad B(T,T)=0,\\
\frac{A_t}{A}
&=
\kappa\theta B-\frac12\sigma^2B^2,
\qquad A(T,T)=1.
\end{aligned}
\right.
$$

因此：

$$
\boxed{
B(t,T)=\frac{1-e^{-\kappa(T-t)}}{\kappa}.
}
$$

#### 5.3.2 European option PDE
risk-neutral pricing 等价于 Black-Scholes PDE。

$$
\begin{aligned}
V^E(t,S)
&=E_t^Q[e^{-r(T-t)}g(S_T)],\\
dS_t&=(r-q)S_tdt+\sigma S_tdW_t^Q.
\end{aligned}
$$

Feynman-Kac：

$$
\boxed{
V_t+(r-q)SV_S+\frac12\sigma^2S^2V_{SS}-rV=0,
\qquad
V(T,S)=g(S).
}
$$

#### 5.3.3 Black-Scholes replication proof

$$
\left\{
\begin{aligned}
dS_t&=\mu S_tdt+\sigma S_tdW_t^P,\\
dB_t&=rB_tdt,\\
C_t&=C(t,S_t).
\end{aligned}
\right.
$$

Ito：

$$
\begin{aligned}
dC_t
&=
\left(C_t+\mu S C_S+\frac12\sigma^2S^2C_{SS}\right)dt
+\sigma SC_SdW_t^P.
\end{aligned}
$$

复制组合：

$$
\left\{
\begin{aligned}
\Pi_t&=\Delta_tS_t+\alpha_tB_t,\\
\Pi_t&=C_t,\\
d\Pi_t&=\Delta_tdS_t+\alpha_tdB_t.
\end{aligned}
\right.
$$

匹配 diffusion term：

$$
\begin{aligned}
\sigma SC_SdW_t^P
&=
\Delta_t\sigma SdW_t^P\\
\Longleftrightarrow\quad
\Delta_t&=C_S.
\end{aligned}
$$

由 $\alpha_tB_t=C_t-C_SS_t$：

$$
\begin{aligned}
d\Pi_t
&=C_S(\mu Sdt+\sigma SdW_t^P)
+r(C-C_SS)dt\\
&=
\left[rC+(\mu-r)SC_S\right]dt
+\sigma SC_SdW_t^P.
\end{aligned}
$$

令 $dC_t=d\Pi_t$：

$$
\begin{aligned}
C_t+\mu SC_S+\frac12\sigma^2S^2C_{SS}
&=
rC+(\mu-r)SC_S\\
\Longleftrightarrow\quad
\boxed{
C_t+rSC_S+\frac12\sigma^2S^2C_{SS}-rC=0.
}
\end{aligned}
$$

#### 5.3.4 Black-Scholes risk-neutral proof

$$
\left\{
\begin{aligned}
dS_t&=rS_tdt+\sigma S_tdW_t^Q,\\
C_t+rSC_S+\frac12\sigma^2S^2C_{SS}-rC&=0.
\end{aligned}
\right.
$$

Ito for discounted price：

$$
\begin{aligned}
d(e^{-rt}C_t)
&=
e^{-rt}\left(dC_t-rC_tdt\right)\\
&=
e^{-rt}\left[
C_t+rSC_S+\frac12\sigma^2S^2C_{SS}-rC
\right]dt
+e^{-rt}\sigma SC_SdW_t^Q\\
&=
e^{-rt}\sigma SC_SdW_t^Q.
\end{aligned}
$$

所以 $e^{-rt}C_t$ 是 $Q$-martingale：

$$
\begin{aligned}
e^{-rt}C_t
&=
E_t^Q[e^{-rT}g(S_T)]\\
\Longleftrightarrow\quad
\boxed{
C_t=e^{-r(T-t)}E_t^Q[g(S_T)].
}
\end{aligned}
$$

#### 5.3.5 Black-Scholes closed-form proof
令 $\tau=T-t$。在 $Q$ 下：

$$
\begin{aligned}
S_T
&=
S_t\exp\left[
\left(r-q-\frac12\sigma^2\right)\tau
+\sigma\sqrt{\tau}Z
\right],
\qquad Z\sim N(0,1).
\end{aligned}
$$

Call price：

$$
\begin{aligned}
C_t
&=e^{-r\tau}E_t^Q[(S_T-K)^+]\\
&=e^{-r\tau}
\left(
E_t^Q[S_T\mathbf 1_{\{S_T>K\}}]
-KQ(S_T>K)
\right).
\end{aligned}
$$

Exercise event：

$$
\begin{aligned}
S_T>K
&\Longleftrightarrow
Z>
\frac{\ln(K/S_t)-(r-q-\frac12\sigma^2)\tau}
{\sigma\sqrt{\tau}}\\
&\Longleftrightarrow
Z>-d_2,
\end{aligned}
$$

where

$$
\begin{aligned}
d_1&=
\frac{\ln(S_t/K)+(r-q+\frac12\sigma^2)\tau}
{\sigma\sqrt{\tau}},\\
d_2&=d_1-\sigma\sqrt{\tau}.
\end{aligned}
$$

第一项：

$$
\begin{aligned}
E_t^Q[S_T\mathbf 1_{\{S_T>K\}}]
&=
S_te^{(r-q)\tau}
E\left[
e^{-\frac12\sigma^2\tau+\sigma\sqrt{\tau}Z}
\mathbf 1_{\{Z>-d_2\}}
\right]\\
&=
S_te^{(r-q)\tau}
\int_{-d_2}^{\infty}
e^{-\frac12\sigma^2\tau+\sigma\sqrt{\tau}z}
\phi(z)dz\\
&=
S_te^{(r-q)\tau}
\int_{-d_2}^{\infty}
\phi(z-\sigma\sqrt{\tau})dz\\
&=
S_te^{(r-q)\tau}
\Phi(d_2+\sigma\sqrt{\tau})\\
&=
S_te^{(r-q)\tau}\Phi(d_1).
\end{aligned}
$$

第二项：

$$
\begin{aligned}
Q(S_T>K)
&=
Q(Z>-d_2)
=\Phi(d_2).
\end{aligned}
$$

因此：

$$
\boxed{
C_t =
S_te^{-q\tau}\Phi(d_1)
-Ke^{-r\tau}\Phi(d_2).
}
$$

Put price：

$$
\boxed{
P_t =
Ke^{-r\tau}\Phi(-d_2)
-S_te^{-q\tau}\Phi(-d_1).
}
$$

#### 5.3.6 Put-call parity proof

$$
\begin{aligned}
(S_T-K)^+-(K-S_T)^+
&=S_T-K.
\end{aligned}
$$

No-arbitrage pricing：

$$
\begin{aligned}
C_t-P_t
&=
E_t^Q\left[e^{-r\tau}(S_T-K)\right]\\
&=
e^{-r\tau}E_t^Q[S_T]-Ke^{-r\tau}\\
&=
S_te^{-q\tau}-Ke^{-r\tau}.
\end{aligned}
$$

$$
\boxed{
C_t-P_t=S_te^{-q\tau}-Ke^{-r\tau}.
}
$$

#### 5.3.7 American option variational inequality
美式期权是 continuation 和 exercise 的逐点最大值。

$$
\begin{aligned}
V^A(t,S)
&=
\sup_{\tau\in[t,T]}
E_t^Q[e^{-r(\tau-t)}h(S_\tau)].
\end{aligned}
$$

因此

$$
\boxed{
\max\left\{
V_t+(r-q)SV_S+\frac12\sigma^2S^2V_{SS}-rV,\;
h(S)-V
\right\}=0.
}
$$

自由边界：

$$
\left\{
\begin{aligned}
V(t,S^*) &=h(S^*),
&&\text{(value matching)},\\
V_S(t,S^*)&=h'(S^*).
&&\text{(smooth pasting)}
\end{aligned}
\right.
$$

#### 5.3.8 No-dividend American call 不提前行权
$q=0$ 时 American call = European call。

$$
\begin{aligned}
C^E(t,S)
&=E_t^Q[e^{-r\tau}(S_T-K)^+]\\
&\ge E_t^Q[e^{-r\tau}(S_T-K)]\\
&=S_t-Ke^{-r\tau}\\
&\ge S_t-K.
\end{aligned}
$$

$$
\boxed{
C^A(t,S)=C^E(t,S).
}
$$

#### 5.3.9 Bond pricing equation
zero-coupon bond 是 payoff $1$ 的定价。

$$
\begin{aligned}
P(t,T)
&=E_t^Q\left[e^{-\int_t^T r_sds}\right].
\end{aligned}
$$

若短利率模型为

$$
\begin{aligned}
dr_t&=\mu_r(t,r_t)dt+\sigma_r(t,r_t)dW_t^Q,
\end{aligned}
$$

则债券 PDE 为

$$
\boxed{
P_t+\mu_rP_r+\frac12\sigma_r^2P_{rr}-rP=0,
\qquad
P(T,T)=1.
}
$$

## 6. 信息、信念与价格发现
### 6.1 题型
#### 6.1.1 从信息到价格发现
**题目入口**：看到 information、order flow、Kyle、filtering，先把价格写成 conditional expectation。

信息模型把定价中的 conditional expectation 展开成 learning problem。

Kyle 型模型：

$$
\left\{
\begin{aligned}
v&\sim N(0,\sigma_v^2),\quad u\sim N(0,\sigma_u^2),\\
x&=\beta v,\\
y&=x+u=\beta v+u,\\
p&=E[v\mid y].
\end{aligned}
\right.
$$

joint normal projection：

$$
\begin{aligned}
p
&=E[v\mid y]
=E[v]+\frac{\operatorname{Cov}(v,y)}{\operatorname{Var}(y)}(y-E[y])
=\lambda y,
\qquad
\lambda
=\frac{\beta\sigma_v^2}{\beta^2\sigma_v^2+\sigma_u^2}.
\end{aligned}
$$

insider optimality：

$$
\begin{aligned}
\max_x x(v-\lambda x)
&\Longrightarrow
x=\frac{v}{2\lambda}
\Longrightarrow
\beta=\frac{1}{2\lambda}.
\end{aligned}
$$

equilibrium：

$$
\begin{aligned}
\beta&=\frac{1}{2\lambda},\\
\lambda&=\frac{\beta\sigma_v^2}{\beta^2\sigma_v^2+\sigma_u^2}\\
\Longrightarrow\quad
\lambda&=\frac{\sigma_v}{2\sigma_u},
\qquad
\beta=\frac{\sigma_u}{\sigma_v}.
\end{aligned}
$$

结论：

$$
\boxed{
\text{information}
\Longrightarrow
\text{order flow}
\Longrightarrow
E[v\mid y]
\Longrightarrow
\text{price impact / liquidity}.
}
$$

#### 6.1.2 从异质信念到均衡价格
**题目入口**：看到 heterogeneous beliefs、likelihood ratio、wealth shares，先写每个 agent 的 FOC，再用 belief link 和 market clearing 合并 SPD。

不同 agents 对同一 payoff 有不同 belief：

$$
\begin{aligned}
\eta_t
&:=\frac{dP^2}{dP^1}\bigg|_{\mathcal F_t},\\
e^{-\rho_i t}u_i'(c_t^i)
&=y_i\xi_t^i,\\
\xi_t^2
&=\eta_t\xi_t^1,\\
\sum_i c_t^i
&=\delta_t.
\end{aligned}
$$

因此均衡价格来自：

$$
\left\{
\begin{aligned}
\text{individual FOC}
&:\ e^{-\rho_i t}u_i'(c_t^i)=y_i\xi_t^i,\\
\text{belief link}
&:\ \xi_t^2=\eta_t\xi_t^1,\\
\text{market clearing}
&:\ \sum_i c_t^i=\delta_t,\\
\text{asset pricing}
&:\ S_t=E_t\left[\frac{\xi_T}{\xi_t}D_T\right].
\end{aligned}
\right.
$$

结论：

$$
\boxed{
\text{belief heterogeneity}
\Longrightarrow
\text{different SPD}
\Longrightarrow
\text{wealth-share dynamics}
\Longrightarrow
\text{prices, rates, risk premia}.
}
$$

#### 6.1.3 线性设定总表
看到 linear equilibrium、linear price rule、projection、Kyle、Grossman-Stiglitz 时，先把线性猜测写成系统，再用最优性、投影和 market clearing pin down 待定系数。

| 模型 | 线性设定 | 价格规则 / belief | 待定系数 | pin down 条件 |
|---|---|---|---|---|
| Bayesian linear signal | $s=a v+\varepsilon$ | $E[v\mid s]$ | posterior weight | joint normal projection |
| Grossman-Stiglitz | $p=\alpha+\beta s+\gamma x$ | partially revealing price | $\alpha,\beta,\gamma$ | filtering + market clearing |
| One-period Kyle | $x=\beta(v-v_0)$，$y=x+u$ | $p=v_0+\lambda y$ | $\beta,\lambda$ | insider FOC + market maker projection |
| Multi-period Kyle | $x_n=\beta_n(v-p_{n-1})$，$y_n=x_n+u_n$ | $p_n=E[v\mid y_1,\dots,y_n]$ | $\beta_n,\lambda_n,\Sigma_n$ | backward induction + filtering |
| Continuous-time Kyle | $\theta_t=\frac{\tilde v-P_t}{(1-t)\lambda}$，$Y_t=X_t+Z_t$ | $P_t=\bar v+\lambda Y_t$ | $\lambda,\Sigma_t$ | Kalman filtering + terminal revelation |

统一解题顺序：

$$
\boxed{
\begin{aligned}
\text{Step 1: choose linear conjecture}
&\Longrightarrow
\text{strategy / signal / price rule},\\
\text{Step 2: compute conditional expectation}
&\Longrightarrow
\text{projection coefficient},\\
\text{Step 3: impose optimality}
&\Longrightarrow
\text{agent demand or insider strategy},\\
\text{Step 4: impose equilibrium}
&\Longrightarrow
\text{market clearing / pricing consistency},\\
\text{Step 5: solve coefficients}
&\Longrightarrow
\beta,\lambda,\Sigma,\alpha,\gamma.
\end{aligned}
}
$$

最常用的投影公式：

$$
\begin{aligned}
E[v\mid z]
&=E[v]
+\operatorname{Cov}(v,z)\operatorname{Var}(z)^{-1}(z-E[z]),\\
z&=a v+\varepsilon
\Longrightarrow
\frac{\partial E[v\mid z]}{\partial z}
=\frac{a\operatorname{Var}(v)}
{a^2\operatorname{Var}(v)+\operatorname{Var}(\varepsilon)}.
\end{aligned}
$$

Kyle 类题的最短模板：

$$
\left\{
\begin{aligned}
\text{linear strategy}
&:\quad x=\beta(v-v_0),\\
\text{order flow}
&:\quad y=x+u,\\
\text{linear price}
&:\quad p=v_0+\lambda y,\\
\text{projection}
&:\quad
\lambda=\frac{\operatorname{Cov}(v,y)}{\operatorname{Var}(y)},\\
\text{optimality}
&:\quad
\beta=\frac{1}{2\lambda}.
\end{aligned}
\right.
$$

### 6.2 解法
核心问题不是“资产怎么由 payoff 定价”，而是“市场如何从交易和信号中学习 payoff”。

#### 6.2.1 信念更新：precision form
最常用的是正态-正态更新。设未知基本面为 $v$，先验为

$$
\begin{aligned}
v
&\sim N(m_0,\rho_0^{-1}),
\qquad
\rho_0:=\frac{1}{\operatorname{Var}(v)}.
\end{aligned}
$$

观察到带噪声信号

$$
\begin{aligned}
s_i
&=v+\varepsilon_i,
\qquad
\varepsilon_i\sim N(0,\rho_i^{-1}),
\qquad
\varepsilon_i\perp v.
\end{aligned}
$$

精度写法的核心规则：

$$
\boxed{
\text{posterior precision} =
\text{prior precision}
+
\text{signal precision}.
}
$$

##### （1）一期更新
观察一个信号 $s_1$：

$$
\begin{aligned}
\left\{
\begin{aligned}
\rho_{1}^{post}
&=\rho_0+\rho_1,\\
m_1
&=E[v\mid s_1] =
\frac{\rho_0m_0+\rho_1s_1}{\rho_0+\rho_1}.
\end{aligned}
\right.
\implies
v\mid s_1
&\sim
N\left(
\frac{\rho_0m_0+\rho_1s_1}{\rho_0+\rho_1},
\frac{1}{\rho_0+\rho_1}
\right).
\end{aligned}
$$

##### （2）两期更新
再观察 $s_2=v+\varepsilon_2$：

$$
\begin{aligned}
\left\{
\begin{aligned}
\rho_2^{post}
&=\rho_0+\rho_1+\rho_2,\\
m_2
&=E[v\mid s_1,s_2]\\
&=
\frac{\rho_0m_0+\rho_1s_1+\rho_2s_2}
{\rho_0+\rho_1+\rho_2}.
\end{aligned}
\right.
\implies
m_2
&=
\frac{(\rho_0+\rho_1)m_1+\rho_2s_2}
{(\rho_0+\rho_1)+\rho_2}.
\end{aligned}
$$

##### （3）三期更新
观察 $s_1,s_2,s_3$：

$$
\begin{aligned}
\left\{
\begin{aligned}
\rho_3^{post}
&=\rho_0+\rho_1+\rho_2+\rho_3,\\
m_3
&=E[v\mid s_1,s_2,s_3]\\
&=
\frac{\rho_0m_0+\rho_1s_1+\rho_2s_2+\rho_3s_3}
{\rho_0+\rho_1+\rho_2+\rho_3}.
\end{aligned}
\right.
\implies
m_3
&=
\frac{\rho_2^{post}m_2+\rho_3s_3}
{\rho_2^{post}+\rho_3}.
\end{aligned}
$$

##### （4）n 期更新
一般地，观察 $s_1,\dots,s_n$：

$$
\boxed{
\begin{aligned}
\left\{
\begin{aligned}
\rho_n^{post}
&=\rho_0+\sum_{i=1}^n\rho_i,\\
m_n
&=E[v\mid s_1,\dots,s_n]\\
&=
\frac{\rho_0m_0+\sum_{i=1}^n\rho_is_i}
{\rho_0+\sum_{i=1}^n\rho_i},\\
\operatorname{Var}(v\mid s_1,\dots,s_n)
&=\frac{1}{\rho_n^{post}}.
\end{aligned}
\right.
\implies
v\mid s_1,\dots,s_n
&\sim
N\left(m_n,\frac{1}{\rho_n^{post}}\right).
\end{aligned}
}
$$

若每期信号精度相同，$\rho_i=\rho_\varepsilon$，则

$$
\begin{aligned}
\rho_n^{post}
&=\rho_0+n\rho_\varepsilon,\\
m_n
&=
\frac{\rho_0m_0+\rho_\varepsilon\sum_{i=1}^n s_i}
{\rho_0+n\rho_\varepsilon} =
\frac{\rho_0}{\rho_0+n\rho_\varepsilon}m_0
+
\frac{n\rho_\varepsilon}{\rho_0+n\rho_\varepsilon}\bar s_n.
\end{aligned}
$$

其中 $\bar s_n=\frac1n\sum_{i=1}^n s_i$。

##### （5）无限期更新
若

$$
\begin{aligned}
\sum_{i=1}^{\infty}\rho_i
&=\infty,
\end{aligned}
$$

则

$$
\begin{aligned}
\rho_n^{post}
&\to\infty,\\
\operatorname{Var}(v\mid s_1,\dots,s_n)
&=\frac{1}{\rho_n^{post}}
\to0.
\end{aligned}
$$

这表示信息最终完全揭示 $v$。若信号独立同分布且 $s_i=v+\varepsilon_i$，则

$$
\begin{aligned}
\bar s_n
&\to v,\\
m_n
&=
\frac{\rho_0}{\rho_0+n\rho_\varepsilon}m_0
+
\frac{n\rho_\varepsilon}{\rho_0+n\rho_\varepsilon}\bar s_n
\to v.
\end{aligned}
$$

##### （6）线性信号的一般形式
若信号不是 $s_i=v+\varepsilon_i$，而是

$$
\begin{aligned}
s_i
&=a_iv+\varepsilon_i,
\qquad
\varepsilon_i\sim N(0,\rho_{\varepsilon i}^{-1}),
\end{aligned}
$$

则每个信号贡献的精度是 $a_i^2\rho_{\varepsilon i}$：

$$
\left\{
\begin{aligned}
\rho_n^{post}
&=\rho_0+\sum_{i=1}^n a_i^2\rho_{\varepsilon i},\\
m_n
&=
\frac{\rho_0m_0+\sum_{i=1}^n a_i\rho_{\varepsilon i}s_i}
{\rho_0+\sum_{i=1}^n a_i^2\rho_{\varepsilon i}}.
\end{aligned}
\right.
$$

直觉：

$$
\begin{aligned}
\text{higher precision signal}
&\Longrightarrow
\text{higher weight in posterior mean},\\
\text{more independent signals}
&\Longrightarrow
\text{posterior variance declines},\\
\text{infinite precise-enough signals}
&\Longrightarrow
\text{belief converges to truth}.
\end{aligned}
$$

#### 6.2.2 Grossman-Stiglitz

$$
\left\{
\begin{aligned}
v&\sim N(\bar v,\sigma_v^2),
&&\text{(asset payoff)},\\
s&=v+\varepsilon,
&&\text{(private signal)},\\
p&=\alpha+\beta s+\gamma x,
&&\text{(partially revealing price)},\\
X_i^*
&=\frac{E[v\mid \mathcal I_i]-p}
{\lambda\operatorname{Var}(v\mid \mathcal I_i)},
&&\text{(CARA-normal demand)}.
\end{aligned}
\right.
$$

信息价值由 certainty equivalent 差给出：

$$
\begin{aligned}
\Delta CE
&=
E\left[
\frac{(E[v\mid s,p]-p)^2}
{2\lambda\operatorname{Var}(v\mid s,p)} -
\frac{(E[v\mid p]-p)^2}
{2\lambda\operatorname{Var}(v\mid p)}
\right],\\
\text{buy information}
&\Longleftrightarrow
\Delta CE\ge c.
\end{aligned}
$$

因此：

$$
\begin{aligned}
\text{costly information}
&\Longrightarrow
\text{some agents informed}\\
&\Longrightarrow
\text{price partially reveals signal}\\
&\Longrightarrow
\text{information value pinned down by CE gain}.
\end{aligned}
$$

#### 6.2.3 Glosten-Milgrom and Kyle
两者都在讲 adverse selection，但交易机制不同：

| 模型 | 做市商看到什么 | 价格规则 | 核心对象 |
|---|---|---|---|
| Glosten-Milgrom | buy/sell direction | bid/ask quotes | spread |
| Kyle | total order flow $y=x+u$ | $p=E[v\mid y]$ | price impact $\lambda$ |

共同逻辑：

$$
\begin{aligned}
\text{order flow}
\Longrightarrow
\text{Bayesian updating}
\Longrightarrow
\text{price impact / spread}
\Longrightarrow
\text{liquidity cost}.
\end{aligned}
$$

##### （1）Kyle model 分类总结
Kyle 系列模型都围绕同一条链：

$$
\boxed{
\text{private information}
\Longrightarrow
\text{strategic order }x
\Longrightarrow
\text{total order flow }y=x+u
\Longrightarrow
p=E[v\mid y]
\Longrightarrow
\lambda\text{ measures illiquidity}.
}
$$

1. **One-period Kyle**

   模型系统：

   $$
   \left\{
   \begin{aligned}
   v&\sim N(v_0,\Sigma_0),
   &&\text{(terminal value)},\\
   u&\sim N(0,\sigma^2),\qquad u\perp v,
   &&\text{(noise order)},\\
   x&=\beta(v-v_0),
   &&\text{(insider linear strategy)},\\
   y&=x+u,
   &&\text{(total order flow)},\\
   p&=E[v\mid y]=v_0+\lambda y,
   &&\text{(market maker pricing)}.
   \end{aligned}
   \right.
   $$

   insider optimality：

   $$
   \begin{aligned}
   \max_x E[(v-p)x\mid v]
   &=
   \max_x (v-v_0-\lambda x)x\\
   \Longrightarrow\quad
   x
   &=\frac{v-v_0}{2\lambda}
   =\beta(v-v_0),\\
   \beta&=\frac{1}{2\lambda}.
   \end{aligned}
   $$

   market maker regression：

   $$
   \begin{aligned}
   \lambda
   &=
   \frac{\operatorname{Cov}(v,y)}{\operatorname{Var}(y)}
   =
   \frac{\beta\Sigma_0}{\beta^2\Sigma_0+\sigma^2}.
   \end{aligned}
   $$

   联立求解：

   $$
   \begin{aligned}
   \beta&=\frac{1}{2\lambda},
   \qquad
   \lambda=
   \frac{\beta\Sigma_0}{\beta^2\Sigma_0+\sigma^2}\\
   \Longrightarrow\quad
   \boxed{
   \beta=\frac{\sigma}{\sqrt{\Sigma_0}},
   \qquad
   \lambda=\frac{\sqrt{\Sigma_0}}{2\sigma}.
   }
   \end{aligned}
   $$

   信息揭示：

   $$
   \begin{aligned}
p
&=v_0+\lambda[\beta(v-v_0)+u]=\frac{v+v_0}{2}+\lambda u,\\
   \operatorname{Var}(p)
   &=\frac12\Sigma_0.
   \end{aligned}
   $$

   单期模型中价格揭示一半先验不确定性。

2. **Two-period / finite-period Kyle**

   两期模型把交易拆成两次，做市商逐期更新 belief：

   $$
   \left\{
   \begin{aligned}
   y_1&=x_1+u_1,
   &&u_1\sim N(0,\sigma^2/2),\\
   p_1&=E[v\mid y_1]=v_0+\lambda_1y_1,\\
   y_2&=x_2+u_2,
   &&u_2\sim N(0,\sigma^2/2),\\
   p_2&=E[v\mid y_1,y_2]=p_1+\lambda_2y_2.
   \end{aligned}
   \right.
   $$

   递推逻辑：

   $$
   \begin{aligned}
   \Sigma_0
   &\Longrightarrow
   \Sigma_1=\operatorname{Var}(v\mid y_1)
   \Longrightarrow
   \Sigma_2=\operatorname{Var}(v\mid y_1,y_2),\\
   \lambda_n
   &=
   \frac{\operatorname{Cov}(v,y_n\mid \mathcal F_{n-1}^y)}
   {\operatorname{Var}(y_n\mid \mathcal F_{n-1}^y)},\\
   x_n
   &=
   \beta_n(v-p_{n-1}).
   \end{aligned}
   $$

   与 one-period 的核心差别：

   $$
   \begin{aligned}
   \text{more trading rounds}
   &\Longrightarrow
   \text{insider can trade more gradually}\\
   &\Longrightarrow
   \text{prices reveal information more completely}\\
   &\Longrightarrow
   E[\Pi^{(2)}]>E[\Pi^{(1)}].
   \end{aligned}
   $$

   两期结论：

   $$
   \begin{aligned}
   E[\Pi^{(1)}]
   &=
   \frac{\sigma\sqrt{\Sigma_0}}{2},\\
   E[\Pi^{(2)}]
   &\approx
   0.6206\,\sigma\sqrt{\Sigma_0}
   >
   0.5\,\sigma\sqrt{\Sigma_0}.
   \end{aligned}
   $$

   即使 $v=v_0$，两期模型中 insider 仍可能有正条件利润，因为第一期交易会影响价格和 belief，第二期还能利用剩余误价。

3. **Continuous-time Kyle / Back (1992)**

   连续时间把有限次交易极限化：

   $$
   \left\{
   \begin{aligned}
   \tilde v&\sim N(\bar v,\sigma_v^2),\\
   Z_t&=\sigma_zB_t,
   &&\text{(noise order)},\\
   X_t&=\int_0^t\theta_sds,
   &&\text{(insider cumulative order)},\\
   Y_t&=X_t+Z_t,
   &&\text{(total order flow)},\\
   P_t&=E[\tilde v\mid \mathcal F_t^Y].
   \end{aligned}
   \right.
   $$

   线性均衡猜测：

   $$
   \left\{
   \begin{aligned}
   P_t&=\bar v+\lambda Y_t,\\
   \theta_t
   &=\frac{(\tilde v-\bar v)/\lambda-Y_t}{1-t}
   =\frac{\tilde v-P_t}{(1-t)\lambda}.
   \end{aligned}
   \right.
   $$

   做市商过滤：

   $$
   \begin{aligned}
   dY_t
   &=
   \frac{\tilde v-\bar v-\lambda Y_t}{\lambda(1-t)}dt
   +\sigma_zdB_t,\\
   P_t&=E[\tilde v\mid\mathcal F_t^Y]=\bar v+\lambda Y_t.
   \end{aligned}
   $$

   Kalman filtering pin down：

   $$
   \begin{aligned}
   \lambda&=\frac{\sigma_v}{\sigma_z},\\
   \Sigma_t
   &:=\operatorname{Var}(\tilde v\mid\mathcal F_t^Y)
   =
   \sigma_v^2(1-t).
   \end{aligned}
   $$

   关键性质：

   $$
   \begin{aligned}
   t\uparrow1
   &\Longrightarrow
   \Sigma_t\downarrow0
   \Longrightarrow
   P_1=\tilde v,
   &&\text{(full revelation)},\\
   P_t
   &=E[\tilde v\mid\mathcal F_t^Y]
   \Longrightarrow
   P_t\text{ is an }\mathcal F_t^Y\text{-martingale}.
   \end{aligned}
   $$

4. **三类 Kyle 的对比**

   | 版本 | 时间 | 价格规则 | 信息揭示 | 核心系数 |
   |---|---|---|---|---|
   | one-period | 一次交易 | $p=v_0+\lambda y$ | 揭示一半信息 | $\lambda=\sqrt{\Sigma_0}/(2\sigma)$ |
   | two-period / finite-period | 多次离散交易 | $p_n=E[v\mid y_1,\dots,y_n]$ | 逐期揭示，利润更高 | $\lambda_n,\beta_n,\Sigma_n$ 递推 |
   | continuous-time | $t\in[0,1]$ | $P_t=\bar v+\lambda Y_t$ | $\Sigma_t=\sigma_v^2(1-t)$，终点完全揭示 | $\lambda=\sigma_v/\sigma_z$ |

   总结：

   $$
   \boxed{
   \text{more trading opportunities}
   \Longrightarrow
   \text{more gradual insider trading}
   \Longrightarrow
   \text{more complete price discovery}
   \Longrightarrow
   \text{higher insider profit}.
   }
   $$

#### 6.2.4 Heterogeneous beliefs
异质信念把 SDF 从“一个代表性边际效用”推广成“不同 agents 的边际效用和 likelihood ratio 的组合”。

$$
\begin{aligned}
\text{different beliefs}
&\Longrightarrow
\text{different likelihood ratios}\\
&\Longrightarrow
\text{different perceived SPD}\\
&\Longrightarrow
\text{wealth shares move over time}\\
&\Longrightarrow
\text{prices, interest rates, risk premia change}.
\end{aligned}
$$

### 6.3 证明
#### 6.3.1 Bayesian updating with precision
后验精度等于先验精度加信号精度。

$$
\begin{aligned}
\left\{
\begin{aligned}
v&\sim N(m_0,\rho_0^{-1}),\\
s_i&=v+\varepsilon_i,\qquad \varepsilon_i\sim N(0,\rho_i^{-1}).
\end{aligned}
\right.
\implies
\left\{
\begin{aligned}
\rho_n^{post}
&=\rho_0+\sum_{i=1}^n\rho_i,\\
E[v\mid s_1,\dots,s_n]
&=
\frac{\rho_0m_0+\sum_{i=1}^n\rho_is_i}
{\rho_0+\sum_{i=1}^n\rho_i}.
\end{aligned}
\right.
\end{aligned}
$$

#### 6.3.2 Kyle one-period equilibrium
$\beta=\sigma/\sqrt{\Sigma_0}$，$\lambda=\sqrt{\Sigma_0}/(2\sigma)$。

$$
\left\{
\begin{aligned}
v&\sim N(v_0,\Sigma_0),\\
u&\sim N(0,\sigma^2),\\
x&=\beta(v-v_0),\\
y&=x+u,\\
p&=E[v\mid y]=v_0+\lambda y.
\end{aligned}
\right.
$$

Insider optimality：

$$
\begin{aligned}
\max_x (v-v_0-\lambda x)x
&\Longrightarrow
x=\frac{v-v_0}{2\lambda}
\Longrightarrow
\beta=\frac{1}{2\lambda}.
\end{aligned}
$$

Market maker regression：

$$
\begin{aligned}
\lambda
&=
\frac{\operatorname{Cov}(v,y)}{\operatorname{Var}(y)} =
\frac{\beta\Sigma_0}{\beta^2\Sigma_0+\sigma^2}.
\end{aligned}
$$

联立：

$$
\boxed{
\beta=\frac{\sigma}{\sqrt{\Sigma_0}},
\qquad
\lambda=\frac{\sqrt{\Sigma_0}}{2\sigma}.
}
$$

#### 6.3.3 Heterogeneous beliefs and SPD ratio
不同信念下的 state price density 通过 likelihood ratio 连接。

设两个信念测度 $P^1,P^2$，likelihood ratio 为

$$
\begin{aligned}
\eta_t
&:=\frac{dP^2}{dP^1}\bigg|_{\mathcal F_t}.
\end{aligned}
$$

若同一 payoff $X_T$ 的价格在两种信念下必须一致：

$$
\begin{aligned}
S_t
&=E_t^{P^1}\left[\frac{\xi_T^1}{\xi_t^1}X_T\right]
=E_t^{P^2}\left[\frac{\xi_T^2}{\xi_t^2}X_T\right].
\end{aligned}
$$

用 Bayes formula：

$$
\begin{aligned}
E_t^{P^2}[Y]
&=
E_t^{P^1}\left[\frac{\eta_T}{\eta_t}Y\right].
\end{aligned}
$$

因此

$$
\begin{aligned}
E_t^{P^2}\left[\frac{\xi_T^2}{\xi_t^2}X_T\right]
&=
E_t^{P^1}\left[
\frac{\eta_T}{\eta_t}
\frac{\xi_T^2}{\xi_t^2}
X_T
\right].
\end{aligned}
$$

要对任意 payoff 定价一致，需要

$$
\boxed{
\frac{\xi_T^1}{\xi_t^1} =
\frac{\eta_T}{\eta_t}
\frac{\xi_T^2}{\xi_t^2}
}
$$

等价地，归一化后可写成 state price density ratio 与 likelihood ratio 对应。
