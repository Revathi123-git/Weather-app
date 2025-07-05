const api_key = "api key"

async function getWeather(){
    const city = document.getElementById("cityInput").value.trim();

    if(!city){
        alert("Please enter a city name");
        return;
    }

try{
   const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
   )
   const data = await response.json()
   console.log(data)
   showWeather(data)
}catch(error){
   document.getElementById('WeatherResults').innerHTML =  `<p style="color:yellow;">${error.message}</p>`;
}
    }

    function showWeather(data){
        const {
    name,
    main: { temp, humidity },
    weather: [{ description, icon}],
    wind: { speed }
  } = data;

  const html = ` <h2>${name}</h2>
    <p>🌡️ Temperature: ${temp}°C</p>
    <p>🌥️ Weather: ${description}</p>
    <p>💧 Humidity: ${humidity}%</p>
    <p>🌬️ Wind Speed: ${speed} m/s</p>`

    document.getElementById('WeatherResults').innerHTML = html
    }