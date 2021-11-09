// ===*VARIABLES*=== //
var comma = false;

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

// Reset button
function reset() {
    document.getElementById("input").innerHTML = "";
    comma = false;
}
