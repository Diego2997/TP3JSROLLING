//  Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)

const calcularAreaRectangulo = (num1, num2) => {
  document.write(`El perimetro del rectangulo es ${2 * (num1 + num2)}`);
};
let valor1 = Number(prompt("Ingrese el primer valor"));
let valor2 = Number(prompt("Ingrese el segundo valor valor"));
calcularAreaRectangulo(valor1, valor2);
