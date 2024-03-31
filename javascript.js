let container;
let button;

window.addEventListener("DOMContentLoaded", () => { 
    container = document.querySelector(".container")
    button = document.querySelector("button");
    createGrid(16);
});

function createGrid(size) {
    let dim = 800.0 / size;

    for (i = 0; i < size; i++) {
        let currRow = document.createElement("div");
        currRow.classList.add("row");
        currRow.style.height = dim + "px";
        currRow.style.width = "800px";

        for (j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.onmouseenter = function(){
                cell.style.backgroundColor = "blue";
            }
            cell.classList.add("cell");
            cell.style.width = dim + "px";
            cell.style.height = dim + "px";
            currRow.appendChild(cell);
        }
    
        container.appendChild(currRow);
    }
}  

function resizeGrid() {
    let newSize = -1;
    while (newSize < 0 || newSize > 100) {
        newSize = prompt("Please enter new grid size (enter integer between 0 - 100)");
    }

    newSize = parseInt(newSize, 10);
    clearGrid();
    createGrid(newSize);
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}