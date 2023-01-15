const gridContainer = document.querySelector('.grid-container');

let total = 256;

for (let i = 0; i < total; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = i;
    gridContainer.appendChild(gridItem);
}

let gridTemplateColumns = '';

for (let i = 0; i < Math.sqrt(total); i++) {
    gridTemplateColumns = gridTemplateColumns + 'min-content ';
}

gridContainer.style.gridTemplateColumns = gridTemplateColumns;