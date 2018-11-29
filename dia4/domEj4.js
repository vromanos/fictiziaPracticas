class profesor {
  constructor(nombre, imagen, descripcion) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.descripcion = descripcion;
  }

  informacion() {
    console.log(`${this.nombre} es profesor de Fictizia. Su imagen de perfil es '${this.imagen}'. ${this.descripcion}`);
  };
}

var profDivsArray = Array.prototype.slice.call(document.querySelectorAll(".microCard"));
var profesoresArray = new Array();
profDivsArray.forEach(profDiv => {
	var imagen = profDiv.querySelector(".withMedia > img");
	var nombre = imagen.alt;
	var src = imagen.src;
	var descripcion = profDiv.querySelector("p").innerText;
	profesoresArray.push(new profesor(nombre, src, descripcion));
});

profesoresArray.forEach(prof => {
	prof.informacion();
});