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
function operate (){
  let result = operations[operation](parseInt(a), parseInt(b));
  updateDisplay(result);
  a = result;
};

//operands
let a = "";
let b = "";
let operation;
i = 1;

//event listener to get data about pressed buttons

//numbers
function numberEvents(){
  if (i === 1 && !isNaN(this.innerText)) {
    a += this.innerText
    updateDisplay(a);
  } else if (i === 2 && !isNaN(this.innerText)) {
    b += this.innerText
    updateDisplay(b);
  };
  if (this.dataset.operation && this.dataset.operation !== "equal"){
    operation = this.dataset.operation ;
    i = 2;
  };
}


const buttons = Array.from(document.querySelectorAll(".green"));
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
btnEqual.addEventListener("click", operate);
btnAC.addEventListener("click", numberEvents);
btnPlusMinus.addEventListener("click", numberEvents);
btnPercent.addEventListener("click", numberEvents);

//display
const display = document.querySelector(".display");
function updateDisplay(value){
  display.innerText = value;
};
updateDisplay(0);







