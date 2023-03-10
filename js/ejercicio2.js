// Crear un script que solicite al usuario mediante un prompt el nombre de ciudades
// y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado,
//  luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

//Profe cuando se refiere a posicion supongo que es del arreglo entonces si el enunciado dice tercera seria ciudades[2]
// o por lo menos se esa forma esta realizado el ejercicio

let ciudades = [];
while (confirm("Ingrese ciudades")) {
  ciudades.push(prompt("Ingrese otra ciudad"));
}

document.write("Las ciudades ingresadas son: ");
for (let i = 0; i < ciudades.length; i++) {
  document.write(ciudades[i] + " ");
}
document.write("<br>");
document.write(`La longitud del arreglo es : ${ciudades.length}`);
document.write("<br>");
document.write(
  `La primera ciudad es  ${ciudades[0]}, la tercera es ${
    ciudades[2]
  }  y la ultima es  ${ciudades[ciudades.length - 1]}`
);
document.write("<br>");
ciudades[ciudades.length - 1] = "Paris";
document.write("<br>");
document.write("La ciudad que esta en la segunda posicion es " + ciudades[1]);
document.write("<br>");
ciudades[1] = "Barcelona";

//Esto va por mi parte
document.write("Las nuevas ciudades son");
for (let i = 0; i < ciudades.length; i++) {
  document.write(ciudades[i] + " ");
}
