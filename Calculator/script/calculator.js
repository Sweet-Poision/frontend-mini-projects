const buttonSeven = document.getElementById('buttonSeven');
const buttonEight = document.getElementById('buttonEight');
const buttonNine = document.getElementById('buttonNine');
const buttonErase = document.getElementById('buttonErase');
const buttonDivision = document.getElementById('buttonDivision');
const buttonFour = document.getElementById('buttonFour');
const buttonFive = document.getElementById('buttonFive');
const buttonSix = document.getElementById('buttonSix');
const buttonSignToggle = document.getElementById('buttonSignToggle');
const buttonMultiply = document.getElementById('buttonMultiply');
const buttonOne = document.getElementById('buttonOne');
const buttonTwo = document.getElementById('buttonTwo');
const buttonThree = document.getElementById('buttonThree');
const buttonModulo = document.getElementById('buttonModulo');
const buttonSubtract = document.getElementById('buttonSubtract');
const buttonClearAll = document.getElementById('buttonClearAll');
const buttonZero = document.getElementById('buttonZero');
const buttonDecimal = document.getElementById('buttonDecimal');
const buttonEquals = document.getElementById('buttonEquals');
const buttonAdd = document.getElementById('buttonAdd');
const display = document.getElementById('display');

function updateDisplay(operation) {
    // work on these function and set the erase funciton to work accordingly as 
    // currently the funciton is not working for examples with decimals
    if (operation === 'erase') {
        if(expression.length > 1) {
            if(expression[expression.length - 1] === ')') {
                const lastNumber = expression[expression.length - 2];
                expression = expression.slice(0, -4);
                expression += lastNumber;
            }
            else {
                expression = expression.slice(0, -1);
            }
        }
        else {
            expression = '0';
        }
    }
    else if (operation === 'ac') {
        expression = "0";
    }
    else if (operation === 'sign') {

    }

    display.textContent = expression;
}

let expression = "10+(-2)+1";

buttonSeven.addEventListener('click', () => { updateDisplay('7');});
buttonEight.addEventListener('click', () => { updateDisplay('8');});
buttonNine.addEventListener('click', () => { updateDisplay('9');});
buttonErase.addEventListener('click', () => { updateDisplay('erase');});
buttonDivision.addEventListener('click', () =>  { updateDisplay('/');});
buttonFour.addEventListener('click', () => { updateDisplay('4');});
buttonFive.addEventListener('click', () => { updateDisplay('5');});
buttonSix.addEventListener('click', () => { updateDisplay('6');});
buttonSignToggle.addEventListener('click', () =>  { updateDisplay('sign');});
buttonMultiply.addEventListener('click', () => { updateDisplay('x');});
buttonOne.addEventListener('click', () =>  {updateDisplay('1');});
buttonTwo.addEventListener('click', () => { updateDisplay('2');});
buttonThree.addEventListener('click', () => { updateDisplay('3');});
buttonModulo.addEventListener('click', () => { updateDisplay('%');});
buttonSubtract.addEventListener('click', () => { updateDisplay('-');});
buttonClearAll.addEventListener('click', () =>  { updateDisplay('ac');});
buttonZero.addEventListener('click', () => { updateDisplay('0');});
buttonDecimal.addEventListener('click', () =>  { updateDisplay('.');});
buttonEquals.addEventListener('click', () =>  { updateDisplay('=');});
buttonAdd.addEventListener('click', () => { updateDisplay('+');});
