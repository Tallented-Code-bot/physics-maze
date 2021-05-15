let current=grid[0];
let stack=[];
const cells=document.querySelectorAll('.cell');

function mazeGenerator(){
	cells[current.row*columns+current.column].style.background='rgb(102,179,229';
	if(!current.visited){
		current.visited=true;
		stack.push(current);
	}



	
}