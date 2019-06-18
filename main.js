const square = document.getElementById('square');
const container = document.getElementById('container');
const food = document.createElement('div');
const victory = document.getElementById('victory');

document.onkeydown = animate;
document.getElementById("body").addEventListener("load", createFood());

let squareLeft = 0;
let squareTop = 0;
let counter = 0;

function animate(e) {

    if (e.keyCode === 39) {
        squareLeft += 50;
        square.style.left = squareLeft + 'px';
        if (squareLeft >= 650) {
            squareLeft = 650;
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

    randomX = Math.floor(Math.random() * (13) + 1) * 50;
    randomY = Math.floor(Math.random() * (7) + 2) * 50;

    food.style.left = randomX + 'px';
    food.style.top = randomY + 'px';

    container.appendChild(food);
}

function deleteFood() {
    food.parentNode.removeChild(food);
}

function detectCollision() {
    if (squareLeft === randomX && squareTop === randomY) {
        deleteFood();
        keepCount();
        createFood();
    }
}

function keepCount() {
    ++counter;
    document.getElementById('counter').innerHTML = counter;
    scaleDificulty();

    function scaleDificulty() {
        if (counter > 5) 
        {
            document.getElementById("square").style.backgroundColor = 'blue';
        }
        if (counter > 10) 
        {
            document.getElementById("square").style.backgroundColor = 'green';
        }
        if (counter > 15) 
        {
            document.getElementById("counter").style.color = 'blue';
        }
        if (counter > 20) 
        {
            document.getElementById("square").style.backgroundColor = 'white';
        }
        if (counter > 25) 
        {
            document.getElementById("square").style.backgroundColor = 'black';
            document.getElementById("counter").style.color = 'black';
            document.getElementById("counter").style.backgroundColor = 'black';
        }
        if (counter > 26) 
        {
            document.getElementById("victory").style.display = 'inline';
            document.getElementById("square").style.backgroundColor = 'white';
            document.getElementById("counter").style.color = 'white';
            document.getElementById("counter").style.backgroundColor = 'white';
        }
    }
}
