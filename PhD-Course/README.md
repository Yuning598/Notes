# PhD Course

Course materials and notes for:

- Asset Pricing
- Corporate Finance
- Econometrics
- Microeconomics
- ProblemSet

## Structure

- `book/Asset Pricing/`
- `book/Corporate Finance/`
- `book/Econometrics/`
- `book/Microeconomic/`
- `book/QE-PS/`

## Maintenance Model

- `book/` is the canonical content tree.
- Keep course folders only under `book/`. Do not recreate top-level symbolic links: Windows Obsidian and Dropbox can report symlinked folders as inaccessible and block the parent vault.
- The visible book navigation has five parts: `Asset Pricing`, `Corporate Finance`, `Econometrics`, `Microeconomics`, and `ProblemSet`.
- Card notes are kept as hidden reference pages in `book/_toc.yml`: they can be linked from main notes, but they should not appear in the visible sidebar.
- Keep `book/_config.yml`, `book/_toc.yml`, and `book/intro.md` as the publication wrappers.
