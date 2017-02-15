class Game {
  constructor () {
    const doc = document

    var _mode = 'normal'
    var _steps = [Math.floor(Math.random() * 4)]
    var _userSteps = []
    var btns = doc.querySelectorAll('.btn')

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
      btns.forEach(v => {
        v.addEventListener('click', function (e) {
          console.log(this.getAttribute('data-value'))
          _userSteps.push(Number(this.getAttribute('data-value')))

          for (let i = 0; i < _steps.length; i++) {
            if (_steps[i] !== _userSteps[i]) {
              _userSteps = []
              _steps = []
            }
          }

          console.log(_steps)
        })
      })
    }

    function startStrictGame () {
      btns.forEach(v => {
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
          btns[_steps[_steps.length - 1]].style.animationName = 'flash'
          console.log(_steps)
        })
      })
    }

    function playSequence () {

    }
  }
}


document.addEventListener('DOMContentLoaded', function (e) {
  var game = new Game()
  game.start()
})
