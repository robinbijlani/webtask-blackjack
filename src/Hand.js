const Card = require("./Card");

class Hand {
  constructor(cards) {
    this.cards = [];

    cards.map(card => this.cards.push(new Card(card.rank, card.suit)));
  }

  string() {
    let a = [];
    this.cards.map(card => a.push(card.string()));
    return a.join(", ");
  }

  add(cards) {
    this.cards = this.cards.concat(cards);
  }

  total() {
    let t = 0;
    let aces = 0;
    this.cards.map(card => {
      if (card.isAce()) {
        aces++;
        t += 11;
      } else {
        t += card.value();
      }
    });

    while (t > 21 && aces > 0) {
      aces--;
      t = t-10;
    }

    return t;
  }
}

module.exports = Hand;
