let color = 'black';
let displaySize = document.querySelector('.displaysize');

function createBoard(size) {
    let board = document.querySelector('.board');
    let section = board.querySelectorAll('div');
    let gridSize = size * size;
    
    section.forEach(div => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}), 1fr)`;
    
    for (let i = 0; i < gridSize; i++) {
        let section = document.createElement('div');
        section.addEventListener("mouseover", changeColor);
        section.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', section);
    }
};

createBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        createBoard(input);
        displaySize.textContent = `Board size: ${input} x ${input}`;
    } else {
        displaySize.textContent = 'Input must be from 2 to 100.';
    }
};

function changeColor() {
    if (color === 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
};

function selectColor(choice) {
    color = choice;
};

function clearBoard() {
    let board = document.querySelector('.board');
    let sections = board.querySelectorAll('div');
    sections.forEach(div => div.style.backgroundColor = 'white');
}