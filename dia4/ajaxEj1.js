function request(url) {

	fetch(url)
	    .then(function(response) {
	    	console.log("1st then => " + response);
	    	return response.json();
	    })
	    .then(function(data) {
	    	console.log("2nd then => " + data);
	      	console.log(data)  
	    })
	    .catch(function(error) {
	      	console.log("Error en Fetch => " + error)
	    });  
};

request("http://airemad.com/api/v1/station");