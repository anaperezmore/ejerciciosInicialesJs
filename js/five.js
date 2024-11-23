let minuto = parseFloat(prompt("Introduce un número de minutos"))

let seg = minuto * 60;
let hora = minuto / 60;

alert (`Has ingresado ${minuto} minutos.
    -Equivale a ${seg} segundos.
    -${hora.toFixed(2)} horas`)