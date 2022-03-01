const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 30;

canvas.addEventListener('mousedown', () => {


});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2);
    ctx.fill();
}

drawCircle(250,250);

function draw() {
    drawCircle(50,50);
    
    requestAnimationFrame(draw);
}

draw();