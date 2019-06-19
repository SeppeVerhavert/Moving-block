const square = document.getElementById('square');
const container = document.getElementById('container');
const food = document.createElement('div');
const victory = document.getElementById('victory');
const intro = document.getElementById('intro');

document.onkeydown = animate;
document.getElementById("body").addEventListener("load", createFood());

let squareLeft = 0;
let squareTop = 0;
let counter = 0;

let elem = document.getElementById("progressbar");
let width = 0;
let time = setInterval(countDown, 50);

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

// function resetLeft() {

// }

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
        countDown();
        deleteFood();
        keepCount();
        createFood();
        resetTime();
    }
}

function countDown() {
    if (width >= 100) {
        clearInterval(time);
        document.getElementById("loss").style.display = 'block';
        document.getElementById("square").style.display = 'none';
        document.getElementById("food").style.display = 'none';
        document.getElementById("counter").style.display = 'none';
    } else {
        width++;
        elem.style.width = width + '%';
    }
}

function resetTime() {
    clearInterval(time);
    width = 0;
    time = setInterval(countDown, 50);
}

function keepCount() {
    ++counter;
    document.getElementById('counter').innerHTML = counter;
    scaleDificulty();

    function scaleDificulty() {
        if (counter >= 1) {
            document.getElementById("intro").style.display = 'none';
            document.getElementById("progressbar").style.display = 'block';
        }
        if (counter > 5) {
            document.getElementById("square").style.backgroundColor = '#F2059F';
        }
        if (counter > 10) {
            document.getElementById("square").style.backgroundColor = '#04D99D';
        }
        if (counter > 15) {
            document.getElementById("counter").style.color = '#F2059F';
        }
        if (counter > 20) {
            document.getElementById("square").style.backgroundColor = '#002125';
        }
        if (counter > 25) {
            document.getElementById("square").style.backgroundColor = '#040A12';
            document.getElementById("counter").style.color = '#040A12';
            document.getElementById("counter").style.backgroundColor = '#040A12';
        }
        if (counter > 26) {
            document.getElementById("victory").style.display = 'inline';
            document.getElementById("square").style.backgroundColor = '#002125';
            document.getElementById("counter").style.color = '#002125';
            document.getElementById("counter").style.backgroundColor = '#002125';
        }
    }
}
