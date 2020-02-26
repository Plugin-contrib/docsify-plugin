# docsify-dark-mode

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
[![jsDelivr hits (/mo)](https://data.jsdelivr.com/v1/package/npm/docsify-dark-mode/badge)](https://www.jsdelivr.com/package/npm/docsify-dark-mode)

> This is a docsify plugin which enables dark mode for your docsify site

Table of contents:

- [docsify-dark-mode](#docsify-dark-mode)
  - [Installation](#installation)
  - [Configure](#configure)
    - [Defaults](#defaults)
    - [Remembering the color mode](#remembering-the-color-mode)
  - [Screenshots](#screenshots)
  - [Contributing](#contributing)

## Installation

Add the following stylesheet along with your other stylesheets:

```html
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/docsify-dark-mode@latest/dist/style.min.css"
/>
```

And add the following script:

```html
<script src="//cdn.jsdelivr.net/npm/docsify-dark-mode@latest/dist/index.min.js"></script>
```

**⚠️ by default, the color of the toggle is set to `white`. It may make the switch invisible. If that's your case, simply set the `themeColor` in your configuration to whatever color you like:**

```js
window.$docsify = {
  // your docsify configuration
  themeColor: "#42b983" // this is the default 'vue' color
};
```

## Configure

In your docsify config object add the following

```js
window.$docsify = {
  // ...
  darkMode: {
    dark: {
      background: "",
      toggleBtnBg: "",
      textColor: ""
    },
    light: {
      background: "",
      toggleBtnBg: "",
      textColor: ""
    }
  }
  // ...
};
```

### Defaults

```js
{
  dark: {
    background: "#1c2022",
    toggleBtnBg: "#34495e",
    textColor: "#b4b4b4"
  },
  light: {
    background: "white",
    toggleBtnBg: "var(--theme-color)",
    textColor: "var(--theme-color)"
  }
};
```

**That's it, now enjoy 🎉 the dark mode in your docsify site.**

### Remembering the color mode

As of `v0.2.0`, this plugin will remember the color mode set. That means that when the browser is closed and then reopened, the color mode will still be set. This is achieved via `localStorage`

## Screenshots

The toggle button in light mode.

![The toggle button in light mode.
](https://imgur.com/z4jhX61.png)

The toggle button in dark mode.

![The toggle button in dark mode.](https://imgur.com/aRVEXAG.png)

A basic docsify page in ligth mode.

![A basic docsify page in ligth mode.](https://imgur.com/LQtjAXb.png)

A basic docsify page in dark mode.

![A basic docsify page in dark mode.](https://imgur.com/OJvTbfQ.png)

## Contributing

1. Clone the repo:
   ```bash
   git clone https://github.com/anikethsaha/docsify-plugin.git
   ```
2. Install the dependencies for this particular project:
   ```bash
   cd ./packages/docsify-dark-mode/src/ && yarn i
   ```
3. Start editing the code in `packages/docsify-dark-mode/src/`.
4. To build the project, run:
   ```bash
   yarn run build
   ```
   The build steps are:
   - Optimize the generated style using `cssnano` and `postcss`
   - Build the javascript using `rollup`
   - Optimize it using `rollup-plugin-terser`
   - Fix the code style with `standard`
