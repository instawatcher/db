const fs = require('fs');
const path = require('path');

const Sequelize = require('sequelize');
const log = require('npmlog');

module.exports.setup = async () => {
  const con = process.env.NODE_ENV === 'production'
    ? new Sequelize(process.env.DB_URL, { logging: msg => log.silly('db', msg) })
    : new Sequelize({ dialect: 'sqlite', storage: 'main.sqlite', logging: msg => log.silly('db', msg) });
  // TODO: That storage property is not correct. It's going to create main.sqlite HERE.

  fs.readdirSync(path.join(__dirname, './src/models/')).forEach((model) => {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    module.exports[path.basename(model)] = require(model)(con);
  });

  // --- Relations start here ---

  exports.User.hasMany(exports.StoryItem);
  exports.User.hasMany(exports.Post);
  exports.User.hasMany(exports.Comment);
  exports.User.belongsTo(exports.MediumVersion, {
    as: 'profileImageMedium', foreignKey: 'profileImage', constraints: false,
  });

  exports.Post.belongsTo(exports.User);
  exports.Post.hasMany(exports.CarouselMedium);
  exports.Post.hasMany(exports.MediumVersion);
  exports.Post.hasMany(exports.Comment);

  exports.Comment.belongsTo(exports.Post);
  exports.Comment.belongsTo(exports.User);
  exports.Comment.hasMany(exports.Comment, { as: 'childComments', foreignKey: 'parent_id' });
  exports.Comment.belongsTo(exports.Comment, { as: 'parentComment', foreignKey: 'parent_id' });

  exports.Highlight.belongsTo(exports.User);
  exports.Highlight.hasMany(exports.StoryItem);

  exports.StoryItem.belongsTo(exports.User);
  exports.StoryItem.belongsTo(exports.Highlight);
  exports.StoryItem.hasMany(exports.MediumVersion);

  exports.CarouselMedium.belongsTo(exports.Post);
  exports.CarouselMedium.hasMany(exports.MediumVersion);

  // exports.MediumVersion.belongsTo(exports.Post);
  // exports.MediumVersion.belongsTo(exports.CarouselMedium);
  // exports.MediumVersion.belongsTo(exports.StoryItem);
  // exports.MediumVersion.belongsToMany(exports.Activity, {
  //   through: ActivityMediumVersion, as: 'attachedActivities',
  // });

  exports.Activity.belongsTo(exports.MediumVersion, {
    foreignKey: 'profileImage', as: 'profileImageMedium', constraints: false,
  });
  exports.Activity.belongsTo(exports.MediumVersion, {
    foreignKey: 'secondProfileImage', as: 'secondProfileImageMedium', constraints: false,
  });
  exports.Activity.belongsToMany(exports.MediumVersion, { through: exports.ActivityMediumVersion, as: 'attachedMedia' });

  await con.authenticate();
  await con.sync();

  exports.con = con;
};
