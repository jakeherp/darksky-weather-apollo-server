const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const WeatherAPI = require("./datasources/weather");

const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    weatherAPI: new WeatherAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
