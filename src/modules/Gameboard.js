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

    const placeShip = (coords, ship) => {
        for(let coord of coords){
            board.set(coord, ship)
        }
    }

    const receiveAttack = (coords) => {
        if(board.get(coords)===null && !missedAttacks.includes(coords)){
            missedAttacks.push(coords);
        }
        else if(board.get(coords).hasOwnProperty('hits')){
            board.get(coords).hit();
        }
    }

    const allShipsSunk = function(){



    }

    return {receiveAttack, allShipsSunk, missedAttacks, placeShip};

}