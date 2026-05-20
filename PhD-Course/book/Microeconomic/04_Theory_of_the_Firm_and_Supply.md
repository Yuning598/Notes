---
course: EF8070 Advanced Microeconomics
topic: Theory of the Firm and Supply
type: main-note
sources:
  - EF8070_slides.pdf: Theory of the Firm and Supply, slides 1-30
  - hmwk3_soln.pdf
  - hmwk4_soln.pdf
tags:
  - micro
  - firm
  - supply
  - production
---

# 04 Theory of the Firm and Supply

## 1. Theory of the firm: production set

:::{admonition} Definition (Production set)
A production plan is $y\in\mathbb R^L$, where positive components are outputs and negative components are inputs. The production set $Y\subseteq\mathbb R^L$ contains feasible production plans.

:::

Common assumptions:

$$
\begin{aligned}
1.\quad &0\in Y \quad \text{(possibility of inaction)},\\
2.\quad &Y \text{ is closed},\\
3.\quad &y\in Y,\ \hat y\le y \Longrightarrow \hat y\in Y \quad \text{(free disposal)},\\
4.\quad &y\in Y,\ y\ge 0 \Longrightarrow y=0 \quad \text{(no free lunch)},\\
5.\quad &Y \text{ is convex},\\
6.\quad &Y \text{ is a cone: } y\in Y,\ \lambda>0 \Longrightarrow \lambda y\in Y.
\end{aligned}
$$

Items 1--4 are the minimal regularity assumptions used in the standard theory. Items 5--6 are stronger shape restrictions used when we study convex technology and constant returns to scale.

```{raw} html
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Production Set Assumptions Visualization</title>

  <style>
    :root {
      --bg: #f6f8fb;
      --panel: #ffffff;
      --text: #1f2937;
      --muted: #64748b;
      --border: #d9e2ec;
      --grid: #edf2f7;
      --axis: #0f172a;
      --blue: #2563eb;
      --blue-soft: rgba(37, 99, 235, 0.14);
      --green: #16a34a;
      --red: #dc2626;
      --purple: #7c3aed;
      --orange: #ea580c;
      --shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
      --radius: 18px;
    }

    * {
      box-sizing: border-box;
    }

    html,
    body {
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
    }

    body {
      min-height: 100vh;
      margin: 0;
      padding: clamp(12px, 2vw, 24px);
      color: var(--text);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: radial-gradient(circle at top left, #eef4ff 0, var(--bg) 34rem);
    }

    .app {
      display: grid;
      grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.85fr);
      gap: clamp(14px, 2vw, 22px);
      align-items: start;
      width: min(100%, 1120px);
      max-width: 100%;
      margin: 0 auto;
    }

    .card {
      min-width: 0;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }

    .canvas-card {
      padding: clamp(14px, 1.8vw, 20px);
    }

    .canvas-title {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(180px, 0.8fr);
      gap: 10px 16px;
      align-items: start;
      margin-bottom: 10px;
    }

    .canvas-title h1 {
      margin: 0;
      font-size: clamp(1.02rem, 1.6vw, 1.18rem);
      line-height: 1.25;
      letter-spacing: -0.01em;
    }

    .canvas-title p {
      margin: 0;
      color: var(--muted);
      font-size: clamp(0.76rem, 1.15vw, 0.82rem);
      line-height: 1.4;
    }

    .canvas-title .title-sub {
      margin-top: 6px;
      max-width: 280px;
    }

    .canvas-title .title-note {
      max-width: 320px;
      text-align: right;
    }

    .canvas-wrap {
      position: relative;
      width: 100%;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
      border: 1px solid var(--border);
      border-radius: 14px;
    }

    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }

    .controls {
      padding: clamp(14px, 1.8vw, 20px);
      overflow: hidden;
    }

    .controls h2 {
      margin: 0 0 14px;
      padding-bottom: 10px;
      font-size: clamp(1rem, 1.5vw, 1.1rem);
      border-bottom: 2px solid var(--blue);
    }

    .toolbar {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 14px;
    }

    .toolbar button {
      min-width: 0;
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 10px 12px;
      color: var(--text);
      background: #f8fafc;
      font-weight: 700;
      font-size: 0.92rem;
      cursor: pointer;
    }

    .toolbar button:hover {
      background: #eef4ff;
      border-color: #bfd2ff;
    }

    .control-list {
      display: grid;
      gap: 10px;
    }

    .control-item {
      display: grid;
      grid-template-columns: 24px minmax(0, 1fr);
      gap: 10px;
      align-items: start;
      padding: 11px 12px;
      border: 1px solid #dbe3ef;
      border-radius: 12px;
      background: #fcfdff;
      transition: background 0.16s ease, border-color 0.16s ease;
    }

    .control-item:hover,
    .control-item:has(input:checked) {
      background: #f8fafc;
      border-color: #c9d6ea;
    }

    .control-item input {
      width: 20px;
      height: 20px;
      margin: 3px 0 0;
      accent-color: var(--blue);
      cursor: pointer;
    }

    .control-item label {
      display: block;
      overflow-wrap: anywhere;
      font-weight: 780;
      font-size: clamp(0.9rem, 1.2vw, 0.98rem);
      line-height: 1.25;
      cursor: pointer;
      user-select: none;
    }

    .control-item p {
      margin: 5px 0 0;
      color: var(--muted);
      font-size: clamp(0.76rem, 1vw, 0.82rem);
      line-height: 1.38;
      overflow-wrap: anywhere;
    }

    .formula {
      margin-top: 16px;
      padding: 12px 14px;
      color: #0f172a;
      background: #eef4ff;
      border: 1px solid #dbe7ff;
      border-radius: 12px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: clamp(0.78rem, 1.05vw, 0.95rem);
      line-height: 1.55;
      overflow-wrap: anywhere;
    }

    @media (max-width: 1100px) {
      .app {
        grid-template-columns: minmax(0, 1.05fr) minmax(260px, 0.95fr);
        width: 100%;
      }

      .control-item {
        padding: 10px;
      }
    }

    @media (max-width: 860px) {
      .app {
        grid-template-columns: 1fr;
      }

      .canvas-title {
        grid-template-columns: 1fr;
      }

      .canvas-title .title-note {
        max-width: unset;
        text-align: left;
      }
    }
  </style>
</head>

<body>
  <main class="app">
    <section class="card canvas-card" aria-label="Production set diagram">
      <div class="canvas-title">
        <div>
          <h1>Production Set Assumptions</h1>
          <p class="title-sub">净产出空间：正值表示 net output，负值表示 net input。</p>
        </div>
        <p class="title-note">
          图中固定展示一个满足六条性质的标准生产集；勾选项只用于高亮相应几何含义。
        </p>
      </div>

      <div class="canvas-wrap">
        <canvas id="productionCanvas"></canvas>
      </div>
    </section>

    <aside class="card controls" aria-label="Production set controls">
      <h2>生产集假设</h2>

      <div class="toolbar">
        <button type="button" id="selectAll">全选</button>
        <button type="button" id="clearAll">清空</button>
      </div>

      <div class="control-list" id="controlList"></div>

      <div class="formula">
        Y = { y ∈ R² : y₂ ≤ −a y₁ }, a &gt; 0
      </div>
    </aside>
  </main>

  <script>
    (() => {
      const canvas = document.querySelector("#productionCanvas");
      const ctx = canvas.getContext("2d");
      const controlList = document.querySelector("#controlList");
      const selectAllButton = document.querySelector("#selectAll");
      const clearAllButton = document.querySelector("#clearAll");

      const assumptions = [
        {
          id: "inaction",
          title: "1. 停产可能性 (Inaction)",
          desc: "原点属于生产集：0 ∈ Y。",
          color: "#0f172a",
          checked: true,
        },
        {
          id: "closed",
          title: "2. 闭集 (Closed)",
          desc: "边界 y₂ = −a y₁ 属于 Y。",
          color: "#2563eb",
          checked: true,
        },
        {
          id: "freeDisposal",
          title: "3. 自由处置 (Free disposal)",
          desc: "若 y ∈ Y 且 ŷ ≤ y，则 ŷ ∈ Y。",
          color: "#16a34a",
          checked: true,
        },
        {
          id: "noFreeLunch",
          title: "4. 无免费午餐 (No free lunch)",
          desc: "Y 与正正交体只在原点相交。",
          color: "#dc2626",
          checked: true,
        },
        {
          id: "convex",
          title: "5. 凸集 (Convex)",
          desc: "两个可行计划的 convex combination 仍可行。",
          color: "#7c3aed",
          checked: true,
        },
        {
          id: "cone",
          title: "6. 锥体 (Cone / CRS)",
          desc: "若 y ∈ Y 且 λ > 0，则 λy ∈ Y。",
          color: "#ea580c",
          checked: true,
        },
      ];

      const state = Object.fromEntries(
        assumptions.map((item) => [item.id, item.checked])
      );

      const view = {
        minX: -4,
        maxX: 3,
        minY: -3,
        maxY: 4,
        padding: 54,
      };

      const technology = {
        a: 0.65,
      };

      function getCssVar(name) {
        return getComputedStyle(document.documentElement)
          .getPropertyValue(name)
          .trim();
      }

      function setupCanvasForHiDpi() {
        const ratio = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.width = Math.round(rect.width * ratio);
        canvas.height = Math.round(rect.height * ratio);

        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

        canvas.dataset.cssWidth = rect.width;
        canvas.dataset.cssHeight = rect.height;
      }

      function cssWidth() {
        return Number(canvas.dataset.cssWidth) || canvas.clientWidth || 720;
      }

      function cssHeight() {
        return Number(canvas.dataset.cssHeight) || canvas.clientHeight || 720;
      }

      function toCanvas({ x, y }) {
        const width = cssWidth() - 2 * view.padding;
        const height = cssHeight() - 2 * view.padding;

        return {
          x: view.padding + ((x - view.minX) / (view.maxX - view.minX)) * width,
          y: view.padding + ((view.maxY - y) / (view.maxY - view.minY)) * height,
        };
      }

      function drawPath(points) {
        ctx.beginPath();
        points.forEach((point, index) => {
          const p = toCanvas(point);
          if (index === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
      }

      function drawArrow(from, to, color, width = 2, dashed = false) {
        const a = toCanvas(from);
        const b = toCanvas(to);
        const angle = Math.atan2(b.y - a.y, b.x - a.x);

        ctx.save();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = width;
        ctx.setLineDash(dashed ? [7, 6] : []);

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(
          b.x - 11 * Math.cos(angle - Math.PI / 6),
          b.y - 11 * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
          b.x - 11 * Math.cos(angle + Math.PI / 6),
          b.y - 11 * Math.sin(angle + Math.PI / 6)
        );
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      function drawLabel(text, point, options = {}) {
        const p = toCanvas(point);

        ctx.save();
        ctx.font = `${options.weight ?? 600} ${options.size ?? 14}px system-ui, sans-serif`;
        ctx.textAlign = options.align ?? "left";
        ctx.textBaseline = options.baseline ?? "middle";

        const lines = String(text).split("
");
        const lineHeight = options.lineHeight ?? 16;
        const x = p.x + (options.dx ?? 0);
        const y = p.y + (options.dy ?? 0);

        lines.forEach((line, index) => {
          const yy = y + index * lineHeight;

          if (options.halo !== false) {
            ctx.lineWidth = options.haloWidth ?? 4;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.92)";
            ctx.strokeText(line, x, yy);
          }

          ctx.fillStyle = options.color ?? "#1f2937";
          ctx.fillText(line, x, yy);
        });

        ctx.restore();
      }

      function drawDot(point, color, radius = 5) {
        const p = toCanvas(point);

        ctx.save();
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      function frontierY(x) {
        return -technology.a * x;
      }

      function drawAxes() {
        ctx.clearRect(0, 0, cssWidth(), cssHeight());

        ctx.save();
        ctx.strokeStyle = getCssVar("--grid");
        ctx.lineWidth = 1;

        for (let x = Math.ceil(view.minX); x <= Math.floor(view.maxX); x += 1) {
          const a = toCanvas({ x, y: view.minY });
          const b = toCanvas({ x, y: view.maxY });

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }

        for (let y = Math.ceil(view.minY); y <= Math.floor(view.maxY); y += 1) {
          const a = toCanvas({ x: view.minX, y });
          const b = toCanvas({ x: view.maxX, y });

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }

        ctx.restore();

        drawArrow(
          { x: view.minX, y: 0 },
          { x: view.maxX - 0.12, y: 0 },
          getCssVar("--axis"),
          2
        );

        drawArrow(
          { x: 0, y: view.minY },
          { x: 0, y: view.maxY - 0.12 },
          getCssVar("--axis"),
          2
        );

        drawLabel("y₁", { x: view.maxX - 0.38, y: -0.38 }, {
          size: 17,
          weight: 800,
        });

        drawLabel("y₂", { x: 0.18, y: view.maxY - 0.42 }, {
          size: 17,
          weight: 800,
        });

        drawLabel("net output", { x: 0.68, y: 0.34 }, {
          size: 12,
          color: "#64748b",
        });

        drawLabel("net input", { x: -3.72, y: -0.34 }, {
          size: 12,
          color: "#64748b",
        });
      }

      function drawProductionSet() {
        const upperLeft = { x: view.minX, y: frontierY(view.minX) };
        const origin = { x: 0, y: 0 };
        const lowerRight = { x: view.maxX, y: view.minY };
        const lowerLeft = { x: view.minX, y: view.minY };

        ctx.save();

        ctx.fillStyle = getCssVar("--blue-soft");
        drawPath([upperLeft, origin, lowerRight, lowerLeft]);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = getCssVar("--blue");
        ctx.lineWidth = state.closed ? 3 : 2.5;
        ctx.setLineDash(state.closed ? [] : [10, 8]);
        drawPath([upperLeft, origin, lowerRight]);
        ctx.stroke();

        ctx.restore();

        drawLabel("Y", { x: -2.85, y: -1.9 }, {
          color: getCssVar("--blue"),
          size: 22,
          weight: 850,
        });

        if (state.closed) {
          drawLabel("closed frontier", { x: -3.85, y: 3.15 }, {
            color: getCssVar("--blue"),
            size: 13,
            weight: 700,
          });
        }
      }

      function drawInaction() {
        if (!state.inaction) return;

        drawDot({ x: 0, y: 0 }, getCssVar("--axis"), 6);

        drawLabel("0 ∈ Y", { x: 0.15, y: 0.38 }, {
          size: 14,
          weight: 800,
        });
      }

      function drawFreeDisposal() {
        if (!state.freeDisposal) return;

        const y = { x: -1.35, y: 0.95 };
        const yHat = { x: -2.55, y: -0.55 };

        drawDot(y, getCssVar("--green"), 6);
        drawDot(yHat, getCssVar("--green"), 5);

        drawArrow(y, yHat, getCssVar("--green"), 2, true);

        drawLabel("y", { x: -1.10, y: 1.28 }, {
          color: getCssVar("--green"),
          size: 14,
          weight: 800,
        });

        drawLabel("ŷ ≤ y", { x: -3.22, y: -0.96 }, {
          color: getCssVar("--green"),
          size: 14,
          weight: 800,
        });
      }

      function drawNoFreeLunch() {
        if (!state.noFreeLunch) return;

        const points = [
          { x: 0, y: 0 },
          { x: view.maxX, y: 0 },
          { x: view.maxX, y: view.maxY },
          { x: 0, y: view.maxY },
        ];

        ctx.save();

        ctx.fillStyle = "rgba(220, 38, 38, 0.10)";
        drawPath(points);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = "rgba(220, 38, 38, 0.55)";
        ctx.lineWidth = 2;
        ctx.setLineDash([8, 6]);
        drawPath(points);
        ctx.closePath();
        ctx.stroke();

        ctx.restore();

        drawLabel("no free lunch", { x: 0.38, y: 3.25 }, {
          color: getCssVar("--red"),
          size: 14,
          weight: 800,
        });

        drawLabel("Y ∩ R²₊ = {0}", { x: 0.38, y: 2.92 }, {
          color: getCssVar("--red"),
          size: 13,
        });
      }

      function drawConvexity() {
        if (!state.convex) return;

        const a = { x: -2.85, y: -1.55 };
        const b = { x: -0.72, y: 0.36 };
        const combo = {
          x: 0.55 * a.x + 0.45 * b.x,
          y: 0.55 * a.y + 0.45 * b.y,
        };

        drawDot(a, getCssVar("--purple"), 5);
        drawDot(b, getCssVar("--purple"), 5);
        drawDot(combo, getCssVar("--purple"), 5);

        ctx.save();
        ctx.strokeStyle = getCssVar("--purple");
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        drawPath([a, b]);
        ctx.stroke();
        ctx.restore();

        drawLabel("convex
combination", { x: -2.85, y: -0.18 }, {
          color: getCssVar("--purple"),
          size: 12.5,
          weight: 800,
          lineHeight: 14,
        });
      }

      function drawCone() {
        if (!state.cone) return;

        const y = { x: -1.05, y: 0.68 };
        const scaledUp = { x: -3.05, y: 1.98 };
        const scaledDown = { x: -0.42, y: 0.27 };

        drawDot(y, getCssVar("--orange"), 5);

        drawArrow(y, scaledUp, getCssVar("--orange"), 2.5);
        drawArrow(y, scaledDown, getCssVar("--orange"), 2.5);

        drawLabel("λ > 1", { x: -3.42, y: 2.34 }, {
          color: getCssVar("--orange"),
          size: 13,
          weight: 800,
        });

        drawLabel("0 < λ < 1", { x: 0.02, y: 0.66 }, {
          color: getCssVar("--orange"),
          size: 12.5,
          weight: 800,
        });
      }

      function draw() {
        drawAxes();
        drawProductionSet();
        drawNoFreeLunch();
        drawFreeDisposal();
        drawConvexity();
        drawCone();
        drawInaction();
      }

      function setAllControls(value) {
        assumptions.forEach((item) => {
          state[item.id] = value;

          const input = document.querySelector(`#${item.id}`);
          if (input) input.checked = value;
        });

        draw();
      }

      function renderControls() {
        controlList.replaceChildren(
          ...assumptions.map((item) => {
            const wrapper = document.createElement("div");
            wrapper.className = "control-item";

            const input = document.createElement("input");
            input.type = "checkbox";
            input.id = item.id;
            input.checked = item.checked;

            input.addEventListener("change", () => {
              state[item.id] = input.checked;
              draw();
            });

            const text = document.createElement("div");

            const label = document.createElement("label");
            label.htmlFor = item.id;
            label.textContent = item.title;
            label.style.color = item.color;

            const desc = document.createElement("p");
            desc.textContent = item.desc;

            text.append(label, desc);
            wrapper.append(input, text);

            return wrapper;
          })
        );
      }

      function initialize() {
        renderControls();
        setupCanvasForHiDpi();
        draw();

        selectAllButton.addEventListener("click", () => setAllControls(true));
        clearAllButton.addEventListener("click", () => setAllControls(false));

        window.addEventListener("resize", () => {
          setupCanvasForHiDpi();
          draw();
        });
      }

      initialize();
    })();
  </script>
</body>
</html>
```

For a single-output firm, write the production plan as $(-x,y)$, where $x\in\mathbb R_+^{L-1}$ and $y\in\mathbb R_+$. The production function is

$$
f(x)=\max\{y:(-x,y)\in Y\}.
$$

MRTS:

$$
MRTS_{ij}(x)=\frac{f_i(x)}{f_j(x)}.
$$

:::{admonition} Production-function shape implications
The slide-level judgment belongs here, right after the definition of $f$ and before the $f \leftrightarrow Y$ equivalence:

$$
\begin{aligned}
f \text{ is quasiconcave}
\ &\implies\ \{x\in\mathbb R_+^{L-1}: f(x)\ge y\}\ \text{is convex for each }y>0,\\
\ &\implies\ MRTS_{ij}(x)\ \text{is diminishing}.
\end{aligned}
$$

If $f$ is twice differentiable, then

$$
\begin{aligned}
f \text{ is concave}
\ &\implies\ f_{ii}(x)\le 0\\
\ &\implies\ \text{diminishing marginal productivity of input }i.
\end{aligned}
$$

Under the single-output representation $Y=\{(-x,y):x\ge0,\ y\le f(x)\}$, the convexity link is

$$
Y \text{ convex}
\ \Longleftrightarrow\
f \text{ concave}.
$$
:::

## 2. Production function concavity and convex production set

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

## 3. CRS iff production set is a cone

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

## 4. Profit maximization

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

## 5. Supply and input demand comparative statics

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

## 6. Cost minimization and supply

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
