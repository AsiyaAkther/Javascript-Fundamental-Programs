var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + lastName;
document.write("User Name: " + fullName + "<br>");

var len = fullName.length;
document.write("Name Length: " + len + "<br>");

var capital = fullName.toLocaleUpperCase();
document.write("Name Uppercase: " + capital + "<br>");

var position = fullName.charAt(1);
document.write("2nd position value is: " + position);