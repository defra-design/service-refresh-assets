window.flood = {}

// Filter list
window.flood.Filter = (id) => {
  const facetsContainer = document.getElementById(id).firstElementChild
  console.log(facetsContainer)

  // Mobile behavior
  const mobileMediaQuery = window.matchMedia('(max-width: 640px)')
  const mobileListener = (mobileMediaQuery) => {
    const isMobile = mobileMediaQuery.matches
    isMobile ? facetsContainer.setAttribute('aria-modal', 'true') : facetsContainer.removeAttribute('aria-modal')
    isMobile ? facetsContainer.setAttribute('tabindex', 0) : facetsContainer.removeAttribute('tabindex')
    console.log('isMobile: ' + isMobile)
  }
  mobileMediaQuery.addListener(mobileListener)
  mobileListener(mobileMediaQuery)
}

// Create filter
if (document.getElementById('filter')) {
  window.flood.Filter('filter')
}
