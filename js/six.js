let precioDolar = parseFloat(prompt("Ingrese el precio del produto en dólar"))

const dolar = 1130;
const iva = 0.21;

let precioPesos = precioDolar * dolar;

let precioFinal = precioPesos * (1 + iva);

alert(`Precio del producto:
    -En dólares: $${precioDolar.toFixed(2)}
    -Convertido a pesos (SIN IVA): $${precioPesos.toFixed(2)}
    -Precio final con IVA: $${precioFinal.toFixed(2)}`)
