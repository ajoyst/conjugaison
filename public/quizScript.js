background (209, 233, 255);
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
var playAgain = document.getElementByID('playAgainButton');
//starting display of finishButton
finish.style.display = 'none';
playAgain.style.display = 'none';

//making the info on front of card a function
function frontCard () {
  document.getElementById('topHalf').innerHTML = verbs[cardNum].infinitive;
  document.getElementById('englishHalf').innerHTML = verbs[cardNum].translation;
  document.getElementById('bottomHalf').innerHTML = verbs[cardNum].person + ", " + verbs[cardNum].tense;
  feedback.innerHTML = "Submit to check you answer!";
  feedback.style.color = "black";
}
//making end screen
function finalResults () {
  document.getElementById('topHalf').innerHTML = "Complete!";
  document.getElementById('englishHalf').innerHTML = "dunzo";
  document.getElementById('bottomHalf').innerHTML = "You scored " + correct + "/10";
  feedback.innerHTML = "Would you like to play again?";
  playAgain.style.display = "initial";
}

//making submitButton work
submit.addEventListener("click",checkAnswer);
function checkAnswer() {
  var realAnswer = verbs[cardNum].conjugation;
  var submittedAnswer = document.getElementById('answer').value;

  if (submittedAnswer === realAnswer) {
    feedback.innerHTML = "Correct!";
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
  if (cardNum === verbs.length-1){
    next.style.display = "none";
    finish.style.display = "initial";
  }
}
//making finishButton work
finish.addEventListener("click",onFinishButtonClick);
function onFinishButtonClick(){
  finalResults();
  document.getElementById("answerField").style.display = "none";
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
