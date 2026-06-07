(function () {
  const CARD_PATH = /\/cards\//;
  const MAX_BLOCKS = 7;
  const HOVER_DELAY = 220;
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
    node.querySelectorAll("script, style, nav, footer, .headerlink, .copybtn, .toggle-button").forEach((el) => el.remove());
    node.querySelectorAll("a").forEach((a) => {
      a.removeAttribute("href");
      a.removeAttribute("target");
    });
    return node;
  }

  function extractPreview(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const article = doc.querySelector("article.bd-article") || doc.querySelector("main") || doc.body;
    const title = article.querySelector("h1")?.textContent?.trim() || doc.title.replace(/#.*/, "").trim() || "Card";
    const content = document.createElement("div");
    content.className = "card-preview-content";

    const sourceNodes = [];
    let passedTitle = false;
    for (const child of article.children) {
      if (child.matches?.("h1")) {
        passedTitle = true;
        continue;
      }
      if (!passedTitle && article.querySelector("h1")) continue;
      if (child.matches?.("section")) {
        sourceNodes.push(...Array.from(child.children).filter((el) => !el.matches("h1, h2")));
      } else {
        sourceNodes.push(child);
      }
    }

    for (const child of sourceNodes) {
      if (content.children.length >= MAX_BLOCKS) break;
      if (child.matches?.("hr, .toctree-wrapper, .prev-next-area")) continue;
      const text = child.textContent.replace(/\s+/g, " ").trim();
      if (!text && !child.querySelector("mjx-container, .math")) continue;
      content.appendChild(cleanClone(child.cloneNode(true)));
    }

    if (!content.children.length) {
      const fallback = document.createElement("p");
      fallback.textContent = title;
      content.appendChild(fallback);
    }

    return { title, content };
  }

  async function loadPreview(url, signal) {
    const key = url.href.split("#")[0];
    if (cache.has(key)) return cache.get(key);
    const response = await fetch(key, { signal, credentials: "same-origin" });
    if (!response.ok) throw new Error(`Preview fetch failed: ${response.status}`);
    const preview = extractPreview(await response.text());
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

  document.addEventListener("mouseover", schedulePreview);
  document.addEventListener("focusin", schedulePreview);
  document.addEventListener("mouseout", (event) => {
    if (event.target.closest("a") === activeLink) hidePreview();
  });
  document.addEventListener("focusout", (event) => {
    if (event.target.closest("a") === activeLink) hidePreview();
  });
  document.addEventListener("scroll", hidePreview, true);
  window.addEventListener("resize", hidePreview);
})();
