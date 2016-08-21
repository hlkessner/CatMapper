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

 var url = 'http://api.petfinder.com/pet.getRandom?key=12ca8a73b3b4a51797988576ecfd5ebc&shelterid=WA40&output=full&format=json';
    $.ajax({
        type : 'GET',
        data : {},
        url : url+'&callback=?' ,
        dataType: 'json',
        success : function(data) {              
            // stores result
            var result = '';

            var petfinder = data.petfinder;
            var infoHTML = '<ul>';
            infoHTML += '<li>';
            //infoHTML += '<strong>Description</strong><br>';
            infoHTML += petfinder.pet.description.$t;
            infoHTML += '</li>';

            infoHTML += '<li>';
//             infoHTML += '<strong>Breed</strong><br>';
//             $.each(petfinder.pet.breeds.breed, function(i, breed){
//                 infoHTML += '<p>'+ breed['$t'] + '</p>';
//             });
            infoHTML += '</li>';

            infoHTML += '<li>';
            //infoHTML += '<strong>shelterId</strong><br>';
            //infoHTML += petfinder.pet.shelterId['$t'];
            infoHTML += '</li>';
            infoHTML += '<li>';
            //infoHTML += '<strong>Images WITH SIZE</strong><br>';
            $.each(petfinder.pet.media.photos.photo, function(i, image){
                if(image['@size'] == 'x' && image['@id'] === '1'){
                    infoHTML += '<img src="'+image['$t']+'" />';
                }

            });
            infoHTML += '</li>';

            infoHTML += '<li>';
            //infoHTML += '<strong>Images</strong><br>';
            $.each(petfinder.pet.media.photos.photo, function(i, image){
                infoHTML += '<img src="'+image['$t']+'" />';

            });
            infoHTML += '</li>';

            infoHTML += '</ul>';
            // return infoHTML;
            $('#petfinderInfo').html(infoHTML);

            // $('#petfinderInfo').html(petfinder.pet.description['$t']);
            // 
            console.log(petfinder);
        },
        error : function(request,error)
        {
            alert("Request: "+JSON.stringify(request));
        }
    });
            


//shelters
//Kitty Harbor

var harborMarker = L.marker ([47.572180, -122.370493]).addTo(mymap);
harborMarker.bindPopup("<b>Kitty Harbor</b><br>3422 Harbor Ave. SW<br>Seattle, WA 98126<br>Saturday & Sunday 12:00-4:00<br>http://www.kittyharborseattle.org/").openPopup();
//Seattle Animal Shelter
var shelterMarker = L.marker ([47.638236, -122.376523]).addTo(mymap);
shelterMarker.bindPopup("<b>Seattle Animal Shelter</b><br>2061 15th Ave W<br>Seattle, WA 98119<br> Tuesday-Sunday 12:00-6:00<br>http://www.seattle.gov/animalshelter>").openPopup();
//PAWS Cat City
var pawsMarker = L.marker ([47.666603, -122.317106]).addTo(mymap);
pawsMarker.bindPopup("<b>P.A.W.S Cat City</b><br>5200 Roosevelt Way NE, Suite B<br>Seattle, WA 98105<br>Monday-Friday 11:00-6:00<br>Saturday & Sunday 11:00-5:00<br>Closed on Tuesdays<br>https://www.paws.org/cats-and-dogs/shelter/").openPopup();
  //Emerald City Pet Rescue
var emeraldMarker = L.marker ([47.575794, -122.333167]).addTo(mymap);
emeraldMarker.bindPopup("<b>Emerald City Pet Rescue</b><br>2962 First Avenue South, Suite B<br>Seattle, WA. 98134<br>Monday-Friday 10:00am- 7:00pm<br>Saturday 10:00am-6:00pm<br>Sunday 12:00pm-5:00pm<br>http://www.emeraldcitypetrescue.org/<br>").openPopup();
//Seattle Area Feline Rescue
var felineMarker = L.marker ([47.735476, -122.345813]).addTo(mymap);
felineMarker.bindPopup("<b>Seattle Area Feline Rescue</b><br>14717 Aurora Ave. North<br>Shoreline, WA 98133<br>Friday-Tuesday 12:00pm-7:00pm<br>http://www.seattleareafelinerescue.org/").openPopup();
//Meow Cat Rescue
var meowMarker = L.marker ([47.667306, -122.198313]).addTo(mymap);
meowMarker.bindPopup("<b>Meow Cat Rescue</b><br>10600 NE 68th, Suite F<br>Kirkland, WA 98033<br>Tuesday & Wednesday 12:00pm-5:00pm<br>Thursday 3:00pm-7:00pm<br>Saturday 11:00am-5:00pm<br>Sunday 12:00pm-5:00pm<br>http://meowcatrescue.org/<br>").openPopup();
//Seattle Humaine
var humaneMarker = L.marker ([47.580950, -122.163706]).addTo(mymap);
humaneMarker.bindPopup("<b>Seattle Humane</b><br>13212 SE Eastgate Way<br>Bellevue, WA 98005<br>Sunday-Wednesday 11:00am-6:00pm<br>Thursday-Saturday 11:00am-7:00pm<br>http://www.seattlehumane.org/<br>").openPopup();

