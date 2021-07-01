"use strict";
window.$docsify.plugins = [].concat((t, e) => {
  var o,
    n = () => {
      document.documentElement.classList.add("transition"),
        window.setTimeout(() => {
          document.documentElement.classList.remove("transition");
        }, 800);
    },
    c = ({ background: t, toggleBtnBg: e, textColor: o, codeColor: f }) => {
      document.documentElement.style.setProperty("--docsify_dark_mode_bg", t),
        document.documentElement.style.setProperty(
          "--docsify_dark_mode_btn",
          e
        ),
        document.documentElement.style.setProperty("--text_color", o);
        document.documentElement.style.setProperty("--code_color", f)
    };
  (o = {
    dark: {
      background: "#1c2022",
      toggleBtnBg: "#34495e",
      textColor: "#b4b4b4",
      codeColor: "#3f484d"
    },
    light: {
      background: "white",
      toggleBtnBg: "var(--theme-color)",
      textColor: "var(--theme-color)",
      codeColor: "white"
    },
    ...e.config.darkMode,
  }),
    t.afterEach(function (t, e) {
      e(
        (t = ` <div id="dark_mode">\n             <input class="container_toggle" type="checkbox" id="switch" name="mode" />\n             <label for="switch">Toggle</label>\n           </div>${t}`)
      );
    }),
    t.doneEach(function () {
      var t;
      localStorage.getItem("DOCSIFY_DARK_MODE")
        ? ((t = localStorage.getItem("DOCSIFY_DARK_MODE")), c(o[`${t}`]))
        : ((t = "light"), c(o.light)),
        document
          .querySelector("input[name=mode]")
          .addEventListener("change", function () {
            "light" === t
              ? (n(),
                c(o.dark),
                localStorage.setItem("DOCSIFY_DARK_MODE", "dark"),
                (t = "dark"))
              : (n(),
                c(o.light),
                localStorage.setItem("DOCSIFY_DARK_MODE", "light"),
                (t = "light"));
          });
    });
}, window.$docsify.plugins);
