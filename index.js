// Created this simple app for my partner's work. They just wanted a button that generates a random prompt.

//    As it stands, it's fully functional but everytime I generate a new h1 wih and "idea" in it, the idea is appended to the previous one.

const choices = ['“Beginners guide to...”', 'Buying/gift guide', 'Checklist', 'Comparison piece', 'Create a calendar of upcoming events', 'FAQ', 'Flow chart', '“How to...”', 'Interview industry experts (inside or outside your company)', 'Links roundup', 'List of things to do/never do', 'Mythbusting article', 'Predict future trends', 'Quote piece', 'The biggest influences/influencers', 'Timeline', 'Top 10 list', 'Update old content', 'Write a review/recommend a product, service, etc', '“x things to learn from...” (this could be a conference, event, TV show, movie, anything)']
const generator = document.querySelector('.generate')
var currentH1 = document.getElementById('parent')
var h1 = document.createElement('h1')

// Generates a random number between 0-19
function randomizer () {
  return Math.floor((Math.random() * 20))
}
// Calls the randomizer and uses the number it returns to pull out a string from the array that has the corresponding index number (0-19)
function chooseIdea () {
  return choices[randomizer()]
}
// Removes idea render everytime Generate is clicked. Uses setRemovableH1 as argument to find the element to delete
function removeH1 () {
  let removableH1 = document.getElementById('idea')
  removableH1.parentNode.removeChild(removableH1)
}

// Takes the idea chosen from the array by using chooseIdea as an argument, and adds the text of the idea to the h1 element
function insertIdeaTextInH1 (string) {
  let ideaText = document.createTextNode(string)
  return h1.appendChild(ideaText)
}

// Gives the h1 element the id 'choice'
function giveH1Id () {
  h1.id = 'idea'
}

// Takes in the h1 element and 'current element' as arguments, inserting the new h1 element in the dom before the 'current element'
function insertIdea (el, currentEl) {
  return document.body.insertBefore(el, currentEl)
}

// Calls all of the functions in order
function renderIdea () {
  removeH1()
  insertIdeaTextInH1(chooseIdea())
  giveH1Id()
  insertIdea(h1, currentH1)
}
// Adds event listener to the Generate button so that the renderIdea function is called everytime it is clicked
generator.addEventListener('click', renderIdea)
