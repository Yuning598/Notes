#!/usr/bin/env python3
"""Validate Cross-Course graph data used by the interactive map."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import Any
from urllib.parse import unquote

try:
    import yaml
except ImportError as exc:  # pragma: no cover - build environment guard
    raise SystemExit("PyYAML is required to validate Cross-Course graph data.") from exc


VALID_NODE_TYPES = {"bridge", "concept", "problem"}


def load_yaml(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        data = yaml.safe_load(handle)
    if not isinstance(data, dict):
        raise ValueError(f"{path} must contain a YAML mapping.")
    return data


def as_list(data: dict[str, Any], key: str, path: Path) -> list[Any]:
    value = data.get(key)
    if not isinstance(value, list):
        raise ValueError(f"{path}: `{key}` must be a list.")
    return value


def check_required(mapping: dict[str, Any], keys: set[str], label: str) -> list[str]:
    missing = sorted(key for key in keys if key not in mapping)
    return [f"{label}: missing `{key}`" for key in missing]


def note_path_exists(book_root: Path, url: str) -> bool:
    expected_source_path(book_root, url)
    return any(path.exists() for path in expected_source_candidates(book_root, url))


def expected_source_candidates(book_root: Path, url: str) -> list[Path]:
    if not url.endswith(".html"):
        return []
    md_path = book_root / unquote(url.removesuffix(".html"))
    return [md_path.with_suffix(".md"), md_path.with_suffix(".ipynb")]


def expected_source_path(book_root: Path, url: str) -> str:
    candidates = expected_source_candidates(book_root, url)
    if not candidates:
        return f"{book_root / unquote(url)}"
    return " or ".join(str(path) for path in candidates)


def validate(graph_path: Path, book_root: Path) -> list[str]:
    graph = load_yaml(graph_path)
    errors: list[str] = []

    theme_items = as_list(graph, "themes", graph_path)
    themes = {theme.get("label") for theme in theme_items if isinstance(theme, dict)}
    courses = as_list(graph, "courses", graph_path)
    course_ids = {course.get("id") for course in courses if isinstance(course, dict)}
    exam_focuses = as_list(graph, "exam_focuses", graph_path)
    focus_ids = {focus.get("id") for focus in exam_focuses if isinstance(focus, dict)}
    nodes = as_list(graph, "nodes", graph_path)
    edges = as_list(graph, "edges", graph_path)

    if graph.get("version") != 1:
        errors.append(f"{graph_path}: `version` must be 1.")
    if "All" not in focus_ids:
        errors.append(f"{graph_path}: exam_focuses must include `All`.")

    node_ids: set[str] = set()
    for index, node in enumerate(nodes):
        label = f"node[{index}]"
        if not isinstance(node, dict):
            errors.append(f"{label}: must be a mapping.")
            continue
        errors.extend(check_required(node, {"id", "label", "type", "course", "theme", "url", "exam_modes", "weight"}, label))
        node_id = node.get("id")
        if node_id in node_ids:
            errors.append(f"{label}: duplicate node id `{node_id}`.")
        if isinstance(node_id, str):
            node_ids.add(node_id)
        if node.get("type") not in VALID_NODE_TYPES:
            errors.append(f"{label}: invalid type `{node.get('type')}`.")
        if node.get("course") not in course_ids:
            errors.append(f"{label}: unknown course `{node.get('course')}`.")
        if node.get("theme") not in themes:
            errors.append(f"{label}: unknown theme `{node.get('theme')}`.")
        if not isinstance(node.get("exam_modes"), list):
            errors.append(f"{label}: `exam_modes` must be a list.")
        if not isinstance(node.get("weight"), (int, float)) or node.get("weight", 0) <= 0:
            errors.append(f"{label}: `weight` must be positive.")
        url = node.get("url")
        if isinstance(url, str) and not note_path_exists(book_root, url):
            errors.append(
                f"{label}: url target does not resolve to a source note:\n"
                f"  url: {url}\n"
                f"  expected source: {expected_source_path(book_root, url)}"
            )

    default_node = graph.get("default_node")
    if default_node not in node_ids:
        errors.append(f"{graph_path}: default_node `{default_node}` is not a node id.")

    for index, edge in enumerate(edges):
        label = f"edge[{index}]"
        if not isinstance(edge, dict):
            errors.append(f"{label}: must be a mapping.")
            continue
        errors.extend(check_required(edge, {"source", "target", "relation", "theme", "strength"}, label))
        if edge.get("source") not in node_ids:
            errors.append(f"{label}: unknown source `{edge.get('source')}`.")
        if edge.get("target") not in node_ids:
            errors.append(f"{label}: unknown target `{edge.get('target')}`.")
        if edge.get("theme") not in themes:
            errors.append(f"{label}: unknown theme `{edge.get('theme')}`.")
        if not isinstance(edge.get("strength"), (int, float)) or edge.get("strength", 0) <= 0:
            errors.append(f"{label}: `strength` must be positive.")

    theme_ids: set[str] = set()
    for index, theme in enumerate(theme_items):
        label = f"theme[{index}]"
        if not isinstance(theme, dict):
            errors.append(f"{label}: must be a mapping.")
            continue
        errors.extend(check_required(theme, {"id", "label", "route"}, label))
        theme_id = theme.get("id")
        if theme_id in theme_ids:
            errors.append(f"{label}: duplicate theme id `{theme_id}`.")
        if isinstance(theme_id, str):
            theme_ids.add(theme_id)
        steps = theme.get("route")
        if not isinstance(steps, list) or not steps:
            errors.append(f"{label}: `route` must be a non-empty list.")
            continue
        for step in steps:
            if step not in node_ids:
                errors.append(f"{label}: unknown route node `{step}`.")

    return errors


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--book-root", default="PhD-Course/book", type=Path)
    parser.add_argument("--graph", default="PhD-Course/book/Cross-Course/data/qe_graph.yml", type=Path)
    args = parser.parse_args()

    errors = validate(args.graph, args.book_root)
    if errors:
        for error in errors:
            print(error, file=sys.stderr)
        return 1
    print(f"Cross-Course graph OK: {args.graph}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
