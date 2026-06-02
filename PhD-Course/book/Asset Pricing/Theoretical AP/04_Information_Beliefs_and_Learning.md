# 04 Information, Beliefs, and Learning

这部分主要处理三类问题：

1. 信息不对称如何进入价格。
2. 做市商如何从订单流中反推出资产价值。
3. 当投资者对基本面动态有不同信念时，如何形成均衡价格、利率与风险价格。

## 10. 市场微观结构模型概览

### 10.1 信息不对称的作用

金融市场中的交易动机（generate trades）通常来自三类来源：

1. beliefs
2. information
	- 订单对价格的冲击
	- 买卖价差bid-ask spreads
	- 价格究竟反映了多少私人信息
3. preferences

### 10.2 Grossman-Stiglitz Model

#### 10.2.1 Setup

::::{admonition} Definition (Grossman-Stiglitz Setup)
存在一个风险资产（到期支付 $v$）和一个无风险资产。风险资产基本面、噪声供给和私人信号满足

$$
\left\{
\begin{aligned}
v&\sim N\!\left(\bar v,\frac{1}{\rho_v}\right),\\
X&\sim N\!\left(0,\frac{1}{\rho_x}\right),\\
s&=v+\varepsilon,\qquad
\varepsilon\sim N\!\left(0,\frac{1}{\rho_s}\right),\qquad
v\perp \varepsilon.
\end{aligned}
\right.
$$
::::

两类投资者具有 CARA utility：

$$
\begin{aligned}
U_i(W_i)&=-e^{-\lambda_iW_i},\qquad \lambda_i>0.
\end{aligned}
$$

投资者 $i$ 持有 $X_i$ 单位风险资产、初始财富 $m_i$、现金头寸 $M_i$。预算约束和期末财富为

$$
\begin{aligned}
M_i+X_ip&=m_i,\\
W_i&=M_i+X_iv\\
&=m_i+X_i(v-p).
\end{aligned}
$$

知情者 $I$ 观察 $s$，无知情者 $U$ 只观察均衡价格 $p$。线性均衡猜测为

$$
\begin{aligned}
p&=\alpha\bar v+\beta s-\gamma X.
\end{aligned}
$$

::::{admonition} Definition (Grossman-Stiglitz Linear Equilibrium)
线性均衡由价格函数、两类代理人的最优需求和市场清算共同给出：

$$
\left\{
\begin{aligned}
p&=\alpha\bar v+\beta s-\gamma X,\\
X_I&=\frac{E_I[v]-p}{\lambda_I\operatorname{Var}_I(v)},\\
X_U&=\frac{E_U[v]-p}{\lambda_U\operatorname{Var}_U(v)},\\
X_I+X_U&=X.
\end{aligned}
\right.
$$
::::

在线性价格猜测下，无知情者可从价格中提取带噪信号

$$
\begin{aligned}
\theta
&=\frac{p-\alpha\bar v}{\beta}
=s-\frac{\gamma}{\beta}X.
\end{aligned}
$$

其中 $v$ 是风险资产终值，$p$ 是均衡价格，$X$ 是随机供给，$X_i$ 是投资者 $i$ 的风险资产持仓，$\rho_v,\rho_s,\rho_x$ 分别是先验、私人信号噪声和供给噪声的 precision。


#### 10.2.2 贝叶斯更新

##### Informed Agents

::::{admonition} Definition (Bayesian Learning Primitives)
基础贝叶斯学习框架（[贝叶斯更新](Asset Pricing/Theoretical AP/cards/贝叶斯更新 - 先验、信号、似然、后验)）：

- **先验（prior）**：在观察信号之前，对未知变量 $v$ 的原始信念，这里是 $v\sim N(\bar v,1/\rho_v)$。
- **信号（signal）**：投资者观察到的带噪信息，这里是 $s=v+\varepsilon$，其中 $\varepsilon\sim N(0,1/\rho_s)$。
- **似然（likelihood）**：若真实值是 $v$，观察到信号 $s$ 的概率密度，即 $n(s\mid v)$。
- **后验（posterior）**：观察到信号 $s$ 之后，对 $v$ 的更新信念，即 $v\mid s$。
::::

Bayes 法则给出
$$
\begin{aligned}
n(v\mid s)
&\propto n(s\mid v)n(v),\\
v\mid s
&\sim N\!\left(
\frac{\rho_s s+\rho_v\bar v}{\rho_s+\rho_v},
\frac{1}{\rho_s+\rho_v}
\right).
\end{aligned}
$$

也可以直接用 bivariate normal conditional moment。若

$$
\begin{pmatrix}
X\\
Y
\end{pmatrix}
\sim
N\!\left(
\begin{pmatrix}
\mu_X\\
\mu_Y
\end{pmatrix},
\begin{pmatrix}
\sigma_X^2&\sigma_{XY}\\
\sigma_{XY}&\sigma_Y^2
\end{pmatrix}
\right),
$$

令 $Z=X-aY$ 且取

$$
\begin{aligned}
\operatorname{Cov}(Z,Y)
&=\operatorname{Cov}(X-aY,Y)\\
&=\sigma_{XY}-a\sigma_Y^2=0\\
\Longleftrightarrow\quad
a&=\frac{\sigma_{XY}}{\sigma_Y^2}.
\end{aligned}
$$

联合正态下零协方差推出独立，因此

$$
\begin{aligned}
E[X\mid Y=y]
&=E[aY+Z\mid Y=y]\\
&=ay+E[Z]\\
&=\mu_X+\frac{\sigma_{XY}}{\sigma_Y^2}(y-\mu_Y),\\
\operatorname{Var}(X\mid Y=y)
&=\operatorname{Var}(Z)\\
&=\operatorname{Var}(X-aY)\\
&=\sigma_X^2-2a\sigma_{XY}+a^2\sigma_Y^2\\
&=\sigma_X^2-\frac{\sigma_{XY}^2}{\sigma_Y^2}.
\end{aligned}
$$

代入 $X=v$、$Y=s=v+\varepsilon$：

$$
\begin{aligned}
E[v]&=\bar v,\qquad E[s]=\bar v,\\
\operatorname{Cov}(v,s)
&=\operatorname{Cov}(v,v+\varepsilon)
=\operatorname{Var}(v)
=\frac{1}{\rho_v},\\
\operatorname{Var}(s)
&=\operatorname{Var}(v)+\operatorname{Var}(\varepsilon)
=\frac{1}{\rho_v}+\frac{1}{\rho_s}
=\frac{\rho_s+\rho_v}{\rho_v\rho_s}.
\end{aligned}
$$

所以知情者的后验矩为

$$
\begin{aligned}
E_I[v\mid s]
&=\bar v+
\frac{1/\rho_v}{(\rho_s+\rho_v)/(\rho_v\rho_s)}
(s-\bar v)\\
&=\frac{\rho_s s+\rho_v\bar v}{\rho_s+\rho_v},\\
\frac{1}{\rho_v} -
\frac{(1/\rho_v)^2}{(\rho_s+\rho_v)/(\rho_v\rho_s)}\\
\end{aligned}
$$

##### Uninformed Agents

假设无知情者相信价格是线性的：
$$
p=\alpha \bar v+\beta s-\gamma X.
$$
则他可以从价格中抽取一个统计量（无知情者虽然看不到 $s$，但能通过价格提取一个“带噪声的信号” $\theta$）
$$
\theta \equiv \frac{p-\alpha \bar v}{\beta}
=s-\frac{\gamma}{\beta}X.
$$
由于 $s|v\sim N(v,1/\rho_s)$ 且 $X\sim N(0,1/\rho_x)$ 并相互独立，
$$
\theta|v \sim N\!\left(
 v,\;
 \frac{1}{\rho_s}+\left(\frac{\gamma}{\beta}\right)^2\frac{1}{\rho_x}
\right)
= N\!\left(v,\frac{1}{\rho_\theta}\right).
$$
应用正态-正态贝叶斯更新（把 $\theta$ 当作关于 $v$ 的带噪声观测）：
$$
\begin{aligned}
p(v|\theta)
&\propto p(\theta|v)\,p(v)
\propto \exp\left\{
-\frac{\rho_\theta}{2}(\theta-v)^2-\frac{\rho_v}{2}(v-\bar v)^2
\right\}.
\end{aligned}
$$
$$
\begin{aligned}
&-\frac{1}{2}\left[\rho_\theta(v^2-2\theta v)+\rho_v(v^2-2\bar v v)\right] \\
=\;&-\frac{1}{2}\left[(\rho_\theta+\rho_v)v^2-2(\rho_\theta\theta+\rho_v\bar v)v\right] \\
=\;&-\frac{\rho_\theta+\rho_v}{2}\left(v-\frac{\rho_\theta\theta+\rho_v\bar v}{\rho_\theta+\rho_v}\right)^2.
\end{aligned}
$$
$$
v\mid \theta
=v\mid p
\sim
N\!\left(
\frac{\rho_\theta \theta+\rho_v \bar v}{\rho_\theta+\rho_v},
\frac{1}{\rho_\theta+\rho_v}
\right).
$$

#### 10.2.3 CARA-Normal 下的最优需求

::::{admonition} Lemma (CARA-Normal Position Demand)
若 $v\mid\mathcal I_i$ 条件正态，财富为

$$
W_i=m_i+X_i(v-p),
$$

且 $U_i(W)=-e^{-\lambda_iW}$，则最优持仓为

$$
X_i^*
=\frac{E_i[v]-p}{\lambda_i\operatorname{Var}_i(v)}.
$$
::::

[CARA-Normal framework](Asset Pricing/Theoretical AP/cards/CARA-Normal framework - 均值方差等价与最优需求)（均值方差等价与最优需求）

因为后验下 $v$ 为正态，财富
$$
W_i=m_i+(v-p)X_i
$$
也是正态。对 CARA 效用与正态分布：
$$
\mu_{W,i}\equiv E_i[W_i],\quad
\sigma_{W,i}^2\equiv \operatorname{Var}_i(W_i),\quad
W_i=\mu_{W,i}+\sigma_{W,i}Z,\quad Z\sim N(0,1).
$$

$$
\begin{aligned}
E_i[-e^{-\lambda_i W_i}]
&=-E_i[e^{-\lambda_i W_i}] \\
&=-E_i\!\left[e^{-\lambda_i(\mu_{W,i}+\sigma_{W,i}Z)}\right]\\
&=-e^{-\lambda_i\mu_{W,i}}\,E\!\left[e^{-(\lambda_i\sigma_{W,i})Z}\right]\\
&=-e^{-\lambda_i\mu_{W,i}}\,
\exp\!\left(\frac{\lambda_i^2\sigma_{W,i}^2}{2}\right)\\
&=-\exp\!\left(-\lambda_i\mu_{W,i}+\frac{\lambda_i^2}{2}\sigma_{W,i}^2\right).
\end{aligned}
$$

其中用到标准正态的矩母函数（MGF）$E[e^{tZ}]=e^{t^2/2}$，见 [MGF](Asset Pricing/Theoretical AP/cards/矩母函数（MGF）- 定义与正态分布公式)。因此

$$
\begin{aligned}
\max_{X_i} E_i[-e^{-\lambda_i W_i}]
&\Longleftrightarrow
\max_{X_i}\left\{E_i[W_i]-\frac{\lambda_i}{2}\operatorname{Var}_i(W_i)\right\} \\
&=
\max_{X_i}\left\{
m_i+X_i\big(E[v\mid\mathcal I_i]-p\big)
-\frac{\lambda_i}{2}X_i^2\operatorname{Var}(v\mid\mathcal I_i)
\right\},
\end{aligned}
$$
对 $X_i$ 一阶条件：
$$
\begin{aligned}
0
&=\frac{\partial}{\partial X_i}
\left[
m_i+X_i\big(E[v\mid\mathcal I_i]-p\big)
-\frac{\lambda_i}{2}X_i^2\operatorname{Var}(v\mid\mathcal I_i)
\right]\\
&=E[v\mid\mathcal I_i]-p-\lambda_i X_i\operatorname{Var}(v\mid\mathcal I_i).
\end{aligned}
$$
故最优需求为
$$
X_i
=\frac{E[v\mid\mathcal I_i]-p}
{\lambda_i\operatorname{Var}(v\mid\mathcal I_i)}
=\frac{E_i[v]-p}{\lambda_i\operatorname{Var}_i(v)}.
$$

若只看知情者，令 $\lambda_I=\gamma$，由 $W_I=W_0+X_I(v-p)$ 与上面的知情者后验矩：

$$
\begin{aligned}
E_I[W_I]
&=W_0+X_I(E_I[v\mid s]-p),\\
\operatorname{Var}_I(W_I)
&=X_I^2\operatorname{Var}_I(v\mid s),\\
\max_{X_I} E_I[U(W_I)]
&\Longleftrightarrow
\max_{X_I}
\left\{
W_0+X_I(E_I[v\mid s]-p)
-\frac{\gamma}{2}X_I^2\operatorname{Var}_I(v\mid s)
\right\},\\
0
&=
\frac{\partial}{\partial X_I}
\left[
W_0+X_I(E_I[v\mid s]-p)
-\frac{\gamma}{2}X_I^2\operatorname{Var}_I(v\mid s)
\right]\\
&=
E_I[v\mid s]-p-\gamma X_I\operatorname{Var}_I(v\mid s),\\
X_I
&=
\frac{E_I[v\mid s]-p}{\gamma\operatorname{Var}_I(v\mid s)}\\
&=
\frac{
\frac{\rho_s s+\rho_v\bar v}{\rho_s+\rho_v}
-p
}{
\gamma\frac{1}{\rho_s+\rho_v}
}\\
&=
\frac{\rho_s s+\rho_v\bar v-p(\rho_s+\rho_v)}{\gamma}.
\end{aligned}
$$

代入知情者与无知情者的后验矩：
$$
\begin{aligned}
X_I=\frac{E[v|s]-p}{\lambda_I\operatorname{Var}(v|s)}
&\Longleftrightarrow
X_I=\frac{\rho_s s+\rho_v\bar v-(\rho_s+\rho_v)p}{\lambda_I},\\
X_U=\frac{E[v|\theta]-p}{\lambda_U\operatorname{Var}(v|\theta)}
&\Longleftrightarrow
X_U=\frac{\rho_\theta \theta+\rho_v\bar v-(\rho_\theta+\rho_v)p}{\lambda_U}.
\end{aligned}
$$
这里的 $X_I,X_U$ 表示 investor 的 **holding / position**，即最优持仓量，不是成交量（trading volume）。  
符号上：
$$
\begin{aligned}
X_i>0
&\Longleftrightarrow \text{持有多头（long position）},\\
X_i<0
&\Longleftrightarrow \text{持有空头（short position）},\\
X_i=0
&\Longleftrightarrow \text{不持有该风险资产}.
\end{aligned}
$$
因此这条需求函数的直觉就是
$$
\begin{aligned}
\text{holding}
=\frac{\text{perceived mispricing }(E_i[v]-p)}{\text{risk penalty } \lambda_i\operatorname{Var}_i(v)}.
\end{aligned}
$$
也就是：你觉得资产越被低估，就持有越多；你越厌恶风险、或后验方差越大，就持有越少。

#### 10.2.4 Exercise 1：Equilibrium Price

Find the coefficients of the equilibrium price $\alpha,\beta,\gamma$. Show that when $\rho_x=\infty$, the equilibrium price is fully revealing the informed agent’s signal $s$.

::::{admonition} Lemma (Solving the GS Price Coefficients)
令
$$
D=\lambda_I(\rho_\theta+\rho_v)+\lambda_U(\rho_s+\rho_v),
$$
则线性价格系数满足
$$
\beta=\frac{\lambda_I\rho_\theta+\lambda_U\rho_s}{D},
\quad
\alpha=\frac{\rho_v(\lambda_I+\lambda_U)}{D},
\quad
\gamma=\frac{\lambda_I}{\rho_s}\beta.
$$
::::

市场清算要求
$$
X_I+X_U=X.
$$
代入 $\theta=(p-\alpha\bar v)/\beta$ 后，
$$
\frac{\rho_s s+\rho_v \bar v-(\rho_s+\rho_v)p}{\lambda_I}

+

\frac{\rho_\theta \frac{p-\alpha\bar v}{\beta}+\rho_v \bar v-(\rho_\theta+\rho_v)p}{\lambda_U}
=X.
$$
再代入**猜测的线性价格** $p=\alpha\bar v+\beta s-\gamma X$，注意
$$
p-\alpha\bar v=\beta s-\gamma X.
$$
代回清算方程并把同类项整理为关于 $(s,\bar v,X)$ 的线性恒等式：
$$
\begin{aligned}
0
&=\frac{1}{\lambda_I}\Big(\rho_s s+\rho_v\bar v-(\rho_s+\rho_v)(\alpha\bar v+\beta s-\gamma X)\Big)\\
&\quad+\frac{1}{\lambda_U}\Big(\rho_\theta(\beta s-\gamma X)/\beta+\rho_v\bar v-(\rho_\theta+\rho_v)(\alpha\bar v+\beta s-\gamma X)\Big)-X\\
&=\underbrace{\left[\frac{\rho_s-(\rho_s+\rho_v)\beta}{\lambda_I}+\frac{\rho_\theta-(\rho_\theta+\rho_v)\beta}{\lambda_U}\right]}_{\text{$s$ 的系数}}s\\
&\quad+\underbrace{\left[\frac{\rho_v-(\rho_s+\rho_v)\alpha}{\lambda_I}+\frac{\rho_v-(\rho_\theta+\rho_v)\alpha}{\lambda_U}\right]}_{\text{$\bar v$ 的系数}}\bar v\\
&\quad+\underbrace{\left[\frac{(\rho_s+\rho_v)\gamma}{\lambda_I}+\frac{\gamma\big((\rho_\theta+\rho_v)-\rho_\theta/\beta\big)}{\lambda_U}-1\right]}_{\text{$X$ 的系数}}X.
\end{aligned}
$$
由于该等式对所有 $(s,X)$ 都成立，三项系数必须分别为 0。记
$$
D\equiv \lambda_I(\rho_\theta+\rho_v)+\lambda_U(\rho_s+\rho_v),
$$

$$
\left\{
\begin{aligned}
\beta D&=\lambda_I\rho_\theta+\lambda_U\rho_s,\\
\alpha D&=\rho_v(\lambda_I+\lambda_U),\\
\gamma(\beta D-\lambda_I\rho_\theta)&=\beta\lambda_I\lambda_U.
\end{aligned}
\right.
$$
解得
$$
\beta=\frac{\lambda_I\rho_\theta+\lambda_U\rho_s}{D},
\qquad
\alpha=\frac{\rho_v(\lambda_I+\lambda_U)}{D},
\qquad
\gamma=\frac{\lambda_I}{\rho_s}\beta.
$$

$$
\gamma=\frac{\lambda_I}{\rho_s}\beta
\Longleftrightarrow
\frac{\gamma}{\beta}=\frac{\lambda_I}{\rho_s}.
$$
Uninformed agent面对的“价格信号精度”为
$$
\frac{1}{\rho_\theta} =
\frac{1}{\rho_s}
+\left(\frac{\lambda_I}{\rho_s}\right)^2\frac{1}{\rho_x}
\iff
\rho_\theta =
\frac{\rho_s^2\rho_x}{\rho_s\rho_x+\lambda_I^2}.
$$
这说明：
1. 噪声供给 $X$ 的方差越大，价格越不透明；
2. 知情者风险厌恶越强（$\lambda_I$ 越大），价格中掺入的“策略性遮掩”越多。

#### 10.2.5 完全揭示与信息价值

若 $\rho_x=\infty$，则供给 $X$ 没有噪声，价格满足
$$
\theta=s-\frac{\gamma}{\beta}X=s.
$$
于是 uninformed agent 可从价格中完全恢复 $s$，价格完全揭示私人信息：

$$
\mathcal I_U=\sigma(p),
\qquad
\mathcal I_I=\sigma(p,s).
$$

若价格完全揭示 $s$，则存在可测函数 $g$ 使得 $s=g(p)$，因此

$$
\mathcal I_I=\sigma(p,s)=\sigma(p,g(p))=\sigma(p)=\mathcal I_U.
$$

完全揭示下，买信息和不买信息对应同一个信息集，所以任何只依赖条件均值与条件方差的最优交易问题都相同。CARA-normal 下可直接写成下面的 certainty equivalent 差。

[Asset Pricing/Theoretical AP/cards/Grossman-Stiglitz - 信息价值与支付意愿](Asset Pricing/Theoretical AP/cards/Grossman-Stiglitz - 信息价值与支付意愿)（信息价值与支付意愿）

若代理人在交易前可以支付信息成本 $c$ 来观察 $s$，则其最高支付意愿由两个 certainty equivalent 的事前差值给出。记

$$
\mu_{\mathcal I}:=E[v\mid \mathcal I],
\qquad
\Sigma_{\mathcal I}:=\operatorname{Var}(v\mid \mathcal I).
$$
则
$$
\begin{aligned}
CE(\mathcal I)
&:=
\max_X\left\{m+X(\mu_{\mathcal I}-p)-\frac{\lambda}{2}X^2\Sigma_{\mathcal I}\right\} \\
&=
 m+\frac{(\mu_{\mathcal I}-p)^2}{2\lambda\Sigma_{\mathcal I}},
\end{aligned}
$$
其中
$$
X^*(\mathcal I)=\frac{\mu_{\mathcal I}-p}{\lambda\Sigma_{\mathcal I}}.
$$

$$
\begin{aligned}
c^*
&:=
E\big[CE(\mathcal I_I)-CE(\mathcal I_U)\big] \\
&=
\frac{1}{2\lambda}E\left[
\frac{(E[v\mid s]-p)^2}{\operatorname{Var}(v\mid s)} -
\frac{(E[v\mid p]-p)^2}{\operatorname{Var}(v\mid p)}
\right].
\end{aligned}
$$

代入后验矩
$$
\operatorname{Var}(v\mid s)=\frac{1}{\rho_s+\rho_v},
\qquad
\operatorname{Var}(v\mid p)=\operatorname{Var}(v\mid \theta)=\frac{1}{\rho_\theta+\rho_v},
$$

$$
E[v\mid s]=\frac{\rho_s s+\rho_v\bar v}{\rho_s+\rho_v},
\qquad
E[v\mid p]=E[v\mid \theta]=\frac{\rho_\theta\theta+\rho_v\bar v}{\rho_\theta+\rho_v}.
$$

$$
\begin{aligned}
c^*
&=
\frac{1}{2\lambda}E\Bigg[
\frac{\big(\rho_s s+\rho_v\bar v-(\rho_s+\rho_v)p\big)^2}{\rho_s+\rho_v} -
\frac{\big(\rho_\theta\theta+\rho_v\bar v-(\rho_\theta+\rho_v)p\big)^2}{\rho_\theta+\rho_v}
\Bigg].
\end{aligned}
$$

完全揭示极限下
$$
\theta=s,
\qquad
\rho_\theta=\rho_s.
$$
因此
$$
E[v\mid p]=E[v\mid s],
\qquad
\operatorname{Var}(v\mid p)=\operatorname{Var}(v\mid s),
$$
从而
$$
c^*=0.
$$
若把信息成本 $c$ 外生给定，则
$$
c\le c^* 
\quad\Longrightarrow\quad
值得买信息,
\qquad
c>c^*
\quad\Longrightarrow\quad
不值得买信息.
$$
在一个内生信息获取的对称内部均衡中，通常就是用
$$
c=c^*
$$
来刻画“恰好有人愿意获取信息”的无差异条件。

>Grossman-Stiglitz 式悖论：如果价格完全揭示信息，那么没人愿意付费获取信息；但如果没人获取信息，价格又无法完全揭示信息。因此，带有正信息获取成本的均衡不能是完全揭示的，只能是部分揭示的。

### 10.3 Glosten-Milgrom Sequential Trading Model

#### 10.3.1 Setup

::::{admonition} Definition (Glosten-Milgrom Sequential Trading Setup)
**sequential trading**：一次只来一个 trader、一次只交易一股，所以做市商每看到一笔订单，就立刻用这笔订单更新对 $V$ 的信念，再重新报 bid / ask。

**Asset value**: Binary with prior
$$
V \sim \begin{cases}
V_H & \text{w.p. } \theta \\
V_L & \text{w.p. } 1-\theta
\end{cases}
$$
::::

**Trader arrivals** (order-flow structure):
$$
\begin{array}{c|cc}
\text{Trader type} & \Pr(\text{BUY}\mid V) & \Pr(\text{SELL}\mid V) \\
\hline
\text{Informed}\ (\mu) & 
\begin{pmatrix} 1\times \theta \\ 0 \end{pmatrix} & 
\begin{pmatrix} 0 \\ 1 \times (1-\theta) \end{pmatrix} \\[0.5em]
\text{Noise}\ (1-\mu) &
\begin{pmatrix} \gamma \\ \gamma \end{pmatrix} &
\begin{pmatrix} 1-\gamma \\ 1-\gamma \end{pmatrix}
\end{array}
\quad \begin{pmatrix} V_H \\ V_L \end{pmatrix}
$$

做市商观察到的是订单方向，而不是真实价值，因此买价和卖价都取“条件期望价值”。

- **specialist / market maker**：始终站在市场另一边报价格。
  - 若 trader 要买，做市商按 **ask** 卖给他。
  - 若 trader 要卖，做市商按 **bid** 从他手里买。
关键是 informed trader 的下单方向带信息：
$$
\begin{aligned}
V=V_H &\Longrightarrow \text{informed trader buys},\\
V=V_L &\Longrightarrow \text{informed trader sells}.
\end{aligned}
$$
所以买单会让做市商更相信“高价值”状态，卖单会让做市商更相信“低价值”状态。

于是**订单流本身就变成信号**：
$$
\begin{aligned}
\text{BUY} &\Longrightarrow E[V\mid \text{BUY}] \uparrow,\\
\text{SELL} &\Longrightarrow E[V\mid \text{SELL}] \downarrow.
\end{aligned}
$$
这就是后面 bid-ask spread 的根源：做市商担心自己交易到的对手更可能是 informed trader，因此需要用
$$
\begin{aligned}
a=E[V\mid \text{BUY}],
\qquad
b=E[V\mid \text{SELL}]
\end{aligned}
$$
来保护自己免受 adverse selection。

| price   | dealer | trader | description                      |
| ------- | ------ | ------ | -------------------------------- |
| **ask** | sell   | buy    | dealer 观察 trader 的买单，提高 ask（卖出价） |
| **bid** | buy    | sell   | dealer 观察 trader 的卖单，降低 bid（买入价） |

#### 10.3.2 Pricing Rules and Bid-Ask Spread

::::{admonition} Lemma (Positive Bid-Ask Spread from Adverse Selection)
在二元价值与知情交易概率 $\mu>0$ 下，竞争做市商的报价满足
$$
a=E[V|B],\qquad b=E[V|S],\qquad a>b.
$$
::::

$$
\begin{aligned}
P(B)&=\theta\mu+(1-\mu)\gamma,\\
P(S)&=(1-\theta)\mu+(1-\mu)(1-\gamma),\\
\bar V&=\theta V_H+(1-\theta)V_L.
\end{aligned}
$$
$$
\begin{aligned}
a
&=E[V|B]\\
&=\frac{\theta\mu V_H+(1-\mu)\gamma\bar V}{\theta\mu+(1-\mu)\gamma}.
\end{aligned}
$$
$$
\begin{aligned}
b
&=E[V|S]\\
&=\frac{(1-\theta)\mu V_L+(1-\mu)(1-\gamma)\bar V}{(1-\theta)\mu+(1-\mu)(1-\gamma)}.
\end{aligned}
$$
两者相减并通分：
$$
\begin{aligned}
a-b
&=\frac{\theta(1-\theta)\mu}{[\theta\mu+(1-\mu)\gamma][(1-\theta)\mu+(1-\mu)(1-\gamma)]}(V_H-V_L).
\end{aligned}
$$
若 $0<\theta<1,\mu>0,V_H>V_L$，则
$$
\begin{aligned}
a-b>0.
\end{aligned}
$$

##### 卖一价的推导

若出现买单 $B$，则它可能来自：
1. 知情者且消息好：概率 $\theta\mu$
2. 噪声交易者买入：概率 $(1-\mu)\gamma$（=$(1-\mu)\gamma[\theta+(1-\theta)]$）
$$
P(B)=\theta\mu+(1-\mu)\gamma.
$$
记 $B_U$ 为“噪声交易者买入”事件。由于噪声交易者交易方向与真实价值 $V$ 独立，
$$
\begin{aligned}
P(V=V_H|B_U)&=P(V=V_H)=\theta,\\
P(V=V_L|B_U)&=P(V=V_L)=1-\theta.
\end{aligned}
$$

$$
\begin{aligned}
E[V|B_U]
&=V_H P(V=V_H|B_U)+V_L P(V=V_L|B_U)\\
&=\theta V_H+(1-\theta)V_L\\
&\equiv \bar V.
\end{aligned}
$$
即噪声交易者买入时，做市商对价值的条件均值仍等于无条件均值。
$$
\begin{aligned}
\bar V &= \theta V_H+(1-\theta)V_L \\[0.3em]
a = E[V|B] &= \frac{\theta\mu V_H+(1-\mu)\gamma \bar V}{\theta\mu+(1-\mu)\gamma} \\
&= \frac{\theta\mu V_H+(1-\mu)\gamma[\theta V_H+(1-\theta)V_L]}{\theta\mu+(1-\mu)\gamma} \\
&= \frac{[\theta\mu+\theta(1-\mu)\gamma]V_H+(1-\theta)(1-\mu)\gamma V_L}{\theta\mu+(1-\mu)\gamma} \\
&= \underbrace{V_H}_{\text{optimistic bound}} - \underbrace{\frac{(1-\theta)(1-\mu)\gamma}{\theta\mu+(1-\mu)\gamma}}_{\text{noise-trade prob: buy bad}} \underbrace{(V_H-V_L)}_{\text{spread}}.
\end{aligned}
$$
做市商在 risk-neutral 且零利润竞争下，ask 就报这个后验均值；因为若他报得更低，遇到 informed buyer 时会亏损。

##### 买一价的推导

若出现卖单 $S$，则它可能来自：
1. 知情者且消息坏：概率 $(1-\theta)\mu$；
2. 噪声交易者卖出：概率 $(1-\mu)(1-\gamma)$。
$$
\begin{aligned}
b = E[V|S] &= \frac{(1-\theta)\mu V_L+(1-\mu)(1-\gamma)\bar V}{(1-\theta)\mu+(1-\mu)(1-\gamma)} \\
&= \frac{(1-\theta)\mu V_L+(1-\mu)(1-\gamma)[\theta V_H+(1-\theta)V_L]}{(1-\theta)\mu+(1-\mu)(1-\gamma)} \\
&= \frac{[\theta(1-\mu)(1-\gamma)]V_H+[(1-\theta)\mu+(1-\theta)(1-\mu)(1-\gamma)]V_L}{(1-\theta)\mu+(1-\mu)(1-\gamma)} \\
&= \underbrace{V_L}_{\text{pessimistic bound}} + \underbrace{\frac{\theta(1-\mu)(1-\gamma)}{(1-\theta)\mu+(1-\mu)(1-\gamma)}}_{\text{noise-trade prob: sell good}} \underbrace{(V_H-V_L)}_{\text{spread}}.
\end{aligned}
$$

##### 买卖价差为正
$$
\begin{aligned}
a-b
&=
(V_H-V_L)
\Bigg[
1 -
\frac{(1-\theta)(1-\mu)\gamma}{\theta\mu+(1-\mu)\gamma} -
\frac{\theta(1-\mu)(1-\gamma)}{(1-\theta)\mu+(1-\mu)(1-\gamma)}
\Bigg] \\
&=
\frac{\theta(1-\theta)\mu}
{[\theta\mu+(1-\mu)\gamma][(1-\theta)\mu+(1-\mu)(1-\gamma)]}
(V_H-V_L).
\end{aligned}
$$

$$
a-b>0.
$$
经济含义很直接：做市商担心自己面对的是知情交易者，所以买入时压低价格、卖出时抬高价格，价差正是逆向选择成本。

### 10.4 One-period Kyle Model

#### 10.4.1 Setup

::::{admonition} Definition (One-period Kyle Setup)
单期 Kyle 模型由 informed order、noise order flow 与竞争做市商定价组成：

$$
\left\{
\begin{aligned}
v&\sim N(v_0,\Sigma_0),\\
Z_u&\sim N(0,\sigma^2),\qquad v\perp Z_u,\\
X&=x+Z_u,\\
p&=E[v\mid X].
\end{aligned}
\right.
$$
::::

知情者在 $t=0$ 知道 $v$，做市商只观察总订单流 $X$，观察不到 $x$ 与 $Z_u$ 的分解。$Z_u$ 是不携带基本面信息的流动性交易；若 $Z_u$ 与 $v$ 相关，就不再是纯噪声。

#### 10.4.2 线性均衡猜测

::::{admonition} Lemma (One-Period Kyle Linear Equilibrium)
在线性策略
$$
x=\beta(v-p_0),\qquad p=p_0+\lambda(x+Z_u)
$$
下，均衡系数为
$$
p_0=v_0,
\qquad
\beta=\frac{\sigma}{\sqrt{\Sigma_0}},
\qquad
\lambda=\frac{\sqrt{\Sigma_0}}{2\sigma}.
$$
::::

$$
\begin{aligned}
v&\sim N(v_0,\Sigma_0),\\
Z_u&\sim N(0,\sigma^2),\\
X&=x+Z_u,\\
x&=\beta(v-p_0),\\
p&=E[v|X]=p_0+\lambda X.
\end{aligned}
$$
给定 $\lambda$，insider 解
$$
\begin{aligned}
\max_x E[(v-p_0-\lambda(x+Z_u))x|v]
&=\max_x (v-p_0-\lambda x)x.
\end{aligned}
$$
FOC 给出
$$
\begin{aligned}
v-p_0-2\lambda x=0
\quad\Longrightarrow\quad
x=\frac{1}{2\lambda}(v-p_0),
\end{aligned}
$$
所以
$$
\begin{aligned}
\beta=\frac{1}{2\lambda}.
\end{aligned}
$$
另一方面，$X=\beta(v-p_0)+Z_u$，正态投影给出
$$
\begin{aligned}
E[v|X]
&=v_0+\frac{\operatorname{Cov}(v,X)}{\operatorname{Var}(X)}(X-E[X])\\
&=v_0+\frac{\beta\Sigma_0}{\beta^2\Sigma_0+\sigma^2}X.
\end{aligned}
$$
因此
$$
\begin{aligned}
p_0&=v_0,\\
\lambda&=\frac{\beta\Sigma_0}{\beta^2\Sigma_0+\sigma^2}.
\end{aligned}
$$
联立 $\beta=1/(2\lambda)$：
$$
\begin{aligned}
\frac{1}{2\beta}
&=\frac{\beta\Sigma_0}{\beta^2\Sigma_0+\sigma^2},\\
\beta^2\Sigma_0+\sigma^2
&=2\beta^2\Sigma_0,\\
\beta^2\Sigma_0&=\sigma^2,\\
\beta&=\frac{\sigma}{\sqrt{\Sigma_0}},\\
\lambda&=\frac{\sqrt{\Sigma_0}}{2\sigma}.
\end{aligned}
$$

[线性定价与线性交易](Asset Pricing/Theoretical AP/cards/Kyle 线性均衡猜测 - 线性定价与线性交易)（线性均衡的完整推导）
$$
p=p_0+\lambda X=p_0+\lambda(x+Z_u),
\qquad
x=\beta(v-p_0).
$$
其背后的闭合逻辑是
$$
\text{线性交易}
\Longrightarrow
p=E[v\mid X]\text{ 线性}
\Longrightarrow
\text{知情者最优反应线性}.
$$
这和 [Grossman-Stiglitz](Asset Pricing/Theoretical AP/04_Information_Beliefs_and_Learning#10.2 Grossman-Stiglitz Model) 共用同一个技术核心：
$$
\text{normal prior}+\text{normal noise}+\text{linear signal}
\Longrightarrow
\text{posterior mean is linear}.
$$
求解 $\lambda$ 和 $\beta$ 使得：
1. 市场清算：$x+Z_u=X$
2. 做市商零利润：$p=E[v|X]$
3. 知情者最优：给定 $p(\cdot)$，选择 $x$ 最大化利润

这里 $\lambda$ 是 **Kyle's lambda**，衡量价格冲击强度：**订单流每增加一单位，价格上升 $\lambda$ 单位**。

#### 10.4.3 知情者最优反应

知情者利润为 $\Pi(x;v,Z_u)=(v-p)x$。风险中性下，其最优反应满足
$$
\begin{aligned}
\max_x E[\Pi(x;v,Z_u)\mid v]
&\Longleftrightarrow \max_x E[(v-p)x|v] \\
&\Longleftrightarrow \max_x E\{[v-p_0-\lambda(x+Z_u)]x|v\}.
\end{aligned}
$$

$$
\begin{aligned}
E[Z_u|v]&=0 \qquad (Z_u \perp v),\\
E\{[v-p_0-\lambda(x+Z_u)]x|v\}
&=E\!\left[\big((v-p_0-\lambda x)-\lambda Z_u\big)x\mid v\right] \\
&=\big(v-p_0-\lambda x\big)x-\lambda x\,E[Z_u|v] \\
&=\big(v-p_0-\lambda x\big)x,
\end{aligned}
$$

$$
\max_x E[\Pi(x;v,Z_u)\mid v]
\Longleftrightarrow
\max_x \big(v-p_0-\lambda x\big)x.
$$
F.O.C $x$ ：
$$
  v-p_0-2\lambda x=0
  \Longrightarrow
  x=\frac{1}{2\lambda}(v-p_0)
  \Longrightarrow
  \beta=\frac{1}{2\lambda}.
$$

#### 10.4.4 做市商的贝叶斯更新

由线性策略
$$
X=\beta(v-p_0)+Z_u
\Longleftrightarrow
X|v \sim N\!\left(\beta(v-p_0),\sigma^2\right).
$$
做市商后验满足
$$
\begin{aligned}
p(v|X)
&\propto p(X|v)p(v) \\
&\propto \exp\left\{
-\frac{(X-\beta(v-p_0))^2}{2\sigma^2}
-\frac{(v-v_0)^2}{2\Sigma_0}
\right\}.
\end{aligned}
$$

$$
\begin{aligned}
v|X \sim n(X|v)n(v)
&\Longleftrightarrow
\exp\left\{
-\frac{(X-\beta(v-p_0))^2}{2\sigma^2}
-\frac{(v-v_0)^2}{2\Sigma_0}
\right\} \\
&\Longleftrightarrow
\exp\left\{
-\frac{1}{2}\left[
\left(\frac{\beta^2}{\sigma^2}+\frac{1}{\Sigma_0}\right)v^2
-2\left(\frac{\beta(X+\beta p_0)}{\sigma^2}+\frac{v_0}{\Sigma_0}\right)v
\right]
\right\} \\
&\Longleftrightarrow
\exp\left\{
-\frac{1}{2}\left(\frac{\beta^2}{\sigma^2}+\frac{1}{\Sigma_0}\right)
\left[
v^2-2
\frac{\frac{\beta(X+\beta p_0)}{\sigma^2}+\frac{v_0}{\Sigma_0}}
{\frac{\beta^2}{\sigma^2}+\frac{1}{\Sigma_0}}
v
\right]
\right\} \\
&\Longleftrightarrow
\exp\left\{
-\frac{1}{2}\left(\frac{\beta^2}{\sigma^2}+\frac{1}{\Sigma_0}\right)
\left(
v-
\frac{\frac{\beta(X+\beta p_0)}{\sigma^2}+\frac{v_0}{\Sigma_0}}
{\frac{\beta^2}{\sigma^2}+\frac{1}{\Sigma_0}}
\right)^2
\right\}
\qquad (\text{完成平方，略去常数项}) \\
&\Longleftrightarrow
v|X \sim
N\!\left(
\frac{\beta(X+\beta p_0)/\sigma^2+v_0/\Sigma_0}{\beta^2/\sigma^2+1/\Sigma_0},
\frac{1}{\beta^2/\sigma^2+1/\Sigma_0}
\right).
\end{aligned}
$$
均衡中必须有
$$
p=E[v|X]=p_0+\lambda X.
$$

$$
\left\{
\begin{aligned}
\lambda&=\frac{\beta/\sigma^2}{\beta^2/\sigma^2+1/\Sigma_0},\\
p_0&=\frac{\beta^2 p_0/\sigma^2+v_0/\Sigma_0}{\beta^2/\sigma^2+1/\Sigma_0}.
\end{aligned}
\right.
$$
第二式化简为
$$
p_0\left(\frac{\beta^2}{\sigma^2}+\frac{1}{\Sigma_0}\right) =
\frac{\beta^2}{\sigma^2}p_0+\frac{v_0}{\Sigma_0}
\Longleftrightarrow
p_0=v_0.
$$
再结合 $\beta=1/(2\lambda)$，
$$
\begin{aligned}
\lambda
&=\frac{\beta/\sigma^2}{\beta^2/\sigma^2+1/\Sigma_0}
\Longleftrightarrow
\frac{1}{2\beta}=\frac{\beta/\sigma^2}{\beta^2/\sigma^2+1/\Sigma_0} \\
&\Longleftrightarrow
\beta^2/\sigma^2+1/\Sigma_0=2\beta^2/\sigma^2
\Longleftrightarrow
\frac{\beta^2}{\sigma^2}=\frac{1}{\Sigma_0}.
\end{aligned}
$$
取正根，解出
$$
\beta=\sqrt{\frac{\sigma^2}{\Sigma_0}}=\frac{\sigma}{\sqrt{\Sigma_0}},
\qquad
\lambda=\frac{\sqrt{\Sigma_0}}{2\sigma}.
$$
因此均衡唯一。

#### 10.4.5 均衡价格与信息揭示程度

代回均衡系数：
$$
\begin{aligned}
p
&=v_0+\lambda[\beta(v-v_0)+Z_u] \\
&=v_0+\frac{1}{2}(v-v_0)+\lambda Z_u \\
&=\frac{v_0+v}{2}+\frac{1}{2}\sqrt{\frac{\Sigma_0}{\sigma^2}}\,Z_u.
\end{aligned}
$$

$$
\begin{aligned}
\operatorname{Var}(p)
&=\operatorname{Var}\!\left(\frac{v_0+v}{2}+\lambda Z_u\right) \\
&=\operatorname{Var}\!\left(\frac{v}{2}+\lambda Z_u\right) \\
&=\frac{1}{4}\operatorname{Var}(v)+\lambda^2\operatorname{Var}(Z_u)+2\cdot \frac{1}{2}\lambda\,\operatorname{Cov}(v,Z_u) \\
&=\frac{1}{4}\Sigma_0+\lambda^2\sigma^2 \qquad (v \perp Z_u)\\
&=\frac{1}{4}\Sigma_0+\frac{1}{4}\Sigma_0=\frac{1}{2}\Sigma_0.
\end{aligned}
$$
价格方差恰好等于先验不确定性的二分之一，因此常说：单期 Kyle 均衡中，价格“**揭示了一半信息**”。

#### 10.4.6 知情者利润

知情者的利润来自两部分：与资产最终价值 $v$ 的差值，以及支付价格 $p$ 的差值。在单期模型中，知情者最后以价格 $p$ 买入（或卖出）$x$ 单位资产，随后以价值 $v$ 结算，因此利润为
$$
\Pi(x;v,Z_u)=(v-p)x.
$$
**条件期望利润**：将均衡条件 $p=p_0+\lambda X$、$X=x+Z_u$ 及 $x=\beta(v-p_0)$ 代入：
$$
\begin{aligned}
E[(v-p)x\mid v]
&=
E\{[v-(p_0+\lambda(x+Z_u))]x\mid v\} \\
&=
E\{[v-p_0-\lambda x-\lambda Z_u]x\mid v\} \\
&=
(v-p_0-\lambda x)x-\lambda x\,E[Z_u\mid v] \\
&=
(v-p_0-\lambda x)x \qquad (Z_u\perp v\Rightarrow E[Z_u\mid v]=0) \\
&=
\Big(v-p_0-\lambda\beta(v-p_0)\Big)\beta(v-p_0) \\
&=
\beta(v-p_0)^2(1-\lambda\beta).
\end{aligned}
$$
代入已求得的参数 $\beta=\sigma/\sqrt{\Sigma_0}$ 和 $\lambda=\sqrt{\Sigma_0}/(2\sigma)$（从而 $\lambda\beta=1/2$）：

**含义**：$\beta$ 是知情者的交易策略系数——每单位私人信息 $(v-p_0)$ 触发 $x=\beta(v-p_0)$ 的交易量；$\lambda$ 是 Kyle's lambda，衡量价格冲击强度，订单流每增一单位价格上升 $\lambda$ 单位。两者的乘积锁定为 $1/2$，对应**价格方差等于先验不确定性的一半**，即价格"揭示了一半信息"。
$$
\begin{aligned}
E[(v-p)x\mid v]
&=
\frac{\sigma}{\sqrt{\Sigma_0}}(v-p_0)^2\left(1-\frac{1}{2}\right) \\
&=
\frac{\sigma}{2\sqrt{\Sigma_0}}(v-p_0)^2.
\end{aligned}
$$
设 $d\equiv v-v_0=v-p_0$，即
$$
E[(v-p)x\mid v] =
\frac{\sigma}{2\sqrt{\Sigma_0}}\,d^2.
$$
**无条件期望利润**：对 $v$ 取全期望，利用 $v\sim N(v_0,\Sigma_0)$ 即 $d=v-v_0\sim N(0,\Sigma_0)$：
$$
\begin{aligned}
E[(v-p)x]
&=
\frac{\sigma}{2\sqrt{\Sigma_0}}\,E[d^2] \\
&=
\frac{\sigma}{2\sqrt{\Sigma_0}}\,\operatorname{Var}(d) \\
&=
\frac{\sigma}{2\sqrt{\Sigma_0}}\,\Sigma_0 \\
&=
\frac{\sigma\sqrt{\Sigma_0}}{2}.
\end{aligned}
$$
**经济含义**：
- 条件利润 $\frac{\sigma}{2\sqrt{\Sigma_0}}(v-v_0)^2$ 与知情者私人信息的精确度 $(v-v_0)^2$ 成正比——信息越"新"（偏离先验越远），利润越高；
- 无条件利润 $\frac{\sigma\sqrt{\Sigma_0}}{2}$ 则仅取决于**噪声交易者的交易活跃度** $\sigma$ 和**先验不确定性** $\sqrt{\Sigma_0}$，与具体信息内容无关；
- 这说明知情者在均衡中**系统性获得正利润**，且该利润恰好补偿了其信息生产成本（构造私人信息需要付出交易成本）。

为后面连续时间模型中的结果作了基准比较（连续时间模型中该利润恰好翻倍）。

##### Exercise 2

^exercise-kyle-two-period

Solve a two-period Kyle model, in which trader can trade two times before the information is released. Assume that the liquidity trades are iid normal $N(0,\sigma^2/2)$ for both trading periods. Given the informed trader’s information $v$, what is the expected trading profit for the informed in the one-period and two-period models? What are the informed trading profit when $v=v_0$? It seems that the informed trader can make a trading profit even when his information is the same as the public. How do you interpret this?

[Kyle Exercise 2](Asset Pricing/Theoretical AP/cards/Kyle Exercise 2 - 两期利润比较与解释)（两期利润比较与解释）


结论：记
$$
d:=v-v_0,
\qquad
y\approx 0.4450418679.
$$
一期模型利润为
$$
\begin{aligned}
E[\Pi^{(1)}\mid v]
&=
\frac{\sigma}{2\sqrt{\Sigma_0}}d^2, \\
E[\Pi^{(1)}]
&=
\frac{\sigma\sqrt{\Sigma_0}}{2}, \\
E[\Pi^{(1)}\mid v=v_0]
&=
0.
\end{aligned}
$$
两期模型利润为
$$
\begin{aligned}
E[\Pi^{(2)}\mid v]
&=
\frac{\sigma\sqrt{y}}{\sqrt{2\Sigma_0}(1+y)}d^2
+
\frac{\sigma}{2\sqrt{2\Sigma_0}}
\frac{d^2+\Sigma_0 y}{(1+y)^{3/2}}, \\
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
E[\Pi^{(1)}], \\
E[\Pi^{(2)}\mid v=v_0]
&=
\frac{\sigma\sqrt{\Sigma_0}}{2\sqrt{2}}\frac{y}{(1+y)^{3/2}} \\
&\approx
0.0906\,\sigma\sqrt{\Sigma_0}
>
0.
\end{aligned}
$$
$v=v_0$ 只表示 realized value 恰好等于公开先验均值，并不表示知情者与公众拥有同样的信息；两期交易允许知情者先通过第一期订单流影响价格学习，再在第二期利用剩余误价继续交易，所以即使 $v=v_0$，条件利润仍可为正。


### 10.5 离散多期 Kyle 模型

::::{admonition} Definition (Discrete Multi-period Kyle Equilibrium)
离散 $N$ 期 Kyle 均衡由线性知情交易、竞争做市商定价和后验方差递推共同给出。
::::

基本系统：

$$
\left\{
\begin{aligned}
t&=1,\ldots,N,\\
v&\sim N(p_0,\Sigma_0),\\
u_t&\overset{i.i.d.}{\sim}N(0,\sigma_u^2),\qquad \operatorname{Cov}(v,u_t)=0,\\
x_t&=\beta_t(v-p_{t-1}),\\
y_t&=x_t+u_t,\\
p_t&=E[v\mid y_1,\ldots,y_t]
=p_{t-1}+\lambda_t y_t,\\
V_{t-1}(v,p_{t-1})
&=\alpha_{t-1}(v-p_{t-1})^2+\delta_{t-1}.
\end{aligned}
\right.
$$

##### 单期模型

令 $d_0:=v-p_0$。知情者给定线性定价 $p_1=p_0+\lambda_1y_1$：

$$
\begin{aligned}
\max_{x_1}\ E[(v-p_1)x_1\mid v]
&=\max_{x_1}\ E[(v-p_0-\lambda_1(x_1+u_1))x_1\mid v]\\
&=\max_{x_1}\ (d_0-\lambda_1x_1)x_1,\\
0&=d_0-2\lambda_1x_1,\\
x_1&=\frac{d_0}{2\lambda_1},\\
\beta_1&=\frac{1}{2\lambda_1}.
\end{aligned}
$$

做市商正态投影：

$$
\begin{aligned}
\lambda_1
&=\frac{\operatorname{Cov}(v,y_1)}
{\operatorname{Var}(y_1)}
=\frac{\beta_1\Sigma_0}{\beta_1^2\Sigma_0+\sigma_u^2}\\
&=\frac{\frac{1}{2\lambda_1}\Sigma_0}
{\frac{1}{4\lambda_1^2}\Sigma_0+\sigma_u^2},\\
\lambda_1^2
&=\frac{\Sigma_0}{4\sigma_u^2},\\
\lambda_1
&=\frac{1}{2}\sqrt{\frac{\Sigma_0}{\sigma_u^2}},\\
\beta_1
&=\frac{\sigma_u}{\sqrt{\Sigma_0}}.
\end{aligned}
$$

##### 两期模型

第二期是终端期，给定 $p_1$ 后

$$
\begin{aligned}
V_1(v,p_1)
&=\max_{x_2}\ E[(v-p_2)x_2\mid v,p_1]\\
&=\frac{(v-p_1)^2}{4\lambda_2}.
\end{aligned}
$$

第一期令 $d_0=v-p_0$ 且 $p_1=p_0+\lambda_1(x_1+u_1)$：

$$
\begin{aligned}
V_0(v,p_0)
&=\max_{x_1}\ E\left[
x_1(v-p_1)+\frac{(v-p_1)^2}{4\lambda_2}
\mid v,p_0
\right]\\
&=\max_{x_1}
\left\{
\begin{aligned}
&x_1(d_0-\lambda_1x_1)\\
&\quad+\frac{(d_0-\lambda_1x_1)^2+\lambda_1^2\sigma_u^2}{4\lambda_2}
\end{aligned}
\right\},\\
0
&=d_0-2\lambda_1x_1
-\frac{2\lambda_1(d_0-\lambda_1x_1)}{4\lambda_2},\\
\beta_1
&=\frac{x_1}{d_0}
=\frac{2\lambda_2-\lambda_1}{\lambda_1(4\lambda_2-\lambda_1)}.
\end{aligned}
$$

##### 逆向动态规划

令 $d_{t-1}:=v-p_{t-1}$。给定未来价值函数
$V_t(v,p_t)=\alpha_t(v-p_t)^2+\delta_t$：

$$
\begin{aligned}
V_{t-1}(v,p_{t-1})
&=\max_{x_t}E\left[
x_t(v-p_t)+V_t(v,p_t)
\mid v,p_{t-1}
\right]\\
&=\max_{x_t}
\left\{
\begin{aligned}
&x_t(d_{t-1}-\lambda_tx_t)\\
&\quad+\alpha_t\left[(d_{t-1}-\lambda_tx_t)^2+\lambda_t^2\sigma_u^2\right]\\
&\quad+\delta_t
\end{aligned}
\right\}.
\end{aligned}
$$

FOC：

$$
\begin{aligned}
0
&=d_{t-1}-2\lambda_tx_t
-2\alpha_t\lambda_t(d_{t-1}-\lambda_tx_t),\\
x_t
&=\frac{1-2\alpha_t\lambda_t}
{2\lambda_t(1-\alpha_t\lambda_t)}d_{t-1},\\
\beta_t
&=\frac{1-2\alpha_t\lambda_t}
{2\lambda_t(1-\alpha_t\lambda_t)},\\
1-\lambda_t\beta_t
&=\frac{1}{2(1-\alpha_t\lambda_t)}.
\end{aligned}
$$

代回并匹配 $d_{t-1}^2$ 项：

$$
\begin{aligned}
\alpha_{t-1}
&=\beta_t(1-\lambda_t\beta_t)
+\alpha_t(1-\lambda_t\beta_t)^2\\
&=
\frac{1-2\alpha_t\lambda_t}
{2\lambda_t(1-\alpha_t\lambda_t)}
\frac{1}{2(1-\alpha_t\lambda_t)}
+\alpha_t\frac{1}{4(1-\alpha_t\lambda_t)^2}\\
&=
\frac{1-2\alpha_t\lambda_t+\alpha_t\lambda_t}
{4\lambda_t(1-\alpha_t\lambda_t)^2}\\
&=
\frac{1}{4\lambda_t(1-\alpha_t\lambda_t)}.
\end{aligned}
$$

常数项递推：

$$
\begin{aligned}
\delta_{t-1}
&=\delta_t+\alpha_t\lambda_t^2\sigma_u^2,
\qquad
\alpha_N=\delta_N=0.
\end{aligned}
$$

##### 前向贝叶斯滤波

条件于历史价格或订单流，$d_{t-1}=v-p_{t-1}$ 的后验方差为 $\Sigma_{t-1}$，且

$$
\left\{
\begin{aligned}
y_t&=\beta_t(v-p_{t-1})+u_t,\\
\operatorname{Cov}(v,y_t\mid y_1,\ldots,y_{t-1})
&=\beta_t\Sigma_{t-1},\\
\operatorname{Var}(y_t\mid y_1,\ldots,y_{t-1})
&=\beta_t^2\Sigma_{t-1}+\sigma_u^2.
\end{aligned}
\right.
$$

做市商的线性投影系数和后验方差更新为

$$
\begin{aligned}
\lambda_t
&=\frac{\operatorname{Cov}(v,y_t\mid y_1,\ldots,y_{t-1})}
{\operatorname{Var}(y_t\mid y_1,\ldots,y_{t-1})}\\
&=\frac{\beta_t\Sigma_{t-1}}
{\beta_t^2\Sigma_{t-1}+\sigma_u^2},\\
\Sigma_t
&=\Sigma_{t-1}
-\frac{\operatorname{Cov}(v,y_t\mid y_1,\ldots,y_{t-1})^2}
{\operatorname{Var}(y_t\mid y_1,\ldots,y_{t-1})}\\
&=\Sigma_{t-1}
-\lambda_t\beta_t\Sigma_{t-1}\\
&=(1-\lambda_t\beta_t)\Sigma_{t-1}.
\end{aligned}
$$

##### 动态均衡差分系统

离散多期 Kyle 均衡可写成前向-后向耦合系统：

$$
\left\{
\begin{aligned}
\beta_t
&=\frac{1-2\alpha_t\lambda_t}
{2\lambda_t(1-\alpha_t\lambda_t)},\\
\alpha_{t-1}
&=\frac{1}{4\lambda_t(1-\alpha_t\lambda_t)},\\
\delta_{t-1}
&=\delta_t+\alpha_t\lambda_t^2\sigma_u^2,\\
\lambda_t
&=\frac{\beta_t\Sigma_{t-1}}
{\beta_t^2\Sigma_{t-1}+\sigma_u^2},\\
\Sigma_t
&=(1-\lambda_t\beta_t)\Sigma_{t-1},\\
\alpha_N&=0,\qquad \delta_N=0,\qquad \Sigma_0\ \text{given}.
\end{aligned}
\right.
$$

##### 方差分解

价格创新为 $p_t-p_{t-1}=\lambda_ty_t$，因此

$$
\begin{aligned}
\operatorname{Var}(p_t)-\operatorname{Var}(p_{t-1})
&=\operatorname{Var}(p_t-p_{t-1})\\
&=\lambda_t^2\operatorname{Var}(y_t\mid y_1,\ldots,y_{t-1})\\
&=\lambda_t^2(\beta_t^2\Sigma_{t-1}+\sigma_u^2)\\
&=\lambda_t\beta_t\Sigma_{t-1}.
\end{aligned}
$$

所以

$$
\begin{aligned}
\operatorname{Var}(p_t)
&=\sum_{i=1}^t\lambda_i\beta_i\Sigma_{i-1},\\
\Sigma_t
&=(1-\lambda_t\beta_t)\Sigma_{t-1},\\
\operatorname{Var}(p_t)+\Sigma_t
&=\operatorname{Var}(p_{t-1})+\lambda_t\beta_t\Sigma_{t-1}
+(1-\lambda_t\beta_t)\Sigma_{t-1}\\
&=\operatorname{Var}(p_{t-1})+\Sigma_{t-1}\\
&=\Sigma_0.
\end{aligned}
$$

多期 Kyle 的闭环是：做市商用订单流前向滤波 $(\lambda_t,\Sigma_t)$，知情者用未来利润逆向决定 $(\beta_t,\alpha_t)$；二者通过 $\lambda_t\beta_t$ 控制每期的信息揭示速度。



## 11. 连续时间 Kyle 模型（Back, 1992）

### 11.0 核心均衡闭环

::::{admonition} Definition (Back 1992 Continuous-time Kyle Equilibrium)
连续时间 Kyle 均衡由线性价格、线性交易速度、Kalman-Bucy 滤波和 insider HJB 最优性共同闭合。
::::

基本系统：

$$
\left\{
\begin{aligned}
t&\in[0,1],\\
\tilde v&\sim N(\bar v,\sigma_v^2),\\
Z_t&=\sigma_zB_t,\qquad B_t\ \text{standard Brownian motion},\\
X_t&=\int_0^t\theta_s\,ds,\\
Y_t&=X_t+Z_t,\\
P_t&=E[\tilde v\mid\mathcal F_t^Y],\qquad
\mathcal F_t^Y=\sigma(Y_s:0\le s\le t),\\
\max_{\theta}\quad
&E\left[\int_0^1(\tilde v-P_t)\theta_t\,dt\right],\\
E\int_0^1P_t^2\,dt&<\infty.
\end{aligned}
\right.
$$

线性均衡猜想：

$$
\left\{
\begin{aligned}
P_t&=\bar v+\lambda Y_t,\\
\theta_t&=\frac{\tilde v-P_t}{(1-t)\lambda}
=\frac{\tilde v-\bar v-\lambda Y_t}{(1-t)\lambda}.
\end{aligned}
\right.
$$

##### 做市商滤波

给定 $\theta_t$，订单流满足

$$
\begin{aligned}
dY_t
&=\theta_tdt+\sigma_zdB_t\\
&=\frac{\tilde v-\bar v-\lambda Y_t}{(1-t)\lambda}dt+\sigma_zdB_t,
\qquad
d\tilde v=0.
\end{aligned}
$$

令

$$
\hat v_t:=E[\tilde v\mid\mathcal F_t^Y],
\qquad
\Sigma_t:=E[(\tilde v-\hat v_t)^2\mid\mathcal F_t^Y].
$$

Kalman-Bucy 滤波给出

$$
\begin{aligned}
d\hat v_t
&=
\frac{\Sigma_t}{\lambda\sigma_z^2(1-t)}
\left[
dY_t-\frac{\hat v_t-\bar v-\lambda Y_t}{\lambda(1-t)}dt
\right],\\
\frac{d\Sigma_t}{dt}
&=
-\frac{\Sigma_t^2}{\lambda^2\sigma_z^2(1-t)^2}.
\end{aligned}
$$

均衡要求 $P_t=\hat v_t=\bar v+\lambda Y_t$，所以 $dP_t=d\hat v_t=\lambda dY_t$。此时滤波漂移校正项为 $0$，比较 $dY_t$ 系数：

$$
\begin{aligned}
\frac{\Sigma_t}{\lambda\sigma_z^2(1-t)}
&=\lambda,\\
\Sigma_t
&=\lambda^2\sigma_z^2(1-t),\\
\Sigma_0=\sigma_v^2
&=\lambda^2\sigma_z^2,\\
\lambda
&=\frac{\sigma_v}{\sigma_z},\\
\Sigma_t
&=\sigma_v^2(1-t).
\end{aligned}
$$

##### 知情者 HJB

给定 $P_t=\bar v+\lambda Y_t$ 且 $\lambda\sigma_z=\sigma_v$，

$$
\begin{aligned}
dP_t
&=\lambda dY_t\\
&=\lambda\theta_tdt+\lambda\sigma_zdB_t\\
&=\lambda\theta_tdt+\sigma_vdB_t.
\end{aligned}
$$

定义 insider 价值函数

$$
J(t,p,v)
:=
\max_{\theta}
E\left[
\int_t^1(v-P_u)\theta_u\,du
\mid P_t=p
\right].
$$

HJB：

$$
\begin{aligned}
0
&=\sup_{\theta}
\left\{
\begin{aligned}
&(v-p)\theta\\
&\quad+J_t+\lambda\theta J_p+\frac{1}{2}\sigma_v^2J_{pp}
\end{aligned}
\right\}\\
&=
J_t+\frac{1}{2}\sigma_v^2J_{pp}
+\sup_{\theta}\theta(v-p+\lambda J_p).
\end{aligned}
$$

由于 $\theta$ 线性进入，有限 supremum 要求

$$
\begin{aligned}
v-p+\lambda J_p&=0,\\
J_p&=\frac{p-v}{\lambda},\\
J(t,p,v)
&=\frac{(v-p)^2}{2\lambda}+A(t),\\
J_{pp}&=\frac{1}{\lambda}.
\end{aligned}
$$

剩余 PDE 与终端条件：

$$
\begin{aligned}
0&=J_t+\frac{1}{2}\sigma_v^2J_{pp}
=A'(t)+\frac{\sigma_v^2}{2\lambda},\\
A(t)&=\frac{\sigma_v^2(1-t)}{2\lambda},\\
J(t,p,v)
&=\frac{(v-p)^2+\sigma_v^2(1-t)}{2\lambda}.
\end{aligned}
$$

于是

$$
\begin{aligned}
\theta_t^*
&=\frac{\tilde v-P_t}{(1-t)\lambda},\\
P_t&=\bar v+\frac{\sigma_v}{\sigma_z}Y_t,\\
\Sigma_t&=\sigma_v^2(1-t),\\
P_1&=\tilde v.
\end{aligned}
$$

##### 验证与利润

::::{admonition} Verification Theorem (Continuous-time Kyle)
若光滑候选函数 $J(t,P_t,v)$ 满足 HJB，且随机积分为真鞅，则验证只需四步。

**1. Itô 展开**

$$
\begin{aligned}
J(1,P_1,v)
&=J(0,P_0,v)
+\int_0^1
\left(
J_t+\lambda\theta_tJ_p+\frac{1}{2}\sigma_v^2J_{pp}
\right)dt\\
&\quad+\int_0^1\sigma_vJ_p\,dB_t.
\end{aligned}
$$

**2. 任意策略的上界**

$$
\begin{aligned}
0
&=\sup_{\theta}
\left\{(v-P_t)\theta
+J_t+\lambda\theta J_p+\frac{1}{2}\sigma_v^2J_{pp}\right\}\\
&\Longrightarrow
J_t+\lambda\theta_tJ_p+\frac{1}{2}\sigma_v^2J_{pp}
\le -(v-P_t)\theta_t,\\
\mathbb E\left[\int_0^1(v-P_t)\theta_tdt\right]
&\le
J(0,P_0,v)-\mathbb E[J(1,P_1,v)].
\end{aligned}
$$

**3. 候选最优策略取等**

$$
\begin{aligned}
(v-P_t)\theta_t^*
+J_t+\lambda\theta_t^*J_p+\frac{1}{2}\sigma_v^2J_{pp}
&=0,\\
\mathbb E\left[\int_0^1(v-P_t)\theta_t^*dt\right]
&=
J(0,P_0,v)-\mathbb E[J(1,P_1,v)].
\end{aligned}
$$

**4. 终端横截条件**

$$
\begin{aligned}
P_1&=v,\\
\mathbb E[J(1,P_1,v)]
&=\mathbb E\left[\frac{(v-P_1)^2}{2\lambda}\right]=0,\\
\mathbb E\left[\int_0^1(v-P_t)\theta_t^*dt\right]
&=J(0,P_0,v)
\ge
\mathbb E\left[\int_0^1(v-P_t)\theta_tdt\right].
\end{aligned}
$$
::::

事前期望利润为

$$
\begin{aligned}
E[J(0,\bar v,\tilde v)]
&=E\left[
\frac{(\tilde v-\bar v)^2+\sigma_v^2}{2\lambda}
\right]\\
&=\frac{2\sigma_v^2}{2\lambda}
=\frac{\sigma_v^2}{\lambda}
=\sigma_v\sigma_z.
\end{aligned}
$$

连续时间 Kyle 的核心性质是

$$
\left\{
\begin{aligned}
\lambda&=\frac{\sigma_v}{\sigma_z},\\
\theta_t^*&=\frac{\tilde v-P_t}{(1-t)\lambda},\\
\Sigma_t&=\sigma_v^2(1-t),\\
E[\Pi]&=\sigma_v\sigma_z
=2\cdot\frac{1}{2}\sigma_v\sigma_z.
\end{aligned}
\right.
$$

### 11.1 设定

两类资产：
$$
\begin{aligned}
\text{无风险资产：利率 }0,\qquad &\text{（Risk‑free asset）}\\[4pt]
\text{风险资产：在 }t=1\text{ 支付 }\tilde v. &\text{（Risky asset）}
\end{aligned}
$$
其中 $\tilde v$ 的分布为
$$
\tilde v \sim N(\bar v,\sigma_v^2),
$$
或更一般地，可服从任意连续分布。**知情者**（insider）在 $t=0$ 即观察到 $\tilde v$，且为风险中性。

连续时间交易框架下，噪声（liquidity）交易记为
$$
\begin{aligned}
Z_t &= \sigma_z\,B_t,\qquad &\text{其中 } B_t \text{ 为 Brownian motion}.
\end{aligned}
$$
知情者控制交易速度 $\theta_t$，累计订单流为
$$
X_t = \int_0^t \theta_s\,\mathrm{d}s.
$$
做市商仅能观测到净订单流
$$
\begin{aligned}
Y_t &= X_t + Z_t,\qquad &\mathcal{F}_t^Y = \sigma\bigl(Y_s : 0\le s\le t\bigr).
\end{aligned}
$$
其中 $X_t$ 为知情者订单，$Z_t$ 为噪声订单，故做市商只能依据 $Y$ 的历史来学习 $\tilde v$。

在风险中性且竞争的假设下，价格满足
$$
P_t = \mathbb{E}\bigl[\tilde v\,|\,\mathcal{F}_t^Y\bigr].
$$
知情者选择适配 $(\tilde v, Z)$ 的交易速度过程 $\theta_t$，目标是最大化预期累计利润：
$$
\max_{\theta}\ \mathbb{E}\!\left[\int_0^1 (\tilde v - P_t)\,\theta_t\,\mathrm{d}t\right],
\qquad X_t = \int_0^t \theta_s\,\mathrm{d}s.
$$
为排除 **doubling strategy**（亏损时加倍下注），要求
$$
\mathbb{E}\int_0^1 P_t^2\,\mathrm{d}t < \infty,
$$
即若允许该积分为无穷，知情者可构造使终期期望利润无限大的策略（尽管路径上可能出现巨额亏损）。

### 11.2 均衡猜测

做市商在 **线性高斯** 环境下的定价规则为
$$
\begin{aligned}
P_t &= \mathbb{E}[\tilde v\mid\mathcal{F}_t^Y] = \bar v + \lambda Y_t.
\end{aligned}
$$
若信息在终点 $t=1$ 完全揭示，则
$$
\begin{aligned}
P_1 &= \tilde v \Longleftrightarrow \bar v + \lambda Y_1 = \tilde v \Longleftrightarrow
Y_1 = \frac{\tilde v - \bar v}{\lambda}.
\end{aligned}
$$
对任意 $t<1$ 的剩余误差衡量的是在时点 $t$ 尚未被市场学习到的价值信息。利用做市商的定价规则 $P_t=\bar v+\lambda Y_t$，可得
$$
\begin{aligned}
\frac{\tilde v - P_t}{\lambda}
    &= \frac{\tilde v - (\bar v+\lambda Y_t)}{\lambda} \\
    &= \frac{\tilde v - \bar v}{\lambda} - Y_t .
\end{aligned}
$$
于是剩余误差可以写成
$$
\frac{\tilde v - \bar v}{\lambda} - Y_t = \frac{\tilde v - P_t}{\lambda}.
$$
该式表明：真实价值 $\tilde v$ 与先验均值 $\bar v$ 之间的标准化偏差减去已观测的净订单流 $Y_t$，正等价于**真实价值与当前报价** $P_t$ 之差的标准化形式，后者正是知情者能够利用的超额信息。[v-P 关系](Asset Pricing/Theoretical AP/cards/v-P 关系)

| $t$         | $Y_t$                                             | $P_t$                  | 误差                                                      |
| ----------- | ------------------------------------------------- | ---------------------- | ------------------------------------------------------- |
| $0$         | $0$                                               | $\bar v$               | $\displaystyle \frac{\tilde v - \bar v}{\lambda}$       |
| $t\in(0,1)$ | $Y_t$                                             | $\bar v + \lambda Y_t$ | $\displaystyle \frac{\tilde v - \bar v}{\lambda} - Y_t$ |
| $1$         | $\displaystyle \frac{\tilde v - \bar v}{\lambda}$ | $\tilde v$             | $0$                                                     |

知情者的交易速度假设与该误差成正比，并以剩余时间 $1-t$ 归一化：
$$
\begin{aligned}
\theta_t &= \frac{\frac{\tilde v - \bar v}{\lambda} - Y_t}{1-t}= \frac{\tilde v - P_t}{(1-t)\lambda}.
\end{aligned}
$$
因此均衡的价格与交易速度可以写成
$$
\begin{aligned}
P_t &= \bar v + \lambda Y_t,\\
\theta_t &= \frac{\tilde v - P_t}{(1-t)\lambda}.
\end{aligned}
$$

### 11.3 做市商定价规则的验证：Kalman 滤波

[Asset Pricing/Theoretical AP/cards/Back 1992 - 净订单流 SDE](Asset Pricing/Theoretical AP/cards/Back 1992 - 净订单流 SDE) · [Asset Pricing/Theoretical AP/cards/Kalman-Bucy - 一般公式](Asset Pricing/Theoretical AP/cards/Kalman-Bucy - 一般公式)（净订单流 SDE / Kalman-Bucy 一般公式）


The market maker know
$$
dY_t=\theta\,dt+\sigma_z\,dB_t =
\frac{\tilde v-\bar v-\lambda Y_t}{(1-t)\lambda}dt+\sigma_z\,dB_t.
$$
同时 $\tilde v$ 本身不动：
$$
d\tilde v=0.
$$
这正是一个线性高斯滤波问题。

[标准滤波定理](https://www.bzarg.com/p/how-a-kalman-filter-works-in-pictures/)：
$$
\begin{aligned}
d\tilde v_t
&=[a_0(t)+a_1(t)\tilde v_t+a_2(t)Y_t]dt+m_1(t)\,dB_{1t}+m_2(t)\,dB_{2t}, \\
dY_t
&=[A_0(t)+A_1(t)\tilde v_t+A_2(t)Y_t]dt+M_1(t)\,dB_{1t}+M_2(t)\,dB_{2t}.
\end{aligned}
$$
其中 $B_{it}$ 相互独立，且 $a_i,m_i,A_i,M_i$ 都只依赖于 $t$。记
$$
\hat v_t=E[\tilde v_t|\mathcal F_t^Y],
\qquad
\Sigma_t=E[(\tilde v_t-\hat v_t)^2|\mathcal F_t^Y],
$$
记滤波误差
$$
e_t:=\tilde v_t-\hat v_t,
\qquad
\Sigma_t=E[e_t^2\mid\mathcal F_t^Y].
$$
由 $\tilde v_t=\hat v_t+e_t$ 可得（Kalman filter）
$$
\begin{aligned}
\underbrace{dW_t}_{\text{innovation}}
&=dY_t-E[dY_t\mid\mathcal F_t^Y] \\
&=dY_t-[A_0(t)+A_1(t)\hat v_t+A_2(t)Y_t]dt \\
&=A_1(t)e_t\,dt+M_1(t)\,dB_{1t}+M_2(t)\,dB_{2t}.
\end{aligned}
$$

$$
E[d\tilde v_t\mid \mathcal F_t^Y] =
[a_0(t)+a_1(t)\hat v_t+a_2(t)Y_t]dt.
$$
滤波估计的增量应写成
$$
\begin{aligned}
d\hat v_t =
[a_0(t)+a_1(t)\hat v_t+a_2(t)Y_t]dt
+K_t\,dW_t,
\end{aligned}
$$
系数 $K_t$ 的正确理解：用新观测创新 $dW_t$ 去修正对**下一瞬间状态 level** 的预测。于是投影对象应是
$$
\begin{aligned}
\tilde v_{t+dt}-E[\tilde v_{t+dt}\mid\mathcal F_t^Y]
&=\tilde v_t+d\tilde v_t-\hat v_t-E[d\tilde v_t\mid\mathcal F_t^Y] \\
&=(\tilde v_t-\hat v_t)+\bigl(d\tilde v_t-E[d\tilde v_t\mid\mathcal F_t^Y]\bigr) \\
&=e_t+\bigl(d\tilde v_t-E[d\tilde v_t\mid\mathcal F_t^Y]\bigr).
\end{aligned}
$$
这里**不能**只写成
$$
d\tilde v_t-E[d\tilde v_t\mid\mathcal F_t^Y],
$$
标准 Kalman gain 应写成
$$
\begin{aligned}
K_t
&=
\frac{E\!\left[\left(\tilde v_{t+dt}-E[\tilde v_{t+dt}\mid\mathcal F_t^Y]\right)dW_t\mid\mathcal F_t^Y\right]}
{E\!\left[(dW_t)^2\mid\mathcal F_t^Y\right]} \\
&=
\frac{E\!\left[\left(e_t+d\tilde v_t-E[d\tilde v_t\mid\mathcal F_t^Y]\right)dW_t\mid\mathcal F_t^Y\right]}
{E\!\left[(dW_t)^2\mid\mathcal F_t^Y\right]}.
\end{aligned}
$$
分母是创新的条件二次变差：
$$
\begin{aligned}
E\!\left[(dW_t)^2\mid\mathcal F_t^Y\right]
&=
\left[M_1^2(t)+M_2^2(t)\right]dt.
\end{aligned}
$$
分子应连续展开为
$$
\begin{aligned}
& E\!\left[\left(\tilde v_{t+dt}-E[\tilde v_{t+dt}\mid\mathcal F_t^Y]\right)dW_t\mid\mathcal F_t^Y\right] \\
&=E\!\Big[\underbrace{\big(e_t+a_1(t)e_t\,dt+m_1(t)\,dB_{1t}+m_2(t)\,dB_{2t}\big)}_{\tilde v_{t+dt}-E[\tilde v_{t+dt}\mid\mathcal F_t^Y]}\underbrace{\big(A_1(t)e_t\,dt+M_1(t)\,dB_{1t}+M_2(t)\,dB_{2t}\big)}_{dW_t}\,\Bigm|\,\mathcal F_t^Y\Big] \\
&=\left[A_1(t)\Sigma_t+m_1(t)M_1(t)+m_2(t)M_2(t)\right]dt+o(dt).
\end{aligned}
$$
于是取一阶主项，得到
$$
\begin{aligned}
K_t
&=\frac{\left[A_1(t)\Sigma_t+m_1(t)M_1(t)+m_2(t)M_2(t)\right]dt}{\left[M_1^2(t)+M_2^2(t)\right]dt} \\
&=\frac{m_1(t)M_1(t)+m_2(t)M_2(t)+A_1(t)\Sigma_t}{M_1^2(t)+M_2^2(t)}.
\end{aligned}
$$
从而一般 Kalman‑Bucy 公式为（详见 [Asset Pricing/Theoretical AP/cards/Kalman-Bucy - 一般公式](Asset Pricing/Theoretical AP/cards/Kalman-Bucy - 一般公式)）
$$
\begin{aligned}
d\hat v_t
&=
[a_0(t)+a_1(t)\hat v_t+a_2(t)Y_t]dt
+\underbrace{\frac{m_1(t)M_1(t)+m_2(t)M_2(t)+A_1(t)\Sigma_t}{M_1^2(t)+M_2^2(t)}}_{K_t \text{ (Kalman Gain)}}\,dW_t,
\end{aligned}
$$
其中 $\hat v_t$ 为状态的最优估计，$\Sigma_t$ 为估计误差协方差，$a_i, A_i, m_i, M_i$ 为系统系数（随时间变化）。

把观测方程改写为
$$
\begin{aligned}
dY_t
&=dX_t+\sigma_zdB_t=\frac{\frac{\tilde v-\bar v}{\lambda}-Y_t}{1-t}dt+\sigma_zdB_t=\frac{\tilde v-\bar v-\lambda Y_t}{\lambda(1-t)}dt+\sigma_zdB_t .
\end{aligned}
$$
便可逐项识别出
$$
\begin{aligned}
d\tilde v_t=0
&\Longrightarrow
a_0(t)=a_1(t)=a_2(t)=0,
\qquad
m_1(t)=m_2(t)=0, \\
dY_t
&\Longrightarrow
A_0(t)=-\frac{\bar v}{\lambda(1-t)},
\quad
A_1(t)=\frac{1}{\lambda(1-t)},
\quad
A_2(t)=-\frac{1}{1-t}, \\
&\qquad
M_1(t)=\sigma_z,
\qquad
M_2(t)=0.
\end{aligned}
$$
由上面的通式连续代入便得
$$
\begin{aligned}
dW_t
&=
dY_t-[A_0(t)+A_1(t)\hat v_t+A_2(t)Y_t]dt \\
&=
dY_t-\left[
-\frac{\bar v}{\lambda(1-t)}
+\frac{\hat v_t}{\lambda(1-t)}
-\frac{1}{1-t}Y_t
\right]dt \\
&=
dY_t-\frac{\hat v_t-\bar v-\lambda Y_t}{\lambda(1-t)}dt.
\end{aligned}
$$
又因为 $a_0=a_1=a_2=m_1=m_2=0$，所以
$$
\begin{aligned}
d\hat v_t
&=
\frac{A_1(t)\Sigma_t}{M_1^2(t)}\,dW_t =
\frac{\frac{1}{\lambda(1-t)}\Sigma_t}{\sigma_z^2}\,dW_t \\
&=
\frac{\Sigma_t}{\lambda\sigma_z^2(1-t)}
\left[
dY_t-\frac{\hat v_t-\bar v-\lambda Y_t}{\lambda(1-t)}dt
\right].
\end{aligned}
$$

$$
\begin{aligned}
\frac{d\Sigma_t}{dt}
&=2a_1(t)\Sigma_t+m_1^2(t)+m_2^2(t)-\frac{\big[m_1(t)M_1(t)+m_2(t)M_2(t)+A_1(t)\Sigma_t\big]^2}{M_1^2(t)+M_2^2(t)} \\
&=0+0+0-\frac{\big[0+0+\frac{1}{\lambda(1-t)}\Sigma_t\big]^2}{\sigma_z^2+0}=-\frac{[A_1(t)\Sigma_t]^2}{M_1^2(t)}=-\frac{\Sigma_t^2}{\sigma_z^2\lambda^2(1-t)^2}.
\end{aligned}
$$
这里的 $\Sigma_t$ 不是新对象，而是前面已经定义过的
$$
\Sigma_t=E[e_t^2\mid\mathcal F_t^Y],
$$
由此得到本题的 Kalman 滤波方程：
$$
\begin{aligned}
d\hat v_t
&=
\frac{\Sigma_t}{\lambda\sigma_z^2(1-t)}
\left[
dY_t-\frac{\hat v_t-\bar v-\lambda Y_t}{\lambda(1-t)}dt
\right],
\end{aligned}
$$

$$
\begin{aligned}
\frac{d\Sigma_t}{dt}
&=
-\frac{\Sigma_t^2}{\sigma_z^2\lambda^2(1-t)^2}.
\end{aligned}
$$

$$
\begin{aligned}
d\hat v_t
&=[a_0(t)+a_1(t)\hat v_t+a_2(t)Y_t]dt
+\frac{m_1(t)M_1(t)+m_2(t)M_2(t)+A_1(t)\Sigma_t}{M_1^2(t)+M_2^2(t)}dW_t, \\
\frac{d\Sigma_t}{dt}
&=2a_1(t)\Sigma_t+m_1^2(t)+m_2^2(t)
-\frac{\big[m_1(t)M_1(t)+m_2(t)M_2(t)+A_1(t)\Sigma_t\big]^2}{M_1^2(t)+M_2^2(t)}
\end{aligned}
$$
若我们要求猜测的定价规则成立，即
$$
\hat v_t=P_t=\bar v+\lambda Y_t \implies d\hat v_t=\lambda\, dY_t.
$$
与滤波方程比较，必须有
$$
\frac{\Sigma_t}{\lambda\sigma_z^2(1-t)}=\lambda \implies \Sigma_t=\sigma_z^2\lambda^2(1-t).
$$
又因为 $\Sigma_0=\sigma_v^2$，故
$$
\lambda=\frac{\sigma_v}{\sigma_z},
\qquad
\Sigma_t=\sigma_v^2(1-t).
$$
这说明剩余私人信息以常数速度线性衰减。

### 11.4 Brownian bridge 解释

由上一节的候选策略
$$
\theta_t=\frac{(\tilde v-\bar v)/\lambda-Y_t}{1-t}
$$
可把净订单流写成
$$
\begin{aligned}
dY_t
&=
\theta_t\,dt+\sigma_z\,dB_t \\
&=
\frac{(\tilde v-\bar v)/\lambda-Y_t}{1-t}dt+\sigma_z\,dB_t.
\end{aligned}
$$
为消除噪声尺度，令
$$
Y_t^*:=\frac{Y_t}{\sigma_z},
\qquad
\xi:=\frac{\tilde v-\bar v}{\lambda\sigma_z}.
$$

$$
\begin{aligned}
dY_t^*
&=
\frac{1}{\sigma_z}dY_t =
\frac{(\tilde v-\bar v)/(\lambda\sigma_z)-Y_t^*}{1-t}dt+dB_t =
\frac{\xi-Y_t^*}{1-t}dt+dB_t.
\end{aligned}
$$
这正是一个从 $Y_0^*=0$ 出发、在终点被拉向 $\xi$ 的 [Brownian bridge 型 SDE](Asset Pricing/Theoretical AP/cards/Back 1992 - Brownian bridge#Brownian bridge 型 SDE 的显式解)，其显式解为
$$
\begin{aligned}
Y_t^*
&=
t\,\xi + (1-t)\int_0^t \frac{1}{1-s}dB_s.
\end{aligned}
$$
当 $\lambda=\sigma_v/\sigma_z$ 时，
$$
\begin{aligned}
\xi
&=
\frac{\tilde v-\bar v}{\lambda\sigma_z} =
\frac{\tilde v-\bar v}{\sigma_v}
\sim N(0,1).
\end{aligned}
$$
又因为 $\tilde v$ 与噪声 Brownian motion $B$ 独立，所以 $\xi$ 与 $B$ 独立。于是 $Y^*$ 是高斯过程。下面协方差计算中省去的两个混合项都为零，因为 $\xi$ 与 Itô 积分独立，且 $E[\int_0^t \frac{1}{1-u}dB_u]=0$。对任意 $0\le s\le t\le 1$，
$$
\begin{aligned}
E[Y_t^*]
&=
0,
\end{aligned}
$$

$$
\begin{aligned}
E[Y_s^*Y_t^*]
&=
E\left[\left(s\xi+(1-s)\int_0^s \frac{1}{1-u}dB_u\right)
\left(t\xi+(1-t)\int_0^t \frac{1}{1-u}dB_u\right)\right] \\
&=
 st\,E[\xi^2]
 +(1-s)(1-t)E\left[\int_0^s \frac{1}{1-u}dB_u\int_0^t \frac{1}{1-u}dB_u\right] \\
&=
 st + (1-s)(1-t)\int_0^s \frac{1}{(1-u)^2}du \\
&=
 st + (1-s)(1-t)\left(\frac{1}{1-s}-1\right) \\
&=
 st+s(1-t) \\
&=
 s \\
&=
 \min\{s,t\}.
\end{aligned}
$$
因此 $Y^*$ 是一个均值为 $0$、协方差函数为 $\min\{s,t\}$ 的高斯过程，也就是说它与标准 Brownian motion 具有相同的有限维分布。由于标准 Brownian motion 是鞅，特别地，关于它自身的过滤，
$$
E[Y_1^*\mid \mathcal F_t^{Y^*}]=Y_t^*.
$$
又因为 $Y_t^*=Y_t/\sigma_z$ 只是对 $Y_t$ 做确定性的线性缩放，所以
$$
\mathcal F_t^{Y^*}=\mathcal F_t^Y.
$$
于是价格可恢复为
$$
\begin{aligned}
P_t
&=
E[\tilde v\mid \mathcal F_t^Y] \\
&=
\bar v+\lambda\sigma_z E\left[\left.\frac{\tilde v-\bar v}{\lambda\sigma_z}\,\right|\,\mathcal F_t^Y\right] \\
&=
\bar v+\lambda\sigma_z E[Y_1^*\mid \mathcal F_t^{Y^*}] \\
&=
\bar v+\lambda\sigma_z Y_t^* \\
&=
\bar v+\lambda Y_t.
\end{aligned}
$$
从 Brownian bridge 的角度验证了猜测的定价规则：虽然 insider 把订单流设计成“桥接”到终点信息，但对做市商而言，标准化后的订单流 $Y^*$ 看起来与标准 Brownian motion 无异，因此最优价格仍是线性过滤规则。

### 11.5 知情者最优性：HJB 推导

[Asset Pricing/Theoretical AP/cards/Back 1992 - HJB 分解](Asset Pricing/Theoretical AP/cards/Back 1992 - HJB 分解)（HJB 分解）


上一节已得 $\lambda=\sigma_v/\sigma_z$，因此价格动态可写成
$$
\begin{aligned}
dP_t
&=
\lambda\,dY_t \\
&=
\lambda\theta_t\,dt+\lambda\sigma_z\,dB_t \\
&=
\lambda\theta_t\,dt+\sigma_v\,dB_t.
\end{aligned}
$$
对 insider 而言，$v$ 在 $t=0$ 就已知，因此是一个常数参数；而未来收益只通过当前时点、当前价格和已知的 $v$ 进入 continuation problem，所以定义价值函数
$$
J(t,p,v)=\sup_{\{\theta_u\}_{u\in[t,1]}}
E\left[\int_t^1 (v-P_u)\theta_u\,du \,\middle|\, P_t=p\right].
$$
把动态规划原理写成一个小时间步 $[t,t+h]$ 上的 Bellman 关系：
$$
\begin{aligned}
J(t,p,v)
&=
\sup_{\theta_{[t,t+h]}}
E\Bigg[
\int_t^{t+h}(v-P_s)\theta_s\,ds
+J(t+h,P_{t+h},v)
\;\Big|\; P_t=p
\Bigg].
\end{aligned}
$$
对 $J(t,P_t,v)$ 用 Itô 公式展开，
$$
\begin{aligned}
dJ(t,P_t,v)
&=
J_t\,dt+J_p\,dP_t+\frac{1}{2}J_{pp}(dP_t)^2 \\
&=
\left(
J_t+\lambda\theta_t J_p+\frac{1}{2}\sigma_v^2 J_{pp}
\right)dt
+\sigma_v J_p\,dB_t,
\end{aligned}
$$
把上式代回 Bellman 关系，除以 $h$ 并令 $h\downarrow 0$，就得到 HJB：
$$
0=
\sup_\theta
\left\{
(v-p)\theta + J_t + \lambda\theta J_p + \frac{1}{2}\sigma_v^2 J_{pp}
\right\}.
$$
这里要注意：$\theta$ 是无约束地**线性**进入 HJB 的，所以这不是通常“二阶条件自动成立”的光滑最优化。要使右边的 supremum 有限，$\theta$ 前面的系数必须为零；否则 insider 可以把 $\theta$ 向 $\pm\infty$ 推，使目标函数发散。因此必须有
$$
v-p+\lambda J_p=0
\quad\Longleftrightarrow\quad
J_p=\frac{p-v}{\lambda}.
$$
对 $p$ 积分，得到
$$
\begin{aligned}
J(t,p,v)
&=
\int \frac{p-v}{\lambda}\,dp + A(t,v) \\
&=
\frac{(v-p)^2}{2\lambda}+A(t,v),
\end{aligned}
$$
其中 $A(t,v)$ 是对 $p$ 积分后的“常数”，它可以依赖于 $t$ 和参数 $v$。于是
$$
J_t=A_t(t,v),
\qquad
J_{pp}=\frac{1}{\lambda}.
$$
再代回 HJB 中与 $\theta$ 无关的部分：
$$
A_t(t,v)+\frac{\sigma_v^2}{2\lambda}=0.
$$
所以
$$
A(t,v)=C(v)-\frac{\sigma_v^2}{2\lambda}t.
$$
终端时刻已经没有时间继续交易；并且在候选均衡路径上有完全揭示 $P_1=v$，所以可达边界条件为
$$
J(1,v,v)=0.
$$
代入上式：
$$
\begin{aligned}
0
&=
\frac{(v-v)^2}{2\lambda}+C(v)-\frac{\sigma_v^2}{2\lambda} \\
&=
C(v)-\frac{\sigma_v^2}{2\lambda},
\end{aligned}
$$
故
$$
C(v)=\frac{\sigma_v^2}{2\lambda}.
$$
于是
$$
J(t,p,v)=\frac{(v-p)^2+\sigma_v^2(1-t)}{2\lambda}.
\tag{9}
$$
与上面 ODE 解法等价、但更直观的**鞅表示法**。先由
$$
J(t,p,v)=\frac{(v-p)^2}{2\lambda}+A(t,v)
$$
可知终端时刻满足
$$
\begin{aligned}
J(1,p,v)
&=
\frac{(v-p)^2}{2\lambda}+A(1,v)=
\frac{(v-p)^2}{2\lambda},
\end{aligned}
$$
因为上面的 ODE 与边界条件 $J(1,v,v)=0$ 一起推出 $A(1,v)=0$。

另一方面，当 HJB 中 $\theta$ 的线性系数被置零后，剩余 PDE 为
$$
J_t+\frac{1}{2}\sigma_v^2J_{pp}=0.
$$
于是若令价格仅按扩散项演化，
$$
dP_t=\sigma_v\,dB_t,
$$
则由 Itô 公式
$$
\begin{aligned}
dJ(t,P_t,v)
&=
\left(J_t+\frac{1}{2}\sigma_v^2J_{pp}\right)dt+\sigma_v J_p\,dB_t \\
&=
\sigma_v J_p\,dB_t,
\end{aligned}
$$
从而 $J(t,P_t,v)$ 是鞅。故
$$
\begin{aligned}
J(t,p,v)
&=
E[J(1,P_1,v)\mid P_t=p] \\
&=
E\left[\left.\frac{(v-P_1)^2}{2\lambda}\,\right|\,P_t=p\right].
\end{aligned}
$$
又因为在 $dP_t=\sigma_v\,dB_t$ 下，
$$
P_1=P_t+\sigma_v(B_1-B_t),
$$
所以可连续写成
$$
\begin{aligned}
J(t,p,v)
&=
E\left[\left.\frac{(v-P_1)^2}{2\lambda}\,\right|\,P_t=p\right] \\
&=
E\left[\left.\frac{(v-p-\sigma_v(B_1-B_t))^2}{2\lambda}\,\right|\,P_t=p\right] \\
&=
\frac{1}{2\lambda}E\left[\left.(v-p)^2-2(v-p)\sigma_v(B_1-B_t)+\sigma_v^2(B_1-B_t)^2\,\right|\,P_t=p\right] \\
&=
\frac{1}{2\lambda}\left[(v-p)^2+\sigma_v^2E[(B_1-B_t)^2]\right] \\
&=
\frac{(v-p)^2+\sigma_v^2(1-t)}{2\lambda},
\end{aligned}
$$
其中用到 Brownian motion 的独立增量性质：$B_1-B_t$ 与时点 $t$ 之前的信息独立，且 $B_1-B_t\sim N(0,1-t)$，故
$$
E[B_1-B_t]=0,
\qquad
E[(B_1-B_t)^2]=1-t.
$$
这里还要再说明一步：HJB 到此给出的是 value function 和必要条件
$$
v-p+\lambda J_p=0,
$$
但**并不会单独把 $\theta_t$ 唯一解出来**，因为控制项在线性部分里出现。真正的最优反馈候选仍然是前面均衡猜测的
$$
\theta_t=\frac{v-P_t}{(1-t)\lambda},
$$
它的作用是让价格在剩余时间内恰好桥接到终点 $P_1=v$；下一节的验证定理会证明，这个候选策略确实实现了上面的价值函数。

### 11.6 验证定理

[Asset Pricing/Theoretical AP/cards/Back 1992 - 验证定理](Asset Pricing/Theoretical AP/cards/Back 1992 - 验证定理)（验证定理）


现在验证上一节得到的候选价值函数
$$
J(t,p,v)=\frac{(v-p)^2+\sigma_v^2(1-t)}{2\lambda}
$$
确实给出了 insider 在固定 $v$ 下的最优 continuation value。

对任意可行策略 $\theta$，价格满足
$$
dP_t=\lambda\theta_t\,dt+\sigma_v\,dB_t.
$$
沿着受控价格过程对 $J(t,P_t,v)$ 应用 Itô 公式：
$$
\begin{aligned}
dJ(t,P_t,v)
&=
\left(J_t+\lambda\theta_tJ_p+\frac{1}{2}\sigma_v^2J_{pp}\right)dt+\sigma_vJ_p\,dB_t \\
&=
\left[-(v-P_t)\theta_t\right]dt+\sigma_vJ_p\,dB_t.
\end{aligned}
$$
上面第二步用的是 HJB 恒等式
$$
(v-p)\theta + J_t + \lambda\theta J_p + \frac{1}{2}\sigma_v^2J_{pp}=0,
$$
因为我们构造的 $J$ 同时满足
$$
v-p+\lambda J_p=0,
\qquad
J_t+\frac{1}{2}\sigma_v^2J_{pp}=0.
$$
这两条并不是额外假设，而是把 HJB 按“含 $\theta$ 的部分”和“不含 $\theta$ 的部分”拆开后得到的。确实，HJB 可写成
$$
\begin{aligned}
0
&=
\sup_\theta\left\{
\big[v-p+\lambda J_p\big]\theta
+\left[J_t+\frac{1}{2}\sigma_v^2J_{pp}\right]
\right\}.
\end{aligned}
$$
若 $v-p+\lambda J_p\neq 0$，由于 $\theta$ 无约束，insider 可以把 $\theta$ 推向 $\pm\infty$，从而使上式右边变成 $+\infty$；因此必须有
$$
v-p+\lambda J_p=0.
$$
把这一项消掉后，HJB 剩下的常数项也必须为零，所以
$$
J_t+\frac{1}{2}\sigma_v^2J_{pp}=0.
$$
对我们构造的候选函数
$$
J(t,p,v)=\frac{(v-p)^2+\sigma_v^2(1-t)}{2\lambda}
$$
直接求导也可核对：
$$
\begin{aligned}
J_p
&=
\frac{p-v}{\lambda},
\qquad
J_{pp} =
\frac{1}{\lambda},
\qquad
J_t =
-\frac{\sigma_v^2}{2\lambda}, \\
v-p+\lambda J_p
&=
v-p+\lambda\frac{p-v}{\lambda} =
0, \\
J_t+\frac{1}{2}\sigma_v^2J_{pp}
&=
-\frac{\sigma_v^2}{2\lambda}
+\frac{1}{2}\sigma_v^2\frac{1}{\lambda} =
0.
\end{aligned}
$$
再把 $J_p=(p-v)/\lambda$ 代入随机项，得到
$$
\begin{aligned}
\sigma_vJ_p\,dB_t
&=
\sigma_v\frac{P_t-v}{\lambda}\,dB_t \\
&=
-(v-P_t)\frac{\sigma_v}{\lambda}\,dB_t \\
&=
-(v-P_t)\sigma_z\,dB_t,
\end{aligned}
$$
因为 $\lambda=\sigma_v/\sigma_z$。因此
$$
\begin{aligned}
dJ(t,P_t,v)
&=
-(v-P_t)\theta_t\,dt-(v-P_t)\sigma_z\,dB_t \\
&=
-(v-P_t)(\theta_t\,dt+\sigma_z\,dB_t) \\
&=
-(v-P_t)\,dY_t.
\end{aligned}
$$

$$
\begin{aligned}
J(1,P_1,v)-J(0,P_0,v)
&=
-\int_0^1 (v-P_t)\,dY_t \\
&=
-\int_0^1 (v-P_t)\theta_t\,dt
-\sigma_z\int_0^1 (v-P_t)\,dB_t.
\end{aligned}
$$
移项可得任意可行策略的利润恒等式：
$$
\begin{aligned}
\int_0^1 (v-P_t)\theta_t\,dt
&=
J(0,P_0,v)-J(1,P_1,v)
-\sigma_z\int_0^1 (v-P_t)\,dB_t.
\end{aligned}
$$
对两边取期望。由 admissibility 条件与 $J$ 的二次增长性，最后一项是均值为零的鞅积分，于是
$$
\begin{aligned}
E\left[\int_0^1 (v-P_t)\theta_t\,dt\right]
&=
J(0,P_0,v)-E[J(1,P_1,v)] \\
&\le
J(0,P_0,v),
\end{aligned}
$$
因为
$$
J(1,P_1,v)=\frac{(v-P_1)^2}{2\lambda}\ge 0.
$$
这就证明了：对任意可行策略，其期望利润都不超过 $J(0,P_0,v)$，因此 $J$ 的确是 value function。

若某个可行策略还能使上面的不等式取等，则必须有
$$
J(1,P_1,v)=0
\quad\Longleftrightarrow\quad
P_1=v.
$$
反过来，只要候选策略
$$
\theta_t^*=\frac{v-P_t}{(1-t)\lambda}
$$
保证终端完全揭示 $P_1=v$，并且随机积分仍为真鞅，就有
$$
E\left[\int_0^1 (v-P_t)\theta_t^*\,dt\right]=J(0,P_0,v).
$$
因此该候选策略达到上界，确为最优策略；同时价格在终端完全吸收私人信息。

### 11.7 关键性质

连续时间均衡的几个关键性质可以连续写成如下推导。

首先，剩余私人信息的条件方差为
$$
\begin{aligned}
\Sigma_t
&=
\mathrm{Var}(\tilde v\mid \mathcal F_t^Y) \\
&=
\sigma_v^2(1-t).
\end{aligned}
$$
因此
$$
\begin{aligned}
-\frac{d\Sigma_t}{dt}
&=
\sigma_v^2,
\end{aligned}
$$
说明未被价格吸收的私人信息以常数速度线性衰减，也就是说信息以常速进入价格。

其次，价格关于做市商信息是鞅，因为
$$
\begin{aligned}
P_t
&=
E[\tilde v\mid \mathcal F_t^Y].
\end{aligned}
$$
故对任意 $0\le t\le u\le 1$，由 tower property，
$$
\begin{aligned}
E[P_u\mid \mathcal F_t^Y]
&=
E\big[E[\tilde v\mid \mathcal F_u^Y]\mid \mathcal F_t^Y\big] \\
&=
E[\tilde v\mid \mathcal F_t^Y] \\
&=
P_t.
\end{aligned}
$$
再看终端完全揭示。由上式
$$
\begin{aligned}
\Sigma_1
&=
\sigma_v^2(1-1)=
0,
\end{aligned}
$$
于是
$$
\begin{aligned}
\mathrm{Var}(\tilde v\mid \mathcal F_1^Y)=0
&\Longrightarrow
\tilde v=E[\tilde v\mid \mathcal F_1^Y] \quad a.s. \\
&\Longrightarrow
P_1=\tilde v \quad a.s.
\end{aligned}
$$
因此价格在终端完全吸收私人信息。

最后，知情者在 realization $\tilde v=v$ 下的最大期望利润就是上一节的 value function 在初始点的取值：
$$
\begin{aligned}
\Pi(v)
&:=
E\left[\left.\int_0^1 (v-P_t)\theta_t^*\,dt\,\right|\,\tilde v=v\right] \\
&=
J(0,\bar v,v) \\
&=
\frac{(v-\bar v)^2+\sigma_v^2}{2\lambda}.
\end{aligned}
$$
再对 $\tilde v$ 取总体期望，
$$
\begin{aligned}
E[\Pi]
&=
E[J(0,\bar v,\tilde v)] \\
&=
E\left[\frac{(\tilde v-\bar v)^2+\sigma_v^2}{2\lambda}\right] \\
&=
\frac{E[(\tilde v-\bar v)^2]+\sigma_v^2}{2\lambda} \\
&=
\frac{\sigma_v^2+\sigma_v^2}{2\lambda} \\
&=
\frac{\sigma_v^2}{\lambda} \\
&=
\sigma_z\sigma_v,
\end{aligned}
$$
其中最后一步用了 $\lambda=\sigma_v/\sigma_z$。

连续时间 Back 模型中 insider 的无条件期望利润恰好是单期 Kyle 模型 $\sigma_z\sigma_v/2$ 的两倍。

### 11.8 相关扩展模型（对应课件 11.2）

[Asset Pricing/Theoretical AP/cards/Back 模型 - 相关扩展](Asset Pricing/Theoretical AP/cards/Back 模型 - 相关扩展)（相关扩展）


下面几篇文章都可以看作是在 Back (1992) 连续时间 Kyle 框架上的不同方向扩展。

下面这些公式块不是各篇论文的完整原始设定，而是把它们相对于 Back (1992) 的关键变化，用同一套记号写成一个最小化的骨架推导，目的是更直观地看清楚机制差异。

#### 11.8.1 Insider Trading and Options (Back, RFS, 1993)

衍生品的 payoff 是非线性的，因此做市商从订单流中学习 informed information 的方式不再像 Back (1992) 那样是线性高斯结构，学习问题会更复杂。核心问题是：衍生品交易如何改变信息不对称与价格发现。

一个最小化的公式化写法是：基础资产终值为 $\tilde v$，衍生品终值为 $g(\tilde v)$，做市商观察总订单流 $Y$，并形成后验
$$
\hat v_t:=E[\tilde v\mid \mathcal F_t^Y],
\qquad
\Sigma_t:=\operatorname{Var}(\tilde v\mid \mathcal F_t^Y).
$$
对股票本身，价格仍是
$$
p_t=E[\tilde v\mid \mathcal F_t^Y]=\hat v_t.
$$
但对衍生品，价格变成
$$
\begin{aligned}
q_t
&=
E[g(\tilde v)\mid \mathcal F_t^Y] \\
&=
\int g(v)\,\phi(v;\hat v_t,\Sigma_t)\,dv \\
&=
G(\hat v_t,\Sigma_t).
\end{aligned}
$$
若继续用 Back (1992) 的滤波记号写成
$$
d\hat v_t=K_t\,dW_t,
\qquad
\dot \Sigma_t:=\frac{d\Sigma_t}{dt},
$$
则 Ito 公式给出
$$
\begin{aligned}
dq_t
&=
G_{\hat v}(\hat v_t,\Sigma_t)\,d\hat v_t
+G_{\Sigma}(\hat v_t,\Sigma_t)\,d\Sigma_t
+\frac{1}{2}G_{\hat v\hat v}(\hat v_t,\Sigma_t)(d\hat v_t)^2 \\
&=
G_{\hat v}(\hat v_t,\Sigma_t)K_t\,dW_t
+\left[
G_{\Sigma}(\hat v_t,\Sigma_t)\dot \Sigma_t
+\frac{1}{2}G_{\hat v\hat v}(\hat v_t,\Sigma_t)K_t^2
\right]dt.
\end{aligned}
$$
因此衍生品价格不再只由后验均值决定，而会显式依赖后验方差；这就是“非线性 payoff 让学习问题更复杂”的最直观公式原因。

#### 11.8.2 Multiple Insiders (Back, Cao and Willard, JF, 2000)

这篇文章研究多个 informed traders 之间的竞争会如何影响信息不对称。

- 如果所有 informed traders 持有完全相同的私人信息，则在连续时间交易下会因为竞争过于激烈而不存在均衡。
- 如果不同 insider 的私人信息并非完全相同，而是具有相关性，则可以存在均衡。

可用一个对称线性猜测直接看出为什么“同一信息”会把连续时间均衡挤没。设有 $N$ 个 insider 观察同一个 $\tilde v$，且
$$
dY_t=
\left(\sum_{i=1}^N\theta_t^i\right)dt+\sigma_z\,dB_t,
\qquad
dp_t=\lambda_t\,dY_t.
$$
在一个很短的区间 $dt$ 内，第 $i$ 个 insider 的局部目标近似为
$$
\max_{\theta_t^i}
\left\{
(\tilde v-p_t)\theta_t^i
-\lambda_t\theta_t^i\left(\theta_t^i+\sum_{j\neq i}\theta_t^j\right)
\right\}dt.
$$
一阶条件给出
$$
\tilde v-p_t-\lambda_t\left(2\theta_t^i+\sum_{j\neq i}\theta_t^j\right)=0.
$$
若猜对称均衡 $\theta_t^1=\cdots=\theta_t^N=\theta_t$，则
$$
\theta_t=\frac{\tilde v-p_t}{\lambda_t(N+1)},
\qquad
\sum_{i=1}^N\theta_t^i=\frac{N}{N+1}\frac{\tilde v-p_t}{\lambda_t}.
$$
于是只要 $\tilde v-p_t\neq 0$，总知情交易流就会把信息以极快速度灌进价格；当 $dt\to 0$ 时，每个人都有动机抢在别人之前下单，内部解会被前置交易冲掉，所以同一私人信息下不存在 Back (1992) 那种平滑连续时间均衡。

若改成相关但不完全相同的信号
$$
s_i=\tilde v+\varepsilon_i,
\qquad
\operatorname{Corr}(\varepsilon_i,\varepsilon_j)<1,
$$
则第 $i$ 个 insider 的需求更自然地写成
$$
\theta_t^i=
\frac{E[\tilde v\mid s_i,\mathcal F_t^Y]-p_t}
{\lambda_t\operatorname{Var}(\tilde v\mid s_i,\mathcal F_t^Y)}.
$$
再把后验均值分解为
$$
E[\tilde v\mid s_i,\mathcal F_t^Y] =
E[\tilde v\mid \mathcal F_t^Y]
+k_t\big(s_i-E[s_i\mid \mathcal F_t^Y]\big),
$$
就能看到每个 insider 只对“自己额外那一部分残差信息”激进交易，竞争被软化，均衡就有可能恢复。

#### 11.8.3 Uncertainty of Informed Trading (Back, Crotty and Li, RFS, 2018)

原始 Kyle 模型默认“知情者”总是有私人信息。进一步的问题是：如果潜在 informed trader 根本没有观察到信息事件，从而并未真正变成 informed，会发生什么？

- 在连续时间 Kyle 模型中，即使 $\tilde v=\bar v$，潜在 informed trader 仍可能基于公共信息交易并获得利润。
- “潜在知情者是否真的被信息事件激活”的概率，正是 PIN（Probability of Informed Trading）类模型的核心对象。
- 这篇文章提出了 strategic trading 与 PIN 思路相结合的混合模型。
- Back (1992) 的技术不能直接套用，因为那套方法要求终值 payoff 的分布是 non-atomic，而这里会在 $\tilde v=\bar v$ 处产生原子点。

这篇文章最关键的新增状态变量，是“是否真的被信息事件激活”的指示变量 $I\in\{0,1\}$。可把终值写成
$$
\tilde v=\bar v+I\eta,
\qquad
P(I=1)=\pi,
$$
其中 $\eta$ 服从连续分布。于是终值分布变成混合分布
$$
F_{\tilde v} =
(1-\pi)\delta_{\bar v}+\pi F_{\eta}(\cdot-\bar v),
$$
从而
$$
P(\tilde v=\bar v)=1-\pi>0.
$$
这正是为什么 Back (1992) 依赖 non-atomic payoff 分布的技术不能直接照搬。

进一步地，做市商并不直接观察 $I$，只观察订单流，所以价格满足
$$
\begin{aligned}
p_t
&=
E[\tilde v\mid \mathcal F_t^Y] \\
&=
(1-\pi_t)\bar v+\pi_t m_t^{(1)},
\end{aligned}
$$
其中
$$
\pi_t:=P(I=1\mid \mathcal F_t^Y),
\qquad
m_t^{(1)}:=E[\tilde v\mid \mathcal F_t^Y,I=1].
$$
若真实状态其实是 $I=0$，则潜在 informed trader 知道终值就是 $\bar v$，于是她面对的可交易楔子是
$$
\bar v-p_t =
\pi_t\big(\bar v-m_t^{(1)}\big).
$$
只要 $\pi_t>0$ 且 $m_t^{(1)}\neq \bar v$，这个楔子就不为零；因此即便没有被信息事件激活，潜在 informed trader 仍然可能围绕“市场对激活概率的错误定价”进行战略交易。这也解释了为什么连续时间里会出现“未被激活却仍可获利”的现象。

#### 11.8.4 Corporate Activism and Liquidity (Back, Collin-Dufresne, Fos, Li, and Ljungqvist, Econometrica, 2018)

corporate activist 对其 costly effort 是否能够改善公司价值拥有私人信息。

- 她会根据市场流动性，战略性地买入股票以争取控制权，或者在 activism 变得不可行时卖出。
- 这一类模型研究市场流动性、经济效率与噪声交易之间的关系。

若把这类问题压缩成一个最小化的控制权获取问题，可设 activist 的私人类型 $a$ 决定 activism 成功后每股能带来的价值增量 $\Delta(a)$；若她累计买入 $x$ 股，则相对于基准价格的额外冲击成本近似为
$$
\text{Impact Cost}(x)=\frac{\lambda}{2}x^2.
$$
若拿到控制权至少需要持股达到门槛 $\bar x$，且发动 activism 需要额外固定成本 $C$，则一个最简化的净收益写成
$$
\Pi(x;a)=x\Delta(a)-\frac{\lambda}{2}x^2-C\mathbf 1_{\{x\ge \bar x\}}.
$$
先忽略控制权门槛，内点最优持仓满足
$$
\frac{\partial \Pi(x;a)}{\partial x} =
\Delta(a)-\lambda x=0
\qquad\Longrightarrow\qquad
x^u(a)=\frac{\Delta(a)}{\lambda}.
$$
于是 activism 可行的必要条件变成
$$
x^u(a)\ge \bar x
\qquad\Longleftrightarrow\qquad
\Delta(a)\ge \lambda\bar x.
$$
这条不等式把“流动性”和“治理效率”直接连在一起：$\lambda$ 越高，买到控制权越贵，越不容易满足 activism 的启动条件；若该条件被破坏，最优决策就会从继续吸筹转向停止买入甚至卖出。

##### Exercise 3：对数正态终值的扩展

Assume the log $\tilde v$ is normal $N(\mu,\sigma_v^2)$. Set
$$
\lambda=\frac{\sigma_v}{\sigma_z}.
$$
Show that the strategies
$$
\begin{aligned}
P_0&=e^{\mu+\sigma_v^2/2}, \\
dP_t&=\lambda P_t\,dY_t, \\
\theta_t&=\frac{(\log \tilde v-\mu)/\lambda-Y_t}{1-t}
\end{aligned}
$$
form an equilibrium by showing the following:

1. Define $W_t=Y_t/\sigma_z$, and show that, conditional on $\tilde v$, $W$ is a Brownian bridge on $[0,1]$ with terminal value $(\log \tilde v-\mu)/\sigma_v$. Use this fact to show that $P$ satisfies $P_1=\tilde v$ and is a martingale relative to the market makers' information.
2. For $v>0$ and $p>0$, define
$$
J(t,p,v)=\frac{p-v+v(\log v-\log p)}{\lambda}+\frac{1}{2}\sigma_v\sigma_z(1-t)v.
$$
Prove the verification theorem.

Solution.

1. 先证明价格过程满足终端揭示与做市商鞅性质。令
$$
\xi:=\frac{\log \tilde v-\mu}{\sigma_v},
\qquad
W_t:=\frac{Y_t}{\sigma_z}.
$$
则候选策略可写成
$$
\begin{aligned}
\theta_t
&=
\frac{(\log \tilde v-\mu)/\lambda-Y_t}{1-t} \\
&=
\sigma_z\frac{\xi-W_t}{1-t}.
\end{aligned}
$$
于是
$$
\begin{aligned}
dW_t
&=
\frac{1}{\sigma_z}dY_t \\
&=
\frac{1}{\sigma_z}(\theta_tdt+\sigma_z dB_t) \\
&=
\frac{\xi-W_t}{1-t}dt+dB_t.
\end{aligned}
$$
所以在条件于 $\tilde v$ 时，$W$ 满足标准 Brownian bridge 的 SDE，并以 terminal value
$$
\xi=\frac{\log \tilde v-\mu}{\sigma_v}
$$
为终点。为了把这一步写成显式解，令
$$
U_t:=\frac{W_t}{1-t}.
$$
则
$$
\begin{aligned}
dU_t
&=
\frac{1}{1-t}dW_t+W_t\,d\!\left(\frac{1}{1-t}\right) \\
&=
\frac{1}{1-t}\left(\frac{\xi-W_t}{1-t}dt+dB_t\right)
+\frac{W_t}{(1-t)^2}dt \\
&=
\frac{\xi}{(1-t)^2}dt+\frac{1}{1-t}dB_t.
\end{aligned}
$$
从 $0$ 积分到 $t$，得到
$$
\begin{aligned}
U_t
&=
\xi\int_0^t \frac{1}{(1-s)^2}ds + \int_0^t \frac{1}{1-s}dB_s \\
&=
\xi\left(\frac{1}{1-t}-1\right)+\int_0^t \frac{1}{1-s}dB_s,
\end{aligned}
$$
从而
$$
W_t =
t\xi+(1-t)\int_0^t \frac{1}{1-s}dB_s.
$$
于是对任意 $0\le s\le t\le 1$，
$$
\begin{aligned}
E[W_t\mid \xi]
&=
t\xi, \\
\operatorname{Cov}(W_s,W_t\mid \xi)
&=
(1-s)(1-t)E\left[\int_0^s \frac{1}{1-u}dB_u\int_0^t \frac{1}{1-u}dB_u\right] \\
&=
(1-s)(1-t)\int_0^s \frac{1}{(1-u)^2}du \\
&=
(1-s)(1-t)\left(\frac{1}{1-s}-1\right) \\
&=
s(1-t).
\end{aligned}
$$
以 terminal value $\xi$ 为终点的 Brownian bridge 的条件均值与条件协方差。

再利用 $\xi\sim N(0,1)$ 且 $\xi\perp B$，可得对做市商信息而言，$W$ 是中心高斯过程，并且对任意 $0\le s\le t\le 1$，
$$
\begin{aligned}
E[W_t]
&=
0, \\
E[W_sW_t]
&=
E\Bigg[\left(s\xi+(1-s)\int_0^s \frac{1}{1-u}dB_u\right)
\left(t\xi+(1-t)\int_0^t \frac{1}{1-u}dB_u\right)\Bigg] \\
&=
stE[\xi^2]
+(1-s)(1-t)\int_0^s \frac{1}{(1-u)^2}du \\
&=
st+s(1-t) \\
&=
s =
\min\{s,t\}.
\end{aligned}
$$
因此 $W$ 相对做市商过滤与标准 Brownian motion 具有相同的有限维分布；特别地，$\mathcal F_t^W=\mathcal F_t^Y$ 下可把它当作标准 Brownian motion 来做条件期望计算。

再看**价格过程**。由 Itô 公式，
$$
\begin{aligned}
d\log P_t
&=
\frac{dP_t}{P_t}-\frac{1}{2}\frac{(dP_t)^2}{P_t^2} \\
&=
\lambda dY_t-\frac{1}{2}\lambda^2 d[Y]_t \\
&=
\lambda dY_t-\frac{1}{2}\lambda^2\sigma_z^2dt \\
&=
\lambda dY_t-\frac{1}{2}\sigma_v^2dt,
\end{aligned}
$$
因为 $d[Y]_t=\sigma_z^2dt$ 且 $\lambda\sigma_z=\sigma_v$。积分后可得
$$
\begin{aligned}
\log P_t
&=
\log P_0+\lambda Y_t-\frac{1}{2}\sigma_v^2t \\
&=
\mu+\frac{1}{2}\sigma_v^2+\lambda Y_t-\frac{1}{2}\sigma_v^2t \\
&=
\mu+\sigma_vW_t+\frac{1}{2}\sigma_v^2(1-t),
\end{aligned}
$$
即
$$
P_t=\exp\left(\mu+\sigma_vW_t+\frac{1}{2}\sigma_v^2(1-t)\right).
$$
于是
$$
\begin{aligned}
P_1
&=
\exp(\mu+\sigma_vW_1) \\
&=
\exp(\mu+\sigma_v\xi) \\
&=
\exp(\log \tilde v) \\
&=
\tilde v.
\end{aligned}
$$
同时，由 $W$ 对做市商来说与标准 Brownian motion 同分布，且 $\mathcal F_t^W=\mathcal F_t^Y$，
$$
\begin{aligned}
E[\tilde v\mid\mathcal F_t^Y]
&=
E[e^{\mu+\sigma_vW_1}\mid\mathcal F_t^W] \\
&=
 e^{\mu+\sigma_vW_t}E[e^{\sigma_v(W_1-W_t)}\mid\mathcal F_t^W] \\
&=
 e^{\mu+\sigma_vW_t+\frac{1}{2}\sigma_v^2(1-t)} \\
&=
P_t.
\end{aligned}
$$
所以 $P$ 确实是做市商信息下的鞅，并满足零利润定价规则。

2. 再证明 verification theorem。对 $v>0$ 与 $p>0$，定义
$$
J(t,p,v)=\frac{p-v+v(\log v-\log p)}{\lambda}+\frac{1}{2}\sigma_v\sigma_z(1-t)v.
$$
先求偏导：
$$
\begin{aligned}
J_p
&=
\frac{1-v/p}{\lambda}, \\
J_{pp}
&=
\frac{v}{\lambda p^2}, \\
J_t
&=
-\frac{1}{2}\sigma_v\sigma_z v =
-\frac{1}{2}\frac{\sigma_v^2}{\lambda}v.
\end{aligned}
$$
因此
$$
\begin{aligned}
(v-p)+\lambda pJ_p
&=
(v-p)+\lambda p\frac{1-v/p}{\lambda} \\
&=
(v-p)+(p-v) \\
&=
0,
\end{aligned}
$$
并且
$$
\begin{aligned}
J_t+\frac{1}{2}\sigma_v^2p^2J_{pp}
&=
-\frac{1}{2}\frac{\sigma_v^2}{\lambda}v
+\frac{1}{2}\sigma_v^2p^2\frac{v}{\lambda p^2} \\
&=
-\frac{1}{2}\frac{\sigma_v^2}{\lambda}v
+\frac{1}{2}\frac{\sigma_v^2}{\lambda}v \\
&=
0.
\end{aligned}
$$
所以 HJB 中的线性项与常数项都恰好抵消。

对任意可行策略，价格动态为
$$
dP_t=\lambda P_t\theta_tdt+\sigma_vP_tdB_t.
$$
沿该过程对 $J(t,P_t,v)$ 用 Itô 公式，
$$
\begin{aligned}
dJ(t,P_t,v)
&=
\left(J_t+\lambda P_t\theta_tJ_p+\frac{1}{2}\sigma_v^2P_t^2J_{pp}\right)dt
+\sigma_vP_tJ_p\,dB_t \\
&=
-(v-P_t)\theta_tdt+\sigma_vP_tJ_p\,dB_t.
\end{aligned}
$$
而
$$
\begin{aligned}
\sigma_vP_tJ_p
&=
\sigma_vP_t\frac{1-v/P_t}{\lambda} \\
&=
\frac{\sigma_v}{\lambda}(P_t-v) \\
&=
-\sigma_z(v-P_t),
\end{aligned}
$$
因为 $\lambda=\sigma_v/\sigma_z$。故
$$
\begin{aligned}
dJ(t,P_t,v)
&=
-(v-P_t)\theta_tdt-(v-P_t)\sigma_zdB_t \\
&=
-(v-P_t)(\theta_tdt+\sigma_zdB_t) \\
&=
-(v-P_t)dY_t.
\end{aligned}
$$
从 $0$ 积分到 $1$，得到
$$
\begin{aligned}
\int_0^1 (v-P_t)\theta_tdt
&=
J(0,P_0,v)-J(1,P_1,v)-\sigma_z\int_0^1 (v-P_t)dB_t.
\end{aligned}
$$
现在只需考察终端项。由定义
$$
\begin{aligned}
J(1,p,v)
&=
\frac{p-v+v(\log v-\log p)}{\lambda} \\
&=
\frac{v}{\lambda}\left(\frac{p}{v}-1-\log\frac{p}{v}\right) \\
&\ge
0,
\end{aligned}
$$
因为对任意 $x>0$ 都有 $x-1-\log x\ge 0$，且等号当且仅当 $x=1$。因此
$$
J(1,p,v)=0
\quad\Longleftrightarrow\quad
p=v.
$$
对上面的利润恒等式取期望，并利用随机积分均值为零，可得
$$
E\left[\int_0^1 (v-P_t)\theta_tdt\right]
\le
J(0,P_0,v).
$$
而候选策略由第一步已经保证
$$
P_1=v,
$$
所以
$$
J(1,P_1,v)=0,
$$
从而达到上界。故候选策略确为最优策略，连同前一步的零利润定价规则一起，构成均衡。

若把初值代回，还可写出最大条件期望利润：
$$
\begin{aligned}
J(0,P_0,v)
&=
\frac{P_0-v+v(\log v-\log P_0)}{\lambda}+\frac{1}{2}\sigma_v\sigma_zv \\
&=
\frac{e^{\mu+\sigma_v^2/2}-v+v(\log v-\mu)}{\lambda}.
\end{aligned}
$$

## 12. 异质信念模型

异质信念自然产生于代理人（agents）对基本面动态没有完全信息的环境中。与信息不对称的情况一样，异质信念会刺激代理人之间的交易和投机，产生一些有趣的资产价格规律。本部分材料主要基于 Li (JDEC, 2007), Li (MS, 2013), 以及 Li and Muzere (JFQA, 2010)。

### 12.1 可观测性、信念与学习

#### 12.1.1 纯交换经济

考虑连续时间设定下的一个存在单一易腐消费品的纯交换经济：
总消费禀赋 $\delta_t$ 可被所有的代理人观察。代理人可以将**瞬时增长率**分解为：
$$
\frac{d\delta_t}{\delta_t}=\tilde\mu_t\,dt+\sigma\, dB_t.
$$
- 波动率 $\sigma$ 如果是常数则较容易估计。
- 因为瞬时增长率 $\tilde\mu_t$ 不可直接观察，代理人可能需要去学习 $\tilde\mu_t$ 的真实值。
- 代理人需要一个关于 $\tilde\mu_t$ 动态的模型或先验信念 (prior beliefs)。

#### 12.1.2 先验信念与学习

定义新的观测过程：
$$
Y_t=\log \delta_t+\frac{1}{2}\sigma^2 t,
$$
则由 Itô 公式可得：
$$
dY_t=\tilde\mu_t\,dt+\sigma\, dB_t.
$$
关于 $\tilde\mu_t$ 的学习问题转化为通过观测信号 $dY_t$ 对隐含状态进行推断的滤波问题。

#### 12.1.3 情形一：常数漂移的贝叶斯学习

::::{admonition} Lemma (Learning an Unknown Constant Drift)
若观察过程
$$
dY_t=\mu dt+\sigma dW_t,
\qquad
\mu\sim N(m_0,v_0),
$$
则给定 $\mathcal F_t^Y$ 的后验仍为正态，精度更新为
$$
v_t^{-1}=v_0^{-1}+\frac{t}{\sigma^2},
$$
后验均值为
$$
m_t=v_t\left(v_0^{-1}m_0+\frac{Y_t}{\sigma^2}\right).
$$
::::

条件于 $\mu$，
$$
\begin{aligned}
Y_t|\mu\sim N(\mu t,\sigma^2t).
\end{aligned}
$$
等价信号为 $Y_t/t$，满足
$$
\begin{aligned}
\frac{Y_t}{t}\Big|\mu\sim N\left(\mu,\frac{\sigma^2}{t}\right).
\end{aligned}
$$
先验密度与似然相乘：
$$
\begin{aligned}
p(\mu|Y_t)
&\propto
\exp\left[-\frac{(\mu-m_0)^2}{2v_0}\right]
\exp\left[-\frac{(Y_t-\mu t)^2}{2\sigma^2t}\right]\\
&\propto
\exp\left[-\frac12\left(v_0^{-1}+\frac{t}{\sigma^2}\right)\mu^2
+\left(v_0^{-1}m_0+\frac{Y_t}{\sigma^2}\right)\mu\right].
\end{aligned}
$$
所以后验精度与均值为
$$
\begin{aligned}
v_t^{-1}&=v_0^{-1}+\frac{t}{\sigma^2},\\
m_t&=v_t\left(v_0^{-1}m_0+\frac{Y_t}{\sigma^2}\right).
\end{aligned}
$$

[Asset Pricing/Theoretical AP/cards/正态-正态更新 - 常数漂移学习](Asset Pricing/Theoretical AP/cards/正态-正态更新 - 常数漂移学习)（常数漂移学习）


假设代理人 $i$ 认为隐藏漂移实际上是常数：
$$
d\tilde\mu_t=0,
\qquad
\tilde\mu \sim N(\hat\mu_0^i,\sigma_i^2).
$$
由观测方程
$$
dY_t=\tilde\mu\,dt+\sigma\,dB_t
$$
从 $0$ 积分到 $t$ 得
$$
Y_t-Y_0=\tilde\mu t+\sigma B_t.
$$
对 $t>0$，把它改写成样本均值信号：
$$
\begin{aligned}
\mu_t^Y
&:=
\frac{Y_t-Y_0}{t}=
\tilde\mu+\sigma\frac{B_t}{t}.
\end{aligned}
$$
由于 $B_t\sim N(0,t)$，所以
$$
\begin{aligned}
\sigma\frac{B_t}{t}
&\sim
N\!\left(0,\frac{\sigma^2}{t}\right),
\end{aligned}
$$
从而
$$
\mu_t^Y\mid \tilde\mu \sim N\!\left(\tilde\mu,\frac{\sigma^2}{t}\right).
$$
于是利用贝叶斯公式，后验概率密度 $p(\tilde\mu\mid \mathcal F_t^Y)$ 满足：
$$
\begin{aligned}
p(\tilde\mu\mid \mathcal F_t^Y)
&\propto
p(\mu_t^Y\mid \tilde\mu) \cdot p(\tilde\mu) \\
&\propto
\exp\left\{
-\frac{(\mu_t^Y-\tilde\mu)^2}{2(\sigma^2/t)}
\right\} \exp\left\{
-\frac{(\tilde\mu-\hat\mu_0^i)^2}{2\sigma_i^2}
\right\} \\
&=
\exp\left\{
-\frac{1}{2}\left[
\frac{\tilde\mu^2 - 2\mu_t^Y\tilde\mu + (\mu_t^Y)^2}{\sigma^2/t} + \frac{\tilde\mu^2 - 2\hat\mu_0^i\tilde\mu + (\hat\mu_0^i)^2}{\sigma_i^2}
\right]
\right\}.
\end{aligned}
$$
将指数括号内关于 $\tilde\mu$ 的二次项和一次项合并，忽略与 $\tilde\mu$ 无关的常数项（这些项会被归一化常数吸收）：
$$
\begin{aligned}
p(\tilde\mu\mid \mathcal F_t^Y)
&\propto
\exp\left\{
-\frac{1}{2}\left[
\left(\frac{1}{\sigma_i^2}+\frac{t}{\sigma^2}\right)\tilde\mu^2
-2\left(\frac{\hat\mu_0^i}{\sigma_i^2}+\frac{t\mu_t^Y}{\sigma^2}\right)\tilde\mu
\right]
\right\}.
\end{aligned}
$$
已知正态分布 $N(\hat\mu_t^i, \Sigma_t^i)$ 的概率密度核应为：
$$
\exp\left\{ -\frac{1}{2\Sigma_t^i}(\tilde\mu - \hat\mu_t^i)^2 \right\} \propto \exp\left\{ -\frac{1}{2}\left[ \frac{1}{\Sigma_t^i}\tilde\mu^2 - 2\frac{\hat\mu_t^i}{\Sigma_t^i}\tilde\mu \right] \right\}.
$$
通过对比二次项和一次项的系数，完成配方，可得后验分布仍为正态分布：
$$
\tilde\mu\mid \mathcal F_t^Y \sim N(\hat\mu_t^i,\Sigma_t^i),
$$
其中协方差 $\Sigma_t^i$ 的逆（即后验精度）为：
$$
\frac{1}{\Sigma_t^i} = \frac{1}{\sigma_i^2}+\frac{t}{\sigma^2},
$$
均值 $\hat\mu_t^i$ 满足：
$$
\frac{\hat\mu_t^i}{\Sigma_t^i} = \frac{\hat\mu_0^i}{\sigma_i^2}+\frac{t\mu_t^Y}{\sigma^2}.
$$
因此，后验方差和后验均值可以写为：
$$
\begin{aligned}
\Sigma_t^i
&=
\left(\frac{1}{\sigma_i^2}+\frac{t}{\sigma^2}\right)^{-1}, \\
\hat\mu_t^i
&=
\Sigma_t^i\left(
\frac{\hat\mu_0^i}{\sigma_i^2}+\frac{t\mu_t^Y}{\sigma^2}
\right)=
\Sigma_t^i\left(
\frac{\hat\mu_0^i}{\sigma_i^2}+\frac{Y_t-Y_0}{\sigma^2}
\right).
\end{aligned}
$$
把后验均值写成“先验精度 + 样本精度”的权重形式更直观：
$$
\begin{aligned}
\hat\mu_t^i
&=
\frac{\frac{1}{\sigma_i^2}\hat\mu_0^i+\frac{t}{\sigma^2}\mu_t^Y}
{\frac{1}{\sigma_i^2}+\frac{t}{\sigma^2}}.
\end{aligned}
$$
极限情况：
$$
\begin{aligned}
\lim_{t\to\infty}\Sigma_t^i
&=
0, \\
\lim_{t\to\infty}\hat\mu_t^i
&=
\mu_\infty^Y = \tilde\mu
\qquad a.s.
\end{aligned}
$$
因为随着时间 $t$ 的增加，长期样本均值会把常数漂移完全识别出来。

##### 滤波方法 (Filtering Method)

除了使用贝叶斯更新方法，也可以直接应用连续时间滤波定理（Filtering Theorem）。在这个常数漂移模型 $d\tilde\mu_t=0$ 中，对应滤波理论的参数为：
$$
a_0 = a_1 = a_2 = m_1 = m_2 = 0, \quad A_0 = A_2 = M_1 = 0, \quad A_1 = 1, \quad M_2 = \sigma.
$$
把 [Asset Pricing/Theoretical AP/cards/Kalman-Bucy - 一般公式](Asset Pricing/Theoretical AP/cards/Kalman-Bucy - 一般公式) 专门化到这里，innovation 为
$$
\begin{aligned}
dW_t
&=
dY_t-[A_0+A_1\hat\mu_t^i+A_2Y_t]dt \\
&=
dY_t-\hat\mu_t^i\,dt.
\end{aligned}
$$
因此滤波均值方程为
$$
\begin{aligned}
d\hat\mu_t^i
&=
[a_0+a_1\hat\mu_t^i+a_2Y_t]dt
+\frac{m_1M_1+m_2M_2+A_1\Sigma_t^i}{M_1^2+M_2^2}dW_t \\
&=
0+\frac{0+0+\Sigma_t^i}{0+\sigma^2}dW_t \\
&=
\frac{\Sigma_t^i}{\sigma^2}dW_t \\
&=
\frac{\Sigma_t^i}{\sigma^2}(dY_t-\hat\mu_t^i\,dt).
\end{aligned}
$$
Riccati 方程为
$$
\begin{aligned}
\frac{d\Sigma_t^i}{dt}
&=
2a_1\Sigma_t^i+m_1^2+m_2^2
-\frac{(m_1M_1+m_2M_2+A_1\Sigma_t^i)^2}{M_1^2+M_2^2} \\
&=
0+0+0-\frac{(0+0+\Sigma_t^i)^2}{0+\sigma^2} \\
&=
-\frac{(\Sigma_t^i)^2}{\sigma^2}.
\end{aligned}
$$
于是
$$
\begin{aligned}
\frac{d}{dt}\left(\frac{1}{\Sigma_t^i}\right)
&=
-\frac{1}{(\Sigma_t^i)^2}\frac{d\Sigma_t^i}{dt} \\
&=
\frac{1}{\sigma^2},
\end{aligned}
$$
配合初值 $\Sigma_0^i=\sigma_i^2$，
$$
\begin{aligned}
\frac{1}{\Sigma_t^i}
&=
\frac{1}{\Sigma_0^i}+\frac{t}{\sigma^2} \\
&=
\frac{1}{\sigma_i^2}+\frac{t}{\sigma^2},
\qquad
\Sigma_t^i =
\left(\frac{1}{\sigma_i^2}+\frac{t}{\sigma^2}\right)^{-1}.
\end{aligned}
$$
再对均值方程，把
$$
\frac{\hat\mu_t^i}{\Sigma_t^i}
$$
看成状态变量，则
$$
\begin{aligned}
d\left(\frac{\hat\mu_t^i}{\Sigma_t^i}\right)
&=
\frac{1}{\Sigma_t^i}d\hat\mu_t^i+\hat\mu_t^i\,d\left(\frac{1}{\Sigma_t^i}\right) \\
&=
\frac{1}{\Sigma_t^i}\frac{\Sigma_t^i}{\sigma^2}(dY_t-\hat\mu_t^i\,dt)
+\hat\mu_t^i\frac{dt}{\sigma^2} \\
&=
\frac{1}{\sigma^2}dY_t.
\end{aligned}
$$
从 $0$ 积分到 $t$，得到
$$
\begin{aligned}
\frac{\hat\mu_t^i}{\Sigma_t^i}-\frac{\hat\mu_0^i}{\Sigma_0^i}
&=
\frac{Y_t-Y_0}{\sigma^2} \\
\frac{\hat\mu_t^i}{\Sigma_t^i}
&=
\frac{\hat\mu_0^i}{\sigma_i^2}+\frac{Y_t-Y_0}{\sigma^2},
\end{aligned}
$$
所以
$$
\begin{aligned}
\hat\mu_t^i
&=
\Sigma_t^i\left(
\frac{\hat\mu_0^i}{\sigma_i^2}+\frac{Y_t-Y_0}{\sigma^2}
\right),
\end{aligned}
$$
这就正好回到了上面的 Bayesian 解。

在滤波后的概率空间 (filtered probability space) 下，定义 innovation 过程：
$$
d\hat B_t^i := \frac{dY_t-\hat\mu_t^i\,dt}{\sigma},
$$
则基本面动态和信念更新过程可写为：
$$
\begin{aligned}
dY_t
&=
\hat\mu_t^i\,dt+\sigma d\hat B_t^i, \\
\frac{d\delta_t}{\delta_t}
&=
dY_t =
\hat\mu_t^i\,dt+\sigma d\hat B_t^i, \\
d\hat\mu_t^i
&=
\frac{\Sigma_t^i}{\sigma^2}(dY_t-\hat\mu_t^i\,dt)=
\frac{\Sigma_t^i}{\sigma}d\hat B_t^i.
\end{aligned}
$$
这正是下一节 OU 情形在 $\kappa_i=0$、状态噪声项为零时的特例。

#### 12.1.4 情形二：OU 漂移的滤波

[Asset Pricing/Theoretical AP/cards/OU 滤波 - Riccati 方程](Asset Pricing/Theoretical AP/cards/OU 滤波 - Riccati 方程)（OU 滤波）


若代理人 $i$ 认为隐藏漂移服从 OU 过程，
$$
d\tilde\mu_t=\kappa_i(\bar\mu_i-\tilde\mu_t)\,dt+\sigma_i\, d\tilde B_t,
$$
同时观测过程仍为
$$
dY_t=\tilde\mu_t\,dt+\sigma\, dB_t.
$$
仍是线性高斯滤波问题。直接与一般公式对照，并记
$$
B_{1t}:=\tilde B_t,
\qquad
B_{2t}:=B_t,
$$
则
$$
\begin{aligned}
d\tilde\mu_t
&=
\big[\kappa_i\bar\mu_i-\kappa_i\tilde\mu_t+0\cdot Y_t\big]dt
+\sigma_i\,dB_{1t}+0\cdot dB_{2t}, \\
dY_t
&=
\big[0+1\cdot\tilde\mu_t+0\cdot Y_t\big]dt
+\sigma dB_{1t}+0\cdot \,dB_{2t}.
\end{aligned}
$$
因此可逐项识别出
$$
\begin{aligned}
a_0(t)=\kappa_i\bar\mu_i,
\qquad
a_1(t)=-\kappa_i,
\qquad
a_2(t)=0, \\
m_1(t)=\sigma_i,
\qquad
m_2(t)=0, \\
A_0(t)=0,
\qquad
A_1(t)=1,
\qquad
A_2(t)=0, \\
M_1(t)=\sigma,
\qquad
M_2(t)=0.
\end{aligned}
$$
令
$$
\hat\mu_t^i:=E_i[\tilde\mu_t\mid \mathcal F_t^Y],
\qquad
\Sigma_t^i:=E_i[(\tilde\mu_t-\hat\mu_t^i)^2\mid \mathcal F_t^Y].
$$
则 innovation 过程定义为
$$
d\hat B_t^i:=\frac{1}{\sigma}(dY_t-\hat\mu_t^i\,dt).
$$
把上面的系数代入 [Kalman-Bucy 一般公式](Asset Pricing/Theoretical AP/cards/Kalman-Bucy - 一般公式)（推导见 [Kalman-Bucy 推导](Asset Pricing/Theoretical AP/cards/Kalman-Bucy 推导)），就得到
$$
\begin{aligned}
d\hat\mu_t^i
&=
\big[\kappa_i\bar\mu_i-\kappa_i\hat\mu_t^i\big]dt
+\frac{\Sigma_t^i}{\sigma}\,d\hat B_t^i =
\kappa_i(\bar\mu_i-\hat\mu_t^i)\,dt+\frac{\Sigma_t^i}{\sigma}\,d\hat B_t^i,
\end{aligned}
$$

$$
\begin{aligned}
\frac{d\Sigma_t^i}{dt}
&=
2(-\kappa_i)\Sigma_t^i+\sigma_i^2-\frac{(\Sigma_t^i)^2}{\sigma^2} =
-2\kappa_i \Sigma_t^i+\sigma_i^2-\frac{(\Sigma_t^i)^2}{\sigma^2}.
\end{aligned}
$$
上式的三项含义也很清楚：
$$
\begin{aligned}
\frac{d\Sigma_t^i}{dt}
&=
\underbrace{-2\kappa_i\Sigma_t^i}_{\text{均值回复压低不确定性}}
+\underbrace{\sigma_i^2}_{\text{状态噪声提高不确定性}}
-\underbrace{\frac{(\Sigma_t^i)^2}{\sigma^2}}_{\text{观测学习降低不确定性}}.
\end{aligned}
$$
若进一步关心稳态滤波误差，只需令 Riccati 方程右边为零：
$$
-2\kappa_i\Sigma+\sigma_i^2-\frac{\Sigma^2}{\sigma^2}=0,
$$
从而正根为
$$
\bar\Sigma_i =
-\kappa_i\sigma^2+\sqrt{\kappa_i^2\sigma^4+\sigma_i^2\sigma^2}.
$$
于是代理人 $i$ 所看到的经济动态可写成 innovation 形式：
$$
\begin{aligned}
\frac{d\delta_t}{\delta_t}
&=
\tilde\mu_t\,dt+\sigma\,dB_t \\
&=
\hat\mu_t^i\,dt+\sigma\,d\hat B_t^i.
\end{aligned}
$$
也就是说，对代理人 $i$ 而言，真正进入其决策问题的不是不可观测的 $\tilde\mu_t$，而是可观测的滤波均值 $\hat\mu_t^i$ 及其对应的 innovation shock $\hat B_t^i$。

#### 12.1.5 不同信念之间的联系

[Asset Pricing/Theoretical AP/cards/异质信念 - 创新布朗运动与状态价格密度](Asset Pricing/Theoretical AP/cards/异质信念 - 创新布朗运动与状态价格密度)（创新布朗运动与状态价格密度）


因为同一个可观测过程 $Y_t$ 在两个代理人的滤波表示下都必须成立，
$$
\begin{aligned}
dY_t
&=
\hat\mu_t^i\,dt+\sigma\, d\hat B_t^i \\
&=
\hat\mu_t^j\,dt+\sigma\, d\hat B_t^j.
\end{aligned}
$$
两边相减，得到
$$
\begin{aligned}
\sigma(d\hat B_t^i-d\hat B_t^j)
&=
-(\hat\mu_t^i-\hat\mu_t^j)dt,
\end{aligned}
$$
即
$$
\begin{aligned}
d\hat B_t^i-d\hat B_t^j
&=
-\frac{\hat\mu_t^i-\hat\mu_t^j}{\sigma}dt.
\end{aligned}
$$
记
$$
\beta_t^{ij}:=\frac{\hat\mu_t^i-\hat\mu_t^j}{\sigma},
$$
则
$$
\begin{aligned}
d\hat B_t^i-d\hat B_t^j
&=
-\beta_t^{ij}dt, \\
d\hat B_t^j
&=
d\hat B_t^i+\beta_t^{ij}dt.
\end{aligned}
$$
这说明：在代理人 $i$ 看来，代理人 $j$ 的 innovation Brownian motion 带有额外漂移 $\beta_t^{ij}$；而这个漂移正好由双方滤波均值之差决定。

进一步，由 Girsanov 定理，从 $\hat P^i$ 变到 $\hat P^j$ 的 Radon-Nikodym 导数可写为
$$
\begin{aligned}
\zeta_t^{ji}
&:=
\frac{d\hat P_t^j}{d\hat P_t^i} \\
&=
\exp\left(
-\frac{1}{2}\int_0^t (\beta_s^{ij})^2 ds
-\int_0^t \beta_s^{ij}\, d\hat B_s^i
\right).
\end{aligned}
$$
之所以是这个指数形式，是因为我们要找一个密度过程 $\zeta_t^{ji}$，使得在新测度下
$$
d\hat B_t^j=d\hat B_t^i+\beta_t^{ij}dt
$$
重新变成 Brownian motion。记
$$
\begin{aligned}
M_t
&:=
-\int_0^t \beta_s^{ij}\,d\hat B_s^i, \\
\langle M\rangle_t
&=
\int_0^t (\beta_s^{ij})^2ds.
\end{aligned}
$$
则 Doléans-Dade exponential 为
$$
\begin{aligned}
\mathcal E(M)_t
&=
\exp\left(
M_t-\frac12\langle M\rangle_t
\right) \\
&=
\exp\left(
-\int_0^t \beta_s^{ij}\,d\hat B_s^i
-\frac12\int_0^t(\beta_s^{ij})^2ds
\right).
\end{aligned}
$$
把
$$
X_t:=
-\int_0^t \beta_s^{ij}\,d\hat B_s^i
-\frac12\int_0^t(\beta_s^{ij})^2ds
$$
代入 Itô 公式，
$$
\begin{aligned}
dX_t
&=
-\beta_t^{ij}\,d\hat B_t^i
-\frac12(\beta_t^{ij})^2dt, \\
d[X]_t
&=
(\beta_t^{ij})^2dt, \\
d(e^{X_t})
&=
e^{X_t}dX_t+\frac12 e^{X_t}d[X]_t \\
&=
-\beta_t^{ij}e^{X_t}\,d\hat B_t^i.
\end{aligned}
$$
因此补上的
$$
-\frac12\int_0^t(\beta_s^{ij})^2ds
$$
正是用来消掉 Itô 修正后的 $dt$ 项，使 $\zeta_t^{ji}=\mathcal E(M)_t$ 成为无漂移的指数鞅；在 Novikov 条件下，
$$
E^i[\zeta_t^{ji}]=1,
$$
于是它可以作为 Radon-Nikodym 导数定义新测度：
$$
\frac{d\hat P_t^j}{d\hat P_t^i}=\zeta_t^{ji}.
$$
接着由 Girsanov 定理，
$$
\begin{aligned}
d\widetilde B_t
&=
d\hat B_t^i-d\langle M,\hat B^i\rangle_t \\
&=
d\hat B_t^i+\beta_t^{ij}dt \\
&=
d\hat B_t^j.
\end{aligned}
$$
所以 $\hat P^j$ 下的 Brownian motion 正是 $\hat B^j$；也就是说，这个密度过程恰好把 $\hat P^i$ 下看到的漂移 $+\beta_t^{ij}dt$ 吸收到测度里，所以它必然就是从 $\hat P^i$ 到 $\hat P^j$ 的测度变换密度。详见 [为什么测度密度是这个指数形式](Asset Pricing/Theoretical AP/cards/异质信念 - 创新布朗运动与状态价格密度#为什么测度密度是这个指数形式)。

因此，所谓“信念差异”在连续时间中可以等价地表示成一个测度变换：不同代理人的主观概率，只是把同一个 innovation process 加上不同的漂移而已。

### 12.2 最优投资与消费 (Optimal Investment and Consumption)

经济中存在 $N$ 个代理人，他们将基于各自的滤波概率空间（filtered probability space）做出投资和消费决策。

#### 12.2.1 偏好 (Preferences)

代理人 $i$ 的终身期望效用 (life-time expected utility) 可以表示为：
$$
E^i\left[\int_0^\infty e^{-\rho_i t}u_i(c_t^i)dt\right]
$$
- 这是时间可加的效用 (time-additive utility)，满足 $u_i' > 0$ 且 $u_i'' < 0$。
- $\rho_i > 0$ 是时间折现率 (time discount rate)，代表偏好的跨期替代。
- 代理人 $i$ 拥有总供给 $\delta$ 的 $\iota_i$ 份额禀赋，满足 $\sum_i \iota_i = 1$，即总份额标准化为 1。

#### 12.2.2 资产与状态价格 (Asset and State Prices)

[Asset Pricing/Theoretical AP/cards/异质信念 - 创新布朗运动与状态价格密度](Asset Pricing/Theoretical AP/cards/异质信念 - 创新布朗运动与状态价格密度)

在金融市场中，我们将消费品的价格标准化为 1。

- **无风险资产** $P_t$，其演化过程为：
$$
  dP_t = r_t P_t dt
$$
  其中 $r_t$ 是内生决定的无风险利率。

##### 风险资产与风险价格

**股票** (代表对总消费流 $\delta_t$ 的索取权) 价格 $S_t$ 的演化过程。它对于所有代理人而言，都遵循相同的动态，因此对任一代理人 $i$ 和 $j$，都可写成：
$$
\frac{dS_t + \delta_t dt}{S_t} = \mu_{S,t}^i dt + \sigma_{S,t}^i d\hat B_t^i = \mu_{S,t}^j dt + \sigma_{S,t}^j d\hat B_t^j.
$$
风险价格定义为
$$
\theta_t^i := \frac{\mu_{S,t}^i-r_t}{\sigma_{S,t}}.
$$
同一资产收益过程在两个代理人看来必须相同，因此
$$
\begin{aligned}
\mu_{S,t}^i\,dt+\sigma_{S,t}d\hat B_t^i
&=
\mu_{S,t}^j\,dt+\sigma_{S,t}d\hat B_t^j \\
&=
\mu_{S,t}^j\,dt+\sigma_{S,t}(d\hat B_t^i+\beta_t^{ij}dt).
\end{aligned}
$$
比较 $dt$ 项可得
$$
\mu_{S,t}^i=\mu_{S,t}^j+\sigma_{S,t}\beta_t^{ij}.
$$
两边同时减去 $r_t$ 再除以 $\sigma_{S,t}$，
$$
\begin{aligned}
\theta_t^i-\theta_t^j
&=
\frac{\mu_{S,t}^i-r_t}{\sigma_{S,t}}-\frac{\mu_{S,t}^j-r_t}{\sigma_{S,t}} \\
&=
\beta_t^{ij}.
\end{aligned}
$$
因此，风险价格之差恰好等于双方对隐藏增长率的滤波均值之差，经噪声波动率标准化之后的结果。

##### 状态价格密度

代理人 $i$ 的状态价格密度定义为
$$
\xi_t^i
:=
\exp\left(
-\int_0^t r_s\,ds
-\frac{1}{2}\int_0^t (\theta_s^i)^2 ds
-\int_0^t \theta_s^i\, d\hat B_s^i
\right).
$$
令
$$
\begin{aligned}
Y_t
&:=
-\int_0^t r_s\,ds
-\frac{1}{2}\int_0^t (\theta_s^i)^2 ds
-\int_0^t \theta_s^i\, d\hat B_s^i,
\qquad
\xi_t^i=e^{Y_t}.
\end{aligned}
$$
则
$$
\begin{aligned}
dY_t
&= -r_t\,dt-\frac{1}{2}(\theta_t^i)^2dt-\theta_t^i\,d\hat B_t^i, \\
(dY_t)^2
&= (\theta_t^i)^2dt.
\end{aligned}
$$
由 Itô 公式，
$$
\begin{aligned}
d\xi_t^i
&= de^{Y_t} \\
&= e^{Y_t}dY_t+\frac{1}{2}e^{Y_t}(dY_t)^2 \\
&= \xi_t^i\left[-r_t\,dt-\frac{1}{2}(\theta_t^i)^2dt-\theta_t^i\,d\hat B_t^i\right]
+\frac{1}{2}\xi_t^i(\theta_t^i)^2dt \\
&= -r_t\xi_t^i\,dt-\theta_t^i\xi_t^i\,d\hat B_t^i.
\end{aligned}
$$
利用上面的关系
$$
\theta_t^i-\theta_t^j=\beta_t^{ij},
\qquad
d\hat B_t^j=d\hat B_t^i+\beta_t^{ij}dt,
$$
可把状态价格密度之比连续写成
$$
\begin{aligned}
\log\frac{\xi_t^i}{\xi_t^j}
&=
-\frac{1}{2}\int_0^t\big[(\theta_s^i)^2-(\theta_s^j)^2\big]ds
-\int_0^t \theta_s^i\,d\hat B_s^i
+\int_0^t \theta_s^j\,d\hat B_s^j \\
&=
-\frac{1}{2}\int_0^t\big[(\theta_s^j+\beta_s^{ij})^2-(\theta_s^j)^2\big]ds
-\int_0^t (\theta_s^j+\beta_s^{ij})\,d\hat B_s^i
+\int_0^t \theta_s^j(d\hat B_s^i+\beta_s^{ij}ds) \\
&=
-\frac{1}{2}\int_0^t (\beta_s^{ij})^2 ds
-\int_0^t \beta_s^{ij}\,d\hat B_s^i.
\end{aligned}
$$
因此
$$
\begin{aligned}
\frac{\xi_t^i}{\xi_t^j}
&=
\exp\left(
-\frac{1}{2}\int_0^t (\beta_s^{ij})^2 ds
-\int_0^t \beta_s^{ij}\,d\hat B_s^i
\right) \\
&=
\zeta_t^{ji}.
\end{aligned}
$$
也就是说，状态价格之比正好等于信念测度之比。

##### 债券与股票定价
先分两类写一般定价式。若一项资产只在时点 $T$ 支付终值 $X_T$，则其时点 $t$ 价格为
$$
\begin{aligned}
V_t(X_T)
&= \frac{1}{\xi_t^i}E_t^i\big[\xi_T^i X_T\big].
\end{aligned}
$$
若一项资产在 $s\ge t$ 连续支付股利流 $D_s$，则其时点 $t$ 价格为
$$
\begin{aligned}
V_t(D)
&= \frac{1}{\xi_t^i}E_t^i\left[\int_t^\infty \xi_s^i D_s\,ds\right].
\end{aligned}
$$
对零息债，终值是 $X_T=1$，因此
$$
\begin{aligned}
P_{t,T}
&= V_t(1) \\
&= \frac{1}{\xi_t^i}E_t^i\big[\xi_T^i\cdot 1\big] \\
&= \frac{1}{\xi_t^i}E_t^i\big[\xi_T^i\big].
\end{aligned}
$$
对股票，持有 1 股会不断领取股利流 $\delta_s$，因此
$$
\begin{aligned}
S_t
&= V_t(\delta) \\
&= \frac{1}{\xi_t^i}E_t^i\left[\int_t^\infty \xi_s^i \delta_s\, ds\right].
\end{aligned}
$$
下面证明定价与所选代理人无关。对任意时点 $s$ 的随机支付 $A_s$，
$$
\begin{aligned}
\frac{1}{\xi_t^j}E_t^j[\xi_s^j A_s]
&= \frac{1}{\xi_t^j}\int A_s\xi_s^j\,d\hat P_{s|t}^j \\
&= \frac{1}{\xi_t^j}\int A_s\xi_s^j\frac{d\hat P_{s|t}^j}{d\hat P_{s|t}^i}\,d\hat P_{s|t}^i \\
&= \frac{1}{\xi_t^j}\int A_s\xi_s^j\frac{\xi_s^i/\xi_t^i}{\xi_s^j/\xi_t^j}\,d\hat P_{s|t}^i \\
&= \frac{1}{\xi_t^i}\int A_s\xi_s^i\,d\hat P_{s|t}^i \\
&= \frac{1}{\xi_t^i}E_t^i[\xi_s^i A_s].
\end{aligned}
$$
因此若取 $s=T$ 且 $A_T=1$，就得到零息债价格与代理人无关；若取 $A_s=\delta_s$ 再对 $s\in[t,\infty)$ 积分，就得到股票价格同样与代理人无关。

#### 12.2.3 最优消费：鞅方法

代理人 $i$ 求解：
$$
\max_{\{c_t^i\}} E^i\left[\int_0^\infty e^{-\rho_i t}u_i(c_t^i)\,dt\right]
\quad \text{s.t.} \quad
E^i\left[\int_0^\infty \xi_t^i c_t^i\,dt\right]\le W_0^i.
$$
拉格朗日函数为：
$$
\mathcal{L} = \int_0^\infty E^i\left[ e^{-\rho_i t}u_i(c_t^i)-\phi_i \xi_t^i c_t^i \right]dt +\phi_i W_0^i.
$$
对于任意时刻 $t$ 和该时刻的任意状态，对消费 $c_t^i$ 求变分，得到一阶条件：
$$
\begin{aligned}
\frac{\partial \mathcal{L}}{\partial c_t^i} &= 0 \\
\implies E^i \left[ \frac{\partial}{\partial c_t^i} \left(e^{-\rho_i t}u_i(c_t^i)-\phi_i \xi_t^i c_t^i \right) \right] &= 0 \\
\implies E^i \left[ e^{-\rho_i t}u_i'(c_t^i) - \phi_i \xi_t^i \right] &= 0
\end{aligned}
$$
由于此式必须对所有状态成立，因此被期望项必须为零：
$$
e^{-\rho_i t}u_i'(c_t^i) - \phi_i \xi_t^i = 0
$$

$$
\implies e^{-\rho_i t}u_i'(c_t^i) = \phi_i \xi_t^i
$$
最优消费为：
$$
c_t^i=(u_i')^{-1}(\phi_i e^{\rho_i t}\xi_t^i).
$$

### 12.3 均衡条件

#### 12.3.1 消费市场出清
$$
\sum_i c_t^i=\delta_t.
$$
这表示总消费等于总禀赋/总股利流，见 [消费市场出清](Asset Pricing/Theoretical AP/cards/消费市场出清条件 - 总消费等于总禀赋)。
代入最优消费：
$$
\sum_i (u_i')^{-1}(\phi_i e^{\rho_i t}\xi_t^i)=\delta_t.
$$
这条式子通常可用来反推出均衡状态价格密度 $\xi_t^i$，进一步得到 $r_t$、$\theta_t^i$、债券价格和股票价格。

#### 12.3.2 消费出清到金融市场出清
由于无风险资产是内部供给，净头寸为零，因此金融市场出清条件为所有代理人的**财富总和等于股票总市值**：
$$
\sum_j W_t^j = S_t
$$
下面我们证明，消费市场出清会自然保证这一点。

首先，根据概率论中的测度变换，对于任意适应于公共信息流 $\mathcal{F}_t^Y$ 的随机变量 $A_s$，我们有：
$$
\begin{aligned}
\frac{1}{\xi_t^j} E_t^j[A_s \xi_s^j] &= \frac{1}{\xi_t^j} \int A_s \xi_s^j d\hat{P}^j_{s|t} \\
&= \int A_s \frac{\xi_s^j}{\xi_t^j} d\hat{P}^j_{s|t}
\end{aligned}
$$
已知两个信念测度之间的 **Radon-Nikodym 导数**等于状态价格密度之比：
$$
\frac{d\hat{P}^j_{s|t}}{d\hat{P}^i_{s|t}} = \zeta_{s|t}^{ji} = \frac{\xi_s^i / \xi_t^i}{\xi_s^j / \xi_t^j}
$$
因此，我们可以将期望从代理人 $j$ 的测度切换到代理人 $i$ 的测度下：
$$
\begin{aligned}
\frac{1}{\xi_t^j} E_t^j[A_s \xi_s^j] &= \int A_s \frac{\xi_s^j}{\xi_t^j} \frac{d\hat{P}^j_{s|t}}{d\hat{P}^i_{s|t}} d\hat{P}^i_{s|t} \\
&= \int A_s \frac{\xi_s^j}{\xi_t^j} \frac{\xi_s^i / \xi_t^i}{\xi_s^j / \xi_t^j} d\hat{P}^i_{s|t} \\
&= \int A_s \frac{\xi_s^i}{\xi_t^i} d\hat{P}^i_{s|t} \\
&= \frac{1}{\xi_t^i} E_t^i[A_s \xi_s^i]
\end{aligned}
$$
任意一个用自身信念定价的资产，其价格在所有人的信念下都是一致的。

将所有代理人的财富加总。每个代理人的财富是其未来消费的贴现值：
$$
\sum_j W_t^j = \sum_j \frac{1}{\xi_t^j} E_t^j\left[\int_t^\infty \xi_s^j c_s^j\,ds\right]
$$
利用 Fubini 定理交换积分和期望的顺序，并应用上面的测度变换关系（取 $A_s = c_s^j$）：
$$
\begin{aligned}
\sum_j W_t^j &= \sum_j \int_t^\infty \frac{1}{\xi_t^j} E_t^j[\xi_s^j c_s^j] \,ds \\
&= \sum_j \int_t^\infty \frac{1}{\xi_t^i} E_t^i[\xi_s^i c_s^j] \,ds \\
&= \frac{1}{\xi_t^i} \int_t^\infty E_t^i\left[\sum_j \xi_s^i c_s^j\right] \,ds \\
&= \frac{1}{\xi_t^i} E_t^i\left[\int_t^\infty \xi_s^i \left(\sum_j c_s^j\right) \,ds\right]
\end{aligned}
$$
如果消费市场出清，即 $\sum_j c_s^j = \delta_s$，则上式变为：
$$
\sum_j W_t^j = \frac{1}{\xi_t^i} E_t^i\left[\int_t^\infty \xi_s^i \delta_s \,ds\right]
$$
这正是股票价格 $S_t$ 的定义。因此，消费市场出清蕴含了金融市场出清。

### 12.4 对数效用例子

#### 12.4.1 同质经济

若经济中只有一个代表性代理人 $j$，其效用取 CRRA 形式，$\gamma_j>0$ 为 relative risk aversion coefficient，且 $c_t^j>0$、$\phi_j>0$、$\xi_t^j>0$：
$$
u_j(c)=
\begin{cases}
\dfrac{c^{1-\gamma_j}}{1-\gamma_j}, & \gamma_j\neq 1,\ c>0,\\[4pt]
\log c, & \gamma_j=1,\ c>0.
\end{cases}
$$
于是其消费选择问题写为
$$
\max_{\{c_t^j\}_{t\ge 0}}
E^j\!\left[\int_0^\infty e^{-\rho_j t}u_j(c_t^j)\,dt\right]
\quad
\text{s.t.}
\quad
E^j\!\left[\int_0^\infty \xi_t^j c_t^j\,dt\right]\le W_0^j.
$$
对应的 Lagrangian 为
$$
\mathcal L =
E^j\!\left[\int_0^\infty
\left(
e^{-\rho_j t}u_j(c_t^j)-\phi_j\xi_t^j c_t^j
\right)dt\right]
+\phi_j W_0^j.
$$
对 $c_t^j$ 的一阶条件为
$$
\begin{aligned}
0
&=\frac{\partial \mathcal L}{\partial c_t^j}=e^{-\rho_j t}u_j'(c_t^j)-\phi_j\xi_t^j.
\end{aligned}
$$
当 $\gamma_j\neq 1$ 时，$u_j'(c) = c^{-\gamma_j}$，从而
$$
\begin{aligned}
e^{-\rho_j t}(c_t^j)^{-\gamma_j}
&=\phi_j\xi_t^j \\
(c_t^j)^{-\gamma_j}
&=\phi_j e^{\rho_j t}\xi_t^j \\
c_t^j
&=(\phi_j e^{\rho_j t}\xi_t^j)^{-1/\gamma_j} \\
&=e^{-\rho_j t/\gamma_j}(\phi_j\xi_t^j)^{-1/\gamma_j}.
\end{aligned}
$$
在同质经济中，市场出清条件意味着 $c_t^j = \delta_t$。代入上式：
$$
\delta_t = e^{-\rho_j t/\gamma_j} (\phi_j \xi_t^j)^{-1/\gamma_j}
$$
从中反解状态价格密度 $\xi_t^j$：
$$
\begin{aligned}
(\phi_j \xi_t^j)^{-1/\gamma_j} &= \delta_t e^{\rho_j t/\gamma_j} \\
\phi_j \xi_t^j &= (\delta_t e^{\rho_j t/\gamma_j})^{-\gamma_j} \\
\xi_t^j &= \frac{1}{\phi_j} \delta_t^{-\gamma_j} e^{-\rho_j t}
\end{aligned}
$$
为了确定拉格朗日乘子 $\phi_j$，我们利用初始条件。在 $t=0$ 时，我们通常将状态价格密度标准化为 $\xi_0^j=1$。因此：
$$
1 = \frac{1}{\phi_j} \delta_0^{-\gamma_j} e^0 \implies \phi_j = \delta_0^{-\gamma_j}.
$$
将 $\phi_j$ 代回 $\xi_t^j$ 的表达式中：
$$
\begin{aligned}
\xi_t^j &= \frac{1}{\delta_0^{-\gamma_j}} \delta_t^{-\gamma_j} e^{-\rho_j t} \\
&= e^{-\rho_j t} \frac{\delta_t^{-\gamma_j}}{\delta_0^{-\gamma_j}} \\
&= e^{-\rho_j t} \left(\frac{\delta_t}{\delta_0}\right)^{-\gamma_j}.
\end{aligned}
$$
特别地，当 $\gamma_j=1$（对数效用）时，状态价格密度简化为：
$$
\xi_t^j=e^{-\rho_j t}\left(\frac{\delta_t}{\delta_0}\right)^{-1}.
$$
由于 $\delta_0$ 是一个常数，这可以写为：
$$
\xi_t^j \propto e^{-\rho_j t}\delta_t^{-1}.
$$
在这个特例下，很多资产价格可以得到显式解。

##### Exercise 4：含 OU 漂移的同质经济

在一个同质经济中，当消费增长率的期望值服从 **OU 过程**时，均衡的资产价格行为。与 Vasicek 利率模型有密切关联。

**模型设定**
-   **经济**：同质对数效用经济（$\gamma_j=1$），折现率为 $\rho$。
-   **基本面**：总消费 $\delta_t$ 和其期望增长率 $\hat{\mu}_t$ 服从：
$$
    \frac{d\delta_t}{\delta_t} = \hat{\mu}_t dt + \sigma d\hat{B}_t, \quad d\hat{\mu}_t = \kappa(\bar{\mu} - \hat{\mu}_t)dt + \sigma_\mu d\hat{B}_t
$$
    （为了简洁，省略了代理人上标 $j$）。这里 $\hat{\mu}_t$ 是代理人对真实漂移的最优估计，其动态是在稳态滤波误差 $\bar{\Sigma}$ 下的 OU 过程。
-   **波动率**：根据 OU 滤波理论，信念过程的波动率 $\sigma_\mu = \bar{\Sigma}/\sigma$。

**1. 均衡利率与风险价格**

在对数效用的同质经济中，我们已经推导出状态价格密度为 $\xi_t \propto e^{-\rho t} \delta_t^{-1}$。
对其应用 Itô's Lemma：
$$
\begin{aligned}
d\xi_t &= \frac{\partial \xi_t}{\partial t}dt + \frac{\partial \xi_t}{\partial \delta_t}d\delta_t + \frac{1}{2}\frac{\partial^2 \xi_t}{\partial \delta_t^2}(d\delta_t)^2 \\
&= -\rho\xi_t dt - \frac{\xi_t}{\delta_t}(\hat{\mu}_t \delta_t dt + \sigma \delta_t d\hat{B}_t) + \frac{1}{2}\frac{2\xi_t}{\delta_t^2}(\sigma^2\delta_t^2 dt) \\
&= -(\rho + \hat{\mu}_t - \sigma^2)\xi_t dt - \sigma \xi_t d\hat{B}_t
\end{aligned}
$$
与标准 SDF 动态 $d\xi_t = -r_t \xi_t dt - \theta_t \xi_t d\hat{B}_t$ 对比，可得：
-   **利率**: $r_t = \rho + \hat{\mu}_t - \sigma^2$.
-   **风险价格**: $\theta_t = \sigma$.

由于 $\hat{\mu}_t$ 服从 OU 过程，利率 $r_t$ 也服从一个 OU 过程（即 Vasicek 模型）：
$$
dr_t = d\hat{\mu}_t = \kappa(\bar{\mu} - (r_t - \rho + \sigma^2))dt + \sigma_\mu d\hat{B}_t = \kappa((\bar{\mu} + \rho - \sigma^2) - r_t)dt + \sigma_\mu d\hat{B}_t
$$
利率的长期均值为 $\bar{r} = \bar{\mu} + \rho - \sigma^2$。

**2. 债券与股票价格**

-   **股票价格**: 在对数效用的同质经济中，股票价格是总消费 endowment 的一个简单倍数：
$$
    S_t = \frac{1}{\rho} \delta_t
$$
-   **债券价格**: 由于利率 $r_t$ 是 Vasicek 模型，零息债券价格 $P(t, T)$ 有一个仿射形式解 $P(t, T) = \exp(A(T-t) - B(T-t)r_t)$。其中 $B(\tau) = \frac{1-e^{-\kappa\tau}}{\kappa}$，而 $A(\tau)$ 的表达式较为复杂，依赖于风险中性测度下的参数。

**3. 股票价格波动率**

由于 $S_t = \delta_t / \rho$，股票价格的动态与 $\delta_t$ 完全相同：
$$
\frac{dS_t}{S_t} = \frac{d\delta_t}{\delta_t} = \hat{\mu}_t dt + \sigma d\hat{B}_t
$$
因此，股票收益率的瞬时波动率是一个常数 $\sigma$。

**4. 模型与数据匹配的讨论**

-   **股权溢价之谜 (Equity Premium Puzzle)**:
    模型预测的股权风险溢价为：
$$
    \text{Equity Premium} = \theta_t \times \text{Stock Volatility} = \sigma \times \sigma = \sigma^2
$$
    这个溢价是恒定的。在模型中，消费增长的波动率与股票收益的波动率是同一个参数 $\sigma$。如果我们用**消费增长**的实际波动率（约 2%）来校准，预测的股权溢价为 $0.02^2 = 0.04\%$，远低于历史观察到的 6-8%。如果我们用**股票收益**的实际波动率（约 20%）来校准，预测的溢价为 $0.20^2 = 4\%$，这似乎是合理的，但它隐含了一个前提：消费增长的波动率也高达 20%，这与事实严重不符。这就是该模型无法解释股权溢价之谜的体现。

-   **股票波动率之谜 (Stock Volatility Puzzle)**:
    模型预测的股票波动率是常数 $\sigma$。然而，真实市场中的股票波动率是时变的，存在著名的“波动率聚类”（volatility clustering）现象。该模型无法捕捉这一特征。

-   **无风险利率之谜 (Risk-free Rate Puzzle)**:
    模型预测的利率 $r_t = \rho + \hat{\mu}_t - \sigma^2$。使用合理的参数（如 $\rho=2\%$, $\hat{\mu}_t$ 均值约 2%，$\sigma=20\%$），预测的平均利率可能是负数 ($4\% - 4\% = 0$ 或者更低)，这也与历史数据不符。

综上，虽然这个模型结构优美，但它在定量上难以匹配资产定价中的几个关键“谜题”。

#### 12.4.3 两个对数效用代理人

::::{admonition} Lemma (Log Utility Sharing Rule with Heterogeneous Beliefs)
两个对数效用代理人、主观密度过程为 $\eta_i$ 时，规划者一阶条件给出
$$
c_{it}=\frac{\alpha_i\eta_{it}}{\alpha_1\eta_{1t}+\alpha_2\eta_{2t}}D_t,
$$
其中 $D_t$ 是总产出 / dividend，$\alpha_i$ 是 Pareto weight。
::::


$$
\begin{aligned}
\max_{c_1,c_2}\quad
&\alpha_1\eta_{1t}\log c_{1t}+\alpha_2\eta_{2t}\log c_{2t},\\
\text{s.t.}\quad
&c_{1t}+c_{2t}=D_t.
\end{aligned}
$$
Lagrangian 为
$$
\begin{aligned}
\mathcal L
=\alpha_1\eta_{1t}\log c_{1t}+\alpha_2\eta_{2t}\log c_{2t}
-\zeta_t(c_{1t}+c_{2t}-D_t).
\end{aligned}
$$
FOC：
$$
\begin{aligned}
\frac{\alpha_1\eta_{1t}}{c_{1t}}&=\zeta_t,\\
\frac{\alpha_2\eta_{2t}}{c_{2t}}&=\zeta_t.
\end{aligned}
$$
因此
$$
\begin{aligned}
c_{1t}&=\frac{\alpha_1\eta_{1t}}{\zeta_t},\\
c_{2t}&=\frac{\alpha_2\eta_{2t}}{\zeta_t}.
\end{aligned}
$$
代入市场出清：
$$
\begin{aligned}
D_t
&=\frac{\alpha_1\eta_{1t}+\alpha_2\eta_{2t}}{\zeta_t},\\
\zeta_t
&=\frac{\alpha_1\eta_{1t}+\alpha_2\eta_{2t}}{D_t}.
\end{aligned}
$$
于是
$$
\begin{aligned}
c_{it}
&=\frac{\alpha_i\eta_{it}}{\alpha_1\eta_{1t}+\alpha_2\eta_{2t}}D_t.
\end{aligned}
$$
$$
\begin{aligned}
u_i'(c) &= \frac{1}{c} & \text{log utility} \\
c_t^i &= \frac{e^{-\rho_i t}}{\phi_i \xi_t^i} & \text{FOC} \\
\frac{\xi_t^1}{\xi_t^2} &= \zeta_t^{21} & \text{relative SDF} \\
\delta_t &= c_t^1+c_t^2 \\
&= \frac{e^{-\rho_1 t}}{\phi_1 \xi_t^1}
   +\frac{e^{-\rho_2 t}}{\phi_2 \xi_t^2} \\
&= \frac{1}{\xi_t^1}
   \left(
   \frac{e^{-\rho_1 t}}{\phi_1}
   +\frac{e^{-\rho_2 t}}{\phi_2}\zeta_t^{21}
   \right)
   & \text{consumption clearing} \\
\xi_t^1
&= \frac{1}{\delta_t}
   \left(
   \frac{e^{-\rho_1 t}}{\phi_1}
   +\frac{e^{-\rho_2 t}}{\phi_2}\zeta_t^{21}
   \right)
   & \text{solve for } \xi_t^1.
\end{aligned}
$$

#### 12.4.4 股票价格
$$
\begin{aligned}
S_t
&= \frac{1}{\xi_t^1}E_t^1\left[\int_t^\infty \xi_s^1\delta_s\,ds\right]
   & \text{pricing formula} \\
&= \frac{1}{\xi_t^1}E_t^1\left[\int_t^\infty
   \left(\frac{e^{-\rho_1 s}}{\phi_1}
        +\frac{e^{-\rho_2 s}}{\phi_2}\zeta_s^{21}\right)ds\right]
   & \text{use } \xi_s^1\delta_s \\
&= \frac{1}{\xi_t^1}\int_t^\infty
   \left(\frac{e^{-\rho_1 s}}{\phi_1}
        +\frac{e^{-\rho_2 s}}{\phi_2}E_t^1[\zeta_s^{21}]\right)ds
   & \text{martingale property} \\
&= \frac{1}{\xi_t^1}\int_t^\infty
   \left(\frac{e^{-\rho_1 s}}{\phi_1}
        +\frac{e^{-\rho_2 s}}{\phi_2}\zeta_t^{21}\right)ds \\
&= \frac{1}{\xi_t^1}
   \left(
   \frac{e^{-\rho_1 t}}{\phi_1\rho_1}
   +\frac{e^{-\rho_2 t}}{\phi_2\rho_2}\zeta_t^{21}
   \right) \\
&= \frac{\rho_1^{-1}+\eta_t^{21}\rho_2^{-1}}{1+\eta_t^{21}}\delta_t
   & \eta_t^{21}\equiv\frac{c_t^2}{c_t^1}
   =\frac{\phi_1}{\phi_2}e^{-(\rho_2-\rho_1)t}\zeta_t^{21}.
\end{aligned}
$$

#### 12.4.5 利率与风险价格
$$
\begin{aligned}
d\xi_t^1
&= -r_t\xi_t^1\,dt-\theta_t^1\xi_t^1\,d\hat B_t^1
   & \text{SDF dynamics} \\
\xi_t^1
&= \frac{1}{\delta_t}
   \left(
   \frac{e^{-\rho_1 t}}{\phi_1}
   +\frac{e^{-\rho_2 t}}{\phi_2}\zeta_t^{21}
   \right) \\
\frac{d\delta_t}{\delta_t}
&= \hat\mu_t^1 dt+\sigma\, d\hat B_t^1,
\qquad
\frac{d\zeta_t^{21}}{\zeta_t^{21}}
= -\beta_t^{12}\, d\hat B_t^1 \\
\frac{d\eta_t^{21}}{\eta_t^{21}}
&= -(\rho_2-\rho_1)dt-\beta_t^{12}\,d\hat B_t^1
   & \eta_t^{21}\equiv\frac{c_t^2}{c_t^1} \\
S_t
&= W_t\delta_t,
\qquad
W_t=\frac{\rho_1^{-1}+\eta_t^{21}\rho_2^{-1}}{1+\eta_t^{21}}
   & \text{consumption-weighted stock price} \\
\frac{dS_t}{S_t}
&= \frac{d\delta_t}{\delta_t}+d\ln W_t
= \mu_{S,t}dt+\sigma_{S,t}\,d\hat B_t^1 \\
\sigma_{S,t}
&= \sigma
   +\left[
   \frac{\eta_t^{21}}{1+\eta_t^{21}}
   -\frac{\eta_t^{21}/\rho_2}{1/\rho_1+\eta_t^{21}/\rho_2}
   \right]\beta_t^{12} \\
r_t
&= \frac{
   \rho_1+\hat\mu_t^1-\sigma^2
   +(\rho_2+\hat\mu_t^2-\sigma^2)\eta_t^{21}
   }{1+\eta_t^{21}} \\
\theta_t^1
&= \sigma+\frac{\eta_t^{21}}{1+\eta_t^{21}}\beta_t^{12}
   & \text{agent 1 risk price} \\
\theta_t^2
&= \sigma-\frac{1}{1+\eta_t^{21}}\beta_t^{12}
   & \text{agent 2 risk price}
\end{aligned}
$$
Hence heterogeneous beliefs imply stochastic risk prices, stock volatility, and the equilibrium interest rate.

##### Exercise 5: Continued with log utility with two agents

**题目**

1. 证明上面的利率和风险价格。
2. 求代理人 $j$ 的财富 $W_t^j$。
3. 求代理人 $j$ 投资于股票的财富比例 $\pi_t^j$。
4. 验证金融市场出清。
5. 求到期为 $T>t$ 的零息债券价格。

**解析**

**1. 利率与风险价格**
$$
r_t=
\frac{
\rho_1+\hat\mu_t^1-\sigma^2
+
(\rho_2+\hat\mu_t^2-\sigma^2)\eta_t^{21}
}
{1+\eta_t^{21}},
\qquad
\theta_t^1 =
\sigma+\frac{\eta_t^{21}}{1+\eta_t^{21}}\beta_t^{12},
\qquad
\theta_t^2 =
\sigma-\frac{1}{1+\eta_t^{21}}\beta_t^{12}.
$$
**2. 代理人财富**

在对数效用下，最优消费-财富比是常数，因此
$$
W_t^j=\frac{c_t^j}{\rho_j} =
\frac{e^{-\rho_j t}}{\phi_j\rho_j\xi_t^j}.
$$
等价地，财富就是未来消费流的现值：
$$
\begin{aligned}
W_t^j
&=
\frac{1}{\xi_t^j}E_t^j\left[\int_t^\infty \xi_s^j c_s^j\,ds\right] \\
&=
\frac{1}{\xi_t^j}E_t^j\left[\int_t^\infty \frac{e^{-\rho_j s}}{\phi_j}\,ds\right] \\
&=
\frac{e^{-\rho_j t}}{\phi_j\rho_j\xi_t^j}.
\end{aligned}
$$
**3. 股票仓位**

由动态预算约束和 log utility 的 myopic demand，最优股票财富比例为
$$
\pi_t^j=\frac{\mu_{S,t}^j-r_t}{\sigma_{S,t}^2} =
\frac{\theta_t^j}{\sigma_{S,t}}.
$$
因此
$$
\pi_t^1 =
\frac{1}{\sigma_{S,t}}
\left(
\sigma+\frac{\eta_t^{21}}{1+\eta_t^{21}}\beta_t^{12}
\right),
\qquad
\pi_t^2 =
\frac{1}{\sigma_{S,t}}
\left(
\sigma-\frac{1}{1+\eta_t^{21}}\beta_t^{12}
\right).
$$
**4. 市场出清**

用上面的 $W_t^j$ 与 $\pi_t^j$ 代回即可验证
$$
\pi_t^1W_t^1+\pi_t^2W_t^2=S_t,
\qquad
(1-\pi_t^1)W_t^1+(1-\pi_t^2)W_t^2=0.
$$
直观上，第一式表示总财富中有且仅有一单位股票被持有；第二式表示债券供给为零，因此净债券持仓必须为零。

**5. 零息债券价格**

价格满足
$$
P(t,T)=E_t^j\left[\exp\left(-\int_t^T r_s\,ds\right)\right].
$$
若沿用 Exercise 4 中的 OU 漂移设定，则 $r_t$ 是仿射的，债券价格仍然是 Vasicek 形式：
$$
P(t,T)=\exp\!\bigl(A(T-t)-B(T-t)r_t\bigr),
\qquad
B(\tau)=\frac{1-e^{-\kappa\tau}}{\kappa}.
$$
其中 $A(\tau)$ 由漂移项和方差项确定；若用题目提示的 Gaussian 计算或 Girsanov 变换，结果与上式等价。


### 12.5 社会规划者方法 (Social Planner Approach)

**核心思想**
- 与其直接求市场均衡，不如先求一个社会规划者 (social planner) 的最优资源配置。
- 规划者通过选择权重 $\lambda_j$ 来复现某个市场均衡或某个 Pareto frontier 上的点。
- 把问题写成单一测度下的动态规划之后，很多均衡结论会更容易推导。

**规划者问题**

给定常数权重 $\lambda_j$，规划者最大化各代理人的期望效用加总：
$$
\max_{\{c_t^j\}}
\sum_j \lambda_j E^j\left[\int_0^\infty e^{-\rho_j t}u_j(c_t^j)\,dt\right].
$$
选定参考测度 $i$ 后，利用 Radon-Nikodym 变换 $\zeta_t^{ji}$，可写成
$$
\begin{aligned}
\max_{\{c_t^j\}}
\;E^i\left[\int_0^\infty \sum_j \lambda_j \zeta_t^{ji}e^{-\rho_j t}u_j(c_t^j)\,dt\right].
\end{aligned}
$$
定义随机 Pareto 权重 (stochastic weights)
$$
\omega_t^{ji}:=\lambda_j\zeta_t^{ji},
$$
则目标函数就是
$$
E^i\left[\int_0^\infty \sum_j \omega_t^{ji}e^{-\rho_j t}u_j(c_t^j)\,dt\right].
$$
**资源约束**
$$
\sum_j c_t^j=\delta_t.
$$
对应的一阶条件为
$$
\omega_t^{ji}e^{-\rho_j t}u_j'(c_t^j)=\nu_t,
$$
 $\nu_t$ 是资源约束的拉格朗日乘子。最优消费满足“边际效用按随机权重加权后相等”。

**直观解释**
1. 这把市场均衡问题转成了动态资源配置问题。
2. 随机权重 $\lambda_j\zeta_t^{ji}$ 会把不同信念的差异直接带进最优配置。
3. 在给定偏好下，这个写法通常比直接在市场均衡里求解更适合做动态规划。

**log utility 下的特别简单形式**

如果 $u_j(c)=\log c$，则
$$
c_t^j=\frac{\omega_t^{ji}e^{-\rho_j t}}{\nu_t}.
$$
因此在 log utility 例子里，规划者解就是随机权重下的消费分配。

### 12.6 其他相关模型 (Other Related Models)

- **Heterogeneity and Volatility Puzzles in International Finance**  
  Li and Muzere, JFQA, 2010.
- **Investors' Heterogeneity and Implied Volatility Smiles**  
  Li, MS, 2013.
- **Production economy (Li and Loewenstein, 2020, WP)**  
  - 线性生产经济 with asymmetric adjustment cost.
  - 两个代理人拥有常数信念，因此只剩两个状态变量：生产技术和 $\zeta_t^{21}$。
  - 代理人采用 recursive utility。
  - 重点研究金融市场中的投机如何影响实体经济 (real economy)。

## 13. 本部分主线总结

Part 4 的逻辑可以概括为：

1. `Grossman-Stiglitz` 说明价格为何只能部分揭示信息；
2. `Glosten-Milgrom` 说明逆向选择如何产生买卖价差；
3. `Kyle` 说明知情者会策略性分批释放信息，价格冲击系数 $\lambda$ 成为流动性核心指标；
4. `Heterogeneous Beliefs` 说明即使没有私人消息，只要对不可观测基本面的学习方式不同，也会产生交易、风险溢价和额外波动。
