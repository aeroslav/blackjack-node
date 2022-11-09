import { Card } from "./card";
import { CardSuit, CardName } from "./model";

export class Deck {
  private cards: Card[];
  constructor() {
    this.cards = Object.values(CardSuit).reduce<Card[]>((acc, suit) => {
      const setForSuit = Object.values(CardName).map(
        (name) => new Card(suit, name)
      );

      return acc.concat(setForSuit);
    }, []);
  }

  public deal(count: number): Card[] {}
}
