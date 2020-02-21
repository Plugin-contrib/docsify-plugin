# docsify-top-banner-plugin

Get a pretty banner probably used for notifying announcements and updates

<p align="center">

<img alt="ss" src="https://imgur.com/md5J8rw.png" width="400px" />

</p>

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
[![](https://data.jsdelivr.com/v1/package/npm/docsify-top-banner-plugin/badge)](https://www.jsdelivr.com/package/npm/docsify-top-banner-plugin)

### Donation

<a href="https://www.buymeacoffee.com/eydPs6n" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

## Installation

Add the following stylesheet along with your other stylesheets

```html
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/docsify-top-banner-plugin@latest/dist/style.css"
/>
```

And add the following script

```html
<script src="https://cdn.jsdelivr.net/npm/docsify-top-banner-plugin@latest/dist/index.js"></script>
```

## Configure

In your docsify config object add the following

```js
window.$docsify = {
...
topBanner: {
   options
},
...
}
```

## Options

### `content`

Type : `String`

Default : none

It is the content which will be render as the top banner

> NOTE: it should be a single line content

> NOTE: It cant be empty! leaving empty will simply render an empty banner

### `defaultTag`

Type : `String`

Default : 'span'

the html tag which will be added in the DOM to render the banner

### `position`

Type : `String`

Default : 'fixed'

This is the banner's CSS `position` property.

### `backgroundColor`

Type : `String`

Default : `'#deebff'`

The background color of the banner

### `zIndex`

Type : `String`

Default : `99`

The `z-index` of the banner

> Recommended : Use position `relative` and `zIndex` = `-1` when you have repo config in your docsify

### `textColor`

Type : `String`

Default : `'#091E42'`

The primary text color of the banner

### `linkColor`

Type : `String`

Default : `value of textColor`

The primary text color of the anchor tag inside the banner

### `textAlign`

Type : `String`

Default : `center`

Alignment of the content of the banner

## Screen Shot

<p align="center">

<img alt="ss" src="https://imgur.com/iVMzbYQ.png" width="400px" />
<br/>
<img alt="ss" src="https://imgur.com/uF8N2uf.png" width="400px" />

</p>

## Contribution Guide

- Clone the repo
- start editing on `src/index.js` and `src/style.styl`
- The build step using
  - the `styl -> css` using `styl` CLI
  - Optimize the generated style using `cssnano` and `postcss`
  - Build the javascript using `rollup`
  - optimize it using `rollup-plugin-terser`
  - styling rule using `standard`
