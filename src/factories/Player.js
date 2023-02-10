export const Player = (name, type) => {
    const playerName = name;
    const playerType = type;

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
        let coord = randomCoord();
        while(board.missedAttacks.includes(coord)){
            coord = randomCoord();
        }
        board.receiveAttack(coord);
    }

    const randomCoord = function(){
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        return `${[x,y]}`;
    }

    return {attack, getName};

}