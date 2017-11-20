
// / Previous js that was not working
function findLocation() {
var map = document.write('loc');
var msg = 'Sorry, we were unable to get your location';

if (Mordernizr.geolocation) {
    // Return the user's longitude and latitude on page load using HTML5 geolocation API
    navigator.geolocation.getCurrentPosition(success, fail);
{else}
	map.textContent = msg;
}

function success(position) {
	msg = '<h3>Longitude:<br>';
	msg += position.coords.longitude + '</h3>';
	msg += '<h3>Latitude:<br>';
	msg += position.coords.latitude + '</h3>';
	
	map.innerHTML = msg;
	document.write('map')
}

function fail(msg) {
	map.textContent = msg;
	console.log(msg.code);
	
}
}



