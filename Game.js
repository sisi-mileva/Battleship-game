/**
 * 
 */
function Game(grid, player, ship1, ship2, ship3) {
	var __grid = grid;
	var __player = player;
	var __ships = [ship1, ship2, ship3];
	
	this.getGrid = function() {
		return __grid;
	}
	
	this.setGrid = function(grid) {
		__grid = grid;
	}
	
	this.getPlayer = function() {
		return __player;
	}
	
	this.setPlayer = function(player) {
		__player = player;
	}
	
	this.getShips = function() {
		return __ships;
	}
	
	this.setShips = function(ships) {
		__ships = ships;
	}
}

Game.prototype.init = function() {
	var grid = this.getGrid();
	var ships = this.getShips();
	var ship1 = ships[0];
	var ship2 = ships[1];
	var ship3 = ships[2];
	
	grid.addShip(ship1);
	console.log(ship1.getCells());
	grid.addShip(ship2);
	console.log(ship2.getCells());
	grid.addShip(ship3);
	console.log(ship3.getCells());
	
}

Game.prototype.endGame = function() {
	var ships = this.getShips();
	var player = this.getPlayer();
	var win = ships[0].isDead() && ships[1].isDead() && ships[2].isDead();
	var loose = player.getAmo();
	
	if (win) {
		$('#win').css('display', 'block');
	} 
	if (loose == 0) {
		$('#loose').css('display', 'block');
	}
}

Game.prototype.loop = function() {
	var grid = this.getGrid();
	var ships = this.getShips();
	var player = this.getPlayer();
	var game = this;
	
	$('.click').on('click', function(e) {
		var box = e.currentTarget;
		var id = box.id;
		var x = parseInt(id[0]);
		var y = parseInt(id[1]);
		var boxValue = grid.lookUpCells(x, y);
		
		player.shoot(x, y, grid);
		$('#hits').html(player.getHits());
		$('#moves').html(player.getAmo());
		if (boxValue == 0) {
			box.style.backgroundImage = 'url("images/crossed-sabres.png")';
			box.style.backgroundSize = '100% 100%';
			
			game.endGame();
		} else {
			box.style.backgroundImage = 'url("images/ship.png")';
			box.style.backgroundSize = '100% 100%';
			
			for (var i = 0; i <= 2; i++) {
				ships[i].isCellHit(x, y);
			}
			
			game.endGame();
		}
		box.className = 'box';
	})
}