const square = document.getElementById('square');
const container = document.getElementById('container');
const food = document.getElementById('food');
const foodBtn = document.getElementById('foodBtn');

foodBtn.addEventListener("click", createFood);

let squareLeft = 0;
let squareTop = 0;

let containerWidth = 500;
let containerHeigth = 500;

function createFood() {

    let food = document.createElement('div');
    food.id = 'food';

    let x = Math.floor(Math.random() * containerWidth);
    let y = Math.floor(Math.random() * containerHeigth);
    let randomX = Math.floor(Math.random() * x);
    let randomY = Math.floor(Math.random() * y);

    food.style.left = randomX + 'px';
    food.style.top = randomY + 'px';

    container.appendChild(food);
}

function animate(e) {

    if (e.keyCode === 39) {
        squareLeft += 50;
        square.style.left = squareLeft + 'px';
        if (squareLeft >= 400) {
            squareLeft = 400;
        }
    }

    if (e.keyCode === 37) {
        squareLeft -= 50;
        square.style.left = squareLeft + 'px';
        if (squareLeft < 50) {
            squareLeft = 50;
        }
    }

    if (e.keyCode === 40) {
        squareTop += 50;
        square.style.top = squareTop + 'px';
        if (squareTop > 400) {
            squareTop = 400;
        }
    }

    if (e.keyCode === 38) {
        squareTop -= 50;
        square.style.top = squareTop + 'px';
        if (squareTop < 50) {
            squareTop = 50;
        }
    }
}

document.onkeydown = animate;
