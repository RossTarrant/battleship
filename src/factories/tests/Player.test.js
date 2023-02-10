import { Player } from "../Player";
import { Ship } from "../Ship";
import { Gameboard } from "../Gameboard.js";
import { status } from "../../modules/status";

describe('Player Factory Testing', () => {
    let mockStatus = new status();
    test('Player makes successful attack', () => {
        const gameboard = Gameboard(mockStatus);
        const ship = Ship(3);
        const player = Player('Player1', 'player');
        gameboard.placeShip('0,0', ship, 'X');
        player.attack(gameboard, '0,0');
        expect(ship.hits).toBe(1);
    });

    test('Computer player initialised correctly', () => {
        const player = Player('Computer', 'comp');
        expect(player.getName()).toBe('Computer');
    });

});