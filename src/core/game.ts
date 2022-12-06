import { EventEmitter } from 'events';

import { Deck } from './deck';
import { GameState, GameTurn, PlayerState } from './model';
import { Player } from './player';

export class Game {
  // private _state: GameState = 'start';

  private deck = Deck.create();
  private player1 = Player.create(this.deck);
  private player2 = Player.create(this.deck);

  constructor(private id: string) {}

  nextTurn({ player, action }: GameTurn): void {
    if (player === null) {
      if (
        this.player1.state() === 'initial' &&
        this.player2.state() === 'initial'
      ) {
        this.dealCards();
        this.player1.play();
        this.player2.wait();
      }
    } else {
      if (this[`player${player}`].state() === 'active') {
        if (action === 'more') {
          this[`player${player}`].draw();
        }
        if (action === 'done') {
          this[`player${player}`].pass();
        }
      }
    }

    return this.currentState();
  }

  private currentState(): {
    state: GameState;
    player1: PlayerState;
    player2: PlayerState;
  } {
    throw new Error('Method not implemented.');
  }

  private dealCards() {
    this.player1.draw();
    this.player1.draw();
    this.player2.draw();
    this.player2.draw();
  }
}
