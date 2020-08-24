background (209, 233, 255);
// verbs array
var verbs;
//creating shuffle function for verb array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
//make apply button for filters function
var typeInput = document.getElementById('type');
var tenseInput = document.getElementById('tense');
var apply = document.getElementById("applyButton");
//making the review filters work
apply.addEventListener("click", applyFilter);
function applyFilter() {
  console.log(typeInput.value, ',', tenseInput.value);
  var tenseMood = tenseInput.value.split('_');
  var url = '/conjugations';
  console.log(url);
  $.ajax({
      method: 'GET',
      url: url,
      data: {
        type: typeInput.value,
        tense: tenseMood[0],
        mood: tenseMood[1]
      },
      success: (response) => {
        console.log(response);
        shuffle(response);
        verbs = response;
        cardNum = 0;
        cardIsFlipped = false;
        frontCard();
        }
      })
    }
//making a starting value for i and making verbs the response
console.log(verbs);

//counting variables
var cardNum = 0;
var correct = 0;
var wrong = 0;
//text variables
var feedback = document.getElementById('feedback');
//button variables
var next = document.getElementById("nextButton");
var submit = document.getElementById("submitButton");
var finish = document.getElementById('finishButton');
var playAgain = document.getElementById('playAgainButton');
//starting display of finishButton
finish.style.display = 'none';
playAgain.style.display = 'none';

//making the info on front of card a function
function frontCard () {
  document.getElementById('topHalf').innerHTML = verbs[cardNum].infinitive;
  document.getElementById('englishHalf').innerHTML = verbs[cardNum].english;
  document.getElementById('bottomHalf').innerHTML = verbs[cardNum].person + ", " + verbs[cardNum].tense + ", " + verbs[cardNum].mood;
  document.getElementById("answerField").style.visibility = "initial";
  feedback.innerHTML = "Submit to check you answer!";
  feedback.style.color = "black";
  submit.style.visibility = "visible";
}
//making end screen
function finalResults () {
  document.getElementById('topHalf').innerHTML = "Complete!";
  document.getElementById('englishHalf').innerHTML = "dunzo";
  document.getElementById('bottomHalf').innerHTML = "You scored " + correct + "/10";
  document.getElementById("answerField").style.visibility = "hidden";
  feedback.innerHTML = "Would you like to play again?";
  submit.style.display = "none";
  playAgain.style.display = "initial";
  finish.style.display = "none";
}

//making submitButton work
submit.addEventListener("click",checkAnswer);
function checkAnswer() {
  var realAnswer = verbs[cardNum].conjugation;
  var submittedAnswer = document.getElementById('answer').value;
  var result = realAnswer.localeCompare(submittedAnswer, 'en', { sensitivity: 'base' });
  submit.style.visibility = "hidden";

  if (result === 0) {
    feedback.innerHTML = "Correct! "+ verbs[cardNum].conjugation;
    feedback.style.color = "green";
    correct ++;
  }
  else {
    feedback.innerHTML = "False: The correct answer is " +
    verbs[cardNum].conjugation;
    feedback.style.color = "red";
    wrong ++;
  }
}

//making nextButton work
next.addEventListener("click",onNextButtonClick);
function onNextButtonClick(){
  cardNum++;
  frontCard();
  document.getElementById("answerField").reset();
  //if on last card, display finishButton
  if (cardNum === 9){
    next.style.display = "none";
    finish.style.display = "initial";
  }
}
//making finishButton work
finish.addEventListener("click",onFinishButtonClick);
function onFinishButtonClick(){
  finalResults();
  //document.getElementById("answerField").style.display = "hidden";
}

//making playAgain button work
playAgain.addEventListener("click", reRunProgram);
function reRunProgram(){
  var cardNum = 0;
  frontCard();
}

//starting face of the card
frontCard();





/* Lillian's example for entering text and checking
const handlePostNewCommentButton = (e) => {
  let currentPath = e.view.window.location.pathname;
  let comment = document.getElementsByClassName('addCommentTextarea')[0].value;
  let userNameForComment = document.getElementsByClassName('userUsernameInput')[0].id.split('-')[1];
  let userIdForComment = document.getElementsByClassName('userObjectIdInput')[0].id.split('-')[1];
  let url = '/api/v1/techniques/' + e.target.dataset.techniqueid;
  let currentDate = getCurrentDate();
  $.ajax({
    method: 'POST',
    url: url,
    data: {
      comment: comment,
      userName: userNameForComment,
      userId: userIdForComment,
      date: currentDate
    },
    success: (json) => {
      document.getElementsByClassName('addCommentTextarea')[0].value = "";
      window.location = window.location.href;
    },
    error: () => {
      console.log("ajax post comment error");
    }
  })
}



CharCode exmaple

"être".charCodeAt(0);
234
String.fromCharCode(234);
"ê"

*/
