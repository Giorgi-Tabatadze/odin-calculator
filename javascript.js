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
  divide : function (a, b){
    return a / b;
  },
};
function operate (){
  if (a !== "" && b !== "") {
    let result = operations[operation](parseFloat(a), parseFloat(b));
    textSmallDisplay = `${textDisplay}=`;
    textDisplay = result
    updateDisplay();
    updateSmallDisplay();
    a = result;
    i = 3;
    b = "";
    }
  console.log(i);
};
function percent (){
  if (i === 1 || i === 3) {
    a = a / 100;
    textDisplay = a;
    updateDisplay();
  } 
};
function makeNegative (){
  if (i === 1 || i === 3) {
    a = `-${a}`;
    textDisplay = a;
    updateDisplay();
  }
};

//operands
let a = 0;
let b = "";
let operation;
i = 0;


//numbers and operations
function numberEvents(){
  if (i === 0 && this.innerText !== ".") {
    a = "";
    i = 1;
  };
  if (i === 1) {
    if (a === "0" && this.innerText !== "."){
      a = ""
    }
    if (this.innerText === "." && a.includes(".")) {
      return;
    }
    a += this.innerText
    textDisplay = a;
    updateDisplay();
  } else if (i === 2) {
    if (b === "0" && this.innerText !== "."){
      b = ""
    }
    if (this.innerText === "." && b.includes(".")) {
      return;
    }
    b += this.innerText
    textDisplay += this.innerText;
    updateDisplay();
  } else if (i === 3 && this.innerText !== "."){
    a = "";
    a += this.innerText
    textDisplay = a;
    textSmallDisplay = "";
    updateDisplay();
    updateSmallDisplay();
    i = 1;
  } 
};

//if calculation has already been done and you receive operator change request
//set b to nothing because you will need to get new b. 
function setOperator (){
  if (i === 3) {
    b = "";
  }
  if (i === 2 && b !== ""){
    operate();
    operation = this.dataset.operation;
  }
  operation = this.dataset.operation
  i = 2
  textDisplay = `${a}${this.innerText}`;
  updateDisplay();
};

function clear () {
  a = 0;
  b = "";
  operation = "";
  i = 0;
  
  textDisplay = a;
  textSmallDisplay = "";
  updateDisplay();
  updateSmallDisplay();
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
btnDivide.addEventListener("click", setOperator);
btnMultiply.addEventListener("click", setOperator);
btnSubstract.addEventListener("click", setOperator);
btnAdd.addEventListener("click", setOperator);
btnEqual.addEventListener("click", operate);
btnAC.addEventListener("click", clear);
btnPlusMinus.addEventListener("click", makeNegative);
btnPercent.addEventListener("click", percent);

//display
const display = document.querySelector(".display");
const displaySmall = document.querySelector(".displaysmall");

textDisplay = a;
function updateDisplay(){
  display.innerText = textDisplay;
};
function updateSmallDisplay(){
  displaySmall.innerText = textSmallDisplay;
};

updateDisplay();







