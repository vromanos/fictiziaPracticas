// 8 - Hagamos una lista de pasajeros efectiva usando Arrays e imprimamos cada pasajero de 
// 	la lista y su número de asiento (basado en el orden del índice). Nota: El primer asiento del tren es el 1 y no el 0.

var pasajeros = ['Alicia Gutierrez', 'Alfonso Gomez', 'Luis Navarro', 'Oscar Garcia', 
	'Andres Fernandez', 'Lucia Mellado'];

console.log("Ejercicio 8");
function pasajeroReserva(element, index) {
    console.log("El pasajero " + element + " tiene reservado el asiento " + (index + 1));
}
pasajeros.forEach(pasajeroReserva);
console.log(" ");

// 9 - Necesitamos una función para agregar y otra para borrar pasajeros de la lista. 
// 	Nota: Pensemos que a la larga pueden existir más listas.

console.log("Ejercicio 9");
function agregarElemento(lista, elemento) {
	lista.push(elemento);
}

function eliminarElemento(lista, elemento) {
	var index = lista.indexOf(elemento);
	if (index > -1) {
  		lista.splice(index, 1);
	}
}

agregarElemento(pasajeros, "Victor Perez");
agregarElemento(pasajeros, 'Oscar Navarro');
eliminarElemento(pasajeros, "Alfonso Gomez");

pasajeros.forEach(pasajeroReserva);
console.log(" ");

// 10 - La compañía de trenes ha decidido que los viajeros podrán reservar el asiento asignado, 
	// pero quiere evitar que los pasajeros cambien de asiento constantemente cuando se anula un o varios billetes. 
	// Nota: Al borrar en el ejercicio anterior las posiciones de los pasajeros cambiaban y los billetes quedaban 
	// desactualizados.

console.log("Ejercicio 10");

function anularElemento(lista, elemento) {
	var index = lista.indexOf(elemento);
	if (index > -1) {
  		delete lista[index];
	}
}
anularElemento(pasajeros, "Lucia Mellado");
anularElemento(pasajeros, "Oscar Navarro");
agregarElemento(pasajeros, "Arturo Martin");
agregarElemento(pasajeros, "Enrique Sanchez");
anularElemento(pasajeros, "Arturo Martin");

pasajeros.forEach(pasajeroReserva);
console.log(" ");

// 11 - Una de las vías principales esta en obras. Así que nuestra compañía decidió usar antiguas vías para hacer 
// 	transbordos directos entre las estaciones afectadas. Nuestra Misión es añadir el tiempo estimado en 
// 	los billetes para las estaciones afectadas Tetuán, Moncloa y Hortaleza. Es necesario incluir un texto informativo y 
//  el nombre del usuario también en el billete.
// Nota: Intenta utilizar Closures
// Info: - Tetuán (12) - Moncloa (19) - Hortaleza (21)

console.log("Ejercicio 11");

function creadorBilletes(estacion, duracion) {
	return function (pasajero) {
		console.log(
			'Billete de Tren con destino a "' + estacion + '". Pasajero: "' + pasajero + 
				'". Por obras, el tiempo estimado del trayecto es de ' + duracion + ' minutos');
	}	
}

var crearBilleteTetuan = creadorBilletes('Tetuan', '12');
var crearBilleteMoncloa = creadorBilletes('Moncloa', '19');
var crearBilleteHortaleza = creadorBilletes('Hortaleza', '12');

crearBilleteTetuan('Arturo Martin');
crearBilleteHortaleza('Victor Fernandez');
crearBilleteMoncloa('Francisco Sanchez');
