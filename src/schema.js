const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    weather: [Weather]!
  }

  type Weather {
    id: ID!
    time: String
    summary: String
    icon: String
    temperature: Float!
    apparentTemperature: Float
    humidity: Float
    pressure: Float
    windSpeed: Float
    uvIndex: Float
    visibility: Int
    daily: [Daily]
    hourly: [Hourly]
  }

  type Daily {
    time: String
    summary: String
    icon: String
    temperature: Float!
  }

  type Hourly {
    time: String
    summary: String
    icon: String
    temperature: Float!
  }
`;

module.exports = typeDefs;
