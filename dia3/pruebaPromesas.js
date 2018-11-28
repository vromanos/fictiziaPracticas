var cuentaPromesas = 0;
var errorMode = false;
function testPromesa() {

  var numPromesaActual = ++cuentaPromesas;

  console.warn("Promesa Asincrona numero ("+numPromesaActual+") - Iniciada")

  var miPromesa = new Promise(
    function(resolve, reject) {       

      console.info("Promesa Asincrona numero ("+numPromesaActual+") - Proceso asincrono empezado");

      if(errorMode){
          reject(numPromesaActual)
      } else{
        window.setTimeout(
          function() {
            resolve(numPromesaActual)
          }, Math.random() * 5000 + 1000);
      }
    });
  miPromesa.then(
    function(val) {
      console.info("Promesa Asincrona numero ("+val+") - Proceso asincrono terminado");
      console.warn("Promesa Asincrona numero ("+numPromesaActual+") - Finalizada");
    }).catch(
      function(val){
        console.error("Promesa Asincrona numero ("+val+") - ERROR FATAL");
    });
};

for (var i = 0; i < 3; i++) {
  testPromesa();  
}
