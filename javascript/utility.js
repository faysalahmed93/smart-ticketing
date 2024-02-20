// add
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
// show
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
