var defaultStroke = "black";
//var defaultBackgroundColor = "white";
var defaultFillColor = "white";
var defaultBorderStyle = "solid";
var defaultBorderColor = "black";
var defaultBorderWidth = "1px";
var defaultBorderWidthNum = 1;
var defaultFontSize = "16px";

function convertNumToPx (number) {
  return number.toString() + "px";
}

function addElementToView (element) {
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(element);
}

function divMaker (leftPos, topPos, width, height, shapeType) {
  var div = document.createElement('div');

  div.style.position = "absolute";
  if (defaultBorderStyle === "none") {
    div.style.left = convertNumToPx(leftPos);
    div.style.top = convertNumToPx(topPos);
  }
  else {
    div.style.left = convertNumToPx(leftPos-defaultBorderWidthNum);
    div.style.top = convertNumToPx(topPos-defaultBorderWidthNum);
  }
  div.style.height = convertNumToPx(height);
  div.style.width = convertNumToPx(width);
  div.style.borderStyle = defaultBorderStyle;
  div.style.borderWidth = defaultBorderWidth;
  div.style.borderColor = defaultBorderColor;
  div.style.backgroundColor = defaultFillColor;
  div.classList.add(shapeType);

  return div;
}

function textMaker (message, leftPos, topPos, width, height) {
  var text = document.createElement('text');
  text.innerHTML = message;
  text.style.position = "absolute";
  text.style.left = convertNumToPx(leftPos);
  text.style.top = convertNumToPx(topPos);
  text.style.left = convertNumToPx(leftPos);
  text.style.top = convertNumToPx(topPos);
  text.style.height = convertNumToPx(height);
  text.style.width = convertNumToPx(width);
  text.style.borderStyle = "none";
  text.style.color = defaultFillColor;
  text.style.fontSize = defaultFontSize;

  return text;
}
// ellipse
function ellipse (centerX, centerY, width, height) {
  var oval = divMaker(centerX - width/2, centerY - height/2, width, height, 'oval');
  oval.style.borderRadius = '50%';
  addElementToView(oval)
}
// rect
function rect (xPos, yPos, width, height) {
  var rectangle = divMaker(xPos, yPos, width, height, 'rectangle');
  addElementToView(rectangle)
}

// line - (xPosStart, yPosStart, xPosEnd, yPosEnd);

//background - updates the default background color rgb color
function background (red, green, blue){
  var body = document.getElementsByTagName("body");
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
// fill - updates the default element color
function fill (red, green, blue){
  defaultFillColor = `rgb(${red},${green},${blue})`;
}
//text - adds text to screen (text, x, y, height, width)
function text (message, x, y, w, h) {
  var text = textMaker (message, x, y, w, h);
  addElementToView(text);
}
//textSize - changes font fontSize
function textSize (size) {
  defaultFontSize = convertNumToPx(size);
}
//stroke - updates the default color of the outline
function stroke (red, green, blue){
  defaultBorderStyle = "solid";
  defaultBorderColor = `rgb(${red},${green},${blue})`;
}
// noStroke - determines rather or not there is an outline
function noStroke () {
  defaultBorderStyle = "none";
}
//strokeWeight - update the default stroke weight
function strokeWeight (length) {
  defaultBorderStyle = "solid";
  defaultBorderWidth = convertNumToPx(length);
  defaultBorderWidthNum = length;
}
