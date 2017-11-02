var map = document.getElementById('loc');
var msg = 'Sorry, we were unable to get your location';

if (Mordernizr.geolocation) {
    //Return the user's longitude and latitude on page load using HTML5 geolocation API
    navigator.geolocation.getCurrentPosition(success, fail);
	map.textContent = msg;
}

function success(position) {
	msg = '<h3>Longitude:<br>';
	msg += position.coords.longitude + '</h3>';
	msg += '<h3>Latitude:<br>';
	msg += position.coords.latitude + '</h3>';
	
	map.innerHTML = msg;
}

function fail(msg) {
	map.textContent = msg;
	console.log(msg.code);
	
}
	// var location = document.getElementById("getWeather");

// function getLocation() {
    // if (navigator.geolocation) {
        // navigator.geolocation.getCurrentPosition(showPosition);
    // } else { 
        // location.innerHTML = "Geolocation is not supported by this browser.";
    // }
// }

// function showPosition(position) {
    // location.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;
// }