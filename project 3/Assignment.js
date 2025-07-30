// ----------------------------------------- TASK 1 -----------------------------------------

function type(variable) {
    return typeof variable;
}

// ----------------------------------------- TASK 2 -----------------------------------------

function isNum(num) {
    return typeof num === "number" ? true : false;
}

function sum(num1,num2){
    return isNum(num1) && isNum(num2) ? num1+ num2 : "please enter numbers only";
}

function sub(num1,num2){
    return isNum(num1) && isNum(num2) ? num1 - num2 : "please enter numbers only";
}

function mult(num1,num2){
    typeof isNum(num1) && isNum(num2) ? num1 * num2 : "please enter numbers only";
}

function div(num1,num2){
    return !(isNum(num1) && isNum(num2)) 
    ? "please enter numbers only" 
    : num2 != 0 
    ? num1 / num2 
    : "Error: Division by zero" ;
}

// ----------------------------------------- TASK 3 -----------------------------------------

function isNaN(value) {
    return Number.isNaN(value);
}

// ----------------------------------------- TASK 4 -----------------------------------------

function isEven(num) {
    return isNum(num) && num % 2 == 0 ? true : "please enter numbers only";
}

// ----------------------------------------- TASK 5 -----------------------------------------

function stringsWithSpace(str1, str2) {
    return str1 + " " + str2;
}

// ----------------------------------------- TASK 6 -----------------------------------------

function upcaseString(str) {
    return str.toUpperCase();
}

// ----------------------------------------- TASK 7 -----------------------------------------

function indexString(str, index) {
    return str[index];
}

// ----------------------------------------- TASK 8 -----------------------------------------

function greet(name) {
    return "Hello , " + name;
}

// ----------------------------------------- TASK 9 -----------------------------------------

function checkIfNullOrUndefined(value) {
    if (value === null) {
    return "Value is null";
    } else if (value === undefined) {
    return "Value is undefined";
    } else {
    return "Value is neither null nor undefined";
    }
}


// ----------------------------------------- TASK 10 -----------------------------------------

function randomNumBtweenTwoNums(num1,num2) {
    return num1 > num2 ? num2 + (num1 - num2) * Math.random () : num1 + (num2 - num1) * Math.random ();
}

// ----------------------------------------- TASK 11 -----------------------------------------

function pOrNorZ(num) {
    if(isNum(num)){
        if (num > 0) {
            return "Positive";
        }
        else if(num > 0){
            return "Negative";
        }
        else{
            return "Zero";
        }
    }
    else{
        return "please enter numbers only";
    }
}

// ----------------------------------------- TASK 12 -----------------------------------------

function safeEvaluate(expression) {
    return eval(expression);
}

console.log(upcaseString("asdgfwg"));