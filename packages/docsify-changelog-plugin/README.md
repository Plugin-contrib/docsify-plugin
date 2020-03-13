# docsify-changelog-plugin

This is a docsify plugin to render changelog from given path

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
[![](https://data.jsdelivr.com/v1/package/npm/docsify-changelog-plugin/badge)](https://www.jsdelivr.com/package/npm/docsify-changelog-plugin)

### Donation

<a href="https://www.buymeacoffee.com/eydPs6n" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>


## Installation

Add the following stylesheet along with your other stylesheets

```html
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/docsify-changelog-plugin@latest/dist/style.css"
/>
<link
  rel="stylesheet"
  href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
/>
```

And add the following script

```html
<script src="https://cdn.jsdelivr.net/npm/docsify-changelog-plugin@latest/dist/index.js"></script>
```

## Configure

In your docsify config object add the following

```js
window.$docsify = {
...
loadNavbar : false, // IMPORTANT
changelog : 'CHANGELOG.md' // path of your changelog, it can be remote as well
...
}
```

And add the following custom nav bar

```html
<nav></nav>
```

> Note that `loadNavbar` options should be set to `false` and if you want to extend the navbar to write your own, write it in your `index.html` as `nav` element

### Thanks it, Now enjoy :tada: your changelog integration with docsify

## New feature from `v0.5.1`

Added a red dot whenever you update the changelog source

## Screen Shot

<p align="center">

<p>When there is new update in the changelog</p>
<img alt="ss" src="https://imgur.com/WBy183t.png" width="400px" />
<br/>

<p>When there is no new update in the changelog</p>

<img alt="ss" src="https://imgur.com/0fq6pnu.png" width="400px" />
<br/>

<p>After clicking the changelog button</p>
<img alt="ss" src="https://imgur.com/Up8FIVU.png" width="400px" />

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

## Customize the styling

As an alternative to basic setup, you can pass a settings object with any or all of these values:

```
window.$docsify = {
  ...
  loadNavbar : false, // IMPORTANT - MUST INCLUDE
  changelog : {
    path: "changelog.md",
    window: {
      height: "60vh",
      width: "400px",
      portrait_height: "60vh",
      portrait_width: "400px",
      background: "#FFF",
      scroll_track: "inherit",
      scroll_button: "grey",
      border: "rgba(0, 0, 0, 0.1)",
      shadow: "rgba(0, 0, 0, .3)",
      shadow_params: "0 0 34px 15px",
      offset_right: "4vw"
    },
    button: {
      notify: "orange",
      text: "goldenrod",
      text_hover: "darkorange",
      text_transition: "1s",
      background: "inherit",
      background_hover: "grey",
      background_transition: "1s",
      brightness_hover: "100%",
      position: "absolute",
      offset_right: "0px"
    },
    header: {
      auto_links: "none",
      border_edge: "rgba(0, 0, 0, 0.1)",
      h1_text: "inherit",
      h1_background: "rgba(0, 0, 0, 0.03)",
      h1_size: "1.5rem",
      h2_text: "inherit",
      h2_background: "inherit",
      h2_size: "2rem",
      h3_text: "inherit",
      h3_background: "inherit",
      h3_size: "24px",
      h4_text: "inherit",
      h4_background: "inherit",
      h4_size: "inherit"
    },
    text: {
      all: "black",
      strong: "inherit",
      strong_background: "silver",
      p: "darkred",
      p_background: "inherit",
      blockquote: "inherit",
      blockquote_background: "inherit",
      list: "inherit",
      list_background: "inherit",
      list_icon: `"\\f00c"` // accepts "caret", "angle", "chevron", "calendar", "bars", "check", or "arrow"
    },
    link: {
      text: "inherit",
      text_hover: "orange",
      text_transition: "0.5s",
      background: "inherit",
      background_hover: "inherit",
      background_transition: "0.5s"
    }
  },
  ...
}
```

## Faq

**Is it responsive?**
Not yet! soon, I will add the styles to make it responsive

**Will it break `mergeNavbar` options?**
May be

**Can I change the style of the button and the panel?**
Not yet !, but soon it will be possible using css variable
