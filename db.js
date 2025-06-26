require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,     
  process.env.DB_USER,     
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,  // host, por ejemplo 'localhost'
    port: process.env.DB_PORT,  // puerto, normalmente 5432
    dialect: 'mysql',
    logging: false, // para que no muestre logs de SQL en consola
  }
);

module.exports = sequelize;
