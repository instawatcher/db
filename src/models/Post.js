const Sequelize = require('sequelize');

module.exports = con => con.define('post', {
  id: { type: Sequelize.STRING(127), primaryKey: true },
  mediaType: Sequelize.INTEGER,
  caption: Sequelize.TEXT,
  likeCount: Sequelize.INTEGER,
  commentCount: Sequelize.INTEGER,
  originalHeight: Sequelize.INTEGER,
  originalWidth: Sequelize.INTEGER,
  hasLiked: Sequelize.BOOLEAN,
  isCaptionEdited: Sequelize.BOOLEAN,
  isPhotoOfYou: Sequelize.BOOLEAN,
  deviceTimestamp: Sequelize.STRING(63),
  takenAt: Sequelize.DATE,
  completeJson: Sequelize.JSON,
});
