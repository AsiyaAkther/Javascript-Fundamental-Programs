var areaName = prompt("Which area you want to calculate");
if(areaName == "Square" || areaName == "square"){
    var base = parseFloat(prompt("Enter Base:"));
    var height = parseFloat(prompt("Enter Height:"));

    var square = base * height;
    document.write("Square Area = " + square);
}
else if(areaName == "Rectangle" || areaName == "rectangle"){
    var base = parseFloat(prompt("Enter Base:"));
    var height = parseFloat(prompt("Enter Height:"));

    var rectangle = base * height;
    document.write("Rectangle Area = " + rectangle);
}
else if(areaName == "Triangle" || areaName == "triangle"){
    var base = parseFloat(prompt("Enter Base:"));
    var height = parseFloat(prompt("Enter Perpendicular Height:"));

    var triangle = (base * height) / 2;
    document.write("Triangle Area = " + triangle);
}
else if(areaName == "Trapizium" || areaName == "trapizium"){
    var a = parseFloat(prompt("Enter a:"));
    var b = parseFloat(prompt("Enter b:"));
    var height = parseFloat(prompt("Enter Height:"));

    var trapizium = ((a + b) * height) / 2;
    document.write("Trapizium Area = " + trapizium);
}
else if(areaName == "Parallelogram" || areaName == "parallelogram"){
    var base = parseFloat(prompt("Enter Base:"));
    var height = parseFloat(prompt("Enter Perpendicular Height:"));

    var parallelogram = (base * height);
    document.write("Parallelogram Area = " + parallelogram);
}
else if(areaName == "Rhombus" || areaName == "rhombus"){
    var len = parseFloat(prompt("Enter Length:"));
    var height = parseFloat(prompt("Enter Height:"));

    var rhombus = (len * height) / 2;
    document.write("Rhombus Area = " + rhombus);
}
else if(areaName == "Kite" || areaName == "kite"){
    var len = parseFloat(prompt("Enter Length:"));
    var height = parseFloat(prompt("Enter Height:"));

    var kite = (len * height) / 2;
    document.write("Kite Area = " + kite);
}
else{
    document.write("Please enter a valid area name");
}