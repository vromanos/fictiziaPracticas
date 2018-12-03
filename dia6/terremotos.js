#!/usr/bin/env node

const process = require('process');
const http = require('https');

// url modelo https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_hour.geojson

if (process.argv.length > 2) {
	var tipoTerremoto = process.argv[2];
	console.log(`Ha especificado el parametro => ${tipoTerremoto}`);
	const options = {
  		host: 'earthquake.usgs.gov',
  		path: `/earthquakes/feed/v1.0/summary/${tipoTerremoto}_hour.geojson`
	};
	http.get(options, function(res) {
		var body = '';
		res.on('data', function(chunk){
        	body += chunk;
    	});

    	res.on('end', function(){
        	var data = JSON.parse(body);
        	console.log("Se han detectado los siguientes terremotoso del tipo " + tipoTerremoto + " en la última hora:");
		  	data.features.forEach(terremoto => {
				console.log(`Terremoto en ${terremoto.properties.place}`);
		  	});
    	});

	 }).on('error', function(e) {
	      console.log("Got error: " + e.message);
	 });


} else {
	console.log("Es necesario que especifique al menos un parámetro ('significant', '4.5', '2.0', '1.0')");
	process.exit(1);
}