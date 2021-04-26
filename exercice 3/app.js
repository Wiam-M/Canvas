var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//HEAD
ctx.beginPath();
ctx.fillStyle = "rgb(151, 111, 17)";
ctx.arc(200, 90, 60, 0, 2 * Math.PI);
ctx.closePath(); ///on ferme le chemin
ctx.fill();


//EYES LEFT

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(180, 70, 10, 0, 2 * Math.PI);
ctx.closePath(); ///on ferme le chemin
ctx.fill();


//EYES RIGHT
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(220, 70, 10, 0, 2 * Math.PI);
ctx.closePath(); ///on ferme le chemin
ctx.fill();


//EYEBROW RIGHT
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(210, 60);
ctx.bezierCurveTo(210, 60, 220, 40, 230, 60);
ctx.stroke();

//EYEBROW LEFT
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(170, 60);
ctx.bezierCurveTo(170, 60, 180, 40, 190, 60);
ctx.stroke();

//MOUTH
ctx.beginPath();
ctx.strokeStyle = "rgb(249, 17, 2)";
ctx.lineWidth="2";
ctx.moveTo(180, 100);
ctx.bezierCurveTo(180, 100, 200, 100, 220, 100);
ctx.bezierCurveTo(220, 100, 200, 140, 180, 100);
ctx.stroke();

//body

ctx.beginPath();
ctx.strokeStyle = "rgb(151, 111, 17)";
ctx.lineCap = "round"
ctx.lineWidth= 50;
ctx.moveTo(50, 160);
ctx.lineTo(350, 160)

// ctx.rect(60, 140, 275, 30);
// ctx.rect(140, 160, 120, 160);
ctx.stroke();




