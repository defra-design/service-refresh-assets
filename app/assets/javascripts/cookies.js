var cookieButtons = document.getElementById('cookie-buttons')

if (cookieButtons) {
  var rejectButton = document.createElement('button')
  rejectButton.className = 'defra-cookie-banner__button-reject'
  rejectButton.innerText = 'Reject analytics cookies'
  cookieButtons.insertBefore(rejectButton, cookieButtons.childNodes[0])

  var acceptButton = document.createElement('button')
  acceptButton.className = 'defra-cookie-banner__button-accept'
  acceptButton.innerText = 'Accept analytics cookies'
  cookieButtons.insertBefore(acceptButton, cookieButtons.childNodes[0])

  acceptButton.addEventListener('click', function (e) {
    e.preventDefault()
    document.getElementById('cookie-message').style.display = 'none'
    document.getElementById('cookie-confirmation-type').innerText = 'accepted'
    document.getElementById('cookie-confirmation').removeAttribute('style')
  })

  rejectButton.addEventListener('click', function (e) {
    e.preventDefault()
    document.getElementById('cookie-message').style.display = 'none'
    document.getElementById('cookie-confirmation-type').innerText = 'rejected'
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
    var alert = document.getElementById('cookie-notification')
    alert.removeAttribute('style')
    alert.focus()
  })
}
