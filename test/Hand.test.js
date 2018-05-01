const Hand = require("../src/Hand");
const Card = require("../src/Card");

describe("Hand", () => {
  describe(".total()", () => {
    it("should add up all card values, respecting Aces", () => {
      let provider = [
        { ranks: ["Ace"], expected: 11 },
        { ranks: [2, 6, 8, 3], expected: 19 },
        { ranks: ["Queen", "Ace"], expected: 21 },
        { ranks: ["Queen", 3, 7, 2, 4], expected: 26 },
        { ranks: ["Ace", "Queen", "Ace", "Ace"], expected: 13 },
        { ranks: ["Ace", "Queen", "Ace", "Ace", "Jack"], expected: 23 }
      ];

      provider.map(c => {
        let cards = [];
        c.ranks.map(rank => cards.push(new Card(rank, "Clubs")));

        let hand = new Hand(cards);
        if (hand.total() !== c.expected) {
          throw new Error(`Expected ${c.expected} but got ${hand.total()}`);
        }
      });
    });
  });
});
