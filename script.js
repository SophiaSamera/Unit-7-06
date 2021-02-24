document.getElementById('button').addEventListener('click', game)

let age = 15
let answer = 0

function game () {
  document.getElementById('answer').value
  answer = parseInt(answer)
  age = parseInt(age)
  let user = prompt('Please enter your name.', 'name')

  while (age !== answer) {
    document.getElementById('what').innerHTML = 'What is my age?'
    if (answer === age) {
      document.getElementById('what').innerHTML = 'You got it right! Want to try again' + user
    } else if (answer < age) {
      document.getElementById('what').innerHTML = 'You guessed too small. Please try again.'
    } else if (answer > age) {
      document.getElementById('what').innerHTML = 'You guessed too big. Please try again.'
    } else {
    document.getElementById('what').innerHTML = 'Invalid answer. Please try again.'
    } 
  }
}