const input = document.getElementById("nameInput");
const submitBtn = document.getElementById("submit");
const toggleBtn = document.getElementById("theme");
const h1 = document.querySelector("h1");
const body = document.body;

const text = localStorage.getItem("text");
h1.innerText = text;

submitBtn.addEventListener("click", () => {
  const inputValue = input.value;
  h1.innerText = inputValue;

  localStorage.setItem("text", inputValue);
});

let textColor = localStorage.getItem("text-color") || "black";
let bgColor = localStorage.getItem("bg-color") || "white";
body.style.backgroundColor = bgColor;
h1.style.color = textColor;

toggleBtn.addEventListener("click", () => {
  if (bgColor == "white") {
    textColor = "white";
    bgColor = "black";

    body.style.backgroundColor = "black";
    h1.style.color = "white";
  } else {
    textColor = "black";
    bgColor = "white";

    body.style.backgroundColor = "white";
    h1.style.color = "black";
  }

  localStorage.setItem("bg-color", bgColor);
  localStorage.setItem("text-color", textColor);
});
