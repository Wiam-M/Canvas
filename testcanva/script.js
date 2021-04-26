var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// ctx.strokeStyle = "red";
ctx.beginPath(); //on commence un chemin
ctx.strokeStyle = "red";
ctx.moveTo(20,30);// bouge ton stylo jusuq'a x= 20 et y=30 point de depart
ctx.lineTo(100,30);
ctx.lineTo(100, 150);
ctx.lineTo(20,150);
ctx.closePath(); ///on ferme le chemin
ctx.stroke(); // tu fais une ligne de 100 x et y 150
// ctx.closePath(); ///on ferme le chemin



// ctx.fillStyle = "red";
// ctx.fillRect(100, 100, 50, 50);
// ctx.strokeRect(10, 10, 50, 50);
