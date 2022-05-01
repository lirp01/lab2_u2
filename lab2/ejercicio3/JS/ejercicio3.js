function comparacion() {
    // Insertar dos numeros
    let a = prompt("Inserte el primer dígito: ");
    let b = prompt("Inserte el segundo dígito: ");
    // condiciones pedidad, cual es mayor se imprime en pantalla pasa igual si los numeros son iguales
    if(a > b){
        document.write("El mayor numero es: ", a)
    }
    if(a < b){
        document.write("El mayor numero es: ", b)
    }
    if(a == b){
        document.write("Los numeros son iguales: ", a)
    }
 }
 comparacion();
