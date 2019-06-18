const square = document.getElementById('square');
const food = document.getElementById('food');
const foodBtn = document.getElementById('foodBtn');
foodBtn.addEventListener("click", createFood);

let squareLeft = 0;
let squareTop = 0;

let containerWidth = 500;
let containerHeigth = 500;

function createFood() {

    var food = document.createElement('div');
    food.id = 'food';
    document.body.appendChild(food);

    createPosition();

    function createPosition() {

        let squareLeft = 0;
        let squareTop = 0;

        var x = Math.floor(Math.random() * containerWidth);
        var y = Math.floor(Math.random() * containerHeigth);
        let randomX = Math.floor(Math.random() * x);
        let randomY = Math.floor(Math.random() * y);
        // return [randomX,randomY];
        console.log(randomX)
        console.log(randomY)
    }
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
