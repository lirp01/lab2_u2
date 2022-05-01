function contador_vocales() {
    // inserta una frase
    let frase = prompt("Inserte una frase: ");
    // crea un contador
    let contador=0;
    // recorre las letras de la frase
    for(let i=0;i < frase.length; i++){
      // si la letra de la frase es una vocal se le suma uno al contador
      if(frase[i] == "A" | frase[i] == "a"|
      frase[i] == "E" | frase[i] == "e"|
      frase[i] == "I" | frase[i] == "i"|
      frase[i] == "O" | frase[i] == "o"|
      frase[i] == "U" | frase[i] == "u"){
        contador = contador + 1;
       }
    }
    // se imprime la cantidad de vocales
    document.write("La cantidad de vocales en la frase '", frase,"' es: ", contador);
 }
contador_vocales();
