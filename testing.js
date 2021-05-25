function generateMaze(x,y){
	var totalCells=x*y;
	var cells=new Array();
	var unvisited=new Array();

	for(var i=0;i<y;i++){
		cells[i]=new Array();
		unvisited[i]=new Array();

		for(var j=0;j<x;j++){
			cells[i][j]=[0,0,0,0];
			unvisited[i][j]=true;
		}
	}


	var currentCell=[Math.floor(Math.random()*y),Math.floor(Math.random()*x)];

	var path=[currentCell];

	unvisited[currentCell[0],currentCell[1]]=false;

	var visited=1;





	while(visited<totalCells){
		var potential=[[currentCell[0]-1,currentCell[1],0,2],//top
				[currentCell[0],currentCell[1]+1,1,3],//right
				[currentCell[0+1,currentCell[1],2,0],//bottom
				[currentCell[0],currentCell[1]-1,3,1]];


		for(var l=0;l<4;l++){
			if(potential[l][0]>-1&&//if the y value is above the minimum
			  (potential[l][0]<y&&//and the y value is smaller than the maximum
			  (potential[l][1]>-1&&//and the x value is above the minimum
			  (potential[l][1]<x&&//and the x value is smaller than the maximum
			  //todo: finish this if statement
		}
	}

}

generateMaze(5,5);
