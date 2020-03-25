var miCanvas;

function inicializar() {
    miCanvas = document.getElementById('canvas');

    miCanvas.addEventListener('mousedown', clickRaton, false);
    miCanvas.addEventListener('mouseup', sueltaRaton, false);
    miCanvas.addEventListener('mousemove', posicionRaton, false);
}

function posicionRaton(e) {
    var x = e.pageX;
    var y = e.pageY;

    console.log('x: ' + x + ' y: ' + y);

}

function clickRaton(e) {
    console.log('Pulsando ratón');
}

function sueltaRaton(e) {
    console.log('Ratón liberado');
}