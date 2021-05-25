let current = grid[0];
let stack = [];
const cells = document.querySelectorAll('.cell');
let visualizer=setInterval(animate,100);

function mazeGenerator(){
	cells[current.row*columns+current.column].style.background='rgb(102,179,229';
	if(!current.visited){
		current.visited=true;
		stack.push(current);
	}


	console.log(current.neighbors)
	let unvisited=[];	

	for(let neighbor of current.neighbors){
		if(!neighbor.visited){
			unvisited.push(neighbor);
		}
	}

	console.log(unvisited)	
	if(unvisited.length>0){
		let random=Math.floor(Math.random()*unvisited.length);
		let next=unvisited[random];


		let x=current.row-next.row;
		if(x===1){
			current.walls[0]=false;
			next.walls[2]=false;
		}else if(x===-1){
			current.walls[2]=false;
			next.walls[0]=false;
		}

		let y=current.column-next.column;
		if(y===1){
			current.walls[3]=false;
			next.walls[1]=false;
		}else if(y===-1){
			current.walls[1]=false;
			next.walls[3]=false;
		}

		current=next;
		console.log(stack);
	}else if(stack.length>0){
		current=stack.pop();
		console.log("hello")
	}else{
		clearInterval(visualizer);
		cells[current.row*columns+current.column].style.background='rgb(255,89,16)';
	}
}




function animate(){
	for(let i=0;i<rows;i++){
		for(let j=0;j<columns;j++){
			grid[i*columns+j].show();
		}
	}
	mazeGenerator();
	console.log("hi");
}
	

