let display = document.getElementById("display");
let expression = ''

function addDisplay(val) {
    console.log(val);
     
    expression = expression + val;
    display.value = expression;
}

function calculate(){
    let result = eval(expression);
    console.log(expression);
    display.value = result;
}
function clearDisplay(){
    expression = '';
    display.value = '';

}
