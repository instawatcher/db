const Sequelize = require('sequelize');

module.exports = con => con.define('highlight', {
  id: { type: Sequelize.STRING(127), primaryKey: true },
  title: Sequelize.STRING(63),
  mediaCount: Sequelize.INTEGER,
  latestMedia: Sequelize.DATE,
  completeJson: Sequelize.JSON,
});
