// crea un arreglo con los nombre de cada una de las fotos
var imagenes = new Array("fotos/imagen1.png", "fotos/imagen2.jpeg", "fotos/imagen3.jpg",
    "fotos/imagen4.png", "fotos/imagen5.jpg");
// crea un contador para recorrer las posiciones del arreglo
var contador = 0;
// funcion que avanza
function siguiente() {
    // si el contador es menos a 4, avanza, es menor a cuatro por que las posiciones de la lista comienzan desde el 0
    if (contador < 4) {
        // suma uno al contador
        contador = contador + 1;
        // imprime la foto correspondiente
        document.getElementById("foto").src = imagenes[contador];
    }else{
        // si llega hasta la ultima foto y presiona siguinete se vuelve a la primera imagen
        contador = 0;
        document.getElementById("foto").src = imagenes[contador];
    }
}
// funcion que retrocede
function anterior() {
    // resta uno al contador por que se muestra la imagen de la posicion anterios
    contador = contador - 1;
    // mientras el contador sea mayor a 0 va mostrando la imagen de la siguiente posicion
    if (contador > 0) {
        document.getElementById("foto").src = imagenes[contador];
    }else{
        // si en la primera posicion se presiona anterios se muestra la ultima foto
        contador = 4;
        document.getElementById("foto").src = imagenes[contador];
    }
}