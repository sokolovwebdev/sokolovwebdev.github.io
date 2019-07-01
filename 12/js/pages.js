
let getCallback = document.getElementsByClassName('getcallback'),
thankModal = document.querySelector('.thank-wrapper'),
callbackModal = document.querySelector('.callback-wrapper'),
thankClose = document.querySelector('.thank-close'),
callbackClose = document.querySelector('.callback-close')


for (i = 0; i < getCallback.length; i++) {
getCallback[i].addEventListener('click', function(){
  callbackModal.style.display = "flex"
})
}
thankClose.addEventListener('click', function(){
thankModal.style.display = 'none'
})
callbackClose.addEventListener('click', function(){
callbackModal.style.display = 'none'
})