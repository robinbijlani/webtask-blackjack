const Card = require('./Card');

const suits = ["Diamonds", "Hearts", "Spades", "Clubs"];

const ranks = [
  "Ace",
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "Jack",
  "Queen",
  "King"
];


class Deck {
  constructor(stored) {
    if (typeof stored === "object"){
      this.cards = [];
      stored.cards.map(card => this.cards.push(new Card(card.rank, card.suit)));
    } else {
      this.cards = [];
      suits.map(suit => 
        ranks.map(rank => this.cards.push(new Card(rank, suit)))
      );
    }

  }

  shuffle() {
    let i = 0;
    let j = 0;
    let temp = [];

    for (i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      temp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = temp
    }
  }

  deal(n) {
    let dealt = [];

    for (let i = 0; i < n; i++) {
      dealt.push(this.cards.shift());
    }
    
    return dealt;
  }
}

module.exports = Deck;