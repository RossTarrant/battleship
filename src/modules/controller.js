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
        // Add hover event handler
        //this.testPlaceShips(this.playerBoard, this.compBoard);
        this.myUI = new UI();
        this.placement();
    }

    takeTurn(x, y){
        // MAKE PLAYER ATTACK
        this.player.attack(this.compBoard,`${x},${y}`);
        // CHECK FOR WIN
        if(this.compBoard.allShipsSunk()){this.winGame(this.player.getName())};
        // COMPUTER MAKE PLAY
        this.computer.attack(this.playerBoard);
        // CHECK FOR WIN
        if(this.playerBoard.allShipsSunk()){this.winGame(this.computer.getName())};
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
        this.addHoverHandler(shipLengths[this.shipsPlaced]);
    }

    gameBegin(){
        this.myUI.deleteHeader();
        this.myUI.deletePlacementBoard();
        this.placeCompShips(this.compBoard);
        this.myUI.renderHeader(this.player.getName(), this.computer.getName());
        this.myUI.renderBoards(this.playerBoard, this.compBoard);
        this.addClickHandler(this.compBoard);
    }

    winGame(winner){
        this.gameActive = false;
        alert(`${winner} wins!`)
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

    addHoverHandler(shipLen){
        const cells = document.querySelectorAll('.gb-cell');
        for(let i = 0; i < cells.length; i++){
            let cell = cells[i];
            let x = Math.floor(i/10);
            let y = i % 10;
            cell.addEventListener('mouseover', () => {
                for(let i = 0; i < cells.length; i++){
                    cells[i].classList.remove('gb-cell-hover');
                }
                cell.classList.add('gb-cell-hover');
                const axis = document.querySelector('.axis-button-active').textContent;
                for(let i = 0; i < shipLen; i++){
                    if(axis == 'X'){
                        let pos = ((x * 10) + (y+i));
                        pos < 100 && ((pos - i) % 10) < (pos % 10) ? cells[pos].classList.add('gb-cell-hover') : null;
                    }
                    else{
                        let pos = ((x+i) * 10) + (y);
                        pos < 100 ? cells[pos].classList.add('gb-cell-hover') : null;
                    }
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
                if(this.gameActive){this.takeTurn(x, y)};
            });
        }
    }

    placeCompShips(compBoard){
        let shipA = Ship(3);
        let shipB = Ship(5);
        let shipC = Ship(4);
        let shipD = Ship(2);
        let shipE = Ship(3);
        compBoard.placeShip('5,2', shipA, 'X');
        compBoard.placeShip('0,0', shipB, 'Y');
        compBoard.placeShip('4,4', shipC, 'X');
        compBoard.placeShip('1,6', shipD, 'Y');
        compBoard.placeShip('6,6', shipE, 'X');
    }

}