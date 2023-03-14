// Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

const parOImpar = (numero) =>
  numero === 2
    ? document.write(`El ${numero} es par`)
    : document.write(`El ${numero} es impar`);

parOImpar(8);
