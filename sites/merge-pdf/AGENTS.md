# Agent Notes

## What should an agent avoid changing?

- Do not convert this app to Vite or a framework unless asked.
- Do not replace vendored libraries casually; that is a behavior and trust change.
- Do not hand-edit anything outside this app when working on it.

## What stack and conventions are mandatory here?

- Plain static HTML
- jQuery and Semantic UI from CDNs
- Vendored PDF libraries in `libs/`
- Custom CSS in `styles/style.css`

## What deployment/base-path assumptions exist?

- There is no build step
- CI copies the full folder into `sites/merge-pdf/`
- Relative asset paths in `index.html` and `libs/` must keep working when the folder is copied as-is

## Which files are the main entrypoints?

- `index.html`
- `libs/pdf-merge.js`
- `libs/pdf-lib.min.js`
- `styles/style.css`

## What kinds of changes are acceptable without asking?

- UI polish
- Bug fixes in the merge flow
- Better status messaging
- README and docs updates

## What areas are fragile, experimental, or intentionally messy?

- Dependency management is manual because libraries are vendored or CDN-loaded.
- The app is not module-based, so changes can have broader side effects.
- Any library replacement needs careful browser testing.
