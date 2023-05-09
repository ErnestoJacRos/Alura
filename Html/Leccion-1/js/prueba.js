function encriptar(texto) {
    let textoEncriptado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
   
    return textoEncriptado;
  }
  
  // Ejemplo de uso
  let textoOriginal = "Hola mundo!";
  let textoEncriptado = encriptar(textoOriginal);

  function desencriptar(texto) {
    let textoEncriptado = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  
    return textoEncriptado;
  }
  
  // Ejemplo de uso
  let textoOriginalDos = "Hoberlai mufatndober! ";
  let textoEncriptadoDos = desencriptar(textoOriginalDos);
  
  console.log(textoEncriptado); // Output: Holai munimesdofat!
  console.log(textoEncriptadoDos);
  
  function repetir(){
    for(let lineas = 0; lineas<=10; lineas++){
        for(let col = 0; col <= lineas; col++){
          console.log("#");
        }
    }
  } 

 