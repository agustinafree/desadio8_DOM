
// Array

let carrito = []

// Objetos:

class Ropa {
    constructor (tipo, talle, precio) {
        this.tipo = tipo
        this.talle = talle
        this.precio = precio
    } 
    Carrito () {
        carrito.push(this)
    }

}

const buzo = new Ropa ("buzo", "S", 1799 )

// Variables
  
 let subtotal = 1799;
 const impuesto = 1.21;

//
/* 
let aviso = alert("Compra el buzo :) o los buzos que quieras! Luego fijate en consola la cantidad comprada :O" );


alert("gracias por comprar el buzo, el precio es de $1799")

alert("Procedemos a cobrar, debemos sumar el IVA :( ");


alert ("El precio con IVA es de " + '$' + Math.trunc(calcIVA(subtotal, impuesto)));

//CAPTURAR ENTRADAS MEDIANTE PROMPT

let respuesta = prompt(
	'Queres pagar en Cuotas?',
	'Ingresa "si" o "no"'
).toLowerCase();

while (
	typeof respuesta != 'string' &&
	(respuesta != 'si' || respuesta != 'no')
) {
	respuesta = prompt(
		'Invalido. Ingresa tu respuesta correctamente:'
	).toLowerCase();
}
if ( respuesta === 'si') {
	let cantCuotas = prompt('Ingrese Cantidad de cuotas: ', '3, 6 o 12');
	while (
		isNaN(cantCuotas) ||
		cantCuotas % 3 != 0 ||
		cantCuotas > 12 ||
		cantCuotas < 3
	) {
		cantCuotas = prompt('Intente nuevamente: ', '3, 6 o 12');
	}
	let preciototal =
		Math.trunc (calcularCuotas(calcIVA(subtotal, impuesto),cantCuotas) ) ;  
	alert(
		'Usted eligio ' +
			cantCuotas +
			' cuotas.' +
			' Su Precio por Cuota sera de: ' + '$' +
			preciototal
	);
} else {
	alert('listo, paga en efectivo');
}
  */
//--------------------Funciones------------------------//

function calcularCuotas(precio, cantidad) {
	let precioCuota = precio / cantidad;
	return precioCuota;
}



function calcIVA(subtotal, impuesto) {
	return subtotal * impuesto;
}

function Comprar() {
	buzo.Carrito()
   
	   
	   console.log (carrito)

}


//DOM

let fecha = new Date();
let año = fecha.getFullYear();

let nombre = prompt('Ingresá tu Nombre:');
let nacimiento = prompt('Ingresá tu Año de Nacimiento:');
nacimiento = parseInt(nacimiento);

let edad = año - nacimiento;

let mensaje = alert(
	'Hola ' + nombre + ', se que tenes ' + edad + ' años, ¡mira en pantalla!'
);

let info = [nombre, nacimiento, edad];

console.log(info);

for (let i = 0; i < info.length; i++) {
	console.log(info[i] + ': ' + typeof info[i]);
}

document.getElementById('info').innerHTML =
	'Nombre: ' +
	info[0] +
	', Año de Nacimiento: ' +
	info[1] +
	', Edad: ' +
	info[2] +
	' años.';