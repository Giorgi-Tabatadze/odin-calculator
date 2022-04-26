//Functions that complete basic operations
const operations = {
  add : function (a, b) {
    return a + b;
  },
  substract : function (a, b){
      return a - b;
  },
  multiply : function (a, b){
    return a * b;
  },
  divide : function divide (a, b){
    return a / b;
  },
};
function operate (toDo , a , b){
  let text = operations[toDo](a, b);
  updateDisplay(text);
  a = text;
  i = 4;
};

//operands
let a = 0;
let b = 0;
let operation;
i = 1;

//event listener to get data about pressed buttons

//numbers
const buttons = Array.from(document.querySelectorAll(".green"));

function numberEvents(){
  if (this.dataset.operation === "equal") {
    operate(operation, a, b);
    i = 3;
  };
  if (i === 1 || i === 4) {
   a = this.innerText;
   updateDisplay(a);
   i = 2;
   //console.log(i)
  } else if (i === 2) {
   b = this.innerText;
   updateDisplay(b);
   //console.log(i)
  };
  if (this.dataset.operation && this.dataset.operation !== "equal"){
  operation = this.dataset.operation 
  //console.log(operation)
  };
}

buttons.forEach(button => {
  button.addEventListener("click", numberEvents)
});

//operations
const btnDivide = document.querySelector("#divide");
const btnMultiply = document.querySelector("#multiply");
const btnSubstract = document.querySelector("#substract");
const btnAdd = document.querySelector("#add");
const btnEqual = document.querySelector("#equal");
const btnAC = document.querySelector("#ac");
const btnPlusMinus = document.querySelector("#plusminus");
const btnPercent = document.querySelector("#percent");
btnDivide.addEventListener("click", numberEvents);
btnMultiply.addEventListener("click", numberEvents);
btnSubstract.addEventListener("click", numberEvents);
btnAdd.addEventListener("click", numberEvents);
btnEqual.addEventListener("click", numberEvents);
btnAC.addEventListener("click", numberEvents);
btnPlusMinus.addEventListener("click", numberEvents);
btnPercent.addEventListener("click", numberEvents);

//display
const display = document.querySelector(".display");
function updateDisplay(value){
  display.innerText = value;
};
updateDisplay(a);







