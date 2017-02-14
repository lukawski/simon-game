document.addEventListener('DOMContentLoaded', function (e) {
  const doc = document
  var btns = doc.querySelectorAll('.btn')
  var steps = [Math.floor(Math.random() * 4)]
  var userSteps = []
  btns[steps[0]].style.animationName = 'flash'
  console.log(steps)
  btns.forEach(v => {
    v.addEventListener('click', function (e) {
      console.log(this.getAttribute('data-value'))
      userSteps.push(Number(this.getAttribute('data-value')))

      for (let i = 0; i < steps.length; i++) {
        if (steps[i] !== userSteps[i]) {
          console.log('bad')
          userSteps = []
          steps = []
        }
      }

      steps.push(Math.floor(Math.random() * 4))
      btns[steps[steps.length - 1]].style.animationName = 'flash'
      console.log(steps)
    })
  })
})
