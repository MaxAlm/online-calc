// ===*VARIABLES*=== //
var maxLength = 60;     // Controls max length of equation allowed 
var comma = false;      // Keeps track of if comma has been entered or not
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
    if (input.innerText != "") {
        var num = parseFloat(input.innerHTML.replace(",", "."));
        numbers.push(num);

        if (calc.innerText.length + input.innerText.length + 3 <= maxLength) {
            switch (operator) {
                case "÷":
                    calc.innerHTML += ` ${num.toString().replace(".", ",")} ÷`;
                    operators.push("÷");
                    break;
                
                case "×":
                    calc.innerHTML += ` ${num.toString().replace(".", ",")} ×`;
                    operators.push("×");
                    break;
                
                case "−":
                    calc.innerHTML += ` ${num.toString().replace(".", ",")} −`;
                    operators.push("−");
                    break;
                
                case "+":
                    calc.innerHTML += ` ${num.toString().replace(".", ",")} +`;
                    operators.push("+");
                    break;
            }
        }
        else {
            return;
        }
    }
    else {
        calc.innerText = calc.innerText.substring(0, calc.innerText.length - 1);
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

    input.innerText = input.innerText.substring(0, input.innerText.length - 1);

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
