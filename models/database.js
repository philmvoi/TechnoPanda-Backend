const Sequilize = require('sequelize');
module.exports = new Sequilize('capstone_schema', 'root', 'qpalzm10', {
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