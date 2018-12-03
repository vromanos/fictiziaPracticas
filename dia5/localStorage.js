function actualizarListaContactos() {
	var listaContactos = "";
	const localStorage = window.localStorage;
	var contadorActual = 1;
	for ( var i = 0; i < localStorage.length; i++ ) {
		if (localStorage.key(i).startsWith("contacto")) {
			var contacto = JSON.parse(localStorage.getItem(localStorage.key(i)));
			listaContactos += `<li><div>Nombre = ${contacto.nombre} Telefono = ${contacto.telefono} Email = ${contacto.email}</div><input type="button" onClick="eliminarContacto('${localStorage.key(i)}')" value="Eliminar"></li>`;
		}
		contadorActual++;
	}
	document.querySelector("#listaContactos").innerHTML = listaContactos;
	contadorContactos = contadorActual;
}

function eliminarContacto(clave) {
	window.localStorage.removeItem(clave);
	actualizarListaContactos();
}

var contadorContactos = 1;
var Contacto = function (nombre, telefono, email) {
	this.nombre = nombre;
	this.telefono = telefono;
	this.email = email;
	this.id = contadorContactos++;
	this.guardarContacto = function () {
		window.localStorage.setItem("contacto"+this.id, JSON.stringify(this));
	}
};

(function (){
	// Inicializacipn
	if (window.localStorage) {
	    console.info("La funcion Html5 localStorage esta soportada!");
	} else {
	    console.warn('Su navegador no soporta localStorage. Actualice su navegador');
	}

	document.querySelector("#guardarContacto").addEventListener('click', e => {
		var contactoNombre = document.querySelector("#nombre").value;
		var contactoTelefono = document.querySelector("#telefono").value;
		var contactoEmail = document.querySelector("#email").value;
		var miContacto = new Contacto(contactoNombre, contactoTelefono, contactoEmail);
		miContacto.guardarContacto();
		document.querySelector("#nombre").value = "";
		document.querySelector("#telefono").value = "";
		document.querySelector("#email").value = "";
		actualizarListaContactos();
	});

	document.querySelector("#borrarContactos").addEventListener('click', e => {
		if (confirm("Seguro que desea borrar todos los contactos?")) {
			for ( var i = 0; i < localStorage.length; i++ ) {
				if (localStorage.key(i).startsWith("contacto")) {
					localStorage.removeItem(localStorage.key(i));
				}
			}
			actualizarListaContactos();
		}
	})

	actualizarListaContactos();
})();
