const canvas=document.getElementById("canvas");
const context=canvas.getContext("2d");
const mazeWidth=10;
const mazeHeight=10;
var maze=[];

for(let i=0;i<mazeHeight;i++){
	maze.push([]);
	for(let j=0;j<mazeWidth;j++){
		maze[i].push(1);
	}
}


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

drawMaze(maze,context);

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