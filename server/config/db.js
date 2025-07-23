const { Sequelize } = require('sequelize');

// Using SQLite instead of MySQL
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', 
});

module.exports = sequelize;
