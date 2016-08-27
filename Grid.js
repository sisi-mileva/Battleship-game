/**
 * 
 */
const MATRIX = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ];
function Grid() {
	var __matrix = MATRIX;
	
	this.getMatrix = function() {
		return __matrix;
	}
	
	this.setMatrix = function(matrix) {
		__matrix = matrix;
	}
}

Grid.prototype.addShip = function(ship) {
	var direction = Math.floor(Math.random()*2) + 1;
	var x;
	var y;
	var cells;
	var matrix = this.getMatrix();
	var newMatrix = matrix;
		
	if (direction == 1) {
		do {
			x = Math.floor(Math.random() * 7);
			y = Math.floor(Math.random() * 9);
		
		} while (matrix[x][y] != 0 || matrix[x+1][y] != 0 || matrix[x+2][y] != 0);
		newMatrix[x][y] = 1;
		newMatrix[x+1][y] = 1;
		newMatrix[x+2][y] = 1;
		this.setMatrix(newMatrix);
		
		cells = [
		         {
		        	 'x': x,
		         	 'y': y,
		           'hit': false
		         },
		         
		         {
		        	 'x': x + 1,
		         	 'y': y,
		           'hit': false
		         },
		         
		         {
		        	 'x': x + 2,
		         	 'y': y,
		           'hit': false
		         }
		         ];
	} else {
		do {
			x = Math.floor(Math.random() * 9);
			y = Math.floor(Math.random() * 7);
			
		} while (matrix[x][y] != 0 || matrix[x][y + 1] != 0 || matrix[x][y+2] != 0);
		newMatrix[x][y] = 1;
		newMatrix[x][y+1] = 1;
		newMatrix[x][y+2] = 1;
		this.setMatrix(newMatrix);
		
		cells = [
		         {
		        	 'x': x,
		         	 'y': y,
		           'hit': false
		         },
		         
		         {
		        	 'x': x,
		         	 'y': y + 1,
		           'hit': false
		         },
		         
		         {
		        	 'x': x,
		         	 'y': y + 2,
		           'hit': false
		         }
		         ];
	}
	ship.setCells(cells);
}

Grid.prototype.lookUpCells = function(x, y) {
	var matrix = this.getMatrix();
	return matrix[x][y];
}