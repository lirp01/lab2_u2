function par_impar() {
    // insetar un numero
    let a = prompt("Inserte un dígito: ");
    // se verifica si es divisible por 2 con el % 2, si el %2 es igual a 0 el numero es divisible por dos
    if(a % 2 == 0){
        document.write("El numero ", a," es divisible por 2")
    //sino no es divisible por 2
    }else{
        document.write("El numero ", a," no es divisible por 2")
    }
 }
 par_impar();
