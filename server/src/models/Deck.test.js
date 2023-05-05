const { db, Sequelize } = require("../db/config");
const { Deck } = require("./index");

describe("Deck model", () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  afterEach(() => {
    return Deck.destroy({ truncate: true });
  });

  it("should create a new deck", async () => {
    const newDeck = await Deck.create({
      name: "Test Deck",
      xp: 0,
    });
    expect(newDeck.name).toEqual("Test Deck");
    expect(newDeck.xp).toEqual(0);
  });

  it("should not create a deck with missing required fields", async () => {
    await expect(Deck.create({})).rejects.toThrow(Sequelize.ValidationError);
  });

  it("should delete a deck by id", async () => {
    // create a new deck
    const newDeck = await Deck.create({
      name: "Test Deck",
      xp: 0,
    });
    // delete the deck by id
    await Deck.destroy({
      where: {
        id: newDeck.id,
      },
    });
    // try to retrieve the deleted deck by id and expect it to be null
    const deletedDeck = await Deck.findByPk(newDeck.id);
    expect(deletedDeck).toBeNull();
  });
});
