import { Card, CardValues, CardSuits } from "./card";

class Maze {
  constructor(){
    /**
     * @type {Card[]}
    */
    this.cards = [];
    this.pickUpIndex = [0];
    this.createCards();
  }

  // Private
  createCards() {
    Object.keys(CardValues).forEach((value) => {
      Object.keys(CardSuits).forEach((suit) => {
        this.cards.push(new Card(value, suit));
      })
    })
  }

  /**
   * Return maze of Cards
   * @returns {Card[]}
   */
  getCards() {
    return this.cards;
  }

  /**
   * Shuffle the maze
  */
  shuffle() {
    for (let i = 0; i < 52; i++) {
      const other = Math.floor(Math.random() * 52);
      const temp = this.cards[i];
      this.cards[i] = this.cards[other];
      this.cards[other] = temp;
    }
  }


  pickOne() {
    const card = this.cards[this.pickUpIndex[0]];
    this.pickUpIndex[0]++;
    return card;
  }
}

const maze = new Maze();
Object.freeze(maze);

export default maze;