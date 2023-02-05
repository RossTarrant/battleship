import { Player } from "../Player";
import { Ship } from "../Ship";
import { Gameboard } from "../Gameboard.js";

describe('Player Factory Testing', () => {

    test('Player makes successful attack', () => {
        const gameboard = Gameboard();
        const ship = Ship(3);
        const player = Player('Player1', 'player');
        gameboard.placeShip('0,0', ship, 'X');
        player.attack('0,0', gameboard);
        expect(ship.hits).toBe(1);
    });

    test('Computer player initialised correctly', () => {
        const player = Player('Computer', 'comp');
        expect(player.getName()).toBe('Computer');
    });

});