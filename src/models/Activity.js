const Sequelize = require('sequelize');

module.exports = con => con.define('activity', {
  id: { type: Sequelize.STRING(127), primaryKey: true },
  type: Sequelize.INTEGER,
  text: Sequelize.TEXT,
  profileId: Sequelize.BIGINT,
  profileImage: Sequelize.STRING(64),
  secondProfileId: Sequelize.BIGINT,
  secondProfileImage: Sequelize.STRING(64),
  timestamp: Sequelize.DATE,
  completeJson: Sequelize.JSON,
});
