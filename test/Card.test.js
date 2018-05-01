const Card = require("../src/Card");
const expect = require("chai").expect;

describe("Card", () => {
  describe(".string()", () => {
    it("should return the name of the card", () => {
      let provider = [
        { card: new Card(2, "Spades"), expected: "2 of Spades" },
        { card: new Card("Ace", "Diamonds"), expected: "Ace of Diamonds" },
        { card: new Card("Jack", "Clubs"), expected: "Jack of Clubs" },
        { card: new Card(7, "Hearts"), expected: "7 of Hearts" }
      ];

      provider.map(c => {
        if (c.card.string() !== c.expected) {
          throw new Error(`Expected ${c.expected} but got ${c.card.string()}`);
        }
      });
    });
  });

  describe(".value()", () => {
    it("should throw an error if called on an Ace", () => {
      let card = new Card("Ace", "Diamonds");
      expect(() => card.value()).to.throw();
    });
  });
});
