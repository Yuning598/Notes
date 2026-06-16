(function () {
  const CARD_PATH = /\/cards\//;
  const MAX_BLOCKS = 7;
  const HOVER_DELAY = 220;
  const SKIP_SELECTOR = [
    "script",
    "style",
    "nav",
    "footer",
    ".headerlink",
    ".copybtn",
    ".toggle-button",
    ".toctree-wrapper",
    ".prev-next-area",
    ".bd-header-article",
    ".bd-toc",
    ".onlyprint",
  ].join(",");
  const CONTENT_SELECTOR = [
    "p",
    "ul",
    "ol",
    "dl",
    "table",
    "blockquote",
    "pre",
    ".admonition",
    ".proof",
    ".math",
    "mjx-container",
    "div.highlight",
  ].join(",");
  const cache = new Map();
  let popover;
  let hoverTimer;
  let activeLink;
  let activeController;

  function isDesktopPointer() {
    return !window.matchMedia("(hover: none), (pointer: coarse)").matches;
  }

  function getPopover() {
    if (popover) return popover;
    popover = document.createElement("div");
    popover.className = "card-preview-popover";
    popover.hidden = true;
    document.body.appendChild(popover);
    return popover;
  }

  function isPreviewable(link) {
    if (!isDesktopPointer()) return false;
    if (!link || !link.href) return false;
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) return false;
    return CARD_PATH.test(url.pathname) && url.pathname.endsWith(".html");
  }

  function cleanClone(node) {
    node.querySelectorAll(SKIP_SELECTOR).forEach((el) => el.remove());
    node.querySelectorAll("a").forEach((a) => {
      a.removeAttribute("href");
      a.removeAttribute("target");
    });
    return node;
  }

  function cleanText(node) {
    const clone = node.cloneNode(true);
    clone.querySelectorAll(".headerlink").forEach((el) => el.remove());
    return clone.textContent.replace(/\s+/g, " ").trim();
  }

  function getTitle(article, doc) {
    const heading = article.querySelector("h1, h2") || doc.querySelector("h1, h2");
    const title = heading ? cleanText(heading) : doc.title.replace(/#.*/, "").trim();
    return title || "Card";
  }

  function isSkippable(node) {
    if (!node?.matches) return true;
    if (node.matches(SKIP_SELECTOR)) return true;
    if (node.matches("h1, h2")) return true;
    if (node.closest?.(SKIP_SELECTOR)) return true;
    return false;
  }

  function hasPreviewContent(node) {
    if (!node || isSkippable(node)) return false;
    const text = cleanText(node);
    if (isMetadataText(text)) return false;
    return Boolean(text || node.querySelector?.("mjx-container, .math, img, table, pre"));
  }

  function isMetadataText(text) {
    return /^(Source:|导航[:：]|来源[:：]|相关章节[:：])/.test(text);
  }

  function findByHash(doc, hash) {
    if (!hash) return null;
    const id = decodeURIComponent(hash.replace(/^#/, ""));
    if (!id) return null;
    return doc.getElementById(id) || doc.getElementsByName(id)[0] || null;
  }

  function nearestPreviewRoot(node, article) {
    if (!node || node === article) return null;
    if (node.matches?.("section, .admonition, .proof, details, div[class*='solution']")) return node;
    if (node.matches?.(`${CONTENT_SELECTOR}, h3, h4, h5, h6`)) return node;
    return node.closest?.(".admonition, .proof, details, div[class*='solution'], section") || node.parentElement;
  }

  function primarySection(article) {
    const sections = Array.from(article.children || []).filter((child) => child.matches?.("section"));
    if (sections.length) return sections[0];
    return article.querySelector("section") || article;
  }

  function collectContentNodes(root) {
    const nodes = [];

    if (root.matches?.(".admonition, .proof, details, div[class*='solution']")) {
      return hasPreviewContent(root) ? [root] : nodes;
    }

    if (root.matches?.(`${CONTENT_SELECTOR}, h3, h4, h5, h6`)) {
      return hasPreviewContent(root) ? [root] : nodes;
    }

    for (const child of Array.from(root.children || [])) {
      if (isSkippable(child)) continue;

      if (child.matches?.("section")) {
        nodes.push(...collectContentNodes(child));
        continue;
      }

      if (child.matches?.("h3, h4, h5, h6")) {
        if (hasPreviewContent(child)) nodes.push(child);
        continue;
      }

      if (child.matches?.(CONTENT_SELECTOR)) {
        if (hasPreviewContent(child)) nodes.push(child);
        continue;
      }

      const inner = Array.from(child.querySelectorAll(CONTENT_SELECTOR)).filter(hasPreviewContent);
      if (inner.length) {
        nodes.push(...inner);
      } else if (hasPreviewContent(child)) {
        nodes.push(child);
      }
    }

    return nodes;
  }

  function addContent(content, nodes) {
    for (const child of nodes) {
      if (content.children.length >= MAX_BLOCKS) break;
      content.appendChild(cleanClone(child.cloneNode(true)));
    }
  }

  function extractPreview(html, url) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const article = doc.querySelector("article.bd-article") || doc.querySelector("main") || doc.body;
    const title = getTitle(article, doc);
    const content = document.createElement("div");
    content.className = "card-preview-content";

    const anchor = findByHash(doc, url.hash);
    const anchorText = anchor ? cleanText(anchor) : "";
    const root = anchor && !isMetadataText(anchorText) ? nearestPreviewRoot(anchor, article) : primarySection(article);
    const nodes = collectContentNodes(root);
    addContent(content, nodes);

    if (!content.children.length && root !== article) {
      addContent(content, collectContentNodes(primarySection(article)));
    }

    if (!content.children.length) {
      const fallback = document.createElement("p");
      fallback.textContent = title;
      content.appendChild(fallback);
    }

    return { title, content };
  }

  async function loadPreview(url, signal) {
    const key = url.href;
    if (cache.has(key)) return cache.get(key);
    const fetchUrl = new URL(url.href);
    fetchUrl.hash = "";
    const response = await fetch(fetchUrl.href, { signal, credentials: "same-origin" });
    if (!response.ok) throw new Error(`Preview fetch failed: ${response.status}`);
    const preview = extractPreview(await response.text(), url);
    cache.set(key, preview);
    return preview;
  }

  function positionPopover(link) {
    const box = getPopover();
    const rect = link.getBoundingClientRect();
    const gap = 10;
    const margin = 12;
    const width = box.offsetWidth || Math.min(544, window.innerWidth - 32);
    const height = box.offsetHeight || 220;
    let left = rect.left;
    let top = rect.bottom + gap;

    if (left + width > window.innerWidth - margin) {
      left = window.innerWidth - width - margin;
    }
    if (top + height > window.innerHeight - margin) {
      top = rect.top - height - gap;
    }
    if (top < margin) top = margin;
    if (left < margin) left = margin;

    box.style.left = `${left}px`;
    box.style.top = `${top}px`;
  }

  async function showPreview(link) {
    activeLink = link;
    activeController?.abort();
    activeController = new AbortController();
    const box = getPopover();
    box.innerHTML = '<div class="card-preview-title">Loading...</div>';
    box.hidden = false;
    positionPopover(link);

    try {
      const preview = await loadPreview(new URL(link.href), activeController.signal);
      if (activeLink !== link) return;
      box.innerHTML = "";
      const title = document.createElement("div");
      title.className = "card-preview-title";
      title.textContent = preview.title;
      box.appendChild(title);
      box.appendChild(preview.content.cloneNode(true));
      positionPopover(link);
      if (window.MathJax?.typesetPromise) {
        window.MathJax.typesetPromise([box]).catch(() => {});
      }
    } catch (error) {
      if (error.name === "AbortError") return;
      box.hidden = true;
    }
  }

  function schedulePreview(event) {
    const link = event.target.closest("a");
    if (!isPreviewable(link)) return;
    window.clearTimeout(hoverTimer);
    hoverTimer = window.setTimeout(() => showPreview(link), HOVER_DELAY);
  }

  function hidePreview() {
    window.clearTimeout(hoverTimer);
    activeLink = null;
    activeController?.abort();
    if (popover) popover.hidden = true;
  }

  function maybeHidePreview(event) {
    const next = event.relatedTarget;
    if (next && popover?.contains(next)) return;
    if (event.target.closest("a") === activeLink) hidePreview();
  }

  document.addEventListener("mouseover", schedulePreview);
  document.addEventListener("focusin", schedulePreview);
  document.addEventListener("mouseout", maybeHidePreview);
  document.addEventListener("focusout", (event) => {
    if (event.target.closest("a") === activeLink) hidePreview();
  });
  document.addEventListener("mouseover", (event) => {
    if (popover?.contains(event.target)) {
      window.clearTimeout(hoverTimer);
    }
  });
  document.addEventListener("mouseout", (event) => {
    if (popover?.contains(event.target) && !popover.contains(event.relatedTarget)) {
      hidePreview();
    }
  });
  document.addEventListener("scroll", hidePreview, true);
  window.addEventListener("resize", hidePreview);
})();
