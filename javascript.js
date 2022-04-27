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
function numberEvents(e){
  if (i === 0 && e.target.innerText !== ".") {
    a = "";
    i = 1;
  };
  if (i === 1) {
    if (a === "0" && e.target.innerText !== "."){
      a = ""
    }
    if (e.target.innerText === "." && a.includes(".")) {
      return;
    }
    a += e.target.innerText
    textDisplay = a;
    updateDisplay();
  } else if (i === 2) {
    if (b === "0" && e.target.innerText !== "."){
      b = ""
    }
    if (e.target.innerText === "." && b.includes(".")) {
      return;
    }
    b += e.target.innerText
    textDisplay += e.target.innerText;
    updateDisplay();
  } else if (i === 3 && e.target.innerText !== "."){
    a = "";
    a += e.target.innerText
    textDisplay = a;
    textSmallDisplay = "";
    updateDisplay();
    updateSmallDisplay();
    i = 1;
  } 
};

//if calculation has already been done and you receive operator change request
//set b to nothing because you will need to get new b. 
function setOperator (e){
  if (i === 3) {
    b = "";
  }
  if (i === 2 && b !== ""){
    operate();
    operation = e.target.dataset.operation;
  }
  operation = e.target.dataset.operation
  i = 2
  textDisplay = `${a}${e.target.innerText}`;
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
document.addEventListener("keydown", keyPress);

//
function keyPress (e){
  if (e.key === " "){
    return;
  }
  if (!isNaN(Number(e.key))) {
    const target = {
      innerText : [e.key]
    };
    const whichKey = {
      target : target
    };
    numberEvents(whichKey);
  };
  if (e.key === "+")
  {
    const dataset = {
      operation : "add"
    }
    const target = {
      dataset : dataset,
      innerText : [e.key]
    };
    const whichKey = {
      target : target
    };
    setOperator(whichKey)
  };
  if (e.key === "-")
  {
    const dataset = {
      operation : "substract"
    }
    const target = {
      dataset : dataset,
      innerText : [e.key]
    };
    const whichKey = {
      target : target
    };
    setOperator(whichKey)
  };
  if (e.key === "*")
  {
    const dataset = {
      operation : "multiply"
    }
    const target = {
      dataset : dataset,
      innerText : [e.key]
    };
    const whichKey = {
      target : target
    };
    setOperator(whichKey)
  };
  if (e.key === "/")
  {
    const dataset = {
      operation : "divide"
    }
    const target = {
      dataset : dataset,
      innerText : [e.key]
    };
    const whichKey = {
      target : target
    };
    setOperator(whichKey)
  };
  if (e.key === "=" || e.key === "Enter")
  {
    operate();
  };
};


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







