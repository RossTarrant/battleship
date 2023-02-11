import { AI } from "../modules/computerAI";

export const Player = (name, type) => {
    const playerName = name;
    const playerType = type;
    const compAI = new AI();

    const getName = function(){
        return playerName;
    }

    const attack = function(board, coords){ 
        playerType === 'player' ? playerAttack(board, coords): compAttack(board);
    }

    const playerAttack = function(board, coords){
        board.receiveAttack(coords);
    }

    const compAttack = function(board){
        board.receiveAttack(compAI.getMove(board));
    }

    const randomCoord = function(){
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        return `${[x,y]}`;
    }

    return {attack, getName};

}