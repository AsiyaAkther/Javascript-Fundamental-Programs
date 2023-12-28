var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

// Create rectangle
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.strokeRect(8,8,384,284);
ctx.fillStyle = "green";
ctx.fillRect(10,10,380,280);

// Find canvas center
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

// Create circle
ctx.beginPath();
ctx.arc(centerX,centerY,80,0,2*Math.PI,false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();