const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
}

setInterval(draw, 1000 / 5);
