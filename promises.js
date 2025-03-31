const h1 = document.querySelector("h1");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => (h1.innerText = JSON.stringify(json)));

// Promise.resolve(2).then((result) => console.log(result));
// Promise.reject(new Error());
// setTimeout(() => {
//   console.log("Hello after 3 seconds!");
// }, 3000); // Executes after 3 seconds

// setInterval(() => {
//   console.log("Hello after 3 seconds!");
// }, 1000); // Executes every 1 second

// let p = new Promise((resolve, reject) => {
//   let isError = true;

//   if (isError) {
//     reject(new Error("Unexpected error occurred"));
//   } else {
//     resolve(2);
//   }
// });

// p.then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error.message);
// });

let name2 = "Noah";
let reverse = "";

for (let x = name2.length - 1; x >= 0; x--) {
  reverse += name2.charAt(x);
}

console.log(reverse); // Output: "haoN"

