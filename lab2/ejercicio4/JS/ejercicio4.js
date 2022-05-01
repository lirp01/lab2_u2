function comparacion() {
    // insertar 3 digitos
    let a = prompt("Inserte el primer dígito: ");
    let b = prompt("Inserte el segundo dígito: ");
    let c = prompt("Inserte el tercer dígito: ");
    // condiciones para verificar cual numero es mayor o si los tres son iguales
    if(a > b && a > c){
        document.write("El mayor numero es: ", a);
    }
    if(b > a && b > c){
        document.write("El mayor numero es: ", b);
    }
    if(c > a && c > b){
        document.write("El mayor numero es: ", c);

    }
    if(a == b && b == c){
        document.write("Los numeros son iguales: ", a);
    }
 }
 comparacion();
