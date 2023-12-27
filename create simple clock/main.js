var button = document.querySelector('.btn');
var para = document.querySelector('p');

button.addEventListener('click', startClock);
function startClock () {
    let date = new Date();

    let hour = date.getHours() % 12;
    let min = date.getMinutes();
    let sec = date.getSeconds();

    min = formatTime(min);
    sec = formatTime(sec);

    let time = hour + ':' + min + ':' + sec;

    para.textContent = time;
    setInterval(startClock, 1000);
};

function formatTime(value){
    if(value < 10){
        value = "0" + value;
    }
    return value;
};
