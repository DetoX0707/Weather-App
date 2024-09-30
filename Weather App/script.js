const header = document.getElementsByTagName('header')[0];
const tempArea = document.getElementById('temp');
const descArea = document.getElementById('desc');
const cityArea = document.getElementById('city');
const countryArea = document.getElementById('country');
const dateArea = document.getElementById('date');
const pressArea = document.getElementById('press');
const precipArea = document.getElementById('precip');
const humidArea = document.getElementById('humid');
const windArea = document.getElementById('wind');
const errCode = document.getElementById('errCode');
const weatherIcon = document.getElementById('weatherIcon');
const errMessage = document.getElementById('errMessage');
const display = document.getElementsByClassName('weather-app')[0];
const errorDis = document.getElementsByClassName('error')[0];

const displayWeather = (weather) => {
  if (weather.code > 0 || weather.code === 'UNKNOWN') {
    header.classList.remove('home');
    document.body.style.backgroundImage = 'url(./images/error.png)';
    display.style.display = 'none';
    errorDis.style.display = 'flex';
    errCode.textContent = weather.code;
    errMessage.textContent = weather.message;
  } else {
    setData(weather);
  }
};

const setData = (data) => {
  header.classList.remove('home');
  display.style.display = 'flex';
  errorDis.style.display = 'none';
  tempArea.textContent = data.temperature;
  descArea.textContent = data.weatherDescription;
  cityArea.textContent = data.cityName;
  weatherIcon.setAttribute('src', data.iconLink);
  countryArea.textContent = data.country;
  dateArea.textContent = data.date;
  pressArea.textContent = data.pressure;
  precipArea.textContent = data.precipitation;
  humidArea.textContent = data.humidity;
  windArea.textContent = data.windSpeed;
  if (data.isDay === 0) {
    document.body.style.backgroundImage = 'url(./images/night.jpg)';
  } else {
    document.body.style.backgroundImage = 'url(./images/day.png)';
  }
};

const home = () => {
  header.classList.add('home');
  display.style.display = 'none';
  errorDis.style.display = 'none';
  document.body.style.backgroundImage = 'url(./images/home.png)';
};

const btnEvent = (e) => {
  e.preventDefault();
  const city = e.target.elements.location.value;
  e.target.elements.location.value = '';
  // console.log(city);
  getWeather(city);
};
