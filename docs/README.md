# docsify-plugin

Docsify Plugins by [Aniketh Saha](https://twitter.com/__ANIX__)

## Packages

| **package**                                                                                                                  | **description**                                                     |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`docsify-changelog-plugin`](https://github.com/anikethsaha/docsify-plugin/tree/master/packages/docsify-changelog-plugin)    | Docsify plugin to add changelog to your docsify site                |
| [`docsify-top-bannner-plugin`](https://github.com/anikethsaha/docsify-plugin/tree/master/packages/docsify-top-banner-plugin) | docsify plugin to add top banner for small announcements or updates |

## Contribution

#### Code-style

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

#### Guide

- Clone the repo
- `yarn`
- `cd packages/<packages-name>`
- start editing on `src/index.js` and `src/style.styl`
- The build step using
  - the `styl -> css` using `styl` CLI
  - Optimize the generated style using `cssnano` and `postcss`
  - Build the javascript using `rollup`
  - optimize it using `rollup-plugin-terser`
  - styling rule using `standard`
