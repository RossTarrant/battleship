import { thisTypeAnnotation } from "@babel/types";
import { Gameboard } from "../factories/Gameboard";

export class AI{
    constructor(board){
        this.knownHits = [];
        this.queue = [];
    }

    getMove(board){
        // If no known hits, return random coordinate
        let coord = this.randomCoord(board);
        // If there is a known hit and ship not sunk, attack adjacent cells
        // Continue until sunk
        return coord;
    }

    checkIfSunk(gameboard, coord){
        return gameboard.board.get(coord).isSunk();
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
            adjacentCoords.push(`${xCoord+adjacent[0]},${yCoord+adjacent[1]}`);
        }

        return adjacentCoords;

    }

    randomCoord = function(board){
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let coord = `${[x,y]}`;
        while(board.missedAttacks.includes(coord)){
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            coord = `${[x,y]}`;
        }
        return `${[x,y]}`;
    }
}