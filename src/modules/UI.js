export class UI{

    constructor(){
        this.axis = 'X';
    }

    renderBoards(gameboard1, gameboard2){
        // Creating the first board
        const content = document.querySelector('.content');
        // Creating/appending Player 1s board
        content.appendChild(this.getPlayerBoardNode(gameboard1));
        // Creating/appending Player 2s board
        content.appendChild(this.getComputerBoardNode(gameboard2));
    }

    deleteBoards(){
        const content = document.querySelector('.content');
        const playerGrid = document.querySelector('.gb-grid');
        const compGrid = document.querySelector('.gb-comp-grid');
        content.removeChild(playerGrid);
        content.removeChild(compGrid);
    }

    deletePlacementBoard(){
        const content = document.querySelector('.content');
        const playerGrid = document.querySelector('.gb-grid');
        content.removeChild(playerGrid); 
    }

    renderHeader(name, status){
        const header = document.querySelector('.header');
        const heading = document.createElement('div');
        heading.classList.add('heading')
        const title = document.createElement('h1');
        title.textContent= 'Battleship';
        const turnA = document.createElement('div');
        turnA.classList.add('turnA');
        turnA.textContent = name==='Player' ? 'It is the Computers turn!' : 'It is the Players turn!';
        const turnB = document.createElement('div');
        turnB.classList.add('turnB');
        turnB.textContent = status===undefined ? '' : `${name}'s ${status}`;
        heading.appendChild(title);
        heading.appendChild(turnA);
        heading.appendChild(turnB);
        header.appendChild(heading);
    }

    deleteHeader(){
        const header = document.querySelector('.header');
        const heading = document.querySelector('.heading');
        header.removeChild(heading); 
    }

    renderPlacement(gameboard){
        const content = document.querySelector('.content');
        content.appendChild(this.getPlayerBoardNode(gameboard));
    }

    renderPlacementHeader(shipsLeft, currentShipLength){
        const header = document.querySelector('.header');
        const heading = document.createElement('div');
        heading.classList.add('heading');
        const title = document.createElement('h1');
        title.textContent= 'Battleship';
        const shipsToPlace = document.createElement('div');
        const shipLength = document.createElement('div');
        shipsToPlace.classList.add('ship-toplace-msg');
        shipLength.classList.add('ship-length-msg');
        shipsToPlace.textContent = `You have ${shipsLeft} ships left to place...`;
        shipLength.textContent = `The current ship you are placing will have a length of ${currentShipLength}`;
        const axisbuttons = document.createElement('div');
        const xAxisButton = document.createElement('div');
        const yAxisButton = document.createElement('div'); 
        axisbuttons.classList.add('axis-button-container');
        xAxisButton.classList.add('axis-button');
        this.axis === 'X' ? xAxisButton.classList.add('axis-button-active') : yAxisButton.classList.add('axis-button-active');
        yAxisButton.classList.add('axis-button');
        xAxisButton.textContent = 'X';
        yAxisButton.textContent = 'Y';
        xAxisButton.addEventListener('click', () => {
            xAxisButton.classList.add('axis-button-active');
            yAxisButton.classList.remove('axis-button-active');
            this.axis = 'X';
        })
        yAxisButton.addEventListener('click', () => {
            yAxisButton.classList.add('axis-button-active');
            xAxisButton.classList.remove('axis-button-active');
            this.axis = 'Y';
        })
        axisbuttons.appendChild(xAxisButton);
        axisbuttons.appendChild(yAxisButton);
        heading.appendChild(title);
        heading.appendChild(shipsToPlace);
        heading.appendChild(shipLength);
        heading.appendChild(axisbuttons);
        header.appendChild(heading);
    }

    renderWinnerFooter(winner){
        const footer = document.querySelector('.footer');

        const footerContent = document.createElement('div');
        footerContent.classList.add('footer-content');

        const winnerTxt = document.createElement('div')
        winnerTxt.classList.add('footer-text');
        winnerTxt.textContent = `${winner} wins! Click the restart button to play again!`;

        const restartBtn = document.createElement('div');
        restartBtn.classList.add('footer-restartBtn');
        restartBtn.textContent = 'Restart Game';

        footerContent.appendChild(winnerTxt);
        footerContent.appendChild(restartBtn);
        footer.appendChild(footerContent);
    }

    deleteFooter(){
        const footer = document.querySelector('.footer');
        const footerContent = document.querySelector('.footer-content');
        footer.removeChild(footerContent);
    }

    getPlayerBoardNode(gameboard){
        const grid = document.createElement('div');
        grid.classList.add('gb-grid')
        for(let i = 0; i < 10; i++){
            const row = document.createElement('div');
            row.classList.add('gb-row');
            for(let j = 0; j < 10; j ++){
                const cell = document.createElement('div');
                cell.classList.add('gb-cell');
                if(gameboard.successfulAttacks.includes(`${i},${j}`)){
                    cell.classList.add('gb-cell-player-hit');
                    cell.textContent = 'O';
                }
                else if(gameboard.missedAttacks.includes(`${i},${j}`)){
                    cell.classList.add('gb-cell-miss');
                    cell.textContent = 'X';
                }
                else if(gameboard.board.get(`${i},${j}`)!=null){
                    cell.classList.add('gb-cell-player-ship');
                }
                row.appendChild(cell);
            }
            grid.appendChild(row);
        }
        const boardname = document.createElement('div');
        boardname.classList.add('boardname');
        boardname.textContent = `Player 1's Board.`;
        grid.appendChild(boardname);
        return grid;
    }

    getComputerBoardNode(gameboard, playerType){
        const grid = document.createElement('div');
        grid.classList.add('gb-comp-grid')
        for(let i = 0; i < 10; i++){
            const row = document.createElement('div');
            row.classList.add('gb-comp-row');
            for(let j = 0; j < 10; j ++){
                const cell = document.createElement('div');
                cell.classList.add('gb-comp-cell');
                if(gameboard.missedAttacks.includes(`${i},${j}`)){
                    cell.classList.add('gb-cell-miss');
                    cell.textContent = 'X';
                }
                else if(gameboard.successfulAttacks.includes(`${i},${j}`)){
                    cell.classList.add('gb-cell-hit');
                }
                row.appendChild(cell);
            }
            grid.appendChild(row);
        }
        const boardname = document.createElement('div');
        boardname.classList.add('boardname');
        boardname.textContent = `Computer's Board.`;
        grid.appendChild(boardname);
        return grid;
    }
}