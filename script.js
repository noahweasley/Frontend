const textInput = document.getElementById("textInput");
const mouseArea = document.getElementById("mouseArea");
const h1 = document.querySelector("h1");

textInput.addEventListener("focusin", function () {
  h1.innerText = "Text input has focus";
});

textInput.addEventListener("focusout", function () {
  h1.innerText = "Text input lost focus";
});

mouseArea.addEventListener("mouseover", function () {
  h1.innerText = "Mouse Area has mouse";
});

mouseArea.addEventListener("mouseout", function () {
  h1.innerText = "Mouse has left";
});
