export class AI{
    constructor(board){
        this.knownHits = [];
        this.hitAttempts = [];
        this.queue = [];
        this.lastShot = '0,0';
    }

    getMove(gameboard){
        let coord = this.randomCoord(gameboard);
        
        if(gameboard.board.get(this.lastShot)?.isSunk()===true){
            this.queue = [];
        }

        if(this.queue.length > 0){
            coord = this.queue.shift();
        }
        if(gameboard.board.get(coord)!==null){
            this.queue.shift()
            for(let adjCoord of this.getAdjacentCoords(coord)){
                this.queue.push(adjCoord);
            }
            this.queue = this.cleanQueue(this.queue);
        }
        this.hitAttempts.push(coord);
        this.lastShot = coord;
        return coord;
    }

    checkIfSunk(gameboard, coord){
        return gameboard.board.get(coord).isSunk();
    }

    cleanQueue(queue){
        let toReturn = [];
        for(let coord of queue){
            if(!(this.hitAttempts.includes(coord))){
                toReturn.push(coord);
            }
        }
        return toReturn;
    }
    
    getAdjacentCoords(coord){

        let adjacentCoords = [];

        const ADJACENCT_MUTATIONS = [
            [0,1],
            [1,0],
            [0,-1],
            [-1,0]
        ]

        let xCoord = Number(coord[0]);
        let yCoord = Number(coord[2]);

        for(let adjacent of ADJACENCT_MUTATIONS){
            if(xCoord+adjacent[0] < 10 && xCoord+adjacent[0] >= 0 && yCoord+adjacent[1] < 10 && yCoord+adjacent[1] >= 0)
            adjacentCoords.push(`${xCoord+adjacent[0]},${yCoord+adjacent[1]}`);
        }

        return adjacentCoords;

    }

    randomCoord = function(board){
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let coord = `${[x,y]}`;
        while(this.hitAttempts.includes(coord)){
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            coord = `${[x,y]}`;
        }
        return `${[x,y]}`;
    }
}