import { Action } from '@ngrx/store';
import { Card } from '../../../../core/models/card';

export const WIN = 'Card[] Win';
export const SET_ONE_CARD = 'Card[] Set one card';
export const TRY_MATCH_CARDS = 'Card[] Try match cars';
export const MATCH_CARDS_SUCCESS = 'Card[] Match cars success';
export const MATCH_CARDS_FAILED = 'Card[] Match cars failed';
export const GET_ALL_CARDS = 'Card[], Get All Cards';
export const GET_ALL_CARDS_PLAYGROUND_SECOND = 'Card[], Get All Cards Playground Second';
export const GET_ALL_CARDS_PLAYGROUND_THIRD = 'Card[], Get All Cards Playground Third';
export const SET_ALL_CARDS = 'Card[], Set All Cards';
export const SHOW_TEXT = 'Card[], Show text';
export const SELECTED_ONE_CARD = 'Card Selected Card';

export class GetallCards implements Action {
  readonly type = GET_ALL_CARDS;
  constructor(public count: number) { }
}

export class SetCards implements Action {
  readonly type = SET_ALL_CARDS;
  constructor(public payload: Card[]) { }
}

export class SelectOneCard implements Action {
  readonly type = SELECTED_ONE_CARD;
  constructor(public card: Card) { }
}

export class SetOneCard implements Action {
  readonly type = SET_ONE_CARD;
  constructor(public card: Card) { }
}

export class TryMatchCardsAction implements Action {
  readonly type = TRY_MATCH_CARDS;
  constructor(public card: Card) { }
}

export class MatchCardsSuccessAction implements Action {
  readonly type = MATCH_CARDS_SUCCESS;
  constructor(public pairId: number) { }
}

export class WinAction implements Action {
  readonly type = WIN;
  constructor() { }
}

export class MatchCardsFailedAction implements Action {
  readonly type = MATCH_CARDS_FAILED;
  constructor() { }
}

export class ShowText implements Action {
  readonly type = SHOW_TEXT;
  constructor(public payload: string) { }
}

export type Action =
  GetallCards | SetCards | SelectOneCard | ShowText | TryMatchCardsAction | MatchCardsFailedAction | MatchCardsSuccessAction | SetOneCard;
