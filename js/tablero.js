var canvas;
var ctx;
var fps = 50;

var anchoF = 50;
var altoF = 50;

var cesped = "green";
var agua = "skyblue";
var tierra = "#a76407";

var escenario = [
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 1, 1],
    [0, 0, 0, 0, 2],
    [0, 2, 2, 2, 2]
];

function dibujaEscenario() {

    var color;

    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
            if (escenario[y][x] == 0) {
                color = cesped;
            }
            if (escenario[y][x] == 1) {
                color = agua;
            }
            if (escenario[y][x] == 2) {
                color = tierra;
            }

            ctx.fillStyle = color;
            ctx.fillRect(x * anchoF, y * altoF, anchoF, altoF)
        }
    }
}

function inicializar() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    setInterval(function() {

        principal();

    }, 1000 / fps);
}

function borraCanvas() {
    canvas.width = 500;
    canvas.height = 400;

}

function principal() {
    borraCanvas();
    dibujaEscenario();
}