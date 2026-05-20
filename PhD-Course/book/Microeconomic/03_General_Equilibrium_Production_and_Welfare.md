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
<div class="tp-card" id="tp-container">
  <style>
    .tp-card {
      --bg: #f6f8fb;
      --panel: #ffffff;
      --text: #1f2937;
      --muted: #64748b;
      --border: #d9e2ec;
      --grid: #edf2f7;
      --axis: #0f172a;
      --blue: #2563eb;
      --blue-soft: rgba(37, 99, 235, 0.12);
      --red: #dc2626;
      --orange: #ea580c;
      --green: #16a34a;
      --shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
      --radius: 18px;
      width: min(100%, 520px);
      margin: 20px auto;
      padding: 20px;
      color: var(--text);
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      user-select: none;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    .tp-card * {
      box-sizing: border-box;
    }

    .tp-header {
      margin-bottom: 14px;
      text-align: center;
    }

    .tp-header h3 {
      margin: 0;
      color: var(--text);
      font-size: 1.2rem;
      line-height: 1.3;
      letter-spacing: -0.01em;
    }

    .tp-header p {
      margin: 5px 0 0;
      color: var(--muted);
      font-size: 0.86rem;
      line-height: 1.4;
    }

    .tp-stage {
      position: relative;
      width: min(100%, 400px);
      aspect-ratio: 1 / 1;
      margin: 0 auto;
      overflow: visible;
      background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
      border: 2px solid var(--axis);
      border-radius: 12px;
      cursor: crosshair;
      touch-action: none;
    }

    .tp-stage canvas {
      display: block;
      width: 100%;
      height: 100%;
      touch-action: none;
    }

    .tp-origin {
      position: absolute;
      color: var(--axis);
      font-weight: 800;
      pointer-events: none;
    }

    .tp-origin--one {
      left: -10px;
      bottom: -28px;
    }

    .tp-origin--two {
      top: -28px;
      right: -10px;
    }

    .tp-panel {
      margin-top: 36px;
      padding: 14px;
      background: #f8fafc;
      border: 1px solid var(--border);
      border-radius: 12px;
      font-size: 0.92rem;
    }

    .tp-row {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: baseline;
      margin-bottom: 8px;
    }

    .tp-row:last-of-type {
      margin-bottom: 0;
    }

    .tp-label {
      font-weight: 780;
      white-space: nowrap;
    }

    .tp-label--w {
      color: var(--blue);
    }

    .tp-label--e {
      color: var(--red);
    }

    .tp-value {
      color: var(--text);
      font-variant-numeric: tabular-nums;
    }

    .tp-value--mono {
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    }

    .tp-message {
      min-height: 1.25rem;
      margin-top: 10px;
      color: var(--green);
      font-size: 0.9rem;
      font-weight: 800;
      text-align: center;
    }

    @media (max-width: 520px) {
      .tp-card {
        padding: 16px;
      }

      .tp-row {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2px;
      }

      .tp-label {
        white-space: normal;
      }
    }
  </style>

  <header class="tp-header">
    <h3>转移悖论 (Transfer Paradox)</h3>
    <p>Leontief 偏好：完全互补</p>
  </header>

  <div class="tp-stage">
    <canvas id="tp-canvas"></canvas>
    <div class="tp-origin tp-origin--one">O₁</div>
    <div class="tp-origin tp-origin--two">O₂</div>
  </div>

  <section class="tp-panel" aria-live="polite">
    <div class="tp-row">
      <span class="tp-label tp-label--w">禀赋点 W（拖动）</span>
      <span class="tp-value" id="tp-val-w"></span>
    </div>

    <div class="tp-row">
      <span class="tp-label tp-label--e">均衡点 E*（固定）</span>
      <span class="tp-value" id="tp-val-e"></span>
    </div>

    <div class="tp-row">
      <span class="tp-label">预算线斜率 (p₁/p₂)</span>
      <span class="tp-value tp-value--mono" id="tp-val-p"></span>
    </div>

    <div class="tp-message" id="tp-msg"></div>
  </section>

  <script>
    (() => {
      const canvas = document.querySelector("#tp-canvas");
      const ctx = canvas.getContext("2d");

      const valueW = document.querySelector("#tp-val-w");
      const valueE = document.querySelector("#tp-val-e");
      const valueP = document.querySelector("#tp-val-p");
      const message = document.querySelector("#tp-msg");

      const config = {
        total: 3,
        a1: 0.5,
        a2: 2.0,
        hitRadius: 24,
        messageDurationMs: 2000,
      };

      const colors = {
        text: "#1f2937",
        muted: "#64748b",
        grid: "#edf2f7",
        kinkOne: "rgba(37, 99, 235, 0.38)",
        kinkTwo: "rgba(220, 38, 38, 0.32)",
        budget: "#ea580c",
        equilibrium: "#dc2626",
        endowment: "#2563eb",
        white: "#ffffff",
      };

      const equilibrium = getEquilibriumPoint();

      const state = {
        isDragging: false,
        messageTimer: null,
        w: { x: 1, y: 1 },
      };

      function getCanvasSize() {
        return Number(canvas.dataset.cssSize) || canvas.clientWidth || 400;
      }

      function setupCanvasForHiDpi() {
        const ratio = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        const size = Math.min(rect.width, rect.height);

        canvas.width = Math.round(size * ratio);
        canvas.height = Math.round(size * ratio);
        canvas.dataset.cssSize = size;

        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      }

      function getEquilibriumPoint() {
        const { total, a1, a2 } = config;
        const x = (total * (a2 - 1)) / (a2 - a1);
        return { x, y: a1 * x };
      }

      function toCanvasPoint({ x, y }) {
        const size = getCanvasSize();
        return {
          x: (x / config.total) * size,
          y: size - (y / config.total) * size,
        };
      }

      function toModelPoint({ x, y }) {
        const size = getCanvasSize();
        return {
          x: (x / size) * config.total,
          y: ((size - y) / size) * config.total,
        };
      }

      function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
      }

      function formatPoint({ x, y }) {
        return `(${x.toFixed(2)}, ${y.toFixed(2)})`;
      }

      function getPriceRatio() {
        const dx = state.w.x - equilibrium.x;
        const dy = state.w.y - equilibrium.y;

        if (Math.abs(dx) < 0.001) return "∞";
        return Math.abs(dy / dx).toFixed(2);
      }

      function getPointerPosition(event) {
        const rect = canvas.getBoundingClientRect();
        return {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
      }

      function drawGrid() {
        const size = getCanvasSize();
        const step = size / config.total;

        ctx.save();
        ctx.strokeStyle = colors.grid;
        ctx.lineWidth = 1;

        for (let i = 1; i < config.total; i += 1) {
          const p = i * step;

          ctx.beginPath();
          ctx.moveTo(p, 0);
          ctx.lineTo(p, size);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(0, p);
          ctx.lineTo(size, p);
          ctx.stroke();
        }

        ctx.restore();
      }

      function drawLine(from, to, options = {}) {
        ctx.save();
        ctx.strokeStyle = options.color ?? colors.text;
        ctx.lineWidth = options.width ?? 2;
        ctx.setLineDash(options.dashed ? [6, 6] : []);
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
        ctx.restore();
      }

      function drawLabel(text, point, options = {}) {
        ctx.save();
        ctx.font = `${options.weight ?? 700} ${options.size ?? 13}px system-ui, sans-serif`;
        ctx.textAlign = options.align ?? "left";
        ctx.textBaseline = options.baseline ?? "middle";

        if (options.halo !== false) {
          ctx.lineWidth = 4;
          ctx.strokeStyle = "rgba(255,255,255,0.92)";
          ctx.strokeText(text, point.x, point.y);
        }

        ctx.fillStyle = options.color ?? colors.text;
        ctx.fillText(text, point.x, point.y);
        ctx.restore();
      }

      function drawPoint(point, options) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = options.fill;
        ctx.arc(point.x, point.y, options.radius, 0, Math.PI * 2);
        ctx.fill();

        if (options.stroke) {
          ctx.strokeStyle = options.stroke;
          ctx.lineWidth = options.strokeWidth ?? 2;
          ctx.stroke();
        }

        ctx.restore();
      }

      function drawKinkRays() {
        const total = config.total;
        const size = getCanvasSize();

        const householdOneEnd = toCanvasPoint({ x: total, y: config.a1 * total });
        const householdTwoStart = toCanvasPoint({ x: 0, y: total - config.a2 * total });

        drawLine(
          { x: 0, y: size },
          householdOneEnd,
          { color: colors.kinkOne, width: 2, dashed: true }
        );

        drawLine(
          { x: size, y: 0 },
          householdTwoStart,
          { color: colors.kinkTwo, width: 2, dashed: true }
        );
      }

      function getBudgetLineSegment() {
        const e = toCanvasPoint(equilibrium);
        const w = toCanvasPoint(state.w);
        const dx = w.x - e.x;
        const dy = w.y - e.y;
        const size = getCanvasSize();

        if (Math.hypot(dx, dy) < 0.01) return null;

        const candidates = [];

        if (Math.abs(dx) > 1e-8) {
          const tLeft = (0 - e.x) / dx;
          const yLeft = e.y + tLeft * dy;
          if (yLeft >= 0 && yLeft <= size) candidates.push({ x: 0, y: yLeft });

          const tRight = (size - e.x) / dx;
          const yRight = e.y + tRight * dy;
          if (yRight >= 0 && yRight <= size) candidates.push({ x: size, y: yRight });
        }

        if (Math.abs(dy) > 1e-8) {
          const tTop = (0 - e.y) / dy;
          const xTop = e.x + tTop * dx;
          if (xTop >= 0 && xTop <= size) candidates.push({ x: xTop, y: 0 });

          const tBottom = (size - e.y) / dy;
          const xBottom = e.x + tBottom * dx;
          if (xBottom >= 0 && xBottom <= size) candidates.push({ x: xBottom, y: size });
        }

        if (candidates.length < 2) return null;
        return [candidates[0], candidates[1]];
      }

      function drawBudgetLine() {
        const segment = getBudgetLineSegment();
        if (!segment) return;

        drawLine(segment[0], segment[1], {
          color: colors.budget,
          width: 2.5,
        });
      }

      function updatePanel() {
        valueE.textContent = formatPoint(equilibrium);
        valueW.textContent = formatPoint(state.w);
        valueP.textContent = getPriceRatio();
      }

      function draw() {
        const size = getCanvasSize();
        const e = toCanvasPoint(equilibrium);
        const w = toCanvasPoint(state.w);

        ctx.clearRect(0, 0, size, size);
        drawGrid();
        drawKinkRays();
        drawBudgetLine();

        drawPoint(e, {
          fill: colors.equilibrium,
          radius: 6,
        });
        drawLabel("E*", { x: e.x + 10, y: e.y - 10 }, { color: colors.equilibrium });

        drawPoint(w, {
          fill: colors.endowment,
          stroke: colors.white,
          strokeWidth: 2,
          radius: 8,
        });
        drawLabel("W", { x: w.x + 10, y: w.y + 15 }, { color: colors.endowment });

        updatePanel();
      }

      function showMessage(text) {
        window.clearTimeout(state.messageTimer);
        message.textContent = text;

        state.messageTimer = window.setTimeout(() => {
          message.textContent = "";
        }, config.messageDurationMs);
      }

      function startDrag(event) {
        event.preventDefault();

        const pointer = getPointerPosition(event);
        const w = toCanvasPoint(state.w);
        const distance = Math.hypot(pointer.x - w.x, pointer.y - w.y);

        if (distance > config.hitRadius) return;

        state.isDragging = true;
        canvas.setPointerCapture?.(event.pointerId);
        showMessage("发生财富转移：价格调整，均衡未变！");
      }

      function doDrag(event) {
        if (!state.isDragging) return;
        event.preventDefault();

        const size = getCanvasSize();
        const pointer = getPointerPosition(event);
        const bounded = {
          x: clamp(pointer.x, 0, size),
          y: clamp(pointer.y, 0, size),
        };

        state.w = toModelPoint(bounded);
        draw();
      }

      function endDrag(event) {
        if (!state.isDragging) return;
        state.isDragging = false;
        canvas.releasePointerCapture?.(event.pointerId);
      }

      function initialize() {
        setupCanvasForHiDpi();
        draw();

        canvas.addEventListener("pointerdown", startDrag);
        canvas.addEventListener("pointermove", doDrag);
        canvas.addEventListener("pointerup", endDrag);
        canvas.addEventListener("pointercancel", endDrag);
        canvas.addEventListener("pointerleave", endDrag);

        window.addEventListener("resize", () => {
          setupCanvasForHiDpi();
          draw();
        });
      }

      initialize();
    })();
  </script>
</div>
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
