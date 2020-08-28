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
      next.style.display = "initial";
      same.style.display = "none";
      fresh.style.display = "none";
      quiz.style.display = "none";
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
var same = document.getElementById("reviewSame");
var fresh = document.getElementById("reviewFresh");
var quiz = document.getElementById("quizSame");

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
//making other buttons invisible at starting
back.style.display = "none";
same.style.display = "none";
fresh.style.display = "none";
quiz.style.display = "none";

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
//making the reviewSame button work
same.addEventListener("click",onSameButtonClick);
function onSameButtonClick() {
  cardNum = 0;
  frontCard();
  next.style.display = "initial";
  same.style.display = "none";
  fresh.style.display = "none";
  quiz.style.display = "none";
}
//making the reviewFresh button work by activating applyFilter and resetting buttons
fresh.addEventListener("click", onFreshButtonClick);
function onFreshButtonClick () {
  applyFilter();
  next.style.display = "initial";
  same.style.display = "none";
  fresh.style.display = "none";
  quiz.style.display = "none";
}
//making quiz button work
function onQuizButtonClick(){
  location.href = `/quiz?id=${verbs[0].id}_${verbs[1].id}_${verbs[2].id}_${verbs[3].id}_${verbs[4].id}_${verbs[5].id}_${verbs[6].id}_${verbs[7].id}_${verbs[8].id}_${verbs[9].id}`;
}
//making nextButton work
next.addEventListener("click",onNextButtonClick);
function onNextButtonClick(){
  cardNum++;
  frontCard();
  back.style.display = "initial";
  //if on last card, hide nextButton and produce ending buttons
  if (cardNum === 9){
    next.style.display = "none";
    back.style.display = "none";
    same.style.display = "initial";
    fresh.style.display = "initial";
    quiz.style.display = "initial";
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

//create function for checking for query
function checkQuery() {
  var queryCheck = location.href.split("?");
  if (queryCheck.length === 2) {
    console.log("There is a query");
    var setOfQueries = queryCheck[1];
    //differenciate between filter and review query
      console.log("running filter query");
      var individualQueries =setOfQueries.split("&");
      var data = {}
      for (i = 0; i<individualQueries.length; i++) {
        let keyPair = individualQueries[i].split("=");
        let key = keyPair[0];
        console.log(key);
        let value = keyPair[1];
        console.log(value);
        console.log(data);
        data[key]=dictionary[value];
        console.log(data[key]);
      }
    console.log(data);
    //ajax call for filtering cards based of queries
      //variables
    var url = '/conjugations';
    $.ajax({
        method: 'GET',
        url: url,
        data: {
          type: data.type,
          tense: data.tense,
          mood: data.mood
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
  else {
    console.log("There is no query");
  }

}

//starting face of the card
frontCard();
//checking for any filters 
checkQuery();
