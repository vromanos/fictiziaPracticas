//import http from 'http';
const http = require('http');
const url = require('url');
const fs = require('fs');


const puerto = 3000;
const direccion = "127.0.0.1";
const mensaje = 'Hola a todos, ahora usando HTTP\n';


http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  console.log("Peticion recibida => " + pathname);
  if (pathname === '/') {
    fs.readFile('./indexNode.html', function (err, html) {
  		res.writeHeader(200, {"Content-Type": "text/html"}); 
    	res.write(html);
    	res.end();
  	});
  } else if (pathname === '/where') {
      res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8'
    });
    res.end('Estamos en el cursos de Fictizia de Javascript');
  } else if (pathname === '/what') {
      res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8'
    });
    res.end('Curso de Javascript Avanzado');
  } else if (pathname === '/contact') {
      res.writeHead(301, {
	    'Location': 'https://www.fictizia.com/contacto'
	  });
	  res.end();
  } else if (pathname === '/who') {
  	fs.readFile('./nosotros.html', function (err, html) {
  		res.writeHeader(200, {"Content-Type": "text/html"}); 
    	res.write(html);
    	res.end();
  	});
  } else {
      res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.end('Querido... 404!');
  }
}).listen(puerto, direccion);
console.log(`Server running at http://${direccion}:${puerto}/`);