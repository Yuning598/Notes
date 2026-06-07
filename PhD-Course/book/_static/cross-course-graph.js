(function () {
  "use strict";

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
    const themes = (graph.themes || []).map((theme) => ({
      id: theme.id,
      label: theme.label,
      route: theme.route || []
    }));
    const courses = graph.courses || [];
    const colors = {};
    courses.forEach((course) => {
      colors[course.id] = course.color || "#64748b";
    });
    const nodes = (graph.nodes || []).map((node) => ({
      ...node,
      examModes: node.exam_modes || node.examModes || [],
      keyTerms: node.key_terms || node.keyTerms || [],
      summary: node.summary || "",
      formula: node.formula || ""
    }));
    const edges = (graph.edges || []).map((edge) => ({
      ...edge,
      kind: edge.kind || "related"
    }));
    const relationKinds = [...new Set(edges.map((edge) => edge.kind || "related"))].sort();
    const layers = graph.layers || [
      { id: "core", label: "Core", default: true },
      { id: "chapter", label: "Chapter", default: true },
      { id: "card", label: "Card", default: false },
      { id: "problem", label: "Problem", default: true }
    ];

    return {
      title: payload.title || "QE Knowledge Graph",
      subtitle: payload.subtitle || "",
      defaultNode: graph.default_node || (nodes[0] && nodes[0].id),
      themes: [{ id: "All", label: "All themes", route: [] }, ...themes],
      themeItems: themes,
      courses,
      examFocuses: graph.exam_focuses || [],
      relationKinds,
      layers,
      colors,
      nodes,
      edges
    };
  }

  function renderShell(root, data) {
    root.innerHTML = `
      <div class="${className("app")}">
        <header class="${className("topbar")}">
          <div class="${className("heading")}">
            <h2 class="${className("title")}">${escapeHtml(data.title)}</h2>
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
          <div class="${className("filter-row")}">
            <div class="${className("chips")}" data-role="depth-chips" aria-label="Penetration depth"></div>
            <div class="${className("chips")} ${className("chips-compact")}" data-role="layer-chips" aria-label="Layer filters"></div>
          </div>
          <div class="${className("filter-row")}">
            <div class="${className("chips")} ${className("chips-compact")}" data-role="relation-chips" aria-label="Relation filters"></div>
          </div>
          <div class="${className("course-strip")}" data-role="course-filters" aria-label="Course filters"></div>
        </header>

        <main class="${className("workspace")}">
          <section class="${className("shell")}" aria-label="Interactive knowledge graph">
            <div class="${className("cy")}" data-role="cy"></div>
            <div class="${className("stats")}" aria-live="polite" data-role="stats"></div>
          </section>
          <aside class="${className("detail")}" aria-label="Node details">
            <p class="${className("detail-kicker")}" data-role="detail-kicker">Selected Node</p>
            <h2 class="${className("detail-title")}" data-role="detail-title"></h2>
            <p class="${className("summary")}" data-role="detail-summary"></p>
            <div class="${className("formula")}" data-role="detail-formula"></div>
            <div class="${className("meta-grid")}" data-role="detail-meta"></div>
            <a class="${className("link-button")}" href="#" target="_self" rel="noopener" data-role="detail-link">Open note</a>
            <div class="${className("section-title")}">Connected Concepts</div>
            <ul class="${className("neighbor-list")}" data-role="neighbors"></ul>
            <div class="${className("section-title")}">Visible Concept Index</div>
            <div class="${className("concept-index")}" data-role="concept-index"></div>
          </aside>
        </main>

        <footer class="${className("routebar")}" aria-label="Proof chain">
          <div>
            <div class="${className("routebar-label")}">Proof Chain</div>
            <div class="${className("routebar-title")}" data-role="route-title"></div>
          </div>
          <ol class="${className("route-list")}" data-role="route-list"></ol>
        </footer>
      </div>
    `;
  }

  function initGraph(root) {
    if (!window.cytoscape) {
      throw new Error("Cytoscape.js was not loaded. Check the CDN script in the built page.");
    }

    const data = normalizeData(getGraphData(root));
    renderShell(root, data);

    const cyEl = root.querySelector('[data-role="cy"]');
    const themeChips = root.querySelector('[data-role="theme-chips"]');
    const examChips = root.querySelector('[data-role="exam-chips"]');
    const depthChips = root.querySelector('[data-role="depth-chips"]');
    const layerChips = root.querySelector('[data-role="layer-chips"]');
    const relationChips = root.querySelector('[data-role="relation-chips"]');
    const courseFilters = root.querySelector('[data-role="course-filters"]');
    const searchInput = root.querySelector(`.${className("search")}`);
    const resetBtn = root.querySelector('[data-action="reset"]');
    const fitBtn = root.querySelector('[data-action="fit"]');
    const openBtn = root.querySelector('[data-action="open"]');
    const graphStats = root.querySelector('[data-role="stats"]');
    const detailKicker = root.querySelector('[data-role="detail-kicker"]');
    const detailTitle = root.querySelector('[data-role="detail-title"]');
    const detailSummary = root.querySelector('[data-role="detail-summary"]');
    const detailFormula = root.querySelector('[data-role="detail-formula"]');
    const detailMeta = root.querySelector('[data-role="detail-meta"]');
    const detailLink = root.querySelector('[data-role="detail-link"]');
    const routeTitle = root.querySelector('[data-role="route-title"]');
    const routeList = root.querySelector('[data-role="route-list"]');
    const neighborsEl = root.querySelector('[data-role="neighbors"]');
    const conceptIndex = root.querySelector('[data-role="concept-index"]');

    const nodeById = new Map(data.nodes.map((node) => [node.id, node]));
    const edgeById = data.edges.map((edge, index) => ({ ...edge, id: `edge_${index}` }));
    const adjacent = new Map(data.nodes.map((node) => [node.id, []]));
    edgeById.forEach((edge) => {
      if (adjacent.has(edge.source)) adjacent.get(edge.source).push({ id: edge.target, relation: edge.relation });
      if (adjacent.has(edge.target)) adjacent.get(edge.target).push({ id: edge.source, relation: edge.relation });
    });

    const initialTheme = "All";
    const state = {
      theme: initialTheme,
      courses: new Set(data.courses.map((course) => course.id)),
      examFocus: "All",
      depth: "all",
      layers: new Set(data.layers.filter((layer) => layer.default !== false).map((layer) => layer.id)),
      relationKinds: new Set(data.relationKinds),
      query: "",
      selected: data.defaultNode
    };

    const cy = window.cytoscape({
      container: cyEl,
      wheelSensitivity: 0.18,
      minZoom: 0.45,
      maxZoom: 2.1,
      elements: [
        ...data.nodes.map((node) => ({
          group: "nodes",
          data: {
            id: node.id,
            label: node.label,
            course: node.course,
            theme: node.theme,
            type: node.type,
            layer: node.layer || node.type || "core",
            weight: node.weight || 8,
            url: node.url,
            examModes: node.examModes,
            color: data.colors[node.course] || "#64748b"
          }
        })),
        ...edgeById.map((edge) => ({
          group: "edges",
          data: {
            id: edge.id,
            source: edge.source,
            target: edge.target,
            relation: edge.relation || "",
            kind: edge.kind || "related",
            strength: Number(edge.strength || 1)
          }
        }))
      ],
      style: [
        {
          selector: "node",
          style: {
            "background-color": "data(color)",
            "border-color": "#ffffff",
            "border-width": 2.5,
            "color": "#172033",
            "font-family": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
            "font-size": 11,
            "font-weight": 700,
            "height": "mapData(weight, 6, 18, 30, 54)",
            "label": "data(label)",
            "min-zoomed-font-size": 8,
            "overlay-opacity": 0,
            "shape": "round-rectangle",
            "text-background-color": "#ffffff",
            "text-background-opacity": 0.86,
            "text-background-padding": 3,
            "text-halign": "center",
            "text-margin-y": 4,
            "text-max-width": 92,
            "text-outline-color": "#ffffff",
            "text-outline-width": 2,
            "text-valign": "bottom",
            "text-wrap": "wrap",
            "transition-duration": "150ms",
            "width": "mapData(weight, 6, 18, 30, 54)"
          }
        },
        {
          selector: 'node[course = "Bridge"]',
          style: {
            "background-color": "#111827",
            "border-color": "#f8fafc",
            "height": "mapData(weight, 6, 18, 38, 62)",
            "shape": "ellipse",
            "width": "mapData(weight, 6, 18, 38, 62)"
          }
        },
        {
          selector: 'node[layer = "domain"]',
          style: {
            "background-color": "#0b7a75",
            "border-color": "#ffffff",
            "font-size": 12,
            "height": 64,
            "shape": "hexagon",
            "width": 64
          }
        },
        {
          selector: 'node[layer = "paper"], node[layer = "reference"]',
          style: {
            "border-color": "#e5e7eb",
            "border-width": 1.5,
            "height": "mapData(weight, 5, 12, 24, 38)",
            "shape": "round-tag",
            "width": "mapData(weight, 5, 12, 24, 38)"
          }
        },
        {
          selector: "edge",
          style: {
            "curve-style": "bezier",
            "line-color": "#a8b4c5",
            "opacity": 0.28,
            "target-arrow-shape": "none",
            "width": "mapData(strength, 1, 5, 1, 3)"
          }
        },
        {
          selector: ".hidden",
          style: {
            "display": "none"
          }
        },
        {
          selector: ".dim",
          style: {
            "opacity": 0.14
          }
        },
        {
          selector: "edge.dim",
          style: {
            "opacity": 0.06
          }
        },
        {
          selector: ".route",
          style: {
            "border-color": "#0b7a75",
            "border-width": 4
          }
        },
        {
          selector: "edge.route",
          style: {
            "line-color": "#0b7a75",
            "opacity": 0.62,
            "width": 2.4
          }
        },
        {
          selector: ".selected",
          style: {
            "border-color": "#111827",
            "border-width": 4.5,
            "z-index": 20
          }
        },
        {
          selector: ".neighbor",
          style: {
            "border-color": "#b55324",
            "border-width": 3.5,
            "z-index": 15
          }
        },
        {
          selector: "edge.focus",
          style: {
            "line-color": "#b55324",
            "color": "#334155",
            "font-size": 10,
            "font-weight": 700,
            "label": "data(relation)",
            "opacity": 0.92,
            "text-background-color": "#ffffff",
            "text-background-opacity": 0.86,
            "text-background-padding": 2,
            "text-rotation": "autorotate",
            "width": 3
          }
        },
        {
          selector: ".hide-label",
          style: {
            "label": ""
          }
        }
      ]
    });

    function themeLabel(theme) {
      return theme.id === "All" ? "All" : theme.label;
    }

    function currentFocus() {
      return data.examFocuses.find((item) => item.id === state.examFocus);
    }

    function countExamMatches(focus) {
      if (focus.id === "All") return data.nodes.length;
      return data.nodes.filter((node) => matchesExamFocus(node, focus)).length;
    }

    function matchesExamFocus(node, focus = currentFocus()) {
      if (!focus || focus.id === "All") return true;
      const haystack = [node.label, node.course, node.theme, node.type, node.summary, node.formula, ...node.keyTerms, ...node.examModes].join(" ").toLowerCase();
      return (focus.terms || []).some((term) => haystack.includes(String(term).toLowerCase()));
    }

    function matchesBaseFilters(node) {
      const themeMatch = state.theme === "All" || node.theme === state.theme;
      const courseMatch = state.courses.has(node.course);
      const examMatch = matchesExamFocus(node);
      const haystack = [node.label, node.course, node.theme, node.type, node.summary, node.formula, ...node.keyTerms, ...node.examModes].join(" ").toLowerCase();
      const queryMatch = !state.query || haystack.includes(state.query);
      const layer = node.layer || node.type || "core";
      const layerMatch = state.layers.has(layer) || Boolean(state.query);
      return themeMatch && courseMatch && examMatch && queryMatch && layerMatch;
    }

    function edgeKindVisible(edge) {
      return state.relationKinds.has(edge.kind || "related");
    }

    function relationAllowedBetween(source, target) {
      return edgeById.some((edge) => edgeKindVisible(edge) && (
        (edge.source === source && edge.target === target) ||
        (edge.source === target && edge.target === source)
      ));
    }

    function baseVisibleNodeIds() {
      return new Set(data.nodes.filter(matchesBaseFilters).map((node) => node.id));
    }

    function visibleNodeIds() {
      const base = baseVisibleNodeIds();
      if (state.depth === "all" || !base.has(state.selected)) return base;

      const maxDepth = Number(state.depth);
      const seen = new Set([state.selected]);
      const queue = [{ id: state.selected, depth: 0 }];
      while (queue.length) {
        const item = queue.shift();
        if (item.depth >= maxDepth) continue;
        (adjacent.get(item.id) || []).forEach((neighbor) => {
          if (!base.has(neighbor.id) || seen.has(neighbor.id)) return;
          if (!relationAllowedBetween(item.id, neighbor.id)) return;
          seen.add(neighbor.id);
          queue.push({ id: neighbor.id, depth: item.depth + 1 });
        });
      }
      return seen;
    }

    function currentRouteIds() {
      const selected = nodeById.get(state.selected);
      const theme = data.themeItems.find((item) => item.label === (selected && selected.theme));
      return new Set(theme ? theme.route : []);
    }

    function resolveNodeUrl(url) {
      const basePath = root.dataset.bookRoot || "../";
      return new URL(url, new URL(basePath, window.location.href)).href;
    }

    function runAllLayout() {
      const layout = cy.layout({
        name: "concentric",
        animate: false,
        avoidOverlap: true,
        concentric: (node) => {
          if (node.id() === state.selected) return 7;
          const type = node.data("type");
          const course = node.data("course");
          const layer = node.data("layer");
          if (layer === "domain") return 6;
          if (course === "Bridge") return 5;
          if (layer === "chapter") return 4;
          if (layer === "core") return 3.5;
          if (type === "problem") return 1;
          return 2 + Number(node.data("weight") || 8) / 12;
        },
        equidistant: false,
        levelWidth: () => 1.15,
        minNodeSpacing: 46,
        padding: 42
      });
      layout.on("layoutstop", () => cy.fit(cy.elements(":visible"), 42));
      layout.run();
      setTimeout(() => cy.fit(cy.elements(":visible"), 42), 80);
    }

    function runThemeLayout() {
      if (state.theme === "All") {
        runAllLayout();
        return;
      }

      const theme = data.themeItems.find((item) => item.label === state.theme);
      const route = theme ? theme.route.filter((id) => visibleNodeIds().has(id)) : [];
      const visible = data.nodes.filter(isVisibleNode);
      const extras = visible.filter((node) => !route.includes(node.id));
      const positions = {};
      const step = route.length <= 5 ? 155 : 132;
      const startX = -((route.length - 1) * step) / 2;

      route.forEach((id, index) => {
        const node = nodeById.get(id);
        positions[id] = {
          x: startX + index * step,
          y: node && node.course === "Bridge" ? -36 : 0
        };
      });

      extras.forEach((node, index) => {
        const colCount = Math.max(route.length, 1);
        positions[node.id] = {
          x: startX + (index % colCount) * step,
          y: 128 + Math.floor(index / colCount) * 90
        };
      });

      cy.layout({
        name: "preset",
        animate: false,
        padding: 38,
        positions: (ele) => positions[ele.id()] || { x: 0, y: 0 }
      }).run();
      setTimeout(() => cy.fit(cy.elements(":visible"), 44), 40);
    }

    function updateGraphClasses() {
      const visibleIds = visibleNodeIds();
      const selected = state.selected;
      const selectedVisible = visibleIds.has(selected);
      const neighborIds = new Set((adjacent.get(selected) || []).map((item) => item.id));
      const routeIds = currentRouteIds();

      cy.batch(() => {
        cy.elements().removeClass("hidden dim selected neighbor route focus hide-label");

        cy.nodes().forEach((ele) => {
          const id = ele.id();
          const visible = visibleIds.has(id);
          ele.toggleClass("hidden", !visible);
          if (!visible) return;

          const isSelected = id === selected;
          const isNeighbor = neighborIds.has(id);
          const isRoute = routeIds.has(id);
          const dim = state.theme !== "All" && selectedVisible && !isSelected && !isNeighbor && !isRoute;
          ele.toggleClass("selected", isSelected);
          ele.toggleClass("neighbor", isNeighbor);
          ele.toggleClass("route", isRoute);
          ele.toggleClass("dim", dim);
          ele.toggleClass("hide-label", !shouldShowNodeLabel(id, isSelected, isNeighbor, isRoute, dim));
        });

        cy.edges().forEach((ele) => {
          const source = ele.data("source");
          const target = ele.data("target");
          const edge = edgeById.find((item) => item.id === ele.id());
          const visible = visibleIds.has(source) && visibleIds.has(target) && edge && edgeKindVisible(edge);
          const focus = selectedVisible && (source === selected || target === selected);
          const route = routeIds.has(source) && routeIds.has(target);
          ele.toggleClass("hidden", !visible);
          ele.toggleClass("focus", visible && focus);
          ele.toggleClass("route", visible && route);
          ele.toggleClass("dim", visible && state.theme !== "All" && selectedVisible && !focus && !route);
        });
      });

      updateDetails();
      updateStats(visibleIds);
    }

    function shouldShowNodeLabel(id, isSelected, isNeighbor, isRoute, dim) {
      if (dim) return false;
      const node = nodeById.get(id);
      if (!node) return false;
      if (isSelected || isNeighbor || isRoute) return true;
      return state.theme === "All" && ["domain", "bridge"].includes(node.layer || node.type);
    }

    function selectFirstVisible() {
      const first = data.nodes.find(matchesBaseFilters);
      if (first && !matchesBaseFilters(nodeById.get(state.selected))) {
        state.selected = first.id;
      }
    }

    function selectNode(id) {
      if (!nodeById.has(id)) return;
      state.selected = id;
      updateGraphClasses();
    }

    function updateDetails() {
      const node = nodeById.get(state.selected);
      if (!node) return;

      detailKicker.textContent = `${node.course} | ${node.theme}`;
      detailTitle.textContent = node.label;
      detailSummary.textContent = node.summary || "No summary yet.";
      detailFormula.innerHTML = node.formula ? `<span>${escapeHtml(node.formula)}</span>` : "";
      detailMeta.innerHTML = `
        <div class="${className("meta-row")}"><span class="${className("meta-key")}">Type</span><span class="${className("meta-value")}">${escapeHtml(node.type)}</span></div>
        <div class="${className("meta-row")}"><span class="${className("meta-key")}">Layer</span><span class="${className("meta-value")}">${escapeHtml(node.layer || node.type || "core")}</span></div>
        <div class="${className("meta-row")}"><span class="${className("meta-key")}">Course</span><span class="${className("meta-value")}">${escapeHtml(node.course)}</span></div>
        <div class="${className("meta-row")}"><span class="${className("meta-key")}">Exam modes</span><span class="${className("meta-value")}">${escapeHtml(node.examModes.join(", "))}</span></div>
        <div class="${className("meta-row")}"><span class="${className("meta-key")}">Key terms</span><span class="${className("meta-value")}">${escapeHtml(node.keyTerms.join(", "))}</span></div>
      `;
      detailLink.href = resolveNodeUrl(node.url);
      renderRoute(node.theme);
      renderNeighbors(node);
      renderConceptIndex();
    }

    function renderRoute(themeLabelValue) {
      const theme = data.themeItems.find((item) => item.label === themeLabelValue);
      const route = theme ? theme.route : [];
      routeTitle.textContent = themeLabelValue || "All themes";
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

    function renderNeighbors(node) {
      const visibleIds = visibleNodeIds();
      const rendered = (adjacent.get(node.id) || [])
        .filter((item) => visibleIds.has(item.id))
        .filter((item) => relationAllowedBetween(node.id, item.id))
        .map((item) => {
          const neighbor = nodeById.get(item.id);
          const edge = edgeById.find((candidate) => (
            (candidate.source === node.id && candidate.target === item.id) ||
            (candidate.target === node.id && candidate.source === item.id)
          ));
          const kind = edge ? edge.kind || "related" : "related";
          return `<li><button class="${className("neighbor-button")}" type="button" data-node-id="${escapeHtml(neighbor.id)}"><strong>${escapeHtml(neighbor.label)}</strong><span class="${className("neighbor-relation")}">${escapeHtml(kind)} | ${escapeHtml(item.relation)} | ${escapeHtml(neighbor.course)}</span></button></li>`;
        })
        .join("");
      neighborsEl.innerHTML = rendered || `<li class="${className("empty")}">No visible connected nodes under the current filters.</li>`;
      neighborsEl.querySelectorAll("[data-node-id]").forEach((button) => {
        button.addEventListener("click", () => selectNode(button.dataset.nodeId));
      });
    }

    function renderConceptIndex() {
      const visibleIds = visibleNodeIds();
      const visible = data.nodes
        .filter((node) => visibleIds.has(node.id))
        .sort((a, b) => a.course.localeCompare(b.course) || b.weight - a.weight || a.label.localeCompare(b.label));
      const grouped = new Map();
      visible.forEach((node) => {
        if (!grouped.has(node.course)) grouped.set(node.course, []);
        grouped.get(node.course).push(node);
      });
      conceptIndex.innerHTML = [...grouped.entries()].map(([course, nodes]) => `
        <section class="${className("index-group")}">
          <h3>${escapeHtml(course)} <span>${nodes.length}</span></h3>
          ${nodes.map((node) => `<button class="${className("index-item")}${node.id === state.selected ? " is-active" : ""}" type="button" data-node-id="${escapeHtml(node.id)}">${escapeHtml(node.label)}</button>`).join("")}
        </section>
      `).join("");
      conceptIndex.querySelectorAll("[data-node-id]").forEach((button) => {
        button.addEventListener("click", () => selectNode(button.dataset.nodeId));
      });
    }

    function updateStats(visibleIds) {
      const visibleEdges = data.edges.filter((edge) => visibleIds.has(edge.source) && visibleIds.has(edge.target) && edgeKindVisible(edge)).length;
      const focus = currentFocus();
      const activeLayers = data.layers
        .filter((layer) => state.layers.has(layer.id))
        .map((layer) => layer.label || layer.id)
        .join(", ");
      const byCourse = data.courses
        .map((course) => `${course.label}: ${data.nodes.filter((node) => visibleIds.has(node.id) && node.course === course.id).length}`)
        .filter((item) => !item.endsWith(": 0"))
        .join(" | ");
      graphStats.innerHTML = `
        <span class="${className("stat-pill")}">${visibleIds.size} nodes</span>
        <span class="${className("stat-pill")}">${visibleEdges} links</span>
        <span class="${className("stat-pill")}">${escapeHtml(state.theme === "All" ? "all themes" : state.theme)}</span>
        <span class="${className("stat-pill")}">${escapeHtml(focus ? focus.label : "All modes")}</span>
        <span class="${className("stat-pill")}">${escapeHtml(state.depth === "all" ? "all depths" : `${state.depth}-hop`)}</span>
        <span class="${className("stat-pill")}">${escapeHtml(activeLayers || "no layers")}</span>
        <span class="${className("stat-pill")}">${escapeHtml(byCourse || "no visible course")}</span>
      `;
    }

    function refresh({ relayout = false } = {}) {
      selectFirstVisible();
      updateGraphClasses();
      if (relayout) runThemeLayout();
    }

    function createControls() {
      data.themes.forEach((theme) => {
        const value = themeLabel(theme);
        const button = document.createElement("button");
        button.type = "button";
        button.className = `${className("chip")}${value === state.theme ? " is-active" : ""}`;
        button.textContent = value === "All" ? "All themes" : value;
        button.addEventListener("click", () => {
          state.theme = value;
          [...themeChips.children].forEach((child) => child.classList.toggle("is-active", child === button));
          refresh({ relayout: true });
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
          refresh({ relayout: true });
        });
        examChips.appendChild(button);
      });

      [
        { id: "1", label: "1-hop" },
        { id: "2", label: "2-hop" },
        { id: "3", label: "3-hop" },
        { id: "all", label: "All depth" }
      ].forEach((depth) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `${className("chip")}${depth.id === state.depth ? " is-active" : ""}`;
        button.textContent = depth.label;
        button.addEventListener("click", () => {
          state.depth = depth.id;
          [...depthChips.children].forEach((child) => child.classList.toggle("is-active", child === button));
          refresh({ relayout: true });
        });
        depthChips.appendChild(button);
      });

      data.layers.forEach((layer) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `${className("chip")}${state.layers.has(layer.id) ? " is-active" : ""}`;
        button.textContent = layer.label || layer.id;
        button.dataset.count = String(data.nodes.filter((node) => (node.layer || node.type || "core") === layer.id).length);
        button.addEventListener("click", () => {
          if (state.layers.has(layer.id) && state.layers.size > 1) {
            state.layers.delete(layer.id);
            button.classList.remove("is-active");
          } else {
            state.layers.add(layer.id);
            button.classList.add("is-active");
          }
          refresh({ relayout: true });
        });
        layerChips.appendChild(button);
      });

      data.relationKinds.forEach((kind) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `${className("chip")} is-active`;
        button.textContent = kind;
        button.dataset.count = String(data.edges.filter((edge) => edge.kind === kind).length);
        button.addEventListener("click", () => {
          if (state.relationKinds.has(kind) && state.relationKinds.size > 1) {
            state.relationKinds.delete(kind);
            button.classList.remove("is-active");
          } else {
            state.relationKinds.add(kind);
            button.classList.add("is-active");
          }
          refresh({ relayout: true });
        });
        relationChips.appendChild(button);
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
          refresh({ relayout: true });
        });
        courseFilters.appendChild(label);
      });
    }

    function initInteractions() {
      cy.on("tap", "node", (event) => selectNode(event.target.id()));
      cy.on("dbltap", "node", (event) => {
        const node = nodeById.get(event.target.id());
        if (node) window.location.href = resolveNodeUrl(node.url);
      });

      searchInput.addEventListener("input", () => {
        state.query = searchInput.value.trim().toLowerCase();
        refresh({ relayout: true });
      });

      resetBtn.addEventListener("click", () => {
        state.theme = initialTheme;
        state.examFocus = "All";
        state.depth = "all";
        state.layers = new Set(data.layers.filter((layer) => layer.default !== false).map((layer) => layer.id));
        state.relationKinds = new Set(data.relationKinds);
        state.query = "";
        state.courses = new Set(data.courses.map((course) => course.id));
        state.selected = data.defaultNode;
        searchInput.value = "";
        [...themeChips.children].forEach((child) => {
          const value = child.textContent === "All themes" ? "All" : child.textContent;
          child.classList.toggle("is-active", value === initialTheme);
        });
        [...examChips.children].forEach((child, index) => child.classList.toggle("is-active", index === 0));
        [...depthChips.children].forEach((child) => child.classList.toggle("is-active", child.textContent === "All depth"));
        [...layerChips.children].forEach((child, index) => child.classList.toggle("is-active", state.layers.has(data.layers[index].id)));
        [...relationChips.children].forEach((child) => child.classList.add("is-active"));
        [...courseFilters.querySelectorAll("input")].forEach((input) => {
          input.checked = true;
        });
        refresh({ relayout: true });
      });

      fitBtn.addEventListener("click", () => cy.fit(cy.elements(":visible"), 44));
      openBtn.addEventListener("click", () => {
        const node = nodeById.get(state.selected);
        if (node) window.location.href = resolveNodeUrl(node.url);
      });
    }

    createControls();
    initInteractions();
    refresh({ relayout: true });

    window.addEventListener("resize", () => {
      cy.resize();
      cy.fit(cy.elements(":visible"), 44);
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
