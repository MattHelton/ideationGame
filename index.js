const choices = ['“Beginners guide to...”', 'Buying/gift guide', 'Checklist', 'Comparison piece', 'Create a calendar of upcoming events', 'FAQ', 'Flow chart', '“How to...”', 'Interview industry experts (inside or outside your company)', 'Links roundup', 'List of things to do/never do', 'Mythbusting article', 'Predict future trends', 'Quote piece', 'The biggest influences/influencers', 'Timeline', 'Top 10 list', 'Update old content', 'Write a review/recommend a product, service, etc', '“x things to learn from...” (this could be a conference, event, TV show, movie, anything)']
const generator = document.querySelector('.generate')

function randomizer () {
  return Math.floor((Math.random() * 20))
}
function chooseIdea () {
  return choices[randomizer()]
}
function removeH1 (el) {
  el.parentNode.removeChild(el)
}
function insertIdeaTextInH1 (string, el) {
  let ideaText = document.createTextNode(string)
  return el.appendChild(ideaText)
}
function giveH1Id (el) {
  el.id = 'idea'
}
function insertIdea (el, currentEl) {
  return document.body.insertBefore(el, currentEl)
}
function renderIdea () {
  let currentH1 = document.getElementById('parent')
  let h1 = document.createElement('h1')
  let removableH1 = document.getElementById('idea')
  removeH1(removableH1)
  giveH1Id(h1)
  insertIdeaTextInH1(chooseIdea(), h1)
  insertIdea(h1, currentH1)
}
function ideationGame () {
  renderIdea()
}
generator.addEventListener('click', ideationGame)