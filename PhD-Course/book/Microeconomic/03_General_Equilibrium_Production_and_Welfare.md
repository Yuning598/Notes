---
course: EF8070 Advanced Microeconomics
topic: General Equilibrium, Production, and Welfare
type: main-note
sources:
  - EF8070_slides.pdf: General Equilibrium in a Pure Exchange Economy, slides 1-26
  - EF8070_slides.pdf: Theory of the Firm and Supply, slides 1-30
  - EF8070_slides.pdf: Production in Arrow-Debreu, slides 1-20
  - hmwk2_solutions.pdf
  - hmwk3_soln.pdf
  - hmwk4_soln.pdf
tags:
  - micro
  - general-equilibrium
  - production
  - welfare
  - qe
---

# 03 General Equilibrium, Production, and Welfare

## 1. Pure exchange economy

### 1.1 Environment

There are $L$ commodities and $H$ households. Household $h$ has endowment $e^h\in\mathbb R_+^L$ and utility $u^h:\mathbb R_+^L\to\mathbb R$.

:::{admonition} Definition (Feasible allocation)
An allocation $(c^h)_{h=1}^H$ is feasible if

$$
\sum_{h=1}^H(c^h-e^h)\le 0.
$$
:::

With local nonsatiation/monotonicity, feasible Pareto optima will exhaust resources.

:::{admonition} Definition (Walrasian equilibrium in a pure exchange economy)

Given endowments $(e^h)_{h=1}^H$, a Walrasian equilibrium is a price vector $p\in\mathbb R_+^L\setminus\{0\}$ and an allocation $(c^h)_{h=1}^H$ satisfying the following conditions.

**Condition 1: Individual optimality**

For each consumer $h=1,\ldots,H$,

$$
c^h\in\arg\max_{x\in\mathbb R_+^L} u^h(x)
\quad
\text{s.t.}
\quad
p\cdot x\le p\cdot e^h.
$$

**Condition 2: Market clearing**

$$
\sum_{h=1}^H c^h=\sum_{h=1}^H e^h.
$$

:::

:::{admonition} Definition (Pareto efficiency)
A feasible allocation $(c^h)$ is Pareto efficient if there is no feasible $(x^h)$ such that

$$
u^h(x^h)\ge u^h(c^h)\quad\forall h,
$$
with strict inequality for at least one household.
:::

Standard assumptions of **Walrasian Equilibrium**:

$$
\begin{aligned}
(A1)&\quad e^h\gg0,\\
(A2)&\quad u^h \text{ increasing/strongly increasing},\\
(A3)&\quad u^h \text{ continuous},\\
(A4)&\quad u^h \text{ concave or strictly concave, depending on theorem}.
\end{aligned}
$$

These are theorem-specific, not all needed at once:

$$
\begin{aligned}
\text{FWT:}\quad &u^h \text{ increasing / locally nonsatiated},\\
\text{SWF:}\quad &(A2')\ \ u^h \text{ strongly increasing},\quad (A4')\ \ u^h \text{ strictly concave},\\
\text{Existence:}\quad &z \text{ continuous},\quad z(\lambda p)=z(p),\quad p\cdot z(p)=0.
\end{aligned}
$$

If $u^h$ is increasing and strictly concave, then it is strongly increasing:

$$
\begin{aligned}
x>y,\ u^h(x)=u^h(y)
\ &\Longrightarrow\ 
u^h(\lambda x+(1-\lambda)y)
>
\lambda u^h(x)+(1-\lambda)u^h(y)\\
&=
u^h(x),\qquad \lambda\in(0,1),\\
\lambda x+(1-\lambda)y&<x,\\
\Rightarrow\ u^h(\lambda x+(1-\lambda)y)&<u^h(x),
\end{aligned}
$$

so $x>y\Rightarrow u^h(x)>u^h(y)$.

## 2. Welfare theorems in pure exchange

### 2.1 First Welfare Theorem

:::{admonition} First Welfare Theorem in pure exchange
If $(p,(c^h))$ is a Walrasian equilibrium and preferences are locally nonsatiated/increasing, then $(c^h)$ is Pareto efficient.
:::

We show that no feasible allocation $(x^h)$ Pareto dominates $(c^h)$.

Suppose, toward contradiction, that $(x^h)$ is feasible and Pareto improves:

$$
\begin{aligned}
u^h(x^h)&\ge u^h(c^h)\quad\forall h,\\
u^{h^*}(x^{h^*})&>u^{h^*}(c^{h^*})\quad\text{for some }h^*.
\end{aligned}
$$

Because $c^h$ solves household $h$'s budget problem,

$$
\begin{aligned}
u^h(x^h)\ge u^h(c^h)
&\Longrightarrow p\cdot x^h\ge p\cdot e^h=p\cdot c^h,\\
u^{h^*}(x^{h^*})>u^{h^*}(c^{h^*})
&\Longrightarrow p\cdot x^{h^*}>p\cdot c^{h^*}.
\end{aligned}
$$

Sum across households:

$$
\begin{aligned}
\sum_h p\cdot x^h
&>
\sum_h p\cdot c^h.
\end{aligned}
$$

But feasibility and market clearing imply

$$
\begin{aligned}
\sum_h x^h&\le \sum_h e^h=\sum_h c^h,\\
p\ge0
&\Longrightarrow
p\cdot \sum_h x^h\le p\cdot \sum_h c^h.
\end{aligned}
$$

Contradiction. Therefore $(c^h)$ is Pareto efficient.

**Individual optimality turns preference improvement into budget cost; feasibility says the aggregate budget cannot pay for it.**

### 2.2 Second Welfare Theorem

The slides state a supporting-price result: under convexity and interiority, a Pareto-efficient allocation can be decentralized as a Walrasian equilibrium after suitable redistribution of endowments.

:::{admonition} Second Welfare Theorem in pure exchange
Given an economy satisfying the convexity/interiority assumptions, if $(\bar e^h)$ with $\bar e^h\gg0$ is Pareto efficient, then there exists $p\in\mathbb R_+^L$ such that $(p,(\bar e^h))$ is a Walrasian equilibrium for the redistributed economy.
:::

For each household define the set of strictly preferred net trades from the target allocation:

$$
K^h
=
\{z\in\mathbb R^L:\bar e^h+z\ge0,\ u^h(\bar e^h+z)>u^h(\bar e^h)\}.
$$

Under concavity, $K^h$ is convex. Define aggregate preferred net trades:

$$
K=\sum_{h=1}^H K^h.
$$

Pareto efficiency implies

$$
0\notin K.
$$

Otherwise, if $0=\sum_hz^h$ with $z^h\in K^h$, then $(\bar e^h+z^h)_h$ is feasible and strictly improves every household, contradicting Pareto efficiency.

By the separating hyperplane theorem, there exists $p\neq0$ such that

$$
p\cdot z\ge0\qquad \forall z\in K.
$$

This $p$ supports the allocation. To see optimality, suppose household $h$ can afford $y^h$ and strictly prefers it:

$$
\begin{aligned}
u^h(y^h)&>u^h(\bar e^h),\\
p\cdot y^h&\le p\cdot \bar e^h.
\end{aligned}
$$

Let $z^h=y^h-\bar e^h\in K^h$. Then $p\cdot z^h\le0$. But separation says any strictly preferred net trade must satisfy $p\cdot z^h\ge0$, and with monotonicity/interiority one obtains the required strict budget violation. Hence no strictly preferred affordable bundle exists.

![](../attachment/image-20260520.png)
## 3. Planner characterization of Pareto efficiency

For interior allocations, Pareto efficiency can be characterized by weighted utility maximization:

$$
\begin{aligned}
\max_{(c^h)}\quad &\sum_{h=1}^H\lambda_hu^h(c^h)\\
\text{s.t.}\quad &\sum_{h=1}^H c^h\le \sum_{h=1}^H e^h,\qquad \lambda_h>0.
\end{aligned}
$$

### 3.1 Two-consumer, two-good case

For two consumers and two goods, the interior FOCs imply equal MRS:

$$
\frac{u^1_1(c^1)}{u^1_2(c^1)}
=
\frac{u^2_1(c^2)}{u^2_2(c^2)}.
$$

This is the standard Edgeworth box contract curve condition. H4 Q5 is a direct application: set MRS equal, impose feasibility, then solve for the contract curve/core/equilibrium.

## 4. Existence and Walras' law

### 4.1 Aggregate excess demand

For each household,

$$
f^h(p,e^h)\in\arg\max_{x\in\mathbb R_+^L}\{u^h(x):p\cdot x\le p\cdot e^h\}.
$$

Define aggregate excess demand

$$
z(p)=\sum_h f^h(p,e^h)-\sum_h e^h.
$$

Then

$$
\begin{aligned}
\text{Continuity:}\quad &z(p)\text{ continuous},\\
\text{Homogeneity:}\quad &f^h(\lambda p,e^h)=f^h(p,e^h)\ \Rightarrow\ z(\lambda p)=z(p),\quad \lambda>0,\\
\text{Walras' law:}\quad &p\cdot f^h(p,e^h)=p\cdot e^h\ \Rightarrow\ p\cdot z(p)=0.
\end{aligned}
$$

### 4.2 Existence result

:::{admonition} Existence via aggregate excess demand
Assume

$$
\begin{aligned}
f^h(p,e^h)&\in\arg\max_{x\in\mathbb R_+^L}\{u^h(x):p\cdot x\le p\cdot e^h\},\\
z(p)&=\sum_{h\in\mathcal H}\big(f^h(p,e^h)-e^h\big),\\
z(\lambda p)&=z(p),\qquad \lambda>0,\\
p\cdot z(p)&=0,\qquad z \text{ continuous}.
\end{aligned}
$$

Normalize prices on

$$
\Delta^{L-1}=\left\{p\in\mathbb R_+^L:\sum_{\ell=1}^L p_\ell=1\right\}.
$$

Then there exists $p^*\in\Delta^{L-1}$ such that

$$
z(p^*)\le0,\qquad z_\ell(p^*)=0\ \text{if }p_\ell^*>0.
$$
:::

:::{admonition} Two slight problems with the theorem
1. $z(p^*)\le0,\ z_\ell(p^*)=0$ if $p_\ell^*>0$ only gives a quasi-equilibrium.
2. If $u^h$ is strongly increasing, then $p^*\gg0$ and therefore $z(p^*)=0$.

To keep $z$ continuous away from the boundary, work on the trimmed simplex

$$
\Delta_\varepsilon^{L-1}
=
\left\{p\in\mathbb R_+^L:
\sum_{\ell=1}^L p_\ell=1,\ p_\ell\ge\varepsilon\ \forall \ell
\right\}.
$$
:::

### 4.3 Proof

:::{admonition} Berge maximum theorem
Each $f^h$ is continuous, hence $z$ is continuous.
:::

For $\bar p\in\Delta^{L-1}$ define

$$
\phi(p,\bar p)=p\cdot z(\bar p)-|p-\bar p|^2,\qquad p\in\Delta^{L-1}.
$$

Since $\phi(\cdot,\bar p)$ is strictly concave in $p$, the maximizer

$$
f(\bar p)=\arg\max_{p\in\Delta^{L-1}}\phi(p,\bar p)
$$

is single-valued.

:::{admonition} Brouwer fixed point theorem
The induced map $f:\Delta^{L-1}\to\Delta^{L-1}$ is continuous, so there exists $\bar p\in\Delta^{L-1}$ such that

$$
\bar p=f(\bar p).
$$
:::

At the fixed point,

$$
\bar p\cdot z(\bar p)\ge p\cdot z(\bar p)-|p-\bar p|^2
\qquad \forall p\in\Delta^{L-1}.
$$

Walras' law gives $\bar p\cdot z(\bar p)=0$, hence

$$
p\cdot z(\bar p)\le |p-\bar p|^2
\qquad \forall p\in\Delta^{L-1}.
$$

If some $p\in\Delta^{L-1}$ satisfies $p\cdot z(\bar p)>0$, then for

$$
p_\varepsilon=\varepsilon p+(1-\varepsilon)\bar p,\qquad \varepsilon\in(0,1),
$$

we get

$$
\begin{aligned}
p_\varepsilon\cdot z(\bar p)-|p_\varepsilon-\bar p|^2
&=\varepsilon p\cdot z(\bar p)-\varepsilon^2|p-\bar p|^2\\
&>0
\end{aligned}
$$

for $\varepsilon>0$ small, contradicting the optimality of $\bar p$. Therefore

$$
p\cdot z(\bar p)\le0\qquad \forall p\in\Delta^{L-1}.
$$

Take $p=e^\ell$:

$$
z_\ell(\bar p)=e^\ell\cdot z(\bar p)\le0,\qquad \ell=1,\ldots,L.
$$

So $z(\bar p)\le0$. Finally,

$$
\bar p\cdot z(\bar p)=0,\qquad \bar p\ge0,\qquad z(\bar p)\le0
$$

imply

$$
\bar p_\ell>0\ \Longrightarrow\ z_\ell(\bar p)=0.
$$

### 4.4 Walras' law

For locally nonsatiated preferences,

$$
p\cdot x^h(p)=p\cdot e^h.
$$

$$
\begin{aligned}
p\cdot \sum_h(x^h(p)-e^h)
&=
\sum_h p\cdot x^h(p)-\sum_h p\cdot e^h\\
&=0.
\end{aligned}
$$

In a two-good economy,

$$
p_1z_1(p)+p_2z_2(p)=0.
$$

If $p\gg0$ and good 1 clears, $z_1(p)=0$, then

$$
\begin{aligned}
p_2z_2(p)&=0\\
\Longrightarrow z_2(p)&=0.
\end{aligned}
$$

Thus, with $L$ goods, clearing $L-1$ markets implies the last market clears.

### 4.5 Transfer paradox widget

<div id="edgeworth-widget" style="font-family: system-ui, -apple-system, sans-serif; max-width: 450px; margin: 20px auto; padding: 15px; border: 1px solid #e1e4e8; border-radius: 8px; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <h3 style="margin-top: 0; font-size: 1.2rem; color: #333; text-align: center;">转移悖论 (Transfer Paradox) 动态推演</h3>

    <div style="position: relative; width: 400px; height: 400px; margin: 0 auto; border: 2px solid #333; background-color: #fafbfc; cursor: crosshair;">
        <canvas id="ew-canvas" width="400" height="400" style="display: block;"></canvas>
        <div style="position: absolute; bottom: -25px; left: -10px; font-weight: bold;">O₁ (家庭1)</div>
        <div style="position: absolute; top: -25px; right: -10px; font-weight: bold;">O₂ (家庭2)</div>
    </div>

    <div style="margin-top: 35px; padding: 12px; background: #f6f8fa; border-radius: 6px; font-size: 0.95rem;">
        <div style="margin-bottom: 8px;"><strong>当前状态：</strong></div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span>均衡点 E* (固定):</span>
            <span id="label-e" style="font-family: monospace; color: #d73a49;"></span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span>禀赋点 W (拖动):</span>
            <span id="label-w" style="font-family: monospace; color: #0366d6;"></span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span>预算线斜率 (价格比 p₁/p₂):</span>
            <span id="label-p" style="font-family: monospace; font-weight: bold;"></span>
        </div>
        <div id="status-msg" style="margin-top: 10px; color: #28a745; font-weight: bold; text-align: center; height: 20px;"></div>
    </div>
</div>

<script>
(function() {
    const canvas = document.getElementById('ew-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const a1 = 0.5;
    const a2 = 2.0;
    const TOTAL_X = 3;
    const TOTAL_Y = 3;
    const S = 400;

    const toPx = (x, y) => ({ cx: (x / TOTAL_X) * S, cy: S - (y / TOTAL_Y) * S });
    const toMath = (cx, cy) => ({ x: (cx / S) * TOTAL_X, y: ((S - cy) / S) * TOTAL_Y });

    const e_x = 3 * (a2 - 1) / (a2 - a1);
    const e_y = a1 * e_x;
    const E = toPx(e_x, e_y);

    let w_math = { x: 1, y: 1 };
    let W = toPx(w_math.x, w_math.y);
    let isDragging = false;

    function draw() {
        ctx.clearRect(0, 0, S, S);
        ctx.font = '14px system-ui, -apple-system, sans-serif';
        ctx.textBaseline = 'middle';

        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.setLineDash([5, 5]);
        const r1_end = toPx(TOTAL_X, a1 * TOTAL_X);
        ctx.moveTo(0, S);
        ctx.lineTo(r1_end.cx, r1_end.cy);
        ctx.stroke();

        ctx.beginPath();
        const r2_start_math_y = TOTAL_Y - a2 * TOTAL_X;
        const r2_start = toPx(0, r2_start_math_y);
        ctx.moveTo(S, 0);
        ctx.lineTo(r2_start.cx, r2_start.cy);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.beginPath();
        ctx.strokeStyle = '#f66a0a';
        ctx.lineWidth = 2;
        const dx = W.cx - E.cx;
        const dy = W.cy - E.cy;
        if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
            ctx.moveTo(E.cx - dx * 10, E.cy - dy * 10);
            ctx.lineTo(E.cx + dx * 10, E.cy + dy * 10);
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = '#d73a49';
        ctx.arc(E.cx, E.cy, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.fillText('E*', E.cx + 10, E.cy - 10);

        ctx.beginPath();
        ctx.fillStyle = '#0366d6';
        ctx.arc(W.cx, W.cy, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = '#000';
        ctx.fillText('W', W.cx + 10, W.cy + 15);

        updateLabels();
    }

    function updateLabels() {
        document.getElementById('label-e').innerText = `(${e_x.toFixed(2)}, ${e_y.toFixed(2)})`;
        document.getElementById('label-w').innerText = `(${w_math.x.toFixed(2)}, ${w_math.y.toFixed(2)})`;

        let priceRatio = '∞';
        if (Math.abs(w_math.x - e_x) > 0.001) {
            const slope = Math.abs((w_math.y - e_y) / (w_math.x - e_x));
            priceRatio = slope.toFixed(2);
        }
        document.getElementById('label-p').innerText = priceRatio;
    }

    function getMousePos(evt) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    canvas.addEventListener('mousedown', (e) => {
        const pos = getMousePos(e);
        const dist = Math.hypot(pos.x - W.cx, pos.y - W.cy);
        if (dist < 15) {
            isDragging = true;
            document.getElementById('status-msg').innerText = '发生财富转移：价格调整，均衡未变！';
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const pos = getMousePos(e);
        W.cx = Math.max(0, Math.min(S, pos.x));
        W.cy = Math.max(0, Math.min(S, pos.y));
        w_math = toMath(W.cx, W.cy);
        draw();
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            setTimeout(() => {
                const status = document.getElementById('status-msg');
                if (status) status.innerText = '';
            }, 2000);
        }
    });

    draw();
})();
</script>

## 5. Core

:::{admonition} Definition (Core)
A feasible allocation $(c^h)$ is in the core if there is no coalition $S\subseteq H$ and allocation $(\tilde c^h)_{h\in S}$ such that

$$
\sum_{h\in S}\tilde c^h=\sum_{h\in S}e^h,
$$
and

$$
u^h(\tilde c^h)\ge u^h(c^h)\quad\forall h\in S,
$$
with strict inequality for at least one member of $S$.

:::

**Walrasian allocations are in the core.** If a coalition could block a Walrasian allocation, each blocking member would get a weakly preferred bundle and one member strictly preferred. By the same revealed-preference budget argument as in FWT, the coalition's proposed bundles would cost strictly more than the coalition's endowment, contradicting coalition feasibility.

Core convergence theorem in the slides: in replica economies, as the number of replicas grows, core allocations converge to Walrasian allocations. Intuition: large markets make individual/coalitional market power vanish.

## 6. Theory of the firm: production set

:::{admonition} Definition (Production set)
A production plan is $y\in\mathbb R^L$, where positive components are outputs and negative components are inputs. The production set $Y\subseteq\mathbb R^L$ contains feasible production plans.

:::

Common assumptions:

$$
\begin{aligned}
0&\in Y \quad\text{(inaction)},\\
Y&\text{ closed},\\
y\in Y,\ \hat y\le y&\Longrightarrow \hat y\in Y \quad\text{(free disposal)},\\
Y&\text{ convex under convex technology}.
\end{aligned}
$$

For a single-output firm, write the production plan as $(-x,y)$, where $x\in\mathbb R_+^{L-1}$ and $y\in\mathbb R_+$. The production function is

$$
f(x)=\max\{y:(-x,y)\in Y\}.
$$

MRTS:

$$
MRTS_{ij}(x)=\frac{f_i(x)}{f_j(x)}.
$$

## 7. Production function concavity and convex production set

Let

$$
Y=\{(-x,y):x\ge0,\ y\le f(x)\}.
$$

:::{admonition} $f$ concave implies $Y$ convex
If $f$ is concave and $Y=\{(-x,y):x\ge0,\ y\le f(x)\}$, then $Y$ is convex.
:::

Proof:
Take any $(-x^1,y^1),(-x^2,y^2)\in Y$ and $\lambda\in[0,1]$. Since both points are feasible,

$$
y^1\le f(x^1),\qquad y^2\le f(x^2).
$$

Define

$$
\bar x=\lambda x^1+(1-\lambda)x^2,\qquad
\bar y=\lambda y^1+(1-\lambda)y^2.
$$

Then

$$
\begin{aligned}
\bar y
&=\lambda y^1+(1-\lambda)y^2\\
&\le \lambda f(x^1)+(1-\lambda)f(x^2)\\
&\le f(\lambda x^1+(1-\lambda)x^2)\\
&=f(\bar x).
\end{aligned}
$$

Hence $(-\bar x,\bar y)\in Y$. Therefore $Y$ is convex.

:::{admonition} $Y$ convex implies $f$ concave
If $Y=\{(-x,y):x\ge0,\ y\le f(x)\}$ is convex, then $f$ is concave:

$$
f(\lambda x^1+(1-\lambda)x^2)
\ge
\lambda f(x^1)+(1-\lambda)f(x^2).
$$
:::

Proof:
By definition,

$$
(-x^1,f(x^1)),\quad (-x^2,f(x^2))\in Y.
$$

Convexity of $Y$ gives

$$
\begin{aligned}
\lambda(-x^1,f(x^1))+(1-\lambda)(-x^2,f(x^2))
&=
(-\bar x,\lambda f(x^1)+(1-\lambda)f(x^2))\\
&\in Y.
\end{aligned}
$$

By definition of $f$,

$$
\lambda f(x^1)+(1-\lambda)f(x^2)
\le
f(\bar x).
$$

Thus $f$ is concave.

## 8. CRS iff production set is a cone

:::{admonition} CRS iff production set is a cone
Under free disposal, a single-output production function has constant returns to scale iff the associated production set is a cone.
:::

Assume free disposal and define constant returns to scale as

$$
f(\lambda x)=\lambda f(x)\qquad \forall \lambda>0.
$$

A set $Y$ is a cone if $y\in Y\Rightarrow \lambda y\in Y$ for all $\lambda>0$.

### CRS $\Rightarrow Y$ cone

Take $(-x,y)\in Y$, so $y\le f(x)$. For any $\lambda>0$,

$$
\begin{aligned}
\lambda y
&\le \lambda f(x)\\
&=f(\lambda x).
\end{aligned}
$$

Thus $(-\lambda x,\lambda y)\in Y$. Therefore $Y$ is a cone.

### $Y$ cone $\Rightarrow$ CRS

Let $y=f(x)$, so $(-x,y)\in Y$. Since $Y$ is a cone,

$$
(-\lambda x,\lambda y)\in Y
\quad\Longrightarrow\quad
f(\lambda x)\ge \lambda f(x).
$$

If $f(\lambda x)>\lambda f(x)$, then $(-\lambda x,y')\in Y$ for some $y'>\lambda f(x)$. Scaling back by $1/\lambda$,

$$
\left(-x,\frac{y'}{\lambda}\right)\in Y,
\qquad
\frac{y'}{\lambda}>f(x),
$$

contradicting the definition of $f(x)$. Therefore $f(\lambda x)=\lambda f(x)$.

## 9. Profit maximization

:::{admonition} Definition (Profit maximization problem)
Given price vector $p\in\mathbb R^L$, the firm's profit function is

$$
\pi(p)=\max_{y\in Y}p\cdot y.
$$
The supply correspondence is

$$
y(p)\in\arg\max_{y\in Y}p\cdot y.
$$

:::

Properties:

$$
\begin{aligned}
\pi(\alpha p)&=\alpha \pi(p),\qquad \alpha>0,\\
\pi(\theta p+(1-\theta)p')&\le \theta\pi(p)+(1-\theta)\pi(p')
\quad\text{(convex in prices)}.
\end{aligned}
$$

Convexity proof:

$$
\begin{aligned}
\pi(p_\theta)
&=\max_{y\in Y}[\theta p+(1-\theta)p']\cdot y\\
&=\max_{y\in Y}\left[\theta p\cdot y+(1-\theta)p'\cdot y\right]\\
&\le \theta\max_{y\in Y}p\cdot y+(1-\theta)\max_{y\in Y}p'\cdot y\\
&=\theta\pi(p)+(1-\theta)\pi(p').
\end{aligned}
$$

For a single-output firm with output price $p$ and input prices $w$,

$$
\pi(p,w)=\max_{x\ge0}\left\{pf(x)-w\cdot x\right\}.
$$

Interior FOCs:

$$
p f_i(x^*)=w_i,\qquad i=1,\ldots,L-1.
$$

Interpretation: value of marginal product equals factor price.

## 10. Supply and input demand comparative statics

By Hotelling's lemma/envelope theorem,

$$
\frac{\partial \pi(p,w)}{\partial p}=y^*(p,w),\qquad
\frac{\partial \pi(p,w)}{\partial w_i}=-x_i^*(p,w).
$$

Convexity of $\pi$ implies own-price supply slopes upward and own-input demand slopes downward under differentiability:

$$
\frac{\partial y^*}{\partial p}
=
\frac{\partial^2\pi}{\partial p^2}\ge0,
\qquad
\frac{\partial x_i^*}{\partial w_i}
=
-\frac{\partial^2\pi}{\partial w_i^2}\le0.
$$

For cross input prices, H3 Q4 uses the FOC system. Let

$$
F(z,p,w)=p\nabla f(z)-w=0.
$$

Differentiate with respect to $w_k$:

$$
pD^2f(z)\frac{\partial z}{\partial w_k}=e_k.
$$

Thus

$$
\frac{\partial z}{\partial w_k}
=
\frac{1}{p}[D^2f(z)]^{-1}e_k.
$$

With strict concavity and negative cross partial assumptions, one derives $\partial z_\ell/\partial w_k<0$ for $k\neq \ell$ in the homework setting.

## 11. Cost minimization and supply

If $x^*$ maximizes profit and $y^*=f(x^*)$, then $x^*$ solves the cost minimization problem for output $y^*$:

$$
\begin{aligned}
C(y,w)=
\min_{x\ge0}\quad &w\cdot x\\
\text{s.t.}\quad &f(x)\ge y.
\end{aligned}
$$

Properties:

$$
\begin{aligned}
C(y,\alpha w)&=\alpha C(y,w),\\
C(y,w)&\text{ is nondecreasing in }y,\\
C(y,w)&\text{ is nondecreasing and concave in }w.
\end{aligned}
$$

Two-step profit maximization:

$$
\max_y\{R(y)-C(y,w)\}.
$$

FOC:

$$
R'(y^*)=C_y(y^*,w).
$$

For a competitive firm $R(y)=py$, so

$$
p=MC(y^*,w).
$$

This gives the supply curve as inverse marginal cost.

## 12. Production in Arrow-Debreu

There are $K$ firms with production sets $Y^k\subseteq\mathbb R^L$. A production economy equilibrium is

$$
(p,(c^h)_{h=1}^H,(y^k)_{k=1}^K)
$$

such that

$$
\begin{aligned}
c^h&\in\arg\max_{x\ge0}u^h(x)
\quad\text{s.t.}\quad
p\cdot x\le p\cdot e^h+\sum_k\delta_k^h p\cdot y^k,\\
y^k&\in\arg\max_{y\in Y^k}p\cdot y,\\
\sum_h(c^h-e^h)-\sum_k y^k&=0.
\end{aligned}
$$

Here $\delta_k^h$ is household $h$'s ownership share of firm $k$.

:::{admonition} First Welfare Theorem with production
If consumers maximize utility and firms maximize profits at prices $p$, then the allocation-production plan is Pareto efficient.
:::

Proof:
Suppose an alternative $(x^h,\tilde y^k)$ Pareto dominates. Consumer revealed preference implies

$$
\sum_h p\cdot x^h>\sum_h p\cdot c^h.
$$

Firm profit maximization implies

$$
p\cdot y^k\ge p\cdot \tilde y^k
\quad\forall k.
$$

Feasibility of the alternative gives

$$
\sum_h x^h-\sum_k\tilde y^k\le\sum_h e^h.
$$

Equilibrium feasibility gives

$$
\sum_h c^h-\sum_k y^k=\sum_h e^h.
$$

Multiply by $p$:

$$
\sum_h p\cdot x^h-\sum_kp\cdot\tilde y^k
\le
\sum_h p\cdot c^h-\sum_kp\cdot y^k.
$$

Using $p\cdot y^k\ge p\cdot \tilde y^k$, the RHS inequality contradicts $\sum_hp\cdot x^h>\sum_hp\cdot c^h$. Therefore no Pareto improvement exists.

### Second Welfare Theorem with production

Under convex production sets and convex preferences, every interior Pareto efficient allocation-production plan can be supported by prices after redistribution. Nonconvex production, increasing returns, and externalities are classic failure cases.

## 13. Firms vs household production

The slides show that if households own firm technologies by shares $\delta_k^h$, we can define household production sets

$$
\bar Y^h=\sum_k\delta_k^hY^k.
$$

Under the relevant assumptions, an equilibrium with firms is equivalent to an equilibrium in which households directly operate their share of production technologies. This is useful for welfare proofs because firm profits enter household budget constraints as ownership income.
