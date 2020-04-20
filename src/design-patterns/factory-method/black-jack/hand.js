import { Card } from "./card";

export class Hand {
  constructor() {
    /** @type {Card[]} */
    this.cards = [];
  }

  /**
   * Add card to the hand
   * @param {Card} card
   * @returns {number}
   */
  addCard(card) {
    this.cards.push(card);
  }

  /**
   * Get value of the hand
   * @returns {number}
   */
  getValue() {
    return this.cards.reduce((t, c) => t + this.getValueCard(c), 0);
  }

  /**
   * Get value of the card
   * @param {Card} card
   * @returns {number}
   */
  getValueCard(card) {
    if (card.value === 'JACK' || card.value === 'QUEEN' || card.value === 'KING') {
      return 10;
    } else if (card.value === 'AS') {
      return 11;
    }
    switch(card.value) {
      case 'TWO':
        return 2;
      case 'THREE':
        return 3;
      case 'FOUR':
        return 4;
      case 'FIVE':
        return 5;
      case 'SIX':
        return 6;
      case 'SEVEN':
        return 7;
      case 'EIGHT':
        return 8;
      case 'NINE':
        return 9;
      case 'TEN':
        return 10;                       
    }
  }

  /**
   * Return carts resume
   * @returns {string}
   */
  printHand() {
    let text = this.cards.reduce((t, c) => t + c.printCart() + ', ', '');
    text = text.substring(0, text.length - 3);
    return text;
  }
}