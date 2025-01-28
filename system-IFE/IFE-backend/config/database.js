const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
require('dotenv').config();

// mysql2 연결 설정
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '0136',
  database: process.env.DB_NAME || 'IFE_backend',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Sequelize 연결 설정
const sequelize = new Sequelize(
  process.env.DB_NAME || 'IFE_backend',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '0136',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Sequelize connected successfully');
  } catch (error) {
    console.error('Sequelize connection error:', error.message);
    process.exit(1);
  }
};

connectDB();

module.exports = sequelize;
