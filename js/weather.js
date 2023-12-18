const COORDS_LS = 'coords'
const API_KEY = '7e63b6442e8d4bd1e7e052994f9f93cc'
const weatherContainer = document.querySelector('.js-weather')

function getWeather(lat, long) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
    .then((responce) => responce.json())
    .then((json) => {
      const temperature = json.main.temp;
      const place = json.name
      return weatherContainer.innerText = `${temperature} @ ${place}`
    })
    .catch((error) => console.log(error.message))
}


function saveCoords(positionObj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(positionObj))
}


function geoSuccesHandler(position) {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  console.log(latitude, longitude);
  const positionObj = {
    latitude,
    longitude
  }
  saveCoords(positionObj)
  getWeather(latitude, longitude)
}

function geoErrorHandler() {
  console.log('Not possition Geo');
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(geoSuccesHandler, geoErrorHandler)
}

function getCoords() {
  const coords = localStorage.getItem(COORDS_LS)
  if ( coords === null) {
    askForCoords()
  } else {
    const loadedCoords = JSON.parse(coords)
    getWeather(loadedCoords.latitude, loadedCoords.longitude)
  }
}


function init() {
  getCoords()
}

init()