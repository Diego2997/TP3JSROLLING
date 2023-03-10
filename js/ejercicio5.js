// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

let mayusculas = 0;
let minusculas = 0;
function mayusculasOMinusculas(t) {
  for (let i = 0; i < t.length; i++) {
    if (t.charAt(i) === t[i].toUpperCase()) {
      mayusculas++;
    }
    if (t.charAt(i) === t[i].toLowerCase()) {
      minusculas++;
    }
  }
  if (mayusculas > 0 && minusculas > 0) {
    document.write("El texto tiene mayusculas y minusculas");
  }
  if (mayusculas > 0 && minusculas === 0) {
    document.write("El texto solo tiene mayusculas");
  }
  if (minusculas > 0 && mayusculas === 0) {
    document.write("El texto solo tiene minusculas");
  }
}

mayusculasOMinusculas("HoLa CoMo eSTas");
