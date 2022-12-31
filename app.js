let gridSize;
let row;
let tile;
let grid = document.querySelector('.grid');
let tiles;

const body = document.querySelector('body');
const btn = document.querySelector('#choose');

function createGrid (size) {
    grid = document.createElement('div');
    grid.classList.add('.grid');
    body.appendChild(grid);
    for (i = 0; i < gridSize; i++) {
        row = document.createElement('div');
        row.classList.add('row');
        for (x = 0; x < gridSize; x++) {
            tile = document.createElement('div');
            tile.classList.add('tile');
            row.appendChild(tile);
        }
        grid.appendChild(row);
    }
    tiles = document.querySelectorAll('.tile');

    tiles.forEach(tile => tile.addEventListener('mouseover', () => {
        tile.classList.add('active');
    }));

}

function removeGrid () {
    body.removeChild(grid);
}

function resetGrid () {
    removeGrid();
    changeGrid();
}

function changeGrid () {
    gridSize = prompt("Please provide 0 <= dimensions <= 100.");
    if ((gridSize > 100) || (gridSize < 0)) {
        changeGrid();
    }
    createGrid (gridSize);
};

btn.addEventListener('click', resetGrid);