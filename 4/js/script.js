let range1 = document.querySelector('#range1'),
    number1 = document.querySelector('#number1'),
    range2 = document.querySelector('#range2'),
    number2 = document.querySelector('#number2'),
    result = document.querySelector('#result'),
    quizwrapper = document.querySelector('.quiz-wrapper'),
    quizclose = document.querySelector('.quiz-button-close'),
    quizstart = document.querySelector('.quiz-start')


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

  quizclose.addEventListener('click', function () {
    quizwrapper.style.display = "none"
  })
  quizstart.addEventListener('click', function () {
    quizwrapper.style.display = "block"
  })