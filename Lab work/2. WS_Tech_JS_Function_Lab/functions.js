/* ===============================
   Q1: greet()
================================ */
function greet() {
    console.log("Hello JavaScript");
}

/* ===============================
   Q11: Arrow Function multiply
================================ */
const multiply = (a, b) => a * b;

console.log("Multiply 5 x 3 =", multiply(5, 3));

/* ===============================
   Q14: Show Current Time
================================ */
function showTime() {
    let time = new Date().toLocaleTimeString();
    alert("Current Time: " + time);
}

/* ===============================
   Q15: Take Input & Show Alert
================================ */
function showInput() {
    let value = document.getElementById("userInput").value;
    alert("You entered: " + value);
}

/* ===============================
   Q21: Reverse a String
================================ */
function reverseString() {
    let text = document.getElementById("reverseText").value;
    let reversed = text.split("").reverse().join("");
    document.getElementById("result").innerText =
        "Reversed: " + reversed;
}
