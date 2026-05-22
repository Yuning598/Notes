---
course: EF8070 Advanced Microeconomics
topic: Information Economics, Moral Hazard, and Screening
type: main-note
sources:
  - EF8070_slides.pdf: Principal-Agent Models, slides 1-37
  - EF8070_slides.pdf: Principal-Agent Models - Monopolistic Screening, slides 1-53
  - hmwk5_soln.pdf
tags:
  - micro
  - information-economics
  - moral-hazard
  - screening
  - qe
---

# 07 Principal-Agent Models, Moral Hazard, and Screening


:::{admonition} The basic models in information economics
$$
\left\{
\begin{aligned}
&1.\ \text{Moral Hazard (Hidden Actions)}\\
&\qquad \text{one player takes an action that is not perfectly observed}\\[0.25em]
&2.\ \text{Adverse Selection (Hidden Information)}\\
&\qquad \text{one player has private information about his type}\\
&\qquad a.\ \text{Signaling: the informed player moves first}\\
&\qquad \qquad i.\ \text{one uninformed player}\\
&\qquad \qquad ii.\ \text{competing uninformed players}\\
&\qquad b.\ \text{Screening: the uninformed player moves first}\\
&\qquad \qquad i.\ \text{one uninformed player}\\
&\qquad \qquad ii.\ \text{competing uninformed players}\\[0.25em]
&3.\ \text{Mechanism Design}\\
&\qquad \text{a group of privately informed agents plays a game designed by an uninformed party}
\end{aligned}
\right.
$$

This chapter covers the moral-hazard model in detail, and the screening model under adverse selection.
:::

## 1. Moral Hazard

### 1.1 二元情形 (Binary output)

**Agent / action structure**

- Principal owns a project.
- Agent chooses effort $e\in\{0,1\}$, where $e=1$ is high effort.
- Effort is unobservable and noncontractible.
- Output $x\in\{x_L,x_H\}$, $x_L<x_H$, is observable and contractible.
- High effort raises probability of high output:

  $$
  q_1:=P(x_H\mid e=1)>q_0:=P(x_H\mid e=0).
  $$

- Agent's utility is $u(w)-C e$, where $u'>0,u''<0$.
- Reservation utility is $\bar u$.
- Principal is risk-neutral and maximizes expected output minus wages.

A wage contract is

$$
w:X\to\mathbb R_+,\qquad x\mapsto w(x).
$$

#### 1.1.1 情形：First Best，努力可观察，High effort

:::{admonition} First best: effort observable
$$
\left\{
\begin{aligned}
\max_{w_H,w_L}\quad
&q_1(x_H-w_H)+(1-q_1)(x_L-w_L)\\
\text{s.t.}\quad
&q_1u(w_H)+(1-q_1)u(w_L)-C\ge \bar u
\end{aligned}
\right.
$$
:::

Lagrangian:

$$
\begin{aligned}
\mathcal L
&=
q_1(x_H-w_H)+(1-q_1)(x_L-w_L)\\
&\quad+\lambda[q_1u(w_H)+(1-q_1)u(w_L)-C-\bar u].
\end{aligned}
$$

FOCs:

$$
\begin{aligned}
-q_1+\lambda q_1u'(w_H)&=0,\\
-(1-q_1)+\lambda(1-q_1)u'(w_L)&=0.
\end{aligned}
$$

Cancel probabilities:

$$
\begin{aligned}
\lambda u'(w_H)&=1,\\
\lambda u'(w_L)&=1,
\end{aligned}
$$

so

$$
u'(w_H)=u'(w_L).
$$

Since $u''<0$, $u'$ is one-to-one:

$$
w_H=w_L=w^*.
$$

IR binds:

$$
u(w^*)-C=\bar u
\quad\Longrightarrow\quad
w^*=u^{-1}(\bar u+C).
$$

Principal payoff under high effort:

$$
V_1=q_1x_H+(1-q_1)x_L-u^{-1}(\bar u+C).
$$

#### 1.1.2 情形：First Best，努力可观察，Low effort

:::{admonition} First best: effort observable, low effort
$$
w_H=w_L=u^{-1}(\bar u),
$$

and

$$
V_0=q_0x_H+(1-q_0)x_L-u^{-1}(\bar u).
$$
:::

High effort is first-best optimal iff

$$
(q_1-q_0)(x_H-x_L)
\ge
u^{-1}(\bar u+C)-u^{-1}(\bar u).
$$

Interpretation: marginal productivity gain must exceed compensation for effort cost.

#### 1.1.3 情形：Second Best，努力不可观察

:::{admonition} Second best: effort unobservable
$$
\left\{
\begin{aligned}
\max_{w_H,w_L}\quad
&q_1(x_H-w_H)+(1-q_1)(x_L-w_L)\\
\text{s.t.}\quad
&q_1u(w_H)+(1-q_1)u(w_L)-C\ge \bar u \qquad (IR)\\
&q_1u(w_H)+(1-q_1)u(w_L)-C
\ge
q_0u(w_H)+(1-q_0)u(w_L) \qquad (IC)
\end{aligned}
\right.
$$
:::

To induce high effort, add incentive compatibility.

IC simplifies to

$$
\begin{aligned}
(q_1-q_0)[u(w_H)-u(w_L)]\ge C.
\end{aligned}
$$

Thus $w_H>w_L$. Incentives require risk exposure.

**Binding-constraint solution**

At the optimum, both IR and IC bind. Let

$$
a:=u(w_H),\qquad b:=u(w_L).
$$

The binding system is

$$
\begin{aligned}
(q_1-q_0)(a-b)&=C,\\
q_1a+(1-q_1)b-C&=\bar u.
\end{aligned}
$$

Solve continuously:

$$
\begin{aligned}
a-b&=\frac{C}{q_1-q_0},\\
a&=b+\frac{C}{q_1-q_0}.
\end{aligned}
$$

Substitute into IR:

$$
\begin{aligned}
q_1\left(b+\frac{C}{q_1-q_0}\right)+(1-q_1)b-C
&=\bar u\\
b+\frac{q_1C}{q_1-q_0}-C
&=\bar u\\
b+\frac{q_1C-C(q_1-q_0)}{q_1-q_0}
&=\bar u\\
b+\frac{q_0C}{q_1-q_0}
&=\bar u\\
b&=\bar u-\frac{q_0C}{q_1-q_0}.
\end{aligned}
$$

Then

$$
\begin{aligned}
a
&=\bar u-\frac{q_0C}{q_1-q_0}+\frac{C}{q_1-q_0}\\
&=\bar u+\frac{(1-q_0)C}{q_1-q_0}.
\end{aligned}
$$

Therefore

$$
\begin{aligned}
w_H^{SB}
&=
u^{-1}\left(\bar u+\frac{(1-q_0)C}{q_1-q_0}\right),\\
w_L^{SB}
&=
u^{-1}\left(\bar u-\frac{q_0C}{q_1-q_0}\right).
\end{aligned}
$$

If $w_L^{SB}$ violates limited liability or utility domain restrictions, the limited-liability solution applies.

#### 1.1.4 情形：Second Best，努力不可观察，诱导低努力

:::{admonition} Low effort implementation
$$
w_H=w_L=u^{-1}(\bar u)
$$
:::

To induce low effort, the relaxed problem without IC gives full insurance:

$$
w_H=w_L=u^{-1}(\bar u).
$$

This constant wage automatically satisfies low-effort IC, because if wages do not depend on output, the agent does not gain from costly high effort.

Principal payoff:

$$
V_0=q_0x_H+(1-q_0)x_L-u^{-1}(\bar u).
$$

The principal compares this with the second-best high-effort payoff:

$$
V_1^{SB}
=
q_1(x_H-w_H^{SB})+(1-q_1)(x_L-w_L^{SB}).
$$

High effort is induced iff

$$
V_1^{SB}\ge V_0.
$$

#### 1.1.5 情形：Risk-neutral agent with limited liability

:::{admonition} Risk-neutral agent with limited liability
$$
u(w)=w,\qquad \bar u=0.
$$
:::

Suppose $u(w)=w$, $\bar u=0$.

If wages are unrestricted, the IC/IR system yields

$$
\left\{
\begin{aligned}
&\text{允许负工资: }&&
w_L^{NLL}=-\frac{q_0}{q_1-q_0}C,\quad
w_H^{NLL}=\frac{1-q_0}{q_1-q_0}C,\\
&\text{有限责任: }&&
w_L^{LL}=0,\quad
w_H^{LL}=\frac{C}{q_1-q_0}.
\end{aligned}
\right.
$$

Indeed, binding IC and IR give

$$
\begin{aligned}
q_1w_H+(1-q_1)w_L-C&=0,\\
q_0w_H+(1-q_0)w_L&=0,
\end{aligned}
$$

so subtracting yields

$$
\begin{aligned}
(q_1-q_0)(w_H-w_L)&=C,\\
w_H-w_L&=\frac{C}{q_1-q_0}.
\end{aligned}
$$

Hence

$$
\begin{aligned}
w_L^{NLL}
&=-\frac{q_0}{q_1-q_0}C,\\
w_H^{NLL}
&=\frac{1-q_0}{q_1-q_0}C.
\end{aligned}
$$

Under limited liability the punishment state binds:

$$
w_L^{LL}=0,
$$

so

$$
w_H^{LL}=\frac{C}{q_1-q_0}.
$$

The two wage spreads coincide:

$$
\begin{aligned}
w_H^{NLL}-w_L^{NLL}
&=
\frac{1-q_0}{q_1-q_0}C
-\left(-\frac{q_0}{q_1-q_0}C\right)
=\frac{C}{q_1-q_0},\\
w_H^{LL}-w_L^{LL}
&=
\frac{C}{q_1-q_0}-0
=\frac{C}{q_1-q_0}.
\end{aligned}
$$

Agent utility under high effort is

$$
\begin{aligned}
q_1w_H^{LL}-C
&=
q_1\frac{C}{q_1-q_0}-C\\
&=
\frac{q_1C-C(q_1-q_0)}{q_1-q_0}\\
&=
\frac{q_0C}{q_1-q_0}
>0.
\end{aligned}
$$

This is an information rent created by limited liability.

High effort is optimal iff

$$
\begin{aligned}
q_1x_H+(1-q_1)x_L-q_1\frac{C}{q_1-q_0}
\ge
q_0x_H+(1-q_0)x_L.
\end{aligned}
$$

Equivalently,

$$
(q_1-q_0)(x_H-x_L)\ge \frac{q_1C}{q_1-q_0}.
$$
### 1.2 连续情形 (Continuous output)

**Agent / action structure**

- Output $x\in[\underline x,\bar x]$ is observable.
- Effort $e\in\{0,1\}$ is unobservable.
- High effort changes the output density from $f(x\mid0)$ to $f(x\mid1)$.
- The family satisfies MLRP if $\frac{f(x\mid1)}{f(x\mid0)}$ is increasing in $x$.
- $w(\cdot)$ is the wage schedule and $C$ is the high-effort cost.

#### 1.2.1 情形：Second Best，努力不可观察，诱导高努力

:::{admonition} Continuous output and MLRP
$$
\left\{
\begin{aligned}
&x\in[\underline x,\bar x]\\
&f(x\mid e)>0\\
&\frac{f(x\mid1)}{f(x\mid0)} \text{ increasing in }x\\
&w(\cdot)=\text{wage schedule},\quad C=\text{high-effort cost}
\end{aligned}
\right.
$$
:::

Suppose output $x\in[\underline x,\bar x]$ has density $f(x\mid e)>0$. The family satisfies monotone likelihood ratio property $MLRP$ if

$$
\frac{f(x\mid 1)}{f(x\mid 0)}
\quad\text{is increasing in }x.
$$

MLRP implies FOSD: high effort makes high output more likely.

:::{admonition} High-effort second-best problem
$$
\left\{
\begin{aligned}
\max_{w(\cdot)}\quad
&\int_{\underline x}^{\bar x}[x-w(x)]f(x\mid1)\,dx\\
\text{s.t.}\quad
&\int u(w(x))f(x\mid1)\,dx-C\ge \bar u
\qquad (IR)\\
&\int u(w(x))[f(x\mid1)-f(x\mid0)]\,dx\ge C
\qquad (IC)
\end{aligned}
\right.
$$
:::

FOC with multipliers $\lambda,\mu$:

$$
\begin{aligned}
-f(x\mid1)
+\lambda u'(w(x))f(x\mid1)
+\mu u'(w(x))[f(x\mid1)-f(x\mid0)]
=0.
\end{aligned}
$$

Divide by $f(x\mid1)$:

$$
\begin{aligned}
1
=
u'(w(x))
\left[
\lambda+\mu\left(1-\frac{f(x\mid0)}{f(x\mid1)}\right)
\right].
\end{aligned}
$$

Thus

$$
\frac{1}{u'(w(x))}
=
\lambda+\mu\left(1-\frac{f(x\mid0)}{f(x\mid1)}\right).
$$

Under MLRP, $f(x\mid1)/f(x\mid0)$ increases in $x$, so $f(x\mid0)/f(x\mid1)$ decreases. If $\mu>0$, the right-hand side increases in $x$. Since $u''<0$, $1/u'(w)$ increases with $w$, hence $w(x)$ increases with output.

## 2. Adverse Selection

### 2.1 二元类型 (Binary types)

**Agent / type structure**

Now output/effort is observable, but agent's cost type is private.

Types:

$$
\theta\in\{L,H\},\qquad 0<L<H,
$$

where $L$ is efficient/low cost and $H$ is inefficient/high cost. Let probability of $L$ be $\lambda$.

Contract specifies output $q$ and transfer $t$. Principal payoff:

$$
V(q,t)=S(q)-t,
$$

agent utility:

$$
U(q,t,\theta)=t-\theta q.
$$

Single crossing:

$$
\frac{\partial^2 U(q,t,\theta)}{\partial q\,\partial \theta}<0.
$$

Higher-cost types dislike output more.

#### 2.1.1 情形：First Best，类型可观察

:::{admonition} First best screening
$$
\left\{
\begin{aligned}
\max_q\quad & S(q)-\theta q\\
\text{s.t.}\quad & IR_\theta:\ t-\theta q\ge 0
\end{aligned}
\right.
$$
:::

with transfer set to bind $IR_\theta$:

$$
t-\theta q=0
\quad\Longrightarrow\quad
t=\theta q.
$$

FOC:

$$
S'(q^*(\theta))=\theta.
$$

Therefore

$$
q^*(L)=S'^{-1}(L)>S'^{-1}(H)=q^*(H),
$$

since \(S''<0\) and \(L<H\).

**Why first-best is not incentive compatible**


First-best menu:

$$
\{(q^*(L),t^*(L)),(q^*(H),t^*(H))\}.
$$

High-cost type gets zero utility from its own contract:

$$
U_H(H)=t^*(H)-Hq^*(H)=0.
$$

Low-cost type's utility from mimicking high-cost type is

$$
\begin{aligned}
t^*(H)-Lq^*(H)
&=Hq^*(H)-Lq^*(H)\\
&=(H-L)q^*(H)>0.
\end{aligned}
$$

Thus the low-cost firm would lie. The first-best menu is not incentive compatible.

#### 2.1.2 情形：Second Best，类型不可观察

:::{admonition} Two-type second best screening
$$
\left\{
\begin{aligned}
\max_{q_L,q_H,t_L,t_H}\quad
&\lambda\bigl[S(q_L)-t_L\bigr]+(1-\lambda)\bigl[S(q_H)-t_H\bigr]\\
\text{s.t.}\quad
&IC_L:\ U_L\ge U_H+(H-L)q_H,\\
&IC_H:\ U_H\ge U_L-(H-L)q_L,\\
&IR_L:\ U_L\ge0,\\
&IR_H:\ U_H\ge0.
\end{aligned}
\right.
$$
:::


Define information rents:

$$
U_L=t_L-Lq_L,\qquad U_H=t_H-Hq_H.
$$

**IC implies monotonicity**

Add $IC_L$ and $IC_H$:

$$
\begin{aligned}
U_L+U_H
&\ge U_H+(H-L)q_H+U_L-(H-L)q_L\\
0&\ge (H-L)(q_H-q_L).
\end{aligned}
$$

Since $H-L>0$,

$$
q_L\ge q_H.
$$

**Binding constraints**

At the optimum:

$$
IC_L\text{ binds},\qquad IR_H\text{ binds}.
$$

Thus

$$
U_H=0,\qquad U_L=(H-L)q_H.
$$

Transfers:

$$
\begin{aligned}
t_H&=Hq_H,\\
t_L&=Lq_L+(H-L)q_H.
\end{aligned}
$$

:::{admonition} Reduced second-best screening problem
$$
\begin{aligned}
\max_{q_L,q_H}\quad
&\lambda
[S(q_L)-t_L]
+(1-\lambda)
[S(q_H)-t_H]
\\
=
\max_{q_L,q_H}\quad
&\lambda
[S(q_L)-Lq_L]-(H-L)q_H +(1-\lambda)
[S(q_H)-Hq_H]
.
\end{aligned}
$$
:::

FOC for $q_L$:

$$
\lambda
S'(q_L)-L
=0
\quad\Longrightarrow\quad
S'(q_L)=L.
$$

No distortion at the top:

$$
q_L^{SB}=q_L^{FB}.
$$

FOC for $q_H$:

$$
\begin{aligned}
(1-\lambda)
S'(q_H)-H
-\lambda(H-L)&=0\\
S'(q_H)&=H+\frac{\lambda}{1-\lambda}(H-L).
\end{aligned}
$$

Since $S''<0$, this means

$$
q_H^{SB}<q_H^{FB}.
$$

The inefficient type is distorted downward to reduce the efficient type's information rent.

### 2.2 连续类型 (Continuous types)

**Agent / type structure**

- $\theta\in[0,1]$ is the private cost type with cdf $F$ and pdf $f>0$.
- Higher $\theta$ means higher marginal cost.
- $q(\theta)$ is the output schedule and $t(\theta)$ is the transfer schedule.
- $U(\theta)=t(\theta)-\theta q(\theta)$ is the agent's information rent.

#### 2.2.1 情形：Continuum of types and envelope formula

:::{admonition} Continuum of types and envelope formula
$$
\left\{
\begin{aligned}
\max_{q(\cdot),t(\cdot)}\quad
&\int_0^1 [S(q(\theta))-t(\theta)]f(\theta)\,d\theta\\
\text{s.t.}\quad
&IC:\ t(\theta)-\theta q(\theta)\ge t(\hat\theta)-\theta q(\hat\theta),\ \forall \theta,\hat\theta\\
&IR:\ t(\theta)-\theta q(\theta)\ge0,\ \forall \theta
\end{aligned}
\right.
$$
:::

IC requires truthful reporting:

$$
t(\theta)-\theta q(\theta)
\ge
t(\hat\theta)-\theta q(\hat\theta)
\qquad \forall \theta,\hat\theta.
$$

:::{admonition} IC monotonicity and envelope
A direct mechanism $(q(\cdot),t(\cdot))$ is IC iff $q(\theta)$ is nonincreasing and

$$
U(\theta)=U(1)+\int_\theta^1 q(s)\,ds.
$$
:::

Proof:

Let $\theta_1>\theta_0$. IC gives

$$
\begin{aligned}
t(\theta_1)-\theta_1q(\theta_1)
&\ge t(\theta_0)-\theta_1q(\theta_0),\\
t(\theta_0)-\theta_0q(\theta_0)
&\ge t(\theta_1)-\theta_0q(\theta_1).
\end{aligned}
$$

Add:

$$
\begin{aligned}
0
&\ge
\theta_1q(\theta_1)-\theta_1q(\theta_0)
+\theta_0q(\theta_0)-\theta_0q(\theta_1)\\
&=
(\theta_1-\theta_0)\bigl(q(\theta_1)-q(\theta_0)\bigr).
\end{aligned}
$$

Since $\theta_1-\theta_0>0$,

$$
q(\theta_1)\le q(\theta_0).
$$

Thus $q$ is nonincreasing.

**Envelope formula**

Under IC,

$$
U'(\theta)=-q(\theta).
$$

Integrate from $\theta$ to $1$:

$$
\begin{aligned}
U(1)-U(\theta)
&=\int_\theta^1 U'(s)\,ds\\
&=\int_\theta^1 -q(s)\,ds,
\end{aligned}
$$

so

$$
U(\theta)=U(1)+\int_\theta^1q(s)\,ds.
$$

With \(IR\), the highest-cost type's rent binds:

$$
U(1)=0.
$$

Transfers:

$$
t(\theta)=U(\theta)+\theta q(\theta).
$$

Principal objective:

$$
\begin{aligned}
\int_0^1 [S(q(\theta))-t(\theta)]f(\theta)d\theta
&=
\int_0^1 [S(q(\theta))-\theta q(\theta)-U(\theta)]f(\theta)d\theta\\
&=
\int_0^1 \left[S(q(\theta))-\left(\theta+\frac{F(\theta)}{f(\theta)}\right)q(\theta)\right]f(\theta)d\theta,
\end{aligned}
$$

where the last line uses integration by parts on information rents. Pointwise FOC, ignoring monotonicity/ironing:

$$
S'(q(\theta))=\theta+\frac{F(\theta)}{f(\theta)}.
$$

The term $F(\theta)/f(\theta)$ is the rent-extraction distortion.


## 3. The Bilateral Trading Environment

**信息情形：双边交易**

There is one buyer with value $v\in[\underline v,\bar v]$ and one seller with cost $c\in[\underline c,\bar c]$. Types are private and independent. Let $q\in[0,1]$ denote the probability that the buyer obtains the good, and let $t_b,t_s$ denote expected monetary transfers.

The ex post payoffs are

$$
u_b=vq+t_b,\qquad u_s=-cq+t_s.
$$

The overlap condition is

$$
(\mathrm{OL})\qquad [\underline c,\bar c]\cap[\underline v,\bar v]
\ \text{is a nondegenerate interval.}
$$

#### 3.1 Revelation mechanism

A revelation mechanism is a triple of functions $\langle q,t_b,t_s\rangle$ with

$$
q:[\underline v,\bar v]\times[\underline c,\bar c]\to[0,1],\qquad
t_b:[\underline v,\bar v]\times[\underline c,\bar c]\to\mathbb R,\qquad
t_s:[\underline v,\bar v]\times[\underline c,\bar c]\to\mathbb R.
$$

If both parties report truthfully, the ex post payoffs are

$$
u_b(v,c):=vq(v,c)+t_b(v,c),\qquad
u_s(v,c):=-cq(v,c)+t_s(v,c).
$$

#### 3.2 First-best efficiency

Two conditions are necessary and sufficient for $\langle q,t_b,t_s\rangle$ to be (first-best) efficient.

The first is that the trading rule $q$ maximizes ex post surplus:

$$
q^*(v,c):=
\begin{cases}
1,& v\ge c,\\
0,& v<c.
\end{cases}
$$

The second is budget balance:

$$
(\mathrm{BB})\qquad t_b(\cdot)+t_s(\cdot)=0.
$$

BB implies the weaker condition, No Expected Subsidy:

$$
(\mathrm{NES})\qquad E_{c,v}\{t_b(v,c)+t_s(v,c)\}\le 0.
$$

To write the interim incentive constraints, define

$$
Q_b(v):=E_c q(v,c),\qquad Q_s(c):=E_v q(v,c),
$$
$$
T_b(v):=E_c t_b(v,c),\qquad T_s(c):=E_v t_s(v,c).
$$

The interim payoff functions are

$$
U_b(v):=vQ_b(v)+T_b(v),\qquad U_s(c):=T_s(c)-cQ_s(c).
$$

The incentive compatibility constraints are

$$
(\mathrm{IC})\qquad U_b(v)\ge vQ_b(\hat v)+T_b(\hat v),\qquad
U_s(c)\ge T_s(\hat c)-cQ_s(\hat c).
$$

Let each agent's reservation utility be zero. The participation constraints are

$$
(\mathrm{IR})\qquad U_b(\cdot)\ge0,\qquad U_s(\cdot)\ge0.
$$

**Theorem 2 (Generalized Myerson-Satterthwaite Theorem)**

Given $(\mathrm{OL})$, no incentive-compatible (revelation) mechanism of the form $\langle q^*,t_b,t_s\rangle$ satisfies both $(\mathrm{NES})$ and $(\mathrm{IR})$.

**Corollary 3 (Myerson \& Satterthwaite, 1983)**

Given $(\mathrm{OL})$, no efficient allocation rule satisfying $(\mathrm{IR})$ can be implemented.

**Proof of Corollary 3**

Suppose $\langle q,t_b,t_s\rangle$ is efficient, and satisfies IC and IR.

Since it is efficient, $\langle q,t_b,t_s\rangle$ satisfies BB and $q=q^*$ a.e. Hence, since

$$
\mathrm{BB}\Rightarrow \mathrm{NES},
$$

$\langle q,t_b,t_s\rangle=\langle q^*,t_b,t_s\rangle$ is incentive compatible and satisfies NES and IR. This contradicts Theorem 2.

**Remark**

- The logic of the Myerson-Satterthwaite inefficiency result is that the cost of eliciting private information is more than the maximal expected surplus that can be generated.
- A subsidizing third party can thus restore efficiency.
- This is made clear in the upcoming proof.

**Our present use of Theorem 1**

We shall apply it to both the buyer and seller in the bilateral trade environment.

To apply it to the seller, the statement becomes $Q_s(c)$ nonincreasing, and

$$
U_s(c)=U_s(\bar c)+\int_c^{\bar c}Q_s(z)\,dz.
$$

To apply it to the buyer, the statement becomes $Q_b(v)$ nondecreasing, and

$$
U_b(v)=U_b(\underline v)+\int_{\underline v}^{v}Q_b(z)\,dz.
$$

**A simple proof of the generalized MS theorem**

This proof is based on Williams (1999). We prove it for the case $\bar v\le \bar c$ and $\underline c\le \underline v$.

In this case the efficient trading rule $q^*$ satisfies $q^*(\bar v,\cdot)=0$ and $q^*(\cdot,\bar c)=0$. Define the maximal surplus function

$$
s^*(v,c):=(v-c)q^*(v,c).
$$

Then

$$
E_{c}s^*(\bar v,c)=E_{v}s^*(v,\bar c)=0,
$$

while $(\mathrm{OL})$ and positive densities imply

$$
S^*:=E_{v,c}s^*(v,c)>0.
$$

Let $G=\langle q^*,t_b,t_s\rangle$ be an IC mechanism satisfying $(\mathrm{NES})$. We must show it violates $(\mathrm{IR})$.

Let $U_b$ and $U_s$ be the interim payoff functions generated by $G$, and define

$$
\alpha:=U_b(\underline v),\qquad \beta:=U_s(\bar c).
$$

To show that $G$ violates IR, it suffices to show

$$
\alpha+\beta<0.
$$

Step 1. By Theorem 1, any other IC mechanism $\hat G=\langle \hat q,\hat t_b,\hat t_s\rangle$ with $\hat q=q^*$ must generate the same interim payoff functions, provided $\hat U_b(\underline v)=\alpha$ and $\hat U_s(\bar c)=\beta$. Construct

$$
\hat q=q^*,\qquad
\hat t_b(v,c)=\alpha-cq^*(v,c),\qquad
\hat t_s(v,c)=\beta+vq^*(v,c).
$$

Then the ex post payoff functions are

$$
\hat u_b(v,c)=\alpha+s^*(v,c),\qquad
\hat u_s(v,c)=\beta+s^*(v,c),
$$

and the interim payoffs are

$$
\hat U_b(v)=\alpha+E_c s^*(v,c),\qquad
\hat U_s(c)=\beta+E_v s^*(v,c).
$$

Since $E_c s^*(\underline v,c)=E_v s^*(v,\bar c)=0$, we indeed have $\hat U_b(\underline v)=\alpha$ and $\hat U_s(\bar c)=\beta$.

Step 2. Let $\widehat{\mathrm{SUB}}:=E_{v,c}\{\hat t_b(v,c)+\hat t_s(v,c)\}$. Then

$$
\widehat{\mathrm{SUB}}
=\alpha+\beta+S^*.
$$

But $\hat G$ is IC and satisfies $(\mathrm{NES})$, so $\widehat{\mathrm{SUB}}\le0$. Hence

$$
\alpha+\beta\le -S^*<0,
$$

contrary to $(\mathrm{IR})$. This proves the theorem.

## Exercises

### H5 Q1 numerical template: JR 8.16

Data:

$$
\begin{aligned}
x_L&=0,\quad x_H=4,\\
q_1&=\frac23,\quad q_0=\frac13,\\
u(w,e)&=\sqrt w-e,\quad \bar u=0.
\end{aligned}
$$

#### Part A: effort observable

High effort with observable effort:

:::{admonition} Exercise Part A: observable high-effort problem
$$
\begin{aligned}
\max_{w_0,w_4}\quad
&\frac13(0-w_0)+\frac23(4-w_4)\\
\text{s.t.}\quad
&\frac13(\sqrt{w_0}-1)+\frac23(\sqrt{w_4}-1)\ge0.
\end{aligned}
$$
:::

FOCs imply equal wages:

$$
w_0=w_4.
$$

IR binds:

$$
\sqrt w-1=0
\quad\Longrightarrow\quad
w=1.
$$

High-effort principal payoff:

$$
\begin{aligned}
\Pi_H
&=\frac23\cdot 4-1\\
&=\frac83-1\\
&=\frac53.
\end{aligned}
$$

Low effort uses $w_0=w_4=0$, payoff

$$
\Pi_L=\frac13\cdot4=\frac43.
$$

Thus high effort is chosen.

#### Part B: effort unobservable

To induce high effort:

$$
\begin{aligned}
(IR):\quad &\frac13(\sqrt{w_0}-1)+\frac23(\sqrt{w_4}-1)\ge0,\\
(IC):\quad &\frac13(\sqrt{w_0}-1)+\frac23(\sqrt{w_4}-1)
\ge
\frac23\sqrt{w_0}+\frac13\sqrt{w_4}.
\end{aligned}
$$

Simplify IC:

$$
\begin{aligned}
\frac13\sqrt{w_0}+\frac23\sqrt{w_4}-1
&\ge
\frac23\sqrt{w_0}+\frac13\sqrt{w_4}\\
\frac13(\sqrt{w_4}-\sqrt{w_0})
&\ge1\\
\sqrt{w_4}-\sqrt{w_0}
&\ge3.
\end{aligned}
$$

Cost minimization subject to IC and limited liability implies

$$
w_0=0,\qquad \sqrt{w_4}=3,\qquad w_4=9.
$$

Check IR:

$$
\frac13(0-1)+\frac23(3-1)=1>0,
$$

so IR is slack.

Principal payoff if high effort is induced:

$$
\begin{aligned}
\Pi_H^{SB}
&=\frac13(0-0)+\frac23(4-9)\\
&=-\frac{10}{3}.
\end{aligned}
$$

Low effort with $w_0=w_4=0$ gives

$$
\Pi_L=\frac43.
$$

Therefore the principal does **not** induce high effort; the worker exerts low effort.
