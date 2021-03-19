const baseURL = "https://api.waqi.info/feed";
const TOKEN = "b522efe7160f738764461ee8a02427522bd814dd";
function callAPIbyCityName(city) {
  console.log("Sto facendo la chiamata per città ->" + city);
  fetch(`${baseURL}/${city}/?token=${TOKEN}`)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
function callAPIbyLatLong(latitudine, longitudine) {
  console.log("Sto facendo la chiamata per latitudine e longitudine");
  fetch(`${baseURL}/${latitudine};${longitudine}/${TOKEN}`)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

callAPIbyCityName("rome");
callAPIbyLatLong(40.8565, 14.2464);
