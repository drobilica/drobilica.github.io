# drobilica.github.io

Public site artifacts for `https://drobilica.com/`.

This repository is mainly an artifact repository for the published homepage and static apps served under `sites/`.

## Repository role

- root-level files such as `index.html`, `assets/`, and `favicon.ico` are the published homepage
- `sites/` contains static app builds published under subpaths like `/cv/`, `/cyphonfilter/`, and `/github-listing/`
- many of these files are generated in other repositories and copied here for publishing

## Publishing

GitHub Pages deployment is handled by `.github/workflows/static.yml`. The workflow publishes the root site files together with the contents of `sites/`.

## Editing rules

- Treat this repository as published output first.
- Avoid manual edits in `sites/` unless the artifact is intentionally maintained here.
- If an app under `sites/` looks wrong, check its upstream source repository before editing built files directly.

## Structure

- `index.html`: published root homepage
- `assets/`: homepage asset bundle
- `sites/`: published static app artifacts served under subpaths
- `.github/workflows/static.yml`: GitHub Pages deployment workflow
