'use strict'
import 'elm-pep'
import '../components/charts'
import '../components/toggletip'
import '../components/toggle-list-display'
import '../components/nunjucks'
import '../components/map/maps'
import '../components/map/styles'
import '../components/map/layers'
import '../components/map/container'
import '../components/map/live'

// Add browser back button
window.flood.utils.addBrowserBackButton()

// Create LiveMap
window.flood.maps.createLiveMap('map', {
  btnText: 'View map',
  btnClasses: 'defra-button-map-s',
  layers: 'mv,ri,ti,gr',
  centre: JSON.parse(window.flood.model.station.coordinates).coordinates,
  selectedId: 'stations.' + window.flood.model.station.id,
  zoom: 14
})

const chart = document.querySelector('.defra-line-chart')

// Add toggleTips
const toggletips = document.querySelectorAll('.defra-toggletip')
if (toggletips) {
  toggletips.forEach(toggletip => {
    window.flood.createToggleTip(toggletip)
  })
}

// Add toggle list display for imapacts
const toggleListDisplay = document.getElementById('toggle-list-display')
if (toggleListDisplay) {
  window.flood.createToggleListDisplay(toggleListDisplay, {
    type: 'impact',
    btnText: 'historical events'
  })
}
