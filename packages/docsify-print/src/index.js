const plugin = (hooks, vm) => {
  hooks.afterEach((html, next) => {
    let showAuthCred = true
    if (
      vm.config.print &&
      typeof vm.config.print !== 'undefined' &&
      typeof vm.config.print.creditIconAuthor !== 'undefined'
    ) {
      showAuthCred = vm.config.print.creditIconAuthor
    }

    html = `
      <a  id="docsify_print_btn" onclick="printJS('printEl', 'html')">
            Print Document
            <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m156 452h200c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-200c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15zm0 0"/><path d="m156 392h200c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-200c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15zm0 0"/><path d="m477 143h-48v-108c0-19.300781-15.699219-35-35-35h-276c-19.300781 0-35 15.699219-35 35v108h-48c-19.300781 0-35 15.699219-35 35v216c0 19.300781 15.699219 35 35 35h48v48c0 19.300781 15.699219 35 35 35h276c19.300781 0 35-15.699219 35-35v-48h48c19.300781 0 35-15.699219 35-35v-216c0-19.300781-15.699219-35-35-35zm-364-108c0-2.757812 2.242188-5 5-5h276c2.757812 0 5 2.242188 5 5v108h-286zm286 379v63c0 2.757812-2.242188 5-5 5h-276c-2.757812 0-5-2.242188-5-5v-145h286zm83-20c0 2.757812-2.242188 5-5 5h-48v-82c0-8.285156-6.714844-15-15-15h-316c-8.285156 0-15 6.714844-15 15v82h-48c-2.757812 0-5-2.242188-5-5v-216c0-2.757812 2.242188-5 5-5h442c2.757812 0 5 2.242188 5 5zm0 0"/><path d="m447 223c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15 6.714844-15 15-15 15 6.714844 15 15zm0 0"/></svg>
        </a>   
        <div id="printEl">       
      ${html}
      
      </div>
      ${
        !showAuthCred
          ? ''
          : `<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`
      }
      `
    next(html)
  })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)
