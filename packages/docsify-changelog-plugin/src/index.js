const plugin = (hook, vm) => {
  var isLS, LS_CONTENT
  if (localStorage) {
    isLS = true
  }

  window.changelogDisplayHandler = function () {
    const element = document.getElementById('CHANGELOG_RENDERER')
    element.classList.toggle('show')

    if (isLS && localStorage.getItem(LS_CONTENT) === null) {
      const elToRemove = document.getElementById('CHANGELOG_NOTIFY')
      elToRemove.remove()
      localStorage.setItem(LS_CONTENT, true)
    }
    if (document.getElementById("CHANGELOG_RENDERER").classList.contains("show")){
        window.addEventListener('click', clickoutside);
    } else {
        window.removeEventListener('click', clickoutside);
    };
  }
  let navEl = document.querySelector('nav.app-nav')
  if (navEl === null) {
    navEl = document.querySelector('nav')
    if (navEl === null) {
      console.error(
        '[Docsify-plugin-changelog] : please Write the nav element statically and set the loadNavbar option to false'
      )
      return
    }
  }
  const initiaNavlEl = navEl.outerHTML.split('\n')

  hook.ready(function () {
    // Called when the script starts running, only trigger once, no arguments,
    if (!!vm.config.changelog.path && !vm.config.loadNavbar) {
      loadDoc()
    }
  })
  hook.mounted(function() {
        // Place the setting inject into the CSS here
        // We need to first build the entire settings object
        var u = {
            path: "changelog.md",
            height: "90vh",
            width: "65%",
            heading_links: "none",
            colors: {
                button_text: "#e78931",
                button_notify: "#e78931",
                background: "#000000",
                background_high: "#070707",
                scroll_track: "#000000",
                scroll_button: "#6d6d6d",
                border_edge: "#000000",
                border_header_edge: "#e78931",
                border_shadow: "#000000",
                border_shadow_params: "0px 0px 50px 23px",
                strong_text: "#e6c409",
                strong_background: "#462200",
                p_text: "#e78931",
                blockquote_text: "#e6c409",
                list_text: "#80e42e",
                a_text: "#e6c409",
                a_background: "#070707",
                a_background_hover: "#6868687a",
                h1_background: "#070707",
                h2_background: "#070707",
                h3_background: "#070707",
                h4_background: "#070707",
            }
        };
        var a = vm.config.changelog;
        if (Object.isObject(a)) {
            u.path = a.path || u.path
            , u.width = a.width || u.width
            , u.height = a.height || u.height
            , u.heading_links = a.heading_links || u.heading_links;
            if (Object.isObject(a.colors)){
                u.colors.button_text = a.colors.button_text || u.colors.button_text
                , u.colors.button_notify = a.colors.button_notify || a.colors.button_text || u.colors.button_text
                , u.colors.list_text = a.colors.list_text || u.colors.list_text
                , u.colors.background = a.colors.background || u.colors.background
                , u.colors.background_high = a.colors.background_high || u.colors.background_high
                , u.colors.scroll_track = a.colors.scroll_track || a.colors.background || u.colors.scroll_track
                , u.colors.scroll_button = a.colors.scroll_button || u.colors.scroll_button
                , u.colors.border_edge = a.colors.border_edge || a.colors.background || u.colors.border_edge
                , u.colors.border_header_edge = a.colors.border_header_edge || a.colors.button_text || u.colors.border_header_edge
                , u.colors.border_shadow = a.colors.border_shadow || a.colors.background || u.colors.border_shadow
                , u.colors.border_shadow_params = a.colors.border_shadow_params || u.colors.border_shadow_params
                , u.colors.strong_text = a.colors.strong_text || u.colors.strong_text
                , u.colors.strong_background = a.colors.strong_background || u.colors.strong_background
                , u.colors.blockquote_text = a.colors.blockquote_text || a.colors.strong_text || u.colors.blockquote_text
                , u.colors.p_text = a.colors.p_text || a.colors.button_text || u.colors.p_text
                , u.colors.a_text = a.colors.a_text || a.colors.strong_text || u.colors.a_text
                , u.colors.a_background = a.colors.a_background || a.colors.background_high || u.colors.a_background
                , u.colors.a_background_hover = a.colors.a_background_hover || u.colors.a_background_hover
                , u.colors.h1_background = a.colors.h1_background || a.colors.background_high || u.colors.h1_background
                , u.colors.h2_background = a.colors.h2_background || a.colors.background_high || u.colors.h2_background
                , u.colors.h3_background = a.colors.h3_background || a.colors.background_high || u.colors.h3_background
                , u.colors.h4_background = a.colors.h4_background || a.colors.background_high || u.colors.h4_background;
            };
        } else {
            u.path = a
        };
        document.documentElement.style.setProperty(`--setting-changelog-width`, `${u.width}`)
        , document.documentElement.style.setProperty(`--setting-changelog-height`, `${u.height}`)
        , document.documentElement.style.setProperty(`--setting-heading-links`, `${u.heading_links}`)
        , document.documentElement.style.setProperty(`--color-button-text`, `${u.colors.button_text}`)
        , document.documentElement.style.setProperty(`--color-button-notify`, `${u.colors.button_notify}`)
        , document.documentElement.style.setProperty(`--color-background`, `${u.colors.background}`)
        , document.documentElement.style.setProperty(`--color-background-high`, `${u.colors.background_high}`)
        , document.documentElement.style.setProperty(`--color-scroll-track`, `${u.colors.scroll_track}`)
        , document.documentElement.style.setProperty(`--color-scroll-button`, `${u.colors.scroll_button}`)
        , document.documentElement.style.setProperty(`--color-border-edge`, `${u.colors.border_edge}`)
        , document.documentElement.style.setProperty(`--color-border-shadow`, `${u.colors.border_shadow}`)
        , document.documentElement.style.setProperty(`--color-border-shadow-params`, `${u.colors.border_shadow_params}`)
        , document.documentElement.style.setProperty(`--color-border-header-edge`, `${u.colors.border_header_edge}`)
        , document.documentElement.style.setProperty(`--color-strong-text`, `${u.colors.strong_text}`)
        , document.documentElement.style.setProperty(`--color-strong-background`, `${u.colors.strong_background}`)
        , document.documentElement.style.setProperty(`--color-list-text`, `${u.colors.list_text}`)
        , document.documentElement.style.setProperty(`--color-p-text`, `${u.colors.p_text}`)
        , document.documentElement.style.setProperty(`--color-blockquote-text`, `${u.colors.blockquote_text}`)
        , document.documentElement.style.setProperty(`--color-a-text`, `${u.colors.a_text}`)
        , document.documentElement.style.setProperty(`--color-a-background`, `${u.colors.a_background}`)
        , document.documentElement.style.setProperty(`--color-a-background-hover`, `${u.colors.a_background_hover}`)
        , document.documentElement.style.setProperty(`--color-h1-background`, `${u.colors.h1_background}`)
        , document.documentElement.style.setProperty(`--color-h2-background`, `${u.colors.h2_background}`)
        , document.documentElement.style.setProperty(`--color-h3-background`, `${u.colors.h3_background}`)
        , document.documentElement.style.setProperty(`--color-h4-background`, `${u.colors.h4_background}`);
        // e.config.changelog = [].concat(a,u)
        vm.config.changelog = u
    })
  
  function renderChangelog (md) {
    var html
    const normalizeMD = JSON.stringify(md)

    if (isLS && localStorage.getItem(normalizeMD)) {
      // this is an old changelog content. no need to show the RED DOT
      html = `<a href="javascript:void(0)" onClick="window.changelogDisplayHandler(); return false;" id="CHANGELOG">CHANGELOG</a>
                <div id="CHANGELOG_RENDERER">
                  <div class="CL_content">
                    <div class="CL_content-body"></div>
                  </div>
                </div>`
    } else {
      // this is new CHangelog content,
      // show the RED DOT

      html = `<a href="javascript:void(0)" onClick="window.changelogDisplayHandler(); return false;" id="CHANGELOG"><i id="CHANGELOG_NOTIFY"></i>  CHANGELOG</a>
                <div id="CHANGELOG_RENDERER">
                  <div class="CL_content">
                    <div class="CL_content-body"></div>
                  </div>
                </div>`
      LS_CONTENT = normalizeMD
    }

    navEl.innerHTML = initiaNavlEl
      .map(el => el.trim())
      .slice(1, initiaNavlEl.length - 1)
      .concat(html.split('\n').map(el => el.trim()))
      .concat(initiaNavlEl.slice(-1, -1))
      .join('\n')

    const changelogContentHTML = vm.compiler._marked.parse(md)
    const changelogPlaceHolder = document.querySelector(
      '#CHANGELOG_RENDERER .CL_content .CL_content-body'
    )

    changelogPlaceHolder.innerHTML = changelogContentHTML
  }

  function loadDoc () {
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      const md = ` ${this.responseText} \n # {docsify-ignore-all} `
      renderChangelog(md)
    }
    xhttp.open('GET', vm.config.changelog.path, true)
    xhttp.send()
  }
  
  function clickoutside(e){
      if (document.getElementById('CHANGELOG_RENDERER').contains(e.target) != true 
      && document.querySelector('nav').contains(e.target) != true 
      && document.getElementById("CHANGELOG_RENDERER").classList.contains("show")){
          document.getElementById("CHANGELOG_RENDERER").classList.remove("show");
          window.removeEventListener('click', clickoutside);
      }
  }
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)

Object.isObject = function(obj) {
    return obj && obj.constructor === this || false;
};
