/*12. Build Modular Calculator App. Create calculator.js module.Export at least 4 functions (add, sub, mul, div) Create app.js to import calculator module. Take numbers from variables and print results. Organize project properly.*/


function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

module.exports = { add, sub, mul, div };