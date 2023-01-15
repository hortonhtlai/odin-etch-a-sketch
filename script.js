let canvasSideLength = 960;
let sideGridNum = 16;

main();

function main() {
    const gridContainer = document.querySelector('.grid-container');

    clearChild(gridContainer);

    let sideGridLength = canvasSideLength / sideGridNum;

    for (let i = 0; i < sideGridNum ** 2; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.classList.add(i);
        gridItem.style.height = sideGridLength + 'px';
        gridItem.style.width = sideGridLength + 'px';
        gridItem.addEventListener('mouseenter', leaveTrail);
        gridContainer.appendChild(gridItem);
    }

    let gridTemplateColumns = '';

    for (let i = 0; i < sideGridNum; i++) {
        gridTemplateColumns = gridTemplateColumns + `min-content `;
    }

    gridContainer.style.gridTemplateColumns = gridTemplateColumns;

    const setGridNumButton = document.querySelector('.setGridNum');
    setGridNumButton.addEventListener('click', setGrid);

}

function leaveTrail(e) {
    e.target.style.backgroundColor = 'pink';
}

function setGrid(e) {
    let gridNumAnswer = prompt('How many side grids do you want?');
    if (gridNumAnswer > 100) {
        alert('Maximum number is 100')
    } else {
        sideGridNum = gridNumAnswer;
        main();
    }
}

function clearChild(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}