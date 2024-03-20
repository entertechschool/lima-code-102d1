"use strict"; // Nos obliga a escribir sintaxis actualizada de JS.

// Functions:
/* 
Un conjunto de instrucciones
que trabajan de forma relacionada
para un fin determinado.

Puedes usar variables 
dentro del ámbito de la función.

Admiten parámetros.

Pueden retornar algún tipo de dato.

Pueden ser invocadas / llamadas 
desde fuera, PERO también desde adentro.

A parte de crear la función, 
debo llamarla/invocarla
desde algún lugar.

si la funcion se llama bloque,
para llamarla lo hago asi: bloque();

*/

// Quiero sumar 2 numeros
// y retornar la suma.
// function sumar(num1, num2) {
// 	let suma = num1 + num2;
// 	return suma;
// }

// let x = sumar(8, 12); // 20
// console.log(x);

// sumar(8, 12);

function sumarDesdePrompt() {
	let num1 = prompt("Numero 1:");
	let num2 = prompt("Numero 2:");

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	let suma = num1 + num2;
	alert(suma);
}

// sumarDesdePrompt();

function saludar() {
	document.write("Bienvenido!");
}

function obtenerNombre() {
	let userName = prompt("Cuál es tu nombre?");
	document.write("Es un gusto " + userName);
}

function saludarPorHora() {
	let horaActual = prompt("Qué hora es? (0-23)");
	horaActual = parseInt(horaActual);
	if (horaActual > 17) {
		document.write("Buenas noches querido alumno");
	} else if (horaActual > 12) {
		document.write("Buenas tardes querido alumno");
	} else {
		document.write("Buenos dias querido alumno");
	}
}

