const apiKey = 'c9761aa53e8d913fff434895e4443319';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const icon = document.querySelector('.weather-icon');

const weather = document.querySelector('.weather');
const notFound = document.querySelector('.not_found');

async function checkWeather(city) {
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   var data = await response.json();

   if (response.status === 404) {
      weather.style.display = 'none';
      notFound.style.display = 'flex';
   } else {
      weather.style.display = 'block';
      notFound.style.display = 'none';
      console.log(data);
      document.querySelector('.city').innerHTML = data.name;
      document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
      document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
      document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

      if (data.weather[0].main === 'Clear') {
         icon.src = './img/clear.png';
      } else if (data.weather[0].main === 'Clouds') {
         icon.src = './img/clouds.png';
      } else if (data.weather[0].main === 'Drizzle') {
         icon.src = './img/drizzle.png';
      } else if (data.weather[0].main === 'Mist') {
         icon.src = './img/mist.png';
      } else if (data.weather[0].main === 'Rain') {
         icon.src = './img/rain.png';
      } else if (data.weather[0].main === 'Snow') {
         icon.src = './img/snow.png';
      }
   }
}

searchBtn.addEventListener('click', () => {
   checkWeather(searchBox.value);
})