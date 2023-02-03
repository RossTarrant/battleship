import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";

describe('Gameboard Factory Testing', () => {

    test('Ship is placed correctly on coordinates (X Axis)', () => {
        const gameboard = Gameboard();
        const ship = Ship(3);
        expect(gameboard.placeShip('0,0', ship, 'X')).toBe(true);
        expect(gameboard.placeShip('0,0', ship, 'X')).toBe(null);
    });
    
    test('Ship is placed correctly on coordinates (Y Axis)', () => {
        const gameboard = Gameboard();
        const ship = Ship(3);
        expect(gameboard.placeShip('0,0', ship, 'Y')).toBe(true);
        expect(gameboard.placeShip('0,0', ship, 'Y')).toBe(null);
    });

    test('Ship is placed outside of X axis boundaries', () => {
        const gameboard = Gameboard();
        const ship = Ship(3);
        expect(gameboard.placeShip('8,8', ship, 'X')).toBe(null);
    });

    test('Ship is placed on occupied coordinate', () => {
        const gameboard = Gameboard();
        const ship = Ship(3);
        gameboard.placeShip('0,0', ship, 'X');
        const secondShip = Ship(3);
        expect(gameboard.placeShip('0,0', secondShip, 'X')).toBe(null);
    });

    test('Missed hit is recorded', () => {
        const gameboard = Gameboard();
        gameboard.receiveAttack('0,0');
        expect(gameboard.missedAttacks.includes('0,0')).toBe(true);
    });

    test('Hit is recorded', () => {
        const gameboard = Gameboard();
        const ship = Ship(3);
        gameboard.placeShip('0,0', ship, 'X');
        gameboard.receiveAttack('0,0');
        expect(ship.hits).toBe(1);
    });

})