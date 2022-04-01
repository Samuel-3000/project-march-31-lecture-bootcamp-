const Sequelize = require('sequelize');
const config = require('./../config');

const Student = config.define('Student', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    department_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {timestamps: false});

module.exports = Student;