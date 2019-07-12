import {Action} from "@ngrx/store";
import {Card} from "../../../../core/models/card";

export const GET_ALL_CARDS = 'Card[], Get All Cards';
export const SET_ALL_CARDS = 'Card[], Set All Cards';
export const SELECT_TWO_CARDS = 'Card[], Select Two Cards';

export class GetallCards implements Action{
  readonly  type = GET_ALL_CARDS;
  constructor(){}
}

export class SetallCards implements Action{
  readonly  type = SET_ALL_CARDS;
  constructor(public payload: Card[]){}
}

export class SelectTwoCards implements Action{
  readonly  type = SELECT_TWO_CARDS;
  constructor(public id1: number, public id2: number){}
}

export type Action = GetallCards | SetallCards | SelectTwoCards;
