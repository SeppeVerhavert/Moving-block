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