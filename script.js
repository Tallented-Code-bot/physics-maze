const canvas=document.getElementById("canvas");
const context=canvas.getContext("2d");
let LEFT,RIGHT,UP,DOWN;


class Ball{
	constructor(x,y,radius){
		this.x=x;
		this.y=y;
		this.radius=radius;
	}
	draw() {
		context.strokeStyle = "black";
		context.fillStyle = "red";
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		context.stroke();
		context.fill();
	}

}





function keyControl(b){
	if(UP)b.y--;
	if(DOWN)b.y++;
	if(LEFT)b.x--;
	if(RIGHT)b.x++;
}








canvas.addEventListener('keydown',function(e){
	switch(e.keyCode){
		case 65:LEFT=true;break;
		case 87:UP=true;break;
		case 83:DOWN=true;break;
		case 68:RIGHT=true;break;
	}
})

canvas.addEventListener('keyup',function(e){
	switch(e.keyCode){
		case 65:LEFT=false;break;
		case 87:UP=false;break;
		case 83:DOWN=false;break;
		case 68:RIGHT=false;break;
	}
})



let ball=new Ball(100,100,20);
let ball2=new Ball(200,200,10)
window.requestAnimationFrame(loop);
function loop(){
	context.clearRect(0,0,context.canvas.width,context.canvas.height);
	keyControl(ball);
	ball.draw();
	ball2.draw();
	window.requestAnimationFrame(loop);
}