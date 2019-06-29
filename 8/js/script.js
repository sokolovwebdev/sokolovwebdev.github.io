let range1 = document.getElementById('range1'),
    number1 = document.getElementById('number1'),
    range2 = document.getElementById('range2'),
    number2 = document.getElementById('number2'),
    result = document.getElementById('result')

  range1.addEventListener('change', function () {
    number1.value = range1.value
    getResult()
  })
  number1.addEventListener('change', function () {
    range1.value = number1.value
    getResult()
  })
  range2.addEventListener('change', function () {
    number2.value = range2.value
    getResult()
  })
  number2.addEventListener('change', function () {
    range2.value = number2.value
    getResult()
  })
  function getResult(){
    proValue = number2.value*2.5/100
    result.value = number1.value * proValue
    console.log(number2.value);
    console.log(proValue);
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
    contactChoice41 = document.getElementById('contactChoice41'),
    contactChoice42 = document.getElementById('contactChoice42'),
    contactChoice43 = document.getElementById('contactChoice43'),
    contactChoice44 = document.getElementById('contactChoice44')
    quizThank = document.querySelector('.quiz-thank')


    
  contactChoice41.addEventListener('click', function () {
    quiz4.style.display = "none"
    quizThank.style.display = "flex"

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
    quiz1.style.display = "none"
    quiz2.style.display = "block"
  })
  quizN2.addEventListener('click', function () {
    quiz2.style.display = "none"
    quiz3.style.display = "block"
  })
  quizN3.addEventListener('click', function () {
    quiz3.style.display = "none"
    quiz4.style.display = "block"
  })
  quizN4.addEventListener('click', function () {
    quiz4.style.display = "none"
    quizThank.style.display = "flex"
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