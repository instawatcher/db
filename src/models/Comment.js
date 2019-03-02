const Sequelize = require('sequelize');

module.exports = con => con.define('comment', {
  id: { type: Sequelize.STRING(127), primaryKey: true },
  type: Sequelize.INTEGER,
  text: Sequelize.TEXT,
  childCommentCount: Sequelize.INTEGER,
  likeCount: Sequelize.INTEGER,
  writtenAt: Sequelize.DATE,
});
