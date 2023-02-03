import { Gameboard } from "../Gameboard";

describe('Gameboard Factory Testing', () => {

    test('Missed hit is recorded', () => {
        const gameboard = Gameboard();
        gameboard.receiveAttack('0,0');
        expect(gameboard.missedAttacks.includes('0,0')).toBe(true);
    });

})