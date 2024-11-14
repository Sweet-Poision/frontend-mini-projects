const buttonSeven = document.getElementById("buttonSeven");
const buttonEight = document.getElementById("buttonEight");
const buttonNine = document.getElementById("buttonNine");
const buttonErase = document.getElementById("buttonErase");
const buttonDivision = document.getElementById("buttonDivision");
const buttonFour = document.getElementById("buttonFour");
const buttonFive = document.getElementById("buttonFive");
const buttonSix = document.getElementById("buttonSix");
const buttonSignToggle = document.getElementById("buttonSignToggle");
const buttonMultiply = document.getElementById("buttonMultiply");
const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");
const buttonModulo = document.getElementById("buttonModulo");
const buttonSubtract = document.getElementById("buttonSubtract");
const buttonClearAll = document.getElementById("buttonClearAll");
const buttonZero = document.getElementById("buttonZero");
const buttonDecimal = document.getElementById("buttonDecimal");
const buttonEquals = document.getElementById("buttonEquals");
const buttonAdd = document.getElementById("buttonAdd");
const display = document.getElementById("display");

let historyCount = 0;

function copyToClipboard(element) {
    expression = element.innerText.toString();
    updateDisplay("na");
}

function checkDecimalInLastNumber() {
    for (let i = expression.length - 1; i >= 0; i--) {
        if (
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(expression[i])
        ) {
            continue;
        }
        if (expression[i] === ".") {
            return false;
        } else {
            break;
        }
    }
    return true;
}

function updateHistory(solution) {
    historyCount++;
    const historyItemId = "item" + historyCount;
    const historyArea = document.getElementById("historyArea");
    const htmlHistoryItem = '<div id=\"' + historyItemId + '`\" class=\"history-items\">' + expression + '<div onclick=\"copyToClipboard(this)\">' + solution + '</div></div>';
    historyArea.innerHTML += htmlHistoryItem;
}

function lastNumber() {
    let number = "";
    for (let i = expression.length - 1; i >= 0; i--) {
        if (expression[i] === "(") {
            continue;
        }
        if (
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-"].includes(
                expression[i]
            )
        ) {
            number += expression[i];
        } else {
            break;
        }
    }
    return number;
}

function updateDisplay(operation) {
    if (operation === "erase") {
        if (expression.length > 1) {
            if (expression[expression.length - 1] === ")") {
                let expressionUptoLastBracket = "";
                for (let i = expression.length - 2; i >= 0; i--) {
                    if (expression[i] === "(") {
                        expression = expression.slice(0, i);
                        break;
                    }
                    expressionUptoLastBracket += expression[i];
                }
                expression += expressionUptoLastBracket
                    .slice(0, -1)
                    .split("")
                    .reverse()
                    .join("");
            } else {
                expression = expression.slice(0, -1);
            }
        } else {
            expression = "0";
        }
    } else if (operation === "ac") {
        expression = "0";
    } else if (
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(operation)
    ) {
        if (expression === "0") {
            expression = operation;
        } else if (expression.length > 1 && lastNumber() === "0") {
            expression = expression.slice(0, -1) + operation;
        } else if (expression[expression.length - 1] === ")") {
            expression += "x" + operation;
        } else {
            expression += operation;
        }
    } else if (operation === ".") {
        if (
            checkDecimalInLastNumber() &&
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
                expression[expression.length - 1]
            )
        ) {
            expression += operation;
        } else if (
            ["+", "-", "x", "/", "%"].includes(expression[expression.length - 1])
        ) {
            expression += "0" + operation;
        } else if (expression[expression.length - 1] === ")") {
            expression += "x0" + operation;
        }

    } else if (["+", "-", "x", "/", "%"].includes(operation)) {
        if (["+", "-", "x", "/", "%"].includes(expression[expression.length - 1])) {
            expression = expression.slice(0, -1) + operation;
        } 
        else if (expression[expression.length - 1] === ".") {
            expression += "0" + operation;
        }
        else {
            expression += operation;
        }
    } else if (operation === "sign") {
        if (expression[expression.length - 1] === ")") {
            let expressionUptoLastBracket = "";
            for (let i = expression.length - 2; i >= 0; i--) {
                if (expression[i] === "(") {
                    expression = expression.slice(0, i);
                    break;
                }
                expressionUptoLastBracket += expression[i];
            }
            expression += expressionUptoLastBracket
                .slice(0, -1)
                .split("")
                .reverse()
                .join("");
        } else if (
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(
                expression[expression.length - 1]
            )
        ) {
            if (expression[expression.length - 1] === ".") {
                expression += "0";
            }
            let number = "";
            let i;
            for (i = expression.length - 1; i >= 0; i--) {
                if (
                    expression[i] === "." ||
                    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
                        expression[i]
                    )
                ) {
                    number += expression[i];
                    continue;
                }
                break;
            }
            expression =
                expression.slice(0, i + 1) +
                "(-" +
                number.split("").reverse().join("") +
                ")";
        }
    }
    else if (operation === "=") {
        expression = expression.replace(/x/g, '*');
        if(expression[expression.length - 1] === ".") {
            expression += "0";
        }
        const solution = eval(expression); 
        updateHistory(solution);
        expression = solution.toString(); 
    }

    if(expression.length > 34) {
        display.textContent = expression.slice(-34);
    }
    else {
        display.textContent = expression;
    }
    if (expression.length > 22) {
        display.style.fontSize = "2rem";
    } else {
        display.style.fontSize = "3rem";
    }
}

function handleKeyPress(event) {
    if (event.key === "7") {
        updateDisplay("7");
    } else if (event.key === "8") {
        updateDisplay("8");
    } else if (event.key === "9") {
        updateDisplay("9");
    } else if (event.key === "Backspace") {
        updateDisplay("erase");
    } else if (event.key === "/") {
        updateDisplay("/");
    } else if (event.key === "4") {
        updateDisplay("4");
    } else if (event.key === "5") {
        updateDisplay("5");
    } else if (event.key === "6") {
        updateDisplay("6");
    } else if (event.key === "s") {
        updateDisplay("sign");
    } else if (event.key === "x" || event.key === "*") {
        updateDisplay("x");
    } else if (event.key === "1") {
        updateDisplay("1");
    } else if (event.key === "2") {
        updateDisplay("2");
    } else if (event.key === "3") {
        updateDisplay("3");
    } else if (event.key === "%") {
        updateDisplay("%");
    } else if (event.key === "-") {
        updateDisplay("-");
    } else if (event.key === "a" || event.key === "Escape") {
        updateDisplay("ac");
    } else if (event.key === "0") {
        updateDisplay("0");
    } else if (event.key === ".") {
        updateDisplay(".");
    } else if (event.key === "=" || event.key === "Enter") {
        updateDisplay("=");
    } else if (event.key === "+") {
        updateDisplay("+");
    }
}

let expression = "0";

buttonSeven.addEventListener("click", () => {
    updateDisplay("7");
});
buttonEight.addEventListener("click", () => {
    updateDisplay("8");
});
buttonNine.addEventListener("click", () => {
    updateDisplay("9");
});
buttonErase.addEventListener("click", () => {
    updateDisplay("erase");
});
buttonDivision.addEventListener("click", () => {
    updateDisplay("/");
});
buttonFour.addEventListener("click", () => {
    updateDisplay("4");
});
buttonFive.addEventListener("click", () => {
    updateDisplay("5");
});
buttonSix.addEventListener("click", () => {
    updateDisplay("6");
});
buttonSignToggle.addEventListener("click", () => {
    updateDisplay("sign");
});
buttonMultiply.addEventListener("click", () => {
    updateDisplay("x");
});
buttonOne.addEventListener("click", () => {
    updateDisplay("1");
});
buttonTwo.addEventListener("click", () => {
    updateDisplay("2");
});
buttonThree.addEventListener("click", () => {
    updateDisplay("3");
});
buttonModulo.addEventListener("click", () => {
    updateDisplay("%");
});
buttonSubtract.addEventListener("click", () => {
    updateDisplay("-");
});
buttonClearAll.addEventListener("click", () => {
    updateDisplay("ac");
});
buttonZero.addEventListener("click", () => {
    updateDisplay("0");
});
buttonDecimal.addEventListener("click", () => {
    updateDisplay(".");
});
buttonEquals.addEventListener("click", () => {
    updateDisplay("=");
});
buttonAdd.addEventListener("click", () => {
    updateDisplay("+");
});
document.addEventListener("keydown", handleKeyPress);
