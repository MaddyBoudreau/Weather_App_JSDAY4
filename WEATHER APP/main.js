const api_key = "8dff5120b988963211274a0c6aaaf522";

function getWeather() {
  let cityName = document.getElementById("city").value;
  document.getElementById("gallery");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=imperial`
  )
    .then((response) => response.json())

    .then((data) => {
      document.querySelector(".highTitle").innerHTML = "High ⬆️  ";
      document.querySelector(".high").innerHTML =
        Math.floor(data.main.temp_max) + "°F";

      document.querySelector(".cityTitle").innerHTML = data.name;

      document.querySelector(".feelsLikeTitle").innerHTML = "Feels Like 🔁  ";
      document.querySelector(".feelsLike").innerHTML =
        Math.floor(data.main.feels_like) + "°F";

      document.querySelector(".lowTitle").innerHTML = "Low ⬇️ ";
      document.querySelector(".low").innerHTML =
        Math.floor(data.main.temp_min) + "°F";

      document.querySelector(".currentTempTitle").innerHTML = "Current❗";
      document.querySelector(".currentTemp").innerHTML =
        Math.floor(data.main.temp) + "°F";

      document.querySelector(".descriptionTitle").innerHTML = "Day description 🌞🌦  ";
      document.querySelector(".description").innerHTML =
        data.weather[0].description;

      document.querySelector(".humidityTitle").innerHTML = "Humidity🔥  ";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    });
}