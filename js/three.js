let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));
let operacion = prompt("Introduce la operación (+,-,*)");

let resultado;
switch (operacion) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
}

alert(`El resultado de ${numero1} ${operacion} ${numero2} es ${resultado}`)