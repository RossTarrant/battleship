import { Ship } from "./Ship";

test('Length value is correctly created upon new obj', () => {
    const newShip = Ship(3);
    expect(newShip.length).toBe(3);
});

test('Hits value is set to 0 upon new obj', () => {
    const newShip = Ship(3);
    expect(newShip.hits).toBe(0);
});

test('Calling the hit function reduces hits by 1', () => {
    const newShip = Ship(3);
    newShip.hit();
    expect(newShip.hits).toBe(1);
});