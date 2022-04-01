//Setting up our database connection
const Sequelize = require('sequelize');
const config = new Sequelize("robo_school", "root", "", {dialect: 'mysql'});

module.exports = config;