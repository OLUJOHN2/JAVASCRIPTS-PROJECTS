const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

searchBtn.addEventListener("click", function () {
  const city = cityInput.value.trim();

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  getWeather(city);
});

function getWeather(city) {
  const apiKey = "YOUR_API_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.cod === "404") {
        alert("City not found");
        return;
      }

      cityName.textContent = data.name;
      temperature.textContent = data.main.temp + " °C";
      description.textContent = data.weather[0].description;
    })
    .catch(function () {
      alert("Something went wrong");
    });
}
