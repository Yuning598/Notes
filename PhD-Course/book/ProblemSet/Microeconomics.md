# Microeconomics

### 1. Intertemporal Consumption and Competitive Equilibrium

#general-equilibrium #intertemporal-choice #Euler-equation

**Question** Consider a two-period economy with two agents and a single consumption good. Agent $h$'s preferences over consumption streams $(c_1^h,c_2^h)$ are represented by:

$$
u^h(c_1^h)+\delta u^h(c_2^h),
$$

where $u^h(\cdot)$ is strictly increasing, strictly concave and differentiable, $h=1,2$, and $u^{h'}(0)=\infty$.

Both agents have strictly positive endowments in each period and the aggregate endowment in period 1 is strictly greater than that in period 2: $\bar e_1 > \bar e_2$.

**Setup**:

$$
\left\{
\begin{aligned}
&U^h(c_1^h,c_2^h)=u^h(c_1^h)+\delta u^h(c_2^h),\qquad h=1,2\\
&u^{h'}>0,\qquad u^{h''}<0,\qquad u^{h'}(0)=\infty\\
&\bar e_1:=e_1^1+e_1^2,\qquad \bar e_2:=e_2^1+e_2^2,\qquad \bar{e_1}>\bar{e_2}>0\\
&\text{Prices: }(p_1, p_2)=(1, p)
\end{aligned}
\right.
$$

**1.1** Show that $c_1^h>c_2^h$ in competitive equilibrium for both agents $h=1,2$.

::::{solution}


**1.1 Proof**

Consumer's problem:

$$
\begin{aligned}
\max_{c_1^h,c_2^h}\ &u^h(c_1^h)+\delta u^h(c_2^h)\\
\text{s.t.}\quad &c_1^h + p c_2^h \leq e_1^h + p e_2^h
\end{aligned}
$$

First-order conditions:

$$
\frac{u^{h'}(c_1^h)}{\delta u^{h'}(c_2^h)}=\frac{1}{p}.
$$

Market clearing:

$$
\begin{aligned}
c_1^1+c_1^2&=\bar e_1,\\
c_2^1+c_2^2&=\bar e_2.
\end{aligned}
$$

**Claim**: $c_1^h>c_2^h$ for $h=1,2$.

**Proof by contradiction**: Suppose $c_1^1\leq c_2^1$. Then by market clearing and $\bar e_1>\bar e_2$:

$$
c_1^2 = \bar e_1 - c_1^1 \geq \bar e_1 - c_2^1 > \bar e_2 - c_2^1 = c_2^2.
$$

So $c_1^2 \geq c_2^2$ (with equality only if $c_1^1 = c_2^1$).

By strict concavity, $u^{h'}$ is strictly decreasing. For agent 1:

$$
c_1^1 \leq c_2^1 \Rightarrow u^{1'}(c_1^1) \geq u^{1'}(c_2^1) \Rightarrow \frac{u^{1'}(c_1^1)}{u^{1'}(c_2^1)} \geq 1.
$$

For agent 2:

$$
c_1^2 \geq c_2^2 \Rightarrow u^{2'}(c_1^2) \leq u^{2'}(c_2^2) \Rightarrow \frac{u^{2'}(c_1^2)}{u^{2'}(c_2^2)} \leq 1.
$$

But FOCs require:

$$
\frac{u^{1'}(c_1^1)}{\delta u^{1'}(c_2^1)}=\frac{u^{2'}(c_1^2)}{\delta u^{2'}(c_2^2)}=\frac{1}{p}.
$$

This implies:

$$
\frac{u^{1'}(c_1^1)}{u^{1'}(c_2^1)} = \frac{u^{2'}(c_1^2)}{u^{2'}(c_2^2)},
$$

which contradicts $\frac{u^{1'}(c_1^1)}{u^{1'}(c_2^1)} \geq 1 \geq \frac{u^{2'}(c_1^2)}{u^{2'}(c_2^2)}$ with at least one strict inequality.

Therefore $c_1^1 > c_2^1$, and similarly $c_1^2 > c_2^2$.

::::


**1.2** How does the answer change if the good is storable (endowment in period 1 can be held over to period 2)?

::::{solution}

**1.2 With Storability**

With storage, agent $h$ can save $s^h \geq 0$ from period 1 to period 2:

$$
\begin{aligned}
\max_{c_1^h,c_2^h,s^h\ge0}\ &u^h(c_1^h)+\delta u^h(c_2^h)\\
\text{s.t.}\quad &c_1^h + s^h \leq e_1^h\\
&c_2^h \leq e_2^h + s^h
\end{aligned}
$$

Combined budget constraint:

$$
c_1^h + p c_2^h + (1-p)s^h \leq e_1^h + p e_2^h.
$$

FOCs:

$$
\begin{aligned}
\frac{u^{h'}(c_1^h)}{\delta u^{h'}(c_2^h)} &= \frac{1}{p}, \\
\mu^h(1-p) &\geq 0, \quad s^h \geq 0, \quad \mu^h s^h = 0,
\end{aligned}
$$

where $\mu^h$ is the multiplier on $s^h \geq 0$.

**Case 1**: If $p < 1$, then $(1-p) > 0$, so $\mu^h > 0$ and $s^h = 0$ for both agents. This is the same as without storage, so $c_1^h > c_2^h$.

**Case 2**: If $p = 1$, the Euler equation becomes:

$$
\frac{u^{h'}(c_1^h)}{\delta u^{h'}(c_2^h)} = 1 \Rightarrow u^{h'}(c_1^h) = \delta u^{h'}(c_2^h).
$$

If $\delta = 1$, then $u^{h'}(c_1^h) = u^{h'}(c_2^h)$, implying $c_1^h = c_2^h$ (perfect smoothing).

If $\delta < 1$, then $u^{h'}(c_1^h) < u^{h'}(c_2^h)$, implying $c_1^h > c_2^h$ (impatience).

**Case 3**: If $p > 1$, agents would want to "borrow" from the future (negative $s^h$), but storage doesn't allow this. The constraint $s^h \geq 0$ binds, and the outcome depends on the specific parameters.

**Key insight**: Storability allows consumption smoothing when $p \approx 1$, potentially equalizing consumption across periods. Without storage, the price must adjust to clear markets given the endowment difference, forcing $c_1^h > c_2^h$.

::::



### 2. Contract Theory: Moral Hazard

#contract-theory #moral-hazard #incentive-compatibility

**Question** Consider a principal-agent model with moral hazard.

- **Principal**: Risk-neutral firm owner
- **Agent**: Risk-averse manager with utility $u(w) - c(e)$, where $w$ is wage, $e$ is effort
- **Output**: $\pi \in \{\pi_L, \pi_H\}$ with $\pi_H > \pi_L$
- **Effort**: $e \in \{e_L, e_H\}$ with $e_H > e_L$ and costs $c(e_H) > c(e_L)$

Probability of high output:

$$
P(\pi_H | e) = \begin{cases} p_H & \text{if } e = e_H \\ p_L & \text{if } e = e_L \end{cases},
$$

where $p_H > p_L$.

Assume:
- $u$ is strictly increasing and strictly concave
- Reservation utility: $\bar u$
- First-best effort is $e_H$

**2.1** Write the principal's problem under **full information** (effort observable).

::::{solution}


**2.1 First-Best (Full Information)**

Principal observes $e$ and can contract on it directly:

$$
\begin{aligned}
\max_{w_H, w_L, e}\ &p(e)\pi_H + [1-p(e)]\pi_L - p(e)w_H - [1-p(e)]w_L\\
\text{s.t.}\quad &p(e)u(w_H) + [1-p(e)]u(w_L) - c(e) \geq \bar u \quad\text{(IR)}
\end{aligned}
$$

Since the agent is risk-averse and the principal is risk-neutral, optimal risk-sharing requires:

$$
w_H = w_L = w^{FB}.
$$

The wage $w^{FB}$ is set to satisfy IR with equality:

$$
u(w^{FB}) - c(e^{FB}) = \bar u,
$$

where $e^{FB} = e_H$ (assumed to be first-best).

**Expected profit**:

$$
\Pi^{FB} = p_H\pi_H + (1-p_H)\pi_L - w^{FB}.
$$

::::

**2.2** Write the principal's problem under **moral hazard** (effort not observable). State the incentive compatibility (IC) and participation (IR) constraints.

::::{solution}

**2.2 Second-Best (Moral Hazard)**

Principal cannot observe $e$, so must induce it through wage incentives:

$$
\begin{aligned}
\max_{w_H, w_L}\ &p_H\pi_H + (1-p_H)\pi_L - p_Hw_H - (1-p_H)w_L\\
\text{s.t.}\quad &p_Hu(w_H) + (1-p_H)u(w_L) - c(e_H) \geq \bar u \quad\text{(IR)}\\
&p_Hu(w_H) + (1-p_H)u(w_L) - c(e_H) \geq p_Lu(w_H) + (1-p_L)u(w_L) - c(e_L) \quad\text{(IC)}
\end{aligned}
$$

**IC constraint** ensures the agent prefers $e_H$ to $e_L$:

$$
(p_H - p_L)[u(w_H) - u(w_L)] \geq c(e_H) - c(e_L).
$$

::::

**2.3** Show that under moral hazard, the agent bears risk (wage varies with output) to induce high effort.

::::{solution}

**2.3 Risk-Bearing**

Rearranging IC:

$$
u(w_H) - u(w_L) \geq \frac{c(e_H) - c(e_L)}{p_H - p_L} > 0.
$$

Therefore $w_H > w_L$ (wage must vary with output).

**Key insight**: To induce high effort, the principal must make the agent's wage sensitive to performance. This exposes the risk-averse agent to risk, which is costly.

::::

**2.4** Explain why the second-best contract is less efficient than first-best.

::::{solution}

**2.4 Inefficiency**

Comparing first-best and second-best:

**First-best**: $w_H^{FB} = w_L^{FB}$ (full insurance, agent bears no risk)

**Second-best**: $w_H^{SB} > w_L^{SB}$ (partial insurance, agent bears risk)

The efficiency loss comes from two sources:

1. **Risk premium**: The risk-averse agent requires higher expected wage to compensate for risk:
   $$u(E[w^{SB}]) - c(e_H) > E[u(w^{SB})] - c(e_H) = \bar u.$$
   This follows from Jensen's inequality (concave $u$).

2. **Binding IC constraint**: The principal must "overpay" in the good state to separate $e_H$ from $e_L$.

**Result**: Principal's profit is lower under moral hazard:

$$
\Pi^{SB} < \Pi^{FB}.
$$

::::



### 3. Adverse Selection: Screening

#adverse-selection #screening #mechanism-design

**Question** A monopolist sells a good to consumers with heterogeneous valuations.

- **Consumer types**: $\theta \in \{\theta_L, \theta_H\}$ with $\theta_H > \theta_L$
- **Fraction**: $\lambda$ are type $\theta_H$, $1-\lambda$ are type $\theta_L$
- **Utility**: $U(\theta) = \theta v(q) - t$, where $q$ is quality, $t$ is payment
- **Cost**: $c(q)$ with $c'(q) > 0$, $c''(q) > 0$

Assume $v$ is increasing and concave.

**3.1** Under **full information**, what contracts $(q_L^{FB}, t_L^{FB})$ and $(q_H^{FB}, t_H^{FB})$ maximize the monopolist's profit?

::::{solution}


**3.1 First-Best**

Extract full surplus from each type:

$$
\begin{aligned}
t_i^{FB} &= \theta_i v(q_i^{FB}), \quad i \in \{L, H\}\\
q_i^{FB} &: \max_q\ \theta_i v(q) - c(q)\\
\Rightarrow \theta_i v'(q_i^{FB}) &= c'(q_i^{FB})
\end{aligned}
$$

**Profit**:

$$
\Pi^{FB} = \lambda[\theta_H v(q_H^{FB}) - c(q_H^{FB})] + (1-\lambda)[\theta_L v(q_L^{FB}) - c(q_L^{FB})].
$$

::::

**3.2** Under **asymmetric information**, write the monopolist's problem with incentive compatibility (IC) and participation (IR) constraints.

::::{solution}

**3.2 Second-Best Problem**

$$
\begin{aligned}
\max_{q_L, q_H, t_L, t_H}\ &\lambda(t_H - c(q_H)) + (1-\lambda)(t_L - c(q_L))\\
\text{s.t.}\quad &\theta_H v(q_H) - t_H \geq \theta_H v(q_L) - t_L \quad\text{(IC}_H\text{)}\\
&\theta_L v(q_L) - t_L \geq \theta_L v(q_H) - t_H \quad\text{(IC}_L\text{)}\\
&\theta_H v(q_H) - t_H \geq 0 \quad\text{(IR}_H\text{)}\\
&\theta_L v(q_L) - t_L \geq 0 \quad\text{(IR}_L\text{)}
\end{aligned}
$$

::::

**3.3** Show that in the optimal screening contract:
- High type gets first-best quality: $q_H^{SB} = q_H^{FB}$
- Low type gets distorted quality: $q_L^{SB} < q_L^{FB}$

::::{solution}

**3.3 Optimal Contract**

**Step 1**: Which constraints bind?

- **IR$_H$** slack: $\theta_H$ gets information rent
- **IR$_L$** binds: $t_L = \theta_L v(q_L)$ (extract full surplus)
- **IC$_H$** binds: $\theta_H$ indifferent between own contract and mimicking $\theta_L$
- **IC$_L$** slack: $\theta_L$ doesn't want to mimic $\theta_H$ (higher payment)

**Step 2**: From binding IC$_H$:

$$
\theta_H v(q_H) - t_H = \theta_H v(q_L) - t_L = \theta_H v(q_L) - \theta_L v(q_L).
$$

So:

$$
t_H = \theta_H v(q_H) - (\theta_H - \theta_L)v(q_L).
$$

**Step 3**: Substitute into objective:

$$
\begin{aligned}
\Pi &= \lambda[\theta_H v(q_H) - (\theta_H - \theta_L)v(q_L) - c(q_H)] + (1-\lambda)[\theta_L v(q_L) - c(q_L)]\\
&= \lambda[\theta_H v(q_H) - c(q_H)] + (1-\lambda)[\theta_L v(q_L) - c(q_L)] - \lambda(\theta_H - \theta_L)v(q_L).
\end{aligned}
$$

**Step 4**: FOCs:

For $q_H$:

$$
\frac{\partial \Pi}{\partial q_H} = \lambda[\theta_H v'(q_H) - c'(q_H)] = 0 \Rightarrow \theta_H v'(q_H^{SB}) = c'(q_H^{SB}).
$$

This is the first-best condition! So $q_H^{SB} = q_H^{FB}$.

For $q_L$:

$$
\frac{\partial \Pi}{\partial q_L} = (1-\lambda)[\theta_L v'(q_L) - c'(q_L)] - \lambda(\theta_H - \theta_L)v'(q_L) = 0.
$$

Rearranging:

$$
\left[\theta_L - \frac{\lambda}{1-\lambda}(\theta_H - \theta_L)\right] v'(q_L^{SB}) = c'(q_L^{SB}).
$$

Since $\theta_L - \frac{\lambda}{1-\lambda}(\theta_H - \theta_L) < \theta_L$, we have:

$$
\theta_L v'(q_L^{SB}) < c'(q_L^{SB}) \Rightarrow q_L^{SB} < q_L^{FB}.
$$

::::

**3.4** Explain the "no distortion at the top" result.

::::{solution}

**3.4 "No Distortion at the Top"**

The high type gets first-best quality because:

1. **Binding constraint direction**: Only IC$_H$ binds (high type might mimic low)
2. **Marginal benefit**: Increasing $q_H$ raises profit from high types by first-best amount
3. **No marginal cost**: The information rent $(\theta_H - \theta_L)v(q_L)$ doesn't depend on $q_H$

In contrast, $q_L$ is distorted downward to **reduce the information rent** paid to high types. Lower $q_L$ makes the low-type contract less attractive to high types, reducing the rent $(\theta_H - \theta_L)v(q_L)$.

::::




### 4. Monopoly Pricing and Price Discrimination

#monopoly #price-discrimination #consumer-surplus

**Question** A monopolist faces demand curve $Q = a - bP$, where $a, b > 0$.

Cost function: $C(Q) = cQ$ (constant marginal cost $c$).

**4.1** Solve for the profit-maximizing quantity and price under **uniform pricing**.

::::{solution}


**4.1 Uniform Pricing**

Inverse demand: $P = \frac{a - Q}{b}$.

Profit:

$$
\pi(Q) = P \cdot Q - C(Q) = \frac{a - Q}{b} \cdot Q - cQ = \frac{aQ - Q^2}{b} - cQ.
$$

FOC:

$$
\frac{d\pi}{dQ} = \frac{a - 2Q}{b} - c = 0 \Rightarrow Q^M = \frac{a - bc}{2}.
$$

Price:

$$
P^M = \frac{a - Q^M}{b} = \frac{a - \frac{a-bc}{2}}{b} = \frac{a + bc}{2b}.
$$

::::

**4.2** Calculate consumer surplus, producer surplus, and deadweight loss.

::::{solution}

**4.2 Welfare Analysis**

**Consumer Surplus**:

$$
CS = \frac{1}{2}(P_{\max} - P^M) Q^M = \frac{1}{2} \left(\frac{a}{b} - \frac{a+bc}{2b}\right) \frac{a-bc}{2} = \frac{(a-bc)^2}{8b}.
$$

**Producer Surplus** (profit):

$$
PS = (P^M - c) Q^M = \left(\frac{a+bc}{2b} - c\right) \frac{a-bc}{2} = \frac{(a-bc)^2}{4b}.
$$

**Competitive benchmark** ($P = c$):

$$
Q^C = a - bc, \quad CS^C = \frac{(a-bc)^2}{2b}.
$$

**Deadweight Loss**:

$$
DWL = CS^C - CS - PS = \frac{(a-bc)^2}{2b} - \frac{(a-bc)^2}{8b} - \frac{(a-bc)^2}{4b} = \frac{(a-bc)^2}{8b}.
$$

::::

**4.3** If the monopolist can engage in **perfect price discrimination** (first-degree), what is the outcome?

::::{solution}

**4.3 Perfect Price Discrimination**

Monopolist charges each consumer their willingness-to-pay.

Produces until $P = MC$:

$$
Q^{PD} = a - bc = Q^C.
$$

**Total surplus extracted**: Entire consumer surplus becomes profit.

$$
PS^{PD} = \frac{(a-bc)^2}{2b}, \quad CS^{PD} = 0.
$$

::::

**4.4** Compare welfare under uniform pricing vs perfect price discrimination.

::::{solution}

**4.4 Welfare Comparison**

| Regime | $Q$ | $CS$ | $PS$ | Total Surplus | $DWL$ |
|--------|-----|------|------|---------------|-------|
| Competition | $a-bc$ | $\frac{(a-bc)^2}{2b}$ | $0$ | $\frac{(a-bc)^2}{2b}$ | $0$ |
| Monopoly | $\frac{a-bc}{2}$ | $\frac{(a-bc)^2}{8b}$ | $\frac{(a-bc)^2}{4b}$ | $\frac{3(a-bc)^2}{8b}$ | $\frac{(a-bc)^2}{8b}$ |
| Perfect PD | $a-bc$ | $0$ | $\frac{(a-bc)^2}{2b}$ | $\frac{(a-bc)^2}{2b}$ | $0$ |

**Key insights**:
- Perfect PD achieves **efficiency** (no DWL)
- But **equity** concern: all surplus goes to monopolist
- Uniform pricing creates DWL but preserves some consumer surplus

::::



### 5. Game Theory: Nash Equilibrium

#game-theory #Nash-equilibrium #best-response

**Question** Consider a Cournot duopoly.

Two firms choose quantities $q_1, q_2$ simultaneously. Inverse demand: $P(Q) = a - Q$, where $Q = q_1 + q_2$.

Cost: $C_i(q_i) = c q_i$ for firm $i$.

**5.1** Write firm $i$'s profit function and derive its best-response function $q_i^{BR}(q_j)$.

::::{solution}


**5.1 Best Response**

Firm $i$'s profit:

$$
\pi_i(q_i, q_j) = P(q_i + q_j) q_i - c q_i = (a - q_i - q_j) q_i - c q_i.
$$

FOC:

$$
\frac{\partial \pi_i}{\partial q_i} = a - 2q_i - q_j - c = 0.
$$

Best response:

$$
q_i^{BR}(q_j) = \frac{a - c - q_j}{2}.
$$

::::

**5.2** Find the Nash equilibrium quantities and price.

::::{solution}

**5.2 Nash Equilibrium**

By symmetry, $q_1^* = q_2^* = q^*$. Substitute into BR:

$$
q^* = \frac{a - c - q^*}{2} \Rightarrow 3q^* = a - c \Rightarrow q^* = \frac{a - c}{3}.
$$

Total quantity:

$$
Q^{Cournot} = 2q^* = \frac{2(a-c)}{3}.
$$

Price:

$$
P^{Cournot} = a - Q^{Cournot} = a - \frac{2(a-c)}{3} = \frac{a + 2c}{3}.
$$

::::

**5.3** Compare with perfect competition ($P = c$) and monopoly outcomes.

::::{solution}

**5.3 Comparison**

| Regime | $Q$ | $P$ | Per-firm profit |
|--------|-----|-----|-----------------|
| Competition | $a-c$ | $c$ | $0$ |
| Cournot | $\frac{2(a-c)}{3}$ | $\frac{a+2c}{3}$ | $\frac{(a-c)^2}{9}$ |
| Monopoly | $\frac{a-c}{2}$ | $\frac{a+c}{2}$ | $\frac{(a-c)^2}{4}$ |

**Ordering**: $Q^{Comp} > Q^{Cournot} > Q^{Mono}$, and $P^{Comp} < P^{Cournot} < P^{Mono}$.

::::

**5.4** Show that the Cournot equilibrium is inefficient (positive DWL).

::::{solution}

**5.4 Inefficiency**

Competitive surplus:

$$
CS^{Comp} = \frac{(a-c)^2}{2}.
$$

Cournot surplus:

$$
\begin{aligned}
CS^{Cournot} &= \frac{1}{2}(a - P^{Cournot}) Q^{Cournot} = \frac{1}{2} \cdot \frac{a-c}{3} \cdot \frac{2(a-c)}{3} = \frac{(a-c)^2}{9}\\
PS^{Cournot} &= 2 \times \frac{(a-c)^2}{9} = \frac{2(a-c)^2}{9}\\
TS^{Cournot} &= \frac{(a-c)^2}{9} + \frac{2(a-c)^2}{9} = \frac{(a-c)^2}{3}
\end{aligned}
$$

Deadweight loss:

$$
DWL = \frac{(a-c)^2}{2} - \frac{(a-c)^2}{3} = \frac{(a-c)^2}{6} > 0.
$$

**Cournot equilibrium is inefficient**: Firms restrict output to raise price above marginal cost.

::::


### 6. Walrasian Equilibrium and Core Allocations (2025 QE)

#exchange-economy #Walrasian-equilibrium #core

**Question** Consider a pure exchange economy with two agents and three goods. The endowments are:

$$
\begin{aligned}
e^1&=(1,1,1),\\
e^2&=(0,2,0).
\end{aligned}
$$

For each of the following utility functions, discuss whether a Walrasian Equilibrium exists. If it does not exist, explain why and find the core allocations. If core allocations do not exist, explain why.

**（1）** $u^1(c_1,c_2,c_3)=\min\{c_1,c_2,c_3\}$, $u^2(c_1,c_2,c_3)=\min\{2c_1,c_2,c_3\}$

::::{solution}

**偏好类型**：两个agent都有Leontief (perfect complements) 偏好。

Agent 1消费比例：$c_1^1:c_2^1:c_3^1=1:1:1$。
Agent 2消费比例：$c_1^2:c_2^2:c_3^2=1:2:2$（因为$2c_1^2=c_2^2=c_3^2$时效用最大化）。

**总禀赋**：

$$
\bar e=(1,3,1).
$$

**Feasibility约束**：

$$
\begin{aligned}
c_1^1+c_1^2&=1,\\
c_2^1+c_2^2&=3,\\
c_3^1+c_3^2&=1.
\end{aligned}
$$

设agent 1消费$c_1^1=c_2^1=c_3^1=\alpha$，则剩余给agent 2：

$$
\begin{aligned}
c_1^2&=1-\alpha,\\
c_2^2&=3-\alpha,\\
c_3^2&=1-\alpha.
\end{aligned}
$$

Agent 2的Leontief约束要求$2c_1^2=c_2^2=c_3^2$，即

$$
2(1-\alpha)=3-\alpha=1-\alpha.
$$

从$2(1-\alpha)=1-\alpha$得$2-2\alpha=1-\alpha$，即$\alpha=1$。
从$3-\alpha=1-\alpha$得$3=1$，矛盾。

**结论**：无法找到同时满足两个agent的Leontief比例约束的可行分配。

**Walrasian Equilibrium不存在**：在任何价格下，至少有一个agent无法在预算约束下达到其最优消费比例，因为总禀赋的比例结构$(1:3:1)$无法同时满足两个agent的技术比例要求$(1:1:1)$和$(1:2:2)$。

**Core allocation**：

Core要求分配是Pareto有效且不被任何联盟block。由于两个agent的比例要求不相容，任何可行分配都会使至少一个agent偏离其理想比例。

Agent 1的IR要求$\min\{c_1^1,c_2^1,c_3^1\}\geq u^1(e^1)=\min\{1,1,1\}=1$。
Agent 2的IR要求$\min\{2c_1^2,c_2^2,c_3^2\}\geq u^2(e^2)=\min\{0,2,0\}=0$。

由于总量$c_1^1+c_1^2=1$和$c_3^1+c_3^2=1$，若agent 1要达到效用1需要$c_1^1\geq 1$且$c_3^1\geq 1$，即$c_1^1=c_3^1=1$，剩余$c_1^2=c_3^2=0$。

此时agent 2的效用$u^2(0,c_2^2,0)=\min\{0,c_2^2,0\}=0$，满足IR。

对于$c_2$的分配：任何满足$c_2^1+c_2^2=3$且$c_2^1\geq 1$（保证agent 1效用至少为1）的分配都是IR的。

Pareto有效性：由于agent 1的效用锁定在$\min\{1,c_2^1,1\}=\min\{1,c_2^1\}$，只有当$c_2^1\geq 1$时效用为1。Agent 2的效用为0（受$c_1^2=c_3^2=0$限制）。

无法Pareto改进：减少$c_2^1$会降低agent 1效用；增加$c_2^1$不会改变agent 1效用（若$c_2^1>1$），但也不会增加agent 2效用（仍为0）。

**Core = $\{(c^1,c^2):c^1=(1,\beta,1),c^2=(0,3-\beta,0),\beta\geq 1\}$**

::::

**（2）** $u^1(c_1,c_2,c_3)=\sqrt{c_1}+c_3$, $u^2(c_1,c_2,c_3)=c_1+c_2$

::::{solution}

**偏好类型**：Agent 1只关心good 1和good 3，agent 2只关心good 1和good 2。

Good 3只有agent 1想要，所以Pareto有效分配应该全部分给agent 1：$c_3^1=1$，$c_3^2=0$。

**Walrasian Equilibrium分析**：

Agent 1对good 2的边际效用为0，只有当$p_2=0$时才可能出清市场（让agent 1消费部分good 2）。

但若$p_2=0$，agent 2的禀赋$(0,2,0)$价值为0，无法购买任何$p_i>0$的商品。若所有价格为0则不是均衡。

**结论**：Walrasian Equilibrium不存在，因为agent 1对good 2无边际价值而agent 2只拥有good 2，导致无法通过价格机制实现资源交换。

**Core allocation**：

考虑分配：agent 1获得$(c_1^1,0,1)$，agent 2获得$(1-c_1^1,3,0)$。

$$
\begin{aligned}
u^1(c_1^1,0,1)&=\sqrt{c_1^1}+1,\\
u^2(1-c_1^1,3,0)&=(1-c_1^1)+3=4-c_1^1.
\end{aligned}
$$

IR约束：

$$
\begin{aligned}
u^1(c_1^1,0,1)&\geq u^1(1,1,1)=\sqrt{1}+1=2\quad\Longrightarrow\quad c_1^1\geq 1,\\
u^2(1-c_1^1,3,0)&\geq u^2(0,2,0)=2\quad\Longrightarrow\quad c_1^1\leq 2.
\end{aligned}
$$

但总good 1只有1单位，所以$c_1^1\leq 1$。Combined：$c_1^1=1$。

Pareto有效性：Agent 1的MU for good 1为$\frac{1}{2\sqrt{c_1^1}}$，agent 2的MU为1。

在$c_1^1=1$时，agent 1的MU为$\frac12<1$，说明应将边际单位good 1给agent 2。但$c_1^1=1$已是总量，且agent 1的IR刚好bind，无法进一步调整。

**Core = $\{(c^1,c^2)=((1,0,1),(0,3,0))\}$**

::::

**（3）** $u^1(c_1,c_2,c_3)=c_1+c_2$, $u^2(c_1,c_2,c_3)=c_1+c_2+c_3$

::::{solution}

**偏好类型**：两个agent对good 1和good 2有相同的线性偏好（perfect substitutes，MRS=1）。Agent 2额外关心good 3，agent 1不关心good 3。

**Pareto有效分配**：Good 3应全部分给agent 2：$c_3^1=0$，$c_3^2=1$。

**Walrasian Equilibrium**：

由于good 1和good 2对两个agent都是perfect substitutes（MRS=1），均衡要求$p_1=p_2$（否则所有人只买便宜的那个）。

标准化$p_1=p_2=1$。Agent 2对good 3的边际效用为1，均衡要求$p_3=1$。

Agent 1预算：

$$
c_1^1+c_2^1+c_3^1\leq 1+1+1=3.
$$

Agent 1对good 3无偏好，所以$c_3^1=0$，$c_1^1+c_2^1=3$。

Agent 2预算：

$$
c_1^2+c_2^2+c_3^2\leq 0+2+0=2.
$$

Agent 2对三种商品边际效用都是1（在价格都为1时无差异），所以$c_1^2+c_2^2+c_3^2=2$。

Market clearing：$c_3^1=0\Rightarrow c_3^2=1$，剩余预算$c_1^2+c_2^2=1$。

设$c_1^1=a$，则$c_1^2=1-a$，$c_2^1=3-a$，$c_2^2=a$。

检验agent 2预算：$(1-a)+a+1=2$，满足。

**Walrasian Equilibrium存在**（连续统）：

$$
\begin{aligned}
\text{Prices: }&(p_1,p_2,p_3)=(1,1,1)\\
\text{Allocation: }&c^1=(a,3-a,0),\quad c^2=(1-a,a,1),\quad a\in[0,1].
\end{aligned}
$$

验证IR：

$$
\begin{aligned}
u^1(a,3-a,0)&=3\geq u^1(1,1,1)=2,\\
u^2(1-a,a,1)&=2= u^2(0,2,0)=2.
\end{aligned}
$$

**Core = Walrasian allocations** = $\{(c^1,c^2)=((a,3-a,0),(1-a,a,1)):a\in[0,1]\}$。

::::

