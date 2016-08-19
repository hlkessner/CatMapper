$( document ).ready(function() {
  //bootstrap commands for tabs
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});
});

//map container
var mymap = L.map('mapid').setView([47.606662, -122.326987], 12);
L.tileLayer('https://api.mapbox.com/styles/v1/hlkessner/cirr7avti0009gbm2595xkzwi/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGxrZXNzbmVyIiwiYSI6ImNpcXU3ZWh5MTAwYWVmcm5odmZjaGNzY3UifQ.EIAGUVi9S2Ew6ajp2sBT8Q', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
   id: 'your.mapbox.project.id',
    accessToken: 'pk.eyJ1IjoiaGxrZXNzbmVyIiwiYSI6ImNpcXU3ZWh5MTAwYWVmcm5odmZjaGNzY3UifQ.EIAGUVi9S2Ew6ajp2sBT8Q'
}).addTo(mymap);
//geolocation for mobile
// mymap.locate({setView: true, maxZoom: 16});
// function onLocationFound(e) {
//     var radius = e.accuracy / 2;

//     L.marker(e.latlng).addTo(map)
//         .bindPopup("You are within " + radius + " meters from this point").openPopup();

//     L.circle(e.latlng, radius).addTo(map);
// }

// mymap.on('locationfound', onLocationFound);
// function onLocationError(e) {
//     alert(e.message);
// }

// mymap.on('locationerror', onLocationError);




//shelters
//Kitty Harbor

var harborMarker = L.marker ([47.572180, -122.370493]).addTo(mymap);
harborMarker.bindPopup("<b>Kitty Harbor</b><br>Location: 3422 Harbor Ave. SW<br>Seattle, WA 98126<br>Hours: Saturday & Sunday 12:00-4:00<br>http://www.kittyharborseattle.org/").openPopup();
//Seattle Animal Shelter
var shelterMarker = L.marker ([47.638236, -122.376523]).addTo(mymap);
shelterMarker.bindPopup("<b>Seattle Animal Shelter</b>").openPopup();
//PAWS Cat City
var pawsMarker = L.marker ([47.666603, -122.317106]).addTo(mymap);
pawsMarker.bindPopup("<b>P.A.W.S Cat City</b>").openPopup();
  //Emerald City Pet Rescue
var emeraldMarker = L.marker ([47.575794, -122.333167]).addTo(mymap);
emeraldMarker.bindPopup("<b>Emerald City Pet Rescue</b>").openPopup();
//Seattle Area Feline Rescue
var felineMarker = L.marker ([47.735476, -122.345813]).addTo(mymap);
felineMarker.bindPopup("<b>Seattle Area Feline Rescue</b>").openPopup();
//Meow Cat Rescue
var meowMarker = L.marker ([47.667306, -122.198313]).addTo(mymap);
meowMarker.bindPopup("<b>Meow Cat Rescue</b>").openPopup();
//Seattle Humaine
var humaineMarker = L.marker ([47.580950, -122.163706]).addTo(mymap);
humaineMarker.bindPopup("<b>Seattle Humaine</b>").openPopup();

