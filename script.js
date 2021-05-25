const canvas=document.getElementById("canvas");
const context=canvas.getContext("2d");
let LEFT,RIGHT,UP,DOWN;
let balls=[];

class Ball{
	constructor(x,y,radius){
		this.position=new Vector(x,y);
		this.velocity=new Vector(0,0);
		this.acceleration=new Vector(0,0);
		this.radius=radius;
		balls.push(this);
	}
	draw() {
		context.strokeStyle = "black";
		context.fillStyle = "red";
		context.beginPath();
		context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
		context.stroke();
		context.fill();
	}

}




class Vector{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}

	getadd(v) {
		return new Vector(this.x + v.x, this.y + v.y)
	}

	setadd(v){
		this.x+=v.x;
		this.y+=v.y;
	}

	getsubtract(v) {
		return new Vector(this.x - v.x, this.y - v.y)
	}

	setsubtract(v){
		this.x-=v.x;
		this.y-=v.y
	}

	getmag(){
		return Math.sqrt(this.x**2+this.y**2)
	}

	getmult(scalar){
		return new Vector(this.x*scalar,this.y*scalar);
	}

	setmult(scalar){
		this.x*=scalar;
		this.y*=scalar;
	}

	draw(startPosition,n,color){
		context.beginPath();
		context.moveTo(startPosition.x,startPosition.y);
		context.lineTo(startPosition.getadd(this.getmult(n)).x,startPosition.getadd(this.getmult(n)).y)
		context.strokeStyle=color;
		context.stroke();
	}



}



new Ball(200,200,30);
new Ball(300,300,20);


function keyControl(b){
	if(UP)b.acceleration.y-=0.01;
	if(DOWN)b.acceleration.y+=0.01;
	if(LEFT)b.acceleration.x-=0.01;
	if(RIGHT)b.acceleration.x+=0.01;

	b.velocity.setadd(b.acceleration);

	b.velocity.setmult(0.8);

	b.position.setadd(b.velocity);
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
function draw(){
	context.clearRect(0,0,context.canvas.width,context.canvas.height);
	for(let i=0;i<balls.length;i++){
		balls[i].draw();	
		balls[i].velocity.draw(balls[i].position,100,"green");
		balls[i].acceleration.draw(balls[i].position,10,"black");
	}
}


window.requestAnimationFrame(loop);
function loop(){
	keyControl(balls[0]);
	draw();
	window.requestAnimationFrame(loop);
}