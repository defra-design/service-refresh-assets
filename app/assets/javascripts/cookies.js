var container = document.getElementById('cookie-accept')

if (container) {
  var accept = document.createElement('button')
  accept.className = 'defra-cookie-banner__button-accept'
  accept.innerText = 'Accept all cookies'
  container.parentNode.replaceChild(accept, container)

  accept.addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('cookie-message').style.display = 'none'
    document.getElementById('cookie-confirmation').removeAttribute('style')
  })

  var hide = document.getElementById('cookie-hide')

  hide.addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('cookie-banner').style.display = 'none'
  })
}

var save = document.getElementById('cookies-save')

if (save) {
  save.addEventListener('click', (e) => {
    e.preventDefault()
    var alert = document.getElementById('cookie-save-confirmation')
    alert.removeAttribute('style')
    alert.focus()
  })
}
