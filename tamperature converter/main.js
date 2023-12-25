var tempType = prompt("Which temperature you want to convert? Fahrenheit or Celsius");

if(tempType == "Fahrenheit" || tempType == "fahrenheit"){
    var farnF = parseFloat(prompt("Enter Fahrenheit: "));
    var celsF = (farnF - 32) * (5/9);
    celsF = celsF.toFixed(3);
    document.write("Celsius = " + celsF);
}
else if(tempType == "Celsius" || tempType == "celsius"){
    var celsC = parseFloat(prompt("Enter Celsius: "));
    var farnC = (celsC * (9/5)) + 32;
    farnC = farnC.toFixed(3);
    document.write("Fahrenheit =  " + farnC);
}
else{
    document.write("Please enter valid temperature type");
}