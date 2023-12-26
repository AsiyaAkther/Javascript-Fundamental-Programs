var images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];
var imgTag = document.querySelector("img");
var count = 0;

function next(){
    count ++;

    if(count >= images.length){
        count = 0;
        imgTag.src = images[count];
    }else{
        imgTag.src = images[count];
    }
};

function prev(){
    count --;

    if(count < 0){
        count = images.length - 1;
        imgTag.src = images[count];
    }else{
        imgTag.src = images[count];
    }
};