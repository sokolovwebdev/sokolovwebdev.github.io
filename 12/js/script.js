let range1 = document.getElementById('range1'),
  number1 = document.getElementById('number1'),
  range2 = document.getElementById('range2'),
  number2 = document.getElementById('number2'),
  result = document.getElementById('result')

range1.addEventListener('input', function () {
  number1.innerText = range1.value + ' руб.'
  getResult()
})
range2.addEventListener('input', function () {
  year = Math.floor(range2.value / 12)
  if (year === 0) {
    number2.innerText = Math.floor(range2.value % 12) + ' мес.'
  }
  else if (year === 1) {
    if (Math.floor(range2.value % 12) === 0) {
      number2.innerText = year + ' год '
    } else {
      number2.innerText = year + ' год ' + Math.floor(range2.value % 12) + ' мес.'
    }
  }
  else if (year === 5) {
    number2.innerText = year + ' лет '
  }
  else {
    if (Math.floor(range2.value % 12) === 0) {
      number2.innerText = year + ' годa '
    }
    else {
      number2.innerText = year + ' годa ' + Math.floor(range2.value % 12) + ' мес.'
    }
  }
  getResult()
})
function getResult() {
  proValue = 2.5 / 100
  result.value = range1.value * proValue + ' руб.'
}

let quizwrapper = document.querySelector('.quiz-wrapper'),
  quizclose1 = document.getElementById('quiz-close1'),
  quizclose2 = document.getElementById('quiz-close2'),
  quizclose3 = document.getElementById('quiz-close3'),
  quizclose4 = document.getElementById('quiz-close4'),
  quizclose5 = document.getElementById('quiz-close5'),
  quizstart = document.querySelector('.quiz-start'),
  quizP1 = document.getElementById('quizP1'),
  quizN1 = document.getElementById('quizN1'),
  quizP2 = document.getElementById('quizP2'),
  quizN2 = document.getElementById('quizN2'),
  quizP3 = document.getElementById('quizP3'),
  quizN3 = document.getElementById('quizN3'),
  quizP4 = document.getElementById('quizP4'),
  quizN4 = document.getElementById('quizN4'),
  quiz1 = document.getElementById('quiz1'),
  quiz2 = document.getElementById('quiz2'),
  quiz3 = document.getElementById('quiz3'),
  quiz4 = document.getElementById('quiz4'),
  contactChoice11 = document.getElementById('contactChoice11'),
  contactChoice12 = document.getElementById('contactChoice12'),
  contactChoice13 = document.getElementById('contactChoice13'),
  contactChoice14 = document.getElementById('contactChoice14'),
  contactChoice21 = document.getElementById('contactChoice21'),
  contactChoice22 = document.getElementById('contactChoice22'),
  contactChoice23 = document.getElementById('contactChoice23'),
  contactChoice24 = document.getElementById('contactChoice24'),
  contactChoice31 = document.getElementById('contactChoice31'),
  contactChoice32 = document.getElementById('contactChoice32'),
  contactChoice33 = document.getElementById('contactChoice33'),
  contactChoice34 = document.getElementById('contactChoice34'),
  contactChoice41 = document.getElementById('contactChoice41'),
  contactChoice42 = document.getElementById('contactChoice42'),
  contactChoice43 = document.getElementById('contactChoice43'),
  contactChoice44 = document.getElementById('contactChoice44')
  quizThank = document.querySelector('.quiz-thank')







  



contactChoice41.addEventListener('click', function () {
  quiz4.style.display = "none"
  quizThank.style.display = "flex"
  contactChoice41.setAttribute('checked')

})
contactChoice42.addEventListener('click', function () {
  quiz4.style.display = "none"
  quizThank.style.display = "flex"

})
contactChoice43.addEventListener('click', function () {
  quiz4.style.display = "none"
  quizThank.style.display = "flex"

})
contactChoice44.addEventListener('click', function () {
  quiz4.style.display = "none"
  quizThank.style.display = "flex"
})












quizN1.addEventListener('click', function () {
  if(contactChoice11.checked || contactChoice12.checked || contactChoice13.checked || contactChoice14.checked){
    quiz1.style.display = "none"
    quiz2.style.display = "block"
  } else{
    alert('Выберете пожалуйста один из вариантов')
  }
})
quizN2.addEventListener('click', function () {
  if(contactChoice21.checked || contactChoice22.checked || contactChoice23.checked || contactChoice24.checked){
    quiz2.style.display = "none"
    quiz3.style.display = "block"
  } else{
    alert('Выберете пожалуйста один из вариантов')
  }
})
quizN3.addEventListener('click', function () {
  if(contactChoice31.checked || contactChoice32.checked || contactChoice33.checked || contactChoice34.checked){
    quiz3.style.display = "none"
    quiz4.style.display = "block"
  } else{
    alert('Выберете пожалуйста один из вариантов')
  }
})
quizN4.addEventListener('click', function () {
  if(contactChoice41.checked || contactChoice42.checked || contactChoice43.checked || contactChoice44.checked){
    quiz4.style.display = "none"
    quizThank.style.display = "flex"
  } else{
    alert('Выберете пожалуйста один из вариантов')
  }
})
quizP2.addEventListener('click', function () {
  quiz2.style.display = "none"
  quiz1.style.display = "block"
})
quizP3.addEventListener('click', function () {
  quiz3.style.display = "none"
  quiz2.style.display = "block"
})
quizP4.addEventListener('click', function () {
  quiz4.style.display = "none"
  quiz3.style.display = "block"
})


quizclose1.addEventListener('click', function () {
  quizwrapper.style.display = "none"
})
quizclose2.addEventListener('click', function () {
  quizwrapper.style.display = "none"
})
quizclose3.addEventListener('click', function () {
  quizwrapper.style.display = "none"
})
quizclose4.addEventListener('click', function () {
  quizwrapper.style.display = "none"
})
quizclose5.addEventListener('click', function () {
  quizwrapper.style.display = "none"
  quizThank.style.display = "none"

})
quizstart.addEventListener('click', function () {
  quizwrapper.style.display = "block"
  quiz1.style.display = "block"
})
document.getElementById('myoption1').onclick = function () {
  document.getElementById('contactChoice14').checked = !0
}
document.getElementById('myoption2').onclick = function () {
  document.getElementById('contactChoice24').checked = !0
}
document.getElementById('myoption3').onclick = function () {
  document.getElementById('contactChoice34').checked = !0
}
document.getElementById('myoption4').onclick = function () {
  document.getElementById('contactChoice44').checked = !0
}

let getCallback = document.getElementsByClassName('getcallback'),
  thankModal = document.querySelector('.thank-wrapper'),
  callbackModal = document.querySelector('.callback-wrapper'),
  thankClose = document.querySelector('.thank-close'),
  callbackClose = document.querySelector('.callback-close')


for (i = 0; i < getCallback.length; i++) {
  getCallback[i].addEventListener('click', function () {
    callbackModal.style.display = "flex"
  })
}
thankClose.addEventListener('click', function () {
  thankModal.style.display = 'none'
})
callbackClose.addEventListener('click', function () {
  callbackModal.style.display = 'none'
})