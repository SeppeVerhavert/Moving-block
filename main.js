const square = document.getElementById('square');
const container = document.getElementById('container');

let squareLeft = 0;
let squareDown = 0;

function animate(e) {
    console.log(e.keyCode);

    if (e.keyCode === 39) {
        squareLeft += 100;
        square.style.left = squareLeft + 'px';
    }

    if (e.keyCode === 37) {
        squareLeft -= 100;
        square.style.left = squareLeft + 'px';
    }

    if (e.keyCode === 40) {
        squareDown += 100;
        square.style.top = squareDown + 'px';
    }

    if (e.keyCode === 38) {
        squareDown -= 100;
        square.style.top = squareDown + 'px';
    }
}

document.onkeydown = animate;