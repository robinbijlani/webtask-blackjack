const Deck = require("./Deck");
const Hand = require("./Hand");

class Game {
  constructor(stored) {
    if (typeof stored === "object") {
      this.id = stored.id;
      this.winner = null;
      this.deck = new Deck(stored.deck);
      this.player = new Hand(stored.player.cards);
      this.dealer = new Hand(stored.dealer.cards);
    } else {
      this.id = Math.random()
        .toString(36)
        .substring(7);
      this.winner = null;
      this.deck = new Deck();
      this.deck.shuffle();

      this.player = new Hand(this.deck.deal(2));
      this.dealer = new Hand(this.deck.deal(1));
    }
  }

  summary() {
    let s = `Game ID: ${this.id}<br><br>
Your hand contains ${this.player.string()}.<br><br>
You have a total of ${this.player.total()}.<br><br>
The dealer's hand contains ${this.dealer.string()}.<br><br>
The dealer has a total of ${this.dealer.total()}.<br><br>`;

    switch (this.isComplete()) {
      case true:
        s += `The winner is ${this.winner}.<br><br>
            <a href="/webtask-blackjack">Let's play again</a>`;
        break;
      default:
        s += `<a href="/webtask-blackjack?id=${this
          .id}&action=hit">HIT me with another card, dealer.</a><br><br>
<a href="/webtask-blackjack?id=${this
          .id}&action=stand">Enough for me. I will STAND.</a><br><br>`;
    }

    return s;
  }

  lose() {
    this.winner = "dealer";
  }

  win() {
    this.winner = "player";
  }

  tie() {
    this.winner = "both";
  }

  isComplete() {
    return this.winner !== null;
  }

  hit() {
    this.player.add(this.deck.deal(1));
    if (this.player.total() > 21) {
      this.lose();
    }
  }

  stand() {
    while (this.dealer.total() < 17) {
      this.dealer.add(this.deck.deal(1));
    }

    if (this.dealer.total() > 21 || this.player.total() > this.dealer.total()) {
      return this.win();
    }

    if (this.player.total() < this.dealer.total()) {
      return this.lose();
    }

    return this.tie();
  }
}

module.exports = Game;
