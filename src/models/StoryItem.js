const Sequelize = require('sequelize');

module.exports = con => con.define('storyItem', {
  id: { type: Sequelize.STRING(127), primaryKey: true },
  mediaType: Sequelize.INTEGER,
  takenAt: Sequelize.DATE,
  expiringAt: Sequelize.DATE,
  originalHeight: Sequelize.INTEGER,
  originalWidth: Sequelize.INTEGER,
  completeJson: Sequelize.JSON,
});
