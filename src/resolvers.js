module.exports = {
  Query: {
    weather: async (_, __, { dataSources }) =>
      dataSources.weatherAPI.getAllWeather()
  }
};
