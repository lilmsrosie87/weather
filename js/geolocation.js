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

// Note that this example might not work locally in Chrome (it works on a web server).
// In other browsers, you may get a prompt that allows you to share location data.
// It may take the browser a while to determine your location (his demonstrates why you should not depend on this information before loading the entire page).
//below came from book

var elMap = document.getElementById('loc');                 // HTML element
var msg = 'Sorry, we were unable to get your location.';    // No location msg

if (Modernizr.geolocation) {                                // Is geo supported
  navigator.geolocation.getCurrentPosition(success, fail);  // Ask for location
  elMap.textContent = 'Checking location...';               // Say checking...
} else {                                                    // Not supported
  elMap.textContent = msg;                                  // Add manual entry
}

function success(position) {                                // Got location
  msg = '<h3>Longitude:<br>';                               // Create message
  msg += position.coords.longitude + '</h3>';               // Add longitude
  msg += '<h3>Latitude:<br>';                               // Create message
  msg += position.coords.latitude + '</h3>';                // Add latitude
  elMap.innerHTML = msg;                                    // Show location
}

function fail(msg) {                                        // Not got location
  elMap.textContent = msg;                                  // Show text input
  console.log(msg.code);                                    // Log the error
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