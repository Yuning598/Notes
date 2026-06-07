(function () {
  "use strict";

  const SVG_NS = "http://www.w3.org/2000/svg";

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function className(name) {
    return `cc-graph__${name}`;
  }

  function getGraphData(root) {
    const script = root.querySelector('script[type="application/json"].cc-graph-data');
    if (!script) throw new Error("Cross-Course graph data script was not found.");
    return JSON.parse(script.textContent);
  }

  function normalizeData(payload) {
    const graph = payload.graph || {};
    const themeItems = (graph.themes || []).map((theme) => {
      if (typeof theme === "string") return { id: theme, label: theme, route: [] };
      return { ...theme, route: theme.route || [] };
    });
    const courses = graph.courses || [];
    const colors = {};
    courses.forEach((course) => {
      colors[course.id] = course.color || "#64748b";
    });

    const routes = {};
    themeItems.forEach((theme) => {
      routes[theme.label] = theme.route;
    });

    const nodes = (graph.nodes || []).map((node) => ({
      ...node,
      examModes: node.exam_modes || node.examModes || []
    }));

    return {
      title: payload.title || "QE Knowledge Graph",
      subtitle: payload.subtitle || "Cross-course routes for Microeconomics, Econometrics, Asset Pricing, Corporate Finance, and problem sets.",
      defaultNode: graph.default_node || (nodes[0] && nodes[0].id),
      themes: [{ id: "All", label: "All themes", route: [] }, ...themeItems],
      themeItems,
      courses,
      examFocuses: graph.exam_focuses || [],
      colors,
      nodes,
      edges: graph.edges || [],
      reviewRoutes: routes
    };
  }

  function renderShell(root, data) {
    root.innerHTML = `
      <div class="${className("app")}">
        <header class="${className("topbar")}">
          <div class="${className("heading")}">
            <h2 class="${className("title")}">${escapeHtml(data.title)}</h2>
            <p class="${className("subtitle")}">${escapeHtml(data.subtitle)}</p>
          </div>
          <div class="${className("controls")}">
            <input class="${className("search")}" type="search" placeholder="Search concepts, courses, exam modes" aria-label="Search concepts">
            <div class="${className("actions")}">
              <button class="${className("tool-btn")}" type="button" data-action="reset">Reset</button>
              <button class="${className("tool-btn")}" type="button" data-action="fit">Fit</button>
              <button class="${className("tool-btn")} ${className("tool-btn-primary")}" type="button" data-action="open">Open</button>
            </div>
          </div>
          <div class="${className("filter-row")}">
            <div class="${className("chips")}" data-role="theme-chips" aria-label="Theme filters"></div>
            <div class="${className("chips")} ${className("chips-compact")}" data-role="exam-chips" aria-label="Exam focus filters"></div>
          </div>
          <div class="${className("course-strip")}" data-role="course-filters" aria-label="Course filters"></div>
        </header>

        <main class="${className("workspace")}">
          <section class="${className("shell")}" aria-label="Interactive knowledge graph">
            <div class="${className("active-label")}" data-role="active-label"></div>
            <svg class="${className("svg")}" role="img" aria-label="QE cross-course knowledge graph"></svg>
            <div class="${className("stats")}" aria-live="polite" data-role="stats"></div>
          </section>
          <aside class="${className("detail")}" aria-label="Node details">
            <p class="${className("detail-kicker")}" data-role="detail-kicker">Selected Node</p>
            <h2 class="${className("detail-title")}" data-role="detail-title"></h2>
            <div class="${className("meta-grid")}" data-role="detail-meta"></div>
            <a class="${className("link-button")}" href="#" target="_self" rel="noopener" data-role="detail-link">Open note</a>
            <div class="${className("section-title")}">Connected Concepts</div>
            <ul class="${className("neighbor-list")}" data-role="neighbors"></ul>
          </aside>
        </main>

        <footer class="${className("routebar")}" aria-label="Review route">
          <div>
            <div class="${className("routebar-label")}">Review Route</div>
            <div class="${className("routebar-title")}" data-role="route-title"></div>
          </div>
          <ol class="${className("route-list")}" data-role="route-list"></ol>
        </footer>
      </div>
    `;
  }

  function initGraph(root) {
    const data = normalizeData(getGraphData(root));
    renderShell(root, data);

    const svg = root.querySelector(`.${className("svg")}`);
    const themeChips = root.querySelector('[data-role="theme-chips"]');
    const examChips = root.querySelector('[data-role="exam-chips"]');
    const courseFilters = root.querySelector('[data-role="course-filters"]');
    const searchInput = root.querySelector(`.${className("search")}`);
    const resetBtn = root.querySelector('[data-action="reset"]');
    const fitBtn = root.querySelector('[data-action="fit"]');
    const openBtn = root.querySelector('[data-action="open"]');
    const activeLabel = root.querySelector('[data-role="active-label"]');
    const graphStats = root.querySelector('[data-role="stats"]');
    const detailKicker = root.querySelector('[data-role="detail-kicker"]');
    const detailTitle = root.querySelector('[data-role="detail-title"]');
    const detailMeta = root.querySelector('[data-role="detail-meta"]');
    const detailLink = root.querySelector('[data-role="detail-link"]');
    const routeTitle = root.querySelector('[data-role="route-title"]');
    const routeList = root.querySelector('[data-role="route-list"]');
    const neighborsEl = root.querySelector('[data-role="neighbors"]');

    const state = {
      theme: "All",
      courses: new Set(data.courses.map((course) => course.id)),
      examFocus: "All",
      query: "",
      selected: data.defaultNode,
      hovered: null,
      scale: 1,
      offsetX: 0,
      offsetY: 0
    };

    let width = 900;
    let height = 620;
    let draggingNode = null;
    let draggingCanvas = false;
    let lastPointer = null;

    const nodeById = new Map(data.nodes.map((node) => [node.id, node]));
    const adjacent = new Map(data.nodes.map((node) => [node.id, []]));
    data.edges.forEach((edge) => {
      if (adjacent.has(edge.source)) adjacent.get(edge.source).push({ id: edge.target, relation: edge.relation });
      if (adjacent.has(edge.target)) adjacent.get(edge.target).push({ id: edge.source, relation: edge.relation });
    });

    const themeCenters = makeThemeCenters(data.themeItems);
    const layout = data.nodes.map((node, index) => {
      const center = themeCenters.get(node.theme) || { x: 0, y: 0 };
      const route = data.reviewRoutes[node.theme] || [];
      const routeIndex = route.indexOf(node.id);
      const orbitIndex = routeIndex >= 0 ? routeIndex : index;
      const angle = (orbitIndex / Math.max(route.length, 4)) * Math.PI * 2 - Math.PI / 2;
      const radius = node.course === "Bridge" ? 0 : 88 + (orbitIndex % 2) * 28;
      return {
        ...node,
        x: center.x + Math.cos(angle) * radius,
        y: center.y + Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
        pinned: false
      };
    });
    const layoutById = new Map(layout.map((node) => [node.id, node]));

    const g = document.createElementNS(SVG_NS, "g");
    const edgeLayer = document.createElementNS(SVG_NS, "g");
    const edgeLabelLayer = document.createElementNS(SVG_NS, "g");
    const nodeLayer = document.createElementNS(SVG_NS, "g");
    g.append(edgeLayer, edgeLabelLayer, nodeLayer);
    svg.appendChild(g);

    function makeThemeCenters(themes) {
      const centers = new Map();
      const columns = 3;
      const gapX = 310;
      const gapY = 250;
      themes.forEach((theme, index) => {
        const col = index % columns;
        const row = Math.floor(index / columns);
        centers.set(theme.label, {
          x: (col - 1) * gapX,
          y: (row - 0.5) * gapY
        });
      });
      return centers;
    }

    function themeLabel(theme) {
      return typeof theme === "string" ? theme : theme.label;
    }

    function countExamMatches(focus) {
      if (focus.id === "All") return data.nodes.length;
      return data.nodes.filter((node) => matchesExamFocus(node, focus)).length;
    }

    function matchesExamFocus(node, focus = data.examFocuses.find((item) => item.id === state.examFocus)) {
      if (!focus || focus.id === "All") return true;
      const haystack = [node.label, node.course, node.theme, node.type, ...node.examModes].join(" ").toLowerCase();
      return (focus.terms || []).some((term) => haystack.includes(String(term).toLowerCase()));
    }

    function isVisible(node) {
      const themeMatch = state.theme === "All" || node.theme === state.theme;
      const courseMatch = state.courses.has(node.course);
      const examMatch = matchesExamFocus(node);
      const haystack = [node.label, node.course, node.theme, node.type, ...node.examModes].join(" ").toLowerCase();
      const queryMatch = !state.query || haystack.includes(state.query);
      return themeMatch && courseMatch && examMatch && queryMatch;
    }

    function visibleNodeIds() {
      return new Set(layout.filter(isVisible).map((node) => node.id));
    }

    function createControls() {
      data.themes.forEach((theme) => {
        const label = themeLabel(theme);
        const button = document.createElement("button");
        button.type = "button";
        button.className = `${className("chip")}${label === "All" ? " is-active" : ""}`;
        button.textContent = label === "All" ? "All themes" : label;
        button.addEventListener("click", () => {
          state.theme = label;
          [...themeChips.children].forEach((child) => child.classList.toggle("is-active", child === button));
          selectFirstVisible();
          render();
          fitGraph();
        });
        themeChips.appendChild(button);
      });

      data.examFocuses.forEach((focus) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `${className("chip")}${focus.id === state.examFocus ? " is-active" : ""}`;
        button.textContent = focus.label;
        button.dataset.count = String(countExamMatches(focus));
        button.addEventListener("click", () => {
          state.examFocus = focus.id;
          [...examChips.children].forEach((child) => child.classList.toggle("is-active", child === button));
          selectFirstVisible();
          render();
          fitGraph();
        });
        examChips.appendChild(button);
      });

      data.courses.forEach((course) => {
        const label = document.createElement("label");
        label.className = className("course-toggle");
        label.innerHTML = `
          <input type="checkbox" checked aria-label="${escapeHtml(course.label)}">
          <span class="${className("dot")}" style="background:${escapeHtml(data.colors[course.id] || "#64748b")}"></span>
          <span>${escapeHtml(course.label)}</span>
        `;
        const input = label.querySelector("input");
        input.addEventListener("change", () => {
          if (input.checked) state.courses.add(course.id);
          else state.courses.delete(course.id);
          selectFirstVisible();
          render();
          fitGraph();
        });
        courseFilters.appendChild(label);
      });
    }

    function initGraphElements() {
      edgeLayer.innerHTML = "";
      edgeLabelLayer.innerHTML = "";
      nodeLayer.innerHTML = "";

      data.edges.forEach((edge) => {
        const line = document.createElementNS(SVG_NS, "line");
        line.classList.add(className("edge"));
        line.dataset.source = edge.source;
        line.dataset.target = edge.target;
        line.setAttribute("stroke-width", String(1.1 + Number(edge.strength) * 0.45));
        edgeLayer.appendChild(line);

        const label = document.createElementNS(SVG_NS, "text");
        label.classList.add(className("edge-label"));
        label.dataset.source = edge.source;
        label.dataset.target = edge.target;
        label.textContent = edge.relation;
        edgeLabelLayer.appendChild(label);
      });

      layout.forEach((node) => {
        const group = document.createElementNS(SVG_NS, "g");
        group.classList.add(className("node"));
        group.dataset.id = node.id;
        group.setAttribute("tabindex", "0");
        group.setAttribute("role", "button");
        group.setAttribute("aria-label", node.label);

        const circle = document.createElementNS(SVG_NS, "circle");
        circle.setAttribute("r", String(7 + Math.sqrt(node.weight) * 2.1));
        circle.setAttribute("fill", data.colors[node.course] || "#64748b");

        const text = document.createElementNS(SVG_NS, "text");
        text.classList.add(className("node-label"));
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("dy", String(17 + Math.sqrt(node.weight) * 2.1));
        text.textContent = node.label;

        group.append(circle, text);
        group.addEventListener("click", (event) => {
          event.stopPropagation();
          selectNode(node.id);
        });
        group.addEventListener("keydown", (event) => {
          if (event.key === "Enter") selectNode(node.id);
          if (event.key === " " || event.key === "Spacebar") {
            event.preventDefault();
            selectNode(node.id);
          }
        });
        group.addEventListener("mouseenter", () => {
          state.hovered = node.id;
          render();
        });
        group.addEventListener("mouseleave", () => {
          state.hovered = null;
          render();
        });
        group.addEventListener("pointerdown", (event) => {
          draggingNode = node;
          node.pinned = true;
          lastPointer = pointerToGraph(event);
          group.setPointerCapture(event.pointerId);
        });
        group.addEventListener("pointerup", () => {
          draggingNode = null;
          lastPointer = null;
        });
        group.addEventListener("pointermove", (event) => {
          if (!draggingNode || draggingNode.id !== node.id) return;
          const point = pointerToGraph(event);
          node.x += point.x - lastPointer.x;
          node.y += point.y - lastPointer.y;
          node.vx = 0;
          node.vy = 0;
          lastPointer = point;
          updatePositions();
        });
        nodeLayer.appendChild(group);
      });
    }

    function resize() {
      const rect = svg.getBoundingClientRect();
      width = rect.width || 900;
      height = rect.height || 620;
      svg.setAttribute("viewBox", `${-width / 2} ${-height / 2} ${width} ${height}`);
      updateTransform();
    }

    function settleLayout(iterations = 80) {
      for (let i = 0; i < iterations; i += 1) {
        data.edges.forEach((edge) => {
          const source = layoutById.get(edge.source);
          const target = layoutById.get(edge.target);
          if (!source || !target) return;
          const dx = target.x - source.x;
          const dy = target.y - source.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const ideal = source.theme === target.theme ? 104 : 230;
          const force = (dist - ideal) * 0.003 * edge.strength;
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          if (!source.pinned) {
            source.vx += fx;
            source.vy += fy;
          }
          if (!target.pinned) {
            target.vx -= fx;
            target.vy -= fy;
          }
        });

        layout.forEach((node) => {
          const center = themeCenters.get(node.theme);
          if (center && !node.pinned) {
            const pull = node.course === "Bridge" ? 0.08 : 0.018;
            node.vx += (center.x - node.x) * pull;
            node.vy += (center.y - node.y) * pull;
          }
          if (!node.pinned) {
            node.vx *= 0.72;
            node.vy *= 0.72;
            node.x += node.vx;
            node.y += node.vy;
          }
        });
      }
      updatePositions();
    }

    function updatePositions() {
      [...edgeLayer.children].forEach((line, index) => {
        const edge = data.edges[index];
        const source = layoutById.get(edge.source);
        const target = layoutById.get(edge.target);
        if (!source || !target) return;
        line.setAttribute("x1", source.x);
        line.setAttribute("y1", source.y);
        line.setAttribute("x2", target.x);
        line.setAttribute("y2", target.y);
      });

      [...edgeLabelLayer.children].forEach((label, index) => {
        const edge = data.edges[index];
        const source = layoutById.get(edge.source);
        const target = layoutById.get(edge.target);
        if (!source || !target) return;
        label.setAttribute("x", (source.x + target.x) / 2);
        label.setAttribute("y", (source.y + target.y) / 2 - 4);
      });

      [...nodeLayer.children].forEach((group) => {
        const node = layoutById.get(group.dataset.id);
        group.setAttribute("transform", `translate(${node.x},${node.y})`);
      });
    }

    function render() {
      const visibleIds = visibleNodeIds();
      const focusId = state.hovered || state.selected;
      const neighborIds = new Set((adjacent.get(focusId) || []).map((item) => item.id));
      const routeIds = new Set(data.reviewRoutes[nodeById.get(state.selected)?.theme] || []);
      const focusVisible = visibleIds.has(focusId);

      [...nodeLayer.children].forEach((group) => {
        const id = group.dataset.id;
        const visible = visibleIds.has(id);
        group.classList.toggle("is-hidden", !visible);
        group.classList.toggle("is-focus", id === state.selected);
        group.classList.toggle("is-hover", id === state.hovered);
        group.classList.toggle("is-route", routeIds.has(id));
        const dim = focusVisible && id !== focusId && !neighborIds.has(id) && !routeIds.has(id);
        group.classList.toggle("is-dim", dim);
      });

      [...edgeLayer.children].forEach((line) => {
        const source = line.dataset.source;
        const target = line.dataset.target;
        const visible = visibleIds.has(source) && visibleIds.has(target);
        const focus = focusVisible && (source === focusId || target === focusId);
        const route = routeIds.has(source) && routeIds.has(target);
        line.classList.toggle("is-hidden", !visible);
        line.classList.toggle("is-focus", focus);
        line.classList.toggle("is-route", route);
        line.classList.toggle("is-dim", focusVisible && !focus && !route);
      });

      [...edgeLabelLayer.children].forEach((label) => {
        const source = label.dataset.source;
        const target = label.dataset.target;
        const visible = visibleIds.has(source) && visibleIds.has(target);
        const focus = focusVisible && (source === focusId || target === focusId);
        label.classList.toggle("is-hidden", !visible || !focus);
      });

      updateDetails();
      updateStats(visibleIds);
    }

    function updateDetails() {
      const node = nodeById.get(state.selected);
      if (!node) return;
      detailKicker.textContent = `${node.course} | ${node.theme}`;
      detailTitle.textContent = node.label;
      detailMeta.innerHTML = `
        <div class="${className("meta-row")}"><span class="${className("meta-key")}">Type</span><span class="${className("meta-value")}">${escapeHtml(node.type)}</span></div>
        <div class="${className("meta-row")}"><span class="${className("meta-key")}">Course</span><span class="${className("meta-value")}">${escapeHtml(node.course)}</span></div>
        <div class="${className("meta-row")}"><span class="${className("meta-key")}">Exam modes</span><span class="${className("meta-value")}">${escapeHtml(node.examModes.join(", "))}</span></div>
      `;
      detailLink.href = resolveNodeUrl(node.url);
      renderRoute(node.theme);

      const visibleIds = visibleNodeIds();
      const neighbors = adjacent.get(node.id) || [];
      const rendered = neighbors
        .filter((item) => visibleIds.has(item.id))
        .map((item) => {
          const neighbor = nodeById.get(item.id);
          return `<li><button class="${className("neighbor-button")}" type="button" data-node-id="${escapeHtml(neighbor.id)}"><strong>${escapeHtml(neighbor.label)}</strong><span class="${className("neighbor-relation")}">${escapeHtml(item.relation)} | ${escapeHtml(neighbor.course)}</span></button></li>`;
        })
        .join("");
      neighborsEl.innerHTML = rendered || `<li class="${className("empty")}">No visible connected nodes under the current filters.</li>`;
      neighborsEl.querySelectorAll("[data-node-id]").forEach((button) => {
        button.addEventListener("click", () => selectNode(button.dataset.nodeId));
      });
    }

    function renderRoute(theme) {
      const route = data.reviewRoutes[theme] || [];
      routeTitle.textContent = theme || "All themes";
      routeList.innerHTML = route.map((id, index) => {
        const item = nodeById.get(id);
        if (!item) return "";
        const active = id === state.selected ? " is-active" : "";
        return `
          <li>
            <button class="${className("route-button")}${active}" type="button" data-node-id="${escapeHtml(item.id)}">
              <span class="${className("route-step")}">${index + 1}</span>
              <span>
                <strong>${escapeHtml(item.label)}</strong>
                <span class="${className("route-course")}">${escapeHtml(item.course)}</span>
              </span>
            </button>
          </li>
        `;
      }).join("");
      routeList.querySelectorAll("[data-node-id]").forEach((button) => {
        button.addEventListener("click", () => selectNode(button.dataset.nodeId));
      });
    }

    function updateStats(visibleIds) {
      const visibleEdges = data.edges.filter((edge) => visibleIds.has(edge.source) && visibleIds.has(edge.target)).length;
      const focus = data.examFocuses.find((item) => item.id === state.examFocus);
      activeLabel.textContent = `${state.theme === "All" ? "All themes" : state.theme} | ${focus ? focus.label : "All modes"}`;
      graphStats.innerHTML = `
        <span class="${className("stat-pill")}">${visibleIds.size} nodes</span>
        <span class="${className("stat-pill")}">${visibleEdges} links</span>
        <span class="${className("stat-pill")}">${escapeHtml(state.theme === "All" ? "all themes" : state.theme)}</span>
        <span class="${className("stat-pill")}">${escapeHtml(focus ? focus.label : "All modes")}</span>
      `;
    }

    function selectFirstVisible() {
      const visible = layout.find(isVisible);
      if (visible && !isVisible(layoutById.get(state.selected))) {
        state.selected = visible.id;
      }
    }

    function selectNode(id) {
      state.selected = id;
      render();
    }

    function resolveNodeUrl(url) {
      const basePath = root.dataset.bookRoot || "../";
      return new URL(url, new URL(basePath, window.location.href)).href;
    }

    function openSelectedNode() {
      const node = nodeById.get(state.selected);
      if (!node) return;
      window.location.href = resolveNodeUrl(node.url);
    }

    function updateTransform() {
      g.setAttribute("transform", `translate(${state.offsetX},${state.offsetY}) scale(${state.scale})`);
    }

    function fitGraph() {
      const visible = layout.filter(isVisible);
      if (!visible.length) return;
      const xs = visible.map((node) => node.x);
      const ys = visible.map((node) => node.y);
      const minX = Math.min(...xs);
      const maxX = Math.max(...xs);
      const minY = Math.min(...ys);
      const maxY = Math.max(...ys);
      const graphW = Math.max(1, maxX - minX + 220);
      const graphH = Math.max(1, maxY - minY + 180);
      state.scale = Math.max(0.68, Math.min(1.32, Math.min(width / graphW, height / graphH)));
      state.offsetX = -((minX + maxX) / 2) * state.scale;
      state.offsetY = -((minY + maxY) / 2) * state.scale;
      updateTransform();
    }

    function pointerToGraph(event) {
      const point = svg.createSVGPoint();
      point.x = event.clientX;
      point.y = event.clientY;
      const transformed = point.matrixTransform(svg.getScreenCTM().inverse());
      return {
        x: (transformed.x - state.offsetX) / state.scale,
        y: (transformed.y - state.offsetY) / state.scale
      };
    }

    function initInteractions() {
      searchInput.addEventListener("input", () => {
        state.query = searchInput.value.trim().toLowerCase();
        selectFirstVisible();
        render();
      });

      resetBtn.addEventListener("click", () => {
        state.theme = "All";
        state.examFocus = "All";
        state.query = "";
        searchInput.value = "";
        state.courses = new Set(data.courses.map((course) => course.id));
        state.selected = data.defaultNode;
        [...themeChips.children].forEach((child, index) => child.classList.toggle("is-active", index === 0));
        [...examChips.children].forEach((child, index) => child.classList.toggle("is-active", index === 0));
        [...courseFilters.querySelectorAll("input")].forEach((input) => {
          input.checked = true;
        });
        layout.forEach((node) => {
          node.pinned = false;
        });
        settleLayout(40);
        fitGraph();
        render();
      });

      fitBtn.addEventListener("click", fitGraph);
      openBtn.addEventListener("click", openSelectedNode);

      svg.addEventListener("pointerdown", (event) => {
        if (event.target.closest && event.target.closest(`.${className("node")}`)) return;
        draggingCanvas = true;
        lastPointer = { x: event.clientX, y: event.clientY };
        svg.setPointerCapture(event.pointerId);
      });
      svg.addEventListener("pointermove", (event) => {
        if (!draggingCanvas) return;
        state.offsetX += event.clientX - lastPointer.x;
        state.offsetY += event.clientY - lastPointer.y;
        lastPointer = { x: event.clientX, y: event.clientY };
        updateTransform();
      });
      svg.addEventListener("pointerup", () => {
        draggingCanvas = false;
        lastPointer = null;
      });
      svg.addEventListener("wheel", (event) => {
        event.preventDefault();
        const delta = event.deltaY < 0 ? 1.08 : 0.92;
        state.scale = Math.max(0.45, Math.min(2.2, state.scale * delta));
        updateTransform();
      }, { passive: false });
    }

    createControls();
    initGraphElements();
    initInteractions();
    resize();
    settleLayout();
    fitGraph();
    render();
    window.addEventListener("resize", () => {
      resize();
      fitGraph();
    });
  }

  function initAll() {
    document.querySelectorAll(".cc-graph").forEach((root) => {
      if (root.dataset.initialized === "true") return;
      root.dataset.initialized = "true";
      try {
        initGraph(root);
      } catch (error) {
        root.innerHTML = `<p class="${className("empty")}">Cross-Course graph failed to load: ${escapeHtml(error.message)}</p>`;
        throw error;
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
