function contador_vocales() {
    // se inserta una frase
    let frase = prompt("Inserte una frase: ");
    // crean 5 contadores, uno por cada letra
    let contador_a = 0;
    let contador_e = 0;
    let contador_i = 0;
    let contador_o = 0;
    let contador_u = 0;
    // recorre la frase
    for(let i=0;i < frase.length; i++){
      // si se encuntra una a se le suma 1 al contados de a
      if(frase[i] == "A" | frase[i] == "a"){
        contador_a = contador_a + 1;
      }
      // si se encuntra una e se le suma 1 al contados de e
      if(frase[i] == "E" | frase[i] == "e"){
        contador_e = contador_e + 1;  
      }
      // si se encuntra una i se le suma 1 al contados de i
      if(frase[i] == "I" | frase[i] == "i"){
        contador_i = contador_i + 1;
      }
      // si se encuntra una o se le suma 1 al contados de o
      if(frase[i] == "O" | frase[i] == "o"){
        contador_o = contador_o + 1;
      }
      // si se encuntra una u se le suma 1 al contados de u
      if(frase[i] == "U" | frase[i] == "u"){
        contador_u = contador_u + 1;
       }
    }
    // imprime la cantidad de veces que aparece cada vocal
    document.write("La cantidad de 'a' en la frase '", frase,"' es: ", contador_a);
    document.write("</br>La cantidad de 'e' es: ", contador_e);
    document.write("</br>La cantidad de 'i' es: ", contador_i);
    document.write("</br>La cantidad de 'o' es: ", contador_o);
    document.write("</br>La cantidad de 'u' es: ", contador_u);
 }
contador_vocales();
