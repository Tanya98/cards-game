import { Action } from '@ngrx/store';
import { Card } from '../../../../core/models/card';

export const GET_ALL_CARDS = 'Card[], Get All Cards';
export const SET_ALL_CARDS = 'Card[], Set All Cards';
export const SELECTED_ONE_CARD = 'Card Selected Card';
export const CHECK_CARD = 'Card Check Card';
export const REMOVE_TWO_CARDS = 'Card[], Select Two Cards';

export class GetallCards implements Action {
  readonly type = GET_ALL_CARDS;
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

export class CheckCard implements Action {
  readonly type = CHECK_CARD;
  constructor(public payload: Card) { }
}

export class RemoveTwoCards implements Action {
  readonly type = REMOVE_TWO_CARDS;
  constructor() { }
}

export type Action = GetallCards | SetallCards | SelectedOneCard | CheckCard | RemoveTwoCards;
