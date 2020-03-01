# docsify-print

This is docsify plugin which enables dark mode for your docsify site

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
[![](https://data.jsdelivr.com/v1/package/npm/docsify-print/badge)](https://www.jsdelivr.com/package/npm/docsify-print)

## Installation

Add the following stylesheet along with your other stylesheets

```html
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/docsify-print@latest/dist/style.css"
/>
```

And add the following script

```html
<script src="https://printjs-4de6.kxcdn.com/print.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/docsify-print@latest/dist/index.js"></script>
```

## Change the position of the button

The `print document` label is position using absolute positioning and values are passed as CSS var. You can change the position by changing the value of the css var

css var used with default values are

```css
--docsify-print-top: 0;
--docsify-print-left: unset;
--docsify-print-right: unset;
--docsify-print-bottom: unset;
```

### Thanks it, Now enjoy :tada: your dark mode in your docsifysite

## Screen Shot

<p align="center">

<img alt="ss" src="https://imgur.com/6gtucOP.png" width="200px" />
<br/>

</p>

## Contribution Guide

- Clone the repo
- start editing on `src/index.js` and `src/style.css`
- The build step using
  - Optimize the generated style using `cssnano` and `postcss`
  - Build the javascript using `rollup`
  - optimize it using `rollup-plugin-terser`
  - styling rule using `standard`
