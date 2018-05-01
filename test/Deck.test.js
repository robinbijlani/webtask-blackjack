const Deck = require("../src/Deck");

describe("Deck", () => {
  describe(".deal()", () => {
    it("should remove the specified amount of cards from the Deck", () => {
      let deck = new Deck();
      deck.shuffle();
      let first = deck.cards[0];
      deck.deal(1);

      if (deck.cards.length !== 51) {
        throw new Error("Deck card length should be 51 after dealing 1");
      }

      deck.cards.map(card => {
        if (card.rank === first.rank && card.suit === first.suit) {
          throw new Error("First card still found in deck after dealing");
        }
      });
    });
  });
});
