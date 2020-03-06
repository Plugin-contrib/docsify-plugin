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
    if (!!vm.config.changelog && !vm.config.loadNavbar) {
      loadDoc()
    }
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
    xhttp.open('GET', vm.config.changelog, true)
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
