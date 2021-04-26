var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.fillStyle = "white"
ctx.moveTo(260, 160);
ctx.bezierCurveTo(260, 158, 280, 70, 320, 158);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.fillStyle = "lightgray"
ctx.moveTo(200, 200);
ctx.bezierCurveTo(200, 200, 280, 90, 385, 200);
ctx.bezierCurveTo(385, 200, 280, 300, 200, 200);
ctx.stroke();
ctx.fill();





