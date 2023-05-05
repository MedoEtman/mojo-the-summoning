const { db, Sequelize } = require("../db/config");

const Card = db.define("Card", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  stamina: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Card;
