import maze from "./maze";
import { Hand } from "./hand";

export class BlackJack {
  /**
   * Create BlackJack game
   * @param {number} players 
   */
  constructor(players) {
    this.maze = maze;
    this.players = players;
    /** @type {Hand[]} */
    this.hands = [];
    this.dealerHand = new Hand();
    maze.shuffle();
    this.createHands();
  }

  createHands() {
    for (let i = 0; i < this.players; i++) {
      this.hands.push(new Hand());
    }
  }

  simulateRound() {
    this.deliver();
    this.printTable();
    for (let i = 0; i < this.players; i++) {
      this.play(i + 1);
    }
    // Play dealer
    this.play(0);
    this.printTable();
    this.getWinner();
  }

  deliver() {
    for (let i = 0; i < this.players; i++) {
      this.hands[i].addCard(maze.pickOne());
    }
    this.dealerHand.addCard(maze.pickOne());
    for (let i = 0; i < this.players; i++) {
      this.hands[i].addCard(maze.pickOne());
    }
    this.dealerHand.addCard(maze.pickOne());
  }

  printTable() {
    for (let i = 0; i < this.players; i++) {
      console.log(`Hand player ${i + 1}: ${this.hands[i].printHand()}, value: ${this.hands[i].getValue()}`);
    }
    console.log(`Hand dealer: ${this.dealerHand.printHand()}, value: ${this.dealerHand.getValue()}`);
  }

  play(player) {
    const value = player > 0 ? this.hands[player-1].getValue() : this.dealerHand.getValue();
    if (value === 21) {
      // Finish
      console.log(player > 0 ? `Player ${player} got 21 !` : `Dealer got 21 !`);
      return;
    }
    if (value > 21) {
      // Lost and finish
      console.log(player > 0 ? `Player ${player} is passed, so he is out :(` : `Dealer is passed, so he is out :(`);
      return;
    }
    if (value <= 10) {
      // Play for sure another card
      const newCard = maze.pickOne();
      console.log(player > 0 ? `Player ${player} pick a new Card: `: `Dealer pick a new Card: `, newCard.printCart());
      player > 0 ? this.hands[player-1].addCard(newCard) : this.dealerHand.addCard(newCard);
      return this.play(player);
    }
    if (value >= 19) {
      // Stop playing
      console.log(player > 0 ? `Player ${player} stop picking cards with ${value} points` : `Dealer stop picking cards with ${value} points`);
      return;
    }
    const another = Math.random();
    if (another > 0.5) {
      const newCard = maze.pickOne();
      console.log(player > 0 ? `Player ${player} pick a new Card: `: `Dealer pick a new Card: `, newCard.printCart());
      player > 0 ? this.hands[player-1].addCard(newCard) : this.dealerHand.addCard(newCard);
      return this.play(player);
    }
    console.log(player > 0 ? `Player ${player} stop picking cards with ${value} points` : `Dealer stop picking cards with ${value} points`);
    return;
  }

  getWinner() {
    const results = [];
    this.hands.forEach((hand, i) => results.push({ player: i, value: hand.getValue() }));
    results.sort((a, b) => a.value - b.value);
    if (results[0].value > this.dealerHand.getValue()) {
      console.log(`Player ${results[0].player} WINS`);
    } else {
      console.log(' Dealer WINS ');
    }
  }

}