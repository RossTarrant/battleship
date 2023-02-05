export class UI{

    renderBoards(gameboard1, gameboard2){
        const content = document.querySelector('.content');
        const grid = document.createElement('div');
        for(let i = 0; i < 10; i++){
            const row = document.createElement('div');
            row.classList.add('gb-row');
            for(let j = 0; j < 10; j ++){
                const cell = document.createElement('div');
                cell.classList.add('gb-cell');
                row.appendChild(cell);
            }
            grid.appendChild(row);
        }
        content.appendChild(grid);
    }

    renderHeader(name1, name2){
        const header = document.querySelector('.header');
        const heading = document.createElement('h1');
        heading.textContent= 'Battleship';
        const versus = document.createElement('div');
        versus.classList.add('versus');
        versus.textContent = `${name1} vs ${name2}`;
        header.appendChild(heading);
        header.appendChild(versus);
    }

}