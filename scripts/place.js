const apiKey = "534bbc5a9632a7a8058dee220e05b0fa";
const city = "Cajamarca,PE";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("temp").textContent = `${data.main.temp} °C`;
        document.getElementById("desc").textContent = data.weather[0].description;

        document.getElementById("wind").textContent = `${data.wind.speed} km/h`;

        document.getElementById("windChill").textContent = `${data.main.feels_like} °C`;

    } catch (error) {
        console.error("Error while getting the weather data:", error);
    }
}

getWeather();

// Footer //

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;