//client ID and the client Secret
const CLIENT_ID = "KNFI1FV1IHR5VB0AS00HIYMECUTITHFHY1RKBNZDWUWCY0BY";
const CLIENT_SECRET = "DYS3XTXRYTA3FAGNLFY03RAIETOVWMSSN5CV4CFRRRX44S1B";
const searchURL = "https://api.foursquare.com/v2/venues/search";
const suggestionURL = "https://api.foursquare.com/v2/venues/explore";



// SPA for about us page! 
$("#return").click(function(){
alert("hello world");
    // $("#page-1").removeClass('hidden');
    // $("#page-1").addClass('show');

    // $("#page-2").removeClass('show');
    // $("#page-2").addClass('hidden');

    // $("#back").replaceWith(
    // '<button class="btn ml-3 btn-light" type="button" id="about">About</button>'
    //     );
})

$("#about").click(function(){

    $("#page-1").removeClass('show');
    $("#page-1").addClass('hidden');

    $("#page-2").removeClass('hidden');
    $("#page-2").addClass('show')

    $("#about").replaceWith(
    '<button class="btn ml-3 btn-light" type="button" id="return">Back</button>'
        );
})



// Map design below (For functionality of application)
// state variable
// This is the amount of suggestions within a 5km radus
let suggestions = 0;
// Search origin before keying in inputs
let searchOrigin = [1.370462, 103.810777]; 

// Map display
let singapore = [1.370462, 103.810777]; // Singapore latlng
let map = L.map("map").setView(singapore, 13);
let locationName = ("")
let addressName = ("")

// Marker Design 
let homeIcon = L.icon({
    iconUrl: '../images/marker-01.png',

    iconSize: [38, 38], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
});

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

$(function() {
    // Function to display  
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
                let displayMarker1 = L.marker(marker1, {icon: homeIcon});
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
                    let displayMarker2 = L.marker(marker2, {icon: homeIcon})
                    displayMarker2.addTo(markerLayer);

                    //creation of polyline 
                    let latlngs = [
                    marker1,
                    marker2, 
                    ];

                    let polyline = L.polyline(latlngs).addTo(map);
                    map.fitBounds(polyline.getBounds());

                    // Center marker created
                    center = polyline.getCenter();
                    centerArray = [center.lat, center.lng];

                    axios.get(suggestionURL, {
                        params: {
                            client_id: CLIENT_ID,
                            client_secret: CLIENT_SECRET,
                            v: "20200721",
                            ll: centerArray.join(","),
                            radius: 5000,
                            section: 'food',
                            limit: 3,
                        }
                    }).then(function (response) {

                        $(document).ready(function(){
                            let createthings = document.createElement("h1");
                            createthings.innerHTML = "3 Great Ideas For You!"
                            $('.titletop').append(createthings)
                        })
                            

                        let searchResults = response.data.response.groups[0].items;
                        for (let r of searchResults) {
                            // Location on map
                            let location = r.venue.location;
                            let locationName = r.venue.name;
                            let addressName = r.venue.location.address;

                            let suggestionMarker = [location.lat , location.lng];
                            let displayMarker3 = L.marker(suggestionMarker); 
                            displayMarker3.bindPopup(`<h3>${locationName}</h3><p>${addressName}</p>`) 
                            displayMarker3.addTo(suggestionLayer);
                            
                            number = searchResults.indexOf(r);
                            actual = number + 1;

                            // Information of each item & function to create list
                                let sugg = $(`
                                            <div class="card m-2 shadow-sm" style="width: 18rem;" data-aos="flip-right">
                                                <img class="card-img-top" src="images/img-${actual}.jpg" alt="Experimental placeholder images">
                                                <div class="card-body">
                                                    <p class="h3">${locationName}</p>
                                                    <p class="card-text">${addressName}</p>
                                                    <p>★ ★ ★ ★ ★</p>
                                                </div>
                                                <button type="button" class="btn btn-primary">Book Now!</button>
                                            </div>
                                            `)  
                                $('#recon').append(sugg);
                            // Finally, remove the pesky polyline
                        }
                        map.removeLayer(polyline);
                        })
                });
        });
    });

    // Function to clear 
    $("#generate").click(function() {
        suggestionLayer.clearLayers();
        markerLayer.clearLayers();
        $('#recon').empty()
        $('.titletop').empty()
    });




})