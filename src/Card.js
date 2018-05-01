class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  string() {
    return `${this.rank} of ${this.suit}`;
  }

  isAce() {
    return this.rank === "Ace";
  }

  value() {
    if (this.rank === "Ace") {
      throw new Error("Can't retrieve the value of an Ace by itself, it must be evaluated within a Hand.");
    }

    if (typeof this.rank === "number") {
      return this.rank;
    }

    return 10;
  }

}

module.exports = Card;