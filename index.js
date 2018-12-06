let choices = ['“Beginners guide to...”',
  'Buying/gift guide',
  'Checklist',
  'Comparison piece',
  'Create a calendar of upcoming events',
  'FAQ',
  'Flow chart',
  '“How to...”',
  'Interview industry experts (inside or outside your company)',
  'Links roundup',
  'List of things to do/never do',
  'Mythbusting article',
  'Predict future trends',
  'Quote piece',
  'The biggest influences/influencers',
  'Timeline',
  'Top 10 list',
  'Update old content',
  'Write a review/recommend a product, service, etc',
  '“x things to learn from...” (this could be a conference, event, TV show, movie, anything)']

function randomizer () {
  let number = Math.floor((Math.random() * 20))
  console.log(number)
  return number
}

function picker () {
  let choice = randomizer()
  renderChoice(choices[choice])

  function renderChoice (x) {
    let div = document.createElement('div')
    let result = document.createTextNode(x)

    div.className = 'choice'
    div.appendChild(result)
    let currentDiv = document.getElementById('parent')
    document.body.insertBefore(div, currentDiv)
    let formerChoice = document.querySelector('.choice')

    if (!formerChoice) {
    } else {
      formerChoice.classList.add('hidden')
    }
}
}

let roll = document.querySelector('.roll')

roll.addEventListener('click', picker)
