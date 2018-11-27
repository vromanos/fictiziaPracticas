var trains = [true, true, true, false, false, false, false, false, true, true];

// 1 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... usando while.

console.log("Ejercicio 1");
var i = 0;
while (i < trains.length) {
	console.log("El tren numero " + (i+1) + (trains[i] ? "" : " no") + " esta funcionando");
	i++;
}
console.log(" ");

// 2 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... usando Do... While.

console.log("Ejercicio 2");
var i = 0;
do {
	console.log("El tren numero " + (i+1) + (trains[i] ? "" : " no") + " esta funcionando");
	i++;
} while (i < trains.length);
console.log(" ");

// 3 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... usando for

console.log("Ejercicio 3");
for (var i = 0; i < trains.length; i++) {
	console.log("El tren numero " + (i+1) + (trains[i] ? "" : " no") + " esta funcionando");
}
console.log(" ");

// 4 - #compliquemos! Servicio nocturno en el tren 10. Nota: Frente al ejercicio anterior, en este caso 
	//queremos que siempre que hablemos del tren 10 se especifique que es nocturno. Independientemente de 
	//si esta parado o funcionando.

console.log("Ejercicio 4");
function imprimirEstadoTrenes(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (i !== 9 && i !== 11) {
			console.log("El tren numero " + (i+1) + (arr[i] ? "" : " no") + " esta funcionando");	
		} else {
			console.log("El tren numero " + (i+1) + " es nocturno");	
		}
	}	
}
imprimirEstadoTrenes(trains);
console.log(" ");

// 5 - ¡Refactoricemos! ¿Y si todos los trenes están en las vías funcionando o por el contrario si ninguno 
	//de los trenes esta funcionando?.
console.log("Ejercicio 5");
function cambiarEstadoTrenes(arr, estanParados) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = estanParados;
	}
}
console.log("Vamos a parar los trenes");
var trainsParados = trains.slice();
cambiarEstadoTrenes(trainsParados, false);
imprimirEstadoTrenes(trainsParados);
console.log("Vamos a arrancar los trenes");
var trainsArrancados = trains.slice();
cambiarEstadoTrenes(trainsArrancados, true);
imprimirEstadoTrenes(trainsArrancados);
console.log(" ");

//6 - El servicio nocturno se queda un poco corto y necesitamos añadir un nuevo tren de refuerzo. El 12 
	//erá destinado a cubrir esta necesidad, exactamente igual que el 10 anteriormente.

console.log("Ejercicio 6");
trains.push(true);
trains.push(false);
imprimirEstadoTrenes(trains);
console.log(" ");


// 7 - El departamento de Marketing ha decidido lanzar un nuevo servicio los sábados. El "tren fiestero" 
	//será un tren adaptado a un público más intrépido y funcionará solo en los sábados. Este tren será el número 13.
	//NOTA: EL TREN 13 SOLO FUNCIONA LOS SÁBADOS. Es necesario incluir el día de la semana en tu código

console.log("Ejercicio 7");
var today = new Date();
console.log("Hoy es " + today);
if(today.getDay() == 6 ) {
	trains.push(true);
} else {
	trains.push(false);
}
console.log("El tren numero 13 (tren fiestero) " + (trains[12] ? "" : " NO") + " esta funcionando");
console.log(" ");

console.log("Bucle ForEach");
trains.forEach(function (elem, index) {
	console.log("El tren numero " + (index+1) + (elem ? "" : " no") + " esta funcionando");
});
console.log(" ");