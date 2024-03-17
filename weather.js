
const apiKey = "b17a649e8ed7835e395444425714276d";

async function fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    updateData(data);
}

const cityNames = document.querySelector(".city");
const currentDate = document.querySelector(".city-date");
const weatherStatus = document.querySelector(".temp-detail");
const tempDeg = document.querySelector(".temp-data");
const windSpeed = document.querySelector(".wind-speed");
const humidityData = document.querySelector(".humidity-per");
const visibilityData = document.querySelector(".visibility-area");



function updateData(data) {
    cityNames.textContent = data.name;
    const cel = parseInt(( `${Math.round(data.main.temp)}` - 273.15))
    tempDeg.textContent = (cel);
    windSpeed.textContent = `${data.wind.speed} km/h`;
    humidityData.textContent = `${data.main.humidity}%`;
    visibilityData.textContent =`${data.visibility/1000} km`;
    weatherStatus.textContent = data.weather[0].description;

    const curDate = new Date();
    currentDate.textContent = curDate.toDateString();
}

const formTag = document.querySelector(".serach_form ");
const inputTag = document.querySelector('.search_inpute');

formTag.addEventListener("submit", function (e) {
    e.preventDefault();
    const City = inputTag.value;
    if (City !== "") {
        
        fetchWeather(City);
         inputTag.value = "";
    }
});
