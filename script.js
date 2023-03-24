let calculatorBoard = document.getElementById("span");
// calculatorBoard = "";
let stringData = "";

function takeTheNumbers1(){
    let number1 = document.getElementById("1").value;
    calculatorBoard.innerHTML += number1;
    stringData += number1;
}
function takeTheNumbers2(){
    let number1 = document.getElementById("2").value;
    calculatorBoard.innerHTML += number1;
    stringData += number1;
}
function takeTheNumbers3(){
    let number1 = document.getElementById("3").value;
    calculatorBoard.innerHTML += number1;
    stringData += number1;
}
function takeTheNumbers4(){
    let number1 = document.getElementById("4").value;
    calculatorBoard.innerHTML += number1;
    stringData += number1;
}
function takeTheNumbers5(){
    let number1 = document.getElementById("5").value;
    calculatorBoard.innerHTML += number1;
    stringData += number1;
}
function takeTheNumbers6(){
    let number1 = document.getElementById("6").value;
    calculatorBoard.innerHTML += number1;
    stringData += number1;
}
function takeTheNumbers7(){
    let number1 = document.getElementById("7").value;
    // number1 = "7"
    calculatorBoard.innerHTML += number1;
    // "" = "" + "7"
    stringData += number1;
}
function takeTheNumbers8(){
    let number1 = document.getElementById("8").value;
    calculatorBoard.innerHTML += number1;
    stringData += number1;
}
function takeTheNumbers9(){
    let number1 = document.getElementById("9").value;
    calculatorBoard.innerHTML += number1;
    stringData += number1;
}
function takeTheNumbers0(){
    let number1 = document.getElementById("0").value;
    calculatorBoard.innerHTML += number1;
    stringData += number1;
}
function takeTheNumbersPlus(){
    let number1 = document.getElementById("plus").value;
    calculatorBoard.innerHTML += number1;
    stringData += number1;
}
function takeTheNumbersMinus(){
    let number1 = document.getElementById("minus").value;
    calculatorBoard.innerHTML += number1;
    stringData += number1;
}
function takeTheNumbersMult(){
    let number1 = document.getElementById("mult").value;
    calculatorBoard.innerHTML += number1;
    stringData += number1;
}
function takeTheNumbersDivis(){
    let number1 = document.getElementById("divis").value;
    calculatorBoard.innerHTML += number1;
    stringData += number1;
}
function takeTheNumbersPoint(){
    let number1 = document.getElementById("point").value;
    calculatorBoard.innerHTML += number1;
    stringData += number1;
}
function takeTheNumbersRemove(){
    stringData = "";
    let removeBoard = stringData;
    calculatorBoard.innerHTML = removeBoard;
}
function takeTheNumbersEquel(){
    let answerOfCalc = stringData;
    calculatorBoard.innerHTML = eval(answerOfCalc);
    stringData = calculatorBoard.innerHTML;
}






