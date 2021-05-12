'use strict'
// ToggleTip component

const { forEach } = window.flood.utils

const ToggleListDisplay = (container, options) => {
  const list = document.querySelector('.defra-flood-impact-list')
  const items = list.querySelectorAll(`[data-toggle-list-display-item="${options.type}"]`)
  const button = document.createElement('button')
  button.className = 'defra-button-text govuk-!-margin-bottom-2'
  button.innerText = `Show ${options.btnText}`
  button.setAttribute('aria-expanded', false)
  button.setAttribute('aria-controls', list.id)
  container.appendChild(button)

  const toggleDisplay = () => {
    forEach(items, (item) => {
      item.style.display = item.style.display === 'block' ? 'none' : 'block'
    })
  }

  //
  // Events
  //

  button.addEventListener('click', (e) => {
    button.innerText = `${button.innerText.startsWith('Show') ? 'Hide' : 'Show'} ${options.btnText}`
    button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'true' ? false : true)
    toggleDisplay()
  })
}

window.flood.createToggleListDisplay = (container, options) => {
  return ToggleListDisplay(container, options)
}
