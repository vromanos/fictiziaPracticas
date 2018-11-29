// 1 - Saca una lista de los cursos disponibles en Fictizia en el área de Desarrollo interactivo y Web y 
//    conviertelo en Markdown.

var curso = function (titulo, duracion, url) {
  this.titulo = titulo;
  this.duracion = duracion;
  this.url = url
}
var nodesArray = Array.prototype.slice.call(document.querySelectorAll(".gradBg"));
var listaCursos = new Array();
nodesArray.forEach(ele => {
  if (ele.children[0].tagName === 'H1') {
    // es uno de los cursos
    // Titulo del curso
    var titulo = ele.children[0].innerText;
    // Duración del curso
    var duracion = ele.parentNode.children[0].innerText;
    var url = ele.children[0].children[0].href
    listaCursos.push(new curso(titulo, duracion, url));
  }
});

console.log("# Cursos de Fictizia en el Área de Desarrollo interactivo y Web");
listaCursos.forEach(curso => {
  console.log("\t- [" + curso.titulo + " ("+ curso.duracion +")] (" + curso.url + ")");
});