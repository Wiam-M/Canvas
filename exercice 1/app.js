var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// the triangle
ctx.beginPath();
ctx.moveTo(60,20);// bouge ton stylo jusuq'a x= 20 et y=30 point de depart
ctx.lineTo(11,70);
ctx.lineTo(119,70);
ctx.closePath();


// the fill color
ctx.fillStyle = "#d7823e";
ctx.fill();

//rectangle
ctx.fillStyle = 'rgb(167, 200, 239)';
ctx.fillRect(10, 70, 110, 100);

//petit rectangle
ctx.fillStyle = 'rgb(201, 201, 201)';
ctx.fillRect(21, 75, 25, 21);

//petit rectangle
ctx.fillStyle = 'rgb(201, 201, 201)';
ctx.fillRect(81, 75, 25, 21);

//petit rectangle
ctx.fillStyle = 'rgb(201, 201, 201)';
ctx.fillRect(50, 130, 29, 40);




