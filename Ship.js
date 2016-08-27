/**
 * 
 */
function Ship() {
	var __cells;
	
	this.getCells = function() {
		return __cells;
	}
	
	this.setCells = function(cells) {
		__cells = cells;
	}
}

Ship.prototype.isDead = function() {
	var cells = this.getCells();
	if (cells[0].hit == true && cells[1].hit == true && cells[2].hit == true) {
		return true;
	}
	return false;
}

Ship.prototype.isCellHit = function(x, y) {
	var cells = this.getCells();

	for (var i = 0; i <= 2; i++) {
		if (cells[i].x == x && cells[i].y == y) {
			cells[i].hit = true;
		}
	}
}