#!/usr/bin/env node

//import http from 'http';
const http = require('https');
const eleccion = process.argv[2];
const magnitudes = ['all', '1.0', '2.5', '4.5', 'significant'];

if (!eleccion) {
  console.error('Necesito un parámetro para afinar mis resultados');
  process.exit(1);
} else {
  if (!magnitudes.includes(eleccion)) {
      console.error(`Parámetro incorrecto!. Solo admito: ${magnitudes.join(", ")}.`);
      process.exit(1);
  }
}

const options = {
  host: 'earthquake.usgs.gov',
  path: `/earthquakes/feed/v1.0/summary/${eleccion}_hour.geojson`
};

http.get(options, res => {
  let data = "";
  let json;
  res.on("data", chunk => {
      data += chunk;
  });
  res.on("end", () => {
      json = JSON.parse(data);

      console.log(`*****************************
      ${json.metadata.title}
      ---------------------
      total: ${json.metadata.count}
      status: ${json.metadata.status}
      ---------------------
      ${new Date(json.metadata.generated).toLocaleString("es-ES")}
      ==============================`);
      
      json.features.forEach(evento => {
          console.log(`${evento.properties.title}
          ${new Date(evento.properties.time).toLocaleString("es-ES")}
          Magnitud: ${evento.properties.mag}
          Estatus: ${evento.properties.status}
          Tipo: ${evento.properties.type}
          Lugar: ${evento.properties.place}
          Coordenadas: ${evento.geometry.coordinates[0]} , ${ evento.geometry.coordinates[1]}
          Info: ${evento.properties.url}
          Detalles: ${evento.properties.detail}
          ==============================`);
      })
      process.exit(0);
  });
}).on('error', e => {
  console.log(`Error fetching data: ${e.message}`);
  process.exit(1);
});