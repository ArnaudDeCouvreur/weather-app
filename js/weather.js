// DOM elements
const tempEl = document.querySelector(".js-temp");
const iconEl = document.querySelector(".js-weather-icon");
const descEl = document.querySelector(".js-desc");
const sliderEl = document.querySelector(".js-slider");
const locationEl = document.querySelector(".js-location");

// Longitude and latitude (default is Brussels)
let latitudeInt = 50.850346;
let longitudeInt = 4.351721;

const keyStr = "871ef41bac6733730e6e459b59b13b48";

async function fetchWeatherData() {
    
    // Fetch weather data from OpenWeather API
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitudeInt}&lon=${longitudeInt}&appid=${keyStr}&lang=nl&units=metric`;
    const res = await fetch(`${url}`);
    const json = await res.json();
  
    // Display weather data
    tempEl.textContent = `${Math.round(json.main.temp)}°C`;
    descEl.textContent = json.weather[0].description;
    locationEl.textContent = json.name;

    // Change icon and slider images based on weather description
    let icon;
    let folder;

    switch(json.weather[0].main) {
        case "Clear":
            icon = folder = "Clear"
            break;
        case "Clouds":
            icon = folder = "Clouds"
            break;
        case "Snow":
            icon = folder = "Snow"
            break;
        case "Rain":
            icon = folder = "Rain"
            break;
        case "Drizzle":
            icon = folder = "Drizzle"
            break;
        case "Thunderstorm":
            icon = folder = "Thunderstorm"
            break;
        case "Mist":
        case "Smoke":
        case "Haze":
        case "Dust":
        case "Fog":
        case "Sand":
        case "Ash":
        case "Squall":
        case "Tornado":
            icon = folder = "Mist"
            break;
    }

    // Replace HTML element
    iconEl.src = `assets/icons/${icon}.svg`
    
    sliderEl.innerHTML =
    `<div class="swiper-slide">
        <img class="c-slideshow__img" src="assets/img/${folder}/img1.jpg" alt="${folder}">
    </div>
    <div class="swiper-slide">
        <img class="c-slideshow__img" src="assets/img/${folder}/img2.jpg" alt="${folder}">
    </div>
    <div class="swiper-slide">
        <img class="c-slideshow__img" src="assets/img/${folder}/img3.jpg" alt="${folder}">
    </div>`;

}

// User accepted location tracking
const success = (position) => {
    latitudeInt = position.coords.latitude;
    longitudeInt = position.coords.longitude;
    fetchWeatherData();
}

// User denied location tracking
const error = (error) => {
    latitudeInt = 50.850346;
    longitudeInt = 4.351721;
    fetchWeatherData();
}

// Request user location
navigator.geolocation.getCurrentPosition(success, error);

// Fetch weather data
fetchWeatherData();
