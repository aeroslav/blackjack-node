import map from 'lodash/map';
import reduce from 'lodash/reduce';
import shuffle from 'lodash/shuffle';
import take from 'lodash/take';
import values from 'lodash/values';

import { CardSuit, CardName, CARD_VALUES, CardValue } from './model';

export class Card {
  constructor(public suit: CardSuit, public name: CardName) {}

  getValue(): CardValue {
    return CARD_VALUES[this.name];
  }

  save() {
    return {
      suit: this.suit,
      name: this.name,
    };
  }
}

export class Deck {
  private readonly cards: Card[];

  private constructor() {
    const cards = reduce(
      values(CardSuit),
      (acc, suit) => {
        const setForSuit = map(
          values(CardName),
          (name) => new Card(suit, name)
        );

        return acc.concat(setForSuit);
      },
      [] as Card[]
    );

    this.cards = shuffle(cards);
  }

  public static create(): Deck {
    return new Deck();
  }

  public deal(count: number): Card[] {
    return take(this.cards, count);
  }
}
