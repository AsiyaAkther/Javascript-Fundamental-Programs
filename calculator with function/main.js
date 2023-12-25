// Addition function

function addition(num1, num2){
    var sum = num1 + num2;
    return sum;
}

// Subtraction function

function subtraction(num1, num2){
    var sub = num1 - num2;
    return sub;
}

// Multiplication function

function multiplication(num1, num2){
    var mul = num1 * num2;
    return mul;
}

// Division function

function division(num1, num2){
    var div = num1 / num2;
    return div;
}

// Modulus function

function modulus(num1, num2){
    var mod = num1 % num2;
    return mod;
}

// Calling functions

document.write("Summation = " + addition(67, 84) + "<br>");
document.write("Subtraction = " + subtraction(54, 28) + "<br>");
document.write("Multiplication = " + multiplication(16, 8) + "<br>");
document.write("Division = " + division(32, 4) + "<br>");
document.write("Modulus = " + modulus(67, 5));