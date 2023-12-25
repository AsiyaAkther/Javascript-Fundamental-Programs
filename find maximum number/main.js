var firstNum = parseFloat(prompt("Enter First Number:"));
var SecNum = parseFloat(prompt("Enter Second Number:"));
var ThirdNum = parseFloat(prompt("Enter Third Number:"));

var maxNum = firstNum > SecNum && firstNum > ThirdNum ? firstNum : SecNum > firstNum && SecNum > ThirdNum ? SecNum : ThirdNum;
document.write("Maximum Number is = " + maxNum);