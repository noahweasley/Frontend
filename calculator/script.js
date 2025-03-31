const expression = document.querySelector(".expression");
const result = document.querySelector(".result");

const buttons = Array.from(document.getElementsByTagName("button"));
// for (let x = 0; x < buttons.length; x++) {
//   const button = buttons[x];
//   button.addEventListener("click", handleButtonClick);
// }

for (const button of buttons) {
  // button.addEventListener("click", (event) => {
  //   const target = event.target;
  //   //
  // });
  button.addEventListener("touchstart", (event) => {});
  button.addEventListener("click", (event) => {});

  // const events = ["click", "touchstart"];
  // for (let event of events) {
  //   button.addEventListener(event, (e) => {});
  // }

  //
  ["click", "touchstart"].forEach((event) =>
    button.addEventListener(event, handleButtonClick)
  );
}

// buttons.forEach((button) => {
//   ["click", "touchstart"].forEach((event) =>
//     button.addEventListener(event, handleButtonClick)
//   );
// });

// buttons.forEach((button) => {
//   button.addEventListener("click", handleButtonClick);
// });

let operators = [];
let operands = [];
const OPERATORS = ["÷", "×", "−", "+"];
const OPERANDS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let operandString = "";

function handleButtonClick(event) {
  const button = event.target;

  if (OPERANDS.includes(button.innerText)) {
    operandString = operandString + button.innerText;
  } else if (OPERATORS.includes(button.innerText)) {
    if (operandString.length == 0) {
      return;
    }
    let integer = parseInt(operandString);
    operands.push(integer);
    operators.push(button.innerText);
    operandString = "";
  } else {
    if (button.innerText == "=") {
      performEqualsTo();
    } else {
      // const expr = expression.innerText;
      // const lastCharacter = expr.charAt(expr.length - 1);
      // performAC(lastCharacter);
      performAC();
    }
    return;
  }

  expression.innerText = expression.innerText + button.innerText;
  // console.log("operandString:", operandString);
  // console.log("operators:", operators);
  // console.log("operands:", operands);
}

function performAC() {
  deleteOnDisplay();
  syncCalculation();

  function deleteOnDisplay() {
    // let text = expression.innerText;
    // expression.innerText = text.slice(0, text.length - 1);
    expression.innerHTML = "&nbsp;";
    result.innerText = "0";
  }

  function syncCalculation() {
    operandString = "";
    operands = [];
    operators = [];

    // syncOperandString();
    // syncArrays();

    // function syncOperandString() {
    //   operandString = operandString.slice(0, operandString.length - 1);
    // }

    // function syncArrays() {
    //   //
    // }
  }
}

function performEqualsTo() {
  if (operands.length - operators.length == 0) {
    // throw error
    result.innerText = "Math Error";
    return;
  }
  // proceed
  operands.push(parseInt(operandString));
  let resultOfOperation = operands[0];

  for (let i = 0; i < operators.length; i++) {
    const currOperator = operators[i];
    const currOperand = operands[i + 1];

    switch (currOperator) {
      case "+": {
        resultOfOperation = add(resultOfOperation, currOperand);
        break;
      }
      case "−": {
        resultOfOperation = minus(resultOfOperation, currOperand);
        break;
      }
      case "÷": {
        resultOfOperation = div(resultOfOperation, currOperand);
        break;
      }
      case "×": {
        resultOfOperation = times(resultOfOperation, currOperand);
        break;
      }
      default: {
        console.log("Nothing will happen");
      }
    }
  }

  result.innerText = resultOfOperation;
}

function minus(a, b) {
  return a - b;
}

function times(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function add(a, b) {
  return a + b;
}
