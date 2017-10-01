if (navigator.geolocation) {
    //Return the user's longitude and latitude on page load using HTML5 geolocation API
    window.onload = function() {
    var currentPosition;
    function getCurrentLocation (position) {
        currentPosition = position;
        latitude = currentPosition.coords.latitude;
        longitude = currentPosition.coords.longitude;
        //AJAX request
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=******************", function (data) {
            var rawJson = JSON.stringify(data);
            var json = JSON.parse(rawJson);
            updateWeather(json); //Update Weather parameters
        });
    }
    navigator.geolocation.getCurrentPosition(getCurrentLocation);
    };

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