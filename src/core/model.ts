import { Card } from './deck';

export enum CardSuit {
  Diamonds = 'Diamonds',
  Spades = 'Spades',
  Clubs = 'Clubs',
  Hearts = 'Hearts',
}

export enum CardName {
  Ace = 'Ace',
  Two = 'Two',
  Three = 'Three',
  Four = 'Four',
  Five = 'Five',
  Six = 'Six',
  Seven = 'Seven',
  Eight = 'Eight',
  Nine = 'Nine',
  Jack = 'Jack',
  Queen = 'Queen',
  King = 'King',
}

export type CardValue = number | [number, number];

export const CARD_VALUES: Record<CardName, CardValue> = {
  [CardName.Ace]: [1, 10],
  [CardName.Two]: 2,
  [CardName.Three]: 3,
  [CardName.Four]: 4,
  [CardName.Five]: 5,
  [CardName.Six]: 6,
  [CardName.Seven]: 7,
  [CardName.Eight]: 8,
  [CardName.Nine]: 9,
  [CardName.Jack]: 10,
  [CardName.Queen]: 10,
  [CardName.King]: 10,
};

export type Hand = Card[];

export type PlayerState =
  | 'initial' // just created
  | 'active' // can draw cards until reaches >= 21 OR pass
  | 'finished' // waiting for game end
  | 'waiting'; // waiting for other player to finish

export type GameState =
  | 'start' // deal
  | 'player1' // // draw or pass
  | 'player2' // draw or pass
  | 'end'; // define winner

export type GameTurn = {
  player: null | 1 | 2;
  action: 'more' | 'done';
};
