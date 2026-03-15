# Merge PDF

## What is this app?

Merge PDF is a static browser app that merges multiple PDF files into one document entirely on the client side.

## Who is it for?

It is for users who need a quick PDF merge tool without uploading files to a server.

## What problem does it solve?

It provides a privacy-friendly, zero-backend way to combine PDF files in the browser.

## How do I run it locally?

This app does not use Vite.

1. `cd merge-pdf`
2. Serve the directory with any static file server, for example `python3 -m http.server 4173`
3. Open `http://localhost:4173`

The main runtime lives in `index.html`, `libs/pdf-merge.js`, and `styles/style.css`.

## How do I build and deploy it?

There is no build step. CI copies the entire directory as a static site into `sites/merge-pdf/`.

If you make changes, verify them by serving the folder locally. Deployment happens by pushing to `main`, after which the downstream site repo receives the copied files.

## What makes this app different from the others in the repo?

It is the only app here that is intentionally plain static HTML, CSS, and browser scripts without Vite or a package manifest.

## What is unfinished or intentionally out of scope?

- There is no PDF splitting, compression, signing, or reordering UI beyond the current merge flow.
- Third-party libraries are vendored directly in `libs/`.
- There are no tests or package-managed dependencies.
