document.addEventListener('DOMContentLoaded', function (e) {
  const doc = document
  var btns = doc.querySelectorAll('.btn')
  var steps = []
  var nextStep = Math.floor(Math.random() * 4)
  console.log(nextStep)
  btns.forEach(v => {
    v.addEventListener('click', function (e) {
      if (Number(this.innerText) === nextStep) console.log('goode')
      else console.log('wrong')
      nextStep = Math.floor(Math.random() * 4 + 1)
      console.log(nextStep)
    })
  })
})
