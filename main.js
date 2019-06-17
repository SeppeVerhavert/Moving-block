const square = document.getElementById('square');
const container = document.getElementById('container');

let squareLeft = 0;
let squareDown = 0;

function animate(e) {

    if (e.keyCode === 39) {
        squareLeft += 50;
        square.style.left = squareLeft + 'px';
        if (squareLeft >= 450) {
            squareLeft = -50;
        }
    }

    if (e.keyCode === 37) {
        squareLeft -= 50;
        square.style.left = squareLeft + 'px';
        if (squareLeft <= 0) {
            squareLeft = 450;
        }
    }

    if (e.keyCode === 40) {
        squareDown += 50;
        square.style.top = squareDown + 'px';
        if (squareDown >= 450) {
            squareDown = -50;
        }
        
    }

    if (e.keyCode === 38) {
        squareDown -= 50;
        square.style.top = squareDown + 'px';
        if (squareDown <= 0) {
            squareDown = 500;
        }
    }
}

document.onkeydown = animate;