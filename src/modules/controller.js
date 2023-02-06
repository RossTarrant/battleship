import {Gameboard} from "../factories/Gameboard";
import {Ship} from "../factories/Ship";
import {Player} from "../factories/Player";
import {UI} from "../modules/UI";

export class controller{

    constructor(){
        let player = Player('Player 1', 'player');
        let computer = Player('Computer', 'comp');
        let playerBoard = Gameboard();
        let compBoard = Gameboard();
        let gamePhase = 'place';
        this.testPlaceShips(playerBoard, compBoard);
        const myUI = new UI();
        myUI.renderHeader(player.getName(), computer.getName());
        myUI.renderBoards(playerBoard, compBoard);
        this.addClickHandler(compBoard);
    }

    addClickHandler(compBoard){
        const cells = document.querySelectorAll('.gb-comp-cell')
        for(let i = 0; i < cells.length; i++){
            let cell = cells[i];
            let x = Math.floor(i/10);
            let y = i % 10;
            cell.addEventListener('click', () => {
                if(compBoard.receiveAttack(`${x},${y}`)===true){
                    cell.classList.add('gb-cell-hit');
                }
                else{
                    cell.classList.add('gb-cell-miss');
                    cell.textContent = 'X'
                }
            })
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