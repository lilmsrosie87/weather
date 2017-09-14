$(document).ready(function(){
	$('#submitWeather').click(function(){
		
		var api = "http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=1cd6a8f45fd1f15a776c9e14febf90ce";
		
		$.getJSON(api. function(data){
			alert(data.coord.lat);
		
		
		// show the local weather project

	});
	
});