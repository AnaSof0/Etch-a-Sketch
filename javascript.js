
const container = document.getElementById('grid-container');

// Create a 16x16 grid
for (let i = 0; i < 16 * 16; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    container.appendChild(gridSquare);
}