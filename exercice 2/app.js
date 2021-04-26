var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// the triangle
// ctx.beginPath();
// ctx.moveTo(60,20);// bouge ton stylo jusuq'a x= 20 et y=30 point de depart
// ctx.lineTo(11,70);
// ctx.lineTo(119,70);
// ctx.closePath();
ctx.beginPath(); //on commence un chemin
ctx.fillStyle = 'green';
ctx.fillRect(90, 70, 210, 70);
ctx.fillRect(20, 130, 370, 50);
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.fillStyle = "lightgray";
ctx.arc(55, 220, 40, 0, 2 * Math.PI);
ctx.closePath(); ///on ferme le chemin
ctx.fill();
ctx.stroke(); 



ctx.beginPath();
ctx.fillStyle = "lightgray";
ctx.arc(360, 220, 40, 0, 2 * Math.PI);
ctx.closePath(); ///on ferme le chemin
ctx.fill();
ctx.stroke(); 

