const container = document.getElementById('container');
const square = document.getElementById('square');
const food = document.createElement('div');

document.getElementById("body").addEventListener("load", createFood());

document.onkeydown = animate;

let squareLeft = 0;
let squareTop = 0;

function animate(e) {
    if (e.keyCode === 39) {
        squareLeft += 50;
        if (squareLeft >= 700) {
            squareLeft = 700;
        }
    }

    if (e.keyCode === 37) {
        squareLeft -= 50;
        if (squareLeft < 0) {
            squareLeft = 0;
        }
    }

    if (e.keyCode === 40) {
        squareTop += 50;
        if (squareTop > 450) {
            squareTop = 450;
        }
    }

    if (e.keyCode === 38) {
        squareTop -= 50;
        if (squareTop < 0) {
            squareTop = 0;
        }
    }
    square.style.left = squareLeft + 'px';
    square.style.top = squareTop + 'px';

    detectCollision();
}

function createFood() {
    food.id = 'food';

    randomX = Math.floor(Math.random() * (13) + 1) * 50;
    randomY = Math.floor(Math.random() * (7) + 2) * 50;

    food.style.left = randomX + 'px';
    food.style.top = randomY + 'px';

    container.appendChild(food);
}

function detectCollision() {
    if (squareLeft === randomX && squareTop === randomY) {
        createFood();
    }
}
