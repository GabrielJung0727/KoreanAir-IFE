require('dotenv').config();

const ENV = process.env.NODE_ENV || 'development';

const config = {
  development: {
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT || 5432,
    jwtSecret: process.env.JWT_SECRET,
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  },
  production: {
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT || 5432,
    jwtSecret: process.env.JWT_SECRET,
    apiBaseUrl: process.env.API_BASE_URL,
  },
};

module.exports = config[ENV];
