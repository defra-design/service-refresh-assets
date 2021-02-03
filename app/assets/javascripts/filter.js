window.flood = {}

// Filter list
window.flood.Filter = (id) => {
  const facetsContainer = document.getElementById(id).querySelector('.defra-facets__container')
  const showFiltersButton = document.createElement('button')
  showFiltersButton.className = 'defra-facets__show-filters'
  showFiltersButton.innerHTML = 'Filters'
  const filtersCount = document.createElement('span')
  filtersCount.innerHTML = ' (1)'
  showFiltersButton.appendChild(filtersCount)
  facetsContainer.appendChild(showFiltersButton)
  facetsContainer.parentNode.insertBefore(showFiltersButton, facetsContainer.parentNode.firstChild)

  //
  // Events
  //

  showFiltersButton.addEventListener('click', () => {
    facetsContainer.setAttribute('open', true)
  })

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
