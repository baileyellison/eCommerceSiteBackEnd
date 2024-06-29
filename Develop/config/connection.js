require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL, {
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    })
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      user: 'root',
      password: '@Guavapa1207',
      database: 'ecommerce_db',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
