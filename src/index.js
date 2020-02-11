const plugin = (hook, vm) => {
  window.changelogDisplayHandler = function() {
    const element = document.getElementById('CHANGELOG_RENDERER')
    element.classList.toggle('show')
  }
  let navEl = document.querySelector('nav.app-nav')
  if (typeof navEl === 'null') {
    navEl = document.querySelector('nav')
    if (typeof navEl === 'null') {
      console.error(
        '[Docsify-plugin-changelog] : please enable the nav bar options or add custom nav bar. \n refer the docs for more informations'
      )
    }
  }
  const initiaNavlEl = navEl.outerHTML.split('\n')

  hook.ready(function() {
    // Called when the script starts running, only trigger once, no arguments,
    if (vm.config.changelog !== undefined) {
      loadDoc()
    }
  })

  function renderChangelog(md) {
    const html = `<a href="#/" onClick="window.changelogDisplayHandler(); return false;" id="CHANGELOG">CHANGELOG</a>
                <div id="CHANGELOG_RENDERER">
                  <div class="CL_content">
                    <div class="CL_content-body"></div>
                  </div>
                </div>`

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

  function loadDoc() {
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
      const md = ` ${this.responseText} \n # {docsify-ignore-all} `
      renderChangelog(md)
    }
    xhttp.open('GET', vm.config.changelog, true)
    xhttp.send()
  }
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)
