export const CardValues = {
  AS: 'A',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  SIX: '6',
  SEVEN: '7',
  EIGHT: '8',
  NINE: '9',
  TEN: '10',
  JACK: 'J',
  QUEEN: 'Q',
  KING: 'K',
}

export const CardSuits = {
  Hearts: 'Hearts',
  Spades: 'Spades',
  Clubs: 'Spades',
  Diamonds: 'Diamonds',
}

export class Card {
  /**
   * 
   * @param {CardValues} value 
   * @param {CardSuits} suit 
   */
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }

  printCart() {
    return `${this.value}-${this.suit}`;
  }
}
