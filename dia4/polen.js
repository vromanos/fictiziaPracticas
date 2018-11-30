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

var madrid = "Madrid";
var cadenaHtml = "";
request("http://api.openweathermap.org/data/2.5/weather?q="+madrid+"&APPID=", data => {
	console.log(data);
	var div = document.querySelector("#resultado");
	cadenaHtml += "Estacion " + data.name + "<ul>";
	data.weather.forEach(wea => {
		cadenaHtml += "<li>"+ wea.description +"</li>";
	})
	cadenaHtml += "</ul>";
	div.innerHTML = cadenaHtml;
});
