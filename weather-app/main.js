$(document).ready(function() {


	function renderWeather(weather) {
				$("#location").html(weather.name);
				$("#degrees").html(Math.round(weather.main.temp - 273.15) + "&#186 C");
				$("#clouds").html(weather.weather[0].description);

				if (weather.weather[0].description == "clear sky") {
					$("#icon").html('<img src="images/sun.jpg" alt="sun">');
				}

				if (weather.weather[0].description == "broken clouds" || weather.weather[0].description == "scattered clouds" || weather.weather[0].description == "few clouds") {
					$("#icon").html('<img src="images/sunandcloud.jpg" alt="sunandcloud">');
				}
	}

	function getWeather() {
			$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=Sofia&APPID=a0bd0eed54d808c6c30014c807753f9e", success:function(result){
				renderWeather(result);
			}
		})
	}

	getWeather();

	geo = navigator.geolocation;
	geo.getCurrentPosition(function(position) {
	  console.log(position.coords.latitude, position.coords.longitude);
	});
	console.log(geo);

	$("#refresh").click(function(){
		getWeather();
	})
});

