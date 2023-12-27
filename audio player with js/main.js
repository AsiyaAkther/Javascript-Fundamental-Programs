var len = document.querySelectorAll(".button").length;

// add event listener with buttons

for(var i = 0; i <len; i++){
    document.querySelectorAll(".button")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        audioPlay(text);
        playAnimation(text);
    });
}

// add event listener with keyboard keys

document.addEventListener("keypress", function(event) {
    var text = event.key;
    audioPlay(text);
    playAnimation(text);
})

// audio play function

function audioPlay(text){
    switch(text){
        case "a":
            var audio = new Audio("audios/audio1.mp3");
            audio.play();
            break;

        case "b":
            var audio = new Audio("audios/audio2.mp3");
            audio.play();
            break;

        case "c":
            var audio = new Audio("audios/audio3.mp3");
            audio.play();
            break;
    }
};

// animation adding function

function playAnimation(text){
    var button = document.querySelector("." + text);
    button.classList.add("anim");

    setTimeout(function() {
        button.classList.remove("anim");
    }, 2000);
};