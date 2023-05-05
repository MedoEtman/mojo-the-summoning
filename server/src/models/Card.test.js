const { db, Sequelize } = require("../db/config");
const { Card } = require('./index');

describe('Card model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  it('should create a new card', async () => {
    const newCard = await Card.create({
      name: 'Test Card',
      stamina: 100,
      imgUrl: 'http://example.com/image.png',
    });
    expect(newCard.name).toEqual('Test Card');
    expect(newCard.stamina).toEqual(100);
    expect(newCard.imgUrl).toEqual('http://example.com/image.png');
  });

  it('should not create a card with missing required fields', async () => {
    await expect(Card.create({})).rejects.toThrow(Sequelize.ValidationError);
  });
});
