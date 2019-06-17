var square = document.getElementById('square');
var container = document.getElementById('container');

function animate(e) {
    alert(e.keyCode);

    if (e.keyCode === 39){
        console.log("left")
    }

    if (e.keyCode === 37){
        console.log("right")
    }
}

document.onkeydown = animate;