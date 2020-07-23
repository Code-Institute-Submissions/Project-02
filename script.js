//client ID and the client Secret
const CLIENT_ID = "KNFI1FV1IHR5VB0AS00HIYMECUTITHFHY1RKBNZDWUWCY0BY";
const CLIENT_SECRET = "DYS3XTXRYTA3FAGNLFY03RAIETOVWMSSN5CV4CFRRRX44S1B";
const searchURL = "https://api.foursquare.com/v2/venues/search";
const suggestionURL = "https://api.foursquare.com/v2/venues/explore";

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
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

// Global variables for marker 1 and marker 2
let marker1 = [1.348104,103.867577];
let marker2 = [1.335061,103.881663];
let markerLayer = L.layerGroup();
let suggestionLayer = L.layerGroup();
map.addLayer(markerLayer);
map.addLayer(suggestionLayer);

$('#generate').click(function(){
    // Control input 
    let searchTerms1 = $("#postal1").val();
    let searchTerms2 = $("#postal2").val();


    // Axios function below
    // Search Marker 1
    axios.get(searchURL,{
    params : {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        v:"20200721",
        ll: singapore.join(","), 
        query: searchTerms1, 
        offset: 0,
        limit: 1,
        }
        }).then(function(response){
            let results = response.data.response.venues[0].location;
            let marker1 = [results.lat , results.lng];
            let displayMarker1 = L.marker(marker1);
            displayMarker1.addTo(markerLayer);
            // axios second marker since it is event driven
            axios.get(searchURL, {
            params: {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                v: "20200721",
                ll: singapore.join(","),
                query: searchTerms2,
                offset: 0,
                limit: 1,
            }
            }).then(function (response) {
                let results = response.data.response.venues[0].location;
                let marker2 = [results.lat , results.lng];
                let displayMarker2 = L.marker(marker2)
                displayMarker2.addTo(markerLayer);

                //creation of polyline 
                let latlngs = [
                marker1,
                marker2, 
                ];
                
                let center = latlngs.getCenter();
                let polyline = L.polyline(latlngs, {color:'blue'}).addTo(map);
                // Center marker created
                let centerMarker = L.marker(center);
                centerMarker.addTo(markerLayer);
                // Zoom in onto query
                map.fitBounds(polyline.getBounds());

                axios.get(suggestionURL, {
                    params: {
                        client_id: CLIENT_ID,
                        client_secret: CLIENT_SECRET,
                        v: "20200721",
                        ll: center.join(","),
                        radius: 5000,
                        section: 'food',
                        limit: 5,
                    }
                }).then(function (response) {
                    let searchResults = response.data.response.groups[0].items;
                        for (let r of searchResults) {
                            let location = r.venue.location;
                            let suggestionMarker = [location.lat , location.lng];
                            let displayMarker3 = L.marker(suggestionMarker);
                            displayMarker3.addTo(suggestionLayer);
                    }
                });
            });
    });
});