import type { CardSuit, CardName } from './model';

export class Card {
  // eslint-disable-next-line @typescript-eslint/indent
  constructor(public suit: CardSuit, public name: CardName) {}
}
