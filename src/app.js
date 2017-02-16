class Game {
  constructor () {
    const doc = document

    var _mode = 'strict'
    var _steps = [Math.floor(Math.random() * 4)]
    var _userStep = 4
    var _btns = doc.querySelectorAll('.btn')
    var _maxStepCount = 3

    // Public methods
    this.setMode = function (mode) {
      _mode = mode
    }

    this.start = function () {
      if (_mode === 'strict') {
        startStrictGame()
      } else {
        startNormalGame()
      }
    }

    this.restart = function () {
      _steps = [Math.floor(Math.random() * 4)]
      _userStep = 4
    }

    // Private methods
    function startNormalGame () {
      playSequence()
      var stepsCounter = 0
      var currentStep = 0

      _btns.forEach(v => {
        v.addEventListener('click', function (e) {
          _userStep = Number(this.getAttribute('data-value'))
          if (_userStep !== _steps[currentStep]) {
            _userStep = 4
            playSequence()
          } else {
            if (currentStep === stepsCounter) {
              if (stepsCounter === _maxStepCount) {
                console.log('You won!')
                restartGame()
                return 0
              }
              currentStep = 0
              _steps.push(Math.floor(Math.random() * 4))
              playSequence()
              stepsCounter++
            } else {
              currentStep++
            }
          }
        })
      })
    }

    function startStrictGame () {
      playSequence()
      var stepsCounter = 0
      var currentStep = 0

      _btns.forEach(v => {
        v.addEventListener('click', function (e) {
          console.log(this.getAttribute('data-value'))
          _userStep = Number(this.getAttribute('data-value'))
          if (_userStep !== _steps[currentStep]) {
            restartGame()
            playSequence()
          } else {
            if (currentStep === stepsCounter) {
              if (stepsCounter === _maxStepCount) {
                console.log('You won!')
                restartGame()
                return 0
              }
              currentStep = 0
              _steps.push(Math.floor(Math.random() * 4))
              playSequence()
              stepsCounter++
            } else {
              currentStep++
            }
          }
        })
      })
    }

    function playSequence () {
      var i = 0
      console.log(_steps)
      var interval = setInterval(() => {
        _btns[_steps[i]].style.animationName = 'flash'
        i++
        if (i === _steps.length) {
          clearInterval(interval)
        }
      }, 2000)

      removeAnimation()
    }

    function removeAnimation () {
      var j = 0
      setTimeout(() => {
        var interval = setInterval(() => {
          _btns[_steps[j]].removeAttribute('style')
          j++
          if (j === _steps.length) {
            clearInterval(interval)
          }
        }, 2000)
      }, 1000)
    }

    function restartGame () {
      _steps = [Math.floor(Math.random() * 4)]
      _userStep = 4
    }
  }
}

document.addEventListener('DOMContentLoaded', function (e) {
  var game = new Game()
  game.start()
})
