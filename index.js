const choices = ['“Beginners guide to...”',
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
// Generates a random number between 0-19
function randomizer () {
  return Math.floor((Math.random() * 20))
}
// Calls the randomizer and uses the number it returns to pull out a string from the array that has the corosponding index number (0-19)
//  Then calls renderChoice function to render the string
function picker () {
  let choice = randomizer()
  renderChoice(choices[choice])
}

// Creates a new h1, gives it the classname 'choice',inserts the chosen string into the new h1,
function renderChoice (string) {
  let removableh1 = document.getElementById('choice')
  let h1 = document.createElement('h1')
  let result = document.createTextNode(string)
  let currenth1 = document.getElementById('parent')

  removableh1.parentNode.removeChild(removableh1)
  h1.id = 'choice'
  h1.appendChild(result)
  document.body.insertBefore(h1, currenth1)
}

let generator = document.querySelector('.generate')

generator.addEventListener('click', picker)
