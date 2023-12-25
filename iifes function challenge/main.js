(function summation(num1, num2){
    var sum = num1 + num2;
    document.write("Summation = " + sum + "<br>");
}(43, 78));

// Function Expression

var subResult = function subtraction(num1, num2){
    var sub = num1 - num2;
    document.write("Subtraction = " + sub);
}
subResult(30, 8);