function dibujarRectangulo(x, y, base, altura, color){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.fillStyle = color;
    pincel.fillRect(x, y, base, altura);
    pincel.strokeStyle = "black";
    pincel.strokeRect(x, y, base, altura);
}

function escribirTexto(x, y, texto){
        var pantalla = document.querySelector("canvas");
        var pincel = pantalla.getContext("2d");

        pincel.font = "15px Georgia"
        pincel.strokeStyle = "black";
        pincel.fillText(texto, x, y)
}



function dibujarBarra(x, y, serie, colores, texto){

    escribirTexto(x, y-10, texto)

    var sumaAltura = 0;
    for(var indice = 0; indice < serie.length; indice++){
        var altura = serie[indice];
        dibujarRectangulo(x, y + sumaAltura, 50, altura, colores[indice]);
        sumaAltura = sumaAltura + altura;
    }

}
var colores = ["blue", "green", "yellow", "red", "gray"];
var serie2009 = [6, 47, 41, 3, 3];
var serie2019 = [81, 9, 3, 3, 4];



dibujarBarra(50,50, serie2009, colores, "2009");
dibujarBarra(150, 50, serie2019, colores, "2019");
