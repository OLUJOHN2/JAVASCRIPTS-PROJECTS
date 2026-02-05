// Ship class
class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits >= this.length;
  }
}

// Gameboard class
class Gameboard {
  constructor() {
    this.ships = [];
    this.board = {};
    this.missedAttacks = [];
  }

  placeShip(ship, coordinates) {
    coordinates.forEach(coord => {
      this.board[coord.toString()] = ship;
    });
    this.ships.push(ship);
  }

  receiveAttack(coordinate) {
    const key = coordinate.toString();

    if (this.board[key]) {
      this.board[key].hit();
      return "hit";
    } else {
      if (!this.missedAttacks.includes(key)) {
        this.missedAttacks.push(key);
      }
      return "miss";
    }
  }

  allShipsSunk() {
    return this.ships.every(ship => ship.isSunk());
  }
}

// Player class
class Player {
  constructor(type = "human") {
    this.type = type;
    this.gameboard = new Gameboard();
    this.attacksMade = new Set();
  }

  attack(enemyBoard, coordinate) {
    const key = coordinate.toString();

    if (this.attacksMade.has(key)) {
      return null;
    }

    this.attacksMade.add(key);
    return enemyBoard.receiveAttack(coordinate);
  }

  randomAttack(enemyBoard) {
    let coordinate;

    do {
      coordinate = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
    } while (this.attacksMade.has(coordinate.toString()));

    return this.attack(enemyBoard, coordinate);
  }
}

// Game controller
class GameController {
  constructor() {
    this.player = new Player("human");
    this.computer = new Player("computer");
    this.currentTurn = "human";
  }

  setupGame() {
    const playerShip1 = new Ship(3);
    const computerShip1 = new Ship(2);

    this.player.gameboard.placeShip(playerShip1, [
      [0, 0],
      [0, 1],
      [0, 2],
    ]);

    this.computer.gameboard.placeShip(computerShip1, [
      [5, 5],
      [5, 6],
    ]);
  }

  playTurn(coordinate) {
    if (this.currentTurn !== "human") return;

    const result = this.player.attack(
      this.computer.gameboard,
      coordinate
    );

    if (this.computer.gameboard.allShipsSunk()) {
      return "Human wins";
    }

    this.currentTurn = "computer";

    this.computer.randomAttack(this.player.gameboard);

    if (this.player.gameboard.allShipsSunk()) {
      return "Computer wins";
    }

    this.currentTurn = "human";
    return result;
  }
}

// Game initialization
const game = new GameController();
game.setupGame();

// Sample gameplay
console.log(game.playTurn([5, 5]));
console.log(game.playTurn([5, 6]));
