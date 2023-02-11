import { Gameboard } from "../../factories/Gameboard";
import { Ship } from "../../factories/Ship";
import { AI } from "../computerAI";
import { status } from "../status";

describe('Computer AI Testing', () => {
    const testAI = new AI();
    const mockStatus = new status();

    test('getAdjacentCoords() returns correct adjacent coords', () => {
        expect(testAI.getAdjacentCoords('1,1')).toEqual(['1,2', '2,1', '1,0', '0,1']);
    });

    test('AI knows when it has successfully sunk a ship', () => {
        const board = Gameboard(mockStatus)
        const ship = Ship(1);
        board.placeShip('1,1', ship, 'X');
        board.receiveAttack('1,1');
        expect(testAI.checkIfSunk(board, '1,1')).toBe(true);
    });

});