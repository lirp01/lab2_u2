// funcion que convierte de dolares a pesos chilenos
function USD_a_CLP(){
    // obtiene cantidad de pesos ingresada por el id
    var dolares = document.getElementById("dolares").value;
    // multiplica por 850 para convertirlos a dolares
    let pesos_clp = dolares * 850;
    // condicion por si el campo no tiene numeros o si el usuario ingresa letras
    if(dolares == ""){
        alert("Campo incompleto"); 
    }else if(isNaN(dolares) == true){
        alert("Debe ingresar números");
    }else{
        // envia la conversion al label para imprimir el resultado
        document.getElementById('conversionUSD').value=pesos_clp;
    }
}
// funcion que convierte de dolares a pesos chilenos
function CLP_a_USD(){
    // obtiene cantidad de pesos ingresada por el id
    var pesos_clp = document.getElementById("pesos").value;
    // multiplica por 850 para convertirlos a dolares
    let B = pesos_clp / 850;
    // condicion por si el campo no tiene numeros o si el usuario ingresa letras
    if(pesos_clp == ""){
        alert("Campo incompleto");
    }else if (isNaN(pesos_clp)){
        alert("Debe ingresar números");
    }else{
        // envia la conversion al label para imprimir el resultado
        document.getElementById('conversionCLP').value=B;
    }
}
