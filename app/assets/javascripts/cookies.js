const container = document.getElementById('cookie-accept')

if (container) {
  const accept = document.createElement('button')
  accept.className = 'defra-cookie-banner__button-accept'
  accept.innerText = 'Accept all cookies'
  container.parentNode.replaceChild(accept, container)

  accept.addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('cookie-message').style.display = 'none'
    document.getElementById('cookie-confirmation').removeAttribute('style')
  })

  const hide = document.getElementById('cookie-hide')

  hide.addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('cookie-banner').style.display = 'none'
  })
}

const save = document.getElementById('cookies-save')

if (save) {
  save.addEventListener('click', (e) => {
    e.preventDefault()
    const alert = document.getElementById('cookie-save-confirmation')
    alert.focus()
  })
}
