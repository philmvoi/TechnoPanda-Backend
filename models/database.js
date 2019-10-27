const Sequilize = require('sequelize');
module.exports = new Sequilize('technopanda', 'root', 'Quietzone2018!', {
  host: 'localhost',
  dialect: 'mysql',
  insecureAuth: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});