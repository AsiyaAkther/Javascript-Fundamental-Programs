var numberOfWon = 0;
var numberOfLost = 0;

for(i = 1; i <= 5; i++){
    var guessNumber = parseInt(prompt("Enter a number between 1 to 10:"));
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    if(guessNumber == randomNumber){
        console.log("You have won");
        numberOfWon ++;
    }
    else{
        console.log("You have lost. Random number is " + randomNumber);
        numberOfLost ++;
    }
}
document.write("You have won " + numberOfWon + " times <br>");
document.write("You have lost " + numberOfLost + " times");