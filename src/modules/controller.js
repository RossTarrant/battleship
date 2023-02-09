import {Gameboard} from "../factories/Gameboard";
import {Ship} from "../factories/Ship";
import {Player} from "../factories/Player";
import {UI} from "../modules/UI";

export class controller{

    constructor(){
        // Setup players
        this.player = Player('Player 1', 'player');
        this.computer = Player('Computer', 'comp');
        // Create gameboard for each player
        this.playerBoard = Gameboard();
        this.compBoard = Gameboard();
        this.gameActive = true;
        this.shipsPlaced = 0;
        // Create X/Y axis buttons
        // Add click event handler
        // Add hover event handler
        // Place ships
        //this.testPlaceShips(this.playerBoard, this.compBoard);
        this.myUI = new UI();
        this.placement();
    }

    takeTurn(cell, x, y){
        // MAKE PLAYER ATTACK
        this.player.attack(this.compBoard,`${x},${y}`);
        // CHECK FOR WIN
        if(this.compBoard.allShipsSunk()){this.winGame()};
        // COMPUTER MAKE PLAY
        this.computer.attack(this.playerBoard);
        // CHECK FOR WIN
        this.playerBoard.allShipsSunk();
        // REFRESH UI
        this.myUI.deleteBoards();
        this.myUI.renderBoards(this.playerBoard, this.compBoard);
        this.addClickHandler(this.compBoard);
    }

    placement(){
        let shipLengths = [2,3,3,4,5];
        this.myUI.renderPlacementHeader(5 - this.shipsPlaced, shipLengths[this.shipsPlaced]);
        this.myUI.renderPlacement(this.playerBoard);
        this.addPlacementHandlers();
    }

    gameBegin(){
        this.myUI.deleteHeader();
        this.myUI.deletePlacementBoard();
        this.myUI.renderHeader(this.player.getName(), this.computer.getName());
        this.myUI.renderBoards(this.playerBoard, this.compBoard);
        this.addClickHandler(this.compBoard);
    }

    winGame(){
        this.gameActive = false;
        alert('Player wins!')
    }

    addPlacementHandlers(){
        const cells = document.querySelectorAll('.gb-cell');
        for(let i = 0; i < cells.length; i++){
            let cell = cells[i];
            let x = Math.floor(i/10);
            let y = i % 10;
            cell.addEventListener('click', () => {
                let shipLengths = [2,3,3,4,5];
                let axis = document.querySelector('.axis-button-active').textContent;
                console.log(axis)
                if(this.shipsPlaced < 5){
                    const ship = Ship(shipLengths[this.shipsPlaced]);
                    if(this.playerBoard.placeShip(`${x},${y}`, ship, axis)!==null){this.shipsPlaced++;}
                    this.myUI.deletePlacementBoard();
                    this.myUI.deleteHeader();
                    this.placement();
                }
                if(this.shipsPlaced===5){
                    this.gameBegin();
                }
            });
        }
    }

    addClickHandler(compBoard){
        const cells = document.querySelectorAll('.gb-comp-cell');
        for(let i = 0; i < cells.length; i++){
            let cell = cells[i];
            let x = Math.floor(i/10);
            let y = i % 10;
            cell.addEventListener('click', () => {
                if(this.gameActive){this.takeTurn(cell, x, y)};
            });
        }
    }

    testPlaceShips(playerBoard, compBoard){
        let shipA = Ship(3);
        let shipB = Ship(5);
        let shipC = Ship(4);
        let shipD = Ship(2);
        let shipE = Ship(3);
        playerBoard.placeShip('2,2', shipA, 'X');
        playerBoard.placeShip('0,0', shipB, 'Y');
        playerBoard.placeShip('4,4', shipC, 'X');
        playerBoard.placeShip('1,6', shipD, 'Y');
        playerBoard.placeShip('6,6', shipE, 'X');

        let shipF = Ship(3);
        let shipG = Ship(5);
        let shipH = Ship(4);
        let shipI = Ship(2);
        let shipJ = Ship(3);
        compBoard.placeShip('5,2', shipF, 'X');
        compBoard.placeShip('0,0', shipG, 'Y');
        compBoard.placeShip('4,4', shipH, 'X');
        compBoard.placeShip('1,6', shipI, 'Y');
        compBoard.placeShip('6,6', shipJ, 'X');
    }

}