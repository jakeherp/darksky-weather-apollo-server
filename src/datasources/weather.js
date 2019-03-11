const { RESTDataSource } = require("apollo-datasource-rest");

class WeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://api.darksky.net/forecast/${
      process.env.DARKSKY_API_KEY
    }/`; //37.8267,-122.4233
  }

  async getAllWeather() {
    const response = await this.get("weather");
    return Array.isArray(response)
      ? response.map(weather => this.weatherReducer(weather))
      : [];
  }

  weatherReducer(weather) {
    return {
      id: weather.currently.time || 0,
      currently: {
        time: `${weather.currently.time}`,
        summary: weather.currently.summary,
        icon: weather.currently.icon,
        temperature: weather.currently.temperature,
        apparentTemperature: weather.currently.apparentTemperature,
        humidity: weather.currently.humidity,
        pressure: weather.currently.pressure,
        windSpeed: weather.currently.windSpeed,
        uvIndex: weather.currently.uvIndex,
        visibility: weather.currently.visibility
      },
      hourly: {
        time: weather.hourly.data[0].time,
        summary: weather.hourly.data[0].summary,
        icon: weather.hourly.data[0].icon,
        temperature: weather.hourly.data[0].temperature
      },
      daily: {
        time: weather.daily.data[0].time,
        summary: weather.daily.data[0].summary,
        icon: weather.daily.data[0].icon,
        temperature: daily.hourly.data[0].temperature
      }
    };
  }

  async getWeatherByLocation({ latitude, longitude }) {
    const response = await this.get("weather", {
      latitude: weather.latitude,
      longitude: weather.longitude
    });
    return this.weatherReducer(response[0]);
  }
}

module.exports = WeatherAPI;
