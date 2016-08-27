/**
 * 
 */
const AMO = 20;
function Player() {
	var __amo = AMO;
	var __hits = 0;
	var __misses = 0;
	
	this.getAmo = function() {
		return __amo;
	}
	
	this.setAmo = function(amo) {
		__amo = amo;
	}
	
	this.getHits = function() {
		return __hits;
	}
	
	this.setHits = function(hits) {
		__hits = hits;
	}
	
	this.getMisses = function() {
		return __misses;
	}
	
	this.setMisses = function(misses) {
		__misses = misses;
	}
}

Player.prototype.shoot = function(x, y, board) {
	var newAmo = this.getAmo() - 1;
	
	this.setAmo(newAmo);
	
	if (board.lookUpCells(x, y)) {
		var hits = this.getHits() + 1;
		this.setHits(hits);
	} else {
		var misses = this.getMisses() + 1;
		this.setMisses(misses);
	}
}