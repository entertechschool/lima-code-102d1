"use strict"; // Nos obliga a escribir sintaxis actualizada de JS.

// alert("Me gusta interrumpir");
// document.write("PERU");
// console.log("Hola Georgina");

// let userName = prompt("Cuál es tu nombre?");
// document.write("Bienvenido " + userName);
// console.log("Welcome " + userName);

// let userConfirm = confirm("Ere mayor de edad?");
// let userName = prompt("Cuál es tu nombre?");
// console.log(userConfirm);

// if (userConfirm) {
// 	console.log("Bienvenido Sr@." + userName);
// 	document.write("Bienvenido Sr@." + userName);
// } else {
// 	console.log("Hola amig@ " + userName);
// 	document.write("Hola amig@ " + userName);
// }

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

sumarDesdePrompt();
