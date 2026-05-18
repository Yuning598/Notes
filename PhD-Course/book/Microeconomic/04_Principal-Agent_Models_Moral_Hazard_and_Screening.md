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

# 04 Principal-Agent Models, Moral Hazard, and Screening

Source map: EF8070 **Principal-Agent Models** slides 1-37; **Principal-Agent Models: Monopolistic Screening** slides 1-53; homework links: H5 Q1-Q6.  
Core cards: [Microeconomic/cards/Moral hazard binding constraints](Microeconomic/cards/Moral hazard binding constraints), [Microeconomic/cards/MLRP and optimal wage monotonicity](Microeconomic/cards/MLRP and optimal wage monotonicity), [Microeconomic/cards/Single crossing and monotonicity](Microeconomic/cards/Single crossing and monotonicity), [Microeconomic/cards/No distortion at the top](Microeconomic/cards/No distortion at the top), [Microeconomic/cards/Envelope theorem in screening](Microeconomic/cards/Envelope theorem in screening), [Microeconomic/cards/Myerson-Satterthwaite impossibility](Microeconomic/cards/Myerson-Satterthwaite impossibility).

## 1. QE importance

**High.** This is a canonical QE topic because every question has a clear model architecture: players, timing, information, contract space, payoff, constraints, and equilibrium/optimization concept.

Typical QE modes:

- computational: solve first-best/second-best wage schedules or screening menu;
- proof-based: IC implies monotonicity; envelope formula; no distortion at the top;
- conceptual: hidden action vs hidden information, moral hazard vs adverse selection;
- interpretation: rents, limited liability, risk-sharing vs incentives tradeoff.

## 2. Information economics taxonomy

:::{admonition} Definition (Asymmetric information)
Asymmetric information exists when different agents possess different payoff-relevant information. It can generate strategic behavior and market inefficiencies.

:::

Main models from the slides:

$$
\begin{aligned}
\text{Moral hazard / hidden action}
&:\ \text{agent takes an unobservable action},\\
\text{Adverse selection / hidden information}
&:\ \text{agent has private type},\\
\text{Signaling}
&:\ \text{informed player moves first},\\
\text{Screening}
&:\ \text{uninformed player moves first}.
\end{aligned}
$$

## 3. Hidden action principal-agent model

### Players, timing, information

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

## 4. First-best benchmark: effort observable

If effort is observable, the principal can choose $e$ and wages directly.

For fixed high effort $e=1$, the principal solves

$$
\begin{aligned}
\max_{w_H,w_L}\quad
&q_1(x_H-w_H)+(1-q_1)(x_L-w_L)\\
\text{s.t.}\quad
&q_1u(w_H)+(1-q_1)u(w_L)-C\ge \bar u.
\end{aligned}
$$

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

Under low effort:

$$
w_H=w_L=u^{-1}(\bar u),
$$

and

$$
V_0=q_0x_H+(1-q_0)x_L-u^{-1}(\bar u).
$$

High effort is first-best optimal iff

$$
(q_1-q_0)(x_H-x_L)
\ge
u^{-1}(\bar u+C)-u^{-1}(\bar u).
$$

Interpretation: marginal productivity gain must exceed compensation for effort cost.

## 5. Second-best: effort unobservable

To induce high effort, add incentive compatibility.

The principal solves

$$
\begin{aligned}
\max_{w_H,w_L}\quad
&q_1(x_H-w_H)+(1-q_1)(x_L-w_L)\\
\text{s.t.}\quad
&q_1u(w_H)+(1-q_1)u(w_L)-C\ge \bar u \qquad (IR)\\
&q_1u(w_H)+(1-q_1)u(w_L)-C
\ge
q_0u(w_H)+(1-q_0)u(w_L) \qquad (IC).
\end{aligned}
$$

IC simplifies to

$$
\begin{aligned}
(q_1-q_0)[u(w_H)-u(w_L)]\ge C.
\end{aligned}
$$

Thus $w_H>w_L$. Incentives require risk exposure.

### Binding-constraint solution

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

## 6. Low effort implementation

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

## 7. Risk-neutral agent with limited liability

Suppose $u(w)=w$, $\bar u=0$, and $w_L,w_H\ge0$.

IC:

$$
(q_1-q_0)(w_H-w_L)\ge C.
$$

Limited liability makes the punishment state bind:

$$
w_L=0.
$$

With binding IC,

$$
w_H=\frac{C}{q_1-q_0}.
$$

Agent utility under high effort:

$$
\begin{aligned}
q_1w_H-C
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

## 8. H5 Q1 numerical template: JR 8.16

Data:

$$
\begin{aligned}
x_L&=0,\quad x_H=4,\\
q_1&=\frac23,\quad q_0=\frac13,\\
u(w,e)&=\sqrt w-e,\quad \bar u=0.
\end{aligned}
$$

### Part A: effort observable

High effort with observable effort:

$$
\begin{aligned}
\max_{w_0,w_4}\quad
&\frac13(0-w_0)+\frac23(4-w_4)\\
\text{s.t.}\quad
&\frac13(\sqrt{w_0}-1)+\frac23(\sqrt{w_4}-1)\ge0.
\end{aligned}
$$

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

### Part B: effort unobservable

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

## 9. Continuous output and MLRP

Suppose output $x\in[\underline x,\bar x]$ has density $f(x\mid e)>0$. The family satisfies monotone likelihood ratio property $MLRP$ if

$$
\frac{f(x\mid 1)}{f(x\mid 0)}
\quad\text{is increasing in }x.
$$

MLRP implies FOSD: high effort makes high output more likely.

The high-effort second-best problem is

$$
\begin{aligned}
\max_{w(\cdot)}\quad
&\int_{\underline x}^{\bar x}[x-w(x)]f(x\mid1)\,dx\\
\text{s.t.}\quad
&\int u(w(x))f(x\mid1)\,dx-C\ge \bar u,\\
&\int u(w(x))[f(x\mid1)-f(x\mid0)]\,dx\ge C.
\end{aligned}
$$

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

## 10. Screening: hidden information

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

## 11. First-best screening

If $\theta$ is known, principal solves

$$
\max_q S(q)-\theta q,
$$

with transfer set to bind IR:

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

12. Why first-best is not incentive compatible
-

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

13. Two-type second-best screening
-

Define information rents:

$$
U_L=t_L-Lq_L,\qquad U_H=t_H-Hq_H.
$$

Constraints:

$$
\begin{aligned}
IC_L:\quad &U_L\ge U_H+(H-L)q_H,\\
IC_H:\quad &U_H\ge U_L-(H-L)q_L,\\
IR_L:\quad &U_L\ge0,\\
IR_H:\quad &U_H\ge0.
\end{aligned}
$$

IC implies monotonicity
-

Add \(IC_L\) and \(IC_H\):

$$
\begin{aligned}
U_L+U_H
&\ge U_H+(H-L)q_H+U_L-(H-L)q_L\\
0&\ge (H-L)(q_H-q_L).
\end{aligned}
$$

Since \(H-L>0\),

$$
q_L\ge q_H.
$$

Binding constraints
-

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

Principal's expected payoff:

$$
\begin{aligned}
\max_{q_L,q_H}\quad
&\lambda
S(q_L)-t_L
+(1-\lambda)
S(q_H)-t_H
\\
=
\max_{q_L,q_H}\quad
&\lambda
S(q_L)-Lq_L-(H-L)q_H
\\
&\quad +(1-\lambda)
S(q_H)-Hq_H
.
\end{aligned}
$$

FOC for \(q_L\):

$$
\lambda$$
S'(q_L)-L
$$=0
\quad\Longrightarrow\quad
S'(q_L)=L.
$$

No distortion at the top:

$$
q_L^{SB}=q_L^{FB}.
$$

FOC for \(q_H\):

$$
\begin{aligned}
$1-\lambda$
S'(q_H)-H
-\lambda(H-L)&=0\\
S'(q_H)&=H+\frac{\lambda}{1-\lambda}(H-L).
\end{aligned}
$$

Since \(S''<0\), this means

$$
q_H^{SB}<q_H^{FB}.
$$

The inefficient type is distorted downward to reduce the efficient type's information rent.

14. Continuum of types and envelope formula
-

Let \(\theta\in[0,1]\), with cdf \(F\) and pdf \(f>0\). Agent utility:

$$
U(\theta)=t(\theta)-\theta q(\theta).
$$

IC requires truthful reporting:

$$
t(\theta)-\theta q(\theta)
\ge
t(\hat\theta)-\theta q(\hat\theta)
\qquad \forall \theta,\hat\theta.
$$

:::{admonition} Lemma
IC monotonicity and envelope
A direct mechanism \((q(\cdot),t(\cdot))\) is IC iff \(q(\theta)\) is nonincreasing and

$$
U(\theta)=U(1)+\int_\theta^1 q(s)\,ds.
$$

:::

Proof: IC implies monotonicity
-

Let \(\theta_1>\theta_0\). IC gives

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
$\theta_1-\theta_0
q(\theta_1)-q(\theta_0)
.
\end{aligned}
$$

Since \(\theta_1-\theta_0>0\),

$$
q(\theta_1)\le q(\theta_0).
$$

Thus \(q\) is nonincreasing.

Envelope formula
-

Under IC,

$$
U'(\theta)=-q(\theta).
$$

Integrate from \(\theta\) to \(1\):

$$
\begin{aligned}
U(1)-U(\theta)
&=\int_\theta^1 U'(s)\,ds\\
&=\int_\theta^1
-q(s)
\,ds,
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

## 15. Bilateral trade and Myerson-Satterthwaite

Environment:

- One buyer with value $v\in[\underline v,\bar v]$.
- One seller with cost $c\in[\underline c,\bar c]$.
- Types are private and independent.
- Allocation $q(v,c)\in[0,1]$ is probability of trade.
- Transfers $t_b,t_s$ determine payoffs:

  $$
  u_b=vq+t_b,\qquad u_s=t_s-cq.
  $$

Efficient allocation rule:

$$
q^*(v,c)=
\begin{cases}
1,&v>c,\\
0,&v<c.
\end{cases}
$$

**Myerson-Satterthwaite theorem:** With overlapping type supports, no mechanism can simultaneously satisfy:

$$
\text{efficiency}+\text{Bayesian IC}+\text{interim IR}+\text{budget balance}.
$$

Intuition: truthful information revelation requires giving information rents to both sides. The total rent needed to elicit private information can exceed the expected surplus available from efficient trade.

## 16. Common QE traps

1. **Skipping timing and information structure.** Always state what is observable/contractible.
2. **Forgetting IC in hidden action.** First-best full insurance is not feasible when effort is hidden.
3. **Wrong binding constraints in screening.** In the standard two-type cost model: $IC_L$ and $IR_H$ bind.
4. **Mislabeling top type.** Here $L$ is low cost/efficient and receives no output distortion; $H$ is high cost/inefficient and is distorted downward.
5. **Confusing limited liability with risk aversion.** Limited liability creates rents even for risk-neutral agents.
6. **Forgetting monotonicity.** IC implies allocation monotonicity; if pointwise solution violates monotonicity, ironing is needed.

## 17. Practice set

### Basic checks

1. Define hidden action and hidden information.
2. Write the principal's high-effort problem with IR and IC.
3. State the two-type screening constraints.

### QE-style questions

1. Solve the binary-output hidden-action model and derive the second-best wage schedule.
2. Prove MLRP implies the optimal wage is increasing in output.
3. Prove IC implies $q_L\ge q_H$ in the two-type screening model.
4. Derive no distortion at the top and downward distortion at the bottom.
5. State Myerson-Satterthwaite and explain the economic logic.

### Variants and traps

1. Add limited liability and show why the agent earns a rent.
2. Reverse type labels and redo the monotonicity condition carefully.
3. Suppose $S'(q_H^{SB})$ from the FOC would imply $q_H>q_L$. Explain why the monotonicity constraint binds and ironing/pooling appears.

## 18. Mastery target

For QE, you should be able to write from memory:

- hidden-action first-best and second-best systems;
- binary-output wage formulas;
- limited-liability rent derivation;
- MLRP wage monotonicity FOC;
- two-type screening IC/IR system, binding constraints, and outputs;
- continuum-type envelope formula and virtual cost;
- Myerson-Satterthwaite statement and intuition.

## 19. Monopolistic screening and bilateral trade

旧课件把 adverse selection 继续推进到 screening 和双边交易。这里的关键不是求一个 single wage schedule，而是求一个 menu，让不同 type self-select。

### Screening logic

类型为 $\theta$ 的 agent 选择合同 $(q,t)$。principal 提供一个菜单

$$
\{(q(\theta),t(\theta)):\theta\in\Theta\}.
$$

screening 的核心约束是

$$
\begin{aligned}
\text{IR:}\quad &u(q(\theta),t(\theta);\theta)\ge \bar u(\theta),\\
\text{IC:}\quad &u(q(\theta),t(\theta);\theta)\ge u(q(\hat\theta),t(\hat\theta);\theta)\quad \forall \hat\theta.
\end{aligned}
$$

在 single-crossing 下，IC 给出 monotonicity：高 type 不会接受低 type 的合同，最优菜单通常对低 type 留 rents，对高 type 尽量压 rent。

### Envelope intuition

若直接写类型选择后的 indirect utility

$$
V(\theta)=u(q(\theta),t(\theta);\theta),
$$

则在 IC 成立时，$V'(\theta)$ 可由 envelope theorem 直接得到，不需要显式求合同对类型的反应函数。这是筛选题里最常见的 shortcut。

### Myerson-Satterthwaite theorem

双边交易里，买方估值和卖方成本都私有时，想同时满足效率、预算平衡、IR 和 IC 通常做不到。

最简化地写：

$$
\theta_b \in [\underline\theta_b,\bar\theta_b],\qquad
\theta_s \in [\underline\theta_s,\bar\theta_s],
$$

交易条件是

$$
\theta_b \ge \theta_s.
$$

若机制必须同时满足

$$
\text{ex post efficiency} + \text{IC} + \text{IR} + \text{BB},
$$

则一般不存在。经济含义是：私人信息导致的信息租金与预算平衡之间有硬冲突。

### QE takeaway

- moral hazard: effort hidden, incentive problem;
- screening: type hidden, menu problem;
- single crossing gives monotone allocation;
- Myerson-Satterthwaite tells you why efficient trade can fail even with mutually beneficial trade.
