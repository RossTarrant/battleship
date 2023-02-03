export const Gameboard = () => {

    const buildBoard = () => {
        let board = new Map();
        for(let i = 0; i<10; i++){
            for(let j = 0; j < 10; j ++){
                let coord = `${[i,j]}`
                board.set(coord, null);
            }
        }
        return board;
    }

    let board = buildBoard();

    let missedAttacks = [];

    

    const receiveAttack = function(coords){
        if(board.get(coords)===null){
            missedAttacks.push(coords);
        }
    
    }

    const allShipsSunk = function(){



    }

    return {receiveAttack, allShipsSunk, missedAttacks};

}