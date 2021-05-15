class Cell{
	constructor(x,y){
		this.column=x;
		this.row=y;
		this.walls=[true,true,true,true]
		this.visited=false;
		this.neighbors=[];
	}


	findNeighbors(){
		if(this.row>0){
			this.neighbors.push(grid[(this.row-1)*columns+this.column]);
		}
		if(this.column<columns-1){
			this.neighbors.push(grid[this.row*columns+(this.column+1)]);
		}
		if(this.row<rows-1){
			this.neighbors.push(grid[(this.row+1)*columns+this.column]);
		}
		if(this.column>0){
			this.neighbors.push(grid[this.row*columns+(this.column-1)]);
		}
	}
}


const rows=10;
const columns=10;
let grid=[];


const createMazeRowAndCOlDivs=function(){
	for(let y=0;y<rows;y++){
		let row=document.createElement("div");
		row.classList.add("row");
		document.body.appendChild(row);


		for(let x=0;x<columns;x++){
			let column =document.createElement("div");
			column.classList.add("cell");
			row.appendChild(column);
		}
	}
}


function makeGrid(){
	for(let i=0;i<rows;i++){
		for(let j=0;j<columns;j++){
			grid.push(new Cell(i,j));
		}
	}
}

createMazeRowAndCOlDivs();
makeGrid();



