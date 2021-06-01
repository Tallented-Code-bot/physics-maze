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
				[currentCell[0+1],currentCell[1],2,0],//bottom
				[currentCell[0],currentCell[1]-1,3,1]];

		var neighbors=new Array();


		for(var l=0;l<4;l++){
			if(potential[l][0]>-1&&//if the y value is above the minimum
			  potential[l][0]<y&&//and the y value is smaller than the maximum
			  potential[l][1]>-1&&//and the x value is above the minimum
			  potential[l][1]<x&&//and the x value is smaller than the maximum
			  unvisited[potential[l][0]][potential[l][1]]){//and the neighbor has not been visited
				neighbors.push(potential[l]);	
			}


			if(neighbors.length){
				next=neighbors[Math.floor(Math.random()*neighbors.length)];
				cells[currentCell[0]][currentCell[1]][next[2]]=1;
				cells[next[0]][next[1]][next[3]]=1;
				unvisited[next[0]][next[1]]=false;
				visited++;
				currentCell=[next[0],next[1]];
				path.push(currentCell);
			}else{
				currentCell=path.pop();
			}
		}
	}
	return cells;

}
alert("ready to start");
alert(generateMaze(5,5));
