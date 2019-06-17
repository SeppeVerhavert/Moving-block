const square = document.getElementById('square');
const container = document.getElementById('container');

let squareLeft = 0;
let squareTop = 0;

function animate(e) {

    console.log(squareLeft);
    console.log(squareTop);

    if (e.keyCode === 39) {
        squareLeft += 50;
        square.style.left = squareLeft + 'px';
        if (squareLeft >= 450) {
            squareLeft = 00;
        }
    }

    if (e.keyCode === 37) {
        squareLeft -= 50;
        square.style.left = squareLeft + 'px';
        if (squareLeft < 0) {
            squareLeft = 500;
        }
    }

    if (e.keyCode === 40) {
        squareTop += 50;
        square.style.top = squareTop + 'px';
        if (squareTop > 450) {
            squareTop = 0;
        }
        
    }

    if (e.keyCode === 38) {
        squareTop -= 50;
        square.style.top = squareTop + 'px';
        if (squareTop < 0) {
            squareTop = 500;
        }
    }
}

document.onkeydown = animate;