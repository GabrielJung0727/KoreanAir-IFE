const axios = require('axios');

const getDestinationWeather = async (destination) => {
  try {
    const apiKey = process.env.WEATHER_API_KEY; // OpenWeatherMap API 키
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    const { weather, main } = response.data;

    return {
      description: weather[0].description,
      temperature: main.temp,
      humidity: main.humidity,
    };
  } catch (error) {
    console.error('Error fetching destination weather:', error.message);
    throw error;
  }
};

const getDestinationExchangeRate = async (currency) => {
  try {
    const apiKey = process.env.EXCHANGE_RATE_API_KEY; // Exchange Rates API 키
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`;

    const response = await axios.get(url);
    const rates = response.data.conversion_rates;

    return rates;
  } catch (error) {
    console.error('Error fetching destination exchange rate:', error.message);
    throw error;
  }
};

const getDestinationTransportInfo = async (destination) => {
  // Mocked data or integrate with real-time transport API if available
  try {
    const transportOptions = [
      { type: 'Bus', description: `Affordable bus routes in ${destination}` },
      { type: 'Taxi', description: `Convenient taxi services in ${destination}` },
      { type: 'Train', description: `Fast train connections in ${destination}` },
    ];

    return transportOptions;
  } catch (error) {
    console.error('Error fetching transport information:', error.message);
    throw error;
  }
};

const getDestinationInfo = async (destination, currency) => {
  try {
    const weather = await getDestinationWeather(destination);
    const exchangeRates = await getDestinationExchangeRate(currency);
    const transport = await getDestinationTransportInfo(destination);

    return {
      weather,
      exchangeRates,
      transport,
    };
  } catch (error) {
    console.error('Error fetching destination information:', error.message);
    throw error;
  }
};

module.exports = {
  getDestinationWeather,
  getDestinationExchangeRate,
  getDestinationTransportInfo,
  getDestinationInfo,
};
