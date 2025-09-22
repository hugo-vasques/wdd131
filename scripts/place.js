const apiKey = "534bbc5a9632a7a8058dee220e05b0fa";
const city = "Cajamarca,PE";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
}

async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const temp = data.main.temp;
        const windSpeed = data.wind.speed * 3.6;

        document.getElementById("temp").textContent = `${temp} °C`;
        document.getElementById("desc").textContent = data.weather[0].description;
        document.getElementById("wind").textContent = `${windSpeed.toFixed(2)} km/h`;

        if (temp <= 10 && windSpeed > 4.8) {
            document.getElementById("windChill").textContent = `${calculateWindChill(temp, windSpeed)} °C`;
        } else {
            document.getElementById("windChill").textContent = "N/A";
        }

    } catch (error) {
        console.error("Error while getting the weather data:", error);
    }
}

getWeather();

// Footer //

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;