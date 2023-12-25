var marks = parseInt(prompt("Enter Your Marks: "));

if(marks <= 100 && marks >= 80){
    document.write("Your Mark = " + marks + "<br> Letter Grade = A+ 🤩 <br> Grade Point = 5");
}
else if(marks <= 79 && marks >= 70){
    document.write("Your Mark = " + marks + "<br> Letter Grade = A 🥰 <br> Grade Point = 4");
}
else if(marks <= 69 && marks >= 60){
    document.write("Your Mark = " + marks + "<br> Letter Grade = A- 💝 <br> Grade Point = 3.5");
}
else if(marks <= 59 && marks >= 50){
    document.write("Your Mark = " + marks + "<br> Letter Grade = B 👌 <br> Grade Point = 3");
}
else if(marks <= 49 && marks >= 40){
    document.write("Your Mark = " + marks + "<br> Letter Grade = C 👍 <br> Grade Point = 2");
}
else if(marks <= 39 && marks >= 33){
    document.write("Your Mark = " + marks + "<br> Letter Grade = D 🙂 <br> Grade Point = 1");
}
else if(marks < 33){
    document.write("Fail 😔")
}
else{
    document.write("🤔 Out of range. Your mark should be between 1 to 100.");
}