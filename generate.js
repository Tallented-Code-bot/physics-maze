function Cell(){
	this.left=true;
	this.right=true;
	this.up=true;
	this.down=true;
}


function Pointer(x,y,direction,maze){
	this.x=x;
	this.y=y;
	this.direction=direction;

	this.upNeighbor;
	this.downNeighbor;
	this.rightNeighbor;
	this.leftNeighbor;

	this.maze=maze;
}


Pointer.prototype.getNeighbors=function(){
	this.upNeighbor=this.maze[this.y-1][this.x];
	this.downNeighbor=this.maze[this.y+1][this.x];
	this.leftNeighbor=this.maze[this.y][this.x-1];
	this.rightNeighbor=this.maze[this.y][this.x+1];
}


function generateMaze(pointer,maze){
	pointer.x=5;
	pointer.y=5;
}



function generateGrid(gridWidth,gridHeight){
	var grid=[];
	for(var i=0;i<gridHeight;i++){
		grid.push([]);	
		for(var j=0;j<gridWidth;j++){
			grid[i].push(new Cell());
		}
	}
	return grid;
}

