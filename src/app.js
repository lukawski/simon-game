class Game {
  constructor () {
    const doc = document

    var _mode = 'normal'
    var _steps = [Math.floor(Math.random() * 4)]
    var _userStep = 4
    var _btns = doc.querySelectorAll('.btn')

    // Public methods
    this.setMode = function (mode) {
      _mode = mode
    }

    this.start = function () {
      if (_mode === 'strict')
        startStrictGame()
      else
        startNormalGame()
    }

    this.restart = function () {

    }

    // Private methods
    function startNormalGame () {
      playSequence()
      var stepsCounter = 0
      _btns.forEach(v => {
        v.addEventListener('click', function (e) {
          _userStep = Number(this.getAttribute('data-value'))
          console.log(_userStep, stepsCounter, _steps)
          if (_userStep !== _steps[stepsCounter]) {
            _userStep = 4
            console.log('wrong')
            playSequence()
          } else {
            _steps.push(Math.floor(Math.random() * 4))
            playSequence()
            stepsCounter++
          }
        })
      })
    }

    function startStrictGame () {
      _btns.forEach(v => {
        v.addEventListener('click', function (e) {
          console.log(this.getAttribute('data-value'))
          _userSteps.push(Number(this.getAttribute('data-value')))

          for (let i = 0; i < _steps.length; i++) {
            if (_steps[i] !== _userSteps[i]) {
              _userSteps = []
              _steps = []
            }
          }

          _steps.push(Math.floor(Math.random() * 4))
          _btns[_steps[_steps.length - 1]].style.animationName = 'flash'
          console.log(_steps)
        })
      })
    }

    function playSequence () {
      var i = 0
      var interval = setInterval(() => {
        if (i === _steps.length) {
          clearInterval(interval)
          removeAnimation()
          return
        }
        _btns[_steps[i]].style.animationName = 'flash'
        i++
      }, 1000)
    }

    function removeAnimation () {
      setTimeout(() => {
        _btns.forEach(v => {
          v.removeAttribute('style')
        })
      }, _steps.length * 500)
    }
  }
}


document.addEventListener('DOMContentLoaded', function (e) {
  var game = new Game()
  game.start()
})
