/* const numButtons = document.querySelectorAll("[data-num]");
const opButtons = document.querySelectorAll("[data-op]");
const delButton = document.querySelector(".btn-c");
const acButton = document.querySelector(".btn-ac");
const equalButton = document.querySelector(".btn-equal");
const dotButton = document.querySelector(".btn-dot");
const allButtons = document.querySelectorAll("button"); */

const allOps = document.querySelector(".all-ops");
const currentOp = document.querySelector(".current-op");

//EVENT LISTENER FOR ALL KEYS
const keys = document.querySelector(".calculator-keys");
const currentOp_MAX = 9;

let operation;
let equalOperator = false;
let selectedOperator = false;
let numbersInserted = false;
let previous = 0;
let EVENT;

function CALCULATOR() {
  //WHAT HAPPENS IF YOU CLICK A BUTTON?
  keys.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      const key = e.target; //THIS VARIABLE CONTAINS THE CLICKED BUTTON
      const operator = key.dataset.op; //FOR ANY OPERATOR CLICKED
      const number = key.dataset.num; //FOR ANY NUMBER CLICKED (INCLUDING '.')
      const ac = key.dataset.ac;
      const del = key.dataset.del;
      const equal = key.dataset.equal;
      const dot = key.dataset.dot;
      console.log(key);
      console.log(number);
      EVENT = e;
      console.log(e);

      //HERE GOES ANY ACTION TO PERFOM WHEN YOU CLICK ANY BUTTON, SUCH AS STYLING ETC
      if (key) {
        //LIMPIAR LA CALCULADORA SI ANTES HE CALCULADO ALGO
        if (equalOperator) {
          allOps.innerText = "";
          currentOp.innerText = "";
        }
        if (ac) {
          currentOp.innerText = "";
          allOps.innerText = "";
          equalOperator = false;
          selectedOperator = false;
          numbersInserted = false;
          dotInserted = false;
        }

        if (del) {
          allOps.innerText = allOps.innerText.slice(0, -1);
          currentOp.innerText = currentOp.innerText.slice(0, -1);
          previous = allOps.innerText[allOps.innerText.length - 1];
        }

        if (equal) {
          console.log("hello");
          doCalculation();
        }

        if (operator) {
          insertOperator(key);
        }

        if (dot) {
          checkDotInput(key);
        }

        //ESTA FUNCIÓN DETERMINARÍA QUÉ PONER EN LA PANTALLITA DE ARRIBA
        if (number && currentOp.innerText.length < currentOp_MAX) {
          //
          currentNumber(key);
          //AQUÍ DECIRLE QUE ME SALTE A LA FUNCIÓN DEL TEXTO DE ABAJO
          return;
        } else if (operator && currentOp.innerText.length === currentOp_MAX) {
          return;
        } else if (operator) {
          //insertOperator(key);
        }
      }

      function checkDotInput(dot) {
        if (previous === ".") {
          return;
        } else if (previous === 0 || isNaN(previous)) {
          previous = ".";
          equalOperator = false;
          selectedOperator = false;
          numbersInserted = true;
          allOps.innerText += 0 + dot.innerText;
          currentOp.innerText = 0 + dot.innerText;
        } else {
          previous = ".";
          equalOperator = false;
          selectedOperator = false;
          numbersInserted = true;
          allOps.innerText += dot.innerText;
          currentOp.innerText += dot.innerText;
        }
      }

      //DO THIS IF YOU CLICK AN OPERATOR
      function insertOperator(operator) {
        if (selectedOperator) {
          return;
        } else if (!numbersInserted) {
          return;
        } else if (!selectedOperator && !isNaN(previous)) {
          allOps.innerText += operator.innerText;
          currentOp.innerText = 0;
          previous = operator.innerText;
          selectedOperator = true;
        }
      }

      //SHOW THE RESULT ON THE LOWER SCREEN
      function doCalculation() {
        if (!equalOperator) {
          previous = 0;
          operation = allOps.innerText;
          currentOp.innerText = eval(operation);
          equalOperator = true;
          numbersInserted = false;
          exponential();
        }
      }

      //DO THIS IF YOU CLICK A NUMBER
      function currentNumber(number) {
        if (previous === ".") {
          //do nothing
        } else if (previous === 0 || isNaN(previous)) {
          currentOp.innerText = "";
        }
        if (currentOp.innerText.length < currentOp_MAX) {
          equalOperator = false;
          selectedOperator = false;
          numbersInserted = true;
          allOps.innerText += number.innerText;
          currentOp.innerText += number.innerText;
          previous = number.innerText;
        }
      }
      //IF RESULT IS LARGER THAN 9 DIGITS, CONVERT IT TO ITS EXPONENTIAL FORM
      function exponential() {
        if (currentOp.innerText.length > currentOp_MAX) {
          currentOp.innerText = parseFloat(currentOp.innerText).toExponential(
            3
          );
          console.log("HELLO");
        }
      }
    }
  });
}

CALCULATOR();
