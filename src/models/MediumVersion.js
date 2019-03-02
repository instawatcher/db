const Sequelize = require('sequelize');

module.exports = con => con.define('mediumVersion', {
  hash: { type: Sequelize.STRING(64), primaryKey: true },
  url: { type: Sequelize.STRING(511), unique: true, allowNull: false },
  type: { type: Sequelize.STRING(31), allowNull: false },
  size: { type: Sequelize.INTEGER, allowNull: false },
  height: Sequelize.INTEGER,
  width: Sequelize.INTEGER,
}, {
  defaultScope: {
    attributes: ['hash', 'size', 'type', 'width', 'height', 'url'],
  },
});
