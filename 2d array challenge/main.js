var twoDArray = [
    ["Robin", 40],
    ["Rumana", 105],
    ["Juned", 98],
    ["Tanha", 120],
    ["Santosh", 88]
]
function highestRunScorer(scores){
    var max = scores[0][1];
    var name;
    for(var i = 1; i < 5; i++){
        for(var j = 0; j < 2; j++){
            if(max < scores[i][j]){
                max = scores[i][j];
                name = scores[i]
            }
        }
    }
    return name;
}
var result = highestRunScorer(twoDArray);
document.write(result + "<br>");

// only for name

function highestScorer(playersInfo){
    var highestScorerPlayer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];
    for(i = 1; i < playersInfo.length; i++){
        if(highestScore < playersInfo[i][1]){
            highestScore = playersInfo[i][1];
            highestScorerPlayer = playersInfo[i][0];
        }
    }
    return highestScorerPlayer;
}
var playerName = highestScorer(twoDArray);
document.write(playerName + "<br>");