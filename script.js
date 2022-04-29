/*  *** Hints ***
---Consider the steps required...
---Start by getting inputed value (guess) 
---Generate random number (try output to console to see value)
---Compare these 2 values
---Add event listener for click-event on button
---Update message and scores etc
*/

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let randNum = getRandomIntInclusive(1, 20); //start w Rand #
console.log(randNum);
let messageObj = document.querySelector(".message");
let score = 20; // GLOBAL variable (accessible by all functions)
let highscore = 0; // GLOBAL variable
let scoreObj = document.querySelector(".score");

function again(){
  document.body.style.backgroundColor = "#333";
  score = 20
  scoreObj.textContent = score;
  messageObj.textContent = "Guess a number between 1 and 20.";
  document.querySelector(".number").textContent = "?"
  document.querySelector(".guess").value = null
  randNum = getRandomIntInclusive(1, 20);
}
function lose() {
  document.querySelector(".title").textContent = "Wow, you're garbage"
  document.querySelector(".number").textContent = "stop"
  document.querySelector(".number").textContent = "why?"
  document.querySelector(".number").style.fontsize = "30px"
  document.querySelector(".guess").value = null
  document.body.style.backgroundColor = "#333";
}
function check() {
  let guess = Number(document.querySelector(".guess").value);
  if (guess === randNum) {
    //alert('win')
    messageObj.textContent = "You win!";
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = randNum;
    //highscore check
    if (score > highscore) {
      highscore = score; // update highscore with current score
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess < randNum) {
    //alert('too low')
    messageObj.textContent = "Too low.";
    score -= 1;
    scoreObj.textContent = score;
    if (score < 0){lose()}
  } else if (guess > randNum) {
    //alert('too high')
    messageObj.textContent = "Too high.";
    score -= 1;
    scoreObj.textContent = score;
  }
}