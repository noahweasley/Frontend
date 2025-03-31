const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const loginButton = document.getElementById("login");
const pArray = Array.from(document.getElementsByTagName("p"));

const p1 = pArray[0];
const p2 = pArray[1];
const p3 = pArray[2];

loginButton.addEventListener("click", () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length < 6) {
    p1.classList.remove("gone");
    return;
  } else {
    p1.classList.add("gone");
  }

  if (emailValue.length < 6) {
    p2.classList.remove("gone");
    return;
  } else {
    p2.classList.add("gone");
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailValue)) {
    p2.innerText = "Must be a valid email";
    p2.classList.remove("gone");
    return;
  }

  if (passwordValue.length < 6) {
    p3.classList.remove("gone");
    return;
  } else {
    p3.classList.add("gone");
  }
});
