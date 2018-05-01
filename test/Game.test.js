const Game = require("../src/Game");

describe("Game", () => {
  describe(".isComplete()", () => {
    it("should be true if there is a winner set", () => {
      let game = new Game();

      if (game.isComplete()) {
        throw new Error("A brand new Game should not be complete");
      }

      game.win();

      if (!game.isComplete()) {
        throw new Error("A Game should be completed after setting a winner");
      }
    });
  });

  describe(".hit()", () => {
    it("should reduce the deck size by one card", () => {
      let game = new Game();
      let deckSize = game.deck.cards.length;

      game.hit();

      if (game.deck.cards.length !== deckSize - 1) {
        throw new Error("Expected deck size to be reduced by one");
      }
    });
  });

  describe(".stand()", () => {
    it("should deal cards until the dealer's hand totals at least 17", () => {
      for (let i = 0; i < 10; i++) {
        let game = new Game();
        game.stand();

        if (game.dealer.total() < 17) {
          throw new Error("Dealer's hand totalled only ${game.dealer.total()}");
        }
      }
    });

    it("should always result in a winner or tie", () => {
      for (let i = 0; i < 10; i++) {
        let game = new Game();
        game.stand();

        if (!game.isComplete()) {
          throw new Error("Game was not completed");
        }
      }
    });
  });
});
