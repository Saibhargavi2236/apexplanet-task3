const API_KEY = "7c64e0ebad1b424aa8b73458251008"; // Replace with your actual WeatherAPI key

document.querySelectorAll(".weather-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const city = btn.closest(".card").dataset.city;
    const weatherInfo = btn.nextElementSibling;

    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {
        // WeatherAPI returns temp in °C and a condition object
        weatherInfo.textContent = `${data.current.temp_c}°C, ${data.current.condition.text}`;
      })
      .catch(() => {
        weatherInfo.textContent = "Unable to fetch weather.";
      });
  });
});
