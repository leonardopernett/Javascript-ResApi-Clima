const { Weather } = require('./weather.js')
const {Ui} = require('./ui.js')
const  {LocalStorage} = require('./localstorage.js')

const store = new LocalStorage();
const {city, country} = store.getLocalstorage()
const weather     = new Weather(city, country)
const ui   = new Ui();

require('../index.css');

async function fetchWeather(){
  const data = await weather.getWeather();
  ui.render(data)
}

document.getElementById('weather-btn').addEventListener('click',(e)=>{
    e.preventDefault();

    const city    =  document.getElementById('city').value;
    const country = document.getElementById('country').value;
    weather.changeLocation(city, country)
   
    fetchWeather()
    document.getElementById('weather-form').reset();
})


document.addEventListener('DOMContentLoaded', fetchWeather);