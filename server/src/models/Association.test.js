const { User, Deck, Card, Attack } = require("./index");

describe("User and Deck association", () => {
  it("should create a user with a deck", async () => {
    const user = await User.create({ name: "John Doe"});
    const deck = await Deck.create({ name: "My First Deck" });
    await user.setDeck(deck);
    const associatedDeck = await user.getDeck();
    expect(associatedDeck.name).toBe(deck.name);
    expect(associatedDeck.userId).toBe(user.id);
  });
});

describe('Deck and Card association', () => {
  it('should create a deck with cards', async () => {
  it('should create a deck with cards', async () => {
    const deck = await Deck.create({ name: 'My First Deck' });
    const card1 = await Card.create({ question: 'What is your name?', answer: 'My name is John.' });
    const card2 = await Card.create({ question: 'What is your age?', answer: 'I am 25 years old.' });
    await deck.addCards([card1, card2]);
    const associatedCards = await deck.getCards();
    expect(associatedCards.length).toBe(2);
    expect(associatedCards[0].question).toBe(card1.question);
    expect(associatedCards[0].deckId).toBe(deck.id);
    expect(associatedCards[1].answer).toBe(card2.answer);
    expect(associatedCards[1].deckId).toBe(deck.id);
  });
});
