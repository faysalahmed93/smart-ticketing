function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
// show
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
// set background -color
function setBackgroundById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-600");
}
// remove background - color
function removeBackgroundById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-600");
}
function getARandomAlphabet() {
  // get alphabet Array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabetString.split("");
  // console.log(alphabet);
  // get index
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  // console.log(index);

  // get Alphabet
  const alphabet = alphabetArray[index];
  return alphabet;
}
function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}
// get text from score and life
function getElementValueById(elementId) {
  const scoreElement = document.getElementById(elementId);
  const ScoreElementText = scoreElement.innerText;
  const value = parseInt(ScoreElementText);
  return value;
}
// set inner text
function setInnerValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
