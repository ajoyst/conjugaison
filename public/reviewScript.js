background (209, 233, 255);
//making a starting value for i
var cardNum = 0;
//making a value for front/back of card (0=front; 1=back)
var cardIsFlipped= false;
//making the buttons variables
var card = document.getElementById("cardButton");
var back = document.getElementById("backButton");
var next = document.getElementById("nextButton");

//making the info on front of card a function
function frontCard () {
  document.getElementById('topHalf').innerHTML = verbs[cardNum].infinitive;
  document.getElementById('englishHalf').innerHTML = verbs[cardNum].translation;
  document.getElementById('bottomHalf').innerHTML = verbs[cardNum].person + ", " + verbs[cardNum].tense;
}
//making info for back of card
function backCard () {
  document.getElementById('topHalf').innerHTML = verbs[cardNum].conjugation;
  document.getElementById('englishHalf').innerHTML = " ";
  document.getElementById('bottomHalf').innerHTML = " ";
}
//making backbutton invisible at starting
back.style.display = "none";
//making the backButton work
back.addEventListener("click",onBackButtonClick);
function onBackButtonClick() {
  cardNum--;
  next.style.display = "initial";
  if (cardNum ===0){
    back.style.display = "none";
  }
  frontCard();
}
//making nextButton work
next.addEventListener("click",onNextButtonClick);
function onNextButtonClick(){
  cardNum++;
  frontCard();
  back.style.display = "initial";
  //if on last card, hide nextButton
  if (cardNum === verbs.length-1){
    next.style.display = "none";
  //if now on second card- show back quizButton
  } else if (cardNum ===1){
      showBackButton();
  }
}
//to flip the card front/backCard
card.addEventListener("click",flipCard);
function flipCard() {
  if (cardIsFlipped) {
    frontCard();
    cardIsFlipped = false;
  }
  else {
    backCard();
    cardIsFlipped = true;
  }
}
//starting face of the card
frontCard();

//this begins the game


console.log("Nothing wrong yet");


/*
// "verbs" array

var cardIsFlipped = false;
var cardNum = 0;

var mainTitle = document.getElementById("mainTitle");
var leftText = document.getElementById("leftText");
var rightText = document.getElementById("rightText");

function onBackButtonClick(e){
  cardNum--;
  if (cardNum === 0) {
    hideBackButton();
  }
  populateCard();
}

function populateCard(){
  mainTitle.text = verbs[cardNum].verbInfinitive;
  leftText.text = verbs[cardNum].person;
  rightText.text = verbs[cardNum].otherInfo;
}

function populateBackOfCard(){
  mainTitle.text = verbs[cardNum].conjugation;
  leftText.text = "";
  rightText.text = "";
}

function onNextButtonClick(e){
  cardNum++;

  // if on last card - hide next button
  if (cardNum === 9) {
    hideNextButton();
*/
