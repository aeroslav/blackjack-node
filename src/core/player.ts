import find from 'lodash/find';
import map from 'lodash/map';
import { Card, Deck } from './deck';
import { CardValue, GameTurn, PlayerState } from './model';

export class Player {
  private _state: PlayerState = 'initial';
  private hand: Card[] = [];

  private constructor(private deck: Deck) {}

  static create(deck: Deck): Player {
    return new Player(deck);
  }

  state() {
    return this._state;
  }

  draw(): void {
    this.hand = this.hand.concat(this.deck.deal(1));

    if (find(this.points(), (pointsSum) => pointsSum >= 21)) {
      this.pass();
    }
  }

  points(): number[] {
    return this.combineValues(map(this.hand, (card) => card.getValue()));
  }

  play() {
    this._state = 'active';
  }

  pass(): void {
    this._state = 'finished';
  }

  wait(): void {
    this._state = 'waiting';
  }

  save() {
    return {
      state: this.state,
      hand: this.hand.map((card) => card.save()),
    };
  }

  private combineValues(cardValues: CardValue[]): number[] {}
}
