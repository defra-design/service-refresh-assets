var container = document.getElementById('cookie-accept')

if (container) {
  var acceptButton = document.createElement('button')
  acceptButton.className = 'defra-cookie-banner__button-accept'
  acceptButton.innerText = 'Accept all cookies'
  container.parentNode.replaceChild(acceptButton, container)

  acceptButton.addEventListener('click', function (e) {
    e.preventDefault()
    document.getElementById('cookie-message').style.display = 'none'
    document.getElementById('cookie-confirmation').removeAttribute('style')
  })

  var hideButton = document.getElementById('cookie-hide')

  hideButton.addEventListener('click', function (e) {
    e.preventDefault()
    document.getElementById('cookie-banner').style.display = 'none'
  })
}

var saveButton = document.getElementById('cookies-save')

if (saveButton) {
  saveButton.addEventListener('click', function (e) {
    e.preventDefault()
    var alert = document.getElementById('cookie-save-confirmation')
    alert.removeAttribute('style')
    alert.focus()
  })
}
