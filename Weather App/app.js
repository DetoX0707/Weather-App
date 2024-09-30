const getWeather = async (city) => {
  const weather = {};
  const params = new URLSearchParams({
    key: '67a22fb9b6224fd195f170223232712',
    q: city,
  });

  fetch(`https://api.weatherapi.com/v1/current.json?${params.toString()}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        weather.code = data.error.code || 'UNKNOWN';
        weather.message = data.error.message || 'An unknown error occurred';
        // console.log(weather);
        return;
      }
      weather.cityName = data.location.name;
      weather.country = data.location.country;
      weather.date = data.location.localtime;
      weather.temperature = data.current.temp_c;
      weather.iconLink = data.current.condition.icon;
      weather.weatherDescription = data.current.condition.text;
      weather.pressure = data.current.pressure_in;
      weather.precipitation = data.current.precip_mm;
      weather.humidity = data.current.humidity;
      weather.windSpeed = data.current.gust_kph;
      weather.isDay = data.current.is_day;
      // console.log(weather);
    })
    .catch((error) => {
      console.error(error);
      weather.code = error.code || 'UNKNOWN';
      weather.message = error.message || 'An unknown error occurred';
      displayWeather(weather);
      // console.log(weather);
    })
    .finally(() => {
      displayWeather(weather);
    });
};
