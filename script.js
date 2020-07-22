//client ID and the client Secret
const CLIENT_ID = "KNFI1FV1IHR5VB0AS00HIYMECUTITHFHY1RKBNZDWUWCY0BY";
const CLIENT_SECRET = "DYS3XTXRYTA3FAGNLFY03RAIETOVWMSSN5CV4CFRRRX44S1B";
const searchURL = "https://api.foursquare.com/v2/venues/search";

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
        console.log(response.data);
    })

    axios.get(searchURL, {
        params: {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            v: "20200721",
            ll: singapore.join(","),
            query: searchTerms1,
            offset: 0,
            limit: 1,
        }
    }).then(function (response) {
        console.log(response.data);
    })
        // // GetPolyline using leaflet
        //     let latlngs = [
        //         [1.367668,103.892325],
        //         [1.337807,103.892321],
        //     ] 
        //     let polyline = L.polyline(latlngs,{color:'red'}).addTo(map);
        //     map.fitBounds(polyline.getBounds());
})