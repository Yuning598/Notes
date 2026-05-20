---
course: EF8070 Advanced Microeconomics
topic: General Equilibrium and Welfare
type: main-note
sources:
  - EF8070_slides.pdf: General Equilibrium in a Pure Exchange Economy, slides 1-26
  - hmwk2_solutions.pdf
tags:
  - micro
  - general-equilibrium
  - welfare
  - qe
---

# 03 General Equilibrium and Welfare

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

```{raw} html
<div id="tp-container" style="font-family: system-ui, -apple-system, sans-serif; max-width: 450px; margin: 20px auto; padding: 15px; border: 1px solid #e1e4e8; border-radius: 8px; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <h3 style="margin-top: 0; font-size: 1.2rem; color: #333; text-align: center;">转移悖论 (Transfer Paradox)</h3>
    <p style="text-align: center; color: #666; font-size: 0.85rem; margin-top: 0; margin-bottom: 15px;">(Leontief 偏好：完全互补)</p>
    
    <div style="position: relative; width: 400px; height: 400px; margin: 0 auto; border: 2px solid #333; background-color: #fafbfc; cursor: crosshair;">
        <canvas id="tp-canvas" width="400" height="400" style="display: block;"></canvas>
        <div style="position: absolute; bottom: -25px; left: -10px; font-weight: bold;">O₁</div>
        <div style="position: absolute; top: -25px; right: -10px; font-weight: bold;">O₂</div>
    </div>

    <div style="margin-top: 35px; padding: 12px; background: #f6f8fa; border-radius: 6px; font-size: 0.95rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span style="color: #0366d6;"><strong>禀赋点 W (拖动):</strong> <span id="tp-val-w"></span></span>
            <span style="color: #d73a49;"><strong>均衡点 E* (固定):</strong> <span id="tp-val-e"></span></span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span><strong>预算线斜率 (p₁/p₂):</strong> <span id="tp-val-p" style="font-family: monospace;"></span></span>
        </div>
        <div id="tp-msg" style="margin-top: 10px; color: #28a745; font-weight: bold; text-align: center; height: 20px; font-size: 0.9rem;"></div>
    </div>
</div>

<script>
(function() {
    const canvas = document.getElementById('tp-canvas');
    const ctx = canvas.getContext('2d');
    const a1 = 0.5, a2 = 2.0, TOTAL = 3, S = 400;
    
    const toPx = (x, y) => ({ cx: (x / TOTAL) * S, cy: S - (y / TOTAL) * S });
    const toMath = (cx, cy) => ({ x: (cx / S) * TOTAL, y: ((S - cy) / S) * TOTAL });

    const e_x = TOTAL * (a2 - 1) / (a2 - a1);
    const e_y = a1 * e_x;
    const E = toPx(e_x, e_y);

    let w_math = { x: 1, y: 1 };
    let W = toPx(w_math.x, w_math.y);
    let isDragging = false;

    function draw() {
        ctx.clearRect(0, 0, S, S);
        
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)'; ctx.setLineDash([5, 5]);
        const r1_end = toPx(TOTAL, a1 * TOTAL);
        ctx.moveTo(0, S); ctx.lineTo(r1_end.cx, r1_end.cy); ctx.stroke();
        
        ctx.beginPath();
        const r2_start = toPx(0, TOTAL - a2 * TOTAL);
        ctx.moveTo(S, 0); ctx.lineTo(r2_start.cx, r2_start.cy); ctx.stroke();
        ctx.setLineDash([]);

        ctx.beginPath(); ctx.strokeStyle = '#f66a0a'; ctx.lineWidth = 2;
        const dx = W.cx - E.cx, dy = W.cy - E.cy;
        if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
            ctx.moveTo(E.cx - dx * 10, E.cy - dy * 10); ctx.lineTo(E.cx + dx * 10, E.cy + dy * 10);
        }
        ctx.stroke();

        ctx.beginPath(); ctx.fillStyle = '#d73a49'; ctx.arc(E.cx, E.cy, 6, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#000'; ctx.fillText("E*", E.cx + 10, E.cy - 10);

        ctx.beginPath(); ctx.fillStyle = '#0366d6'; ctx.arc(W.cx, W.cy, 8, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
        ctx.fillStyle = '#000'; ctx.fillText("W", W.cx + 10, W.cy + 15);

        document.getElementById('tp-val-e').innerText = `(${e_x.toFixed(2)}, ${e_y.toFixed(2)})`;
        document.getElementById('tp-val-w').innerText = `(${w_math.x.toFixed(2)}, ${w_math.y.toFixed(2)})`;
        let priceRatio = "∞";
        if (Math.abs(w_math.x - e_x) > 0.001) priceRatio = Math.abs((w_math.y - e_y) / (w_math.x - e_x)).toFixed(2);
        document.getElementById('tp-val-p').innerText = priceRatio;
    }

    canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const dist = Math.hypot((e.clientX - rect.left) - W.cx, (e.clientY - rect.top) - W.cy);
        if (dist < 15) { isDragging = true; document.getElementById('tp-msg').innerText = "发生财富转移：价格调整，均衡未变！"; }
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const rect = canvas.getBoundingClientRect();
        W.cx = Math.max(0, Math.min(S, e.clientX - rect.left));
        W.cy = Math.max(0, Math.min(S, e.clientY - rect.top));
        w_math = toMath(W.cx, W.cy);
        draw();
    });

    window.addEventListener('mouseup', () => { if(isDragging) { isDragging = false; setTimeout(() => document.getElementById('tp-msg').innerText = "", 2000); }});
    draw();
})();
</script>
```

### 4.6 FWT and SWT widget

```{raw} html
<div id="wt-container" style="font-family: system-ui, -apple-system, sans-serif; max-width: 450px; margin: 20px auto; padding: 15px; border: 1px solid #e1e4e8; border-radius: 8px; background: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
    <h3 style="margin-top: 0; font-size: 1.2rem; color: #333; text-align: center; margin-bottom: 5px;">第一与第二福利定理 (FWT & SWT)</h3>
    <p style="text-align: center; color: #666; font-size: 0.85rem; margin-top: 0; margin-bottom: 15px;">(Cobb-Douglas 偏好：平滑无差异曲线)</p>
    
    <div style="position: relative; width: 400px; height: 400px; margin: 0 auto; border: 2px solid #333; background-color: #fafbfc; cursor: crosshair;">
        <canvas id="wt-canvas" width="400" height="400" style="display: block;"></canvas>
        <div style="position: absolute; bottom: -25px; left: -10px; font-weight: bold;">O₁</div>
        <div style="position: absolute; top: -25px; right: -10px; font-weight: bold;">O₂</div>
    </div>

    <div style="margin-top: 35px; padding: 12px; background: #f6f8fa; border-radius: 6px; font-size: 0.95rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span style="color: #0366d6;"><strong>禀赋 W (拖动):</strong> <span id="wt-val-w"></span></span>
            <span style="color: #d73a49;"><strong>均衡 E*:</strong> <span id="wt-val-e"></span></span>
        </div>
        <div style="margin-bottom: 12px;">
            <span><strong>均衡价格比 (p₁/p₂):</strong> <span id="wt-val-p" style="font-family: monospace;"></span></span>
        </div>
        <hr style="border: none; border-top: 1px solid #e1e4e8; margin: 10px 0;">
        <div style="font-size: 0.85rem; color: #444; line-height: 1.4;">
            <div style="margin-bottom: 6px;">🎯 <strong>FWT:</strong> 拖动蓝点 W，均衡 E* 始终落在契约曲线（黑线）上，且两曲线相切。</div>
            <div>⚖️ <strong>SWT:</strong> 沿橙色虚线（预算线）拖动 W，你会发现均衡 E* 岿然不动！</div>
        </div>
    </div>
</div>

<script>
(function() {
    const canvas = document.getElementById('wt-canvas');
    const ctx = canvas.getContext('2d');
    const TOTAL = 100, S = 400;
    
    const toPx = (x, y) => ({ cx: (x / TOTAL) * S, cy: S - (y / TOTAL) * S });
    const toMath = (cx, cy) => ({ x: (cx / S) * TOTAL, y: ((S - cy) / S) * TOTAL });

    let w_math = { x: 20, y: 80 }; 
    let W = toPx(w_math.x, w_math.y);
    let isDragging = false;

    function draw() {
        ctx.clearRect(0, 0, S, S);

        const p = (70 - 0.4 * w_math.y) / (30 + 0.4 * w_math.x);
        const Income1 = p * w_math.x + w_math.y;
        const e_x = 0.3 * (Income1 / p);
        const e_y = 0.7 * Income1;
        const E = toPx(e_x, e_y);

        ctx.beginPath(); ctx.lineWidth = 3; ctx.strokeStyle = '#333';
        for(let x = 0; x <= 100; x += 1) {
            let y = (490 * x) / (90 + 4 * x);
            let pt = toPx(x, y);
            if(x === 0) ctx.moveTo(pt.cx, pt.cy); else ctx.lineTo(pt.cx, pt.cy);
        }
        ctx.stroke();

        ctx.beginPath(); ctx.lineWidth = 1.5; ctx.strokeStyle = '#f66a0a'; ctx.setLineDash([4, 4]);
        const y_at_0 = p * w_math.x + w_math.y;
        const y_at_100 = -p * 100 + y_at_0;
        ctx.moveTo(toPx(0, y_at_0).cx, toPx(0, y_at_0).cy);
        ctx.lineTo(toPx(100, y_at_100).cx, toPx(100, y_at_100).cy);
        ctx.stroke(); ctx.setLineDash([]);

        const u1_val = Math.pow(e_x, 0.3) * Math.pow(e_y, 0.7);
        ctx.beginPath(); ctx.lineWidth = 2; ctx.strokeStyle = '#28a745';
        for(let x = 0.5; x <= 100; x += 0.5) {
            let y = Math.pow(u1_val / Math.pow(x, 0.3), 1/0.7);
            if (y > 100) continue;
            let pt = toPx(x, y);
            ctx.lineTo(pt.cx, pt.cy);
        }
        ctx.stroke();

        const u2_val = Math.pow(100 - e_x, 0.7) * Math.pow(100 - e_y, 0.3);
        ctx.beginPath(); ctx.strokeStyle = '#6f42c1';
        for(let x = 0; x < 99.5; x += 0.5) {
            let y = 100 - Math.pow(u2_val / Math.pow(100 - x, 0.7), 1/0.3);
            if (y < 0) continue;
            let pt = toPx(x, y);
            ctx.lineTo(pt.cx, pt.cy);
        }
        ctx.stroke();

        ctx.beginPath(); ctx.fillStyle = '#d73a49'; ctx.arc(E.cx, E.cy, 6, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#000'; ctx.fillText("E*", E.cx + 8, E.cy - 8);

        ctx.beginPath(); ctx.fillStyle = '#0366d6'; ctx.arc(W.cx, W.cy, 7, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
        ctx.fillStyle = '#000'; ctx.fillText("W", W.cx + 8, W.cy + 15);

        document.getElementById('wt-val-w').innerText = `(${w_math.x.toFixed(1)}, ${w_math.y.toFixed(1)})`;
        document.getElementById('wt-val-e').innerText = `(${e_x.toFixed(1)}, ${e_y.toFixed(1)})`;
        document.getElementById('wt-val-p').innerText = p.toFixed(3);
    }

    canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const dist = Math.hypot((e.clientX - rect.left) - W.cx, (e.clientY - rect.top) - W.cy);
        if (dist < 15) isDragging = true;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const rect = canvas.getBoundingClientRect();
        W.cx = Math.max(0, Math.min(S, e.clientX - rect.left));
        W.cy = Math.max(0, Math.min(S, e.clientY - rect.top));
        w_math = toMath(W.cx, W.cy);
        draw();
    });

    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mouseleave', () => isDragging = false);
    draw();
})();
</script>
```

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

