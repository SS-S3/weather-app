function getWeather() {
    var city = document.getElementById("city").value;
    var api = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=YOUR_API_KEY";
    fetch(api)
       .then(response => response.json())
       .then(data => {
            var temp = data.main.temp - 273.15; // Convert from Kelvin to Celsius
            var description = data.weather[0].description;
            document.getElementById("weather").innerHTML = "<p>Temperature: " + temp.toFixed(1) + "°C</p><p>Description: " + description + "</p>";
        })
       .catch(error => {
            console.log(error);
            document.getElementById("weather").innerHTML = "<p>Error fetching weather data.</p>";
        });
}