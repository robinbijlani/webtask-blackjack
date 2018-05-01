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
      return 'Ace';
    }

    if (typeof this.rank === "number") {
      return this.rank;
    }

    return 10;
  }

}

module.exports = Card;