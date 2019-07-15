import { Action } from '@ngrx/store';
import { Card } from '../../../../core/models/card';

export const GET_ALL_CARDS_PLAYGROUND_FIRST = 'Card[], Get All Cards Playground First';
export const GET_ALL_CARDS_PLAYGROUND_SECOND = 'Card[], Get All Cards Playground Second';
export const GET_ALL_CARDS_PLAYGROUND_THIRD = 'Card[], Get All Cards Playground Third';
export const SET_ALL_CARDS = 'Card[], Set All Cards';
export const SHOW_TEXT ='Card[], Show text';
export const SELECTED_ONE_CARD = 'Card Selected Card';

export class GetallCardsPlaygroundFirst implements Action {
  readonly type = GET_ALL_CARDS_PLAYGROUND_FIRST;
  constructor() { }
}

export class GetallCardsPlaygroundSecond implements Action {
  readonly type = GET_ALL_CARDS_PLAYGROUND_SECOND;
  constructor() { }
}

export class GetallCardsPlaygroundThird implements Action {
  readonly type = GET_ALL_CARDS_PLAYGROUND_THIRD;
  constructor() { }
}

export class SetallCards implements Action {
  readonly type = SET_ALL_CARDS;
  constructor(public payload: Card[]) { }
}

export class SelectedOneCard implements Action {
  readonly type = SELECTED_ONE_CARD;
  constructor(public payload: Card) { }
}

export class ShowText implements Action {
  readonly type = SHOW_TEXT;
  constructor(public payload: string) { }
}

export type Action =
  GetallCardsPlaygroundFirst | GetallCardsPlaygroundSecond |
  GetallCardsPlaygroundThird | SetallCards | SelectedOneCard | ShowText;
