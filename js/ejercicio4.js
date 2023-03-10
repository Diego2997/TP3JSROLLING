// Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

const parOImpar = (numero) => {
  if (numero % 2 === 0) {
    return document.write(`El numero ${numero} es par`);
  } else {
    return document.write(`El numero ${numero} es impar`);
  }
};

parOImpar(19);
