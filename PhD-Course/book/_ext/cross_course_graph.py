"""Render Cross-Course graph data through a reusable MyST directive."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from docutils import nodes
from docutils.parsers.rst import Directive, directives
from sphinx.util.osutil import relative_uri

try:
    import yaml
except ImportError as exc:  # pragma: no cover - build environment guard
    yaml = None
    YAML_IMPORT_ERROR = exc
else:
    YAML_IMPORT_ERROR = None


class cross_course_graph_node(nodes.General, nodes.Element):
    """Container node rendered as an interactive Cross-Course graph."""


class CrossCourseGraphDirective(Directive):
    has_content = False
    option_spec = {
        "data": directives.unchanged_required,
        "height": directives.unchanged,
        "title": directives.unchanged,
        "subtitle": directives.unchanged,
    }

    def run(self):
        if yaml is None:
            raise self.error(
                "PyYAML is required for the cross-course-graph directive."
            ) from YAML_IMPORT_ERROR

        env = self.state.document.settings.env
        srcdir = Path(env.srcdir)
        graph_path = (srcdir / self.options["data"]).resolve()
        env.note_dependency(str(graph_path))

        graph = load_yaml(graph_path)
        validate_payload(graph, graph_path)

        node = cross_course_graph_node()
        node["payload"] = {
            "graph": graph,
            "title": self.options.get("title", "QE Knowledge Graph"),
            "subtitle": self.options.get(
                "subtitle",
                "Common restrictions behind Microeconomics, Econometrics, Asset Pricing, Corporate Finance, and problem sets.",
            ),
        }
        node["height"] = self.options.get("height", "760px")
        return [node]


def load_yaml(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        data = yaml.safe_load(handle)
    if not isinstance(data, dict):
        raise ValueError(f"{path} must contain a YAML mapping.")
    return data


def validate_payload(
    graph: dict[str, Any],
    graph_path: Path,
) -> None:
    nodes_data = graph.get("nodes")
    edges = graph.get("edges")
    themes = graph.get("themes")
    if not isinstance(nodes_data, list) or not nodes_data:
        raise ValueError(f"{graph_path}: `nodes` must be a non-empty list.")
    if not isinstance(edges, list):
        raise ValueError(f"{graph_path}: `edges` must be a list.")
    if not isinstance(themes, list) or not themes:
        raise ValueError(f"{graph_path}: `themes` must be a non-empty list.")

    node_ids = {node.get("id") for node in nodes_data if isinstance(node, dict)}
    default_node = graph.get("default_node")
    if default_node not in node_ids:
        raise ValueError(
            f"{graph_path}: default_node `{default_node}` is not a node id."
        )

    for edge in edges:
        if not isinstance(edge, dict):
            raise ValueError(f"{graph_path}: every edge must be a mapping.")
        if edge.get("source") not in node_ids or edge.get("target") not in node_ids:
            raise ValueError(f"{graph_path}: edge references unknown node: {edge}.")

    for theme in themes:
        if not isinstance(theme, dict):
            raise ValueError(f"{graph_path}: every theme must be a mapping.")
        for step in theme.get("route", []):
            if step not in node_ids:
                raise ValueError(
                    f"{graph_path}: theme `{theme.get('id')}` route references unknown node `{step}`."
                )


def visit_cross_course_graph_html(translator, node):
    builder = translator.builder
    current_page = builder.current_docname + ".html"
    book_root = relative_uri(current_page, "index.html").removesuffix("index.html") or "./"
    payload = json.dumps(node["payload"], ensure_ascii=False).replace("</", "<\\/")
    height = node.get("height", "760px")
    translator.body.append(
        f'<div class="cc-graph" data-book-root="{book_root}" style="height:{height}">'
        f'<script type="application/json" class="cc-graph-data">{payload}</script>'
        "</div>"
    )


def depart_cross_course_graph_html(translator, node):
    pass


def setup(app):
    app.add_css_file("cross-course-graph.css")
    app.add_js_file(
        "https://cdn.jsdelivr.net/npm/cytoscape@3.33.4/dist/cytoscape.min.js",
        defer="defer",
    )
    app.add_js_file("cross-course-graph.js", defer="defer")
    app.add_node(
        cross_course_graph_node,
        html=(visit_cross_course_graph_html, depart_cross_course_graph_html),
    )
    app.add_directive("cross-course-graph", CrossCourseGraphDirective)
    return {
        "version": "0.1",
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
