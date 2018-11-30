// Sacar en el html los datos de polen (http://airemad.com/api/v1/pollen)

function request(url, fnCallback) {

	fetch(url)
	    .then(function(response) {
	    	return response.json();
	    })
	    .then(function(data) {
	      	fnCallback(data); 
	    })
	    .catch(function(error) {
	      	console.log("Error en Fetch => " + error)
	    });  
};


request("http://airemad.com/api/v1/pollen", data => {
	console.log(data);
	var div = document.querySelector("#resultado");
	var cadenaHtml = "<ul>";
	data.forEach(ele => {
		cadenaHtml += "<li>Estacion " + ele.name + " - Parametros Gram\u00EDneas : " + 
			" Medio =  " + ele.parametros.Gram\u00EDneas.medio + 
			" Alto = " + ele.parametros.Gram\u00EDneas.alto + 
			" Muy Alto = " + ele.parametros.Gram\u00EDneas.muy_alto + 
			"<br/><p>Valor Actual = " + ele.mediciones.Gram\u00EDneas.valor +" (" 
				+ ele.mediciones.Gram\u00EDneas.resumen +")</p>"
			"</li>";
	});
	cadenaHtml += "</ul>";
	div.innerHTML = cadenaHtml;
});
