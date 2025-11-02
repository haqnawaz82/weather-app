const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");

const apiKey = "052933683baaa63c3b6e87515a9ada5d";

async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    cityName.textContent = data.name;
    temperature.textContent = Math.round(data.main.temp) + "°C";
    condition.textContent = data.weather[0].main + " - " + data.weather[0].description;
  } 
  catch (error) {
    cityName.textContent = "City Not Found";
    temperature.textContent = "";
    condition.textContent = "";
  }
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city === "") {
    alert("Please enter a city name!");
    return;
  }
  getWeather(city);
});
