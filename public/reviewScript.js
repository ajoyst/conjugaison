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
var cardNum = 0;
console.log(verbs);


//making a value for front/back of card (0=front; 1=back)
var cardIsFlipped= false;
//making the buttons variables
var card = document.getElementById("cardButton");
var back = document.getElementById("backButton");
var next = document.getElementById("nextButton");

//making the info on front of card a function
function frontCard () {
  document.getElementById('topHalf').innerHTML = verbs[cardNum].infinitive;
  document.getElementById('englishHalf').innerHTML = verbs[cardNum].english;
  document.getElementById('bottomHalf').innerHTML = verbs[cardNum].person + ", " + verbs[cardNum].tense+ ", " + verbs[cardNum].mood;
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
      back.style.display = "initial";
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

// $('apply').on('click', (e) => {
//   console.log(window.location.host + '\conjugations');
//   $.ajax({
//     method: 'GET',
//     url: window.location.host + '\conjugations',
//     data: {
//       type: typeInput,
//       tense: tenseInput
//     },
//     success: () => {
//       console.log(typeInput.value , tenseInput.value);
//     }
//   })
//
// })

//starting face of the card
frontCard();
