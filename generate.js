function Cell() {
	this.left = true;
	this.right = true;
	this.up = true;
	this.down = true;
	this.visited=false;
}


function Pointer(x, y, direction, maze,mazeWidth,mazeHeight,context) {
	this.x = x;
	this.y = y;
	this.direction = direction;

	this.upNeighbor;
	this.downNeighbor;
	this.rightNeighbor;
	this.leftNeighbor;
	this.current;
	this.forwardNeighbor;

	this.maze = maze;
	this.mazeWidth=mazeWidth;
	this.mazeHeight=mazeHeight

	this.context=context;
}



Pointer.prototype.moveUp=function(amount){
	for(var i=0;i<amount;i++){
		this.y--;
		if(this.y<0){
			this.y++;
			return false
		}
	}
	this.getNeighbors();
	return true;
}


Pointer.prototype.moveDown=function(amount){
	for(var i=0;i<amount;i++){
		this.y++;
		if(this.y>this.mazeHeight-1){
			this.y--;
			return false
		}
	}
	this.getNeighbors();
	return true;
}



Pointer.prototype.moveLeft=function(amount){
	for(var i=0;i<amount;i++){
		this.x--;
		if(this.x<0){
			this.x++;
			return false
		}
	}
	this.getNeighbors();
	return true;
}




Pointer.prototype.moveRight=function(amount){
	for(var i=0;i<amount;i++){
		this.x++;
		if(this.x>this.mazeHeight-1){
			this.x--;
			return false
		}
	}
	this.getNeighbors();
	return true;
}


Pointer.prototype.moveForward=function(amount){
	switch(this.direction){
		case 1:this.moveUp(amount);break;
		case 2:this.moveRight(amount);break;
		case 3:this.moveDown(amount);break;
		case 4:this.moveLeft(amount);break;
	}
}


Pointer.prototype.turnLeft=function(amount){
	for(var i=0;i<amount;i++){
		this.direction--;
		if(this.direction<1){
			this.direction=4;
		}
	}
	this.getNeighbors();
}


Pointer.prototype.turnRight=function(amount){
	for(var i=0;i<amount;i++){
		this.direction++;
		if(this.direction>4){
			this.direction=1
		}
	}
	this.getNeighbors();
}


Pointer.prototype.getNeighbors = function () {
	try{
		this.upNeighbor = this.maze[this.y - 1][this.x];
	}	
	catch(err){
		this.upNeighbor=undefined;
	}

	try{
		this.downNeighbor = this.maze[this.y + 1][this.x];
	}catch(err){
		this.downNeighbor=undefined;
	}

	try{
		this.leftNeighbor = this.maze[this.y][this.x - 1];
	}catch(err){
		this.leftNeighbor=undefined;
	}

	try{
		this.rightNeighbor = this.maze[this.y][this.x + 1];
	}catch(err){
		this.rightNeighbor=undefined;
	}
	this.current=this.maze[this.y][this.x];
	console.log(this.current);
	
	switch(this.direction){
		case 1:this.forwardNeighbor=this.upNeighbor;break;
		case 2:this.forwardNeighbor=this.rightNeighbor;break;
		case 3:this.forwardNeighbor=this.downNeighbor;break;
		case 4:this.forwardNeighbor=this.leftNeighbor;break;
	}

	this.current.visited=true;
}


Pointer.prototype.carveUp=function(){
	this.current.up=false;
	this.upNeighbor.down=false;
	this.upNeighbor.visited=true;
	drawBetterMaze(this.maze,this.context);
}

Pointer.prototype.carveDown=function(){
	this.current.down=false;
	this.downNeighbor.up=false;
	this.downNeighbor.visited=true;
	drawBetterMaze(this.maze,this.context);
}

Pointer.prototype.carveLeft=function(){
	this.current.left=false;
	this.leftNeighbor.right=false;
	this.leftNeighbor.visited=true;
	drawBetterMaze(this.maze,this.context);
}

Pointer.prototype.carveRight=function(){
	this.current.right=false;
	this.rightNeighbor.left=false;
	this.rightNeighbor.visited=true;
	drawBetterMaze(this.maze,this.context);
}

Pointer.prototype.carveForward=function(){
	switch(this.direction){
		case 1:this.carveUp();break;
		case 2:this.carveRight();break;
		case 3:this.carveDown();break;
		case 4:this.carveLeft();break;
	}
}


function generateMaze(pointer) {
	//randomly choose a starting cell
	//this will be changed later
	//choose a random wall and break it
	pointer.getNeighbors();
	pointer.carveForward();
	pointer.moveForward(1);
	checkDirections(pointer.direction,pointer);
	pointer.moveForward(-1);	
}


function checkDirections(startDirection,pointer) {
	var random = randomInteger(-1, 1)
	pointer.turnRight(random);	//turn either left, right, or straight at random
	for (var i = 0; i < 4; i++) {
		if (!(  pointer.forwardNeighbor == undefined||pointer.forwardNeighbor.visited)) {
			generateMaze(pointer);
		}
		pointer.turnRight(1);
	}
	pointer.direction=startDirection;	
}


/**
 * Creates an empty grid.
 * @param {integer} gridWidth Width of the grid to be generated
 * @param {integer} gridHeight Height of the grid to be generated
 * @returns The finished grid
 */
function generateGrid(gridWidth, gridHeight) {
	var grid = [];
	for (var i = 0; i < gridHeight; i++) {
		grid.push([]);
		for (var j = 0; j < gridWidth; j++) {
			grid[i].push(new Cell());
		}
	}
	return grid;
}

/**
 * Picks a random number from min to max.
 * @param {integer} min Minimum number, inclusive
 * @param {integer} max Maximum number, inclusive
 * @returns integer from min to max inclusive
 */
function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}