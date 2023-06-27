import { Card } from '../card/card';

export class Section {
  identifier?: string;
  title?: string;
  weight?: number;
  cards?: Card[];

  constructor(
    identifier?: string,
    title?: string,
    weight?: number,
    cards?: Card[]
  ) {
    this.identifier = identifier;
    this.title = title;
    this.weight = weight;
    this.cards = cards;
  }
}
