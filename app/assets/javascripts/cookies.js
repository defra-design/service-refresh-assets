const container = document.getElementById('cookie-accept')

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
