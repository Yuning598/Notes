"""Register TikZ code fences for Sphinx highlighting."""

from pygments.lexers.markup import TexLexer
from sphinx.highlighting import lexers


def setup(app):
    lexers["tikz"] = TexLexer()
    return {
        "version": "0.1",
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
