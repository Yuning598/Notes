# PhD Course

Course materials and notes for:

- Asset Pricing
- Corporate Finance
- Econometrics
- Microeconomics
- ProblemSet

## Structure

- `PhD-Course/book/Asset Pricing/`
- `PhD-Course/book/Corporate Finance/`
- `PhD-Course/book/Econometrics/`
- `PhD-Course/book/Microeconomic/`
- `PhD-Course/book/QE-PS/`

## Maintenance Model

- `PhD-Course/book/` is the canonical content tree.
- Keep course folders only under `book/`. Do not recreate top-level symbolic links: Windows Obsidian and Dropbox can report symlinked folders as inaccessible and block the parent vault.
- The visible book navigation has five parts: `Asset Pricing`, `Corporate Finance`, `Econometrics`, `Microeconomics`, and `ProblemSet`.
- Card notes are kept as hidden reference pages in `PhD-Course/book/_toc.yml`: they can be linked from main notes, but they should not appear in the visible sidebar.
- Keep `PhD-Course/book/_config.yml`, `PhD-Course/book/_toc.yml`, and `PhD-Course/book/intro.md` as the publication wrappers.
