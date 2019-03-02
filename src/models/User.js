const Sequelize = require('sequelize');

module.exports = con => con.define('user', {
  id: { type: Sequelize.BIGINT, primaryKey: true },
  username: Sequelize.STRING(63),
  fullName: Sequelize.STRING(63),
  profileImage: Sequelize.STRING(64),
  biography: Sequelize.STRING(255), // This can stay as STRING
  profileContext: Sequelize.STRING(127),
  externalUrl: Sequelize.STRING(255),
  followerCount: Sequelize.INTEGER,
  mutualFollowersCount: Sequelize.INTEGER,
  followingCount: Sequelize.INTEGER,
  followingTagCount: Sequelize.INTEGER,
  mediaCount: Sequelize.INTEGER,
  geoMediaCount: Sequelize.INTEGER,
  usertagsCount: Sequelize.INTEGER,
  hasHighlightReels: Sequelize.BOOLEAN,
  isBestie: Sequelize.BOOLEAN,
  isFavorite: Sequelize.BOOLEAN,
  isInterestAccount: Sequelize.BOOLEAN,
  isPotentialBusiness: Sequelize.BOOLEAN,
  isPrivate: Sequelize.BOOLEAN,
  isVerified: Sequelize.BOOLEAN,
  completeJson: Sequelize.JSON,
});
