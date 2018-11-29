// 2 - Hagamos la web del Metro más divertida.
// 	Saca el estado actual de todas las líneas del metro de Madrid por consola.

var nodesArray = Array.prototype.slice.call(document.querySelectorAll(".list__lineas__element"));
nodesArray.forEach(ele => {
	if (ele.children[0].children[0] !== undefined) {
		var numeroLinea = ele.children[0].children[0].classList[0];
		if (numeroLinea.indexOf('-') !== -1) {
			numeroLinea = numeroLinea.split("-")[1];
		}
		var nodeEstado = ele.querySelector("[class^=' state']");
		if (nodeEstado !== undefined) {
			let isOk = nodeEstado.classList.contains("state--green");
			let	hasAlert = nodeEstado.classList.contains("state--alert");
			var resultado = "Linea " + numeroLinea;
			if (!isOk) {
				resultado += " NO";
			} 
			resultado += " esta funcionando correctamente.";
			if (hasAlert) {
				var toolTipDiv = ele.querySelector(".has-tip").dataset.toggle;
				var alerta = document.getElementById(toolTipDiv).innerText;
				resultado += " " + alerta;
			}	
			console.log(resultado);
		}
	}
});