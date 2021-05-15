//HELPER FUNCTIONS
//###################################################
/**
 * Pointer object.
 * @param {integer} x Starting x poisiton
 * @param {integer} y Starting y position
 * @param {integer} direction Starting direction
 */
function pointer(x,y,direction){
	this.x=x;
	this.y=y;
	this.direction=direction;
}


/**
 * Moves the pointer up by the amount given.
 * If the pointer moves off the top of 
 * the screen, it moves back. 
 * @param {integer} amount Amount to move up
 */
pointer.prototype.moveUp=function(amount){
	this.y-=amount;
	if(this.isOutOfBounds()){
		this.y+=amount;
	}
}

/**
 * Moves the pointer down by the amount given.
 * If the pointer moves off the bottom of the
 * screen, it moves back.
 * @param {integer} amount Amount to move down
 */
pointer.prototype.moveDown=function(amount){
	this.y+=amount;
	if(this.isOutOfBounds()){
		this.y-=amount;
	}
}

/**
 * Moves the pointer right by the amount given.
 * If the pointer moves off the right of the
 * screen, it moves back.
 * @param {integer} amount Amount to move right
 */
pointer.prototype.moveRight=function(amount){
	this.x+=amount;
	if(isOutOfBounds()){
		this.x-=amount;
	}
}

/**
 * Moves the pointer left by the amount given.
 * If the pointer moves off the left of the 
 * screen, it moves back.
 * @param {integer} amount Amount to move left
 */
pointer.prototype.moveLeft=function(amount){
	this.x-=amount;
	if(isOutOfBounds()){
		this.x+=amount;
	}
}

/**
 * Moves the pointer in the direction it is pointing
 * in.  If the pointer moves off screen, it moves back.
 * @param {integer} amount Amount to move forward
 */
pointer.prototype.moveForward=function(amount){
	switch(this.direction){
		case 1:this.moveUp(amount);break;
		case 2:this.moveRight(amount);break;
		case 3:this.moveDown(amount);break;
		case 4:this.moveLeft(amount);break;
	}
}

/**
 * Moves the pointer in the oposite direction 
 * to the direction it is pointing in.  If the pointer
 * moves off screen, it moves back.
 * @param {integer} amount Amount to move backward
 */
pointer.prototype.moveBackward=function(amount){
	switch(this.direction){
		case 1:this.moveDown(amount);break;
		case 2:this.moveLeft(amount);break;
		case 3:this.moveUp(Pamount);break;
		case 4:this.moveRight(amount);break;
	}
}

/**
 * Turns right by the amount specified.
 * If the direction becomes larger than four,
 * it wraps around.
 * @param {integer} amount Amount to turn right
 */
pointer.prototype.turnRight=function(amount){
	this.direction+=amount;
	if(this.direction>4){
		this.direction=1;
	}
}

/**
 * Turns left by the amount specified.
 * If the direction becomes smaller than one,
 * it wraps around.
 * @param {integer} amount Amount to turn left
 */
pointer.prototype.turnLeft=function(amount){
	this.direction-=amount;
	if(this.direction<1){
		this.direction=4;
	}
}

/**
 * Checks if the pointer is outside the maze
 * @returns boolean
 */
pointer.prototype.isOutOfBounds=function(){
	if(this.x<0){
		return true;
	}
	if(this.x>mazeWidth-1){
		return true;
	}
	if(this.y<0){
		return true;
	}
	if(this.y>mazeHeight-1){
		return true;
	}
	return false;
}
//End helper functions
//########################################################



pointer.prototype.generateMaze=function(){
	console.log(this.x,this.y);
	maze[this.y][this.x]=0;
	this.moveForward(1);
	this.tryDirections(this.direction);
	this.moveBackward(1);		
};



pointer.prototype.tryDirections=function(startDirection){
	console.log("hello");
	random=Math.round(Math.random()*3);
	console.log(random)
	
	switch(random){
		case 1:this.turnLeft(1);break;
		case 2:break;
		case 3:this.turnRight(1);break;
	}	

	for(let i=0;i<4;i++){
		if(!((maze[this.y][this.x]==1)||this.isOutOfBounds())){
			this.generateMaze();
		}
		this.turnRight(1);
	}
	this.direction=startDirection;
}