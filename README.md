# Portfolio

One hand-written HTML file, plus an `llms.txt` summary for AI tools. No framework, no build
step, no tracking. About 40 lines of JavaScript, for effects only.

    index.html    the site: markup, styles and charts
    llms.txt      plain-text summary in the llms.txt format (llmstxt.org)

Live: https://abhijitkar10.github.io/portfolio/

## Design

- **Components:** GitHub's [Primer](https://primer.style) design system from jsDelivr, pinned to
  `@primer/css@21.5.1` and `@primer/primitives@10.7.0`. Header, Layout, UnderlineNav, Box, Label,
  Subhead and TimelineItem are Primer components; light and dark come from Primer's themes.
- **Layout ideas borrowed from:** brittanychiang.com (pinned left column, nav line that grows on
  hover, cards that light up), rauno.me / paco.me (restraint, one headline number per project),
  eugeneyan.com (a one-line story per project).
- **Effects:** a loading bar, cards and charts that animate in on scroll (the KYC line draws itself,
  the R² bars grow, headline numbers count up), a cursor spotlight and a reading-progress bar. JS
  only adds classes; the motion is CSS. All of it is off under `prefers-reduced-motion`.
- **Own CSS** covers only the pinned sidebar, hover effects and the charts, coloured with Primer
  tokens. Dark mode follows the visitor's system setting.
- **Charts are real data:** the retrieval experiment log and the R² before and after a data-leak
  fix. Hover tooltips are SVG `<title>` elements; each chart also has a table view.

## Editing

Content is plain markup in `index.html`. The chart paths and data arrays are baked in; they only
change if a project's results change. Push to `working` and GitHub Pages redeploys.
