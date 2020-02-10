import {getDistanceFromLatLonInKm} from './distance.js'
  
const gareDuNord = {
  lat: 48.8809516,
  lon: 2.353125
}

const telecomParis = {
  lat: 48.7130315,
  lon: 2.1984448
}

document.querySelector('#gare-du-nord').innerText = `latitude = ${gareDuNord.lat} / longitude = ${gareDuNord.lon} `

document.querySelector('#telecom-paris').innerText = `latitude = ${telecomParis.lat}  / longitude = ${telecomParis.lon}`

document.querySelector('output').value = `${getDistanceFromLatLonInKm(gareDuNord.lat, gareDuNord.lon,telecomParis.lat, telecomParis.lon)} km`
