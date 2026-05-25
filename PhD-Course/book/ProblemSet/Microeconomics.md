# Microeconomics

## Question 1

Consider a two-period economy with two agents and a single consumption good. Agent $h$'s preferences over consumption streams $(c_1^h,c_2^h)$, where $c_i^h$ is the consumption of the good by $h$ in period $i$, are represented by the separable utility function

$$
u^h(c_1^h)+\delta u^h(c_2^h),
$$

where $u^h(\cdot)$ is strictly increasing, strictly concave and differentiable, $h=1,2$, and $u^{h'}(0)=\infty.$

Both agents have strictly positive endowments in each period and the aggregate endowment of the good in period 1 is strictly greater than the aggregate endowment in period 2.

**Basic setup**

$$\left\{
\begin{aligned}
&U^h(c_1^h,c_2^h)=u^h(c_1^h)+\delta u^h(c_2^h),\qquad h=1,2\\
&u^{h'}>0,\qquad u^{h''}<0,\qquad u^{h'}(0)=\infty\\
&\bar e_1:=e_1^1+e_1^2,\qquad \bar e_2:=e_2^1+e_2^2\\
&(p_1, p_2)=(1, p), \qquad \bar{e_1}>\bar{e_2}>0
\end{aligned}
\right.$$

$$
\begin{aligned}
\text{CP:}&\begin{cases}
\max_{c_1^h,c_2^h} & u^h(c_1^h)+\delta u^h(c_2^h)\\
s.t. & e_1^h+c_2^h-p_1c_1^h-p_2c_2^h\geq 0\\
\end{cases}\\
\mathcal{L} &= u^h(c_1^h)+\delta u^h(c_2^h)+\lambda^h(e_1^h+c_2^h-p_1c_1^h-p_2c_2^h)\\
FOC:& \begin{cases}
\frac{\partial \mathcal{L}}{\partial c_1^h} = u^{h'}(c_1^h)-\lambda^hp_1=0\\
\frac{\partial \mathcal{L}}{\partial c_2^h} = \delta u^{h'}(c_2^h)-\lambda^hp_2=0
\end{cases}
\Rightarrow \frac{u^{h'}(c_1^h)}{\delta u^{h'}(c_2^h)}=\frac{p_1}{p_2}=\frac{1}{p}
\end{aligned}
$$

> (a) Show $c_1^h>c_2^h$ in a competitive equilibrium for this economy for $h=1,2$.

<details>
<summary>Solution</summary>

Competitive equilibrium:

1. Individual optimization: FOCs = 0
2. Market clearing
$$
c_1^1+c_1^2=\bar e_1, \quad c_2^1+c_2^2=\bar e_2, \quad \bar e_1>\bar e_2
$$

$$
\frac{u^{h'}(c_1^h)}{\delta u^{h'}(c_2^h)}=\frac{p_1}{p_2}=\frac{1}{p} \iff \frac{u^{1'}(c_1^1)}{u^{1'}(c_2^1)}=\frac{u^{2'}(c_1^2)}{u^{2'}(c_2^2)}=\frac{u^{2'}(\bar{e}_1-c_1^1)}{u^{2'}(\bar{e}_2-c_2^2)}=\frac{\delta}{p}
$$

WTS: $c_1^h>c_2^h$ for $h=1,2$.

Suppose $c_1^1\leq c_2^1$, then $c_1^2\geq c_2^2$ since $\bar e_1>\bar e_2$. Then, by the strict concavity of $u^h(\cdot)$, it means $u^{h''}(\cdot)<0$ and $u^{h'}(\cdot)$ is strictly decreasing, we have
$$\frac{u^{1'}(c_1^1)}{u^{1'}(c_2^1)} > \frac{u^{1'}(c_2^1)}{u^{1'}(c_2^1)}=1>\frac{\delta}{p}$$
and
$$\frac{u^{2'}(c_1^2)}{u^{2'}(c_2^2)} < \frac{u^{2'}(c_2^2)}{u^{2'}(c_2^2)}=1<\frac{\delta}{p}$$
which contradicts the FOCs. Therefore, $c_1^1>c_2^1$. Similarly, we can show $c_1^2>c_2^2$.

</details>

>(b) How does the answer to part (a) change if the good is storable, that is, endowment in period 1 can be held over to period 2?

<details>
<summary>Solution</summary>

Storable means:
$$
\begin{aligned}
\begin{cases}
\max_{c_1^h,c_2^h,s^h\ge0}\ u^h(c_1^h)+\delta u^h(c_2^h)\\
\text{s.t.}\quad (c_1^h+s^h)+p(c_2^h-s^h)\le e_1^h+pe_2^h
\end{cases}\\
\iff c_1^h+pc_2^h+(1-p)s^h\le e_1^h+pe_2^h\\
\end{aligned}
$$

$$
\mathcal{L} = u^h(c_1^h)+\delta u^h(c_2^h)+\lambda^h(e_1^h+pe_2^h-c_1^h-pc_2^h-(1-p)s^h)
$$
$$
\begin{cases}
\frac{\partial \mathcal{L}}{\partial c_1^h} = u^{h'}(c_1^h)-\lambda^h=0\\
\frac{\partial \mathcal{L}}{\partial c_2^h} = \delta u^{h'}(c_2^h)-\lambda^hp=0\\
\frac{\partial \mathcal{L}}{\partial s^h} = -(1-p)\lambda^h=0
\end{cases}
\Rightarrow \frac{u^{h'}(c_1^h)}{\delta u^{h'}(c_2^h)}=p
$$

$$
\left\{
\begin{aligned}
&p>1
\Longrightarrow \text{storage 正利润，不能是均衡}\\
&p<1
\Longrightarrow \text{storage 亏损，所以 }s^h=0\\
&p=1
\Longrightarrow \text{storage 零利润，可能被使用}
\end{aligned}
\right.
$$

- 当$p<1$时，$s^1=s^2=0$，问题退化为非储存情况（Part (a)），$c_1^h>c_2^h$仍然成立。

- 当$p=1$时，$\frac{u^{h'}(c_1^h)}{u^{h'}(c_2^h)}=\delta$，由于$u^{h'}(\cdot)$是严格递减的，$\delta<1$，$c_1^h>c_2^h$仍然成立。

所以，无论$p<1$还是$p=1$，$c_1^h>c_2^h$仍然成立。

</details>

>(c) How would the answer to part (b) change if the aggregate endowment of the good in period 1 is strictly less than the aggregate endowment in period 2?

<details>
<summary>Solution</summary>

当$\bar e_1<\bar e_2$时，市场清算条件为
$$
\begin{aligned}
\begin{cases}
\sum_h(c_1^h+s^h)=\bar e_1\\
\sum_h(c_2^h-s^h)=\bar e_2\\
\bar e_1<\bar e_2
\end{cases}
\iff 
\sum_h c_1^h=\bar e_1-\sum_hs^h<\bar e_2+\sum_hs^h=\sum_h c_2^h.
\end{aligned}
$$

根据Part(b)，储存条件为$p\le1$。

- 当$p=1$时，$u^{h'}(c_1^h)=\delta u^{h'}(c_2^h)\Longrightarrow u^{h'}(c_1^h)<u^{h'}(c_2^h) \Longrightarrow c_1^h>c_2^h.$与$\sum_h c_1^h<\sum_h c_2^h$矛盾，所以$p=1$不可能是均衡价格。
- 当$p<1$时，$s^h=0$，
$$
c_1^k<c_2^k
\iff
u^{k'}(c_1^k)>u^{k'}(c_2^k)
\iff
\frac{\delta}{p}
=
\frac{u^{k'}(c_1^k)}{u^{k'}(c_2^k)}
>1.
$$
因此，当$\delta>p$时，$c_1^h<c_2^h$ in a competitive equilibrium for this economy for $h=1,2$.

总结：
$$
\left\{
\begin{aligned}
&\text{不可储存且 }\bar e_1>\bar e_2
\Longrightarrow c_1^h>c_2^h,\quad p>\delta\\
&\text{可储存且 }\bar e_1>\bar e_2
\Longrightarrow c_1^h>c_2^h,\quad p\in(\delta,1]\text{ 或 }p=1\\
&\text{可储存且 }\bar e_1<\bar e_2
\Longrightarrow c_1^h<c_2^h,\quad p<\delta
\end{aligned}
\right.
$$

</details>

---

## Question 2

Two farmers face the possibility that the river on which their farms lie might flood. For simplicity suppose that either of their farms might flood, but not both. The chance that either farm might flood is $1/4$. Each farmer's crop will be $200$ if his farm does not flood and $0$ if it does flood. Each has a von Neumann-Morgenstern utility function with utility for the good being $u(x)=\ln x.$

**Basic setup**: not both farmers can be flooded, so there are three states of the world:
$$
\left\{
\begin{aligned}
&s=1:\text{ farmer 1 flooded}\\
&s=2:\text{ farmer 2 flooded}\\
&s=3:\text{ no flood}
\end{aligned}
\right.
$$

Arrow-Debreu equilibrium 中，agent 在 date 0 选择完整的 contingent consumption plan：
$$x^h=(x_1^h,x_2^h,x_3^h).$$

价格向量为：
$$p=(p_1,p_2,p_3).$$

$$
\begin{aligned}
&CP:\begin{cases}
\max_{x_1^h,x_2^h,x_3^h>0}\ \sum_{s=1}^3 \pi_s\ln x_s^h\\
\text{s.t.}\quad \sum_{s=1}^3p_sx_s^h\le \sum_{s=1}^3p_se_s^h
\end{cases}\\
&\mathcal L^h=
\sum_{s=1}^3\pi_s\ln x_s^h
+\lambda^h
\left(
\sum_{s=1}^3p_se_s^h-\sum_{s=1}^3p_sx_s^h
\right)\\
&\text{FOC: }\frac{\partial \mathcal L^h}{\partial x_s^h}
=
\frac{\pi_s}{x_s^h}-\lambda^hp_s=0 \iff \frac{\pi_s/x_s^h}{\pi_t/x_t^h}
=
\frac{p_s}{p_t}
\end{aligned}
$$

>(a) Compute the Arrow-Debreu equilibrium for this economy, where the farmers can trade contingent commodities before it is known whose farm might flood. What is the expected utility of each farmer?

<details>
<summary>Solution</summary>

$$
\left\{
\begin{aligned}
&\pi_1=\frac14,\qquad \pi_2=\frac14,\qquad \pi_3=\frac12\\
&e^1=(0,200,200)\\
&e^2=(200,0,200)\\
&e=e^1+e^2=(200,200,400)
\end{aligned}
\right.
$$

$$p_1:p_2:p_3 = \frac{\pi_1}{e^1}:\frac{\pi_2}{e^2}:\frac{\pi_3}{e^3}=\frac{1/4}{200}:\frac{1/4}{200}:\frac{1/2}{400}=1:1:1$$

$$
\begin{aligned}
m^1&=p\cdot e^1=0+200+200=400\\
m^2&=p\cdot e^2=200+0+200=400
\end{aligned}
$$

$$x_s^h=\frac{\pi_s}{p_s}m^h$$

Equilibrium allocation:
$$
x^h=
400
\left(
\frac14,\frac14,\frac12
\right)
=
(100,100,200).
$$

Expected utility of each farmer:
$$
\begin{aligned}
U^h
&=
\frac14\ln100+\frac14\ln100+\frac12\ln200\\
&=
\frac12\ln100+\frac12\ln200\\
&=
\ln\sqrt{100\cdot200}\\
&=
\ln(100\sqrt2)
\end{aligned}
$$

</details>

>(b) Suppose now that there is probability $0$ that farmer 1's field will be flooded but the probability that farmer 2's field will be flooded is still $1/4$. How would your answer to part (a) change?

<details>
<summary>Solution</summary>

$$\pi_1=0,\qquad \pi_2=\frac14,\qquad \pi_3=\frac34$$

$$p_1:p_2:p_3 = \frac{\pi_1}{e^1}:\frac{\pi_2}{e^2}:\frac{\pi_3}{e^3}=0:\frac{1/4}{200}:\frac{3/4}{400}=0:2:3$$

$$\begin{aligned}
m^1&=p\cdot e^1=0\cdot0+200\cdot2+200\cdot3=1000\\
m^2&=p\cdot e^2=200\cdot0+0\cdot2+200\cdot3=600
\end{aligned}$$

$$x_s^h=\frac{\pi_s}{p_s}m^h$$

$$
\begin{aligned}
\begin{cases}
x_2^1=\frac14\cdot\frac{1000}{2}=125\\
x_3^1=\frac34\cdot\frac{1000}{3}=250
\end{cases}
\quad
\begin{cases}
x_2^2=\frac14\cdot\frac{600}{2}=75\\
x_3^2=\frac34\cdot\frac{600}{3}=150
\end{cases}\\
x_1^1+x_1^2=200,\qquad x_1^1,x_1^2\ge0.
\end{aligned}
$$

Equilibrium allocation:
$$
x^1=(x_1^1,125,250),
\qquad
x^2=(x_1^2,75,150),
\qquad
x_1^1+x_1^2=200.
$$

Expected utility of each farmer:
$$
\begin{aligned}
U^1&=0 + \frac14\ln125 + \frac34\ln250\\
U^2&=0 + \frac14\ln75 + \frac34\ln150
\end{aligned}
$$


</details>


>(c) Suppose now that weather forecasting becomes perfected so that it will be known whether or not there will be a flood at the time the contingent claims markets open. What will be known is whether there will be a flood, but not which farmer will be affected should there be a flood. How will this affect the ex ante utilities of the farmers?

<details>
<summary>Solution</summary>

如果天气预报是完美的，那么在交易开始时，农民们就会知道是否会有洪水发生，但不会知道哪个农民会受到影响。

$$
z\in\{F,N\},
\qquad
F=\{s=1,s=2\},\quad N=\{s=3\}.
$$

$$
\begin{array}{c|c|c|c|c}
\text{signal} & \Pr(z) & \pi^z & p^z & (x^{1,z},x^{2,z})\\
\hline
F & \frac12
&
\left(\frac12,\frac12,0\right)
&
(1,1,0)
&
\big((100,100,\cdot),(100,100,\cdot)\big)
\\[4pt]
N & \frac12
&
(0,0,1)
&
(0,0,1)
&
\big((\cdot,\cdot,200),(\cdot,\cdot,200)\big)
\end{array}
$$
这里 ⋅ 表示该 signal 下不可能发生的状态，消费取多少不影响效用和均衡。

Conditional AD allocations：
$$
\left\{
\begin{aligned}
&z=F:\quad e_F=(200,200),\quad \pi^F=(1/2,1/2)
\Longrightarrow x_F^1=x_F^2=(100,100)\\
&z=N:\quad e_3^1=e_3^2=200
\Longrightarrow x_3^1=x_3^2=200
\end{aligned}
\right.
$$

Thus, across original states：
$$
x^1=x^2=(100,100,200).
$$

Ex ante utility：
$$
\begin{aligned}
U^h
&=
\Pr(F)\left[\frac12\ln100+\frac12\ln100\right]
+
\Pr(N)\ln200\\
&=
\frac12\ln100+\frac12\ln200\\
&=
\ln(100\sqrt2).
\end{aligned}
$$

</details>

---

## Question 3

Consider an exchange economy with two consumers and two goods. Good $x$ is a perfectly divisible numeraire. Good $y$, in contrast, is indivisible, that is, consumers can only consume it in nonnegative integer amounts. The utility of consumer $i=1,2$ from consuming a bundle $(x^i,y^i)$ of the two goods is given by

$$
u^i(x^i,y^i)=x^i+v^i(y^i),
$$

where $v^i(\cdot)$ is a function on nonnegative integers. Assume that

$$
v^i(2)>v^i(1)=v^i(0)=0,
\qquad
v^i(y)=v^i(2)\quad \text{for }y>2.
$$

Think of good $y$ as chopsticks where the value of only one is $0$. Assume also that $v^2(2)\le v^1(2)\le 10.$

The initial endowment of consumer $i=1,2$ is $(e_x^i,e_y^i)$. Assume the total endowment of good $y$ is $e_y^1+e_y^2=2,$ and that $e_x^1=e_x^2=20.$

**Basic setup**
$$
\left\{
\begin{aligned}
&V_i:=v^i(2),\qquad 0<V_2\le V_1\le 10\\
&x^1+x^2\le 40\\
&y^1+y^2=2,\qquad y^i\in\mathbb Z_+\\
&u^i(x^i,y^i)=x^i+v^i(y^i)
\end{aligned}
\right.
$$

>(a) Describe the Pareto efficient allocations in this economy.

<details>
<summary>Solution</summary>

$$
\left\{
\begin{aligned}
&x^1+x^2=40\\
&(y^1,y^2)=(2,0)\quad\text{or}\quad (0,2).
\end{aligned}
\right.
$$

- $V_1=V_2$
$$
u^1+u^2=40+V_1=40+V_2 \quad(\text{Pareto efficient})
$$
- $V_1>V_2$
  - $(y^1,y^2)=(2,0) \implies \left\{
    \begin{aligned}
    &u^1=x^1+V_1=40-x^2+V_1\\
    &u^2=x^2\\
    &u=u^1+u^2=40+V_1
    \end{aligned}
    \right. \quad(\text{Pareto efficient})$

  - $(y^1,y^2)=(0,2) \implies \left\{
    \begin{aligned}
    &u^1=x^1\\
    &u^2=x^2+V_2=40-x^1+V_2\\
    &u=u^1+u^2=40+V_2
    \end{aligned}
    \right.$

假设存在Pareto improvement $(x^{1'},x^{2'}) \implies \left\{
    \begin{aligned}
    &u^{1'}=x^{1'}+V_1 \ge x^1\\
    &u^{2'}=x^{2'} \ge x^2+V_2 \iff x^{1'} \le x^1 - V_2\\
    &u'=u^{1'}+u^{2'}=40+V_1 \ge 40+V_2
    \end{aligned}
    \right.$

- $x^1 \ge V_2 \implies \left\{
    \begin{aligned}
    &x^{1'}=x^1-V_2\\
    &x^{2'}=x^2+V_2\\
    \end{aligned}
    \right.$
    - $V_2$可视为consumer 1用good x补偿给consumer 2的numerated value.
    - $u^{1'}=x^1-V_2+V_1>u^1$，$u^{2'}=x^2+V_2=u^2$，存在Pareto improvement，矛盾。
- $x^1 < V_2$，无法通过转移good x来实现Pareto improvement，该点是Pareto efficient的。

$$
\begin{aligned}
&PO:
\begin{cases}
V_1=V_2:
x^1+x^2=40,\ (y^1,y^2)=(2,0)\text{ or }(0,2),\\
V_1>V_2:
\big[x^1+x^2=40,\ (y^1,y^2)=(2,0)\big]\\
\qquad\qquad\text{or }
\big[x^1+x^2=40,\ (y^1,y^2)=(0,2),\ x^1<V_2\big].
\end{cases}
\end{aligned}
$$

</details>

>(b) Write conditions for a Walrasian equilibrium for this economy.

<details>
<summary>Solution</summary>

$$
CP:
\left\{
\begin{aligned}
&\max_{x^i\ge0,\ y^i\in\mathbb Z_+}\ x^i+v^i(y^i)\\
&\text{s.t.}\quad x^i+py^i\le 20+pe_y^i=m^i
\end{aligned}
\right.
$$
Assume price vestor is $p=(1,p_y)$,
$$
\left\{
\begin{aligned}
    &u^i(x^i,0)=m^i\\
    &u^i(x^i,2)=m^i-2p_y+v^i(2)=m^i-2p_y+V_i
\end{aligned}
\right.
$$

- $2p_y>V_i \implies y^i=0, x^i=m^i$
- $2p_y<V_i \implies y^i=2, x^i=m^i-2p_y+V_i$
- $2p_y=V_i \implies y^i=0\text{ or }2, x^i=m^i\text{ or }m^i-2p_y+V_i$

Because $V_2 \le V_1$,
$$
\left\{
\begin{aligned}
&2p_y>V_1
\Longrightarrow D_1^y(p)=D_2^y(p)=\{0\}
\Longrightarrow y^1+y^2=0<2,\\
&2p_y<V_2
\Longrightarrow D_1^y(p)=D_2^y(p)=\{2\}
\Longrightarrow y^1+y^2=4>2,\\
&V_2\le 2p_y\le V_1
\Longrightarrow \text{market clearing is possible.}
\end{aligned}
\right.
$$

Allocation conditions:
$$
\left\{
\begin{aligned}
&V_1>V_2
\Longrightarrow (y^1,y^2)=(2,0),\\
&V_1=V_2
\Longrightarrow 2p=V_1=V_2,\quad (y^1,y^2)=(2,0)\text{ or }(0,2).
\end{aligned}
	\right.
$$

</details>

>(c) Does a Walrasian equilibrium always exist for such an economy? Either prove that it does or give a counterexample.

<details>
<summary>Solution</summary>

- $V_1>V_2$，$p_y\in(V_2/2,V_1/2)$
$$\left\{
\begin{aligned}
&x^1=20+pe_y^1-2p\\
&x^2=20+pe_y^2
\end{aligned}
\right. \implies \begin{aligned}
x^1+x^2
&=40+p(e_y^1+e_y^2)-2p=40, \text{W.E exists.}
\end{aligned}$$
- $V_1=V_2$，$p_y=V_1/2=V_2/2$
$$\left\{\begin{aligned}
&x^1=20+pe_y^1-2p\cdot\mathbf{1}_{\{y^1=2\}}\\
&x^2=20+pe_y^2-2p\cdot\mathbf{1}_{\{y^2=2\}}
\end{aligned}\right. \implies \begin{aligned}
&\text{if }(y^1,y^2)=(2,0),\ x^1=20+pe_y^1-2p,\ x^2=20+pe_y^2\\
&\text{if }(y^1,y^2)=(0,2),\ x^1=20+pe_y^1,\ x^2=20+pe_y^2-2p
\end{aligned}$$
两种情况都满足市场清算条件，所以W.E exists.

</details>

>(d) If a Walrasian equilibrium exists for such an economy, is it Pareto efficient? Either explain why it is or provide a counterexample.

<details>
<summary>Solution</summary>

$$
\left\{
\begin{aligned}
&x^1+x^2=40\\
&y^1+y^2=2\\
&(y^1,y^2)=(2,0)\text{ or }(0,2)
\end{aligned}
\right.
$$

$$
\left\{
\begin{aligned}
&V_1=V_2:
\text{ part (a) says all non-wasteful allocations with both }y\text{ to one agent are PE},\\
&V_1>V_2:
\text{ part (b) says any WE must have }(y^1,y^2)=(2,0),\\
&\qquad\quad \text{and part (a) says this is PE whenever }x^1+x^2=40.
\end{aligned}
\right.
$$

</details>

>(e) Suppose we replace the assumption $v^i(1)=0$ with $v^i(1)>0$, keeping all the other assumptions. Will a Walrasian equilibrium now always exist? Either explain why or give a counterexample.

<details>
<summary>Solution</summary>

Construct:
$$
\left\{
\begin{aligned}
&v^1(0)=0,\qquad v^1(1)=1,\qquad v^1(2)=10\\
&v^2(0)=0,\qquad v^2(1)=7,\qquad v^2(2)=8\\
&v^i(y)=v^i(2),\qquad y>2
\end{aligned}
\right.
$$

This satisfies:
$$
\left\{
\begin{aligned}
&v^i(2)>v^i(1)>0\\
&v^2(2)=8\le v^1(2)=10\le10
\end{aligned}
\right.
$$

For utility maximization:
$$
\left\{
    \begin{aligned}
    u^i(x^i,0)&=m^i\\
u^i(x^i,1)&=m^i-p+v^i(1)\\
u^i(x^i,2)&=m^i-2p+v^i(2)
    \end{aligned}
\right.
\iff
\left\{
\begin{aligned}
&y=0:\quad 0\\
&y=1:\quad v^i(1)-p\\
&y=2:\quad v^i(2)-2p
\end{aligned}
\right.
$$

For agent 1 and agent2:

$$
D_1^y(p)=
\left\{
\begin{aligned}
&\{2\}, &&0<p<5,\\
&\{0,2\}, &&p=5,\\
&\{0\}, &&p>5.
\end{aligned}
\right.
\qquad
D_2^y(p)=
\left\{
\begin{aligned}
&\{2\}, &&0<p<1,\\
&\{1,2\}, &&p=1,\\
&\{1\}, &&1<p<7,\\
&\{0,1\}, &&p=7,\\
&\{0\}, &&p>7.
\end{aligned}
\right.
$$

Total $y$-demand correspondence:
$$
D_1^y(p)+D_2^y(p)=
\left\{
\begin{aligned}
&\{4\}, &&0<p<1,\\
&\{3,4\}, &&p=1,\\
&\{3\}, &&1<p<5,\\
&\{1,3\}, &&p=5,\\
&\{1\}, &&5<p<7,\\
&\{0,1\}, &&p=7,\\
&\{0\}, &&p>7.
\end{aligned}
\right.
$$
which does not contain $2$ for any price, so there is no price that clears the market for good $y$. Therefore, a Walrasian equilibrium does not exist in this case.

</details>
