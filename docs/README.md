# docsify-plugin

Docsify Plugins by [Aniketh Saha](https://twitter.com/__ANIX__)

### Donation

<a href="https://www.buymeacoffee.com/eydPs6n" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

## Packages

| **package**                  | **description**                                                     | **Hits**                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `docsify-changelog-plugin`   | Docsify plugin to add changelog to your docsify site                | [![](https://data.jsdelivr.com/v1/package/npm/docsify-changelog-plugin/badge)](https://www.jsdelivr.com/package/npm/docsify-changelog-plugin)   |
| `docsify-top-bannner-plugin` | Docsify plugin to add top banner for small announcements or updates | [![](https://data.jsdelivr.com/v1/package/npm/docsify-top-banner-plugin/badge)](https://www.jsdelivr.com/package/npm/docsify-top-banner-plugin) |
| `docsify-dark-mode`          | Docsify plugin to add dark mode in your docsify site                | [![](https://data.jsdelivr.com/v1/package/npm/docsify-dark-mode/badge)](https://www.jsdelivr.com/package/npm/docsify-dark-mode)                 |
| `docsify-print`              | Docsify plugin to add a print button in your docsify site           | [![](https://data.jsdelivr.com/v1/package/npm/docsify-print/badge)](https://www.jsdelivr.com/package/npm/docsify-print)                         |
| `docsify-enhanced-theme`     | Docsify plugin to add a print button in your docsify site           | [![](https://data.jsdelivr.com/v1/package/npm/docsify-enhanced-theme/badge)](https://www.jsdelivr.com/package/npm/docsify-enhanced-theme)       |

## Contribution

#### Code-style

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/anikethsaha/docsify-plugin)

#### Guide

- Clone the repo
- `yarn`
- `cd packages/<packages-name>`
- start editing on `src/index.js` and `src/style.css`
- The build step using
  - the `styl -> css` using `styl` CLI
  - Optimize the generated style using `cssnano` and `postcss`
  - Build the javascript using `rollup`
  - optimize it using `rollup-plugin-terser`
  - styling rule using `standard`
