// crea una lista con los nombres de la imagenes de los dados
var imagenes = new Array("fotos/1.png", "fotos/2.png", "fotos/3.png",
    "fotos/4.png", "fotos/5.png", "fotos/6.png");

function lanzar_dado() {
    // genera un numero al azar entre 0 y 5, las posiciones de la lista
    let numero = Math.floor((Math.random() * 6));
    // cambia la imagen, enviando la foto segun sea el numero al azar
    document.getElementById("dado").src = imagenes[numero];
}
