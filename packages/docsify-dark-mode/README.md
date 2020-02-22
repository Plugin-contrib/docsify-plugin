# docsify-dark-mode

This is docsify plugin which enables dark mode for your docsify site

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
[![](https://data.jsdelivr.com/v1/package/npm/docsify-dark-mode/badge)](https://www.jsdelivr.com/package/npm/docsify-dark-mode)

## Installation

Add the following stylesheet along with your other stylesheets

```html
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/docsify-dark-mode@latest/dist/style.css"
/>
```

And add the following script

```html
<script src="https://cdn.jsdelivr.net/npm/docsify-dark-mode@latest/dist/index.js"></script>
```

## Configure

In your docsify config object add the following

```js
window.$docsify = {
...
darkMode : {
  dark: {
    background: '',
    toggleBtnBg: '',
    textColor: ''
  },
  light: {
    background: '',
    toggleBtnBg: '',
    textColor: ''
  }
}
...
}
```

## Default options

```js
dark: {
  background: '#1c2022',
  toggleBtnBg: '#34495e',
  textColor: '#b4b4b4'
},
light: {
  background: 'white',
  toggleBtnBg: 'var(--theme-color)',
  textColor: 'var(--theme-color)'
}
```

### Thanks it, Now enjoy :tada: your dark mode in your docsifysite

## Keeping the state of mode

As of `v0.2.0`, this plugin will keep the state of current mode being used. That means even if the browser is closed and then opened again, this plugin will remember the mode being used last times. It is achieved using `localStorage`

## Screen Shot

<p align="center">

<p>Button (in light mode) </p>
<img alt="ss" src="https://imgur.com/z4jhX61.png" width="40px" />
<br/>

<p>Button (in dark mode) </p>

<img alt="ss" src="https://imgur.com/aRVEXAG.png" width="40px" />
<br/>

<p>docsify page (ligth mode)</p>
<img alt="ss" src="https://imgur.com/LQtjAXb.png" width="400px" />

</p>

<p>docsify page (dark mode)</p>
<img alt="ss" src="https://imgur.com/OJvTbfQ.png" width="400px" />

</p>

## Contribution Guide

- Clone the repo
- start editing on `src/index.js` and `src/style.css`
- The build step using
  - Optimize the generated style using `cssnano` and `postcss`
  - Build the javascript using `rollup`
  - optimize it using `rollup-plugin-terser`
  - styling rule using `standard`
