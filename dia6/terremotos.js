#!/usr/bin/env node

const process = require('process');
const http = require('https');

// url modelo https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_hour.geojson

if (process.argv.length > 2) {
	var tipoTerremoto = process.argv[2];
	console.log(`Se van a buscar terremotos en el ultimo dia del tipo => ${tipoTerremoto}`);
	// https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson
	const url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${tipoTerremoto}_day.geojson`;
	//const options = {
  	//	host: 'earthquake.usgs.gov',
  	//	path: `/earthquakes/feed/v1.0/summary/${tipoTerremoto}_hour.geojson`
	//};
	//http.get(options, function(res) {
	http.get(url, function(res) {
		var body = '';
		res.on('data', function(chunk){
        	body += chunk;
    	});

    	res.on('end', function(){
        	var data = JSON.parse(body);
        	if (data.features.length > 0) {
        		console.log('');
        		console.log(`Se han detectado ${data.features.length} terremotos del tipo ${tipoTerremoto} en el ultimo dia:`);
        		console.log(`*****************************`);
                console.log(`${data.metadata.title}`);
                console.log(`---------------------`);
                console.log(`status: ${data.metadata.status}`);
                console.log(`---------------------`);
                console.log(`${new Date(data.metadata.generated).toLocaleString("es-ES")}`);
                console.log(`==============================`);
                console.log('');
		  		data.features.forEach(terremoto => {
					console.log(`Terremoto en ${terremoto.properties.place} (coordenadas: ${terremoto.geometry.coordinates[0]} , ${terremoto.geometry.coordinates[1]}) de magnitud: ${terremoto.properties.mag}`);
		  		});	
        	} else {
        		console.log(`No se ha detectado ningun terremoto del tipo ${tipoTerremoto} en el ultimo dia`);
        	}

    	});

	 }).on('error', function(e) {
	      console.log("Got error: " + e.message);
	 });


} else {
	console.log("Es necesario que especifique al menos un parámetro ('significant', '4.5', '2.0', '1.0')");
	process.exit(1);
}
