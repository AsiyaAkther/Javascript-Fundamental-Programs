var num1 = prompt("Enter First Number:");
var num2 = prompt("Enter Second Number:");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var sum = num1 + num2;
document.write(num1 + " + " + num2 + " = " + sum + "<br>");

var sub = num1 - num2;
document.write(num1 + " - " + num2 + " = " + sub + "<br>");

var mul = num1 * num2;
document.write(num1 + " * " + num2 + " = " + mul + "<br>");

var div = num1 / num2;
var divResult = div.toFixed(2);
document.write(num1 + " / " + num2 + " = " + divResult + "<br>");

var mod = num1 % num2;
document.write(num1 + " % " + num2 + " = " + mod);