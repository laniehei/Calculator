let result = 0;
let intermitent = '';
let previousOperator = null;
const screen = document.querySelector(".screen");

document.querySelector('.calculator-buttons').addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
});

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        isSymbol(value);
    } 
    else {
        isNumber(value);
    }
    showMe();
}

function isSymbol(value) {
    switch (value) {
        case "C":
            result = 0
            intermitent = "";
            break;
        case "⌫":
            if (intermitent.length <= 1) {
                intermitent = '';
            } else {
                intermitent = intermitent.substring(0, intermitent.length-1);
            }
        case ".":
            intermitent += '.';
            return;
        case "=":
            if (!previousOperator) {
                return;
            } else {
                doMath(intermitent);
                previousOperator = null;
                intermitent = "" + result;
                result = 0;
                break;
            }
        default:
            doMath(value);
            break;

    }
}

function doMath(value) {
    const intIntermitent = parseFloat(intermitent);
    if (result === 0) {
        result = intIntermitent; //if this is the first time entering a number, we need to store this number
    } else {
        if (previousOperator === "+") {
            result += intIntermitent;
        } else if (previousOperator === "-") {
            result -= intIntermitent;
        } else if (previousOperator === "×") {
            result *= intIntermitent;
        } else if (previousOperator === "/") {
            result /= intIntermitent; 
        }
    }
    previousOperator = value; //stores + - x / =
    intermitent = '';
}

function isNumber(value) {
    intermitent += value;
    showMe();
}

function showMe() {
    screen.innerText = intermitent;
}