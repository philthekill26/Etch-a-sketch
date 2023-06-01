const container = document.getElementById('container');
let isEraserMode = false;
let isRainbowMode = false;

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', changeColor);
    container.appendChild(square);
  }
}

createGrid(16);

function resetGrid() {
  const squares = container.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = '';
    square.classList.remove('eraser', 'rainbow');
  });
}

function toggleEraser() {
  isEraserMode = !isEraserMode;
  const squares = container.querySelectorAll('.square');
  squares.forEach(square => {
    square.classList.toggle('eraser', isEraserMode);
  });
}

function toggleRainbow() {
  isRainbowMode = !isRainbowMode;
  const squares = container.querySelectorAll('.square');
  squares.forEach(square => {
    square.classList.toggle('rainbow', isRainbowMode);
  });
}

function changeColor(event) {
  const square = event.target;
  if (isEraserMode) {
    square.style.backgroundColor = 'white';
  } else if (isRainbowMode) {
    square.style.backgroundColor = getRandomColor();
  } else {
    square.style.backgroundColor = 'black';
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
