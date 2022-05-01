function contador_a() {
    // insetar una frase
    let frase = prompt("Inserte una frase: ");
    // crea un contador
    let contador=0;
    // recorre cada letra de la frase
    for(let i=0;i < frase.length; i++){
      // si hay una letra a se le suma uno al contador
      if(frase[i] == "a" | frase[i] == "A"){
        contador = contador + 1;
       }
    }
    // imprime la cantidad de a en la frase
    document.write("La cantidad de 'a' en la frase '", frase,"' es: ", contador);
 }
contador_a();
