const canvas=document.getElementById("canvas");
const context=canvas.getContext("2d");
const mazeWidth=11;
const mazeHeight=11;
var maze=[];

// for(let i=0;i<mazeHeight;i++){
// 	maze.push([]);
// 	for(let j=0;j<mazeWidth;j++){
// 		maze[i].push(1);
// 	}
// }


function drawMaze(maze,context){
	tileWidth=context.canvas.width/mazeWidth;
	tileHeight=context.canvas.height/mazeHeight;	

	for(let i=0;i<maze.length;i++){//this is the vertical dimension
		for(let j=0;j<maze[i].length;j++){//this is the horizontal dimension
			if(maze[i][j]==1){
				context.fillStyle="black";
			}else if(maze[i][j]==0){
				context.fillStyle="white";
			}


			context.fillRect(j*tileWidth,i*tileHeight,tileWidth,tileHeight);
		}
	}	
}
function drawBetterMaze(maze,context){
	context.fillStyle="white";
	context.fillRect(0,0,mazeWidth,mazeHeight)
	tileWidth=context.canvas.width/mazeWidth;
	tileHeight=context.canvas.height/mazeHeight;
	context.strokeStyle="black";
	for(var i=0;i<maze.length;i++){
		for(var j=0;j<maze[i].length;j++){
			tile=maze[j][i];
			context.beginPath()//start drawing
			moveTo(j*tileWidth,i*tileHeight);//move to the top left of the tile	
			if(tile.up){
				//if we need to draw the top of the tile, we draw it
				context.lineTo((j*tileWidth)+tileWidth,i*tileHeight)
			}else{
				//else, we just move to the top right corner
				context.moveTo((j*tileWidth)+tileWidth,i*tileHeight)
			}


			if(tile.right){
				//if we need to draw the right side of the tile, draw it
				context.lineTo((j*tileWidth)+tileWidth,(i*tileHeight)+tileHeight);
			}else{
				//else, we move to the bottom right corner of the tile
				context.moveTo((j*tileWidth)+tileWidth,(i*tileHeight)+tileHeight);
			}


			if(tile.down){
				context.lineTo(j*tileWidth,(i*tileHeight)+tileHeight);
			}else{
				context.moveTo(j*tileWidth,(i*tileHeight)+tileHeight);
			}


			if(tile.left){
				context.lineTo(j*tileWidth,i*tileHeight);
			}else{
				context.moveTo(j*tileWidth,i*tileHeight);
			}
			context.stroke();
		}
	}	
}



var positionX=5;
var positionY=5;
var direction=1
maze=generateGrid(mazeWidth,mazeHeight);//make the grid
pointerVar=new Pointer(5,5,1,maze,mazeWidth,mazeHeight,context);
debugger
generateMaze(pointerVar);
drawBetterMaze(maze,context);

// var path=new pointer(5,5,1)
// path.generateMaze();
// drawMaze(maze,context);

/*
Griffpatch's algorithim:

function draw maze:
	move 1 tile
	try directions()
	move backwards 1 tile



function try directions from(start direction)
	turn randomly left, right, or straight
	repeat(4)
		if not touching edge or path
			draw maze()
		turn 90 degrees right
	point towards(start direction)



*/
/*
	The directions are represented by a number, 
	with 1 being up, 2 being right, 3 being down,
	and 4 being left.
*/





