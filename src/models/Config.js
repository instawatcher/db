const Sequelize = require('sequelize');

module.exports = con => con.define('config', {
  key: { type: Sequelize.STRING(63), primaryKey: true },
  value: Sequelize.JSON,
});
