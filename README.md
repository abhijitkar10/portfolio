# Portfolio

One hand-written HTML file, plus an `llms.txt` summary for AI tools. No framework, no build
step, no tracking.

    index.html    the site: markup, styles, charts and ~120 lines of JS
    llms.txt      plain-text summary in the llms.txt format (llmstxt.org)

Live: https://abhijitkar10.github.io/portfolio/

## Design

- **Components:** GitHub's [Primer](https://primer.style) design system from jsDelivr, pinned to
  `@primer/css@21.5.1` and `@primer/primitives@10.7.0`. Header, Layout, UnderlineNav, Box, Label,
  Subhead and TimelineItem are Primer components; light and dark come from Primer's themes.
- **Own CSS** covers only the charts and the tooltip, coloured with Primer tokens.
- **Charts are real data** from each project: the retrieval experiment log and the R² before and after a data-leak fix. Each has a table view and
  keyboard-accessible tooltips.

## Editing

Content is plain markup in `index.html`. The chart paths and data arrays are baked in; they only
change if a project's results change. Push to `working` and GitHub Pages redeploys.
