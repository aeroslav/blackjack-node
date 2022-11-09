import { Card } from "./card";
import { Deck } from "./deck";
import { Hand } from "./model";

type PlayerState = "active" | "finished" | "waiting";

interface VisibleHand {
  inHand(): Hand;
}

export class Player {
  private state: PlayerState;
  private hand: Card[];

  constructor(private deck: Deck) {}

  public draw() {
    this.hand = this.hand.concat(this.deck.deal(1));
  }

  public pass() {}
}

export class Gambler extends Player implements VisibleHand {
  inHand(): Hand {}
}

export class Dealer extends Player implements VisibleHand {
  inHand(): Hand {}
}
