import map from 'lodash/map';
import reduce from 'lodash/reduce';
import shuffle from 'lodash/shuffle';
import take from 'lodash/take';
import values from 'lodash/values';

import { Card } from './card';
import { CardSuit, CardName } from './model';

export class Deck {
    private cards: Card[];
    constructor() {
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

    public deal(count: number): Card[] {
        return take(this.cards, count);
    }
}
