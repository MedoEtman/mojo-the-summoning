const { db, Sequelize } = require("../db/config");

const Attack = db.define("Attack", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mojoCost: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  staminaCost: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Attack;
