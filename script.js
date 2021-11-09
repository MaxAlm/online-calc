// ===*VARIABLES*=== //
var comma = false;
const operators = [];
const numbers = [];

// ===*FUNCTIONS*=== //

// =BUTTONS= //
// Number button
function buttonNumber(num) {
    var input = document.getElementById("input");

    // If input isn't too long
    if (input.innerText.length < 16) {
        // Check if input is comma
        if (num == ",") {
            if (!comma) {
                if (input.innerHTML == "") {
                    input.innerHTML = "0,";
                    comma = true;
                } else {
                    input.innerHTML += num;
                    comma = true;
                }
            }
        }
        else {
            input.innerHTML += num;
        }
    }
}

// Operator buttons
function buttonOperator(operator) {
    var input = document.getElementById("input");
    var calc = document.getElementById("calculation");

    // Make sure new number isn't empty and fits into the calculation
    if (input.innerHTML != "") {
        numbers.push(parseFloat(input.innerHTML));
        
        if (calc.innerText.length + input.innerText.length + 3 < 80) {
            switch (operator) {
                case "÷":
                    calc.innerHTML += ` ${input.innerHTML} ÷`;
                    operators.push("÷");
                    break;
                
                case "×":
                    calc.innerHTML += ` ${input.innerHTML} ×`;
                    operators.push("×");
                    break;
                
                case "−":
                    calc.innerHTML += ` ${input.innerHTML} −`;
                    operators.push("−");
                    break;
                
                case "+":
                    calc.innerHTML += ` ${input.innerHTML} +`;
                    operators.push("+");
                    break;
            }
        }
    }
    else {
        calc.innerHTML = calc.innerHTML.substring(0, calc.innerHTML.length - 1)
        operators.pop();

        switch (operator) {
            case "÷":
                calc.innerHTML += "÷";
                operators.push("÷");
                break;
            
            case "×":
                calc.innerHTML += "×";
                operators.push("×");
                break;
            
            case "−":
                calc.innerHTML += "−";
                operators.push("−");
                break;
            
            case "+":
                calc.innerHTML += "+";
                operators.push("+");
                break;
        }
    }

    input.innerHTML = "";
    comma = false;
}

// Equals button (solve equation)
function buttonEquals() {
    
}

// Remove button
function remove() {
    var input = document.getElementById("input");

    input.innerHTML = input.innerHTML.substring(0, input.innerText.length - 1);

    // Check if comma exists
    if (input.innerHTML.indexOf(",") == -1)
    {
        comma = false;
    }
}

// Reset buttons
function reset() {
    document.getElementById("input").innerHTML = "";
    comma = false;
}

function resetFull() {
    document.getElementById("input").innerHTML = "";
    document.getElementById("calculation").innerHTML = "";
    comma = false;
}
