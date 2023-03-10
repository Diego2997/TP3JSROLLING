// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

//uso 5 porque me sale un 7 en el random
let array = [];
let dado1;
let dado2;
let condicion = 0;
//document.write(dado1);

while (condicion < 50) {
  dado1 = Math.floor(Math.random() * (5 + 1) + 1);
  dado2 = Math.floor(Math.random() * (5 + 1) + 1);
  array.push(dado1 + dado2);
  condicion++;
}
document.write("<br>");
document.write("Las sumas de los dados son ");
document.write("<br>");
for (let i = 0; i < array.length; i++) {
  document.write(array[i] + "<br>");
}
