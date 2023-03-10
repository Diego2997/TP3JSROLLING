// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function tablaMultiplicar(num) {
  for (var i = 1; i <= 10; i++) {
    tablaMultiplicar = num * i;
    document.write(num + "x" + i + "=" + tablaMultiplicar + "<br>");
  }
}

let numeroIngresado = Number(prompt("Ingrese un numero"));
tablaMultiplicar(numeroIngresado);
