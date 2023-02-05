import { Ship } from "../Ship.js";

describe('Ship Factory Testing', () => {
    const newShip = Ship(3);
    test('Length value is correctly created upon new obj', () => {
        expect(newShip.length).toBe(3);
    });
    
    test('Hits value is set to 0 upon new obj', () => {
        expect(newShip.hits).toBe(0);
    });
    
    test('Calling the hit function reduces hits by 1', () => {
        const newShip = Ship(3);
        newShip.hit();
        expect(newShip.hits).toBe(1);
    });
    
    test('Ship sunk when number of hits matches ship length', () => {
        const newShip = Ship(2);
        newShip.hit();
        newShip.hit();
        expect(newShip.isSunk()).toBe(true);
    });

})

