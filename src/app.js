class Game {
  constructor () {
    const doc = document

    var _mode = 'normal'
    var _steps = [Math.floor(Math.random() * 4)]
    var _userStep = 4
    var _btns = doc.querySelectorAll('.btn')
    var _pointsBox = doc.getElementById('points')
    var _maxStepCount = 19
    var _stepsCounter = 0
    var _currentStep = 0
    var _locked = false


    // Public methods
    this.setMode = function () {
      _mode = (_mode === 'normal') ? 'strict' : 'normal'
      console.log(_mode)
    }

    this.getMode = function () {
      return _mode
    }

    this.start = function () {
      playSequence()

      _btns.forEach(v => {
        v.addEventListener('click', function (e) {
          if (_locked) return 0
          _userStep = Number(this.getAttribute('data-value'))
          if (_userStep !== _steps[_currentStep] && _mode === 'normal') {
            _userStep = 4
            playSequence()
          } else if (_userStep !== _steps[_currentStep] && _mode === 'strict') {
            restartGame()
            playSequence()
          } else {
            if (_currentStep === _stepsCounter) {
              if (_stepsCounter === _maxStepCount) {
                console.log('You won!')
                restartGame()
                return 0
              }
              _currentStep = 0
              _steps.push(Math.floor(Math.random() * 4))
              playSequence()
              _stepsCounter++
              _pointsBox.innerText = _stepsCounter
            } else {
              _currentStep++
            }
          }
        })
      })
    }

    // Private methods
    function playSequence () {
      _locked = true
      var i = 0
      var interval = setInterval(() => {
        _btns[_steps[i]].classList.add('light')
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
          _btns[_steps[j]].classList.remove('light')
          j++
          if (j === _steps.length) {
            clearInterval(interval)
            _locked = false
          }
        }, 2000)
      }, 1000)
    }

    function restartGame () {
      _steps = [Math.floor(Math.random() * 4)]
      _userStep = 4
      _pointsBox.innerText = 0
      _stepsCounter = 0
      _currentStep = 0
    }

    function notifyError () {

    }

    function notifyWin () {

    }
  }
}

document.addEventListener('DOMContentLoaded', function (e) {
  var game = new Game()
  document.getElementById('start').addEventListener('click', function (e) {
    game.start()
  })

  document.getElementById('setMode').addEventListener('click', function (e) {
    game.setMode()
    if (game.getMode() === 'strict') {
      this.classList.add('active')
    } else {
      this.classList.remove('active')
    }
  })
})
