// DOM elements
const tempEl = document.querySelector(".js-temp");
const iconEl = document.querySelector(".js-icon");
const descEl = document.querySelector(".js-desc");
const sliderEl = document.querySelector(".js-slider");

// Longitude and latitude
const latitude = 50.850346;
const longitude = 4.351721;

const Key = "871ef41bac6733730e6e459b59b13b48";

async function fetchWeatherData() {
    
    // Fetch weather data from OpenWeather API
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Key}&lang=nl&units=metric`;
    const res = await fetch(`${url}`);
    const json = await res.json();
  
    // Display weather data
    tempEl.textContent = `${Math.round(json.main.temp)}°C`;
    descEl.textContent = json.weather[0].description;

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

fetchWeatherData();