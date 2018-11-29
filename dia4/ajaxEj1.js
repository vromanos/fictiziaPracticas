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

request("http://airemad.com/api/v1/station", data => {
	console.log(data);
	var div = document.querySelector("#resultado");
	var cadenaHtml = "<ul>";
	data.forEach(ele => {
		cadenaHtml += "<li>Estacion " + ele.nombre_estacion + " - " + ele.direccion + "</li>";
	})
	cadenaHtml += "</ul>"
	div.innerHTML = cadenaHtml;
});