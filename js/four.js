let a = prompt("Introduce el valor de A");
let b = prompt("Introduce el valor de B");

document.write(`<p>Valores originales: a = ${a}, b = ${b}</p>`);

let inter = a;
a = b;
b = inter;

document.write(`<p>Valores intercambiados: a = ${a}, b = ${b}</p>`)

