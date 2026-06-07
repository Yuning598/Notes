# Cross-Course Graph Data Schema

`qe_graph.yml` is the canonical graph source for the published interactive
Cross-Course map. It contains nodes, edges, filters, themes, and review routes.

## `qe_graph.yml`

Required top-level keys:

- `version`: schema version.
- `default_node`: node selected when the graph loads.
- `themes`: ordered list of themes. Each theme owns its review route.
- `courses`: ordered list of course filters and visual metadata.
- `exam_focuses`: ordered list of exam-mode filters.
- `layers`: ordered list of graph-depth layers.
- `nodes`: graph nodes.
- `edges`: graph edges.

Required node keys:

- `id`: unique stable identifier.
- `label`: display label.
- `type`: display type such as `domain`, `bridge`, `concept`, `problem`,
  `paper`, or `reference`.
- `layer`: depth layer such as `domain`, `bridge`, `core`, `chapter`, `card`,
  `theory`, `paper`, `problem`, or `reference`.
- `course`: one of the configured course ids.
- `theme`: one of the configured themes.
- `url`: HTML path from the book output root.
- `exam_modes`: searchable exam terms.
- `weight`: positive numeric display weight.

Required edge keys:

- `source`: source node id.
- `target`: target node id.
- `relation`: short edge label.
- `theme`: one of the configured themes.
- `strength`: positive numeric display strength.

Required theme keys:

- `id`: unique stable identifier.
- `label`: display label.
- `route`: ordered list of node ids for the review path.
