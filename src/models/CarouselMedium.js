const Sequelize = require('sequelize');

module.exports = con => con.define('carouselMedium', {
  id: { type: Sequelize.STRING(127), primaryKey: true },
  mediaType: Sequelize.INTEGER,
  originalHeight: Sequelize.INTEGER,
  originalWidth: Sequelize.INTEGER,
  completeJson: Sequelize.JSON,
});
