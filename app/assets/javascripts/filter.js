window.flood = {}

// Filter list
window.flood.Filter = (id) => {
  const container = document.getElementById(id).querySelector('.defra-facets__container')
  const inner = container.querySelector('.defra-facets__inner')
  const showFilters = document.createElement('button')
  showFilters.className = 'defra-facets__show-filters'
  showFilters.innerHTML = 'Filters'
  const filtersCount = document.createElement('span')
  filtersCount.innerHTML = ' (1)'
  showFilters.appendChild(filtersCount)
  const closeFilters = document.createElement('button')
  closeFilters.className = 'defra-facets__close-filters'
  closeFilters.innerHTML = 'Return to results'
  const clearFilters = document.createElement('button')
  clearFilters.className = 'defra-facets__clear-filters'
  clearFilters.innerHTML = 'Clear filters'
  const filterResults = container.querySelector('.defra-facets__filter-results')
  inner.insertBefore(closeFilters, inner.firstChild)
  inner.appendChild(clearFilters)
  container.appendChild(showFilters)
  container.parentNode.insertBefore(showFilters, container.parentNode.firstChild)

  //
  // Events
  //

  // Detect mobile/non-mobile
  const mobileMediaQuery = window.matchMedia('(max-width: 640px)')
  const mobileListener = (mobileMediaQuery) => {
    const isMobile = mobileMediaQuery.matches
    isMobile ? container.setAttribute('aria-modal', 'true') : container.removeAttribute('aria-modal')
    isMobile ? container.setAttribute('tabindex', 0) : container.removeAttribute('tabindex')
    console.log('isMobile: ' + isMobile)
  }
  mobileMediaQuery.addListener(mobileListener)
  mobileListener(mobileMediaQuery)

  // Show filters (mobile only)
  showFilters.addEventListener('click', (e) => {
    e.preventDefault()
    container.setAttribute('open', true)
  })

  // Close filters (mobile only)
  closeFilters.addEventListener('click', (e) => {
    e.preventDefault()
    container.setAttribute('open', false)
  })

  // Filter results (asynchronous)
  filterResults.addEventListener('click', (e) => {
    e.preventDefault()
    container.setAttribute('open', false)
  })
}

// Create filter
if (document.getElementById('filter')) {
  window.flood.Filter('filter')
}
