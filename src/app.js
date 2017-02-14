document.addEventListener('DOMContentLoaded', function (e) {
  const doc = document
  var btns = doc.querySelectorAll('.btn')
  var steps = [Math.floor(Math.random() * 4)]
  var userSteps = []

  btns.forEach(v => {
    v.addEventListener('click', function (e) {
      userSteps.push(Number(this.innerText))

      for (let i = 0; i < steps.length; i++) {
        if (steps[i] !== userSteps[i]) {
          console.log('bad')
          userSteps = []
          steps = []
        }
        console.log(steps, userSteps)
      }

      steps.push(Math.floor(Math.random() * 4 + 1))
    })
  })
})
