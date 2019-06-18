const square = document.getElementById('square');
const container = document.getElementById('container');
const food = document.createElement('div');

document.onkeydown = animate;
document.getElementById("body").addEventListener("load", createFood());

let squareLeft = 0;
let squareTop = 0;
let counter = 0;

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

    detectCollision();
}

function createFood() {

    food.id = 'food';
    
    randomX = Math.floor(Math.random() * (8) + 1)*50;
    randomY = Math.floor(Math.random() * (8) + 1)*50;

    food.style.left = randomX + 'px';
    food.style.top = randomY + 'px';

    container.appendChild(food);
}

function deleteFood() {
    food.parentNode.removeChild(food);
}

function detectCollision() {
    if (squareLeft === randomX && squareTop === randomY){
        deleteFood();
        keepCount();
        createFood();
    }
}

function keepCount() {
    ++counter;
    document.getElementById('counter').innerHTML = counter;
}
