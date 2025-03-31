const nameInput = document.getElementById("nameInput");
const btn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");
const h1 = document.querySelector("h1");
const theme = document.getElementById("theme");
const body = document.body;

const names = localStorage.getItem("name");
h1.innerText = names;

let currentColor = "white";
body.style.backgroundColor = localStorage.getItem("themeColor") || currentColor;

btn.addEventListener("click", () => {
  const value = nameInput.value;
  h1.innerText = value;

  localStorage.setItem("name", value);
});

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "/";
});

theme.addEventListener("click", () => {
  if (currentColor === "white") {
    currentColor = "black";
  } else {
    currentColor = "white";
  }

  body.style.backgroundColor = currentColor;
  localStorage.setItem("themeColor", currentColor);
});
