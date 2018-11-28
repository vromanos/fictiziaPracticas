const nasa = "xxxxxxxxxxxxxxxxxxxxxxxxxx";

// Ayudemos a la NASA!
// En Marte tenemos un rover llamado curiosity... Nuestro objetivo es usar la API de la NASA para complementar este ejercicio.
// Problema:
// La medida del tiempo para esta API son los SOLES, no todos los SOLES tenemos datos, por eso la api retorna un array vacío en algunso soles.
// {
//   "photos": []
// }
// 
// Solución:
// Nuestro objetivo es hacer una llamada recursiva a la API de tal forma que si un SOL no tiene información útil pasamos al SOL anterior.
// Para evitar baneos necesitamos determinar la frecuencia de las llamadas recursivas en ms
// Así como podemos establecer un límite de llamadas por si salimos mucho de rango.

function NasaRequest(solId, delay) {
  //Tu solución
  console.log("NasaRequest => solId = " + solId + " retraso = " + delay + " hora : " + getActualTime());

  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
        console.log("Fetch to api nasa hora : " + getActualTime());
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solId}&api_key=${nasa}`)
          .then(function(response) {
            resolve(response.json());
          })
          .catch(reject);
      }, delay);
    
  })
};

function getActualTime() {
  return moment(new Date()).format('HH:mm:ss');
}

var solIdInicial = '2280';//'2280';
var retrasoPeticiones = 1000;
var peticionesMaximas = 50;
var peticionActual = 0;

function testPromesasNasa() {

    console.log("Intento numero " + (++peticionActual));
    if (peticionActual < peticionesMaximas) {
        var peticionNasa = NasaRequest(solIdInicial, retrasoPeticiones);
        peticionNasa.then(response => {
          if (response.photos && response.photos.length > 0) {
              console.log("Se ha(n) obtenido " + response.photos.length + " imagen(es)");
              console.log(response.photos);
              resultadoCorrecto = true;
            } else {
              console.log("No se han encontrado imagenes para el solId = " + solIdInicial);
              solIdInicial--;
              testPromesasNasa();
            }
          })
          .catch(function () {
            console.log("Error durante la obtencion de imagenes. Se va a intentar con el sol id = " + solIdInicial);
            solIdInicial--;
            testPromesasNasa();
          });
    }
}

testPromesasNasa();

// async function init() {
//   /*
//     - current sun: 2080
//     - limit requests: false
//     - frecuency: 1000ms
//   */
//   const currentValue = await NasaRequest(2080, false, 1000);
//   console.log("currentValue:", currentValue);
// }
// init();