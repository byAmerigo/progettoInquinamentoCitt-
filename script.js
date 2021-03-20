const baseURL = "https://api.waqi.info/feed";
const TOKEN = "b522efe7160f738764461ee8a02427522bd814dd";

/**
 * Prende come parametro la city (in inglese). 
 * Fa la chiamata all'api di WAQI e una volta che ha terminato
 * (quindi al then) ci facciamo tornare l'oggetto
 * @param {String} city 
 * @returns {Object} response della chiamata
 */
async function callAPIbyCityName(city) {
  console.log("Sto facendo la chiamata per città ->" + city);
 return fetch(`${baseURL}/${city}/?token=${TOKEN}`)
    .then((response) => response.json())
}

/**
 * Richiama l'api di waqi prende come parametri
 * la latitudine e longitudine.
 * Fa la chiamata all'api di WAQI e una volta che ha terminato
 * (quindi al then) ci facciamo tornare l'oggetto
 * @param {Number} latitudine 
 * @param {Number} longitudine 
 * @returns {Object} responde della chiamata
 */
function callAPIbyLatLong(latitudine, longitudine) {
  console.log("Sto facendo la chiamata per latitudine e longitudine");
  return fetch(`${baseURL}/${latitudine};${longitudine}/${TOKEN}`)
    .then((response) => response.json());
}


/**
 * Questa funzione viene fatta partire quando si preme
 * sul bottone del form "Inserisci la tua città"
 */
async function onPressButtonForm(){
  //E il valore dell'input
  let cityValue = document.getElementById("city").value;
  //L'oggetto di risposta che ci ritorna dalla chiamata
  let response = await callAPIbyCityName(cityValue);
  let qualitaDellAria = response.data.aqi
  let cityResponse = response.data.city.name
  let message = `A ${cityResponse} la qualita dell\'aria è di ${qualitaDellAria}`
  //Cerchiamo l'elemento per id dal file html e gli inseriamo come testo la variabile message
  document.getElementById("message-response").innerHTML=message;
}