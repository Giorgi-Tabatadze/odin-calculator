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
/*
i allows us to track on which part of the calculation we are. 
i = 0 --> starting position. 
i = 1 -> we are setting up first operand(triggered when we press any number button)
i = 2 --> we are setting up the second number (triggered after selecting the
operation to perform)
i =3 We have calculated the result and the number returned becomes first operand, 
you have a possibility to select operand which will trigger i = 2 or press any number and
trigger i = 1
*/
i = 0;


//numbers and operations
function numberEvents(e){
  if (i === 0 && e.target.innerText !== ".") {
    a = "";
    i = 1;
  };
  if (i === 0 && e.target.innerText === ".") {
    a = "0.";
    i = 1;
    textDisplay = a;
    updateDisplay();
  };

  if (i === 1) {
    if (a === "0" && e.target.innerText !== "."){
      a = "";
    }
    if (a === "0" && e.target.innerText === "."){
      a = "0.";
      textDisplay = a;
      updateDisplay();
    }
    if (e.target.innerText === "." && a.includes(".")) {
      return;
    }
    a += e.target.innerText
    textDisplay = a;
    updateDisplay();
  } else if (i === 2) {
    if (b === "" && e.target.innerText === "."){
      return;
    }
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

function backSpace(e){
  if (i === 0) {
    a = "";
    i = 1;

  };
  if (i === 1 && a.length < 2) {
    clear();
  } else if (i ===1) {
    a = a.slice(0, -1);
    textDisplay = a;
    updateDisplay();
  };
  if (i === 2 && isNaN(textDisplay.slice(-1))) {
    operation = "";
    i = 1;
    textDisplay = textDisplay.slice(0, -1);
    updateDisplay();
  } else if (i === 2) {
    b = b.slice(0, -1);
    textDisplay = textDisplay.slice(0, -1);
    updateDisplay();
  }
  if (i === 3){
    clear();
  }
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
};

function keyPress (e){
  if (e.key === " "){
    return;
  }
  if (e.key === "Backspace") {
    const target = {
      innerText : e.key
    };
    const whichKey = {
      target : target
    };
    backSpace(whichKey);
  };
  if (!isNaN(Number(e.key)) || e.key === ".") {
    const target = {
      innerText : e.key
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
  if (e.key === "%") {
    percent();
  }
};


// animations 
function clickAnimation (e) {
  const key = document.querySelector(`button[data-key="${e.target.dataset.key}"]`)
  if (!key) return;
  key.classList.add("playing")
};
function removeClickTransition (e) {
  allButtons.forEach(button => {
      button.classList.remove("playing");
    
  });
};
function animation (e) {
  const key = document.querySelector(`button[data-key="${e.key}"]`)
  if (!key) return;
  key.classList.add("playing")
};
function removeTransition (e) {
  const key = document.querySelector(`button[data-key="${e.key}"]`)
  if (!key) return;
  key.classList.remove("playing")
};




//operations
const buttons = Array.from(document.querySelectorAll(".green"));

const btnDivide = document.querySelector("#divide");
const btnMultiply = document.querySelector("#multiply");
const btnSubstract = document.querySelector("#substract");
const btnAdd = document.querySelector("#add");
const btnEqual = document.querySelector("#equal");
const btnAC = document.querySelector("#ac");
const btnPlusMinus = document.querySelector("#plusminus");
const btnPercent = document.querySelector("#percent");

//Event listeners that make changes to equasion

//number buttons
buttons.forEach(button => {
  button.addEventListener("mousedown", numberEvents)
});

//operation buttons
btnDivide.addEventListener("mousedown", setOperator);
btnMultiply.addEventListener("mousedown", setOperator);
btnSubstract.addEventListener("mousedown", setOperator);
btnAdd.addEventListener("mousedown", setOperator);
btnEqual.addEventListener("mousedown", operate);
btnAC.addEventListener("mousedown", clear);
btnPlusMinus.addEventListener("mousedown", makeNegative);
btnPercent.addEventListener("mousedown", percent);

//click animation event listeners
const allButtons = Array.from(document.querySelectorAll("button"));

//numbers animation
buttons.forEach(button => {
  button.addEventListener("mousedown", clickAnimation)
});

//operations animation
btnDivide.addEventListener("mousedown", clickAnimation);
btnMultiply.addEventListener("mousedown", clickAnimation);
btnSubstract.addEventListener("mousedown", clickAnimation);
btnAdd.addEventListener("mousedown", clickAnimation);
btnEqual.addEventListener("mousedown", clickAnimation);
btnAC.addEventListener("mousedown", clickAnimation);
btnPlusMinus.addEventListener("mousedown", clickAnimation);
btnPercent.addEventListener("mousedown", clickAnimation);

//remove click animations
window.addEventListener("mouseup", removeClickTransition);


//keypress functional event listeners
document.addEventListener("keydown", keyPress);
//keypress animation event listeners
document.addEventListener("keydown", animation);
window.addEventListener("keyup", removeTransition)


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







