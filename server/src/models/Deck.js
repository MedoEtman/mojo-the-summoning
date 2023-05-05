const { db, Sequelize } = require("../db/config");

const Deck = db.define("Deck", {
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
  xp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Deck;
