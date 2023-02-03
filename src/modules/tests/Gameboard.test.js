import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";

describe('Gameboard Factory Testing', () => {

    test('Missed hit is recorded', () => {
        const gameboard = Gameboard();
        gameboard.receiveAttack('0,0');
        expect(gameboard.missedAttacks.includes('0,0')).toBe(true);
    });

    test('Hit is recorded', () => {
        const gameboard = Gameboard();
        const ship = Ship(3);
        const coords = ['0,0','0,1','0,2']
        gameboard.placeShip(coords, ship);
        gameboard.receiveAttack('0,0');
        expect(ship.hits).toBe(1);
    });

})