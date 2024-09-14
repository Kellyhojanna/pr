const {Sequelize}  = require('sequelize');

const conexionBD = new Sequelize('ventas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = conexionBD;