//client ID and the client Secret
const CLIENT_ID = "KNFI1FV1IHR5VB0AS00HIYMECUTITHFHY1RKBNZDWUWCY0BY";
const CLIENT_SECRET = "DYS3XTXRYTA3FAGNLFY03RAIETOVWMSSN5CV4CFRRRX44S1B";
const baseURL = "https://api.foursquare.com/v2/venues/VENUE_ID"

// state variable
// This is the amount of suggestions within a 5km radus
let suggestions = 0;
// Search origin before keying in inputs
let searchOrigin = [1.370462, 103.810777]; 

// Map display
let singapore = [1.370462, 103.810777]; // Singapore latlng
let map = L.map("map").setView(singapore, 13);



L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 25,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
}).addTo(map)

$(function() {
    // Global input
    let input1 = $("#postal1")
    let input2 = $("#postal2")
    let postalLayer = L.layerGroup();
    map.addLayer(postalLayer);

    // When user key in two params
    $("#generate").click(function() {
            let searchResult1 = {
                params: {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                v: "20200716",
                ll: location.join(),
                query: input1.val(),
                offset: 0,
                limit: 1
                }
            }
    
    axios.get(baseURL, searchResult1).then(function(response){
          let marker = L.marker([location.lat, location.lng]);
          marker.addTo(postalLayer);
      })
    });
})