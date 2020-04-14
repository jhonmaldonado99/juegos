var canvas;
var ctx;
var FPS = 50;

var anchoCanvas = "400px";
var altoCanvas = "640px";

var anchoTablero = 10;
var altoTablero = 16;

var anchoF = 40;
var altoF = 40;

var tablero = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
];

function inicializar() {

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.style.width = anchoCanvas;
    canvas.style.height = altoCanvas;


    pieza = new objPieza();

    // setInterval(function() {
    //     principal();
    // }, 1000 / FPS);

}

var pieza;

var objPieza = function() {
    this.x = 0;
    this.y = 0;
}

function inicializaTeclado() {
    document.addEventListener('keydown', function(tecla) {
        if (tecla.keyCode == 38) {

        }
        if (tecla.keyCode == 40) {

        }
        if (tecla.keyCode == 37) {

        }
        if (tecla.keyCode == 39) {

        }
    });
}

function borraCanvas() {
    canvas.style.width = anchoCanvas;
    canvas.style.height = altoCanvas;
}

function principal() {

}