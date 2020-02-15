function plugin (hook, vm) {
  hook.ready(function () {
    const { topBanner } = vm.config
    if (!topBanner) {
      return
    }
    const defaultTag = topBanner.defaultTag || 'span'
    const bannerContent = vm.compiler.compile(topBanner.content)
    const backgroundColor = topBanner.backgroundColor || '#deebff'
    const textColor = topBanner.textColor || '#091E42'
    const linkColor = topBanner.linkColor || textColor
    const textAlign = topBanner.textAlign || 'center'
    const bannerPosition = topBanner.position || 'fixed'
    const bannerZIndex = topBanner.zIndex || '99'
    // creating the new element
    const bannerElement = document.createElement(defaultTag)
    bannerElement.setAttribute('id', 'TOPBANNER')

    // adding bannerElement to DOM
    const placeholder = document.querySelector('body')
    placeholder.insertBefore(bannerElement, placeholder.childNodes[0])

    // add the contents
    const contentEl = document.querySelector(`${defaultTag}#TOPBANNER`)
    contentEl.innerHTML = bannerContent

    contentEl.style.backgroundColor = backgroundColor
    contentEl.style.color = textColor
    contentEl.style.position = bannerPosition
    contentEl.style.Zindex = bannerZIndex

    const contentAnchorEl = document.querySelector(`${defaultTag}#TOPBANNER a`)
    contentAnchorEl.style.color = linkColor
    bannerElement.style.textAlign = textAlign

    contentAnchorEl.addEventListener('click', e => {
      bannerElement.parentNode.removeChild(bannerElement)
    })
  })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)
