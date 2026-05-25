"""Register a reusable collapsible solution directive for MyST/Sphinx."""

from docutils import nodes
from docutils.parsers.rst import Directive


class solution_block(nodes.General, nodes.Element):
    """Container node rendered as a collapsible solution block."""


class SolutionDirective(Directive):
    has_content = True

    def run(self):
        node = solution_block()
        self.state.nested_parse(self.content, self.content_offset, node)
        return [node]


def visit_solution_block_html(translator, node):
    translator.body.append('<details class="solution-block"><summary>Solution</summary>\n')


def depart_solution_block_html(translator, node):
    translator.body.append('</details>\n')


def setup(app):
    app.add_node(
        solution_block,
        html=(visit_solution_block_html, depart_solution_block_html),
    )
    app.add_directive("solution", SolutionDirective)
    return {
        "version": "0.1",
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
