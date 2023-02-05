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
        const myUI = new UI();
        myUI.renderHeader(player.getName(), computer.getName());
        myUI.renderBoards();
    }

}