window.flood = {}

// Filter list
window.flood.Filter = (id) => {
  const facetsContainer = document.getElementById(id).firstElementChild
  console.log(facetsContainer)
  // Mobile behavior
  const mobileMediaQuery = window.matchMedia('(max-width: 640px)')
  const mobileListener = (mobileMediaQuery) => {
    const isMobile = mobileMediaQuery.matches
    facetsContainer.setAttribute('aria-modal', isMobile)
    facetsContainer.setAttribute('tabindex', isMobile ? 0 : -1)
    console.log('isMobile: ' + isMobile)
  }
  mobileMediaQuery.addListener(mobileListener)
  mobileListener(mobileMediaQuery)
}

// Create filter
if (document.getElementById('filter')) {
  window.flood.Filter('filter')
}
