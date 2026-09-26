# Portfolio

One hand-written HTML file, plus an `llms.txt` summary for AI tools. No framework, no build
step, no tracking.

    index.html    the site: markup, styles, charts and ~120 lines of JS
    llms.txt      plain-text summary in the llms.txt format (llmstxt.org)

Live: https://abhijitkar10.github.io/portfolio/

## Design

- **Type:** Satoshi from Fontshare, at one extreme of scale for the name and small for everything else.
- **Colour:** white, black and one flat ultramarine field. No off-white "paper" ground.
- **Charts are real data** from each project: the backtest's daily equity curve, the retrieval
  experiment log, and the R² before and after a data-leak fix. Each has a table view and
  keyboard-accessible tooltips.
- **Motion** is native CSS scroll-driven animation (`animation-timeline`) behind `@supports`,
  and switched off under `prefers-reduced-motion`.

## Editing

Content is plain markup in `index.html`. The chart paths and data arrays are baked in; they only
change if a project's results change. Push to `working` and GitHub Pages redeploys.
