var scores = [20,10,114,56,74,105,94,135,138,190,142,35,67,85,30,45,64];

function highestScore(score){
    var maxNum = score[0];
    for(var i = 1; i < score.length; i++){
        if(maxNum < score[i]){
            maxNum = score[i];
        }
    }
    return maxNum;
}
var result = highestScore(scores);
document.write("Maximum number is = " + result);