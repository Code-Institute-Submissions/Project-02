//client ID and the client Secret
const CLIENT_ID = "KNFI1FV1IHR5VB0AS00HIYMECUTITHFHY1RKBNZDWUWCY0BY";
const CLIENT_SECRET = "DYS3XTXRYTA3FAGNLFY03RAIETOVWMSSN5CV4CFRRRX44S1B";

// state variable
let foodLoaded = 0;
let searchOrigin = [1.370462, 103.810777]; 

// Map display
let singapore = [1.370462, 103.810777]; // Singapore latlng
let map = L.map("map").setView(singapore, 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 12,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map)

$(function(){
    let firstPostalCode = $(#postal1);
    let secondPostalCode = $(#postal2);
})

// let singaporeMarker = L.marker([1.29, 103.85])
// singaporeMarker.addTo(map);
